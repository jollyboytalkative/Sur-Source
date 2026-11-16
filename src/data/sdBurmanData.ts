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
  notes?: string
): SongEntry => ({
  id: `${movieId}-${idx}`,
  movieId,
  title,
  singers,
  adaptationType: 'original',
  originCategory: 'Original Composition',
  adaptationNotes: notes,
  bollywoodLink: yt(`${title} ${movieTitle} ${year} S D Burman`),
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
  spec: AdaptedSpec
): SongEntry => ({
  id: `${movieId}-${idx}`,
  movieId,
  title,
  singers,
  adaptationType: spec.adaptationType,
  originalSongTitle: spec.originalSongTitle,
  originalArtist: spec.originalArtist,
  originalYear: spec.originalYear,
  originCategory: spec.originCategory,
  adaptationNotes: spec.adaptationNotes,
  bollywoodLink: yt(`${title} ${movieTitle} ${year} S D Burman`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

const catalogFilm = (
  id: string,
  title: string,
  year: number,
  significance: string,
  leadTrackTitle?: string,
  singers = 'S.D. Burman Ensemble'
): MovieEntry => ({
  id,
  directorId: 'sd-burman',
  title,
  year,
  label: 'Saregama / HMV',
  significance,
  songs: [
    origSong(
      id,
      1,
      leadTrackTitle ?? `${title} (Title Theme)`,
      singers,
      title,
      year,
      'Cataloged original Hindi soundtrack entry from the S.D. Burman Bollywood filmography.'
    ),
  ],
});

export const SD_BURMAN_MOVIES: MovieEntry[] = [
  catalogFilm('sdb-eight-days-1946', 'Eight Days', 1946, '1946 Filmistan debut-era Hindi comedy starring Ashok Kumar (released alongside Shikari).', 'Ummeed Bhara Panchhi', 'S.D. Burman Ensemble'),
  {
    id: 'sdb-shikari-1946',
    directorId: 'sd-burman',
    title: 'Shikari',
    year: 1946,
    cast: 'Ashok Kumar, Veera, Kishore Kumar',
    label: 'Saregama / HMV',
    significance:
      'Landmark 1946 Filmistan drama marking S.D. Burman’s full Hindi cinema breakthrough and Kishore Kumar’s early screen debut.',
    songs: [
      origSong('sdb-shikari-1946', 1, 'Duniya Ne Hamein Do Din', 'Amirbai Karnataki', 'Shikari', 1946),
      origSong('sdb-shikari-1946', 2, 'Chali Re Chali Re Meri Nao', 'S.D. Burman Ensemble', 'Shikari', 1946),
    ],
  },
  catalogFilm('sdb-chittor-vijay-1947', 'Chittor Vijay', 1947, '1947 Mohan Sinha historical starring Raj Kapoor & Madhubala.', 'Suno Suno Kahani', 'Geeta Dutt'),
  catalogFilm('sdb-dil-ki-rani-1947', 'Dil Ki Rani', 1947, '1947 Raj Kapoor & Madhubala romantic drama.', 'O Duniya Ke Rehne Walon', 'Geeta Dutt'),
  {
    id: 'sdb-do-bhai-1947',
    directorId: 'sd-burman',
    title: 'Do Bhai',
    year: 1947,
    cast: 'Ulhas, Kamini Kaushal, Rajan Haksar',
    label: 'Saregama / HMV',
    significance:
      '1947 Filmistan hit whose immortal Geeta Dutt classic "Mera Sundar Sapna Beet Gaya" made S.D. Burman a household name in Bombay.',
    songs: [
      origSong('sdb-do-bhai-1947', 1, 'Mera Sundar Sapna Beet Gaya', 'Geeta Dutt', 'Do Bhai', 1947),
      origSong('sdb-do-bhai-1947', 2, 'Yaad Karoge Ek Din', 'Geeta Dutt', 'Do Bhai', 1947),
    ],
  },
  catalogFilm('sdb-vidya-1948', 'Vidya', 1948, '1948 Suraiya & Dev Anand social romance, Burman’s first collaboration with Dev Anand.', 'Kinare Kinare Chale Jayenge', 'Suraiya'),
  catalogFilm('sdb-kamal-1949', 'Kamal', 1949, '1949 Hindi feature drama scored by S.D. Burman.', 'Kahan Chhupa Hai', 'Geeta Dutt'),
  {
    id: 'sdb-shabnam-1949',
    directorId: 'sd-burman',
    title: 'Shabnam',
    year: 1949,
    cast: 'Dilip Kumar, Kamini Kaushal',
    label: 'Saregama / HMV',
    significance:
      '1949 Filmistan hit propelled by Shamshad Begum’s multi-lingual sensation "Yeh Duniya Roop Ki Chor".',
    songs: [
      origSong('sdb-shabnam-1949', 1, 'Yeh Duniya Roop Ki Chor', 'Shamshad Begum', 'Shabnam', 1949),
      origSong('sdb-shabnam-1949', 2, 'Qismat Mein Bichhadna Tha', 'Mukesh, Geeta Dutt', 'Shabnam', 1949),
    ],
  },
  catalogFilm('sdb-afsar-1950', 'Afsar', 1950, '1950 Navketan Films’ inaugural production starring Dev Anand & Suraiya.', 'Man Mor Hua Matwala', 'Suraiya'),
  catalogFilm('sdb-mashaal-1950', 'Mashaal', 1950, '1950 Nitin Bose Bombay Talkies Hindi classic starring Ashok Kumar & Sumitra Devi.', 'Upar Gagan Vishal', 'Manna Dey'),
  catalogFilm('sdb-pyar-1950', 'Pyar', 1950, '1950 Raj Kapoor & Nargis romantic drama.', 'O Bewafa Yeh To Bata', 'Geeta Dutt, Kishore Kumar'),
  {
    id: 'sdb-baazi-1951',
    directorId: 'sd-burman',
    title: 'Baazi',
    year: 1951,
    cast: 'Dev Anand, Geeta Bali, Kalpana Kartik',
    label: 'Saregama / HMV',
    significance:
      'Watershed 1951 noir classic directed by Guru Dutt with Sahir Ludhianvi lyrics, turning Geeta Dutt’s club jazz-ghazal "Tadbeer Se Bigdi Hui Taqdeer" into a modern classic.',
    songs: [
      origSong('sdb-baazi-1951', 1, 'Tadbeer Se Bigdi Hui Taqdeer', 'Geeta Dutt', 'Baazi', 1951),
      origSong('sdb-baazi-1951', 2, 'Aaj Ki Raat Piya', 'Geeta Dutt', 'Baazi', 1951),
      origSong('sdb-baazi-1951', 3, 'Suno Gajar Kya Gaaye', 'Geeta Dutt', 'Baazi', 1951),
      origSong('sdb-baazi-1951', 4, 'Yeh Kaun Aaya', 'Geeta Dutt', 'Baazi', 1951),
    ],
  },
  catalogFilm('sdb-bahar-1951', 'Bahar', 1951, '1951 Vyjayanthimala debut Hindi hit featuring Shamshad Begum’s "Saiyan Dil Mein Aana Re".', 'Saiyan Dil Mein Aana Re', 'Shamshad Begum'),
  catalogFilm('sdb-buzdil-1951', 'Buzdil', 1951, '1951 Premnath & Nimmi melodrama.', 'Jaane Na Nazar', 'Lata Mangeshkar'),
  catalogFilm('sdb-ek-nazar-1951', 'Ek Nazar', 1951, '1951 Rehman & Nalini Jaywant drama.', 'Naye Zamane Ki', 'Lata Mangeshkar'),
  catalogFilm('sdb-naujawan-1951', 'Naujawan', 1951, '1951 Premnath & Nalini Jaywant hit featuring "Thandi Hawayein".', 'Thandi Hawayein', 'Lata Mangeshkar'),
  catalogFilm('sdb-sazaa-1951', 'Sazaa', 1951, '1951 Dev Anand & Nimmi romance famed for "Tum Na Jaane Kis Jahan Mein Kho Gaye".', 'Tum Na Jaane Kis Jahan Mein Kho Gaye', 'Lata Mangeshkar'),
  {
    id: 'sdb-jaal-1952',
    directorId: 'sd-burman',
    title: 'Jaal',
    year: 1952,
    cast: 'Dev Anand, Geeta Bali',
    label: 'Saregama / HMV',
    significance:
      '1952 Guru Dutt coastal noir featuring Hemant Kumar’s immortal Goan-infused classic "Yeh Raat Yeh Chandni Phir Kahan".',
    songs: [
      origSong('sdb-jaal-1952', 1, 'Yeh Raat Yeh Chandni Phir Kahan', 'Hemant Kumar', 'Jaal', 1952),
      origSong('sdb-jaal-1952', 2, 'Pighla Hai Sona Door Gagan Par', 'Lata Mangeshkar', 'Jaal', 1952),
      origSong('sdb-jaal-1952', 3, 'De Bhi Chuke Hum Dil Nazrana', 'Geeta Dutt, Kishore Kumar', 'Jaal', 1952),
    ],
  },
  catalogFilm('sdb-lal-kunwar-1952', 'Lal Kunwar', 1952, '1952 Ravindra Dave Hindi drama.', 'Dil Ko Laga Ke', 'Geeta Dutt'),
  catalogFilm('sdb-armaan-1953', 'Armaan', 1953, '1953 Dev Anand & Madhubala romantic musical.', 'Bolo Ji Dil Loge To Kya Kya Doge', 'Geeta Dutt'),
  catalogFilm('sdb-jeevan-jyoti-1953', 'Jeevan Jyoti', 1953, '1953 Shammi Kapoor’s Hindi film debut.', 'Tasveer Banata Hoon', 'Mohammed Rafi'),
  catalogFilm('sdb-shahenshah-1953', 'Shahenshah', 1953, '1953 Amiya Chakrabarty costume drama starring Kamini Kaushal & Ranjan.', 'Chahe Koi Khush Ho Chahe Galiyan Hazar De', 'Mohammed Rafi'),
  catalogFilm('sdb-angarey-1954', 'Angarey', 1954, '1954 Nasir Khan & Nargis social film.', 'Roshni Hogi Na Jab Tak', 'Lata Mangeshkar'),
  catalogFilm('sdb-chalis-baba-ek-chor-1954', 'Chalis Baba Ek Chor', 1954, '1954 P.L. Santoshi musical comedy starring Balraj Sahni & Kamini Kaushal.', 'Kadam Milake Chalo', 'Kishore Kumar, Asha Bhosle'),
  catalogFilm('sdb-radha-krishna-1954', 'Radha Krishna', 1954, '1954 devotional Hindi musical drama.', 'Bansi Bajaye Shyam', 'Lata Mangeshkar'),
  {
    id: 'sdb-taxi-driver-1954',
    directorId: 'sd-burman',
    title: 'Taxi Driver',
    year: 1954,
    cast: 'Dev Anand, Kalpana Kartik',
    label: 'Saregama / HMV',
    significance:
      'Filmfare Award-winning 1954 Navketan urban classic pairing Talat Mahmood’s "Jayein To Jayein Kahan" with Kishore Kumar’s Tarantella-inspired "Chahe Koi Khush Ho".',
    songs: [
      adaptedSong(
        'sdb-taxi-driver-1954',
        1,
        'Chahe Koi Khush Ho',
        'Kishore Kumar',
        'Taxi Driver',
        1954,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Tarantella',
          originalArtist: 'Traditional Italian Folk',
          originalYear: 'Traditional',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Exuberant 6/8 bounce and rapid-fire accordion/string refrain inspired by the classic Neapolitan Italian folk dance "Tarantella".',
          originalLink: 'https://www.youtube.com/watch?v=-OWNFZrIuM8',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-taxi-driver-1954', 2, 'Jayein To Jayein Kahan', 'Talat Mahmood', 'Taxi Driver', 1954),
      origSong('sdb-taxi-driver-1954', 3, 'Ae Meri Zindagi Aaj Raat Jhoom Le', 'Lata Mangeshkar', 'Taxi Driver', 1954),
    ],
  },
  {
    id: 'sdb-devdas-1955',
    directorId: 'sd-burman',
    title: 'Devdas',
    year: 1955,
    cast: 'Dilip Kumar, Suchitra Sen, Vyjayanthimala',
    label: 'Saregama / HMV',
    significance:
      'Bimal Roy’s 1955 Hindi masterpiece featuring Talat Mahmood’s haunting "Mitwa Lagi Re Ye Kaisi" & Lata’s classical thumris.',
    songs: [
      origSong('sdb-devdas-1955', 1, 'Mitwa Lagi Re Ye Kaisi', 'Talat Mahmood', 'Devdas', 1955),
      origSong('sdb-devdas-1955', 2, 'Kisko Khabar Thi Kisko Yaqeen Tha', 'Talat Mahmood', 'Devdas', 1955),
      origSong('sdb-devdas-1955', 3, 'Jise Tu Qabool Kar Le', 'Lata Mangeshkar', 'Devdas', 1955),
    ],
  },
  {
    id: 'sdb-house-no-44-1955',
    directorId: 'sd-burman',
    title: 'House No. 44',
    year: 1955,
    cast: 'Dev Anand, Kalpana Kartik',
    label: 'Saregama / HMV',
    significance:
      '1955 Navketan thriller famed for Hemant Kumar’s philosophical nocturnal ballad "Chup Hai Dharti Chup Hai Chand".',
    songs: [
      origSong('sdb-house-no-44-1955', 1, 'Chup Hai Dharti Chup Hai Chand', 'Hemant Kumar', 'House No. 44', 1955),
      origSong('sdb-house-no-44-1955', 2, 'Phaili Hui Hain Sapnon Ki Baahein', 'Lata Mangeshkar', 'House No. 44', 1955),
    ],
  },
  catalogFilm('sdb-mad-bhare-nain-1955', 'Mad Bhare Nain', 1955, '1955 Kishore Kumar & Bina Rai romance.', 'Dekho Nainon Mein Nain', 'Kishore Kumar, Asha Bhosle'),
  {
    id: 'sdb-munimji-1955',
    directorId: 'sd-burman',
    title: 'Munimji',
    year: 1955,
    cast: 'Dev Anand, Nalini Jaywant, Pran',
    label: 'Saregama / HMV',
    significance:
      '1955 Filmistan blockbuster starring Dev Anand, notable for "Jeevan Ke Safar Mein Rahi" whose playful rhythm nods to the "Mexican Hat Dance".',
    songs: [
      adaptedSong(
        'sdb-munimji-1955',
        1,
        'Jeevan Ke Safar Mein Rahi',
        'Kishore Kumar',
        'Munimji',
        1955,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Mexican Hat Dance (Jarabe Tapatío)',
          originalArtist: 'Traditional Mexican / José Ortega Mariachi Band',
          originalYear: 'Traditional',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Upbeat rhythmic stride and melodic turn subtly inspired by the Mexican folk standard "Jarabe Tapatío (Mexican Hat Dance)" adapted to a relaxed Hindi travel tempo.',
          originalLink: 'https://www.youtube.com/watch?v=CGms1r5hqdA',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-munimji-1955', 2, 'Ghayal Hiraniya Main Ban Ban Dolu', 'Lata Mangeshkar', 'Munimji', 1955),
      origSong('sdb-munimji-1955', 3, 'Dil Ki Umangein Hain Jawan', 'Hemant Kumar, Geeta Dutt', 'Munimji', 1955),
    ],
  },
  catalogFilm('sdb-society-1955', 'Society', 1955, '1955 Nasir Khan & Nimmi social drama.', 'Kuchh Kahe Bina', 'Lata Mangeshkar'),
  {
    id: 'sdb-funtoosh-1956',
    directorId: 'sd-burman',
    title: 'Funtoosh',
    year: 1956,
    cast: 'Dev Anand, Sheila Ramani',
    label: 'Saregama / HMV',
    significance:
      '1956 Navketan comedy-classic giving Kishore Kumar his immortal existential anthem "Dukhi Man Mere".',
    songs: [
      origSong('sdb-funtoosh-1956', 1, 'Dukhi Man Mere', 'Kishore Kumar', 'Funtoosh', 1956),
      origSong('sdb-funtoosh-1956', 2, 'Ae Mere Topi Palat Ke Aa', 'Kishore Kumar', 'Funtoosh', 1956),
      origSong('sdb-funtoosh-1956', 3, 'Woh Dekhein To Unki Inayat', 'Asha Bhosle', 'Funtoosh', 1956),
    ],
  },
  catalogFilm('sdb-miss-india-1957', 'Miss India', 1957, '1957 Nargis & Pradeep Kumar musical.', 'Albela Main Ek Dilwala', 'Kishore Kumar'),
  {
    id: 'sdb-nau-do-gyarah-1957',
    directorId: 'sd-burman',
    title: 'Nau Do Gyarah',
    year: 1957,
    cast: 'Dev Anand, Kalpana Kartik',
    label: 'Saregama / HMV',
    significance:
      '1957 Vijay Anand road-comedy hit featuring Mohammed Rafi & Asha Bhosle’s evergreen duet "Aankhon Mein Kya Ji".',
    songs: [
      origSong('sdb-nau-do-gyarah-1957', 1, 'Aankhon Mein Kya Ji', 'Kishore Kumar, Asha Bhosle', 'Nau Do Gyarah', 1957),
      origSong('sdb-nau-do-gyarah-1957', 2, 'Hum Hain Rahi Pyar Ke', 'Kishore Kumar', 'Nau Do Gyarah', 1957),
      origSong('sdb-nau-do-gyarah-1957', 3, 'Kali Ke Roop Mein Chali Ho Dhoop Mein', 'Asha Bhosle, Mohammed Rafi', 'Nau Do Gyarah', 1957),
    ],
  },
  {
    id: 'sdb-paying-guest-1957',
    directorId: 'sd-burman',
    title: 'Paying Guest',
    year: 1957,
    cast: 'Dev Anand, Nutan',
    label: 'Saregama / HMV',
    significance:
      '1957 Filmistan romantic hit packed with Kishore Kumar & Majrooh Sultanpuri’s breezy evergreen classics.',
    songs: [
      origSong('sdb-paying-guest-1957', 1, 'Mana Janab Ne Pukara Nahin', 'Kishore Kumar', 'Paying Guest', 1957),
      origSong('sdb-paying-guest-1957', 2, 'Chhod Do Aanchal Zamana Kya Kahega', 'Kishore Kumar, Asha Bhosle', 'Paying Guest', 1957),
      origSong('sdb-paying-guest-1957', 3, 'Chand Phir Nikla', 'Lata Mangeshkar', 'Paying Guest', 1957),
    ],
  },
  {
    id: 'sdb-pyaasa-1957',
    directorId: 'sd-burman',
    title: 'Pyaasa',
    year: 1957,
    cast: 'Guru Dutt, Waheeda Rehman, Mala Sinha',
    label: 'Saregama / HMV',
    significance:
      'Guru Dutt’s 1957 poetic masterwork—universally hailed among the greatest soundtracks in Indian cinema history alongside Sahir Ludhianvi’s immortal verse.',
    songs: [
      origSong('sdb-pyaasa-1957', 1, 'Yeh Duniya Agar Mil Bhi Jaye To Kya Hai', 'Mohammed Rafi', 'Pyaasa', 1957),
      origSong('sdb-pyaasa-1957', 2, 'Jinhein Naaz Hai Hind Par Woh Kahan Hain', 'Mohammed Rafi', 'Pyaasa', 1957),
      origSong('sdb-pyaasa-1957', 3, 'Jaane Woh Kaise Log The Jinke Pyar Ko', 'Hemant Kumar', 'Pyaasa', 1957),
      origSong('sdb-pyaasa-1957', 4, 'Sar Jo Tera Chakraye', 'Mohammed Rafi', 'Pyaasa', 1957),
      origSong('sdb-pyaasa-1957', 5, 'Aaj Sajan Mohe Ang Laga Lo', 'Geeta Dutt', 'Pyaasa', 1957),
    ],
  },
  {
    id: 'sdb-chalti-ka-naam-gaadi-1958',
    directorId: 'sd-burman',
    title: 'Chalti Ka Naam Gaadi',
    year: 1958,
    cast: 'Kishore Kumar, Madhubala, Ashok Kumar, Anoop Kumar',
    label: 'Saregama / HMV',
    significance:
      'Timeless 1958 screwball comedy classic where Kishore Kumar reportedly nudged S.D. Burman toward Tennessee Ernie Ford’s rhythms on "Ek Ladki Bheegi Bhaagi Si" and "Hum The Woh Thi".',
    songs: [
      adaptedSong(
        'sdb-chalti-ka-naam-gaadi-1958',
        1,
        'Ek Ladki Bheegi Bhaagi Si',
        'Kishore Kumar',
        'Chalti Ka Naam Gaadi',
        1958,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Sixteen Tons',
          originalArtist: 'Tennessee Ernie Ford',
          originalYear: '1955',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Finger-snapping walking bassline and bluesy shuffle cadence inspired by Tennessee Ernie Ford’s 1955 hit "Sixteen Tons" at Kishore Kumar’s suggestion, transformed with Hindi jazz swing.',
          originalLink: 'https://www.youtube.com/watch?v=S1980WfKC0o',
          referenceSource: 'ITWOFS',
        }
      ),
      adaptedSong(
        'sdb-chalti-ka-naam-gaadi-1958',
        2,
        'Hum The Woh Thi Aur Sama Rangeen',
        'Kishore Kumar',
        'Chalti Ka Naam Gaadi',
        1958,
        {
          adaptationType: 'copied',
          originalSongTitle: 'The Watermelon Song',
          originalArtist: 'Tennessee Ernie Ford',
          originalYear: '1957',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Playful country-swing hook and bouncy stanza melody directly adapted from Tennessee Ernie Ford’s "The Watermelon Song".',
          originalLink: 'https://www.youtube.com/watch?v=r6z8IRbOx-o',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-chalti-ka-naam-gaadi-1958', 3, 'Haal Kaisa Hai Janab Ka', 'Kishore Kumar, Asha Bhosle', 'Chalti Ka Naam Gaadi', 1958),
      origSong('sdb-chalti-ka-naam-gaadi-1958', 4, 'Babu Samjho Ishare', 'Kishore Kumar, Manna Dey', 'Chalti Ka Naam Gaadi', 1958),
      origSong('sdb-chalti-ka-naam-gaadi-1958', 5, 'Paanch Rupaiya Baara Aana', 'Kishore Kumar, Asha Bhosle', 'Chalti Ka Naam Gaadi', 1958),
    ],
  },
  {
    id: 'sdb-kala-pani-1958',
    directorId: 'sd-burman',
    title: 'Kala Pani',
    year: 1958,
    cast: 'Dev Anand, Madhubala, Nalini Jaywant',
    label: 'Saregama / HMV',
    significance:
      '1958 Navketan hit crowned by Mohammed Rafi’s incandescent nocturnal classic "Hum Bekhudi Mein Tum Ko Pukare Chale Gaye".',
    songs: [
      origSong('sdb-kala-pani-1958', 1, 'Hum Bekhudi Mein Tum Ko Pukare Chale Gaye', 'Mohammed Rafi', 'Kala Pani', 1958),
      origSong('sdb-kala-pani-1958', 2, 'Achha Ji Main Haari Chalo Maan Jao Na', 'Asha Bhosle, Mohammed Rafi', 'Kala Pani', 1958),
    ],
  },
  catalogFilm('sdb-lajwanti-1958', 'Lajwanti', 1958, '1958 Balraj Sahni & Nargis National Award-winning family drama.', 'Gaa Mere Man Gaa', 'Asha Bhosle'),
  catalogFilm('sdb-sitaron-se-aage-1958', 'Sitaron Se Aage', 1958, '1958 Ashok Kumar & Vyjayanthimala drama.', 'Pag Thumak Chalat', 'Lata Mangeshkar'),
  {
    id: 'sdb-solva-saal-1958',
    directorId: 'sd-burman',
    title: 'Solva Saal',
    year: 1958,
    cast: 'Dev Anand, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      '1958 Raj Khosla hit celebrated for Hemant Kumar’s "Hai Apna Dil To Aawara" alongside Asha Bhosle’s "Yeh Bhi Koi Roothne Ka Din Hai", adapted from the Rahbani Brothers’ "Ya Ghozayel".',
    songs: [
      adaptedSong(
        'sdb-solva-saal-1958',
        1,
        'Yeh Bhi Koi Roothne Ka Din Hai',
        'Asha Bhosle',
        'Solva Saal',
        1958,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Ya Ghozayel (Arab Feast)',
          originalArtist: 'Fairuz / Rahbani Brothers',
          originalYear: '1950s',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Middle Eastern string motif and playful refrain melody closely parallels the Rahbani Brothers’ Lebanese classic "Ya Ghozayel" (later popularised internationally as "Arab Feast").',
          originalLink: 'https://www.youtube.com/watch?v=IfJENZzwaEk',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-solva-saal-1958', 2, 'Hai Apna Dil To Aawara', 'Hemant Kumar', 'Solva Saal', 1958),
    ],
  },
  {
    id: 'sdb-insaan-jaag-utha-1959',
    directorId: 'sd-burman',
    title: 'Insaan Jaag Utha',
    year: 1959,
    cast: 'Sunil Dutt, Madhubala',
    label: 'Saregama / HMV',
    significance:
      '1959 Shakti Samanta social drama containing "Yeh Chanda Ruus Ka", directly adapted from the Rahbani Brothers’ Levantine hit "Al Bint Al Shalabiyya".',
    songs: [
      adaptedSong(
        'sdb-insaan-jaag-utha-1959',
        1,
        'Yeh Chanda Ruus Ka',
        'Mohammed Rafi, Asha Bhosle',
        'Insaan Jaag Utha',
        1959,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Al Bint Al Shalabiyya (Barefoot Girl)',
          originalArtist: 'Fairuz / Rahbani Brothers',
          originalYear: '1950s',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Bouncy Middle Eastern melodic phrase closely patterned after the Rahbani Brothers / Fairuz classic "Al Bint Al Shalabiyya" (featured as "Barefoot Girl" on Music for an Arabian Night).',
          originalLink: 'https://www.youtube.com/watch?v=7f-SmC7V6jQ',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-insaan-jaag-utha-1959', 2, 'Jaanu Jaanu Ri Kaahe Khanke Hai Tora Kangna', 'Geeta Dutt, Asha Bhosle', 'Insaan Jaag Utha', 1959),
    ],
  },
  {
    id: 'sdb-kaagaz-ke-phool-1959',
    directorId: 'sd-burman',
    title: 'Kaagaz Ke Phool',
    year: 1959,
    cast: 'Guru Dutt, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      'Guru Dutt’s 1959 cinematic masterpiece anchored by Geeta Dutt’s luminous "Waqt Ne Kiya Kya Haseen Sitam" and Kaifi Azmi’s timeless poetry.',
    songs: [
      origSong('sdb-kaagaz-ke-phool-1959', 1, 'Waqt Ne Kiya Kya Haseen Sitam', 'Geeta Dutt', 'Kaagaz Ke Phool', 1959),
      origSong('sdb-kaagaz-ke-phool-1959', 2, 'Dekhi Zamane Ki Yaari', 'Mohammed Rafi', 'Kaagaz Ke Phool', 1959),
      origSong('sdb-kaagaz-ke-phool-1959', 3, 'Hum Tum Jise Kehta Hai Shaadi', 'Mohammed Rafi', 'Kaagaz Ke Phool', 1959),
    ],
  },
  {
    id: 'sdb-sujata-1959',
    directorId: 'sd-burman',
    title: 'Sujata',
    year: 1959,
    cast: 'Nutan, Sunil Dutt',
    label: 'Saregama / HMV',
    significance:
      '1959 Bimal Roy classic uniting Talat Mahmood’s "Jalte Hain Jiske Liye" with Burman’s own East Bengal Bhatiali rendition "Sun Mere Bandhu Re".',
    songs: [
      adaptedSong(
        'sdb-sujata-1959',
        1,
        'Sun Mere Bandhu Re',
        'S.D. Burman',
        'Sujata',
        1959,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional East Bengal Bhatiali Boatman Folk Melody',
          originalArtist: 'Traditional Bengal Riverboat Folk Tradition',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Flowing elongated vocal glides and boatman’s river call drawn directly from traditional East Bengal Bhatiali folk music of Burman’s native Comilla.',
          originalLink: 'https://www.youtube.com/watch?v=38gPX0XpzrU',
          referenceSource: 'Indian Folk & Film Music Archives',
        }
      ),
      origSong('sdb-sujata-1959', 2, 'Jalte Hain Jiske Liye', 'Talat Mahmood', 'Sujata', 1959),
      origSong('sdb-sujata-1959', 3, 'Kaali Ghata Chhaye Mora Jiya Tarsaye', 'Asha Bhosle', 'Sujata', 1959),
    ],
  },
  catalogFilm('sdb-apna-haath-jagannath-1960', 'Apna Haath Jagannath', 1960, '1960 Kishore Kumar & Sayeeda Khan musical comedy.', 'Chhuk Chhuk', 'Kishore Kumar'),
  catalogFilm('sdb-bewaqoof-1960', 'Bewaqoof', 1960, '1960 Kishore Kumar & Mala Sinha comedy.', 'Michael Hai To Cycle Hai', 'Kishore Kumar, Asha Bhosle, Manna Dey'),
  {
    id: 'sdb-bombai-ka-babu-1960',
    directorId: 'sd-burman',
    title: 'Bombai Ka Babu',
    year: 1960,
    cast: 'Dev Anand, Suchitra Sen',
    label: 'Saregama / HMV',
    significance:
      '1960 Raj Khosla noir classic crowned by Mukesh’s immortal ballad "Chal Ri Sajni Ab Kya Soche".',
    songs: [
      origSong('sdb-bombai-ka-babu-1960', 1, 'Chal Ri Sajni Ab Kya Soche', 'Mukesh', 'Bombai Ka Babu', 1960),
      origSong('sdb-bombai-ka-babu-1960', 2, 'Deewana Mastana Hua Dil', 'Mohammed Rafi, Asha Bhosle', 'Bombai Ka Babu', 1960),
    ],
  },
  catalogFilm('sdb-ek-ke-baad-ek-1960', 'Ek Ke Baad Ek', 1960, '1960 Dev Anand & Tarla Mehta Raj Rishi comedy.', 'Nazar Milake', 'Asha Bhosle'),
  {
    id: 'sdb-kala-bazar-1960',
    directorId: 'sd-burman',
    title: 'Kala Bazar',
    year: 1960,
    cast: 'Dev Anand, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      '1960 Vijay Anand classic whose "Khoya Khoya Chand" remains one of Mohammed Rafi’s finest romantic solos.',
    songs: [
      origSong('sdb-kala-bazar-1960', 1, 'Khoya Khoya Chand Khula Aasman', 'Mohammed Rafi', 'Kala Bazar', 1960),
      origSong('sdb-kala-bazar-1960', 2, 'Rimjhim Ke Tarane Leke Aayi Barsaat', 'Mohammed Rafi, Geeta Dutt', 'Kala Bazar', 1960),
      origSong('sdb-kala-bazar-1960', 3, 'Apni To Har Aah Ek Toofan Hai', 'Mohammed Rafi', 'Kala Bazar', 1960),
    ],
  },
  catalogFilm('sdb-manzil-1960', 'Manzil', 1960, '1960 Dev Anand & Nutan drama featuring Manna Dey’s "Chupke Se Mile".', 'Yaad Aa Gayi Woh Nashili Nigahein', 'Mohammed Rafi'),
  catalogFilm('sdb-miyan-biwi-razi-1960', 'Miyan Biwi Razi', 1960, '1960 Mehmood & Kamini Kaushal social comedy.', 'Chhota Sa Balma', 'Mohammed Rafi, Asha Bhosle'),
  {
    id: 'sdb-baat-ek-raat-ki-1962',
    directorId: 'sd-burman',
    title: 'Baat Ek Raat Ki',
    year: 1962,
    cast: 'Dev Anand, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      '1962 Shankar Mukherjee suspense hit featuring Asha Bhosle & Mohammed Rafi’s evergreen "Na Tum Humein Jano".',
    songs: [
      origSong('sdb-baat-ek-raat-ki-1962', 1, 'Na Tum Humein Jano (Hemant Version)', 'Hemant Kumar', 'Baat Ek Raat Ki', 1962),
      origSong('sdb-baat-ek-raat-ki-1962', 2, 'Akele Akele Kahan Ja Rahe Ho', 'Mohammed Rafi', 'Baat Ek Raat Ki', 1962),
    ],
  },
  catalogFilm('sdb-dr-vidya-1962', 'Dr. Vidya', 1962, '1962 Vyjayanthimala & Manoj Kumar drama.', 'Pawan Diwani Na Maane', 'Lata Mangeshkar'),
  catalogFilm('sdb-naughty-boy-1962', 'Naughty Boy', 1962, '1962 Kishore Kumar & Kalpana comedy featuring R.D. Burman’s early rhythmic contributions under SDB.', 'Abhi To Haath Mein Jaam Hai', 'Kishore Kumar'),
  {
    id: 'sdb-bandini-1963',
    directorId: 'sd-burman',
    title: 'Bandini',
    year: 1963,
    cast: 'Nutan, Ashok Kumar, Dharmendra',
    label: 'Saregama / HMV',
    significance:
      'Bimal Roy’s 1963 Filmfare Best Film winner blending "Mora Gora Ang Lai Le" (Gulzar’s debut lyric) with S.D. Burman’s Bhatiali masterpiece "O Re Majhi".',
    songs: [
      adaptedSong(
        'sdb-bandini-1963',
        1,
        'O Re Majhi (Mere Saajan Hain Us Paar)',
        'S.D. Burman',
        'Bandini',
        1963,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional East Bengal Bhatiali Boatman Song',
          originalArtist: 'Traditional Bengal Riverboat Folk Tradition',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Authentic East Bengal Bhatiali riverboat song phrasing adapted as a bardic narrative metaphor for separation and crossing the river.',
          originalLink: 'https://www.youtube.com/watch?v=38gPX0XpzrU',
          referenceSource: 'Indian Folk & Cinema Archives',
        }
      ),
      origSong('sdb-bandini-1963', 2, 'Mora Gora Ang Lai Le', 'Lata Mangeshkar', 'Bandini', 1963),
      origSong('sdb-bandini-1963', 3, 'Ab Ke Baras Bhej Bhaiya Ko Babul', 'Asha Bhosle', 'Bandini', 1963),
      origSong('sdb-bandini-1963', 4, 'O Jaanewale Ho Sake To Laut Ke Aana', 'Mukesh', 'Bandini', 1963),
    ],
  },
  {
    id: 'sdb-meri-surat-teri-ankhen-1963',
    directorId: 'sd-burman',
    title: 'Meri Surat Teri Ankhen',
    year: 1963,
    cast: 'Ashok Kumar, Asha Parekh',
    label: 'Saregama / HMV',
    significance:
      '1963 musical landmark celebrating Manna Dey’s Raag Ahir Bhairav classic "Poochho Na Kaise Maine Rain Bitayi".',
    songs: [
      origSong('sdb-meri-surat-teri-ankhen-1963', 1, 'Poochho Na Kaise Maine Rain Bitayi', 'Manna Dey', 'Meri Surat Teri Ankhen', 1963),
      origSong('sdb-meri-surat-teri-ankhen-1963', 2, 'Naache Man Mora Magan', 'Mohammed Rafi', 'Meri Surat Teri Ankhen', 1963),
    ],
  },
  {
    id: 'sdb-tere-ghar-ke-samne-1963',
    directorId: 'sd-burman',
    title: 'Tere Ghar Ke Samne',
    year: 1963,
    cast: 'Dev Anand, Nutan',
    label: 'Saregama / HMV',
    significance:
      '1963 Vijay Anand romantic classic famed for Mohammed Rafi & Lata Mangeshkar’s "Dil Ka Bhanwar Kare Pukar" (filmed inside Qutub Minar).',
    songs: [
      origSong('sdb-tere-ghar-ke-samne-1963', 1, 'Dil Ka Bhanwar Kare Pukar', 'Mohammed Rafi', 'Tere Ghar Ke Samne', 1963),
      origSong('sdb-tere-ghar-ke-samne-1963', 2, 'Tere Ghar Ke Samne', 'Lata Mangeshkar, Mohammed Rafi', 'Tere Ghar Ke Samne', 1963),
      origSong('sdb-tere-ghar-ke-samne-1963', 3, 'Tu Kahan Yeh Bata', 'Mohammed Rafi', 'Tere Ghar Ke Samne', 1963),
    ],
  },
  catalogFilm('sdb-benazir-1964', 'Benazir', 1964, '1964 Meena Kumari & Ashok Kumar Muslim social drama.', 'Aa Jaane Bahar', 'Lata Mangeshkar'),
  catalogFilm('sdb-kaise-kahoon-1964', 'Kaise Kahoon', 1964, '1964 Biswajit & Nanda romantic drama.', 'Haaye Tabassum Tera', 'Mohammed Rafi'),
  {
    id: 'sdb-ziddi-1964',
    directorId: 'sd-burman',
    title: 'Ziddi',
    year: 1964,
    cast: 'Joy Mukherjee, Asha Parekh',
    label: 'Saregama / HMV',
    significance:
      '1964 Pramod Chakravorty hit featuring Manna Dey & Lata Mangeshkar’s evergreen duet "Pyaar Ki Aag Mein Tan Badan".',
    songs: [
      origSong('sdb-ziddi-1964', 1, 'Raat Ka Sama Jhoome Chandrama', 'Lata Mangeshkar', 'Ziddi', 1964),
      origSong('sdb-ziddi-1964', 2, 'Janu Meri Jaan (Tere Mere Pyaar Ki)', 'Mohammed Rafi', 'Ziddi', 1964),
    ],
  },
  {
    id: 'sdb-guide-1965',
    directorId: 'sd-burman',
    title: 'Guide',
    year: 1965,
    cast: 'Dev Anand, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      'Vijay Anand’s 1965 masterpiece—widely regarded as S.D. Burman’s supreme achievement—pairing "Aaj Phir Jeene Ki Tamanna Hai" and "Din Dhal Jaye" with Burman’s folk-rooted "Allah Megh De Paani De".',
    songs: [
      adaptedSong(
        'sdb-guide-1965',
        1,
        'Allah Megh De Paani De',
        'S.D. Burman',
        'Guide',
        1965,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Allah Megh De (Traditional Bengali Rain Folk)',
          originalArtist: 'Abbasuddin Ahmed / Traditional East Bengal Folk',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Traditional rural Bengal rain-invocation folk prayer ("Allah Megh De") popularized by folk legend Abbasuddin Ahmed, adapted into Hindi for the drought climax.',
          originalLink: 'https://www.youtube.com/watch?v=0igSyuNw868',
          referenceSource: 'Indian Folk & Cinema Archives',
        }
      ),
      origSong('sdb-guide-1965', 2, 'Aaj Phir Jeene Ki Tamanna Hai', 'Lata Mangeshkar', 'Guide', 1965),
      origSong('sdb-guide-1965', 3, 'Gaata Rahe Mera Dil', 'Kishore Kumar, Lata Mangeshkar', 'Guide', 1965),
      origSong('sdb-guide-1965', 4, 'Din Dhal Jaye Haye Raat Na Jaye', 'Mohammed Rafi', 'Guide', 1965),
      origSong('sdb-guide-1965', 5, 'Tere Mere Sapne Ab Ek Rang Hain', 'Mohammed Rafi', 'Guide', 1965),
      origSong('sdb-guide-1965', 6, 'Wahan Kaun Hai Tera Musafir', 'S.D. Burman', 'Guide', 1965),
    ],
  },
  {
    id: 'sdb-teen-devian-1965',
    directorId: 'sd-burman',
    title: 'Teen Devian',
    year: 1965,
    cast: 'Dev Anand, Nanda, Kalpana, Simi Garewal',
    label: 'Saregama / HMV',
    significance:
      '1965 Amarjeet romance led by Kishore Kumar’s effervescent "Khwab Ho Tum Ya Koi Haqeeqat".',
    songs: [
      origSong('sdb-teen-devian-1965', 1, 'Khwab Ho Tum Ya Koi Haqeeqat', 'Kishore Kumar', 'Teen Devian', 1965),
      origSong('sdb-teen-devian-1965', 2, 'Likha Hai Teri Aankhon Mein', 'Kishore Kumar, Lata Mangeshkar', 'Teen Devian', 1965),
      origSong('sdb-teen-devian-1965', 3, 'Aise To Na Dekho', 'Mohammed Rafi', 'Teen Devian', 1965),
    ],
  },
  {
    id: 'sdb-jewel-thief-1967',
    directorId: 'sd-burman',
    title: 'Jewel Thief',
    year: 1967,
    cast: 'Dev Anand, Vyjayanthimala, Ashok Kumar, Tanuja',
    label: 'Saregama / HMV',
    significance:
      '1967 Vijay Anand heist classic blending "Hothon Mein Aisi Baat" and "Rula Ke Gaya Sapna Mera" with Kishore Kumar’s "Yeh Dil Na Hota Bechara", famously improvised by S.D. Burman on the "River Kwai March" cadence.',
    songs: [
      adaptedSong(
        'sdb-jewel-thief-1967',
        1,
        'Yeh Dil Na Hota Bechara',
        'Kishore Kumar',
        'Jewel Thief',
        1967,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Colonel Bogey March (The River Kwai March)',
          originalArtist: 'Malcolm Arnold / Mitch Miller (from Bridge on the River Kwai)',
          originalYear: '1957',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Whistled march rhythm improvised by S.D. Burman after watching David Lean’s The Bridge on the River Kwai (1957), with the antara also recalling The Ventures’ brisk take on "Perfidia".',
          originalLink: 'https://www.youtube.com/watch?v=CB8F8g1-4Uw',
          referenceSource: 'ITWOFS / Asha Bhosle Vividh Bharati Recollection',
        }
      ),
      origSong('sdb-jewel-thief-1967', 2, 'Hothon Mein Aisi Baat', 'Lata Mangeshkar, Bhupinder Singh', 'Jewel Thief', 1967),
      origSong('sdb-jewel-thief-1967', 3, 'Rula Ke Gaya Sapna Mera', 'Lata Mangeshkar', 'Jewel Thief', 1967),
      origSong('sdb-jewel-thief-1967', 4, 'Raat Akeli Hai', 'Asha Bhosle', 'Jewel Thief', 1967),
      origSong('sdb-jewel-thief-1967', 5, 'Aasman Ke Neeche', 'Kishore Kumar, Lata Mangeshkar', 'Jewel Thief', 1967),
    ],
  },
  {
    id: 'sdb-aradhana-1969',
    directorId: 'sd-burman',
    title: 'Aradhana',
    year: 1969,
    cast: 'Rajesh Khanna, Sharmila Tagore',
    label: 'Saregama / HMV',
    significance:
      'Historic 1969 Shakti Samanta blockbuster that crowned Rajesh Khanna a superstar and propelled Kishore Kumar’s second golden wave ("Roop Tera Mastana", "Mere Sapno Ki Rani").',
    songs: [
      origSong('sdb-aradhana-1969', 1, 'Mere Sapno Ki Rani Kab Aayegi Tu', 'Kishore Kumar', 'Aradhana', 1969),
      origSong('sdb-aradhana-1969', 2, 'Roop Tera Mastana', 'Kishore Kumar', 'Aradhana', 1969),
      origSong('sdb-aradhana-1969', 3, 'Kora Kagaz Tha Yeh Man Mera', 'Kishore Kumar, Lata Mangeshkar', 'Aradhana', 1969),
      origSong('sdb-aradhana-1969', 4, 'Gunguna Rahe Hain Bhanwre', 'Asha Bhosle, Mohammed Rafi', 'Aradhana', 1969),
      origSong('sdb-aradhana-1969', 5, 'Saphal Hogi Teri Aradhana', 'S.D. Burman', 'Aradhana', 1969),
    ],
  },
  catalogFilm('sdb-jyoti-1969', 'Jyoti', 1969, '1969 Sanjeev Kumar & Nivedita drama.', 'Sun Ri Pawan', 'Lata Mangeshkar'),
  {
    id: 'sdb-talash-1969',
    directorId: 'sd-burman',
    title: 'Talash',
    year: 1969,
    cast: 'Rajendra Kumar, Sharmila Tagore',
    label: 'Saregama / HMV',
    significance:
      '1969 O.P. Ralhan epic graced by Mohammed Rafi & Lata Mangeshkar’s timeless "Aaj Ko Junli Raat Ma" & "Meri Duniya Hai Maa".',
    songs: [
      origSong('sdb-talash-1969', 1, 'Kitni Akeli Kitni Tanha', 'Lata Mangeshkar', 'Talash', 1969),
      origSong('sdb-talash-1969', 2, 'Meri Duniya Hai Maa Tere Aanchal Mein', 'S.D. Burman', 'Talash', 1969),
      origSong('sdb-talash-1969', 3, 'Khayi Hai Re Humne Qasam', 'Lata Mangeshkar', 'Talash', 1969),
    ],
  },
  catalogFilm('sdb-ishq-par-zor-nahin-1970', 'Ishq Par Zor Nahin', 1970, '1970 Dharmendra & Sadhana drama famed for Lata’s "Yeh Dil Diwana Hai".', 'Yeh Dil Diwana Hai', 'Lata Mangeshkar, Mohammed Rafi'),
  {
    id: 'sdb-prem-pujari-1970',
    directorId: 'sd-burman',
    title: 'Prem Pujari',
    year: 1970,
    cast: 'Dev Anand, Waheeda Rehman, Shatrughan Sinha',
    label: 'Saregama / HMV',
    significance:
      '1970 Dev Anand directorial debut yielding "Phoolon Ke Rang Se" and Lata Mangeshkar’s classic "Rangeela Re".',
    songs: [
      origSong('sdb-prem-pujari-1970', 1, 'Phoolon Ke Rang Se', 'Kishore Kumar', 'Prem Pujari', 1970),
      origSong('sdb-prem-pujari-1970', 2, 'Rangeela Re Tere Rang Mein', 'Lata Mangeshkar', 'Prem Pujari', 1970),
      origSong('sdb-prem-pujari-1970', 3, 'Shokhiyon Mein Ghola Jaye', 'Kishore Kumar, Lata Mangeshkar', 'Prem Pujari', 1970),
    ],
  },
  {
    id: 'sdb-gambler-1971',
    directorId: 'sd-burman',
    title: 'Gambler',
    year: 1971,
    cast: 'Dev Anand, Zaheeda, Shatrughan Sinha',
    label: 'Saregama / HMV',
    significance:
      '1971 Amarjeet thriller highlighted by Kishore Kumar’s evergreen duet "Choodi Nahin Ye Mera Dil Hai" & solo "Dil Aaj Shayar Hai".',
    songs: [
      origSong('sdb-gambler-1971', 1, 'Dil Aaj Shayar Hai', 'Kishore Kumar', 'Gambler', 1971),
      origSong('sdb-gambler-1971', 2, 'Choodi Nahin Ye Mera Dil Hai', 'Kishore Kumar, Lata Mangeshkar', 'Gambler', 1971),
    ],
  },
  catalogFilm('sdb-naya-zamana-1971', 'Naya Zamana', 1971, '1971 Pramod Chakravorty hit starring Dharmendra & Hema Malini.', 'Duniya O Duniya Tera Jawab Nahin', 'Kishore Kumar'),
  {
    id: 'sdb-sharmilee-1971',
    directorId: 'sd-burman',
    title: 'Sharmilee',
    year: 1971,
    cast: 'Shashi Kapoor, Raakhee',
    label: 'Saregama / HMV',
    significance:
      '1971 blockbuster remembered for Kishore Kumar’s sublime "Khilte Hain Gul Yahan" and "Megha Chhaye Aadhi Raat".',
    songs: [
      origSong('sdb-sharmilee-1971', 1, 'Khilte Hain Gul Yahan', 'Kishore Kumar', 'Sharmilee', 1971),
      origSong('sdb-sharmilee-1971', 2, 'Megha Chhaye Aadhi Raat', 'Lata Mangeshkar', 'Sharmilee', 1971),
      origSong('sdb-sharmilee-1971', 3, 'Kaise Kahein Hum Pyaar Ne Humko', 'Kishore Kumar', 'Sharmilee', 1971),
    ],
  },
  {
    id: 'sdb-tere-mere-sapne-1971',
    directorId: 'sd-burman',
    title: 'Tere Mere Sapne',
    year: 1971,
    cast: 'Dev Anand, Mumtaz',
    label: 'Saregama / HMV',
    significance:
      '1971 Vijay Anand medical drama graced by Kishore Kumar’s soaring "Jeevan Ki Bagiya Mehkegi" and Mohammed Rafi’s "Hey Maine Kasam Li".',
    songs: [
      origSong('sdb-tere-mere-sapne-1971', 1, 'Jeevan Ki Bagiya Mehkegi', 'Kishore Kumar, Lata Mangeshkar', 'Tere Mere Sapne', 1971),
      origSong('sdb-tere-mere-sapne-1971', 2, 'Hey Maine Kasam Li', 'Mohammed Rafi, Asha Bhosle', 'Tere Mere Sapne', 1971),
    ],
  },
  {
    id: 'sdb-anuraag-1972',
    directorId: 'sd-burman',
    title: 'Anuraag',
    year: 1972,
    cast: 'Rajesh Khanna, Moushumi Chatterjee, Vinod Mehra',
    label: 'Saregama / HMV',
    significance:
      '1972 Shakti Samanta Filmfare Best Film winner celebrated for Mohammed Rafi & Lata Mangeshkar’s "Tere Naino Ke Main Deep Jalaunga".',
    songs: [
      origSong('sdb-anuraag-1972', 1, 'Tere Naino Ke Main Deep Jalaunga', 'Mohammed Rafi, Lata Mangeshkar', 'Anuraag', 1972),
      origSong('sdb-anuraag-1972', 2, 'Neend Churaye Chain Churaye', 'Lata Mangeshkar', 'Anuraag', 1972),
    ],
  },
  catalogFilm('sdb-yeh-gulistan-hamara-1972', 'Yeh Gulistan Hamara', 1972, '1972 Dev Anand & Sharmila Tagore northeastern frontier drama.', 'Mera Naam Aao', 'Lata Mangeshkar, Danny Denzongpa'),
  catalogFilm('sdb-zindagi-zindagi-1972', 'Zindagi Zindagi', 1972, '1972 Debu Sen drama winning S.D. Burman the National Film Award for Best Music Direction ("Beeti Na Bitai Raina" / "Piya Bina" precursor era).', 'Zindagi Aye Zindagi', 'Kishore Kumar'),
  {
    id: 'sdb-abhimaan-1973',
    directorId: 'sd-burman',
    title: 'Abhimaan',
    year: 1973,
    cast: 'Amitabh Bachchan, Jaya Bhaduri',
    label: 'Saregama / HMV',
    significance:
      'Hrishikesh Mukherjee’s 1973 musical milestone—Filmfare winner for Best Music Director—anchored by "Tere Mere Milan Ki Yeh Raina" and "Ab To Hai Tumse Har Khushi Apni".',
    songs: [
      origSong('sdb-abhimaan-1973', 1, 'Tere Mere Milan Ki Yeh Raina', 'Kishore Kumar, Lata Mangeshkar', 'Abhimaan', 1973),
      origSong('sdb-abhimaan-1973', 2, 'Meet Na Mila Re Man Ka', 'Kishore Kumar', 'Abhimaan', 1973),
      origSong('sdb-abhimaan-1973', 3, 'Ab To Hai Tumse Har Khushi Apni', 'Lata Mangeshkar', 'Abhimaan', 1973),
      origSong('sdb-abhimaan-1973', 4, 'Piya Bina Piya Bina', 'Lata Mangeshkar', 'Abhimaan', 1973),
      origSong('sdb-abhimaan-1973', 5, 'Teri Bindiya Re', 'Lata Mangeshkar, Mohammed Rafi', 'Abhimaan', 1973),
    ],
  },
  catalogFilm('sdb-chhupa-rustam-1973', 'Chhupa Rustam', 1973, '1973 Vijay Anand comedy thriller starring Dev Anand & Hema Malini.', 'Dheere Se Jana Khatiyan Mein', 'Kishore Kumar'),
  {
    id: 'sdb-jugnu-1973',
    directorId: 'sd-burman',
    title: 'Jugnu',
    year: 1973,
    cast: 'Dharmendra, Hema Malini',
    label: 'Saregama / HMV',
    significance:
      '1973 Pramod Chakravorty smash hit featuring Kishore Kumar’s iconic "Gir Gaya Jhumka Girne Do" and Lata’s "Jaane Kya Pilaya Tune".',
    songs: [
      origSong('sdb-jugnu-1973', 1, 'Gir Gaya Jhumka Girne Do', 'Kishore Kumar, Lata Mangeshkar', 'Jugnu', 1973),
      origSong('sdb-jugnu-1973', 2, 'Tera Peechha Na Chhodunga', 'Kishore Kumar', 'Jugnu', 1973),
    ],
  },
  catalogFilm('sdb-phagun-1973', 'Phagun', 1973, '1973 Rajinder Singh Bedi drama starring Waheeda Rehman & Jaya Bhaduri.', 'Piya Sang Khelo Holi', 'Lata Mangeshkar'),
  {
    id: 'sdb-prem-nagar-1974',
    directorId: 'sd-burman',
    title: 'Prem Nagar',
    year: 1974,
    cast: 'Rajesh Khanna, Hema Malini',
    label: 'Saregama / HMV',
    significance:
      '1974 K.S. Prakash Rao blockbuster famed for Kishore Kumar’s soaring "Yeh Lal Rang Kab Mujhe Chhodega".',
    songs: [
      origSong('sdb-prem-nagar-1974', 1, 'Yeh Lal Rang Kab Mujhe Chhodega', 'Kishore Kumar', 'Prem Nagar', 1974),
      origSong('sdb-prem-nagar-1974', 2, 'Bye Bye Miss Goodnight', 'Kishore Kumar', 'Prem Nagar', 1974),
    ],
  },
  {
    id: 'sdb-sagina-1974',
    directorId: 'sd-burman',
    title: 'Sagina',
    year: 1974,
    cast: 'Dilip Kumar, Saira Banu',
    label: 'Saregama / HMV',
    significance:
      '1974 Tapan Sinha Hindi social drama famous for Dilip Kumar’s exuberant dance number "Saala Main To Sahab Ban Gaya", directly adapted from Renato Carosone’s Italian classic "Chella Llà".',
    songs: [
      adaptedSong(
        'sdb-sagina-1974',
        1,
        'Saala Main To Sahab Ban Gaya',
        'Kishore Kumar, Pankaj Mitra',
        'Sagina',
        1974,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Chella Llà',
          originalArtist: 'Renato Carosone',
          originalYear: '1957',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Tarantella-paced vocal hook and exuberant verse melody closely parallels Italian singer-pianist Renato Carosone’s 1957 Neapolitan hit "Chella Llà".',
          originalLink: 'https://www.youtube.com/watch?v=NfCp_a20p8o',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong('sdb-sagina-1974', 2, 'Tumhare Sang To Rain Bitai', 'Kishore Kumar, Lata Mangeshkar', 'Sagina', 1974),
    ],
  },
  catalogFilm('sdb-us-paar-1974', 'Us Paar', 1974, '1974 Basu Chatterjee drama starring Vinod Mehra & Moushumi Chatterjee.', 'Pyara Hindola Mera', 'Manna Dey'),
  {
    id: 'sdb-chupke-chupke-1975',
    directorId: 'sd-burman',
    title: 'Chupke Chupke',
    year: 1975,
    cast: 'Dharmendra, Sharmila Tagore, Amitabh Bachchan, Jaya Bhaduri',
    label: 'Saregama / HMV',
    significance:
      'Hrishikesh Mukherjee’s beloved 1975 comedy classic graced by "Ab Ke Sajan Sawan Mein" and "Chupke Chupke Chal Ri Purwaiya".',
    songs: [
      origSong('sdb-chupke-chupke-1975', 1, 'Ab Ke Sajan Sawan Mein', 'Lata Mangeshkar', 'Chupke Chupke', 1975),
      origSong('sdb-chupke-chupke-1975', 2, 'Chupke Chupke Chal Ri Purwaiya', 'Lata Mangeshkar', 'Chupke Chupke', 1975),
      origSong('sdb-chupke-chupke-1975', 3, 'Sa Re Ga Ma', 'Kishore Kumar, Mohammed Rafi', 'Chupke Chupke', 1975),
    ],
  },
  {
    id: 'sdb-mili-1975',
    directorId: 'sd-burman',
    title: 'Mili',
    year: 1975,
    cast: 'Amitabh Bachchan, Jaya Bhaduri',
    label: 'Saregama / HMV',
    significance:
      'S.D. Burman’s deeply moving final soundtrack before his passing in October 1975, anchored by "Badi Sooni Sooni Hai Zindagi".',
    songs: [
      origSong('sdb-mili-1975', 1, 'Badi Sooni Sooni Hai Zindagi', 'Kishore Kumar', 'Mili', 1975),
      origSong('sdb-mili-1975', 2, 'Aaye Tum Yaad Mujhe', 'Kishore Kumar', 'Mili', 1975),
      origSong('sdb-mili-1975', 3, 'Maine Kaha Phoolon Se', 'Lata Mangeshkar', 'Mili', 1975),
    ],
  },
  catalogFilm('sdb-arjun-pandit-1976', 'Arjun Pandit', 1976, 'Posthumous 1976 Hrishikesh Mukherjee drama starring Sanjeev Kumar.', 'Dil Mera Kho Gaya', 'Kishore Kumar'),
  catalogFilm('sdb-barood-1976', 'Barood', 1976, 'Posthumous 1976 Pramod Chakravorty thriller starring Rishi Kapoor & Reena Roy.', 'Samunder Samunder', 'Lata Mangeshkar'),
  catalogFilm('sdb-deewaangee-1976', 'Deewaangee', 1976, '1976 Hindi thriller featuring S.D. Burman’s final recorded Kishore Kumar gem "Chal Sapnon Ke Shahar Mein" (remaining score by Ravindra Jain).', 'Chal Sapnon Ke Shahar Mein', 'Kishore Kumar'),
  catalogFilm('sdb-tyaag-1977', 'Tyaag', 1977, 'Final posthumous 1977 Rajesh Khanna & Sharmila Tagore release featuring S.D. Burman’s last melodies.', 'Ek Raja Ka Beta Leke', 'Kishore Kumar'),
];
