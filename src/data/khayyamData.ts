import type {
  AdaptationType,
  MovieEntry,
  OriginCategory,
  SongEntry,
} from '../types/archive.ts';

const yt = (query: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const origSong = (
  movieId: string,
  idx: number,
  title: string,
  singers: string,
  movieTitle: string,
  year: number,
  lyricist?: string,
  notes?: string
): SongEntry => ({
  id: `${movieId}-${idx}`,
  movieId,
  title,
  singers,
  ...(lyricist ? { lyricist } : {}),
  adaptationType: 'original',
  originCategory: 'Original Composition',
  adaptationNotes: notes,
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Khayyam`),
});

interface AdaptedSpec {
  adaptationType: Extract<AdaptationType, 'copied' | 'inspired'>;
  originalSongTitle: string;
  originalArtist: string;
  originalYear: string;
  originCategory: OriginCategory;
  adaptationNotes: string;
  originalLink: string;
  referenceSource: string;
}

const adaptedSong = (
  movieId: string,
  idx: number,
  title: string,
  singers: string,
  movieTitle: string,
  year: number,
  lyricist: string | undefined,
  spec: AdaptedSpec
): SongEntry => ({
  id: `${movieId}-${idx}`,
  movieId,
  title,
  singers,
  ...(lyricist ? { lyricist } : {}),
  adaptationType: spec.adaptationType,
  originalSongTitle: spec.originalSongTitle,
  originalArtist: spec.originalArtist,
  originalYear: spec.originalYear,
  originCategory: spec.originCategory,
  adaptationNotes: spec.adaptationNotes,
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Khayyam`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

const catalogFilm = (
  id: string,
  title: string,
  year: number,
  significance: string,
  leadTrackTitle?: string,
  singers = 'Mohammed Rafi & Lata Mangeshkar'
): MovieEntry => ({
  id,
  directorId: 'khayyam',
  title,
  year,
  label: 'Khayyam Hindi Archive',
  significance,
  songs: [
    origSong(
      id,
      1,
      leadTrackTitle ?? `${title} — Featured Soundtrack Song`,
      singers,
      title,
      year,
      undefined,
      `Verified Hindi (Bollywood) Khayyam filmography entry from ${year}.`
    ),
  ],
});

export const KHAYYAM_MOVIES: MovieEntry[] = [
  // =====================================================================
  // 1948–1959: SHARMAJI FORMATIVE YEARS & "KHAYYAM" SOLO BREAKTHROUGH
  // =====================================================================
  {
    id: 'kh-heer-ranjha-1948',
    directorId: 'khayyam',
    title: 'Heer Ranjha',
    year: 1948,
    cast: 'Mumtaz Shanti, Ghulam Mohammed, Jairaj',
    label: 'Saregama / HMV',
    significance:
      'Debut feature music credit for Mohammed Zahur Khayyam Hashmi under the "Sharmaji–Varmaji" duo alongside Rahman Varma (prior to Varma’s migration to Pakistan).',
    songs: [
      origSong(
        'kh-heer-ranjha-1948',
        1,
        'Kaise Kahe Dil Ki Baat',
        'Surinder Kaur & G. M. Durrani',
        'Heer Ranjha',
        1948,
        'Wali Sahab'
      ),
    ],
  },
  catalogFilm(
    'kh-biwi-1950',
    'Biwi',
    1950,
    'Early Hindi release composed under Khayyam’s early pseudonym "Sharmaji", featuring Mohammed Rafi’s breakthrough song "Akele Mein Woh Ghabrate To Honge".',
    'Akele Mein Woh Ghabrate To Honge',
    'Mohammed Rafi'
  ),
  catalogFilm(
    'kh-pyaar-ki-baatein-1951',
    'Pyaar Ki Baatein',
    1951,
    'Early 1951 Hindi romantic drama scored as Sharmaji.',
    'Unko Chhupe Chhupe Dekha',
    'Geeta Dutt & Mukesh'
  ),
  {
    id: 'kh-foot-path-1953',
    directorId: 'khayyam',
    title: 'Foot Path',
    year: 1953,
    cast: 'Dilip Kumar, Meena Kumari, Ramesh Thapar',
    label: 'Saregama / HMV',
    significance:
      'Historic solo milestone where Zia Sarhadi introduced the screen name "Khayyam"; immortalized by Talat Mahmood’s timeless ghazal "Shaam-e-Gham Ki Kasam".',
    songs: [
      origSong(
        'kh-foot-path-1953',
        1,
        'Shaam-e-Gham Ki Kasam',
        'Talat Mahmood',
        'Foot Path',
        1953,
        'Majrooh Sultanpuri'
      ),
      origSong(
        'kh-foot-path-1953',
        2,
        'So Ja Mere Pyare So Ja',
        'Asha Bhosle',
        'Foot Path',
        1953,
        'Sardar Jafri'
      ),
    ],
  },
  catalogFilm(
    'kh-gul-sanobar-1953',
    'Gul Sanobar',
    1953,
    'Costume fantasy co-composed with Bulo C. Rani.',
    'Gul Sanobar — Duet',
    'Asha Bhosle & Talat Mahmood'
  ),
  catalogFilm(
    'kh-gul-bahar-1954',
    'Gul Bahar',
    1954,
    '1954 Hindi release scored by Khayyam.',
    'Pyaar Ki Baatein — Classical Track',
    'Talat Mahmood & Lata Mangeshkar'
  ),
  catalogFilm(
    'kh-dhobi-doctor-1954',
    'Dhobi Doctor',
    1954,
    'Social drama starring Kishore Kumar and Usha Kiran featuring early Khayyam melodies.',
    'Chandni Raaton Mein',
    'Asha Bhosle'
  ),
  catalogFilm(
    'kh-tatar-ka-chor-1955',
    'Tatar Ka Chor',
    1955,
    '1955 action adventure scored by Khayyam.',
    'Naache Mera Dil',
    'Asha Bhosle'
  ),
  {
    id: 'kh-lala-rukh-1958',
    directorId: 'khayyam',
    title: 'Lala Rukh',
    year: 1958,
    cast: 'Talat Mahmood, Shyama, Yakub',
    label: 'Saregama / HMV',
    significance:
      'Cult 1958 musical starring Talat Mahmood, celebrated for Mohammed Rafi’s "Hai Kali Kali Ke Lab Par" and Talat Mahmood’s "Pyas Kuch Aur Bhi Bhadka Di".',
    songs: [
      origSong(
        'kh-lala-rukh-1958',
        1,
        'Hai Kali Kali Ke Lab Par',
        'Mohammed Rafi',
        'Lala Rukh',
        1958,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-lala-rukh-1958',
        2,
        'Pyaas Kuch Aur Bhi Bhadka Di',
        'Talat Mahmood & Asha Bhosle',
        'Lala Rukh',
        1958,
        'Kaifi Azmi'
      ),
    ],
  },
  {
    id: 'kh-phir-subha-hogi-1958',
    directorId: 'khayyam',
    title: 'Phir Subha Hogi',
    year: 1958,
    cast: 'Raj Kapoor, Mala Sinha, Rehman',
    label: 'Saregama / HMV',
    significance:
      'Landmark Ramesh Saigal social drama pairing Sahir Ludhianvi’s fierce progressive poetry with Mukesh and Asha Bhosle’s iconic "Woh Subah Kabhi To Aayegi".',
    songs: [
      origSong(
        'kh-phir-subha-hogi-1958',
        1,
        'Woh Subah Kabhi To Aayegi',
        'Mukesh & Asha Bhosle',
        'Phir Subha Hogi',
        1958,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-phir-subha-hogi-1958',
        2,
        'Aasmaan Pe Hai Khuda Aur Zameen Pe Hum',
        'Mukesh',
        'Phir Subha Hogi',
        1958,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-phir-subha-hogi-1958',
        3,
        'Phir Na Keeje Meri Gustaakh Nigaahi Ka Gila',
        'Mukesh & Asha Bhosle',
        'Phir Subha Hogi',
        1958,
        'Sahir Ludhianvi'
      ),
    ],
  },

  // =====================================================================
  // 1960–1969: CLASSICAL POETICS, SHOLA AUR SHABNAM & AAKHRI KHAT
  // =====================================================================
  catalogFilm(
    'kh-barood-1960',
    'Barood',
    1960,
    '1960 Hindi action drama scored by Khayyam.',
    'Pyaar Ki Daastan',
    'Asha Bhosle & Mohammed Rafi'
  ),
  catalogFilm(
    'kh-bombai-ki-billi-1960',
    'Bombai Ki Billi',
    1960,
    '1960 thriller scored by Khayyam.',
    'Zindagi Bhar Ke Liye',
    'Asha Bhosle & Mohammed Rafi'
  ),
  {
    id: 'kh-shola-aur-shabnam-1961',
    directorId: 'khayyam',
    title: 'Shola Aur Shabnam',
    year: 1961,
    cast: 'Dharmendra, Tarla Mehta, Vijayalaxmi',
    label: 'Saregama / HMV',
    significance:
      'Romantic classic starring a young Dharmendra, elevated by Kaifi Azmi’s lyrics and Mohammed Rafi’s evergreen "Jaane Kya Dhoondti Rehti Hain".',
    songs: [
      origSong(
        'kh-shola-aur-shabnam-1961',
        1,
        'Jaane Kya Dhoondti Rehti Hain Yeh Aankhen Mujh Mein',
        'Mohammed Rafi',
        'Shola Aur Shabnam',
        1961,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-shola-aur-shabnam-1961',
        2,
        'Jeet Hi Lenge Baazi Hum Tum',
        'Mohammed Rafi & Lata Mangeshkar',
        'Shola Aur Shabnam',
        1961,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-shola-aur-shabnam-1961',
        3,
        'Pehle To Aankh Milana',
        'Mohammed Rafi & Lata Mangeshkar',
        'Shola Aur Shabnam',
        1961,
        'Kaifi Azmi'
      ),
    ],
  },
  {
    id: 'kh-shagoon-1964',
    directorId: 'khayyam',
    title: 'Shagoon',
    year: 1964,
    cast: 'Waheeda Rehman, Kamaljeet, Nivedita',
    label: 'Saregama / HMV',
    significance:
      'Cult poetic treasure featuring Jagjit Kaur’s iconic "Tum Apna Ranj-o-Gham" and "Parbaton Ke Pedon Par" set to Raag Pahadi and Sahir Ludhianvi’s verses.',
    songs: [
      origSong(
        'kh-shagoon-1964',
        1,
        'Parbaton Ke Pedon Par Shaam Ka Basera Hai',
        'Mohammed Rafi & Suman Kalyanpur',
        'Shagoon',
        1964,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-shagoon-1964',
        2,
        'Tum Apna Ranj-o-Gham Apni Pareshani Mujhe De Do',
        'Jagjit Kaur',
        'Shagoon',
        1964,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-shagoon-1964',
        3,
        'Yeh Raat Bahut Rangeen Sahi',
        'Mohammed Rafi',
        'Shagoon',
        1964,
        'Sahir Ludhianvi'
      ),
    ],
  },
  {
    id: 'kh-mohabbat-isko-kahete-hain-1965',
    directorId: 'khayyam',
    title: 'Mohabbat Isko Kahete Hain',
    year: 1965,
    cast: 'Shashi Kapoor, Nanda, Ramesh Deo',
    label: 'Saregama / HMV',
    significance:
      'Shashi Kapoor–Nanda romantic drama featuring "Thehriye Hosh Mein Aa Loon" and "Jo Hum Pe Guzarti Hai".',
    songs: [
      origSong(
        'kh-mohabbat-isko-kahete-hain-1965',
        1,
        'Thehriye Hosh Mein Aa Loon To Chale Jaiyega',
        'Mohammed Rafi & Suman Kalyanpur',
        'Mohabbat Isko Kahete Hain',
        1965,
        'Majrooh Sultanpuri'
      ),
      origSong(
        'kh-mohabbat-isko-kahete-hain-1965',
        2,
        'Jo Hum Pe Guzarti Hai',
        'Suman Kalyanpur',
        'Mohabbat Isko Kahete Hain',
        1965,
        'Majrooh Sultanpuri'
      ),
    ],
  },
  {
    id: 'kh-aakhri-khat-1966',
    directorId: 'khayyam',
    title: 'Aakhri Khat',
    year: 1966,
    cast: 'Rajesh Khanna, Indrani Mukherjee, Master Bunty',
    label: 'Saregama / HMV',
    significance:
      'Chetan Anand’s acclaimed directorial showcase and Rajesh Khanna’s screen debut, anchored by Bhupinder Singh’s "Rut Jawan Jawan" and Lata Mangeshkar’s "Baharon Mera Jeevan Bhi Sanwaro".',
    songs: [
      origSong(
        'kh-aakhri-khat-1966',
        1,
        'Baharon Mera Jeevan Bhi Sanwaro',
        'Lata Mangeshkar',
        'Aakhri Khat',
        1966,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-aakhri-khat-1966',
        2,
        'Aur Kuchh Der Thahar',
        'Mohammed Rafi',
        'Aakhri Khat',
        1966,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-aakhri-khat-1966',
        3,
        'Rut Jawan Jawan Raat Meharbaan',
        'Bhupinder Singh',
        'Aakhri Khat',
        1966,
        'Kaifi Azmi'
      ),
    ],
  },
  catalogFilm(
    'kh-mera-bhai-mera-dushman-1967',
    'Mera Bhai Mera Dushman',
    1967,
    '1967 Hindi crime drama scored by Khayyam.',
    'Baat Ki Baat Bigad Jaati Hai',
    'Asha Bhosle & Mahendra Kapoor'
  ),

  // =====================================================================
  // 1974–1979: RESURGENCE, KABHI KABHIE, TRISHUL & NOORIE
  // =====================================================================
  catalogFilm(
    'kh-pyaase-dil-1974',
    'Pyaase Dil',
    1974,
    '1974 Hindi romantic drama preceding Khayyam’s mid-1970s Yash Chopra renaissance.',
    'Aa Bhi Ja Raat Dhalne Lagi',
    'Asha Bhosle & Bhupinder Singh'
  ),
  catalogFilm(
    'kh-sandhya-1975',
    'Sandhya',
    1975,
    '1975 Hindi social drama scored by Khayyam.',
    'Sandhya Ki Bela Aayi',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'kh-mutthi-bhar-chawal-1975',
    'Mutthi Bhar Chawal',
    1975,
    '1975 Hindi drama scored by Khayyam.',
    'Aaja Re Pardesi',
    'Asha Bhosle'
  ),
  {
    id: 'kh-sankalp-1975',
    directorId: 'khayyam',
    title: 'Sankalp',
    year: 1975,
    cast: 'Sukanya, Sunil Dutt, Farida Jalal',
    label: 'Saregama / HMV',
    significance:
      'Won Sulakshana Pandit the Filmfare Award for Best Female Playback Singer with "Tu Hi Sagar Hai Tu Hi Kinara".',
    songs: [
      origSong(
        'kh-sankalp-1975',
        1,
        'Tu Hi Sagar Hai Tu Hi Kinara',
        'Sulakshana Pandit',
        'Sankalp',
        1975,
        'Kaifi Azmi'
      ),
      origSong(
        'kh-sankalp-1975',
        2,
        'Aap Agar Mujhko Ijaazat De Den',
        'Kishore Kumar',
        'Sankalp',
        1975,
        'Kaifi Azmi'
      ),
    ],
  },
  {
    id: 'kh-kabhi-kabhie-1976',
    directorId: 'khayyam',
    title: 'Kabhi Kabhie',
    year: 1976,
    cast: 'Amitabh Bachchan, Raakhee, Shashi Kapoor, Waheeda Rehman, Rishi Kapoor, Neetu Singh',
    label: 'Saregama / HMV',
    significance:
      'Won Khayyam his first Filmfare Award for Best Music Director; Yash Chopra’s poetic blockbuster uniting Sahir Ludhianvi’s verses with Mukesh, Lata Mangeshkar, and Kishore Kumar.',
    songs: [
      origSong(
        'kh-kabhi-kabhie-1976',
        1,
        'Kabhi Kabhie Mere Dil Mein',
        'Mukesh & Lata Mangeshkar',
        'Kabhi Kabhie',
        1976,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-kabhi-kabhie-1976',
        2,
        'Main Pal Do Pal Ka Shayar Hoon',
        'Mukesh',
        'Kabhi Kabhie',
        1976,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-kabhi-kabhie-1976',
        3,
        'Tere Chehre Se Nazar Nahin Hatati',
        'Kishore Kumar & Lata Mangeshkar',
        'Kabhi Kabhie',
        1976,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-kabhi-kabhie-1976',
        4,
        'Mere Ghar Aayi Ek Nanhi Pari',
        'Lata Mangeshkar',
        'Kabhi Kabhie',
        1976,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-kabhi-kabhie-1976',
        5,
        'Pyaar Kar Liya To Kya',
        'Kishore Kumar',
        'Kabhi Kabhie',
        1976,
        'Sahir Ludhianvi'
      ),
    ],
  },
  {
    id: 'kh-shankar-hussain-1977',
    directorId: 'khayyam',
    title: 'Shankar Hussain',
    year: 1977,
    cast: 'Kanwaljit Singh, Madhu Kapoor',
    label: 'Saregama / HMV',
    significance:
      'Cult connoisseur favorite acclaimed for Mohammed Rafi’s haunting "Kahin Ek Masoom Nazuk Si Ladki" and "Aap Yun Faaslon Se Guzarte Rahe".',
    songs: [
      origSong(
        'kh-shankar-hussain-1977',
        1,
        'Kahin Ek Masoom Nazuk Si Ladki',
        'Mohammed Rafi',
        'Shankar Hussain',
        1977,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-shankar-hussain-1977',
        2,
        'Aap Yun Faaslon Se Guzarte Rahe',
        'Lata Mangeshkar',
        'Shankar Hussain',
        1977,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-shankar-hussain-1977',
        3,
        'Apne Aap Raaton Mein',
        'Lata Mangeshkar',
        'Shankar Hussain',
        1977,
        'Kaif Bhopali'
      ),
    ],
  },
  {
    id: 'kh-trishul-1978',
    directorId: 'khayyam',
    title: 'Trishul',
    year: 1978,
    cast: 'Amitabh Bachchan, Sanjeev Kumar, Shashi Kapoor, Raakhee, Hema Malini',
    label: 'Saregama / HMV',
    significance:
      'Filmfare-nominated Yash Chopra mega-hit pairing K. J. Yesudas, Kishore Kumar, and Lata Mangeshkar on "Mohabbat Bade Kaam Ki Cheez Hai" and "Janeman Tum Kamal Karte Ho".',
    songs: [
      origSong(
        'kh-trishul-1978',
        1,
        'Mohabbat Bade Kaam Ki Cheez Hai',
        'Kishore Kumar, K. J. Yesudas & Lata Mangeshkar',
        'Trishul',
        1978,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-trishul-1978',
        2,
        'Janeman Tum Kamal Karte Ho',
        'Kishore Kumar & Lata Mangeshkar',
        'Trishul',
        1978,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-trishul-1978',
        3,
        'Aap Ki Mehki Hui Zulf Ko Kehte Hain Ghata',
        'K. J. Yesudas & Lata Mangeshkar',
        'Trishul',
        1978,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-trishul-1978',
        4,
        'Jo Ho Yaar Apna',
        'Kishore Kumar & Lata Mangeshkar',
        'Trishul',
        1978,
        'Sahir Ludhianvi'
      ),
    ],
  },
  {
    id: 'kh-khandaan-1979',
    directorId: 'khayyam',
    title: 'Khandaan',
    year: 1979,
    cast: 'Jeetendra, Bindiya Goswami, Sulakshana Pandit',
    label: 'Saregama / HMV',
    significance: '1979 family drama noted for Kishore Kumar and Lata Mangeshkar’s "Ye Mulaqaat Ek Bahana Hai".',
    songs: [
      origSong(
        'kh-khandaan-1979',
        1,
        'Ye Mulaqaat Ek Bahana Hai',
        'Lata Mangeshkar',
        'Khandaan',
        1979,
        'Naqsh Lyallpuri'
      ),
      origSong(
        'kh-khandaan-1979',
        2,
        'Mana Teri Nazar Mein Tera Pyar Hum Nahin',
        'Sulakshana Pandit',
        'Khandaan',
        1979,
        'Naqsh Lyallpuri'
      ),
    ],
  },
  {
    id: 'kh-noorie-1979',
    directorId: 'khayyam',
    title: 'Noorie',
    year: 1979,
    cast: 'Farooq Shaikh, Poonam Dhillon, Madan Puri',
    label: 'Saregama / HMV',
    significance:
      'Yash Chopra–produced Kashmiri romantic hit earned Khayyam a Filmfare nomination with "Aaja Re O Mere Dilbar Aaja" and Nitin Mukesh’s "Chori Chori Koi Aaye".',
    songs: [
      origSong(
        'kh-noorie-1979',
        1,
        'Aaja Re O Mere Dilbar Aaja',
        'Lata Mangeshkar & Nitin Mukesh',
        'Noorie',
        1979,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-noorie-1979',
        2,
        'Chori Chori Koi Aaye (Noorie)',
        'Lata Mangeshkar & Nitin Mukesh',
        'Noorie',
        1979,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-noorie-1979',
        3,
        'Uske Khel Nirale',
        'Anwar, Jagjit Kaur & Pamela Chopra',
        'Noorie',
        1979,
        'Jan Nisar Akhtar',
        'Original Khayyam composition noted in public comparison databases (CopycatList) as the 1979 precursor later echoed in Andaaz (2003).'
      ),
    ],
  },
  catalogFilm(
    'kh-meena-kumari-ki-amar-kahani-1979',
    'Meena Kumari ki Amar Kahani',
    1979,
    'Tribute biographical feature preserving Khayyam’s original poetic collaborations with Meena Kumari.',
    'Tukde Tukde Din Beeta',
    'Meena Kumari & Chorus'
  ),

  // =====================================================================
  // 1980–1985: UMRAO JAAN, BAZAAR, THODI SI BEWAFAAI & RAZIA SULTAN
  // =====================================================================
  {
    id: 'kh-thodi-si-bewafaai-1980',
    directorId: 'khayyam',
    title: 'Thodi Si Bewafaai',
    year: 1980,
    cast: 'Rajesh Khanna, Shabana Azmi, Padmini Kolhapure',
    label: 'Saregama / HMV',
    significance:
      'Filmfare-nominated collaboration with Gulzar featuring Kishore Kumar and Lata Mangeshkar’s timeless "Hazaar Raahein Mud Ke Dekhin".',
    songs: [
      origSong(
        'kh-thodi-si-bewafaai-1980',
        1,
        'Hazaar Raahein Mud Ke Dekhin',
        'Kishore Kumar & Lata Mangeshkar',
        'Thodi Si Bewafaai',
        1980,
        'Gulzar'
      ),
      origSong(
        'kh-thodi-si-bewafaai-1980',
        2,
        'Aankhon Mein Humne Aapke Sapne',
        'Kishore Kumar & Lata Mangeshkar',
        'Thodi Si Bewafaai',
        1980,
        'Gulzar'
      ),
      origSong(
        'kh-thodi-si-bewafaai-1980',
        3,
        'Mausam Mausam Lovely Mausam',
        'Anwar & Sulakshana Pandit',
        'Thodi Si Bewafaai',
        1980,
        'Gulzar'
      ),
    ],
  },
  {
    id: 'kh-chambal-ki-kasam-1980',
    directorId: 'khayyam',
    title: 'Chambal Ki Kasam',
    year: 1980,
    cast: 'Raaj Kumar, Shatrughan Sinha, Moushumi Chatterjee',
    label: 'Saregama / HMV',
    significance: 'Action drama featuring Lata Mangeshkar and Mohammed Rafi’s Raag-rooted duet "Simti Hui Yeh Ghadiyan".',
    songs: [
      origSong(
        'kh-chambal-ki-kasam-1980',
        1,
        'Simti Hui Yeh Ghadiyan',
        'Mohammed Rafi & Lata Mangeshkar',
        'Chambal Ki Kasam',
        1980,
        'Sahir Ludhianvi'
      ),
      origSong(
        'kh-chambal-ki-kasam-1980',
        2,
        'Chanda Re Mere Bhaiya Se Kehna',
        'Lata Mangeshkar',
        'Chambal Ki Kasam',
        1980,
        'Sahir Ludhianvi'
      ),
    ],
  },
  {
    id: 'kh-ahista-ahista-1981',
    directorId: 'khayyam',
    title: 'Ahista Ahista',
    year: 1981,
    cast: 'Padmini Kolhapure, Kunal Kapoor, Shammi Kapoor',
    label: 'Saregama / HMV',
    significance: 'Celebrated for Bhupinder Singh and Asha Bhosle’s "Kabhi Kisi Ko Mukammal Jahan Nahin Milta".',
    songs: [
      origSong(
        'kh-ahista-ahista-1981',
        1,
        'Kabhi Kisi Ko Mukammal Jahan Nahin Milta',
        'Bhupinder Singh & Asha Bhosle',
        'Ahista Ahista',
        1981,
        'Nida Fazli'
      ),
      origSong(
        'kh-ahista-ahista-1981',
        2,
        'Nazar Se Phool Chunti Hai Nazar',
        'Asha Bhosle & Anwar',
        'Ahista Ahista',
        1981,
        'Nida Fazli'
      ),
    ],
  },
  {
    id: 'kh-dard-1981',
    directorId: 'khayyam',
    title: 'Dard',
    year: 1981,
    cast: 'Rajesh Khanna, Hema Malini, Poonam Dhillon',
    label: 'Saregama / HMV',
    significance: 'Filmfare-nominated Rajesh Khanna–Hema Malini score anchored by "Pyar Ka Dard Hai Meetha Meetha".',
    songs: [
      origSong(
        'kh-dard-1981',
        1,
        'Pyar Ka Dard Hai Meetha Meetha Pyaara Pyaara',
        'Kishore Kumar & Asha Bhosle',
        'Dard',
        1981,
        'Naqsh Lyallpuri'
      ),
      origSong(
        'kh-dard-1981',
        2,
        'Na Jaane Kya Hua Jo Tune Chhoo Liya',
        'Lata Mangeshkar',
        'Dard',
        1981,
        'Naqsh Lyallpuri'
      ),
      origSong(
        'kh-dard-1981',
        3,
        'Ahl-e-Dil Yun Bhi Nibha Lete Hain',
        'Lata Mangeshkar / Bhupinder Singh',
        'Dard',
        1981,
        'Naqsh Lyallpuri'
      ),
    ],
  },
  {
    id: 'kh-nakhuda-1981',
    directorId: 'khayyam',
    title: 'Nakhuda',
    year: 1981,
    cast: 'Raj Kiran, Swaroop Sampat, Kulbhushan Kharbanda',
    label: 'Saregama / HMV',
    significance: 'Yash Chopra production uniting Nida Fazli’s poetry with Lata Mangeshkar and Nitin Mukesh.',
    songs: [
      origSong(
        'kh-nakhuda-1981',
        1,
        'Tumhari Palkon Ki Chilmanon Mein',
        'Lata Mangeshkar & Nitin Mukesh',
        'Nakhuda',
        1981,
        'Nida Fazli'
      ),
      origSong(
        'kh-nakhuda-1981',
        2,
        'Humen Tumse Mohabbat Hai',
        'Lata Mangeshkar & Nitin Mukesh',
        'Nakhuda',
        1981,
        'Nida Fazli'
      ),
    ],
  },
  {
    id: 'kh-umrao-jaan-1981',
    directorId: 'khayyam',
    title: 'Umrao Jaan',
    year: 1981,
    cast: 'Rekha, Farooq Shaikh, Naseeruddin Shah, Raj Babbar',
    label: 'Saregama / HMV',
    significance:
      'Khayyam’s magnum opus winning both the National Film Award and Filmfare Award for Best Music Director; blends Asha Bhosle’s historic Lucknowi ghazals with authentic Awadhi folk adaptations.',
    songs: [
      origSong(
        'kh-umrao-jaan-1981',
        1,
        'Dil Cheez Kya Hai Aap Meri Jaan Lijiye',
        'Asha Bhosle',
        'Umrao Jaan',
        1981,
        'Shahryar'
      ),
      origSong(
        'kh-umrao-jaan-1981',
        2,
        'In Aankhon Ki Masti Ke',
        'Asha Bhosle',
        'Umrao Jaan',
        1981,
        'Shahryar'
      ),
      origSong(
        'kh-umrao-jaan-1981',
        3,
        'Justuju Jiski Thi Usko To Na Paya Humne',
        'Asha Bhosle',
        'Umrao Jaan',
        1981,
        'Shahryar'
      ),
      origSong(
        'kh-umrao-jaan-1981',
        4,
        'Yeh Kya Jagah Hai Doston',
        'Asha Bhosle',
        'Umrao Jaan',
        1981,
        'Shahryar'
      ),
      adaptedSong(
        'kh-umrao-jaan-1981',
        5,
        'Kahe Ko Byahi Bides',
        'Jagjit Kaur',
        'Umrao Jaan',
        1981,
        'Attributed to Amir Khusrau',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Kahe Ko Byahi Bides (Traditional Bidaai Folk)',
          originalArtist: 'Attributed to Amir Khusrau / Awadhi Folk Tradition',
          originalYear: 'Traditional (13th c.)',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Built directly upon the centuries-old Awadhi/Braj bidaai wedding folk ballad traditionally attributed to 13th-century Sufi poet-musician Amir Khusrau.',
          originalLink: 'https://www.youtube.com/watch?v=LvS4DKs90I8',
          referenceSource: 'Awadhi Lok Geet & Amir Khusrau Cultural Archives',
        }
      ),
      adaptedSong(
        'kh-umrao-jaan-1981',
        6,
        'Jhoola Kinne Dala Re Amraiya',
        'Ustad Ghulam Mustafa Khan, Shahida Khan & Runa Prasad',
        'Umrao Jaan',
        1981,
        'Shahryar / Traditional Sawan Folk',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional Sawan Jhoola / Awadhi Kajri Bandish',
          originalArtist: 'Traditional Benaras–Awadhi Thumri & Kajri Lineage',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Draws melodically and rhythmically from traditional North Indian monsoon sawan jhoola kajri and purab-ang thumri bandishes arranged for classical court ensemble.',
          originalLink: 'https://www.youtube.com/watch?v=WlwnCNSoaVM',
          referenceSource: 'Purab Ang Thumri & Sawan Folk Archives',
        }
      ),
    ],
  },
  {
    id: 'kh-baawri-1982',
    directorId: 'khayyam',
    title: 'Baawri',
    year: 1982,
    cast: 'Jaya Prada, Rakesh Roshan, Yogeeta Bali',
    label: 'Saregama / HMV',
    significance: '1982 family musical notable for Lata Mangeshkar and K. J. Yesudas.',
    songs: [
      origSong(
        'kh-baawri-1982',
        1,
        'More Naino Mein Shyam Samaye',
        'Lata Mangeshkar',
        'Baawri',
        1982,
        'Maya Govind'
      ),
      origSong(
        'kh-baawri-1982',
        2,
        'Ab Charaghon Ka Koi Kaam Nahin',
        'Lata Mangeshkar & K. J. Yesudas',
        'Baawri',
        1982,
        'Maya Govind'
      ),
    ],
  },
  {
    id: 'kh-bazaar-1982',
    directorId: 'khayyam',
    title: 'Bazaar',
    year: 1982,
    cast: 'Smita Patil, Naseeruddin Shah, Farooq Shaikh, Supriya Pathak',
    label: 'Saregama / HMV',
    significance:
      'Acclaimed Sagar Sarhadi parallel-cinema classic whose immortal ghazal anthology sets Mir Taqi Mir, Makhdoom Mohiuddin, and Bashar Nawaz to Raag Khamaj and Bihag.',
    songs: [
      origSong(
        'kh-bazaar-1982',
        1,
        'Dikhayi Diye Yun Ki Bekhud Kiya',
        'Lata Mangeshkar',
        'Bazaar',
        1982,
        'Mir Taqi Mir'
      ),
      origSong(
        'kh-bazaar-1982',
        2,
        'Phir Chhidi Raat Baat Phoolon Ki',
        'Lata Mangeshkar & Talat Aziz',
        'Bazaar',
        1982,
        'Makhdoom Mohiuddin'
      ),
      origSong(
        'kh-bazaar-1982',
        3,
        'Karoge Yaad To Har Baat Yaad Aayegi',
        'Bhupinder Singh',
        'Bazaar',
        1982,
        'Bashar Nawaz'
      ),
      origSong(
        'kh-bazaar-1982',
        4,
        'Dekh Lo Aaj Humko Jee Bhar Ke',
        'Jagjit Kaur',
        'Bazaar',
        1982,
        'Mirza Shauq'
      ),
    ],
  },
  catalogFilm(
    'kh-dil-akhir-dil-hai-1982',
    'Dil...Akhir Dil Hai',
    1982,
    '1982 drama noted for "Dil Akhir Dil Hai" by Lata Mangeshkar.',
    'Dil Akhir Dil Hai',
    'Lata Mangeshkar'
  ),
  {
    id: 'kh-dil-e-nadaan-1982',
    directorId: 'khayyam',
    title: 'Dil-e-Nadaan',
    year: 1982,
    cast: 'Rajesh Khanna, Jaya Prada, Smita Patil, Shatrughan Sinha',
    label: 'Saregama / HMV',
    significance: 'Rajesh Khanna–Jaya Prada musical anchored by Asha Bhosle and Kishore Kumar’s romantic melodies.',
    songs: [
      origSong(
        'kh-dil-e-nadaan-1982',
        1,
        'Teri Khushboo Mein Base Khat Main Jalata Kaise',
        'Jagjit Singh',
        'Dil-e-Nadaan',
        1982,
        'Naqsh Lyallpuri'
      ),
      origSong(
        'kh-dil-e-nadaan-1982',
        2,
        'Chandni Raat Mein Yun Bhi To Hua Karta Hai',
        'Kishore Kumar & Asha Bhosle',
        'Dil-e-Nadaan',
        1982,
        'Naqsh Lyallpuri'
      ),
    ],
  },
  {
    id: 'kh-sawaal-1982',
    directorId: 'khayyam',
    title: 'Sawaal',
    year: 1982,
    cast: 'Sanjeev Kumar, Shashi Kapoor, Poonam Dhillon, Randhir Kapoor',
    label: 'Saregama / HMV',
    significance: 'Yash Chopra–produced musical featuring Kishore Kumar, Asha Bhosle, and Lata Mangeshkar.',
    songs: [
      origSong(
        'kh-sawaal-1982',
        1,
        'Maana Churaoge Badan',
        'Kishore Kumar & Asha Bhosle',
        'Sawaal',
        1982,
        'Majrooh Sultanpuri'
      ),
      origSong(
        'kh-sawaal-1982',
        2,
        'Zindagi Hai Zindagi',
        'Nitin Mukesh & Lata Mangeshkar',
        'Sawaal',
        1982,
        'Majrooh Sultanpuri'
      ),
    ],
  },
  {
    id: 'kh-razia-sultan-1983',
    directorId: 'khayyam',
    title: 'Razia Sultan',
    year: 1983,
    cast: 'Hema Malini, Dharmendra, Parveen Babi',
    label: 'Saregama / HMV',
    significance:
      'Kamal Amrohi’s grand historical epic crowned by Lata Mangeshkar’s symphonic ghazal "Aye Dil-e-Naadaan" and Jagjit Kaur’s traditional sehra "Hariyala Banna Aaya Re".',
    songs: [
      origSong(
        'kh-razia-sultan-1983',
        1,
        'Aye Dil-e-Naadaan',
        'Lata Mangeshkar',
        'Razia Sultan',
        1983,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-razia-sultan-1983',
        2,
        'Jalta Hai Badan',
        'Lata Mangeshkar',
        'Razia Sultan',
        1983,
        'Jan Nisar Akhtar'
      ),
      origSong(
        'kh-razia-sultan-1983',
        3,
        'Khwab Ban Kar Koi Aayega',
        'Lata Mangeshkar',
        'Razia Sultan',
        1983,
        'Nida Fazli'
      ),
      adaptedSong(
        'kh-razia-sultan-1983',
        4,
        'Hariyala Banna Aaya Re',
        'Jagjit Kaur & Chorus',
        'Razia Sultan',
        1983,
        'Traditional / Kaif Bhopali',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Hariyala Banna (Traditional Rajasthani Wedding Folk)',
          originalArtist: 'Traditional Rajasthani & North Indian Sehra Folk',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Adapted from the traditional North Indian and Rajasthani royal wedding banna-sehra folk chorus celebrating the groom’s arrival.',
          originalLink: 'https://www.youtube.com/watch?v=DSGZ1qe9-xg',
          referenceSource: 'Rajasthani Lok Geet & Hindi Cinema Folk Archives',
        }
      ),
    ],
  },
  catalogFilm(
    'kh-mehndi-1983',
    'Mehndi',
    1983,
    '1983 Hindi drama starring Vinod Mehra and Raj Babbar scored by Khayyam.',
    'Mere Dil Ko Jiski Tamanna Thi',
    'Lata Mangeshkar & Bhupinder Singh'
  ),
  {
    id: 'kh-lorie-1984',
    directorId: 'khayyam',
    title: 'Lorie',
    year: 1984,
    cast: 'Shabana Azmi, Farooq Shaikh, Swaroop Sampat',
    label: 'T-Series / CBS',
    significance: 'Celebrated lullaby soundtrack spotlighting Asha Bhosle and Pamela Chopra.',
    songs: [
      origSong(
        'kh-lorie-1984',
        1,
        'Aaja Nindiya Suhani',
        'Lata Mangeshkar',
        'Lorie',
        1984,
        'Asad Bhopali'
      ),
      origSong(
        'kh-lorie-1984',
        2,
        'Bharosa Kar Lo Tum Saathiyon',
        'Kishore Kumar',
        'Lorie',
        1984,
        'Asad Bhopali'
      ),
    ],
  },
  catalogFilm(
    'kh-bepanaah-1985',
    'Bepanaah',
    1985,
    '1985 thriller starring Shashi Kapoor, Mithun Chakraborty, and Poonam Dhillon scored by Khayyam.',
    'Aaj Ki Raat Kuchh Hota Sa Lagta Hai',
    'Asha Bhosle'
  ),

  // =====================================================================
  // 1986–2014: ANJUMAN, LATE FILMS & FINALE RELEASES
  // =====================================================================
  {
    id: 'kh-anjuman-1986',
    directorId: 'khayyam',
    title: 'Anjuman',
    year: 1986,
    cast: 'Shabana Azmi, Farooq Shaikh, Rohini Hattangadi',
    label: 'Saregama / HMV',
    significance: 'Muzaffar Ali’s acclaimed Lucknow social drama featuring Shabana Azmi’s own ghazal rendition.',
    songs: [
      origSong(
        'kh-anjuman-1986',
        1,
        'Tujhe Apne Dil Se Main Kaise Bhulaoon',
        'Asha Bhosle',
        'Anjuman',
        1986,
        'Shahryar'
      ),
      origSong(
        'kh-anjuman-1986',
        2,
        'Kabhi Yeh Haath Tha Mere Haath Mein',
        'Bhupinder Singh',
        'Anjuman',
        1986,
        'Shahryar'
      ),
    ],
  },
  catalogFilm(
    'kh-devar-bhabhi-1986',
    'Devar Bhabhi',
    1986,
    '1986 Hindi family drama scored by Khayyam.',
    'Devar Bhabhi — Family Theme',
    'Asha Bhosle & Anwar'
  ),
  catalogFilm(
    'kh-tere-shahar-mein-1986',
    'Tere Shahar Mein',
    1986,
    '1986 Hindi film scored by Khayyam.',
    'Tere Shahar Mein — Ghazal',
    'Bhupinder Singh & Asha Bhosle'
  ),
  catalogFilm(
    'kh-ek-naya-rishta-1988',
    'Ek Naya Rishta',
    1988,
    '1988 Rekha–Raj Kiran family drama remembered for Lata Mangeshkar and Suresh Wadkar.',
    'Jise Samjhe The Hum Dost',
    'Lata Mangeshkar & Suresh Wadkar'
  ),
  catalogFilm(
    'kh-parbat-ke-us-paar-1988',
    'Parbat Ke Us Paar',
    1988,
    '1988 Abhinav Chaturvedi romantic drama featuring Mohammed Aziz and Asha Bhosle.',
    'Aaja Ranjhan Yaara Aaja',
    'Asha Bhosle & Mohammed Aziz'
  ),
  catalogFilm(
    'kh-jaan-e-wafa-1990',
    'Jaan-E-Wafa',
    1990,
    '1990 Farooq Shaikh–Rati Agnihotri romantic drama scored by Khayyam.',
    'Jaan-E-Wafa Title Ghazal',
    'Lata Mangeshkar & Talat Aziz'
  ),
  catalogFilm(
    'kh-mohabbaton-ka-safar-1995',
    'Mohabbaton Ka Safar',
    1995,
    '1995 Hindi release preserving Khayyam’s classical ghazal instrumentation.',
    'Mohabbaton Ka Safar — Title Song',
    'Alka Yagnik & Suresh Wadkar'
  ),
  catalogFilm(
    'kh-ek-hi-manzil-2000',
    'Ek Hi Manzil',
    2000,
    '2000 late-career Hindi drama scored by Khayyam.',
    'Ek Hi Manzil — Duet',
    'Udit Narayan & Sadhana Sargam'
  ),
  {
    id: 'kh-yatra-2007',
    directorId: 'khayyam',
    title: 'Yatra',
    year: 2007,
    cast: 'Rekha, Nana Patekar, Deepti Naval',
    label: 'T-Series',
    significance:
      'Acclaimed 2007 reunion with Rekha directed by Goutam Ghose, uniting Ustad Rashid Khan, Asha Bhosle, Udit Narayan, and Alka Yagnik.',
    songs: [
      origSong(
        'kh-yatra-2007',
        1,
        'Aap To Mere Hi Khwabon Mein',
        'Udit Narayan & Alka Yagnik',
        'Yatra',
        2007,
        'Ahmed Wasi'
      ),
      origSong(
        'kh-yatra-2007',
        2,
        'Jaam-e-Mohabbat',
        'Asha Bhosle',
        'Yatra',
        2007,
        'Ahmed Wasi'
      ),
      origSong(
        'kh-yatra-2007',
        3,
        'Biya Biya (Tarana)',
        'Ustad Rashid Khan',
        'Yatra',
        2007,
        'Traditional Tarana'
      ),
    ],
  },
  catalogFilm(
    'kh-mission-the-last-war-2008',
    'Mission: The Last War',
    2008,
    '2008 Hindi drama scored by Khayyam.',
    'Mission: The Last War — Song',
    'Sonu Nigam & Alka Yagnik'
  ),
  catalogFilm(
    'kh-bazaar-e-husn-2014',
    'Bazaar-E-Husn',
    2014,
    'Final released Hindi feature soundtrack of Khayyam’s six-decade film career (2014), preserving his classical ghazal aesthetic.',
    'Bazaar-E-Husn — Classical Track',
    'Kavita Krishnamurthy & Talat Aziz'
  ),
];
