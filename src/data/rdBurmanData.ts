import type { MovieEntry, SongEntry } from '../types/archive.ts';

const yt = (query: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const song = (
  id: string,
  movieId: string,
  title: string,
  singers: string,
  movieTitle: string,
  year: number,
  options: Partial<Omit<SongEntry, 'id' | 'movieId' | 'title' | 'singers'>> = {}
): SongEntry => ({
  id,
  movieId,
  title,
  singers,
  adaptationType: options.adaptationType ?? 'original',
  originCategory: options.originCategory ?? 'Original Composition',
  bollywoodLink:
    options.bollywoodLink ?? yt(`${title} ${movieTitle} ${year} full song`),
  originalSongTitle: options.originalSongTitle,
  originalArtist: options.originalArtist,
  originalYear: options.originalYear,
  adaptationNotes: options.adaptationNotes,
  originalLink: options.originalLink,
  referenceSource: options.referenceSource,
  lyricist: options.lyricist,
});

export const RD_BURMAN_MOVIES: MovieEntry[] = [
  // =========================================================================
  // 1961 – 1969: Early Career & Breakthrough Era
  // =========================================================================
  {
    id: 'rdb-chhote-nawab-1961',
    directorId: 'rd-burman',
    title: 'Chhote Nawab',
    year: 1961,
    cast: 'Mehmood, Ameeta, Johnny Walker',
    significance: 'R.D. Burman’s debut film as an independent Hindi music director',
    songs: [
      song(
        'rdb-cn61-1',
        'rdb-chhote-nawab-1961',
        'Ghar Aaja Ghir Aaye Badra Sanwariya',
        'Lata Mangeshkar',
        'Chhote Nawab',
        1961,
        {
          lyricist: 'Shailendra',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes: 'Set to Raag Malgunji; marked Pancham’s acclaimed classical-rooted debut.',
        }
      ),
      song(
        'rdb-cn61-2',
        'rdb-chhote-nawab-1961',
        'Matwali Aankhon Wale',
        'Mohammed Rafi, Lata Mangeshkar',
        'Chhote Nawab',
        1961,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'rdb-bhoot-bungla-1965',
    directorId: 'rd-burman',
    title: 'Bhoot Bungla',
    year: 1965,
    cast: 'Mehmood, Tanuja, Nazir Hussain',
    significance: 'Cult horror-comedy featuring Pancham’s earliest rock-and-roll & twist experiments',
    songs: [
      song(
        'rdb-bb65-1',
        'rdb-bhoot-bungla-1965',
        'Aao Twist Karein',
        'Manna Dey',
        'Bhoot Bungla',
        1965,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: "Let's Twist Again",
          originalArtist: 'Chubby Checker',
          originalYear: '1961',
          adaptationNotes:
            'Built directly on Chubby Checker’s twist rhythm, chord progression, and dance hook.',
          originalLink: 'https://www.youtube.com/watch?v=KxQZQ86jJHg',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-bb65-2',
        'rdb-bhoot-bungla-1965',
        'Jago Sonewalo Suno Meri Kahani',
        'Kishore Kumar',
        'Bhoot Bungla',
        1965,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'rdb-teesra-kaun-1965',
    directorId: 'rd-burman',
    title: 'Teesra Kaun',
    year: 1965,
    cast: 'Feroz Khan, Kalpana',
    songs: [
      song(
        'rdb-tk65-1',
        'rdb-teesra-kaun-1965',
        'Pyaar Ka Fasana Banale Dil Diwana',
        'Lata Mangeshkar, Mukesh',
        'Teesra Kaun',
        1965,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-pati-patni-1966',
    directorId: 'rd-burman',
    title: 'Pati Patni',
    year: 1966,
    cast: 'Sanjeev Kumar, Nanda, Mehmood',
    songs: [
      song(
        'rdb-pp66-1',
        'rdb-pati-patni-1966',
        'Maar Gayi Mujhe Teri Judaai',
        'Asha Bhosle',
        'Pati Patni',
        1966
      ),
    ],
  },
  {
    id: 'rdb-teesri-manzil-1966',
    directorId: 'rd-burman',
    title: 'Teesri Manzil',
    year: 1966,
    cast: 'Shammi Kapoor, Asha Parekh, Helen',
    label: 'HMV / Saregama',
    significance: 'Watershed 1960s rock-and-roll & brass-jazz soundtrack that made R.D. Burman a household name',
    songs: [
      song(
        'rdb-tm66-1',
        'rdb-teesri-manzil-1966',
        'Aaja Aaja Main Hoon Pyar Tera',
        'Mohammed Rafi, Asha Bhosle',
        'Teesri Manzil',
        1966,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: '1960s Twist & Garage Rock Grooves',
          originalArtist: 'Chubby Checker / American Rock-and-Roll Era',
          originalYear: '1960s',
          adaptationNotes:
            'Synthesizes 1960s Western twist drums, bass riffs, and brass stabs into a high-velocity Hindi duet.',
          originalLink: 'https://www.youtube.com/watch?v=r2df0nzxxLU',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'rdb-tm66-2',
        'rdb-teesri-manzil-1966',
        'O Haseena Zulfonwali Jane Jahan',
        'Mohammed Rafi, Asha Bhosle',
        'Teesri Manzil',
        1966,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-tm66-3',
        'rdb-teesri-manzil-1966',
        'O Mere Sona Re Sona Re',
        'Asha Bhosle, Mohammed Rafi',
        'Teesri Manzil',
        1966,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-tm66-4',
        'rdb-teesri-manzil-1966',
        'Deewana Mujhsa Nahin',
        'Mohammed Rafi',
        'Teesri Manzil',
        1966,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-baharon-ke-sapne-1967',
    directorId: 'rd-burman',
    title: 'Baharon Ke Sapne',
    year: 1967,
    cast: 'Rajesh Khanna, Asha Parekh',
    songs: [
      song(
        'rdb-bks67-1',
        'rdb-baharon-ke-sapne-1967',
        'Aaja Piya Tohe Pyar Doon',
        'Lata Mangeshkar',
        'Baharon Ke Sapne',
        1967,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-bks67-2',
        'rdb-baharon-ke-sapne-1967',
        'Kya Janoon Sajan',
        'Lata Mangeshkar',
        'Baharon Ke Sapne',
        1967,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-chandan-ka-palna-1967',
    directorId: 'rd-burman',
    title: 'Chandan Ka Palna',
    year: 1967,
    cast: 'Dharmendra, Meena Kumari',
    songs: [
      song(
        'rdb-ckp67-1',
        'rdb-chandan-ka-palna-1967',
        'Zulfon Ko Aap Yun Na Sanwara Karein',
        'Mohammed Rafi',
        'Chandan Ka Palna',
        1967
      ),
    ],
  },
  {
    id: 'rdb-abhilasha-1968',
    directorId: 'rd-burman',
    title: 'Abhilasha',
    year: 1968,
    cast: 'Sanjay Khan, Nanda, Meena Kumari',
    songs: [
      song(
        'rdb-abh68-1',
        'rdb-abhilasha-1968',
        'Waadiyan Mera Daaman',
        'Mohammed Rafi, Lata Mangeshkar',
        'Abhilasha',
        1968,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-padosan-1968',
    directorId: 'rd-burman',
    title: 'Padosan',
    year: 1968,
    cast: 'Sunil Dutt, Saira Banu, Kishore Kumar, Mehmood',
    label: 'HMV / Saregama',
    significance: 'Landmark comedy musical blending classical jugalbandi and light romantic serenades',
    songs: [
      song(
        'rdb-pad68-1',
        'rdb-padosan-1968',
        'Ek Chatur Naar Karke Sringar',
        'Kishore Kumar, Manna Dey, Mehmood',
        'Padosan',
        1968,
        {
          lyricist: 'Rajendra Krishan',
          adaptationType: 'inspired',
          originCategory: 'Indian Folk & Classical',
          originalSongTitle: 'Ek Chatur Naar (Jhoola)',
          originalArtist: 'Ashok Kumar / Saraswati Devi',
          originalYear: '1941',
          adaptationNotes:
            'Reimagines the traditional bandish and Saraswati Devi’s 1941 film motif into a comedic classical duel.',
          originalLink: 'https://www.youtube.com/watch?v=RtthfgNa7YY',
          referenceSource: 'Hindi Film Music Archives',
        }
      ),
      song(
        'rdb-pad68-2',
        'rdb-padosan-1968',
        'Mere Samne Wali Khidki Mein',
        'Kishore Kumar',
        'Padosan',
        1968,
        { lyricist: 'Rajendra Krishan' }
      ),
      song(
        'rdb-pad68-3',
        'rdb-padosan-1968',
        'Kehna Hai Kehna Hai',
        'Kishore Kumar',
        'Padosan',
        1968,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'rdb-pyar-ka-mausam-1969',
    directorId: 'rd-burman',
    title: 'Pyar Ka Mausam',
    year: 1969,
    cast: 'Shashi Kapoor, Asha Parekh',
    songs: [
      song(
        'rdb-pkm69-1',
        'rdb-pyar-ka-mausam-1969',
        'Tum Bin Jaoon Kahan',
        'Mohammed Rafi, Kishore Kumar',
        'Pyar Ka Mausam',
        1969,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-pkm69-2',
        'rdb-pyar-ka-mausam-1969',
        'Ni Sultana Re',
        'Mohammed Rafi, Lata Mangeshkar',
        'Pyar Ka Mausam',
        1969,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-waris-1969',
    directorId: 'rd-burman',
    title: 'Waris',
    year: 1969,
    cast: 'Jeetendra, Hema Malini',
    songs: [
      song(
        'rdb-war69-1',
        'rdb-waris-1969',
        'Lehra Ke Aaya Hai Jhoka Bahar Ka',
        'Mohammed Rafi, Lata Mangeshkar',
        'Waris',
        1969,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },

  // =========================================================================
  // 1970 – 1979: The Golden Decade of Pancham
  // =========================================================================
  {
    id: 'rdb-rajkumari-1970',
    directorId: 'rd-burman',
    title: 'Rajkumari (Bengali)',
    year: 1970,
    cast: 'Uttam Kumar, Tanuja',
    significance: 'R.D. Burman’s debut film score in Bengali cinema',
    songs: [
      song(
        'rdb-rk70-1',
        'rdb-rajkumari-1970',
        'Tabu Bole Keno Sahasa',
        'Kishore Kumar',
        'Rajkumari Bengali',
        1970
      ),
      song(
        'rdb-rk70-2',
        'rdb-rajkumari-1970',
        'E Ki Holo',
        'Asha Bhosle, Kishore Kumar',
        'Rajkumari Bengali',
        1970
      ),
    ],
  },
  {
    id: 'rdb-the-train-1970',
    directorId: 'rd-burman',
    title: 'The Train',
    year: 1970,
    cast: 'Rajesh Khanna, Nanda',
    songs: [
      song(
        'rdb-tr70-1',
        'rdb-the-train-1970',
        'Gulabi Aankhen Jo Teri Dekhi',
        'Mohammed Rafi',
        'The Train',
        1970,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-tr70-2',
        'rdb-the-train-1970',
        'Kis Liye Maine Pyar Kiya',
        'Lata Mangeshkar',
        'The Train',
        1970,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-puraskar-1970',
    directorId: 'rd-burman',
    title: 'Puraskar',
    year: 1970,
    cast: 'Joy Mukherjee, Farida Jalal',
    songs: [
      song(
        'rdb-pur70-1',
        'rdb-puraskar-1970',
        'Dekho Ji Aankhon Mein Dekho',
        'Asha Bhosle, Kishore Kumar',
        'Puraskar',
        1970
      ),
    ],
  },
  {
    id: 'rdb-raaton-ka-raja-1970',
    directorId: 'rd-burman',
    title: 'Raaton Ka Raja',
    year: 1970,
    cast: 'Dheeraj Kumar, Shatrughan Sinha',
    songs: [
      song(
        'rdb-rkr70-1',
        'rdb-raaton-ka-raja-1970',
        'Door Se Tera Diwana Aaya Hai',
        'Mohammed Rafi',
        'Raaton Ka Raja',
        1970
      ),
    ],
  },
  {
    id: 'rdb-saas-bhi-kabhi-bahu-thi-1970',
    directorId: 'rd-burman',
    title: 'Saas Bhi Kabhi Bahu Thi',
    year: 1970,
    cast: 'Sanjay Khan, Leena Chandavarkar',
    songs: [
      song(
        'rdb-sbkbt70-1',
        'rdb-saas-bhi-kabhi-bahu-thi-1970',
        'Le Lo Choodiyan',
        'Kishore Kumar',
        'Saas Bhi Kabhi Bahu Thi',
        1970
      ),
    ],
  },
  {
    id: 'rdb-kati-patang-1971',
    directorId: 'rd-burman',
    title: 'Kati Patang',
    year: 1971,
    cast: 'Rajesh Khanna, Asha Parekh',
    label: 'HMV / Saregama',
    significance: 'Rajesh Khanna–Kishore Kumar classic soundtrack powered by Anand Bakshi’s poetry',
    songs: [
      song(
        'rdb-kp71-1',
        'rdb-kati-patang-1971',
        'Yeh Shaam Mastani',
        'Kishore Kumar',
        'Kati Patang',
        1971,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'The Green Leaves of Summer',
          originalArtist: 'Dimitri Tiomkin / The Brothers Four',
          originalYear: '1960',
          adaptationNotes:
            'Melodic contour and wistful harmonic cadence draw subtle inspiration from Dimitri Tiomkin’s classic folk-ballad theme.',
          originalLink: 'https://www.youtube.com/watch?v=w7Kvcy_WhOQ',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
      song(
        'rdb-kp71-2',
        'rdb-kati-patang-1971',
        'Pyar Diwana Hota Hai',
        'Kishore Kumar',
        'Kati Patang',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-kp71-3',
        'rdb-kati-patang-1971',
        'Yeh Jo Mohabbat Hai',
        'Kishore Kumar',
        'Kati Patang',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-hare-rama-hare-krishna-1971',
    directorId: 'rd-burman',
    title: 'Hare Rama Hare Krishna',
    year: 1971,
    cast: 'Dev Anand, Zeenat Aman, Mumtaz',
    label: 'HMV / Saregama',
    significance: 'Counterculture psychedelic rock soundtrack anchored by Dum Maro Dum',
    songs: [
      song(
        'rdb-hrhk71-1',
        'rdb-hare-rama-hare-krishna-1971',
        'Dum Maro Dum',
        'Asha Bhosle, Usha Iyer',
        'Hare Rama Hare Krishna',
        1971,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Late-1960s Psychedelic Fuzz-Guitar & Funk Grooves',
          originalArtist: 'Western Psychedelic Rock Style',
          originalYear: '1968–1970',
          adaptationNotes:
            'Fuses Western wah-wah electric guitar fuzz and rock basslines with Indian folk chants.',
          originalLink: 'https://www.youtube.com/watch?v=KRrFI27BdtE',
          referenceSource: 'Film Music Archives',
        }
      ),
      song(
        'rdb-hrhk71-2',
        'rdb-hare-rama-hare-krishna-1971',
        'Phoolon Ka Taron Ka',
        'Kishore Kumar, Lata Mangeshkar',
        'Hare Rama Hare Krishna',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-hrhk71-3',
        'rdb-hare-rama-hare-krishna-1971',
        'Kanchi Re Kanchi Re',
        'Kishore Kumar, Lata Mangeshkar',
        'Hare Rama Hare Krishna',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-caravan-1971',
    directorId: 'rd-burman',
    title: 'Caravan',
    year: 1971,
    cast: 'Jeetendra, Asha Parekh, Helen, Aruna Irani',
    label: 'HMV / Saregama',
    songs: [
      song(
        'rdb-car71-1',
        'rdb-caravan-1971',
        'Piya Tu Ab To Aaja',
        'Asha Bhosle, R.D. Burman',
        'Caravan',
        1971,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: '1960s Latin-Jazz Cabaret & Big-Band Grooves',
          originalArtist: 'Western Jazz / Latin Orchestra Style',
          originalYear: '1960s',
          adaptationNotes:
            'Built around Latin-jazz brass riffs, harmonica interludes, and Pancham’s signature vocal counterpoint.',
          originalLink: 'https://www.youtube.com/watch?v=Pfpdq_ELBxo',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'rdb-car71-2',
        'rdb-caravan-1971',
        'Chadti Jawani Meri Chaal Mastani',
        'Lata Mangeshkar, Mohammed Rafi',
        'Caravan',
        1971,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-car71-3',
        'rdb-caravan-1971',
        'Kitna Pyara Wada Hai',
        'Mohammed Rafi, Lata Mangeshkar',
        'Caravan',
        1971,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-buddha-mil-gaya-1971',
    directorId: 'rd-burman',
    title: 'Buddha Mil Gaya',
    year: 1971,
    cast: 'Navin Nischol, Archana, Om Prakash',
    songs: [
      song(
        'rdb-bmg71-1',
        'rdb-buddha-mil-gaya-1971',
        'Raat Kali Ek Khwab Mein Aayi',
        'Kishore Kumar',
        'Buddha Mil Gaya',
        1971,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-bmg71-2',
        'rdb-buddha-mil-gaya-1971',
        'Aayo Kahan Se Ghanshyam',
        'Manna Dey, Archana',
        'Buddha Mil Gaya',
        1971,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-paraya-dhan-1971',
    directorId: 'rd-burman',
    title: 'Paraya Dhan',
    year: 1971,
    cast: 'Rakesh Roshan, Hema Malini',
    songs: [
      song(
        'rdb-pd71-1',
        'rdb-paraya-dhan-1971',
        'Aaj Unse Pehli Mulaqat Hogi',
        'Kishore Kumar',
        'Paraya Dhan',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-pd71-2',
        'rdb-paraya-dhan-1971',
        'Dil Hai Mera Dil',
        'Kishore Kumar',
        'Paraya Dhan',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-mela-1971',
    directorId: 'rd-burman',
    title: 'Mela',
    year: 1971,
    cast: 'Sanjay Khan, Mumtaz, Feroz Khan',
    songs: [
      song(
        'rdb-mela71-1',
        'rdb-mela-1971',
        'Gori Ke Haath Mein',
        'Mohammed Rafi, Lata Mangeshkar',
        'Mela',
        1971
      ),
    ],
  },
  {
    id: 'rdb-lakhon-me-ek-1971',
    directorId: 'rd-burman',
    title: 'Lakhon Me Ek',
    year: 1971,
    cast: 'Mehmood, Radha Saluja',
    songs: [
      song(
        'rdb-lme71-1',
        'rdb-lakhon-me-ek-1971',
        'Chanda O Chanda',
        'Kishore Kumar, Lata Mangeshkar',
        'Lakhon Me Ek',
        1971,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-hulchul-1971',
    directorId: 'rd-burman',
    title: 'Hulchul',
    year: 1971,
    cast: 'Kabir Bedi, Zeenat Aman',
    songs: [
      song(
        'rdb-hul71-1',
        'rdb-hulchul-1971',
        'Pehle Chhuri Chala Ke',
        'Asha Bhosle',
        'Hulchul',
        1971
      ),
    ],
  },
  {
    id: 'rdb-adhikar-1971',
    directorId: 'rd-burman',
    title: 'Adhikar',
    year: 1971,
    cast: 'Ashok Kumar, Nanda, Deb Mukherjee',
    songs: [
      song(
        'rdb-adh71-1',
        'rdb-adhikar-1971',
        'Koi Mane Ya Na Mane',
        'Asha Bhosle, Kishore Kumar',
        'Adhikar',
        1971
      ),
    ],
  },
  {
    id: 'rdb-pyar-ki-kahani-1971',
    directorId: 'rd-burman',
    title: 'Pyar Ki Kahani',
    year: 1971,
    cast: 'Amitabh Bachchan, Tanuja',
    songs: [
      song(
        'rdb-pkk71-1',
        'rdb-pyar-ki-kahani-1971',
        'Ek Pate Ki Baat Bataun',
        'Kishore Kumar',
        'Pyar Ki Kahani',
        1971
      ),
    ],
  },
  {
    id: 'rdb-hungama-1971',
    directorId: 'rd-burman',
    title: 'Hungama',
    year: 1971,
    cast: 'Kishore Kumar, Vinod Khanna, Zeenat Aman',
    songs: [
      song(
        'rdb-hun71-1',
        'rdb-hungama-1971',
        'Kachchi Kali Kachnar Ki',
        'Asha Bhosle',
        'Hungama',
        1971
      ),
    ],
  },
  {
    id: 'rdb-amar-prem-1972',
    directorId: 'rd-burman',
    title: 'Amar Prem',
    year: 1972,
    cast: 'Rajesh Khanna, Sharmila Tagore',
    label: 'HMV / Saregama',
    significance: 'Pancham’s most revered classical-melodic masterwork featuring S.D. Burman and Kishore Kumar',
    songs: [
      song(
        'rdb-ap72-1',
        'rdb-amar-prem-1972',
        'Chingari Koi Bhadke',
        'Kishore Kumar',
        'Amar Prem',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-ap72-2',
        'rdb-amar-prem-1972',
        'Kuchh To Log Kahenge',
        'Kishore Kumar',
        'Amar Prem',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-ap72-3',
        'rdb-amar-prem-1972',
        'Raina Beeti Jaye',
        'Lata Mangeshkar',
        'Amar Prem',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-ap72-4',
        'rdb-amar-prem-1972',
        'Yeh Kya Hua',
        'Kishore Kumar',
        'Amar Prem',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-seeta-aur-geeta-1972',
    directorId: 'rd-burman',
    title: 'Seeta Aur Geeta',
    year: 1972,
    cast: 'Hema Malini, Dharmendra, Sanjeev Kumar',
    songs: [
      song(
        'rdb-sag72-1',
        'rdb-seeta-aur-geeta-1972',
        'O Saathi Chal',
        'Kishore Kumar, Asha Bhosle',
        'Seeta Aur Geeta',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-sag72-2',
        'rdb-seeta-aur-geeta-1972',
        'Haan Ji Haan Maine Sharab Pi Hai',
        'Lata Mangeshkar',
        'Seeta Aur Geeta',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-mere-jeevan-saathi-1972',
    directorId: 'rd-burman',
    title: 'Mere Jeevan Saathi',
    year: 1972,
    cast: 'Rajesh Khanna, Tanuja',
    songs: [
      song(
        'rdb-mjs72-1',
        'rdb-mere-jeevan-saathi-1972',
        'O Mere Dil Ke Chain',
        'Kishore Kumar',
        'Mere Jeevan Saathi',
        1972,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-mjs72-2',
        'rdb-mere-jeevan-saathi-1972',
        'Chala Jata Hoon',
        'Kishore Kumar',
        'Mere Jeevan Saathi',
        1972,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-apna-desh-1972',
    directorId: 'rd-burman',
    title: 'Apna Desh',
    year: 1972,
    cast: 'Rajesh Khanna, Mumtaz',
    songs: [
      song(
        'rdb-ad72-1',
        'rdb-apna-desh-1972',
        'Duniya Mein Logon Ko',
        'Asha Bhosle, R.D. Burman',
        'Apna Desh',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-ad72-2',
        'rdb-apna-desh-1972',
        'Kajra Laga Ke Gajra Saja Ke',
        'Kishore Kumar, Lata Mangeshkar',
        'Apna Desh',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-parichay-1972',
    directorId: 'rd-burman',
    title: 'Parichay',
    year: 1972,
    cast: 'Jeetendra, Jaya Bhaduri',
    significance: 'Inaugural Gulzar–R.D. Burman collaboration',
    songs: [
      song(
        'rdb-par72-1',
        'rdb-parichay-1972',
        'Musafir Hoon Yaaron',
        'Kishore Kumar',
        'Parichay',
        1972,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-par72-2',
        'rdb-parichay-1972',
        'Beeti Na Bitai Raina',
        'Lata Mangeshkar, Bhupinder Singh',
        'Parichay',
        1972,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-jawani-diwani-1972',
    directorId: 'rd-burman',
    title: 'Jawani Diwani',
    year: 1972,
    cast: 'Randhir Kapoor, Jaya Bhaduri',
    songs: [
      song(
        'rdb-jd72-1',
        'rdb-jawani-diwani-1972',
        'Jaane Jaan Dhoondta Phir Raha',
        'Kishore Kumar, Asha Bhosle',
        'Jawani Diwani',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-jd72-2',
        'rdb-jawani-diwani-1972',
        'Yeh Jawani Hai Diwani',
        'Kishore Kumar',
        'Jawani Diwani',
        1972,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-rampur-ka-lakshman-1972',
    directorId: 'rd-burman',
    title: 'Rampur Ka Lakshman',
    year: 1972,
    cast: 'Randhir Kapoor, Rekha',
    songs: [
      song(
        'rdb-rkl72-1',
        'rdb-rampur-ka-lakshman-1972',
        'Gum Hai Kisi Ke Pyar Mein',
        'Kishore Kumar, Lata Mangeshkar',
        'Rampur Ka Lakshman',
        1972,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-bombay-to-goa-1972',
    directorId: 'rd-burman',
    title: 'Bombay to Goa',
    year: 1972,
    cast: 'Amitabh Bachchan, Aruna Irani, Mehmood',
    songs: [
      song(
        'rdb-btg72-1',
        'rdb-bombay-to-goa-1972',
        'Dekha Na Haye Re',
        'Kishore Kumar',
        'Bombay to Goa',
        1972,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'rdb-samadhi-1972',
    directorId: 'rd-burman',
    title: 'Samadhi',
    year: 1972,
    cast: 'Dharmendra, Asha Parekh, Jaya Bhaduri',
    songs: [
      song(
        'rdb-sam72-1',
        'rdb-samadhi-1972',
        'Bangle Ke Peechhe',
        'Lata Mangeshkar',
        'Samadhi',
        1972,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-do-chor-1972',
    directorId: 'rd-burman',
    title: 'Do Chor',
    year: 1972,
    cast: 'Dharmendra, Tanuja',
    songs: [
      song(
        'rdb-dc72-1',
        'rdb-do-chor-1972',
        'Chahe Raho Door Chahe Raho Paas',
        'Kishore Kumar, Lata Mangeshkar',
        'Do Chor',
        1972
      ),
    ],
  },
  {
    id: 'rdb-gomti-ke-kinare-1972',
    directorId: 'rd-burman',
    title: 'Gomti Ke Kinare',
    year: 1972,
    cast: 'Meena Kumari, Mumtaz, Sameer Khan',
    songs: [
      song(
        'rdb-gkk72-1',
        'rdb-gomti-ke-kinare-1972',
        'Jeene Ka Din Mar Jaye',
        'Kishore Kumar, Lata Mangeshkar',
        'Gomti Ke Kinare',
        1972
      ),
    ],
  },
  {
    id: 'rdb-double-cross-1972',
    directorId: 'rd-burman',
    title: 'Double Cross',
    year: 1972,
    cast: 'Vijay Anand, Rekha',
    songs: [
      song(
        'rdb-dx72-1',
        'rdb-double-cross-1972',
        'Maine Tumko Chaha Pehli Baar',
        'Kishore Kumar, Asha Bhosle',
        'Double Cross',
        1972
      ),
    ],
  },
  {
    id: 'rdb-rakhi-aur-hathkadi-1972',
    directorId: 'rd-burman',
    title: 'Rakhi Aur Hathkadi',
    year: 1972,
    cast: 'Ashok Kumar, Asha Parekh',
    songs: [
      song(
        'rdb-rah72-1',
        'rdb-rakhi-aur-hathkadi-1972',
        'Aaja Tujhko Pukare Mera Pyar',
        'Mohammed Rafi',
        'Rakhi Aur Hathkadi',
        1972
      ),
    ],
  },
  {
    id: 'rdb-annadata-1972',
    directorId: 'rd-burman',
    title: 'Annadata',
    year: 1972,
    cast: 'Anil Dhawan, Jaya Bhaduri',
    songs: [
      song(
        'rdb-ann72-1',
        'rdb-annadata-1972',
        'Guzar Jaye Din Din Din',
        'Kishore Kumar',
        'Annadata',
        1972
      ),
    ],
  },
  {
    id: 'rdb-garam-masala-1972',
    directorId: 'rd-burman',
    title: 'Garam Masala',
    year: 1972,
    cast: 'Aruna Irani, Mehmood',
    songs: [
      song(
        'rdb-gm72-1',
        'rdb-garam-masala-1972',
        'Raja Bana Mera Chhaila',
        'Asha Bhosle',
        'Garam Masala',
        1972
      ),
    ],
  },
  {
    id: 'rdb-yaadon-ki-baaraat-1973',
    directorId: 'rd-burman',
    title: 'Yaadon Ki Baaraat',
    year: 1973,
    cast: 'Dharmendra, Zeenat Aman, Vijay Arora, Tariq',
    label: 'HMV / Saregama',
    significance: 'Blockbuster Nasir Hussain musical anchored by Chura Liya Hai Tumne and Lekar Hum Deewana Dil',
    songs: [
      song(
        'rdb-ykb73-1',
        'rdb-yaadon-ki-baaraat-1973',
        'Chura Liya Hai Tumne Jo Dil Ko',
        'Asha Bhosle, Mohammed Rafi',
        'Yaadon Ki Baaraat',
        1973,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: "If It's Tuesday, This Must Be Belgium",
          originalArtist: 'Bojoura / Walter Scharf',
          originalYear: '1969',
          adaptationNotes:
            'Iconic acoustic guitar intro and opening melody adapted closely from the 1969 film theme.',
          originalLink: 'https://www.youtube.com/watch?v=7f6tEJDNjko',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-ykb73-2',
        'rdb-yaadon-ki-baaraat-1973',
        'Lekar Hum Deewana Dil',
        'Kishore Kumar, Asha Bhosle',
        'Yaadon Ki Baaraat',
        1973,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-ykb73-3',
        'rdb-yaadon-ki-baaraat-1973',
        'Yaadon Ki Baaraat Nikli Hai Aaj',
        'Kishore Kumar, Mohammed Rafi',
        'Yaadon Ki Baaraat',
        1973,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-aa-gale-lag-jaa-1973',
    directorId: 'rd-burman',
    title: 'Aa Gale Lag Jaa',
    year: 1973,
    cast: 'Shashi Kapoor, Sharmila Tagore, Shatrughan Sinha',
    songs: [
      song(
        'rdb-aglj73-1',
        'rdb-aa-gale-lag-jaa-1973',
        'Tera Mujhse Hai Pehle Ka Naata Koi',
        'Kishore Kumar, Sushma Shrestha',
        'Aa Gale Lag Jaa',
        1973,
        {
          lyricist: 'Sahir Ludhianvi',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'The Yellow Rose of Texas',
          originalArtist: 'Traditional / Elvis Presley',
          originalYear: '1964',
          adaptationNotes:
            'Melodic contour and cadence follow the traditional American march-ballad.',
          originalLink: 'https://www.youtube.com/watch?v=KKyGAV1L7f0',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-aglj73-2',
        'rdb-aa-gale-lag-jaa-1973',
        'Wada Karo Nahin Chhodoge Tum Mera Saath',
        'Kishore Kumar, Lata Mangeshkar',
        'Aa Gale Lag Jaa',
        1973,
        { lyricist: 'Sahir Ludhianvi' }
      ),
    ],
  },
  {
    id: 'rdb-anamika-1973',
    directorId: 'rd-burman',
    title: 'Anamika',
    year: 1973,
    cast: 'Sanjeev Kumar, Jaya Bhaduri',
    songs: [
      song(
        'rdb-ana73-1',
        'rdb-anamika-1973',
        'Meri Bheegi Bheegi Si',
        'Kishore Kumar',
        'Anamika',
        1973,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-ana73-2',
        'rdb-anamika-1973',
        'Bahon Mein Chale Aao',
        'Lata Mangeshkar',
        'Anamika',
        1973,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-namak-haraam-1973',
    directorId: 'rd-burman',
    title: 'Namak Haraam',
    year: 1973,
    cast: 'Rajesh Khanna, Amitabh Bachchan, Rekha',
    songs: [
      song(
        'rdb-nh73-1',
        'rdb-namak-haraam-1973',
        'Diye Jalte Hain Phool Khilte Hain',
        'Kishore Kumar',
        'Namak Haraam',
        1973,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-nh73-2',
        'rdb-namak-haraam-1973',
        'Nadiya Se Dariya',
        'Kishore Kumar',
        'Namak Haraam',
        1973,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-heera-panna-1973',
    directorId: 'rd-burman',
    title: 'Heera Panna',
    year: 1973,
    cast: 'Dev Anand, Zeenat Aman, Raakhee',
    songs: [
      song(
        'rdb-hp73-1',
        'rdb-heera-panna-1973',
        'Panna Ki Tamanna Hai',
        'Kishore Kumar, Lata Mangeshkar',
        'Heera Panna',
        1973,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-shareef-badmaash-1973',
    directorId: 'rd-burman',
    title: 'Shareef Badmaash',
    year: 1973,
    cast: 'Dev Anand, Hema Malini',
    songs: [
      song(
        'rdb-sb73-1',
        'rdb-shareef-badmaash-1973',
        'Neend Churake Raaton Mein',
        'Kishore Kumar, Asha Bhosle',
        'Shareef Badmaash',
        1973,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-joshila-1973',
    directorId: 'rd-burman',
    title: 'Joshila',
    year: 1973,
    cast: 'Dev Anand, Hema Malini, Raakhee',
    songs: [
      song(
        'rdb-josh73-1',
        'rdb-joshila-1973',
        'Kiska Rasta Dekhe',
        'Kishore Kumar',
        'Joshila',
        1973,
        { lyricist: 'Sahir Ludhianvi' }
      ),
    ],
  },
  {
    id: 'rdb-bandhe-haath-1973',
    directorId: 'rd-burman',
    title: 'Bandhe Haath',
    year: 1973,
    cast: 'Amitabh Bachchan, Mumtaz',
    songs: [
      song(
        'rdb-bh73-1',
        'rdb-bandhe-haath-1973',
        'Yeh Kaun Aaj Aaya Savere Savere',
        'Lata Mangeshkar',
        'Bandhe Haath',
        1973
      ),
    ],
  },
  {
    id: 'rdb-jheel-ke-us-paar-1973',
    directorId: 'rd-burman',
    title: 'Jheel Ke Us Paar',
    year: 1973,
    cast: 'Dharmendra, Mumtaz',
    songs: [
      song(
        'rdb-jkup73-1',
        'rdb-jheel-ke-us-paar-1973',
        'Kya Nazare',
        'Kishore Kumar',
        'Jheel Ke Us Paar',
        1973
      ),
    ],
  },
  {
    id: 'rdb-jaise-ko-taisa-1973',
    directorId: 'rd-burman',
    title: 'Jaise Ko Taisa',
    year: 1973,
    cast: 'Jeetendra, Reena Roy',
    songs: [
      song(
        'rdb-jkt73-1',
        'rdb-jaise-ko-taisa-1973',
        'Ab Ke Sawan Mein Jee Dare',
        'Kishore Kumar, Lata Mangeshkar',
        'Jaise Ko Taisa',
        1973
      ),
    ],
  },
  {
    id: 'rdb-do-phool-1973',
    directorId: 'rd-burman',
    title: 'Do Phool',
    year: 1973,
    cast: 'Vinod Mehra, Aruna Irani, Mehmood',
    songs: [
      song(
        'rdb-dp73-1',
        'rdb-do-phool-1973',
        'Muthu Kodi Kawadi Hada',
        'Asha Bhosle, Mehmood',
        'Do Phool',
        1973
      ),
    ],
  },
  {
    id: 'rdb-bada-kabutar-1973',
    directorId: 'rd-burman',
    title: 'Bada Kabutar',
    year: 1973,
    cast: 'Rehana Sultan, Nikhil Bhagat',
    songs: [
      song(
        'rdb-bk73-1',
        'rdb-bada-kabutar-1973',
        'Chanda Mama Se Pyara Mera Mama',
        'Asha Bhosle',
        'Bada Kabutar',
        1973
      ),
    ],
  },
  {
    id: 'rdb-chhalia-1973',
    directorId: 'rd-burman',
    title: 'Chhalia',
    year: 1973,
    cast: 'Navin Nischol, Nanda',
    songs: [
      song(
        'rdb-chh73-1',
        'rdb-chhalia-1973',
        'O Yaar Chhalia',
        'Kishore Kumar',
        'Chhalia',
        1973
      ),
    ],
  },
  {
    id: 'rdb-raja-rani-1973',
    directorId: 'rd-burman',
    title: 'Raja Rani',
    year: 1973,
    cast: 'Rajesh Khanna, Sharmila Tagore',
    songs: [
      song(
        'rdb-rr73-1',
        'rdb-raja-rani-1973',
        'Main Ek Chor Tu Meri Rani',
        'Kishore Kumar, Lata Mangeshkar',
        'Raja Rani',
        1973
      ),
    ],
  },
  {
    id: 'rdb-rickshawala-1973',
    directorId: 'rd-burman',
    title: 'Rickshawala',
    year: 1973,
    cast: 'Randhir Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-rick73-1',
        'rdb-rickshawala-1973',
        'Maine Kaha Phoolon Se',
        'Lata Mangeshkar',
        'Rickshawala',
        1973
      ),
    ],
  },
  {
    id: 'rdb-banarasi-babu-1973',
    directorId: 'rd-burman',
    title: 'Banarasi Babu',
    year: 1973,
    cast: 'Dev Anand, Raakhee',
    songs: [
      song(
        'rdb-bb73-1',
        'rdb-banarasi-babu-1973',
        'Koi Koi Aadmi Deewana Hota Hai',
        'Kishore Kumar',
        'Banarasi Babu',
        1973
      ),
    ],
  },
  {
    id: 'rdb-jalte-badan-1973',
    directorId: 'rd-burman',
    title: 'Jalte Badan',
    year: 1973,
    songs: [
      song(
        'rdb-jb73-1',
        'rdb-jalte-badan-1973',
        'Jalte Badan (Soundtrack)',
        'Asha Bhosle',
        'Jalte Badan',
        1973
      ),
    ],
  },
  {
    id: 'rdb-aap-ki-kasam-1974',
    directorId: 'rd-burman',
    title: 'Aap Ki Kasam',
    year: 1974,
    cast: 'Rajesh Khanna, Mumtaz, Sanjeev Kumar',
    label: 'HMV / Saregama',
    songs: [
      song(
        'rdb-akk74-1',
        'rdb-aap-ki-kasam-1974',
        'Jai Jai Shiv Shankar',
        'Kishore Kumar, Lata Mangeshkar',
        'Aap Ki Kasam',
        1974,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-akk74-2',
        'rdb-aap-ki-kasam-1974',
        'Karvaten Badalte Rahe',
        'Kishore Kumar, Lata Mangeshkar',
        'Aap Ki Kasam',
        1974,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-akk74-3',
        'rdb-aap-ki-kasam-1974',
        'Zindagi Ke Safar Mein',
        'Kishore Kumar',
        'Aap Ki Kasam',
        1974,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-ajanabee-1974',
    directorId: 'rd-burman',
    title: 'Ajanabee',
    year: 1974,
    cast: 'Rajesh Khanna, Zeenat Aman',
    songs: [
      song(
        'rdb-aj74-1',
        'rdb-ajanabee-1974',
        'Bheegi Bheegi Raaton Mein',
        'Kishore Kumar, Lata Mangeshkar',
        'Ajanabee',
        1974,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-aj74-2',
        'rdb-ajanabee-1974',
        'Hum Dono Do Premi',
        'Kishore Kumar, Lata Mangeshkar',
        'Ajanabee',
        1974,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-phir-kab-milogi-1974',
    directorId: 'rd-burman',
    title: 'Phir Kab Milogi',
    year: 1974,
    cast: 'Biswajit, Mala Sinha',
    songs: [
      song(
        'rdb-pkm74-1',
        'rdb-phir-kab-milogi-1974',
        'Kahin Karti Hogi Woh Mera Intezaar',
        'Mukesh, Lata Mangeshkar',
        'Phir Kab Milogi',
        1974,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'The Lonely Bull',
          originalArtist: 'Herb Alpert & the Tijuana Brass',
          originalYear: '1962',
          adaptationNotes:
            'Trumpet motif and melodic refrain follow Herb Alpert’s 1962 brass instrumental.',
          originalLink: 'https://www.youtube.com/watch?v=6uqPBZncL5Q',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-humshakal-1974',
    directorId: 'rd-burman',
    title: 'Humshakal',
    year: 1974,
    cast: 'Rajesh Khanna, Tanuja, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-hs74-1',
        'rdb-humshakal-1974',
        'Rasta Dekhe Tera',
        'Kishore Kumar',
        'Humshakal',
        1974,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'In My Life',
          originalArtist: 'The Beatles',
          originalYear: '1965',
          adaptationNotes:
            'ITWOFS notes a brief melodic similarity in the opening phrase to The Beatles’ ballad.',
          originalLink: 'https://www.youtube.com/watch?v=ngzQTxXEcxQ',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'rdb-benaam-1974',
    directorId: 'rd-burman',
    title: 'Benaam',
    year: 1974,
    cast: 'Amitabh Bachchan, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-ben74-1',
        'rdb-benaam-1974',
        'Yaara O Yaara',
        'Narendra Chanchal',
        'Benaam',
        1974
      ),
    ],
  },
  {
    id: 'rdb-manoranjan-1974',
    directorId: 'rd-burman',
    title: 'Manoranjan',
    year: 1974,
    cast: 'Shammi Kapoor, Zeenat Aman, Sanjeev Kumar',
    songs: [
      song(
        'rdb-man74-1',
        'rdb-manoranjan-1974',
        'Chori Chori Solah Shringar Karoongi',
        'Asha Bhosle',
        'Manoranjan',
        1974
      ),
    ],
  },
  {
    id: 'rdb-khote-sikkay-1974',
    directorId: 'rd-burman',
    title: 'Khote Sikkay',
    year: 1974,
    cast: 'Feroz Khan, Rehana Sultan',
    songs: [
      song(
        'rdb-ks74-1',
        'rdb-khote-sikkay-1974',
        'Jeevan Mein Tu Darna Nahin',
        'Kishore Kumar',
        'Khote Sikkay',
        1974
      ),
    ],
  },
  {
    id: 'rdb-zehreela-insaan-1974',
    directorId: 'rd-burman',
    title: 'Zehreela Insaan',
    year: 1974,
    cast: 'Rishi Kapoor, Moushumi Chatterjee, Neetu Singh',
    songs: [
      song(
        'rdb-zi74-1',
        'rdb-zehreela-insaan-1974',
        'Oh Hansini',
        'Kishore Kumar',
        'Zehreela Insaan',
        1974,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Theme from Summer of ’42 (The Summer Knows)',
          originalArtist: 'Michel Legrand',
          originalYear: '1971',
          adaptationNotes:
            'Haunting opening string and woodwind motif echoes Michel Legrand’s orchestral theme before blossoming into an original romantic ballad.',
          originalLink: 'https://www.youtube.com/watch?v=z8hfDXyT6Fw',
          referenceSource: 'ITWOFS / Pancham Magic',
        }
      ),
    ],
  },
  {
    id: 'rdb-ishq-ishq-ishq-1974',
    directorId: 'rd-burman',
    title: 'Ishq Ishq Ishq',
    year: 1974,
    cast: 'Dev Anand, Zeenat Aman, Shabana Azmi',
    songs: [
      song(
        'rdb-iii74-1',
        'rdb-ishq-ishq-ishq-1974',
        'Kisi Pe Dil Agar Aa Jaye To',
        'Kishore Kumar, Asha Bhosle',
        'Ishq Ishq Ishq',
        1974
      ),
    ],
  },
  {
    id: 'rdb-mr-romeo-1974',
    directorId: 'rd-burman',
    title: 'Mr. Romeo',
    year: 1974,
    cast: 'Shashi Kapoor, Rinku Jaiswal',
    songs: [
      song(
        'rdb-mrr74-1',
        'rdb-mr-romeo-1974',
        'Naach Meri Jaan Fatafat',
        'Asha Bhosle, Kishore Kumar',
        'Mr. Romeo',
        1974
      ),
    ],
  },
  {
    id: 'rdb-imaan-1974',
    directorId: 'rd-burman',
    title: 'Imaan',
    year: 1974,
    cast: 'Sanjeev Kumar, Leena Chandavarkar',
    songs: [
      song(
        'rdb-imn74-1',
        'rdb-imaan-1974',
        'Imaan (Soundtrack)',
        'Asha Bhosle, Kishore Kumar',
        'Imaan',
        1974
      ),
    ],
  },
  {
    id: 'rdb-goonj-1974',
    directorId: 'rd-burman',
    title: 'Goonj',
    year: 1974,
    cast: 'Rakesh Roshan, Reena Roy',
    songs: [
      song(
        'rdb-gnj74-1',
        'rdb-goonj-1974',
        'Rehmatullah Mashallah',
        'Asha Bhosle, Kishore Kumar',
        'Goonj',
        1974
      ),
    ],
  },
  {
    id: 'rdb-charitraheen-1974',
    directorId: 'rd-burman',
    title: 'Charitraheen',
    year: 1974,
    cast: 'Sanjeev Kumar, Sharmila Tagore',
    songs: [
      song(
        'rdb-cha74-1',
        'rdb-charitraheen-1974',
        'Chhota Sa Ghar Hoga Badalon Ki Chhaon Mein',
        'Kishore Kumar, Lata Mangeshkar',
        'Charitraheen',
        1974
      ),
    ],
  },
  {
    id: 'rdb-doosri-sita-1974',
    directorId: 'rd-burman',
    title: 'Doosri Sita',
    year: 1974,
    cast: 'Jaya Bhaduri, Romesh Sharma',
    songs: [
      song(
        'rdb-ds74-1',
        'rdb-doosri-sita-1974',
        'Tu Jahan Milegi Mujhe',
        'Nitin Mukesh',
        'Doosri Sita',
        1974,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-dil-diwana-1974',
    directorId: 'rd-burman',
    title: 'Dil Diwana',
    year: 1974,
    cast: 'Randhir Kapoor, Jaya Bhaduri',
    songs: [
      song(
        'rdb-dd74-1',
        'rdb-dil-diwana-1974',
        'Ja Re Ja Bewafa',
        'Kishore Kumar, Asha Bhosle',
        'Dil Diwana',
        1974
      ),
    ],
  },
  {
    id: 'rdb-shaitaan-1974',
    directorId: 'rd-burman',
    title: 'Shaitaan',
    year: 1974,
    cast: 'Shatrughan Sinha, Sharmila Tagore',
    songs: [
      song(
        'rdb-sht74-1',
        'rdb-shaitaan-1974',
        'Dil To Maane Na',
        'Asha Bhosle',
        'Shaitaan',
        1974
      ),
    ],
  },
  {
    id: 'rdb-madhosh-1974',
    directorId: 'rd-burman',
    title: 'Madhosh',
    year: 1974,
    cast: 'Mahendra Sandhu, Reena Roy',
    songs: [
      song(
        'rdb-mad74-1',
        'rdb-madhosh-1974',
        'Mera Chhota Sa Dil Tune Chheena',
        'Kishore Kumar, Asha Bhosle',
        'Madhosh',
        1974
      ),
    ],
  },
  {
    id: 'rdb-sholay-1975',
    directorId: 'rd-burman',
    title: 'Sholay',
    year: 1975,
    cast: 'Dharmendra, Amitabh Bachchan, Sanjeev Kumar, Hema Malini',
    label: 'Polydor / Universal',
    significance: 'Monumental Bollywood soundtrack pairing iconic background motifs with Mehbooba Mehbooba',
    songs: [
      song(
        'rdb-sho75-1',
        'rdb-sholay-1975',
        'Mehbooba Mehbooba',
        'R.D. Burman',
        'Sholay',
        1975,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Say You Love Me (Ta Rialia)',
          originalArtist: 'Demis Roussos',
          originalYear: '1974',
          adaptationNotes:
            'Adapted from Demis Roussos’ 1974 Middle Eastern-inflected Greek/Cypriot tune at director Ramesh Sippy’s request.',
          originalLink: 'https://www.youtube.com/watch?v=6M6IZ_BBjL8',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-sho75-2',
        'rdb-sholay-1975',
        'Yeh Dosti Hum Nahin Todenge',
        'Kishore Kumar, Manna Dey',
        'Sholay',
        1975,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-sho75-3',
        'rdb-sholay-1975',
        'Haan Jab Tak Hai Jaan',
        'Lata Mangeshkar',
        'Sholay',
        1975,
          {
            lyricist: 'Anand Bakshi',
            adaptationType: 'inspired',
            originCategory: 'Arabic & Middle Eastern',
            originalSongTitle: 'Jomeh',
            originalArtist: 'Googoosh',
            originalYear: '1971',
            adaptationNotes:
              'Dramatic opening prelude adapts rhythmic phrasing from Iranian pop icon Googoosh’s 1971 classic before pivoting into R.D. Burman’s original antara progression.',
            originalLink: 'https://www.youtube.com/watch?v=oEB6_E7FTxk',
            referenceSource: 'Film Music Provenance Archives',
          }
      ),
    ],
  },
  {
    id: 'rdb-aandhi-1975',
    directorId: 'rd-burman',
    title: 'Aandhi',
    year: 1975,
    cast: 'Sanjeev Kumar, Suchitra Sen',
    significance: 'Peerless Gulzar–R.D. Burman lyrical milestone',
    songs: [
      song(
        'rdb-aan75-1',
        'rdb-aandhi-1975',
        'Tere Bina Zindagi Se Koi Shikwa',
        'Kishore Kumar, Lata Mangeshkar',
        'Aandhi',
        1975,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-aan75-2',
        'rdb-aandhi-1975',
        'Is Mod Se Jaate Hain',
        'Kishore Kumar, Lata Mangeshkar',
        'Aandhi',
        1975,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-aan75-3',
        'rdb-aandhi-1975',
        'Tum Aa Gaye Ho Noor Aa Gaya',
        'Kishore Kumar, Lata Mangeshkar',
        'Aandhi',
        1975,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-deewaar-1975',
    directorId: 'rd-burman',
    title: 'Deewaar',
    year: 1975,
    cast: 'Amitabh Bachchan, Shashi Kapoor, Parveen Babi',
    songs: [
      song(
        'rdb-dee75-1',
        'rdb-deewaar-1975',
        'Kehdoon Tumhein',
        'Kishore Kumar, Asha Bhosle',
        'Deewaar',
        1975,
        { lyricist: 'Sahir Ludhianvi' }
      ),
      song(
        'rdb-dee75-2',
        'rdb-deewaar-1975',
        'Maine Tujhe Maanga Tujhe Paaya Hai',
        'Kishore Kumar, Asha Bhosle',
        'Deewaar',
        1975,
        { lyricist: 'Sahir Ludhianvi' }
      ),
    ],
  },
  {
    id: 'rdb-khel-khel-mein-1975',
    directorId: 'rd-burman',
    title: 'Khel Khel Mein',
    year: 1975,
    cast: 'Rishi Kapoor, Neetu Singh, Rakesh Roshan',
    songs: [
      song(
        'rdb-kkm75-1',
        'rdb-khel-khel-mein-1975',
        'Ek Main Aur Ek Tu',
        'Kishore Kumar, Asha Bhosle',
        'Khel Khel Mein',
        1975,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-kkm75-2',
        'rdb-khel-khel-mein-1975',
        'Khullam Khulla Pyar Karenge',
        'Kishore Kumar, Asha Bhosle',
        'Khel Khel Mein',
        1975,
        { lyricist: 'Gulshan Bawra' }
      ),
    ],
  },
  {
    id: 'rdb-khushboo-1975',
    directorId: 'rd-burman',
    title: 'Khushboo',
    year: 1975,
    cast: 'Jeetendra, Hema Malini',
    songs: [
      song(
        'rdb-khu75-1',
        'rdb-khushboo-1975',
        'O Majhi Re',
        'Kishore Kumar',
        'Khushboo',
        1975,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-khu75-2',
        'rdb-khushboo-1975',
        'Do Naino Mein Aansoo Bhare Hai',
        'Lata Mangeshkar',
        'Khushboo',
        1975,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-dharam-karam-1975',
    directorId: 'rd-burman',
    title: 'Dharam Karam',
    year: 1975,
    cast: 'Raj Kapoor, Randhir Kapoor, Rekha',
    songs: [
      song(
        'rdb-dk75-1',
        'rdb-dharam-karam-1975',
        'Ek Din Bik Jayega Mati Ke Mol',
        'Mukesh',
        'Dharam Karam',
        1975,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-kaala-sona-1975',
    directorId: 'rd-burman',
    title: 'Kaala Sona',
    year: 1975,
    cast: 'Feroz Khan, Parveen Babi',
    songs: [
      song(
        'rdb-ks75-1',
        'rdb-kaala-sona-1975',
        'Sun Sun Qasam Se',
        'Danny Denzongpa, Asha Bhosle',
        'Kaala Sona',
        1975
      ),
    ],
  },
  {
    id: 'rdb-warrant-1975',
    directorId: 'rd-burman',
    title: 'Warrant',
    year: 1975,
    cast: 'Dev Anand, Zeenat Aman',
    songs: [
      song(
        'rdb-war75-1',
        'rdb-warrant-1975',
        'Ruk Jana O Janan',
        'Kishore Kumar',
        'Warrant',
        1975,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-raaja-1975',
    directorId: 'rd-burman',
    title: 'Raaja',
    year: 1975,
    cast: 'Rishi Kapoor, Sulakshana Pandit',
    songs: [
      song(
        'rdb-raa75-1',
        'rdb-raaja-1975',
        'Jeevan Mein Humsafar Milte Hai',
        'Kishore Kumar',
        'Raaja',
        1975
      ),
    ],
  },
  {
    id: 'rdb-mazaaq-1975',
    directorId: 'rd-burman',
    title: 'Mazaaq',
    year: 1975,
    cast: 'Vinod Mehra, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-maz75-1',
        'rdb-mazaaq-1975',
        'Takra Gaye Do Badal',
        'Mohammed Rafi, Asha Bhosle',
        'Mazaaq',
        1975
      ),
    ],
  },
  {
    id: 'rdb-kahte-hain-mujhko-raja-1975',
    directorId: 'rd-burman',
    title: 'Kahte Hain Mujhko Raja',
    year: 1975,
    cast: 'Biswajit, Dharmendra, Hema Malini',
    songs: [
      song(
        'rdb-khmr75-1',
        'rdb-kahte-hain-mujhko-raja-1975',
        'Aiyo Re Gaya Kaam Se',
        'Kishore Kumar, Asha Bhosle',
        'Kahte Hain Mujhko Raja',
        1975
      ),
    ],
  },
  {
    id: 'rdb-mili-1975',
    directorId: 'rd-burman',
    title: 'Mili',
    year: 1975,
    cast: 'Amitabh Bachchan, Jaya Bhaduri, Ashok Kumar',
    significance: 'Completed by R.D. Burman after father S.D. Burman fell ill',
    songs: [
      song(
        'rdb-mil75-1',
        'rdb-mili-1975',
        'Badi Sooni Sooni Hai Zindagi Yeh Zindagi',
        'Kishore Kumar',
        'Mili',
        1975,
        { lyricist: 'Yogesh' }
      ),
      song(
        'rdb-mil75-2',
        'rdb-mili-1975',
        'Maine Kaha Phoolon Se',
        'Lata Mangeshkar',
        'Mili',
        1975,
        { lyricist: 'Yogesh' }
      ),
    ],
  },
  {
    id: 'rdb-mehbooba-1976',
    directorId: 'rd-burman',
    title: 'Mehbooba',
    year: 1976,
    cast: 'Rajesh Khanna, Hema Malini',
    songs: [
      song(
        'rdb-meh76-1',
        'rdb-mehbooba-1976',
        'Mere Naina Sawan Bhadon',
        'Kishore Kumar, Lata Mangeshkar',
        'Mehbooba',
        1976,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-meh76-2',
        'rdb-mehbooba-1976',
        'Parbat Ke Peechhe',
        'Kishore Kumar, Lata Mangeshkar',
        'Mehbooba',
        1976,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-balika-badhu-1976',
    directorId: 'rd-burman',
    title: 'Balika Badhu',
    year: 1976,
    cast: 'Sachin, Rajni Sharma',
    songs: [
      song(
        'rdb-bb76-1',
        'rdb-balika-badhu-1976',
        'Bade Achhe Lagte Hain',
        'Amit Kumar',
        'Balika Badhu',
        1976,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-nehle-peh-dehlaa-1976',
    directorId: 'rd-burman',
    title: 'Nehle Peh Dehlaa',
    year: 1976,
    cast: 'Sunil Dutt, Vinod Khanna, Saira Banu',
    songs: [
      song(
        'rdb-npd76-1',
        'rdb-nehle-peh-dehlaa-1976',
        'Sawan Ka Mahina Aa Gaya',
        'Kishore Kumar, Lata Mangeshkar',
        'Nehle Peh Dehlaa',
        1976
      ),
    ],
  },
  {
    id: 'rdb-maha-chor-1976',
    directorId: 'rd-burman',
    title: 'Maha Chor',
    year: 1976,
    cast: 'Rajesh Khanna, Neetu Singh',
    songs: [
      song(
        'rdb-mc76-1',
        'rdb-maha-chor-1976',
        'Tu Kya Jaane O Bewafa',
        'Lata Mangeshkar',
        'Maha Chor',
        1976
      ),
    ],
  },
  {
    id: 'rdb-bundalbaaz-1976',
    directorId: 'rd-burman',
    title: 'Bundalbaaz',
    year: 1976,
    cast: 'Rajesh Khanna, Sulakshana Pandit',
    songs: [
      song(
        'rdb-bun76-1',
        'rdb-bundalbaaz-1976',
        'Kya Mausam Hai',
        'Lata Mangeshkar, Kishore Kumar',
        'Bundalbaaz',
        1976
      ),
    ],
  },
  {
    id: 'rdb-khalifa-1976',
    directorId: 'rd-burman',
    title: 'Khalifa',
    year: 1976,
    cast: 'Randhir Kapoor, Rekha',
    songs: [
      song(
        'rdb-kha76-1',
        'rdb-khalifa-1976',
        'Dekh Tujhko Dil Ne Kaha',
        'Kishore Kumar, Asha Bhosle',
        'Khalifa',
        1976
      ),
    ],
  },
  {
    id: 'rdb-hum-kisise-kum-naheen-1977',
    directorId: 'rd-burman',
    title: 'Hum Kisise Kum Naheen',
    year: 1977,
    cast: 'Rishi Kapoor, Tariq, Kaajal Kiran, Amjad Khan',
    label: 'HMV / Saregama',
    significance: 'National Award-winning musical landmark featuring Kya Hua Tera Vaada and Bachna Ae Haseeno',
    songs: [
      song(
        'rdb-hkkn77-1',
        'rdb-hum-kisise-kum-naheen-1977',
        'Mil Gaya Humko Saathi Mil Gaya',
        'Kishore Kumar, Asha Bhosle',
        'Hum Kisise Kum Naheen',
        1977,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Mamma Mia',
          originalArtist: 'ABBA',
          originalYear: '1975',
          adaptationNotes:
            'Upbeat keyboard/piano riff and chorus cadence closely modeled after ABBA’s 1975 Euro-pop hit.',
          originalLink: 'https://www.youtube.com/watch?v=unfzfe8f9NI',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-hkkn77-2',
        'rdb-hum-kisise-kum-naheen-1977',
        'Kya Hua Tera Vaada',
        'Mohammed Rafi, Sushma Shrestha',
        'Hum Kisise Kum Naheen',
        1977,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-hkkn77-3',
        'rdb-hum-kisise-kum-naheen-1977',
        'Bachna Ae Haseeno',
        'Kishore Kumar',
        'Hum Kisise Kum Naheen',
        1977,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-hkkn77-4',
        'rdb-hum-kisise-kum-naheen-1977',
        'Chand Mera Dil',
        'Mohammed Rafi',
        'Hum Kisise Kum Naheen',
        1977,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-kinara-1977',
    directorId: 'rd-burman',
    title: 'Kinara',
    year: 1977,
    cast: 'Jeetendra, Hema Malini, Dharmendra',
    songs: [
      song(
        'rdb-kin77-1',
        'rdb-kinara-1977',
        'Naam Gum Jayega',
        'Lata Mangeshkar, Bhupinder Singh',
        'Kinara',
        1977,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-kin77-2',
        'rdb-kinara-1977',
        'Ek Hi Khwab Kai Baar Dekha Hai',
        'Bhupinder Singh',
        'Kinara',
        1977,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-kitaab-1977',
    directorId: 'rd-burman',
    title: 'Kitaab',
    year: 1977,
    cast: 'Master Raju, Uttam Kumar, Vidya Sinha',
    songs: [
      song(
        'rdb-kit77-1',
        'rdb-kitaab-1977',
        'Dhanno Ki Aankhon Mein',
        'R.D. Burman',
        'Kitaab',
        1977,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-mukti-1977',
    directorId: 'rd-burman',
    title: 'Mukti',
    year: 1977,
    cast: 'Shashi Kapoor, Vidya Sinha, Sanjeev Kumar',
    songs: [
      song(
        'rdb-muk77-1',
        'rdb-mukti-1977',
        'Suhani Chandni Raaten',
        'Mukesh',
        'Mukti',
        1977,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-muk77-2',
        'rdb-mukti-1977',
        'Lalla Lalla Lori',
        'Mukesh, Lata Mangeshkar',
        'Mukti',
        1977,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-bullet-1977',
    directorId: 'rd-burman',
    title: 'Bullet',
    year: 1977,
    cast: 'Dev Anand, Parveen Babi, Kabir Bedi',
    songs: [
      song(
        'rdb-bul77-1',
        'rdb-bullet-1977',
        'Chori Chori Chupke Chupke',
        'Asha Bhosle, Kishore Kumar',
        'Bullet',
        1977
      ),
    ],
  },
  {
    id: 'rdb-darling-darling-1977',
    directorId: 'rd-burman',
    title: 'Darling Darling',
    year: 1977,
    cast: 'Dev Anand, Zeenat Aman',
    songs: [
      song(
        'rdb-dd77-1',
        'rdb-darling-darling-1977',
        'Aise Na Mujhe Tum Dekho',
        'Kishore Kumar',
        'Darling Darling',
        1977,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-karm-1977',
    directorId: 'rd-burman',
    title: 'Karm',
    year: 1977,
    cast: 'Rajesh Khanna, Vidya Sinha, Shabana Azmi',
    songs: [
      song(
        'rdb-krm77-1',
        'rdb-karm-1977',
        'Samay Tu Dheere Dheere Chal',
        'Kishore Kumar, Asha Bhosle',
        'Karm',
        1977
      ),
    ],
  },
  {
    id: 'rdb-chandi-sona-1977',
    directorId: 'rd-burman',
    title: 'Chandi Sona',
    year: 1977,
    cast: 'Sanjay Khan, Parveen Babi',
    songs: [
      song(
        'rdb-cs77-1',
        'rdb-chandi-sona-1977',
        'Teri Duniya Kaisi Tu Jaane',
        'Kishore Kumar',
        'Chandi Sona',
        1977
      ),
      song(
        'rdb-cs77-2',
        'rdb-chandi-sona-1977',
        'Aap Sa Koi Haseen',
        'Kishore Kumar, Asha Bhosle',
        'Chandi Sona',
        1977,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Gharibeh Ashena',
          originalArtist: 'Googoosh',
          originalYear: '1974',
          adaptationNotes:
            'Core melodic line and rhythmic pulse follow Iranian/Persian singer Googoosh’s popular 1970s ballad.',
          originalLink: 'https://www.youtube.com/watch?v=VPE_LOx_avI',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-chalta-purza-1977',
    directorId: 'rd-burman',
    title: 'Chalta Purza',
    year: 1977,
    cast: 'Rajesh Khanna, Parveen Babi',
    songs: [
      song(
        'rdb-cp77-1',
        'rdb-chalta-purza-1977',
        'Yeh Raat Ne Rang Jamaya Hai',
        'Kishore Kumar',
        'Chalta Purza',
        1977
      ),
    ],
  },
  {
    id: 'rdb-chala-murari-hero-banne-1977',
    directorId: 'rd-burman',
    title: 'Chala Murari Hero Banne',
    year: 1977,
    cast: 'Asrani, Bindiya Goswami',
    songs: [
      song(
        'rdb-cmhb77-1',
        'rdb-chala-murari-hero-banne-1977',
        'Do Pal Jo Teri Aankhon Se Peene Ko Mile',
        'Kishore Kumar, Lata Mangeshkar',
        'Chala Murari Hero Banne',
        1977
      ),
    ],
  },
  {
    id: 'rdb-ghar-1978',
    directorId: 'rd-burman',
    title: 'Ghar',
    year: 1978,
    cast: 'Vinod Mehra, Rekha',
    songs: [
      song(
        'rdb-ghar78-1',
        'rdb-ghar-1978',
        'Tere Bina Jiya Jaye Na',
        'Lata Mangeshkar',
        'Ghar',
        1978,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-ghar78-2',
        'rdb-ghar-1978',
        'Aap Ki Aankhon Mein Kuch',
        'Kishore Kumar, Lata Mangeshkar',
        'Ghar',
        1978,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-ghar78-3',
        'rdb-ghar-1978',
        'Phir Wahi Raat Hai Khwab Ki',
        'Kishore Kumar',
        'Ghar',
        1978,
        {
          lyricist: 'Gulzar',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Sing (Sing, Sing a Song)',
          originalArtist: 'The Carpenters',
          originalYear: '1973',
          adaptationNotes:
            'Opening vocal cadence and lyrical phrasing draw subtle inspiration from Joe Raposo’s melody popularized by The Carpenters.',
          originalLink: 'https://www.youtube.com/watch?v=BTofe9PGd8o',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-kasme-vaade-1978',
    directorId: 'rd-burman',
    title: 'Kasme Vaade',
    year: 1978,
    cast: 'Amitabh Bachchan, Raakhee, Randhir Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-kv78-1',
        'rdb-kasme-vaade-1978',
        'Aati Rahengi Baharen',
        'Kishore Kumar, Asha Bhosle, Amit Kumar',
        'Kasme Vaade',
        1978,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-kv78-2',
        'rdb-kasme-vaade-1978',
        'Kasme Vaade Nibhayenge Hum',
        'Kishore Kumar, Lata Mangeshkar',
        'Kasme Vaade',
        1978,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-kv78-3',
        'rdb-kasme-vaade-1978',
        'Kal Kya Hoga',
        'R.D. Burman',
        'Kasme Vaade',
        1978,
        {
          lyricist: 'Gulshan Bawra',
          adaptationType: 'copied',
          originCategory: 'African & World Folk',
          originalSongTitle: 'Hafanana',
          originalArtist: 'Afric Simone',
          originalYear: '1975',
          adaptationNotes:
            'Chanted percussive hook and buoyant Afro-pop groove closely follow Mozambican artist Afric Simone’s 1975 international hit.',
          originalLink: 'https://www.youtube.com/watch?v=fbrz9lifcPI',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-shalimar-1978',
    directorId: 'rd-burman',
    title: 'Shalimar',
    year: 1978,
    cast: 'Dharmendra, Zeenat Aman, Rex Harrison',
    songs: [
      song(
        'rdb-sha78-1',
        'rdb-shalimar-1978',
        'Hum Bewafa Hargiz Na The',
        'Kishore Kumar',
        'Shalimar',
        1978,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-sha78-2',
        'rdb-shalimar-1978',
        'Mera Pyar Shalimar',
        'Asha Bhosle',
        'Shalimar',
        1978,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-devata-1978',
    directorId: 'rd-burman',
    title: 'Devata',
    year: 1978,
    cast: 'Sanjeev Kumar, Shabana Azmi, Rakesh Roshan',
    songs: [
      song(
        'rdb-dev78-1',
        'rdb-devata-1978',
        'Chand Churake Laya Hoon',
        'Kishore Kumar, Lata Mangeshkar',
        'Devata',
        1978,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-azaad-1978',
    directorId: 'rd-burman',
    title: 'Azaad',
    year: 1978,
    cast: 'Dharmendra, Hema Malini',
    songs: [
      song(
        'rdb-aza78-1',
        'rdb-azaad-1978',
        'Raju Chal Raju',
        'Kishore Kumar',
        'Azaad',
        1978
      ),
    ],
  },
  {
    id: 'rdb-heeralaal-pannalaal-1978',
    directorId: 'rd-burman',
    title: 'Heeralaal Pannalaal',
    year: 1978,
    cast: 'Shashi Kapoor, Randhir Kapoor, Zeenat Aman',
    songs: [
      song(
        'rdb-hp78-1',
        'rdb-heeralaal-pannalaal-1978',
        'Sidhe Raste Chaloge To',
        'Mohammed Rafi, Kishore Kumar',
        'Heeralaal Pannalaal',
        1978
      ),
    ],
  },
  {
    id: 'rdb-bhola-bhala-1978',
    directorId: 'rd-burman',
    title: 'Bhola Bhala',
    year: 1978,
    cast: 'Rajesh Khanna, Rekha, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-bb78-1',
        'rdb-bhola-bhala-1978',
        'Dheere Dheere Nach Re',
        'Kishore Kumar',
        'Bhola Bhala',
        1978
      ),
    ],
  },
  {
    id: 'rdb-naukri-1978',
    directorId: 'rd-burman',
    title: 'Naukri',
    year: 1978,
    cast: 'Rajesh Khanna, Zaheera',
    songs: [
      song(
        'rdb-nau78-1',
        'rdb-naukri-1978',
        'Chhota Sa Ghar Hoga Apna',
        'Kishore Kumar',
        'Naukri',
        1978
      ),
    ],
  },
  {
    id: 'rdb-phandebaaz-1978',
    directorId: 'rd-burman',
    title: 'Phandebaaz',
    year: 1978,
    cast: 'Dharmendra, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-pha78-1',
        'rdb-phandebaaz-1978',
        'Mausam Hai Mastana',
        'Kishore Kumar, Lata Mangeshkar',
        'Phandebaaz',
        1978
      ),
    ],
  },
  {
    id: 'rdb-gol-maal-1979',
    directorId: 'rd-burman',
    title: 'Gol Maal',
    year: 1979,
    cast: 'Amol Palekar, Bindiya Goswami, Utpal Dutt',
    songs: [
      song(
        'rdb-gm79-1',
        'rdb-gol-maal-1979',
        'Aanewala Pal Jaanewala Hai',
        'Kishore Kumar',
        'Gol Maal',
        1979,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-gm79-2',
        'rdb-gol-maal-1979',
        'Golmaal Hai Bhai Sab Golmaal Hai',
        'R.D. Burman, Sapan Chakraborty',
        'Gol Maal',
        1979,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-manzil-1979',
    directorId: 'rd-burman',
    title: 'Manzil',
    year: 1979,
    cast: 'Amitabh Bachchan, Moushumi Chatterjee',
    songs: [
      song(
        'rdb-man79-1',
        'rdb-manzil-1979',
        'Tum Ho Mere Dil Ki Dhadkan',
        'Kishore Kumar',
        'Manzil',
        1979,
        {
          lyricist: 'Yogesh',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'A Whiter Shade of Pale',
          originalArtist: 'Procol Harum',
          originalYear: '1967',
          adaptationNotes:
            'Opening organ prelude adapts the Baroque-rock progression of Procol Harum’s 1967 classic.',
          originalLink: 'https://www.youtube.com/watch?v=LN-q4Gg8SOg',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'rdb-man79-2',
        'rdb-manzil-1979',
        'Rim Jhim Gire Sawan',
        'Kishore Kumar, Lata Mangeshkar',
        'Manzil',
        1979,
        { lyricist: 'Yogesh' }
      ),
    ],
  },
  {
    id: 'rdb-jhoota-kahin-ka-1979',
    directorId: 'rd-burman',
    title: 'Jhoota Kahin Ka',
    year: 1979,
    cast: 'Rishi Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-jkk79-1',
        'rdb-jhoota-kahin-ka-1979',
        'Jeevan Ke Har Mod Pe',
        'Kishore Kumar, Asha Bhosle',
        'Jhoota Kahin Ka',
        1979,
        {
          lyricist: 'Gulshan Bawra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Verão Vermelho',
          originalArtist: 'Carlos Santana / Nonato Buzar',
          originalYear: '1976',
          adaptationNotes:
            'Latin-rock guitar motif and vocal phrasing adapted from Santana’s rendition of Verão Vermelho.',
          originalLink: 'https://www.youtube.com/watch?v=PPcoC0rmruM',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-the-great-gambler-1979',
    directorId: 'rd-burman',
    title: 'The Great Gambler',
    year: 1979,
    cast: 'Amitabh Bachchan, Zeenat Aman, Neetu Singh',
    songs: [
      song(
        'rdb-tgg79-1',
        'rdb-the-great-gambler-1979',
        'Do Lafzon Ki Hai Dil Ki Kahani',
        'Asha Bhosle, Sharad Kumar',
        'The Great Gambler',
        1979,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-jurmana-1979',
    directorId: 'rd-burman',
    title: 'Jurmana',
    year: 1979,
    cast: 'Amitabh Bachchan, Raakhee, Vinod Mehra',
    songs: [
      song(
        'rdb-jur79-1',
        'rdb-jurmana-1979',
        'Sawan Ke Jhoole Pade',
        'Lata Mangeshkar',
        'Jurmana',
        1979,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-hamare-tumhare-1979',
    directorId: 'rd-burman',
    title: 'Hamare Tumhare',
    year: 1979,
    cast: 'Sanjeev Kumar, Raakhee',
    songs: [
      song(
        'rdb-ht79-1',
        'rdb-hamare-tumhare-1979',
        'Kuchh Tum Karo Kuchh Hum Karein',
        'Kishore Kumar, Lata Mangeshkar',
        'Hamare Tumhare',
        1979
      ),
    ],
  },
  {
    id: 'rdb-nauker-1979',
    directorId: 'rd-burman',
    title: 'Nauker',
    year: 1979,
    cast: 'Sanjeev Kumar, Jaya Bhaduri',
    songs: [
      song(
        'rdb-nkr79-1',
        'rdb-nauker-1979',
        'Pallo Latke Re Mharo',
        'Asha Bhosle, Kishore Kumar',
        'Nauker',
        1979
      ),
    ],
  },
  {
    id: 'rdb-dhongee-1979',
    directorId: 'rd-burman',
    title: 'Dhongee',
    year: 1979,
    cast: 'Randhir Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-dh79-1',
        'rdb-dhongee-1979',
        'Haye Re Haye Tera Ghunghta',
        'Kishore Kumar, Asha Bhosle',
        'Dhongee',
        1979
      ),
    ],
  },
  {
    id: 'rdb-bhala-maanus-1979',
    directorId: 'rd-burman',
    title: 'Bhala Maanus',
    year: 1979,
    cast: 'Randhir Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-bm79-1',
        'rdb-bhala-maanus-1979',
        'Jaan Pehchan To Pehle Se Thi',
        'Kishore Kumar',
        'Bhala Maanus',
        1979
      ),
    ],
  },
  {
    id: 'rdb-salaam-memsaab-1979',
    directorId: 'rd-burman',
    title: 'Salaam Memsaab',
    year: 1979,
    cast: 'Sunil Dutt, Zarina Wahab',
    songs: [
      song(
        'rdb-sm79-1',
        'rdb-salaam-memsaab-1979',
        'Hum Bhi Rahon Mein Khade Hain',
        'Kishore Kumar',
        'Salaam Memsaab',
        1979
      ),
    ],
  },

  // =========================================================================
  // 1980 – 1989: Disco, Synth Innovation & Classic Acoustic Scores
  // =========================================================================
  {
    id: 'rdb-shaan-1980',
    directorId: 'rd-burman',
    title: 'Shaan',
    year: 1980,
    cast: 'Amitabh Bachchan, Shashi Kapoor, Sunil Dutt, Shatrughan Sinha',
    songs: [
      song(
        'rdb-sh80-1',
        'rdb-shaan-1980',
        'Yamma Yamma',
        'Mohammed Rafi, R.D. Burman',
        'Shaan',
        1980,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-sh80-2',
        'rdb-shaan-1980',
        'Jaanu Meri Jaan',
        'Kishore Kumar, Mohammed Rafi, Asha Bhosle, Usha Mangeshkar',
        'Shaan',
        1980,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-sh80-3',
        'rdb-shaan-1980',
        'Pyar Karne Wale Pyar Karte Hain',
        'Asha Bhosle',
        'Shaan',
        1980,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-khubsoorat-1980',
    directorId: 'rd-burman',
    title: 'Khubsoorat',
    year: 1980,
    cast: 'Rekha, Rakesh Roshan, Ashok Kumar',
    songs: [
      song(
        'rdb-khu80-1',
        'rdb-khubsoorat-1980',
        'Piya Bawri Piya Bawri',
        'Asha Bhosle, Ashok Kumar',
        'Khubsoorat',
        1980,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-khu80-2',
        'rdb-khubsoorat-1980',
        'Sare Niyam Tod Do',
        'Asha Bhosle',
        'Khubsoorat',
        1980,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-the-burning-train-1980',
    directorId: 'rd-burman',
    title: 'The Burning Train',
    year: 1980,
    cast: 'Dharmendra, Hema Malini, Vinod Khanna, Jeetendra',
    songs: [
      song(
        'rdb-tbt80-1',
        'rdb-the-burning-train-1980',
        'Pal Do Pal Ka Saath Hamara',
        'Mohammed Rafi, Asha Bhosle',
        'The Burning Train',
        1980,
        { lyricist: 'Sahir Ludhianvi' }
      ),
      song(
        'rdb-tbt80-2',
        'rdb-the-burning-train-1980',
        'Meri Nazar Hai Tujhpe',
        'Asha Bhosle',
        'The Burning Train',
        1980,
        { lyricist: 'Sahir Ludhianvi' }
      ),
    ],
  },
  {
    id: 'rdb-alibaba-aur-40-chor-1980',
    directorId: 'rd-burman',
    title: 'Alibaba Aur 40 Chor',
    year: 1980,
    cast: 'Dharmendra, Hema Malini, Zeenat Aman',
    songs: [
      song(
        'rdb-aa40c-1',
        'rdb-alibaba-aur-40-chor-1980',
        'Khatouba',
        'Asha Bhosle',
        'Alibaba Aur 40 Chor',
        1980,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'inspired',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Traditional Middle Eastern / Central Asian Cabaret Motifs',
          originalArtist: 'Middle Eastern Folk Tradition',
          originalYear: 'Traditional',
          adaptationNotes:
            'Built around traditional Arabic/Central Asian scales and belly-dance percussion arrangements.',
          originalLink: 'https://www.youtube.com/watch?v=sgmIgEHjnIw',
          referenceSource: 'Film Music Archives',
        }
      ),
      song(
        'rdb-aa40c-2',
        'rdb-alibaba-aur-40-chor-1980',
        'Aaja Sar-e-Bazaar',
        'Lata Mangeshkar',
        'Alibaba Aur 40 Chor',
        1980,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-abdullah-1980',
    directorId: 'rd-burman',
    title: 'Abdullah',
    year: 1980,
    cast: 'Sanjay Khan, Raj Kapoor, Zeenat Aman',
    songs: [
      song(
        'rdb-abd80-1',
        'rdb-abdullah-1980',
        'Maine Poocha Chand Se',
        'Mohammed Rafi',
        'Abdullah',
        1980,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-aanchal-1980',
    directorId: 'rd-burman',
    title: 'Aanchal',
    year: 1980,
    cast: 'Rajesh Khanna, Raakhee, Rekha',
    songs: [
      song(
        'rdb-aan80-1',
        'rdb-aanchal-1980',
        'Bhor Bhaye Panchhi',
        'Lata Mangeshkar',
        'Aanchal',
        1980
      ),
    ],
  },
  {
    id: 'rdb-phir-wahi-raat-1980',
    directorId: 'rd-burman',
    title: 'Phir Wahi Raat',
    year: 1980,
    cast: 'Rajesh Khanna, Kim',
    songs: [
      song(
        'rdb-pwr80-1',
        'rdb-phir-wahi-raat-1980',
        'Sang Mere Nikle The Sajan',
        'Asha Bhosle',
        'Phir Wahi Raat',
        1980
      ),
    ],
  },
  {
    id: 'rdb-red-rose-1980',
    directorId: 'rd-burman',
    title: 'Red Rose',
    year: 1980,
    cast: 'Rajesh Khanna, Poonam Dhillon',
    songs: [
      song(
        'rdb-rr80-1',
        'rdb-red-rose-1980',
        'Tere Bin Jeena Kya',
        'Kishore Kumar, Asha Bhosle',
        'Red Rose',
        1980
      ),
    ],
  },
  {
    id: 'rdb-dhan-daulat-1980',
    directorId: 'rd-burman',
    title: 'Dhan Daulat',
    year: 1980,
    cast: 'Rishi Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-dd80-1',
        'rdb-dhan-daulat-1980',
        'Jeena Kya Aji Pyar Bina',
        'Kishore Kumar, Asha Bhosle',
        'Dhan Daulat',
        1980
      ),
    ],
  },
  {
    id: 'rdb-sitara-1980',
    directorId: 'rd-burman',
    title: 'Sitara',
    year: 1980,
    cast: 'Mithun Chakraborty, Zarina Wahab',
    songs: [
      song(
        'rdb-sit80-1',
        'rdb-sitara-1980',
        'Thodi Si Zameen Thoda Aasman',
        'Bhupinder Singh, Lata Mangeshkar',
        'Sitara',
        1980,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-takkar-1980',
    directorId: 'rd-burman',
    title: 'Takkar',
    year: 1980,
    cast: 'Sanjeev Kumar, Jeetendra, Zeenat Aman',
    songs: [
      song(
        'rdb-tak80-1',
        'rdb-takkar-1980',
        'Duniya Mein Teri Duniya Mein',
        'Kishore Kumar',
        'Takkar',
        1980
      ),
    ],
  },
  {
    id: 'rdb-jal-mahal-1980',
    directorId: 'rd-burman',
    title: 'Jal Mahal',
    year: 1980,
    cast: 'Jeetendra, Rekha',
    songs: [
      song(
        'rdb-jm80-1',
        'rdb-jal-mahal-1980',
        'Aaja Mere Pass Aaja',
        'Mohammed Rafi, Asha Bhosle',
        'Jal Mahal',
        1980
      ),
    ],
  },
  {
    id: 'rdb-katil-kaun-1980',
    directorId: 'rd-burman',
    title: 'Katil Kaun?',
    year: 1980,
    songs: [
      song(
        'rdb-kk80-1',
        'rdb-katil-kaun-1980',
        'Katil Kaun (Soundtrack)',
        'Asha Bhosle',
        'Katil Kaun',
        1980
      ),
    ],
  },
  {
    id: 'rdb-love-story-1981',
    directorId: 'rd-burman',
    title: 'Love Story',
    year: 1981,
    cast: 'Kumar Gaurav, Vijayta Pandit',
    songs: [
      song(
        'rdb-ls81-1',
        'rdb-love-story-1981',
        'Kaisa Tera Pyar',
        'Amit Kumar, Lata Mangeshkar',
        'Love Story',
        1981,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'I Have a Dream',
          originalArtist: 'ABBA',
          originalYear: '1979',
          adaptationNotes:
            'Gentle acoustic sway and chord cadence show notable stylistic resemblance to ABBA’s 1979 ballad.',
          originalLink: 'https://www.youtube.com/watch?v=ER_3h03omdE',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'rdb-ls81-2',
        'rdb-love-story-1981',
        'Yaad Aa Rahi Hai',
        'Amit Kumar, Lata Mangeshkar',
        'Love Story',
        1981,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-ls81-3',
        'rdb-love-story-1981',
        'Dekho Maine Dekha Hai Yeh Ek Sapna',
        'Amit Kumar, Lata Mangeshkar',
        'Love Story',
        1981,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-rocky-1981',
    directorId: 'rd-burman',
    title: 'Rocky',
    year: 1981,
    cast: 'Sanjay Dutt, Tina Munim, Reena Roy',
    songs: [
      song(
        'rdb-roc81-1',
        'rdb-rocky-1981',
        'Aa Dekhen Zara',
        'Kishore Kumar, Asha Bhosle',
        'Rocky',
        1981,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'The Eve of the War',
          originalArtist: 'Jeff Wayne (The War of the Worlds)',
          originalYear: '1978',
          adaptationNotes:
            'Dramatic synth-bass ostinato and string interlude adapted from Jeff Wayne’s progressive-rock theme.',
          originalLink: 'https://www.youtube.com/watch?v=Poii8JAbtng',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-roc81-2',
        'rdb-rocky-1981',
        'Kya Yehi Pyar Hai',
        'Kishore Kumar, Lata Mangeshkar',
        'Rocky',
        1981,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-kudrat-1981',
    directorId: 'rd-burman',
    title: 'Kudrat',
    year: 1981,
    cast: 'Rajesh Khanna, Hema Malini, Vinod Khanna',
    songs: [
      song(
        'rdb-kud81-1',
        'rdb-kudrat-1981',
        'Humein Tumse Pyar Kitna',
        'Kishore Kumar, Parveen Sultana',
        'Kudrat',
        1981,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-kud81-2',
        'rdb-kudrat-1981',
        'Tune O Rangeele Kaisa Jadoo Kiya',
        'Lata Mangeshkar',
        'Kudrat',
        1981,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-kaalia-1981',
    directorId: 'rd-burman',
    title: 'Kaalia',
    year: 1981,
    cast: 'Amitabh Bachchan, Parveen Babi',
    songs: [
      song(
        'rdb-kaa81-1',
        'rdb-kaalia-1981',
        'Jahan Teri Yeh Nazar Hai',
        'Kishore Kumar',
        'Kaalia',
        1981,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Heleh Maali',
          originalArtist: 'Zia Atabay',
          originalYear: '1977',
          adaptationNotes:
            'Infectious disco-cabaret hook and rhythmic pattern adapt Iranian pop singer Zia Atabay’s 1977 Persian hit.',
          originalLink: 'https://www.youtube.com/watch?v=gYBHCsdMVH4',
          referenceSource: 'Music Provenance Archives / Wikipedia',
        }
      ),
      song(
        'rdb-kaa81-2',
        'rdb-kaalia-1981',
        'Tum Saath Ho Jab Apne',
        'Kishore Kumar, Asha Bhosle',
        'Kaalia',
        1981,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-barsaat-ki-ek-raat-1981',
    directorId: 'rd-burman',
    title: 'Barsaat Ki Ek Raat',
    year: 1981,
    cast: 'Amitabh Bachchan, Raakhee',
    significance: 'Bilingual Hindi/Bengali production (Bengali version: Anusandhan)',
    songs: [
      song(
        'rdb-bker81-1',
        'rdb-barsaat-ki-ek-raat-1981',
        'Apne Pyar Ke Sapne Sach Hue',
        'Kishore Kumar, Lata Mangeshkar',
        'Barsaat Ki Ek Raat',
        1981
      ),
    ],
  },
  {
    id: 'rdb-anusandhan-1981',
    directorId: 'rd-burman',
    title: 'Anusandhan (Bengali)',
    year: 1981,
    cast: 'Amitabh Bachchan, Raakhee',
    songs: [
      song(
        'rdb-anu81-1',
        'rdb-anusandhan-1981',
        'Amar Swapna Je Sotti Holo Aaj',
        'Kishore Kumar, Lata Mangeshkar',
        'Anusandhan Bengali',
        1981
      ),
      song(
        'rdb-anu81-2',
        'rdb-anusandhan-1981',
        'Haye Re Poda Banshi',
        'Asha Bhosle',
        'Anusandhan Bengali',
        1981
      ),
    ],
  },
  {
    id: 'rdb-kalankini-kankabati-1981',
    directorId: 'rd-burman',
    title: 'Kalankini Kankabati (Bengali)',
    year: 1981,
    cast: 'Uttam Kumar, Sharmila Tagore, Mithun Chakraborty',
    songs: [
      song(
        'rdb-kk81-1',
        'rdb-kalankini-kankabati-1981',
        'Aadha Aalo Chhayate',
        'Asha Bhosle',
        'Kalankini Kankabati Bengali',
        1981
      ),
    ],
  },
  {
    id: 'rdb-naram-garam-1981',
    directorId: 'rd-burman',
    title: 'Naram Garam',
    year: 1981,
    cast: 'Amol Palekar, Swaroop Sampat',
    songs: [
      song(
        'rdb-ng81-1',
        'rdb-naram-garam-1981',
        'Humein Raston Ki Zaroorat Nahin Hai',
        'Asha Bhosle',
        'Naram Garam',
        1981,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-baseraa-1981',
    directorId: 'rd-burman',
    title: 'Baseraa',
    year: 1981,
    cast: 'Shashi Kapoor, Raakhee, Rekha',
    songs: [
      song(
        'rdb-bas81-1',
        'rdb-baseraa-1981',
        'Jahan Pe Savera Ho Basera Wahin Hai',
        'Lata Mangeshkar',
        'Baseraa',
        1981,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-harjaee-1981',
    directorId: 'rd-burman',
    title: 'Harjaee',
    year: 1981,
    cast: 'Randhir Kapoor, Tina Munim',
    songs: [
      song(
        'rdb-har81-1',
        'rdb-harjaee-1981',
        'Tere Liye Palkon Ki Jhalar Bunoon',
        'Lata Mangeshkar',
        'Harjaee',
        1981
      ),
    ],
  },
  {
    id: 'rdb-bulundi-1981',
    directorId: 'rd-burman',
    title: 'Bulundi',
    year: 1981,
    cast: 'Raaj Kumar, Asha Parekh, Danny Denzongpa',
    songs: [
      song(
        'rdb-bul81-1',
        'rdb-bulundi-1981',
        'Kaho Kahan Chale Jahan Tum Chalo',
        'Kishore Kumar, Asha Bhosle',
        'Bulundi',
        1981
      ),
    ],
  },
  {
    id: 'rdb-jail-yatra-1981',
    directorId: 'rd-burman',
    title: 'Jail Yatra',
    year: 1981,
    cast: 'Vinod Khanna, Reena Roy',
    songs: [
      song(
        'rdb-jy81-1',
        'rdb-jail-yatra-1981',
        'Kya Kya Na Sitam',
        'Lata Mangeshkar',
        'Jail Yatra',
        1981
      ),
    ],
  },
  {
    id: 'rdb-ghungroo-ki-awaaz-1981',
    directorId: 'rd-burman',
    title: 'Ghungroo Ki Awaaz',
    year: 1981,
    cast: 'Vijay Anand, Rekha',
    songs: [
      song(
        'rdb-gka81-1',
        'rdb-ghungroo-ki-awaaz-1981',
        'Aankh Mili To Dil Dhadka',
        'Kishore Kumar, Asha Bhosle',
        'Ghungroo Ki Awaaz',
        1981
      ),
    ],
  },
  {
    id: 'rdb-satte-pe-satta-1982',
    directorId: 'rd-burman',
    title: 'Satte Pe Satta',
    year: 1982,
    cast: 'Amitabh Bachchan, Hema Malini, Amjad Khan',
    label: 'Polydor / Universal',
    significance: 'Blockbuster comedy-drama soundtrack featuring Dilbar Mere, Zindagi Milke Bitayenge, and Pyar Humein Kis Mod Pe Le Aaya',
    songs: [
      song(
        'rdb-sps82-1',
        'rdb-satte-pe-satta-1982',
        'Dilbar Mere Kab Tak Mujhe',
        'Kishore Kumar, Anette Pinto',
        'Satte Pe Satta',
        1982,
        {
          lyricist: 'Gulshan Bawra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Zigeunerjunge',
          originalArtist: 'Alexandra',
          originalYear: '1967',
          adaptationNotes:
            'Mukhda melodic structure and melancholic cadence follow German singer Alexandra’s 1967 Schlager ballad.',
          originalLink: 'https://www.youtube.com/watch?v=Eyzz8udn7Ps',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-sps82-2',
        'rdb-satte-pe-satta-1982',
        'Zindagi Milke Bitayenge',
        'Kishore Kumar, Bhupinder Singh, Sapan Chakraborty, R.D. Burman',
        'Satte Pe Satta',
        1982,
        {
          lyricist: 'Gulshan Bawra',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Theme from The Longest Day',
          originalArtist: 'Paul Anka / Mitch Miller',
          originalYear: '1962',
          adaptationNotes:
            'March-like choral rhythm and brisk chord cadence adapt the marching theme from The Longest Day.',
          originalLink: 'https://www.youtube.com/watch?v=zLLo8J5IY9A',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'rdb-sps82-3',
        'rdb-satte-pe-satta-1982',
        'Pyar Humein Kis Mod Pe Le Aaya',
        'Kishore Kumar, Bhupinder Singh, R.D. Burman, Sapan Chakraborty',
        'Satte Pe Satta',
        1982,
        { lyricist: 'Gulshan Bawra' }
      ),
    ],
  },
  {
    id: 'rdb-yeh-vaada-raha-1982',
    directorId: 'rd-burman',
    title: 'Yeh Vaada Raha',
    year: 1982,
    cast: 'Rishi Kapoor, Poonam Dhillon, Tina Munim',
    songs: [
      song(
        'rdb-yvr82-1',
        'rdb-yeh-vaada-raha-1982',
        'Tu Tu Hai Wohi Dil Ne Jise Apna Kaha',
        'Kishore Kumar, Asha Bhosle',
        'Yeh Vaada Raha',
        1982,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-yvr82-2',
        'rdb-yeh-vaada-raha-1982',
        'Jeene Ko To Jeete Hain Sabhi',
        'Kishore Kumar, Asha Bhosle',
        'Yeh Vaada Raha',
        1982,
        { lyricist: 'Gulshan Bawra' }
      ),
    ],
  },
  {
    id: 'rdb-zamaane-ko-dikhana-hai-1982',
    directorId: 'rd-burman',
    title: 'Zamaane Ko Dikhana Hai',
    year: 1982,
    cast: 'Rishi Kapoor, Padmini Kolhapure',
    songs: [
      song(
        'rdb-zkdh82-1',
        'rdb-zamaane-ko-dikhana-hai-1982',
        'Hoga Tumse Pyara Kaun',
        'Shailendra Singh',
        'Zamaane Ko Dikhana Hai',
        1982,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-zkdh82-2',
        'rdb-zamaane-ko-dikhana-hai-1982',
        'Dil Lena Khel Hai Dildar Ka',
        'R.D. Burman',
        'Zamaane Ko Dikhana Hai',
        1982,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
      song(
        'rdb-zkdh82-3',
        'rdb-zamaane-ko-dikhana-hai-1982',
        'Pucho Na Yaar Kya Hua',
        'Asha Bhosle, Mohammed Rafi',
        'Zamaane Ko Dikhana Hai',
        1982,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'inspired',
          originCategory: 'Indian Folk & Classical',
          originalSongTitle: 'Traditional Himalayan / Nepali Folk Melody',
          originalArtist: 'Himalayan Folk Tradition',
          originalYear: 'Traditional',
          adaptationNotes:
            'Celebrated flute prelude and pentatonic pahadi refrain adapt traditional Himalayan/Nepali folk motifs.',
          originalLink: 'https://www.youtube.com/watch?v=ImCjq4XxkwA',
          referenceSource: 'Film Music Archives / Print Interviews',
        }
      ),
    ],
  },
  {
    id: 'rdb-angoor-1982',
    directorId: 'rd-burman',
    title: 'Angoor',
    year: 1982,
    cast: 'Sanjeev Kumar, Moushumi Chatterjee, Deven Verma',
    songs: [
      song(
        'rdb-ang82-1',
        'rdb-angoor-1982',
        'Roz Roz Dali Dali Kya Likh Jaye',
        'Asha Bhosle',
        'Angoor',
        1982,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-namkeen-1982',
    directorId: 'rd-burman',
    title: 'Namkeen',
    year: 1982,
    cast: 'Sanjeev Kumar, Sharmila Tagore, Shabana Azmi, Waheeda Rehman',
    songs: [
      song(
        'rdb-nam82-1',
        'rdb-namkeen-1982',
        'Phir Se Aaiyo Badra Bidesi',
        'Asha Bhosle',
        'Namkeen',
        1982,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-bemisal-1982',
    directorId: 'rd-burman',
    title: 'Bemisal',
    year: 1982,
    cast: 'Amitabh Bachchan, Raakhee, Vinod Mehra',
    songs: [
      song(
        'rdb-bem82-1',
        'rdb-bemisal-1982',
        'Kitni Khubsoorat Yeh Tasveer Hai',
        'Kishore Kumar, Lata Mangeshkar, Suresh Wadkar',
        'Bemisal',
        1982
      ),
    ],
  },
  {
    id: 'rdb-sanam-teri-kasam-1982',
    directorId: 'rd-burman',
    title: 'Sanam Teri Kasam',
    year: 1982,
    cast: 'Kamal Haasan, Reena Roy',
    significance: 'Filmfare Award Winner — Best Music Director (1982)',
    songs: [
      song(
        'rdb-stk82-1',
        'rdb-sanam-teri-kasam-1982',
        'Kitne Bhi Tu Kar Le Sitam',
        'Kishore Kumar, Asha Bhosle',
        'Sanam Teri Kasam',
        1982,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-stk82-2',
        'rdb-sanam-teri-kasam-1982',
        'Dekhta Hoon Koi Ladki Haseen',
        'Kishore Kumar',
        'Sanam Teri Kasam',
        1982,
        {
          lyricist: 'Gulshan Bawra',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Mustapha (Ya Mustapha)',
          originalArtist: 'Bob Azzam',
          originalYear: '1960',
          adaptationNotes:
            'Upbeat Middle Eastern-Mediterranean dance groove and chorus cadence adapt Bob Azzam’s 1960 hit.',
          originalLink: 'https://www.youtube.com/watch?v=GkQW8aWedko',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-teri-kasam-1982',
    directorId: 'rd-burman',
    title: 'Teri Kasam',
    year: 1982,
    cast: 'Kumar Gaurav, Poonam Dhillon',
    songs: [
      song(
        'rdb-tk82-1',
        'rdb-teri-kasam-1982',
        'Hum Jis Raste Pe Chale',
        'Amit Kumar, Lata Mangeshkar',
        'Teri Kasam',
        1982
      ),
    ],
  },
  {
    id: 'rdb-shakti-1982',
    directorId: 'rd-burman',
    title: 'Shakti',
    year: 1982,
    cast: 'Dilip Kumar, Amitabh Bachchan, Smita Patil, Raakhee',
    songs: [
      song(
        'rdb-shk82-1',
        'rdb-shakti-1982',
        'Jane Kaise Kab Kahan Iqrar Ho Gaya',
        'Kishore Kumar, Lata Mangeshkar',
        'Shakti',
        1982,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-ashanti-1982',
    directorId: 'rd-burman',
    title: 'Ashanti',
    year: 1982,
    cast: 'Rajesh Khanna, Mithun Chakraborty, Zeenat Aman',
    songs: [
      song(
        'rdb-ash82-1',
        'rdb-ashanti-1982',
        'Shakti De Maa',
        'Chandrashekhar Gadgil',
        'Ashanti',
        1982
      ),
    ],
  },
  {
    id: 'rdb-daulat-1982',
    directorId: 'rd-burman',
    title: 'Daulat',
    year: 1982,
    cast: 'Vinod Khanna, Zeenat Aman',
    songs: [
      song(
        'rdb-dau82-1',
        'rdb-daulat-1982',
        'Moti Ho To Bandh Ke Rakh Loon',
        'Kishore Kumar, Asha Bhosle',
        'Daulat',
        1982
      ),
    ],
  },
  {
    id: 'rdb-amne-samne-1982',
    directorId: 'rd-burman',
    title: 'Amne Samne',
    year: 1982,
    cast: 'Mithun Chakraborty, Bindiya Goswami',
    songs: [
      song(
        'rdb-as82-1',
        'rdb-amne-samne-1982',
        'Oonchi Neechi Palki',
        'Asha Bhosle',
        'Amne Samne',
        1982
      ),
    ],
  },
  {
    id: 'rdb-swami-dada-1982',
    directorId: 'rd-burman',
    title: 'Swami Dada',
    year: 1982,
    cast: 'Dev Anand, Mithun Chakraborty, Padmini Kolhapure',
    songs: [
      song(
        'rdb-sd82-1',
        'rdb-swami-dada-1982',
        'Zindagi Yeh Kaisi Hai',
        'Kishore Kumar, Asha Bhosle',
        'Swami Dada',
        1982
      ),
    ],
  },
  {
    id: 'rdb-troyee-1982',
    directorId: 'rd-burman',
    title: 'Troyee (Bengali)',
    year: 1982,
    cast: 'Mithun Chakraborty, Debashree Roy',
    songs: [
      song(
        'rdb-tro82-1',
        'rdb-troyee-1982',
        'Katha Hoyechhilo',
        'Asha Bhosle, Kishore Kumar',
        'Troyee Bengali',
        1982
      ),
    ],
  },
  {
    id: 'rdb-aparupa-1982',
    directorId: 'rd-burman',
    title: 'Aparupa (Bengali)',
    year: 1982,
    cast: 'Prosenjit Chatterjee, Debashree Roy',
    songs: [
      song(
        'rdb-apa82-1',
        'rdb-aparupa-1982',
        'Aami Tomay Bhalobashi',
        'Asha Bhosle',
        'Aparupa Bengali',
        1982
      ),
    ],
  },
  {
    id: 'rdb-shoukheen-1982',
    directorId: 'rd-burman',
    title: 'Shoukheen (Bengali)',
    year: 1982,
    songs: [
      song(
        'rdb-shk82-b-1',
        'rdb-shoukheen-1982',
        'Shoukheen (Bengali Soundtrack)',
        'Asha Bhosle',
        'Shoukheen Bengali',
        1982
      ),
    ],
  },
  {
    id: 'rdb-masoom-1983',
    directorId: 'rd-burman',
    title: 'Masoom',
    year: 1983,
    cast: 'Naseeruddin Shah, Shabana Azmi, Jugal Hansraj',
    significance: 'Filmfare Award Winner — Best Music Director (1983)',
    songs: [
      song(
        'rdb-mas83-1',
        'rdb-masoom-1983',
        'Tujhse Naraz Nahin Zindagi',
        'Anup Ghoshal, Lata Mangeshkar',
        'Masoom',
        1983,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-mas83-2',
        'rdb-masoom-1983',
        'Lakdi Ki Kaathi',
        'Gauri Bapat, Gurpreet Kaur, Vanita Mishra',
        'Masoom',
        1983,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-mas83-3',
        'rdb-masoom-1983',
        'Do Naina Aur Ek Kahani',
        'Aarti Mukherjee',
        'Masoom',
        1983,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-betaab-1983',
    directorId: 'rd-burman',
    title: 'Betaab',
    year: 1983,
    cast: 'Sunny Deol, Amrita Singh',
    songs: [
      song(
        'rdb-bet83-1',
        'rdb-betaab-1983',
        'Jab Hum Jawan Honge',
        'Shabbir Kumar, Lata Mangeshkar',
        'Betaab',
        1983,
        { lyricist: 'Anand Bakshi' }
      ),
      song(
        'rdb-bet83-2',
        'rdb-betaab-1983',
        'Badal Yun Garajta Hai',
        'Shabbir Kumar, Lata Mangeshkar',
        'Betaab',
        1983,
        { lyricist: 'Anand Bakshi' }
      ),
    ],
  },
  {
    id: 'rdb-agar-tum-na-hote-1983',
    directorId: 'rd-burman',
    title: 'Agar Tum Na Hote',
    year: 1983,
    cast: 'Rajesh Khanna, Rekha, Raj Babbar',
    songs: [
      song(
        'rdb-atnh83-1',
        'rdb-agar-tum-na-hote-1983',
        'Humein Aur Jeene Ki Chahat Na Hoti',
        'Kishore Kumar, Lata Mangeshkar',
        'Agar Tum Na Hote',
        1983,
        { lyricist: 'Gulshan Bawra' }
      ),
    ],
  },
  {
    id: 'rdb-pukar-1983',
    directorId: 'rd-burman',
    title: 'Pukar',
    year: 1983,
    cast: 'Amitabh Bachchan, Zeenat Aman, Randhir Kapoor',
    songs: [
      song(
        'rdb-puk83-1',
        'rdb-pukar-1983',
        'Samundar Mein Nahake',
        'R.D. Burman',
        'Pukar',
        1983,
        { lyricist: 'Gulshan Bawra' }
      ),
      song(
        'rdb-puk83-2',
        'rdb-pukar-1983',
        'Tu Mere Liye',
        'Asha Bhosle',
        'Pukar',
        1983,
        { lyricist: 'Gulshan Bawra' }
      ),
    ],
  },
  {
    id: 'rdb-bade-dilwala-1983',
    directorId: 'rd-burman',
    title: 'Bade Dilwala',
    year: 1983,
    cast: 'Rishi Kapoor, Tina Munim',
    songs: [
      song(
        'rdb-bdw83-1',
        'rdb-bade-dilwala-1983',
        'Jeevan Ke Din Chhote Sahi',
        'Kishore Kumar, Lata Mangeshkar',
        'Bade Dilwala',
        1983,
        {
          lyricist: 'Majrooh Sultanpuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Theme from Love Story (Where Do I Begin)',
          originalArtist: 'Francis Lai',
          originalYear: '1970',
          adaptationNotes:
            'Poignant opening piano/string motif and descending harmonic phrasing adapt Francis Lai’s iconic Love Story theme.',
          originalLink: 'https://www.youtube.com/watch?v=A5Ya7_wVb2w',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-mahaan-1983',
    directorId: 'rd-burman',
    title: 'Mahaan',
    year: 1983,
    cast: 'Amitabh Bachchan, Waheeda Rehman, Zeenat Aman',
    songs: [
      song(
        'rdb-mah83-1',
        'rdb-mahaan-1983',
        'Pyaar Mein Dil Pe Maar De Goli',
        'Kishore Kumar, Asha Bhosle',
        'Mahaan',
        1983
      ),
    ],
  },
  {
    id: 'rdb-lovers-1983',
    directorId: 'rd-burman',
    title: 'Lovers',
    year: 1983,
    cast: 'Kumar Gaurav, Padmini Kolhapure',
    songs: [
      song(
        'rdb-lov83-1',
        'rdb-lovers-1983',
        'Zamaane Mein Sabse Purani Kahani',
        'Amit Kumar, Lata Mangeshkar',
        'Lovers',
        1983
      ),
    ],
  },
  {
    id: 'rdb-rang-birangi-1983',
    directorId: 'rd-burman',
    title: 'Rang Birangi',
    year: 1983,
    cast: 'Amol Palekar, Parveen Babi, Farooq Sheikh',
    songs: [
      song(
        'rdb-rb83-1',
        'rdb-rang-birangi-1983',
        'Pyaar Na Raha To Kya Hua',
        'Aarti Mukherjee',
        'Rang Birangi',
        1983
      ),
    ],
  },
  {
    id: 'rdb-mazdoor-1983',
    directorId: 'rd-burman',
    title: 'Mazdoor',
    year: 1983,
    cast: 'Dilip Kumar, Nanda, Raj Babbar',
    songs: [
      song(
        'rdb-maz83-1',
        'rdb-mazdoor-1983',
        'Hum Mehnatkash Is Duniya Se',
        'Mahendra Kapoor',
        'Mazdoor',
        1983
      ),
    ],
  },
  {
    id: 'rdb-qayamat-1983',
    directorId: 'rd-burman',
    title: 'Qayamat',
    year: 1983,
    cast: 'Dharmendra, Shatrughan Sinha, Jaya Prada',
    songs: [
      song(
        'rdb-qay83-1',
        'rdb-qayamat-1983',
        'Aaj Qayamat Ho Gayi',
        'Asha Bhosle',
        'Qayamat',
        1983
      ),
    ],
  },
  {
    id: 'rdb-romance-1983',
    directorId: 'rd-burman',
    title: 'Romance',
    year: 1983,
    cast: 'Kumar Gaurav, Poonam Dhillon',
    songs: [
      song(
        'rdb-rom83-1',
        'rdb-romance-1983',
        'Aur Intezar Ab Mushkil Hai',
        'Kishore Kumar, Lata Mangeshkar',
        'Romance',
        1983
      ),
    ],
  },
  {
    id: 'rdb-jaane-jaan-1983',
    directorId: 'rd-burman',
    title: 'Jaane Jaan',
    year: 1983,
    cast: 'Randhir Kapoor, Neetu Singh',
    songs: [
      song(
        'rdb-jj83-1',
        'rdb-jaane-jaan-1983',
        'Tere Bina Main Kuchh Bhi Nahin',
        'Kishore Kumar, Asha Bhosle',
        'Jaane Jaan',
        1983
      ),
    ],
  },
  {
    id: 'rdb-manzil-manzil-1984',
    directorId: 'rd-burman',
    title: 'Manzil Manzil',
    year: 1984,
    cast: 'Sunny Deol, Dimple Kapadia',
    songs: [
      song(
        'rdb-mm84-1',
        'rdb-manzil-manzil-1984',
        'O Meri Jaan',
        'Shailendra Singh, Asha Bhosle',
        'Manzil Manzil',
        1984,
        { lyricist: 'Majrooh Sultanpuri' }
      ),
    ],
  },
  {
    id: 'rdb-duniya-1984',
    directorId: 'rd-burman',
    title: 'Duniya',
    year: 1984,
    cast: 'Dilip Kumar, Rishi Kapoor, Amrita Singh',
    songs: [
      song(
        'rdb-dun84-1',
        'rdb-duniya-1984',
        'Teri Meri Zindagi',
        'Lata Mangeshkar, Kishore Kumar',
        'Duniya',
        1984
      ),
    ],
  },
  {
    id: 'rdb-sunny-1984',
    directorId: 'rd-burman',
    title: 'Sunny',
    year: 1984,
    cast: 'Sunny Deol, Amrita Singh, Dharmendra',
    songs: [
      song(
        'rdb-sun84-1',
        'rdb-sunny-1984',
        'Jaane Kya Baat Hai',
        'Lata Mangeshkar',
        'Sunny',
        1984
      ),
    ],
  },
  {
    id: 'rdb-jagir-1984',
    directorId: 'rd-burman',
    title: 'Jagir',
    year: 1984,
    cast: 'Dharmendra, Mithun Chakraborty, Zeenat Aman',
    significance: 'Bilingual Hindi/Bengali production (Bengali version: Teen Murti)',
    songs: [
      song(
        'rdb-jag84-1',
        'rdb-jagir-1984',
        'Chor Tera Naam Hai',
        'Kishore Kumar, Lata Mangeshkar',
        'Jagir',
        1984
      ),
    ],
  },
  {
    id: 'rdb-teen-murti-1984',
    directorId: 'rd-burman',
    title: 'Teen Murti (Bengali)',
    year: 1984,
    cast: 'Dharmendra, Mithun Chakraborty, Zeenat Aman',
    songs: [
      song(
        'rdb-tm84-1',
        'rdb-teen-murti-1984',
        'Poth Hok Bondhur',
        'Kishore Kumar',
        'Teen Murti Bengali',
        1984
      ),
      song(
        'rdb-tm84-2',
        'rdb-teen-murti-1984',
        'Jaano Jodi E Mon Ki Chai',
        'Asha Bhosle',
        'Teen Murti Bengali',
        1984
      ),
    ],
  },
  {
    id: 'rdb-zameen-aasmaan-1984',
    directorId: 'rd-burman',
    title: 'Zameen Aasmaan',
    year: 1984,
    cast: 'Sanjay Dutt, Shashi Kapoor, Raakhee, Rekha',
    songs: [
      song(
        'rdb-za84-1',
        'rdb-zameen-aasmaan-1984',
        'Aisa Sama Na Hota',
        'Lata Mangeshkar',
        'Zameen Aasmaan',
        1984
      ),
      song(
        'rdb-za84-2',
        'rdb-zameen-aasmaan-1984',
        'Ho Maine Dil Diya',
        'Kishore Kumar, Lata Mangeshkar',
        'Zameen Aasmaan',
        1984,
        {
          lyricist: 'Anjaan',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Pulstar',
          originalArtist: 'Vangelis',
          originalYear: '1976',
          adaptationNotes:
            'Synthesizer arpeggio backdrop and electronic theme derive directly from Greek composer Vangelis’ 1976 Albedo 0.39 track.',
          originalLink: 'https://www.youtube.com/watch?v=HaMBmBeNvtM',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-anand-aur-anand-1984',
    directorId: 'rd-burman',
    title: 'Anand Aur Anand',
    year: 1984,
    cast: 'Dev Anand, Suneil Anand, Raakhee',
    songs: [
      song(
        'rdb-aaa84-1',
        'rdb-anand-aur-anand-1984',
        'Nasha Hai Mujhe Bhi',
        'Lata Mangeshkar, Kishore Kumar',
        'Anand Aur Anand',
        1984
      ),
    ],
  },
  {
    id: 'rdb-boxer-1984',
    directorId: 'rd-burman',
    title: 'Boxer',
    year: 1984,
    cast: 'Mithun Chakraborty, Rati Agnihotri',
    songs: [
      song(
        'rdb-box84-1',
        'rdb-boxer-1984',
        'Dekh Tujhe Dil Ne',
        'Kishore Kumar, Asha Bhosle',
        'Boxer',
        1984
      ),
    ],
  },
  {
    id: 'rdb-andar-baahar-1984',
    directorId: 'rd-burman',
    title: 'Andar Baahar',
    year: 1984,
    cast: 'Anil Kapoor, Jackie Shroff, Moon Moon Sen',
    songs: [
      song(
        'rdb-ab84-1',
        'rdb-andar-baahar-1984',
        'Kaise Kaise Hai Mere Meharban',
        'Kishore Kumar, Asha Bhosle',
        'Andar Baahar',
        1984
      ),
    ],
  },
  {
    id: 'rdb-yeh-desh-1984',
    directorId: 'rd-burman',
    title: 'Yeh Desh',
    year: 1984,
    cast: 'Jeetendra, Zeenat Aman',
    songs: [
      song(
        'rdb-yd84-1',
        'rdb-yeh-desh-1984',
        'Meri Umar Ka Ek Ladka',
        'Kishore Kumar, Lata Mangeshkar',
        'Yeh Desh',
        1984
      ),
    ],
  },
  {
    id: 'rdb-awaaz-1984',
    directorId: 'rd-burman',
    title: 'Awaaz',
    year: 1984,
    cast: 'Rajesh Khanna, Jaya Prada',
    songs: [
      song(
        'rdb-aw84-1',
        'rdb-awaaz-1984',
        'Aankhon Aankhon Mein',
        'Kishore Kumar, Asha Bhosle',
        'Awaaz',
        1984
      ),
    ],
  },
  {
    id: 'rdb-jawaani-1984',
    directorId: 'rd-burman',
    title: 'Jawaani',
    year: 1984,
    cast: 'Karan Shah, Neelam Kothari',
    songs: [
      song(
        'rdb-jaw84-1',
        'rdb-jawaani-1984',
        'Tu Rootha To Main Ro Doongi Sanam',
        'Asha Bhosle, Amit Kumar',
        'Jawaani',
        1984
      ),
    ],
  },
  {
    id: 'rdb-jhutha-sach-1984',
    directorId: 'rd-burman',
    title: 'Jhutha Sach',
    year: 1984,
    cast: 'Dharmendra, Rekha',
    songs: [
      song(
        'rdb-js84-1',
        'rdb-jhutha-sach-1984',
        'Kaisi Lagti Hoon Main',
        'Kishore Kumar, Lata Mangeshkar',
        'Jhutha Sach',
        1984
      ),
    ],
  },
  {
    id: 'rdb-karishmaa-1984',
    directorId: 'rd-burman',
    title: 'Karishmaa',
    year: 1984,
    cast: 'Kamal Haasan, Reena Roy, Tina Munim',
    songs: [
      song(
        'rdb-kar84-1',
        'rdb-karishmaa-1984',
        'Khol Doongi Dil Ka Tala',
        'Asha Bhosle, Kishore Kumar',
        'Karishmaa',
        1984
      ),
    ],
  },
  {
    id: 'rdb-maati-maangey-khoon-1984',
    directorId: 'rd-burman',
    title: 'Maati Maangey Khoon',
    year: 1984,
    cast: 'Raj Babbar, Rekha',
    songs: [
      song(
        'rdb-mmk84-1',
        'rdb-maati-maangey-khoon-1984',
        'Mere Ghungroo Ki Chham Chham',
        'Asha Bhosle',
        'Maati Maangey Khoon',
        1984
      ),
    ],
  },
  {
    id: 'rdb-farishta-1984',
    directorId: 'rd-burman',
    title: 'Farishta',
    year: 1984,
    cast: 'Ashok Kumar, Pran, Kanwaljit Singh',
    songs: [
      song(
        'rdb-far84-1',
        'rdb-farishta-1984',
        'Farishta (Soundtrack)',
        'Asha Bhosle',
        'Farishta',
        1984
      ),
    ],
  },
  {
    id: 'rdb-saagar-1985',
    directorId: 'rd-burman',
    title: 'Saagar',
    year: 1985,
    cast: 'Rishi Kapoor, Kamal Haasan, Dimple Kapadia',
    significance: 'Iconic Ramesh Sippy romantic soundtrack with Javed Akhtar’s poetry',
    songs: [
      song(
        'rdb-saa85-1',
        'rdb-saagar-1985',
        'Saagar Kinare',
        'Kishore Kumar, Lata Mangeshkar',
        'Saagar',
        1985,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-saa85-2',
        'rdb-saagar-1985',
        'Chehra Hai Ya Chand Khila Hai',
        'Kishore Kumar',
        'Saagar',
        1985,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-saa85-3',
        'rdb-saagar-1985',
        'Sach Mere Yaar Hai',
        'S.P. Balasubrahmanyam',
        'Saagar',
        1985,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-saa85-4',
        'rdb-saagar-1985',
        'O Maria',
        'Asha Bhosle, S.P. Balasubrahmanyam',
        'Saagar',
        1985,
        {
          lyricist: 'Javed Akhtar',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Mamunia',
          originalArtist: 'Paul McCartney & Wings',
          originalYear: '1973',
          adaptationNotes:
            'Acoustic-pop rhythm, chorus hook, and bright melodic phrasing closely follow Paul McCartney & Wings’ Band on the Run track.',
          originalLink: 'https://www.youtube.com/watch?v=gJNKPh7_Mv0',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-arjun-1985',
    directorId: 'rd-burman',
    title: 'Arjun',
    year: 1985,
    cast: 'Sunny Deol, Dimple Kapadia',
    songs: [
      song(
        'rdb-arj85-1',
        'rdb-arjun-1985',
        'Mammaiya Kero Mama',
        'Shailendra Singh',
        'Arjun',
        1985,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-arj85-2',
        'rdb-arjun-1985',
        'Dhadkan Pal Pal Badhti Jaaye',
        'Asha Bhosle',
        'Arjun',
        1985,
        { lyricist: 'Javed Akhtar' }
      ),
    ],
  },
  {
    id: 'rdb-aar-paar-1985',
    directorId: 'rd-burman',
    title: 'Aar Paar',
    year: 1985,
    cast: 'Mithun Chakraborty, Mandakini',
    significance: 'Bilingual Hindi/Bengali production (Bengali version: Anyay Abichar)',
    songs: [
      song(
        'rdb-ap85-1',
        'rdb-aar-paar-1985',
        'Kaun Hai Tu Kaun',
        'Kishore Kumar, Asha Bhosle',
        'Aar Paar',
        1985
      ),
    ],
  },
  {
    id: 'rdb-anyay-abichar-1985',
    directorId: 'rd-burman',
    title: 'Anyay Abichar (Bengali)',
    year: 1985,
    cast: 'Mithun Chakraborty, Rozina',
    songs: [
      song(
        'rdb-aa85-1',
        'rdb-anyay-abichar-1985',
        'Mon Majhi Re',
        'Kishore Kumar',
        'Anyay Abichar Bengali',
        1985
      ),
    ],
  },
  {
    id: 'rdb-alag-alag-1985',
    directorId: 'rd-burman',
    title: 'Alag Alag',
    year: 1985,
    cast: 'Rajesh Khanna, Tina Munim, Shashi Kapoor',
    songs: [
      song(
        'rdb-aa85-h-1',
        'rdb-alag-alag-1985',
        'Kuchh Humko Tumse Kehna Hai',
        'Kishore Kumar, Lata Mangeshkar',
        'Alag Alag',
        1985
      ),
      song(
        'rdb-aa85-h-2',
        'rdb-alag-alag-1985',
        'Kabhi Bekasi Ne Maara',
        'Kishore Kumar',
        'Alag Alag',
        1985,
        {
          lyricist: 'Anand Bakshi',
          adaptationType: 'copied',
          originCategory: 'Pakistani Film & Ghazal',
          originalSongTitle: 'Kabhi Khwahishon Ne Loota',
          originalArtist: 'M. Ashraf / Akhlaq Ahmed (Meharbani)',
          originalYear: '1982',
          adaptationNotes:
            'Opening couplet phrasing and melancholic tune adapt M. Ashraf’s composition from the 1982 Pakistani film Meharbani.',
          originalLink: 'https://www.youtube.com/watch?v=dSAfJpRXgew',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-zabardast-1985',
    directorId: 'rd-burman',
    title: 'Zabardast',
    year: 1985,
    cast: 'Sunny Deol, Jaya Prada, Rajiv Kapoor, Sanjeev Kumar',
    songs: [
      song(
        'rdb-zab85-1',
        'rdb-zabardast-1985',
        'Jab Chhaha Yaara Tumne',
        'Kishore Kumar',
        'Zabardast',
        1985
      ),
    ],
  },
  {
    id: 'rdb-hum-dono-1985',
    directorId: 'rd-burman',
    title: 'Hum Dono',
    year: 1985,
    cast: 'Rajesh Khanna, Hema Malini, Reena Roy',
    songs: [
      song(
        'rdb-hd85-1',
        'rdb-hum-dono-1985',
        'Sunle Zameen Aasman',
        'Kishore Kumar',
        'Hum Dono',
        1985
      ),
    ],
  },
  {
    id: 'rdb-ram-tere-kitne-nam-1985',
    directorId: 'rd-burman',
    title: 'Ram Tere Kitne Nam',
    year: 1985,
    cast: 'Sanjeev Kumar, Rekha',
    songs: [
      song(
        'rdb-rtkn85-1',
        'rdb-ram-tere-kitne-nam-1985',
        'Machal Machal Jaata Hai',
        'Lata Mangeshkar',
        'Ram Tere Kitne Nam',
        1985
      ),
    ],
  },
  {
    id: 'rdb-awara-baap-1985',
    directorId: 'rd-burman',
    title: 'Awara Baap',
    year: 1985,
    cast: 'Rajesh Khanna, Meenakshi Seshadri',
    songs: [
      song(
        'rdb-ab85-1',
        'rdb-awara-baap-1985',
        'Kahan Se Aaye Badra',
        'Kishore Kumar',
        'Awara Baap',
        1985
      ),
    ],
  },
  {
    id: 'rdb-ek-se-bhale-do-1985',
    directorId: 'rd-burman',
    title: 'Ek Se Bhale Do',
    year: 1985,
    cast: 'Shammi Kapoor, Rati Agnihotri, Kumar Gaurav',
    songs: [
      song(
        'rdb-esbd85-1',
        'rdb-ek-se-bhale-do-1985',
        'Aaya Re Aaya',
        'Kishore Kumar, Asha Bhosle',
        'Ek Se Bhale Do',
        1985
      ),
    ],
  },
  {
    id: 'rdb-sitamgar-1985',
    directorId: 'rd-burman',
    title: 'Sitamgar',
    year: 1985,
    cast: 'Dharmendra, Rishi Kapoor, Parveen Babi, Poonam Dhillon',
    songs: [
      song(
        'rdb-sit85-1',
        'rdb-sitamgar-1985',
        'Mausam Pyar Ka',
        'Kishore Kumar, Asha Bhosle',
        'Sitamgar',
        1985
      ),
    ],
  },
  {
    id: 'rdb-lavaa-1985',
    directorId: 'rd-burman',
    title: 'Lavaa',
    year: 1985,
    cast: 'Rajeev Kapoor, Dimple Kapadia, Asha Parekh',
    songs: [
      song(
        'rdb-lav85-1',
        'rdb-lavaa-1985',
        'Hum Tum Dono Milke',
        'Kishore Kumar, Asha Bhosle',
        'Lavaa',
        1985
      ),
    ],
  },
  {
    id: 'rdb-oonche-log-1985',
    directorId: 'rd-burman',
    title: 'Oonche Log',
    year: 1985,
    cast: 'Rajesh Khanna, Salma Agha',
    songs: [
      song(
        'rdb-ol85-1',
        'rdb-oonche-log-1985',
        'Aaj Tu Gair Sahi',
        'Kishore Kumar',
        'Oonche Log',
        1985,
        {
          lyricist: 'Anjaan',
          adaptationType: 'copied',
          originCategory: 'Pakistani Film & Ghazal',
          originalSongTitle: 'Aaj Tu Ghair Sahi',
          originalArtist: 'Kemal Ahmad / Mehdi Hassan (Dehleez)',
          originalYear: '1983',
          adaptationNotes:
            'Reworks Kemal Ahmad’s melody and Tasleem Fazli’s opening refrain originally sung by Mehdi Hassan for the 1983 Pakistani film Dehleez.',
          originalLink: 'https://www.youtube.com/watch?v=4IKlg65-puQ',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
    ],
  },
  {
    id: 'rdb-hum-naujawan-1985',
    directorId: 'rd-burman',
    title: 'Hum Naujawan',
    year: 1985,
    cast: 'Dev Anand, Richa Sharma, Tabu',
    songs: [
      song(
        'rdb-hn85-1',
        'rdb-hum-naujawan-1985',
        'Hum Naujawan (Title)',
        'Kishore Kumar',
        'Hum Naujawan',
        1985
      ),
    ],
  },
  {
    id: 'rdb-shiva-ka-insaaf-1985',
    directorId: 'rd-burman',
    title: 'Shiva Ka Insaaf',
    year: 1985,
    cast: 'Jackie Shroff, Poonam Dhillon',
    songs: [
      song(
        'rdb-ski85-1',
        'rdb-shiva-ka-insaaf-1985',
        'Aankhon Hi Aankhon Mein',
        'Mohammed Aziz, Asha Bhosle',
        'Shiva Ka Insaaf',
        1985
      ),
    ],
  },
  {
    id: 'rdb-jeeva-1986',
    directorId: 'rd-burman',
    title: 'Jeeva',
    year: 1986,
    cast: 'Sanjay Dutt, Mandakini',
    songs: [
      song(
        'rdb-jee86-1',
        'rdb-jeeva-1986',
        'Roz Roz Aankhon Tale',
        'Asha Bhosle, Amit Kumar',
        'Jeeva',
        1986,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-ek-main-aur-ek-tu-1986',
    directorId: 'rd-burman',
    title: 'Ek Main Aur Ek Tu',
    year: 1986,
    cast: 'Rajiv Kapoor, Rubina',
    songs: [
      song(
        'rdb-emaet86-1',
        'rdb-ek-main-aur-ek-tu-1986',
        'Main Deewana Tu Deewani',
        'Asha Bhosle, Shabbir Kumar',
        'Ek Main Aur Ek Tu',
        1986
      ),
    ],
  },
  {
    id: 'rdb-shatru-1986',
    directorId: 'rd-burman',
    title: 'Shatru',
    year: 1986,
    cast: 'Rajesh Khanna, Shabana Azmi',
    songs: [
      song(
        'rdb-sha86-1',
        'rdb-shatru-1986',
        'Tere Aanchal Mein',
        'Lata Mangeshkar',
        'Shatru',
        1986
      ),
    ],
  },
  {
    id: 'rdb-anokha-rishta-1986',
    directorId: 'rd-burman',
    title: 'Anokha Rishta',
    year: 1986,
    cast: 'Rajesh Khanna, Smita Patil',
    songs: [
      song(
        'rdb-ar86-1',
        'rdb-anokha-rishta-1986',
        'Mera Saaya Chhaya Hai',
        'Asha Bhosle',
        'Anokha Rishta',
        1986
      ),
    ],
  },
  {
    id: 'rdb-palay-khan-1986',
    directorId: 'rd-burman',
    title: 'Palay Khan',
    year: 1986,
    cast: 'Jackie Shroff, Poonam Dhillon',
    songs: [
      song(
        'rdb-pk86-1',
        'rdb-palay-khan-1986',
        'Allah Kare Maula Kare',
        'Suresh Wadkar',
        'Palay Khan',
        1986
      ),
    ],
  },
  {
    id: 'rdb-samundar-1986',
    directorId: 'rd-burman',
    title: 'Samundar',
    year: 1986,
    cast: 'Sunny Deol, Poonam Dhillon',
    songs: [
      song(
        'rdb-sam86-1',
        'rdb-samundar-1986',
        'Ae Sagar Ki Laheron',
        'Kishore Kumar, Lata Mangeshkar',
        'Samundar',
        1986
      ),
    ],
  },
  {
    id: 'rdb-saveraywali-gaadi-1986',
    directorId: 'rd-burman',
    title: 'Saveraywali Gaadi',
    year: 1986,
    cast: 'Sunny Deol, Poonam Dhillon',
    songs: [
      song(
        'rdb-sg86-1',
        'rdb-saveraywali-gaadi-1986',
        'Din Pyar Ke Aayenge',
        'Lata Mangeshkar, Suresh Wadkar',
        'Saveraywali Gaadi',
        1986
      ),
    ],
  },
  {
    id: 'rdb-musafir-1986',
    directorId: 'rd-burman',
    title: 'Musafir',
    year: 1986,
    cast: 'Rekha, Naseeruddin Shah, Moon Moon Sen',
    songs: [
      song(
        'rdb-mus86-1',
        'rdb-musafir-1986',
        'Mahiya Mahiya',
        'Asha Bhosle',
        'Musafir',
        1986
      ),
    ],
  },
  {
    id: 'rdb-bond-303-1986',
    directorId: 'rd-burman',
    title: 'Bond 303',
    year: 1986,
    cast: 'Jeetendra, Parveen Babi',
    songs: [
      song(
        'rdb-b303-86-1',
        'rdb-bond-303-1986',
        'Main Hoon Bond 303',
        'Kishore Kumar',
        'Bond 303',
        1986
      ),
    ],
  },
  {
    id: 'rdb-ijaazat-1987',
    directorId: 'rd-burman',
    title: 'Ijaazat',
    year: 1987,
    cast: 'Naseeruddin Shah, Rekha, Anuradha Patel',
    significance: 'National Award-winning Gulzar–R.D. Burman–Asha Bhosle classic',
    songs: [
      song(
        'rdb-ij87-1',
        'rdb-ijaazat-1987',
        'Mera Kuchh Saamaan',
        'Asha Bhosle',
        'Ijaazat',
        1987,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-ij87-2',
        'rdb-ijaazat-1987',
        'Katra Katra Milti Hai',
        'Asha Bhosle',
        'Ijaazat',
        1987,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-ij87-3',
        'rdb-ijaazat-1987',
        'Chhoti Si Kahani Se',
        'Asha Bhosle',
        'Ijaazat',
        1987,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-dacait-1987',
    directorId: 'rd-burman',
    title: 'Dacait',
    year: 1987,
    cast: 'Sunny Deol, Meenakshi Seshadri',
    songs: [
      song(
        'rdb-dac87-1',
        'rdb-dacait-1987',
        'Mere Yaar Ko Mere Allah',
        'Suresh Wadkar, Shabbir Kumar',
        'Dacait',
        1987
      ),
    ],
  },
  {
    id: 'rdb-hifazat-1987',
    directorId: 'rd-burman',
    title: 'Hifazat',
    year: 1987,
    cast: 'Anil Kapoor, Madhuri Dixit',
    songs: [
      song(
        'rdb-hif87-1',
        'rdb-hifazat-1987',
        'Batata Wada',
        'S.P. Balasubrahmanyam, Asha Bhosle',
        'Hifazat',
        1987
      ),
    ],
  },
  {
    id: 'rdb-apne-apne-1987',
    directorId: 'rd-burman',
    title: 'Apne Apne',
    year: 1987,
    cast: 'Jeetendra, Rekha, Hema Malini',
    songs: [
      song(
        'rdb-aa87-1',
        'rdb-apne-apne-1987',
        'Apne Apne Se Lage',
        'Lata Mangeshkar, Suresh Wadkar',
        'Apne Apne',
        1987
      ),
    ],
  },
  {
    id: 'rdb-inaam-dus-hazaar-1987',
    directorId: 'rd-burman',
    title: 'Inaam Dus Hazaar',
    year: 1987,
    cast: 'Sanjay Dutt, Meenakshi Seshadri',
    songs: [
      song(
        'rdb-idh87-1',
        'rdb-inaam-dus-hazaar-1987',
        'Chand Koi Hoga Tumsa Kahan',
        'Kishore Kumar, Asha Bhosle',
        'Inaam Dus Hazaar',
        1987
      ),
    ],
  },
  {
    id: 'rdb-ekanto-apon-1987',
    directorId: 'rd-burman',
    title: 'Ekanto Apon (Bengali)',
    year: 1987,
    cast: 'Victor Banerjee, Aparna Sen',
    songs: [
      song(
        'rdb-ea87-1',
        'rdb-ekanto-apon-1987',
        'Khelbo Holi Rang Debo Na',
        'Asha Bhosle, Kavita Krishnamurthy',
        'Ekanto Apon Bengali',
        1987
      ),
    ],
  },
  {
    id: 'rdb-libaas-1988',
    directorId: 'rd-burman',
    title: 'Libaas',
    year: 1988,
    cast: 'Naseeruddin Shah, Shabana Azmi, Raj Babbar',
    songs: [
      song(
        'rdb-lib88-1',
        'rdb-libaas-1988',
        'Sili Hawa Chhoo Gayi',
        'Lata Mangeshkar',
        'Libaas',
        1988,
        { lyricist: 'Gulzar' }
      ),
      song(
        'rdb-lib88-2',
        'rdb-libaas-1988',
        'Khamosh Sa Afsana',
        'Lata Mangeshkar, Suresh Wadkar',
        'Libaas',
        1988,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-rama-o-rama-1988',
    directorId: 'rd-burman',
    title: 'Rama O Rama',
    year: 1988,
    cast: 'Raj Babbar, Aasif Sheikh, Kimi Katkar',
    songs: [
      song(
        'rdb-ror88-1',
        'rdb-rama-o-rama-1988',
        'Rama O Rama',
        'Amit Kumar',
        'Rama O Rama',
        1988
      ),
    ],
  },
  {
    id: 'rdb-zalzala-1988',
    directorId: 'rd-burman',
    title: 'Zalzala',
    year: 1988,
    cast: 'Dharmendra, Shatrughan Sinha, Kimi Katkar',
    songs: [
      song(
        'rdb-zal88-1',
        'rdb-zalzala-1988',
        'Are Chakoo Chale',
        'Asha Bhosle, Kishore Kumar',
        'Zalzala',
        1988
      ),
    ],
  },
  {
    id: 'rdb-mardonwali-baat-1988',
    directorId: 'rd-burman',
    title: 'Mardonwali Baat',
    year: 1988,
    cast: 'Dharmendra, Sanjay Dutt, Jaya Prada',
    songs: [
      song(
        'rdb-mwb88-1',
        'rdb-mardonwali-baat-1988',
        'Saajan Mera Us Paar Hai',
        'Lata Mangeshkar',
        'Mardonwali Baat',
        1988
      ),
    ],
  },
  {
    id: 'rdb-namumkin-1988',
    directorId: 'rd-burman',
    title: 'Namumkin',
    year: 1988,
    cast: 'Raj Babbar, Vinod Mehra, Zeenat Aman',
    songs: [
      song(
        'rdb-nam88-1',
        'rdb-namumkin-1988',
        'Ae Zindagi',
        'Anuradha Paudwal',
        'Namumkin',
        1988
      ),
    ],
  },
  {
    id: 'rdb-aagoon-1988',
    directorId: 'rd-burman',
    title: 'Aagoon (Bengali)',
    year: 1988,
    cast: 'Victor Banerjee, Soumitra Chatterjee, Tanuja',
    songs: [
      song(
        'rdb-aag88-1',
        'rdb-aagoon-1988',
        'Aagoon (Bengali Soundtrack)',
        'Asha Bhosle',
        'Aagoon Bengali',
        1988
      ),
    ],
  },
  {
    id: 'rdb-parinda-1989',
    directorId: 'rd-burman',
    title: 'Parinda',
    year: 1989,
    cast: 'Jackie Shroff, Anil Kapoor, Madhuri Dixit, Nana Patekar',
    significance: 'Vidhu Vinod Chopra crime-drama classic featuring Tumse Milke Aisa Laga',
    songs: [
      song(
        'rdb-par89-1',
        'rdb-parinda-1989',
        'Tumse Milke Aisa Laga',
        'Suresh Wadkar, Asha Bhosle',
        'Parinda',
        1989,
        {
          lyricist: 'Khurshid Hallauri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'When I Need You',
          originalArtist: 'Leo Sayer',
          originalYear: '1976',
          adaptationNotes:
            'Opening hook and ballad contour closely follow Leo Sayer’s 1976 soft-rock hit.',
          originalLink: 'https://www.youtube.com/watch?v=obC0MFHWJ0A',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'rdb-par89-2',
        'rdb-parinda-1989',
        'Kitni Hai Pyari Pyari',
        'Suresh Wadkar, Shailendra Singh',
        'Parinda',
        1989
      ),
    ],
  },
  {
    id: 'rdb-joshilaay-1989',
    directorId: 'rd-burman',
    title: 'Joshilaay',
    year: 1989,
    cast: 'Sunny Deol, Anil Kapoor, Sridevi, Meenakshi Seshadri',
    songs: [
      song(
        'rdb-jos89-1',
        'rdb-joshilaay-1989',
        'Dhoom Dhoom Lak Lak',
        'Asha Bhosle',
        'Joshilaay',
        1989
      ),
    ],
  },
  {
    id: 'rdb-aag-se-khelenge-1989',
    directorId: 'rd-burman',
    title: 'Aag Se Khelenge',
    year: 1989,
    cast: 'Jeetendra, Anil Kapoor, Meenakshi Seshadri, Kimi Katkar',
    songs: [
      song(
        'rdb-ask89-1',
        'rdb-aag-se-khelenge-1989',
        'Chhede Been Sapera',
        'Asha Bhosle, Amit Kumar, Udit Narayan',
        'Aag Se Khelenge',
        1989
      ),
    ],
  },
  {
    id: 'rdb-dost-1989',
    directorId: 'rd-burman',
    title: 'Dost',
    year: 1989,
    cast: 'Mithun Chakraborty, Amala Akkineni',
    songs: [
      song(
        'rdb-dos89-1',
        'rdb-dost-1989',
        'Aaya Hoon Main Tujhko Lene',
        'Amit Kumar, Alka Yagnik',
        'Dost',
        1989
      ),
    ],
  },
  {
    id: 'rdb-mil-gayee-manzil-mujhe-1989',
    directorId: 'rd-burman',
    title: 'Mil Gayee Manzil Mujhe',
    year: 1989,
    cast: 'Mithun Chakraborty, Moon Moon Sen',
    songs: [
      song(
        'rdb-mgmm89-1',
        'rdb-mil-gayee-manzil-mujhe-1989',
        'Yeh Zindagi Ka Safar',
        'Kishore Kumar, Asha Bhosle',
        'Mil Gayee Manzil Mujhe',
        1989
      ),
    ],
  },
  {
    id: 'rdb-bahurani-1989',
    directorId: 'rd-burman',
    title: 'Bahurani',
    year: 1989,
    cast: 'Rekha, Utpal Dutt',
    songs: [
      song(
        'rdb-bah89-1',
        'rdb-bahurani-1989',
        'Bahurani (Soundtrack)',
        'Asha Bhosle',
        'Bahurani',
        1989
      ),
    ],
  },
  {
    id: 'rdb-aakrosh-bengali-1989',
    directorId: 'rd-burman',
    title: 'Aakrosh (Bengali)',
    year: 1989,
    cast: 'Victor Banerjee, Debashree Roy',
    songs: [
      song(
        'rdb-aak89-1',
        'rdb-aakrosh-bengali-1989',
        'Aakrosh (Bengali Soundtrack)',
        'Asha Bhosle',
        'Aakrosh Bengali',
        1989
      ),
    ],
  },
  {
    id: 'rdb-jhankar-bengali-1989',
    directorId: 'rd-burman',
    title: 'Jhankar (Bengali)',
    year: 1989,
    songs: [
      song(
        'rdb-jha89-1',
        'rdb-jhankar-bengali-1989',
        'Jhankar (Bengali Soundtrack)',
        'Asha Bhosle, Amit Kumar',
        'Jhankar Bengali',
        1989
      ),
    ],
  },
  {
    id: 'rdb-shatarupa-bengali-1989',
    directorId: 'rd-burman',
    title: 'Shatarupa (Bengali)',
    year: 1989,
    songs: [
      song(
        'rdb-sha89-1',
        'rdb-shatarupa-bengali-1989',
        'Shatarupa (Bengali Soundtrack)',
        'Asha Bhosle',
        'Shatarupa Bengali',
        1989
      ),
    ],
  },
  {
    id: 'rdb-chinni-krishnudu-1989',
    directorId: 'rd-burman',
    title: 'Chinni Krishnudu (Telugu)',
    year: 1989,
    cast: 'Ramesh Babu, Khushbu',
    significance: 'One of R.D. Burman’s three Telugu feature film scores',
    songs: [
      song(
        'rdb-ck89-1',
        'rdb-chinni-krishnudu-1989',
        'Mouname Priya Dhyanamai',
        'S.P. Balasubrahmanyam, Asha Bhosle',
        'Chinni Krishnudu Telugu',
        1989
      ),
    ],
  },
  {
    id: 'rdb-neerajanam-1989',
    directorId: 'rd-burman',
    title: 'Neerajanam (Telugu)',
    year: 1989,
    significance: 'One of R.D. Burman’s three Telugu feature film scores',
    songs: [
      song(
        'rdb-nee89-1',
        'rdb-neerajanam-1989',
        'Neerajanam (Telugu Soundtrack)',
        'S.P. Balasubrahmanyam',
        'Neerajanam Telugu',
        1989
      ),
    ],
  },

  // =========================================================================
  // 1990 – 1997: Final Years, Regional Peaks & Posthumous Swan Songs
  // =========================================================================
  {
    id: 'rdb-chor-pe-mor-1990',
    directorId: 'rd-burman',
    title: 'Chor Pe Mor',
    year: 1990,
    cast: 'Naseeruddin Shah, Karan Shah, Neelam Kothari',
    songs: [
      song(
        'rdb-cpm90-1',
        'rdb-chor-pe-mor-1990',
        'Woh Bhi Kya Din The',
        'Amit Kumar, Asha Bhosle',
        'Chor Pe Mor',
        1990
      ),
    ],
  },
  {
    id: 'rdb-jeene-do-1990',
    directorId: 'rd-burman',
    title: 'Jeene Do',
    year: 1990,
    cast: 'Jackie Shroff, Sanjay Dutt, Farha Naaz',
    songs: [
      song(
        'rdb-jd90-1',
        'rdb-jeene-do-1990',
        'Sari Raat Teri Yaad Sataye',
        'Mohammed Aziz, Anuradha Paudwal',
        'Jeene Do',
        1990
      ),
    ],
  },
  {
    id: 'rdb-dushman-1990',
    directorId: 'rd-burman',
    title: 'Dushman',
    year: 1990,
    cast: 'Mithun Chakraborty, Mandakini',
    significance: 'Bilingual Hindi/Bengali release (Bengali version: Andha Bichar)',
    songs: [
      song(
        'rdb-dus90-1',
        'rdb-dushman-1990',
        'Hoton Pe Tera Naam Hai',
        'Amit Kumar, Sadhana Sargam',
        'Dushman',
        1990
      ),
    ],
  },
  {
    id: 'rdb-andha-bichar-1990',
    directorId: 'rd-burman',
    title: 'Andha Bichar (Bengali)',
    year: 1990,
    cast: 'Mithun Chakraborty, Sabina Yasmin',
    songs: [
      song(
        'rdb-ab90-1',
        'rdb-andha-bichar-1990',
        'Andha Bichar (Bengali Soundtrack)',
        'Amit Kumar, Asha Bhosle',
        'Andha Bichar Bengali',
        1990
      ),
    ],
  },
  {
    id: 'rdb-apon-amar-apon-1990',
    directorId: 'rd-burman',
    title: 'Apon Amar Apon (Bengali)',
    year: 1990,
    cast: 'Prosenjit Chatterjee, Satabdi Roy',
    songs: [
      song(
        'rdb-aaa90-1',
        'rdb-apon-amar-apon-1990',
        'Apon Amar Apon (Bengali Soundtrack)',
        'Asha Bhosle, Amit Kumar',
        'Apon Amar Apon Bengali',
        1990
      ),
    ],
  },
  {
    id: 'rdb-ekhane-aamar-swarga-1990',
    directorId: 'rd-burman',
    title: 'Ekhane Aamar Swarga (Bengali)',
    year: 1990,
    songs: [
      song(
        'rdb-eas90-1',
        'rdb-ekhane-aamar-swarga-1990',
        'Ekhane Aamar Swarga (Bengali Soundtrack)',
        'Asha Bhosle',
        'Ekhane Aamar Swarga Bengali',
        1990
      ),
    ],
  },
  {
    id: 'rdb-lorai-1990',
    directorId: 'rd-burman',
    title: 'Lorai (Bengali)',
    year: 1990,
    songs: [
      song(
        'rdb-lor90-1',
        'rdb-lorai-1990',
        'Lorai (Bengali Soundtrack)',
        'Asha Bhosle, Amit Kumar',
        'Lorai Bengali',
        1990
      ),
    ],
  },
  {
    id: 'rdb-antham-1990',
    directorId: 'rd-burman',
    title: 'Antham (Telugu)',
    year: 1990,
    cast: 'Nagarjuna, Urmila Matondkar',
    significance: 'Directed by Ram Gopal Varma; one of Pancham’s final Telugu scores (Hindi: Drohi)',
    songs: [
      song(
        'rdb-ant90-1',
        'rdb-antham-1990',
        'Kammani Geetale',
        'S.P. Balasubrahmanyam, Chitra',
        'Antham Telugu',
        1990
      ),
    ],
  },
  {
    id: 'rdb-poo-mazai-pozhiyuthu-1990',
    directorId: 'rd-burman',
    title: 'Poo Mazai Pozhiyuthu (Tamil)',
    year: 1990,
    significance: 'One of R.D. Burman’s two Tamil feature film scores',
    songs: [
      song(
        'rdb-pmp90-1',
        'rdb-poo-mazai-pozhiyuthu-1990',
        'Poo Mazai Pozhiyuthu (Tamil Soundtrack)',
        'S.P. Balasubrahmanyam',
        'Poo Mazai Pozhiyuthu Tamil',
        1990
      ),
    ],
  },
  {
    id: 'rdb-ulagam-pirandadu-enakkagha-1990',
    directorId: 'rd-burman',
    title: 'Ulagam Pirandadu Enakkagha (Tamil)',
    year: 1990,
    cast: 'Sathyaraj, Gautami',
    significance: 'One of R.D. Burman’s two Tamil feature film scores',
    songs: [
      song(
        'rdb-upe90-1',
        'rdb-ulagam-pirandadu-enakkagha-1990',
        'Adada Vayasupulle',
        'R.D. Burman, S. Janaki',
        'Ulagam Pirandadu Enakkagha Tamil',
        1990
      ),
    ],
  },
  {
    id: 'rdb-indrajeet-1991',
    directorId: 'rd-burman',
    title: 'Indrajeet',
    year: 1991,
    cast: 'Amitabh Bachchan, Jaya Prada, Kumar Gaurav, Neelam Kothari',
    songs: [
      song(
        'rdb-ind91-1',
        'rdb-indrajeet-1991',
        'Main Na Jhooth Boloon',
        'Asha Bhosle, Amit Kumar',
        'Indrajeet',
        1991
      ),
    ],
  },
  {
    id: 'rdb-gunehgar-kaun-1991',
    directorId: 'rd-burman',
    title: 'Gunehgar Kaun',
    year: 1991,
    cast: 'Raj Babbar, Sujata Mehta',
    songs: [
      song(
        'rdb-gk91-1',
        'rdb-gunehgar-kaun-1991',
        'Rona Mujhe Aata Hai',
        'Sadhana Sargam, Kumar Sanu',
        'Gunehgar Kaun',
        1991
      ),
    ],
  },
  {
    id: 'rdb-ananda-niketan-1991',
    directorId: 'rd-burman',
    title: 'Ananda Niketan (Bengali)',
    year: 1991,
    cast: 'Sanjay Mitra, Suparna Anand',
    songs: [
      song(
        'rdb-an91-1',
        'rdb-ananda-niketan-1991',
        'Ananda Niketan (Bengali Soundtrack)',
        'Asha Bhosle',
        'Ananda Niketan Bengali',
        1991,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'rdb-bourani-1991',
    directorId: 'rd-burman',
    title: 'Bourani (Bengali)',
    year: 1991,
    songs: [
      song(
        'rdb-bou91-1',
        'rdb-bourani-1991',
        'Bourani (Bengali Soundtrack)',
        'Asha Bhosle',
        'Bourani Bengali',
        1991
      ),
    ],
  },
  {
    id: 'rdb-krodhi-1991',
    directorId: 'rd-burman',
    title: 'Krodhi (Bengali)',
    year: 1991,
    songs: [
      song(
        'rdb-kro91-1',
        'rdb-krodhi-1991',
        'Krodhi (Bengali Soundtrack)',
        'Amit Kumar, Asha Bhosle',
        'Krodhi Bengali',
        1991
      ),
    ],
  },
  {
    id: 'rdb-debota-1991',
    directorId: 'rd-burman',
    title: 'Debota (Bengali)',
    year: 1991,
    songs: [
      song(
        'rdb-deb91-1',
        'rdb-debota-1991',
        'Debota (Bengali Soundtrack)',
        'Kumar Sanu, Asha Bhosle',
        'Debota Bengali',
        1991
      ),
    ],
  },
  {
    id: 'rdb-ahankar-1991',
    directorId: 'rd-burman',
    title: 'Ahankar (Bengali)',
    year: 1991,
    songs: [
      song(
        'rdb-aha91-1',
        'rdb-ahankar-1991',
        'Ahankar (Bengali Soundtrack)',
        'Asha Bhosle',
        'Ahankar Bengali',
        1991
      ),
    ],
  },
  {
    id: 'rdb-nabab-1991',
    directorId: 'rd-burman',
    title: 'Nabab (Bengali)',
    year: 1991,
    songs: [
      song(
        'rdb-nab91-1',
        'rdb-nabab-1991',
        'Nabab (Bengali Soundtrack)',
        'Amit Kumar, Asha Bhosle',
        'Nabab Bengali',
        1991
      ),
    ],
  },
  {
    id: 'rdb-jhoothi-shaan-1992',
    directorId: 'rd-burman',
    title: 'Jhoothi Shaan',
    year: 1992,
    cast: 'Mithun Chakraborty, Poonam Dhillon, Shabana Azmi',
    songs: [
      song(
        'rdb-js92-1',
        'rdb-jhoothi-shaan-1992',
        'Rani Ki Nikli Sawaari',
        'Asha Bhosle, Amit Kumar',
        'Jhoothi Shaan',
        1992
      ),
    ],
  },
  {
    id: 'rdb-khule-aam-1992',
    directorId: 'rd-burman',
    title: 'Khule-Aam',
    year: 1992,
    cast: 'Dharmendra, Neelam Kothari, Chunky Pandey',
    songs: [
      song(
        'rdb-ka92-1',
        'rdb-khule-aam-1992',
        'Mohabbat Mein Hum Kya Kar Bethe',
        'Asha Bhosle, Gautham Roy',
        'Khule-Aam',
        1992
      ),
    ],
  },
  {
    id: 'rdb-sarphira-1992',
    directorId: 'rd-burman',
    title: 'Sarphira',
    year: 1992,
    cast: 'Sanjay Dutt, Madhavi, Kimi Katkar',
    songs: [
      song(
        'rdb-sar92-1',
        'rdb-sarphira-1992',
        'Deewane O Deewane',
        'Asha Bhosle, Mohammed Aziz',
        'Sarphira',
        1992
      ),
    ],
  },
  {
    id: 'rdb-drohi-1992',
    directorId: 'rd-burman',
    title: 'Drohi',
    year: 1992,
    cast: 'Nagarjuna, Urmila Matondkar, Danny Denzongpa',
    significance: 'Hindi companion to Telugu Antham (1990/1992) directed by Ram Gopal Varma',
    songs: [
      song(
        'rdb-dro92-1',
        'rdb-drohi-1992',
        'Tum Jo Mile To Laga Hai',
        'Asha Bhosle, Kumar Sanu',
        'Drohi',
        1992
      ),
    ],
  },
  {
    id: 'rdb-shwet-pathorer-thala-1992',
    directorId: 'rd-burman',
    title: 'Shwet Pathorer Thala (Bengali)',
    year: 1992,
    cast: 'Aparna Sen, Sabyasachi Chakraborty',
    significance: 'National Film Award-winning Bengali cinema landmark',
    songs: [
      song(
        'rdb-spt92-1',
        'rdb-shwet-pathorer-thala-1992',
        'Shwet Pathorer Thala (Bengali Soundtrack)',
        'Asha Bhosle',
        'Shwet Pathorer Thala Bengali',
        1992
      ),
    ],
  },
  {
    id: 'rdb-maa-bengali-oriya-1992',
    directorId: 'rd-burman',
    title: 'Maa (Bengali / Oriya)',
    year: 1992,
    significance: 'Simultaneous Bengali and Oriya release',
    songs: [
      song(
        'rdb-maa92-1',
        'rdb-maa-bengali-oriya-1992',
        'Maa (Bengali / Oriya Soundtrack)',
        'Asha Bhosle',
        'Maa Oriya Bengali',
        1992
      ),
    ],
  },
  {
    id: 'rdb-purushottam-baadshaah-1992',
    directorId: 'rd-burman',
    title: 'Purushottam / Baadshaah (Bengali / Oriya)',
    year: 1992,
    cast: 'Prosenjit Chatterjee, Debashree Roy',
    significance: 'Simultaneous Bengali (Purushottam) and Oriya (Baadshaah) release',
    songs: [
      song(
        'rdb-pur92-1',
        'rdb-purushottam-baadshaah-1992',
        'Purushottam / Baadshaah (Soundtrack)',
        'Kumar Sanu, Asha Bhosle',
        'Purushottam Bengali',
        1992
      ),
    ],
  },
  {
    id: 'rdb-puroshkar-bengali-1992',
    directorId: 'rd-burman',
    title: 'Puroshkar (Bengali)',
    year: 1992,
    songs: [
      song(
        'rdb-puro92-1',
        'rdb-puroshkar-bengali-1992',
        'Puroshkar (Bengali Soundtrack)',
        'Asha Bhosle',
        'Puroshkar Bengali',
        1992
      ),
    ],
  },
  {
    id: 'rdb-adhikaar-bengali-1992',
    directorId: 'rd-burman',
    title: 'Adhikaar (Bengali)',
    year: 1992,
    songs: [
      song(
        'rdb-adh92-1',
        'rdb-adhikaar-bengali-1992',
        'Adhikaar (Bengali Soundtrack)',
        'Asha Bhosle',
        'Adhikaar Bengali',
        1992
      ),
    ],
  },
  {
    id: 'rdb-gardish-1993',
    directorId: 'rd-burman',
    title: 'Gardish',
    year: 1993,
    cast: 'Jackie Shroff, Dimple Kapadia, Aishwarya',
    songs: [
      song(
        'rdb-gar93-1',
        'rdb-gardish-1993',
        'Hum Na Samjhe The Baat Itni Si',
        'S.P. Balasubrahmanyam',
        'Gardish',
        1993,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-gar93-2',
        'rdb-gardish-1993',
        'Yeh Mera Dil To Pagal Hai',
        'Asha Bhosle, S.P. Balasubrahmanyam',
        'Gardish',
        1993,
        { lyricist: 'Javed Akhtar' }
      ),
    ],
  },
  {
    id: 'rdb-gurudev-1993',
    directorId: 'rd-burman',
    title: 'Gurudev',
    year: 1993,
    cast: 'Rishi Kapoor, Anil Kapoor, Sridevi',
    songs: [
      song(
        'rdb-gur93-1',
        'rdb-gurudev-1993',
        'Aaja Re Aaja',
        'Asha Bhosle, Shailendra Singh',
        'Gurudev',
        1993
      ),
    ],
  },
  {
    id: 'rdb-tum-karo-vaada-1993',
    directorId: 'rd-burman',
    title: 'Tum Karo Vaada',
    year: 1993,
    cast: 'Shammi Kapoor, Raaj Kumar',
    songs: [
      song(
        'rdb-tkv93-1',
        'rdb-tum-karo-vaada-1993',
        'Tum Karo Vaada',
        'Kumar Sanu, Asha Bhosle',
        'Tum Karo Vaada',
        1993
      ),
    ],
  },
  {
    id: 'rdb-shesh-cheethi-1993',
    directorId: 'rd-burman',
    title: 'Shesh Cheethi (Bengali)',
    year: 1993,
    songs: [
      song(
        'rdb-sc93-1',
        'rdb-shesh-cheethi-1993',
        'Shesh Cheethi (Bengali Soundtrack)',
        'Asha Bhosle',
        'Shesh Cheethi Bengali',
        1993
      ),
    ],
  },
  {
    id: 'rdb-shraddhanjali-1993',
    directorId: 'rd-burman',
    title: 'Shraddhanjali (Bengali)',
    year: 1993,
    songs: [
      song(
        'rdb-shr93-1',
        'rdb-shraddhanjali-1993',
        'Shraddhanjali (Bengali Soundtrack)',
        'Asha Bhosle',
        'Shraddhanjali Bengali',
        1993
      ),
    ],
  },
  {
    id: 'rdb-1942-a-love-story-1994',
    directorId: 'rd-burman',
    title: '1942: A Love Story',
    year: 1994,
    cast: 'Anil Kapoor, Manisha Koirala, Jackie Shroff',
    label: 'HMV / Saregama',
    significance: 'Posthumous Filmfare Award Winner — R.D. Burman’s immortal romantic swan song',
    songs: [
      song(
        'rdb-1942-1',
        'rdb-1942-a-love-story-1994',
        'Ek Ladki Ko Dekha To Aisa Laga',
        'Kumar Sanu',
        '1942 A Love Story',
        1994,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-1942-2',
        'rdb-1942-a-love-story-1994',
        'Kuchh Na Kaho',
        'Kumar Sanu, Lata Mangeshkar',
        '1942 A Love Story',
        1994,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-1942-3',
        'rdb-1942-a-love-story-1994',
        'Rim Jhim Rim Jhim',
        'Kumar Sanu, Kavita Krishnamurthy',
        '1942 A Love Story',
        1994,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'rdb-1942-4',
        'rdb-1942-a-love-story-1994',
        'Pyar Hua Chupke Se',
        'Kavita Krishnamurthy',
        '1942 A Love Story',
        1994,
        { lyricist: 'Javed Akhtar' }
      ),
    ],
  },
  {
    id: 'rdb-professor-ki-padosan-1994',
    directorId: 'rd-burman',
    title: 'Professor Ki Padosan',
    year: 1994,
    cast: 'Sanjeev Kumar, Asha Parekh, Padmini Kolhapure',
    songs: [
      song(
        'rdb-pkp94-1',
        'rdb-professor-ki-padosan-1994',
        'Main Hoon Jhoom Jhoom Jhumroo',
        'Amit Kumar',
        'Professor Ki Padosan',
        1994
      ),
    ],
  },
  {
    id: 'rdb-janam-se-pehle-1994',
    directorId: 'rd-burman',
    title: 'Janam Se Pehle',
    year: 1994,
    cast: 'Raj Babbar, Farha Naaz, Sumeet Saigal',
    songs: [
      song(
        'rdb-jsp94-1',
        'rdb-janam-se-pehle-1994',
        'Ae Mere Humsafar',
        'Kumar Sanu, Sadhana Sargam',
        'Janam Se Pehle',
        1994
      ),
    ],
  },
  {
    id: 'rdb-sukhee-sansaaraachee-12-sutre-1994',
    directorId: 'rd-burman',
    title: 'Sukhee Sansaaraachee 12 Sutre (Marathi)',
    year: 1994,
    significance: 'R.D. Burman’s sole Marathi feature film score',
    songs: [
      song(
        'rdb-ss12s-1',
        'rdb-sukhee-sansaaraachee-12-sutre-1994',
        'Pauna Aala Kutun',
        'Asha Bhosle, Suresh Wadkar, R.D. Burman',
        'Sukhee Sansaaraachee 12 Sutre Marathi',
        1994
      ),
    ],
  },
  {
    id: 'rdb-ajana-path-1994',
    directorId: 'rd-burman',
    title: 'Ajana Path (Bengali)',
    year: 1994,
    songs: [
      song(
        'rdb-ap94-1',
        'rdb-ajana-path-1994',
        'Ajana Path (Bengali Soundtrack)',
        'Asha Bhosle',
        'Ajana Path Bengali',
        1994
      ),
    ],
  },
  {
    id: 'rdb-kalidas-1995',
    directorId: 'rd-burman',
    title: 'Kalidas (Bengali)',
    year: 1995,
    songs: [
      song(
        'rdb-kal95-1',
        'rdb-kalidas-1995',
        'Kalidas (Bengali Soundtrack)',
        'Asha Bhosle',
        'Kalidas Bengali',
        1995
      ),
    ],
  },
  {
    id: 'rdb-ghatak-1996',
    directorId: 'rd-burman',
    title: 'Ghatak: Lethal',
    year: 1996,
    cast: 'Sunny Deol, Meenakshi Seshadri, Amrish Puri',
    significance: 'Posthumous Rajkumar Santoshi action drama featuring Pancham’s final recorded Hindi tracks',
    songs: [
      song(
        'rdb-gha96-1',
        'rdb-ghatak-1996',
        'Koi Jaye To Le Aaye',
        'Alka Yagnik, Shankar Mahadevan',
        'Ghatak',
        1996
      ),
      song(
        'rdb-gha96-2',
        'rdb-ghatak-1996',
        'Nigahon Ne Chheda Hai Dil Ka Tarana',
        'Suresh Wadkar, Sadhana Sargam',
        'Ghatak',
        1996
      ),
    ],
  },
  {
    id: 'rdb-sautela-bhai-1996',
    directorId: 'rd-burman',
    title: 'Sautela Bhai',
    year: 1996,
    cast: 'Rajesh Khanna, Raj Babbar, Kumar Gaurav',
    songs: [
      song(
        'rdb-sb96-1',
        'rdb-sautela-bhai-1996',
        'Sautela Bhai (Soundtrack)',
        'Alka Yagnik, Kumar Sanu',
        'Sautela Bhai',
        1996
      ),
    ],
  },
  {
    id: 'rdb-anyay-hi-anyay-1997',
    directorId: 'rd-burman',
    title: 'Anyay Hi Anyay',
    year: 1997,
    cast: 'Shatrughan Sinha, Dharmendra',
    significance: 'Posthumous late-1990s release from R.D. Burman’s archival recordings',
    songs: [
      song(
        'rdb-aha97-1',
        'rdb-anyay-hi-anyay-1997',
        'Anyay Hi Anyay (Soundtrack)',
        'R.D. Burman Ensemble',
        'Anyay Hi Anyay',
        1997
      ),
    ],
  },
];
