import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
  writeBatch,
  type Unsubscribe,
} from 'firebase/firestore';
import {
  ORIGIN_CATEGORIES,
  type AdaptationType,
  type ApprovedAdaptationType,
  type DirectorId,
  type DiscoveryCandidateRecord,
  type DiscoverySettingsRecord,
  type DiscoveryTargetDirector,
  type LiveMovieRecord,
  type LiveMovieSongPayload,
  type OriginCategory,
  type ReleaseDiscoveryRecord,
  type SongOverrideRecord,
  type StagedReleaseCandidate,
  type StagedServerCandidate,
} from '../types/archive';
import { db, handleFirestoreError, OperationType } from './firebase';

const VALID_ID_REGEX = /^[a-zA-Z0-9_\-]+$/;
const VALID_DIRECTORS: DirectorId[] = [
  'nadeem-shravan',
  'anu-malik',
  'rd-burman',
  'shankar-jaikishan',
  'ar-rahman',
  'naushad',
  'op-nayyar',
  'anand-milind',
  'laxmikant-pyarelal',
  'sd-burman',
  'ravi',
  'roshan',
  'madan-mohan',
  'bappi-lahiri',
  'jatin-lalit',
  'kalyanji-anandji',
  'khayyam',
  'dilip-sen-sameer-sen',
];
const VALID_TARGET_DIRECTORS: DiscoveryTargetDirector[] = [
  'all',
  ...VALID_DIRECTORS,
];

function sanitizeId(raw: string, fallback = 'item'): string {
  const cleaned = raw.replace(/[^a-zA-Z0-9_\-]/g, '_').slice(0, 128);
  return VALID_ID_REGEX.test(cleaned) && cleaned.length > 0 ? cleaned : fallback;
}

function clampString(value: unknown, maxLen: number, fallback = ''): string {
  const str = typeof value === 'string' ? value.trim() : fallback;
  return str.slice(0, maxLen);
}

function normalizeAdaptationType(value: unknown): ApprovedAdaptationType {
  return value === 'copied' ? 'copied' : 'inspired';
}

function normalizeAnyAdaptationType(value: unknown): AdaptationType {
  if (value === 'copied' || value === 'inspired') return value;
  return 'original';
}

function normalizeOriginCategory(value: unknown): OriginCategory {
  if (
    typeof value === 'string' &&
    ORIGIN_CATEGORIES.includes(value as OriginCategory)
  ) {
    return value as OriginCategory;
  }
  return 'Original Composition';
}

function normalizeDirectorId(value: unknown): DirectorId {
  if (
    typeof value === 'string' &&
    VALID_DIRECTORS.includes(value as DirectorId)
  ) {
    return value as DirectorId;
  }
  return 'nadeem-shravan';
}

function normalizeTargetDirector(value: unknown): DiscoveryTargetDirector {
  if (
    typeof value === 'string' &&
    VALID_TARGET_DIRECTORS.includes(value as DiscoveryTargetDirector)
  ) {
    return value as DiscoveryTargetDirector;
  }
  return 'all';
}

function sanitizeReleaseSongs(
  movieId: string,
  songs: LiveMovieSongPayload[]
): LiveMovieSongPayload[] {
  const cleaned = songs.slice(0, 25).map((song, idx) => ({
    id: sanitizeId(song.id || `${movieId}-${idx + 1}`, `${movieId}-${idx + 1}`),
    title: clampString(song.title, 200, `Track ${idx + 1}`),
    singers: clampString(song.singers, 300, 'Archive Listing'),
    lyricist: clampString(song.lyricist, 200, ''),
    adaptationType: normalizeAnyAdaptationType(song.adaptationType),
    originalSongTitle: clampString(song.originalSongTitle, 200, ''),
    originalArtist: clampString(song.originalArtist, 200, ''),
    originalYear: clampString(song.originalYear, 32, ''),
    originCategory: normalizeOriginCategory(song.originCategory),
    adaptationNotes: clampString(song.adaptationNotes, 1200, ''),
    bollywoodLink: clampString(
      song.bollywoodLink,
      500,
      `https://www.youtube.com/results?search_query=${encodeURIComponent(song.title || movieId)}`
    ),
    originalLink: clampString(song.originalLink, 500, ''),
    referenceSource: clampString(song.referenceSource, 300, ''),
  }));

  if (cleaned.length === 0) {
    cleaned.push({
      id: `${movieId}-1`,
      title: 'Title Track / Main Theme',
      singers: 'Soundtrack Listing',
      lyricist: '',
      adaptationType: 'original',
      originalSongTitle: '',
      originalArtist: '',
      originalYear: '',
      originCategory: 'Original Composition',
      adaptationNotes: '',
      bollywoodLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(movieId)}`,
      originalLink: '',
      referenceSource: '',
    });
  }

  return cleaned;
}

export function subscribeToSongOverrides(
  onData: (overrides: Record<string, SongOverrideRecord>) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  const path = 'song_overrides';
  const q = query(
    collection(db, path),
    where('adaptationType', 'in', ['copied', 'inspired'])
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const map: Record<string, SongOverrideRecord> = {};
      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as SongOverrideRecord;
        if (data?.songId) {
          map[data.songId] = data;
        }
      });
      onData(map);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        if (onError && wrapped instanceof Error) {
          onError(wrapped);
        }
      }
    }
  );
}

export function subscribeToLiveMovies(
  onData: (movies: LiveMovieRecord[]) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  const path = 'live_movies';
  const q = query(
    collection(db, path),
    where('year', '>=', 1930),
    where('year', '<=', 2035)
  );

  return onSnapshot(
    q,
    (snapshot) => {
      const items: LiveMovieRecord[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data() as LiveMovieRecord;
        if (data?.movieId) {
          items.push(data);
        }
      });
      items.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
      onData(items);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        if (onError && wrapped instanceof Error) {
          onError(wrapped);
        }
      }
    }
  );
}

export function subscribeToDiscoveryQueue(
  uid: string,
  onData: (items: DiscoveryCandidateRecord[]) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  const path = 'discovery_queue';
  const q = query(collection(db, path), where('ownerUid', '==', uid));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: DiscoveryCandidateRecord[] = [];
      snapshot.forEach((docSnap) => {
        items.push(docSnap.data() as DiscoveryCandidateRecord);
      });
      items.sort((a, b) =>
        (b.discoveredAtIso || '').localeCompare(a.discoveredAtIso || '')
      );
      onData(items);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        if (onError && wrapped instanceof Error) {
          onError(wrapped);
        }
      }
    }
  );
}

export function subscribeToReleaseQueue(
  uid: string,
  onData: (items: ReleaseDiscoveryRecord[]) => void,
  onError?: (err: Error) => void
): Unsubscribe {
  const path = 'release_queue';
  const q = query(collection(db, path), where('ownerUid', '==', uid));

  return onSnapshot(
    q,
    (snapshot) => {
      const items: ReleaseDiscoveryRecord[] = [];
      snapshot.forEach((docSnap) => {
        items.push(docSnap.data() as ReleaseDiscoveryRecord);
      });
      items.sort((a, b) =>
        (b.discoveredAtIso || '').localeCompare(a.discoveredAtIso || '')
      );
      onData(items);
    },
    (error) => {
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch (wrapped) {
        if (onError && wrapped instanceof Error) {
          onError(wrapped);
        }
      }
    }
  );
}

export async function stageDiscoveryCandidates(
  uid: string,
  candidates: StagedServerCandidate[],
  existingSongIds: Set<string>
): Promise<number> {
  const ownerUid = sanitizeId(uid);
  const candidatesToWrite = candidates.filter(
    (c) => c.songId && !existingSongIds.has(c.songId)
  );
  if (candidatesToWrite.length === 0) return 0;

  const batch = writeBatch(db);
  let stagedCount = 0;

  for (const c of candidatesToWrite) {
    const discoveryId = sanitizeId(c.discoveryId, `disc_${Date.now()}`);
    const songId = sanitizeId(c.songId);
    const movieId = sanitizeId(c.movieId);
    const ref = doc(db, 'discovery_queue', discoveryId);

    const payload: Record<string, unknown> = {
      discoveryId,
      songId,
      movieId,
      directorId: normalizeDirectorId(c.directorId),
      directorName: clampString(c.directorName, 120, 'Bollywood Composer'),
      movieTitle: clampString(c.movieTitle, 200, 'Untitled Film'),
      movieYear: Number.isInteger(c.movieYear)
        ? Math.min(2035, Math.max(1930, c.movieYear))
        : 1990,
      songTitle: clampString(c.songTitle, 200, 'Untitled Track'),
      singers: clampString(c.singers, 300, ''),
      bollywoodLink: clampString(c.bollywoodLink, 500, ''),
      suggestedType: normalizeAdaptationType(c.suggestedType),
      originalSongTitle: clampString(
        c.originalSongTitle,
        200,
        'Reported Source Track'
      ),
      originalArtist: clampString(c.originalArtist, 200, 'Original Artist'),
      originalYear: clampString(c.originalYear, 32, ''),
      originCategory: normalizeOriginCategory(c.originCategory),
      adaptationNotes: clampString(c.adaptationNotes, 1200, ''),
      originalLink: clampString(c.originalLink, 500, ''),
      referenceSource: clampString(
        c.referenceSource,
        300,
        'Google Search Grounding'
      ),
      sourceUrl: clampString(c.sourceUrl, 500, ''),
      sourceTitle: clampString(c.sourceTitle, 300, ''),
      confidence: c.confidence === 'high' ? 'high' : 'medium',
      status: 'pending',
      discoveredAtIso: clampString(
        c.discoveredAtIso,
        64,
        new Date().toISOString()
      ),
      ownerUid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    batch.set(ref, payload);
    stagedCount += 1;
  }

  try {
    await batch.commit();
    return stagedCount;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'discovery_queue');
  }
}

export async function stageReleaseCandidates(
  uid: string,
  candidates: StagedReleaseCandidate[],
  existingReleaseIds: Set<string>
): Promise<number> {
  const ownerUid = sanitizeId(uid);
  const toWrite = candidates.filter(
    (c) => c.movieId && !existingReleaseIds.has(c.releaseId)
  );
  if (toWrite.length === 0) return 0;

  const batch = writeBatch(db);
  let stagedCount = 0;

  for (const c of toWrite) {
    const releaseId = sanitizeId(c.releaseId, `rel_${Date.now()}`);
    const movieId = sanitizeId(c.movieId, `live_${Date.now()}`);
    const ref = doc(db, 'release_queue', releaseId);

    batch.set(ref, {
      releaseId,
      movieId,
      directorId: normalizeDirectorId(c.directorId),
      directorName: clampString(c.directorName, 120, 'Bollywood Composer'),
      title: clampString(c.title, 200, 'Untitled Release'),
      year: Number.isInteger(c.year)
        ? Math.min(2035, Math.max(1930, c.year))
        : new Date().getFullYear(),
      cast: clampString(c.cast, 300, ''),
      label: clampString(c.label, 120, ''),
      significance: clampString(c.significance, 600, ''),
      songs: sanitizeReleaseSongs(movieId, c.songs),
      sourceUrl: clampString(c.sourceUrl, 500, ''),
      sourceTitle: clampString(c.sourceTitle, 300, ''),
      status: 'pending',
      discoveredAtIso: clampString(
        c.discoveredAtIso,
        64,
        new Date().toISOString()
      ),
      ownerUid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    stagedCount += 1;
  }

  try {
    await batch.commit();
    return stagedCount;
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, 'release_queue');
  }
}

export interface ApprovalEdits {
  suggestedType: ApprovedAdaptationType;
  originalSongTitle: string;
  originalArtist: string;
  originalYear: string;
  originCategory: OriginCategory;
  adaptationNotes: string;
  originalLink: string;
  referenceSource: string;
}

export async function approveDiscoveryCandidate(
  uid: string,
  candidate: DiscoveryCandidateRecord,
  edits: ApprovalEdits
): Promise<void> {
  const ownerUid = sanitizeId(uid);
  const discoveryId = sanitizeId(candidate.discoveryId);
  const songId = sanitizeId(candidate.songId);
  const movieId = sanitizeId(candidate.movieId);

  const overrideRef = doc(db, 'song_overrides', songId);
  const queueRef = doc(db, 'discovery_queue', discoveryId);

  let existingOverrideCreatedAt: unknown = null;
  try {
    const existingSnap = await getDoc(overrideRef);
    if (existingSnap.exists()) {
      existingOverrideCreatedAt = existingSnap.data()?.createdAt ?? null;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `song_overrides/${songId}`);
  }

  const adaptationType = normalizeAdaptationType(edits.suggestedType);
  const originalSongTitle = clampString(
    edits.originalSongTitle,
    200,
    candidate.originalSongTitle
  );
  const originalArtist = clampString(
    edits.originalArtist,
    200,
    candidate.originalArtist
  );
  const originalYear = clampString(edits.originalYear, 32, '');
  const originCategory = normalizeOriginCategory(edits.originCategory);
  const adaptationNotes = clampString(edits.adaptationNotes, 1200, '');
  const originalLink = clampString(edits.originalLink, 500, '');
  const referenceSource = clampString(edits.referenceSource, 300, '');

  const batch = writeBatch(db);

  if (existingOverrideCreatedAt) {
    batch.update(overrideRef, {
      adaptationType,
      originalSongTitle,
      originalArtist,
      originalYear,
      originCategory,
      adaptationNotes,
      originalLink,
      referenceSource,
      sourceUrl: clampString(candidate.sourceUrl, 500, ''),
      discoveryId,
      updatedAt: serverTimestamp(),
    });
  } else {
    batch.set(overrideRef, {
      songId,
      movieId,
      directorId: normalizeDirectorId(candidate.directorId),
      adaptationType,
      originalSongTitle,
      originalArtist,
      originalYear,
      originCategory,
      adaptationNotes,
      originalLink,
      referenceSource,
      sourceUrl: clampString(candidate.sourceUrl, 500, ''),
      discoveryId,
      approvedBy: ownerUid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  batch.update(queueRef, {
    status: 'approved',
    suggestedType: adaptationType,
    originalSongTitle,
    originalArtist,
    originalYear,
    originCategory,
    adaptationNotes,
    originalLink,
    referenceSource,
    updatedAt: serverTimestamp(),
  });

  try {
    await batch.commit();
  } catch (error) {
    handleFirestoreError(
      error,
      OperationType.WRITE,
      `song_overrides/${songId},discovery_queue/${discoveryId}`
    );
  }
}

export interface ReleaseApprovalEdits {
  title: string;
  year: number;
  cast: string;
  label: string;
  significance: string;
  songs: LiveMovieSongPayload[];
}

export async function approveReleaseCandidate(
  uid: string,
  candidate: ReleaseDiscoveryRecord,
  edits: ReleaseApprovalEdits
): Promise<void> {
  const ownerUid = sanitizeId(uid);
  const releaseId = sanitizeId(candidate.releaseId);
  const movieId = sanitizeId(candidate.movieId);

  const liveMovieRef = doc(db, 'live_movies', movieId);
  const queueRef = doc(db, 'release_queue', releaseId);

  let existingCreatedAt: unknown = null;
  try {
    const snap = await getDoc(liveMovieRef);
    if (snap.exists()) {
      existingCreatedAt = snap.data()?.createdAt ?? null;
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, `live_movies/${movieId}`);
  }

  const safeTitle = clampString(edits.title, 200, candidate.title);
  const safeYear = Number.isInteger(edits.year)
    ? Math.min(2035, Math.max(1930, edits.year))
    : candidate.year;
  const safeCast = clampString(edits.cast, 300, '');
  const safeLabel = clampString(edits.label, 120, '');
  const safeSignificance = clampString(edits.significance, 600, '');
  const safeSongs = sanitizeReleaseSongs(movieId, edits.songs);

  const batch = writeBatch(db);

  if (existingCreatedAt) {
    batch.update(liveMovieRef, {
      title: safeTitle,
      year: safeYear,
      cast: safeCast,
      label: safeLabel,
      significance: safeSignificance,
      songs: safeSongs,
      sourceUrl: clampString(candidate.sourceUrl, 500, ''),
      releaseId,
      updatedAt: serverTimestamp(),
    });
  } else {
    batch.set(liveMovieRef, {
      movieId,
      directorId: normalizeDirectorId(candidate.directorId),
      title: safeTitle,
      year: safeYear,
      cast: safeCast,
      label: safeLabel,
      significance: safeSignificance,
      songs: safeSongs,
      sourceUrl: clampString(candidate.sourceUrl, 500, ''),
      releaseId,
      approvedBy: ownerUid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  batch.update(queueRef, {
    status: 'approved',
    title: safeTitle,
    year: safeYear,
    cast: safeCast,
    label: safeLabel,
    significance: safeSignificance,
    songs: safeSongs,
    updatedAt: serverTimestamp(),
  });

  try {
    await batch.commit();
  } catch (error) {
    handleFirestoreError(
      error,
      OperationType.WRITE,
      `live_movies/${movieId},release_queue/${releaseId}`
    );
  }
}

export async function dismissDiscoveryCandidate(
  discoveryId: string
): Promise<void> {
  const safeId = sanitizeId(discoveryId);
  const path = `discovery_queue/${safeId}`;
  try {
    await updateDoc(doc(db, 'discovery_queue', safeId), {
      status: 'rejected',
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function deleteDiscoveryCandidate(
  discoveryId: string
): Promise<void> {
  const safeId = sanitizeId(discoveryId);
  const path = `discovery_queue/${safeId}`;
  try {
    await deleteDoc(doc(db, 'discovery_queue', safeId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function dismissReleaseCandidate(
  releaseId: string
): Promise<void> {
  const safeId = sanitizeId(releaseId);
  const path = `release_queue/${safeId}`;
  try {
    await updateDoc(doc(db, 'release_queue', safeId), {
      status: 'rejected',
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.UPDATE, path);
  }
}

export async function deleteReleaseCandidate(
  releaseId: string
): Promise<void> {
  const safeId = sanitizeId(releaseId);
  const path = `release_queue/${safeId}`;
  try {
    await deleteDoc(doc(db, 'release_queue', safeId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function revertSongOverride(songId: string): Promise<void> {
  const safeId = sanitizeId(songId);
  const path = `song_overrides/${safeId}`;
  try {
    await deleteDoc(doc(db, 'song_overrides', safeId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function removeLiveMovie(movieId: string): Promise<void> {
  const safeId = sanitizeId(movieId);
  const path = `live_movies/${safeId}`;
  try {
    await deleteDoc(doc(db, 'live_movies', safeId));
  } catch (error) {
    handleFirestoreError(error, OperationType.DELETE, path);
  }
}

export async function loadDiscoverySettings(
  uid: string
): Promise<DiscoverySettingsRecord | null> {
  const path = 'discovery_settings/schedule';
  try {
    const snap = await getDoc(doc(db, 'discovery_settings', 'schedule'));
    if (!snap.exists()) return null;
    const data = snap.data() as DiscoverySettingsRecord;
    return data.ownerUid === uid ? data : null;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
  }
}

export async function saveDiscoverySettings(
  uid: string,
  settings: {
    enabled: boolean;
    intervalHours: number;
    targetDirector: DiscoveryTargetDirector;
    batchSize: number;
    lastScanAtIso: string;
    lastScanSummary: string;
  }
): Promise<void> {
  const ownerUid = sanitizeId(uid);
  const path = 'discovery_settings/schedule';
  const ref = doc(db, 'discovery_settings', 'schedule');

  const safeInterval = Math.min(
    168,
    Math.max(1, Math.round(settings.intervalHours || 24))
  );
  const safeBatchSize = Math.min(
    15,
    Math.max(1, Math.round(settings.batchSize || 6))
  );

  try {
    const existingSnap = await getDoc(ref);
    if (existingSnap.exists()) {
      await updateDoc(ref, {
        enabled: Boolean(settings.enabled),
        intervalHours: safeInterval,
        targetDirector: normalizeTargetDirector(settings.targetDirector),
        batchSize: safeBatchSize,
        lastScanAtIso: clampString(settings.lastScanAtIso, 64, ''),
        lastScanSummary: clampString(settings.lastScanSummary, 400, ''),
        updatedAt: serverTimestamp(),
      });
    } else {
      await setDoc(ref, {
        settingId: 'schedule',
        enabled: Boolean(settings.enabled),
        intervalHours: safeInterval,
        targetDirector: normalizeTargetDirector(settings.targetDirector),
        batchSize: safeBatchSize,
        lastScanAtIso: clampString(settings.lastScanAtIso, 64, ''),
        lastScanSummary: clampString(settings.lastScanSummary, 400, ''),
        ownerUid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    }
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }
}
