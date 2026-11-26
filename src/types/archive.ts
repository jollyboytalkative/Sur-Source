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
  | 'dilip-sen-sameer-sen'
  | 'viju-shah'
  | 'himesh-reshammiya'
  | 'salil-chowdhury'
  | 'ismail-darbar'
  | 'nikhil-vinay'
  | 'shiv-hari'
  | 'raamlaxman'
  | 'jaidev'
  | 'aadesh-shrivastava'
  | 'usha-khanna'
  | 'uttam-singh'
  | 'shankar-ehsaan-loy'
  | 'sanjeev-darshan'
  | 'c-ramchandra'
  | 'anil-biswas'
  | 'chitragupt'
  | 'hemant-kumar';

export type AdaptationType = 'copied' | 'inspired' | 'original';

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
