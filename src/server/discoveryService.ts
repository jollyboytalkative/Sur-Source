import fs from 'node:fs';
import path from 'node:path';
import { GoogleGenAI } from '@google/genai';
import { DIRECTORS } from '../data/directors.ts';
import { NADEEM_SHRAVAN_MOVIES } from '../data/nadeemShravanData.ts';
import { ANU_MALIK_MOVIES } from '../data/anuMalikData.ts';
import { RD_BURMAN_MOVIES } from '../data/rdBurmanData.ts';
import { SHANKAR_JAIKISHAN_MOVIES } from '../data/shankarJaikishanData.ts';
import { AR_RAHMAN_BOLLYWOOD_MOVIES } from '../data/arRahmanBollywoodData.ts';
import { NAUSHAD_MOVIES } from '../data/naushadData.ts';
import { OP_NAYYAR_MOVIES } from '../data/opNayyarData.ts';
import { ANAND_MILIND_MOVIES } from '../data/anandMilindData.ts';
import { LAXMIKANT_PYARELAL_MOVIES } from '../data/laxmikantPyarelalData.ts';
import { SD_BURMAN_MOVIES } from '../data/sdBurmanData.ts';
import { RAVI_MOVIES } from '../data/raviData.ts';
import { ROSHAN_MOVIES } from '../data/roshanData.ts';
import { resolveClosestYouTubeVideoUrl } from './youtubeResolver.ts';
import {
  ORIGIN_CATEGORIES,
  type ApprovedAdaptationType,
  type DirectorId,
  type DiscoveryStatusInfo,
  type DiscoveryTargetDirector,
  type LiveMovieSongPayload,
  type MovieEntry,
  type OriginCategory,
  type StagedReleaseCandidate,
  type StagedServerCandidate,
} from '../types/archive.ts';

interface OriginalTrackCandidate {
  songId: string;
  movieId: string;
  directorId: DirectorId;
  directorName: string;
  movieTitle: string;
  movieYear: number;
  songTitle: string;
  singers: string;
  bollywoodLink: string;
}

interface PersistedDiscoveryState {
  enabled: boolean;
  intervalHours: number;
  targetDirector: DiscoveryTargetDirector;
  batchSize: number;
  lastScanAtIso: string;
  nextScanAtIso: string;
  lastScanSummary: string;
  checkedSongIds: string[];
  stagedCandidates: StagedServerCandidate[];
  stagedReleases: StagedReleaseCandidate[];
}

const DATA_DIR = path.resolve(process.cwd(), '.data');
const STATE_FILE = path.join(DATA_DIR, 'discovery-state.json');

const ALL_MOVIES: MovieEntry[] = [
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
  ...ROSHAN_MOVIES,
];

const DIRECTOR_NAME_MAP = new Map<DirectorId, string>(
  DIRECTORS.map((d) => [d.id, d.name])
);

const DEFAULT_STATE: PersistedDiscoveryState = {
  enabled: true,
  intervalHours: 24,
  targetDirector: 'all',
  batchSize: 6,
  lastScanAtIso: '',
  nextScanAtIso: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  lastScanSummary: 'Scheduled discovery ready. No scans executed yet.',
  checkedSongIds: [],
  stagedCandidates: [],
  stagedReleases: [],
};

let isScanningNow = false;

function readState(): PersistedDiscoveryState {
  try {
    if (!fs.existsSync(STATE_FILE)) {
      return { ...DEFAULT_STATE };
    }
    const raw = fs.readFileSync(STATE_FILE, 'utf8');
    const parsed = JSON.parse(raw) as Partial<PersistedDiscoveryState>;
    return {
      ...DEFAULT_STATE,
      ...parsed,
      checkedSongIds: Array.isArray(parsed.checkedSongIds)
        ? parsed.checkedSongIds
        : [],
      stagedCandidates: Array.isArray(parsed.stagedCandidates)
        ? parsed.stagedCandidates
        : [],
      stagedReleases: Array.isArray(parsed.stagedReleases)
        ? parsed.stagedReleases
        : [],
    };
  } catch {
    return { ...DEFAULT_STATE };
  }
}

function writeState(next: PersistedDiscoveryState): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(STATE_FILE, JSON.stringify(next, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to persist discovery state:', err);
  }
}

function createGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'GEMINI_API_KEY is not configured in server environment. Please check Settings > Secrets.'
    );
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function collectOriginalTracks(
  targetDirector: DiscoveryTargetDirector,
  excludeSongIds: Set<string>,
  checkedIds: Set<string>,
  batchSize: number,
  songQuery?: string
): { selected: OriginalTrackCandidate[]; poolExhaustedReset: boolean } {
  const normalizedQuery = (songQuery ?? '').trim().toLowerCase();
  const candidates: OriginalTrackCandidate[] = [];

  for (const movie of ALL_MOVIES) {
    if (targetDirector !== 'all' && movie.directorId !== targetDirector) {
      continue;
    }
    const directorName = DIRECTOR_NAME_MAP.get(movie.directorId) ?? movie.directorId;
    for (const song of movie.songs) {
      if (song.adaptationType !== 'original') continue;
      if (excludeSongIds.has(song.id)) continue;
      if (normalizedQuery) {
        const hay = `${song.title} ${movie.title} ${song.singers} ${movie.year}`.toLowerCase();
        if (!hay.includes(normalizedQuery)) continue;
      }
      candidates.push({
        songId: song.id,
        movieId: movie.id,
        directorId: movie.directorId,
        directorName,
        movieTitle: movie.title,
        movieYear: movie.year,
        songTitle: song.title,
        singers: song.singers,
        bollywoodLink: song.bollywoodLink,
      });
    }
  }

  if (candidates.length === 0) {
    return { selected: [], poolExhaustedReset: false };
  }

  const unchecked = candidates.filter((c) => !checkedIds.has(c.songId));
  let pool = unchecked;
  let poolExhaustedReset = false;

  if (pool.length === 0) {
    pool = candidates;
    poolExhaustedReset = true;
  }

  const step = Math.max(1, Math.floor(pool.length / Math.max(1, batchSize)));
  const selected: OriginalTrackCandidate[] = [];
  for (let i = 0; i < pool.length && selected.length < batchSize; i += step) {
    selected.push(pool[i]);
  }
  if (selected.length < batchSize) {
    for (const item of pool) {
      if (selected.length >= batchSize) break;
      if (!selected.some((s) => s.songId === item.songId)) {
        selected.push(item);
      }
    }
  }

  return { selected, poolExhaustedReset };
}

interface RawGeminiFinding {
  songId?: string;
  foundAdaptation?: boolean;
  suggestedType?: string;
  originalSongTitle?: string;
  originalArtist?: string;
  originalYear?: string;
  originCategory?: string;
  adaptationNotes?: string;
  referenceSource?: string;
  originalSearchQuery?: string;
  confidence?: string;
}

interface RawGeminiReleaseFinding {
  directorId?: string;
  title?: string;
  year?: number;
  cast?: string;
  label?: string;
  significance?: string;
  songs?: Array<{
    title?: string;
    singers?: string;
    lyricist?: string;
  }>;
}

function extractJsonArray<T = RawGeminiFinding>(text: string): T[] {
  const trimmed = text.trim();
  const fencedMatch = trimmed.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  const candidate = fencedMatch ? fencedMatch[1].trim() : trimmed;

  const firstBracket = candidate.indexOf('[');
  const lastBracket = candidate.lastIndexOf(']');
  if (firstBracket !== -1 && lastBracket > firstBracket) {
    try {
      const parsed = JSON.parse(candidate.slice(firstBracket, lastBracket + 1));
      return Array.isArray(parsed) ? (parsed as T[]) : [];
    } catch {
      return [];
    }
  }

  try {
    const parsed = JSON.parse(candidate) as Record<string, unknown>;
    if (Array.isArray(parsed)) return parsed as T[];
    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.findings)) {
      return parsed.findings as T[];
    }
    if (parsed && typeof parsed === 'object' && Array.isArray(parsed.releases)) {
      return parsed.releases as T[];
    }
  } catch {
    return [];
  }
  return [];
}

function normalizeCategory(raw: string | undefined): OriginCategory {
  if (raw && ORIGIN_CATEGORIES.includes(raw as OriginCategory)) {
    return raw as OriginCategory;
  }
  const lower = (raw ?? '').toLowerCase();
  if (lower.includes('nusrat')) return 'Nusrat Fateh Ali Khan';
  if (lower.includes('pakistani') || lower.includes('ghazal')) {
    return 'Pakistani Film & Ghazal';
  }
  if (lower.includes('arabic') || lower.includes('middle east') || lower.includes('egypt')) {
    return 'Arabic & Middle Eastern';
  }
  if (lower.includes('african') || lower.includes('world') || lower.includes('latin')) {
    return 'African & World Folk';
  }
  if (lower.includes('indian') || lower.includes('folk') || lower.includes('classical')) {
    return 'Indian Folk & Classical';
  }
  return 'Western Pop & Ambient';
}

function normalizeTitleKey(directorId: string, title: string): string {
  return `${directorId}::${title.toLowerCase().replace(/[^a-z0-9]/g, '')}`;
}

export function getDiscoveryStatus(): DiscoveryStatusInfo {
  const state = readState();
  return {
    enabled: state.enabled,
    intervalHours: state.intervalHours,
    targetDirector: state.targetDirector,
    batchSize: state.batchSize,
    lastScanAtIso: state.lastScanAtIso,
    nextScanAtIso: state.nextScanAtIso,
    lastScanSummary: state.lastScanSummary,
    isScanning: isScanningNow,
    stagedCount: state.stagedCandidates.length,
    stagedReleaseCount: state.stagedReleases.length,
  };
}

export function getStagedPayload(): {
  candidates: StagedServerCandidate[];
  releases: StagedReleaseCandidate[];
} {
  const state = readState();
  return {
    candidates: state.stagedCandidates,
    releases: state.stagedReleases,
  };
}

export function acknowledgeStagedPayload(
  discoveryIds: string[],
  releaseIds: string[]
): void {
  const ackDisc = new Set(discoveryIds);
  const ackRel = new Set(releaseIds);
  const state = readState();
  state.stagedCandidates = state.stagedCandidates.filter(
    (item) => !ackDisc.has(item.discoveryId)
  );
  state.stagedReleases = state.stagedReleases.filter(
    (item) => !ackRel.has(item.releaseId)
  );
  writeState(state);
}

export function updateDiscoverySchedule(input: {
  enabled?: boolean;
  intervalHours?: number;
  targetDirector?: DiscoveryTargetDirector;
  batchSize?: number;
}): DiscoveryStatusInfo {
  const state = readState();
  const nextEnabled =
    typeof input.enabled === 'boolean' ? input.enabled : state.enabled;
  const nextInterval =
    typeof input.intervalHours === 'number'
      ? Math.min(168, Math.max(1, Math.round(input.intervalHours)))
      : state.intervalHours;
  const nextDirector = input.targetDirector ?? state.targetDirector;
  const nextBatchSize =
    typeof input.batchSize === 'number'
      ? Math.min(15, Math.max(1, Math.round(input.batchSize)))
      : state.batchSize;

  const baseMs = state.lastScanAtIso
    ? Date.parse(state.lastScanAtIso) || Date.now()
    : Date.now();
  const nextScanAtIso = nextEnabled
    ? new Date(baseMs + nextInterval * 60 * 60 * 1000).toISOString()
    : '';

  const updated: PersistedDiscoveryState = {
    ...state,
    enabled: nextEnabled,
    intervalHours: nextInterval,
    targetDirector: nextDirector,
    batchSize: nextBatchSize,
    nextScanAtIso,
  };
  writeState(updated);
  return getDiscoveryStatus();
}

export interface ScanOptions {
  targetDirector?: DiscoveryTargetDirector;
  batchSize?: number;
  excludeSongIds?: string[];
  songQuery?: string;
  persistToServerStage?: boolean;
}

export interface ScanResult {
  scannedCount: number;
  scannedTracks: { songId: string; title: string; movieTitle: string; movieYear: number }[];
  candidates: StagedServerCandidate[];
  groundingLinks: { title: string; uri: string }[];
  scanSummary: string;
  scannedAtIso: string;
}

export async function runSearchGroundedDiscoveryScan(
  options: ScanOptions = {}
): Promise<ScanResult> {
  if (isScanningNow) {
    throw new Error('A discovery scan is already in progress. Please wait a moment.');
  }

  isScanningNow = true;
  try {
    const state = readState();
    const targetDirector = options.targetDirector ?? state.targetDirector;
    const batchSize = Math.min(
      12,
      Math.max(1, options.batchSize ?? state.batchSize ?? 6)
    );

    const excludeSet = new Set<string>(options.excludeSongIds ?? []);
    for (const existing of state.stagedCandidates) {
      excludeSet.add(existing.songId);
    }

    const checkedSet = new Set<string>(state.checkedSongIds);
    const { selected, poolExhaustedReset } = collectOriginalTracks(
      targetDirector,
      excludeSet,
      options.songQuery ? new Set() : checkedSet,
      batchSize,
      options.songQuery
    );

    const nowIso = new Date().toISOString();

    if (selected.length === 0) {
      const emptySummary = 'No eligible Original tracks matched the current filter.';
      writeState({
        ...state,
        lastScanAtIso: nowIso,
        nextScanAtIso: state.enabled
          ? new Date(Date.now() + state.intervalHours * 60 * 60 * 1000).toISOString()
          : '',
        lastScanSummary: emptySummary,
      });
      return {
        scannedCount: 0,
        scannedTracks: [],
        candidates: [],
        groundingLinks: [],
        scanSummary: emptySummary,
        scannedAtIso: nowIso,
      };
    }

    const ai = createGeminiClient();

    const tracksPayload = selected.map((t) => ({
      songId: t.songId,
      composer: t.directorName,
      movie: `${t.movieTitle} (${t.movieYear})`,
      songTitle: t.songTitle,
      singers: t.singers,
    }));

    const prompt = `You are a careful Bollywood musicology researcher verifying whether specific Hindi film songs currently marked "Original" in an archival catalog have credible, publicly documented melodic inspirations, adaptations, or close similarities to pre-existing songs.

Use Google Search to check reputable Bollywood music provenance archives (such as ITWOFS / Itwofs.com, MySwar, Wikipedia song articles, Scroll.in, Rediff, Film Companion, and musicology blogs) for ONLY the songs listed below:

${JSON.stringify(tracksPayload, null, 2)}

Strict editorial rules:
1. Only report a finding ("foundAdaptation": true) if Google Search results clearly document a specific pre-existing source track (released BEFORE the Bollywood film) with an identifiable title and artist/composer.
2. NEVER report official licensed Hindi remakes/recreations, cover versions, or vague unverified social media rumors.
3. Classify "suggestedType" carefully:
   - "copied" when sources report the main mukhda/melody or riff is closely adapted or closely mirrors the original note-for-note.
   - "inspired" when sources report a partial motif, intro riff, hook, or stylistic inspiration.
4. Pick "originCategory" strictly from:
   - "Pakistani Film & Ghazal"
   - "Nusrat Fateh Ali Khan"
   - "Arabic & Middle Eastern"
   - "Western Pop & Ambient"
   - "African & World Folk"
   - "Indian Folk & Classical"
5. If a song has no credible documented prior source in search results, omit it or set "foundAdaptation": false.

Respond ONLY with a valid JSON array (no markdown commentary outside JSON) of objects matching:
[
  {
    "songId": "exact songId from input",
    "foundAdaptation": true,
    "suggestedType": "copied" | "inspired",
    "originalSongTitle": "Title of pre-existing song",
    "originalArtist": "Artist or composer name",
    "originalYear": "Year e.g. 1978",
    "originCategory": "One of the 6 allowed categories above",
    "adaptationNotes": "1-2 neutral sentences describing the reported similarity.",
    "referenceSource": "e.g. ITWOFS / Wikipedia / MySwar",
    "originalSearchQuery": "artist song title for YouTube search",
    "confidence": "high" | "medium"
  }
]`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const rawFindings = extractJsonArray<RawGeminiFinding>(response.text ?? '[]');

    const chunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
    const groundingLinks: { title: string; uri: string }[] = [];
    for (const chunk of chunks) {
      const uri = chunk?.web?.uri;
      const title = chunk?.web?.title;
      if (uri && !groundingLinks.some((g) => g.uri === uri)) {
        groundingLinks.push({
          uri,
          title: title || uri,
        });
      }
    }

    const selectedById = new Map(selected.map((s) => [s.songId, s]));
    const primaryLink = groundingLinks[0];
    const discoveredCandidates: StagedServerCandidate[] = [];

    for (const finding of rawFindings) {
      if (!finding.foundAdaptation || !finding.songId) continue;
      const track = selectedById.get(finding.songId);
      if (!track) continue;

      const origTitle = (finding.originalSongTitle ?? '').trim();
      const origArtist = (finding.originalArtist ?? '').trim();
      if (!origTitle || !origArtist) continue;

      const suggestedType: ApprovedAdaptationType =
        finding.suggestedType === 'copied' ? 'copied' : 'inspired';
      const searchQuery =
        (finding.originalSearchQuery ?? '').trim() ||
        `${origArtist} ${origTitle}`;
      const originalLink = await resolveClosestYouTubeVideoUrl({
        query: searchQuery,
        originalSongTitle: origTitle,
        originalArtist: origArtist,
        bollywoodSongTitle: track.songTitle,
      });

      const discoveryId = `disc_${track.songId.replace(/[^a-zA-Z0-9_\-]/g, '_')}`.slice(
        0,
        128
      );

      discoveredCandidates.push({
        discoveryId,
        songId: track.songId,
        movieId: track.movieId,
        directorId: track.directorId,
        directorName: track.directorName,
        movieTitle: track.movieTitle,
        movieYear: track.movieYear,
        songTitle: track.songTitle,
        singers: track.singers,
        bollywoodLink: track.bollywoodLink,
        suggestedType,
        originalSongTitle: origTitle.slice(0, 200),
        originalArtist: origArtist.slice(0, 200),
        originalYear: String(finding.originalYear ?? '').slice(0, 32),
        originCategory: normalizeCategory(finding.originCategory),
        adaptationNotes: String(finding.adaptationNotes ?? '')
          .trim()
          .slice(0, 1200),
        originalLink: originalLink.slice(0, 500),
        referenceSource: String(
          finding.referenceSource ?? 'Google Search Grounding'
        )
          .trim()
          .slice(0, 300),
        sourceUrl: (primaryLink?.uri ?? '').slice(0, 500),
        sourceTitle: (primaryLink?.title ?? 'Google Search Source').slice(0, 300),
        confidence: finding.confidence === 'high' ? 'high' : 'medium',
        discoveredAtIso: nowIso,
      });
    }

    const baseChecked = poolExhaustedReset
      ? []
      : state.checkedSongIds.slice(-900);
    const nextChecked = Array.from(
      new Set([...baseChecked, ...selected.map((s) => s.songId)])
    );

    const mergedStaged = options.persistToServerStage
      ? [
          ...state.stagedCandidates,
          ...discoveredCandidates.filter(
            (cand) =>
              !state.stagedCandidates.some((s) => s.songId === cand.songId)
          ),
        ]
      : state.stagedCandidates;

    const scanSummary = `Checked ${selected.length} Original track${selected.length === 1 ? '' : 's'} with Google Search Grounding; found ${discoveredCandidates.length} origin candidate${discoveredCandidates.length === 1 ? '' : 's'}.`;

    writeState({
      ...state,
      lastScanAtIso: nowIso,
      nextScanAtIso: state.enabled
        ? new Date(Date.now() + state.intervalHours * 60 * 60 * 1000).toISOString()
        : '',
      lastScanSummary: scanSummary,
      checkedSongIds: nextChecked,
      stagedCandidates: mergedStaged,
    });

    return {
      scannedCount: selected.length,
      scannedTracks: selected.map((t) => ({
        songId: t.songId,
        title: t.songTitle,
        movieTitle: t.movieTitle,
        movieYear: t.movieYear,
      })),
      candidates: discoveredCandidates,
      groundingLinks,
      scanSummary,
      scannedAtIso: nowIso,
    };
  } finally {
    isScanningNow = false;
  }
}

export interface ReleaseScanOptions {
  targetDirector?: DiscoveryTargetDirector;
  excludeMovieTitles?: string[];
  persistToServerStage?: boolean;
}

export interface ReleaseScanResult {
  releases: StagedReleaseCandidate[];
  groundingLinks: { title: string; uri: string }[];
  scanSummary: string;
  scannedAtIso: string;
}

export async function runNewReleaseDiscoveryScan(
  options: ReleaseScanOptions = {}
): Promise<ReleaseScanResult> {
  if (isScanningNow) {
    throw new Error('A discovery scan is already in progress. Please wait a moment.');
  }

  isScanningNow = true;
  try {
    const state = readState();
    const targetDirector = options.targetDirector ?? state.targetDirector;
    const directorsToCheck: DirectorId[] =
      targetDirector === 'all'
        ? ['ar-rahman', 'anu-malik', 'nadeem-shravan', 'anand-milind']
        : [targetDirector];

    const existingKeys = new Set<string>();
    for (const m of ALL_MOVIES) {
      existingKeys.add(normalizeTitleKey(m.directorId, m.title));
    }
    for (const r of state.stagedReleases) {
      existingKeys.add(normalizeTitleKey(r.directorId, r.title));
    }
    for (const rawTitle of options.excludeMovieTitles ?? []) {
      for (const dirId of directorsToCheck) {
        existingKeys.add(normalizeTitleKey(dirId, rawTitle));
      }
    }

    const recentContext = directorsToCheck.map((dirId) => {
      const existingTitles = ALL_MOVIES.filter((m) => m.directorId === dirId)
        .sort((a, b) => b.year - a.year)
        .slice(0, 12)
        .map((m) => `${m.title} (${m.year})`);
      return {
        directorId: dirId,
        directorName: DIRECTOR_NAME_MAP.get(dirId) ?? dirId,
        recentAlreadyCataloged: existingTitles,
      };
    });

    const ai = createGeminiClient();
    const currentYear = new Date().getFullYear();

    const prompt = `You are a Bollywood filmography archivist checking Google Search for newly released, officially announced, or missing ORIGINAL HINDI (BOLLYWOOD) feature films and songs (especially ${currentYear - 1}–${currentYear + 1}+) for the music director(s) below:

${JSON.stringify(recentContext, null, 2)}

CRITICAL RULES:
1. For "ar-rahman" (A. R. Rahman (Bollywood)): ONLY return original HINDI-language Bollywood feature films. STRICTLY EXCLUDE any Tamil, Telugu, Malayalam, Kannada, or South Indian dubbed films (do NOT include Ponniyin Selvan, Thug Life, Raayan, Ayalaan, Kadhalikka Neramillai, Genie, Peddi, RC16, etc.). Films like Ramayana, Lahore 1947, or other upcoming Hindi Bollywood projects are valid ONLY if verified in Search results.
2. For "nadeem-shravan", "anu-malik", or any other composer: ONLY return newly composed/released or confirmed upcoming Hindi (Bollywood) films/singles from 2024–${currentYear + 2} (or newly verified releases) that are NOT already in "recentAlreadyCataloged".
3. Do NOT repeat any film listed in "recentAlreadyCataloged".
4. Only return genuine releases confirmed by Google Search results with real cast/singers/track details. If there are no new verified Hindi releases not yet listed, return [].

Respond ONLY with a valid JSON array matching:
[
  {
    "directorId": "one of the input directorIds",
    "title": "Exact Hindi film title",
    "year": 2026,
    "cast": "Lead actors",
    "label": "Music label e.g. T-Series / Sony Music India",
    "significance": "1-sentence summary of the Hindi release.",
    "songs": [
      {
        "title": "Song title",
        "singers": "Playback singer(s)",
        "lyricist": "Lyricist if known"
      }
    ]
  }
]`;

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const rawReleases = extractJsonArray<RawGeminiReleaseFinding>(
      response.text ?? '[]'
    );

    const chunks =
      response.candidates?.[0]?.groundingMetadata?.groundingChunks ?? [];
    const groundingLinks: { title: string; uri: string }[] = [];
    for (const chunk of chunks) {
      const uri = chunk?.web?.uri;
      const title = chunk?.web?.title;
      if (uri && !groundingLinks.some((g) => g.uri === uri)) {
        groundingLinks.push({
          uri,
          title: title || uri,
        });
      }
    }

    const nowIso = new Date().toISOString();
    const primaryLink = groundingLinks[0];
    const stagedReleases: StagedReleaseCandidate[] = [];

    for (const item of rawReleases) {
      const dirId = item.directorId as DirectorId | undefined;
      if (!dirId || !DIRECTOR_NAME_MAP.has(dirId)) continue;
      if (!directorsToCheck.includes(dirId)) continue;

      const title = (item.title ?? '').trim();
      if (!title) continue;

      const key = normalizeTitleKey(dirId, title);
      if (existingKeys.has(key)) continue;
      existingKeys.add(key);

      const year =
        typeof item.year === 'number' && Number.isInteger(item.year)
          ? Math.min(2035, Math.max(1930, item.year))
          : currentYear;

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 48);
      const movieId = `live-${dirId}-${slug}-${year}`.slice(0, 120);
      const releaseId = `rel_${movieId}`.slice(0, 128);

      const rawSongs = Array.isArray(item.songs) ? item.songs : [];
      const songs: LiveMovieSongPayload[] = (
        rawSongs.length > 0
          ? rawSongs
          : [{ title: `${title} Title Track`, singers: 'Official Soundtrack', lyricist: '' }]
      )
        .slice(0, 20)
        .map((s, idx) => {
          const songTitle = (s.title ?? '').trim() || `Track ${idx + 1}`;
          return {
            id: `${movieId}-${idx + 1}`,
            title: songTitle.slice(0, 200),
            singers: ((s.singers ?? '').trim() || 'Soundtrack Artist').slice(0, 300),
            lyricist: (s.lyricist ?? '').trim().slice(0, 200),
            adaptationType: 'original',
            originalSongTitle: '',
            originalArtist: '',
            originalYear: '',
            originCategory: 'Original Composition',
            adaptationNotes: '',
            bollywoodLink: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${songTitle} ${title} ${year}`)}`,
            originalLink: '',
            referenceSource: primaryLink?.title ?? 'Google Search Grounding',
          };
        });

      stagedReleases.push({
        releaseId,
        movieId,
        directorId: dirId,
        directorName: DIRECTOR_NAME_MAP.get(dirId) ?? dirId,
        title: title.slice(0, 200),
        year,
        cast: String(item.cast ?? '').trim().slice(0, 300),
        label: String(item.label ?? 'Bollywood Release').trim().slice(0, 120),
        significance: String(
          item.significance ?? `Newly discovered Hindi (Bollywood) release (${year}).`
        )
          .trim()
          .slice(0, 600),
        songs,
        sourceUrl: (primaryLink?.uri ?? '').slice(0, 500),
        sourceTitle: (primaryLink?.title ?? 'Google Search Grounding').slice(0, 300),
        discoveredAtIso: nowIso,
      });
    }

    const mergedReleases = options.persistToServerStage
      ? [
          ...state.stagedReleases,
          ...stagedReleases.filter(
            (rel) => !state.stagedReleases.some((s) => s.releaseId === rel.releaseId)
          ),
        ]
      : state.stagedReleases;

    const scanSummary = `Checked Google Search for new Hindi releases (${directorsToCheck
      .map((d) => DIRECTOR_NAME_MAP.get(d) ?? d)
      .join(', ')}); found ${stagedReleases.length} new film release${stagedReleases.length === 1 ? '' : 's'}.`;

    writeState({
      ...state,
      lastScanAtIso: nowIso,
      nextScanAtIso: state.enabled
        ? new Date(Date.now() + state.intervalHours * 60 * 60 * 1000).toISOString()
        : '',
      lastScanSummary: scanSummary,
      stagedReleases: mergedReleases,
    });

    return {
      releases: stagedReleases,
      groundingLinks,
      scanSummary,
      scannedAtIso: nowIso,
    };
  } finally {
    isScanningNow = false;
  }
}

export async function runScheduledDiscoveryTickIfDue(): Promise<void> {
  if (!process.env.GEMINI_API_KEY || isScanningNow) return;
  const state = readState();
  if (!state.enabled) return;

  const nextMs = state.nextScanAtIso ? Date.parse(state.nextScanAtIso) : 0;
  if (!nextMs || Date.now() < nextMs) return;

  try {
    await runSearchGroundedDiscoveryScan({
      targetDirector: state.targetDirector,
      batchSize: state.batchSize,
      persistToServerStage: true,
    });
    await runNewReleaseDiscoveryScan({
      targetDirector: state.targetDirector,
      persistToServerStage: true,
    });
  } catch (err) {
    console.error('Scheduled Search-grounded discovery tick failed:', err);
  }
}
