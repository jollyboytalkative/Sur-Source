import React, { useMemo, useState } from 'react';
import {
  Search,
  ExternalLink,
  Download,
  Copy,
  Sparkles,
  Disc,
  RotateCcw,
} from 'lucide-react';
import {
  AdaptationType,
  DirectorId,
  MovieEntry,
  OriginCategory,
  SongEntry,
} from '../types/archive';

export interface FlattenedSongRow extends SongEntry {
  movieTitle: string;
  movieYear: number;
}

interface SongOriginTableProps {
  directorId: DirectorId;
  movies: MovieEntry[];
  selectedMovieFilter: string;
  onChangeMovieFilter: (movieId: string) => void;
}

type StatusFilter = 'all' | 'adapted' | 'original';
type SortMode = 'priority' | 'year-asc' | 'year-desc' | 'movie';

const ORIGIN_CATEGORIES: OriginCategory[] = [
  'Pakistani Film & Ghazal',
  'Nusrat Fateh Ali Khan',
  'Arabic & Middle Eastern',
  'Western Pop & Ambient',
  'African & World Folk',
  'Indian Folk & Classical',
  'Original Composition',
];

export const SongOriginTable: React.FC<SongOriginTableProps> = ({
  directorId,
  movies,
  selectedMovieFilter,
  onChangeMovieFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [originFilter, setOriginFilter] = useState<string>('all');
  const [sortMode, setSortMode] = useState<SortMode>('priority');

  const allRows: FlattenedSongRow[] = useMemo(() => {
    const list: FlattenedSongRow[] = [];
    movies.forEach((movie) => {
      movie.songs.forEach((s) => {
        list.push({
          ...s,
          movieTitle: movie.title,
          movieYear: movie.year,
        });
      });
    });
    return list;
  }, [movies]);

  const filteredRows = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    const filtered = allRows.filter((row) => {
      if (selectedMovieFilter !== 'all' && row.movieId !== selectedMovieFilter) {
        return false;
      }
      if (statusFilter === 'adapted' && row.adaptationType === 'original') {
        return false;
      }
      if (statusFilter === 'original' && row.adaptationType !== 'original') {
        return false;
      }
      if (originFilter !== 'all' && row.originCategory !== originFilter) {
        return false;
      }
      if (q) {
        const haystack = [
          row.movieTitle,
          String(row.movieYear),
          row.title,
          row.singers,
          row.originalSongTitle ?? '',
          row.originalArtist ?? '',
          row.originCategory,
          row.adaptationNotes ?? '',
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    const priorityRank = (t: AdaptationType) =>
      t === 'copied' ? 0 : t === 'inspired' ? 1 : 2;

    return [...filtered].sort((a, b) => {
      if (sortMode === 'priority') {
        const diff = priorityRank(a.adaptationType) - priorityRank(b.adaptationType);
        if (diff !== 0) return diff;
        return a.movieYear - b.movieYear || a.movieTitle.localeCompare(b.movieTitle);
      }
      if (sortMode === 'year-asc') {
        return a.movieYear - b.movieYear || a.movieTitle.localeCompare(b.movieTitle);
      }
      if (sortMode === 'year-desc') {
        return b.movieYear - a.movieYear || a.movieTitle.localeCompare(b.movieTitle);
      }
      return a.movieTitle.localeCompare(b.movieTitle) || a.movieYear - b.movieYear;
    });
  }, [allRows, searchQuery, selectedMovieFilter, statusFilter, originFilter, sortMode]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setOriginFilter('all');
    onChangeMovieFilter('all');
  };

  const handleExportCsv = () => {
    const headers = [
      'Year',
      'Movie',
      'Bollywood Song',
      'Singers',
      'Classification',
      'Original Song',
      'Original Artist',
      'Origin Category',
      'Notes',
      'Movie Version Link',
      'Original Source Link',
    ];
    const escape = (val: string | number | undefined) => {
      const str = String(val ?? '');
      return `"${str.replace(/"/g, '""')}"`;
    };
    const lines = [
      headers.join(','),
      ...filteredRows.map((r) =>
        [
          escape(r.movieYear),
          escape(r.movieTitle),
          escape(r.title),
          escape(r.singers),
          escape(
            r.adaptationType === 'copied'
              ? 'Close Similarity'
              : r.adaptationType === 'inspired'
                ? 'Inspired'
                : 'Original'
          ),
          escape(r.originalSongTitle ?? ''),
          escape(r.originalArtist ?? ''),
          escape(r.originCategory),
          escape(r.adaptationNotes ?? ''),
          escape(r.bollywoodLink),
          escape(r.originalLink ?? ''),
        ].join(',')
      ),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${directorId}-song-origins.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const renderClassification = (type: AdaptationType) => {
    if (type === 'copied') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] whitespace-nowrap">
          <Copy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Close Similarity</span>
        </span>
      );
    }
    if (type === 'inspired') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Inspired</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#14532D] whitespace-nowrap">
        <Disc className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Original</span>
      </span>
    );
  };

  const hasActiveFilter =
    searchQuery.trim() !== '' ||
    statusFilter !== 'all' ||
    originFilter !== 'all' ||
    selectedMovieFilter !== 'all';

  return (
    <section id="song-origin-table" className="py-10 border-b border-[#E4DDD0]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#1C1917] tracking-tight">
              Song &amp; Original Source Table
            </h2>
            <p className="text-sm text-[#57534E] mt-1 max-w-2xl">
              Compare Bollywood soundtrack recordings side-by-side with documented closely
              similar or inspired originals, complete with external listening links for both versions.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-xs text-[#6B655D] tabular-nums whitespace-nowrap">
              {filteredRows.length} of {allRows.length} tracks
            </span>
            <button
              type="button"
              onClick={handleExportCsv}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#1C1917] bg-[#FFFFFF] border border-[#D6CEBE] rounded-md hover:bg-[#F2EDE4] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Workspace Toolbar */}
        <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-t-lg p-4 space-y-3">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="w-4 h-4 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movie, song, original track, or artist..."
                aria-label="Search songs and original sources"
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#FBF9F5] border border-[#D6CEBE] rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#9A3412]"
              />
            </div>

            {/* Segmented Status Controls (Strictly 3 Tabs) */}
            <div
              role="group"
              aria-label="Filter by adaptation status"
              className="flex items-center gap-1 p-1 bg-[#F2EDE4] rounded-md overflow-x-auto"
            >
              {(
                [
                  { id: 'all', label: 'All Tracks' },
                  { id: 'adapted', label: 'Close Similarity / Inspired' },
                  { id: 'original', label: 'Original' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setStatusFilter(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    statusFilter === tab.id
                      ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#F2EDE4]">
            <label className="flex items-center gap-2 text-xs text-[#57534E]">
              <span className="font-medium whitespace-nowrap">Movie:</span>
              <select
                value={selectedMovieFilter}
                onChange={(e) => onChangeMovieFilter(e.target.value)}
                className="px-2.5 py-1.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412] max-w-[220px]"
              >
                <option value="all">All Movies ({movies.length})</option>
                {movies.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.title} ({m.year})
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-xs text-[#57534E]">
              <span className="font-medium whitespace-nowrap">Origin Region:</span>
              <select
                value={originFilter}
                onChange={(e) => setOriginFilter(e.target.value)}
                className="px-2.5 py-1.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412] max-w-[220px]"
              >
                <option value="all">All Source Regions</option>
                {ORIGIN_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-xs text-[#57534E]">
              <span className="font-medium whitespace-nowrap">Sort:</span>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as SortMode)}
                className="px-2.5 py-1.5 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
              >
                <option value="priority">Close Similarity / Inspired First</option>
                <option value="year-asc">Year (Oldest First)</option>
                <option value="year-desc">Year (Newest First)</option>
                <option value="movie">Movie Title (A–Z)</option>
              </select>
            </label>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-auto inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#9A3412] hover:underline cursor-pointer whitespace-nowrap shrink-0"
              >
                <RotateCcw className="w-3 h-3" aria-hidden="true" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* High-Density Archival Data Table */}
        <div className="bg-[#FFFFFF] border-x border-b border-[#E4DDD0] rounded-b-lg overflow-x-auto">
          {filteredRows.length === 0 ? (
            <div className="py-14 px-6 text-center">
              <p className="font-serif text-xl text-[#1C1917] mb-1">
                No matching tracks found
              </p>
              <p className="text-xs text-[#6B655D] mb-4">
                Try clearing your search query or switching back to all source categories.
              </p>
              <button
                type="button"
                onClick={handleResetFilters}
                className="px-3.5 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] transition-colors cursor-pointer"
              >
                Show All Tracks
              </button>
            </div>
          ) : (
            <table className="w-full text-left border-collapse min-w-[920px]">
              <thead>
                <tr className="border-b border-[#E4DDD0] bg-[#FBF9F5] text-[11px] font-semibold uppercase tracking-wider text-[#6B655D]">
                  <th className="py-3 px-4 w-[18%]">Movie &amp; Year</th>
                  <th className="py-3 px-4 w-[24%]">Bollywood Song</th>
                  <th className="py-3 px-4 w-[12%]">Status</th>
                  <th className="py-3 px-4 w-[28%]">Reported Close Similarity / Inspired Origin</th>
                  <th className="py-3 px-4 w-[18%] text-right">External Links</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFEAE0] text-sm">
                {filteredRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#FBF9F5]/80 transition-colors align-top"
                  >
                      {/* Movie & Year */}
                      <td className="py-3.5 px-4">
                        <button
                          type="button"
                          onClick={() => onChangeMovieFilter(row.movieId)}
                          title="Filter table to this movie"
                          className="text-left font-semibold text-[#1C1917] hover:text-[#9A3412] hover:underline underline-offset-2 cursor-pointer block leading-snug"
                        >
                          {row.movieTitle}
                        </button>
                        <div className="font-mono text-xs text-[#6B655D] tabular-nums mt-0.5">
                          {row.movieYear}
                        </div>
                      </td>

                      {/* Bollywood Song */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-[#1C1917] leading-snug">
                          {row.title}
                        </div>
                        <div className="text-xs text-[#6B655D] mt-0.5 leading-snug">
                          {row.singers}
                          {row.lyricist ? ` · Lyrics: ${row.lyricist}` : ''}
                        </div>
                      </td>

                      {/* Classification */}
                      <td className="py-3.5 px-4 pt-4">
                        {renderClassification(row.adaptationType)}
                      </td>

                      {/* Original Source */}
                      <td className="py-3.5 px-4">
                        {row.adaptationType === 'original' ? (
                          <div>
                            <span className="text-xs text-[#6B655D]">
                              {row.originCategory}
                            </span>
                            {row.adaptationNotes && (
                              <p className="text-xs text-[#78716C] mt-0.5 leading-relaxed">
                                {row.adaptationNotes}
                              </p>
                            )}
                          </div>
                        ) : (
                          <div>
                            <div className="font-medium text-[#1C1917] leading-snug">
                              {row.originalSongTitle}
                            </div>
                            <div className="text-xs text-[#57534E] mt-0.5">
                              {row.originalArtist}
                              {row.originalYear ? ` · ${row.originalYear}` : ''}
                            </div>
                            <div className="text-[11px] text-[#78716C] mt-0.5">
                              {row.originCategory}
                              {row.referenceSource ? (
                                row.sourceUrl ? (
                                  <>
                                    {' · Ref: '}
                                    <a
                                      href={row.sourceUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#9A3412] hover:underline"
                                    >
                                      {row.referenceSource}
                                    </a>
                                  </>
                                ) : (
                                  ` · Ref: ${row.referenceSource}`
                                )
                              ) : null}
                            </div>
                            {row.adaptationNotes && (
                              <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                                {row.adaptationNotes}
                              </p>
                            )}
                          </div>
                        )}
                      </td>

                      {/* Dual External Links */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="inline-flex flex-col items-end gap-1.5">
                          <a
                            href={row.bollywoodLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-[#D6CEBE] rounded hover:border-[#9A3412] hover:text-[#9A3412] transition-colors whitespace-nowrap"
                          >
                            <span>Movie Version</span>
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>

                          {row.originalLink ? (
                            <a
                              href={row.originalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={
                                row.originalSongTitle
                                  ? `Open closest original source: ${row.originalSongTitle}`
                                  : 'Open closest original source video'
                              }
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#9A3412] bg-[#9A3412]/5 border border-[#9A3412]/25 rounded hover:bg-[#9A3412]/10 transition-colors whitespace-nowrap"
                            >
                              <span>Original Source</span>
                              <ExternalLink className="w-3 h-3" aria-hidden="true" />
                            </a>
                          ) : (
                            <span className="text-[11px] text-[#A8A29E] px-1">
                              No external original
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};
