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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Himesh Reshammiya`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Himesh Reshammiya`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

export const HIMESH_RESHAMMIYA_MOVIES: MovieEntry[] = [
  // =========================================================================
  // 1998 – 2004: SALMAN KHAN BREAKTHROUGH, DAVID DHAWAN HITS & TERE NAAM ERA
  // =========================================================================
  {
    id: 'hr-pyaar-kiya-to-darna-kya-1998',
    directorId: 'himesh-reshammiya',
    title: 'Pyaar Kiya To Darna Kya',
    year: 1998,
    cast: 'Salman Khan, Kajol, Arbaaz Khan, Dharmendra',
    label: 'T-Series',
    significance:
      'Himesh Reshammiya’s Hindi feature film composing debut alongside guest composers Jatin–Lalit and Sajid–Wajid; only his two original tracks ("Odh Li Chunariya", "Tum Par Hum Hai Atke Yaara") are indexed here.',
    songs: [
      origSong(
        'hr-pyaar-kiya-to-darna-kya-1998',
        1,
        'Odh Li Chunariya',
        'Kumar Sanu, Alka Yagnik',
        'Pyaar Kiya To Darna Kya',
        1998,
        'Sudhakar Sharma',
        'High-energy dholak-driven duet marking Himesh Reshammiya’s chart-topping Bollywood film debut.'
      ),
      origSong(
        'hr-pyaar-kiya-to-darna-kya-1998',
        2,
        'Tum Par Hum Hai Atke Yaara',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Pyaar Kiya To Darna Kya',
        1998,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-bandhan-1998',
    directorId: 'himesh-reshammiya',
    title: 'Bandhan',
    year: 1998,
    cast: 'Salman Khan, Rambha, Jackie Shroff, Ashwini Bhave',
    label: 'Tips Music',
    significance:
      'Includes Himesh Reshammiya’s three composed Hindi tracks penned by Sudhakar Sharma; Anand Raj Anand’s four separate songs on the album are excluded.',
    songs: [
      origSong(
        'hr-bandhan-1998',
        1,
        'Balle Balle',
        'Abhijeet, Alka Yagnik, Sapna Awasthi',
        'Bandhan',
        1998,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-bandhan-1998',
        2,
        'Chhora Phisal Gaya',
        'Udit Narayan, Alka Yagnik',
        'Bandhan',
        1998,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-bandhan-1998',
        3,
        'Tere Dum Se Hai Mera Dum',
        'Kumar Sanu, Alka Yagnik',
        'Bandhan',
        1998,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-hello-brother-1999',
    directorId: 'himesh-reshammiya',
    title: 'Hello Brother',
    year: 1999,
    cast: 'Salman Khan, Arbaaz Khan, Rani Mukerji, Shakti Kapoor',
    label: 'T-Series',
    significance:
      'Features Himesh Reshammiya’s two signature compositions including Salman Khan’s playful duet "Chandi Ki Daal Par"; co-composers Sajid–Wajid’s separate tracks are excluded.',
    songs: [
      origSong(
        'hr-hello-brother-1999',
        1,
        'Teri Chunariya',
        'Kumar Sanu, Alka Yagnik',
        'Hello Brother',
        1999,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-hello-brother-1999',
        2,
        'Chandi Ki Daal Par',
        'Salman Khan, Alka Yagnik',
        'Hello Brother',
        1999,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-dulhan-hum-le-jayenge-2000',
    directorId: 'himesh-reshammiya',
    title: 'Dulhan Hum Le Jayenge',
    year: 2000,
    cast: 'Salman Khan, Karisma Kapoor, Om Puri, Paresh Rawal',
    label: 'Tips Music',
    significance:
      'Himesh Reshammiya’s first solo full-length Bollywood soundtrack, becoming one of 2000’s top-selling Hindi albums with 1.8 million units.',
    songs: [
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        1,
        'Pyar Dilon Ka Mela Hai',
        'Alka Yagnik, Sonu Nigam',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        2,
        'Chamiya',
        'Alka Yagnik, Sonu Nigam',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        3,
        'Tera Pallu Sarka Jaaye Re',
        'Sonu Nigam, Alka Yagnik',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        4,
        'O Mr. Raja',
        'Sonu Nigam, Alka Yagnik, Karisma Kapoor',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        5,
        'Dulhan Hum Le Jayenge',
        'Kumar Sanu, Alka Yagnik, Sunita Rao',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-dulhan-hum-le-jayenge-2000',
        6,
        'Hai Na Bolo',
        'Kumar Sanu, Alka Yagnik',
        'Dulhan Hum Le Jayenge',
        2000,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-kahin-pyaar-na-ho-jaaye-2000',
    directorId: 'himesh-reshammiya',
    title: 'Kahin Pyaar Na Ho Jaaye',
    year: 2000,
    cast: 'Salman Khan, Rani Mukerji, Jackie Shroff, Raveena Tandon',
    label: 'Venus Records & Tapes',
    significance:
      'Early 2000s romantic comedy score featuring "O Priya O Priya", documented on ITWOFS for its close Latin-guitar similarity to Santana’s "Maria Maria".',
    songs: [
      origSong(
        'hr-kahin-pyaar-na-ho-jaaye-2000',
        1,
        'Kahin Pyar Na Ho Jaaye',
        'Kumar Sanu, Alka Yagnik',
        'Kahin Pyaar Na Ho Jaaye',
        2000,
        'Rajesh Malik'
      ),
      adaptedSong(
        'hr-kahin-pyaar-na-ho-jaaye-2000',
        2,
        'O Priya O Priya',
        'Kamaal Khan, Alka Yagnik, Kumar Sanu, Nitin Mukesh',
        'Kahin Pyaar Na Ho Jaaye',
        2000,
        'Sudhakar Sharma',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Maria Maria',
          originalArtist: 'Santana feat. The Product G&B',
          originalYear: '1999',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Shares the signature acoustic flamenco-guitar riff, bassline progression, and vocal hook phrasing of Santana’s Grammy-winning 1999 hit.',
          originalLink: 'https://www.youtube.com/watch?v=nPLV7lGbmT4',
          referenceSource: 'ITWOFS Hindi Archive (#41)',
        }
      ),
      origSong(
        'hr-kahin-pyaar-na-ho-jaaye-2000',
        3,
        'Savariya',
        'Kamaal Khan, Alka Yagnik',
        'Kahin Pyaar Na Ho Jaaye',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-kahin-pyaar-na-ho-jaaye-2000',
        4,
        'Pardesi',
        'Sonu Nigam, Alka Yagnik',
        'Kahin Pyaar Na Ho Jaaye',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-kahin-pyaar-na-ho-jaaye-2000',
        5,
        'Dhin Tara',
        'Kumar Sanu',
        'Kahin Pyaar Na Ho Jaaye',
        2000,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-kurukshetra-2000',
    directorId: 'himesh-reshammiya',
    title: 'Kurukshetra',
    year: 2000,
    cast: 'Sanjay Dutt, Mahima Chaudhry, Om Puri, Mukesh Rishi',
    label: 'Saregama',
    significance:
      'Mahesh Manjrekar action drama pairing earthy Hindi folk-inspired melodies with Kumar Sanu and Alka Yagnik; excludes Sukhwinder Singh’s guest track "Banthan Ke".',
    songs: [
      origSong(
        'hr-kurukshetra-2000',
        1,
        'Aap Ka Aana Dil Dhadkana',
        'Kumar Sanu, Alka Yagnik',
        'Kurukshetra',
        2000,
        'Dev Kohli'
      ),
      origSong(
        'hr-kurukshetra-2000',
        2,
        'Janam Tere Liye',
        'Kumar Sanu, Alka Yagnik',
        'Kurukshetra',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-kurukshetra-2000',
        3,
        'Ishq Bhi Kya Cheez Hai',
        'Kumar Sanu, Sonu Nigam, Alka Yagnik',
        'Kurukshetra',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-kurukshetra-2000',
        4,
        'Chal Shaadi Kar Lete',
        'Kumar Sanu, Alka Yagnik',
        'Kurukshetra',
        2000,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-kurukshetra-2000',
        5,
        'Ghagra',
        'Sunidhi Chauhan',
        'Kurukshetra',
        2000,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-jodi-no-1-2001',
    directorId: 'himesh-reshammiya',
    title: 'Jodi No.1',
    year: 2001,
    cast: 'Sanjay Dutt, Govinda, Twinkle Khanna, Monica Bedi',
    label: 'T-Series',
    significance:
      'Breezy David Dhawan comedy soundtrack led by Anand Raj Anand’s excluded track vs Himesh Reshammiya’s brisk comic duets.',
    songs: [
      origSong(
        'hr-jodi-no-1-2001',
        1,
        'Tera Dil Mera Thikana',
        'Kumar Sanu, Sonu Nigam',
        'Jodi No.1',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-jodi-no-1-2001',
        2,
        'Teri Bindiya Udda Ke Le Gaye',
        'Abhijeet, Sunidhi Chauhan',
        'Jodi No.1',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-jodi-no-1-2001',
        3,
        'Dil Dhak Dhak Karta Hai',
        'Sonu Nigam, Alka Yagnik',
        'Jodi No.1',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-jodi-no-1-2001',
        4,
        'Meri Mehbooba',
        'Sonu Nigam',
        'Jodi No.1',
        2001,
        'Dev Kohli'
      ),
      origSong(
        'hr-jodi-no-1-2001',
        5,
        'Main Mast Kudi',
        'Sonu Nigam, Sunidhi Chauhan',
        'Jodi No.1',
        2001,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
    directorId: 'himesh-reshammiya',
    title: 'Aamdani Atthani Kharcha Rupaiyaa',
    year: 2001,
    cast: 'Govinda, Juhi Chawla, Tabu, Chandrachur Singh, Johnny Lever',
    label: 'Tips Music',
    significance:
      'Early 2000s comedy-drama soundtrack composed by Himesh Reshammiya with lyrics by Sudhakar Sharma.',
    songs: [
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        1,
        'Aamdani Atthani Kharcha Rupaiyaa',
        'Udit Narayan, Shaan, Johnny Lever, Ketki Dave',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma',
        'Lively comedic title ensemble capturing middle-class household chaos.'
      ),
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        2,
        'Sajanniya Re',
        'Babul Supriyo, Sunidhi Chauhan',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        3,
        'Taal De Dada',
        'Kumar Sanu, Shaan, Sneha Pant',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        4,
        'Chori Chori Chupke Chupke',
        'Udit Narayan, Alka Yagnik',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        5,
        'Aap Ko Dekhkar',
        'Kumar Sanu, Alka Yagnik',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-aamdani-atthani-kharcha-rupaiyaa-2001',
        6,
        'Bol Chhadi',
        'Udit Narayan, Preeti, Pinky',
        'Aamdani Atthani Kharcha Rupaiyaa',
        2001,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-yeh-hai-jalwa-2002',
    directorId: 'himesh-reshammiya',
    title: 'Yeh Hai Jalwa',
    year: 2002,
    cast: 'Salman Khan, Rishi Kapoor, Ameesha Patel, Anupam Kher',
    label: 'Universal Music India',
    significance:
      'David Dhawan family caper featuring early Zubeen Garg and Shaan pop-melody collaborations under Sudhakar Sharma’s lyrics.',
    songs: [
      origSong(
        'hr-yeh-hai-jalwa-2002',
        1,
        'Dhire Dhire',
        'Udit Narayan, Alka Yagnik, Zubeen Garg',
        'Yeh Hai Jalwa',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-yeh-hai-jalwa-2002',
        2,
        'Chudi Khankayi Re',
        'Udit Narayan, Alka Yagnik, Shaan',
        'Yeh Hai Jalwa',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-yeh-hai-jalwa-2002',
        3,
        'Aankhen Pyari Hain',
        'Kumar Sanu, Alka Yagnik, Zubeen Garg',
        'Yeh Hai Jalwa',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-yeh-hai-jalwa-2002',
        4,
        'Jalwa',
        'Kumar Sanu, Alka Yagnik',
        'Yeh Hai Jalwa',
        2002,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-humraaz-2002',
    directorId: 'himesh-reshammiya',
    title: 'Humraaz',
    year: 2002,
    cast: 'Bobby Deol, Akshaye Khanna, Amisha Patel',
    label: 'Venus Records & Tapes',
    significance:
      'Himesh Reshammiya’s first Filmfare Award nomination for Best Music Director, marking his transition to sleek Abbas–Mustan romantic thrillers.',
    songs: [
      origSong(
        'hr-humraaz-2002',
        1,
        'Tune Zindagi Mein',
        'Udit Narayan',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-humraaz-2002',
        2,
        'Dil Ne Kar Liya',
        'Udit Narayan, Alka Yagnik',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-humraaz-2002',
        3,
        'Bardaasht Nahi Kar Sakta',
        'KK, Sunidhi Chauhan',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-humraaz-2002',
        4,
        'Sanam Mere Humraaz',
        'Kumar Sanu, Alka Yagnik',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-humraaz-2002',
        5,
        'Pyaar Kar',
        'Udit Narayan, Shaan, Kavita Krishnamurthy',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-humraaz-2002',
        6,
        'Life Ban Jayegi',
        'Sonu Nigam, Jaspinder Narula',
        'Humraaz',
        2002,
        'Sudhakar Sharma'
      ),
    ],
  },
  {
    id: 'hr-chalo-ishq-ladaaye-2002',
    directorId: 'himesh-reshammiya',
    title: 'Chalo Ishq Ladaaye',
    year: 2002,
    cast: 'Govinda, Rani Mukerji, Kader Khan',
    label: 'T-Series',
    significance:
      'Govinda–Rani Mukerji musical comedy scored by Himesh Reshammiya with Sameer’s lyrics.',
    songs: [
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        1,
        'Chalo Ishq Ladaaye',
        'Sonu Nigam, Alka Yagnik',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer',
        'Upbeat romantic title duet picturized on Govinda and Rani Mukerji.'
      ),
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        2,
        'Masti Masti',
        'Sonu Nigam, Alka Yagnik',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer'
      ),
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        3,
        'Pyaar Ka Funda',
        'Sonu Nigam, Kavita Krishnamurthy',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer'
      ),
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        4,
        'Tujhko Hi Dulhan',
        'Sonu Nigam, Alka Yagnik',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer'
      ),
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        5,
        'Aa Pyaar Kare Bindaas',
        'Sonu Nigam, Jaani Babu Qawwal',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer'
      ),
      origSong(
        'hr-chalo-ishq-ladaaye-2002',
        6,
        'Pote Ko Dulha Banaongi',
        'Sonu Nigam, Shobha Joshi',
        'Chalo Ishq Ladaaye',
        2002,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-kyaa-dil-ne-kahaa-2002',
    directorId: 'himesh-reshammiya',
    title: 'Kyaa Dil Ne Kahaa',
    year: 2002,
    cast: 'Tusshar Kapoor, Esha Deol, Rajesh Khanna, Raj Babbar',
    label: 'Sony Music India',
    significance:
      'Million-selling 2002 romantic album featuring \'Nikamma Kiya Is Dil Ne\' and \'Taaza Taaza\', penned by Sanjay Chhel.',
    songs: [
      origSong(
        'hr-kyaa-dil-ne-kahaa-2002',
        1,
        'Kya Dil Ne Kaha',
        'Udit Narayan, Alka Yagnik',
        'Kyaa Dil Ne Kahaa',
        2002,
        'Sanjay Chhel'
      ),
      origSong(
        'hr-kyaa-dil-ne-kahaa-2002',
        2,
        'Nikamma Kiya Is Dil Ne',
        'Shaan, Sanjivani Bhelande',
        'Kyaa Dil Ne Kahaa',
        2002,
        'Sanjay Chhel',
        'Breakout youth dance hit later recreated for the 2022 film Nikamma.'
      ),
      origSong(
        'hr-kyaa-dil-ne-kahaa-2002',
        3,
        'Taaza Taaza',
        'Shaan, Alka Yagnik',
        'Kyaa Dil Ne Kahaa',
        2002,
        'Sanjay Chhel'
      ),
      origSong(
        'hr-kyaa-dil-ne-kahaa-2002',
        4,
        'Sajana Tere Pyar Mein',
        'Udit Narayan, Alka Yagnik',
        'Kyaa Dil Ne Kahaa',
        2002,
        'Sanjay Chhel'
      ),
      origSong(
        'hr-kyaa-dil-ne-kahaa-2002',
        5,
        'Piya Pyar Ye Kyon Kiya',
        'Udit Narayan, Kavita Krishnamurthy',
        'Kyaa Dil Ne Kahaa',
        2002,
        'Sanjay Chhel'
      ),
    ],
  },
  {
    id: 'hr-tere-naam-2003',
    directorId: 'himesh-reshammiya',
    title: 'Tere Naam',
    year: 2003,
    cast: 'Salman Khan, Bhumika Chawla, Ravi Kishan',
    label: 'T-Series',
    significance:
      'Career-defining blockbuster winning Screen and Zee Cine Awards for Best Music Director; excludes guest duo Sajid–Wajid’s separate songs ("Lagan Lagi", "Tune Saath Jo Mera Chhoda").',
    songs: [
      origSong(
        'hr-tere-naam-2003',
        1,
        'Tere Naam',
        'Udit Narayan, Alka Yagnik',
        'Tere Naam',
        2003,
        'Sameer',
        'Haunting sitar-and-flute romantic theme that propelled Himesh Reshammiya into Bollywood’s A-list.'
      ),
      origSong(
        'hr-tere-naam-2003',
        2,
        'Oodhni',
        'Udit Narayan, Alka Yagnik',
        'Tere Naam',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-tere-naam-2003',
        3,
        'Tumse Milna',
        'Udit Narayan, Alka Yagnik',
        'Tere Naam',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-tere-naam-2003',
        4,
        'O Jaana',
        'Udit Narayan, Kamaal Khan, KK, Alka Yagnik',
        'Tere Naam',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-tere-naam-2003',
        5,
        'Kyo Kisi Ko',
        'Udit Narayan',
        'Tere Naam',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-tere-naam-2003',
        6,
        'Man Basia',
        'Alka Yagnik',
        'Tere Naam',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-tere-naam-2003',
        7,
        'Chand',
        'Udit Narayan',
        'Tere Naam',
        2003,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-zameen-2003',
    directorId: 'himesh-reshammiya',
    title: 'Zameen',
    year: 2003,
    cast: 'Ajay Devgn, Abhishek Bachchan, Bipasha Basu',
    label: 'T-Series',
    significance:
      'Rohit Shetty’s directorial debut featuring Himesh Reshammiya’s action-drama score and the viral club number \'Dilli Ki Sardi\'.',
    songs: [
      origSong(
        'hr-zameen-2003',
        1,
        'Sarzameen Se',
        'Shaan, KK, Himesh Reshammiya',
        'Zameen',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-zameen-2003',
        2,
        'Dilli Ki Sardi',
        'KK, Shweta Shetty',
        'Zameen',
        2003,
        'Sameer',
        'Popular mid-2000s club track anchored by KK and Shweta Shetty.'
      ),
      origSong(
        'hr-zameen-2003',
        3,
        'Mere Naal',
        'Shaan, Hema Sardesai',
        'Zameen',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-zameen-2003',
        4,
        'Tere Sang Ek Simple Si Coffee',
        'KK, Hema Sardesai',
        'Zameen',
        2003,
        'Sameer'
      ),
      origSong(
        'hr-zameen-2003',
        5,
        'Bas Ek Baar',
        'Babul Supriyo, Alka Yagnik, Himesh Reshammiya',
        'Zameen',
        2003,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-footpath-2003',
    directorId: 'himesh-reshammiya',
    title: 'Footpath',
    year: 2003,
    cast: 'Aftab Shivdasani, Bipasha Basu, Rahul Dev, Emraan Hashmi',
    label: 'Tips Music',
    significance:
      'Crime thriller soundtrack primarily by Nadeem–Shravan; includes Himesh Reshammiya’s single guest composition \'Soorat Pe Teri Pyar Aave\'.',
    songs: [
      origSong(
        'hr-footpath-2003',
        1,
        'Soorat Pe Teri Pyar Aave',
        'KK, Hema Sardesai, Jayesh Gandhi, Rakesh Pandit',
        'Footpath',
        2003,
        'Sameer',
        'Himesh Reshammiya’s sole guest composition on the Footpath soundtrack.'
      ),
    ],
  },
  {
    id: 'hr-chura-liyaa-hai-tumne-2003',
    directorId: 'himesh-reshammiya',
    title: 'Chura Liyaa Hai Tumne',
    year: 2003,
    cast: 'Zayed Khan, Esha Deol, Gulshan Grover',
    label: 'T-Series',
    significance:
      'Romantic thriller soundtrack starring Zayed Khan and Esha Deol with popular Shaan–Alka Yagnik and Shaan–Gayatri Iyer duets.',
    songs: [
      origSong(
        'hr-chura-liyaa-hai-tumne-2003',
        1,
        'Chura Liyaa Hai Tumne',
        'Shaan, Alka Yagnik',
        'Chura Liyaa Hai Tumne',
        2003,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-chura-liyaa-hai-tumne-2003',
        2,
        'Mohabbat Hai Mirchi',
        'Shaan, Gayatri Iyer',
        'Chura Liyaa Hai Tumne',
        2003,
        'Sanjay Chhel',
        'Peppy dance number launching Zayed Khan and Esha Deol’s screen chemistry.'
      ),
      origSong(
        'hr-chura-liyaa-hai-tumne-2003',
        3,
        'Don\'t You Love Me',
        'Shaan, Alka Yagnik',
        'Chura Liyaa Hai Tumne',
        2003,
        'Sudhakar Sharma'
      ),
      origSong(
        'hr-chura-liyaa-hai-tumne-2003',
        4,
        'Boys Are Best',
        'Shaan, Sunidhi Chauhan',
        'Chura Liyaa Hai Tumne',
        2003,
        'Jay Verma'
      ),
      origSong(
        'hr-chura-liyaa-hai-tumne-2003',
        5,
        'Dil Hai Mera',
        'Udit Narayan, Mahalakshmi Iyer',
        'Chura Liyaa Hai Tumne',
        2003,
        'Jay Verma'
      ),
    ],
  },
  {
    id: 'hr-run-2004',
    directorId: 'himesh-reshammiya',
    title: 'Run',
    year: 2004,
    cast: 'Abhishek Bachchan, Bhumika Chawla, Vijay Raaz',
    label: 'Tips Music',
    significance:
      'Melodic 2004 romantic action soundtrack written by Sameer with Sonu Nigam, Kumar Sanu, and Kunal Ganjawala.',
    songs: [
      origSong(
        'hr-run-2004',
        1,
        'Chain Ho Chain Ho',
        'Sonu Nigam, Alka Yagnik',
        'Run',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-run-2004',
        2,
        'Sarki Chunariya Re Zara Zara',
        'Udit Narayan, Alka Yagnik',
        'Run',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-run-2004',
        3,
        'Nahi Hona Nahi Hona',
        'Kunal Ganjawala, Richa Sharma',
        'Run',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-run-2004',
        4,
        'Tere Aane Se',
        'Kumar Sanu, Alka Yagnik',
        'Run',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-run-2004',
        5,
        'Dil Mein Jo Baat',
        'Sonu Nigam, Alka Yagnik',
        'Run',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-taarzan-the-wonder-car-2004',
    directorId: 'himesh-reshammiya',
    title: 'Taarzan: The Wonder Car',
    year: 2004,
    cast: 'Vatsal Sheth, Ayesha Takia, Ajay Devgn, Farida Jalal',
    label: 'Sangeet Music',
    significance:
      'High-gloss Abbas–Mustan youth fantasy album propelled by KK, Shaan, Kunal Ganjawala, and Alka Yagnik.',
    songs: [
      origSong(
        'hr-taarzan-the-wonder-car-2004',
        1,
        'O Lala Re',
        'KK, Alka Yagnik',
        'Taarzan: The Wonder Car',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-taarzan-the-wonder-car-2004',
        2,
        'Chura Lo',
        'Shaan, Alka Yagnik',
        'Taarzan: The Wonder Car',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-taarzan-the-wonder-car-2004',
        3,
        'Gonna Fall In Love',
        'Kunal Ganjawala, Alka Yagnik',
        'Taarzan: The Wonder Car',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-taarzan-the-wonder-car-2004',
        4,
        'O Sajan',
        'Udit Narayan, Alka Yagnik',
        'Taarzan: The Wonder Car',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-taarzan-the-wonder-car-2004',
        5,
        'Taarzan',
        'Kumar Sanu, Jayesh Gandhi',
        'Taarzan: The Wonder Car',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-dil-maange-more-2004',
    directorId: 'himesh-reshammiya',
    title: 'Dil Maange More',
    year: 2004,
    cast: 'Shahid Kapoor, Ayesha Takia, Soha Ali Khan, Tulip Joshi',
    label: 'T-Series',
    significance:
      'Screen Weekly-nominated romantic comedy soundtrack anchored by Sonu Nigam’s evergreen ballad "Aisa Deewana".',
    songs: [
      origSong(
        'hr-dil-maange-more-2004',
        1,
        'Aisa Deewana',
        'Sonu Nigam, Alka Yagnik',
        'Dil Maange More',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-maange-more-2004',
        2,
        'Gustakh Dil Tere Liye',
        'Sonu Nigam, Sunidhi Chauhan',
        'Dil Maange More',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-maange-more-2004',
        3,
        'Maine Chun Liya',
        'Udit Narayan, Shreya Ghoshal',
        'Dil Maange More',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-maange-more-2004',
        4,
        'Shiqwa Bhi Tumse',
        'Sonu Nigam',
        'Dil Maange More',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-maange-more-2004',
        5,
        'O Makhna Ve',
        'KK, Sunidhi Chauhan',
        'Dil Maange More',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aitraaz-2004',
    directorId: 'himesh-reshammiya',
    title: 'Aitraaz',
    year: 2004,
    cast: 'Akshay Kumar, Kareena Kapoor, Priyanka Chopra, Amrish Puri',
    label: 'Sony Music',
    significance:
      'IIFA and Zee Cine-nominated slick drama soundtrack pairing smooth romantic hits ("Aankhen Bandh Karke") with R. Kelly-styled dance track "Gela Gela Gela".',
    songs: [
      origSong(
        'hr-aitraaz-2004',
        1,
        'Aankhen Bandh Karke',
        'Udit Narayan, Alka Yagnik',
        'Aitraaz',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aitraaz-2004',
        2,
        'Woh Tassavur Ka Aalam',
        'Udit Narayan, Alka Yagnik',
        'Aitraaz',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aitraaz-2004',
        3,
        'Talatum Talatum',
        'Alka Yagnik, Udit Narayan, Jayesh Gandhi',
        'Aitraaz',
        2004,
        'Sameer'
      ),
      adaptedSong(
        'hr-aitraaz-2004',
        4,
        'Gela Gela Gela',
        'Adnan Sami, Sunidhi Chauhan',
        'Aitraaz',
        2004,
        'Sameer',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Thoia Thoing',
          originalArtist: 'R. Kelly',
          originalYear: '2003',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Built around the bouncy bass groove, rhythmic cadence, and hook structure of R. Kelly’s 2003 Chocolate Factory single.',
          originalLink: 'https://www.youtube.com/watch?v=_PzF-qjPi3U',
          referenceSource: 'ITWOFS Hindi Archive (#56) & CopycatList',
        }
      ),
      origSong(
        'hr-aitraaz-2004',
        5,
        'I Want to Make Love to You',
        'Sunidhi Chauhan',
        'Aitraaz',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aitraaz-2004',
        6,
        'Yeh Dil Tumpe Aa Gaya',
        'KK, Alisha Chinai',
        'Aitraaz',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aabra-ka-daabra-2004',
    directorId: 'himesh-reshammiya',
    title: 'Aabra Ka Daabra',
    year: 2004,
    cast: 'Athit Naik, Satish Kaushik, Hansika Motwani, Nupur Mehta',
    label: 'T-Series',
    significance:
      '3D fantasy children’s film with upbeat ensembles scored by Himesh Reshammiya.',
    songs: [
      origSong(
        'hr-aabra-ka-daabra-2004',
        1,
        'Shiv Om',
        'Shaan, Dheeraj Kumar Kochhar, Prabhudeva',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aabra-ka-daabra-2004',
        2,
        'Chutkan Gang',
        'Udit Narayan',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aabra-ka-daabra-2004',
        3,
        'Love Hoya',
        'KK, Hema Sardesai, Jayesh Gandhi',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aabra-ka-daabra-2004',
        4,
        'Tara Ram Pam',
        'Kunal Ganjawala',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aabra-ka-daabra-2004',
        5,
        'Didave',
        'Anuradha Sriram',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-aabra-ka-daabra-2004',
        6,
        'Zindagi Zindagi',
        'Kumar Sanu, Alka Yagnik',
        'Aabra Ka Daabra',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-shukriya-2004',
    directorId: 'himesh-reshammiya',
    title: 'Shukriya',
    year: 2004,
    cast: 'Anupam Kher, Aftab Shivdasani, Shriya Saran',
    label: 'T-Series',
    significance:
      'Multi-composer family drama featuring Himesh Reshammiya’s three compositions penned by Sameer; Vishal–Shekhar and Devendra–Yogendra’s tracks are excluded.',
    songs: [
      origSong(
        'hr-shukriya-2004',
        1,
        'Tumhara Tumhara',
        'Udit Narayan, Alka Yagnik',
        'Shukriya',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-shukriya-2004',
        2,
        'Tumhe Jitna Bhulate Hain',
        'Sonu Nigam',
        'Shukriya',
        2004,
        'Sameer',
        'Soulful Sonu Nigam ballad composed by Himesh Reshammiya.'
      ),
      origSong(
        'hr-shukriya-2004',
        3,
        'Kya Haal Hai Mere Is Dil Ka',
        'Udit Narayan, Alka Yagnik',
        'Shukriya',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-dil-ne-jise-apna-kahaa-2004',
    directorId: 'himesh-reshammiya',
    title: 'Dil Ne Jise Apna Kahaa',
    year: 2004,
    cast: 'Salman Khan, Preity Zinta, Bhumika Chawla',
    label: 'T-Series',
    significance:
      'Shared soundtrack with A.R. Rahman; includes only Himesh Reshammiya’s four composed tracks penned by Sameer.',
    songs: [
      origSong(
        'hr-dil-ne-jise-apna-kahaa-2004',
        1,
        'Bindiya Chamakne Lagi',
        'Udit Narayan, Alka Yagnik',
        'Dil Ne Jise Apna Kahaa',
        2004,
        'Sameer',
        'Festive romantic duet composed by Himesh Reshammiya alongside A.R. Rahman’s tracks on the album.'
      ),
      origSong(
        'hr-dil-ne-jise-apna-kahaa-2004',
        2,
        'Yeh Dil To Mila Hai',
        'Sonu Nigam, Alka Yagnik',
        'Dil Ne Jise Apna Kahaa',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-ne-jise-apna-kahaa-2004',
        3,
        'Go Balle Balle',
        'KK, Alisha Chinai, Jayesh Gandhi',
        'Dil Ne Jise Apna Kahaa',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-dil-ne-jise-apna-kahaa-2004',
        4,
        'Meri Nas Nas Mein',
        'Udit Narayan, Alka Yagnik',
        'Dil Ne Jise Apna Kahaa',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-julie-2004',
    directorId: 'himesh-reshammiya',
    title: 'Julie',
    year: 2004,
    cast: 'Neha Dhupia, Priyanshu Chatterjee, Sanjay Kapoor, Yash Tonk',
    label: 'T-Series',
    significance:
      '2004 romantic drama featuring Neha Dhupia with melodious ballads by Sonu Nigam, Udit Narayan, and Alka Yagnik.',
    songs: [
      origSong(
        'hr-julie-2004',
        1,
        'Hum Tumse Dil',
        'Udit Narayan, Anuradha Paudwal',
        'Julie',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-julie-2004',
        2,
        'Dhadkan Ho Gayee',
        'Udit Narayan, Alka Yagnik',
        'Julie',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-julie-2004',
        3,
        'Aye Dil Bata',
        'Sonu Nigam, Alka Yagnik',
        'Julie',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-julie-2004',
        4,
        'Julie',
        'Sonu Nigam, Jayesh Gandhi',
        'Julie',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-julie-2004',
        5,
        'Bheegi Bheegi',
        'Alka Yagnik',
        'Julie',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-julie-2004',
        6,
        'Ishq Tezaab',
        'Sunidhi Chauhan, Jayesh Gandhi',
        'Julie',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-bardaasht-2004',
    directorId: 'himesh-reshammiya',
    title: 'Bardaasht',
    year: 2004,
    cast: 'Bobby Deol, Lara Dutta, Ritesh Deshmukh, Rahul Dev',
    label: 'T-Series',
    significance:
      'Action thriller scored by Himesh Reshammiya featuring \'Silsile Mulaqaton Ke\' and \'Janaabe Ali\'.',
    songs: [
      origSong(
        'hr-bardaasht-2004',
        1,
        'Silsile Mulaqaton Ke',
        'Udit Narayan, Alka Yagnik',
        'Bardaasht',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-bardaasht-2004',
        2,
        'Janaabe Ali',
        'Shaan, Kunal Ganjawala, Jayesh Gandhi',
        'Bardaasht',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-bardaasht-2004',
        3,
        'Aap Ki Khata Aap Ki Bewafayee',
        'Shaan, Alka Yagnik',
        'Bardaasht',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-bardaasht-2004',
        4,
        'Na Na Na Na Re',
        'Kunal Ganjawala, Alisha Chinai',
        'Bardaasht',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-bardaasht-2004',
        5,
        'Dil Mera Dil Na Maane',
        'Udit Narayan, Alka Yagnik',
        'Bardaasht',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-tum-a-dangerous-obsession-2004',
    directorId: 'himesh-reshammiya',
    title: 'Tum – A Dangerous Obsession',
    year: 2004,
    cast: 'Manisha Koirala, Karan Nath, Rajat Bedi, Aman Verma',
    label: 'T-Series',
    significance:
      'Suspense drama featuring Adnan Sami’s \'Kyun Mera Dil\' and Shreya Ghoshal’s \'Dil To Udne Laga\'.',
    songs: [
      origSong(
        'hr-tum-a-dangerous-obsession-2004',
        1,
        'Kyun Mera Dil',
        'Adnan Sami',
        'Tum – A Dangerous Obsession',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-tum-a-dangerous-obsession-2004',
        2,
        'Dil To Udne Laga',
        'Shreya Ghoshal',
        'Tum – A Dangerous Obsession',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-tum-a-dangerous-obsession-2004',
        3,
        'Rehna To Hain',
        'Kumar Sanu, Alka Yagnik',
        'Tum – A Dangerous Obsession',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-tum-a-dangerous-obsession-2004',
        4,
        'Sangdil Sanam',
        'Udit Narayan, Anuradha Sharma',
        'Tum – A Dangerous Obsession',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-tum-a-dangerous-obsession-2004',
        5,
        'Mera Dil Laile',
        'Shaan',
        'Tum – A Dangerous Obsession',
        2004,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-ishq-hai-tumse-2004',
    directorId: 'himesh-reshammiya',
    title: 'Ishq Hai Tumse',
    year: 2004,
    cast: 'Dino Morea, Bipasha Basu, Alok Nath',
    label: 'Tips Music',
    significance:
      'Romantic musical starring Dino Morea and Bipasha Basu featuring \'O Soniya\' and \'Lutf De Gayee\'.',
    songs: [
      origSong(
        'hr-ishq-hai-tumse-2004',
        1,
        'O Soniya',
        'Udit Narayan, Alka Yagnik',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        2,
        'Dil Dil',
        'Udit Narayan, Alka Yagnik',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        3,
        'Chaahat Ki Khushboo',
        'Shaan, Alka Yagnik',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        4,
        'Lutf De Gayee',
        'KK, Hema Sardesai',
        'Ishq Hai Tumse',
        2004,
        'Sanjay Chhel'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        5,
        'Ishq Hai Zindagi',
        'Udit Narayan, Alka Yagnik, Vinod Rathod',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        6,
        'Humko Chahiye',
        'Shaan, Sagarika',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        7,
        'Chura Liya Hai Tumne',
        'Shaan, Alka Yagnik',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
      origSong(
        'hr-ishq-hai-tumse-2004',
        8,
        'Humne Tumko Dil',
        'Alka Yagnik, Anand Raj Anand, Babul Supriyo',
        'Ishq Hai Tumse',
        2004,
        'Sameer'
      ),
    ],
  },
  // =========================================================================
  // 2005 – 2007: PEAK PROLIFIC WAVE, AASHIQ BANAYA AAPNE & SUFI-ROCK ERA
  // =========================================================================
  {
    id: 'hr-vaada-2005',
    directorId: 'himesh-reshammiya',
    title: 'Vaada',
    year: 2005,
    cast: 'Arjun Rampal, Amisha Patel, Zayed Khan',
    label: 'T-Series',
    significance:
      'Atmospheric thriller soundtrack showcasing Kavita Seth’s soulful "Maula" alongside soaring Sameer-penned duets.',
    songs: [
      origSong(
        'hr-vaada-2005',
        1,
        'Vaada Hai Yeh',
        'Kumar Sanu, Udit Narayan, Alka Yagnik',
        'Vaada',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaada-2005',
        2,
        'Main Ishq Uska',
        'Babul Supriyo, Alka Yagnik',
        'Vaada',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaada-2005',
        3,
        'Teri Kurti Sexy',
        'Shaan, Anuradha Sriram',
        'Vaada',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaada-2005',
        4,
        'Maula',
        'Kavita Seth',
        'Vaada',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-maine-pyaar-kyun-kiya-2005',
    directorId: 'himesh-reshammiya',
    title: 'Maine Pyaar Kyun Kiya?',
    year: 2005,
    cast: 'Salman Khan, Sushmita Sen, Katrina Kaif, Sohail Khan',
    label: 'T-Series',
    significance:
      'Chartbuster David Dhawan comedy soundtrack earning a Zee Cine nomination, highlighted by the youth anthem "Just Chill".',
    songs: [
      origSong(
        'hr-maine-pyaar-kyun-kiya-2005',
        1,
        'Just Chill',
        'Sonu Nigam, Jayesh Gandhi, Amrita Kak',
        'Maine Pyaar Kyun Kiya?',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-maine-pyaar-kyun-kiya-2005',
        2,
        'Laga Prem Rog',
        'Kamaal Khan, Alka Yagnik',
        'Maine Pyaar Kyun Kiya?',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-maine-pyaar-kyun-kiya-2005',
        3,
        'Sajan Tumse Pyar',
        'Udit Narayan, Alka Yagnik',
        'Maine Pyaar Kyun Kiya?',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-maine-pyaar-kyun-kiya-2005',
        4,
        'Dil Di Nazar',
        'Shaan, Priya Darshini, Neeraj Shridhar',
        'Maine Pyaar Kyun Kiya?',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-maine-pyaar-kyun-kiya-2005',
        5,
        'Teri Meri Love Story',
        'Shaan, Sunidhi Chauhan, Babul Supriyo',
        'Maine Pyaar Kyun Kiya?',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-kyon-ki-2005',
    directorId: 'himesh-reshammiya',
    title: 'Kyon Ki',
    year: 2005,
    cast: 'Salman Khan, Kareena Kapoor, Rimi Sen, Jackie Shroff',
    label: 'T-Series',
    significance:
      'Priyadarshan drama balancing poignant strings ("Kyon Ki Itna Pyar", "Dil Keh Raha Hai") with festive dance numbers.',
    songs: [
      origSong(
        'hr-kyon-ki-2005',
        1,
        'Kyon Ki Itna Pyar',
        'Udit Narayan, Alka Yagnik',
        'Kyon Ki',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kyon-ki-2005',
        2,
        'Dil Keh Raha Hai',
        'Kunal Ganjawala',
        'Kyon Ki',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kyon-ki-2005',
        3,
        'Dil Ke Badle Sanam',
        'Udit Narayan, Alka Yagnik',
        'Kyon Ki',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kyon-ki-2005',
        4,
        'Jhatka Maare',
        'Udit Narayan, Shaan, Kailash Kher',
        'Kyon Ki',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kyon-ki-2005',
        5,
        'Aa Jee Le Ik Pal Mein',
        'Udit Narayan, Alka Yagnik',
        'Kyon Ki',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aashiq-banaya-aapne-2005',
    directorId: 'himesh-reshammiya',
    title: 'Aashiq Banaya Aapne',
    year: 2005,
    cast: 'Emraan Hashmi, Tanushree Dutta, Sonu Sood',
    label: 'T-Series',
    significance:
      'Watershed album that launched Himesh Reshammiya’s Filmfare-winning playback singing career ("Aashiq Banaya Aapne", "Aap Ki Kashish"), alongside two ITWOFS-documented Pakistani pop adaptations.',
    songs: [
      origSong(
        'hr-aashiq-banaya-aapne-2005',
        1,
        'Aashiq Banaya Aapne',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Aashiq Banaya Aapne',
        2005,
        'Sameer',
        'Winner of the Filmfare, IIFA, and Zee Cine Awards for Best Male Playback Singer.'
      ),
      adaptedSong(
        'hr-aashiq-banaya-aapne-2005',
        2,
        'Mar Jaawan Mit Jaawan',
        'Abhijeet Sawant, Sunidhi Chauhan',
        'Aashiq Banaya Aapne',
        2005,
        'Sameer',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Marjawaan',
          originalArtist: 'Faakhir Mehmood',
          originalYear: '2002',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Reproduces the primary chorus melody, phrasing, and rhythmic cadence of Pakistani pop star Faakhir’s 2002 album track "Marjawaan" (Aatish).',
          originalLink: 'https://www.youtube.com/watch?v=nAcbQou7bYk',
          referenceSource: 'ITWOFS Hindi Archive (#64) & CopycatList',
        }
      ),
      origSong(
        'hr-aashiq-banaya-aapne-2005',
        3,
        'Aap Ki Kashish',
        'Himesh Reshammiya, Krishna Beura, Ahir',
        'Aashiq Banaya Aapne',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-aashiq-banaya-aapne-2005',
        4,
        'Dil Nashin Dil Nashin',
        'KK',
        'Aashiq Banaya Aapne',
        2005,
        'Sameer'
      ),
      adaptedSong(
        'hr-aashiq-banaya-aapne-2005',
        5,
        'Dillagi Mein Jo Beet Jaaye',
        'Sonu Nigam, Shaan, Himesh Reshammiya, Jayesh Gandhi',
        'Aashiq Banaya Aapne',
        2005,
        'Sameer',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Rangeen',
          originalArtist: 'Ali Zafar',
          originalYear: '2003',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Closely mirrors the bouncy acoustic hook and verse melody of Ali Zafar’s 2003 Huqa Pani hit "Rangeen".',
          originalLink: 'https://www.youtube.com/watch?v=MSjJWPckRFk',
          referenceSource: 'ITWOFS Hindi Archive (#64) & CopycatList',
        }
      ),
    ],
  },
  {
    id: 'hr-anjaane-2005',
    directorId: 'himesh-reshammiya',
    title: 'Anjaane',
    year: 2005,
    cast: 'Manisha Koirala, Sanjay Kapoor, Tejaswini Kolhapure',
    label: 'T-Series',
    significance:
      'Psychological thriller scored by Himesh Reshammiya with vocals by Alka Yagnik, Udit Narayan, and KK.',
    songs: [
      origSong(
        'hr-anjaane-2005',
        1,
        'Kis Kadar Chahate Hai Ham Tumko Sanam',
        'Alka Yagnik, Jayesh Gandhi',
        'Anjaane',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-anjaane-2005',
        2,
        'De Do Re De Do',
        'Jayesh Gandhi, Sunidhi Chauhan',
        'Anjaane',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-anjaane-2005',
        3,
        'O Maahive Re O Maahive',
        'Udit Narayan, Alka Yagnik',
        'Anjaane',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-anjaane-2005',
        4,
        'O Soni Re O Sayyoni Re',
        'KK, Sapna Mukherjee',
        'Anjaane',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-anjaane-2005',
        5,
        'Anjaane',
        'Kunal Ganjawala',
        'Anjaane',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-vaah-life-ho-toh-aisi-2005',
    directorId: 'himesh-reshammiya',
    title: 'Vaah! Life Ho Toh Aisi!',
    year: 2005,
    cast: 'Shahid Kapoor, Amrita Rao, Sanjay Dutt, Arshad Warsi',
    label: 'T-Series',
    significance:
      'Family fantasy featuring Himesh Reshammiya’s five composed songs; Ajay–Atul’s separate \'Hanuman Chalisa\' track is excluded.',
    songs: [
      origSong(
        'hr-vaah-life-ho-toh-aisi-2005',
        1,
        'Chaahenge Tumhe',
        'Udit Narayan, Shreya Ghoshal',
        'Vaah! Life Ho Toh Aisi!',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaah-life-ho-toh-aisi-2005',
        2,
        'Dil Ke Maare Hai',
        'Udit Narayan, Alka Yagnik',
        'Vaah! Life Ho Toh Aisi!',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaah-life-ho-toh-aisi-2005',
        3,
        'Koi Aap Jaisa',
        'Kunal Ganjawala, Madhushree',
        'Vaah! Life Ho Toh Aisi!',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaah-life-ho-toh-aisi-2005',
        4,
        'Pyaar Mein Tere',
        'Sonu Nigam, Shreya Ghoshal',
        'Vaah! Life Ho Toh Aisi!',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-vaah-life-ho-toh-aisi-2005',
        5,
        'Teri Yaad Yaad',
        'KK, Jayesh Gandhi',
        'Vaah! Life Ho Toh Aisi!',
        2005,
        'Sameer',
        'Popular heartbreak number featuring KK and Jayesh Gandhi.'
      ),
    ],
  },
  {
    id: 'hr-koi-aap-sa-2005',
    directorId: 'himesh-reshammiya',
    title: 'Koi Aap Sa',
    year: 2005,
    cast: 'Aftab Shivdasani, Anita Hassanandani, Dipannita Sharma',
    label: 'Tips Music',
    significance:
      'Romantic drama featuring \'Aadat Ho Chuki\', \'Seene Mein Dil\', and \'Kabhi Na Sukoon Aaya\'.',
    songs: [
      origSong(
        'hr-koi-aap-sa-2005',
        1,
        'Seene Mein Dil',
        'Udit Narayan, Alka Yagnik',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-koi-aap-sa-2005',
        2,
        'Aadat Ho Chuki',
        'Shaan, Sunidhi Chauhan, Jayesh Gandhi',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-koi-aap-sa-2005',
        3,
        'Baandh Mere Pairon Mein',
        'Sonu Nigam, Sunidhi Chauhan',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-koi-aap-sa-2005',
        4,
        'Tere Dil Ka Rishta',
        'Sonu Nigam',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-koi-aap-sa-2005',
        5,
        'Koi Aap Sa',
        'Sonu Nigam, Alka Yagnik',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-koi-aap-sa-2005',
        6,
        'Kabhi Na Sukoon Aaya',
        'Udit Narayan, Alka Yagnik',
        'Koi Aap Sa',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-iqbal-2005',
    directorId: 'himesh-reshammiya',
    title: 'Iqbal',
    year: 2005,
    cast: 'Shreyas Talpade, Naseeruddin Shah, Girish Karnad, Shweta Basu Prasad',
    label: 'Tips Music',
    significance:
      'Multi-composer sports drama soundtrack; includes Himesh Reshammiya’s sole contributed track \'Aankhon Mein Sapna\' (Salim–Sulaiman’s tracks are excluded).',
    songs: [
      origSong(
        'hr-iqbal-2005',
        1,
        'Aankhon Mein Sapna',
        'Ravindra Upadhyay',
        'Iqbal',
        2005,
        'Sameer',
        'Himesh Reshammiya’s single soundtrack contribution to Nagesh Kukunoor’s Iqbal album.'
      ),
    ],
  },
  {
    id: 'hr-silsiilay-2005',
    directorId: 'himesh-reshammiya',
    title: 'Silsiilay',
    year: 2005,
    cast: 'Tabu, Bhumika Chawla, Riya Sen, Celina Jaitly, Kay Kay Menon',
    label: 'T-Series',
    significance:
      'Anthology romantic drama featuring \'Ban Jaiye\', \'Ahista Ahista\', and \'Meri Chandi Tu\'.',
    songs: [
      origSong(
        'hr-silsiilay-2005',
        1,
        'Ban Jaiye',
        'Kunal Ganjawala, Alka Yagnik',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        2,
        'Ahista Ahista',
        'Sonu Nigam, Shreya Ghoshal, Jayesh Gandhi',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        3,
        'Meri Chandi Tu (Dum Mast Kalander)',
        'Kailash Kher, Sunidhi Chauhan, Suzanne D\'Mello',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        4,
        'Meri Jaan',
        'Kunal Ganjawala, Sadhana Sargam',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        5,
        'Jab Jab Dil Mile',
        'Sonu Nigam, Jayesh Gandhi',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        6,
        'Tere Liye Mere',
        'Jolly Mukherjee, Alisha Chinai, Jayesh Gandhi',
        'Silsiilay',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-silsiilay-2005',
        7,
        'Belibaas Karde',
        'Sunidhi Chauhan, Jayesh Gandhi',
        'Silsiilay',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-yakeen-2005',
    directorId: 'himesh-reshammiya',
    title: 'Yakeen',
    year: 2005,
    cast: 'Arjun Rampal, Priyanka Chopra, Kim Sharma',
    label: 'T-Series',
    significance:
      'Suspense thriller starring Arjun Rampal and Priyanka Chopra with five melodic tracks by Himesh Reshammiya.',
    songs: [
      origSong(
        'hr-yakeen-2005',
        1,
        'Tune Mujhko',
        'Udit Narayan, Alka Yagnik',
        'Yakeen',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-yakeen-2005',
        2,
        'Meri Aankhon Mein',
        'Udit Narayan, Alka Yagnik',
        'Yakeen',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-yakeen-2005',
        3,
        'Tu Hi',
        'Sonu Nigam, Shreya Ghoshal',
        'Yakeen',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-yakeen-2005',
        4,
        'Bhoolna Nahin',
        'Shaan, Sunidhi Chauhan',
        'Yakeen',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-yakeen-2005',
        5,
        'Chehra Tera',
        'Sonu Nigam, Alka Yagnik',
        'Yakeen',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-main-aisa-hi-hoon-2005',
    directorId: 'himesh-reshammiya',
    title: 'Main Aisa Hi Hoon',
    year: 2005,
    cast: 'Ajay Devgn, Sushmita Sen, Esha Deol, Anupam Kher',
    label: 'T-Series',
    significance:
      'Emotional family drama anchored by Sonu Nigam and Shreya Ghoshal’s \'Papa Mere Papa\' and \'Just Walk into My Life\'.',
    songs: [
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        1,
        'Just Walk into My Life',
        'Shaan, Sunidhi Chauhan',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        2,
        'Deewanapan Deewangi',
        'Udit Narayan, Alka Yagnik',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        3,
        'Papa Mere Papa',
        'Sonu Nigam, Shreya Ghoshal, Baby Aparna',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer',
        'Beloved father-daughter emotional ballad performed by Sonu Nigam and Shreya Ghoshal.'
      ),
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        4,
        'Teri Galiyon Se',
        'Sunidhi Chauhan, Jayesh Gandhi',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        5,
        'Dil Mera Todo Na',
        'Udit Narayan',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-main-aisa-hi-hoon-2005',
        6,
        'Raat Hai Soyi Soyi',
        'Sonu Nigam',
        'Main Aisa Hi Hoon',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-kuchh-meetha-ho-jaye-2005',
    directorId: 'himesh-reshammiya',
    title: 'Kuchh Meetha Ho Jaye',
    year: 2005,
    cast: 'Arshad Warsi, Mahima Chaudhry, Parvin Dabas',
    label: 'T-Series',
    significance:
      'Romantic comedy-drama scored by Himesh Reshammiya featuring Sonu Nigam, Shreya Ghoshal, and Dr. Shoma Ghosh’s thumri.',
    songs: [
      origSong(
        'hr-kuchh-meetha-ho-jaye-2005',
        1,
        'Kuchh Meetha Ho Jaye',
        'Sonu Nigam, Shreya Ghoshal, Jayesh Gandhi',
        'Kuchh Meetha Ho Jaye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kuchh-meetha-ho-jaye-2005',
        2,
        'Bhool Jayege Hum',
        'Udit Narayan, Shreya Ghoshal',
        'Kuchh Meetha Ho Jaye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kuchh-meetha-ho-jaye-2005',
        3,
        'Aane Do',
        'Dr. Shoma Ghosh',
        'Kuchh Meetha Ho Jaye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kuchh-meetha-ho-jaye-2005',
        4,
        'Lagne Lage Ho',
        'Sonu Nigam, Alka Yagnik',
        'Kuchh Meetha Ho Jaye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-kuchh-meetha-ho-jaye-2005',
        5,
        'Jaana Tenu Rab Da',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Kuchh Meetha Ho Jaye',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-blackmail-2005',
    directorId: 'himesh-reshammiya',
    title: 'Blackmail',
    year: 2005,
    cast: 'Ajay Devgn, Suniel Shetty, Priyanka Chopra, Dia Mirza',
    label: 'T-Series',
    significance:
      'Action thriller starring Ajay Devgn and Priyanka Chopra featuring \'Jaana Nahin Tha\' and \'Akhiyaan Lada Jaa\'.',
    songs: [
      origSong(
        'hr-blackmail-2005',
        1,
        'Jaana Nahin Tha',
        'Sonu Nigam, Alka Yagnik',
        'Blackmail',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-blackmail-2005',
        2,
        'Tune Di Bekarari',
        'Shaan, Shreya Ghoshal, Jayesh Gandhi',
        'Blackmail',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-blackmail-2005',
        3,
        'Akhiyaan Lada Jaa',
        'Udit Narayan, Alka Yagnik',
        'Blackmail',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-blackmail-2005',
        4,
        'Kaun Kehata Hai',
        'Udit Narayan, Shreya Ghoshal',
        'Blackmail',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-blackmail-2005',
        5,
        'Imli Imli',
        'Hema Sardesai, Jayesh Gandhi',
        'Blackmail',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-insan-2005',
    directorId: 'himesh-reshammiya',
    title: 'Insan',
    year: 2005,
    cast: 'Akshay Kumar, Ajay Devgn, Tusshar Kapoor, Esha Deol, Lara Dutta',
    label: 'T-Series',
    significance:
      'Ensemble action drama featuring \'Rain Rain\', \'Is Tarah Deewane\', and \'Rabba Mere Rabba\'.',
    songs: [
      origSong(
        'hr-insan-2005',
        1,
        'Chunri',
        'Udit Narayan, Alka Yagnik',
        'Insan',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-insan-2005',
        2,
        'Is Tarah Deewane',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Insan',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-insan-2005',
        3,
        'Khwahish',
        'Sonu Nigam, Alka Yagnik',
        'Insan',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-insan-2005',
        4,
        'Rabba Mere Rabba',
        'Udit Narayan, Alka Yagnik',
        'Insan',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-insan-2005',
        5,
        'Rain Rain',
        'Shaan, Sunidhi Chauhan',
        'Insan',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-nigehbaan-the-third-eye-2005',
    directorId: 'himesh-reshammiya',
    title: 'Nigehbaan – The Third Eye',
    year: 2005,
    cast: 'Sameer Dharmadhikari, Sandali Sinha, Sayaji Shinde, Govind Namdeo',
    label: 'T-Series',
    significance:
      '2005 suspense thriller featuring four Himesh Reshammiya tracks; Anu Malik’s guest track \'Andarlu Mandarul\' is excluded.',
    songs: [
      origSong(
        'hr-nigehbaan-the-third-eye-2005',
        1,
        'Shaayar Shaayar',
        'Udit Narayan, Shreya Ghoshal',
        'Nigehbaan – The Third Eye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-nigehbaan-the-third-eye-2005',
        2,
        'Ki Kara Main Ki Kara',
        'Kunal Ganjawala, Hema Sardesai',
        'Nigehbaan – The Third Eye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-nigehbaan-the-third-eye-2005',
        3,
        'Vaada Yeh Tera Vaada',
        'Alka Yagnik',
        'Nigehbaan – The Third Eye',
        2005,
        'Sameer'
      ),
      origSong(
        'hr-nigehbaan-the-third-eye-2005',
        4,
        'Poocho Na Kya Hoti Hai',
        'Pankaj Udhas',
        'Nigehbaan – The Third Eye',
        2005,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aksar-2006',
    directorId: 'himesh-reshammiya',
    title: 'Aksar',
    year: 2006,
    cast: 'Emraan Hashmi, Udita Goswami, Dino Morea',
    label: 'T-Series',
    significance:
      'Multi-platinum 1.5-million-selling thriller album anchored by the club phenomenon "Jhalak Dikhlaja" and double Filmfare nominations.',
    songs: [
      origSong(
        'hr-aksar-2006',
        1,
        'Jhalak Dikhlaja',
        'Himesh Reshammiya',
        'Aksar',
        2006,
        'Sameer',
        'Iconic high-pitch electro-Sufi anthem that topped Indian charts throughout 2006.'
      ),
      origSong(
        'hr-aksar-2006',
        2,
        'Lagi Lagi',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Aksar',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aksar-2006',
        3,
        'Soniye',
        'KK, Sunidhi Chauhan',
        'Aksar',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aksar-2006',
        4,
        'Loot Jayenge',
        'Kunal Ganjawala, Sunidhi Chauhan, Jayesh Gandhi',
        'Aksar',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aksar-2006',
        5,
        'Mohabbat Ke',
        'Himesh Reshammiya, Tulsi Kumar',
        'Aksar',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-36-china-town-2006',
    directorId: 'himesh-reshammiya',
    title: '36 China Town',
    year: 2006,
    cast: 'Shahid Kapoor, Kareena Kapoor, Akshaye Khanna, Paresh Rawal',
    label: 'Tips Music',
    significance:
      'Abbas–Mustan murder-mystery comedy fueled by the chart-topping "Aashiqui Mein Teri" and "Jab Kabhi".',
    songs: [
      origSong(
        'hr-36-china-town-2006',
        1,
        'Aashiqui Mein Teri',
        'Himesh Reshammiya, Sunidhi Chauhan',
        '36 China Town',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-36-china-town-2006',
        2,
        'Jab Kabhi',
        'Kunal Ganjawala, Alka Yagnik',
        '36 China Town',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-36-china-town-2006',
        3,
        '24x7 I Think of You',
        'Shaan, Sunidhi Chauhan',
        '36 China Town',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-36-china-town-2006',
        4,
        'Dil Tumhare Bina',
        'Himesh Reshammiya, Alka Yagnik',
        '36 China Town',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-36-china-town-2006',
        5,
        'Badi Dilchaspi Hai',
        'KK, Arya',
        '36 China Town',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-shaadi-se-pehle-2006',
    directorId: 'himesh-reshammiya',
    title: 'Shaadi Se Pehle',
    year: 2006,
    cast: 'Akshaye Khanna, Mallika Sherawat, Ayesha Takia, Suniel Shetty',
    label: 'T-Series',
    significance:
      '2006 romantic comedy album anchored by bhangra-pop number "Ankhiyon Se Gal Kar Gayi", which draws directly from Abrar-ul-Haq’s "Asan Teri Gal Karni".',
    songs: [
      adaptedSong(
        'hr-shaadi-se-pehle-2006',
        1,
        'Ankhiyon Se Gal Kar Gayi',
        'Sukhwinder Singh, Sonu Nigam, Sunidhi Chauhan',
        'Shaadi Se Pehle',
        2006,
        'Sameer',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Asan Teri Gal Karni',
          originalArtist: 'Abrar-ul-Haq',
          originalYear: '2002',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Closely follows the Punjabi bhangra vocal hook and rhythmic refrain of Abrar-ul-Haq’s 2002 hit "Asan Teri Gal Karni" from Nach Punjaban.',
          originalLink: 'https://www.youtube.com/watch?v=AtYR3x0cQvo',
          referenceSource: 'CopycatList & Punjabi Pop Cross-Reference',
        }
      ),
      origSong(
        'hr-shaadi-se-pehle-2006',
        2,
        'Mundeya',
        'Sunidhi Chauhan',
        'Shaadi Se Pehle',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-shaadi-se-pehle-2006',
        3,
        'Bijuriya',
        'Sukhwinder Singh, Alka Yagnik',
        'Shaadi Se Pehle',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-shaadi-se-pehle-2006',
        4,
        'Tere Liye',
        'Udit Narayan, Alka Yagnik',
        'Shaadi Se Pehle',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-humko-deewana-kar-gaye-2006',
    directorId: 'himesh-reshammiya',
    title: 'Humko Deewana Kar Gaye',
    year: 2006,
    cast: 'Akshay Kumar, Katrina Kaif, Anil Kapoor, Bipasha Basu',
    label: 'T-Series',
    significance:
      'Includes Himesh Reshammiya’s sole guest composition "Tum Sansoon Mein"; primary composer Anu Malik’s remaining soundtrack songs are excluded.',
    songs: [
      origSong(
        'hr-humko-deewana-kar-gaye-2006',
        1,
        'Tum Sansoon Mein',
        'Himesh Reshammiya, Tulsi Kumar',
        'Humko Deewana Kar Gaye',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-phir-hera-pheri-2006',
    directorId: 'himesh-reshammiya',
    title: 'Phir Hera Pheri',
    year: 2006,
    cast: 'Akshay Kumar, Suniel Shetty, Paresh Rawal, Bipasha Basu',
    label: 'T-Series',
    significance:
      'Neeraj Vora’s cult comedy sequel driven by Himesh Reshammiya’s brisk retro-disco tracks "Aye Meri Zohrajabeen" and "Mujhko Yaad Sataye Teri".',
    songs: [
      origSong(
        'hr-phir-hera-pheri-2006',
        1,
        'Mujhko Yaad Sataye Teri',
        'Himesh Reshammiya',
        'Phir Hera Pheri',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-phir-hera-pheri-2006',
        2,
        'Aye Meri Zohrajabeen',
        'Himesh Reshammiya',
        'Phir Hera Pheri',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-phir-hera-pheri-2006',
        3,
        'Dil Naiyyo Maane Re',
        'Himesh Reshammiya, Tulsi Kumar',
        'Phir Hera Pheri',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-phir-hera-pheri-2006',
        4,
        'Dil De Diya',
        'Sunidhi Chauhan, Kunal Ganjawala, Arya',
        'Phir Hera Pheri',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-chup-chup-ke-2006',
    directorId: 'himesh-reshammiya',
    title: 'Chup Chup Ke',
    year: 2006,
    cast: 'Shahid Kapoor, Kareena Kapoor, Suniel Shetty, Paresh Rawal',
    label: 'T-Series',
    significance:
      'Priyadarshan romantic comedy blending melodic ballads ("Tumhi Se", "Dil Vich Lagya Ve") with energetic folk-dance tracks.',
    songs: [
      origSong(
        'hr-chup-chup-ke-2006',
        1,
        'Shabe Firaq',
        'Himesh Reshammiya, Tulsi Kumar',
        'Chup Chup Ke',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-chup-chup-ke-2006',
        2,
        'Dil Vich Lagya Ve',
        'Sonu Nigam, Kunal Ganjawala, Akriti Kakkar',
        'Chup Chup Ke',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-chup-chup-ke-2006',
        3,
        'Ghoomar Re',
        'KK, Sunidhi Chauhan',
        'Chup Chup Ke',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-chup-chup-ke-2006',
        4,
        'Aaya Re',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Chup Chup Ke',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-chup-chup-ke-2006',
        5,
        'Tumhi Se',
        'Vijay Yesudas, Shreya Ghoshal',
        'Chup Chup Ke',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-rocky-the-rebel-2006',
    directorId: 'himesh-reshammiya',
    title: 'Rocky – The Rebel',
    year: 2006,
    cast: 'Zayed Khan, Minissha Lamba, Isha Sharvani',
    label: 'T-Series',
    significance:
      '2006 action romance starring Zayed Khan with Himesh Reshammiya on both mic and podium for \'Junoon\' and \'Laagi Laagi\'.',
    songs: [
      origSong(
        'hr-rocky-the-rebel-2006',
        1,
        'Junoon',
        'Himesh Reshammiya, Amrita Kak',
        'Rocky – The Rebel',
        2006,
        'Sameer',
        'Signature 2006 Sufi-rock duet featuring Himesh Reshammiya and Amrita Kak.'
      ),
      origSong(
        'hr-rocky-the-rebel-2006',
        2,
        'Rocky – The Rebel',
        'Himesh Reshammiya',
        'Rocky – The Rebel',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-rocky-the-rebel-2006',
        3,
        'Laagi Laagi',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Rocky – The Rebel',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-rocky-the-rebel-2006',
        4,
        'Meri Tamanna',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Rocky – The Rebel',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-rocky-the-rebel-2006',
        5,
        'Hum Hai Iss Pal Yahan',
        'Udit Narayan, Alka Yagnik',
        'Rocky – The Rebel',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-dil-diya-hai-2006',
    directorId: 'himesh-reshammiya',
    title: 'Dil Diya Hai',
    year: 2006,
    cast: 'Emraan Hashmi, Ashmit Patel, Geeta Basra, Mithun Chakraborty',
    label: 'T-Series',
    significance:
      '2006 Emraan Hashmi thriller led by \'Afsana\', \'Dil Diya\', and \'Yaadaan Teriyaan\'.',
    songs: [
      origSong(
        'hr-dil-diya-hai-2006',
        1,
        'Afsana',
        'Himesh Reshammiya, Tulsi Kumar',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-dil-diya-hai-2006',
        2,
        'Dil Diya',
        'Himesh Reshammiya, Himani Kapoor',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-dil-diya-hai-2006',
        3,
        'Yaadaan Teriyaan',
        'Himesh Reshammiya',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-dil-diya-hai-2006',
        4,
        'Mile Ho Tum',
        'Himesh Reshammiya, Tulsi Kumar',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-dil-diya-hai-2006',
        5,
        'Jabse Aankh Ladi',
        'Jayesh Gandhi, Alisha Chinai',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-dil-diya-hai-2006',
        6,
        'Chalo Dildaar Chalo',
        'Vedala Hemachandra, Vinit Singh, Himani Kapoor, Jayesh Gandhi',
        'Dil Diya Hai',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aap-ki-khatir-2006',
    directorId: 'himesh-reshammiya',
    title: 'Aap Ki Khatir',
    year: 2006,
    cast: 'Akshaye Khanna, Priyanka Chopra, Dino Morea, Ameesha Patel, Suniel Shetty',
    label: 'T-Series',
    significance:
      'Romantic comedy soundtrack featuring Himesh Reshammiya’s title hit alongside \'Tu Hi Mera\' and \'Keh Do Naa\'.',
    songs: [
      origSong(
        'hr-aap-ki-khatir-2006',
        1,
        'Aap Ki Khatir',
        'Himesh Reshammiya',
        'Aap Ki Khatir',
        2006,
        'Sameer',
        'Chart-topping title track anchored by Himesh Reshammiya’s signature nasal-rock delivery.'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        2,
        'Afsana',
        'Himesh Reshammiya',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        3,
        'I Love You For What You Are',
        'KK, Kunal Ganjawala, Alisha Chinai',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        4,
        'Keh Do Naa',
        'Shaan, Sunidhi Chauhan',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        5,
        'Meethi Meethi Batan',
        'Sunidhi Chauhan, Kailash Kher, Jaspinder Narula',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        6,
        'Tu Hai Kamaal',
        'Kunal Ganjawala',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-aap-ki-khatir-2006',
        7,
        'Tu Hi Mera',
        'Himesh Reshammiya',
        'Aap Ki Khatir',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-ahista-ahista-2006',
    directorId: 'himesh-reshammiya',
    title: 'Ahista Ahista',
    year: 2006,
    cast: 'Abhay Deol, Soha Ali Khan, Shayan Munshi',
    label: 'T-Series',
    significance:
      'Acclaimed 2006 sleeper romance scored by Himesh Reshammiya and penned by Irshad Kamil, featuring \'Allah Kare\' and \'Ishq Ne Tere\'.',
    songs: [
      origSong(
        'hr-ahista-ahista-2006',
        1,
        'Ishq Ne Tere Ishq Ne',
        'KK, Jayesh Gandhi',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        2,
        'Dil Lagiya Na Lagiya',
        'KK, Sunidhi Chauhan',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        3,
        'Allah Kare',
        'Himesh Reshammiya',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        4,
        'Dil Naiyyo Mane Re',
        'Himesh Reshammiya, Tulsi Kumar',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        5,
        'Tum Jo Mile Armaan Jage',
        'Kunal Ganjawala',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        6,
        'Aawan Ankhiyan Jaawan Aankhiyaan',
        'Himesh Reshammiya, Jayesh Gandhi, Aftab',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
      origSong(
        'hr-ahista-ahista-2006',
        7,
        'Love You Unconditionally Soniye',
        'Himesh Reshammiya',
        'Ahista Ahista',
        2006,
        'Irshad Kamil'
      ),
    ],
  },
  {
    id: 'hr-anthony-kaun-hai-2006',
    directorId: 'himesh-reshammiya',
    title: 'Anthony Kaun Hai?',
    year: 2006,
    cast: 'Sanjay Dutt, Arshad Warsi, Minissha Lamba, Anusha Dandekar',
    label: 'T-Series',
    significance:
      'Crime comedy featuring \'Ishq Kiya Kiya\', \'Tune Mera Chain Vain Le Liya\', and \'No Way No Way\'.',
    songs: [
      origSong(
        'hr-anthony-kaun-hai-2006',
        1,
        'Tune Mera Chain Vain Le Liya',
        'Kunal Ganjawala, Shreya Ghoshal',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-anthony-kaun-hai-2006',
        2,
        'Because I Love You',
        'Kunal Ganjawala, Gayatri Iyer',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-anthony-kaun-hai-2006',
        3,
        'Let\'s Rock',
        'KK, Sunidhi Chauhan',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-anthony-kaun-hai-2006',
        4,
        'Ishq Kiya Kiya',
        'Himesh Reshammiya',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-anthony-kaun-hai-2006',
        5,
        'No Way No Way',
        'KK, Himesh Reshammiya',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-anthony-kaun-hai-2006',
        6,
        'Bhangra Paale',
        'Sonu Nigam, Saru Maini',
        'Anthony Kaun Hai?',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-tom-dick-and-harry-2006',
    directorId: 'himesh-reshammiya',
    title: 'Tom, Dick, and Harry',
    year: 2006,
    cast: 'Dino Morea, Jimmy Sheirgill, Anuj Sawhney, Celina Jaitly, Kim Sharma',
    label: 'T-Series',
    significance:
      '2006 comedy hit powered by Himesh Reshammiya’s chartbusters \'Jhoom Jhoom\', \'Tere Sang Ishq\', and \'Tanha Jiya Na Jaye\'.',
    songs: [
      origSong(
        'hr-tom-dick-and-harry-2006',
        1,
        'Jhoom Jhoom',
        'Himesh Reshammiya',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-tom-dick-and-harry-2006',
        2,
        'Tere Sang Ishq',
        'Himesh Reshammiya, Tulsi Kumar',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-tom-dick-and-harry-2006',
        3,
        'Tanha Jiya Na Jaye',
        'Himesh Reshammiya, Ahir',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-tom-dick-and-harry-2006',
        4,
        'Yeu Kasi Kasi',
        'Sonu Nigam, Richa Sharma',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-tom-dick-and-harry-2006',
        5,
        'Chheena Re Chheena',
        'Sunidhi Chauhan, Arya',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-tom-dick-and-harry-2006',
        6,
        'O Mitra Re',
        'Kunal Ganjawala',
        'Tom, Dick, and Harry',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-banaras-2006',
    directorId: 'himesh-reshammiya',
    title: 'Banaras',
    year: 2006,
    cast: 'Urmila Matondkar, Ashmit Patel, Dimple Kapadia, Naseeruddin Shah, Raj Babbar',
    label: 'T-Series',
    significance:
      'Classical-steeped Banaras drama showcasing Himesh Reshammiya’s softer Hindustani side with Shreya Ghoshal, Pt. Sanjeev Abhyankar, and Sonu Nigam.',
    songs: [
      origSong(
        'hr-banaras-2006',
        1,
        'Rang Daalo',
        'Sonu Nigam, Shreya Ghoshal',
        'Banaras',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-banaras-2006',
        2,
        'Yeh Hai Shaan Banaras Ki',
        'Pt. Sanjeev Abhyankar',
        'Banaras',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-banaras-2006',
        3,
        'Kitna Pyar Kartein Hain',
        'Alka Yagnik',
        'Banaras',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-banaras-2006',
        4,
        'Ishq Mein Dilko',
        'Sonu Nigam, Sunidhi Chauhan',
        'Banaras',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-banaras-2006',
        5,
        'Baajuband Khul Khul Jaaye',
        'Pranab Kumar Biswas',
        'Banaras',
        2006,
        'Sameer'
      ),
      origSong(
        'hr-banaras-2006',
        6,
        'Purab Se',
        'Shreya Ghoshal',
        'Banaras',
        2006,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-namastey-london-2007',
    directorId: 'himesh-reshammiya',
    title: 'Namastey London',
    year: 2007,
    cast: 'Akshay Kumar, Katrina Kaif, Rishi Kapoor, Upen Patel',
    label: 'Eros Music',
    significance:
      'Widely acclaimed high-water mark of Himesh Reshammiya’s fusion orchestration with Javed Akhtar’s poetry; excludes guest track "Rafta Rafta" by RDB.',
    songs: [
      origSong(
        'hr-namastey-london-2007',
        1,
        'Main Jahaan Rahoon',
        'Rahat Fateh Ali Khan, Krishna Beura',
        'Namastey London',
        2007,
        'Javed Akhtar',
        'Sweeping classical-rock ballad revered as one of Himesh Reshammiya’s finest original compositions.'
      ),
      origSong(
        'hr-namastey-london-2007',
        2,
        'Chakna Chakna',
        'Himesh Reshammiya',
        'Namastey London',
        2007,
        'Javed Akhtar'
      ),
      origSong(
        'hr-namastey-london-2007',
        3,
        'Yahi Hota Pyaar',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Namastey London',
        2007,
        'Javed Akhtar'
      ),
      origSong(
        'hr-namastey-london-2007',
        4,
        'Viraaniya',
        'Himesh Reshammiya',
        'Namastey London',
        2007,
        'Javed Akhtar'
      ),
      origSong(
        'hr-namastey-london-2007',
        5,
        'Annan Faanan',
        'Jayesh Gandhi, Akriti Kakkar',
        'Namastey London',
        2007,
        'Javed Akhtar'
      ),
      origSong(
        'hr-namastey-london-2007',
        6,
        'Dilruba',
        'Zubeen Garg, Alisha Chinai',
        'Namastey London',
        2007,
        'Javed Akhtar'
      ),
    ],
  },
  {
    id: 'hr-apne-2007',
    directorId: 'himesh-reshammiya',
    title: 'Apne',
    year: 2007,
    cast: 'Dharmendra, Sunny Deol, Bobby Deol, Shilpa Shetty, Katrina Kaif',
    label: 'T-Series',
    significance:
      'Anil Sharma sports drama starring three Deols, highlighted by the emotional family anthem "Apne To Apne Hote Hain".',
    songs: [
      origSong(
        'hr-apne-2007',
        1,
        'Apne To Apne Hote Hain',
        'Sonu Nigam, Jaspinder Narula, Jayesh Gandhi',
        'Apne',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-apne-2007',
        2,
        'Dekhoon Tujhe To Pyaar Aaye',
        'Himesh Reshammiya, Akriti Kakkar',
        'Apne',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-apne-2007',
        3,
        'Mehfooz',
        'Himesh Reshammiya',
        'Apne',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-apne-2007',
        4,
        'Ankh Vich Chehra Pyaar Da',
        'Shaan, Kunal Ganjawala, Amrita Kak, Himesh Reshammiya',
        'Apne',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-aap-kaa-surroor-2007',
    directorId: 'himesh-reshammiya',
    title: 'Aap Kaa Surroor',
    year: 2007,
    cast: 'Himesh Reshammiya, Hansika Motwani, Mallika Sherawat',
    label: 'T-Series',
    significance:
      'Himesh Reshammiya’s acting debut feature film; strictly indexes only songs composed for the 2007 theatrical movie (excluding his 2006 non-film studio album). Includes the official Panchamda tribute "Mehbooba O Mehbooba".',
    songs: [
      origSong(
        'hr-aap-kaa-surroor-2007',
        1,
        'Assalam Vaalekum',
        'Himesh Reshammiya',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-aap-kaa-surroor-2007',
        2,
        'Tera Mera Milna',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-aap-kaa-surroor-2007',
        3,
        'Jhoot Nahin Bolna',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-aap-kaa-surroor-2007',
        4,
        'Tanhaiyaan',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-aap-kaa-surroor-2007',
        5,
        'Ya Ali',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-aap-kaa-surroor-2007',
        6,
        'Kya Jeena',
        'Himesh Reshammiya',
        'Aap Kaa Surroor',
        2007,
        'Sameer'
      ),
      adaptedSong(
        'hr-aap-kaa-surroor-2007',
        7,
        'Mehbooba O Mehbooba',
        'Himesh Reshammiya, Asha Bhosle',
        'Aap Kaa Surroor',
        2007,
        'Anand Bakshi / Sameer',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Mehbooba Mehbooba',
          originalArtist: 'R.D. Burman (Sholay)',
          originalYear: '1975',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Official licensed tribute to R.D. Burman featuring Asha Bhosle and recreating the Sholay (1975) hook with modern club beats.',
          originalLink: 'https://www.youtube.com/watch?v=ByAbV-MKDgs',
          referenceSource: 'Official Album Credit ("A Tribute to Panchamda")',
        }
      ),
    ],
  },
  {
    id: 'hr-nanhe-jaisalmer-2007',
    directorId: 'himesh-reshammiya',
    title: 'Nanhe Jaisalmer',
    year: 2007,
    cast: 'Bobby Deol, Dwij Yadav, Sharat Saxena',
    label: 'Eros Music',
    significance:
      'Rajasthan-set drama pairing Himesh Reshammiya’s folk melodies with Sonu Nigam’s "Tumse Jabse Hui Dosti (Nanhe Yaar)", documented for echoing Wajahat Attre’s 1985 Punjabi film classic.',
    songs: [
      adaptedSong(
        'hr-nanhe-jaisalmer-2007',
        1,
        'Tumse Jabse Hui Dosti (Nanhe Yaar)',
        'Sonu Nigam',
        'Nanhe Jaisalmer',
        2007,
        'Sameer',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Mohabbat Karangi Main Aisi Sajan',
          originalArtist: 'Wajahat Attre / Noor Jehan (Aashiana)',
          originalYear: '1985',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Follows the lilting melodic contour and opening mukhda cadence of Wajahat Attre’s composition for Noor Jehan in the 1985 Pakistani film Aashiana.',
          originalLink: 'https://www.youtube.com/watch?v=T3CTA8nORLE',
          referenceSource: 'CopycatList & Lollywood Musicology Cross-Reference',
        }
      ),
      origSong(
        'hr-nanhe-jaisalmer-2007',
        2,
        'O Raanjhana',
        'Himesh Reshammiya',
        'Nanhe Jaisalmer',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-nanhe-jaisalmer-2007',
        3,
        'Kesariya Baalama',
        'Vineet Singh, Jayesh Gandhi',
        'Nanhe Jaisalmer',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-nanhe-jaisalmer-2007',
        4,
        'Lamha Lamha Pal Pal Jaana',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Nanhe Jaisalmer',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-welcome-2007',
    directorId: 'himesh-reshammiya',
    title: 'Welcome',
    year: 2007,
    cast: 'Akshay Kumar, Katrina Kaif, Nana Patekar, Anil Kapoor, Paresh Rawal',
    label: 'Junglee Music',
    significance:
      'Includes Himesh Reshammiya’s two guest compositions ("Insha Allah", "Kola Laka Vellari"); Anand Raj Anand and Sajid–Wajid’s separate album tracks are excluded.',
    songs: [
      origSong(
        'hr-welcome-2007',
        1,
        'Insha Allah',
        'Krishna Beura, Shaan, Akriti Kakkar',
        'Welcome',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-welcome-2007',
        2,
        'Kola Laka Vellari',
        'Himesh Reshammiya',
        'Welcome',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-darling-2007',
    directorId: 'himesh-reshammiya',
    title: 'Darling',
    year: 2007,
    cast: 'Fardeen Khan, Esha Deol, Isha Koppikar',
    label: 'T-Series',
    significance:
      'Supernatural thriller mainly scored by Pritam; includes Himesh Reshammiya’s single guest composition \'Tadap Tadap\'.',
    songs: [
      origSong(
        'hr-darling-2007',
        1,
        'Tadap Tadap',
        'Himesh Reshammiya, Tulsi Kumar',
        'Darling',
        2007,
        'Sameer',
        'Himesh Reshammiya’s guest duet on Ram Gopal Varma’s Darling soundtrack.'
      ),
    ],
  },
  {
    id: 'hr-fear-2007',
    directorId: 'himesh-reshammiya',
    title: 'Fear',
    year: 2007,
    cast: 'Amit Gaur, Aditya Ralkar, Alisha Baig',
    label: 'T-Series',
    significance:
      '2007 thriller featuring Himesh Reshammiya’s \'Tanha Tanha\' alongside Sonu Nigam, Udit Narayan, and Alka Yagnik.',
    songs: [
      origSong(
        'hr-fear-2007',
        1,
        'Tu Hai Ishq',
        'Sonu Nigam, Udit Narayan, Alka Yagnik',
        'Fear',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fear-2007',
        2,
        'Dil Dhadkata Hai',
        'Kunal Ganjawala',
        'Fear',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fear-2007',
        3,
        'Dil Ki Daro Deewaar Pe',
        'Udit Narayan, Alka Yagnik',
        'Fear',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fear-2007',
        4,
        'Tanha Tanha',
        'Himesh Reshammiya',
        'Fear',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fear-2007',
        5,
        'Fear',
        'Sunidhi Chauhan',
        'Fear',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-fool-and-final-2007',
    directorId: 'himesh-reshammiya',
    title: 'Fool & Final',
    year: 2007,
    cast: 'Sunny Deol, Shahid Kapoor, Vivek Oberoi, Ayesha Takia, Sameera Reddy',
    label: 'T-Series',
    significance:
      'Multi-star caper featuring Himesh Reshammiya’s punchy tracks \'Ek Kalsa\', \'Sigdi\', \'Masti\', and \'Tere Layee\'.',
    songs: [
      origSong(
        'hr-fool-and-final-2007',
        1,
        'Ek Kalsa',
        'Himesh Reshammiya',
        'Fool & Final',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fool-and-final-2007',
        2,
        'Masti',
        'Benny Dayal, M.G. Sreekumar',
        'Fool & Final',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fool-and-final-2007',
        3,
        'Sigdi',
        'Himesh Reshammiya, Jayesh Gandhi',
        'Fool & Final',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fool-and-final-2007',
        4,
        'Tere Layee',
        'Kunal Ganjawala, Himani Kapoor',
        'Fool & Final',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-fool-and-final-2007',
        5,
        'Yeh Dooriyan (Shakira Ve)',
        'Hanif Shaikh',
        'Fool & Final',
        2007,
        'Nitin Raikwar'
      ),
    ],
  },
  {
    id: 'hr-good-boy-bad-boy-2007',
    directorId: 'himesh-reshammiya',
    title: 'Good Boy, Bad Boy',
    year: 2007,
    cast: 'Tusshar Kapoor, Emraan Hashmi, Tanushree Dutta, Isha Sharvani, Paresh Rawal',
    label: 'Tips Music',
    significance:
      'Campus comedy starring Emraan Hashmi and Tusshar Kapoor led by \'Aashiqana Aalam\', \'Meri Awaargi\', and \'Dard-E-Dil\'.',
    songs: [
      origSong(
        'hr-good-boy-bad-boy-2007',
        1,
        'Meri Awaargi',
        'Himesh Reshammiya, Himani Kapoor',
        'Good Boy, Bad Boy',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-good-boy-bad-boy-2007',
        2,
        'Good Boy Bad Boy',
        'Himesh Reshammiya, Akriti Kakkar',
        'Good Boy, Bad Boy',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-good-boy-bad-boy-2007',
        3,
        'Ashiqana Aalam',
        'Himesh Reshammiya, Alka Yagnik, Sunidhi Chauhan, Vineet Singh',
        'Good Boy, Bad Boy',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-good-boy-bad-boy-2007',
        4,
        'Dard-E-Dil',
        'Zubeen Garg',
        'Good Boy, Bad Boy',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-shakalaka-boom-boom-2007',
    directorId: 'himesh-reshammiya',
    title: 'Shakalaka Boom Boom',
    year: 2007,
    cast: 'Bobby Deol, Upen Patel, Kangana Ranaut, Celina Jaitly',
    label: 'T-Series',
    significance:
      'Music-industry drama directed by Suneel Darshan anchored by \'Thaare Vaaste\', \'Naamumkin\', and \'Dil Lagaayenge\'.',
    songs: [
      origSong(
        'hr-shakalaka-boom-boom-2007',
        1,
        'Shaka Laka Boom Boom',
        'Himesh Reshammiya, Akriti Kakkar',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        2,
        'Thaare Vaaste',
        'Shaan, Sunidhi Chauhan',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        3,
        'Naamumkin',
        'Himesh Reshammiya',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        4,
        'Dil Lagaayenge',
        'Himesh Reshammiya, Akriti Kakkar',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        5,
        'Issi Umeed Pe',
        'Shaan',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        6,
        'Saathiya',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-shakalaka-boom-boom-2007',
        7,
        'Tera Sona Sona Roop',
        'Kunal Ganjawala, Sunidhi Chauhan',
        'Shakalaka Boom Boom',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-red-the-dark-side-2007',
    directorId: 'himesh-reshammiya',
    title: 'Red: The Dark Side',
    year: 2007,
    cast: 'Aftab Shivdasani, Celina Jaitly, Amrita Arora',
    label: 'T-Series',
    significance:
      'Vikram Bhatt thriller featuring Himesh Reshammiya’s moody ballads \'Aafreen Tera Chehra\' and \'Loneliness Is Killing\'.',
    songs: [
      origSong(
        'hr-red-the-dark-side-2007',
        1,
        'Aafreen Tera Chehra',
        'Himesh Reshammiya',
        'Red: The Dark Side',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-red-the-dark-side-2007',
        2,
        'Aamin',
        'Himesh Reshammiya',
        'Red: The Dark Side',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-red-the-dark-side-2007',
        3,
        'Ek Tumhi',
        'Jayesh Gandhi',
        'Red: The Dark Side',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-red-the-dark-side-2007',
        4,
        'Dil Ne Ye Na Jaana',
        'Himesh Reshammiya, Harshdeep Kaur',
        'Red: The Dark Side',
        2007,
        'Sameer'
      ),
      origSong(
        'hr-red-the-dark-side-2007',
        5,
        'Loneliness Is Killing',
        'Himesh Reshammiya, Akriti Kakkar',
        'Red: The Dark Side',
        2007,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-nehlle-pe-dehlla-2007',
    directorId: 'himesh-reshammiya',
    title: 'Nehlle Pe Dehlla',
    year: 2007,
    cast: 'Sanjay Dutt, Saif Ali Khan, Bipasha Basu, Kim Sharma',
    label: 'T-Series',
    significance:
      'Multi-composer comedy soundtrack; includes only Himesh Reshammiya’s guest track \'Dil Naiyo Maane Re\' (Anand Raj Anand and Pritam’s songs are excluded).',
    songs: [
      origSong(
        'hr-nehlle-pe-dehlla-2007',
        1,
        'Dil Naiyo Maane Re',
        'Himesh Reshammiya, Tulsi Kumar',
        'Nehlle Pe Dehlla',
        2007,
        'Sameer',
        'Himesh Reshammiya’s sole guest composition for Nehlle Pe Dehlla.'
      ),
    ],
  },
  // =========================================================================
  // 2008 – 2014: KARZZZZ, BODYGUARD, KHILADI 786 & KICK BLOCKBUSTER ERA
  // =========================================================================
  {
    id: 'hr-karzzzz-2008',
    directorId: 'himesh-reshammiya',
    title: 'Karzzzz',
    year: 2008,
    cast: 'Himesh Reshammiya, Urmila Matondkar, Shweta Kumar, Dino Morea',
    label: 'T-Series',
    significance:
      'Official remake of Subhash Ghai’s Karz (1980) featuring a licensed Laxmikant–Pyarelal recreation ("Ek Haseena Thi") alongside two ITWOFS-documented borrowings ("Soniye Je Tere Naal", "Lut Jaaon Lut Jaaon").',
    songs: [
      adaptedSong(
        'hr-karzzzz-2008',
        1,
        'Ek Haseena Thi',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Karzzzz',
        2008,
        'Anand Bakshi / Sameer',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Ek Haseena Thi',
          originalArtist: 'Laxmikant–Pyarelal (Karz)',
          originalYear: '1980',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Official licensed remake of Laxmikant–Pyarelal’s iconic Karz (1980) narrative thriller song, updated with club percussion and Himesh Reshammiya vocals.',
          originalLink: 'https://www.youtube.com/watch?v=fTgVxro9lbM',
          referenceSource: 'Official Karzzzz Album Credit (T-Series)',
        }
      ),
      adaptedSong(
        'hr-karzzzz-2008',
        2,
        'Lut Jaaon Lut Jaaon',
        'Himesh Reshammiya, Harshdeep Kaur',
        'Karzzzz',
        2008,
        'Sameer',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Punjab',
          originalArtist: 'Karunesh',
          originalYear: '2000',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Draws the ambient lounge pulse and female Punjabi vocal motif from Karunesh’s Global Spirit track "Punjab" (which itself sampled O.P. Nayyar’s "Aao Huzoor Tumko").',
          originalLink: 'https://www.youtube.com/watch?v=0YurA5CVt8I',
          referenceSource: 'ITWOFS Hindi Archive (#83) & CopycatList',
        }
      ),
      adaptedSong(
        'hr-karzzzz-2008',
        3,
        'Soniye Je Tere Naal',
        'Himesh Reshammiya, Tulsi Kumar',
        'Karzzzz',
        2008,
        'Sameer',
        {
          adaptationType: 'copied',
          originalSongTitle: 'Sohniye Je Tere Naal',
          originalArtist: 'Kulwinder Kally',
          originalYear: '2002',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Shares nearly identical hook melody and Punjabi opening lyrics with Kulwinder Kally’s 2002 Sham Wali Gaddi release.',
          originalLink: 'https://www.youtube.com/watch?v=Qeba-NJ1IE8',
          referenceSource: 'ITWOFS Hindi Archive (#83)',
        }
      ),
      origSong(
        'hr-karzzzz-2008',
        4,
        'Tandoori Nights',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Karzzzz',
        2008,
        'Sameer'
      ),
      origSong(
        'hr-karzzzz-2008',
        5,
        'Dhoom Tere Ishq Ki',
        'Himesh Reshammiya',
        'Karzzzz',
        2008,
        'Sameer'
      ),
      origSong(
        'hr-karzzzz-2008',
        6,
        'Masha Allah',
        'Himesh Reshammiya',
        'Karzzzz',
        2008,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-my-name-is-anthony-gonsalves-2008',
    directorId: 'himesh-reshammiya',
    title: 'My Name Is Anthony Gonsalves',
    year: 2008,
    cast: 'Nikhil Dwivedi, Amrita Rao, Mithun Chakraborty',
    label: 'T-Series',
    significance:
      'Soundtrack primarily composed by Pritam; indexes only Himesh Reshammiya’s guest track \'Tum Mile\'.',
    songs: [
      origSong(
        'hr-my-name-is-anthony-gonsalves-2008',
        1,
        'Tum Mile',
        'KK, Sunidhi Chauhan',
        'My Name Is Anthony Gonsalves',
        2008,
        'Sameer',
        'Himesh Reshammiya’s guest romantic track on the My Name Is Anthony Gonsalves soundtrack.'
      ),
    ],
  },
  {
    id: 'hr-radio-2009',
    directorId: 'himesh-reshammiya',
    title: 'Radio',
    year: 2009,
    cast: 'Himesh Reshammiya, Sonal Sehgal, Shenaz Treasurywala',
    label: 'T-Series',
    significance:
      'Milestone 100th film soundtrack for Himesh Reshammiya featuring his 500th song ("Mann Ka Radio") and critically praised acoustic numbers with Kailash Kher and Rekha Bhardwaj.',
    songs: [
      origSong(
        'hr-radio-2009',
        1,
        'Mann Ka Radio',
        'Himesh Reshammiya',
        'Radio',
        2009,
        'Subrat Sinha'
      ),
      origSong(
        'hr-radio-2009',
        2,
        'Janeman',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Radio',
        2009,
        'Subrat Sinha'
      ),
      origSong(
        'hr-radio-2009',
        3,
        'Zindagi Jaise Ek Radio',
        'Himesh Reshammiya, Aditi Singh Sharma',
        'Radio',
        2009,
        'Subrat Sinha'
      ),
      origSong(
        'hr-radio-2009',
        4,
        'Damadji Angana Hai Padhare',
        'Himesh Reshammiya, Kailash Kher',
        'Radio',
        2009,
        'Subrat Sinha'
      ),
      origSong(
        'hr-radio-2009',
        5,
        'Piya Jaise Ladoo Motichur Wale',
        'Himesh Reshammiya, Rekha Bhardwaj',
        'Radio',
        2009,
        'Subrat Sinha'
      ),
    ],
  },
  {
    id: 'hr-kajraare-2010',
    directorId: 'himesh-reshammiya',
    title: 'Kajraare',
    year: 2010,
    cast: 'Himesh Reshammiya, Sara Loren, Gulshan Grover',
    label: 'T-Series',
    significance:
      'Pooja Bhatt’s musical romance starring and scored by Himesh Reshammiya, featuring \'Rabba Luck Barsa\' and \'Kajra Kajra Kajraare\'.',
    songs: [
      origSong(
        'hr-kajraare-2010',
        1,
        'Kajra Kajra Kajraare',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        2,
        'Rabba Luck Barsa',
        'Himesh Reshammiya, Mahesh Bhatt',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        3,
        'Aafreen',
        'Himesh Reshammiya, Harshdeep Kaur',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        4,
        'Tujhe Dekh Ke Armaan Jaage',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        5,
        'Teriyan Meriyan',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        6,
        'Woh Lamha Phir Se Jeena Hai',
        'Himesh Reshammiya, Harshdeep Kaur',
        'Kajraare',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-kajraare-2010',
        7,
        'Sanu Guzara Zamana',
        'Himesh Reshammiya, Sunidhi Chauhan',
        'Kajraare',
        2010,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-milenge-milenge-2010',
    directorId: 'himesh-reshammiya',
    title: 'Milenge Milenge',
    year: 2010,
    cast: 'Shahid Kapoor, Kareena Kapoor, Aarti Chhabria',
    label: 'Tips Music',
    significance:
      'Delayed Shahid–Kareena romance featuring Rahat Fateh Ali Khan’s \'Ishq Ki Galee\' and Sonu Nigam–Alka Yagnik’s \'Tum Chain Ho\'.',
    songs: [
      origSong(
        'hr-milenge-milenge-2010',
        1,
        'Milenge Milenge',
        'Alka Yagnik, Jayesh Gandhi',
        'Milenge Milenge',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-milenge-milenge-2010',
        2,
        'Kuch To Bakee Hai',
        'Himesh Reshammiya',
        'Milenge Milenge',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-milenge-milenge-2010',
        3,
        'Ishq Ki Galee',
        'Rahat Fateh Ali Khan, Jayesh Gandhi',
        'Milenge Milenge',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-milenge-milenge-2010',
        4,
        'Tum Chain Ho',
        'Sonu Nigam, Alka Yagnik, Suzanne D\'Mello',
        'Milenge Milenge',
        2010,
        'Sameer'
      ),
      origSong(
        'hr-milenge-milenge-2010',
        5,
        'Yeh Hare Kaanch Ki Choodiyan',
        'Alka Yagnik',
        'Milenge Milenge',
        2010,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-bodyguard-2011',
    directorId: 'himesh-reshammiya',
    title: 'Bodyguard',
    year: 2011,
    cast: 'Salman Khan, Kareena Kapoor, Raj Babbar',
    label: 'T-Series',
    significance:
      'Blockbuster BIG Star Award-winning soundtrack reuniting Salman Khan and Himesh Reshammiya; excludes Pritam’s standalone track "I Love You". "Teri Meri" sparked widespread ITWOFS comparison to Romanian carol "La Betleem colo-n jos".',
    songs: [
      adaptedSong(
        'hr-bodyguard-2011',
        1,
        'Teri Meri',
        'Rahat Fateh Ali Khan, Shreya Ghoshal',
        'Bodyguard',
        2011,
        'Shabbir Ahmed',
        {
          adaptationType: 'copied',
          originalSongTitle: 'La Betleem colo-n jos',
          originalArtist: 'Traditional Romanian Carol (Cleopatra Stratan)',
          originalYear: '2009',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Reproduces the distinctive minor-key opening string and vocal motif of the 15th-century Romanian colind "La Betleem colo-n jos", popularized globally by Cleopatra Stratan’s 2009 Colinde magice album.',
          originalLink: 'https://www.youtube.com/watch?v=fT5-fwSNqyI',
          referenceSource: 'ITWOFS Hindi Archive (#101) & CopycatList',
        }
      ),
      origSong(
        'hr-bodyguard-2011',
        2,
        'Desi Beat',
        'Mika Singh, Amrita Kak',
        'Bodyguard',
        2011,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-bodyguard-2011',
        3,
        'Bodyguard',
        'Salman Khan, Band of Power',
        'Bodyguard',
        2011,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-damadamm-2011',
    directorId: 'himesh-reshammiya',
    title: 'Damadamm!',
    year: 2011,
    cast: 'Himesh Reshammiya, Sonal Sehgal, Purbi Joshi',
    label: 'T-Series',
    significance:
      'Acclaimed 2011 comedy soundtrack named among Bollywood Hungama’s top soundtracks of the year.',
    songs: [
      origSong(
        'hr-damadamm-2011',
        1,
        'Damadamm',
        'Himesh Reshammiya, Vinit Singh, Palak Muchhal, Shabab Sabri',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        2,
        'Umrao Jaan',
        'Himesh Reshammiya, Purbi Joshi',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        3,
        'Aaja Ve',
        'Himesh Reshammiya',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        4,
        'Madhushala',
        'Himesh Reshammiya, Aditi Singh Sharma',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        5,
        'Yun Toh Mera Dil',
        'Himesh Reshammiya, Sadhana Sargam',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        6,
        'Hum Tum',
        'Himesh Reshammiya, Vaishali Mhade',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        7,
        'Tere Bina',
        'Himesh Reshammiya',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        8,
        'I Need My Space',
        'Himesh Reshammiya',
        'Damadamm!',
        2011,
        'Sameer'
      ),
      origSong(
        'hr-damadamm-2011',
        9,
        'Mango',
        'Himesh Reshammiya, Aditi Singh Sharma',
        'Damadamm!',
        2011,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-bol-bachchan-2012',
    directorId: 'himesh-reshammiya',
    title: 'Bol Bachchan',
    year: 2012,
    cast: 'Ajay Devgn, Abhishek Bachchan, Asin, Prachi Desai',
    label: 'T-Series',
    significance:
      'Rohit Shetty comedy featuring Himesh Reshammiya’s three compositions (including Amitabh Bachchan & Ajay Devgn’s title track); Ajay–Atul’s separate guest track "Nach Le" is excluded.',
    songs: [
      origSong(
        'hr-bol-bachchan-2012',
        1,
        'Bol Bachchan',
        'Amitabh Bachchan, Abhishek Bachchan, Ajay Devgn, Himesh Reshammiya, Mamta Sharma',
        'Bol Bachchan',
        2012,
        'Sajid–Farhad'
      ),
      origSong(
        'hr-bol-bachchan-2012',
        2,
        'Chalao Na Naino Se',
        'Himesh Reshammiya, Shreya Ghoshal, Shabab Sabri',
        'Bol Bachchan',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-bol-bachchan-2012',
        3,
        'Jab Se Dekhi Hai',
        'Mohit Chauhan',
        'Bol Bachchan',
        2012,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-omg-oh-my-god-2012',
    directorId: 'himesh-reshammiya',
    title: 'OMG – Oh My God!',
    year: 2012,
    cast: 'Akshay Kumar, Paresh Rawal, Mithun Chakraborty',
    label: 'T-Series',
    significance:
      'Satirical blockbuster featuring Himesh Reshammiya’s Janmashtami smash "Go Go Govinda"; guest tracks by Meet Bros Anjjan and Sachin–Jigar are excluded.',
    songs: [
      origSong(
        'hr-omg-oh-my-god-2012',
        1,
        'Go Go Govinda',
        'Mika Singh, Shreya Ghoshal',
        'OMG – Oh My God!',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-omg-oh-my-god-2012',
        2,
        'Tu Hi Tu',
        'Mohammad Irfan',
        'OMG – Oh My God!',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-omg-oh-my-god-2012',
        3,
        'Don’t Worry',
        'Himesh Reshammiya, Benny Dayal, Arya Acharya',
        'OMG – Oh My God!',
        2012,
        'Subrat Sinha'
      ),
      origSong(
        'hr-omg-oh-my-god-2012',
        4,
        'Oh My God',
        'Zubeen Garg',
        'OMG – Oh My God!',
        2012,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-son-of-sardaar-2012',
    directorId: 'himesh-reshammiya',
    title: 'Son of Sardaar',
    year: 2012,
    cast: 'Ajay Devgn, Sanjay Dutt, Sonakshi Sinha, Juhi Chawla',
    label: 'T-Series',
    significance:
      'High-octane Punjabi masala soundtrack featuring Himesh Reshammiya’s five main songs ("Rani Tu Mein Raja", "Po Po", "Bichdann"); Sajid–Wajid’s guest track "Yeh Jo Halki" is excluded.',
    songs: [
      origSong(
        'hr-son-of-sardaar-2012',
        1,
        'Rani Tu Mein Raja',
        'Mika Singh, Bhavya Pandit, Yo Yo Honey Singh',
        'Son of Sardaar',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-son-of-sardaar-2012',
        2,
        'Po Po',
        'Vikas Bhalla, Aman Trikha, Himesh Reshammiya',
        'Son of Sardaar',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-son-of-sardaar-2012',
        3,
        'Bichdann',
        'Rahat Fateh Ali Khan',
        'Son of Sardaar',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-son-of-sardaar-2012',
        4,
        'Son of Sardaar',
        'Himesh Reshammiya, Aman Trikha',
        'Son of Sardaar',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-son-of-sardaar-2012',
        5,
        'Tu Kamaal Di Kudi',
        'Vineet Singh, Mamta Sharma',
        'Son of Sardaar',
        2012,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-khiladi-786-2012',
    directorId: 'himesh-reshammiya',
    title: 'Khiladi 786',
    year: 2012,
    cast: 'Akshay Kumar, Asin, Himesh Reshammiya, Mithun Chakraborty',
    label: 'T-Series',
    significance:
      'Runaway club-chart phenomenon sweeping 2012–13 dance floors, alongside CopycatList-documented Western EDM similarities in "Lonely" and "Hookah Bar".',
    songs: [
      adaptedSong(
        'hr-khiladi-786-2012',
        1,
        'Hookah Bar',
        'Himesh Reshammiya, Vineet Singh, Aman Trikha',
        'Khiladi 786',
        2012,
        'Himesh Reshammiya',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Turn Up the Music',
          originalArtist: 'Chris Brown',
          originalYear: '2012',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Shares the four-on-the-floor electro-house synth drop texture and rhythmic buildup highlighted in online comparisons with Chris Brown’s 2012 Fortune single.',
          originalLink: 'https://www.youtube.com/watch?v=eQWG8BVeryU',
          referenceSource: 'CopycatList & EDM Musicology Comparison',
        }
      ),
      adaptedSong(
        'hr-khiladi-786-2012',
        2,
        'Lonely',
        'Himesh Reshammiya, Hamsika Iyer, Yo Yo Honey Singh',
        'Khiladi 786',
        2012,
        'Shabbir Ahmed',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Mr. Saxobeat',
          originalArtist: 'Alexandra Stan',
          originalYear: '2010',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Draws the brassy saxophone riff cadence and Euro-dance bassline from Alexandra Stan’s 2010–11 chart hit "Mr. Saxobeat".',
          originalLink: 'https://www.youtube.com/watch?v=nwsewSMWIas',
          referenceSource: 'CopycatList Hindi Archive',
        }
      ),
      origSong(
        'hr-khiladi-786-2012',
        3,
        'Balma',
        'Sreerama Chandra, Shreya Ghoshal',
        'Khiladi 786',
        2012,
        'Sameer'
      ),
      origSong(
        'hr-khiladi-786-2012',
        4,
        'Long Drive',
        'Mika Singh',
        'Khiladi 786',
        2012,
        'Sameer'
      ),
      origSong(
        'hr-khiladi-786-2012',
        5,
        'Sari Sari Raat',
        'Himesh Reshammiya',
        'Khiladi 786',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-khiladi-786-2012',
        6,
        'Tu Hoor Pari',
        'Javed Ali, Shreya Ghoshal, Harshdeep Kaur, Chandrakala',
        'Khiladi 786',
        2012,
        'R. Mehndi'
      ),
    ],
  },
  {
    id: 'hr-dangerous-ishhq-2012',
    directorId: 'himesh-reshammiya',
    title: 'Dangerous Ishhq',
    year: 2012,
    cast: 'Karisma Kapoor, Rajneesh Duggal, Jimmy Sheirgill, Divya Dutta',
    label: 'T-Series',
    significance:
      'Vikram Bhatt’s reincarnation thriller starring Karisma Kapoor, highlighted by \'Tu Hi Rab Tu Hi Dua\' and \'Naina Re\'.',
    songs: [
      origSong(
        'hr-dangerous-ishhq-2012',
        1,
        'Tu Hi Rab Tu Hi Dua',
        'Rahat Fateh Ali Khan, Tulsi Kumar',
        'Dangerous Ishhq',
        2012,
        'Shabbir Ahmed',
        'Sufi-tinged ballad performed by Rahat Fateh Ali Khan and Tulsi Kumar.'
      ),
      origSong(
        'hr-dangerous-ishhq-2012',
        2,
        'Naina Re',
        'Himesh Reshammiya, Shreya Ghoshal, Rahat Fateh Ali Khan',
        'Dangerous Ishhq',
        2012,
        'Sameer'
      ),
      origSong(
        'hr-dangerous-ishhq-2012',
        3,
        'Ishq Mein Ruswaa',
        'Anweshaa',
        'Dangerous Ishhq',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-dangerous-ishhq-2012',
        4,
        'Umeed',
        'Amrita Kak, Shabab Sabri',
        'Dangerous Ishhq',
        2012,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-dangerous-ishhq-2012',
        5,
        'Lagan Laagi',
        'Shreya Ghoshal, Shabab Sabri',
        'Dangerous Ishhq',
        2012,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-special-26-2013',
    directorId: 'himesh-reshammiya',
    title: 'Special 26',
    year: 2013,
    cast: 'Akshay Kumar, Kajal Aggarwal, Manoj Bajpayee, Anupam Kher',
    label: 'T-Series',
    significance:
      'Includes Himesh Reshammiya’s sole wedding bhangra contribution "Gore Mukhde Pe Zulfan Di Chhaavan"; M. M. Kreem’s remaining soundtrack songs are excluded.',
    songs: [
      origSong(
        'hr-special-26-2013',
        1,
        'Gore Mukhde Pe Zulfan Di Chhaavan',
        'Aman Trikha, Shreya Ghoshal, Shabab Sabri',
        'Special 26',
        2013,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-a-new-love-ishtory-2013',
    directorId: 'himesh-reshammiya',
    title: 'A New Love Ishtory',
    year: 2013,
    cast: 'Himesh Reshammiya, Niharika Singh, Raqesh Bapat, Rajkummar Rao',
    label: 'T-Series',
    significance:
      'Hindi feature film starring Himesh Reshammiya and Rajkummar Rao that premiered on television in 2013 with three tracks written and composed by Himesh.',
    songs: [
      origSong(
        'hr-a-new-love-ishtory-2013',
        1,
        'Bolo Sa Ra',
        'Himesh Reshammiya',
        'A New Love Ishtory',
        2013,
        'Himesh Reshammiya'
      ),
      origSong(
        'hr-a-new-love-ishtory-2013',
        2,
        'Jab Main Chhota Bachcha Tha',
        'Himesh Reshammiya',
        'A New Love Ishtory',
        2013,
        'Himesh Reshammiya'
      ),
      origSong(
        'hr-a-new-love-ishtory-2013',
        3,
        'Download Kar Gaye',
        'Himesh Reshammiya',
        'A New Love Ishtory',
        2013,
        'Himesh Reshammiya'
      ),
    ],
  },
  {
    id: 'hr-policegiri-2013',
    directorId: 'himesh-reshammiya',
    title: 'Policegiri',
    year: 2013,
    cast: 'Sanjay Dutt, Prachi Desai, Prakash Raj',
    label: 'T-Series',
    significance:
      'Sanjay Dutt masala entertainer; includes Himesh Reshammiya’s four composed tracks while excluding Meet Bros Anjjan’s \'Robinhood\'.',
    songs: [
      origSong(
        'hr-policegiri-2013',
        1,
        'Chura Ke Leja',
        'Yashraj Kapil, Palak Muchhal',
        'Policegiri',
        2013,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-policegiri-2013',
        2,
        'Jhoom Barabar Jhoom',
        'Vinit Singh, Shabab Sabri, Aman Trikha, Pavni Pandey',
        'Policegiri',
        2013,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-policegiri-2013',
        3,
        'Tirat Meri Tu',
        'Vinit Singh, Shabab Sabri, Palak Muchhal',
        'Policegiri',
        2013,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-policegiri-2013',
        4,
        'Policegiri',
        'Aman Trikha, Rajdeep Chatterjee, Yashraj Kapil',
        'Policegiri',
        2013,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-shortcut-romeo-2013',
    directorId: 'himesh-reshammiya',
    title: 'Shortcut Romeo',
    year: 2013,
    cast: 'Neil Nitin Mukesh, Ameesha Patel, Puja Gupta',
    label: 'T-Series',
    significance:
      'Suspense thriller starring Neil Nitin Mukesh and Ameesha Patel scored by Himesh Reshammiya.',
    songs: [
      origSong(
        'hr-shortcut-romeo-2013',
        1,
        'Pe Pe Pe (Coca Cola)',
        'Himesh Reshammiya',
        'Shortcut Romeo',
        2013,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-shortcut-romeo-2013',
        2,
        'Khali Salam Dua',
        'Mohit Chauhan',
        'Shortcut Romeo',
        2013,
        'Sameer'
      ),
      origSong(
        'hr-shortcut-romeo-2013',
        3,
        'Ishq Gangster',
        'Himesh Reshammiya, Vinit Singh',
        'Shortcut Romeo',
        2013,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-shortcut-romeo-2013',
        4,
        'Short Cut Romeo',
        'Ash King',
        'Shortcut Romeo',
        2013,
        'Sameer'
      ),
      origSong(
        'hr-shortcut-romeo-2013',
        5,
        'Jave Saari Duniya',
        'Mika Singh',
        'Shortcut Romeo',
        2013,
        'Manoj Yadav'
      ),
    ],
  },
  {
    id: 'hr-kick-2014',
    directorId: 'himesh-reshammiya',
    title: 'Kick',
    year: 2014,
    cast: 'Salman Khan, Jacqueline Fernandez, Randeep Hooda, Nawazuddin Siddiqui',
    label: 'T-Series',
    significance:
      'Filmfare-nominated mega-blockbuster featuring Himesh Reshammiya’s two signature tracks ("Jumme Ki Raat", "Tu Hi Tu"); Meet Bros Anjjan and Yo Yo Honey Singh tracks are excluded.',
    songs: [
      origSong(
        'hr-kick-2014',
        1,
        'Jumme Ki Raat',
        'Mika Singh, Palak Muchhal',
        'Kick',
        2014,
        'Kumaar, Shabbir Ahmed',
        '2014’s biggest Bollywood dance phenomenon, earning Filmfare, IIFA, and Screen Best Music nominations.'
      ),
      origSong(
        'hr-kick-2014',
        2,
        'Tu Hi Tu',
        'Mohammad Irfan',
        'Kick',
        2014,
        'Mayur Puri'
      ),
    ],
  },
  {
    id: 'hr-action-jackson-2014',
    directorId: 'himesh-reshammiya',
    title: 'Action Jackson',
    year: 2014,
    cast: 'Ajay Devgn, Sonakshi Sinha, Yami Gautam, Manasvi Mamgai',
    label: 'Eros Music',
    significance:
      'Prabhu Deva masala entertainer blending Ankit Tiwari’s hits ("Dhoom Dhaam", "Punjabi Mast") with Pitbull-inspired dance track "Keeda".',
    songs: [
      adaptedSong(
        'hr-action-jackson-2014',
        1,
        'Keeda',
        'Himesh Reshammiya, Neeti Mohan',
        'Action Jackson',
        2014,
        'Shabbir Ahmed',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'I Know You Want Me (Calle Ocho)',
          originalArtist: 'Pitbull',
          originalYear: '2009',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Shares the Latin-house brass horn riff and rhythmic hook cadence associated with Pitbull’s 2009 global club hit "I Know You Want Me (Calle Ocho)".',
          originalLink: 'https://www.youtube.com/watch?v=hFoxg4IFtqc',
          referenceSource: 'CopycatList Hindi Archive',
        }
      ),
      origSong(
        'hr-action-jackson-2014',
        2,
        'Punjabi Mast',
        'Ankit Tiwari, Neeti Mohan, Arya Acharya, Vineet Singh',
        'Action Jackson',
        2014,
        'Sameer'
      ),
      origSong(
        'hr-action-jackson-2014',
        3,
        'Dhoom Dhaam',
        'Ankit Tiwari, Palak Muchhal',
        'Action Jackson',
        2014,
        'Sameer'
      ),
      origSong(
        'hr-action-jackson-2014',
        4,
        'Chichora Piya',
        'Himesh Reshammiya, Shalmali Kholgade',
        'Action Jackson',
        2014,
        'Sameer'
      ),
      origSong(
        'hr-action-jackson-2014',
        5,
        'Gangster Baby',
        'Neeraj Shridhar, Neeti Mohan',
        'Action Jackson',
        2014,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-the-xpose-2014',
    directorId: 'himesh-reshammiya',
    title: 'The Xposé',
    year: 2014,
    cast: 'Himesh Reshammiya, Yo Yo Honey Singh, Sonali Raut, Zoya Afroz',
    label: 'T-Series',
    significance:
      '1960s-styled noir thriller winning the BIG Life OK Now Award for Best Music, anchored by Mohammad Irfan’s romantic classic "Dard Dilo Ke".',
    songs: [
      origSong(
        'hr-the-xpose-2014',
        1,
        'Dard Dilo Ke',
        'Mohammad Irfan',
        'The Xposé',
        2014,
        'Sameer',
        'Acclaimed retro-melodic highlight showcasing Himesh Reshammiya’s dramatic string arrangements.'
      ),
      origSong(
        'hr-the-xpose-2014',
        2,
        'Ice Cream Khaungi',
        'Himesh Reshammiya, Palak Muchhal, Yo Yo Honey Singh',
        'The Xposé',
        2014,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-the-xpose-2014',
        3,
        'Hai Apna Dil Toh Awaara',
        'Himesh Reshammiya, Yo Yo Honey Singh',
        'The Xposé',
        2014,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-the-xpose-2014',
        4,
        'Surroor',
        'Himesh Reshammiya, Yo Yo Honey Singh, Shalmali Kholgade',
        'The Xposé',
        2014,
        'Sameer'
      ),
      origSong(
        'hr-the-xpose-2014',
        5,
        'Sheeshe Ka Samundar',
        'Ankit Tiwari',
        'The Xposé',
        2014,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-humshakals-2014',
    directorId: 'himesh-reshammiya',
    title: 'Humshakals',
    year: 2014,
    cast: 'Saif Ali Khan, Riteish Deshmukh, Ram Kapoor, Bipasha Basu, Tamannaah',
    label: 'Zee Music Company',
    significance:
      'Sajid Khan comedy anchored by club hits \'Caller Tune\' and \'Piya Ke Bazaar Mein\'.',
    songs: [
      origSong(
        'hr-humshakals-2014',
        1,
        'Caller Tune',
        'Neeraj Shridhar, Neeti Mohan',
        'Humshakals',
        2014,
        'Sameer',
        'High-tempo club opener featuring Neeraj Shridhar and Neeti Mohan.'
      ),
      origSong(
        'hr-humshakals-2014',
        2,
        'Piya Ke Bazaar Mein',
        'Himesh Reshammiya, Shalmali Kholgade, Palak Muchhal',
        'Humshakals',
        2014,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-humshakals-2014',
        3,
        'Barbaad Raat',
        'Sanam Puri, Shalmali Kholgade',
        'Humshakals',
        2014,
        'Mayur Puri'
      ),
      origSong(
        'hr-humshakals-2014',
        4,
        'Look into My Eyes',
        'Ash King, Neeti Mohan',
        'Humshakals',
        2014,
        'Sameer'
      ),
      origSong(
        'hr-humshakals-2014',
        5,
        'Hum Pagal Nahi Hai',
        'Himesh Reshammiya',
        'Humshakals',
        2014,
        'Mayur Puri'
      ),
      origSong(
        'hr-humshakals-2014',
        6,
        'Khol De Dil Ki Khidki',
        'Mika Singh, Palak Muchhal',
        'Humshakals',
        2014,
        'Sameer'
      ),
    ],
  },
  // =========================================================================
  // 2015 – 2025: PREM RATAN DHAN PAYO, SANAM TERI KASAM & REVIVAL ERA
  // =========================================================================
  {
    id: 'hr-prem-ratan-dhan-payo-2015',
    directorId: 'himesh-reshammiya',
    title: 'Prem Ratan Dhan Payo',
    year: 2015,
    cast: 'Salman Khan, Sonam Kapoor, Neil Nitin Mukesh, Anupam Kher',
    label: 'T-Series',
    significance:
      'All-acoustic Rajshri family blockbuster directed by Sooraj Barjatya with lyrics by Irshad Kamil; won Zee Cine Song of the Year and BIG Star Most Entertaining Music.',
    songs: [
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        1,
        'Prem Ratan Dhan Payo',
        'Palak Muchhal',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil',
        'Winner of the Zee Cine Award for Song of the Year, composed without electronic synthesizers on Sooraj Barjatya’s traditional acoustic brief.'
      ),
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        2,
        'Prem Leela',
        'Aman Trikha, Vineet Singh',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil'
      ),
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        3,
        'Jalte Diye',
        'Anweshaa, Harshdeep Kaur, Vineet Singh, Shabab Sabri',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil'
      ),
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        4,
        'Jab Tum Chaho',
        'Palak Muchhal, Mohammed Irfan, Darshan Raval',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil'
      ),
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        5,
        'Aaj Unse Milna Hai',
        'Shaan',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil'
      ),
      origSong(
        'hr-prem-ratan-dhan-payo-2015',
        6,
        'Tod Tadaiyya',
        'Neeraj Shridhar, Neeti Mohan',
        'Prem Ratan Dhan Payo',
        2015,
        'Irshad Kamil'
      ),
    ],
  },
  {
    id: 'hr-all-is-well-2015',
    directorId: 'himesh-reshammiya',
    title: 'All Is Well',
    year: 2015,
    cast: 'Abhishek Bachchan, Asin, Rishi Kapoor, Supriya Pathak',
    label: 'T-Series',
    significance:
      'Includes Himesh Reshammiya’s three contributed tracks including Arijit Singh’s soaring ballad "Baaton Ko Teri"; guest tracks by Meet Bros Anjjan and Amaal Mallik are excluded.',
    songs: [
      origSong(
        'hr-all-is-well-2015',
        1,
        'Baaton Ko Teri',
        'Arijit Singh',
        'All Is Well',
        2015,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-all-is-well-2015',
        2,
        'Tu Milade',
        'Ankit Tiwari',
        'All Is Well',
        2015,
        'Mayur Puri'
      ),
      origSong(
        'hr-all-is-well-2015',
        3,
        'YOLO',
        'Sreerama Chandra',
        'All Is Well',
        2015,
        'Kumaar'
      ),
    ],
  },
  {
    id: 'hr-sanam-teri-kasam-2016',
    directorId: 'himesh-reshammiya',
    title: 'Sanam Teri Kasam',
    year: 2016,
    cast: 'Harshvardhan Rane, Mawra Hocane',
    label: 'Sony Music',
    significance:
      'Cult romantic album that surged back to streaming prominence years after release, powered by "Sanam Teri Kasam", "Tera Chehra", and "Kheech Meri Photo".',
    songs: [
      origSong(
        'hr-sanam-teri-kasam-2016',
        1,
        'Sanam Teri Kasam',
        'Ankit Tiwari, Palak Muchhal',
        'Sanam Teri Kasam',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-sanam-teri-kasam-2016',
        2,
        'Tera Chehra',
        'Arijit Singh',
        'Sanam Teri Kasam',
        2016,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-sanam-teri-kasam-2016',
        3,
        'Kheech Meri Photo',
        'Darshan Raval, Neeti Mohan, Akasa Singh',
        'Sanam Teri Kasam',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-sanam-teri-kasam-2016',
        4,
        'Bewajah',
        'Himesh Reshammiya',
        'Sanam Teri Kasam',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-sanam-teri-kasam-2016',
        5,
        'Haal-E-Dil',
        'Sreerama Chandra',
        'Sanam Teri Kasam',
        2016,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-teraa-surroor-2016',
    directorId: 'himesh-reshammiya',
    title: 'Teraa Surroor',
    year: 2016,
    cast: 'Himesh Reshammiya, Farah Karimaee, Naseeruddin Shah, Kabir Bedi',
    label: 'HR Musik / T-Series',
    significance:
      'T-Series’ 100th film collaboration with Himesh Reshammiya; features Arijit Singh’s Beyoncé-inspired ballad "Wafa Ne Bewafai" alongside an official recreation of Anand Raj Anand’s "Ishq Samundar".',
    songs: [
      origSong(
        'hr-teraa-surroor-2016',
        1,
        'Main Woh Chaand',
        'Darshan Raval',
        'Teraa Surroor',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-teraa-surroor-2016',
        2,
        'Bekhudi',
        'Darshan Raval, Aditi Singh Sharma',
        'Teraa Surroor',
        2016,
        'Sameer'
      ),
      adaptedSong(
        'hr-teraa-surroor-2016',
        3,
        'Wafa Ne Bewafai',
        'Arijit Singh, Neeti Mohan, Suzanne D’Mello',
        'Teraa Surroor',
        2016,
        'Sameer',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Halo',
          originalArtist: 'Beyoncé',
          originalYear: '2008',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Shares the sweeping piano-chord progression and atmospheric pop-ballad build of Beyoncé’s 2008 hit "Halo" from I Am... Sasha Fierce.',
          originalLink: 'https://www.youtube.com/watch?v=bnVUHWCynig',
          referenceSource: 'CopycatList Hindi Archive & Pop Musicology',
        }
      ),
      origSong(
        'hr-teraa-surroor-2016',
        4,
        'Teri Yaad',
        'Himesh Reshammiya, Badshah',
        'Teraa Surroor',
        2016,
        'Shabbir Ahmed'
      ),
      adaptedSong(
        'hr-teraa-surroor-2016',
        5,
        'Ishq Samundar (Reloaded)',
        'Himesh Reshammiya, Kanika Kapoor',
        'Teraa Surroor',
        2016,
        'Anand Raj Anand',
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Ishq Samundar',
          originalArtist: 'Anand Raj Anand (Kaante)',
          originalYear: '2002',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Official T-Series club recreation of Anand Raj Anand’s cult Kaante (2002) dance number, reworked with electronic drops for Teraa Surroor.',
          originalLink: 'https://www.youtube.com/watch?v=m_sGtco90Dg',
          referenceSource: 'Official Album Credit (HR Musik / T-Series)',
        }
      ),
    ],
  },
  {
    id: 'hr-final-cut-of-director-2016',
    directorId: 'himesh-reshammiya',
    title: 'Final Cut of Director',
    year: 2016,
    cast: 'Nana Patekar, Arjun Sarja, Kajal Aggarwal, Rukmini Vijayakumar',
    label: 'Zee Music Company',
    significance:
      'Bharathiraja’s long-delayed Hindi thriller (shot concurrently with Tamil Bommalattam) featuring Himesh Reshammiya’s songs.',
    songs: [
      origSong(
        'hr-final-cut-of-director-2016',
        1,
        'Zindagi',
        'Sunidhi Chauhan',
        'Final Cut of Director',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-final-cut-of-director-2016',
        2,
        'Dhola Dholiya',
        'Afsar, Sneha Pant',
        'Final Cut of Director',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-final-cut-of-director-2016',
        3,
        'Chakle Chakle',
        'Akriti Kakkar',
        'Final Cut of Director',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-final-cut-of-director-2016',
        4,
        'Aaha Aaha',
        'Himesh Reshammiya, Manjeera Ganguly',
        'Final Cut of Director',
        2016,
        'Sameer'
      ),
      origSong(
        'hr-final-cut-of-director-2016',
        5,
        'Leja Leja',
        'Gayatri Ganjawala',
        'Final Cut of Director',
        2016,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-genius-2018',
    directorId: 'himesh-reshammiya',
    title: 'Genius',
    year: 2018,
    cast: 'Utkarsh Sharma, Ishita Chauhan, Nawazuddin Siddiqui, Mithun Chakraborty',
    label: 'Tips Music',
    significance:
      '2018 romantic thriller featuring the blockbuster streaming hits "Tera Fitoor" (Arijit Singh) and "Dil Meri Na Sune" (Atif Aslam).',
    songs: [
      origSong(
        'hr-genius-2018',
        1,
        'Tera Fitoor',
        'Arijit Singh',
        'Genius',
        2018,
        'Kumaar',
        'Digital streaming powerhouse showcasing Himesh Reshammiya’s lush string-guitar romantic writing.'
      ),
      origSong(
        'hr-genius-2018',
        2,
        'Dil Meri Na Sune',
        'Atif Aslam',
        'Genius',
        2018,
        'Manoj Muntashir'
      ),
      origSong(
        'hr-genius-2018',
        3,
        'Tujhse Kahan Juda Hoon Main',
        'Himesh Reshammiya, Neeti Mohan, Vineet Singh',
        'Genius',
        2018,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-genius-2018',
        4,
        'Pyar Le Pyar De',
        'Dev Negi, Iulia Vantur, Ikka',
        'Genius',
        2018,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-happy-hardy-and-heer-2020',
    directorId: 'himesh-reshammiya',
    title: 'Happy Hardy and Heer',
    year: 2020,
    cast: 'Himesh Reshammiya, Sonia Mann',
    label: 'Tips Music',
    significance:
      'Dual-role musical comedy featuring the viral playback debut of Ranu Mondal ("Teri Meri Kahani", "Aashiqui Mein Teri 2.0") alongside Arijit Singh’s "Heeriye".',
    songs: [
      origSong(
        'hr-happy-hardy-and-heer-2020',
        1,
        'Teri Meri Kahani',
        'Himesh Reshammiya, Ranu Mondal',
        'Happy Hardy and Heer',
        2020,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-happy-hardy-and-heer-2020',
        2,
        'Heeriye',
        'Arijit Singh, Shreya Ghoshal',
        'Happy Hardy and Heer',
        2020,
        'Vishal Mishra, Shabbir Ahmed'
      ),
      origSong(
        'hr-happy-hardy-and-heer-2020',
        3,
        'Aashiqui Mein Teri 2.0',
        'Himesh Reshammiya, Ranu Mondal',
        'Happy Hardy and Heer',
        2020,
        'Sameer',
        'Self-referential sequel recreation to Himesh Reshammiya’s own 2006 36 China Town hit.'
      ),
      origSong(
        'hr-happy-hardy-and-heer-2020',
        4,
        'Ishqbaaziyaan',
        'Jubin Nautiyal, Harshdeep Kaur, Asees Kaur, Alamgir Khan',
        'Happy Hardy and Heer',
        2020,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-radhe-2021',
    directorId: 'himesh-reshammiya',
    title: 'Radhe',
    year: 2021,
    cast: 'Salman Khan, Disha Patani, Randeep Hooda, Jackie Shroff',
    label: 'Zee Music Company',
    significance:
      'Includes Himesh Reshammiya’s sole guest song "Dil De Diya"; separate tracks by Devi Sri Prasad and Sajid–Wajid are excluded.',
    songs: [
      origSong(
        'hr-radhe-2021',
        1,
        'Dil De Diya',
        'Kamaal Khan, Payal Dev',
        'Radhe',
        2021,
        'Shabbir Ahmed'
      ),
    ],
  },
  {
    id: 'hr-raksha-bandhan-2022',
    directorId: 'himesh-reshammiya',
    title: 'Raksha Bandhan',
    year: 2022,
    cast: 'Akshay Kumar, Bhumi Pednekar, Sadia Khateeb',
    label: 'Zee Music Company',
    significance:
      'Aanand L. Rai family drama reuniting Akshay Kumar and Himesh Reshammiya with Irshad Kamil’s lyrics.',
    songs: [
      origSong(
        'hr-raksha-bandhan-2022',
        1,
        'Tere Saath Hoon Main',
        'Nihal Tauro',
        'Raksha Bandhan',
        2022,
        'Irshad Kamil'
      ),
      origSong(
        'hr-raksha-bandhan-2022',
        2,
        'Dhaagon Se Baandhaa',
        'Arijit Singh, Shreya Ghoshal',
        'Raksha Bandhan',
        2022,
        'Irshad Kamil'
      ),
      origSong(
        'hr-raksha-bandhan-2022',
        3,
        'Kangan Ruby',
        'Himesh Reshammiya',
        'Raksha Bandhan',
        2022,
        'Irshad Kamil'
      ),
      origSong(
        'hr-raksha-bandhan-2022',
        4,
        'Raksha Bandhan Title Track',
        'Shreya Ghoshal',
        'Raksha Bandhan',
        2022,
        'Irshad Kamil'
      ),
    ],
  },
  {
    id: 'hr-middle-class-love-2022',
    directorId: 'himesh-reshammiya',
    title: 'Middle Class Love',
    year: 2022,
    cast: 'Prit Kamani, Eisha Singh, Kavya Thapar',
    label: 'Zee Music Company',
    significance:
      'Campus romance scored by Himesh Reshammiya (excluding Prasanna Suresh’s guest rap track \'Apna Karenge\').',
    songs: [
      origSong(
        'hr-middle-class-love-2022',
        1,
        'Naya Pyaar Naya Ehsaas',
        'Jubin Nautiyal, Palak Muchhal',
        'Middle Class Love',
        2022,
        'Shakeel Azmi'
      ),
      origSong(
        'hr-middle-class-love-2022',
        2,
        'Tuk Tuk',
        'Himesh Reshammiya, Payal Dev',
        'Middle Class Love',
        2022,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-middle-class-love-2022',
        3,
        'Manjha',
        'Himesh Reshammiya, Raj Barman',
        'Middle Class Love',
        2022,
        'Shakeel Azmi'
      ),
      origSong(
        'hr-middle-class-love-2022',
        4,
        'Hypnotize',
        'Dev Negi, Akasa Singh, Aasa Singh',
        'Middle Class Love',
        2022,
        'Mayur Puri'
      ),
      origSong(
        'hr-middle-class-love-2022',
        5,
        'Kisko Tha Pata',
        'Vishal Dadlani',
        'Middle Class Love',
        2022,
        'Himesh Reshammiya'
      ),
    ],
  },
  {
    id: 'hr-kisi-ka-bhai-kisi-ki-jaan-2023',
    directorId: 'himesh-reshammiya',
    title: 'Kisi Ka Bhai Kisi Ki Jaan',
    year: 2023,
    cast: 'Salman Khan, Pooja Hegde, Venkatesh',
    label: 'Zee Music Company',
    significance:
      'Includes Himesh Reshammiya’s chart-topping 1990s-nostalgia ballad "Naiyo Lagda"; separate tracks by Devi Sri Prasad, Sukhbir, and Ravi Basrur are excluded.',
    songs: [
      origSong(
        'hr-kisi-ka-bhai-kisi-ki-jaan-2023',
        1,
        'Naiyo Lagda',
        'Kamaal Khan, Palak Muchhal',
        'Kisi Ka Bhai Kisi Ki Jaan',
        2023,
        'Shabbir Ahmed',
        '1990s-evocative romantic melody setting streaming view records upon its Valentine’s 2023 release.'
      ),
    ],
  },
  {
    id: 'hr-bad-boy-2023',
    directorId: 'himesh-reshammiya',
    title: 'Bad Boy',
    year: 2023,
    cast: 'Namashi Chakraborty, Amrin Qureshi, Mithun Chakraborty',
    label: 'Zee Music Company',
    significance:
      'Rajkumar Santoshi’s 2023 romantic comedy scored by Himesh Reshammiya featuring Arijit Singh’s \'Tera Hua\'.',
    songs: [
      origSong(
        'hr-bad-boy-2023',
        1,
        'Tera Hua',
        'Arijit Singh, Jyotica Tangri',
        'Bad Boy',
        2023,
        'Sonia Kapoor'
      ),
      origSong(
        'hr-bad-boy-2023',
        2,
        'Janabe Ali',
        'Himesh Reshammiya',
        'Bad Boy',
        2023,
        'Himesh Reshammiya'
      ),
      origSong(
        'hr-bad-boy-2023',
        3,
        'Instaa Vich Story',
        'Himesh Reshammiya, Vineet Singh, Aditi Singh Sharma, Asees Kaur',
        'Bad Boy',
        2023,
        'Kumaar'
      ),
      origSong(
        'hr-bad-boy-2023',
        4,
        'Aalam Na Poocho',
        'Payal Dev, Raj Barman, Aakritti Mehra',
        'Bad Boy',
        2023,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-bad-boy-2023',
        5,
        'Saajnaa',
        'Asees Kaur',
        'Bad Boy',
        2023,
        'Himesh Reshammiya'
      ),
    ],
  },
  {
    id: 'hr-naam-2024',
    directorId: 'himesh-reshammiya',
    title: 'Naam',
    year: 2024,
    cast: 'Ajay Devgn, Bhumika Chawla, Sameera Reddy',
    label: 'Tips Music',
    significance:
      'Long-delayed 2024 action thriller; indexes Himesh Reshammiya’s three composed songs while excluding Sajid–Wajid’s \'Dum Dum Maaro\'.',
    songs: [
      origSong(
        'hr-naam-2024',
        1,
        'Laila',
        'Sunidhi Chauhan, Kunal Ganjawala',
        'Naam',
        2024,
        'Sameer'
      ),
      origSong(
        'hr-naam-2024',
        2,
        'Yuhi Nahi',
        'Udit Narayan, Alka Yagnik',
        'Naam',
        2024,
        'Sameer'
      ),
      origSong(
        'hr-naam-2024',
        3,
        'Ishq Da',
        'Sunidhi Chauhan',
        'Naam',
        2024,
        'Sameer'
      ),
    ],
  },
  {
    id: 'hr-badass-ravi-kumar-2025',
    directorId: 'himesh-reshammiya',
    title: 'Badass Ravi Kumar',
    year: 2025,
    cast: 'Himesh Reshammiya, Prabhu Deva, Kirti Kulhari, Sunny Leone',
    label: 'Himesh Reshammiya Melodies',
    significance:
      '2025 retro-action musical spin-off to The Xposé, uniting 1980s disco-synth homage with viral mass hooks composed and sung by Himesh Reshammiya.',
    songs: [
      origSong(
        'hr-badass-ravi-kumar-2025',
        1,
        'Dil Ke Taj Mahal Meinn',
        'Himesh Reshammiya',
        'Badass Ravi Kumar',
        2025,
        'Mayur Puri'
      ),
      origSong(
        'hr-badass-ravi-kumar-2025',
        2,
        'Hookstep Hookah Bar',
        'Himesh Reshammiya, Sunidhi Chauhan, Shannon K',
        'Badass Ravi Kumar',
        2025,
        'Himesh Reshammiya'
      ),
      origSong(
        'hr-badass-ravi-kumar-2025',
        3,
        'Bazaar-E-Ishq',
        'Himesh Reshammiya, Shreya Ghoshal',
        'Badass Ravi Kumar',
        2025,
        'Shabbir Ahmed'
      ),
      origSong(
        'hr-badass-ravi-kumar-2025',
        4,
        'Tandoori Days',
        'Himesh Reshammiya, Aditi Singh Sharma',
        'Badass Ravi Kumar',
        2025,
        'Sameer'
      ),
      origSong(
        'hr-badass-ravi-kumar-2025',
        5,
        'Butterfly Titliyan',
        'Himesh Reshammiya',
        'Badass Ravi Kumar',
        2025,
        'Sonia Kapoor'
      ),
    ],
  },
];
