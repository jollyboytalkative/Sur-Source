import { useEffect, useMemo, useState } from 'react';
import { DIRECTORS } from './data/directors';
import { ALL_DIRECTOR_MOVIES } from './data/catalog';
import type {
  DirectorId,
  MovieEntry,
} from './types/archive';
import { TopBar } from './components/TopBar';
import { MasterArchiveSearch } from './components/MasterArchiveSearch';
import { IntroHero } from './components/IntroHero';
import { DirectorHero } from './components/DirectorHero';
import { SongOriginTable } from './components/SongOriginTable';
import { FilmographyExplorer } from './components/FilmographyExplorer';
import { QueuedDirectorView } from './components/QueuedDirectorView';
import { ArchiveNotes } from './components/ArchiveNotes';
import { DisclaimerPage } from './components/DisclaimerPage';
import { ContactPage } from './components/ContactPage';
import {
  buildStructuredDataJsonLd,
  getSeoMetaForPath,
  resolveSeoRoute,
  type PublicSeoRoute,
} from './seo/seoConfig';

type AppRoute = PublicSeoRoute;

function readQueryParam(): string {
  try {
    return new URLSearchParams(window.location.search).get('q')?.trim() ?? '';
  } catch {
    return '';
  }
}

export default function App() {
  const [initialResolved] = useState(() => resolveSeoRoute(window.location.pathname));
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(initialResolved.route);
  const [activeDirectorId, setActiveDirectorId] = useState<DirectorId>(
    initialResolved.directorId ?? 'nadeem-shravan'
  );
  const [selectedMovieFilter, setSelectedMovieFilter] = useState<string>('all');
  const [urlSearchQuery, setUrlSearchQuery] = useState<string>(() => readQueryParam());

  useEffect(() => {
    const handlePopState = () => {
      const next = resolveSeoRoute(window.location.pathname);
      setCurrentRoute(next.route);
      if (next.directorId) {
        setActiveDirectorId(next.directorId);
      } else if (next.route === '/') {
        setActiveDirectorId('nadeem-shravan');
      }
      setUrlSearchQuery(readQueryParam());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const activePath =
      currentRoute === '/director'
        ? `/director/${activeDirectorId}`
        : currentRoute;
    const meta = getSeoMetaForPath(activePath);
    document.title = meta.title;

    const canonicalUrl = `${window.location.origin}${meta.canonicalPath}`;

    const setMetaTag = (
      selector: string,
      attr: 'name' | 'property',
      key: string,
      value: string
    ) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', meta.keywords);
    setMetaTag('meta[name="robots"]', 'name', 'robots', meta.robots);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', meta.ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag(
      'meta[property="og:description"]',
      'property',
      'og:description',
      meta.description
    );
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag(
      'meta[name="twitter:description"]',
      'name',
      'twitter:description',
      meta.description
    );

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    const jsonLdEl = document.getElementById('structured-data-jsonld');
    if (jsonLdEl) {
      jsonLdEl.textContent = buildStructuredDataJsonLd(
        window.location.origin,
        activePath
      );
    }
  }, [currentRoute, activeDirectorId]);

  const allMovies = useMemo<MovieEntry[]>(() => ALL_DIRECTOR_MOVIES, []);

  const sortedDirectors = useMemo(
    () =>
      [...DIRECTORS].sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      ),
    []
  );

  const activeMovies = useMemo(
    () => allMovies.filter((m) => m.directorId === activeDirectorId),
    [allMovies, activeDirectorId]
  );

  const activeDirector = useMemo(
    () =>
      sortedDirectors.find((d) => d.id === activeDirectorId) ?? sortedDirectors[0],
    [sortedDirectors, activeDirectorId]
  );

  const directorStatsMap = useMemo(() => {
    const map = {} as Record<
      DirectorId,
      {
        totalMovies: number;
        totalSongs: number;
        copiedOrInspiredCount: number;
        originalCount: number;
      }
    >;

    for (const d of DIRECTORS) {
      map[d.id] = {
        totalMovies: 0,
        totalSongs: 0,
        copiedOrInspiredCount: 0,
        originalCount: 0,
      };
    }

    for (const m of allMovies) {
      const bucket = map[m.directorId];
      if (!bucket) continue;
      bucket.totalMovies += 1;
      for (const s of m.songs) {
        bucket.totalSongs += 1;
        if (s.adaptationType === 'copied' || s.adaptationType === 'inspired') {
          bucket.copiedOrInspiredCount += 1;
        } else {
          bucket.originalCount += 1;
        }
      }
    }

    return map;
  }, [allMovies]);

  const stats = directorStatsMap[activeDirectorId] ?? {
    totalMovies: 0,
    totalSongs: 0,
    copiedOrInspiredCount: 0,
    originalCount: 0,
  };

  const handleSelectDirector = (id: DirectorId) => {
    setActiveDirectorId(id);
    setSelectedMovieFilter('all');
    setUrlSearchQuery('');
    const nextPath = `/director/${id}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
    setCurrentRoute('/director');
  };

  const handleOpenInDirectorArchive = (directorId: DirectorId, movieId?: string) => {
    setActiveDirectorId(directorId);
    setSelectedMovieFilter(movieId ?? 'all');
    setUrlSearchQuery('');
    const nextPath = `/director/${directorId}`;
    if (window.location.pathname !== nextPath) {
      window.history.pushState(null, '', nextPath);
    }
    setCurrentRoute('/director');
    window.setTimeout(() => {
      const targetId = movieId ? 'song-origin-table' : 'director-tabs';
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };

  const handleNavigateRoute = (path: Exclude<AppRoute, '/director'>) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'top') {
      if (window.location.pathname !== '/' || window.location.search) {
        window.history.pushState(null, '', '/');
      }
      setCurrentRoute('/');
      setUrlSearchQuery('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const isArchiveView = currentRoute === '/' || currentRoute === '/director';
    if (!isArchiveView) {
      window.history.pushState(null, '', '/');
      setCurrentRoute('/');
      window.setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFilterTableToMovie = (movieId: string) => {
    setSelectedMovieFilter(movieId);
    handleNavigate('song-origin-table');
  };

  const showCatalog = activeDirector.status === 'active' || activeMovies.length > 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917]">
      <TopBar activeSection="top" onNavigate={handleNavigate} />

      <main className="flex-1">
        {currentRoute === '/disclaimer' ? (
          <DisclaimerPage onNavigateRoute={handleNavigateRoute} />
        ) : currentRoute === '/contact' ? (
          <ContactPage onNavigateRoute={handleNavigateRoute} />
        ) : (
          <>
            <MasterArchiveSearch
              allMovies={allMovies}
              directors={sortedDirectors}
              onOpenInDirectorArchive={handleOpenInDirectorArchive}
              onNavigateContact={() => handleNavigateRoute('/contact')}
            />

            <IntroHero
              onStartExploring={() => handleNavigate('director-tabs')}
              onOpenDisclaimer={() => handleNavigateRoute('/disclaimer')}
              onOpenContact={() => handleNavigateRoute('/contact')}
            />

            <DirectorHero
              directors={sortedDirectors}
              activeDirectorId={activeDirectorId}
              onSelectDirector={handleSelectDirector}
              stats={stats}
              directorStatsMap={directorStatsMap}
            />

            {showCatalog ? (
              <>
                <SongOriginTable
                  key={`table-${activeDirectorId}`}
                  directorId={activeDirectorId}
                  movies={activeMovies}
                  selectedMovieFilter={selectedMovieFilter}
                  onChangeMovieFilter={setSelectedMovieFilter}
                  initialSearchQuery={urlSearchQuery}
                />
                <FilmographyExplorer
                  key={`filmography-${activeDirectorId}`}
                  directorId={activeDirectorId}
                  directorName={activeDirector.name}
                  movies={activeMovies}
                  onFilterTableToMovie={handleFilterTableToMovie}
                />
              </>
            ) : (
              <QueuedDirectorView
                director={activeDirector}
                onReturnToActive={() => handleSelectDirector('nadeem-shravan')}
              />
            )}

            <ArchiveNotes />
          </>
        )}
      </main>

      <footer className="border-t border-[#E4DDD0] bg-[#FFFFFF] py-6">
        <div className="max-w-[1280px] mx-auto px-6 space-y-4">
          <nav
            aria-label="Indexed Indian & Bollywood Music Directors"
            className="pb-4 border-b border-[#EFEAE0] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-[#6B655D]"
          >
            <span className="font-mono uppercase tracking-wider text-[#9A3412] font-medium mr-1">
              Music Directors:
            </span>
            {sortedDirectors.map((d, idx) => (
              <span key={d.id} className="inline-flex items-center gap-3">
                <a
                  href={`/director/${d.id}`}
                  onClick={(e) => {
                    if (
                      !e.metaKey &&
                      !e.ctrlKey &&
                      !e.shiftKey &&
                      !e.altKey &&
                      e.button === 0
                    ) {
                      e.preventDefault();
                      handleSelectDirector(d.id);
                      window.setTimeout(() => {
                        const el = document.getElementById('director-tabs');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 40);
                    }
                  }}
                  className={`hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors ${
                    (currentRoute === '/' || currentRoute === '/director') &&
                    activeDirectorId === d.id
                      ? 'font-semibold text-[#1C1917]'
                      : ''
                  }`}
                >
                  {d.name}
                </a>
                {idx < sortedDirectors.length - 1 && (
                  <span aria-hidden="true" className="text-[#D6CEBE]">
                    ·
                  </span>
                )}
              </span>
            ))}
          </nav>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B655D]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 text-center sm:text-left">
              <span>Sur &amp; Source · Indian &amp; Bollywood Music Origins Archive</span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D6CEBE]">
                |
              </span>
              <span>
                Design and Managed by{' '}
                <a
                  href="https://jmmweb-india.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#9A3412] hover:underline underline-offset-4 transition-colors"
                >
                  jmmweb-india.com
                </a>
              </span>
            </div>
            <nav
              aria-label="Footer links"
              className="flex flex-wrap items-center gap-2.5 text-xs text-[#6B655D]"
            >
              <a
                href="/disclaimer"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateRoute('/disclaimer');
                }}
                className={`hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors ${
                  currentRoute === '/disclaimer' ? 'text-[#9A3412] font-medium' : ''
                }`}
              >
                Disclaimer
              </a>
              <span aria-hidden="true" className="text-[#D6CEBE]">
                |
              </span>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateRoute('/contact');
                }}
                className={`hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors ${
                  currentRoute === '/contact' ? 'text-[#9A3412] font-medium' : ''
                }`}
              >
                Contact / Corrections
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
