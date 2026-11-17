import type { DirectorId, MovieEntry } from '../types/archive.ts';
import { DIRECTORS } from './directors.ts';
import { ANAND_MILIND_MOVIES } from './anandMilindData.ts';
import { ANU_MALIK_MOVIES } from './anuMalikData.ts';
import { AR_RAHMAN_BOLLYWOOD_MOVIES } from './arRahmanBollywoodData.ts';
import { LAXMIKANT_PYARELAL_MOVIES } from './laxmikantPyarelalData.ts';
import { MADAN_MOHAN_MOVIES } from './madanMohanData.ts';
import { NADEEM_SHRAVAN_MOVIES } from './nadeemShravanData.ts';
import { NAUSHAD_MOVIES } from './naushadData.ts';
import { OP_NAYYAR_MOVIES } from './opNayyarData.ts';
import { RAVI_MOVIES } from './raviData.ts';
import { RD_BURMAN_MOVIES } from './rdBurmanData.ts';
import { ROSHAN_MOVIES } from './roshanData.ts';
import { SD_BURMAN_MOVIES } from './sdBurmanData.ts';
import { SHANKAR_JAIKISHAN_MOVIES } from './shankarJaikishanData.ts';

export const ALL_DIRECTOR_MOVIES: MovieEntry[] = [
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
  ...MADAN_MOHAN_MOVIES,
];

export interface CatalogDirectorStats {
  totalMovies: number;
  totalSongs: number;
  copiedOrInspiredCount: number;
  originalCount: number;
}

function buildBaseStats(): {
  byDirector: Record<DirectorId, CatalogDirectorStats>;
  totals: CatalogDirectorStats;
} {
  const byDirector = {} as Record<DirectorId, CatalogDirectorStats>;
  for (const d of DIRECTORS) {
    byDirector[d.id] = {
      totalMovies: 0,
      totalSongs: 0,
      copiedOrInspiredCount: 0,
      originalCount: 0,
    };
  }

  const totals: CatalogDirectorStats = {
    totalMovies: 0,
    totalSongs: 0,
    copiedOrInspiredCount: 0,
    originalCount: 0,
  };

  for (const movie of ALL_DIRECTOR_MOVIES) {
    const bucket = byDirector[movie.directorId];
    if (!bucket) continue;
    bucket.totalMovies += 1;
    totals.totalMovies += 1;

    for (const song of movie.songs) {
      bucket.totalSongs += 1;
      totals.totalSongs += 1;
      if (song.adaptationType === 'copied' || song.adaptationType === 'inspired') {
        bucket.copiedOrInspiredCount += 1;
        totals.copiedOrInspiredCount += 1;
      } else {
        bucket.originalCount += 1;
        totals.originalCount += 1;
      }
    }
  }

  return { byDirector, totals };
}

const computed = buildBaseStats();

export const DIRECTOR_BASE_STATS: Record<DirectorId, CatalogDirectorStats> =
  computed.byDirector;

export const TOTAL_CATALOG_STATS: CatalogDirectorStats = computed.totals;
