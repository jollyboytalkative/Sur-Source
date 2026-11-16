import { useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { DIRECTORS } from './data/directors';
import { NADEEM_SHRAVAN_MOVIES } from './data/nadeemShravanData';
import { ANU_MALIK_MOVIES } from './data/anuMalikData';
import { RD_BURMAN_MOVIES } from './data/rdBurmanData';
import { SHANKAR_JAIKISHAN_MOVIES } from './data/shankarJaikishanData';
import { AR_RAHMAN_BOLLYWOOD_MOVIES } from './data/arRahmanBollywoodData';
import { NAUSHAD_MOVIES } from './data/naushadData';
import { OP_NAYYAR_MOVIES } from './data/opNayyarData';
import { ANAND_MILIND_MOVIES } from './data/anandMilindData';
import { LAXMIKANT_PYARELAL_MOVIES } from './data/laxmikantPyarelalData';
import { SD_BURMAN_MOVIES } from './data/sdBurmanData';
import { RAVI_MOVIES } from './data/raviData';
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

type AppRoute = '/' | '/disclaimer' | '/contact' | '/admin';

function resolveRoute(pathname: string): AppRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/disclaimer') return '/disclaimer';
  if (normalized === '/contact') return '/contact';
  if (normalized === '/admin') return '/admin';
  return '/';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() =>
    resolveRoute(window.location.pathname)
  );
  const [activeDirectorId, setActiveDirectorId] =
    useState<DirectorId>('nadeem-shravan');
  const [selectedMovieFilter, setSelectedMovieFilter] = useState<string>('all');

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState<boolean>(false);
  const [liveOverrides, setLiveOverrides] = useState<
    Record<string, SongOverrideRecord>
  >({});
  const [liveMovies, setLiveMovies] = useState<LiveMovieRecord[]>([]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(resolveRoute(window.location.pathname));
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
    if (currentRoute === '/disclaimer') {
      document.title = 'Disclaimer — Bollywood Music Origins | Sur & Source';
    } else if (currentRoute === '/contact') {
      document.title = 'Contact / Corrections — Bollywood Music Origins | Sur & Source';
    } else if (currentRoute === '/admin') {
      document.title = 'Curator Review Queue — Sur & Source';
    } else {
      document.title =
        'Sur & Source — Bollywood Music Directors & Song Origins Archive';
    }
  }, [currentRoute]);

  const baseMovies = useMemo<MovieEntry[]>(
    () => [
      ...NADEEM_SHRAVAN_MOVIES,
      ...ANU_MALIK_MOVIES,
      ...RD_BURMAN_MOVIES,
      ...SHANKAR_JAIKISHAN_MOVIES,
      ...AR_RAHMAN_BOLLYWOOD_MOVIES,
      ...NAUSHAD_MOVIES,
      ...OP_NAYYAR_MOVIES,
      ...ANAND_MILIND_MOVIES,
      ...LAXMIKANT_PYARELAL_MOVIES,
      ...SD_BURMAN_MOVIES,
      ...RAVI_MOVIES,
    ],
    []
  );

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

  const activeMovies = useMemo(
    () => allMovies.filter((m) => m.directorId === activeDirectorId),
    [allMovies, activeDirectorId]
  );

  const activeDirector = useMemo(
    () => DIRECTORS.find((d) => d.id === activeDirectorId) ?? DIRECTORS[0],
    [activeDirectorId]
  );

  const stats = useMemo(() => {
    let totalSongs = 0;
    let copiedOrInspiredCount = 0;
    let originalCount = 0;

    activeMovies.forEach((m) => {
      m.songs.forEach((s) => {
        totalSongs += 1;
        if (s.adaptationType === 'copied' || s.adaptationType === 'inspired') {
          copiedOrInspiredCount += 1;
        } else {
          originalCount += 1;
        }
      });
    });

    return {
      totalMovies: activeMovies.length,
      totalSongs,
      copiedOrInspiredCount,
      originalCount,
    };
  }, [activeMovies]);

  const handleSelectDirector = (id: DirectorId) => {
    setActiveDirectorId(id);
    setSelectedMovieFilter('all');
  };

  const handleNavigateRoute = (path: AppRoute) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    if (currentRoute !== '/') {
      window.history.pushState(null, '', '/');
      setCurrentRoute('/');
      window.setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return;
    }

    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
              directors={DIRECTORS}
              activeDirectorId={activeDirectorId}
              onSelectDirector={handleSelectDirector}
              stats={stats}
            />

            {showCatalog ? (
              <>
                <SongOriginTable
                  key={`table-${activeDirectorId}`}
                  directorId={activeDirectorId}
                  movies={activeMovies}
                  selectedMovieFilter={selectedMovieFilter}
                  onChangeMovieFilter={setSelectedMovieFilter}
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
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B655D]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2.5 text-center sm:text-left">
            <span>Sur &amp; Source · Bollywood Music Origins Archive</span>
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
      </footer>
    </div>
  );
}
