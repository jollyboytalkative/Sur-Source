import React, { useMemo, useRef, useState } from 'react';
import { Disc3 } from 'lucide-react';
import { DirectorId, DirectorProfile } from '../types/archive';
import cassetteArchiveImg from '../assets/images/bollywood_cassette_archive_1794559716635.jpg';
import vintageDeskImg from '../assets/images/vintage_music_desk_1794559717261.jpg';

export interface DirectorStats {
  totalMovies: number;
  totalSongs: number;
  copiedOrInspiredCount: number;
  originalCount: number;
}

interface DirectorHeroProps {
  directors: DirectorProfile[];
  activeDirectorId: DirectorId;
  onSelectDirector: (id: DirectorId) => void;
  stats: DirectorStats;
  directorStatsMap?: Record<DirectorId, DirectorStats>;
}

export const DirectorHero: React.FC<DirectorHeroProps> = ({
  directors,
  activeDirectorId,
  onSelectDirector,
  stats,
  directorStatsMap,
}) => {
  const [imgError, setImgError] = useState(false);
  const [hoveredDirectorId, setHoveredDirectorId] = useState<DirectorId | null>(
    null
  );
  const [popoverCoords, setPopoverCoords] = useState<{
    left: number;
    top: number;
  } | null>(null);
  const tablistWrapperRef = useRef<HTMLDivElement | null>(null);

  const sortedDirectors = useMemo(
    () =>
      [...directors].sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      ),
    [directors]
  );

  const activeDirector =
    sortedDirectors.find((d) => d.id === activeDirectorId) ?? sortedDirectors[0];

  const hoveredDirector = hoveredDirectorId
    ? sortedDirectors.find((d) => d.id === hoveredDirectorId) ?? null
    : null;

  const hoveredStats =
    hoveredDirectorId && directorStatsMap
      ? directorStatsMap[hoveredDirectorId]
      : hoveredDirectorId === activeDirectorId
        ? stats
        : undefined;

  const openHoverCard = (directorId: DirectorId, targetEl: HTMLElement) => {
    const container = tablistWrapperRef.current;
    if (!container) {
      setHoveredDirectorId(directorId);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const btnRect = targetEl.getBoundingClientRect();
    const cardWidth = Math.min(340, containerRect.width);

    const idealLeft =
      btnRect.left - containerRect.left + btnRect.width / 2 - cardWidth / 2;
    const clampedLeft = Math.max(
      0,
      Math.min(idealLeft, containerRect.width - cardWidth)
    );
    const top = btnRect.bottom - containerRect.top + 8;

    setPopoverCoords({ left: clampedLeft, top });
    setHoveredDirectorId(directorId);
  };

  const closeHoverCard = (directorId?: DirectorId) => {
    setHoveredDirectorId((prev) =>
      !directorId || prev === directorId ? null : prev
    );
  };

  const heroImageUrl =
    activeDirectorId === 'nadeem-shravan' ? cassetteArchiveImg : vintageDeskImg;

  return (
    <section id="director-tabs" className="scroll-mt-20 pt-8 pb-10 border-b border-[#E4DDD0]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Director Tabs Switcher (alphabetical A–Z, wrapped/stacked cleanly with hover stats card) */}
        <div className="pb-6 mb-8 border-b border-[#E4DDD0] space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6B655D] font-medium">
              Select Music Director (A–Z)
            </span>
            <p className="text-xs text-[#6B655D]">
              Hover any composer for quick counts · Click to open full catalog
            </p>
          </div>

          <div
            ref={tablistWrapperRef}
            className="relative"
            onMouseLeave={() => closeHoverCard()}
          >
            <div
              role="tablist"
              aria-label="Bollywood Music Directors"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#F2EDE4] rounded-lg"
            >
              {sortedDirectors.map((director) => {
                const isActive = director.id === activeDirectorId;
                return (
                  <button
                    key={director.id}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => onSelectDirector(director.id)}
                    onPointerEnter={(e) => {
                      if (e.pointerType !== 'touch') {
                        openHoverCard(director.id, e.currentTarget);
                      }
                    }}
                    onFocus={(e) => {
                      openHoverCard(director.id, e.currentTarget);
                    }}
                    onBlur={() => closeHoverCard(director.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A3412] ${
                      isActive
                        ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                        : 'text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF7F2]/60'
                    }`}
                  >
                    <span>{director.name}</span>
                    <span className="ml-2 font-mono text-[11px] font-normal text-[#78716C]">
                      {director.status === 'active' ? director.era : 'Queued'}
                    </span>
                  </button>
                );
              })}
            </div>

            {hoveredDirector && hoveredStats && popoverCoords && (
              <div
                role="tooltip"
                aria-live="polite"
                style={{
                  left: `${popoverCoords.left}px`,
                  top: `${popoverCoords.top}px`,
                  width: 'min(340px, 100%)',
                }}
                className="pointer-events-none absolute z-40 rounded-lg border border-[#D6CEBE] bg-[#FFFFFF] p-4 shadow-lg shadow-[#1C1917]/10"
              >
                <div className="flex items-baseline justify-between gap-2 pb-2.5 mb-3 border-b border-[#EFEAE0]">
                  <span className="font-serif text-base font-semibold text-[#1C1917] leading-tight">
                    {hoveredDirector.name}
                  </span>
                  <span className="font-mono text-[11px] text-[#78716C] shrink-0">
                    {hoveredDirector.era}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <div className="text-[11px] text-[#6B655D]">
                      Cataloged Movies
                    </div>
                    <div className="font-mono text-lg font-medium text-[#1C1917] tabular-nums">
                      {hoveredStats.totalMovies}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6B655D]">
                      Indexed Songs
                    </div>
                    <div className="font-mono text-lg font-medium text-[#1C1917] tabular-nums">
                      {hoveredStats.totalSongs}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6B655D]">
                      Close Similarity / Inspired
                    </div>
                    <div className="font-mono text-lg font-medium text-[#9A3412] tabular-nums">
                      {hoveredStats.copiedOrInspiredCount}{' '}
                      <span className="text-xs font-normal text-[#78716C]">
                        (
                        {hoveredStats.totalSongs > 0
                          ? (
                              (hoveredStats.copiedOrInspiredCount /
                                hoveredStats.totalSongs) *
                              100
                            ).toFixed(1)
                          : '0.0'}
                        %)
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#6B655D]">
                      Original Tracks
                    </div>
                    <div className="font-mono text-lg font-medium text-[#14532D] tabular-nums">
                      {hoveredStats.originalCount}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Editorial Split Masthead */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B655D] mb-3">
                <span className="font-mono uppercase tracking-wider text-[#9A3412] font-medium">
                  Director Dossier
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono tabular-nums">{activeDirector.era}</span>
                <span aria-hidden="true">·</span>
                <span>{activeDirector.fullName}</span>
              </div>

              <h2
                className="font-serif text-[#1C1917] font-semibold tracking-tight leading-[1.08] mb-4"
                style={{
                  fontSize: 'clamp(2rem, 3.6vw, 3rem)',
                  textWrap: 'balance',
                }}
              >
                {activeDirector.name}: Filmography &amp; Musical Origins
              </h2>

              <p className="text-[15px] leading-[1.68] text-[#44403C] max-w-2xl mb-5">
                {activeDirector.editorialEssay}
              </p>
            </div>

            <div className="pt-4 border-t border-[#E4DDD0] text-xs text-[#6B655D] flex flex-wrap items-center gap-x-4 gap-y-1.5">
              <span className="font-medium text-[#292524]">Signature Palette:</span>
              <span>{activeDirector.signatureSound}</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <figure className="flex-1 flex flex-col bg-[#F2EDE4] border border-[#E4DDD0] rounded-lg overflow-hidden">
              <div className="relative flex-1 min-h-[240px] lg:min-h-0 bg-[#EBE6DF]">
                {!imgError ? (
                  <img
                    src={heroImageUrl}
                    alt={`${activeDirector.name} 1990s Bollywood cassette and studio notes archive`}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F2EDE4] to-[#E4DDD0]">
                    <Disc3 className="w-10 h-10 text-[#9A3412] mb-2" aria-hidden="true" />
                    <span className="font-serif text-lg font-medium text-[#1C1917]">
                      {activeDirector.name} Archive
                    </span>
                    <span className="text-xs text-[#6B655D] mt-1">
                      {activeDirector.era}
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="px-4 py-2.5 bg-[#FFFFFF] border-t border-[#E4DDD0] text-xs font-serif italic text-[#57534E]">
                Fig. 1 — Archival cassette editions, studio notation ledger, and cross-reference index for {activeDirector.name}.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 4-Column Quantitative Strip */}
        <div className="mt-8 pt-6 border-t border-[#E4DDD0] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="text-xs text-[#6B655D] mb-1">Cataloged Movies</div>
            <div className="font-mono text-2xl font-medium text-[#1C1917] tabular-nums">
              {stats.totalMovies}
            </div>
            <div className="text-xs text-[#78716C] mt-0.5">
              {activeDirectorId === 'anu-malik'
                ? 'Verified primary Hindi films (300–350+ career credits incl. TV & guest tracks)'
                : activeDirectorId === 'rd-burman'
                  ? 'Verified Hindi & regional films (331 total: Hindi 292 · Bengali 31 · Telugu 3 · Tamil 2 · Oriya 2 · Marathi 1 + 5 TV serials)'
                  : activeDirectorId === 'shankar-jaikishan'
                    ? 'Verified Hindi & regional films (170–179 career credits from Barsaat 1949 into the 1980s)'
                    : activeDirectorId === 'ar-rahman'
                      ? 'Verified original Hindi (Bollywood) films only (Rangeela 1995–Present · South Indian & dubbed titles excluded)'
                      : activeDirectorId === 'naushad'
                        ? 'Verified career filmography (65–67 films from Prem Nagar 1940 to Taj Mahal: An Eternal Love Story 2005)'
                        : activeDirectorId === 'op-nayyar'
                          ? 'Verified career filmography (72 films from Aasmaan 1952 to Zid 1994)'
                          : activeDirectorId === 'anand-milind'
                            ? 'Verified feature filmography (over 200 films / 174–227 career credits from Ab Ayega Mazaa 1984 onward)'
                            : activeDirectorId === 'laxmikant-pyarelal'
                              ? 'Verified discography (503–750 total career credits incl. unreleased/dubbed; 2,800–3,000+ career songs from Parasmani 1963 onward)'
                              : activeDirectorId === 'sd-burman'
                                ? 'Verified Hindi (Bollywood) filmography (~89 Hindi films from Eight Days 1946 to Tyaag 1977 · Bengali films excluded)'
                                : activeDirectorId === 'ravi'
                                  ? 'Verified Hindi (Bollywood) filmography (91 Hindi films from Vachan 1955 to Ek Alag Mausam 2003 · Malayalam films excluded)'
                                  : activeDirectorId === 'roshan'
                                    ? 'Verified Hindi filmography (~55 career films & ~450 songs from Neki Aur Badi 1949 to posthumous Anokhi Raat 1968)'
                                    : 'Verified chronological filmography'}
            </div>
          </div>

          <div className="lg:border-l lg:border-[#E4DDD0] lg:pl-6">
            <div className="text-xs text-[#6B655D] mb-1">Indexed Songs</div>
            <div className="font-mono text-2xl font-medium text-[#1C1917] tabular-nums">
              {stats.totalSongs}
            </div>
            <div className="text-xs text-[#78716C] mt-0.5">
              With movie listening links
            </div>
          </div>

          <div className="lg:border-l lg:border-[#E4DDD0] lg:pl-6">
            <div className="text-xs text-[#6B655D] mb-1">Reported Close Similarity / Inspired</div>
            <div className="font-mono text-2xl font-medium text-[#9A3412] tabular-nums">
              {stats.copiedOrInspiredCount}{' '}
              <span className="text-base font-normal text-[#78716C]">
                (
                {stats.totalSongs > 0
                  ? ((stats.copiedOrInspiredCount / stats.totalSongs) * 100).toFixed(1)
                  : '0.0'}
                %)
              </span>
            </div>
            <div className="text-xs text-[#78716C] mt-0.5">
              Close similarities &amp; adaptations
            </div>
          </div>

          <div className="lg:border-l lg:border-[#E4DDD0] lg:pl-6">
            <div className="text-xs text-[#6B655D] mb-1">Original Tracks</div>
            <div className="font-mono text-2xl font-medium text-[#14532D] tabular-nums">
              {stats.originalCount}
            </div>
            <div className="text-xs text-[#78716C] mt-0.5">
              Cataloged studio originals
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
