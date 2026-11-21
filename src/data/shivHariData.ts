import type {
  AdaptationType,
  MovieEntry,
  OriginCategory,
  SongEntry,
} from '../types/archive.ts';

const ytWatch = (videoId: string): string =>
  `https://www.youtube.com/watch?v=${videoId}`;

const origSong = (
  movieId: string,
  idx: number,
  title: string,
  singers: string,
  videoId: string,
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
  ...(notes ? { adaptationNotes: notes } : {}),
  bollywoodLink: ytWatch(videoId),
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
  videoId: string,
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
  bollywoodLink: ytWatch(videoId),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

export const SHIV_HARI_MOVIES: MovieEntry[] = [
  {
    id: 'sh-silsila-1981',
    directorId: 'shiv-hari',
    title: 'Silsila',
    year: 1981,
    cast: 'Amitabh Bachchan, Jaya Bachchan, Rekha, Sanjeev Kumar, Shashi Kapoor',
    label: 'Saregama / HMV',
    significance:
      'Landmark Bollywood debut of Pandit Shivkumar Sharma and Pandit Hariprasad Chaurasia (Shiv–Hari) for Yash Chopra, marrying santoor and bansuri textures with Javed Akhtar’s poetry on "Dekha Ek Khwab" and "Yeh Kahan Aa Gaye Hum" alongside traditional Holi, Mirabai bhajan, and Sikh shabad inspirations.',
    songs: [
      adaptedSong('sh-silsila-1981', 1, 'Rang Barse Bheege Chunarwali', 'Amitabh Bachchan', 'q3IHX5ASUa4', 'Harivansh Rai Bachchan', {
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Awadhi–Braj Holi Hori Geet',
        originalArtist: 'Traditional Uttar Pradesh Folk Tradition',
        originalYear: 'Folk Tradition',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Built around an authentic UP Awadhi/Braj Holi folk melody and refrain adapted by Harivansh Rai Bachchan and Shiv–Hari.',
        originalLink: ytWatch('L0JX28yLi6M'),
        referenceSource: 'Hindi Film Musicology & Folk Archives',
      }),
      origSong('sh-silsila-1981', 2, 'Yeh Kahan Aa Gaye Hum', 'Lata Mangeshkar, Amitabh Bachchan', 'kzS-_YiqXTc', 'Javed Akhtar', 'Classic Yash Chopra–Shiv–Hari duet weaving Amitabh Bachchan’s spoken verse into santoor-backed romantic orchestration.'),
      origSong('sh-silsila-1981', 3, 'Dekha Ek Khwab', 'Lata Mangeshkar, Kishore Kumar', '7dO_MS9tZ5E', 'Javed Akhtar'),
      origSong('sh-silsila-1981', 4, 'Neela Aasman So Gaya (Male)', 'Amitabh Bachchan', 'Z9tZU5MSvBQ', 'Javed Akhtar'),
      origSong('sh-silsila-1981', 5, 'Neela Aasman So Gaya (Female)', 'Lata Mangeshkar', 'KTLXBc8SrnI', 'Javed Akhtar'),
      origSong('sh-silsila-1981', 6, 'Sar Se Sarke', 'Lata Mangeshkar, Kishore Kumar', 'IlyrsH-asW4', 'Hasan Kamal'),
      origSong('sh-silsila-1981', 7, 'Ladki Hai Ya Shola', 'Lata Mangeshkar, Kishore Kumar', 'XJguMcymgMo', 'Rajendra Krishan'),
      adaptedSong('sh-silsila-1981', 8, 'Jo Tum Todo Piya', 'Lata Mangeshkar', 'mvlQX3pqoGo', 'Mirabai (Traditional)', {
        adaptationType: 'inspired',
        originalSongTitle: 'Jo Tum Todo Piya Main Nahin Todun Re',
        originalArtist: 'Sant Mirabai (Traditional Bhajan / Raag Kafi–Bhimpalasi)',
        originalYear: '16th-Century Devotional Tradition',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Set by Shiv–Hari around Mirabai’s classic devotional pad and traditional Hindustani classical bhajan structure.',
        originalLink: ytWatch('pFWdex5-e7g'),
        referenceSource: 'Hindustani Classical & Devotional Lineage',
      }),
      origSong('sh-silsila-1981', 9, 'Khud Se Jo Vada Kiya Tha', 'Pamela Chopra', '-jxyXWHLsvw', 'Nida Fazli'),
      adaptedSong('sh-silsila-1981', 10, 'Bahan Jinah Di Pakdiye', 'Ragi Harbans Singh Jagadhari Wale', '2s_2uoANBHQ', 'Traditional Sikh Shabad', {
        adaptationType: 'inspired',
        originalSongTitle: 'Bahan Jinah Di Pakdiye',
        originalArtist: 'Traditional Punjabi Shabad Kirtan',
        originalYear: 'Devotional Tradition',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Traditional Gurmat / Shabad devotional invocation preserved authentically inside Silsila’s wedding sequence.',
        originalLink: ytWatch('_3yKZOwf1pw'),
        referenceSource: 'Official Silsila Saregama Liner Notes',
      }),
    ],
  },
  {
    id: 'sh-faasle-1985',
    directorId: 'shiv-hari',
    title: 'Faasle',
    year: 1985,
    cast: 'Sunil Dutt, Rekha, Farooq Shaikh, Deepti Naval, Rohan Kapoor, Farha Naaz',
    label: 'Saregama / HMV',
    significance:
      'Second Shiv–Hari collaboration with Yash Chopra pairing poet Shahryar’s lyrical Urdu ghazals with Kishore Kumar, Lata Mangeshkar, Asha Bhosle, and thumri legend Shobha Gurtu.',
    songs: [
      origSong('sh-faasle-1985', 1, 'Hum Chup Hain', 'Kishore Kumar, Lata Mangeshkar', 'RLYy0csJ5vI', 'Shahryar'),
      origSong('sh-faasle-1985', 2, 'Chandni Tu Hai Kahan', 'Kishore Kumar, Lata Mangeshkar', '-Be-nMlfV1M', 'Shahryar'),
      origSong('sh-faasle-1985', 3, 'In Aankhon Ke Zeenon Se', 'Kishore Kumar, Lata Mangeshkar', '--TjvxxFo_A', 'Shahryar'),
      origSong('sh-faasle-1985', 4, 'Janam Janam', 'Kishore Kumar, Lata Mangeshkar', 'nJ_uxKFAtPc', 'Shahryar'),
      origSong('sh-faasle-1985', 5, 'Yeh Qaafile Yaadon Ke', 'Asha Bhosle', 'wUAjCHpEuIU', 'Shahryar'),
      origSong('sh-faasle-1985', 6, 'Faasle Hain Bahut', 'Asha Bhosle', 'j4waEdKqs48', 'Shahryar'),
      origSong('sh-faasle-1985', 7, 'Sun Le Ye Saara Zamana', 'Lata Mangeshkar', 'HjsoDb0sr-c', 'Shahryar'),
      origSong('sh-faasle-1985', 8, 'Mora Banna Dulhan Leke Aaya', 'Pamela Chopra, Shobha Gurtu', 'EOjiTzJoHk0', 'Shahryar', 'Styled after traditional North Indian wedding banna geet with thumri maestro Shobha Gurtu.'),
    ],
  },
  {
    id: 'sh-vijay-1988',
    directorId: 'shiv-hari',
    title: 'Vijay',
    year: 1988,
    cast: 'Rajesh Khanna, Hema Malini, Anil Kapoor, Meenakshi Seshadri, Rishi Kapoor, Sonam, Anupam Kher',
    label: 'Saregama / HMV',
    significance:
      'Multi-starrer Yash Chopra drama scripted with Nida Fazli’s verses, yielding Suresh Wadkar and Lata Mangeshkar’s timeless ballad "Badal Pe Chhalke Aa".',
    songs: [
      origSong('sh-vijay-1988', 1, 'Zindagi Har Janam', 'Lata Mangeshkar, Suresh Wadkar, Vinod Rathod', 'K4upw8kPu9o', 'Nida Fazli'),
      origSong('sh-vijay-1988', 2, 'Badal Pe Chhalke Aa', 'Lata Mangeshkar, Suresh Wadkar', 'cxRyor6qPhU', 'Nida Fazli'),
      origSong('sh-vijay-1988', 3, 'Meri Ankhen Hain Aap Ki Ankhen', 'Lata Mangeshkar', '7pV-2Begweo', 'Nida Fazli'),
      origSong('sh-vijay-1988', 4, 'Tera Karam Hi Teri Vijay Hai (Male)', 'Mahendra Kapoor', 'Y1J7v3G5nc4', 'Nida Fazli'),
      origSong('sh-vijay-1988', 5, 'Tera Karam Hi Teri Vijay Hai (Female)', 'Asha Bhosle', 'Y1J7v3G5nc4', 'Nida Fazli'),
      origSong('sh-vijay-1988', 6, 'Rakhna Athanni Sambhalke', 'Asha Bhosle', 'LOGTot9VIgk', 'Nida Fazli'),
      origSong('sh-vijay-1988', 7, 'Akkad Bakkad Bambe Bo', 'Anupam Kher, Pooja Chopra', 'GIJYuDZaPyE', 'Nida Fazli'),
    ],
  },
  {
    id: 'sh-chandni-1989',
    directorId: 'shiv-hari',
    title: 'Chandni',
    year: 1989,
    cast: 'Sridevi, Rishi Kapoor, Vinod Khanna, Juhi Chawla, Waheeda Rehman',
    label: 'Saregama / HMV',
    significance:
      'Historic chartbuster that revitalized romantic Bollywood musicals at the turn of the 1990s, led by "Mere Haathon Mein Nau Nau Choodiyan", "Lagi Aaj Sawan Ki", "Chandni O Meri Chandni", and "Mitwa".',
    songs: [
      origSong('sh-chandni-1989', 1, 'Mere Haathon Mein Nau Nau Choodiyan', 'Lata Mangeshkar', 'L8aczCXqeFw', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 2, 'Lagi Aaj Sawan Ki', 'Suresh Wadkar, Anupama Deshpande', 'qrNbG2W6IRE', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 3, 'Chandni O Meri Chandni', 'Sridevi, Jolly Mukherjee', 'dRvvrAmcCJw', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 4, 'Mitwa', 'Lata Mangeshkar, Babla Mehta', '5txaRiJfQXM', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 5, 'Mehbooba', 'Lata Mangeshkar, Vinod Rathod', 'gDV1G19aai0', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 6, 'Parbat Se Kaali Ghata Takraee', 'Asha Bhosle, Vinod Rathod', 'g5pCbgKA0kw', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 7, 'Tu Mujhe Suna', 'Suresh Wadkar, Nitin Mukesh', 'ASeNdyCF-4s', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 8, 'Aa Meri Jaan', 'Lata Mangeshkar', 'EuaCZQtOuEg', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 9, 'Main Sasural Nahin Jaoongi', 'Pamela Chopra', '9USMYp-Dn5k', 'Anand Bakshi'),
      origSong('sh-chandni-1989', 10, 'Dance Music (Chandni)', 'Shiv–Hari', 'awax48X8YlU'),
    ],
  },
  {
    id: 'sh-lamhe-1991',
    directorId: 'shiv-hari',
    title: 'Lamhe',
    year: 1991,
    cast: 'Anil Kapoor, Sridevi, Waheeda Rehman, Anupam Kher, Deepak Malhotra',
    label: 'Saregama / HMV',
    significance:
      'Filmfare-winning classic blending Rajasthani desert Mand folk ("Morni Baaga Ma Bole", "Mhare Rajasthan Ma") with intricate Anand Bakshi–penned originals like "Kabhi Main Kahoon" and "Yeh Lamhe Yeh Pal".',
    songs: [
      origSong('sh-lamhe-1991', 1, 'Kabhi Main Kahoon', 'Lata Mangeshkar, Hariharan', 'Mag04um99xg', 'Anand Bakshi'),
      adaptedSong('sh-lamhe-1991', 2, 'Chudiyan Khanak Gayeen (Morni Baaga Ma Bole)', 'Lata Mangeshkar, Ila Arun', '7PBpaR9Skhk', 'Anand Bakshi (with Traditional Rajasthani Folk)', {
        adaptationType: 'inspired',
        originalSongTitle: 'Morni Baaga Ma Bole Aadhi Raat Ma',
        originalArtist: 'Traditional Rajasthani Marwari Folk Tradition',
        originalYear: 'Folk Tradition',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Weaves the traditional Rajasthani desert folk song "Morni Baaga Ma Bole Aadhi Raat Ma" into Anand Bakshi’s romantic refrain "Chudiyan Khanak Gayeen".',
        originalLink: ytWatch('qz799leOxUs'),
        referenceSource: 'Rajasthani Mand Folk & Yash Raj Archives',
      }),
      origSong('sh-lamhe-1991', 3, 'Megha Re Megha', 'Lata Mangeshkar, Ila Arun', 'F-EiO5PM524', 'Anand Bakshi'),
      origSong('sh-lamhe-1991', 4, 'Yaad Nahin Bhool Gaya', 'Lata Mangeshkar, Suresh Wadkar', 'jOlAWeNXkLE', 'Anand Bakshi'),
      origSong('sh-lamhe-1991', 5, 'Yeh Lamhe Yeh Pal', 'Hariharan', 'ReJ5ZQhu3Bw', 'Anand Bakshi'),
      origSong('sh-lamhe-1991', 6, 'Meri Bindiya', 'Lata Mangeshkar', '0sUGPDhc5pY', 'Anand Bakshi'),
      origSong('sh-lamhe-1991', 7, 'Mohe Chhedo Na', 'Lata Mangeshkar', 'HaEiuS0vUFE', 'Anand Bakshi'),
      origSong('sh-lamhe-1991', 8, 'Gudiya Rani', 'Lata Mangeshkar', 'ROYoch5G460', 'Anand Bakshi'),
      adaptedSong('sh-lamhe-1991', 9, 'Mhare Rajasthan Ma', 'Mame Khan / Traditional Folk Ensemble', 'S8wnoASl1oI', 'Makhdoom Mohiuddin / Traditional Folk', {
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Rajasthani Mand & Desert Folk Medley',
        originalArtist: 'Traditional Rajasthani Folk Tradition',
        originalYear: 'Folk Tradition',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Atmospheric desert folk suite adapting authentic Rajasthani Mand melodies recorded for Lamhe.',
        originalLink: ytWatch('qz799leOxUs'),
        referenceSource: 'Lamhe Official Saregama Soundtrack Liner Notes',
      }),
      origSong('sh-lamhe-1991', 10, 'Freak Out (Medley)', 'Pamela Chopra, Sudesh Bhosle', 'O_ikiEBv_Ns', 'Anand Bakshi', 'Medley homage honoring classic Hindi cinema songs arranged inside Lamhe.'),
      origSong('sh-lamhe-1991', 11, 'Moments Of Passion / Moments Of Rage', 'Shiv–Hari', 'n6Nj2sXI4JI'),
    ],
  },
  {
    id: 'sh-parampara-1993',
    directorId: 'shiv-hari',
    title: 'Parampara',
    year: 1993,
    cast: 'Sunil Dutt, Vinod Khanna, Aamir Khan, Saif Ali Khan, Raveena Tandon, Neelam Kothari, Ashwini Bhave',
    label: 'Saregama / HMV',
    significance:
      'Multi-generational Yash Chopra drama pairing Lata Mangeshkar, Abhijeet, and Amit Kumar across nine Anand Bakshi songs including "Tu Saawan Main Pyaas Piya" and "Phoolon Ke Is Shehar Mein".',
    songs: [
      origSong('sh-parampara-1993', 1, 'Aadhi Raat Ko', 'Lata Mangeshkar, Amit Kumar', 'Th9aKUpaNEA', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 2, 'Mere Saathiya', 'Lata Mangeshkar, Abhijeet', 'YWtquZRxjxk', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 3, 'Tu Saawan Main Pyaas Piya', 'Lata Mangeshkar', '8UBLtC2Ki5E', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 4, 'Tu Saawan Main Pyaas Piya (Sad)', 'Lata Mangeshkar', '8UBLtC2Ki5E', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 5, 'Phoolon Ke Is Shehar Mein', 'Lata Mangeshkar, Abhijeet', 'CRSLR-f_DV4', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 6, 'Naujawanon Ka Zamana Hai', 'Kavita Krishnamurthy, Anupama Deshpande, Vinod Rathod, Samir Date', 'jqhAqim7aGU', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 7, 'Hum Banjare Dil Nahin Dete', 'Lata Mangeshkar, Devaki Pandit', 'v5HMz_y5ZYc', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 8, 'Maangti Hai Pyasi Dharti', 'Chorus', '-FTj6Zxbwpc', 'Anand Bakshi'),
      origSong('sh-parampara-1993', 9, 'Mujhe Ishq Ho Gaya (Qawwali)', 'Aslam Sabri & Party', '_gXBfEpMEbQ', 'Anand Bakshi'),
    ],
  },
  {
    id: 'sh-sahibaan-1993',
    directorId: 'shiv-hari',
    title: 'Sahibaan',
    year: 1993,
    cast: 'Rishi Kapoor, Sanjay Dutt, Madhuri Dixit, Sonu Walia',
    label: 'T-Series',
    significance:
      'Shiv–Hari’s sole non–Yash Chopra Hindi feature film (directed by Ramesh Talwar), showcasing Hariharan’s flute anthem "Bansuri Yeh Bansuri Nahin" alongside Anuradha Paudwal and Jolly Mukherjee.',
    songs: [
      origSong('sh-sahibaan-1993', 1, 'Sahibaan Meri Sahibaan', 'Anuradha Paudwal, Jolly Mukherjee', 'BGGphY03i3Y', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 2, 'Sahibaan Meri Sahibaan (Sad)', 'Anuradha Paudwal', 'BGGphY03i3Y', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 3, 'Bansuri Yeh Bansuri Nahin', 'Hariharan', 'bop0oNuGCqo', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 4, 'Is Mele Mein Log Aate Hain', 'Anuradha Paudwal, Jolly Mukherjee', 'wek3KJ68xiI', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 5, 'Are Jaane Wale', 'Anuradha Paudwal', '2L0pK2g_IJY', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 6, 'Tu Kya Pyar Karega', 'Anuradha Paudwal', 'ofykW0az_lI', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 7, 'Main Botal Nahin Sharab Ki', 'Anuradha Paudwal', 'Sdi16pkYEZ8', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 8, 'Prem Hai Deepak Raag', 'Afroz Bano', 'T-2a8vAwDzE', 'Anand Bakshi'),
      origSong('sh-sahibaan-1993', 9, 'Classical Music (Sahibaan)', 'Shiv–Hari', 'RPnprWaXPY4'),
    ],
  },
  {
    id: 'sh-darr-1993',
    directorId: 'shiv-hari',
    title: 'Darr',
    year: 1993,
    cast: 'Sunny Deol, Juhi Chawla, Shah Rukh Khan, Anupam Kher',
    label: 'Saregama / HMV',
    significance:
      'Blockbuster swan song of Shiv–Hari’s Bollywood partnership, earning a Filmfare Best Music Director nomination led by "Jaadu Teri Nazar", "Tu Mere Samne", "Darwaza Band Karlo", and "Ang Se Ang Lagana".',
    songs: [
      origSong('sh-darr-1993', 1, 'Jaadu Teri Nazar', 'Udit Narayan', 'n_oP9Onj0r0', 'Anand Bakshi'),
      origSong('sh-darr-1993', 2, 'Darwaza Band Karlo', 'Lata Mangeshkar, Abhijeet', 'dIsqDRLD7c8', 'Anand Bakshi'),
      origSong('sh-darr-1993', 3, 'Tu Mere Samne', 'Lata Mangeshkar, Udit Narayan', '0-7RHSbyZGw', 'Anand Bakshi'),
      origSong('sh-darr-1993', 4, 'Ishq Da Rog Bura', 'Lata Mangeshkar, Vinod Rathod', '1AEvfgeasL4', 'Anand Bakshi'),
      origSong('sh-darr-1993', 5, 'Solah Button Meri Choli Mein', 'Lata Mangeshkar, Kavita Krishnamurthy, Pamela Chopra', 'rzmq6MN4nZQ', 'Anand Bakshi'),
      origSong('sh-darr-1993', 6, 'Likha Hai Yeh', 'Lata Mangeshkar, Hariharan', 'tfSqvusJiFI', 'Anand Bakshi'),
      origSong('sh-darr-1993', 7, 'Ang Se Ang Lagana', 'Alka Yagnik, Sudesh Bhosle, Vinod Rathod, Devaki Pandit', 'bue7fClXlkI', 'Anand Bakshi'),
      origSong('sh-darr-1993', 8, 'Obsession (Instrumental)', 'Shiv–Hari', 'BQnYlXqtO-0'),
    ],
  },
];
