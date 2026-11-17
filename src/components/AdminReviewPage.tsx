import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Check,
  ExternalLink,
  Film,
  LogOut,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  ShieldCheck,
  Trash2,
  X,
} from 'lucide-react';
import type { User } from 'firebase/auth';
import { DIRECTORS } from '../data/directors';
import {
  ORIGIN_CATEGORIES,
  type AdaptationType,
  type ApprovedAdaptationType,
  type DiscoveryCandidateRecord,
  type DiscoveryStatusInfo,
  type DiscoveryTargetDirector,
  type LiveMovieRecord,
  type LiveMovieSongPayload,
  type MovieEntry,
  type OriginCategory,
  type ReleaseDiscoveryRecord,
  type SongOverrideRecord,
  type StagedReleaseCandidate,
  type StagedServerCandidate,
} from '../types/archive';
import {
  ADMIN_EMAIL,
  isAuthorizedAdminUser,
  signInAdminWithGoogle,
  signOutAdmin,
} from '../lib/firebase';
import {
  approveDiscoveryCandidate,
  approveReleaseCandidate,
  deleteDiscoveryCandidate,
  deleteReleaseCandidate,
  dismissDiscoveryCandidate,
  dismissReleaseCandidate,
  loadDiscoverySettings,
  removeLiveMovie,
  revertSongOverride,
  saveDiscoverySettings,
  stageDiscoveryCandidates,
  stageReleaseCandidates,
  subscribeToDiscoveryQueue,
  subscribeToReleaseQueue,
  type ApprovalEdits,
  type ReleaseApprovalEdits,
} from '../lib/archiveOverrides';

interface AdminReviewPageProps {
  user: User | null;
  authReady: boolean;
  allMovies: MovieEntry[];
  liveOverrides: Record<string, SongOverrideRecord>;
  liveMovies: LiveMovieRecord[];
  onNavigateHome: () => void;
}

type QueueTab =
  | 'pending'
  | 'releases'
  | 'live-films'
  | 'overrides'
  | 'approved'
  | 'rejected';

export const AdminReviewPage: React.FC<AdminReviewPageProps> = ({
  user,
  authReady,
  allMovies,
  liveOverrides,
  liveMovies,
  onNavigateHome,
}) => {
  const isAdmin = isAuthorizedAdminUser(user);

  const [queueItems, setQueueItems] = useState<DiscoveryCandidateRecord[]>([]);
  const [releaseQueue, setReleaseQueue] = useState<ReleaseDiscoveryRecord[]>([]);
  const [activeTab, setActiveTab] = useState<QueueTab>('pending');
  const [authError, setAuthError] = useState<string>('');
  const [actionError, setActionError] = useState<string>('');
  const [statusNotice, setStatusNotice] = useState<string>('');

  // Scheduler & scan controls
  const [scheduleEnabled, setScheduleEnabled] = useState<boolean>(true);
  const [intervalHours, setIntervalHours] = useState<number>(24);
  const [targetDirector, setTargetDirector] =
    useState<DiscoveryTargetDirector>('all');
  const [batchSize, setBatchSize] = useState<number>(6);
  const [songQuery, setSongQuery] = useState<string>('');
  const [serverStatus, setServerStatus] = useState<DiscoveryStatusInfo | null>(
    null
  );
  const [lastScanSummary, setLastScanSummary] = useState<string>('');
  const [lastScanAtIso, setLastScanAtIso] = useState<string>('');

  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [isScanningReleases, setIsScanningReleases] = useState<boolean>(false);
  const [isSavingSchedule, setIsSavingSchedule] = useState<boolean>(false);
  const [busyDiscoveryId, setBusyDiscoveryId] = useState<string | null>(null);
  const [editsById, setEditsById] = useState<Record<string, ApprovalEdits>>({});
  const [releaseEditsById, setReleaseEditsById] = useState<
    Record<string, ReleaseApprovalEdits>
  >({});

  // Map songId -> movie/song metadata for displaying Live Overrides cleanly
  const songLookup = useMemo(() => {
    const map = new Map<
      string,
      {
        title: string;
        movieTitle: string;
        movieYear: number;
        directorName: string;
        bollywoodLink: string;
      }
    >();
    const dirMap = new Map(DIRECTORS.map((d) => [d.id, d.name]));
    for (const m of allMovies) {
      for (const s of m.songs) {
        map.set(s.id, {
          title: s.title,
          movieTitle: m.title,
          movieYear: m.year,
          directorName: dirMap.get(m.directorId) ?? m.directorId,
          bollywoodLink: s.bollywoodLink,
        });
      }
    }
    return map;
  }, [allMovies]);

  const directorNameMap = useMemo(
    () => new Map(DIRECTORS.map((d) => [d.id, d.name])),
    []
  );

  // Subscribe to private Firestore discovery_queue and release_queue when verified admin is signed in
  useEffect(() => {
    if (!authReady || !isAdmin || !user) {
      setQueueItems([]);
      setReleaseQueue([]);
      return;
    }

    const unsubSongs = subscribeToDiscoveryQueue(
      user.uid,
      (items) => {
        setQueueItems(items);
      },
      (err) => {
        setActionError(err.message);
      }
    );

    const unsubReleases = subscribeToReleaseQueue(
      user.uid,
      (items) => {
        setReleaseQueue(items);
      },
      (err) => {
        setActionError(err.message);
      }
    );

    return () => {
      unsubSongs();
      unsubReleases();
    };
  }, [authReady, isAdmin, user]);

  // Load scheduler settings + sync any server background-staged discoveries & new releases into Firestore
  useEffect(() => {
    if (!authReady || !isAdmin || !user) return;
    let cancelled = false;

    const syncAdminState = async () => {
      try {
        const [firestoreSettings, statusRes] = await Promise.all([
          loadDiscoverySettings(user.uid),
          fetch('/api/discovery/status'),
        ]);

        if (cancelled) return;

        if (firestoreSettings) {
          setScheduleEnabled(firestoreSettings.enabled);
          setIntervalHours(firestoreSettings.intervalHours);
          setTargetDirector(firestoreSettings.targetDirector);
          setBatchSize(firestoreSettings.batchSize);
          setLastScanSummary(firestoreSettings.lastScanSummary);
          setLastScanAtIso(firestoreSettings.lastScanAtIso);
        }

        if (statusRes.ok) {
          const sInfo = (await statusRes.json()) as DiscoveryStatusInfo;
          if (!cancelled) {
            setServerStatus(sInfo);
            if (!firestoreSettings) {
              setScheduleEnabled(sInfo.enabled);
              setIntervalHours(sInfo.intervalHours);
              setTargetDirector(sInfo.targetDirector);
              setBatchSize(sInfo.batchSize);
              setLastScanSummary(sInfo.lastScanSummary);
              setLastScanAtIso(sInfo.lastScanAtIso);
            }
          }
        }

        const idToken = await user.getIdToken();
        const stagedRes = await fetch('/api/discovery/staged', {
          headers: { Authorization: `Bearer ${idToken}` },
        });
        if (stagedRes.ok && !cancelled) {
          const payload = (await stagedRes.json()) as {
            candidates: StagedServerCandidate[];
            releases?: StagedReleaseCandidate[];
            status: DiscoveryStatusInfo;
          };
          setServerStatus(payload.status);

          const serverCandidates = payload.candidates ?? [];
          const serverReleases = payload.releases ?? [];

          if (serverCandidates.length > 0 || serverReleases.length > 0) {
            const existingIds = new Set<string>([
              ...Object.keys(liveOverrides),
              ...queueItems.map((q) => q.songId),
            ]);
            const existingReleaseIds = new Set<string>([
              ...liveMovies.map((m) => m.releaseId).filter(Boolean),
              ...releaseQueue.map((r) => r.releaseId),
            ]);

            const [writtenSongs, writtenReleases] = await Promise.all([
              stageDiscoveryCandidates(user.uid, serverCandidates, existingIds),
              stageReleaseCandidates(
                user.uid,
                serverReleases,
                existingReleaseIds
              ),
            ]);

            await fetch('/api/discovery/staged/ack', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${idToken}`,
              },
              body: JSON.stringify({
                discoveryIds: serverCandidates.map((c) => c.discoveryId),
                releaseIds: serverReleases.map((r) => r.releaseId),
              }),
            });

            if ((writtenSongs > 0 || writtenReleases > 0) && !cancelled) {
              setStatusNotice(
                `Synced ${writtenSongs} song origin candidate(s) and ${writtenReleases} new Bollywood release(s) from scheduled background checks.`
              );
              if (writtenReleases > 0 && writtenSongs === 0) {
                setActiveTab('releases');
              }
            }
          }
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Admin sync error:', err);
        }
      }
    };

    void syncAdminState();
    return () => {
      cancelled = true;
    };
    // Intentionally sync on admin sign-in readiness
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authReady, isAdmin, user?.uid]);

  const getEditsForCandidate = (item: DiscoveryCandidateRecord): ApprovalEdits => {
    return (
      editsById[item.discoveryId] ?? {
        suggestedType: item.suggestedType,
        originalSongTitle: item.originalSongTitle,
        originalArtist: item.originalArtist,
        originalYear: item.originalYear,
        originCategory: item.originCategory,
        adaptationNotes: item.adaptationNotes,
        originalLink: item.originalLink,
        referenceSource: item.referenceSource,
      }
    );
  };

  const updateEditField = <K extends keyof ApprovalEdits>(
    item: DiscoveryCandidateRecord,
    field: K,
    value: ApprovalEdits[K]
  ) => {
    const current = getEditsForCandidate(item);
    setEditsById((prev) => ({
      ...prev,
      [item.discoveryId]: {
        ...current,
        [field]: value,
      },
    }));
  };

  const getEditsForRelease = (
    item: ReleaseDiscoveryRecord
  ): ReleaseApprovalEdits => {
    return (
      releaseEditsById[item.releaseId] ?? {
        title: item.title,
        year: item.year,
        cast: item.cast,
        label: item.label,
        significance: item.significance,
        songs: item.songs,
      }
    );
  };

  const updateReleaseField = <K extends keyof ReleaseApprovalEdits>(
    item: ReleaseDiscoveryRecord,
    field: K,
    value: ReleaseApprovalEdits[K]
  ) => {
    const current = getEditsForRelease(item);
    setReleaseEditsById((prev) => ({
      ...prev,
      [item.releaseId]: {
        ...current,
        [field]: value,
      },
    }));
  };

  const updateReleaseSongField = <K extends keyof LiveMovieSongPayload>(
    item: ReleaseDiscoveryRecord,
    index: number,
    field: K,
    value: LiveMovieSongPayload[K]
  ) => {
    const current = getEditsForRelease(item);
    const nextSongs = current.songs.map((s, idx) =>
      idx === index ? { ...s, [field]: value } : s
    );
    updateReleaseField(item, 'songs', nextSongs);
  };

  const addReleaseSongRow = (item: ReleaseDiscoveryRecord) => {
    const current = getEditsForRelease(item);
    const nextIndex = current.songs.length + 1;
    const newSong: LiveMovieSongPayload = {
      id: `${item.movieId}-${nextIndex}`,
      title: 'New Track Title',
      singers: 'Playback Singer(s)',
      lyricist: '',
      adaptationType: 'original',
      originalSongTitle: '',
      originalArtist: '',
      originalYear: '',
      originCategory: 'Original Composition',
      adaptationNotes: '',
      bollywoodLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${current.title} ${current.year}`)}`,
      originalLink: '',
      referenceSource: '',
    };
    updateReleaseField(item, 'songs', [...current.songs, newSong]);
  };

  const removeReleaseSongRow = (
    item: ReleaseDiscoveryRecord,
    index: number
  ) => {
    const current = getEditsForRelease(item);
    if (current.songs.length <= 1) return;
    updateReleaseField(
      item,
      'songs',
      current.songs.filter((_, idx) => idx !== index)
    );
  };

  const handleSignIn = async () => {
    setAuthError('');
    try {
      await signInAdminWithGoogle();
    } catch (err) {
      setAuthError(
        err instanceof Error ? err.message : 'Google Sign-In failed.'
      );
    }
  };

  const handleSaveSchedule = async () => {
    if (!user || !isAdmin) return;
    setIsSavingSchedule(true);
    setActionError('');
    setStatusNotice('');
    try {
      const idToken = await user.getIdToken();
      const [serverRes] = await Promise.all([
        fetch('/api/discovery/schedule', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            enabled: scheduleEnabled,
            intervalHours,
            targetDirector,
            batchSize,
          }),
        }),
        saveDiscoverySettings(user.uid, {
          enabled: scheduleEnabled,
          intervalHours,
          targetDirector,
          batchSize,
          lastScanAtIso,
          lastScanSummary,
        }),
      ]);

      if (!serverRes.ok) {
        const body = (await serverRes.json()) as { error?: string };
        throw new Error(body.error || 'Failed to update server scheduler.');
      }

      const nextStatus = (await serverRes.json()) as DiscoveryStatusInfo;
      setServerStatus(nextStatus);
      setStatusNotice(
        scheduleEnabled
          ? `Background Search-grounded checks enabled (every ${intervalHours} hours) for both song origins and new Hindi releases.`
          : 'Background scheduled checks paused (manual scans still available).'
      );
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Could not save schedule.'
      );
    } finally {
      setIsSavingSchedule(false);
    }
  };

  const handleRunManualScan = async () => {
    if (!user || !isAdmin || isScanning || isScanningReleases) return;
    setIsScanning(true);
    setActionError('');
    setStatusNotice('');

    try {
      const idToken = await user.getIdToken();
      const excludeSongIds = Array.from(
        new Set([
          ...Object.keys(liveOverrides),
          ...queueItems.map((q) => q.songId),
        ])
      );

      const response = await fetch('/api/discovery/scan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          targetDirector,
          batchSize,
          excludeSongIds,
          songQuery: songQuery.trim() || undefined,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        scannedCount?: number;
        candidates?: StagedServerCandidate[];
        scanSummary?: string;
        scannedAtIso?: string;
        status?: DiscoveryStatusInfo;
      };

      if (!response.ok) {
        throw new Error(payload.error || 'Search-grounded scan failed.');
      }

      const found = payload.candidates ?? [];
      const existingIds = new Set(excludeSongIds);
      const stagedCount = await stageDiscoveryCandidates(
        user.uid,
        found,
        existingIds
      );

      const summary =
        payload.scanSummary ||
        `Checked ${payload.scannedCount ?? 0} Original tracks; staged ${stagedCount} candidate(s).`;
      const scannedIso = payload.scannedAtIso || new Date().toISOString();

      setLastScanSummary(summary);
      setLastScanAtIso(scannedIso);
      if (payload.status) {
        setServerStatus(payload.status);
      }

      await saveDiscoverySettings(user.uid, {
        enabled: scheduleEnabled,
        intervalHours,
        targetDirector,
        batchSize,
        lastScanAtIso: scannedIso,
        lastScanSummary: summary,
      });

      setStatusNotice(summary);
      if (stagedCount > 0) {
        setActiveTab('pending');
      }
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Discovery scan failed.'
      );
    } finally {
      setIsScanning(false);
    }
  };

  const handleRunNewReleaseScan = async () => {
    if (!user || !isAdmin || isScanning || isScanningReleases) return;
    setIsScanningReleases(true);
    setActionError('');
    setStatusNotice('');

    try {
      const idToken = await user.getIdToken();
      const excludeMovieTitles = Array.from(
        new Set([
          ...allMovies.map((m) => m.title),
          ...releaseQueue.map((r) => r.title),
        ])
      );

      const response = await fetch('/api/discovery/scan-releases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          targetDirector,
          excludeMovieTitles,
        }),
      });

      const payload = (await response.json()) as {
        error?: string;
        releases?: StagedReleaseCandidate[];
        scanSummary?: string;
        scannedAtIso?: string;
        status?: DiscoveryStatusInfo;
      };

      if (!response.ok) {
        throw new Error(payload.error || 'New release scan failed.');
      }

      const foundReleases = payload.releases ?? [];
      const existingReleaseIds = new Set([
        ...liveMovies.map((m) => m.releaseId).filter(Boolean),
        ...releaseQueue.map((r) => r.releaseId),
      ]);

      const stagedCount = await stageReleaseCandidates(
        user.uid,
        foundReleases,
        existingReleaseIds
      );

      const summary =
        payload.scanSummary ||
        `Checked 2025–2027+ Bollywood releases; staged ${stagedCount} film(s).`;
      const scannedIso = payload.scannedAtIso || new Date().toISOString();

      setLastScanSummary(summary);
      setLastScanAtIso(scannedIso);
      if (payload.status) {
        setServerStatus(payload.status);
      }

      await saveDiscoverySettings(user.uid, {
        enabled: scheduleEnabled,
        intervalHours,
        targetDirector,
        batchSize,
        lastScanAtIso: scannedIso,
        lastScanSummary: summary,
      });

      setStatusNotice(summary);
      if (stagedCount > 0) {
        setActiveTab('releases');
      }
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'New release discovery scan failed.'
      );
    } finally {
      setIsScanningReleases(false);
    }
  };

  const handleApprove = async (item: DiscoveryCandidateRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.discoveryId);
    setActionError('');
    setStatusNotice('');
    try {
      const edits = getEditsForCandidate(item);
      await approveDiscoveryCandidate(user.uid, item, edits);
      setStatusNotice(
        `Approved "${item.songTitle}" — now live on the site as ${edits.suggestedType === 'copied' ? 'Close Similarity' : 'Inspired'}.`
      );
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to approve candidate.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleDismiss = async (item: DiscoveryCandidateRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.discoveryId);
    setActionError('');
    setStatusNotice('');
    try {
      await dismissDiscoveryCandidate(item.discoveryId);
      setStatusNotice(`Dismissed "${item.songTitle}" from pending review.`);
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to dismiss candidate.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleApproveRelease = async (item: ReleaseDiscoveryRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.releaseId);
    setActionError('');
    setStatusNotice('');
    try {
      const edits = getEditsForRelease(item);
      await approveReleaseCandidate(user.uid, item, edits);
      setStatusNotice(
        `Published "${edits.title} (${edits.year})" to the live Firestore archive under ${item.directorName}.`
      );
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to publish new release.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleDismissRelease = async (item: ReleaseDiscoveryRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.releaseId);
    setActionError('');
    setStatusNotice('');
    try {
      await dismissReleaseCandidate(item.releaseId);
      setStatusNotice(`Dismissed "${item.title}" from new releases queue.`);
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to dismiss release.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleDeleteFromHistory = async (item: DiscoveryCandidateRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.discoveryId);
    setActionError('');
    try {
      await deleteDiscoveryCandidate(item.discoveryId);
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to remove item.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleDeleteReleaseHistory = async (item: ReleaseDiscoveryRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(item.releaseId);
    setActionError('');
    try {
      await deleteReleaseCandidate(item.releaseId);
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to remove release item.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleRevertOverride = async (songId: string, songTitle: string) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(songId);
    setActionError('');
    setStatusNotice('');
    try {
      await revertSongOverride(songId);
      setStatusNotice(
        `Reverted "${songTitle}" back to its baseline Original classification.`
      );
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to revert override.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const handleRemoveLiveMovie = async (movie: LiveMovieRecord) => {
    if (!user || !isAdmin) return;
    setBusyDiscoveryId(movie.movieId);
    setActionError('');
    setStatusNotice('');
    try {
      await removeLiveMovie(movie.movieId);
      setStatusNotice(`Removed live film "${movie.title} (${movie.year})".`);
    } catch (err) {
      setActionError(
        err instanceof Error ? err.message : 'Failed to remove live film.'
      );
    } finally {
      setBusyDiscoveryId(null);
    }
  };

  const pendingItems = useMemo(
    () => queueItems.filter((i) => i.status === 'pending'),
    [queueItems]
  );
  const approvedItems = useMemo(
    () => queueItems.filter((i) => i.status === 'approved'),
    [queueItems]
  );
  const rejectedItems = useMemo(
    () => queueItems.filter((i) => i.status === 'rejected'),
    [queueItems]
  );

  const pendingReleases = useMemo(
    () => releaseQueue.filter((r) => r.status === 'pending'),
    [releaseQueue]
  );
  const approvedReleases = useMemo(
    () => releaseQueue.filter((r) => r.status === 'approved'),
    [releaseQueue]
  );
  const rejectedReleases = useMemo(
    () => releaseQueue.filter((r) => r.status === 'rejected'),
    [releaseQueue]
  );

  const overrideList = useMemo(
    () => Object.values(liveOverrides),
    [liveOverrides]
  );

  return (
    <section className="py-10 md:py-14">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Breadcrumb / Top Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E4DDD0]">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#57534E] hover:text-[#9A3412] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Back to Public Archive</span>
          </button>

          {user && (
            <div className="flex items-center gap-4 text-xs text-[#57534E]">
              <span>
                Signed in as{' '}
                <strong className="font-medium text-[#1C1917]">
                  {user.email}
                </strong>
              </span>
              <button
                type="button"
                onClick={() => void signOutAdmin()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 font-medium text-[#1C1917] bg-[#FFFFFF] border border-[#D6CEBE] rounded hover:bg-[#F2EDE4] transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs text-[#9A3412] font-mono uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Private Curator Queue</span>
          </div>
          <h1
            className="font-serif text-[#1C1917] font-semibold tracking-tight leading-tight mb-2"
            style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.75rem)' }}
          >
            Auto-Discovery &amp; 1-Click Approval Queue
          </h1>
          <p className="text-sm text-[#57534E] max-w-2xl leading-relaxed">
            Scheduled and on-demand Gemini checks grounded with Google Search scan
            both <strong>Original</strong> tracks for newly documented source
            references and <strong>upcoming Hindi releases (2025–2027+)</strong>{' '}
            for A. R. Rahman, Anu Malik, Nadeem–Shravan, and every active
            composer. Approve updates with one click to publish live without
            redeploying.
          </p>
        </div>

        {!authReady ? (
          <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-10 text-center text-sm text-[#57534E]">
            Verifying curator session...
          </div>
        ) : !user ? (
          <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-8 md:p-10 max-w-xl">
            <h2 className="font-serif text-2xl font-semibold text-[#1C1917] mb-2">
              Curator Sign-In Required
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-6">
              Access to the staged discovery queue and live database approval
              actions is restricted strictly to{' '}
              <span className="font-mono text-[#1C1917]">{ADMIN_EMAIL}</span>.
            </p>
            {authError && (
              <p className="text-xs text-[#9A3412] mb-4">{authError}</p>
            )}
            <button
              type="button"
              onClick={() => void handleSignIn()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] transition-colors cursor-pointer"
            >
              <span>Sign in with Google ({ADMIN_EMAIL})</span>
            </button>
          </div>
        ) : !isAdmin ? (
          <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-8 max-w-xl">
            <h2 className="font-serif text-2xl font-semibold text-[#9A3412] mb-2">
              Restricted Access
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed mb-5">
              You are signed in as{' '}
              <strong className="text-[#1C1917]">{user.email}</strong>. This
              review queue and live Firestore publishing workflow are locked to{' '}
              <span className="font-mono text-[#1C1917]">{ADMIN_EMAIL}</span>.
            </p>
            <button
              type="button"
              onClick={() => void signOutAdmin()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1C1917] bg-[#F2EDE4] border border-[#D6CEBE] rounded-md hover:bg-[#E4DDD0] transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Sign Out &amp; Switch Account</span>
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Feedback banners */}
            {statusNotice && (
              <div className="bg-[#FFFFFF] border border-[#14532D]/30 rounded-lg px-4 py-3 text-xs text-[#14532D] flex items-center justify-between gap-4">
                <span>{statusNotice}</span>
                <button
                  type="button"
                  onClick={() => setStatusNotice('')}
                  className="text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                  aria-label="Dismiss notice"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {actionError && (
              <div className="bg-[#FFFFFF] border border-[#9A3412]/40 rounded-lg px-4 py-3 text-xs text-[#9A3412] flex items-center justify-between gap-4">
                <span>{actionError}</span>
                <button
                  type="button"
                  onClick={() => setActionError('')}
                  className="text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                  aria-label="Dismiss error"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Scheduled Search-Grounded Discovery Controls */}
            <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-5 border-b border-[#EFEAE0]">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#1C1917]">
                    Search-Grounded Discovery &amp; Schedule
                  </h2>
                  <p className="text-xs text-[#6B655D] mt-1">
                    Checks both Original song origins and new/upcoming Hindi
                    Bollywood releases (2025–2027+) via Gemini with Google Search
                    Grounding.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    disabled={isScanning || isScanningReleases}
                    onClick={() => void handleRunNewReleaseScan()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1C1917] bg-[#F2EDE4] border border-[#D6CEBE] rounded-md hover:bg-[#E4DDD0] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <Film
                      className={`w-3.5 h-3.5 ${isScanningReleases ? 'animate-pulse' : ''}`}
                      aria-hidden="true"
                    />
                    <span>
                      {isScanningReleases
                        ? 'Checking Releases...'
                        : 'Scan New Hindi Releases (2025–2027+)'}
                    </span>
                  </button>

                  <button
                    type="button"
                    disabled={isScanning || isScanningReleases}
                    onClick={() => void handleRunManualScan()}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FBF9F5] bg-[#9A3412] rounded-md hover:bg-[#7C2D12] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <RefreshCw
                      className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`}
                      aria-hidden="true"
                    />
                    <span>
                      {isScanning
                        ? 'Scanning Song Origins...'
                        : 'Run Song-Origin Scan'}
                    </span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                <label className="block text-xs text-[#57534E]">
                  <span className="font-medium block mb-1.5 text-[#1C1917]">
                    Music Director Scope
                  </span>
                  <select
                    value={targetDirector}
                    onChange={(e) =>
                      setTargetDirector(
                        e.target.value as DiscoveryTargetDirector
                      )
                    }
                    className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                  >
                    <option value="all">All Active Directors</option>
                    {DIRECTORS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs text-[#57534E]">
                  <span className="font-medium block mb-1.5 text-[#1C1917]">
                    Tracks Checked Per Scan
                  </span>
                  <select
                    value={batchSize}
                    onChange={(e) => setBatchSize(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                  >
                    <option value={3}>3 Original tracks</option>
                    <option value={6}>6 Original tracks</option>
                    <option value={10}>10 Original tracks</option>
                  </select>
                </label>

                <label className="block text-xs text-[#57534E]">
                  <span className="font-medium block mb-1.5 text-[#1C1917]">
                    Background Schedule
                  </span>
                  <select
                    value={scheduleEnabled ? String(intervalHours) : 'paused'}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === 'paused') {
                        setScheduleEnabled(false);
                      } else {
                        setScheduleEnabled(true);
                        setIntervalHours(Number(val));
                      }
                    }}
                    className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                  >
                    <option value="6">Every 6 hours</option>
                    <option value="12">Every 12 hours</option>
                    <option value="24">Every 24 hours (Recommended)</option>
                    <option value="72">Every 3 days</option>
                    <option value="168">Weekly</option>
                    <option value="paused">Paused (Manual only)</option>
                  </select>
                </label>

                <label className="block text-xs text-[#57534E]">
                  <span className="font-medium block mb-1.5 text-[#1C1917]">
                    Optional Song / Film Filter
                  </span>
                  <div className="relative">
                    <Search
                      className="w-3.5 h-3.5 text-[#78716C] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      value={songQuery}
                      onChange={(e) => setSongQuery(e.target.value)}
                      placeholder="e.g. Rockstar or Chhaava"
                      className="w-full pl-8 pr-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#9A3412]"
                    />
                  </div>
                </label>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#EFEAE0] text-xs text-[#6B655D]">
                <div className="space-y-0.5">
                  <div>
                    <strong className="text-[#1C1917] font-medium">
                      Latest Check:
                    </strong>{' '}
                    {lastScanSummary ||
                      serverStatus?.lastScanSummary ||
                      'Ready'}
                  </div>
                  {(lastScanAtIso || serverStatus?.lastScanAtIso) && (
                    <div className="font-mono text-[11px] text-[#78716C] tabular-nums">
                      Last run:{' '}
                      {new Date(
                        lastScanAtIso || serverStatus?.lastScanAtIso || ''
                      ).toLocaleString()}
                      {scheduleEnabled && serverStatus?.nextScanAtIso
                        ? ` · Next scheduled: ${new Date(serverStatus.nextScanAtIso).toLocaleString()}`
                        : ''}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  disabled={isSavingSchedule}
                  onClick={() => void handleSaveSchedule()}
                  className="px-3.5 py-2 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-[#D6CEBE] rounded hover:bg-[#F2EDE4] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isSavingSchedule ? 'Saving...' : 'Save Schedule Settings'}
                </button>
              </div>
            </div>

            {/* Queue Tabs */}
            <div className="flex items-center gap-1 p-1 bg-[#F2EDE4] rounded-lg overflow-x-auto w-fit max-w-full">
              {(
                [
                  {
                    id: 'pending',
                    label: `Song Origin Queue (${pendingItems.length})`,
                  },
                  {
                    id: 'releases',
                    label: `New Releases Queue (${pendingReleases.length})`,
                  },
                  {
                    id: 'live-films',
                    label: `Live Added Films (${liveMovies.length})`,
                  },
                  {
                    id: 'overrides',
                    label: `Live Site Overrides (${overrideList.length})`,
                  },
                  {
                    id: 'approved',
                    label: `Approved Log (${approvedItems.length + approvedReleases.length})`,
                  },
                  {
                    id: 'rejected',
                    label: `Dismissed (${rejectedItems.length + rejectedReleases.length})`,
                  },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                    activeTab === tab.id
                      ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1C1917]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Song Origins Pending Tab */}
            {activeTab === 'pending' && (
              <div className="space-y-5">
                {pendingItems.length === 0 ? (
                  <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-10 text-center">
                    <p className="font-serif text-xl text-[#1C1917] mb-1">
                      No pending song-origin discoveries in queue
                    </p>
                    <p className="text-xs text-[#6B655D] max-w-md mx-auto">
                      Click &ldquo;Run Song-Origin Scan&rdquo; above to check
                      Original tracks against public musicology sources, or wait
                      for the next scheduled background check.
                    </p>
                  </div>
                ) : (
                  pendingItems.map((item) => {
                    const edits = getEditsForCandidate(item);
                    const isBusy = busyDiscoveryId === item.discoveryId;
                    return (
                      <article
                        key={item.discoveryId}
                        className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-6"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 mb-5 border-b border-[#EFEAE0]">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B655D] mb-1">
                              <span className="font-medium text-[#9A3412]">
                                {item.directorName}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span>
                                {item.movieTitle} ({item.movieYear})
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="capitalize">
                                {item.confidence} confidence
                              </span>
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                              {item.songTitle}
                            </h3>
                            <p className="text-xs text-[#6B655D] mt-0.5">
                              Singers: {item.singers || 'Archive recording'} ·
                              Currently marked <strong>Original</strong>
                            </p>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 shrink-0">
                            {item.bollywoodLink && (
                              <a
                                href={item.bollywoodLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#1C1917] bg-[#FBF9F5] border border-[#D6CEBE] rounded hover:border-[#9A3412] hover:text-[#9A3412] transition-colors"
                              >
                                <span>Movie Song</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                            {item.sourceUrl && (
                              <a
                                href={item.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#1E3A8A] bg-[#1E3A8A]/5 border border-[#1E3A8A]/25 rounded hover:bg-[#1E3A8A]/10 transition-colors"
                              >
                                <span>Grounded Source</span>
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Editable Discovery Metadata */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Approved Classification
                            </span>
                            <select
                              value={edits.suggestedType}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'suggestedType',
                                  e.target.value as ApprovedAdaptationType
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            >
                              <option value="copied">Close Similarity</option>
                              <option value="inspired">Inspired</option>
                            </select>
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Reported Original Song
                            </span>
                            <input
                              type="text"
                              value={edits.originalSongTitle}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'originalSongTitle',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Original Artist / Composer
                            </span>
                            <input
                              type="text"
                              value={edits.originalArtist}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'originalArtist',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Original Year
                            </span>
                            <input
                              type="text"
                              value={edits.originalYear}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'originalYear',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Origin Region
                            </span>
                            <select
                              value={edits.originCategory}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'originCategory',
                                  e.target.value as OriginCategory
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            >
                              {ORIGIN_CATEGORIES.filter(
                                (c) => c !== 'Original Composition'
                              ).map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Reference Attribution
                            </span>
                            <input
                              type="text"
                              value={edits.referenceSource}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'referenceSource',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Comparative Notes
                            </span>
                            <textarea
                              rows={2}
                              value={edits.adaptationNotes}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'adaptationNotes',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium flex items-center justify-between mb-1 text-[#1C1917]">
                              <span>Original Source Listening Link</span>
                              {edits.originalLink && (
                                <a
                                  href={edits.originalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#9A3412] hover:underline inline-flex items-center gap-1"
                                >
                                  <span>Preview Link</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </span>
                            <input
                              type="url"
                              value={edits.originalLink}
                              onChange={(e) =>
                                updateEditField(
                                  item,
                                  'originalLink',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#EFEAE0]">
                          <span className="text-[11px] text-[#78716C] font-mono">
                            Staged:{' '}
                            {new Date(item.discoveredAtIso).toLocaleString()}
                            {item.sourceTitle ? ` · ${item.sourceTitle}` : ''}
                          </span>

                          <div className="flex items-center gap-2.5">
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => void handleDismiss(item)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#57534E] bg-[#FBF9F5] border border-[#D6CEBE] rounded-md hover:bg-[#F2EDE4] hover:text-[#1C1917] disabled:opacity-60 transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Dismiss</span>
                            </button>

                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => void handleApprove(item)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] rounded-md hover:bg-[#14532D]/90 disabled:opacity-60 transition-colors cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>
                                {isBusy
                                  ? 'Publishing...'
                                  : 'Approve & Publish to Live Site'}
                              </span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            )}

            {/* New Releases Pending Tab (2025-2027+) */}
            {activeTab === 'releases' && (
              <div className="space-y-5">
                {pendingReleases.length === 0 ? (
                  <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-10 text-center">
                    <p className="font-serif text-xl text-[#1C1917] mb-1">
                      No new Hindi releases staged for approval
                    </p>
                    <p className="text-xs text-[#6B655D] max-w-lg mx-auto">
                      Click &ldquo;Scan New Hindi Releases (2025–2027+)&rdquo;
                      above to search for upcoming or newly released Hindi
                      soundtracks by A. R. Rahman, Anu Malik,
                      Nadeem–Shravan, and other active composers. South Indian
                      and dubbed titles are automatically filtered out.
                    </p>
                  </div>
                ) : (
                  pendingReleases.map((item) => {
                    const edits = getEditsForRelease(item);
                    const isBusy = busyDiscoveryId === item.releaseId;
                    return (
                      <article
                        key={item.releaseId}
                        className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg p-6"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4 pb-4 mb-5 border-b border-[#EFEAE0]">
                          <div>
                            <div className="flex flex-wrap items-center gap-2 text-xs text-[#6B655D] mb-1">
                              <span className="font-medium text-[#9A3412]">
                                {item.directorName}
                              </span>
                              <span aria-hidden="true">·</span>
                              <span className="font-mono">{edits.year}</span>
                              <span aria-hidden="true">·</span>
                              <span>Hindi (Bollywood) Release</span>
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-[#1C1917]">
                              {edits.title}
                            </h3>
                          </div>

                          {item.sourceUrl && (
                            <a
                              href={item.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-[#1E3A8A] bg-[#1E3A8A]/5 border border-[#1E3A8A]/25 rounded hover:bg-[#1E3A8A]/10 transition-colors shrink-0"
                            >
                              <span>Grounded Source</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Film Title
                            </span>
                            <input
                              type="text"
                              value={edits.title}
                              onChange={(e) =>
                                updateReleaseField(item, 'title', e.target.value)
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Release Year
                            </span>
                            <input
                              type="number"
                              min={1930}
                              max={2035}
                              value={edits.year}
                              onChange={(e) =>
                                updateReleaseField(
                                  item,
                                  'year',
                                  Number(e.target.value) || item.year
                                )
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Lead Cast
                            </span>
                            <input
                              type="text"
                              value={edits.cast}
                              onChange={(e) =>
                                updateReleaseField(item, 'cast', e.target.value)
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>

                          <label className="block text-xs text-[#57534E]">
                            <span className="font-medium block mb-1 text-[#1C1917]">
                              Music Label
                            </span>
                            <input
                              type="text"
                              value={edits.label}
                              onChange={(e) =>
                                updateReleaseField(item, 'label', e.target.value)
                              }
                              className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                            />
                          </label>
                        </div>

                        <label className="block text-xs text-[#57534E] mb-5">
                          <span className="font-medium block mb-1 text-[#1C1917]">
                            Editorial Note / Hindi Release Confirmation
                          </span>
                          <input
                            type="text"
                            value={edits.significance}
                            onChange={(e) =>
                              updateReleaseField(
                                item,
                                'significance',
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 text-xs bg-[#FBF9F5] border border-[#D6CEBE] rounded text-[#1C1917] focus:outline-none focus:border-[#9A3412]"
                          />
                        </label>

                        {/* Songs Editor */}
                        <div className="mb-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-[#1C1917]">
                              Soundtrack Tracks ({edits.songs.length})
                            </span>
                            <button
                              type="button"
                              onClick={() => addReleaseSongRow(item)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#9A3412] bg-[#FBF9F5] border border-[#D6CEBE] rounded hover:bg-[#F2EDE4] cursor-pointer"
                            >
                              <Plus className="w-3 h-3" aria-hidden="true" />
                              <span>Add Track</span>
                            </button>
                          </div>

                          <div className="space-y-3">
                            {edits.songs.map((song, idx) => (
                              <div
                                key={song.id}
                                className="p-3.5 bg-[#FBF9F5] border border-[#E4DDD0] rounded-md grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
                              >
                                <label className="md:col-span-3 block text-xs text-[#57534E]">
                                  <span className="font-medium block mb-1 text-[#1C1917]">
                                    Song Title
                                  </span>
                                  <input
                                    type="text"
                                    value={song.title}
                                    onChange={(e) =>
                                      updateReleaseSongField(
                                        item,
                                        idx,
                                        'title',
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917]"
                                  />
                                </label>

                                <label className="md:col-span-3 block text-xs text-[#57534E]">
                                  <span className="font-medium block mb-1 text-[#1C1917]">
                                    Singers
                                  </span>
                                  <input
                                    type="text"
                                    value={song.singers}
                                    onChange={(e) =>
                                      updateReleaseSongField(
                                        item,
                                        idx,
                                        'singers',
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917]"
                                  />
                                </label>

                                <label className="md:col-span-2 block text-xs text-[#57534E]">
                                  <span className="font-medium block mb-1 text-[#1C1917]">
                                    Classification
                                  </span>
                                  <select
                                    value={song.adaptationType}
                                    onChange={(e) =>
                                      updateReleaseSongField(
                                        item,
                                        idx,
                                        'adaptationType',
                                        e.target.value as AdaptationType
                                      )
                                    }
                                    className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917]"
                                  >
                                    <option value="original">Original</option>
                                    <option value="inspired">Inspired</option>
                                    <option value="copied">
                                      Close Similarity
                                    </option>
                                  </select>
                                </label>

                                <label className="md:col-span-3 block text-xs text-[#57534E]">
                                  <span className="font-medium block mb-1 text-[#1C1917]">
                                    Origin Source (if applicable)
                                  </span>
                                  <input
                                    type="text"
                                    value={song.originalSongTitle}
                                    placeholder="Leave blank if Original"
                                    onChange={(e) =>
                                      updateReleaseSongField(
                                        item,
                                        idx,
                                        'originalSongTitle',
                                        e.target.value
                                      )
                                    }
                                    className="w-full px-2.5 py-1.5 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded text-[#1C1917]"
                                  />
                                </label>

                                <div className="md:col-span-1 flex justify-end">
                                  <button
                                    type="button"
                                    disabled={edits.songs.length <= 1}
                                    onClick={() =>
                                      removeReleaseSongRow(item, idx)
                                    }
                                    title="Remove track"
                                    className="p-1.5 text-[#78716C] hover:text-[#9A3412] disabled:opacity-30 cursor-pointer"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#EFEAE0]">
                          <span className="text-[11px] text-[#78716C] font-mono">
                            Staged:{' '}
                            {new Date(item.discoveredAtIso).toLocaleString()}
                            {item.sourceTitle ? ` · ${item.sourceTitle}` : ''}
                          </span>

                          <div className="flex items-center gap-2.5">
                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => void handleDismissRelease(item)}
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#57534E] bg-[#FBF9F5] border border-[#D6CEBE] rounded-md hover:bg-[#F2EDE4] hover:text-[#1C1917] disabled:opacity-60 transition-colors cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>Dismiss</span>
                            </button>

                            <button
                              type="button"
                              disabled={isBusy}
                              onClick={() => void handleApproveRelease(item)}
                              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#FBF9F5] bg-[#14532D] rounded-md hover:bg-[#14532D]/90 disabled:opacity-60 transition-colors cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>
                                {isBusy
                                  ? 'Publishing...'
                                  : 'Approve & Add Film to Live Archive'}
                              </span>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            )}

            {/* Live Added Films Tab */}
            {activeTab === 'live-films' && (
              <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg overflow-hidden">
                {liveMovies.length === 0 ? (
                  <div className="p-10 text-center text-xs text-[#6B655D]">
                    No live Firestore film additions published yet. Approved new
                    Hindi releases (2025–2027+) will appear here and merge
                    directly into the public archive.
                  </div>
                ) : (
                  <div className="divide-y divide-[#EFEAE0]">
                    {liveMovies.map((lm) => {
                      const isBusy = busyDiscoveryId === lm.movieId;
                      return (
                        <div
                          key={lm.movieId}
                          className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                          <div>
                            <div className="text-xs text-[#6B655D] mb-1">
                              <span className="font-medium text-[#9A3412]">
                                {directorNameMap.get(lm.directorId) ??
                                  lm.directorId}
                              </span>
                              <span className="mx-1.5">·</span>
                              <span className="font-mono">{lm.year}</span>
                              <span className="mx-1.5">·</span>
                              <span>
                                {lm.songs.length}{' '}
                                {lm.songs.length === 1 ? 'track' : 'tracks'}
                              </span>
                            </div>
                            <div className="font-serif text-lg font-semibold text-[#1C1917]">
                              {lm.title}
                            </div>
                            {lm.cast && (
                              <div className="text-xs text-[#57534E] mt-0.5">
                                {lm.cast}
                                {lm.label ? ` · ${lm.label}` : ''}
                              </div>
                            )}
                          </div>

                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() => void handleRemoveLiveMovie(lm)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#9A3412] bg-[#FBF9F5] border border-[#9A3412]/30 rounded hover:bg-[#9A3412]/5 disabled:opacity-60 transition-colors cursor-pointer shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Remove Film</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Live Song Overrides Tab */}
            {activeTab === 'overrides' && (
              <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg overflow-hidden">
                {overrideList.length === 0 ? (
                  <div className="p-10 text-center text-xs text-[#6B655D]">
                    No live Firestore overrides published yet. Approved
                    song-origin discoveries will appear here and immediately
                    update the public archive.
                  </div>
                ) : (
                  <div className="divide-y divide-[#EFEAE0]">
                    {overrideList.map((ov) => {
                      const info = songLookup.get(ov.songId);
                      const isBusy = busyDiscoveryId === ov.songId;
                      return (
                        <div
                          key={ov.songId}
                          className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                        >
                          <div>
                            <div className="text-xs text-[#6B655D] mb-1">
                              <span>{info?.directorName ?? ov.directorId}</span>
                              <span className="mx-1.5">·</span>
                              <span>
                                {info
                                  ? `${info.movieTitle} (${info.movieYear})`
                                  : ov.movieId}
                              </span>
                              <span className="mx-1.5">·</span>
                              <span
                                className={
                                  ov.adaptationType === 'copied'
                                    ? 'text-[#9A3412] font-semibold'
                                    : 'text-[#1E3A8A] font-semibold'
                                }
                              >
                                {ov.adaptationType === 'copied'
                                  ? 'Close Similarity'
                                  : 'Inspired'}
                              </span>
                            </div>
                            <div className="font-serif text-lg font-semibold text-[#1C1917]">
                              {info?.title ?? ov.songId}
                            </div>
                            <div className="text-xs text-[#57534E] mt-0.5">
                              Origin: <strong>{ov.originalSongTitle}</strong> —{' '}
                              {ov.originalArtist}
                              {ov.originalYear ? ` (${ov.originalYear})` : ''} ·{' '}
                              {ov.originCategory}
                            </div>
                          </div>

                          <button
                            type="button"
                            disabled={isBusy}
                            onClick={() =>
                              void handleRevertOverride(
                                ov.songId,
                                info?.title ?? ov.songId
                              )
                            }
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#9A3412] bg-[#FBF9F5] border border-[#9A3412]/30 rounded hover:bg-[#9A3412]/5 disabled:opacity-60 transition-colors cursor-pointer shrink-0"
                          >
                            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Revert to Original</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* Approved / Dismissed History Tabs */}
            {(activeTab === 'approved' || activeTab === 'rejected') && (
              <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg overflow-hidden">
                {(activeTab === 'approved'
                  ? approvedItems.length + approvedReleases.length
                  : rejectedItems.length + rejectedReleases.length) === 0 ? (
                  <div className="p-10 text-center text-xs text-[#6B655D]">
                    No items in this log yet.
                  </div>
                ) : (
                  <div className="divide-y divide-[#EFEAE0]">
                    {(activeTab === 'approved'
                      ? approvedReleases
                      : rejectedReleases
                    ).map((rel) => (
                      <div
                        key={rel.releaseId}
                        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-xs text-[#6B655D] mb-0.5">
                            New Release · {rel.directorName} · {rel.year}
                          </div>
                          <div className="font-medium text-sm text-[#1C1917]">
                            {rel.title} ({rel.songs.length} tracks)
                          </div>
                          {rel.cast && (
                            <div className="text-xs text-[#78716C] mt-0.5">
                              {rel.cast}
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          disabled={busyDiscoveryId === rel.releaseId}
                          onClick={() => void handleDeleteReleaseHistory(rel)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#57534E] hover:text-[#9A3412] border border-[#E4DDD0] rounded cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Clear</span>
                        </button>
                      </div>
                    ))}

                    {(activeTab === 'approved'
                      ? approvedItems
                      : rejectedItems
                    ).map((item) => (
                      <div
                        key={item.discoveryId}
                        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div>
                          <div className="text-xs text-[#6B655D] mb-0.5">
                            Song Origin · {item.directorName} · {item.movieTitle}{' '}
                            ({item.movieYear})
                          </div>
                          <div className="font-medium text-sm text-[#1C1917]">
                            {item.songTitle} ← {item.originalSongTitle} (
                            {item.originalArtist})
                          </div>
                          <div className="text-xs text-[#78716C] mt-0.5">
                            {item.referenceSource}
                          </div>
                        </div>

                        <button
                          type="button"
                          disabled={busyDiscoveryId === item.discoveryId}
                          onClick={() => void handleDeleteFromHistory(item)}
                          className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs text-[#57534E] hover:text-[#9A3412] border border-[#E4DDD0] rounded cursor-pointer shrink-0"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Clear</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
