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

export const ANU_MALIK_MOVIES: MovieEntry[] = [
  // 1977 - 1989 (Early Career & 1980s Breakthrough)
  {
    id: 'am-hunterwali-1977',
    directorId: 'anu-malik',
    title: 'Hunterwali 77',
    year: 1977,
    significance: 'Anu Malik’s earliest credited Bollywood composition',
    songs: [
      song(
        'am-hw77-1',
        'am-hunterwali-1977',
        'Zulm O Sitam Par Itrane Wale',
        'Asha Bhosle',
        'Hunterwali 77',
        1977
      ),
    ],
  },
  {
    id: 'am-poonam-1981',
    directorId: 'anu-malik',
    title: 'Poonam',
    year: 1981,
    cast: 'Raj Babbar, Poonam Dhillon',
    significance: 'First full-fledged independent feature film soundtrack by Anu Malik',
    songs: [
      song(
        'am-poonam-1',
        'am-poonam-1981',
        'Mohabbat Rang Layegi',
        'Kishore Kumar, Asha Bhosle',
        'Poonam',
        1981
      ),
      song(
        'am-poonam-2',
        'am-poonam-1981',
        'Lakhon Haseen Duniya Mein',
        'Suresh Wadkar',
        'Poonam',
        1981
      ),
    ],
  },
  {
    id: 'am-aapas-ki-baat-1981',
    directorId: 'anu-malik',
    title: 'Aapas Ki Baat',
    year: 1981,
    cast: 'Raj Babbar, Poonam Dhillon',
    songs: [
      song(
        'am-akb81-1',
        'am-aapas-ki-baat-1981',
        'Tera Chehra Hai Aaine Jaisa',
        'Shailendra Singh, Asha Bhosle',
        'Aapas Ki Baat',
        1981
      ),
    ],
  },
  {
    id: 'am-mangal-pandey-1982',
    directorId: 'anu-malik',
    title: 'Mangal Pandey',
    year: 1982,
    cast: 'Shatrughan Sinha, Parveen Babi',
    songs: [
      song(
        'am-mp82-1',
        'am-mangal-pandey-1982',
        'Surkh Joda Pehankar Mera Dildar Chala',
        'Kishore Kumar',
        'Mangal Pandey',
        1983
      ),
      song(
        'am-mp82-2',
        'am-mangal-pandey-1982',
        'Mohabbat Haan Mohabbat',
        'Asha Bhosle',
        'Mangal Pandey',
        1983
      ),
    ],
  },
  {
    id: 'am-hum-paagal-premee-1982',
    directorId: 'anu-malik',
    title: 'Hum Paagal Premee',
    year: 1982,
    songs: [
      song(
        'am-hpp82-1',
        'am-hum-paagal-premee-1982',
        'Paagal Premee (Theme)',
        'Anu Malik Ensemble',
        'Hum Paagal Premee',
        1982
      ),
    ],
  },
  {
    id: 'am-ek-jaan-hain-hum-1983',
    directorId: 'anu-malik',
    title: 'Ek Jaan Hain Hum',
    year: 1983,
    cast: 'Rajiv Kapoor, Divya Rana',
    songs: [
      song(
        'am-ejhh-1',
        'am-ek-jaan-hain-hum-1983',
        'Aasmaan Pe Likh Doon',
        'Shabbir Kumar, Asha Bhosle',
        'Ek Jaan Hain Hum',
        1983
      ),
      song(
        'am-ejhh-2',
        'am-ek-jaan-hain-hum-1983',
        'Yaad Teri Aayegi',
        'Shabbir Kumar',
        'Ek Jaan Hain Hum',
        1983
      ),
    ],
  },
  {
    id: 'am-aasmaan-1984',
    directorId: 'anu-malik',
    title: 'Aasmaan',
    year: 1984,
    cast: 'Rajiv Kapoor, Tina Munim',
    songs: [
      song(
        'am-aasm84-1',
        'am-aasmaan-1984',
        'Jo Tere Hothon Pe',
        'Kishore Kumar, Asha Bhosle',
        'Aasmaan',
        1984
      ),
    ],
  },
  {
    id: 'am-sohni-mahiwal-1984',
    directorId: 'anu-malik',
    title: 'Sohni Mahiwal',
    year: 1984,
    cast: 'Sunny Deol, Poonam Dhillon',
    label: 'HMV / Saregama',
    significance: 'First major critical acclaim & Filmfare Best Music nomination',
    songs: [
      song(
        'am-sm84-1',
        'am-sohni-mahiwal-1984',
        'Sohni Chinab De Kinare',
        'Anupama Deshpande, Anwar',
        'Sohni Mahiwal',
        1984,
        {
          originCategory: 'Indian Folk & Classical',
          adaptationNotes: 'Punjabi folk-inspired romantic duet.',
        }
      ),
      song(
        'am-sm84-2',
        'am-sohni-mahiwal-1984',
        'Mujhe Dulhe Ka Sehra',
        'Asha Bhosle, Shabbir Kumar',
        'Sohni Mahiwal',
        1984
      ),
      song(
        'am-sm84-3',
        'am-sohni-mahiwal-1984',
        'Bol Do Meethe Bol Soniye',
        'Shabbir Kumar, Asha Bhosle',
        'Sohni Mahiwal',
        1984
      ),
    ],
  },
  {
    id: 'am-love-marriage-1984',
    directorId: 'anu-malik',
    title: 'Love Marriage',
    year: 1984,
    cast: 'Anil Kapoor, Meenakshi Seshadri',
    songs: [
      song(
        'am-lm84-1',
        'am-love-marriage-1984',
        'Beeswin Sadi Ke Hum Hain',
        'Amit Kumar, Alka Yagnik',
        'Love Marriage',
        1984
      ),
    ],
  },
  {
    id: 'am-ram-tera-desh-1984',
    directorId: 'anu-malik',
    title: 'Ram Tera Desh',
    year: 1984,
    cast: 'Ashok Kumar, Hema Malini',
    songs: [
      song(
        'am-rtd84-1',
        'am-ram-tera-desh-1984',
        'Ram Tera Desh',
        'Asha Bhosle',
        'Ram Tera Desh',
        1984
      ),
      song(
        'am-rtd84-2',
        'am-ram-tera-desh-1984',
        'Sola Baras Jise',
        'Asha Bhosle',
        'Ram Tera Desh',
        1984
      ),
    ],
  },
  {
    id: 'am-mard-1985',
    directorId: 'anu-malik',
    title: 'Mard',
    year: 1985,
    cast: 'Amitabh Bachchan, Amrita Singh',
    label: 'T-Series',
    significance: 'Major commercial breakthrough with director Manmohan Desai',
    songs: [
      song(
        'am-mard-1',
        'am-mard-1985',
        'Mard Tangewala',
        'Mohammed Aziz',
        'Mard',
        1985
      ),
      song(
        'am-mard-2',
        'am-mard-1985',
        'Hum To Tambu Mein Bambu',
        'Mohammed Aziz, Asha Bhosle',
        'Mard',
        1985
      ),
      song(
        'am-mard-3',
        'am-mard-1985',
        'Sun Rubia Tumse Pyar Ho Gaya',
        'Shabbir Kumar, Sharon Prabhakar',
        'Mard',
        1985
      ),
    ],
  },
  {
    id: 'am-jaan-ki-baazi-1985',
    directorId: 'anu-malik',
    title: 'Jaan Ki Baazi',
    year: 1985,
    cast: 'Sanjay Dutt, Anita Raj',
    songs: [
      song(
        'am-jkb85-1',
        'am-jaan-ki-baazi-1985',
        'Baba Main To Khulla',
        'Shabbir Kumar, Dilraj Kaur',
        'Jaan Ki Baazi',
        1985
      ),
    ],
  },
  {
    id: 'am-phaansi-ke-baad-1985',
    directorId: 'anu-malik',
    title: 'Phaansi Ke Baad',
    year: 1985,
    cast: 'Shatrughan Sinha, Hema Malini',
    songs: [
      song(
        'am-pkb85-1',
        'am-phaansi-ke-baad-1985',
        'Phaansi Ke Baad (Soundtrack)',
        'Anu Malik Ensemble',
        'Phaansi Ke Baad',
        1985
      ),
    ],
  },
  {
    id: 'am-begaana-1986',
    directorId: 'anu-malik',
    title: 'Begaana',
    year: 1986,
    cast: 'Kumar Gaurav, Rati Agnihotri',
    songs: [
      song(
        'am-beg86-1',
        'am-begaana-1986',
        'Apne Deewane Ka',
        'Kishore Kumar, Asha Bhosle',
        'Begaana',
        1986
      ),
    ],
  },
  {
    id: 'am-allah-rakha-1986',
    directorId: 'anu-malik',
    title: 'Allah Rakha',
    year: 1986,
    cast: 'Jackie Shroff, Dimple Kapadia',
    songs: [
      song(
        'am-ar86-1',
        'am-allah-rakha-1986',
        'Main Allah Rakha Hoon',
        'Mohammed Aziz',
        'Allah Rakha',
        1986
      ),
    ],
  },
  {
    id: 'am-ek-chadar-maili-si-1986',
    directorId: 'anu-malik',
    title: 'Ek Chadar Maili Si',
    year: 1986,
    cast: 'Hema Malini, Rishi Kapoor',
    songs: [
      song(
        'am-ecms-1',
        'am-ek-chadar-maili-si-1986',
        'Mar Gayi Chhoti Si',
        'Asha Bhosle',
        'Ek Chadar Maili Si',
        1986
      ),
    ],
  },
  {
    id: 'am-mera-haque-1986',
    directorId: 'anu-malik',
    title: 'Mera Haque',
    year: 1986,
    cast: 'Sanjay Dutt, Anita Raj',
    songs: [
      song(
        'am-mh86-1',
        'am-mera-haque-1986',
        'Kala Kawwa Dekhta Hai',
        'Shabbir Kumar, Alka Yagnik',
        'Mera Haque',
        1986,
        { lyricist: 'Indeevar' }
      ),
      song(
        'am-mh86-2',
        'am-mera-haque-1986',
        'Bijlee Gira Ke',
        'Shabbir Kumar, Anuradha Paudwal',
        'Mera Haque',
        1986
      ),
    ],
  },
  {
    id: 'am-jaal-1986',
    directorId: 'anu-malik',
    title: 'Jaal',
    year: 1986,
    cast: 'Jeetendra, Mithun Chakraborty, Rekha',
    songs: [
      song(
        'am-jaal86-1',
        'am-jaal-1986',
        'Jaal (Soundtrack)',
        'Anu Malik Ensemble',
        'Jaal',
        1986
      ),
    ],
  },
  {
    id: 'am-karamdaata-1986',
    directorId: 'anu-malik',
    title: 'Karamdaata',
    year: 1986,
    cast: 'Shammi Kapoor, Mithun Chakraborty',
    songs: [
      song(
        'am-kd86-1',
        'am-karamdaata-1986',
        'Karamdaata (Soundtrack)',
        'Anu Malik Ensemble',
        'Karamdaata',
        1986
      ),
    ],
  },
  {
    id: 'am-pyaar-ke-do-pal-1986',
    directorId: 'anu-malik',
    title: 'Pyaar Ke Do Pal',
    year: 1986,
    cast: 'Mithun Chakraborty, Jaya Prada',
    songs: [
      song(
        'am-pkdp86-1',
        'am-pyaar-ke-do-pal-1986',
        'Pyaar Ke Do Pal (Soundtrack)',
        'Anu Malik Ensemble',
        'Pyaar Ke Do Pal',
        1986
      ),
    ],
  },
  {
    id: 'am-angaaray-1986',
    directorId: 'anu-malik',
    title: 'Angaaray',
    year: 1986,
    cast: 'Rajesh Khanna, Smita Patil, Raj Babbar',
    songs: [
      song(
        'am-ang86-1',
        'am-angaaray-1986',
        'Angaaray (Soundtrack)',
        'Anu Malik Ensemble',
        'Angaaray',
        1986
      ),
    ],
  },
  {
    id: 'am-hawalaat-1987',
    directorId: 'anu-malik',
    title: 'Hawalaat',
    year: 1987,
    cast: 'Mithun Chakraborty, Shatrughan Sinha',
    songs: [
      song(
        'am-haw87-1',
        'am-hawalaat-1987',
        'Tere Husn Ka Shor',
        'Mohammed Aziz, Alisha Chinai',
        'Hawalaat',
        1987
      ),
    ],
  },
  {
    id: 'am-dadagiri-1987',
    directorId: 'anu-malik',
    title: 'Dadagiri',
    year: 1987,
    cast: 'Dharmendra, Govinda',
    songs: [
      song(
        'am-dg87-1',
        'am-dadagiri-1987',
        'Sirf Tum Hi Ho',
        'Anuradha Paudwal, Shabbir Kumar',
        'Dadagiri',
        1987
      ),
    ],
  },
  {
    id: 'am-insaniyat-ke-dushman-1987',
    directorId: 'anu-malik',
    title: 'Insaniyat Ke Dushman',
    year: 1987,
    cast: 'Dharmendra, Shatrughan Sinha, Dimple Kapadia',
    songs: [
      song(
        'am-ikd87-1',
        'am-insaniyat-ke-dushman-1987',
        'Om Sai Ram',
        'Suresh Wadkar',
        'Insaniyat Ke Dushman',
        1987
      ),
      song(
        'am-ikd87-2',
        'am-insaniyat-ke-dushman-1987',
        'O Soniye',
        'Shabbir Kumar, Asha Bhosle',
        'Insaniyat Ke Dushman',
        1987
      ),
    ],
  },
  {
    id: 'am-naam-o-nishan-1987',
    directorId: 'anu-malik',
    title: 'Naam O Nishan',
    year: 1987,
    cast: 'Sanjay Dutt, Amrita Singh',
    songs: [
      song(
        'am-non87-1',
        'am-naam-o-nishan-1987',
        'Naam O Nishan (Soundtrack)',
        'Anu Malik Ensemble',
        'Naam O Nishan',
        1987
      ),
    ],
  },
  {
    id: 'am-mera-lahoo-1987',
    directorId: 'anu-malik',
    title: 'Mera Lahoo',
    year: 1987,
    cast: 'Govinda, Kimi Katkar',
    songs: [
      song(
        'am-ml87-1',
        'am-mera-lahoo-1987',
        'Mera Lahoo (Soundtrack)',
        'Anu Malik Ensemble',
        'Mera Lahoo',
        1987
      ),
    ],
  },
  {
    id: 'am-gangaa-jamunaa-saraswati-1988',
    directorId: 'anu-malik',
    title: 'Gangaa Jamunaa Saraswati',
    year: 1988,
    cast: 'Amitabh Bachchan, Meenakshi Seshadri, Jaya Prada',
    label: 'T-Series',
    songs: [
      song(
        'am-gjs-1',
        'am-gangaa-jamunaa-saraswati-1988',
        'Saajan Mera Us Paar Hai',
        'Lata Mangeshkar',
        'Gangaa Jamunaa Saraswati',
        1988
      ),
      song(
        'am-gjs-2',
        'am-gangaa-jamunaa-saraswati-1988',
        'Tere Dar Ko Chhod Chale',
        'Pankaj Udhas',
        'Gangaa Jamunaa Saraswati',
        1988
      ),
    ],
  },
  {
    id: 'am-maalamaal-1988',
    directorId: 'anu-malik',
    title: 'Maalamaal',
    year: 1988,
    cast: 'Naseeruddin Shah, Poonam Dhillon',
    songs: [
      song(
        'am-mm88-1',
        'am-maalamaal-1988',
        'Pehla Pehla Pyar Hai',
        'Amit Kumar, Alisha Chinai',
        'Maalamaal',
        1988,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Für Elise',
          originalArtist: 'Ludwig van Beethoven',
          originalYear: '1810',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening hook and instrumental refrain directly adapt Beethoven’s famous piano bagatelle.',
          originalLink: 'https://www.youtube.com/watch?v=q9bU12gXUyM',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-jeete-hain-shaan-se-1988',
    directorId: 'anu-malik',
    title: 'Jeete Hain Shaan Se',
    year: 1988,
    cast: 'Mithun Chakraborty, Sanjay Dutt, Govinda',
    songs: [
      song(
        'am-jhss-1',
        'am-jeete-hain-shaan-se-1988',
        'Julie Julie',
        'Anu Malik, Kavita Krishnamurthy',
        'Jeete Hain Shaan Se',
        1988
      ),
    ],
  },
  {
    id: 'am-aakhri-adaalat-1988',
    directorId: 'anu-malik',
    title: 'Aakhri Adaalat',
    year: 1988,
    cast: 'Vinod Khanna, Dimple Kapadia',
    songs: [
      song(
        'am-aa88-1',
        'am-aakhri-adaalat-1988',
        'Jaisa Tu Karega',
        'Mohammed Aziz, Anu Malik',
        'Aakhri Adaalat',
        1988
      ),
      song(
        'am-aa88-2',
        'am-aakhri-adaalat-1988',
        'Aaj Nahin To Kal',
        'Anu Malik, Alisha Chinai',
        'Aakhri Adaalat',
        1988
      ),
    ],
  },
  {
    id: 'am-shukriya-1988',
    directorId: 'anu-malik',
    title: 'Shukriya',
    year: 1988,
    cast: 'Rajiv Kapoor, Amrita Singh',
    songs: [
      song(
        'am-shuk88-1',
        'am-shukriya-1988',
        'Shukriya (Soundtrack)',
        'Anu Malik Ensemble',
        'Shukriya',
        1988
      ),
    ],
  },
  {
    id: 'am-abhimanyu-1989',
    directorId: 'anu-malik',
    title: 'Abhimanyu',
    year: 1989,
    cast: 'Anil Kapoor, Kimi Katkar',
    songs: [
      song(
        'am-abh89-1',
        'am-abhimanyu-1989',
        'Chandni Raat Hai',
        'Amit Kumar, Alisha Chinai',
        'Abhimanyu',
        1989
      ),
    ],
  },
  {
    id: 'am-mujrim-1989',
    directorId: 'anu-malik',
    title: 'Mujrim',
    year: 1989,
    cast: 'Mithun Chakraborty, Madhuri Dixit',
    songs: [
      song(
        'am-muj89-1',
        'am-mujrim-1989',
        'Raat Ke Baarah Baje',
        'Amit Kumar, Alka Yagnik',
        'Mujrim',
        1989
      ),
    ],
  },
  {
    id: 'am-vardi-1989',
    directorId: 'anu-malik',
    title: 'Vardi',
    year: 1989,
    cast: 'Sunny Deol, Jackie Shroff, Madhuri Dixit',
    songs: [
      song(
        'am-var89-1',
        'am-vardi-1989',
        'Teri Isi Ada Pe Sanam',
        'Anu Malik, Sadhana Sargam',
        'Vardi',
        1989
      ),
    ],
  },
  {
    id: 'am-toofan-1989',
    directorId: 'anu-malik',
    title: 'Toofan',
    year: 1989,
    cast: 'Amitabh Bachchan, Amrita Singh',
    songs: [
      song(
        'am-too89-1',
        'am-toofan-1989',
        'Aaya Toofan',
        'Shabbir Kumar',
        'Toofan',
        1989
      ),
    ],
  },
  {
    id: 'am-ladaai-1989',
    directorId: 'anu-malik',
    title: 'Ladaai',
    year: 1989,
    cast: 'Mithun Chakraborty, Rekha, Dimple Kapadia',
    songs: [
      song(
        'am-lad89-1',
        'am-ladaai-1989',
        'Ladaai (Soundtrack)',
        'Anu Malik Ensemble',
        'Ladaai',
        1989
      ),
    ],
  },
  {
    id: 'am-taaqatwar-1989',
    directorId: 'anu-malik',
    title: 'Taaqatwar',
    year: 1989,
    cast: 'Sanjay Dutt, Govinda, Neelam Kothari',
    songs: [
      song(
        'am-taaq89-1',
        'am-taaqatwar-1989',
        'Taaqatwar (Soundtrack)',
        'Anu Malik Ensemble',
        'Taaqatwar',
        1989
      ),
    ],
  },
  {
    id: 'am-daana-paani-1989',
    directorId: 'anu-malik',
    title: 'Daana Paani',
    year: 1989,
    cast: 'Mithun Chakraborty, Padmini Kolhapure',
    songs: [
      song(
        'am-dp89-1',
        'am-daana-paani-1989',
        'Daana Paani (Soundtrack)',
        'Anu Malik Ensemble',
        'Daana Paani',
        1989
      ),
    ],
  },
  {
    id: 'am-aakhri-baazi-1989',
    directorId: 'anu-malik',
    title: 'Aakhri Baazi',
    year: 1989,
    cast: 'Shatrughan Sinha, Govinda',
    songs: [
      song(
        'am-ab89-1',
        'am-aakhri-baazi-1989',
        'Aakhri Baazi (Soundtrack)',
        'Anu Malik Ensemble',
        'Aakhri Baazi',
        1989
      ),
    ],
  },

  // 1990 - 1994 (Transition & Baazigar Stardom)
  {
    id: 'am-gunahon-ka-devta-1990',
    directorId: 'anu-malik',
    title: 'Gunahon Ka Devta',
    year: 1990,
    cast: 'Mithun Chakraborty, Sangeeta Bijlani',
    songs: [
      song(
        'am-gkd90-1',
        'am-gunahon-ka-devta-1990',
        'Humse Jo Takrayega',
        'Shabbir Kumar, Anuradha Paudwal',
        'Gunahon Ka Devta',
        1990
      ),
    ],
  },
  {
    id: 'am-doodh-ka-karz-1990',
    directorId: 'anu-malik',
    title: 'Doodh Ka Karz',
    year: 1990,
    cast: 'Jackie Shroff, Neelam Kothari',
    songs: [
      song(
        'am-dkk90-1',
        'am-doodh-ka-karz-1990',
        'Shuru Ho Rahi Hai Prem Kahani',
        'Mohammed Aziz, Anuradha Paudwal',
        'Doodh Ka Karz',
        1990
      ),
    ],
  },
  {
    id: 'am-awaargi-1990',
    directorId: 'anu-malik',
    title: 'Awaargi',
    year: 1990,
    cast: 'Anil Kapoor, Govinda, Meenakshi Seshadri',
    songs: [
      song(
        'am-awa90-1',
        'am-awaargi-1990',
        'Chamakte Chand Ko Toota Hua',
        'Ghulam Ali',
        'Awaargi',
        1990
      ),
      song(
        'am-awa90-2',
        'am-awaargi-1990',
        'Bali Umar Ne Mera Haal',
        'Lata Mangeshkar, Mohammed Aziz',
        'Awaargi',
        1990
      ),
    ],
  },
  {
    id: 'am-khatarnaak-1990',
    directorId: 'anu-malik',
    title: 'Khatarnaak',
    year: 1990,
    cast: 'Sanjay Dutt, Anita Raj, Farha Naaz',
    songs: [
      song(
        'am-khat90-1',
        'am-khatarnaak-1990',
        'Aasman Pe Baithi Chaandni',
        'Abhijeet',
        'Khatarnaak',
        1990
      ),
      song(
        'am-khat90-2',
        'am-khatarnaak-1990',
        'Chori Chori Aaya Tu',
        'Alisha Chinai',
        'Khatarnaak',
        1990
      ),
    ],
  },
  {
    id: 'am-tejaa-1990',
    directorId: 'anu-malik',
    title: 'Tejaa',
    year: 1990,
    cast: 'Sanjay Dutt, Kimi Katkar',
    songs: [
      song(
        'am-tej90-1',
        'am-tejaa-1990',
        'Tejaa (Soundtrack)',
        'Asha Bhosle, Anuradha Paudwal',
        'Tejaa',
        1990
      ),
    ],
  },
  {
    id: 'am-zimmedaaar-1990',
    directorId: 'anu-malik',
    title: 'Zimmedaaar',
    year: 1990,
    cast: 'Rajiv Kapoor, Anita Raj',
    songs: [
      song(
        'am-zim90-1',
        'am-zimmedaaar-1990',
        'Zimmedaaar (Soundtrack)',
        'Anu Malik Ensemble',
        'Zimmedaaar',
        1990
      ),
    ],
  },
  {
    id: 'am-bhabhi-1991',
    directorId: 'anu-malik',
    title: 'Bhabhi',
    year: 1991,
    cast: 'Govinda, Juhi Chawla',
    songs: [
      song(
        'am-bhabhi91-1',
        'am-bhabhi-1991',
        'Chandi Ki Cycle Sone Ki Seat',
        'Nitin Mukesh, Anuradha Paudwal',
        'Bhabhi',
        1991
      ),
    ],
  },
  {
    id: 'am-maa-1991',
    directorId: 'anu-malik',
    title: 'Maa',
    year: 1991,
    cast: 'Jeetendra, Jaya Prada',
    songs: [
      song(
        'am-maa91-1',
        'am-maa-1991',
        'Aaine Ke Sau Tukde',
        'Kumar Sanu',
        'Maa',
        1991
      ),
    ],
  },
  {
    id: 'am-shikari-1991',
    directorId: 'anu-malik',
    title: 'Shikari: The Hunter',
    year: 1991,
    cast: 'Mithun Chakraborty, Naseeruddin Shah',
    songs: [
      song(
        'am-shik91-1',
        'am-shikari-1991',
        'Mere Dost Hindustani',
        'Anuradha Paudwal',
        'Shikari',
        1991
      ),
      song(
        'am-shik91-2',
        'am-shikari-1991',
        'Namaste Namaste (Koki Koki Koki)',
        'Anu Malik, Anuradha Paudwal',
        'Shikari',
        1991
      ),
    ],
  },
  {
    id: 'am-izzat-1991',
    directorId: 'anu-malik',
    title: 'Izzat',
    year: 1991,
    cast: 'Jackie Shroff, Sangeeta Bijlani',
    songs: [
      song(
        'am-izz91-1',
        'am-izzat-1991',
        'Tera Sandesha Aaya Hai',
        'Mohammed Aziz',
        'Izzat',
        1991
      ),
      song(
        'am-izz91-2',
        'am-izzat-1991',
        'Izzat Se Jeena',
        'Mohammed Aziz, Anuradha Paudwal',
        'Izzat',
        1991
      ),
    ],
  },
  {
    id: 'am-ramgarh-ke-sholay-1991',
    directorId: 'anu-malik',
    title: 'Ramgarh Ke Sholay',
    year: 1991,
    cast: 'Vijay Saxena, Kishore Bhanushali',
    songs: [
      song(
        'am-rks91-1',
        'am-ramgarh-ke-sholay-1991',
        'Tum Nahin To Hum Nahin',
        'Kumar Sanu, Alka Yagnik',
        'Ramgarh Ke Sholay',
        1991
      ),
      song(
        'am-rks91-2',
        'am-ramgarh-ke-sholay-1991',
        'Teri Zulfen Sham Se Roshan',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Ramgarh Ke Sholay',
        1991
      ),
    ],
  },
  {
    id: 'am-naag-mani-1991',
    directorId: 'anu-malik',
    title: 'Naag Mani',
    year: 1991,
    cast: 'Shikha Swaroop, Alok Nath',
    songs: [
      song(
        'am-nm91-1',
        'am-naag-mani-1991',
        'Naag Mani (Soundtrack)',
        'Anu Malik Ensemble',
        'Naag Mani',
        1991
      ),
    ],
  },
  {
    id: 'am-fateh-1991',
    directorId: 'anu-malik',
    title: 'Fateh',
    year: 1991,
    cast: 'Sanjay Dutt, Shabana Azmi',
    songs: [
      song(
        'am-fat91-1',
        'am-fateh-1991',
        'Fateh (Soundtrack)',
        'Anu Malik Ensemble',
        'Fateh',
        1991
      ),
    ],
  },
  {
    id: 'am-chamatkar-1992',
    directorId: 'anu-malik',
    title: 'Chamatkar',
    year: 1992,
    cast: 'Shah Rukh Khan, Urmila Matondkar, Naseeruddin Shah',
    label: 'Venus',
    songs: [
      song(
        'am-cham-1',
        'am-chamatkar-1992',
        'Jawani Diwani',
        'Udit Narayan, Poornima',
        'Chamatkar',
        1992,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Bahama Mama',
          originalArtist: 'Boney M.',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Disco groove, rhythmic cadence, and primary hook closely follow Boney M.’s 1979 Euro-disco hit.',
          originalLink: 'https://www.youtube.com/watch?v=syoHMNKW9Fo',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-cham-2',
        'am-chamatkar-1992',
        'O Meri Neend Churane Wale',
        'Kumar Sanu, Asha Bhosle',
        'Chamatkar',
        1992,
        {
          adaptationType: 'copied',
          originalSongTitle: "When You're in Love with a Beautiful Woman",
          originalArtist: 'Dr. Hook',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening guitar pattern and chorus melody closely match Dr. Hook’s 1979 soft-rock classic.',
          originalLink: 'https://www.youtube.com/watch?v=bD0CSd6BM6w',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-cham-3',
        'am-chamatkar-1992',
        'Is Pyar Se Meri Taraf Na Dekho',
        'Kumar Sanu, Alka Yagnik',
        'Chamatkar',
        1992
      ),
    ],
  },
  {
    id: 'am-tahalka-1992',
    directorId: 'anu-malik',
    title: 'Tahalka',
    year: 1992,
    cast: 'Dharmendra, Naseeruddin Shah',
    songs: [
      song(
        'am-tah92-1',
        'am-tahalka-1992',
        'Dil Diwane Ka Dola Dildar Ke Liye',
        'Kumar Sanu, Anuradha Paudwal, Babla Mehta',
        'Tahalka',
        1992
      ),
    ],
  },
  {
    id: 'am-virodhi-1992',
    directorId: 'anu-malik',
    title: 'Virodhi',
    year: 1992,
    cast: 'Dharmendra, Armaan Kohli, Anita Raj',
    songs: [
      song(
        'am-vir92-1',
        'am-virodhi-1992',
        'Jaanam Jaanam Jaanam',
        'Kumar Sanu, Asha Bhosle',
        'Virodhi',
        1992
      ),
    ],
  },
  {
    id: 'am-police-officer-1992',
    directorId: 'anu-malik',
    title: 'Police Officer',
    year: 1992,
    cast: 'Jackie Shroff, Karisma Kapoor',
    songs: [
      song(
        'am-po92-1',
        'am-police-officer-1992',
        'Dekho Yeh Ladka Current Maarta Hai',
        'Sadhana Sargam',
        'Police Officer',
        1992
      ),
      song(
        'am-po92-2',
        'am-police-officer-1992',
        'Mujhe Laga Ishq Ka Rog',
        'Udit Narayan, Abhijeet, Sadhana Sargam',
        'Police Officer',
        1992
      ),
    ],
  },
  {
    id: 'am-laat-saab-1992',
    directorId: 'anu-malik',
    title: 'Laat Saab',
    year: 1992,
    cast: 'Jackie Shroff, Neelam Kothari',
    songs: [
      song(
        'am-ls92-1',
        'am-laat-saab-1992',
        'Churaya Tune Dil Mera',
        'Udit Narayan, Alka Yagnik',
        'Laat Saab',
        1992
      ),
      song(
        'am-ls92-2',
        'am-laat-saab-1992',
        'Battiyan Bujhengi',
        'Asha Bhosle',
        'Laat Saab',
        1992
      ),
    ],
  },
  {
    id: 'am-radha-ka-sangam-1992',
    directorId: 'anu-malik',
    title: 'Radha Ka Sangam',
    year: 1992,
    cast: 'Govinda, Juhi Chawla',
    songs: [
      song(
        'am-rks92-1',
        'am-radha-ka-sangam-1992',
        'Bichhuwa More Sajna Ka Pyar',
        'Lata Mangeshkar, Suresh Wadkar',
        'Radha Ka Sangam',
        1992
      ),
      song(
        'am-rks92-2',
        'am-radha-ka-sangam-1992',
        'Prem Hai Janmo Ka Sangam',
        'Sukhwinder Singh, Anuradha Paudwal',
        'Radha Ka Sangam',
        1992
      ),
    ],
  },
  {
    id: 'am-sir-1993',
    directorId: 'anu-malik',
    title: 'Sir',
    year: 1993,
    cast: 'Naseeruddin Shah, Pooja Bhatt, Atul Agnihotri',
    label: 'Tips / Mahesh Bhatt',
    songs: [
      song(
        'am-sir93-1',
        'am-sir-1993',
        'Sun Sun Sun Barsaat Ki Dhun',
        'Kumar Sanu',
        'Sir',
        1993
      ),
      song(
        'am-sir93-2',
        'am-sir-1993',
        'Aaj Humne Dil Ka Har Kissa',
        'Kumar Sanu, Alka Yagnik',
        'Sir',
        1993
      ),
    ],
  },
  {
    id: 'am-phir-teri-kahani-yaad-aayee-1993',
    directorId: 'anu-malik',
    title: 'Phir Teri Kahani Yaad Aayee',
    year: 1993,
    cast: 'Pooja Bhatt, Rahul Roy',
    label: 'Tips',
    significance: 'Major 1993 romantic album revival for Mahesh Bhatt',
    songs: [
      song(
        'am-ptkya-1',
        'am-phir-teri-kahani-yaad-aayee-1993',
        'Tere Dar Par Sanam Chale Aaye',
        'Kumar Sanu',
        'Phir Teri Kahani Yaad Aayee',
        1993,
        {
          adaptationType: 'inspired',
          originalSongTitle: "Theme from Summer of '42",
          originalArtist: 'Michel Legrand',
          originalYear: '1971',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening instrumental prelude echoes Michel Legrand’s Oscar-winning film theme before transitioning into an original ghazal-styled mukhda.',
          originalLink: 'https://www.youtube.com/watch?v=GVx0m_3Lcw0',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-ptkya-2',
        'am-phir-teri-kahani-yaad-aayee-1993',
        'Dil Deta Hai Ro Ro Duhai',
        'Pankaj Udhas, Alka Yagnik',
        'Phir Teri Kahani Yaad Aayee',
        1993
      ),
      song(
        'am-ptkya-3',
        'am-phir-teri-kahani-yaad-aayee-1993',
        'Baadalon Mein Chhup Raha Hai Chand',
        'Kumar Sanu, Alka Yagnik',
        'Phir Teri Kahani Yaad Aayee',
        1993
      ),
    ],
  },
  {
    id: 'am-baazigar-1993',
    directorId: 'anu-malik',
    title: 'Baazigar',
    year: 1993,
    cast: 'Shah Rukh Khan, Kajol, Shilpa Shetty',
    label: 'Venus',
    significance: 'Won Anu Malik his first Filmfare Award for Best Music Director',
    songs: [
      song(
        'am-baaz93-1',
        'am-baazigar-1993',
        'Yeh Kaali Kaali Aankhen',
        'Kumar Sanu, Anu Malik',
        'Baazigar',
        1993,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Yélélé / The Man Who Plays the Mandolino',
          originalArtist: 'Mory Kanté / Dean Martin',
          originalYear: '1990 / 1957',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Energetic rhythmic groove and melodic phrasing compared across archival lists to Mory Kanté’s Afro-pop arrangements and Dean Martin’s classic refrain.',
          originalLink: 'https://www.youtube.com/watch?v=bALjdbZsrN8',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-baaz93-2',
        'am-baazigar-1993',
        'Baazigar O Baazigar',
        'Kumar Sanu, Alka Yagnik',
        'Baazigar',
        1993
      ),
      song(
        'am-baaz93-3',
        'am-baazigar-1993',
        'Kitaben Bahut Si',
        'Asha Bhosle, Vinod Rathod',
        'Baazigar',
        1993
      ),
      song(
        'am-baaz93-4',
        'am-baazigar-1993',
        'Ae Mere Humsafar',
        'Vinod Rathod, Alka Yagnik',
        'Baazigar',
        1993
      ),
    ],
  },
  {
    id: 'am-phool-aur-angaar-1993',
    directorId: 'anu-malik',
    title: 'Phool Aur Angaar',
    year: 1993,
    cast: 'Mithun Chakraborty, Shantipriya',
    songs: [
      song(
        'am-paa93-1',
        'am-phool-aur-angaar-1993',
        'Chori Chori Dil Tera',
        'Kumar Sanu, Sadhana Sargam',
        'Phool Aur Angaar',
        1993
      ),
    ],
  },
  {
    id: 'am-jaanam-1993',
    directorId: 'anu-malik',
    title: 'Jaanam',
    year: 1993,
    cast: 'Rahul Roy, Pooja Bhatt',
    label: 'Tips',
    songs: [
      song(
        'am-jaan93-1',
        'am-jaanam-1993',
        'Dil Kyon Dhadakta Hai',
        'Vipin Sachdeva, Anuradha Paudwal',
        'Jaanam',
        1993,
        {
          lyricist: 'Faaiz Anwar',
          adaptationType: 'copied',
          originalSongTitle: 'Theme from Love Story (Where Do I Begin?)',
          originalArtist: 'Francis Lai / Andy Williams',
          originalYear: '1970',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening piano figure and primary melodic phrase directly follow Francis Lai’s Academy Award-winning Love Story theme.',
          originalLink: 'https://www.youtube.com/watch?v=w6w0cy_1HY4',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-tahqiqaat-1993',
    directorId: 'anu-malik',
    title: 'Tahqiqaat',
    year: 1993,
    cast: 'Jeetendra, Aditya Pancholi, Sangeeta Bijlani',
    songs: [
      song(
        'am-tahq93-1',
        'am-tahqiqaat-1993',
        'Doob Gaye Mere Nain Saajan',
        'Asha Bhosle, Vinod Rathod',
        'Tahqiqaat',
        1993
      ),
      song(
        'am-tahq93-2',
        'am-tahqiqaat-1993',
        'Pyar Jhooth Sahi',
        'Vinod Rathod',
        'Tahqiqaat',
        1993
      ),
    ],
  },
  {
    id: 'am-main-khiladi-tu-anari-1994',
    directorId: 'anu-malik',
    title: 'Main Khiladi Tu Anari',
    year: 1994,
    cast: 'Akshay Kumar, Saif Ali Khan, Shilpa Shetty',
    label: 'Venus',
    songs: [
      song(
        'am-mkta-1',
        'am-main-khiladi-tu-anari-1994',
        'Chura Ke Dil Mera',
        'Kumar Sanu, Alka Yagnik',
        'Main Khiladi Tu Anari',
        1994
      ),
      song(
        'am-mkta-2',
        'am-main-khiladi-tu-anari-1994',
        'Main Khiladi Tu Anari (Title Track)',
        'Abhijeet, Udit Narayan, Anu Malik',
        'Main Khiladi Tu Anari',
        1994
      ),
      song(
        'am-mkta-3',
        'am-main-khiladi-tu-anari-1994',
        'Paas Woh Aane Lage Zara Zara',
        'Kumar Sanu, Alka Yagnik',
        'Main Khiladi Tu Anari',
        1994
      ),
    ],
  },
  {
    id: 'am-aa-gale-lag-jaa-1994',
    directorId: 'anu-malik',
    title: 'Aa Gale Lag Jaa',
    year: 1994,
    cast: 'Jugal Hansraj, Urmila Matondkar',
    songs: [
      song(
        'am-aglj94-1',
        'am-aa-gale-lag-jaa-1994',
        'Aaj Humein Maloom Hua',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Aa Gale Lag Jaa',
        1994
      ),
    ],
  },
  {
    id: 'am-vijaypath-1994',
    directorId: 'anu-malik',
    title: 'Vijaypath',
    year: 1994,
    cast: 'Ajay Devgn, Tabu',
    label: 'Time Magnetics',
    songs: [
      song(
        'am-vp94-1',
        'am-vijaypath-1994',
        'Ruk Ruk Ruk',
        'Alisha Chinai',
        'Vijaypath',
        1994
      ),
      song(
        'am-vp94-2',
        'am-vijaypath-1994',
        'Raah Mein Unse Mulakat Ho Gayi',
        'Kumar Sanu, Alka Yagnik',
        'Vijaypath',
        1994
      ),
    ],
  },
  {
    id: 'am-khuddar-1994',
    directorId: 'anu-malik',
    title: 'Khuddar',
    year: 1994,
    cast: 'Govinda, Karisma Kapoor',
    songs: [
      song(
        'am-khud94-1',
        'am-khuddar-1994',
        'Tumsa Koi Pyara',
        'Kumar Sanu, Alka Yagnik',
        'Khuddar',
        1994
      ),
      song(
        'am-khud94-2',
        'am-khuddar-1994',
        'Sexy Sexy Sexy Mujhe Log Bole',
        'Alisha Chinai, Anu Malik',
        'Khuddar',
        1994
      ),
    ],
  },
  {
    id: 'am-imtihaan-1994',
    directorId: 'anu-malik',
    title: 'Imtihaan',
    year: 1994,
    cast: 'Sunny Deol, Saif Ali Khan, Raveena Tandon',
    label: 'Tips',
    songs: [
      song(
        'am-imt94-1',
        'am-imtihaan-1994',
        'Is Tarah Aashiqui Ka Asar Chhod Jaunga',
        'Kumar Sanu',
        'Imtihaan',
        1994
      ),
      song(
        'am-imt94-2',
        'am-imtihaan-1994',
        'Do Baatein Ho Sakti Hain',
        'Kumar Sanu',
        'Imtihaan',
        1994
      ),
    ],
  },
  {
    id: 'am-naaraaz-1994',
    directorId: 'anu-malik',
    title: 'Naaraaz',
    year: 1994,
    cast: 'Mithun Chakraborty, Pooja Bhatt, Atul Agnihotri',
    songs: [
      song(
        'am-naar94-1',
        'am-naaraaz-1994',
        'Sambhala Hai Maine Bahut Apne Dil Ko',
        'Kumar Sanu',
        'Naaraaz',
        1994
      ),
    ],
  },
  {
    id: 'am-madam-x-1994',
    directorId: 'anu-malik',
    title: 'Madam X',
    year: 1994,
    cast: 'Rekha, Mohsin Khan',
    songs: [
      song(
        'am-mx94-1',
        'am-madam-x-1994',
        'Madam X (Soundtrack)',
        'Anu Malik Ensemble',
        'Madam X',
        1994
      ),
    ],
  },
  {
    id: 'am-yaar-gaddar-1994',
    directorId: 'anu-malik',
    title: 'Yaar Gaddar',
    year: 1994,
    cast: 'Mithun Chakraborty, Saif Ali Khan, Somy Ali',
    songs: [
      song(
        'am-yg94-1',
        'am-yaar-gaddar-1994',
        'Yaar Gaddar (Soundtrack)',
        'Anu Malik Ensemble',
        'Yaar Gaddar',
        1994
      ),
    ],
  },
  {
    id: 'am-zaalim-1994',
    directorId: 'anu-malik',
    title: 'Zaalim',
    year: 1994,
    cast: 'Akshay Kumar, Madhoo',
    songs: [
      song(
        'am-zaal94-1',
        'am-zaalim-1994',
        'Zaalim (Soundtrack)',
        'Anu Malik Ensemble',
        'Zaalim',
        1994
      ),
    ],
  },
  {
    id: 'am-hum-hain-bemisaal-1994',
    directorId: 'anu-malik',
    title: 'Hum Hain Bemisaal',
    year: 1994,
    cast: 'Akshay Kumar, Suniel Shetty, Shilpa Shirodkar',
    songs: [
      song(
        'am-hhb94-1',
        'am-hum-hain-bemisaal-1994',
        'Hum Hain Bemisaal (Soundtrack)',
        'Anu Malik Ensemble',
        'Hum Hain Bemisaal',
        1994
      ),
    ],
  },

  // 1995 - 1999 (Peak 1990s Chartbuster Years)
  {
    id: 'am-naajayaz-1995',
    directorId: 'anu-malik',
    title: 'Naajayaz',
    year: 1995,
    cast: 'Ajay Devgn, Juhi Chawla, Naseeruddin Shah',
    label: 'Tips',
    songs: [
      song(
        'am-naaj95-1',
        'am-naajayaz-1995',
        'Barsaat Ke Mausam Mein',
        'Kumar Sanu, Roop Kumar Rathod',
        'Naajayaz',
        1995
      ),
      song(
        'am-naaj95-2',
        'am-naajayaz-1995',
        'Kya Tum Mujhse Pyar Karte Ho',
        'Kumar Sanu, Alka Yagnik',
        'Naajayaz',
        1995
      ),
      song(
        'am-naaj95-3',
        'am-naajayaz-1995',
        'Lal Lal Hoton Pe',
        'Kumar Sanu, Alka Yagnik',
        'Naajayaz',
        1995
      ),
    ],
  },
  {
    id: 'am-baazi-1995',
    directorId: 'anu-malik',
    title: 'Baazi',
    year: 1995,
    cast: 'Aamir Khan, Mamta Kulkarni',
    label: 'Tips',
    songs: [
      song(
        'am-baazi95-1',
        'am-baazi-1995',
        'Jaane Mujhe Kya Hua',
        'Udit Narayan, Sadhana Sargam',
        'Baazi',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Für Elise',
          originalArtist: 'Ludwig van Beethoven',
          originalYear: '1810',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening motif and melodic progression directly adapt Beethoven’s famed piano bagatelle.',
          originalLink: 'https://www.youtube.com/watch?v=q9bU12gXUyM',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-baazi95-2',
        'am-baazi-1995',
        'Dole Dil Dole',
        'Kavita Krishnamurthy',
        'Baazi',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Come September (Main Theme)',
          originalArtist: 'Bobby Darin / Billy Vaughn',
          originalYear: '1961',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Signature brass/string theme and chorus refrain closely adapt the iconic 1961 Come September instrumental.',
          originalLink: 'https://www.youtube.com/watch?v=HIgOrFjW6WA',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-baazi95-3',
        'am-baazi-1995',
        'Dheere Dheere Aap Mere',
        'Udit Narayan, Sadhana Sargam',
        'Baazi',
        1995
      ),
    ],
  },
  {
    id: 'am-akele-hum-akele-tum-1995',
    directorId: 'anu-malik',
    title: 'Akele Hum Akele Tum',
    year: 1995,
    cast: 'Aamir Khan, Manisha Koirala',
    label: 'Venus',
    significance: 'Notable 1995 album pairing original ballads with Western pop/classical adaptations',
    songs: [
      song(
        'am-ahat-1',
        'am-akele-hum-akele-tum-1995',
        'Raja Ko Rani Se Pyar Ho Gaya',
        'Udit Narayan, Alka Yagnik',
        'Akele Hum Akele Tum',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Speak Softly Love (Love Theme from The Godfather)',
          originalArtist: 'Nino Rota',
          originalYear: '1972',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Main orchestral melody and opening waltz theme closely follow Nino Rota’s Godfather theme.',
          originalLink: 'https://www.youtube.com/watch?v=Flb01Ni3p3M',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-ahat-2',
        'am-akele-hum-akele-tum-1995',
        'Dil Mera Churaya Kyun',
        'Kumar Sanu, Anu Malik',
        'Akele Hum Akele Tum',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Last Christmas',
          originalArtist: 'Wham!',
          originalYear: '1984',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Chorus hook, chord cadence, and synth-pop bounce closely replicate Wham!’s 1984 classic.',
          originalLink: 'https://www.youtube.com/watch?v=E8gmARGvPlI',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-ahat-3',
        'am-akele-hum-akele-tum-1995',
        'Aisa Zakhm Diya Hai',
        'Udit Narayan, Shankar Mahadevan, Aamir Khan',
        'Akele Hum Akele Tum',
        1995,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Child in Time',
          originalArtist: 'Deep Purple',
          originalYear: '1970',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Atmospheric organ-and-guitar build-up and dramatic refrain draw directly from Deep Purple’s 1970 rock epic.',
          originalLink: 'https://www.youtube.com/watch?v=OorZcOzNcgE',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-ahat-4',
        'am-akele-hum-akele-tum-1995',
        'Akele Hum Akele Tum (Title Track)',
        'Udit Narayan, Aditya Narayan',
        'Akele Hum Akele Tum',
        1995
      ),
    ],
  },
  {
    id: 'am-the-gambler-1995',
    directorId: 'anu-malik',
    title: 'The Gambler',
    year: 1995,
    cast: 'Govinda, Shilpa Shetty',
    songs: [
      song(
        'am-gamb95-1',
        'am-the-gambler-1995',
        'Stop That',
        'Devang Patel',
        'The Gambler',
        1995
      ),
      song(
        'am-gamb95-2',
        'am-the-gambler-1995',
        'Yaar Daakiye Mere Kabootar',
        'Kumar Sanu, Alka Yagnik',
        'The Gambler',
        1995
      ),
    ],
  },
  {
    id: 'am-yaarana-1995',
    directorId: 'anu-malik',
    title: 'Yaarana',
    year: 1995,
    cast: 'Rishi Kapoor, Madhuri Dixit',
    label: 'Tips',
    songs: [
      song(
        'am-yaar95-1',
        'am-yaarana-1995',
        'Mera Piya Ghar Aaya',
        'Kavita Krishnamurthy',
        'Yaarana',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Mera Piya Ghar Aaya',
          originalArtist: 'Ustad Nusrat Fateh Ali Khan',
          originalYear: '1992',
          originCategory: 'Nusrat Fateh Ali Khan',
          adaptationNotes:
            'Core chorus and qawwali composition adapted directly from Ustad Nusrat Fateh Ali Khan’s renowned Sufi kalam.',
          originalLink: 'https://www.youtube.com/watch?v=qoqlJGOQtuQ',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-yaar95-2',
        'am-yaarana-1995',
        'Loye Loye',
        'Kavita Krishnamurthy, Udit Narayan',
        'Yaarana',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Loye Loye Aaja Mahi',
          originalArtist: 'Ustad Nusrat Fateh Ali Khan',
          originalYear: '1990s',
          originCategory: 'Nusrat Fateh Ali Khan',
          adaptationNotes:
            'Melodic contour and hook refrain directly adapted from Ustad Nusrat Fateh Ali Khan’s Punjabi track.',
          originalLink: 'https://www.youtube.com/watch?v=D4cEfWuTBNU',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-ram-shastra-1995',
    directorId: 'anu-malik',
    title: 'Ram Shastra',
    year: 1995,
    cast: 'Jackie Shroff, Manisha Koirala',
    songs: [
      song(
        'am-rs95-1',
        'am-ram-shastra-1995',
        'O Main Tera Tum Mere',
        'Abhijeet, Alka Yagnik',
        'Ram Shastra',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'More Than I Can Say',
          originalArtist: 'The Crickets / Leo Sayer',
          originalYear: '1960 / 1980',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Signature verse-and-chorus melody closely follows Leo Sayer’s 1980 rendition of the Buddy Holly-era ballad.',
          originalLink: 'https://www.youtube.com/watch?v=GnIlo91CrBw',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-ram-jaane-1995',
    directorId: 'anu-malik',
    title: 'Ram Jaane',
    year: 1995,
    cast: 'Shah Rukh Khan, Juhi Chawla, Vivek Mushran',
    label: 'PolyGram',
    songs: [
      song(
        'am-rj95-1',
        'am-ram-jaane-1995',
        'Ram Jaane (Title Track)',
        'Udit Narayan, Sonu Nigam, Alka Yagnik',
        'Ram Jaane',
        1995
      ),
    ],
  },
  {
    id: 'am-takkar-1995',
    directorId: 'anu-malik',
    title: 'Takkar',
    year: 1995,
    cast: 'Suniel Shetty, Sonali Bendre, Naseeruddin Shah',
    songs: [
      song(
        'am-takk95-1',
        'am-takkar-1995',
        'Aankhon Mein Base Ho Tum',
        'Abhijeet, Alka Yagnik',
        'Takkar',
        1995
      ),
      song(
        'am-takk95-2',
        'am-takkar-1995',
        'Palkein Ho Khuli Ya Bandh Sanam',
        'Kumar Sanu, Alka Yagnik',
        'Takkar',
        1995
      ),
    ],
  },
  {
    id: 'am-hathkadi-1995',
    directorId: 'anu-malik',
    title: 'Hathkadi',
    year: 1995,
    cast: 'Govinda, Shilpa Shetty, Shakti Kapoor',
    songs: [
      song(
        'am-hk95-1',
        'am-hathkadi-1995',
        'Aanan Faanan Aanan Faanan',
        'Abhijeet, Swarnalatha, Anu Malik',
        'Hathkadi',
        1995
      ),
      song(
        'am-hk95-2',
        'am-hathkadi-1995',
        'Amma Amma',
        'Abhijeet, Swarnalatha',
        'Hathkadi',
        1995
      ),
    ],
  },
  {
    id: 'am-ahankaar-1995',
    directorId: 'anu-malik',
    title: 'Ahankaar',
    year: 1995,
    cast: 'Mithun Chakraborty, Mamta Kulkarni',
    songs: [
      song(
        'am-ah95-1',
        'am-ahankaar-1995',
        'Tere Andar Meri Jaan',
        'Udit Narayan, Alka Yagnik',
        'Ahankaar',
        1995
      ),
      song(
        'am-ah95-2',
        'am-ahankaar-1995',
        'Rama Rama',
        'Poornima',
        'Ahankaar',
        1995
      ),
    ],
  },
  {
    id: 'am-gundaraj-1995',
    directorId: 'anu-malik',
    title: 'Gundaraj',
    year: 1995,
    cast: 'Ajay Devgn, Kajol',
    songs: [
      song(
        'am-gr95-1',
        'am-gundaraj-1995',
        'Ek Nigah Mein',
        'Kumar Sanu, Alisha Chinai',
        'Gundaraj',
        1995
      ),
    ],
  },
  {
    id: 'am-surakshaa-1995',
    directorId: 'anu-malik',
    title: 'Surakshaa',
    year: 1995,
    cast: 'Suniel Shetty, Saif Ali Khan, Aditya Pancholi',
    songs: [
      song(
        'am-sur95-1',
        'am-surakshaa-1995',
        'Surakshaa (Soundtrack)',
        'Anu Malik Ensemble',
        'Surakshaa',
        1995
      ),
    ],
  },
  {
    id: 'am-hulchul-1995',
    directorId: 'anu-malik',
    title: 'Hulchul',
    year: 1995,
    cast: 'Ajay Devgn, Kajol, Vinod Khanna',
    songs: [
      song(
        'am-hul95-1',
        'am-hulchul-1995',
        'Hulchul (Soundtrack)',
        'Anu Malik Ensemble',
        'Hulchul',
        1995
      ),
    ],
  },
  {
    id: 'am-beqabu-1996',
    directorId: 'anu-malik',
    title: 'Beqabu',
    year: 1996,
    cast: 'Sanjay Kapoor, Mamta Kulkarni',
    songs: [
      song(
        'am-beq96-1',
        'am-beqabu-1996',
        'Tu Woh Tu Hai',
        'Udit Narayan, Alka Yagnik',
        'Beqabu',
        1996,
        {
          lyricist: 'Nida Fazli',
          adaptationType: 'copied',
          originalSongTitle: 'The Good, the Bad and the Ugly (Main Title)',
          originalArtist: 'Ennio Morricone',
          originalYear: '1966',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Opening vocal whistle/chant motif and dramatic cadence directly mirror Ennio Morricone’s iconic Western score.',
          originalLink: 'https://www.youtube.com/watch?v=J9EZGHcu3E8',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-chaahat-1996',
    directorId: 'anu-malik',
    title: 'Chaahat',
    year: 1996,
    cast: 'Shah Rukh Khan, Pooja Bhatt, Naseeruddin Shah',
    label: 'Tips',
    songs: [
      song(
        'am-chah96-1',
        'am-chaahat-1996',
        'Chaahat Na Hoti',
        'Vinod Rathod, Alka Yagnik',
        'Chaahat',
        1996
      ),
      song(
        'am-chah96-2',
        'am-chaahat-1996',
        'Dil Ki Tanhai Ko',
        'Kumar Sanu',
        'Chaahat',
        1996
      ),
    ],
  },
  {
    id: 'am-diljale-1996',
    directorId: 'anu-malik',
    title: 'Diljale',
    year: 1996,
    cast: 'Ajay Devgn, Sonali Bendre',
    label: 'T-Series',
    songs: [
      song(
        'am-dilj96-1',
        'am-diljale-1996',
        'Mera Mulk Mera Desh',
        'Kumar Sanu, Aditya Narayan',
        'Diljale',
        1996,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Hatikvah (La Mantovana motif)',
          originalArtist: 'Samuel Cohen / Traditional European',
          originalYear: '1888',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Opening minor-key melodic line bears widely noted resemblance to the Israeli national anthem Hatikvah (rooted in the 16th-century European tune La Mantovana).',
          originalLink: 'https://www.youtube.com/watch?v=DGOEhvlz2eQ',
          referenceSource: 'Public Music Archives',
        }
      ),
      song(
        'am-dilj96-2',
        'am-diljale-1996',
        'Ho Nahin Sakta',
        'Udit Narayan',
        'Diljale',
        1996
      ),
      song(
        'am-dilj96-3',
        'am-diljale-1996',
        'Kuch Tum Behko',
        'Udit Narayan, Alka Yagnik',
        'Diljale',
        1996
      ),
    ],
  },
  {
    id: 'am-khiladiyon-ka-khiladi-1996',
    directorId: 'anu-malik',
    title: 'Khiladiyon Ka Khiladi',
    year: 1996,
    cast: 'Akshay Kumar, Raveena Tandon, Rekha',
    songs: [
      song(
        'am-kkk96-1',
        'am-khiladiyon-ka-khiladi-1996',
        'Aaj Meri Zindagi',
        'Babul Supriyo, Alka Yagnik',
        'Khiladiyon Ka Khiladi',
        1996
      ),
      song(
        'am-kkk96-2',
        'am-khiladiyon-ka-khiladi-1996',
        'In The Night No Control',
        'Sumitra Iyer',
        'Khiladiyon Ka Khiladi',
        1996
      ),
    ],
  },
  {
    id: 'am-daraar-1996',
    directorId: 'anu-malik',
    title: 'Daraar',
    year: 1996,
    cast: 'Juhi Chawla, Rishi Kapoor, Arbaaz Khan',
    songs: [
      song(
        'am-dar96-1',
        'am-daraar-1996',
        'Aisi Mili Nigahen',
        'Kumar Sanu, Alka Yagnik',
        'Daraar',
        1996
      ),
      song(
        'am-dar96-2',
        'am-daraar-1996',
        'Tera Chand Chehra',
        'Kumar Sanu, Alka Yagnik',
        'Daraar',
        1996
      ),
    ],
  },
  {
    id: 'am-ghatak-1996',
    directorId: 'anu-malik',
    title: 'Ghatak: Lethal',
    year: 1996,
    cast: 'Sunny Deol, Meenakshi Seshadri',
    songs: [
      song(
        'am-ghat96-1',
        'am-ghatak-1996',
        'Koi Jaye To Le Aaye',
        'Alka Yagnik, Shankar Mahadevan',
        'Ghatak',
        1996
      ),
      song(
        'am-ghat96-2',
        'am-ghatak-1996',
        'Nigahein Mili Dil Dhadka',
        'Suresh Wadkar, Kavita Krishnamurthy',
        'Ghatak',
        1996
      ),
    ],
  },
  {
    id: 'am-krishna-1996',
    directorId: 'anu-malik',
    title: 'Krishna',
    year: 1996,
    cast: 'Suniel Shetty, Karisma Kapoor',
    label: 'Time Magnetics',
    songs: [
      song(
        'am-kris96-1',
        'am-krishna-1996',
        'Jhanjhariya',
        'Abhijeet, Alka Yagnik',
        'Krishna',
        1996
      ),
    ],
  },
  {
    id: 'am-sapoot-1996',
    directorId: 'anu-malik',
    title: 'Sapoot',
    year: 1996,
    cast: 'Akshay Kumar, Suniel Shetty, Karisma Kapoor, Sonali Bendre',
    songs: [
      song(
        'am-sap96-1',
        'am-sapoot-1996',
        'Kajal Kajal',
        'Amit Kumar, Asha Bhosle',
        'Sapoot',
        1996
      ),
      song(
        'am-sap96-2',
        'am-sapoot-1996',
        'Tera Yeh Dekh Ke Chehra',
        'Kumar Sanu',
        'Sapoot',
        1996
      ),
    ],
  },
  {
    id: 'am-dushman-duniya-ka-1996',
    directorId: 'anu-malik',
    title: 'Dushman Duniya Ka',
    year: 1996,
    cast: 'Manzoor Ali, Laila Mehdin, Jeetendra',
    songs: [
      song(
        'am-ddk96-1',
        'am-dushman-duniya-ka-1996',
        'Dushman Duniya Ka (Soundtrack)',
        'Anu Malik Ensemble',
        'Dushman Duniya Ka',
        1996
      ),
    ],
  },
  {
    id: 'am-zordaar-1996',
    directorId: 'anu-malik',
    title: 'Zordaar',
    year: 1996,
    cast: 'Govinda, Aditya Pancholi, Mandakini',
    songs: [
      song(
        'am-zor96-1',
        'am-zordaar-1996',
        'Zordaar (Soundtrack)',
        'Anu Malik Ensemble',
        'Zordaar',
        1996
      ),
    ],
  },
  {
    id: 'am-border-1997',
    directorId: 'anu-malik',
    title: 'Border',
    year: 1997,
    cast: 'Sunny Deol, Suniel Shetty, Akshaye Khanna, Jackie Shroff',
    label: 'Venus',
    significance: 'Iconic patriotic war-drama soundtrack; lyrics by Javed Akhtar',
    songs: [
      song(
        'am-bord97-1',
        'am-border-1997',
        'Sandese Aate Hain',
        'Sonu Nigam, Roop Kumar Rathod',
        'Border',
        1997,
        {
          lyricist: 'Javed Akhtar',
          adaptationNotes: 'Landmark original composition celebrated as one of Bollywood’s greatest patriotic anthems.',
        }
      ),
      song(
        'am-bord97-2',
        'am-border-1997',
        'Mere Dushman Mere Bhai',
        'Hariharan',
        'Border',
        1997,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'am-bord97-3',
        'am-border-1997',
        'Hamen Jabse Mohabbat',
        'Sonu Nigam, Alka Yagnik',
        'Border',
        1997
      ),
      song(
        'am-bord97-4',
        'am-border-1997',
        'To Chalun',
        'Roop Kumar Rathod',
        'Border',
        1997
      ),
    ],
  },
  {
    id: 'am-virasat-1997',
    directorId: 'anu-malik',
    title: 'Virasat',
    year: 1997,
    cast: 'Anil Kapoor, Tabu, Pooja Batra',
    label: 'T-Series',
    songs: [
      song(
        'am-vir97-1',
        'am-virasat-1997',
        'Taaren Hain Baraati',
        'Kumar Sanu, Jaspinder Narula',
        'Virasat',
        1997,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'El Cóndor Pasa (If I Could)',
          originalArtist: 'Daniel Alomía Robles / Simon & Garfunkel',
          originalYear: '1913 / 1970',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Flute refrain and melodic phrasing draw closely on the famed Peruvian folk melody popularized globally by Simon & Garfunkel.',
          originalLink: 'https://www.youtube.com/watch?v=i6d3yVq1Xtw',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-vir97-2',
        'am-virasat-1997',
        'Payalay Chunmun Chunmun',
        'Kumar Sanu, K. S. Chithra',
        'Virasat',
        1997
      ),
      song(
        'am-vir97-3',
        'am-virasat-1997',
        'Dhol Bajne Laga',
        'Udit Narayan, Kavita Krishnamurthy',
        'Virasat',
        1997
      ),
    ],
  },
  {
    id: 'am-judwaa-1997',
    directorId: 'anu-malik',
    title: 'Judwaa',
    year: 1997,
    cast: 'Salman Khan, Karisma Kapoor, Rambha',
    label: 'Tips',
    songs: [
      song(
        'am-jud97-1',
        'am-judwaa-1997',
        'Oonchi Hai Building',
        'Anu Malik, Poornima',
        'Judwaa',
        1997
      ),
      song(
        'am-jud97-2',
        'am-judwaa-1997',
        'Tan Tana Tan Tan Tara',
        'Abhijeet, Poornima',
        'Judwaa',
        1997
      ),
      song(
        'am-jud97-3',
        'am-judwaa-1997',
        'Duniya Mein Aaye Ho To Love Kar Lo',
        'Kumar Sanu, Kavita Krishnamurthy',
        'Judwaa',
        1997
      ),
    ],
  },
  {
    id: 'am-hameshaa-1997',
    directorId: 'anu-malik',
    title: 'Hameshaa',
    year: 1997,
    cast: 'Saif Ali Khan, Kajol',
    songs: [
      song(
        'am-ham97-1',
        'am-hameshaa-1997',
        'Hameshaa (Hum Aur Tum)',
        'Kumar Sanu, Sadhana Sargam',
        'Hameshaa',
        1997,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Waves of the Danube (Anniversary Waltz)',
          originalArtist: 'Josef Ivanovici',
          originalYear: '1880',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Waltz melody and primary vocal theme directly adapt Ivanovici’s classical Danube waltz.',
          originalLink: 'https://www.youtube.com/watch?v=U60aqpE90Jk',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-ham97-2',
        'am-hameshaa-1997',
        'Aisa Milan Kal Ho Na Ho',
        'Abhijeet, Alka Yagnik',
        'Hameshaa',
        1997,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'The Phantom of the Opera',
          originalArtist: 'Andrew Lloyd Webber',
          originalYear: '1986',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Dramatic descending chromatic motif and theatrical orchestration echo Webber’s stage musical.',
          originalLink: 'https://www.youtube.com/watch?v=AAK-U1E7p2s',
          referenceSource: 'Public Music Archives',
        }
      ),
    ],
  },
  {
    id: 'am-ishq-1997',
    directorId: 'anu-malik',
    title: 'Ishq',
    year: 1997,
    cast: 'Aamir Khan, Ajay Devgn, Juhi Chawla, Kajol',
    label: 'Tips',
    songs: [
      song(
        'am-ishq97-1',
        'am-ishq-1997',
        'Neend Churayee Meri',
        'Kumar Sanu, Udit Narayan, Alka Yagnik, Kavita Krishnamurthy',
        'Ishq',
        1997,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Sending All My Love',
          originalArtist: 'Linear',
          originalYear: '1990',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Main chorus melody, hook cadence, and freestyle dance groove closely replicate Linear’s 1990 pop hit.',
          originalLink: 'https://www.youtube.com/watch?v=YybKvh1WNdk',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-ishq97-2',
        'am-ishq-1997',
        'Mr. Lova Lova',
        'Udit Narayan, Abhijeet, Sudesh Bhosle, Kavita Krishnamurthy, Poornima',
        'Ishq',
        1997,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Boombastic',
          originalArtist: 'Shaggy',
          originalYear: '1995',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Hook phrase ("Mr. Lova Lova") and reggae-inflected vocal delivery draw on Shaggy’s 1995 chartbuster.',
          originalLink: 'https://www.youtube.com/watch?v=K3QZBMRxJKU',
          referenceSource: 'Public Music Archives',
        }
      ),
      song(
        'am-ishq97-3',
        'am-ishq-1997',
        'Ishq Hua Kaise Hua',
        'Udit Narayan, Vibha Sharma',
        'Ishq',
        1997
      ),
    ],
  },
  {
    id: 'am-tamanna-1997',
    directorId: 'anu-malik',
    title: 'Tamanna',
    year: 1997,
    cast: 'Paresh Rawal, Pooja Bhatt, Sharad Kapoor',
    songs: [
      song(
        'am-tam97-1',
        'am-tamanna-1997',
        'Yeh Kya Hua',
        'Kumar Sanu, Alka Yagnik',
        'Tamanna',
        1997
      ),
      song(
        'am-tam97-2',
        'am-tamanna-1997',
        'Shabke Jaage Huye',
        'Alka Yagnik',
        'Tamanna',
        1997
      ),
    ],
  },
  {
    id: 'am-auzaar-1997',
    directorId: 'anu-malik',
    title: 'Auzaar',
    year: 1997,
    cast: 'Salman Khan, Sanjay Kapoor, Shilpa Shetty',
    songs: [
      song(
        'am-auz97-1',
        'am-auzaar-1997',
        'Tujhko Na Dekhoon',
        'Udit Narayan, Alka Yagnik',
        'Auzaar',
        1997
      ),
      song(
        'am-auz97-2',
        'am-auzaar-1997',
        'I Love You',
        'Abhijeet, Anuradha Paudwal',
        'Auzaar',
        1997
      ),
    ],
  },
  {
    id: 'am-mr-and-mrs-khiladi-1997',
    directorId: 'anu-malik',
    title: 'Mr. and Mrs. Khiladi',
    year: 1997,
    cast: 'Akshay Kumar, Juhi Chawla',
    songs: [
      song(
        'am-mmk97-1',
        'am-mr-and-mrs-khiladi-1997',
        'Akela Hai Mr. Khiladi',
        'Udit Narayan',
        'Mr. and Mrs. Khiladi',
        1997
      ),
      song(
        'am-mmk97-2',
        'am-mr-and-mrs-khiladi-1997',
        'Jhooth Bole Kauwa Kaate',
        'Udit Narayan, Alka Yagnik',
        'Mr. and Mrs. Khiladi',
        1997
      ),
    ],
  },
  {
    id: 'am-dhaal-1997',
    directorId: 'anu-malik',
    title: 'Dhaal',
    year: 1997,
    cast: 'Vinod Khanna, Suniel Shetty, Gautami',
    songs: [
      song(
        'am-dhaal97-1',
        'am-dhaal-1997',
        'Dil Maaka Dina',
        'Anu Malik, Suneeta Rao',
        'Dhaal',
        1997
      ),
    ],
  },
  {
    id: 'am-himalay-putra-1997',
    directorId: 'anu-malik',
    title: 'Himalay Putra',
    year: 1997,
    cast: 'Vinod Khanna, Akshaye Khanna, Hema Malini',
    songs: [
      song(
        'am-hp97-1',
        'am-himalay-putra-1997',
        'Himalay Putra (Soundtrack)',
        'Anu Malik Ensemble',
        'Himalay Putra',
        1997
      ),
    ],
  },
  {
    id: 'am-duplicate-1998',
    directorId: 'anu-malik',
    title: 'Duplicate',
    year: 1998,
    cast: 'Shah Rukh Khan, Juhi Chawla, Sonali Bendre',
    label: 'Sony Music',
    songs: [
      song(
        'am-dup98-1',
        'am-duplicate-1998',
        'Ladna Jhagadna',
        'Abhijeet, Kavita Krishnamurthy',
        'Duplicate',
        1998,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'A-Tisket, A-Tasket / Titine',
          originalArtist: 'Ella Fitzgerald / Charlie Chaplin',
          originalYear: '1938 / 1936',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Comedic rhythmic section and nursery-rhyme phrasing cited on ITWOFS (Ella Fitzgerald’s A-Tisket, A-Tasket alongside Chaplin’s Titine motif).',
          originalLink: 'https://www.youtube.com/watch?v=1bgFkeDLpSI',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-dup98-2',
        'am-duplicate-1998',
        'Mere Mehboob Mere Sanam',
        'Udit Narayan, Alka Yagnik',
        'Duplicate',
        1998
      ),
      song(
        'am-dup98-3',
        'am-duplicate-1998',
        'Kathai Aankhon Wali',
        'Kumar Sanu',
        'Duplicate',
        1998
      ),
    ],
  },
  {
    id: 'am-soldier-1998',
    directorId: 'anu-malik',
    title: 'Soldier',
    year: 1998,
    cast: 'Bobby Deol, Preity Zinta',
    label: 'Tips',
    songs: [
      song(
        'am-sol98-1',
        'am-soldier-1998',
        'Soldier Soldier Meethi Baatein Bol Kar',
        'Kumar Sanu, Alka Yagnik',
        'Soldier',
        1998,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Cheri Cheri Lady',
          originalArtist: 'Modern Talking',
          originalYear: '1985',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Signature synth lead, tempo, and chorus melody closely replicate Modern Talking’s 1985 Euro-disco hit.',
          originalLink: 'https://www.youtube.com/watch?v=dCfYh10G1BA',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-sol98-2',
        'am-soldier-1998',
        'Mehfil Mein Baar Baar',
        'Kumar Sanu, Alka Yagnik',
        'Soldier',
        1998
      ),
      song(
        'am-sol98-3',
        'am-soldier-1998',
        'Tera Rang Balle Balle',
        'Sonu Nigam, Jaspinder Narula',
        'Soldier',
        1998
      ),
    ],
  },
  {
    id: 'am-china-gate-1998',
    directorId: 'anu-malik',
    title: 'China Gate',
    year: 1998,
    cast: 'Om Puri, Amrish Puri, Urmila Matondkar',
    songs: [
      song(
        'am-cg98-1',
        'am-china-gate-1998',
        'Chamma Chamma',
        'Alka Yagnik, Vinod Rathod, Shankar Mahadevan',
        'China Gate',
        1998,
        {
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Original folk-fusion dance hit later licensed internationally for Baz Luhrmann’s Moulin Rouge! (2001).',
        }
      ),
    ],
  },
  {
    id: 'am-kareeb-1998',
    directorId: 'anu-malik',
    title: 'Kareeb',
    year: 1998,
    cast: 'Bobby Deol, Neha',
    label: 'Tips',
    significance: 'Melodic Vidhu Vinod Chopra romance with Rahat Indori lyrics',
    songs: [
      song(
        'am-kar98-1',
        'am-kareeb-1998',
        'Chori Chori Jab Nazrein Mili',
        'Kumar Sanu, Sanjivani',
        'Kareeb',
        1998
      ),
      song(
        'am-kar98-2',
        'am-kareeb-1998',
        'Haan Judai Se Darte Hain',
        'Kumar Sanu, Alka Yagnik',
        'Kareeb',
        1998
      ),
    ],
  },
  {
    id: 'am-hero-hindustani-1998',
    directorId: 'anu-malik',
    title: 'Hero Hindustani',
    year: 1998,
    cast: 'Arshad Warsi, Namrata Shirodkar',
    songs: [
      song(
        'am-hh98-1',
        'am-hero-hindustani-1998',
        'Hero Hindustani (Title Track)',
        'Kumar Sanu, Alka Yagnik',
        'Hero Hindustani',
        1998
      ),
      song(
        'am-hh98-2',
        'am-hero-hindustani-1998',
        'Chand Nazar Aa Gaya',
        'Sonu Nigam, Alka Yagnik, Iqbal Afjal Sabri',
        'Hero Hindustani',
        1998
      ),
    ],
  },
  {
    id: 'am-prem-aggan-1998',
    directorId: 'anu-malik',
    title: 'Prem Aggan',
    year: 1998,
    cast: 'Fardeen Khan, Meghna Kothari',
    songs: [
      song(
        'am-pa98-1',
        'am-prem-aggan-1998',
        'Har Dam Dam Bedam',
        'Hariharan, Shankar Mahadevan, Sadhana Sargam',
        'Prem Aggan',
        1998
      ),
      song(
        'am-pa98-2',
        'am-prem-aggan-1998',
        'Hum Tumse Mohabbat Karte Hain',
        'Udit Narayan, Kavita Krishnamurthy',
        'Prem Aggan',
        1998
      ),
    ],
  },
  {
    id: 'am-wajood-1998',
    directorId: 'anu-malik',
    title: 'Wajood',
    year: 1998,
    cast: 'Nana Patekar, Madhuri Dixit',
    songs: [
      song(
        'am-waj98-1',
        'am-wajood-1998',
        'Ki Toot Gayi',
        'Kavita Krishnamurthy, Sapna Awasthi',
        'Wajood',
        1998
      ),
    ],
  },
  {
    id: 'am-gharwali-baharwali-1998',
    directorId: 'anu-malik',
    title: 'Gharwali Baharwali',
    year: 1998,
    cast: 'Anil Kapoor, Raveena Tandon, Rambha',
    songs: [
      song(
        'am-gb98-1',
        'am-gharwali-baharwali-1998',
        'Gharwali Baharwali (Soundtrack)',
        'Anu Malik Ensemble',
        'Gharwali Baharwali',
        1998
      ),
    ],
  },
  {
    id: 'am-baadshah-1999',
    directorId: 'anu-malik',
    title: 'Baadshah',
    year: 1999,
    cast: 'Shah Rukh Khan, Twinkle Khanna',
    label: 'Venus',
    songs: [
      song(
        'am-baad99-1',
        'am-baadshah-1999',
        'Woh Ladki Jo Sabse Alag Hai',
        'Abhijeet',
        'Baadshah',
        1999
      ),
      song(
        'am-baad99-2',
        'am-baadshah-1999',
        'Hum To Deewane Hue Yaar',
        'Abhijeet, Alka Yagnik',
        'Baadshah',
        1999
      ),
      song(
        'am-baad99-3',
        'am-baadshah-1999',
        'Baadshah O Baadshah',
        'Abhijeet',
        'Baadshah',
        1999
      ),
    ],
  },
  {
    id: 'am-biwi-no-1-1999',
    directorId: 'anu-malik',
    title: 'Biwi No. 1',
    year: 1999,
    cast: 'Salman Khan, Karisma Kapoor, Anil Kapoor, Sushmita Sen',
    label: 'Tips',
    songs: [
      song(
        'am-bn1-1',
        'am-biwi-no-1-1999',
        'Chunari Chunari',
        'Abhijeet, Anuradha Sriram',
        'Biwi No 1',
        1999
      ),
      song(
        'am-bn1-2',
        'am-biwi-no-1-1999',
        'Ishq Sona Hai',
        'Shankar Mahadevan, Hema Sardesai',
        'Biwi No 1',
        1999
      ),
      song(
        'am-bn1-3',
        'am-biwi-no-1-1999',
        'Hai Hai Mirchi',
        'Sukhwinder Singh, Alka Yagnik',
        'Biwi No 1',
        1999
      ),
    ],
  },
  {
    id: 'am-haseena-maan-jaayegi-1999',
    directorId: 'anu-malik',
    title: 'Haseena Maan Jaayegi',
    year: 1999,
    cast: 'Govinda, Sanjay Dutt, Karisma Kapoor',
    songs: [
      song(
        'am-hmj99-1',
        'am-haseena-maan-jaayegi-1999',
        'What Is Mobile Number',
        'Sonu Nigam, Alka Yagnik',
        'Haseena Maan Jaayegi',
        1999
      ),
      song(
        'am-hmj99-2',
        'am-haseena-maan-jaayegi-1999',
        'I Love You Bol Daal',
        'Sonu Nigam, Alka Yagnik, Sudesh Bhosle',
        'Haseena Maan Jaayegi',
        1999
      ),
    ],
  },
  {
    id: 'am-hum-aapke-dil-mein-rehte-hain-1999',
    directorId: 'anu-malik',
    title: 'Hum Aapke Dil Mein Rehte Hain',
    year: 1999,
    cast: 'Anil Kapoor, Kajol',
    songs: [
      song(
        'am-hadmrh-1',
        'am-hum-aapke-dil-mein-rehte-hain-1999',
        'Hum Aapke Dil Mein Rehte Hain',
        'Kumar Sanu, Anuradha Paudwal',
        'Hum Aapke Dil Mein Rehte Hain',
        1999
      ),
      song(
        'am-hadmrh-2',
        'am-hum-aapke-dil-mein-rehte-hain-1999',
        'Kasam Se Kasam Se',
        'Kumar Sanu, Anuradha Paudwal',
        'Hum Aapke Dil Mein Rehte Hain',
        1999
      ),
    ],
  },
  {
    id: 'am-jaanam-samjha-karo-1999',
    directorId: 'anu-malik',
    title: 'Jaanam Samjha Karo',
    year: 1999,
    cast: 'Salman Khan, Urmila Matondkar',
    songs: [
      song(
        'am-jsk99-1',
        'am-jaanam-samjha-karo-1999',
        'I Was Made For Loving You',
        'Kamaal Khan, Anu Malik',
        'Jaanam Samjha Karo',
        1999
      ),
      song(
        'am-jsk99-2',
        'am-jaanam-samjha-karo-1999',
        'Jaanam Samjha Karo (Title Song)',
        'Anu Malik, Hema Sardesai',
        'Jaanam Samjha Karo',
        1999
      ),
    ],
  },
  {
    id: 'am-sooryavansham-1999',
    directorId: 'anu-malik',
    title: 'Sooryavansham',
    year: 1999,
    cast: 'Amitabh Bachchan, Soundarya',
    songs: [
      song(
        'am-sv99-1',
        'am-sooryavansham-1999',
        'Kore Kore Sapne',
        'Kumar Sanu, Anuradha Paudwal',
        'Sooryavansham',
        1999
      ),
    ],
  },
  {
    id: 'am-aarzoo-1999',
    directorId: 'anu-malik',
    title: 'Aarzoo',
    year: 1999,
    cast: 'Madhuri Dixit, Akshay Kumar, Saif Ali Khan',
    label: 'T-Series',
    songs: [
      song(
        'am-aar99-1',
        'am-aarzoo-1999',
        'Ab Tere Dil Mein To',
        'Kumar Sanu, Alka Yagnik',
        'Aarzoo',
        1999
      ),
      song(
        'am-aar99-2',
        'am-aarzoo-1999',
        'Sajan Sajan Teri Dulhan',
        'Alka Yagnik',
        'Aarzoo',
        1999
      ),
    ],
  },
  {
    id: 'am-kartoos-1999',
    directorId: 'anu-malik',
    title: 'Kartoos',
    year: 1999,
    cast: 'Sanjay Dutt, Jackie Shroff, Manisha Koirala',
    significance: 'Multi-composer soundtrack alongside Nusrat Fateh Ali Khan & Bally Sagoo',
    songs: [
      song(
        'am-kart99-1',
        'am-kartoos-1999',
        'Kartoos (Soundtrack Contributions)',
        'Udit Narayan, Alka Yagnik',
        'Kartoos',
        1999
      ),
    ],
  },

  // 2000 - 2009 (National Award, Main Hoon Na & Millennium Hits)
  {
    id: 'am-refugee-2000',
    directorId: 'anu-malik',
    title: 'Refugee',
    year: 2000,
    cast: 'Abhishek Bachchan, Kareena Kapoor',
    label: 'Sony Music',
    significance: 'Won the National Film Award for Best Music Direction & Filmfare Special Jury Award',
    songs: [
      song(
        'am-ref00-1',
        'am-refugee-2000',
        'Panchi Nadiyan Pawan Ke Jhonke',
        'Sonu Nigam, Alka Yagnik',
        'Refugee',
        2000,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'am-ref00-2',
        'am-refugee-2000',
        'Aisa Lagta Hai',
        'Sonu Nigam, Alka Yagnik',
        'Refugee',
        2000,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'am-ref00-3',
        'am-refugee-2000',
        'Mere Humsafar',
        'Sonu Nigam, Alka Yagnik',
        'Refugee',
        2000
      ),
    ],
  },
  {
    id: 'am-hera-pheri-2000',
    directorId: 'anu-malik',
    title: 'Hera Pheri',
    year: 2000,
    cast: 'Akshay Kumar, Suniel Shetty, Paresh Rawal, Tabu',
    songs: [
      song(
        'am-hp00-1',
        'am-hera-pheri-2000',
        'Jab Bhi Koi Haseena',
        'KK',
        'Hera Pheri',
        2000,
        {
          lyricist: 'Sameer',
          adaptationType: 'copied',
          originalSongTitle: 'Return of the Mack',
          originalArtist: 'Mark Morrison',
          originalYear: '1996',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'R&B groove, bass bounce, and opening vocal cadence directly match Mark Morrison’s 1996 international hit.',
          originalLink: 'https://www.youtube.com/watch?v=uB1D9wWxd2w',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-hp00-2',
        'am-hera-pheri-2000',
        'Denewala Jab Bhi Deta',
        'Abhijeet, Hariharan, Vinod Rathod',
        'Hera Pheri',
        2000
      ),
      song(
        'am-hp00-3',
        'am-hera-pheri-2000',
        'Main Ladki Po Po Po',
        'Abhijeet, Kavita Krishnamurthy',
        'Hera Pheri',
        2000
      ),
    ],
  },
  {
    id: 'am-mela-2000',
    directorId: 'anu-malik',
    title: 'Mela',
    year: 2000,
    cast: 'Aamir Khan, Twinkle Khanna',
    songs: [
      song(
        'am-mela00-1',
        'am-mela-2000',
        'Mela Dilon Ka',
        'Alka Yagnik, Roop Kumar Rathod, Shankar Mahadevan',
        'Mela',
        2000
      ),
      song(
        'am-mela00-2',
        'am-mela-2000',
        'Dhadkan Mein Tum',
        'Kumar Sanu, Alka Yagnik',
        'Mela',
        2000
      ),
    ],
  },
  {
    id: 'am-josh-2000',
    directorId: 'anu-malik',
    title: 'Josh',
    year: 2000,
    cast: 'Shah Rukh Khan, Aishwarya Rai, Chandrachur Singh',
    label: 'Venus',
    songs: [
      song(
        'am-josh00-1',
        'am-josh-2000',
        'Badan Juda Hote Hain',
        'Kumar Sanu, Alka Yagnik',
        'Josh',
        2000,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Conquest of Paradise',
          originalArtist: 'Vangelis',
          originalYear: '1992',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Choral and orchestral interludes closely resemble Vangelis’s 1492: Conquest of Paradise theme.',
          originalLink: 'https://www.youtube.com/watch?v=7ufkMTshjz8',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-josh00-2',
        'am-josh-2000',
        'Apun Bola Tu Meri Laila',
        'Shah Rukh Khan, Hema Sardesai',
        'Josh',
        2000
      ),
      song(
        'am-josh00-3',
        'am-josh-2000',
        'Haye Mera Dil',
        'Udit Narayan, Alka Yagnik',
        'Josh',
        2000
      ),
    ],
  },
  {
    id: 'am-har-dil-jo-pyar-karega-2000',
    directorId: 'anu-malik',
    title: 'Har Dil Jo Pyar Karega',
    year: 2000,
    cast: 'Salman Khan, Preity Zinta, Rani Mukerji',
    label: 'T-Series',
    songs: [
      song(
        'am-hdjpk-1',
        'am-har-dil-jo-pyar-karega-2000',
        'Ek Garam Chai Ki Pyali Ho',
        'Anu Malik',
        'Har Dil Jo Pyar Karega',
        2000,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'We Will Rock You',
          originalArtist: 'Queen',
          originalYear: '1977',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Stomp-stomp-clap rhythmic hook and chant cadence frequently compared to Queen’s stadium anthem.',
          originalLink: 'https://www.youtube.com/watch?v=-tJYN-eG1zk',
          referenceSource: 'Public Music Discussions',
        }
      ),
      song(
        'am-hdjpk-2',
        'am-har-dil-jo-pyar-karega-2000',
        'Har Dil Jo Pyar Karega (Title Track)',
        'Udit Narayan, Alka Yagnik',
        'Har Dil Jo Pyar Karega',
        2000
      ),
      song(
        'am-hdjpk-3',
        'am-har-dil-jo-pyar-karega-2000',
        'Dil Dil Deewana',
        'Udit Narayan, Alka Yagnik',
        'Har Dil Jo Pyar Karega',
        2000
      ),
    ],
  },
  {
    id: 'am-fiza-2000',
    directorId: 'anu-malik',
    title: 'Fiza',
    year: 2000,
    cast: 'Hrithik Roshan, Karisma Kapoor, Jaya Bachchan',
    label: 'Tips',
    songs: [
      song(
        'am-fiza00-1',
        'am-fiza-2000',
        'Aaja Mahiya',
        'Udit Narayan, Alka Yagnik',
        'Fiza',
        2000,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Aaja Mahiya (Pakistani Pop / Folk Parallels)',
          originalArtist: 'Shazia Manzoor / Pakistani Folk-Pop',
          originalYear: '1990s',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Refrain phrasing and Punjabi pop-folk cadence frequently compared by listeners to Pakistani pop-folk recordings of the late 1990s.',
          originalLink: 'https://www.youtube.com/watch?v=5wzHwUB85fs',
          referenceSource: 'Public Music Archives',
        }
      ),
      song(
        'am-fiza00-2',
        'am-fiza-2000',
        'Tu Fiza Hai',
        'Sonu Nigam, Alka Yagnik, Prashant Samaddar',
        'Fiza',
        2000
      ),
      song(
        'am-fiza00-3',
        'am-fiza-2000',
        'Mehboob Mere',
        'Sunidhi Chauhan, Karsan Sargathia',
        'Fiza',
        2000
      ),
    ],
  },
  {
    id: 'am-badal-2000',
    directorId: 'anu-malik',
    title: 'Badal',
    year: 2000,
    cast: 'Bobby Deol, Rani Mukerji',
    label: 'T-Series',
    songs: [
      song(
        'am-bad00-1',
        'am-badal-2000',
        'Na Milo Humse Zyada',
        'Alka Yagnik, Abhijeet',
        'Badal',
        2000
      ),
      song(
        'am-bad00-2',
        'am-badal-2000',
        'Jugni Jugni',
        'Sukhwinder Singh, Jaspinder Narula',
        'Badal',
        2000
      ),
    ],
  },
  {
    id: 'am-khauff-2000',
    directorId: 'anu-malik',
    title: 'Khauff',
    year: 2000,
    cast: 'Sanjay Dutt, Manisha Koirala',
    songs: [
      song(
        'am-khf00-1',
        'am-khauff-2000',
        'Nach Baby Nach Kudi',
        'Daler Mehndi, Asha Bhosle',
        'Khauff',
        2000
      ),
      song(
        'am-khf00-2',
        'am-khauff-2000',
        'Nateeja Hamari Mohabbat Ka',
        'Kumar Sanu, Alka Yagnik',
        'Khauff',
        2000
      ),
    ],
  },
  {
    id: 'am-gang-2000',
    directorId: 'anu-malik',
    title: 'Gang',
    year: 2000,
    cast: 'Jackie Shroff, Nana Patekar, Juhi Chawla',
    songs: [
      song(
        'am-gang00-1',
        'am-gang-2000',
        'Dil Hai Baichain Aaja',
        'Kumar Sanu, Sadhana Sargam',
        'Gang',
        2000
      ),
      song(
        'am-gang00-2',
        'am-gang-2000',
        'Meri Payal Bole',
        'Alka Yagnik, Sunidhi Chauhan',
        'Gang',
        2000
      ),
    ],
  },
  {
    id: 'am-jung-2000',
    directorId: 'anu-malik',
    title: 'Jung',
    year: 2000,
    cast: 'Sanjay Dutt, Jackie Shroff, Shilpa Shetty',
    songs: [
      song(
        'am-jung00-1',
        'am-jung-2000',
        'Aaila Re',
        'Alka Yagnik, Anu Malik',
        'Jung',
        2000
      ),
      song(
        'am-jung00-2',
        'am-jung-2000',
        'Mere Bina Tum',
        'Kumar Sanu, Alka Yagnik',
        'Jung',
        2000
      ),
    ],
  },
  {
    id: 'am-aaghaaz-2000',
    directorId: 'anu-malik',
    title: 'Aaghaaz',
    year: 2000,
    cast: 'Suniel Shetty, Sushmita Sen',
    songs: [
      song(
        'am-aagh00-1',
        'am-aaghaaz-2000',
        'Dil Keh Raha Hai',
        'Udit Narayan, Alka Yagnik',
        'Aaghaaz',
        2000
      ),
    ],
  },
  {
    id: 'am-asoka-2001',
    directorId: 'anu-malik',
    title: 'Aśoka',
    year: 2001,
    cast: 'Shah Rukh Khan, Kareena Kapoor',
    label: 'Sony Music',
    songs: [
      song(
        'am-aso01-1',
        'am-asoka-2001',
        'San Sanana',
        'Alka Yagnik, Hema Sardesai',
        'Asoka',
        2001
      ),
      song(
        'am-aso01-2',
        'am-asoka-2001',
        'Roshni Se',
        'Abhijeet, Alka Yagnik',
        'Asoka',
        2001
      ),
      song(
        'am-aso01-3',
        'am-asoka-2001',
        'Raat Ka Nasha',
        'K. S. Chithra, Abhijeet',
        'Asoka',
        2001
      ),
    ],
  },
  {
    id: 'am-mujhe-kucch-kehna-hai-2001',
    directorId: 'anu-malik',
    title: 'Mujhe Kucch Kehna Hai',
    year: 2001,
    cast: 'Tusshar Kapoor, Kareena Kapoor',
    label: 'Tips',
    songs: [
      song(
        'am-mkkh-1',
        'am-mujhe-kucch-kehna-hai-2001',
        'Mujhe Kucch Kehna Hai',
        'KK',
        'Mujhe Kucch Kehna Hai',
        2001
      ),
      song(
        'am-mkkh-2',
        'am-mujhe-kucch-kehna-hai-2001',
        'Dupatta Mera',
        'Anuradha Sriram',
        'Mujhe Kucch Kehna Hai',
        2001
      ),
    ],
  },
  {
    id: 'am-yaadein-2001',
    directorId: 'anu-malik',
    title: 'Yaadein',
    year: 2001,
    cast: 'Hrithik Roshan, Kareena Kapoor, Jackie Shroff',
    label: 'Tips',
    songs: [
      song(
        'am-yaad01-1',
        'am-yaadein-2001',
        'Yaadein Yaad Aati Hain',
        'Hariharan, Mahalaxmi Iyer, Sunidhi Chauhan',
        'Yaadein',
        2001
      ),
      song(
        'am-yaad01-2',
        'am-yaadein-2001',
        'Eli Re Eli',
        'Alka Yagnik, Kavita Krishnamurthy, Hema Sardesai, Udit Narayan',
        'Yaadein',
        2001
      ),
      song(
        'am-yaad01-3',
        'am-yaadein-2001',
        'Jab Dil Miley',
        'Udit Narayan, Sukhwinder Singh, Asha Bhosle',
        'Yaadein',
        2001
      ),
    ],
  },
  {
    id: 'am-aks-2001',
    directorId: 'anu-malik',
    title: 'Aks',
    year: 2001,
    cast: 'Amitabh Bachchan, Manoj Bajpayee, Raveena Tandon',
    significance: 'Critically acclaimed experimental soundtrack with Gulzar lyrics',
    songs: [
      song(
        'am-aks01-1',
        'am-aks-2001',
        'Raat Aati Hai',
        'Vasundhara Das',
        'Aks',
        2001,
        { lyricist: 'Gulzar' }
      ),
      song(
        'am-aks01-2',
        'am-aks-2001',
        'Banda Yeh Bindaas Hai',
        'KK, Shaan, K. S. Chithra',
        'Aks',
        2001,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'am-ajnabee-2001',
    directorId: 'anu-malik',
    title: 'Ajnabee',
    year: 2001,
    cast: 'Akshay Kumar, Bobby Deol, Kareena Kapoor, Bipasha Basu',
    label: 'Tips',
    songs: [
      song(
        'am-ajn01-1',
        'am-ajnabee-2001',
        'Mujhko Neend Aa Rahi Hai',
        'Sonu Nigam, Sunidhi Chauhan',
        'Ajnabee',
        2001
      ),
      song(
        'am-ajn01-2',
        'am-ajnabee-2001',
        'Kaun Main Haan Tum',
        'Udit Narayan, Alka Yagnik',
        'Ajnabee',
        2001
      ),
      song(
        'am-ajn01-3',
        'am-ajnabee-2001',
        'Mehbooba Mehbooba',
        'Adnan Sami, Sunidhi Chauhan',
        'Ajnabee',
        2001
      ),
    ],
  },
  {
    id: 'am-chori-chori-chupke-chupke-2001',
    directorId: 'anu-malik',
    title: 'Chori Chori Chupke Chupke',
    year: 2001,
    cast: 'Salman Khan, Rani Mukerji, Preity Zinta',
    label: 'Universal',
    songs: [
      song(
        'am-cccc-1',
        'am-chori-chori-chupke-chupke-2001',
        'Dekhne Walon Ne',
        'Udit Narayan, Alka Yagnik',
        'Chori Chori Chupke Chupke',
        2001
      ),
      song(
        'am-cccc-2',
        'am-chori-chori-chupke-chupke-2001',
        'Deewana Hai Yeh Mann',
        'Sonu Nigam, Alka Yagnik',
        'Chori Chori Chupke Chupke',
        2001
      ),
    ],
  },
  {
    id: 'am-lajja-2001',
    directorId: 'anu-malik',
    title: 'Lajja',
    year: 2001,
    cast: 'Manisha Koirala, Madhuri Dixit, Ajay Devgn, Anil Kapoor',
    label: 'Tips',
    songs: [
      song(
        'am-laj01-1',
        'am-lajja-2001',
        'Badi Mushkil',
        'Alka Yagnik',
        'Lajja',
        2001
      ),
      song(
        'am-laj01-2',
        'am-lajja-2001',
        'Sajan Ke Ghar Jana Hai',
        'Alka Yagnik, Sonu Nigam, Richa Sharma',
        'Lajja',
        2001
      ),
    ],
  },
  {
    id: 'am-awara-paagal-deewana-2002',
    directorId: 'anu-malik',
    title: 'Awara Paagal Deewana',
    year: 2002,
    cast: 'Akshay Kumar, Suniel Shetty, Aftab Shivdasani, Paresh Rawal',
    songs: [
      song(
        'am-apd02-1',
        'am-awara-paagal-deewana-2002',
        'More Sawariya',
        'Sunidhi Chauhan, Shaan, Anu Malik',
        'Awara Paagal Deewana',
        2002
      ),
      song(
        'am-apd02-2',
        'am-awara-paagal-deewana-2002',
        'Ya Habibi',
        'Adnan Sami, Shaan, Sunidhi Chauhan',
        'Awara Paagal Deewana',
        2002
      ),
    ],
  },
  {
    id: 'am-soch-2002',
    directorId: 'anu-malik',
    title: 'Soch',
    year: 2002,
    cast: 'Sanjay Kapoor, Arbaaz Khan, Raveena Tandon',
    songs: [
      song(
        'am-soch02-1',
        'am-soch-2002',
        'Dil Dhoondta Hai',
        'Kumar Sanu, Alka Yagnik',
        'Soch',
        2002,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Ojos Así',
          originalArtist: 'Shakira',
          originalYear: '1998',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Middle-Eastern melodic hook and percussion groove directly follow Shakira’s 1998 Latin-Arabic hit.',
          originalLink: 'https://www.youtube.com/watch?v=ZxnFw6fUxwI',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'am-filhaal-2002',
    directorId: 'anu-malik',
    title: 'Filhaal...',
    year: 2002,
    cast: 'Tabu, Sushmita Sen, Sanjay Suri',
    songs: [
      song(
        'am-fil02-1',
        'am-filhaal-2002',
        'Filhaal',
        'Asha Bhosle',
        'Filhaal',
        2002,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'am-ab-ke-baras-2002',
    directorId: 'anu-malik',
    title: 'Ab Ke Baras',
    year: 2002,
    cast: 'Arya Babbar, Amrita Rao',
    songs: [
      song(
        'am-akb02-1',
        'am-ab-ke-baras-2002',
        'Deewane Aate Jaate',
        'Sonu Nigam, Alka Yagnik, Kunal Ganjawala',
        'Ab Ke Baras',
        2002
      ),
      song(
        'am-akb02-2',
        'am-ab-ke-baras-2002',
        'Saari Umar Main Rahoon',
        'Sonu Nigam',
        'Ab Ke Baras',
        2002
      ),
    ],
  },
  {
    id: 'am-badhaai-ho-badhaai-2002',
    directorId: 'anu-malik',
    title: 'Badhaai Ho Badhaai',
    year: 2002,
    cast: 'Anil Kapoor, Shilpa Shetty, Keerthi Reddy',
    songs: [
      song(
        'am-bhb02-1',
        'am-badhaai-ho-badhaai-2002',
        'Badhaai Ho Badhaai (Title Track)',
        'Udit Narayan',
        'Badhaai Ho Badhaai',
        2002
      ),
      song(
        'am-bhb02-2',
        'am-badhaai-ho-badhaai-2002',
        'Teri Zindagi Mein Pyar Hai',
        'KK, Alka Yagnik',
        'Badhaai Ho Badhaai',
        2002
      ),
    ],
  },
  {
    id: 'am-jaani-dushman-2002',
    directorId: 'anu-malik',
    title: 'Jaani Dushman: Ek Anokhi Kahani',
    year: 2002,
    cast: 'Sunny Deol, Akshay Kumar, Suniel Shetty, Manisha Koirala',
    songs: [
      song(
        'am-jd02-1',
        'am-jaani-dushman-2002',
        'Jaani Dushman (Soundtrack)',
        'Sonu Nigam, Alka Yagnik',
        'Jaani Dushman Ek Anokhi Kahani',
        2002
      ),
    ],
  },
  {
    id: 'am-ishq-vishk-2003',
    directorId: 'anu-malik',
    title: 'Ishq Vishk',
    year: 2003,
    cast: 'Shahid Kapoor, Amrita Rao, Shenaz Treasury',
    label: 'Tips',
    songs: [
      song(
        'am-iv03-1',
        'am-ishq-vishk-2003',
        'Chot Dil Pe Lagi',
        'Kumar Sanu, Alisha Chinai',
        'Ishq Vishk',
        2003
      ),
      song(
        'am-iv03-2',
        'am-ishq-vishk-2003',
        'Aankhon Ne Tumhari',
        'Kumar Sanu, Alka Yagnik',
        'Ishq Vishk',
        2003
      ),
    ],
  },
  {
    id: 'am-loc-kargil-2003',
    directorId: 'anu-malik',
    title: 'LOC: Kargil',
    year: 2003,
    cast: 'Sanjay Dutt, Ajay Devgn, Saif Ali Khan, Abhishek Bachchan',
    songs: [
      song(
        'am-loc03-1',
        'am-loc-kargil-2003',
        'Main Kahin Bhi Rahoon',
        'Udit Narayan, Sonu Nigam, Roop Kumar Rathod, Hariharan, Sukhwinder Singh',
        'LOC Kargil',
        2003
      ),
      song(
        'am-loc03-2',
        'am-loc-kargil-2003',
        'Seemayen Bulayen',
        'Alka Yagnik',
        'LOC Kargil',
        2003
      ),
    ],
  },
  {
    id: 'am-munna-bhai-mbbs-2003',
    directorId: 'anu-malik',
    title: 'Munna Bhai M.B.B.S.',
    year: 2003,
    cast: 'Sanjay Dutt, Arshad Warsi, Gracy Singh',
    label: 'T-Series',
    songs: [
      song(
        'am-mb03-1',
        'am-munna-bhai-mbbs-2003',
        'M Bole To',
        'Vinod Rathod, Sanjay Dutt, Prachi',
        'Munna Bhai MBBS',
        2003
      ),
      song(
        'am-mb03-2',
        'am-munna-bhai-mbbs-2003',
        'Dekh Le',
        'Sunidhi Chauhan, Anu Malik',
        'Munna Bhai MBBS',
        2003
      ),
      song(
        'am-mb03-3',
        'am-munna-bhai-mbbs-2003',
        'Chann Chann',
        'Vinod Rathod, Shreya Ghoshal',
        'Munna Bhai MBBS',
        2003
      ),
    ],
  },
  {
    id: 'am-main-prem-ki-diwani-hoon-2003',
    directorId: 'anu-malik',
    title: 'Main Prem Ki Diwani Hoon',
    year: 2003,
    cast: 'Hrithik Roshan, Kareena Kapoor, Abhishek Bachchan',
    label: 'Saregama',
    songs: [
      song(
        'am-mpkdh-1',
        'am-main-prem-ki-diwani-hoon-2003',
        'Kasam Ki Kasam',
        'K. S. Chithra, Shaan',
        'Main Prem Ki Diwani Hoon',
        2003
      ),
      song(
        'am-mpkdh-2',
        'am-main-prem-ki-diwani-hoon-2003',
        'Chali Aayee Chali Aayee',
        'K. S. Chithra, KK',
        'Main Prem Ki Diwani Hoon',
        2003
      ),
    ],
  },
  {
    id: 'am-khushi-2003',
    directorId: 'anu-malik',
    title: 'Khushi',
    year: 2003,
    cast: 'Fardeen Khan, Kareena Kapoor',
    songs: [
      song(
        'am-khu03-1',
        'am-khushi-2003',
        'Haye Re Haye Tera Ghagra',
        'Sunidhi Chauhan',
        'Khushi',
        2003
      ),
    ],
  },
  {
    id: 'am-inteha-2003',
    directorId: 'anu-malik',
    title: 'Inteha',
    year: 2003,
    cast: 'Ashmit Patel, Vidya Malvade',
    songs: [
      song(
        'am-int03-1',
        'am-inteha-2003',
        'Inteha (Soundtrack)',
        'Anu Malik Ensemble',
        'Inteha',
        2003
      ),
    ],
  },
  {
    id: 'am-main-hoon-na-2004',
    directorId: 'anu-malik',
    title: 'Main Hoon Na',
    year: 2004,
    cast: 'Shah Rukh Khan, Sushmita Sen, Zayed Khan, Amrita Rao',
    label: 'T-Series',
    significance: 'Won Anu Malik his second Filmfare Award for Best Music Director',
    songs: [
      song(
        'am-mhn04-1',
        'am-main-hoon-na-2004',
        'Tumse Milke Dil Ka Hai Jo Haal',
        'Sonu Nigam, Altaf Sabri, Hashim Sabri',
        'Main Hoon Na',
        2004,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'In Zaire',
          originalArtist: 'Johnny Wakelin',
          originalYear: '1976',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Interlude groove and rhythmic backing compared on ITWOFS to Johnny Wakelin’s 1976 track alongside traditional qawwali structure.',
          originalLink: 'https://www.youtube.com/watch?v=GUpGRXT18R8',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-mhn04-2',
        'am-main-hoon-na-2004',
        'Chale Jaise Hawayein',
        'KK, Vasundhara Das',
        'Main Hoon Na',
        2004,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Yeh Jo Halka Halka Suroor Hai',
          originalArtist: 'Ustad Nusrat Fateh Ali Khan',
          originalYear: '1991',
          originCategory: 'Nusrat Fateh Ali Khan',
          adaptationNotes:
            'Opening vocal motif noted on ITWOFS for echoing Ustad Nusrat Fateh Ali Khan’s iconic qawwali refrain.',
          originalLink: 'https://www.youtube.com/watch?v=D8l3fLJ1Klw',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-mhn04-3',
        'am-main-hoon-na-2004',
        'Main Hoon Na (Title Track)',
        'Sonu Nigam, Shreya Ghoshal',
        'Main Hoon Na',
        2004
      ),
      song(
        'am-mhn04-4',
        'am-main-hoon-na-2004',
        'Tumhe Jo Maine Dekha',
        'Abhijeet, Shreya Ghoshal',
        'Main Hoon Na',
        2004
      ),
      song(
        'am-mhn04-5',
        'am-main-hoon-na-2004',
        'Gori Gori',
        'KK, Anu Malik, Sunidhi Chauhan, Shreya Ghoshal',
        'Main Hoon Na',
        2004
      ),
    ],
  },
  {
    id: 'am-murder-2004',
    directorId: 'anu-malik',
    title: 'Murder',
    year: 2004,
    cast: 'Emraan Hashmi, Mallika Sherawat, Ashmit Patel',
    label: 'Saregama',
    songs: [
      song(
        'am-murd04-1',
        'am-murder-2004',
        'Kaho Na Kaho',
        'Amir Jamal',
        'Murder',
        2004,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Tamally Maak',
          originalArtist: 'Amr Diab',
          originalYear: '2000',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Core Arabic-flavour guitar motif and vocal melody directly follow Egyptian superstar Amr Diab’s 2000 hit.',
          originalLink: 'https://www.youtube.com/watch?v=EgmXTmj62ic',
          referenceSource: 'ITWOFS & Music Provenance Archives',
        }
      ),
      song(
        'am-murd04-2',
        'am-murder-2004',
        'Jaana Jaane Jaana',
        'Amir Jamal',
        'Murder',
        2004,
        {
          lyricist: 'Sayeed Quadri',
          adaptationType: 'copied',
          originalSongTitle: 'Firiye Dao',
          originalArtist: 'Miles (Bangladeshi rock band)',
          originalYear: '1993',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Lead melody and rock-ballad orchestration noted on ITWOFS as a close note-for-note similarity to Bangladeshi band Miles’ Prottasha album.',
          originalLink: 'https://www.youtube.com/watch?v=1IGxjP8-k7g',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'am-murd04-3',
        'am-murder-2004',
        'Bheege Hont Tere',
        'Kunal Ganjawala',
        'Murder',
        2004
      ),
      song(
        'am-murd04-4',
        'am-murder-2004',
        'Dil Ko Hazar Bar',
        'Alisha Chinai',
        'Murder',
        2004
      ),
    ],
  },
  {
    id: 'am-fida-2004',
    directorId: 'anu-malik',
    title: 'Fida',
    year: 2004,
    cast: 'Fardeen Khan, Kareena Kapoor, Shahid Kapoor',
    label: 'Tips',
    songs: [
      song(
        'am-fida04-1',
        'am-fida-2004',
        'Aaja Ve Mahi',
        'Alka Yagnik, Udit Narayan, Kunal Ganjawala, Kareena Kapoor',
        'Fida',
        2004
      ),
      song(
        'am-fida04-2',
        'am-fida-2004',
        'Nazar Nazar',
        'Udit Narayan, Sapna Mukherjee',
        'Fida',
        2004
      ),
    ],
  },
  {
    id: 'am-garv-2004',
    directorId: 'anu-malik',
    title: 'Garv: Pride & Honour',
    year: 2004,
    cast: 'Salman Khan, Shilpa Shetty',
    songs: [
      song(
        'am-garv04-1',
        'am-garv-2004',
        'Hum Tumko Nigahon Mein',
        'Udit Narayan, Shreya Ghoshal',
        'Garv',
        2004
      ),
    ],
  },
  {
    id: 'am-krishna-cottage-2004',
    directorId: 'anu-malik',
    title: 'Krishna Cottage',
    year: 2004,
    cast: 'Sohail Khan, Isha Koppikar',
    songs: [
      song(
        'am-kc04-1',
        'am-krishna-cottage-2004',
        'Suna Suna Lamha Lamha',
        'Shreya Ghoshal',
        'Krishna Cottage',
        2004
      ),
      song(
        'am-kc04-2',
        'am-krishna-cottage-2004',
        'Bindaas',
        'Shaan, Sunidhi Chauhan',
        'Krishna Cottage',
        2004
      ),
    ],
  },
  {
    id: 'am-aan-2004',
    directorId: 'anu-malik',
    title: 'Aan: Men at Work',
    year: 2004,
    cast: 'Akshay Kumar, Suniel Shetty, Shatrughan Sinha',
    songs: [
      song(
        'am-aan04-1',
        'am-aan-2004',
        'Dil Fakat Yeh Dil',
        'Udit Narayan, Alka Yagnik',
        'Aan Men at Work',
        2004
      ),
    ],
  },
  {
    id: 'am-mujhse-shaadi-karogi-2004',
    directorId: 'anu-malik',
    title: 'Mujhse Shaadi Karogi',
    year: 2004,
    cast: 'Salman Khan, Akshay Kumar, Priyanka Chopra',
    significance: 'Guest-composed Salman Khan chartbuster alongside Sajid–Wajid',
    songs: [
      song(
        'am-msk04-1',
        'am-mujhse-shaadi-karogi-2004',
        'Jeene Ke Hain Chaar Din',
        'Sonu Nigam, Sunidhi Chauhan',
        'Mujhse Shaadi Karogi',
        2004
      ),
    ],
  },
  {
    id: 'am-paap-2004',
    directorId: 'anu-malik',
    title: 'Paap',
    year: 2004,
    cast: 'John Abraham, Udita Goswami',
    significance: 'Multi-composer soundtrack; Anu Malik composed two tracks',
    songs: [
      song(
        'am-paap04-1',
        'am-paap-2004',
        'Intezaar',
        'Anuradha Paudwal',
        'Paap',
        2004
      ),
      song(
        'am-paap04-2',
        'am-paap-2004',
        'Sun E Mere Dil',
        'Anuradha Paudwal',
        'Paap',
        2004
      ),
    ],
  },
  {
    id: 'am-ab-tumhare-hawale-2004',
    directorId: 'anu-malik',
    title: 'Ab Tumhare Hawale Watan Sathiyo',
    year: 2004,
    cast: 'Amitabh Bachchan, Akshay Kumar, Bobby Deol',
    songs: [
      song(
        'am-athws-1',
        'am-ab-tumhare-hawale-2004',
        'Ab Tumhare Hawale Watan Sathiyo',
        'Udit Narayan, Sonu Nigam, Alka Yagnik',
        'Ab Tumhare Hawale Watan Sathiyo',
        2004
      ),
    ],
  },
  {
    id: 'am-no-entry-2005',
    directorId: 'anu-malik',
    title: 'No Entry',
    year: 2005,
    cast: 'Salman Khan, Anil Kapoor, Fardeen Khan, Bipasha Basu',
    label: 'Tips',
    songs: [
      song(
        'am-ne05-1',
        'am-no-entry-2005',
        'No Entry (Ishq Di Galli Vich)',
        'Sonu Nigam, Alisha Chinai',
        'No Entry',
        2005
      ),
      song(
        'am-ne05-2',
        'am-no-entry-2005',
        'Just Love Me (Main Akela)',
        'Sonu Nigam',
        'No Entry',
        2005
      ),
    ],
  },
  {
    id: 'am-kalyug-2005',
    directorId: 'anu-malik',
    title: 'Kalyug',
    year: 2005,
    cast: 'Kunal Kemmu, Emraan Hashmi, Smilie Suri',
    significance: 'Anu Malik composed key tracks alongside guest composers',
    songs: [
      song(
        'am-kal05-1',
        'am-kalyug-2005',
        'Dheere Dheere',
        'Alisha Chinai, Anu Malik',
        'Kalyug',
        2005,
        { lyricist: 'Sayeed Quadri' }
      ),
      song(
        'am-kal05-2',
        'am-kalyug-2005',
        'Thi Meri Dastan',
        'Anuradha Paudwal, Amit Sana',
        'Kalyug',
        2005,
        { lyricist: 'Sayeed Quadri' }
      ),
    ],
  },
  {
    id: 'am-zeher-2005',
    directorId: 'anu-malik',
    title: 'Zeher',
    year: 2005,
    cast: 'Emraan Hashmi, Shamita Shetty, Udita Goswami',
    songs: [
      song(
        'am-zeh05-1',
        'am-zeher-2005',
        'Agar Tum Mil Jao',
        'Udit Narayan, Shreya Ghoshal',
        'Zeher',
        2005
      ),
      song(
        'am-zeh05-2',
        'am-zeher-2005',
        'Jaane Ja Jaane Ja',
        'Udit Narayan, Shreya Ghoshal',
        'Zeher',
        2005
      ),
    ],
  },
  {
    id: 'am-waqt-2005',
    directorId: 'anu-malik',
    title: 'Waqt: The Race Against Time',
    year: 2005,
    cast: 'Amitabh Bachchan, Akshay Kumar, Priyanka Chopra',
    songs: [
      song(
        'am-waqt05-1',
        'am-waqt-2005',
        'Do Me A Favour Lets Play Holi',
        'Anu Malik, Sunidhi Chauhan',
        'Waqt The Race Against Time',
        2005
      ),
      song(
        'am-waqt05-2',
        'am-waqt-2005',
        'Subah Hogi',
        'Udit Narayan, Alka Yagnik',
        'Waqt The Race Against Time',
        2005
      ),
    ],
  },
  {
    id: 'am-kyaa-kool-hai-hum-2005',
    directorId: 'anu-malik',
    title: 'Kyaa Kool Hai Hum',
    year: 2005,
    cast: 'Tusshar Kapoor, Riteish Deshmukh, Isha Koppikar',
    songs: [
      song(
        'am-kkhh05-1',
        'am-kyaa-kool-hai-hum-2005',
        'Kyaa Kool Hai Hum',
        'Anu Malik, Kunal Ganjawala',
        'Kyaa Kool Hai Hum',
        2005
      ),
    ],
  },
  {
    id: 'am-fareb-2005',
    directorId: 'anu-malik',
    title: 'Fareb',
    year: 2005,
    cast: 'Manoj Bajpayee, Shilpa Shetty, Shamita Shetty',
    songs: [
      song(
        'am-far05-1',
        'am-fareb-2005',
        'Baras Jaa',
        'Sunidhi Chauhan',
        'Fareb',
        2005
      ),
    ],
  },
  {
    id: 'am-deewane-huye-paagal-2005',
    directorId: 'anu-malik',
    title: 'Deewane Huye Paagal',
    year: 2005,
    cast: 'Akshay Kumar, Suniel Shetty, Shahid Kapoor, Rimi Sen',
    songs: [
      song(
        'am-dhp05-1',
        'am-deewane-huye-paagal-2005',
        'Deewane Huye Paagal (Title Track)',
        'Sonu Nigam',
        'Deewane Huye Paagal',
        2005
      ),
    ],
  },
  {
    id: 'am-tango-charlie-2005',
    directorId: 'anu-malik',
    title: 'Tango Charlie',
    year: 2005,
    cast: 'Ajay Devgn, Bobby Deol, Sanjay Dutt',
    songs: [
      song(
        'am-tc05-1',
        'am-tango-charlie-2005',
        'Kya Bataaoon Dil Ruba',
        'Udit Narayan, Alka Yagnik',
        'Tango Charlie',
        2005
      ),
    ],
  },
  {
    id: 'am-chehraa-2005',
    directorId: 'anu-malik',
    title: 'Chehraa',
    year: 2005,
    cast: 'Bipasha Basu, Dino Morea, Preeti Jhangiani',
    songs: [
      song(
        'am-che05-1',
        'am-chehraa-2005',
        'Kabhi Khamosh Baithogi',
        'Babul Supriyo, Mahalakshmi Iyer',
        'Chehraa',
        2005
      ),
    ],
  },
  {
    id: 'am-umrao-jaan-2006',
    directorId: 'anu-malik',
    title: 'Umrao Jaan',
    year: 2006,
    cast: 'Aishwarya Rai, Abhishek Bachchan',
    label: 'T-Series',
    significance: 'Classical-rooted ghazal score with Javed Akhtar; Filmfare nomination',
    songs: [
      song(
        'am-uj06-1',
        'am-umrao-jaan-2006',
        'Salaam',
        'Alka Yagnik',
        'Umrao Jaan',
        2006,
        {
          originCategory: 'Indian Folk & Classical',
          lyricist: 'Javed Akhtar',
        }
      ),
      song(
        'am-uj06-2',
        'am-umrao-jaan-2006',
        'Pehle Pehel',
        'Alka Yagnik',
        'Umrao Jaan',
        2006
      ),
    ],
  },
  {
    id: 'am-jaan-e-mann-2006',
    directorId: 'anu-malik',
    title: 'Jaan-E-Mann',
    year: 2006,
    cast: 'Salman Khan, Akshay Kumar, Preity Zinta',
    label: 'T-Series',
    songs: [
      song(
        'am-jem06-1',
        'am-jaan-e-mann-2006',
        'Humko Maloom Hai',
        'Sonu Nigam, Sadhana Sargam',
        'Jaan-E-Mann',
        2006,
        { lyricist: 'Gulzar' }
      ),
      song(
        'am-jem06-2',
        'am-jaan-e-mann-2006',
        'Sau Dard',
        'Sonu Nigam, Suzanne D’Mello',
        'Jaan-E-Mann',
        2006,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'am-humko-deewana-kar-gaye-2006',
    directorId: 'anu-malik',
    title: 'Humko Deewana Kar Gaye',
    year: 2006,
    cast: 'Akshay Kumar, Katrina Kaif',
    label: 'T-Series',
    songs: [
      song(
        'am-hdkg-1',
        'am-humko-deewana-kar-gaye-2006',
        'Humko Deewana Kar Gaye (Title Track)',
        'Sonu Nigam, Tulsi Kumar',
        'Humko Deewana Kar Gaye',
        2006
      ),
      song(
        'am-hdkg-2',
        'am-humko-deewana-kar-gaye-2006',
        'Fanah',
        'KK, Anu Malik',
        'Humko Deewana Kar Gaye',
        2006
      ),
    ],
  },
  {
    id: 'am-pyare-mohan-2006',
    directorId: 'anu-malik',
    title: 'Pyare Mohan',
    year: 2006,
    cast: 'Fardeen Khan, Vivek Oberoi, Esha Deol',
    songs: [
      song(
        'am-pm06-1',
        'am-pyare-mohan-2006',
        'Har Mohan Ki Koi Radha',
        'Udit Narayan, Shaan, Anu Malik',
        'Pyare Mohan',
        2006
      ),
      song(
        'am-pm06-2',
        'am-pyare-mohan-2006',
        'Love You My Angel',
        'Kunal Ganjawala',
        'Pyare Mohan',
        2006
      ),
    ],
  },
  {
    id: 'am-zindaggi-rocks-2006',
    directorId: 'anu-malik',
    title: 'Zindaggi Rocks',
    year: 2006,
    cast: 'Sushmita Sen, Shiney Ahuja',
    songs: [
      song(
        'am-zr06-1',
        'am-zindaggi-rocks-2006',
        'Meri Dhoop Hai Tu',
        'Javed Ali, Tulsi Kumar',
        'Zindaggi Rocks',
        2006
      ),
    ],
  },
  {
    id: 'am-shootout-at-lokhandwala-2007',
    directorId: 'anu-malik',
    title: 'Shootout at Lokhandwala',
    year: 2007,
    cast: 'Sanjay Dutt, Vivek Oberoi, Suniel Shetty',
    songs: [
      song(
        'am-sal07-1',
        'am-shootout-at-lokhandwala-2007',
        'Mere Yaar',
        'Sunidhi Chauhan, Anand Raj Anand',
        'Shootout at Lokhandwala',
        2007
      ),
    ],
  },
  {
    id: 'am-love-story-2050-2008',
    directorId: 'anu-malik',
    title: 'Love Story 2050',
    year: 2008,
    cast: 'Harman Baweja, Priyanka Chopra',
    songs: [
      song(
        'am-ls2050-1',
        'am-love-story-2050-2008',
        'Milo Na Milo',
        'Shaan',
        'Love Story 2050',
        2008
      ),
      song(
        'am-ls2050-2',
        'am-love-story-2050-2008',
        'Meelon Ka Jaisa Tha Safar',
        'KK, Alka Yagnik',
        'Love Story 2050',
        2008
      ),
    ],
  },
  {
    id: 'am-ugly-aur-pagli-2008',
    directorId: 'anu-malik',
    title: 'Ugly Aur Pagli',
    year: 2008,
    cast: 'Mallika Sherawat, Ranvir Shorey',
    songs: [
      song(
        'am-uap08-1',
        'am-ugly-aur-pagli-2008',
        'Talli',
        'Anmol Malik, Mika Singh, Hard Kaur',
        'Ugly Aur Pagli',
        2008
      ),
    ],
  },
  {
    id: 'am-mission-istaanbul-2008',
    directorId: 'anu-malik',
    title: 'Mission Istaanbul',
    year: 2008,
    cast: 'Vivek Oberoi, Zayed Khan, Shriya Saran',
    songs: [
      song(
        'am-mi08-1',
        'am-mission-istaanbul-2008',
        'Jo Gumshuda',
        'Shaan, Mahalakshmi Iyer',
        'Mission Istaanbul',
        2008
      ),
    ],
  },
  {
    id: 'am-maan-gaye-mughal-e-azam-2008',
    directorId: 'anu-malik',
    title: 'Maan Gaye Mughal-e-Azam',
    year: 2008,
    cast: 'Mallika Sherawat, Rahul Bose, Paresh Rawal',
    songs: [
      song(
        'am-mgma-1',
        'am-maan-gaye-mughal-e-azam-2008',
        'Ek To Sharab Kum',
        'Sunidhi Chauhan',
        'Maan Gaye Mughal-e-Azam',
        2008
      ),
    ],
  },
  {
    id: 'am-kambakkht-ishq-2009',
    directorId: 'anu-malik',
    title: 'Kambakkht Ishq',
    year: 2009,
    cast: 'Akshay Kumar, Kareena Kapoor',
    label: 'Eros Music',
    songs: [
      song(
        'am-ki09-1',
        'am-kambakkht-ishq-2009',
        'Om Mangalam',
        'RDB',
        'Kambakkht Ishq',
        2009
      ),
      song(
        'am-ki09-2',
        'am-kambakkht-ishq-2009',
        'Lakh Lakh',
        'Neeraj Shridhar',
        'Kambakkht Ishq',
        2009
      ),
    ],
  },

  // 2010 - Present (Later Works & Critical Revival)
  {
    id: 'am-hisss-2010',
    directorId: 'anu-malik',
    title: 'Hisss',
    year: 2010,
    cast: 'Mallika Sherawat, Irrfan Khan',
    songs: [
      song(
        'am-his10-1',
        'am-hisss-2010',
        'Aa Bhi Ja',
        'Shreya Ghoshal',
        'Hisss',
        2010
      ),
    ],
  },
  {
    id: 'am-toonpur-ka-superhero-2010',
    directorId: 'anu-malik',
    title: 'Toonpur Ka Superhero',
    year: 2010,
    cast: 'Ajay Devgn, Kajol',
    songs: [
      song(
        'am-tks10-1',
        'am-toonpur-ka-superhero-2010',
        'Lets Go Toonpur',
        'Veronica Mehta, Ajay Devgn',
        'Toonpur Ka Superhero',
        2010
      ),
    ],
  },
  {
    id: 'am-yamla-pagla-deewana-2011',
    directorId: 'anu-malik',
    title: 'Yamla Pagla Deewana',
    year: 2011,
    cast: 'Dharmendra, Sunny Deol, Bobby Deol',
    songs: [
      song(
        'am-ypd11-1',
        'am-yamla-pagla-deewana-2011',
        'Tinku Jiya',
        'Mamta Sharma, Javed Ali',
        'Yamla Pagla Deewana',
        2011
      ),
    ],
  },
  {
    id: 'am-shootout-at-wadala-2013',
    directorId: 'anu-malik',
    title: 'Shootout at Wadala',
    year: 2013,
    cast: 'John Abraham, Anil Kapoor, Kangana Ranaut',
    songs: [
      song(
        'am-saw13-1',
        'am-shootout-at-wadala-2013',
        'Laila',
        'Mika Singh, Anand Raj Anand',
        'Shootout at Wadala',
        2013
      ),
    ],
  },
  {
    id: 'am-dum-laga-ke-haisha-2015',
    directorId: 'anu-malik',
    title: 'Dum Laga Ke Haisha',
    year: 2015,
    cast: 'Ayushmann Khurrana, Bhumi Pednekar',
    label: 'YRF Music',
    significance: 'Critically acclaimed 1990s-styled comeback soundtrack with Varun Grover',
    songs: [
      song(
        'am-dlkh-1',
        'am-dum-laga-ke-haisha-2015',
        'Moh Moh Ke Dhaage (Male)',
        'Papon',
        'Dum Laga Ke Haisha',
        2015,
        {
          lyricist: 'Varun Grover',
          adaptationNotes: 'Widely lauded original composition evoking classic 1990s melody.',
        }
      ),
      song(
        'am-dlkh-2',
        'am-dum-laga-ke-haisha-2015',
        'Moh Moh Ke Dhaage (Female)',
        'Monali Thakur',
        'Dum Laga Ke Haisha',
        2015,
        { lyricist: 'Varun Grover' }
      ),
      song(
        'am-dlkh-3',
        'am-dum-laga-ke-haisha-2015',
        'Dard Karaara',
        'Kumar Sanu, Sadhana Sargam',
        'Dum Laga Ke Haisha',
        2015
      ),
    ],
  },
  {
    id: 'am-welcome-back-2015',
    directorId: 'anu-malik',
    title: 'Welcome Back',
    year: 2015,
    cast: 'Anil Kapoor, Nana Patekar, John Abraham',
    songs: [
      song(
        'am-wb15-1',
        'am-welcome-back-2015',
        'Tutti Bole Wedding Di',
        'Meet Bros, Shipra Goyal',
        'Welcome Back',
        2015
      ),
    ],
  },
  {
    id: 'am-judwaa-2-2017',
    directorId: 'anu-malik',
    title: 'Judwaa 2',
    year: 2017,
    cast: 'Varun Dhawan, Jacqueline Fernandez, Taapsee Pannu',
    label: 'T-Series',
    songs: [
      song(
        'am-j2-1',
        'am-judwaa-2-2017',
        'Oonchi Hai Building 2.0',
        'Anu Malik, Neha Kakkar',
        'Judwaa 2',
        2017
      ),
      song(
        'am-j2-2',
        'am-judwaa-2-2017',
        'Chalti Hai Kya 9 Se 12',
        'Dev Negi, Neha Kakkar',
        'Judwaa 2',
        2017
      ),
    ],
  },
  {
    id: 'am-begum-jaan-2017',
    directorId: 'anu-malik',
    title: 'Begum Jaan',
    year: 2017,
    cast: 'Vidya Balan, Gauahar Khan, Pallavi Sharda',
    label: 'Times Music',
    songs: [
      song(
        'am-bj17-1',
        'am-begum-jaan-2017',
        'Murshida',
        'Arijit Singh',
        'Begum Jaan',
        2017
      ),
      song(
        'am-bj17-2',
        'am-begum-jaan-2017',
        'Prem Mein Tohre',
        'Asha Bhosle',
        'Begum Jaan',
        2017
      ),
      song(
        'am-bj17-3',
        'am-begum-jaan-2017',
        'Aazaadiyan',
        'Sonu Nigam, Rahat Fateh Ali Khan',
        'Begum Jaan',
        2017
      ),
    ],
  },
  {
    id: 'am-indu-sarkar-2017',
    directorId: 'anu-malik',
    title: 'Indu Sarkar',
    year: 2017,
    cast: 'Kirti Kulhari, Neil Nitin Mukesh',
    songs: [
      song(
        'am-is17-1',
        'am-indu-sarkar-2017',
        'Yeh Aawaz Hai',
        'Monali Thakur',
        'Indu Sarkar',
        2017
      ),
    ],
  },
  {
    id: 'am-qarib-qarib-singlle-2017',
    directorId: 'anu-malik',
    title: 'Qarib Qarib Singlle',
    year: 2017,
    cast: 'Irrfan Khan, Parvathy Thiruvothu',
    significance: 'Guest-composed song alongside Rochak Kohli & Vishal Mishra',
    songs: [
      song(
        'am-qqs17-1',
        'am-qarib-qarib-singlle-2017',
        'Daana Pani',
        'Papon, Anmol Malik',
        'Qarib Qarib Singlle',
        2017
      ),
    ],
  },
  {
    id: 'am-paltan-2018',
    directorId: 'anu-malik',
    title: 'Paltan',
    year: 2018,
    cast: 'Jackie Shroff, Arjun Rampal, Sonu Sood',
    songs: [
      song(
        'am-pal18-1',
        'am-paltan-2018',
        'Paltan Title Track',
        'Divya Kumar, Khuda Baksh',
        'Paltan',
        2018,
        { lyricist: 'Javed Akhtar' }
      ),
      song(
        'am-pal18-2',
        'am-paltan-2018',
        'Raat Kitni',
        'Sonu Nigam',
        'Paltan',
        2018,
        { lyricist: 'Javed Akhtar' }
      ),
    ],
  },
  {
    id: 'am-batti-gul-meter-chalu-2018',
    directorId: 'anu-malik',
    title: 'Batti Gul Meter Chalu',
    year: 2018,
    cast: 'Shahid Kapoor, Shraddha Kapoor',
    significance: 'Guest-composed track Gold Tamba',
    songs: [
      song(
        'am-bgmc18-1',
        'am-batti-gul-meter-chalu-2018',
        'Gold Tamba',
        'Nakash Aziz',
        'Batti Gul Meter Chalu',
        2018
      ),
    ],
  },
  {
    id: 'am-sui-dhaaga-2018',
    directorId: 'anu-malik',
    title: 'Sui Dhaaga: Made in India',
    year: 2018,
    cast: 'Varun Dhawan, Anushka Sharma',
    label: 'YRF Music',
    songs: [
      song(
        'am-sd18-1',
        'am-sui-dhaaga-2018',
        'Chaav Laaga',
        'Papon, Ronkini Gupta',
        'Sui Dhaaga',
        2018,
        { lyricist: 'Varun Grover' }
      ),
      song(
        'am-sd18-2',
        'am-sui-dhaaga-2018',
        'Khatar Patar',
        'Papon',
        'Sui Dhaaga',
        2018
      ),
    ],
  },
  {
    id: 'am-sandeep-aur-pinky-faraar-2021',
    directorId: 'anu-malik',
    title: 'Sandeep Aur Pinky Faraar',
    year: 2021,
    cast: 'Arjun Kapoor, Parineeti Chopra',
    songs: [
      song(
        'am-sapf21-1',
        'am-sandeep-aur-pinky-faraar-2021',
        'Faraar',
        'Anu Malik',
        'Sandeep Aur Pinky Faraar',
        2021
      ),
    ],
  },
  {
    id: 'am-hungama-2-2021',
    directorId: 'anu-malik',
    title: 'Hungama 2',
    year: 2021,
    cast: 'Paresh Rawal, Shilpa Shetty, Meezaan Jafri',
    songs: [
      song(
        'am-h2-1',
        'am-hungama-2-2021',
        'Chura Ke Dil Mera 2.0',
        'Benny Dayal, Anmol Malik',
        'Hungama 2',
        2021
      ),
      song(
        'am-h2-2',
        'am-hungama-2-2021',
        'Chinta Na Kar',
        'Nakash Aziz, Neeti Mohan',
        'Hungama 2',
        2021
      ),
    ],
  },
  {
    id: 'am-bad-newz-2024',
    directorId: 'anu-malik',
    title: 'Bad Newz',
    year: 2024,
    cast: 'Vicky Kaushal, Triptii Dimri, Ammy Virk',
    significance: 'Featured recreated version of Anu Malik’s Duplicate classic Mere Mehboob Mere Sanam',
    songs: [
      song(
        'am-bn24-1',
        'am-bad-newz-2024',
        'Mere Mehboob Mere Sanam (2024 Recreation)',
        'Udit Narayan, Alka Yagnik',
        'Bad Newz',
        2024
      ),
    ],
  },
  {
    id: 'am-tu-meri-poori-kahani-2025',
    directorId: 'anu-malik',
    title: 'Tu Meri Poori Kahani',
    year: 2025,
    cast: 'Arhaan Patel, Hirranya Ojha',
    label: 'Saregama',
    significance: 'Full-length romantic musical album solely composed by Anu Malik for Mahesh Bhatt & Suhrita Das with Shweta Bothra lyrics',
    songs: [
      song(
        'am-tmpk25-1',
        'am-tu-meri-poori-kahani-2025',
        'Tu Meri Poori Kahani',
        'Papon, Anmol Malik, Vishal Mishra',
        'Tu Meri Poori Kahani',
        2025,
        { lyricist: 'Shweta Bothra' }
      ),
      song(
        'am-tmpk25-2',
        'am-tu-meri-poori-kahani-2025',
        'Yeh Ishq Hai',
        'Raghav Chaitanya, Papon',
        'Tu Meri Poori Kahani',
        2025,
        { lyricist: 'Shweta Bothra' }
      ),
      song(
        'am-tmpk25-3',
        'am-tu-meri-poori-kahani-2025',
        'Kuch Toh Hai',
        'Aanandi Joshi',
        'Tu Meri Poori Kahani',
        2025,
        { lyricist: 'Shweta Bothra' }
      ),
    ],
  },
  {
    id: 'am-border-2-2026',
    directorId: 'anu-malik',
    title: 'Border 2',
    year: 2026,
    cast: 'Sunny Deol, Varun Dhawan, Diljit Dosanjh, Ahan Shetty',
    label: 'T-Series',
    significance: '2026 war-drama sequel crediting Anu Malik alongside Mithoon on the reimagined anthem Ghar Kab Aaoge and collaborative original tracks',
    songs: [
      song(
        'am-b2-26-1',
        'am-border-2-2026',
        'Ghar Kab Aaoge (Border 2)',
        'Sonu Nigam, Arijit Singh, Diljit Dosanjh, Vishal Mishra',
        'Border 2',
        2026
      ),
      song(
        'am-b2-26-2',
        'am-border-2-2026',
        'Mohabbat Ho Gayi Hai',
        'Sonu Nigam, Palak Muchhal',
        'Border 2',
        2026
      ),
      song(
        'am-b2-26-3',
        'am-border-2-2026',
        'Hindustan Meri Jaan',
        'Mohit Chauhan, B Praak',
        'Border 2',
        2026
      ),
    ],
  },
];
