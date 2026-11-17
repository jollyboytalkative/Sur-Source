import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { DIRECTORS } from './data/directors';
import { ALL_DIRECTOR_MOVIES } from './data/catalog';
import type {
  DirectorId,
  LiveMovieRecord,
  MovieEntry,
  SongEntry,
  SongOverrideRecord,
} from './types/archive';
import { auth } from './lib/firebase';
import {
  subscribeToLiveMovies,
  subscribeToSongOverrides,
} from './lib/archiveOverrides';
import { TopBar } from './components/TopBar';
import { IntroHero } from './components/IntroHero';
import { DirectorHero } from './components/DirectorHero';
import { SongOriginTable } from './components/SongOriginTable';
import { FilmographyExplorer } from './components/FilmographyExplorer';
import { QueuedDirectorView } from './components/QueuedDirectorView';
import { ArchiveNotes } from './components/ArchiveNotes';
import { DisclaimerPage } from './components/DisclaimerPage';
import { ContactPage } from './components/ContactPage';
import { AdminReviewPage } from './components/AdminReviewPage';
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

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState<boolean>(false);
  const [liveOverrides, setLiveOverrides] = useState<
    Record<string, SongOverrideRecord>
  >({});
  const [liveMovies, setLiveMovies] = useState<LiveMovieRecord[]>([]);

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
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthReady(true);
    });
    return () => unsubAuth();
  }, []);

  useEffect(() => {
    const unsubOverrides = subscribeToSongOverrides(
      (overrides) => {
        setLiveOverrides(overrides);
      },
      (err) => {
        console.error('Failed to subscribe to live song overrides:', err);
      }
    );
    const unsubLiveMovies = subscribeToLiveMovies(
      (movies) => {
        setLiveMovies(movies);
      },
      (err) => {
        console.error('Failed to subscribe to live movies:', err);
      }
    );
    return () => {
      unsubOverrides();
      unsubLiveMovies();
    };
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

  const baseMovies = useMemo<MovieEntry[]>(() => ALL_DIRECTOR_MOVIES, []);

  const mergedBaseAndLiveMovies = useMemo<MovieEntry[]>(() => {
    if (liveMovies.length === 0) return baseMovies;

    const map = new Map<string, MovieEntry>();
    for (const m of baseMovies) {
      map.set(m.id, m);
    }

    for (const lm of liveMovies) {
      const convertedSongs: SongEntry[] = lm.songs.map((s) => ({
        id: s.id,
        movieId: lm.movieId,
        title: s.title,
        singers: s.singers,
        lyricist: s.lyricist || undefined,
        adaptationType: s.adaptationType,
        originalSongTitle: s.originalSongTitle || undefined,
        originalArtist: s.originalArtist || undefined,
        originalYear: s.originalYear || undefined,
        originCategory: s.originCategory,
        adaptationNotes: s.adaptationNotes || undefined,
        bollywoodLink: s.bollywoodLink,
        originalLink: s.originalLink || undefined,
        referenceSource: s.referenceSource || undefined,
        sourceUrl: lm.sourceUrl || undefined,
      }));

      const existing = map.get(lm.movieId);
      if (existing) {
        const existingSongIds = new Set(existing.songs.map((s) => s.id));
        const newSongs = convertedSongs.filter((s) => !existingSongIds.has(s.id));
        if (newSongs.length > 0) {
          map.set(lm.movieId, {
            ...existing,
            songs: [...existing.songs, ...newSongs],
          });
        }
      } else {
        map.set(lm.movieId, {
          id: lm.movieId,
          directorId: lm.directorId,
          title: lm.title,
          year: lm.year,
          cast: lm.cast || undefined,
          label: lm.label || undefined,
          significance: lm.significance || undefined,
          songs: convertedSongs,
        });
      }
    }

    return Array.from(map.values());
  }, [baseMovies, liveMovies]);

  const allMovies = useMemo<MovieEntry[]>(() => {
    if (Object.keys(liveOverrides).length === 0) {
      return mergedBaseAndLiveMovies;
    }

    const applyOverride = (song: SongEntry): SongEntry => {
      const ov = liveOverrides[song.id];
      if (!ov) return song;
      return {
        ...song,
        adaptationType: ov.adaptationType,
        originalSongTitle: ov.originalSongTitle,
        originalArtist: ov.originalArtist,
        originalYear: ov.originalYear || song.originalYear,
        originCategory: ov.originCategory,
        adaptationNotes: ov.adaptationNotes || song.adaptationNotes,
        originalLink: ov.originalLink || song.originalLink,
        referenceSource: ov.referenceSource || song.referenceSource,
        sourceUrl: ov.sourceUrl || song.sourceUrl,
        isLiveOverride: true,
      };
    };

    return mergedBaseAndLiveMovies.map((movie) => {
      const hasOverride = movie.songs.some((s) => Boolean(liveOverrides[s.id]));
      if (!hasOverride) return movie;
      return {
        ...movie,
        songs: movie.songs.map(applyOverride),
      };
    });
  }, [mergedBaseAndLiveMovies, liveOverrides]);

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
        ) : currentRoute === '/admin' ? (
          <AdminReviewPage
            user={currentUser}
            authReady={authReady}
            allMovies={mergedBaseAndLiveMovies}
            liveOverrides={liveOverrides}
            liveMovies={liveMovies}
            onNavigateHome={() => handleNavigateRoute('/')}
          />
        ) : (
          <>
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
              <span aria-hidden="true" className="text-[#D6CEBE]">
                |
              </span>
              <a
                href="/admin"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigateRoute('/admin');
                }}
                className={`hover:text-[#9A3412] hover:underline underline-offset-4 transition-colors ${
                  currentRoute === '/admin' ? 'text-[#9A3412] font-medium' : ''
                }`}
              >
                Curator Review
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
