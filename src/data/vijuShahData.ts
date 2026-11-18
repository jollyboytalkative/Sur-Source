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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Viju Shah`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Viju Shah`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

export const VIJU_SHAH_MOVIES: MovieEntry[] = [
  // =====================================================================
  // 1990 – 1995: MUQADDAR KA BADSHAAH, VISHWATMA, MOHRA & RAVAN RAAJ ERA
  // =====================================================================
  {
    id: 'viju-muqaddar-ka-badshaah-1990',
    directorId: 'viju-shah',
    title: 'Muqaddar Ka Badshaah',
    year: 1990,
    cast: 'Vinod Khanna, Shabana Azmi, Vijayashanti, Anupam Kher',
    label: 'HMV / Saregama',
    significance:
      'Viju Shah’s first full-length solo Hindi feature film soundtrack after assisting and arranging breakthrough synth hits like Tridev (1989) under Kalyanji–Anandji.',
    songs: [
      origSong('viju-muqaddar-ka-badshaah-1990', 1, 'Aiko Haina', 'Amit Kumar & Sapna Mukherjee', 'Muqaddar Ka Badshaah', 1990, 'Sameer'),
      origSong('viju-muqaddar-ka-badshaah-1990', 2, 'Jaaneman', 'Amit Kumar & Sadhana Sargam', 'Muqaddar Ka Badshaah', 1990, 'Sameer'),
      origSong('viju-muqaddar-ka-badshaah-1990', 3, 'Muqaddar Ka Badshah', 'Amit Kumar', 'Muqaddar Ka Badshaah', 1990, 'Sameer'),
      origSong('viju-muqaddar-ka-badshaah-1990', 4, 'Shararat Karoonga', 'Amit Kumar & Sapna Mukherjee', 'Muqaddar Ka Badshaah', 1990, 'Sameer'),
      origSong('viju-muqaddar-ka-badshaah-1990', 5, 'Ho Jaayega Loaccha', 'Amit Kumar & Boney', 'Muqaddar Ka Badshaah', 1990, 'Sameer'),
    ],
  },
  {
    id: 'viju-vishwatma-1992',
    directorId: 'viju-shah',
    title: 'Vishwatma',
    year: 1992,
    cast: 'Sunny Deol, Chunky Panday, Naseeruddin Shah, Divya Bharti, Sonam',
    label: 'HMV / Saregama',
    significance:
      'Blockbuster 1992 soundtrack selling 2 million units, anchored by the club anthem "Saat Samundar Paar" and atmospheric synth scoring.',
    songs: [
      adaptedSong('viju-vishwatma-1992', 1, 'Saat Samundar Paar', 'Sadhana Sargam', 'Vishwatma', 1992, 'Anand Bakshi', {
        adaptationType: 'copied',
        originalSongTitle: 'Heart',
        originalArtist: 'Pet Shop Boys',
        originalYear: '1987',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Main electronic synth riff, bass pulse, and melodic hook closely mirror Pet Shop Boys’ 1987 synth-pop hit "Heart".',
        originalLink: 'https://www.youtube.com/watch?v=wTkfK2g4pKI',
        referenceSource: 'Musicology Archives',
      }),
      origSong('viju-vishwatma-1992', 2, 'Dil Le Gayi Teri Bindiya', 'Amit Kumar, Mohammed Aziz, Udit Narayan & Sapna Mukherjee', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 3, 'Aankhon Mein Hai Kya', 'Udit Narayan, Alka Yagnik, Mohammed Aziz & Sadhana Sargam', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 4, 'Toofan', 'Sadhana Sargam, Amit Kumar, Alka Yagnik & Sapna Mukherjee', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 5, 'Aadmi Zindagi Aur Yeh Aatma', 'Mohammed Aziz', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 6, 'Hum Musafir Hain Yeh Zindagi', 'Mohammed Aziz', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 7, 'Vishwatma (Title Track)', 'Naseeruddin Shah', 'Vishwatma', 1992, 'Anand Bakshi'),
      origSong('viju-vishwatma-1992', 8, 'Saat Samundar Paar (Part 2 - Sad)', 'Sadhana Sargam', 'Vishwatma', 1992, 'Anand Bakshi', 'Slow reprise sharing the Pet Shop Boys "Heart" synth motif.'),
      origSong('viju-vishwatma-1992', 9, 'Saat Samundar Paar (Part 3)', 'Udit Narayan & Jolly Mukherjee', 'Vishwatma', 1992, 'Anand Bakshi', 'Alternate upbeat vocal variation of the main theme.'),
    ],
  },
  {
    id: 'viju-mohra-1994',
    directorId: 'viju-shah',
    title: 'Mohra',
    year: 1994,
    cast: 'Akshay Kumar, Suniel Shetty, Raveena Tandon, Naseeruddin Shah',
    label: 'Venus Records & Tapes',
    significance:
      'One of 1994’s biggest chartbusters, earning Viju Shah a Filmfare Best Music Director nomination behind "Tu Cheez Badi Hai Mast Mast", "Tip Tip Barsa Paani", and "Na Kajre Ki Dhar".',
    songs: [
      adaptedSong('viju-mohra-1994', 1, 'Tu Cheez Badi Hai Mast Mast', 'Udit Narayan & Kavita Krishnamurthy', 'Mohra', 1994, 'Anand Bakshi', {
        adaptationType: 'copied',
        originalSongTitle: 'Dam Mast Qalandar Mast Mast',
        originalArtist: 'Ustad Nusrat Fateh Ali Khan',
        originalYear: '1988',
        originCategory: 'Nusrat Fateh Ali Khan',
        adaptationNotes:
          'Reframes Ustad Nusrat Fateh Ali Khan’s iconic Sufi qawwali hook and Raag Bhimpalasi phrasing into a fast electronic dance duet.',
        originalLink: 'https://www.youtube.com/watch?v=SKZAiWSquA0',
        referenceSource: 'ITWOFS / CopycatList / Frontline',
      }),
      adaptedSong('viju-mohra-1994', 2, 'Tip Tip Barsa Paani', 'Udit Narayan & Alka Yagnik', 'Mohra', 1994, 'Anand Bakshi', {
        adaptationType: 'inspired',
        originalSongTitle: 'Roll Down Di Rubber Man',
        originalArtist: 'Dr. Alban',
        originalYear: '1992',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Prominent opening prelude and electronic rhythm bed draw inspiration from Dr. Alban’s 1992 Eurodance track while developing an original rain-duet melody.',
        originalLink: 'https://www.youtube.com/watch?v=UU54rlzHAlo',
        referenceSource: 'ITWOFS (Hindi Others)',
      }),
      origSong('viju-mohra-1994', 3, 'Na Kajre Ki Dhar', 'Pankaj Udhas & Sadhana Sargam', 'Mohra', 1994, 'Indeevar', 'Based on an unreleased 1970s melody originally composed by Kalyanji–Anandji for Mukesh and adapted here by Viju Shah as a duet.'),
      origSong('viju-mohra-1994', 4, 'Subah Se Lekar', 'Udit Narayan & Sadhana Sargam', 'Mohra', 1994, 'Anand Bakshi'),
      origSong('viju-mohra-1994', 5, 'Kaash Kahin Aisa Hota', 'Kumar Sanu', 'Mohra', 1994, 'Anand Bakshi'),
      origSong('viju-mohra-1994', 6, 'Dil Har Koi', 'Kumar Sanu & Alka Yagnik', 'Mohra', 1994, 'Indeevar'),
      origSong('viju-mohra-1994', 7, 'Main Cheez Badi Hoon Mast Mast', 'Kavita Krishnamurthy', 'Mohra', 1994, 'Anand Bakshi', 'Solo female counterpart to the qawwali-inspired dance hit.'),
      origSong('viju-mohra-1994', 8, 'Na Kajre Ki Dhar (Sad)', 'Pankaj Udhas', 'Mohra', 1994, 'Indeevar'),
    ],
  },
  {
    id: 'viju-ravan-raaj-1995',
    directorId: 'viju-shah',
    title: 'Ravan Raaj: A True Story',
    year: 1995,
    cast: 'Mithun Chakraborty, Aditya Pancholi, Madhoo, Sheeba',
    label: 'Tips Music',
    significance:
      '1995 Trimurti Films action thriller featuring six playful synth-driven tracks including a comedic callback to Mohra’s "Mast Mast".',
    songs: [
      origSong('viju-ravan-raaj-1995', 1, 'Husnwalon Se Yeh Dil Bachaye', 'Udit Narayan', 'Ravan Raaj', 1995, 'Anand Bakshi'),
      origSong('viju-ravan-raaj-1995', 2, 'Aaina Aaina Tere Bin Chaina', 'Kumar Sanu & Jayshree Shivaram', 'Ravan Raaj', 1995, 'Anand Bakshi'),
      origSong('viju-ravan-raaj-1995', 3, 'O Sanam O Sanam', 'Kumar Sanu & Sadhana Sargam', 'Ravan Raaj', 1995, 'Anand Bakshi'),
      origSong('viju-ravan-raaj-1995', 4, 'Ooh! Ooh! Ooh!... Ooh!', 'Abhijeet Bhattacharya, Bali Brahmbhatt & Poornima', 'Ravan Raaj', 1995, 'Anand Bakshi'),
      origSong('viju-ravan-raaj-1995', 5, 'Tu Cheez Badi Hai Sakht Sakht', 'Johnny Lever, Sapna Mukherjee & Bali Brahmbhatt', 'Ravan Raaj', 1995, 'Anand Bakshi', 'Self-referential comedic spoof of Mohra’s "Tu Cheez Badi Hai Mast Mast".'),
      origSong('viju-ravan-raaj-1995', 6, 'Yaar Mera Mausam Hai Mastana', 'Abhijeet Bhattacharya & Kavita Krishnamurthy', 'Ravan Raaj', 1995, 'Anand Bakshi'),
    ],
  },

  // =====================================================================
  // 1996 – 1998: TERE MERE SAPNE, GUPT & BADE MIYAN CHOTE MIYAN PEAK
  // =====================================================================
  {
    id: 'viju-tere-mere-sapne-1996',
    directorId: 'viju-shah',
    title: 'Tere Mere Sapne',
    year: 1996,
    cast: 'Chandrachur Singh, Arshad Warsi, Priya Gill, Simran',
    label: 'Big B / ABCL Music',
    significance:
      'ABCL launchpad selling 2.2 million units in India, powered by the runaway dance smash "Aankh Marey" and lyrical romantic duets.',
    songs: [
      origSong('viju-tere-mere-sapne-1996', 1, 'Aankh Marey', 'Kumar Sanu & Kavita Krishnamurthy', 'Tere Mere Sapne', 1996, 'Anand Bakshi', 'Breakout 1996 dance hit officially recreated two decades later in Simmba (2018).'),
      origSong('viju-tere-mere-sapne-1996', 2, 'Kuch Mere Dil Ne Kaha', 'Hariharan & Sadhana Sargam', 'Tere Mere Sapne', 1996, 'Anand Bakshi'),
      origSong('viju-tere-mere-sapne-1996', 3, 'Tere Mere Sapne', 'Udit Narayan, Vinod Rathod & Hema Sardesai', 'Tere Mere Sapne', 1996, 'Anand Bakshi'),
      origSong('viju-tere-mere-sapne-1996', 4, 'Mere Piya', 'Udit Narayan & Sadhana Sargam', 'Tere Mere Sapne', 1996, 'Anand Bakshi'),
      origSong('viju-tere-mere-sapne-1996', 5, 'Rama O Rama', 'Udit Narayan & Rakesh Pandit', 'Tere Mere Sapne', 1996, 'Anand Bakshi'),
      origSong('viju-tere-mere-sapne-1996', 6, 'Mera Dil Gaya', 'Udit Narayan & Alka Yagnik', 'Tere Mere Sapne', 1996, 'Anand Bakshi'),
      origSong('viju-tere-mere-sapne-1996', 7, 'Main Theme (Instrumental)', 'Viju Shah', 'Tere Mere Sapne', 1996, undefined),
    ],
  },
  {
    id: 'viju-gupt-1997',
    directorId: 'viju-shah',
    title: 'Gupt: The Hidden Truth',
    year: 1997,
    cast: 'Bobby Deol, Kajol, Manisha Koirala, Paresh Rawal',
    label: 'Tips Music',
    significance:
      'Milestone suspense thriller that won Viju Shah the Filmfare Award for Best Background Score alongside a Best Music Director nomination.',
    songs: [
      adaptedSong('viju-gupt-1997', 1, 'Gupt Gupt', 'Kavita Krishnamurthy, Hema Sardesai & Chetan', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi', {
        adaptationType: 'copied',
        originalSongTitle: 'Deep Forest / Tubular Bells',
        originalArtist: 'Deep Forest (1992) & Mike Oldfield (1973)',
        originalYear: '1973 / 1992',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Blends Mike Oldfield’s "Tubular Bells" opening motif with the main synth-chant groove of Deep Forest’s eponymous 1992 track.',
        originalLink: 'https://www.youtube.com/watch?v=lJHTuh5wXkU',
        referenceSource: 'ITWOFS / CopycatList / Wikipedia',
      }),
      adaptedSong('viju-gupt-1997', 2, 'Duniya Haseenon Ka Mela', 'Udit Narayan & Suneeta Rao', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi', {
        adaptationType: 'copied',
        originalSongTitle: 'Matsuri',
        originalArtist: 'Kitaro',
        originalYear: '1990',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Signature flute-synth prelude and ceremonial rhythmic cadence closely adapt Japanese new-age composer Kitaro’s "Matsuri" (from Kojiki).',
        originalLink: 'https://www.youtube.com/watch?v=NMx4FziSMIA',
        referenceSource: 'ITWOFS / CopycatList / Wikipedia',
      }),
      origSong('viju-gupt-1997', 3, 'Mushkil Bada Yeh Pyar Hai', 'Alka Yagnik & Udit Narayan', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi'),
      origSong('viju-gupt-1997', 4, 'Mere Khwaabon Mein Tu', 'Alka Yagnik & Kumar Sanu', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi', 'Earned Alka Yagnik a Filmfare Best Female Playback Singer nomination.'),
      origSong('viju-gupt-1997', 5, 'Yeh Pyar Kya Hai', 'Kavita Krishnamurthy, Kumar Sanu & Alka Yagnik', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi'),
      origSong('viju-gupt-1997', 6, 'Yeh Pyasi Mohabbat', 'Alka Yagnik', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi'),
      origSong('viju-gupt-1997', 7, 'Mere Sanam Tujhko', 'Udit Narayan & Sadhana Sargam', 'Gupt: The Hidden Truth', 1997, 'Anand Bakshi'),
    ],
  },
  {
    id: 'viju-aar-ya-paar-1997',
    directorId: 'viju-shah',
    title: 'Aar Ya Paar',
    year: 1997,
    cast: 'Jackie Shroff, Deepa Sahi, Kamal Sadanah, Ritu Shivpuri',
    label: 'Venus Records & Tapes',
    significance:
      'Ketan Mehta’s neo-noir thriller featuring Shankar Mahadevan’s early playback showcase "Tamma Ele" alongside Asha Bhosle’s sultry title theme.',
    songs: [
      origSong('viju-aar-ya-paar-1997', 1, 'Tamma Ele Tamma Ele', 'Shankar Mahadevan', 'Aar Ya Paar', 1997, 'Nitin Raikwar', 'Upbeat Afro-percussion dance experiment echoing 1990s world-beat chant trends.'),
      origSong('viju-aar-ya-paar-1997', 2, 'Aar Ya Paar (Female)', 'Asha Bhosle', 'Aar Ya Paar', 1997, 'Maya Govind'),
      origSong('viju-aar-ya-paar-1997', 3, 'Dil Diya', 'Asha Bhosle & Sudesh Bhosle', 'Aar Ya Paar', 1997, 'Rani Malik'),
      origSong('viju-aar-ya-paar-1997', 4, 'Hulle Hulle', 'Udit Narayan & Hema Sardesai', 'Aar Ya Paar', 1997, 'Indeevar'),
      origSong('viju-aar-ya-paar-1997', 5, 'Man Chahe Sanam', 'Abhijeet & Sadhana Sargam', 'Aar Ya Paar', 1997, 'Indeevar'),
      origSong('viju-aar-ya-paar-1997', 6, 'Suna Hai Phool', 'Kumar Sanu & Kavita Krishnamurthy', 'Aar Ya Paar', 1997, 'Maya Govind'),
      origSong('viju-aar-ya-paar-1997', 7, 'Aar Ya Paar (Male)', 'Jolly Mukherjee', 'Aar Ya Paar', 1997, 'Maya Govind'),
      origSong('viju-aar-ya-paar-1997', 8, 'Jo Hoga Hone Do', 'Jolly Mukherjee, Babul Supriyo, Hema Sardesai & Jaspinder Narula', 'Aar Ya Paar', 1997, 'Rani Malik'),
    ],
  },
  {
    id: 'viju-prithvi-1997',
    directorId: 'viju-shah',
    title: 'Prithvi',
    year: 1997,
    cast: 'Suniel Shetty, Shilpa Shetty, Faraaz Khan, Shakti Kapoor',
    label: 'T-Series',
    significance:
      'Six-track Viju Shah album ("Een Meen Sade Teen", "Jis Ghadi Tujhko"); excludes three bonus cassette tracks composed separately by Sukhwinder Singh.',
    songs: [
      adaptedSong('viju-prithvi-1997', 1, 'Een Meen Sade Teen', 'Udit Narayan & Alka Yagnik', 'Prithvi', 1997, 'Nitin Raikwar', {
        adaptationType: 'copied',
        originalSongTitle: 'Second Rendez-Vous',
        originalArtist: 'Jean-Michel Jarre',
        originalYear: '1986',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Synthesizer brass fanfare and electronic progression draw directly from French synth pioneer Jean-Michel Jarre’s "Second Rendez-Vous".',
        originalLink: 'https://www.youtube.com/watch?v=-5LkP8Q8lH8',
        referenceSource: 'Wikipedia / Electronic Music Archives',
      }),
      origSong('viju-prithvi-1997', 2, 'Jis Ghadi Tujhko', 'Udit Narayan & Sadhana Sargam', 'Prithvi', 1997, 'Jalees Sherwani'),
      origSong('viju-prithvi-1997', 3, 'Mera Dil De Diya', 'Udit Narayan & Kavita Krishnamurthy', 'Prithvi', 1997, 'Nitin Raikwar'),
      origSong('viju-prithvi-1997', 4, 'Jis Ghadi Tujhko (Duet)', 'Kumar Sanu & Anuradha Paudwal', 'Prithvi', 1997, 'Jalees Sherwani'),
      origSong('viju-prithvi-1997', 5, 'Jis Ghadi Tujhko (Remix)', 'Kumar Sanu', 'Prithvi', 1997, 'Jalees Sherwani'),
      origSong('viju-prithvi-1997', 6, 'Hai Rabba', 'Anuradha Paudwal', 'Prithvi', 1997, 'Deepak Chaudhary'),
    ],
  },
  {
    id: 'viju-bade-miyan-chote-miyan-1998',
    directorId: 'viju-shah',
    title: 'Bade Miyan Chote Miyan',
    year: 1998,
    cast: 'Amitabh Bachchan, Govinda, Raveena Tandon, Ramya Krishnan',
    label: 'Tips Cassettes & Records',
    significance:
      'Massive David Dhawan festive hit earning Viju Shah another Filmfare Best Music Director nomination led by "Makhna" and "Kisi Disco Mein Jaaye".',
    songs: [
      origSong('viju-bade-miyan-chote-miyan-1998', 1, 'Bade Miyan Chote Miyan', 'Udit Narayan & Sudesh Bhosle', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
      origSong('viju-bade-miyan-chote-miyan-1998', 2, 'Makhna', 'Alka Yagnik, Udit Narayan & Amit Kumar', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
      origSong('viju-bade-miyan-chote-miyan-1998', 3, 'Kisi Disco Mein Jaaye', 'Udit Narayan & Alka Yagnik', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
      origSong('viju-bade-miyan-chote-miyan-1998', 4, 'Assi Chutki Nabbe Taal', 'Udit Narayan & Sudesh Bhosle', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
      origSong('viju-bade-miyan-chote-miyan-1998', 5, 'Deta Jai Jo Re', 'Anuradha Paudwal, Kavita Krishnamurthy, Udit Narayan & Amit Kumar', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
      origSong('viju-bade-miyan-chote-miyan-1998', 6, 'Dhin Tak Dhin', 'Jaspinder Narula & Sudesh Bhosle', 'Bade Miyan Chote Miyan', 1998, 'Sameer'),
    ],
  },
  {
    id: 'viju-vinashak-1998',
    directorId: 'viju-shah',
    title: 'Vinashak',
    year: 1998,
    cast: 'Suniel Shetty, Raveena Tandon, Danny Denzongpa, Om Puri',
    label: 'Tips Music',
    significance:
      '1998 Suniel Shetty–Raveena Tandon action drama pairing atmospheric love ballad "Kho Diye" with spirited dance tracks.',
    songs: [
      origSong('viju-vinashak-1998', 1, 'Kho Diye', 'Roop Kumar Rathod & Sadhana Sargam', 'Vinashak', 1998, 'Deepak Chaudhary'),
      origSong('viju-vinashak-1998', 2, 'Godhna Godh', 'Poornima & Sudesh Bhosle', 'Vinashak', 1998, 'Kishore Shastri'),
      origSong('viju-vinashak-1998', 3, 'Rooba Rooba', 'Kavita Krishnamurthy', 'Vinashak', 1998, 'Deepak Chaudhary'),
      origSong('viju-vinashak-1998', 4, 'Chal Chal', 'Udit Narayan & Kavita Krishnamurthy', 'Vinashak', 1998, 'Deepak Chaudhary'),
      origSong('viju-vinashak-1998', 5, 'Vinashak', 'Amit Kumar', 'Vinashak', 1998, 'Deepak Chaudhary'),
      origSong('viju-vinashak-1998', 6, 'Moriya Moriya', 'Udit Narayan & Sapna Mukherjee', 'Vinashak', 1998, 'Dinesh Parihar'),
    ],
  },
  {
    id: 'viju-humse-badhkar-kaun-1998',
    directorId: 'viju-shah',
    title: 'Humse Badhkar Kaun',
    year: 1998,
    cast: 'Suniel Shetty, Saif Ali Khan, Sonali Bendre, Dipti Bhatnagar',
    label: 'Venus Records & Tapes',
    significance:
      'Six-track comedy-action album written by Faaiz Anwar featuring "Sun Mere Bhai" and "Chhat Mangni Pat Byah".',
    songs: [
      origSong('viju-humse-badhkar-kaun-1998', 1, 'Line Maarle Re Baba', 'Udit Narayan', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
      origSong('viju-humse-badhkar-kaun-1998', 2, 'Teri Zulfo Mein', 'Udit Narayan & Sadhana Sargam', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
      origSong('viju-humse-badhkar-kaun-1998', 3, 'Suit Boot Pahno Ya Kurta', 'Udit Narayan, Vinod Rathod, Kavita Krishnamurthy & Sapna Mukherjee', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
      origSong('viju-humse-badhkar-kaun-1998', 4, 'Huf Haza Huf Haza', 'Vinod Rathod & Sapna Mukherjee', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
      origSong('viju-humse-badhkar-kaun-1998', 5, 'Chhat Mangni Pat Byah', 'Abhijeet, Udit Narayan & Kavita Krishnamurthy', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
      origSong('viju-humse-badhkar-kaun-1998', 6, 'Sun Mere Bhai (Pee Pee Ke Jee)', 'Udit Narayan & Abhijeet', 'Humse Badhkar Kaun', 1998, 'Faaiz Anwar'),
    ],
  },

  // =====================================================================
  // 2000 – 2003: BULANDI, PYAAR ISHQ AUR MOHABBAT & TUJHE MERI KASAM
  // =====================================================================
  {
    id: 'viju-bulandi-2000',
    directorId: 'viju-shah',
    title: 'Bulandi',
    year: 2000,
    cast: 'Anil Kapoor, Rekha, Raveena Tandon, Rajinikanth',
    label: 'T-Series',
    significance:
      'Family drama uniting Anil Kapoor and Rajinikanth with Anand Bakshi lyrics across bhangra-pop and melodic duets.',
    songs: [
      origSong('viju-bulandi-2000', 1, 'Hungama Ho Jaaye', 'Sonu Nigam, Jaspinder Narula & Rakesh Pandit', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 2, 'Teri Akhiyon Mein', 'Udit Narayan & Kavita Krishnamurthy', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 3, 'Teri Meri Ik Jind', 'Heera Group UK & Vibha', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 4, 'Mujhe Hichki Lagi', 'Kumar Sanu & Anuradha Paudwal', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 5, 'Ab Bujho Ri Bujho', 'Udit Narayan & Jaspinder Narula', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 6, 'Jab Gori Ne', 'Abhijeet & Alka Yagnik', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 7, 'Saari Duniya Mein', 'Udit Narayan & Kavita Krishnamurthy', 'Bulandi', 2000, 'Anand Bakshi'),
      origSong('viju-bulandi-2000', 8, 'Humne Tumko Chun Liya Hai', 'Kumar Sanu & Anuradha Paudwal', 'Bulandi', 2000, 'Anand Bakshi'),
    ],
  },
  {
    id: 'viju-beti-no-1-2000',
    directorId: 'viju-shah',
    title: 'Beti No. 1',
    year: 2000,
    cast: 'Govinda, Rambha, Aruna Irani, Prem Chopra',
    label: 'T-Series',
    significance:
      'Includes Viju Shah’s five composed tracks for the 2000 family entertainer; two separate tracks composed by Ghulam Ali are excluded.',
    songs: [
      adaptedSong('viju-beti-no-1-2000', 1, 'Mehfil Taa Sajdi', 'Viju Shah, Udit Narayan & Bhupinder Singh', 'Beti No. 1', 2000, 'Maya Govind', {
        adaptationType: 'copied',
        originalSongTitle: 'Mehandi Ta Sajdi',
        originalArtist: 'Musarrat Nazir',
        originalYear: '1980s',
        originCategory: 'Pakistani Film & Ghazal',
        adaptationNotes:
          'Refrain and wedding-folk hook closely mirror Pakistani folk legend Musarrat Nazir’s Punjabi classic "Mehandi Ta Sajdi".',
        originalLink: 'https://www.youtube.com/watch?v=YjAnKdMPJGU',
        referenceSource: 'Wikipedia / Planet Bollywood',
      }),
      origSong('viju-beti-no-1-2000', 2, 'Tune Jo Liya Mera Chumma', 'Abhijeet & Anuradha Paudwal', 'Beti No. 1', 2000, 'Maya Govind'),
      origSong('viju-beti-no-1-2000', 3, 'Dilruba O Phoolon Jaisi', 'Udit Narayan & Anuradha Paudwal', 'Beti No. 1', 2000, 'Maya Govind'),
      origSong('viju-beti-no-1-2000', 4, 'Dil Ki Dhadkan', 'Udit Narayan & Amit Kumar', 'Beti No. 1', 2000, 'Maya Govind'),
      origSong('viju-beti-no-1-2000', 5, 'Chori Chori Aankh Ladi', 'Anuradha Paudwal & Javed Ali', 'Beti No. 1', 2000, 'Dev Kohli'),
    ],
  },
  {
    id: 'viju-pyaar-ishq-aur-mohabbat-2001',
    directorId: 'viju-shah',
    title: 'Pyaar Ishq Aur Mohabbat',
    year: 2001,
    cast: 'Suniel Shetty, Arjun Rampal, Aftab Shivdasani, Kirti Reddy',
    label: 'Tips Music',
    significance:
      'Sleek 2001 Rajiv Rai romance that made Shaan a household name with "Apni Yaadon Ko" alongside atmospheric European-synth ballads.',
    songs: [
      adaptedSong('viju-pyaar-ishq-aur-mohabbat-2001', 1, 'Chand Ho', 'Alka Yagnik & Sonu Nigam', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi', {
        adaptationType: 'copied',
        originalSongTitle: 'Solitude',
        originalArtist: 'Karunesh',
        originalYear: '1990',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Main ambient flute-piano motif and relaxing harmonic progression sample German new-age musician Karunesh’s "Solitude".',
        originalLink: 'https://www.youtube.com/watch?v=Dl7hwzQ6YoA',
        referenceSource: 'Wikipedia / Ambient Music Archives',
      }),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 2, 'Apni Yaadon Ko', 'Shaan', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 3, 'Dono Taraf', 'Kumar Sanu & Kavita Krishnamurthy', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 4, 'Jab Tujhe Maine', 'Udit Narayan & Sadhana Sargam', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 5, 'Main Bewafa', 'Kumar Sanu', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 6, 'Pyaar Ishq Aur Mohabbat', 'Udit Narayan & Alka Yagnik', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 7, 'Tum Lakh Chupe Ho', 'Hariharan & Janki Iyer', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
      origSong('viju-pyaar-ishq-aur-mohabbat-2001', 8, 'Pyaar Ishq Aur Mohabbat (Theme)', 'Shaan & Sadhana Sargam', 'Pyaar Ishq Aur Mohabbat', 2001, 'Anand Bakshi'),
    ],
  },
  {
    id: 'viju-kasam-2001',
    directorId: 'viju-shah',
    title: 'Kasam',
    year: 2001,
    cast: 'Sunny Deol, Chunky Panday, Neelam Kothari, Naseeruddin Shah',
    label: 'T-Series',
    significance:
      'Long-delayed 2001 Sunny Deol action romance pairing melodic 1990s-style duets with classic playback voices.',
    songs: [
      origSong('viju-kasam-2001', 1, 'Chehra Tera Kitabi', 'Udit Narayan & Alka Yagnik', 'Kasam', 2001, 'Indeevar'),
      origSong('viju-kasam-2001', 2, 'Jee Huzoor', 'Mangal Singh', 'Kasam', 2001, 'Indeevar'),
      origSong('viju-kasam-2001', 3, 'Kitna Sunder Tha Yeh Sapna', 'Kumar Sanu', 'Kasam', 2001, 'Indeevar'),
      origSong('viju-kasam-2001', 4, 'O Pardesi Babu', 'Sadhana Sargam & Sudesh Bhosle', 'Kasam', 2001, 'Indeevar'),
      origSong('viju-kasam-2001', 5, 'O Sahiba', 'Udit Narayan & Kavita Krishnamurthy', 'Kasam', 2001, 'Indeevar'),
      origSong('viju-kasam-2001', 6, 'Teri Dhafli Meri Payal', 'Kumar Sanu & Sadhana Sargam', 'Kasam', 2001, 'Indeevar'),
    ],
  },
  {
    id: 'viju-hadh-2001',
    directorId: 'viju-shah',
    title: 'Hadh: Life on the Edge of Death',
    year: 2001,
    cast: 'Jackie Shroff, Sharad Kapoor, Ayesha Jhulka, Suman Ranganathan',
    label: 'Tips Music',
    significance:
      '2001 crime-thriller album composed by Viju Shah with vocals ranging from Sukhwinder Singh to Kumar Sanu and Alka Yagnik.',
    songs: [
      origSong('viju-hadh-2001', 1, 'Hing La La', 'Udit Narayan & Poonam Bhatia', 'Hadh', 2001),
      origSong('viju-hadh-2001', 2, 'Aangoori Badan', 'Suresh Raheja & Sapna Awasthi', 'Hadh', 2001),
      origSong('viju-hadh-2001', 3, 'Kya Hoti Hai', 'Kumar Sanu & Alka Yagnik', 'Hadh', 2001),
      origSong('viju-hadh-2001', 4, 'Tere Dil Ne', 'Manhar Udhas & Alka Yagnik', 'Hadh', 2001),
      origSong('viju-hadh-2001', 5, 'Dekhi Dekhi Hai Kamaal Ki', 'Sukhwinder Singh, Jackie Shroff & Sharad Kapoor', 'Hadh', 2001),
    ],
  },
  {
    id: 'viju-chhal-2002',
    directorId: 'viju-shah',
    title: 'Chhal',
    year: 2002,
    cast: 'Kay Kay Menon, Prashant Narayanan, Jaya Seal, Nagesh Bhosle',
    label: 'Tips Music',
    significance:
      'Hansal Mehta’s gritty Mumbai underworld drama anchored by KK’s haunting title rock track and minimalist nocturnal moods.',
    songs: [
      origSong('viju-chhal-2002', 1, 'Chhal', 'KK', 'Chhal', 2002, 'Amitabh Verma'),
      origSong('viju-chhal-2002', 2, 'Chup Chaap Karti Hai Baatein', 'Shaan', 'Chhal', 2002, 'Amitabh Verma'),
      origSong('viju-chhal-2002', 3, 'Chup Chaap (Female)', 'Sadhana Sargam', 'Chhal', 2002, 'Amitabh Verma'),
      origSong('viju-chhal-2002', 4, 'Dil Jhanjhanale Jaane Jaana', 'Asha Bhosle', 'Chhal', 2002, 'Amitabh Verma'),
      origSong('viju-chhal-2002', 5, 'Gum Sum', 'Alka Yagnik', 'Chhal', 2002, 'Amitabh Verma'),
    ],
  },
  {
    id: 'viju-tujhe-meri-kasam-2003',
    directorId: 'viju-shah',
    title: 'Tujhe Meri Kasam',
    year: 2003,
    cast: 'Riteish Deshmukh, Genelia D’Souza, Shriya Saran',
    label: 'Sony Music India',
    significance:
      'Youthful romantic debut for Riteish Deshmukh and Genelia D’Souza, remembered fondly for "Azaadi Hai Pyaari" and "Pal Pal Soch Mein".',
    songs: [
      origSong('viju-tujhe-meri-kasam-2003', 1, 'Azaadi Hai Pyari', 'Shaan & Shreya Ghoshal', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
      origSong('viju-tujhe-meri-kasam-2003', 2, 'Pal Pal Soch Mein', 'Udit Narayan & Sadhana Sargam', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
      origSong('viju-tujhe-meri-kasam-2003', 3, 'Choti Choti Khushiyan', 'Alka Yagnik, Abhijeet & Nisha Upadhyay', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
      origSong('viju-tujhe-meri-kasam-2003', 4, 'Koi To Meri Fariyad', 'Udit Narayan & Sadhana Sargam', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
      origSong('viju-tujhe-meri-kasam-2003', 5, 'Main Rok Loon Tere', 'Vaishali Samant', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
      origSong('viju-tujhe-meri-kasam-2003', 6, 'Thodi Si Deewani', 'Alka Yagnik', 'Tujhe Meri Kasam', 2003, 'Mehboob'),
    ],
  },
  {
    id: 'viju-calcutta-mail-2003',
    directorId: 'viju-shah',
    title: 'Calcutta Mail',
    year: 2003,
    cast: 'Anil Kapoor, Rani Mukerji, Manisha Koirala, Satish Kaushik',
    label: 'Sony Music India',
    significance:
      'Sudhir Mishra’s noir mystery featuring six Viju Shah tracks penned by Javed Akhtar and Mehboob; Anand Raj Anand’s two separate tracks are excluded.',
    songs: [
      origSong('viju-calcutta-mail-2003', 1, 'Zindagi Hai Kya Pyar Ke Bina', 'Alka Yagnik & Udit Narayan', 'Calcutta Mail', 2003, 'Mehboob'),
      origSong('viju-calcutta-mail-2003', 2, 'Tum Agar Mauj Ho Koi To Kinara Hu', 'Udit Narayan', 'Calcutta Mail', 2003, 'Javed Akhtar'),
      origSong('viju-calcutta-mail-2003', 3, 'Ye Saaheb Ajeeb Hai', 'Sujata Trivedi', 'Calcutta Mail', 2003, 'Javed Akhtar'),
      origSong('viju-calcutta-mail-2003', 4, 'Bheegi Bheegi Hawa Hai', 'Shaan & Kavita Krishnamurthy', 'Calcutta Mail', 2003, 'Javed Akhtar'),
      origSong('viju-calcutta-mail-2003', 5, 'Intezar Hai Tera', 'Sukhwinder Singh', 'Calcutta Mail', 2003, 'Mehboob'),
      origSong('viju-calcutta-mail-2003', 6, 'Meri Jaan Meri Jaana', 'Alka Yagnik & Nitin Raikwar', 'Calcutta Mail', 2003, 'Javed Akhtar'),
    ],
  },
  {
    id: 'viju-dhund-2003',
    directorId: 'viju-shah',
    title: 'Dhund: The Fog',
    year: 2003,
    cast: 'Amar Upadhyay, Aditi Govitrikar, Apoorva Agnihotri, Irfan Khan',
    label: 'Universal Music India',
    significance:
      '2003 slasher mystery scored by Viju Shah with melodic duet highlights led by Sunidhi Chauhan, Shaan, and Sonu Nigam.',
    songs: [
      origSong('viju-dhund-2003', 1, 'Dilbar Mera', 'Udit Narayan & Sunidhi Chauhan', 'Dhund', 2003, 'Ibrahim Ashq'),
      origSong('viju-dhund-2003', 2, 'Samjhona', 'Abhijeet & Madhushree', 'Dhund', 2003, 'Ibrahim Ashq'),
      origSong('viju-dhund-2003', 3, 'Aas Paas (Female)', 'Sunidhi Chauhan', 'Dhund', 2003, 'Chandrashekhar Rajit'),
      origSong('viju-dhund-2003', 4, 'Kitna Intezar', 'Alka Yagnik', 'Dhund', 2003, 'Ibrahim Ashq'),
      origSong('viju-dhund-2003', 5, 'Samjha Nahi', 'Poonam Bhatia', 'Dhund', 2003, 'Rakesh Mishra'),
      origSong('viju-dhund-2003', 6, 'Mehki Mehki', 'Sonu Nigam & Alka Yagnik', 'Dhund', 2003, 'Ibrahim Ashq'),
      origSong('viju-dhund-2003', 7, 'Main Albeli Main Matwali', 'Sunidhi Chauhan', 'Dhund', 2003, 'Rakesh Mishra'),
      origSong('viju-dhund-2003', 8, 'Aas Paas (Male)', 'Shaan', 'Dhund', 2003, 'Chandrashekhar Rajit'),
    ],
  },
  {
    id: 'viju-kaise-kahoon-ke-pyaar-hai-2003',
    directorId: 'viju-shah',
    title: 'Kaise Kahoon Ke... Pyaar Hai',
    year: 2003,
    cast: 'Amit Hingorani, Sharbani Mukherjee, Dharmendra, Farida Jalal',
    label: 'Tips Music',
    significance:
      '2003 romantic comedy featuring Shaan’s energetic "Le Gayi" alongside Udit Narayan and Alka Yagnik duets.',
    songs: [
      origSong('viju-kaise-kahoon-ke-pyaar-hai-2003', 1, 'Kaise Kahoon Ke Pyaar Hai', 'Udit Narayan & Kavita Krishnamurthy', 'Kaise Kahoon Ke Pyaar Hai', 2003, 'Sameer'),
      origSong('viju-kaise-kahoon-ke-pyaar-hai-2003', 2, 'Dil Tera Dil', 'Udit Narayan & Alka Yagnik', 'Kaise Kahoon Ke Pyaar Hai', 2003, 'Sameer'),
      origSong('viju-kaise-kahoon-ke-pyaar-hai-2003', 3, 'Le Gayi', 'Shaan', 'Kaise Kahoon Ke Pyaar Hai', 2003, 'Sameer'),
      origSong('viju-kaise-kahoon-ke-pyaar-hai-2003', 4, 'O Jamalo', 'Udit Narayan', 'Kaise Kahoon Ke Pyaar Hai', 2003, 'Sameer'),
      origSong('viju-kaise-kahoon-ke-pyaar-hai-2003', 5, 'O Mere Kisan Kanaiya', 'Sukhwinder Singh', 'Kaise Kahoon Ke Pyaar Hai', 2003, 'Sameer'),
    ],
  },

  // =====================================================================
  // 2004 – 2025: ASAMBHAV, SHIKHAR, VICTORIA NO. 203 & ZORA
  // =====================================================================
  {
    id: 'viju-asambhav-2004',
    directorId: 'viju-shah',
    title: 'Asambhav',
    year: 2004,
    cast: 'Arjun Rampal, Priyanka Chopra, Naseeruddin Shah, Dipannita Sharma',
    label: 'Tips Music',
    significance:
      'Final Swiss-set action collaboration with Rajiv Rai in the 2000s, mixing sleek electronic club textures with Naseeruddin Shah’s vocal cameo.',
    songs: [
      adaptedSong('viju-asambhav-2004', 1, 'Koi Aayega', 'Sunidhi Chauhan', 'Asambhav', 2004, 'Sameer', {
        adaptationType: 'inspired',
        originalSongTitle: 'Mahi Aave Ga',
        originalArtist: 'Shazia Manzoor / Noor Jehan',
        originalYear: '2000 / 1986',
        originCategory: 'Pakistani Film & Ghazal',
        adaptationNotes:
          'Opening rhythm and chorus hook draw inspiration from Noor Jehan’s classic "Mahi Aawe Ga" as popularized in Shazia Manzoor’s 2000 revival.',
        originalLink: 'https://www.youtube.com/watch?v=IOkqMsdxwWU',
        referenceSource: 'ITWOFS (Hindi Others)',
      }),
      origSong('viju-asambhav-2004', 2, 'Raatein Badi Hain', 'Hema Sardesai, Naseeruddin Shah, Rajiv Rai & Nayan Rathod', 'Asambhav', 2004, 'Sameer'),
      origSong('viju-asambhav-2004', 3, 'Teri Dekh Dekh Ladkaiyan', 'Udit Narayan & Kavita Krishnamurthy', 'Asambhav', 2004, 'Sameer'),
      origSong('viju-asambhav-2004', 4, 'Mashuqa Rubi', 'Anuradha Sriram', 'Asambhav', 2004, 'Sameer'),
      origSong('viju-asambhav-2004', 5, 'Main Sada Hoon', 'KK', 'Asambhav', 2004, 'Sameer'),
      origSong('viju-asambhav-2004', 6, 'Asambhav Theme', 'Viju Shah', 'Asambhav', 2004, undefined),
    ],
  },
  {
    id: 'viju-shikhar-2005',
    directorId: 'viju-shah',
    title: 'Shikhar',
    year: 2005,
    cast: 'Ajay Devgn, Shahid Kapoor, Bipasha Basu, Amrita Rao',
    label: 'T-Series',
    significance:
      'John Matthew Matthan’s drama uniting Jagjit Singh’s reflective "Tu Hai Shikar" with KK, Udit Narayan, and Sunidhi Chauhan.',
    songs: [
      origSong('viju-shikhar-2005', 1, 'Fitna Dil', 'Udit Narayan, Sunidhi Chauhan & KK', 'Shikhar', 2005, 'Chandrashekhar Rajit'),
      origSong('viju-shikhar-2005', 2, 'Aap Ko Samjha', 'Udit Narayan, Sadhana Sargam & Rakesh Pandit', 'Shikhar', 2005, 'Sudhakar Sharma'),
      origSong('viju-shikhar-2005', 3, 'Dheere Dheere', 'Sunidhi Chauhan', 'Shikhar', 2005, 'Sudhakar Sharma'),
      origSong('viju-shikhar-2005', 4, 'Megha Re Megha', 'Udit Narayan & Alka Yagnik', 'Shikhar', 2005, 'Sudhakar Sharma'),
      origSong('viju-shikhar-2005', 5, 'Mere Mann', 'Udit Narayan & Alka Yagnik', 'Shikhar', 2005, 'Sudhakar Sharma'),
      origSong('viju-shikhar-2005', 6, 'Tu Hai Shikar', 'Jagjit Singh', 'Shikhar', 2005, 'Manohar Iyer'),
      origSong('viju-shikhar-2005', 7, 'Vaga', 'Udit Narayan, Sonu Nigam & Ash Chandler', 'Shikhar', 2005, 'Manohar Iyer'),
    ],
  },
  {
    id: 'viju-anjaan-2005',
    directorId: 'viju-shah',
    title: 'Anjaan',
    year: 2005,
    cast: 'Mahek Chahal, Vipul Gupta, Riya Sen, Alyy Khan',
    label: 'Tips Music',
    significance:
      'Includes Viju Shah’s standalone rock-sufi contribution "Gumshuda Chain Rooh Bezaar"; separate tracks by Rahul Mehta and Aumkar Gholap are excluded.',
    songs: [
      origSong('viju-anjaan-2005', 1, 'Gumshuda Chain Rooh Bezaar', 'Kailash Kher', 'Anjaan', 2005, 'Amitabh Verma'),
    ],
  },
  {
    id: 'viju-yun-hota-toh-kya-hota-2006',
    directorId: 'viju-shah',
    title: 'Yun Hota Toh Kya Hota',
    year: 2006,
    cast: 'Irrfan Khan, Konkona Sen Sharma, Ayesha Takia, Paresh Rawal',
    label: 'Times Music',
    significance:
      'Naseeruddin Shah’s directorial debut showcasing contemporary vocalists Shreya Ghoshal, Shaan, Sunidhi Chauhan, Kunal Ganjawala, and Javed Ali.',
    songs: [
      origSong('viju-yun-hota-toh-kya-hota-2006', 1, 'Ek Bar Jana America Janab', 'Devraj Gadhavi, Keerthi Sagathia, Javed Ali & Madhushree', 'Yun Hota Toh Kya Hota', 2006, 'Sameer'),
      origSong('viju-yun-hota-toh-kya-hota-2006', 2, 'Yado Me Aksar Aate Rahe', 'Shreya Ghoshal & Shaan', 'Yun Hota Toh Kya Hota', 2006, 'Sameer'),
      origSong('viju-yun-hota-toh-kya-hota-2006', 3, 'Yu Hota To Kya Hota', 'Sunidhi Chauhan & Kunal Ganjawala', 'Yun Hota Toh Kya Hota', 2006, 'Sameer'),
      origSong('viju-yun-hota-toh-kya-hota-2006', 4, 'Pyaar Hai', 'Sowmya Raoh', 'Yun Hota Toh Kya Hota', 2006, 'Sameer'),
    ],
  },
  {
    id: 'viju-victoria-no-203-2007',
    directorId: 'viju-shah',
    title: 'Victoria No. 203',
    year: 2007,
    cast: 'Om Puri, Anupam Kher, Jimmy Sheirgill, Javed Jaffrey',
    label: 'Saregama',
    significance:
      '2007 remake of the 1972 caper originally scored by Kalyanji–Anandji, blending fresh Viju Shah songs with Amit Kumar’s affectionate revival of "Do Bechare".',
    songs: [
      origSong('viju-victoria-no-203-2007', 1, 'Do Bechare', 'Amit Kumar', 'Victoria No. 203', 2007, 'Verma Malik', 'Tribute reimagining of Kalyanji–Anandji’s classic 1972 comedy theme sung originally by Kishore Kumar and Mahendra Kapoor.'),
      origSong('viju-victoria-no-203-2007', 2, 'Victoria 203', 'Dominique Cerejo', 'Victoria No. 203', 2007, 'Asif Ali Beg'),
      origSong('viju-victoria-no-203-2007', 3, 'Zindagi Aa Gayi', 'Zubeen Garg', 'Victoria No. 203', 2007, 'Chandrashekhar Rajit'),
      origSong('viju-victoria-no-203-2007', 4, 'Deedani', 'Shaan', 'Victoria No. 203', 2007, 'Chandrashekhar Rajit'),
      origSong('viju-victoria-no-203-2007', 5, 'Thoda Sa Thero', 'Shreya Ghoshal', 'Victoria No. 203', 2007, 'Chandrashekhar Rajit'),
    ],
  },
  {
    id: 'viju-julie-2-2017',
    directorId: 'viju-shah',
    title: 'Julie 2',
    year: 2017,
    cast: 'Raai Laxmi, Ravi Kishan, Rati Agnihotri, Pankaj Tripathi',
    label: 'Triumph Talkies',
    significance:
      'Includes Viju Shah’s solo guest track "Kharama Kharama"; separate compositions by Rooh Band, Atif Ali, and Javed–Mohsin are excluded.',
    songs: [
      origSong('viju-julie-2-2017', 1, 'Kharama Kharama', 'Pavni Pandey', 'Julie 2', 2017, 'Sameer'),
    ],
  },
  {
    id: 'viju-zora-2025',
    directorId: 'viju-shah',
    title: 'Zora',
    year: 2025,
    cast: 'Ravindra Kuhar, Sonal Singh, Muskan Tomar',
    label: 'Trimurti Films',
    significance:
      'Long-awaited 2025 suspense-thriller reunion between director Rajiv Rai and Viju Shah under Trimurti Films.',
    songs: [
      origSong('viju-zora-2025', 1, 'Zora Hai Mera Naam', 'Palak Muchhal', 'Zora', 2025, 'Raashid Rangrez'),
    ],
  },
];
