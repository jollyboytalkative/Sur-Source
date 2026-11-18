import React, { useMemo, useState } from 'react';
import {
  Search,
  X,
  ExternalLink,
  Copy,
  Sparkles,
  Disc,
  ArrowRight,
  Music2,
} from 'lucide-react';
import type {
  AdaptationType,
  DirectorId,
  DirectorProfile,
  MovieEntry,
} from '../types/archive';
import { toDirectPlayHref } from '../lib/youtubeLink';
import {
  buildMasterSearchIndex,
  searchMasterArchive,
  type MasterSongHit,
} from '../lib/masterSearch';

interface MasterArchiveSearchProps {
  allMovies: MovieEntry[];
  directors: DirectorProfile[];
  onOpenInDirectorArchive: (directorId: DirectorId, movieId?: string) => void;
  onNavigateContact: () => void;
}

type MasterStatusFilter = 'all' | 'adapted' | 'copied' | 'inspired' | 'original';

const QUICK_SEARCH_EXAMPLES = [
  'Jab bhi koi ladki dekhu',
  'Ole Ole',
  'Yeh Dillagi',
  'Tujhe Dekha To',
  'Tip Tip Barsa',
  'Chura Liya',
  'Tequila',
];

export const MasterArchiveSearch: React.FC<MasterArchiveSearchProps> = ({
  allMovies,
  directors,
  onOpenInDirectorArchive,
  onNavigateContact,
}) => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<MasterStatusFilter>('all');
  const [visibleLimit, setVisibleLimit] = useState(25);

  const searchIndex = useMemo(
    () => buildMasterSearchIndex(allMovies, directors),
    [allMovies, directors]
  );

  const totalSongCount = useMemo(
    () => allMovies.reduce((acc, m) => acc + m.songs.length, 0),
    [allMovies]
  );

  const results = useMemo(
    () => searchMasterArchive(searchIndex, query, statusFilter),
    [searchIndex, query, statusFilter]
  );

  const trimmedQuery = query.trim();
  const isSearching = trimmedQuery.length >= 2;

  const handleQueryChange = (val: string) => {
    setQuery(val);
    setVisibleLimit(25);
  };

  const handleClear = () => {
    setQuery('');
    setStatusFilter('all');
    setVisibleLimit(25);
  };

  const renderClassification = (type: AdaptationType) => {
    if (type === 'copied') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9A3412] whitespace-nowrap shrink-0">
          <Copy className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Close Similarity</span>
        </span>
      );
    }
    if (type === 'inspired') {
      return (
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A8A] whitespace-nowrap shrink-0">
          <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>Inspired / Adapted</span>
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#14532D] whitespace-nowrap shrink-0">
        <Disc className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        <span>Original Composition</span>
      </span>
    );
  };

  const renderSongHit = (hit: MasterSongHit) => {
    const { song, movie, director, matchedCue } = hit;
    const isAdapted = song.adaptationType !== 'original';
    const moviePlayHref = toDirectPlayHref(song.bollywoodLink, {
      title: song.title,
      movie: `${movie.title} ${movie.year}`,
      kind: 'movie',
    });
    const originalPlayHref = song.originalLink
      ? toDirectPlayHref(song.originalLink, {
          title: song.originalSongTitle ?? '',
          artist: song.originalArtist ?? '',
          kind: 'original',
        })
      : '';

    return (
      <article
        key={`${director.id}-${movie.id}-${song.id}`}
        className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-4 sm:p-5 space-y-3"
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#1C1917] leading-snug">
              {song.title}
            </h3>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#57534E] mt-1">
              <button
                type="button"
                onClick={() => onOpenInDirectorArchive(director.id)}
                className="font-semibold text-[#9A3412] hover:underline underline-offset-4 cursor-pointer"
              >
                {director.name}
              </button>
              <span aria-hidden="true" className="text-[#C7BEB0]">
                ·
              </span>
              <span className="font-medium text-[#1C1917]">
                {movie.title} ({movie.year})
              </span>
              <span aria-hidden="true" className="text-[#C7BEB0]">
                ·
              </span>
              <span>{song.singers}</span>
              {song.lyricist && (
                <>
                  <span aria-hidden="true" className="text-[#C7BEB0]">
                    ·
                  </span>
                  <span>Lyrics: {song.lyricist}</span>
                </>
              )}
            </div>
          </div>

          <div className="pt-0.5 shrink-0">
            {renderClassification(song.adaptationType)}
          </div>
        </div>

        {matchedCue && (
          <div className="text-xs text-[#44403C] bg-[#FBF9F5] border border-[#EFEAE0] rounded px-3 py-1.5">
            <span className="font-medium text-[#78716C]">Matched lyric cue: </span>
            <span className="italic">“{matchedCue}”</span>
          </div>
        )}

        {isAdapted ? (
          <div className="bg-[#FBF9F5] border border-[#E4DDD0] rounded-md px-3.5 py-2.5 space-y-1.5 text-xs">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[#1C1917]">
              <span className="font-semibold text-[#57534E] uppercase tracking-wider text-[11px]">
                Reported Source:
              </span>
              <span className="font-semibold">
                {song.originalSongTitle ?? 'Documented Pre-Existing Composition'}
              </span>
              {song.originalArtist && (
                <span className="text-[#57534E]">
                  by {song.originalArtist}
                  {song.originalYear ? ` (${song.originalYear})` : ''}
                </span>
              )}
              <span aria-hidden="true" className="text-[#C7BEB0]">
                ·
              </span>
              <span className="text-[#6B655D]">{song.originCategory}</span>
            </div>
            {song.adaptationNotes && (
              <p className="text-[#44403C] leading-relaxed">{song.adaptationNotes}</p>
            )}
            {song.referenceSource && (
              <div className="text-[11px] text-[#78716C]">
                Reference: {song.referenceSource}
              </div>
            )}
          </div>
        ) : (
          <div className="text-xs text-[#57534E]">
            <span>Verified studio original composition in {director.name}’s Hindi filmography.</span>
            {song.adaptationNotes && (
              <span className="text-[#44403C]"> {song.adaptationNotes}</span>
            )}
          </div>
        )}

        <div className="pt-1 flex flex-wrap items-center gap-3 text-xs">
          <a
            href={moviePlayHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-[#FBF9F5] bg-[#9A3412] rounded hover:bg-[#7C2D12] transition-colors whitespace-nowrap shrink-0"
          >
            <Music2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Listen to Movie Version</span>
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>

          {isAdapted && originalPlayHref && (
            <a
              href={originalPlayHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-[#1E3A8A] bg-[#FFFFFF] border border-[#C7D2FE] rounded hover:bg-[#EFF6FF] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Listen to Original Source</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          )}

          <button
            type="button"
            onClick={() => onOpenInDirectorArchive(director.id, movie.id)}
            className="inline-flex items-center gap-1 text-[#57534E] hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors cursor-pointer whitespace-nowrap ml-auto"
          >
            <span>View {movie.title} in {director.name} Archive</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </article>
    );
  };

  return (
    <section
      id="master-search"
      aria-label="Master Archive Search"
      className="bg-[#F4EFE6] border-b border-[#E4DDD0] py-7 md:py-9"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B655D]">
            <span className="font-mono uppercase tracking-wider text-[#9A3412] font-medium">
              Master Archive Search
            </span>
            <span aria-hidden="true">·</span>
            <span>
              Search across all {directors.length} Bollywood music directors ({allMovies.length.toLocaleString('en-US')} Hindi films · {totalSongCount.toLocaleString('en-US')} songs)
            </span>
          </div>
          {isSearching && (
            <span className="font-mono text-xs text-[#57534E] tabular-nums whitespace-nowrap">
              {results.totalMatchedSongs} {results.totalMatchedSongs === 1 ? 'song' : 'songs'} · {results.totalMatchedMovies} {results.totalMatchedMovies === 1 ? 'movie' : 'movies'} matched
            </span>
          )}
        </div>

        {/* Prominent Master Search Input */}
        <div className="relative">
          <Search
            className="w-5 h-5 text-[#9A3412] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            placeholder="Search any Hindi song, opening lyric line (e.g. 'jab bhi koi ladki dekhu'), movie, music director, or original track..."
            aria-label="Master search across all music directors, Hindi movies, songs, and lyric cues"
            className="w-full min-h-[54px] pl-12 pr-12 py-3 text-sm sm:text-base bg-[#FFFFFF] border border-[#D6CEBE] rounded-lg text-[#1C1917] placeholder:text-[#78716C] shadow-xs focus:outline-none focus:border-[#9A3412] focus:ring-2 focus:ring-[#9A3412]/15 transition-shadow"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-[#78716C] hover:text-[#1C1917] rounded cursor-pointer transition-colors"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Quick Search Examples when Idle */}
        {!isSearching && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#6B655D]">
            <span>Try searching:</span>
            {QUICK_SEARCH_EXAMPLES.map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleQueryChange(example)}
                className="px-2.5 py-1 text-xs font-medium text-[#44403C] bg-[#FFFFFF] border border-[#DFD8CA] rounded hover:border-[#9A3412] hover:text-[#9A3412] transition-colors cursor-pointer whitespace-nowrap"
              >
                {example}
              </button>
            ))}
          </div>
        )}

        {/* Search Results Panel */}
        {isSearching && (
          <div className="mt-5 space-y-5">
            {/* Classification Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div
                role="group"
                aria-label="Filter master search results by classification"
                className="flex items-center gap-1 p-1 bg-[#EAE3D5] rounded-md overflow-x-auto"
              >
                {(
                  [
                    { id: 'all', label: 'All Matches' },
                    { id: 'adapted', label: 'Close Similarity & Inspired' },
                    { id: 'copied', label: 'Close Similarity Only' },
                    { id: 'inspired', label: 'Inspired Only' },
                    { id: 'original', label: 'Original Only' },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setStatusFilter(tab.id);
                      setVisibleLimit(25);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      statusFilter === tab.id
                        ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleClear}
                className="text-xs font-medium text-[#9A3412] hover:underline underline-offset-4 cursor-pointer self-start sm:self-auto whitespace-nowrap"
              >
                Clear master search
              </button>
            </div>

            {/* Matched Movies Summary Strip (when query matches film titles) */}
            {results.movies.length > 0 && (
              <div className="space-y-2.5">
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#6B655D] font-medium">
                  Matching Hindi Movies ({results.movies.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {results.movies.slice(0, 6).map((mHit) => (
                    <div
                      key={`${mHit.director.id}-${mHit.movie.id}`}
                      className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-3.5 flex flex-col justify-between gap-2.5"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-serif text-lg font-semibold text-[#1C1917] leading-snug">
                            {mHit.movie.title}
                          </span>
                          <span className="font-mono text-xs text-[#6B655D] tabular-nums shrink-0">
                            {mHit.movie.year}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-[#57534E] mt-1">
                          <span className="font-semibold text-[#9A3412]">
                            {mHit.director.name}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{mHit.movie.songs.length} songs</span>
                          <span aria-hidden="true">·</span>
                          <span
                            className={
                              mHit.adaptedCount > 0
                                ? 'font-medium text-[#9A3412]'
                                : 'text-[#14532D]'
                            }
                          >
                            {mHit.adaptedCount > 0
                              ? `${mHit.adaptedCount} adapted / ${mHit.originalCount} original`
                              : 'All studio originals'}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#EFEAE0] text-xs">
                        <button
                          type="button"
                          onClick={() => handleQueryChange(mHit.movie.title)}
                          className="font-medium text-[#1C1917] hover:text-[#9A3412] cursor-pointer"
                        >
                          Show tracks here
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            onOpenInDirectorArchive(mHit.director.id, mHit.movie.id)
                          }
                          className="inline-flex items-center gap-1 font-medium text-[#9A3412] hover:underline underline-offset-4 cursor-pointer"
                        >
                          <span>Open Dossier</span>
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Matched Songs Full-Detail Cards */}
            {results.songs.length > 0 ? (
              <div className="space-y-3">
                <h2 className="text-xs font-mono uppercase tracking-wider text-[#6B655D] font-medium">
                  Song &amp; Origin Details ({results.songs.length})
                </h2>
                <div className="space-y-3">
                  {results.songs.slice(0, visibleLimit).map(renderSongHit)}
                </div>

                {results.songs.length > visibleLimit && (
                  <div className="pt-2 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleLimit((prev) => prev + 30)}
                      className="px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#FFFFFF] border border-[#D6CEBE] rounded-md hover:border-[#9A3412] hover:text-[#9A3412] transition-colors cursor-pointer"
                    >
                      Show more matches ({results.songs.length - visibleLimit} remaining)
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-6 text-center space-y-2">
                <p className="font-serif text-lg font-medium text-[#1C1917]">
                  No cataloged Hindi songs matched “{trimmedQuery}”
                  {statusFilter !== 'all' ? ' under this classification filter' : ''}.
                </p>
                <p className="text-xs text-[#57534E] max-w-xl mx-auto">
                  Try searching with fewer keywords from the song title, movie name, music
                  director, or opening line—or let us know if a Hindi soundtrack is missing
                  from our {directors.length}-director archive.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  {statusFilter !== 'all' && (
                    <button
                      type="button"
                      onClick={() => setStatusFilter('all')}
                      className="px-3.5 py-1.5 text-xs font-medium text-[#1C1917] bg-[#F2EDE4] rounded hover:bg-[#E4DDD0] transition-colors cursor-pointer"
                    >
                      Show all classifications
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={onNavigateContact}
                    className="px-3.5 py-1.5 text-xs font-medium text-[#9A3412] border border-[#9A3412]/30 rounded hover:bg-[#9A3412]/5 transition-colors cursor-pointer"
                  >
                    Suggest a missing song or movie
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
