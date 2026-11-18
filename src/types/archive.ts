export type DirectorId =
  | 'nadeem-shravan'
  | 'anu-malik'
  | 'rd-burman'
  | 'shankar-jaikishan'
  | 'ar-rahman'
  | 'naushad'
  | 'op-nayyar'
  | 'anand-milind'
  | 'laxmikant-pyarelal'
  | 'sd-burman'
  | 'ravi'
  | 'roshan'
  | 'madan-mohan'
  | 'bappi-lahiri'
  | 'jatin-lalit'
  | 'kalyanji-anandji'
  | 'khayyam'
  | 'dilip-sen-sameer-sen';

export type AdaptationType = 'copied' | 'inspired' | 'original';

export type ApprovedAdaptationType = 'copied' | 'inspired';

export type OriginCategory =
  | 'Pakistani Film & Ghazal'
  | 'Nusrat Fateh Ali Khan'
  | 'Arabic & Middle Eastern'
  | 'Western Pop & Ambient'
  | 'African & World Folk'
  | 'Indian Folk & Classical'
  | 'Original Composition';

export const ORIGIN_CATEGORIES: OriginCategory[] = [
  'Pakistani Film & Ghazal',
  'Nusrat Fateh Ali Khan',
  'Arabic & Middle Eastern',
  'Western Pop & Ambient',
  'African & World Folk',
  'Indian Folk & Classical',
  'Original Composition',
];

export interface SongEntry {
  id: string;
  movieId: string;
  title: string;
  singers: string;
  lyricist?: string;
  adaptationType: AdaptationType;
  originalSongTitle?: string;
  originalArtist?: string;
  originalYear?: string;
  originCategory: OriginCategory;
  adaptationNotes?: string;
  bollywoodLink: string;
  originalLink?: string;
  referenceSource?: string;
  sourceUrl?: string;
  isLiveOverride?: boolean;
  isUserAdded?: boolean;
}

export interface MovieEntry {
  id: string;
  directorId: DirectorId;
  title: string;
  year: number;
  cast?: string;
  label?: string;
  significance?: string;
  songs: SongEntry[];
  isUserAdded?: boolean;
}

export interface DirectorProfile {
  id: DirectorId;
  name: string;
  fullName: string;
  era: string;
  status: 'active' | 'queued';
  summary: string;
  editorialEssay: string;
  signatureSound: string;
  archiveNote: string;
}

export interface SongOverrideRecord {
  songId: string;
  movieId: string;
  directorId: DirectorId;
  adaptationType: ApprovedAdaptationType;
  originalSongTitle: string;
  originalArtist: string;
  originalYear: string;
  originCategory: OriginCategory;
  adaptationNotes: string;
  originalLink: string;
  referenceSource: string;
  sourceUrl: string;
  discoveryId: string;
  approvedBy: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export type DiscoveryConfidence = 'high' | 'medium';
export type DiscoveryQueueStatus = 'pending' | 'approved' | 'rejected';

export interface StagedServerCandidate {
  discoveryId: string;
  songId: string;
  movieId: string;
  directorId: DirectorId;
  directorName: string;
  movieTitle: string;
  movieYear: number;
  songTitle: string;
  singers: string;
  bollywoodLink: string;
  suggestedType: ApprovedAdaptationType;
  originalSongTitle: string;
  originalArtist: string;
  originalYear: string;
  originCategory: OriginCategory;
  adaptationNotes: string;
  originalLink: string;
  referenceSource: string;
  sourceUrl: string;
  sourceTitle: string;
  confidence: DiscoveryConfidence;
  discoveredAtIso: string;
}

export interface DiscoveryCandidateRecord extends StagedServerCandidate {
  status: DiscoveryQueueStatus;
  ownerUid: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface LiveMovieSongPayload {
  id: string;
  title: string;
  singers: string;
  lyricist: string;
  adaptationType: AdaptationType;
  originalSongTitle: string;
  originalArtist: string;
  originalYear: string;
  originCategory: OriginCategory;
  adaptationNotes: string;
  bollywoodLink: string;
  originalLink: string;
  referenceSource: string;
}

export interface LiveMovieRecord {
  movieId: string;
  directorId: DirectorId;
  title: string;
  year: number;
  cast: string;
  label: string;
  significance: string;
  songs: LiveMovieSongPayload[];
  sourceUrl: string;
  releaseId: string;
  approvedBy: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface StagedReleaseCandidate {
  releaseId: string;
  movieId: string;
  directorId: DirectorId;
  directorName: string;
  title: string;
  year: number;
  cast: string;
  label: string;
  significance: string;
  songs: LiveMovieSongPayload[];
  sourceUrl: string;
  sourceTitle: string;
  discoveredAtIso: string;
}

export interface ReleaseDiscoveryRecord extends StagedReleaseCandidate {
  status: DiscoveryQueueStatus;
  ownerUid: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export type DiscoveryTargetDirector = DirectorId | 'all';

export interface DiscoverySettingsRecord {
  settingId: string;
  enabled: boolean;
  intervalHours: number;
  targetDirector: DiscoveryTargetDirector;
  batchSize: number;
  lastScanAtIso: string;
  lastScanSummary: string;
  ownerUid: string;
  createdAt?: unknown;
  updatedAt?: unknown;
}

export interface DiscoveryStatusInfo {
  enabled: boolean;
  intervalHours: number;
  targetDirector: DiscoveryTargetDirector;
  batchSize: number;
  lastScanAtIso: string;
  nextScanAtIso: string;
  lastScanSummary: string;
  isScanning: boolean;
  stagedCount: number;
  stagedReleaseCount: number;
}
