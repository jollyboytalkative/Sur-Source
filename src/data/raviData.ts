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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Ravi`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Ravi`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

const catalogFilm = (
  id: string,
  title: string,
  year: number,
  significance: string,
  leadTrackTitle?: string,
  singers = 'Ravi Ensemble'
): MovieEntry => ({
  id,
  directorId: 'ravi',
  title,
  year,
  label: 'Saregama / HMV',
  significance,
  songs: [
    origSong(
      id,
      1,
      leadTrackTitle ?? `${title} — Featured Soundtrack Track`,
      singers,
      title,
      year
    ),
  ],
});

export const RAVI_MOVIES: MovieEntry[] = [
  // =========================================================================
  // 1955 – 1959 (Breakthrough & Early Hindi Soundtracks)
  // =========================================================================
  {
    id: 'ravi-vachan-1955',
    directorId: 'ravi',
    title: 'Vachan',
    year: 1955,
    cast: 'Geeta Bali, Balraj Sahni, Rajendra Kumar',
    label: 'Saregama / HMV',
    significance:
      'Ravi’s debut Hindi film as an independent music director, anchored by the timeless lullaby Chanda Mama Door Ke.',
    songs: [
      origSong(
        'ravi-vachan-1955',
        1,
        'Chanda Mama Door Ke',
        'Asha Bhosle',
        'Vachan',
        1955,
        'Debut breakthrough Hindi lullaby penned by Prem Dhawan; one of Indian cinema’s most enduring children’s classics.'
      ),
      origSong(
        'ravi-vachan-1955',
        2,
        'Ek Paisa De De O Babu',
        'Mohammed Rafi, Asha Bhosle',
        'Vachan',
        1955
      ),
      origSong(
        'ravi-vachan-1955',
        3,
        'Zara Sikh Lo Aankhen Milana',
        'Asha Bhosle',
        'Vachan',
        1955
      ),
    ],
  },
  catalogFilm(
    'ravi-albeli-1955',
    'Albeli',
    1955,
    'Early Hindi soundtrack by Ravi following Vachan.',
    'Muskurao Ki Jee Nahin Lagta',
    'Asha Bhosle, Hemant Kumar'
  ),
  {
    id: 'ravi-ek-saal-1957',
    directorId: 'ravi',
    title: 'Ek Saal',
    year: 1957,
    cast: 'Madhubala, Ashok Kumar',
    label: 'Saregama / HMV',
    significance:
      'Romantic musical hit highlighted by Sab Kuchh Lutaya Humne and Chale Aao Tumhe Aansu.',
    songs: [
      origSong('ravi-ek-saal-1957', 1, 'Sab Kuchh Lutaya Humne', 'Talat Mahmood', 'Ek Saal', 1957),
      origSong('ravi-ek-saal-1957', 2, 'Chale Aao Tumhe Aansu Bulayenge', 'Lata Mangeshkar', 'Ek Saal', 1957),
    ],
  },
  {
    id: 'ravi-narsi-bhagat-1957',
    directorId: 'ravi',
    title: 'Narsi Bhagat',
    year: 1957,
    cast: 'Shahu Modak, Nirupa Roy',
    label: 'Saregama / HMV',
    significance:
      'Devotional Hindi film renowned for Manna Dey’s classic bhajan Darshan Do Ghanshyam.',
    songs: [
      origSong('ravi-narsi-bhagat-1957', 1, 'Darshan Do Ghanshyam', 'Manna Dey, Sudha Malhotra', 'Narsi Bhagat', 1957),
    ],
  },
  {
    id: 'ravi-dilli-ka-thug-1958',
    directorId: 'ravi',
    title: 'Dilli Ka Thug',
    year: 1958,
    cast: 'Kishore Kumar, Nutan',
    label: 'Saregama / HMV',
    significance:
      'Breezy 1950s comedy soundtrack featuring Kishore-Asha hits and the ITWOFS-documented Rum and Coca-Cola adaptation.',
    songs: [
      origSong('ravi-dilli-ka-thug-1958', 1, 'C.A.T. Cat Cat Mane Billi', 'Kishore Kumar, Asha Bhosle', 'Dilli Ka Thug', 1958),
      origSong('ravi-dilli-ka-thug-1958', 2, 'Yeh Raaten Yeh Mausam', 'Kishore Kumar, Asha Bhosle', 'Dilli Ka Thug', 1958),
      origSong('ravi-dilli-ka-thug-1958', 3, 'Hum To Mohabbat Karega', 'Kishore Kumar, Asha Bhosle', 'Dilli Ka Thug', 1958),
      adaptedSong('ravi-dilli-ka-thug-1958', 4, 'O Babu O Lala', 'Geeta Dutt', 'Dilli Ka Thug', 1958, {
        adaptationType: 'copied',
        originalSongTitle: 'Rum and Coca-Cola',
        originalArtist: 'The Andrews Sisters / Lionel Belasco',
        originalYear: '1944',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'ITWOFS documents this lively club number as closely adapted from the 1944 Caribbean calypso hit popularized by The Andrews Sisters.',
        originalLink: 'https://www.youtube.com/watch?v=j6NEakijeV0',
        referenceSource: 'ITWOFS',
      }),
    ],
  },
  catalogFilm(
    'ravi-dulhan-1958',
    'Dulhan',
    1958,
    'Late-1950s family drama scored by Ravi.',
    'Aa Ja Zara Mere Dil Ke Sahare',
    'Geeta Dutt, Hemant Kumar'
  ),
  catalogFilm(
    'ravi-ghar-sansar-1958',
    'Ghar Sansar',
    1958,
    'Balraj Sahni and Nargis family drama with songs by Ravi.',
    'Yeh Hawa Yeh Nadi Ka Kinara',
    'Manna Dey, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-mehndi-1958',
    'Mehndi',
    1958,
    '1958 Hindi drama composed by Ravi.',
    'Bedardi Preet Nahin Jani',
    'Lata Mangeshkar'
  ),
  {
    id: 'ravi-chirag-kahan-roshni-kahan-1959',
    directorId: 'ravi',
    title: 'Chirag Kahan Roshni Kahan',
    year: 1959,
    cast: 'Meena Kumari, Rajendra Kumar',
    label: 'Saregama / HMV',
    significance:
      'Hit 1959 family soundtrack remembered for Chal Mere Ghode Tik Tik and Tim Tim Karte Taare.',
    songs: [
      origSong('ravi-chirag-kahan-roshni-kahan-1959', 1, 'Chal Mere Ghode Tik Tik', 'Lata Mangeshkar', 'Chirag Kahan Roshni Kahan', 1959),
      origSong('ravi-chirag-kahan-roshni-kahan-1959', 2, 'Tim Tim Karte Taare', 'Lata Mangeshkar', 'Chirag Kahan Roshni Kahan', 1959),
    ],
  },
  catalogFilm(
    'ravi-jawani-ki-hawa-1959',
    'Jawani Ki Hawa',
    1959,
    '1959 musical comedy starring Pradeep Kumar and Vyjayanthimala.',
    'Chanda Ke Desh Mein Rehti Ek Rani',
    'Mohammed Rafi, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-nai-raahen-1959',
    'Nai Raahen',
    1959,
    '1959 Hindi social film composed by Ravi.',
    'Mustafa Ek Hai',
    'Mohammed Rafi, Asha Bhosle'
  ),

  // =========================================================================
  // 1960 – 1964 (Chaudhvin Ka Chand, Gharana, China Town, Gumrah)
  // =========================================================================
  catalogFilm(
    'ravi-apna-ghar-1960',
    'Apna Ghar',
    1960,
    '1960 Prem Nath and Shyama social drama scored by Ravi.',
    'Sochta Hoon Main Yeh Kya Kiya',
    'Mohammed Rafi'
  ),
  {
    id: 'ravi-chaudhvin-ka-chand-1960',
    directorId: 'ravi',
    title: 'Chaudhvin Ka Chand',
    year: 1960,
    cast: 'Guru Dutt, Waheeda Rehman, Rehman',
    label: 'Saregama / HMV',
    significance:
      'Guru Dutt’s Lucknow classic; earned Ravi a Filmfare nomination with Shakeel Badayuni’s timeless poetry.',
    songs: [
      origSong('ravi-chaudhvin-ka-chand-1960', 1, 'Chaudhvin Ka Chand Ho', 'Mohammed Rafi', 'Chaudhvin Ka Chand', 1960),
      origSong('ravi-chaudhvin-ka-chand-1960', 2, 'Mera Yaar Bana Hai Dulha', 'Mohammed Rafi', 'Chaudhvin Ka Chand', 1960),
      origSong('ravi-chaudhvin-ka-chand-1960', 3, 'Mili Khaak Mein Mohabbat', 'Mohammed Rafi', 'Chaudhvin Ka Chand', 1960),
      origSong('ravi-chaudhvin-ka-chand-1960', 4, 'Balam Se Milan Hoga', 'Geeta Dutt', 'Chaudhvin Ka Chand', 1960),
    ],
  },
  catalogFilm(
    'ravi-ghunghat-1960',
    'Ghunghat',
    1960,
    '1960 Gemini Studios drama starring Bharat Bhushan, Bina Rai, and Asha Parekh.',
    'Laage Na Mora Jiya',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'ravi-tu-nahin-aur-sahi-1960',
    'Tu Nahin Aur Sahi',
    1960,
    '1960 Pradeep Kumar and Kumkum starrer composed by Ravi.',
    'Tu Nahin Aur Sahi',
    'Mohammed Rafi'
  ),
  catalogFilm(
    'ravi-modern-girl-1961',
    'Modern Girl',
    1961,
    '1961 social drama starring Pradeep Kumar and Sayeeda Khan.',
    'Yeh Mausam Rangeen Sama',
    'Suman Kalyanpur, Mukesh'
  ),
  {
    id: 'ravi-gharana-1961',
    directorId: 'ravi',
    title: 'Gharana',
    year: 1961,
    cast: 'Rajendra Kumar, Asha Parekh, Raaj Kumar',
    label: 'Saregama / HMV',
    significance:
      'Won Ravi his first Filmfare Award for Best Music Director with evergreen classics.',
    songs: [
      origSong('ravi-gharana-1961', 1, 'Husnwale Tera Jawab Nahin', 'Mohammed Rafi', 'Gharana', 1961),
      origSong('ravi-gharana-1961', 2, 'Jai Raghunandan Jai Siyaram', 'Mohammed Rafi, Asha Bhosle', 'Gharana', 1961),
      origSong('ravi-gharana-1961', 3, 'Ho Gayi Re Main To', 'Asha Bhosle', 'Gharana', 1961),
    ],
  },
  {
    id: 'ravi-nazrana-1961',
    directorId: 'ravi',
    title: 'Nazrana',
    year: 1961,
    cast: 'Raj Kapoor, Vyjayanthimala',
    label: 'Saregama / HMV',
    significance:
      'Memorable 1961 Raj Kapoor musical featuring Bikhra Ke Zulfen and Ek Woh Bhi Diwali Thi.',
    songs: [
      origSong('ravi-nazrana-1961', 1, 'Bikhra Ke Zulfen Chaman Mein', 'Mohammed Rafi, Mukesh', 'Nazrana', 1961),
      origSong('ravi-nazrana-1961', 2, 'Ek Woh Bhi Diwali Thi', 'Mukesh', 'Nazrana', 1961),
    ],
  },
  {
    id: 'ravi-pyaar-ka-saagar-1961',
    directorId: 'ravi',
    title: 'Pyaar Ka Saagar',
    year: 1961,
    cast: 'Rajendra Kumar, Meena Kumari',
    label: 'Saregama / HMV',
    significance:
      'Romantic musical hit featuring Sada Khush Rahe Tu and Mujhe Pyaar Ki Zindagi Denewale.',
    songs: [
      origSong('ravi-pyaar-ka-saagar-1961', 1, 'Mujhe Pyaar Ki Zindagi Denewale', 'Mohammed Rafi, Asha Bhosle', 'Pyaar Ka Saagar', 1961),
      origSong('ravi-pyaar-ka-saagar-1961', 2, 'Sada Khush Rahe Tu', 'Mukesh', 'Pyaar Ka Saagar', 1961),
    ],
  },
  catalogFilm(
    'ravi-wanted-1961',
    'Wanted',
    1961,
    '1961 action-comedy starring Vijay Kumar and Sayeeda Khan.',
    'Raat Bhar Ka Hai Mehman Andhera',
    'Mohammed Rafi, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-salaam-memsaheb-1961',
    'Salaam Memsaheb',
    1961,
    '1961 musical drama scored by Ravi.',
    'Hum Bhi Musafir Tum Bhi Musafir',
    'Mohammed Rafi, Asha Bhosle'
  ),
  {
    id: 'ravi-china-town-1962',
    directorId: 'ravi',
    title: 'China Town',
    year: 1962,
    cast: 'Shammi Kapoor, Shakila, Helen',
    label: 'Saregama / HMV',
    significance:
      'Blockbuster Shakti Samanta thriller uniting Baar Baar Dekho with the ITWOFS-documented Persian adaptation Yamma Yamma.',
    songs: [
      origSong('ravi-china-town-1962', 1, 'Baar Baar Dekho Hazaar Baar Dekho', 'Mohammed Rafi', 'China Town', 1962),
      origSong('ravi-china-town-1962', 2, 'Dekho Ji Ek Baala Jogi', 'Mohammed Rafi, Asha Bhosle', 'China Town', 1962),
      origSong('ravi-china-town-1962', 3, 'Hamse Na Poochho Hum Kahan Chale', 'Mohammed Rafi, Asha Bhosle', 'China Town', 1962),
      adaptedSong('ravi-china-town-1962', 4, 'Yamma Yamma', 'Mohammed Rafi, Asha Bhosle', 'China Town', 1962, {
        adaptationType: 'copied',
        originalSongTitle: 'Mastom Mastom (with Ya Mustafa motif)',
        originalArtist: 'Traditional Persian Folk / Pari Zangeneh',
        originalYear: 'Traditional',
        originCategory: 'Arabic & Middle Eastern',
        adaptationNotes:
          'ITWOFS notes the main tune closely adapts the traditional Persian song Mastom Mastom alongside a brief bridge motif echoing the Middle Eastern hit Ya Mustafa.',
        originalLink: 'https://www.youtube.com/watch?v=lfdUKvUA61A',
        referenceSource: 'ITWOFS',
      }),
    ],
  },
  {
    id: 'ravi-rakhi-1962',
    directorId: 'ravi',
    title: 'Rakhi',
    year: 1962,
    cast: 'Ashok Kumar, Pradeep Kumar, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      'Classic sibling drama remembered for the festival anthem Rakhi Dhaagon Ka Tyohar.',
    songs: [
      origSong('ravi-rakhi-1962', 1, 'Rakhi Dhaagon Ka Tyohar', 'Mohammed Rafi', 'Rakhi', 1962),
    ],
  },
  {
    id: 'ravi-tower-house-1962',
    directorId: 'ravi',
    title: 'Tower House',
    year: 1962,
    cast: 'Ajit, Shakila, N.A. Ansari',
    label: 'Saregama / HMV',
    significance:
      'Suspense musical iconic for Main Khushnaseeb Hoon and Ae Mere Dile Nadaan.',
    songs: [
      origSong('ravi-tower-house-1962', 1, 'Ae Mere Dile Nadaan', 'Lata Mangeshkar', 'Tower House', 1962),
      origSong('ravi-tower-house-1962', 2, 'Main Khushnaseeb Hoon', 'Lata Mangeshkar, Mukesh', 'Tower House', 1962),
    ],
  },
  catalogFilm(
    'ravi-girls-hostel-1962',
    'Girls’ Hostel',
    1962,
    '1962 thriller starring Ajit and Nalini Jaywant.',
    'Idhar Bhi Haseena Udhar Bhi Haseena',
    'Mohammed Rafi, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-isi-ka-naam-duniya-hai-1962',
    'Isi Ka Naam Duniya Hai',
    1962,
    '1962 social drama starring Ashok Kumar and Shyama.',
    'Madhuban Mein Shyam Ki Bansi Baje',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-bombay-ka-chor-1962',
    'Bombay Ka Chor',
    1962,
    '1962 Kishore Kumar and Mala Sinha comedy thriller.',
    'Hello Hello Ji Kya Haal Hai',
    'Kishore Kumar, Asha Bhosle'
  ),
  {
    id: 'ravi-aaj-aur-kal-1963',
    directorId: 'ravi',
    title: 'Aaj Aur Kal',
    year: 1963,
    cast: 'Sunil Dutt, Nanda, Ashok Kumar',
    label: 'Saregama / HMV',
    significance:
      'Princely family drama highlighted by Yeh Wadiyan Yeh Fizaayein and Mujhe Gale Se Laga Lo.',
    songs: [
      origSong('ravi-aaj-aur-kal-1963', 1, 'Yeh Wadiyan Yeh Fizaayein', 'Mohammed Rafi', 'Aaj Aur Kal', 1963),
      origSong('ravi-aaj-aur-kal-1963', 2, 'Mujhe Gale Se Laga Lo', 'Mohammed Rafi, Asha Bhosle', 'Aaj Aur Kal', 1963),
    ],
  },
  catalogFilm(
    'ravi-gehra-daag-1963',
    'Gehra Daag',
    1963,
    'O.P. Ralhan crime drama starring Rajendra Kumar and Mala Sinha.',
    'Aaj Udta Hua Ek Panchhi',
    'Mohammed Rafi'
  ),
  {
    id: 'ravi-gumrah-1963',
    directorId: 'ravi',
    title: 'Gumrah',
    year: 1963,
    cast: 'Sunil Dutt, Mala Sinha, Ashok Kumar',
    label: 'Saregama / HMV',
    significance:
      'Landmark B.R. Chopra–Sahir Ludhianvi collaboration featuring Chalo Ek Baar Phir Se and Aap Aaye To Khayal.',
    songs: [
      origSong('ravi-gumrah-1963', 1, 'Chalo Ek Baar Phir Se', 'Mahendra Kapoor', 'Gumrah', 1963),
      origSong('ravi-gumrah-1963', 2, 'Aap Aaye To Khayal-e-Dil-e-Nashaad Aaya', 'Mahendra Kapoor', 'Gumrah', 1963),
      origSong('ravi-gumrah-1963', 3, 'In Hawaon Mein In Fizaon Mein', 'Mahendra Kapoor, Asha Bhosle', 'Gumrah', 1963),
    ],
  },
  catalogFilm(
    'ravi-pyar-ka-bandhan-1963',
    'Pyar Ka Bandhan',
    1963,
    '1963 Naaz Pictures drama scored by Ravi.',
    'Boondaniya Barsan Lagi Re',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-nartaki-1963',
    'Nartaki',
    1963,
    '1963 Sunil Dutt and Nanda drama with Sahir Ludhianvi lyrics.',
    'Zindagi Ke Safar Mein Akele The Hum',
    'Mohammed Rafi'
  ),
  {
    id: 'ravi-ustadon-ke-ustaad-1963',
    directorId: 'ravi',
    title: 'Ustadon Ke Ustaad',
    year: 1963,
    cast: 'Ashok Kumar, Pradeep Kumar, Shakila',
    label: 'Saregama / HMV',
    significance:
      '1963 action film featuring the ITWOFS-documented adaptation Maine Kahan Tha Aana Sunday Ko.',
    songs: [
      origSong('ravi-ustadon-ke-ustaad-1963', 1, 'Sau Baar Janam Lenge', 'Mohammed Rafi', 'Ustadon Ke Ustaad', 1963),
      adaptedSong('ravi-ustadon-ke-ustaad-1963', 2, 'Maine Kahan Tha Aana Sunday Ko', 'Mohammed Rafi, Asha Bhosle', 'Ustadon Ke Ustaad', 1963, {
        adaptationType: 'copied',
        originalSongTitle: 'Never on Sunday (Ta Pedia tou Pirea)',
        originalArtist: 'Manos Hadjidakis / Melina Mercouri & Bing Crosby',
        originalYear: '1960',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'ITWOFS catalogs this playful duet as directly modeled on Manos Hadjidakis’s Academy Award-winning Greek-American standard Never on Sunday.',
        originalLink: 'https://www.youtube.com/watch?v=0n17g1LvQ0U',
        referenceSource: 'ITWOFS',
      }),
    ],
  },
  {
    id: 'ravi-yeh-rastey-hain-pyar-ke-1963',
    directorId: 'ravi',
    title: 'Yeh Rastey Hain Pyar Ke',
    year: 1963,
    cast: 'Sunil Dutt, Leela Naidu, Rehman',
    label: 'Saregama / HMV',
    significance:
      'Courtroom drama famous for its ITWOFS-documented title song inspired by Ernesto Lecuona’s Andalucía.',
    songs: [
      adaptedSong('ravi-yeh-rastey-hain-pyar-ke-1963', 1, 'Yeh Rastey Hain Pyar Ke', 'Asha Bhosle', 'Yeh Rastey Hain Pyar Ke', 1963, {
        adaptationType: 'inspired',
        originalSongTitle: 'Andalucía (The Breeze and I)',
        originalArtist: 'Ernesto Lecuona / Jimmy Dorsey & Bob Eberly',
        originalYear: '1930 / 1941',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'ITWOFS highlights a melodic inspiration from Ernesto Lecuona’s 1930 Spanish Suite piece Andalucía (popularized in 1941 as The Breeze and I).',
        originalLink: 'https://www.youtube.com/watch?v=lSjOdU5us6s',
        referenceSource: 'ITWOFS',
      }),
      origSong('ravi-yeh-rastey-hain-pyar-ke-1963', 2, 'Aaj Yeh Meri Zindagi', 'Asha Bhosle', 'Yeh Rastey Hain Pyar Ke', 1963),
    ],
  },
  {
    id: 'ravi-bharosa-1963',
    directorId: 'ravi',
    title: 'Bharosa',
    year: 1963,
    cast: 'Guru Dutt, Asha Parekh',
    label: 'Saregama / HMV',
    significance:
      'Guru Dutt–Asha Parekh drama notable for Woh Dil Kahan Se Laoon and Is Bhari Duniya Mein.',
    songs: [
      origSong('ravi-bharosa-1963', 1, 'Is Bhari Duniya Mein', 'Mohammed Rafi', 'Bharosa', 1963),
      origSong('ravi-bharosa-1963', 2, 'Woh Dil Kahan Se Laoon', 'Lata Mangeshkar', 'Bharosa', 1963),
    ],
  },
  catalogFilm(
    'ravi-mulzim-1963',
    'Mulzim',
    1963,
    '1963 Pradeep Kumar and Shakila crime drama scored by Ravi.',
    'Sang Sang Rahenge Tumhare',
    'Mohammed Rafi, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-pyaar-kiya-to-darna-kya-1963',
    'Pyaar Kiya To Darna Kya',
    1963,
    '1963 Shammi Kapoor and B. Saroja Devi romantic drama.',
    'Jaan-e-Bahar Husn Tera Bemisaal Hai',
    'Mohammed Rafi'
  ),
  catalogFilm(
    'ravi-grahasti-1963',
    'Grahasti',
    1963,
    'Gemini Studios family drama starring Ashok Kumar and Rajshree.',
    'Jeevan Jyot Jale',
    'Asha Bhosle'
  ),
  {
    id: 'ravi-kaun-apna-kaun-paraya-1963',
    directorId: 'ravi',
    title: 'Kaun Apna Kaun Paraya',
    year: 1963,
    cast: 'Vijay Kumar, Waheeda Rehman, Nirupa Roy',
    label: 'Saregama / HMV',
    significance:
      'Cult social drama immortalized by Zara Sun Haseena Aye Nazneen.',
    songs: [
      origSong('ravi-kaun-apna-kaun-paraya-1963', 1, 'Zara Sun Haseena Aye Nazneen', 'Mohammed Rafi', 'Kaun Apna Kaun Paraya', 1963),
    ],
  },
  {
    id: 'ravi-door-ki-awaz-1964',
    directorId: 'ravi',
    title: 'Door Ki Awaz',
    year: 1964,
    cast: 'Joy Mukherjee, Saira Banu',
    label: 'Saregama / HMV',
    significance:
      '1964 Devendra Goel musical featuring Hum Bhi Agar Bachche Hote and Muqabla Humse Na Karo.',
    songs: [
      origSong('ravi-door-ki-awaz-1964', 1, 'Hum Bhi Agar Bachche Hote', 'Mohammed Rafi, Asha Bhosle, Manna Dey', 'Door Ki Awaz', 1964),
      origSong('ravi-door-ki-awaz-1964', 2, 'Kya Mil Gaya Hai Tumko', 'Mohammed Rafi, Asha Bhosle', 'Door Ki Awaz', 1964),
    ],
  },
  {
    id: 'ravi-shehnai-1964',
    directorId: 'ravi',
    title: 'Shehnai',
    year: 1964,
    cast: 'Biswajeet, Rajshree',
    label: 'Saregama / HMV',
    significance:
      'Popular 1964 soundtrack featuring Na Jhatko Zulf Se Paani and Kya Ajab Saaz Hai Yeh Shehnai.',
    songs: [
      origSong('ravi-shehnai-1964', 1, 'Na Jhatko Zulf Se Paani', 'Mohammed Rafi', 'Shehnai', 1964),
      origSong('ravi-shehnai-1964', 2, 'Kya Ajab Saaz Hai Yeh Shehnai', 'Mohammed Rafi', 'Shehnai', 1964),
    ],
  },

  // =========================================================================
  // 1965 – 1969 (Khandan, Waqt, Phool Aur Patthar, Hamraaz, Neel Kamal)
  // =========================================================================
  {
    id: 'ravi-kaajal-1965',
    directorId: 'ravi',
    title: 'Kaajal',
    year: 1965,
    cast: 'Meena Kumari, Dharmendra, Raaj Kumar',
    label: 'Saregama / HMV',
    significance:
      'Classic literary drama uniting Ravi and Sahir Ludhianvi on Tora Man Darpan Kehlaye and Chhoo Lene Do Nazuk Honthon Ko.',
    songs: [
      origSong('ravi-kaajal-1965', 1, 'Tora Man Darpan Kehlaye', 'Asha Bhosle', 'Kaajal', 1965),
      origSong('ravi-kaajal-1965', 2, 'Chhoo Lene Do Nazuk Honthon Ko', 'Mohammed Rafi', 'Kaajal', 1965),
      origSong('ravi-kaajal-1965', 3, 'Yeh Zulf Agar Khul Ke Bikhar Jaye', 'Mohammed Rafi', 'Kaajal', 1965),
    ],
  },
  {
    id: 'ravi-khandan-1965',
    directorId: 'ravi',
    title: 'Khandan',
    year: 1965,
    cast: 'Sunil Dutt, Nutan, Pran',
    label: 'Saregama / HMV',
    significance:
      'Won Ravi his second Filmfare Award for Best Music Director with Tumhi Mere Mandir and Badi Der Bhayi Nandlala.',
    songs: [
      origSong('ravi-khandan-1965', 1, 'Tumhi Mere Mandir Tumhi Meri Pooja', 'Lata Mangeshkar', 'Khandan', 1965),
      origSong('ravi-khandan-1965', 2, 'Badi Der Bhayi Nandlala', 'Mohammed Rafi', 'Khandan', 1965),
      origSong('ravi-khandan-1965', 3, 'Main Dekhoon Jis Ore Sakhi Ri', 'Lata Mangeshkar', 'Khandan', 1965),
    ],
  },
  {
    id: 'ravi-waqt-1965',
    directorId: 'ravi',
    title: 'Waqt',
    year: 1965,
    cast: 'Balraj Sahni, Sunil Dutt, Raaj Kumar, Shashi Kapoor, Sadhana',
    label: 'Saregama / HMV',
    significance:
      'Yash Chopra’s multi-starrer landmark featuring Aage Bhi Jaane Na Tu and the Afghan-inspired qawwali classic Ae Meri Zohra Jabeen.',
    songs: [
      origSong('ravi-waqt-1965', 1, 'Aage Bhi Jaane Na Tu', 'Asha Bhosle', 'Waqt', 1965),
      adaptedSong('ravi-waqt-1965', 2, 'Ae Meri Zohra Jabeen', 'Manna Dey', 'Waqt', 1965, {
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Afghan / Persian Folk Tune',
        originalArtist: 'Ustad Abdul Ghafoor Breshna / Afghan Folk Tradition',
        originalYear: 'Pre-1965',
        originCategory: 'Arabic & Middle Eastern',
        adaptationNotes:
          'Music history archives note this immortal qawwali-styled ballad draws melodic inspiration from a traditional Afghan composition associated with Ustad Abdul Ghafoor Breshna.',
        originalLink: 'https://www.youtube.com/watch?v=umjzzAk2aGw',
        referenceSource: 'Musicology & Film History Archives',
      }),
      origSong('ravi-waqt-1965', 3, 'Kaun Aaya Ki Nigahon Mein Chamak Jaag Uthi', 'Asha Bhosle', 'Waqt', 1965),
      origSong('ravi-waqt-1965', 4, 'Waqt Se Din Aur Raat', 'Mohammed Rafi', 'Waqt', 1965),
    ],
  },
  catalogFilm(
    'ravi-bahu-beti-1965',
    'Bahu Beti',
    1965,
    '1965 family drama starring Mala Sinha and Joy Mukherjee.',
    'Meri Zindagi Mein Aate',
    'Mohammed Rafi, Asha Bhosle'
  ),
  {
    id: 'ravi-do-badan-1966',
    directorId: 'ravi',
    title: 'Do Badan',
    year: 1966,
    cast: 'Manoj Kumar, Asha Parekh',
    label: 'Saregama / HMV',
    significance:
      'Filmfare-nominated tragedy score showcasing Rafi’s Raha Gardishon Mein Hardam and Bhari Duniya Mein.',
    songs: [
      origSong('ravi-do-badan-1966', 1, 'Raha Gardishon Mein Hardam', 'Mohammed Rafi', 'Do Badan', 1966),
      origSong('ravi-do-badan-1966', 2, 'Bhari Duniya Mein Aakhir Dil Ko Samjhane Kahan Jayen', 'Mohammed Rafi', 'Do Badan', 1966),
      origSong('ravi-do-badan-1966', 3, 'Naseeb Mein Jiske Jo Likha Tha', 'Mohammed Rafi', 'Do Badan', 1966),
    ],
  },
  {
    id: 'ravi-dus-lakh-1966',
    directorId: 'ravi',
    title: 'Dus Lakh',
    year: 1966,
    cast: 'Sanjay Khan, Babita, Om Prakash',
    label: 'Saregama / HMV',
    significance:
      'Popular comedy musical featuring Garibon Ki Suno and Duniya Usi Ki Hai.',
    songs: [
      origSong('ravi-dus-lakh-1966', 1, 'Garibon Ki Suno Woh Tumhari Sunega', 'Mohammed Rafi', 'Dus Lakh', 1966),
      origSong('ravi-dus-lakh-1966', 2, 'Teri Patli Kamar Teri Bali Umar', 'Mohammed Rafi, Asha Bhosle', 'Dus Lakh', 1966),
    ],
  },
  {
    id: 'ravi-phool-aur-patthar-1966',
    directorId: 'ravi',
    title: 'Phool Aur Patthar',
    year: 1966,
    cast: 'Dharmendra, Meena Kumari',
    label: 'Saregama / HMV',
    significance:
      '1966 box-office sensation featuring the ITWOFS-documented Brazilian tune adaptation Zindagi Mein Pyar Karna Seekh Lo.',
    songs: [
      adaptedSong('ravi-phool-aur-patthar-1966', 1, 'Zindagi Mein Pyar Karna Seekh Lo', 'Asha Bhosle', 'Phool Aur Patthar', 1966, {
        adaptationType: 'copied',
        originalSongTitle: 'Andorinha Preta (The Brazilian Love Song)',
        originalArtist: 'Breno Ferreira / Nat King Cole',
        originalYear: '1932 / 1959',
        originCategory: 'African & World Folk',
        adaptationNotes:
          'ITWOFS documents this Asha Bhosle cabaret number as an adaptation of the Brazilian tune Andorinha Preta (popularized internationally by Nat King Cole).',
        originalLink: 'https://www.youtube.com/watch?v=xzELhIQ29Fk',
        referenceSource: 'ITWOFS',
      }),
      origSong('ravi-phool-aur-patthar-1966', 2, 'Sheesha-e-Dil Itna Na Uchhalo', 'Asha Bhosle', 'Phool Aur Patthar', 1966),
      origSong('ravi-phool-aur-patthar-1966', 3, 'Sun Le Pukar Aayi Hoon', 'Asha Bhosle', 'Phool Aur Patthar', 1966),
    ],
  },
  catalogFilm(
    'ravi-sagaai-1966',
    'Sagaai',
    1966,
    '1966 Biswajeet and Rajshree romance composed by Ravi.',
    'Naache Mera Pyar Khushi Se',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-yeh-zindagi-kitni-haseen-hai-1966',
    'Yeh Zindagi Kitni Haseen Hai',
    1966,
    '1966 Joy Mukherjee and Saira Banu musical drama.',
    'Yeh Zindagi Kitni Haseen Hai',
    'Mohammed Rafi'
  ),
  catalogFilm(
    'ravi-aurat-1967',
    'Aurat',
    1967,
    '1967 Gemini Studios social drama featuring early Rajesh Khanna.',
    'Shola Ulfat Ka Bhadka Ke',
    'Asha Bhosle, Mohammed Rafi'
  ),
  {
    id: 'ravi-hamraaz-1967',
    directorId: 'ravi',
    title: 'Hamraaz',
    year: 1967,
    cast: 'Sunil Dutt, Raaj Kumar, Vimi',
    label: 'Saregama / HMV',
    significance:
      'Suspense musical masterpiece earning a Filmfare nomination with Mahendra Kapoor’s Neele Gagan Ke Tale and Na Moonh Chhupa Ke Jiyo.',
    songs: [
      origSong('ravi-hamraaz-1967', 1, 'Neele Gagan Ke Tale', 'Mahendra Kapoor', 'Hamraaz', 1967),
      origSong('ravi-hamraaz-1967', 2, 'Tum Agar Saath Dene Ka Wada Karo', 'Mahendra Kapoor', 'Hamraaz', 1967),
      origSong('ravi-hamraaz-1967', 3, 'Na Moonh Chhupa Ke Jiyo', 'Mahendra Kapoor', 'Hamraaz', 1967),
      origSong('ravi-hamraaz-1967', 4, 'Kisi Patthar Ki Murat Se', 'Mahendra Kapoor', 'Hamraaz', 1967),
    ],
  },
  catalogFilm(
    'ravi-mehrban-1967',
    'Mehrban',
    1967,
    '1967 AVM Productions family drama starring Nutan and Sunil Dutt.',
    'Aao Huzoor Tumko Sitaron Mein',
    'Asha Bhosle, Mohammed Rafi'
  ),
  {
    id: 'ravi-nai-roshni-1967',
    directorId: 'ravi',
    title: 'Nai Roshni',
    year: 1967,
    cast: 'Ashok Kumar, Mala Sinha, Biswajeet, Tanuja',
    label: 'Saregama / HMV',
    significance:
      'Noted 1967 drama featuring Lata Mangeshkar’s classical gem Meri Aankhon Ki Nindiya Chura Le Gaya.',
    songs: [
      origSong('ravi-nai-roshni-1967', 1, 'Meri Aankhon Ki Nindiya Chura Le Gaya', 'Lata Mangeshkar', 'Nai Roshni', 1967),
      origSong('ravi-nai-roshni-1967', 2, 'Teri Aankh Ka Jo Ishara Na Hota', 'Mohammed Rafi', 'Nai Roshni', 1967),
    ],
  },
  {
    id: 'ravi-aankhen-1968',
    directorId: 'ravi',
    title: 'Aankhen',
    year: 1968,
    cast: 'Dharmendra, Mala Sinha',
    label: 'Saregama / HMV',
    significance:
      'Ramanand Sagar spy thriller earning a Filmfare nomination with Milti Hai Zindagi Mein Mohabbat and Gairon Pe Karam.',
    songs: [
      origSong('ravi-aankhen-1968', 1, 'Milti Hai Zindagi Mein Mohabbat Kabhi Kabhi', 'Lata Mangeshkar', 'Aankhen', 1968),
      origSong('ravi-aankhen-1968', 2, 'Gairon Pe Karam Apnon Pe Sitam', 'Lata Mangeshkar', 'Aankhen', 1968),
      origSong('ravi-aankhen-1968', 3, 'Meri Sun Le Araz Banwari', 'Mohammed Rafi', 'Aankhen', 1968),
    ],
  },
  {
    id: 'ravi-do-kaliyan-1968',
    directorId: 'ravi',
    title: 'Do Kaliyan',
    year: 1968,
    cast: 'Biswajeet, Mala Sinha, Baby Neetu Singh',
    label: 'Saregama / HMV',
    significance:
      'Box-office hit famous for children’s classic Bachche Man Ke Sachche and Yeh Sama Yeh Ritu Yeh Nazara.',
    songs: [
      origSong('ravi-do-kaliyan-1968', 1, 'Bachche Man Ke Sachche', 'Lata Mangeshkar', 'Do Kaliyan', 1968),
      origSong('ravi-do-kaliyan-1968', 2, 'Tumhari Nazar Kyon Khafa Ho Gayi', 'Mohammed Rafi, Lata Mangeshkar', 'Do Kaliyan', 1968),
    ],
  },
  catalogFilm(
    'ravi-gauri-1968',
    'Gauri',
    1968,
    '1968 Sunil Dutt, Nutan, and Sanjeev Kumar drama.',
    'Pehle Wafa Ka Apni Yaqeen To Dilaaiye',
    'Mohammed Rafi, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-man-ka-meet-1968',
    'Man Ka Meet',
    1968,
    '1968 Sunil Dutt production introducing Som Dutt and Vinod Khanna.',
    'Kaali Kaali Aankhonwali',
    'Mohammed Rafi, Asha Bhosle'
  ),
  {
    id: 'ravi-neel-kamal-1968',
    directorId: 'ravi',
    title: 'Neel Kamal',
    year: 1968,
    cast: 'Waheeda Rehman, Manoj Kumar, Raaj Kumar',
    label: 'Saregama / HMV',
    significance:
      'Classic romance iconic for Rafi’s Babul Ki Duaen Leti Ja and Asha Bhosle’s Tujhko Pukare Mera Pyar.',
    songs: [
      origSong('ravi-neel-kamal-1968', 1, 'Babul Ki Duaen Leti Ja', 'Mohammed Rafi', 'Neel Kamal', 1968),
      origSong('ravi-neel-kamal-1968', 2, 'Aaja Tujhko Pukare Mera Pyar', 'Mohammed Rafi', 'Neel Kamal', 1968),
      origSong('ravi-neel-kamal-1968', 3, 'Yeh Zindagi Usi Ki Hai', 'Asha Bhosle', 'Neel Kamal', 1968),
    ],
  },
  catalogFilm(
    'ravi-paisa-ya-pyaar-1969',
    'Paisa Ya Pyaar',
    1969,
    '1969 Ashok Kumar, Mala Sinha, and Biswajeet social drama.',
    'Mil Le Mil Le Mujhe Mil Le',
    'Asha Bhosle, Mohammed Rafi'
  ),
  {
    id: 'ravi-aadmi-aur-insaan-1969',
    directorId: 'ravi',
    title: 'Aadmi Aur Insaan',
    year: 1969,
    cast: 'Dharmendra, Saira Banu, Feroz Khan',
    label: 'Saregama / HMV',
    significance:
      'Yash Chopra drama highlighted by Neele Parbaton Ki Dhara and Zindagi Ittefaq Hai.',
    songs: [
      origSong('ravi-aadmi-aur-insaan-1969', 1, 'Zindagi Ittefaq Hai', 'Mahendra Kapoor, Asha Bhosle', 'Aadmi Aur Insaan', 1969),
      origSong('ravi-aadmi-aur-insaan-1969', 2, 'Neela Aasman So Gaya', 'Mahendra Kapoor', 'Aadmi Aur Insaan', 1969),
    ],
  },
  catalogFilm(
    'ravi-anmol-moti-1969',
    'Anmol Moti',
    1969,
    '1969 Jeetendra and Babita adventure drama scored by Ravi.',
    'Ae Jaan-e-Chaman Tera Gora Badan',
    'Mahendra Kapoor'
  ),
  catalogFilm(
    'ravi-badi-didi-1969',
    'Badi Didi',
    1969,
    '1969 family drama starring Jeetendra and Nanda.',
    'Payal Bajee Kahan',
    'Asha Bhosle'
  ),
  {
    id: 'ravi-doli-1969',
    directorId: 'ravi',
    title: 'Doli',
    year: 1969,
    cast: 'Rajesh Khanna, Babita',
    label: 'Saregama / HMV',
    significance:
      'Hit 1969 romantic drama featuring Pehle Mile The Sapnon Mein and Aaj Pila De Saaqi.',
    songs: [
      origSong('ravi-doli-1969', 1, 'Pehle Mile The Sapnon Mein', 'Mohammed Rafi, Asha Bhosle', 'Doli', 1969),
      origSong('ravi-doli-1969', 2, 'Sajna Saath Nibhana', 'Mohammed Rafi, Asha Bhosle', 'Doli', 1969),
    ],
  },
  {
    id: 'ravi-ek-phool-do-mali-1969',
    directorId: 'ravi',
    title: 'Ek Phool Do Mali',
    year: 1969,
    cast: 'Sanjay Khan, Sadhana, Balraj Sahni',
    label: 'Saregama / HMV',
    significance:
      'Golden Jubilee hit remembered for Yeh Parda Hata Do, Sajna Sajna O Sajna, and Tujhe Suraj Kahoon Ya Chanda.',
    songs: [
      origSong('ravi-ek-phool-do-mali-1969', 1, 'Yeh Parda Hata Do Zara Mukhda Dikha Do', 'Mohammed Rafi, Asha Bhosle', 'Ek Phool Do Mali', 1969),
      origSong('ravi-ek-phool-do-mali-1969', 2, 'Tujhe Suraj Kahoon Ya Chanda', 'Manna Dey', 'Ek Phool Do Mali', 1969),
      origSong('ravi-ek-phool-do-mali-1969', 3, 'Sajna Sajna O Sajna', 'Asha Bhosle', 'Ek Phool Do Mali', 1969),
    ],
  },

  // =========================================================================
  // 1970 – 1979 (Samaj Ko Badal Dalo, Dhund, Ek Mahal Ho Sapno Ka, Aadmi Sadak Ka)
  // =========================================================================
  {
    id: 'ravi-samaj-ko-badal-dalo-1970',
    directorId: 'ravi',
    title: 'Samaj Ko Badal Dalo',
    year: 1970,
    cast: 'Parikshit Sahni, Sharada, Pran',
    label: 'Saregama / HMV',
    significance:
      '1970 social drama remembered for Amma Ek Roti De and Tum Apni Saheli Ko Itna Bata Do.',
    songs: [
      origSong('ravi-samaj-ko-badal-dalo-1970', 1, 'Tum Apni Saheli Ko Itna Bata Do', 'Mohammed Rafi, Asha Bhosle', 'Samaj Ko Badal Dalo', 1970),
    ],
  },
  catalogFilm(
    'ravi-chingari-1971',
    'Chingari',
    1971,
    '1971 Sanjay Khan and Leena Chandavarkar drama scored by Ravi.',
    'Do Pal Ki Hai Yeh Zindagani',
    'Mohammed Rafi, Asha Bhosle'
  ),
  {
    id: 'ravi-umeed-1971',
    directorId: 'ravi',
    title: 'Umeed',
    year: 1971,
    cast: 'Ashok Kumar, Joy Mukherjee, Nanda',
    label: 'Saregama / HMV',
    significance:
      'Recorded in 1962 and released in 1971; includes Ravi’s rare own playback vocals on Umeed Ke Sahare alongside Rafi’s Mujhe Ishq Hai Tujhi Se.',
    songs: [
      origSong('ravi-umeed-1971', 1, 'Mujhe Ishq Hai Tujhi Se', 'Mohammed Rafi', 'Umeed', 1971),
      origSong('ravi-umeed-1971', 2, 'Umeed Ke Sahare', 'Ravi', 'Umeed', 1971),
    ],
  },
  catalogFilm(
    'ravi-babul-ki-galiyaan-1972',
    'Babul Ki Galiyaan',
    1972,
    '1972 Sanjay Khan and Hema Malini drama composed by Ravi.',
    'Mera Naam Hai Chameli',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-dharkan-1972',
    'Dharkan',
    1972,
    '1972 Sanjay Khan and Mumtaz thriller scored by Ravi.',
    'Main To Chala Jidhar Chale Rasta',
    'Kishore Kumar'
  ),
  catalogFilm(
    'ravi-naag-panchami-1972',
    'Naag Panchami',
    1972,
    '1972 mythological Hindi film composed by Ravi.',
    'Aarti Keeje Shiv Shankar Ki',
    'Mahendra Kapoor'
  ),
  {
    id: 'ravi-dhund-1973',
    directorId: 'ravi',
    title: 'Dhund',
    year: 1973,
    cast: 'Sanjay Khan, Zeenat Aman, Danny Denzongpa',
    label: 'Saregama / HMV',
    significance:
      'B.R. Chopra’s atmospheric murder mystery featuring Asha Bhosle’s Sansar Ki Har Shai Ka.',
    songs: [
      origSong('ravi-dhund-1973', 1, 'Sansar Ki Har Shai Ka Itna Hi Fasana Hai', 'Mahendra Kapoor', 'Dhund', 1973),
      origSong('ravi-dhund-1973', 2, 'Jubna Se Chunariya Khisak Gayi Re', 'Asha Bhosle', 'Dhund', 1973),
    ],
  },
  catalogFilm(
    'ravi-mehmaan-1973',
    'Mehmaan',
    1973,
    '1973 Biswajeet and Rekha thriller with Sahir Ludhianvi lyrics.',
    'Chhodo Chhodo Meri Baiyan',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-sone-ke-hath-1973',
    'Sone Ke Hath',
    1973,
    '1973 Sanjay Khan and Babita drama composed by Ravi.',
    'Main Tere Pyar Mein Pagal',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-ghatana-1974',
    'Ghatana',
    1974,
    '1974 Hindi thriller drama with music by Ravi.',
    'Tumse Milke Aisa Laga',
    'Asha Bhosle'
  ),
  {
    id: 'ravi-ek-mahal-ho-sapno-ka-1975',
    directorId: 'ravi',
    title: 'Ek Mahal Ho Sapno Ka',
    year: 1975,
    cast: 'Dharmendra, Sharmila Tagore, Leena Chandavarkar',
    label: 'Saregama / HMV',
    significance:
      'Memorable 1975 romantic hit led by Dil Mein Kisi Ke Pyar Ka Jalta Hua Diya and Ek Mahal Ho Sapno Ka.',
    songs: [
      origSong('ravi-ek-mahal-ho-sapno-ka-1975', 1, 'Ek Mahal Ho Sapno Ka', 'Mohammed Rafi, Lata Mangeshkar', 'Ek Mahal Ho Sapno Ka', 1975),
      origSong('ravi-ek-mahal-ho-sapno-ka-1975', 2, 'Dil Mein Kisi Ke Pyar Ka Jalta Hua Diya', 'Kishore Kumar', 'Ek Mahal Ho Sapno Ka', 1975),
    ],
  },
  catalogFilm(
    'ravi-vandana-1975',
    'Vandana',
    1975,
    '1975 Sadhana and Parikshit Sahni drama scored by Ravi.',
    'Aapki Inayaten Aapke Karam',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'ravi-amaanat-1977',
    'Amaanat',
    1977,
    '1977 Manoj Kumar and Sadhana drama composed by Ravi.',
    'Door Rehkar Na Karo Baat',
    'Mohammed Rafi'
  ),
  {
    id: 'ravi-aadmi-sadak-ka-1977',
    directorId: 'ravi',
    title: 'Aadmi Sadak Ka',
    year: 1977,
    cast: 'Shatrughan Sinha, Vikram, Zaheera',
    label: 'Saregama / HMV',
    significance:
      'Home to Ravi’s immortal evergreen wedding celebration anthem Aaj Mere Yaar Ki Shaadi Hai.',
    songs: [
      origSong('ravi-aadmi-sadak-ka-1977', 1, 'Aaj Mere Yaar Ki Shaadi Hai', 'Mohammed Rafi, Ravi', 'Aadmi Sadak Ka', 1977),
      origSong('ravi-aadmi-sadak-ka-1977', 2, 'Bura Mat Suno Bura Mat Dekho', 'Mohammed Rafi', 'Aadmi Sadak Ka', 1977),
    ],
  },

  // =========================================================================
  // 1980 – 2003 (Nikaah, Tawaif, Aaj Ki Awaz, Awam & Late Hindi Works)
  // =========================================================================
  catalogFilm(
    'ravi-premika-1980',
    'Premika',
    1980,
    '1980 Vinod Mehra romantic drama with music and lyrics by Ravi.',
    'Yeh Teri Aankhen Jhuki Jhuki',
    'Kishore Kumar'
  ),
  {
    id: 'ravi-nikaah-1982',
    directorId: 'ravi',
    title: 'Nikaah',
    year: 1982,
    cast: 'Raj Babbar, Salma Agha, Deepak Parashar',
    label: 'Saregama / HMV',
    significance:
      'Triumphant 1980s Bollywood comeback with Salma Agha’s Dil Ke Armaan Aansuon Mein Beh Gaye and Ghulam Ali’s Chupke Chupke Raat Din.',
    songs: [
      origSong('ravi-nikaah-1982', 1, 'Dil Ke Armaan Aansuon Mein Beh Gaye', 'Salma Agha', 'Nikaah', 1982),
      origSong('ravi-nikaah-1982', 2, 'Chupke Chupke Raat Din', 'Ghulam Ali', 'Nikaah', 1982),
      origSong('ravi-nikaah-1982', 3, 'Faza Bhi Hai Jawaan Jawaan', 'Salma Agha', 'Nikaah', 1982),
      origSong('ravi-nikaah-1982', 4, 'Dil Ki Yeh Aarzoo Thi', 'Mahendra Kapoor, Salma Agha', 'Nikaah', 1982),
    ],
  },
  {
    id: 'ravi-aaj-ki-awaz-1984',
    directorId: 'ravi',
    title: 'Aaj Ki Awaz',
    year: 1984,
    cast: 'Raj Babbar, Smita Patil, Nana Patekar',
    label: 'T-Series / HMV',
    significance:
      'B.R. Chopra vigilante hit highlighted by Aaj Ki Awaz and Aankhon Se Aaj Ashq Bahane Do.',
    songs: [
      origSong('ravi-aaj-ki-awaz-1984', 1, 'Jagah Jagah Dhoondha', 'Asha Bhosle, Mahendra Kapoor', 'Aaj Ki Awaz', 1984),
    ],
  },
  catalogFilm(
    'ravi-mujhe-shaktee-do-1984',
    'Mujhe Shaktee Do',
    1984,
    '1984 Hindi drama scored by Ravi.',
    'Mujhe Shaktee Do Title Track',
    'Mahendra Kapoor'
  ),
  catalogFilm(
    'ravi-hum-do-hamare-do-1984',
    'Hum Do Hamare Do',
    1984,
    '1984 Hindi family comedy scored by Ravi.',
    'Hum Do Hamare Do',
    'Kishore Kumar, Asha Bhosle'
  ),
  {
    id: 'ravi-tawaif-1985',
    directorId: 'ravi',
    title: 'Tawaif',
    year: 1985,
    cast: 'Rishi Kapoor, Rati Agnihotri, Poonam Dhillon',
    label: 'T-Series / HMV',
    significance:
      'B.R. Chopra blockbuster famous for Mahendra Kapoor’s Tere Pyar Ki Tamanna and Joban Anmol.',
    songs: [
      origSong('ravi-tawaif-1985', 1, 'Tere Pyar Ki Tamanna', 'Mahendra Kapoor', 'Tawaif', 1985),
      origSong('ravi-tawaif-1985', 2, 'Aaj Ki Sham Aapke Naam', 'Asha Bhosle', 'Tawaif', 1985),
    ],
  },
  catalogFilm(
    'ravi-khamosh-nigahen-1986',
    'Khamosh Nigahen',
    1986,
    '1986 Hindi suspense drama scored by Ravi.',
    'Dard-e-Mohabbat',
    'Asha Bhosle'
  ),
  catalogFilm(
    'ravi-dahleez-1986',
    'Dahleez',
    1986,
    '1986 Raj Babbar, Jackie Shroff, and Meenakshi Seshadri drama.',
    'Dil Mein Tere Pyar Ki',
    'Mahendra Kapoor, Asha Bhosle'
  ),
  catalogFilm(
    'ravi-awam-1987',
    'Awam',
    1987,
    '1987 B.R. Chopra political thriller starring Rajesh Khanna and Smita Patil.',
    'Raston Ko Bhulaya',
    'Asha Bhosle, Mahendra Kapoor'
  ),
  catalogFilm(
    'ravi-ghar-ka-sukh-1987',
    'Ghar Ka Sukh',
    1987,
    '1987 family drama with music and lyrics by Ravi.',
    'Ghar Ka Sukh Title Theme',
    'Mahendra Kapoor'
  ),
  catalogFilm(
    'ravi-meraa-suhaag-1987',
    'Meraa Suhaag',
    1987,
    '1987 Hindi family drama composed by Ravi.',
    'Meraa Suhaag Title Theme',
    'Anuradha Paudwal'
  ),
  catalogFilm(
    'ravi-ek-alag-mausam-2003',
    'Ek Alag Mausam',
    2003,
    'Final Hindi feature film credit of Ravi, starring Nandita Das and Anupam Kher with lyrics by Kaifi Azmi.',
    'Yeh Kaisa Waqt Hai',
    'Hariharan, Kavita Krishnamurthy'
  ),
];
