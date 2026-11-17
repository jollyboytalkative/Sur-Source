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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Jatin Lalit`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Jatin Lalit`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

const catalogFilm = (
  id: string,
  title: string,
  year: number,
  significance: string,
  leadTrackTitle?: string,
  singers = 'Udit Narayan & Alka Yagnik'
): MovieEntry => ({
  id,
  directorId: 'jatin-lalit',
  title,
  year,
  label: 'Jatin–Lalit Archive',
  significance,
  songs: [
    origSong(
      id,
      1,
      leadTrackTitle ?? `${title} — Title Track`,
      singers,
      title,
      year,
      `Verified Hindi (Bollywood) joint Jatin–Lalit catalog entry from ${year}.`
    ),
  ],
});

export const JATIN_LALIT_MOVIES: MovieEntry[] = [
  // =====================================================================
  // 1991–1995: DEBUT, CAMPUS POP BREAKTHROUGH & DDLJ MILESTONE
  // =====================================================================
  {
    id: 'jl-yaara-dildara-1991',
    directorId: 'jatin-lalit',
    title: 'Yaara Dildara',
    year: 1991,
    cast: 'Aasif Sheikh, Ruchika Pandey, Amjad Khan',
    label: 'Time Magnetics',
    significance:
      'Jatin–Lalit’s Hindi cinema debut as a composer duo, launched with Majrooh Sultanpuri’s lyrics and powered by the chartbuster "Bin Tere Sanam".',
    songs: [
      origSong(
        'jl-yaara-dildara-1991',
        1,
        'Bin Tere Sanam Mar Mitenge Hum',
        'Udit Narayan, Kavita Krishnamurthy',
        'Yaara Dildara',
        1991,
        'Runaway debut romantic hit featuring buoyant synth hooks and dholak-driven percussion.'
      ),
      origSong(
        'jl-yaara-dildara-1991',
        2,
        'Tum Hi Hamari Ho Manzil My Love',
        'Udit Narayan, Anuradha Paudwal',
        'Yaara Dildara',
        1991,
        'Soft romantic duet with acoustic guitar arpeggios.'
      ),
      origSong(
        'jl-yaara-dildara-1991',
        3,
        'Woh Jo Kaha Tha Maine',
        'Udit Narayan, Kavita Krishnamurthy',
        'Yaara Dildara',
        1991
      ),
      origSong(
        'jl-yaara-dildara-1991',
        4,
        'Hamare Papa Aur Hum',
        'Amit Kumar, Bhupinder Singh',
        'Yaara Dildara',
        1991
      ),
      origSong(
        'jl-yaara-dildara-1991',
        5,
        'Koi Chahe Na Chahe',
        'Nitin Mukesh, Kavita Krishnamurthy',
        'Yaara Dildara',
        1991
      ),
      origSong(
        'jl-yaara-dildara-1991',
        6,
        'Ab To Tumhe Hai Dikhana',
        'Udit Narayan, Abhijeet Bhattacharya',
        'Yaara Dildara',
        1991
      ),
      origSong(
        'jl-yaara-dildara-1991',
        7,
        'Le-Le De-De Ka Police Mein Kya Kaam',
        'Abhijeet Bhattacharya',
        'Yaara Dildara',
        1991
      ),
    ],
  },
  {
    id: 'jl-jo-jeeta-wohi-sikandar-1992',
    directorId: 'jatin-lalit',
    title: 'Jo Jeeta Wohi Sikandar',
    year: 1992,
    cast: 'Aamir Khan, Ayesha Jhulka, Deepak Tijori, Pooja Bedi',
    label: 'HMV / Saregama',
    significance:
      'Mansoor Khan’s campus classic that earned Jatin–Lalit their first Filmfare Best Music Director nomination, anchored by the orchestral slow-motion anthem "Pehla Nasha".',
    songs: [
      adaptedSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        1,
        'Pehla Nasha',
        'Udit Narayan, Sadhana Sargam',
        'Jo Jeeta Wohi Sikandar',
        1992,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Take My Breath Away (Synth-Ballad Mood)',
          originalArtist: 'Berlin / Giorgio Moroder',
          originalYear: '1986',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'While the main vocal melody is an acclaimed studio original, music critics often note its dreamy slow-tempo synth swell and romantic ballad atmosphere echo 1980s soft-rock production.',
          originalLink: 'https://www.youtube.com/watch?v=Bx51eegLTY8',
          referenceSource: 'Comparative Musicology Archives / Scroll.in',
        }
      ),
      adaptedSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        2,
        'Yahaan Ke Hum Sikander',
        'Udit Narayan, Sadhana Sargam, Jatin–Lalit',
        'Jo Jeeta Wohi Sikandar',
        1992,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Pinball Wizard',
          originalArtist: 'The Who',
          originalYear: '1969',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents that the driving acoustic guitar bridge ("Jo sab karte hain yaaron...") draws clear rhythmic and chordal inspiration from The Who’s 1969 rock classic.',
          originalLink: 'https://www.youtube.com/watch?v=hHc7bR6y06M',
          referenceSource: 'ITWOFS / Rock-Pop Comparisons',
        }
      ),
      origSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        3,
        'Arre Yaaron Mere Pyaaron',
        'Udit Narayan, Vijayta Pandit',
        'Jo Jeeta Wohi Sikandar',
        1992,
        'High-spirited cycling-camp camaraderie chorus.'
      ),
      origSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        4,
        'Rooth Ke Hamse',
        'Jatin Pandit',
        'Jo Jeeta Wohi Sikandar',
        1992,
        'Acoustic guitar campus ballad sung by composer Jatin Pandit.'
      ),
      origSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        5,
        'Humse Hai Sara Jahan',
        'Jatin Pandit, Sadhana Sargam',
        'Jo Jeeta Wohi Sikandar',
        1992
      ),
      origSong(
        'jl-jo-jeeta-wohi-sikandar-1992',
        6,
        'Naam Hai Mera Fonseca',
        'Amit Kumar, Alka Yagnik',
        'Jo Jeeta Wohi Sikandar',
        1992
      ),
    ],
  },
  {
    id: 'jl-khiladi-1992',
    directorId: 'jatin-lalit',
    title: 'Khiladi',
    year: 1992,
    cast: 'Akshay Kumar, Ayesha Jhulka, Deepak Tijori',
    label: 'Venus',
    significance:
      'Abbas–Mustan’s suspense hit that cemented Jatin–Lalit’s 1990s campus sound with "Wada Raha Sanam" and "Khud Ko Kya Samajhti Hai".',
    songs: [
      origSong(
        'jl-khiladi-1992',
        1,
        'Wada Raha Sanam Honge Juda Na Hum',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Khiladi',
        1992,
        'Lush rain duet with sweeping string preludes and signature 1990s acoustic guitar.'
      ),
      origSong(
        'jl-khiladi-1992',
        2,
        'Khud Ko Kya Samajhti Hai',
        'Abhijeet Bhattacharya, Udit Narayan, Kavita Krishnamurthy',
        'Khiladi',
        1992
      ),
      origSong(
        'jl-khiladi-1992',
        3,
        'Kya Khabar Thi Jaana',
        'Abhijeet Bhattacharya, Asha Bhosle',
        'Khiladi',
        1992
      ),
      origSong(
        'jl-khiladi-1992',
        4,
        'Hum Yaar Hain Yaaron Ke',
        'Abhijeet Bhattacharya, Udit Narayan',
        'Khiladi',
        1992
      ),
      origSong(
        'jl-khiladi-1992',
        5,
        'Dekha Teri Mast Nigahon Mein',
        'Kumar Sanu, Asha Bhosle',
        'Khiladi',
        1992
      ),
      origSong(
        'jl-khiladi-1992',
        6,
        'Too Shama Main Parwana Tera',
        'Abhijeet Bhattacharya, Alisha Chinai',
        'Khiladi',
        1992
      ),
      origSong(
        'jl-khiladi-1992',
        7,
        'Hoke Mann Aaj Magan',
        'Udit Narayan, Abhijeet Bhattacharya, Asha Bhosle',
        'Khiladi',
        1992
      ),
    ],
  },
  {
    id: 'jl-raju-ban-gaya-gentleman-1992',
    directorId: 'jatin-lalit',
    title: 'Raju Ban Gaya Gentleman',
    year: 1992,
    cast: 'Shah Rukh Khan, Juhi Chawla, Nana Patekar, Amrita Singh',
    label: 'Tips',
    significance:
      'Marked Jatin–Lalit’s very first collaboration with Shah Rukh Khan, paying open stylistic homage to R.D. Burman’s brassy pop grooves.',
    songs: [
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        1,
        'Kya Hua (Loveria)',
        'Kumar Sanu, Alka Yagnik, Jolly Mukherjee',
        'Raju Ban Gaya Gentleman',
        1992,
        'Playful Bombay street comedy number driven by brass stabs and Latin bass.'
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        2,
        'Dil Hai Mera Deewana',
        'Kumar Sanu',
        'Raju Ban Gaya Gentleman',
        1992
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        3,
        'Kehti Hai Dil Ki Lagi',
        'Kumar Sanu, Alka Yagnik',
        'Raju Ban Gaya Gentleman',
        1992
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        4,
        'Seene Mein Dil Hai',
        'Kumar Sanu, Alka Yagnik',
        'Raju Ban Gaya Gentleman',
        1992
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        5,
        'Raju Ban Gaya Gentleman',
        'Kumar Sanu, Sudesh Bhosle, Jolly Mukherjee, Sadhana Sargam',
        'Raju Ban Gaya Gentleman',
        1992
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        6,
        'Tu Mere Saath Saath',
        'Kumar Sanu, Alka Yagnik',
        'Raju Ban Gaya Gentleman',
        1992
      ),
      origSong(
        'jl-raju-ban-gaya-gentleman-1992',
        7,
        'Tham Tham Tham',
        'Kumar Sanu, Alka Yagnik',
        'Raju Ban Gaya Gentleman',
        1992
      ),
    ],
  },
  catalogFilm(
    'jl-aadmi-1993',
    'Aadmi',
    1993,
    'Arshad Khan action drama featuring Kumar Sanu and Kavita Krishnamurthy duets.',
    'Jaan Se Badhkar Janam',
    'Kumar Sanu & Sadhana Sargam'
  ),
  {
    id: 'jl-ashaant-1993',
    directorId: 'jatin-lalit',
    title: 'Ashaant',
    year: 1993,
    cast: 'Akshay Kumar, Vishnuvardhan, Ashwini Bhave',
    label: 'Time Magnetics',
    significance:
      'Hindi-language soundtrack entry (paired separately with its Kannada counterpart Vishnu Vijaya; Hindi version only indexed here).',
    songs: [
      origSong(
        'jl-ashaant-1993',
        1,
        'Dil Ki Ghadi',
        'Kumar Sanu, Alka Yagnik',
        'Ashaant',
        1993
      ),
      origSong(
        'jl-ashaant-1993',
        2,
        'Deewane To Deewane Hain',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Ashaant',
        1993
      ),
      origSong(
        'jl-ashaant-1993',
        3,
        'Hum To Sanam',
        'Abhijeet Bhattacharya, Kavita Krishnamurthy',
        'Ashaant',
        1993
      ),
    ],
  },
  catalogFilm(
    'jl-bhookamp-1993',
    'Bhookamp',
    1993,
    'Gautam Adhikari thriller scored by Jatin–Lalit.',
    'One Two Three',
    'Kumar Sanu & Alka Yagnik'
  ),
  catalogFilm(
    'jl-boy-friend-1993',
    'Boy Friend',
    1993,
    '1993 youth drama featuring early Jatin–Lalit vocal numbers.',
    'Pyar Ki Duniya',
    'Kumar Sanu & Kavita Krishnamurthy'
  ),
  {
    id: 'jl-kabhi-haan-kabhi-naa-1994',
    directorId: 'jatin-lalit',
    title: 'Kabhi Haan Kabhi Naa',
    year: 1994,
    cast: 'Shah Rukh Khan, Suchitra Krishnamoorthi, Deepak Tijori, Naseeruddin Shah',
    label: 'Venus',
    significance:
      'Kundan Shah’s beloved Goan band musical with Majrooh Sultanpuri, blending accordion romance ("Ae Kaash Ke Hum") and stage jazz ("Woh Toh Hai Albela").',
    songs: [
      adaptedSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        1,
        'Sachi Yeh Kahani Hai',
        'Amit Kumar, Alka Yagnik',
        'Kabhi Haan Kabhi Naa',
        1994,
        {
          adaptationType: 'copied',
          originalSongTitle: 'In Zaire',
          originalArtist: 'Johnny Wakelin & The Kinshasa Band',
          originalYear: '1976',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents that the driving brass-and-percussion chorus cadence closely mirrors Johnny Wakelin’s 1976 Muhammad Ali tribute "In Zaire".',
          originalLink: 'https://www.youtube.com/watch?v=GUpGRXT18R8',
          referenceSource: 'ITWOFS / Hindi Film Music Comparisons',
        }
      ),
      origSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        2,
        'Ae Kaash Ke Hum',
        'Kumar Sanu',
        'Kabhi Haan Kabhi Naa',
        1994,
        'Signature Goan street ballad led by solo accordion and Kumar Sanu’s tender phrasing.'
      ),
      origSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        3,
        'Aana Mere Pyar Ko Na Tum',
        'Kumar Sanu, Alka Yagnik',
        'Kabhi Haan Kabhi Naa',
        1994
      ),
      origSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        4,
        'Deewana Dil Deewana',
        'Amit Kumar, Udit Narayan',
        'Kabhi Haan Kabhi Naa',
        1994
      ),
      origSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        5,
        'Woh Toh Hai Albela',
        'Kumar Sanu, Devaki Pandit',
        'Kabhi Haan Kabhi Naa',
        1994
      ),
      origSong(
        'jl-kabhi-haan-kabhi-naa-1994',
        6,
        'Kyon Na Hum Milke Pyar',
        'Amit Kumar, Udit Narayan, Vijayta Pandit',
        'Kabhi Haan Kabhi Naa',
        1994
      ),
    ],
  },
  {
    id: 'jl-cheetah-1994',
    directorId: 'jatin-lalit',
    title: 'Cheetah',
    year: 1994,
    cast: 'Mithun Chakraborty, Ashwini Bhave',
    label: 'Venus',
    significance:
      'Harmesh Malhotra action entertainer scored by Jatin–Lalit with spirited folk-dance duets.',
    songs: [
      origSong(
        'jl-cheetah-1994',
        1,
        'Yeh Tera Sajna Savarna',
        'Kumar Sanu, Alka Yagnik',
        'Cheetah',
        1994
      ),
      origSong(
        'jl-cheetah-1994',
        2,
        'Yeh Kudi Mera Dil Le Gayi',
        'Kumar Sanu, Alka Yagnik',
        'Cheetah',
        1994
      ),
      origSong(
        'jl-cheetah-1994',
        3,
        'Chu Chu Chu',
        'Poornima',
        'Cheetah',
        1994
      ),
    ],
  },
  catalogFilm(
    'jl-dushmanon-ka-dushman-1994',
    'Dushmanon Ka Dushman',
    1994,
    'Mid-1990s action release with joint soundtrack composed by Jatin–Lalit.',
    'O Meri Jaan-e-Jigar',
    'Kumar Sanu & Kavita Krishnamurthy'
  ),
  catalogFilm(
    'jl-hanste-khelte-1994',
    'Hanste Khelte',
    1994,
    'Bharat Rangachary comedy-romance scored by Jatin–Lalit.',
    'O Yaara O Yaara',
    'Kumar Sanu & Sadhana Sargam'
  ),
  {
    id: 'jl-laqshya-1994',
    directorId: 'jatin-lalit',
    title: 'Laqshya',
    year: 1994,
    cast: 'Ronit Roy, Tisca Chopra, Paresh Rawal',
    label: 'Tips',
    significance:
      '1994 romantic drama (distinct from the 2004 war film) featuring ITWOFS-documented Disney musical adaptation "Tum Humko Hum Tumko Sanam".',
    songs: [
      adaptedSong(
        'jl-laqshya-1994',
        1,
        'Tum Humko Hum Tumko Sanam',
        'Kumar Sanu, Alka Yagnik',
        'Laqshya',
        1994,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Chim Chim Cher-ee (from Mary Poppins)',
          originalArtist: 'Richard M. Sherman & Robert B. Sherman',
          originalYear: '1964',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS notes clear melodic phrasing parallels to the Sherman Brothers’ Academy Award-winning waltz "Chim Chim Cher-ee".',
          originalLink: 'https://www.youtube.com/watch?v=kG6O4N3wxf8',
          referenceSource: 'ITWOFS / Archive Notes',
        }
      ),
      origSong(
        'jl-laqshya-1994',
        2,
        'Raftaar Hai Zindagi Ki',
        'Udit Narayan, Abhijeet Bhattacharya',
        'Laqshya',
        1994
      ),
    ],
  },
  {
    id: 'jl-vaade-iraade-1994',
    directorId: 'jatin-lalit',
    title: 'Vaade Iraade',
    year: 1994,
    cast: 'Ayush Kumar, Mamta Kulkarni, Kulbhushan Kharbanda',
    label: 'HMV / Saregama',
    significance:
      'Melodic 1994 romance penned by Dev Kohli and Madan Pal featuring Kumar Sanu and Asha Bhosle.',
    songs: [
      origSong(
        'jl-vaade-iraade-1994',
        1,
        'Teri Zindagi Hai Teri Zindagi',
        'S.P. Balasubrahmanyam, Sadhana Sargam',
        'Vaade Iraade',
        1994
      ),
      origSong(
        'jl-vaade-iraade-1994',
        2,
        'Tum Ho Meri Sweetheart',
        'S.P. Balasubrahmanyam, Kavita Krishnamurthy',
        'Vaade Iraade',
        1994
      ),
      origSong(
        'jl-vaade-iraade-1994',
        3,
        'Main Neend Chura Loongi',
        'Asha Bhosle, Kumar Sanu',
        'Vaade Iraade',
        1994
      ),
    ],
  },
  catalogFilm(
    'jl-zaalim-1994',
    'Zaalim',
    1994,
    'Sikander Bharti action drama starring Akshay Kumar and Madhoo.',
    'Mubarak Ho Mubarak Ho',
    'Udit Narayan & Alka Yagnik'
  ),
  {
    id: 'jl-dilwale-dulhania-le-jayenge-1995',
    directorId: 'jatin-lalit',
    title: 'Dilwale Dulhania Le Jayenge',
    year: 1995,
    cast: 'Shah Rukh Khan, Kajol, Amrish Puri, Farida Jalal',
    label: 'HMV / Saregama (YRF Music)',
    significance:
      'Aditya Chopra’s all-time landmark blockbuster and the bestselling Bollywood soundtrack of the 1990s (over 25 million units), marrying Lata Mangeshkar and Udit Narayan’s vocals with Punjabi sarson folk motifs.',
    songs: [
      origSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        1,
        'Tujhe Dekha Toh',
        'Lata Mangeshkar, Kumar Sanu',
        'Dilwale Dulhania Le Jayenge',
        1995,
        'Iconic mustard-field romance combining santoor, mandolin (composed by Lalit), and sweeping string lines.'
      ),
      adaptedSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        2,
        'Mehndi Laga Ke Rakhna',
        'Lata Mangeshkar, Udit Narayan',
        'Dilwale Dulhania Le Jayenge',
        1995,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional Punjabi Suhag & Bhangra Folk Idioms',
          originalArtist: 'Traditional Punjab Folk Tradition',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Built around classic Punjabi wedding dholki-tumbhi rhythms and celebratory sehri/mehndi folk calls re-orchestrated for cinema.',
          originalLink: 'https://www.youtube.com/watch?v=YjAnKdMPJGU',
          referenceSource: 'Musicology & Soundtrack Liner Notes',
        }
      ),
      origSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        3,
        'Ho Gaya Hai Tujhko Toh Pyar Sajna',
        'Lata Mangeshkar, Udit Narayan',
        'Dilwale Dulhania Le Jayenge',
        1995
      ),
      origSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        4,
        'Mere Khwabon Mein',
        'Lata Mangeshkar',
        'Dilwale Dulhania Le Jayenge',
        1995
      ),
      origSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        5,
        'Ruk Ja O Dil Deewane',
        'Udit Narayan',
        'Dilwale Dulhania Le Jayenge',
        1995
      ),
      origSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        6,
        'Zara Sa Jhoom Loon Main',
        'Asha Bhosle, Abhijeet Bhattacharya',
        'Dilwale Dulhania Le Jayenge',
        1995
      ),
      adaptedSong(
        'jl-dilwale-dulhania-le-jayenge-1995',
        7,
        'Ghar Aaja Pardesi',
        'Pamela Chopra, Manpreet Kaur',
        'Dilwale Dulhania Le Jayenge',
        1995,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional Punjabi Viraha / Jugni Folk Tradition',
          originalArtist: 'Traditional Punjab Folk',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Draws directly from traditional Punjabi folk wedding-separation laments, sung by Pamela Chopra.',
          originalLink: 'https://www.youtube.com/watch?v=s7YH53YMymU',
          referenceSource: 'YRF Archive & Musicology Notes',
        }
      ),
    ],
  },
  catalogFilm(
    'jl-gangster-1995',
    'Gangster',
    1995,
    'Dev Anand crime drama featuring Jatin–Lalit’s mid-90s soundtrack.',
    'Ek Ladki Mili',
    'Udit Narayan & Asha Bhosle'
  ),
  {
    id: 'jl-nishana-1995',
    directorId: 'jatin-lalit',
    title: 'Nishana',
    year: 1995,
    cast: 'Mithun Chakraborty, Rekha, Paresh Rawal',
    label: 'Tips',
    significance:
      'Raj N. Sippy drama containing an ITWOFS-cataloged Eurodance rhythmic adaptation alongside original ballads.',
    songs: [
      adaptedSong(
        'jl-nishana-1995',
        1,
        'Aa Ha Ri Bali Haari',
        'Abhijeet Bhattacharya, Poornima',
        'Nishana',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: "It's My Life",
          originalArtist: 'Dr. Alban',
          originalYear: '1992',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Documented in ITWOFS as closely following the signature bassline, tempo, and hook cadence of Dr. Alban’s 1992 Eurodance chart-topper.',
          originalLink: 'https://www.youtube.com/watch?v=oW0VovnyjPY',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-nishana-1995',
        2,
        'Pyar Hi Pyar Hai',
        'Kumar Sanu, Alka Yagnik',
        'Nishana',
        1995
      ),
    ],
  },
  catalogFilm(
    'jl-paandav-1995',
    'Paandav',
    1995,
    'Raj N. Sippy action ensemble scored by Jatin–Lalit.',
    'Kasam Se Kasam Se',
    'Udit Narayan & Kavita Krishnamurthy'
  ),

  // =====================================================================
  // 1996–1999: KHAMOSHI, YES BOSS, GHULAM, KUCH KUCH HOTA HAI & SARFAROSH
  // =====================================================================
  {
    id: 'jl-fareb-1996',
    directorId: 'jatin-lalit',
    title: 'Fareb',
    year: 1996,
    cast: 'Faraaz Khan, Suman Ranganathan, Milind Gunaji',
    label: 'HMV / Saregama',
    significance:
      'Vikram Bhatt’s breakout thriller whose intimate Abhijeet and Kumar Sanu melodies became sleeper hits of 1996.',
    songs: [
      origSong(
        'jl-fareb-1996',
        1,
        'Yeh Teri Aankhen Jhuki Jhuki',
        'Abhijeet Bhattacharya',
        'Fareb',
        1996,
        'Silky unplugged romantic solo that became a staple of Abhijeet’s 1990s repertoire.'
      ),
      origSong(
        'jl-fareb-1996',
        2,
        'Aankhon Se Dil Mein Utar Ke',
        'Kumar Sanu, Alka Yagnik',
        'Fareb',
        1996
      ),
      origSong(
        'jl-fareb-1996',
        3,
        'O Hum Safar Dil Ke Nagar',
        'Udit Narayan, Alka Yagnik',
        'Fareb',
        1996
      ),
      origSong(
        'jl-fareb-1996',
        4,
        'Pyar Ka Pehla Pehla Sawan',
        'Kumar Sanu, Alka Yagnik',
        'Fareb',
        1996
      ),
      origSong(
        'jl-fareb-1996',
        5,
        'Yaar Ka Milna Milna',
        'Abhijeet Bhattacharya, Udit Narayan',
        'Fareb',
        1996
      ),
    ],
  },
  {
    id: 'jl-khamoshi-the-musical-1996',
    directorId: 'jatin-lalit',
    title: 'Khamoshi: The Musical',
    year: 1996,
    cast: 'Salman Khan, Manisha Koirala, Nana Patekar, Seema Biswas',
    label: 'Polygram',
    significance:
      'Sanjay Leela Bhansali’s directorial debut and one of Jatin–Lalit’s most critically revered scores, pairing classical depth with Goan acoustic textures.',
    songs: [
      origSong(
        'jl-khamoshi-the-musical-1996',
        1,
        'Bahon Ke Darmiyan',
        'Alka Yagnik, Hariharan',
        'Khamoshi: The Musical',
        1996,
        'Lush romantic ballad showcasing Hariharan’s classical gamaks and string counterpoint.'
      ),
      origSong(
        'jl-khamoshi-the-musical-1996',
        2,
        'Aaj Main Upar',
        'Kavita Krishnamurthy, Kumar Sanu',
        'Khamoshi: The Musical',
        1996,
        'Filmfare-winning euphoric waltz celebrating freedom and skyward joy.'
      ),
      adaptedSong(
        'jl-khamoshi-the-musical-1996',
        3,
        'Jaana Suno Hum Tumpe Marte Hain',
        'Udit Narayan',
        'Khamoshi: The Musical',
        1996,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Bring the Wine',
          originalArtist: 'Paul Anka',
          originalYear: '1965',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS notes a direct note-for-note melodic parallel with Paul Anka’s 1965 crooner track "Bring the Wine".',
          originalLink: 'https://www.youtube.com/watch?v=ctFqg3tcaSU',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-khamoshi-the-musical-1996',
        4,
        'Aankhon Mein Kya',
        'Kumar Sanu',
        'Khamoshi: The Musical',
        1996
      ),
      origSong(
        'jl-khamoshi-the-musical-1996',
        5,
        'Yeh Dil Sun Raha Hai',
        'Kavita Krishnamurthy',
        'Khamoshi: The Musical',
        1996
      ),
      origSong(
        'jl-khamoshi-the-musical-1996',
        6,
        'Gaate The Pehle Akele',
        'Kavita Krishnamurthy, Shraddha Pandit, Khusnum',
        'Khamoshi: The Musical',
        1996
      ),
    ],
  },
  catalogFilm(
    'jl-return-of-jewel-thief-1996',
    'Return of Jewel Thief',
    1996,
    'Sequel crime caper featuring Dev Anand, Dharmendra, and Ashok Kumar with Anand Bakshi lyrics.',
    'O Jaan-e-Jaan',
    'Kumar Sanu & Sadhana Sargam'
  ),
  catalogFilm(
    'jl-agni-1997',
    'Agni',
    1997,
    'Late-1990s Hindi action release credited to Jatin–Lalit.',
    'Pyar Mein Dil',
    'Kumar Sanu & Kavita Krishnamurthy'
  ),
  catalogFilm(
    'jl-daava-1997',
    'Daava',
    1997,
    'Sunil Kumar Agrawal action thriller starring Akshay Kumar and Raveena Tandon.',
    'Dil Mein Hai Tu',
    'Kumar Sanu & Poornima'
  ),
  catalogFilm(
    'jl-ek-phool-teen-kante-1997',
    'Ek Phool Teen Kante',
    1997,
    'Anup Malik comedy-romance featuring Vikas Bhalla and Monica Bedi.',
    'Jaanam O Jaanam',
    'Kumar Sanu & Alka Yagnik'
  ),
  catalogFilm(
    'jl-gundagardi-1997',
    'Gundagardi',
    1997,
    '1997 action drama starring Dharmendra, Aditya Pancholi, and Ayub Khan.',
    'Jaadu Bhari Teri Aankhen',
    'Udit Narayan & Kavita Krishnamurthy'
  ),
  {
    id: 'jl-yes-boss-1997',
    directorId: 'jatin-lalit',
    title: 'Yes Boss',
    year: 1997,
    cast: 'Shah Rukh Khan, Juhi Chawla, Aditya Pancholi',
    label: 'Venus',
    significance:
      'Aziz Mirza’s romantic comedy pairing Javed Akhtar’s poetry with Jatin–Lalit’s breeziest melodies, including Filmfare-nominated "Main Koi Aisa Geet Gaoon".',
    songs: [
      origSong(
        'jl-yes-boss-1997',
        1,
        'Main Koi Aisa Geet Gaoon',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Yes Boss',
        1997,
        'Filmfare Best Playback Singer-winning acoustic guitar and flute serenade.'
      ),
      origSong(
        'jl-yes-boss-1997',
        2,
        'Chand Taare',
        'Abhijeet Bhattacharya',
        'Yes Boss',
        1997
      ),
      origSong(
        'jl-yes-boss-1997',
        3,
        'Ek Din Aap Yun Humko Mil Jayenge',
        'Kumar Sanu, Alka Yagnik',
        'Yes Boss',
        1997
      ),
      origSong(
        'jl-yes-boss-1997',
        4,
        'Chaandne Aaya Hai',
        'Udit Narayan, Alka Yagnik',
        'Yes Boss',
        1997
      ),
      adaptedSong(
        'jl-yes-boss-1997',
        5,
        'Suniye To',
        'Abhijeet Bhattacharya',
        'Yes Boss',
        1997,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Ahla Ma Feki',
          originalArtist: 'Hisham Abbas',
          originalYear: '1995',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Documented in ITWOFS as closely paralleling Egyptian pop star Hisham Abbas’s "Ahla Ma Feki" in hook contour and synth groove.',
          originalLink: 'https://www.youtube.com/watch?v=7o2KqcnKFWE',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-yes-boss-1997',
        6,
        'Jaata Hai Tu Kahan',
        'Abhijeet Bhattacharya',
        'Yes Boss',
        1997
      ),
    ],
  },
  {
    id: 'jl-bada-din-1998',
    directorId: 'jatin-lalit',
    title: 'Bada Din',
    year: 1998,
    cast: 'Shabana Azmi, Marc Robinson, Tara Deshpande, Irrfan Khan',
    label: 'Sony Music India',
    significance:
      'Anjan Dutt’s Calcutta Christmas drama with gentle acoustic arrangements and Javed Akhtar lyrics.',
    songs: [
      origSong(
        'jl-bada-din-1998',
        1,
        'Suno Zara',
        'Kumar Sanu, Alka Yagnik',
        'Bada Din',
        1998
      ),
      origSong(
        'jl-bada-din-1998',
        2,
        'Na Koi Tera',
        'Abhijeet Bhattacharya, Kavita Krishnamurthy',
        'Bada Din',
        1998
      ),
      origSong(
        'jl-bada-din-1998',
        3,
        'Oonche Neeche Parbaton',
        'Udit Narayan, Alka Yagnik',
        'Bada Din',
        1998
      ),
      origSong(
        'jl-bada-din-1998',
        4,
        'Kahta Hai Yeh Safar',
        'Kumar Sanu',
        'Bada Din',
        1998
      ),
    ],
  },
  catalogFilm(
    'jl-billa-no-302-1998',
    'Billa No. 302',
    1998,
    'Late-1990s Hindi action release credited to Jatin–Lalit.',
    'Aaja Meri Baahon Mein',
    'Kumar Sanu & Kavita Krishnamurthy'
  ),
  catalogFilm(
    'jl-dhoondte-reh-jaaoge-1998',
    'Dhoondte Reh Jaaoge!',
    1998,
    'Kumar Bhatia comedy-romance starring Shammi Kapoor and Saeed Jaffrey (1998 release).',
    'Kahan Gaya Woh Zamana',
    'Udit Narayan & Kavita Krishnamurthy'
  ),
  {
    id: 'jl-ghulam-1998',
    directorId: 'jatin-lalit',
    title: 'Ghulam',
    year: 1998,
    cast: 'Aamir Khan, Rani Mukerji, Deepak Tijori, Sharat Saxena',
    label: 'Tips',
    significance:
      'Vikram Bhatt blockbuster anchored by Aamir Khan’s street-tapori anthem "Aati Kya Khandala" and romantic duets.',
    songs: [
      origSong(
        'jl-ghulam-1998',
        1,
        'Aati Kya Khandala',
        'Aamir Khan, Alka Yagnik',
        'Ghulam',
        1998,
        'Quirky Mumbai tapori banter duet featuring Aamir Khan’s playback debut.'
      ),
      origSong(
        'jl-ghulam-1998',
        2,
        'Aankhon Se Tune Kya Keh Diya',
        'Kumar Sanu, Alka Yagnik',
        'Ghulam',
        1998
      ),
      origSong(
        'jl-ghulam-1998',
        3,
        'Jadoo Hai Tera Hi Jadoo',
        'Kumar Sanu, Alka Yagnik',
        'Ghulam',
        1998
      ),
      origSong(
        'jl-ghulam-1998',
        4,
        'Ab Naam Mohabbat Ke',
        'Udit Narayan, Alka Yagnik',
        'Ghulam',
        1998
      ),
      origSong(
        'jl-ghulam-1998',
        5,
        'Saath Jo Tera Mil Gaya',
        'Udit Narayan, Alka Yagnik',
        'Ghulam',
        1998
      ),
      origSong(
        'jl-ghulam-1998',
        6,
        'Tujhko Kya',
        'Udit Narayan, Jojo, Surjeet',
        'Ghulam',
        1998
      ),
    ],
  },
  {
    id: 'jl-jab-pyaar-kisise-hota-hai-1998',
    directorId: 'jatin-lalit',
    title: 'Jab Pyaar Kisise Hota Hai',
    year: 1998,
    cast: 'Salman Khan, Twinkle Khanna, Johnny Lever',
    label: 'Tips',
    significance:
      'Breezy Salman Khan romance pairing original Kumar Sanu ballads with two documented international pop adaptations.',
    songs: [
      origSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        1,
        'O Jaana Na Jaana',
        'Kumar Sanu, Lata Mangeshkar',
        'Jab Pyaar Kisise Hota Hai',
        1998
      ),
      origSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        2,
        'Madhosh Dil Ki Dhadkan',
        'Kumar Sanu, Lata Mangeshkar',
        'Jab Pyaar Kisise Hota Hai',
        1998
      ),
      origSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        3,
        'O Jaana Yeh Maana',
        'Kumar Sanu',
        'Jab Pyaar Kisise Hota Hai',
        1998
      ),
      adaptedSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        4,
        'Pehli Pehli Baar Jab',
        'Kumar Sanu',
        'Jab Pyaar Kisise Hota Hai',
        1998,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Born to Be Alive',
          originalArtist: 'Patrick Hernandez',
          originalYear: '1978',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents that the opening disco bassline, brass riff, and chorus rhythm directly adapt Patrick Hernandez’s 1978 hit "Born to Be Alive".',
          originalLink: 'https://www.youtube.com/watch?v=vb5a-GYty-o',
          referenceSource: 'ITWOFS',
        }
      ),
      adaptedSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        5,
        'Is Dil Mein Kya Hai',
        'Lata Mangeshkar, Udit Narayan',
        'Jab Pyaar Kisise Hota Hai',
        1998,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Mysterious Girl',
          originalArtist: 'Peter Andre',
          originalYear: '1995',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Reggae-pop lilt and melodic cadence show close rhythmic and harmonic resemblance to Peter Andre’s 1995 hit "Mysterious Girl".',
          originalLink: 'https://www.youtube.com/watch?v=iqIq4B1rgl4',
          referenceSource: 'Comparative Musicology Archives',
        }
      ),
      origSong(
        'jl-jab-pyaar-kisise-hota-hai-1998',
        6,
        'Dil Mein Basake',
        'Kumar Sanu, Alka Yagnik',
        'Jab Pyaar Kisise Hota Hai',
        1998
      ),
    ],
  },
  {
    id: 'jl-kuch-kuch-hota-hai-1998',
    directorId: 'jatin-lalit',
    title: 'Kuch Kuch Hota Hai',
    year: 1998,
    cast: 'Shah Rukh Khan, Kajol, Rani Mukerji, Salman Khan',
    label: 'Sony Music India',
    significance:
      'Karan Johar’s directorial debut and the bestselling album of 1998 (over 8 million cassettes sold), uniting sweeping original themes with "Koi Mil Gaya".',
    songs: [
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        1,
        'Kuch Kuch Hota Hai',
        'Udit Narayan, Alka Yagnik',
        'Kuch Kuch Hota Hai',
        1998,
        'Defining title ballad with signature flute motif and lush orchestration.'
      ),
      adaptedSong(
        'jl-kuch-kuch-hota-hai-1998',
        2,
        'Koi Mil Gaya',
        'Udit Narayan, Alka Yagnik, Kavita Krishnamurthy',
        'Kuch Kuch Hota Hai',
        1998,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Take That Look Off Your Face (from Song and Dance)',
          originalArtist: 'Andrew Lloyd Webber / Marti Webb',
          originalYear: '1980',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents strong melodic parallels in the opening verse and stage-pop hook drawn from Andrew Lloyd Webber’s theatrical standard.',
          originalLink: 'https://www.youtube.com/watch?v=rPFaJZaeGqA',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        3,
        'Ladki Badi Anjani Hai',
        'Kumar Sanu, Alka Yagnik',
        'Kuch Kuch Hota Hai',
        1998
      ),
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        4,
        'Saajanji Ghar Aaye',
        'Kumar Sanu, Alka Yagnik, Kavita Krishnamurthy',
        'Kuch Kuch Hota Hai',
        1998
      ),
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        5,
        'Tujhe Yaad Na Meri Aayee',
        'Alka Yagnik, Manpreet Akhtar, Udit Narayan',
        'Kuch Kuch Hota Hai',
        1998
      ),
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        6,
        'Yeh Ladka Hai Deewana',
        'Udit Narayan, Alka Yagnik',
        'Kuch Kuch Hota Hai',
        1998
      ),
      origSong(
        'jl-kuch-kuch-hota-hai-1998',
        7,
        'Raghupati Raghav',
        'Alka Yagnik, Shankar Mahadevan',
        'Kuch Kuch Hota Hai',
        1998
      ),
    ],
  },
  {
    id: 'jl-pyaar-kiya-to-darna-kya-1998',
    directorId: 'jatin-lalit',
    title: 'Pyaar Kiya To Darna Kya',
    year: 1998,
    cast: 'Salman Khan, Kajol, Arbaaz Khan, Dharmendra',
    label: 'T-Series',
    significance:
      'Multi-composer blockbuster (also featuring Himesh Reshammiya and Sajid–Wajid); ONLY the 5 songs verified to Jatin–Lalit ("O O Jaane Jaana", "Deewana Main Chala", etc.) are indexed here.',
    songs: [
      origSong(
        'jl-pyaar-kiya-to-darna-kya-1998',
        1,
        'O O Jaane Jaana',
        'Kamaal Khan',
        'Pyaar Kiya To Darna Kya',
        1998,
        'Signature acoustic guitar pop anthem written by Sameer and composed by Jatin–Lalit.'
      ),
      origSong(
        'jl-pyaar-kiya-to-darna-kya-1998',
        2,
        'Deewana Main Chala',
        'Udit Narayan',
        'Pyaar Kiya To Darna Kya',
        1998
      ),
      origSong(
        'jl-pyaar-kiya-to-darna-kya-1998',
        3,
        'Chhad Zid Karna',
        'Udit Narayan, Anuradha Paudwal',
        'Pyaar Kiya To Darna Kya',
        1998
      ),
      origSong(
        'jl-pyaar-kiya-to-darna-kya-1998',
        4,
        'Oh Baby... Ho Gaya So Ho Gaya',
        'Udit Narayan, Kavita Krishnamurthy',
        'Pyaar Kiya To Darna Kya',
        1998
      ),
      origSong(
        'jl-pyaar-kiya-to-darna-kya-1998',
        5,
        'O Sathiya O Beliya',
        'Anuradha Paudwal',
        'Pyaar Kiya To Darna Kya',
        1998
      ),
    ],
  },
  {
    id: 'jl-pyaar-to-hona-hi-tha-1998',
    directorId: 'jatin-lalit',
    title: 'Pyaar To Hona Hi Tha',
    year: 1998,
    cast: 'Ajay Devgn, Kajol, Om Puri, Kashmera Shah',
    label: 'Tips',
    significance:
      'Anees Bazmee romantic comedy whose soundtrack dominated 1998 radio via "Ajnabi Mujhko Itna Bata" and the title duet.',
    songs: [
      origSong(
        'jl-pyaar-to-hona-hi-tha-1998',
        1,
        'Ajnabi Mujhko Itna Bata',
        'Udit Narayan, Asha Bhosle',
        'Pyaar To Hona Hi Tha',
        1998
      ),
      origSong(
        'jl-pyaar-to-hona-hi-tha-1998',
        2,
        'Pyaar To Hona Hi Tha',
        'Remo Fernandes, Jaspinder Narula',
        'Pyaar To Hona Hi Tha',
        1998
      ),
      adaptedSong(
        'jl-pyaar-to-hona-hi-tha-1998',
        3,
        'Jab Kisiki Taraf Dil',
        'Kumar Sanu',
        'Pyaar To Hona Hi Tha',
        1998,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Have You Ever Really Loved a Woman?',
          originalArtist: 'Bryan Adams / Michael Kamen',
          originalYear: '1995',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Nylon-string Spanish flamenco guitar intro and rhythmic phrasing draw stylistic inspiration from Bryan Adams’s 1995 ballad.',
          originalLink: 'https://www.youtube.com/watch?v=diKIYv8tMC8',
          referenceSource: 'Musicology Comparisons',
        }
      ),
      origSong(
        'jl-pyaar-to-hona-hi-tha-1998',
        4,
        'Aashiq Hoon Main',
        'Udit Narayan, Asha Bhosle',
        'Pyaar To Hona Hi Tha',
        1998
      ),
      origSong(
        'jl-pyaar-to-hona-hi-tha-1998',
        5,
        'Jo Hona Hai',
        'Asha Bhosle, Mohammad Aziz, Vinod Rathod',
        'Pyaar To Hona Hi Tha',
        1998
      ),
    ],
  },
  catalogFilm(
    'jl-saazish-1998',
    'Saazish',
    1998,
    'Sudhir R. Nair thriller starring Mithun Chakraborty and Pooja Batra.',
    'Zindagi Mein Hum',
    'Kumar Sanu & Sadhana Sargam'
  ),
  {
    id: 'jl-dil-kya-kare-1999',
    directorId: 'jatin-lalit',
    title: 'Dil Kya Kare',
    year: 1999,
    cast: 'Ajay Devgn, Kajol, Mahima Chaudhry',
    label: 'T-Series',
    significance:
      'Prakash Jha family drama remembered for Kumar Sanu’s soaring romantic track "Do Dilon Ki".',
    songs: [
      origSong(
        'jl-dil-kya-kare-1999',
        1,
        'Do Dilon Ki',
        'Anuradha Paudwal, Udit Narayan',
        'Dil Kya Kare',
        1999
      ),
      origSong(
        'jl-dil-kya-kare-1999',
        2,
        'Pyar Ke Liye',
        'Alka Yagnik',
        'Dil Kya Kare',
        1999
      ),
      origSong(
        'jl-dil-kya-kare-1999',
        3,
        'Badal Bijli Chandan Pani',
        'Abhijeet Bhattacharya',
        'Dil Kya Kare',
        1999
      ),
      origSong(
        'jl-dil-kya-kare-1999',
        4,
        'Dil Kya Kare',
        'Udit Narayan, Alka Yagnik',
        'Dil Kya Kare',
        1999
      ),
    ],
  },
  {
    id: 'jl-dillagi-1999',
    directorId: 'jatin-lalit',
    title: 'Dillagi',
    year: 1999,
    cast: 'Sunny Deol, Bobby Deol, Urmila Matondkar',
    label: 'Saregama',
    significance:
      'Multi-composer album (shared with Shankar–Ehsaan–Loy, Anand–Milind, and Sukhwinder Singh); ONLY Jatin–Lalit’s 4 verified compositions are cataloged here.',
    songs: [
      adaptedSong(
        'jl-dillagi-1999',
        1,
        'Haan Haan Yeh Pyar Hai',
        'Abhijeet Bhattacharya',
        'Dillagi',
        1999,
        {
          adaptationType: 'copied',
          originalSongTitle: "Can't Take My Eyes Off You",
          originalArtist: 'Frankie Valli / Bob Crewe & Bob Gaudio',
          originalYear: '1967',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents a direct adaptation of the classic verse and brass-chorus progression from Frankie Valli’s 1967 pop standard.',
          originalLink: 'https://www.youtube.com/watch?v=J36z7AnhvOM',
          referenceSource: 'ITWOFS',
        }
      ),
      adaptedSong(
        'jl-dillagi-1999',
        2,
        'Koi Nahin Aisa',
        'Amit Kumar, Alka Yagnik',
        'Dillagi',
        1999,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Mony Mony',
          originalArtist: 'Tommy James and the Shondells',
          originalYear: '1968',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS highlights the upbeat garage-rock riff and refrain cadence closely matching Tommy James and the Shondells’ 1968 single.',
          originalLink: 'https://www.youtube.com/watch?v=BPSEalNoMMw',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-dillagi-1999',
        3,
        'Yeh Zamin Hai',
        'Roopkumar Rathod',
        'Dillagi',
        1999
      ),
      origSong(
        'jl-dillagi-1999',
        4,
        'Main Kya Karoon',
        'Kumar Sanu',
        'Dillagi',
        1999
      ),
    ],
  },
  {
    id: 'jl-khoobsurat-1999',
    directorId: 'jatin-lalit',
    title: 'Khoobsurat',
    year: 1999,
    cast: 'Sanjay Dutt, Urmila Matondkar, Om Puri, Farida Jalal',
    label: 'Venus',
    significance:
      'Sanjay Chhel family comedy featuring hit Abhijeet and Kavita Krishnamurthy melodies.',
    songs: [
      origSong(
        'jl-khoobsurat-1999',
        1,
        'Bahut Khoobsurat Ho',
        'Abhijeet Bhattacharya, Neerja Pandit',
        'Khoobsurat',
        1999
      ),
      origSong(
        'jl-khoobsurat-1999',
        2,
        'Mera Ek Sapna Hai',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Khoobsurat',
        1999
      ),
      origSong(
        'jl-khoobsurat-1999',
        3,
        'Aana Zara Paas To Aa',
        'Kumar Sanu, Anuradha Paudwal',
        'Khoobsurat',
        1999
      ),
      origSong(
        'jl-khoobsurat-1999',
        4,
        'Ghash Kha Ke Ho Gaya',
        'Sukhwinder Singh',
        'Khoobsurat',
        1999
      ),
    ],
  },
  catalogFilm(
    'jl-pyaar-koi-khel-nahin-1999',
    'Pyaar Koi Khel Nahin',
    1999,
    'Subhash Sehgal family drama starring Sunny Deol and Mahima Chaudhry.',
    'Chand Sa Chehra',
    'Kumar Sanu & Alka Yagnik'
  ),
  {
    id: 'jl-sangharsh-1999',
    directorId: 'jatin-lalit',
    title: 'Sangharsh',
    year: 1999,
    cast: 'Akshay Kumar, Preity Zinta, Ashutosh Rana',
    label: 'Sony Music India',
    significance:
      'Tanuja Chandra psychological thriller paired with Sonu Nigam’s soaring romantic hit "Mujhe Raat Din Bas".',
    songs: [
      origSong(
        'jl-sangharsh-1999',
        1,
        'Mujhe Raat Din Bas',
        'Sonu Nigam',
        'Sangharsh',
        1999,
        'Signature early Sonu Nigam romantic solo backed by acoustic strings.'
      ),
      origSong(
        'jl-sangharsh-1999',
        2,
        'Dil Ka Qaraar',
        'Sonu Nigam, Shraddha Pandit',
        'Sangharsh',
        1999
      ),
      origSong(
        'jl-sangharsh-1999',
        3,
        'Hum Badi Door Chale Aaye Hain',
        'Sonu Nigam, Shraddha Pandit',
        'Sangharsh',
        1999
      ),
      origSong(
        'jl-sangharsh-1999',
        4,
        'Naraz Savera Hai',
        'Kumar Sanu, Shraddha Pandit',
        'Sangharsh',
        1999
      ),
    ],
  },
  {
    id: 'jl-sarfarosh-1999',
    directorId: 'jatin-lalit',
    title: 'Sarfarosh',
    year: 1999,
    cast: 'Aamir Khan, Sonali Bendre, Naseeruddin Shah, Mukesh Rishi',
    label: 'T-Series',
    significance:
      'John Matthew Matthan’s acclaimed thriller featuring Jagjit Singh’s immortal ghazal "Hoshwalon Ko Khabar Kya" and Filmi-pop staples.',
    songs: [
      origSong(
        'jl-sarfarosh-1999',
        1,
        'Hoshwalon Ko Khabar Kya',
        'Jagjit Singh',
        'Sarfarosh',
        1999,
        'Timeless acoustic ghazal written by Nida Fazli, blending sitar and tabla with Jagjit Singh’s velvet baritone.'
      ),
      origSong(
        'jl-sarfarosh-1999',
        2,
        'Jo Haal Dil Ka',
        'Kumar Sanu, Alka Yagnik',
        'Sarfarosh',
        1999,
        'Rain-drenched romantic hit led by rhythmic 12-string guitar strumming.'
      ),
      origSong(
        'jl-sarfarosh-1999',
        3,
        'Zindagi Maut Na Ban Jaye',
        'Sonu Nigam, Roopkumar Rathod',
        'Sarfarosh',
        1999
      ),
      origSong(
        'jl-sarfarosh-1999',
        4,
        'Is Deewane Ladke Ko',
        'Amirbai / Alka Yagnik, Kavita Krishnamurthy',
        'Sarfarosh',
        1999
      ),
      origSong(
        'jl-sarfarosh-1999',
        5,
        'Meri Raton Ki Neendein',
        'Alka Yagnik',
        'Sarfarosh',
        1999
      ),
    ],
  },
  {
    id: 'jl-silsila-hai-pyar-ka-1999',
    directorId: 'jatin-lalit',
    title: 'Silsila Hai Pyar Ka',
    year: 1999,
    cast: 'Chandrachur Singh, Karisma Kapoor, Shakti Kapoor',
    label: 'Venus',
    significance:
      'Shrabani Deodhar musical romance with Alka Yagnik and Kumar Sanu duets.',
    songs: [
      origSong(
        'jl-silsila-hai-pyar-ka-1999',
        1,
        'Yeh Silsila Hai Pyar Ka',
        'Kumar Sanu, Alka Yagnik',
        'Silsila Hai Pyar Ka',
        1999
      ),
      origSong(
        'jl-silsila-hai-pyar-ka-1999',
        2,
        'Lo Peesh Hai',
        'Sonu Nigam, Alka Yagnik',
        'Silsila Hai Pyar Ka',
        1999
      ),
    ],
  },
  {
    id: 'jl-vaastav-the-reality-1999',
    directorId: 'jatin-lalit',
    title: 'Vaastav: The Reality',
    year: 1999,
    cast: 'Sanjay Dutt, Namrata Shirodkar, Sanjay Narvekar',
    label: 'T-Series',
    significance:
      'Mahesh Manjrekar’s landmark gangster drama; Jatin–Lalit composed the primary vocal songs including "Meri Duniya Hai" and the Ganpati Aarti (while Rahul Ranade scored "Apni Maa" & theme cues).',
    songs: [
      origSong(
        'jl-vaastav-the-reality-1999',
        1,
        'Meri Duniya Hai',
        'Sonu Nigam, Kavita Krishnamurthy',
        'Vaastav: The Reality',
        1999,
        'Beloved tender romantic duet written by Sameer.'
      ),
      origSong(
        'jl-vaastav-the-reality-1999',
        2,
        'Har Taraf Hai Ye Shor',
        'Vinod Rathod, Atul Kale',
        'Vaastav: The Reality',
        1999
      ),
      origSong(
        'jl-vaastav-the-reality-1999',
        3,
        'Tere Pyar Ne',
        'Kavita Krishnamurthy',
        'Vaastav: The Reality',
        1999
      ),
      adaptedSong(
        'jl-vaastav-the-reality-1999',
        4,
        'Shendur Laal Chadhayo (Aarti)',
        'Ravindra Sathe',
        'Vaastav: The Reality',
        1999,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Traditional Marathi Ganpati Aarti',
          originalArtist: 'Traditional Maharashtrian Devotional Chant',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Traditional Marathi Ganesha aarti adapted with full cinema dhol-tasha and brass percussion.',
          originalLink: 'https://www.youtube.com/watch?v=0iTb6b8F5to',
          referenceSource: 'Soundtrack & Devotional Archive',
        }
      ),
      origSong(
        'jl-vaastav-the-reality-1999',
        5,
        'Jawani Se Ab Jung',
        'Preeta Mazumdar',
        'Vaastav: The Reality',
        1999
      ),
    ],
  },

  // =====================================================================
  // 2000–2002: MOHABBATEIN, KABHI KHUSHI KABHIE GHAM & ENSEMBLE SOUNDTRACKS
  // =====================================================================
  {
    id: 'jl-dhai-akshar-prem-ke-2000',
    directorId: 'jatin-lalit',
    title: 'Dhai Akshar Prem Ke',
    year: 2000,
    cast: 'Abhishek Bachchan, Aishwarya Rai',
    label: 'Tips',
    significance:
      'Raj Kanwar romance with Anuradha Paudwal and Babul Supriyo’s lyrical ballads.',
    songs: [
      origSong(
        'jl-dhai-akshar-prem-ke-2000',
        1,
        'Dhai Akshar Prem Ke',
        'Anuradha Paudwal, Babul Supriyo',
        'Dhai Akshar Prem Ke',
        2000
      ),
      origSong(
        'jl-dhai-akshar-prem-ke-2000',
        2,
        'Koi Taza Hawa',
        'Babul Supriyo',
        'Dhai Akshar Prem Ke',
        2000
      ),
      origSong(
        'jl-dhai-akshar-prem-ke-2000',
        3,
        'Ek Haseen Ladki',
        'Babul Supriyo, Sudesh Bhosle',
        'Dhai Akshar Prem Ke',
        2000
      ),
    ],
  },
  {
    id: 'jl-mohabbatein-2000',
    directorId: 'jatin-lalit',
    title: 'Mohabbatein',
    year: 2000,
    cast: 'Amitabh Bachchan, Shah Rukh Khan, Aishwarya Rai, Uday Chopra, Jimmy Sheirgill',
    label: 'YRF Music / Saregama',
    significance:
      'Aditya Chopra’s sweeping campus symphony and the highest-selling Bollywood album of 2000 (earning Jatin–Lalit their fifth straight Filmfare nomination).',
    songs: [
      origSong(
        'jl-mohabbatein-2000',
        1,
        'Humko Humise Chura Lo',
        'Lata Mangeshkar, Udit Narayan',
        'Mohabbatein',
        2000,
        'Majestic violin-led Yash Raj anthem built around Raag Shivaranjani hues.'
      ),
      origSong(
        'jl-mohabbatein-2000',
        2,
        'Chalte Chalte',
        'Shweta Pandit, Sonali Bhatawdekar, Pritha Mazumdar, Udhbav, Manohar Shetty, Ishaan',
        'Mohabbatein',
        2000,
        'Ensemble Gurukul chorus song celebrating youthful romance.'
      ),
      origSong(
        'jl-mohabbatein-2000',
        3,
        'Aankhein Khuli',
        'Lata Mangeshkar, Udit Narayan & Chorus',
        'Mohabbatein',
        2000
      ),
      origSong(
        'jl-mohabbatein-2000',
        4,
        'Soni Soni',
        'Udit Narayan, Jaspinder Narula & Chorus',
        'Mohabbatein',
        2000
      ),
      origSong(
        'jl-mohabbatein-2000',
        5,
        'Pairon Mein Bandhan Hai',
        'Udhbav, Manohar Shetty, Ishaan, Shweta Pandit',
        'Mohabbatein',
        2000
      ),
      origSong(
        'jl-mohabbatein-2000',
        6,
        'Zinda Rehti Hain Unki Mohabbatein',
        'Lata Mangeshkar, Udit Narayan',
        'Mohabbatein',
        2000
      ),
    ],
  },
  {
    id: 'jl-phir-bhi-dil-hai-hindustani-2000',
    directorId: 'jatin-lalit',
    title: 'Phir Bhi Dil Hai Hindustani',
    year: 2000,
    cast: 'Shah Rukh Khan, Juhi Chawla, Paresh Rawal',
    label: 'Sony Music India',
    significance:
      'Dreamz Unlimited’s maiden production uniting Javed Akhtar satire ("I Am the Best") with silky romantic duets.',
    songs: [
      origSong(
        'jl-phir-bhi-dil-hai-hindustani-2000',
        1,
        'Phir Bhi Dil Hai Hindustani',
        'Udit Narayan',
        'Phir Bhi Dil Hai Hindustani',
        2000
      ),
      origSong(
        'jl-phir-bhi-dil-hai-hindustani-2000',
        2,
        'Aur Kya',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Phir Bhi Dil Hai Hindustani',
        2000
      ),
      origSong(
        'jl-phir-bhi-dil-hai-hindustani-2000',
        3,
        'I Am the Best',
        'Abhijeet Bhattacharya, Jaspinder Narula',
        'Phir Bhi Dil Hai Hindustani',
        2000
      ),
      origSong(
        'jl-phir-bhi-dil-hai-hindustani-2000',
        4,
        'Banke Tera Jogi',
        'Sonu Nigam, Alka Yagnik',
        'Phir Bhi Dil Hai Hindustani',
        2000
      ),
      origSong(
        'jl-phir-bhi-dil-hai-hindustani-2000',
        5,
        'Kuch To Bata',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Phir Bhi Dil Hai Hindustani',
        2000
      ),
    ],
  },
  {
    id: 'jl-raju-chacha-2000',
    directorId: 'jatin-lalit',
    title: 'Raju Chacha',
    year: 2000,
    cast: 'Ajay Devgn, Kajol, Rishi Kapoor, Sanjay Dutt',
    label: 'T-Series',
    significance:
      'Anil Devgan family fantasy featuring ornate orchestral choruses and an ITWOFS-documented Broadway musical adaptation.',
    songs: [
      adaptedSong(
        'jl-raju-chacha-2000',
        1,
        'Yeh Wada Raha',
        'Shaan, Shraddha Pandit, Chorus',
        'Raju Chacha',
        2000,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Day by Day (from Godspell)',
          originalArtist: 'Stephen Schwartz',
          originalYear: '1971',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents that the central melodic hook and vocal harmony closely mirror Stephen Schwartz’s stage hit "Day by Day".',
          originalLink: 'https://www.youtube.com/watch?v=W6gLlSmZfW0',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-raju-chacha-2000',
        2,
        'Tune Mujhe Pehchana Nahin',
        'Shaan',
        'Raju Chacha',
        2000
      ),
      origSong(
        'jl-raju-chacha-2000',
        3,
        'Dil Ko Zara Sa Aaram Denge',
        'Kumar Sanu, Alka Yagnik',
        'Raju Chacha',
        2000
      ),
    ],
  },
  {
    id: 'jl-albela-2001',
    directorId: 'jatin-lalit',
    title: 'Albela',
    year: 2001,
    cast: 'Govinda, Aishwarya Rai, Jackie Shroff, Namrata Shirodkar',
    label: 'Tips',
    significance:
      'Deepak Sareen’s coastal romance blending breezy turn-of-the-millennium Indi-pop beats with Kavita Krishnamurthy and Alka Yagnik.',
    songs: [
      origSong(
        'jl-albela-2001',
        1,
        'Kaho To Zara',
        'Kumar Sanu, Alka Yagnik',
        'Albela',
        2001
      ),
      origSong(
        'jl-albela-2001',
        2,
        'Pyaar Ke Jadoo',
        'Udit Narayan, Alka Yagnik',
        'Albela',
        2001
      ),
      origSong(
        'jl-albela-2001',
        3,
        'Hai Mera Dil Tu',
        'Babul Supriyo, Alka Yagnik',
        'Albela',
        2001
      ),
      origSong(
        'jl-albela-2001',
        4,
        'Hato Tum Baju',
        'Sonu Nigam',
        'Albela',
        2001
      ),
    ],
  },
  catalogFilm(
    'jl-censor-2001',
    'Censor',
    2001,
    'Dev Anand social satire scored by Jatin–Lalit.',
    'Hum Jo Mile',
    'Udit Narayan & Kavita Krishnamurthy'
  ),
  {
    id: 'jl-kabhi-khushi-kabhie-gham-2001',
    directorId: 'jatin-lalit',
    title: 'Kabhi Khushi Kabhie Gham...',
    year: 2001,
    cast: 'Amitabh Bachchan, Jaya Bachchan, Shah Rukh Khan, Kajol, Hrithik Roshan, Kareena Kapoor',
    label: 'Sony Music India',
    significance:
      'Multi-composer cultural juggernaut (shared with Sandesh Shandilya and Aadesh Shrivastava); ONLY Jatin–Lalit’s 5 verified compositions ("Kabhi Khushi Kabhie Gham", "Bole Chudiyan", "Yeh Ladki Hai Allah") are indexed here.',
    songs: [
      origSong(
        'jl-kabhi-khushi-kabhie-gham-2001',
        1,
        'Kabhi Khushi Kabhie Gham',
        'Lata Mangeshkar',
        'Kabhi Khushi Kabhie Gham',
        2001,
        'Iconic family theme anchored by Lata Mangeshkar’s timeless vocal presence and orchestral bells.'
      ),
      origSong(
        'jl-kabhi-khushi-kabhie-gham-2001',
        2,
        'Bole Chudiyan',
        'Amit Kumar, Sonu Nigam, Alka Yagnik, Udit Narayan, Kavita Krishnamurthy',
        'Kabhi Khushi Kabhie Gham',
        2001,
        'High-energy Karwa Chauth celebration medley orchestrated by Jatin–Lalit.'
      ),
      origSong(
        'jl-kabhi-khushi-kabhie-gham-2001',
        3,
        'Yeh Ladki Hai Allah',
        'Udit Narayan, Alka Yagnik',
        'Kabhi Khushi Kabhie Gham',
        2001
      ),
      origSong(
        'jl-kabhi-khushi-kabhie-gham-2001',
        4,
        'Kabhi Khushi Kabhie Gham (Sad 1)',
        'Sonu Nigam',
        'Kabhi Khushi Kabhie Gham',
        2001
      ),
      origSong(
        'jl-kabhi-khushi-kabhie-gham-2001',
        5,
        'Kabhi Khushi Kabhie Gham (Sad 2)',
        'Lata Mangeshkar',
        'Kabhi Khushi Kabhie Gham',
        2001
      ),
    ],
  },
  catalogFilm(
    'jl-kasam-2001',
    'Kasam',
    2001,
    'Shibu Mitra drama starring Sunny Deol and Naseeruddin Shah.',
    'O Sanam Kuja',
    'Udit Narayan & Alka Yagnik'
  ),
  catalogFilm(
    'jl-raja-ko-rani-se-pyar-ho-gaya-2001',
    'Raja Ko Rani Se Pyar Ho Gaya',
    2001,
    'T.K. Rajeev Kumar romantic comedy starring Arvind Swamy and Manisha Koirala.',
    'Aao Sunen Lehron Se',
    'Anuradha Paudwal & Udit Narayan'
  ),
  {
    id: 'jl-aankhen-2002',
    directorId: 'jatin-lalit',
    title: 'Aankhen',
    year: 2002,
    cast: 'Amitabh Bachchan, Akshay Kumar, Arjun Rampal, Paresh Rawal, Sushmita Sen',
    label: 'Sony Music India',
    significance:
      'Vipul Amrutlal Shah’s heist thriller featuring the slick dance track "Chalka Chalka Re" and Aadesh Shrivastava guest compositions (Jatin–Lalit tracks indexed).',
    songs: [
      origSong(
        'jl-aankhen-2002',
        1,
        'Chalka Chalka Re',
        'Alka Yagnik, Richa Sharma, Jaspinder Narula',
        'Aankhen',
        2002
      ),
      origSong(
        'jl-aankhen-2002',
        2,
        'Phatela Jeb Sil Jayega',
        'Nitin Raikwar, Aamir Ali',
        'Aankhen',
        2002
      ),
    ],
  },
  {
    id: 'jl-kehtaa-hai-dil-baar-baar-2002',
    directorId: 'jatin-lalit',
    title: 'Kehtaa Hai Dil Baar Baar',
    year: 2002,
    cast: 'Jimmy Sheirgill, Kim Sharma, Paresh Rawal',
    label: 'Venus',
    significance:
      'Rahul Dholakia NRI romantic comedy scored by Jatin–Lalit with Sameer lyrics.',
    songs: [
      origSong(
        'jl-kehtaa-hai-dil-baar-baar-2002',
        1,
        'Deewano Ko Pata Hai',
        'Udit Narayan, Sadhana Sargam',
        'Kehtaa Hai Dil Baar Baar',
        2002
      ),
      origSong(
        'jl-kehtaa-hai-dil-baar-baar-2002',
        2,
        'Dhol Baje',
        'Udit Narayan, Kavita Krishnamurthy',
        'Kehtaa Hai Dil Baar Baar',
        2002
      ),
    ],
  },
  {
    id: 'jl-kranti-2002',
    directorId: 'jatin-lalit',
    title: 'Kranti',
    year: 2002,
    cast: 'Bobby Deol, Vinod Khanna, Amisha Patel',
    label: 'Tips',
    significance:
      'Naresh Malhotra action drama featuring Anand Bakshi’s final collaborative lyrics with Jatin–Lalit.',
    songs: [
      origSong(
        'jl-kranti-2002',
        1,
        'Dil Mein Dard Sa Jaga Hai',
        'Udit Narayan, Alka Yagnik',
        'Kranti',
        2002
      ),
      origSong(
        'jl-kranti-2002',
        2,
        'Mera Dil Tu Le Le',
        'Shaan, Sunidhi Chauhan',
        'Kranti',
        2002
      ),
    ],
  },
  catalogFilm(
    'jl-soch-2002',
    'Soch',
    2002,
    'Sushen Bhatnagar suspense thriller starring Sanjay Kapoor and Raveena Tandon.',
    'Tohe Leke',
    'Richa Sharma & Sonu Nigam'
  ),
  catalogFilm(
    'jl-tum-jiyo-hazaro-saal-2002',
    'Tum Jiyo Hazaro Saal',
    2002,
    'Delayed Hindi release featuring Jatin–Lalit romantic duets.',
    'Hum Tumse Na Kuch Keh Paaye',
    'Kumar Sanu & Alka Yagnik'
  ),
  catalogFilm(
    'jl-waah-tera-kya-kehna-2002',
    'Waah! Tera Kya Kehna',
    2002,
    'Manoj Agrawal comedy starring Govinda, Raveena Tandon, and Preeti Jhangiani.',
    'I Want Money',
    'Anuradha Sriram & Udit Narayan'
  ),

  // =====================================================================
  // 2003–2008: CHALTE CHALTE, HAASIL, HUM TUM, FANAA & FINAL JOINT WORKS
  // =====================================================================
  {
    id: 'jl-chalte-chalte-2003',
    directorId: 'jatin-lalit',
    title: 'Chalte Chalte',
    year: 2003,
    cast: 'Shah Rukh Khan, Rani Mukerji, Jas Arora',
    label: 'T-Series',
    significance:
      'Aziz Mirza’s hit marital romance shared with Aadesh Shrivastava; ONLY Jatin–Lalit’s 3 verified compositions ("Tauba Tumhare Ishare", "Chalte Chalte", "Dagariya Chalo") are indexed here.',
    songs: [
      origSong(
        'jl-chalte-chalte-2003',
        1,
        'Tauba Tumhare Ishare',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Chalte Chalte',
        2003,
        'Grecian-coastline acoustic ballad written by Javed Akhtar and composed by Jatin–Lalit.'
      ),
      origSong(
        'jl-chalte-chalte-2003',
        2,
        'Chalte Chalte (Title Track)',
        'Abhijeet Bhattacharya, Alka Yagnik',
        'Chalte Chalte',
        2003
      ),
      origSong(
        'jl-chalte-chalte-2003',
        3,
        'Dagariya Chalo',
        'Udit Narayan, Alka Yagnik',
        'Chalte Chalte',
        2003
      ),
    ],
  },
  {
    id: 'jl-haasil-2003',
    directorId: 'jatin-lalit',
    title: 'Haasil',
    year: 2003,
    cast: 'Jimmy Sheirgill, Hrishitaa Bhatt, Irrfan Khan, Ashutosh Rana',
    label: 'T-Series',
    significance:
      'Tigmanshu Dhulia’s cult Allahabad campus-politics drama featuring poetic ballads alongside an ITWOFS-noted progressive-rock parallel.',
    songs: [
      adaptedSong(
        'jl-haasil-2003',
        1,
        'Aankhon Mein Tumhari',
        'Roopkumar Rathod, Sadhana Sargam',
        'Haasil',
        2003,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Psychobabble',
          originalArtist: 'The Alan Parsons Project',
          originalYear: '1982',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'ITWOFS documents that the synth-guitar prelude and brooding verse figure closely recall The Alan Parsons Project’s 1982 progressive pop track "Psychobabble".',
          originalLink: 'https://www.youtube.com/watch?v=mBjChU0ewrA',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-haasil-2003',
        2,
        'Ab Ghar Aaja',
        'K.K., Vasundhara Das',
        'Haasil',
        2003
      ),
      origSong(
        'jl-haasil-2003',
        3,
        'Tu Hi Tu',
        'Javed Ali',
        'Haasil',
        2003
      ),
    ],
  },
  {
    id: 'jl-hum-tum-2004',
    directorId: 'jatin-lalit',
    title: 'Hum Tum',
    year: 2004,
    cast: 'Saif Ali Khan, Rani Mukerji, Kirron Kher, Rishi Kapoor',
    label: 'YRF Music',
    significance:
      'Kunal Kohli’s urban romantic comedy uniting Prasoon Joshi’s witty lyrics with Babul Supriyo’s title ballad and two Middle Eastern / Persian pop adaptations documented on ITWOFS.',
    songs: [
      origSong(
        'jl-hum-tum-2004',
        1,
        'Hum Tum (Saansein Ko Saansein Mein)',
        'Babul Supriyo, Alka Yagnik',
        'Hum Tum',
        2004,
        'Lush rain ballad with minimalist piano and acoustic strings.'
      ),
      adaptedSong(
        'jl-hum-tum-2004',
        2,
        'Ladki Kyon Na Jane Kyon',
        'Shaan, Alka Yagnik',
        'Hum Tum',
        2004,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Royaa',
          originalArtist: 'Andy (Andranik Madadian)',
          originalYear: '2000',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'ITWOFS documents that the bouncy acoustic guitar riff and conversational mukhda melody closely mirror Persian-American pop star Andy’s "Royaa".',
          originalLink: 'https://www.youtube.com/watch?v=e4fg5wHH-RU',
          referenceSource: 'ITWOFS',
        }
      ),
      adaptedSong(
        'jl-hum-tum-2004',
        3,
        'Chak De',
        'Sonu Nigam, Sadhana Sargam',
        'Hum Tum',
        2004,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Yalla Ya Shabab',
          originalArtist: 'Ragheb Alama',
          originalYear: '2001',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'ITWOFS identifies the hook and Middle Eastern darbuka-pop groove as closely adapted from Lebanese singer Ragheb Alama’s "Yalla Ya Shabab".',
          originalLink: 'https://www.youtube.com/watch?v=oqIy6U5gqgE',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'jl-hum-tum-2004',
        4,
        'Gore Gore Se Chore',
        'Alka Yagnik',
        'Hum Tum',
        2004
      ),
      origSong(
        'jl-hum-tum-2004',
        5,
        'Mere Dil Vich Hum Tum',
        'Udit Narayan, Alka Yagnik',
        'Hum Tum',
        2004
      ),
    ],
  },
  catalogFilm(
    'jl-rok-sako-to-rok-lo-2004',
    'Rok Sako To Rok Lo',
    2004,
    'Arindam Chaudhuri campus-sports drama starring Sunny Deol and Yash Pandit.',
    'Tera Gham',
    'Sonu Nigam & Alka Yagnik'
  ),
  catalogFilm(
    'jl-chand-sa-roshan-chehra-2005',
    'Chand Sa Roshan Chehra',
    2005,
    'Shabah Shamsi romantic drama introducing Tamannaah Bhatia and Samir Aftab.',
    'Aage Aage Chahat Chali',
    'Udit Narayan'
  ),
  catalogFilm(
    'jl-khamoshh-khauff-ki-raat-2005',
    'Khamoshh... Khauff Ki Raat',
    2005,
    'Deepak Tijori mystery thriller starring Juhi Chawla and Shilpa Shetty.',
    'Dil Deewana',
    'Sonu Nigam & Alka Yagnik'
  ),
  {
    id: 'jl-pyaar-mein-twist-2005',
    directorId: 'jatin-lalit',
    title: 'Pyaar Mein Twist',
    year: 2005,
    cast: 'Rishi Kapoor, Dimple Kapadia, Sammir Dattani',
    label: 'T-Series',
    significance:
      'Hriday Shetty mature-romance comedy remembered for Shreya Ghoshal’s "Pal Tham Gaya Hai".',
    songs: [
      origSong(
        'jl-pyaar-mein-twist-2005',
        1,
        'Pal Tham Gaya Hai',
        'Sonu Nigam, Shreya Ghoshal',
        'Pyaar Mein Twist',
        2005
      ),
      origSong(
        'jl-pyaar-mein-twist-2005',
        2,
        'Khullam Khulla Pyaar Karen',
        'Sunidhi Chauhan, Babul Supriyo',
        'Pyaar Mein Twist',
        2005
      ),
    ],
  },
  catalogFilm(
    'jl-revati-2005',
    'Revati',
    2005,
    'Faisal Saif social drama starring Kashmera Shah and Kiran Kumar.',
    'Milke Bhi Hum Mile Na',
    'Shreya Ghoshal'
  ),
  catalogFilm(
    'jl-sab-kuch-hai-kuch-bhi-nahi-2005',
    'Sab Kuch Hai Kuch Bhi Nahi',
    2005,
    'Abhik Bhanu drama starring Sachit Patil and Puja Gupta.',
    'Yeh Dil Kya Kare',
    'Udit Narayan & Alka Yagnik'
  ),
  {
    id: 'jl-zameer-the-fire-within-2005',
    directorId: 'jatin-lalit',
    title: 'Zameer: The Fire Within',
    year: 2005,
    cast: 'Ajay Devgn, Ameesha Patel, Mahima Chaudhry',
    label: 'T-Series',
    significance:
      'Shared with Nikhil–Vinay; ONLY the 5 verified tracks composed by Jatin–Lalit ("Pardesi Pardesi", "Zindagi Ke Faisle Mein", etc.) are cataloged here.',
    songs: [
      origSong(
        'jl-zameer-the-fire-within-2005',
        1,
        'Pardesi Pardesi',
        'Kumar Sanu, Alka Yagnik, Sapna Awasthi',
        'Zameer: The Fire Within',
        2005
      ),
      origSong(
        'jl-zameer-the-fire-within-2005',
        2,
        'Zindagi Ke Faisle Mein',
        'Udit Narayan',
        'Zameer: The Fire Within',
        2005
      ),
      origSong(
        'jl-zameer-the-fire-within-2005',
        3,
        'Tere Pyar Ne Deewana',
        'Babul Supriyo, Alka Yagnik',
        'Zameer: The Fire Within',
        2005
      ),
      origSong(
        'jl-zameer-the-fire-within-2005',
        4,
        'Dil Ye Dua De Raha Hai Sanam',
        'Udit Narayan, Kavita Krishnamurthy',
        'Zameer: The Fire Within',
        2005
      ),
      origSong(
        'jl-zameer-the-fire-within-2005',
        5,
        'Kum Nahin Kisi Se',
        'Kavita Krishnamurthy',
        'Zameer: The Fire Within',
        2005
      ),
    ],
  },
  {
    id: 'jl-fanaa-2006',
    directorId: 'jatin-lalit',
    title: 'Fanaa',
    year: 2006,
    cast: 'Aamir Khan, Kajol, Rishi Kapoor, Tabu',
    label: 'YRF Music',
    significance:
      'Jatin–Lalit’s monumental swan song as a joint duo before parting ways in 2006—pairing Prasoon Joshi’s shayari with "Chand Sifarish" and "Mere Haath Mein" (followed only by a few delayed joint recordings like Mr. White Mr. Black).',
    songs: [
      origSong(
        'jl-fanaa-2006',
        1,
        'Chand Sifarish',
        'Shaan, Kailash Kher',
        'Fanaa',
        2006,
        'Iconic whistle-hook romantic anthem earning Shaan and Prasoon Joshi Filmfare Awards.'
      ),
      origSong(
        'jl-fanaa-2006',
        2,
        'Mere Haath Mein',
        'Sonu Nigam, Sunidhi Chauhan, Aamir Khan, Kajol',
        'Fanaa',
        2006,
        'Delicate unplugged shayari-woven duet accented by acoustic guitar and strings.'
      ),
      origSong(
        'jl-fanaa-2006',
        3,
        'Des Rangila',
        'Mahalakshmi Iyer',
        'Fanaa',
        2006
      ),
      origSong(
        'jl-fanaa-2006',
        4,
        'Dekho Na',
        'Sonu Nigam, Sunidhi Chauhan',
        'Fanaa',
        2006
      ),
      adaptedSong(
        'jl-fanaa-2006',
        5,
        'Chanda Chamke',
        'Babul Supriyo, Mahalakshmi Iyer, Master Akshay Bhagwat',
        'Fanaa',
        2006,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Al-Samra Wil Beyda',
          originalArtist: 'Miami Group (Kuwait)',
          originalYear: '2000',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Originally developed as "Yaara Yaara" during Hum Tum sessions, ITWOFS documents the rhythmic hook as closely paralleling Kuwaiti band Miami Group’s "Al-Samra Wil Beyda".',
          originalLink: 'https://www.youtube.com/watch?v=pC4RAxbSkOI',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  catalogFilm(
    'jl-mera-dil-leke-dekkho-2006',
    'Mera Dil Leke Dekkho',
    2006,
    'Rohit Kaushik romantic comedy starring Jackie Shroff and Koel Purie.',
    'Mera Dil Leke Dekkho',
    'Abhijeet Bhattacharya & Alka Yagnik'
  ),
  catalogFilm(
    'jl-mr-white-mr-black-2008',
    'Mr. White Mr. Black',
    2008,
    'Delayed joint-banner comedy starring Suniel Shetty and Arshad Warsi (carrying Jatin–Lalit’s pre-split compositions alongside guest tracks by Shamir Tandon and Tauseef Akhtar).',
    'Tu Makke Di Roti',
    'Mika Singh & Daler Mehndi'
  ),
];
