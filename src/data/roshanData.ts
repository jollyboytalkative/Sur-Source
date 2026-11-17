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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Roshan`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Roshan`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

export const ROSHAN_MOVIES: MovieEntry[] = [
  // =========================================================================
  // 1949 – 1954 (Debut, Baawre Nain Breakthrough & Golden-Era Foundations)
  // =========================================================================
  {
    id: 'roshan-neki-aur-badi-1949',
    directorId: 'roshan',
    title: 'Neki Aur Badi',
    year: 1949,
    cast: 'Kidar Sharma, Madhubala, Geeta Bali',
    label: 'Saregama / HMV',
    significance:
      'Independent debut as music director under filmmaker Kidar Sharma; although the film struggled commercially, it led directly to Baawre Nain.',
    songs: [
      origSong('roshan-neki-aur-badi-1949', 1, 'Chanda Re Jaa Re Jaa Re', 'Rajkumari', 'Neki Aur Badi', 1949),
      origSong('roshan-neki-aur-badi-1949', 2, 'Hamen Bhi Koi Bulao', 'Firoz Dastur, Rajkumari', 'Neki Aur Badi', 1949),
      origSong('roshan-neki-aur-badi-1949', 3, 'Ram Duhai Mere Saiyan', 'Shamshad Begum', 'Neki Aur Badi', 1949),
    ],
  },
  {
    id: 'roshan-baawre-nain-1950',
    directorId: 'roshan',
    title: 'Baawre Nain',
    year: 1950,
    cast: 'Raj Kapoor, Geeta Bali, Vijayalaxmi',
    label: 'Saregama / HMV',
    significance:
      'Landmark musical breakthrough with Kidar Sharma that established Mukesh, Geeta Dutt, and Roshan in Bombay.',
    songs: [
      origSong('roshan-baawre-nain-1950', 1, 'Teri Duniya Mein Dil Lagta Nahin', 'Mukesh', 'Baawre Nain', 1950, 'Set to Raag Darbari-tinged melancholic phrasing for Mukesh.'),
      origSong('roshan-baawre-nain-1950', 2, 'Khayalon Mein Kisi Ke Is Tarah Aaya Nahin Karte', 'Mukesh, Geeta Dutt', 'Baawre Nain', 1950),
      origSong('roshan-baawre-nain-1950', 3, 'Sun Bairi Balam Sach Bol Re', 'Rajkumari', 'Baawre Nain', 1950),
      origSong('roshan-baawre-nain-1950', 4, 'Ghir Ghir Aayi Badariya', 'Rajkumari, Shamshad Begum, Asha Bhosle', 'Baawre Nain', 1950),
    ],
  },
  {
    id: 'roshan-bedardi-1951',
    directorId: 'roshan',
    title: 'Bedardi',
    year: 1951,
    cast: 'Nimmi, Jaswant, Geeta Bali',
    label: 'Saregama / HMV',
    significance:
      'Early Kidar Sharma drama pairing soulful Geeta Dutt and Shamshad Begum solos.',
    songs: [
      origSong('roshan-bedardi-1951', 1, 'Ankhon Se Pochh Lo', 'Geeta Dutt', 'Bedardi', 1951),
      origSong('roshan-bedardi-1951', 2, 'O Baalam Kitna Zalim Hai', 'Shamshad Begum', 'Bedardi', 1951),
      origSong('roshan-bedardi-1951', 3, 'Do Pyaar Ki Baatein Ho Jaayen', 'Geeta Dutt', 'Bedardi', 1951),
    ],
  },
  {
    id: 'roshan-hum-log-1951',
    directorId: 'roshan',
    title: 'Hum Log',
    year: 1951,
    cast: 'Balraj Sahni, Nutan, Shyama, Sajjan',
    label: 'Saregama / HMV',
    significance:
      'Major commercial hit directed by Zia Sarhadi with timeless Lata Mangeshkar and Mukesh melodies.',
    songs: [
      origSong('roshan-hum-log-1951', 1, 'Chhun Chhun Baaje Paayal', 'Lata Mangeshkar', 'Hum Log', 1951),
      origSong('roshan-hum-log-1951', 2, 'Apni Nazar Se Door Woh', 'Mukesh', 'Hum Log', 1951),
      origSong('roshan-hum-log-1951', 3, 'Bahe Ankhiyon Se Dhaar', 'Lata Mangeshkar', 'Hum Log', 1951),
    ],
  },
  {
    id: 'roshan-malhar-1951',
    directorId: 'roshan',
    title: 'Malhar',
    year: 1951,
    cast: 'Arjun, Shammi, Moti Sagar',
    label: 'Saregama / HMV',
    significance:
      'Mukesh production notable for Indeevar’s early lyricist acclaim and evergreen romantic duets.',
    songs: [
      origSong('roshan-malhar-1951', 1, 'Bade Armaan Se Rakha Hai Balam Teri Kasam', 'Lata Mangeshkar, Mukesh', 'Malhar', 1951),
      origSong('roshan-malhar-1951', 2, 'Kahan Ho Tum Zara Aawaz Do', 'Lata Mangeshkar, Mukesh', 'Malhar', 1951),
      origSong('roshan-malhar-1951', 3, 'Tara Toote Duniya Dekhe', 'Lata Mangeshkar', 'Malhar', 1951),
    ],
  },
  {
    id: 'roshan-anhonee-1952',
    directorId: 'roshan',
    title: 'Anhonee',
    year: 1952,
    cast: 'Raj Kapoor, Nargis, Om Prakash',
    label: 'Saregama / HMV',
    significance:
      'Khwaja Ahmad Abbas social drama remembered for Talat Mahmood and Rajkumari gems.',
    songs: [
      origSong('roshan-anhonee-1952', 1, 'Main Dil Hoon Ek Armaan Bhara', 'Talat Mahmood', 'Anhonee', 1952),
      origSong('roshan-anhonee-1952', 2, 'Mere Dil Ki Dhadkan Kya Bole', 'Talat Mahmood, Lata Mangeshkar', 'Anhonee', 1952),
      origSong('roshan-anhonee-1952', 3, 'Zindagi Badli Mohabbat Ka Maza Aane Laga', 'Rajkumari', 'Anhonee', 1952),
    ],
  },
  {
    id: 'roshan-naubahar-1952',
    directorId: 'roshan',
    title: 'Naubahar',
    year: 1952,
    cast: 'Nalini Jaywant, Ashok Kumar, Kuldeep Kaur',
    label: 'Saregama / HMV',
    significance:
      'Immortalized Lata Mangeshkar’s classical Meera bhajan "Eri Main To Prem Diwani".',
    songs: [
      adaptedSong('roshan-naubahar-1952', 1, 'Eri Main To Prem Diwani', 'Lata Mangeshkar', 'Naubahar', 1952, {
        adaptationType: 'inspired',
        originalSongTitle: 'Meera Bai Bhajan Parampara (Traditional Devotional Meter)',
        originalArtist: 'Traditional Rajasthani / Bhakti Bhajan Repertoire',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Anchored in classical devotional bhajan tradition setting Meerabai’s poetry to Roshan’s delicate classical-folk phrasing.',
        originalLink: 'https://www.youtube.com/watch?v=2HiUxN-ZRi0',
        referenceSource: 'Golden Era Bhakti & Film Music Archives',
      }),
      origSong('roshan-naubahar-1952', 2, 'Dekho Ji Mera Jiya Churaaye', 'Lata Mangeshkar', 'Naubahar', 1952),
      origSong('roshan-naubahar-1952', 3, 'Woh Paas Rahen Ya Door Rahen', 'Lata Mangeshkar', 'Naubahar', 1952),
    ],
  },
  {
    id: 'roshan-raag-rang-1952',
    directorId: 'roshan',
    title: 'Raag Rang',
    year: 1952,
    cast: 'Ashok Kumar, Geeta Bali, Sudha Malhotra',
    label: 'Saregama / HMV',
    significance:
      'Rare musical drama showcasing Talat Mahmood and Lata Mangeshkar classical-light ghazals.',
    songs: [
      origSong('roshan-raag-rang-1952', 1, 'Har Nayi Raat Dil-e-Beqaraar So Ja', 'Talat Mahmood, Lata Mangeshkar', 'Raag Rang', 1952),
      origSong('roshan-raag-rang-1952', 2, 'Aur Hai Dil Ki Lagi', 'Talat Mahmood', 'Raag Rang', 1952),
      origSong('roshan-raag-rang-1952', 3, 'Kis Ki Nazar Ka Mast Ishara Hai Zindagi', 'Lata Mangeshkar', 'Raag Rang', 1952),
    ],
  },
  {
    id: 'roshan-sanskar-1952',
    directorId: 'roshan',
    title: 'Sanskar',
    year: 1952,
    cast: 'V. M. Joshi cast, Veena, Yashodhara Katju',
    label: 'Saregama / HMV',
    significance:
      'Family drama featuring Shailendra & Narendra Sharma lyrics for Talat Mahmood and Lata Mangeshkar.',
    songs: [
      origSong('roshan-sanskar-1952', 1, 'Mohabbat Ke Jhoote Saharon Ne Loota', 'Talat Mahmood', 'Sanskar', 1952),
      origSong('roshan-sanskar-1952', 2, 'Jeenewale O Matwale Zindagi Se Pyar Kar', 'Lata Mangeshkar', 'Sanskar', 1952),
      origSong('roshan-sanskar-1952', 3, 'Do Nainon Ne Jaal Bichhaya', 'Lata Mangeshkar', 'Sanskar', 1952),
    ],
  },
  {
    id: 'roshan-shisham-1952',
    directorId: 'roshan',
    title: 'Shisham',
    year: 1952,
    cast: 'Nutan, Nasir Khan, Kuldip Kaur',
    label: 'Saregama / HMV',
    significance:
      'Kishore Kumar, Shamshad Begum, and Lata Mangeshkar tracks from 1952.',
    songs: [
      origSong('roshan-shisham-1952', 1, 'Sapnon Ki Nagri Basaye', 'Lata Mangeshkar', 'Shisham', 1952),
      origSong('roshan-shisham-1952', 2, 'Ek Jhoothi Si Tasalli', 'Mukesh', 'Shisham', 1952),
    ],
  },
  {
    id: 'roshan-aagosh-1953',
    directorId: 'roshan',
    title: 'Aagosh',
    year: 1953,
    cast: 'Nutan, Nasir Khan, Agha',
    label: 'Saregama / HMV',
    significance:
      'Notable for early Hemant Kumar and Lata Mangeshkar duets under Roshan’s baton.',
    songs: [
      origSong('roshan-aagosh-1953', 1, 'Dheere Dheere Chadh Gaya Nadi Mein Pani', 'Lata Mangeshkar, Hemant Kumar', 'Aagosh', 1953),
      origSong('roshan-aagosh-1953', 2, 'Kisi Ki Aankh Ke Aansoo Hain', 'Lata Mangeshkar', 'Aagosh', 1953),
      origSong('roshan-aagosh-1953', 3, 'Mohabbat Ek Shola Hai', 'Lata Mangeshkar', 'Aagosh', 1953),
    ],
  },
  {
    id: 'roshan-firdaus-1953',
    directorId: 'roshan',
    title: 'Firdaus',
    year: 1953,
    cast: 'Geeta Bali, Anoop Kumar, Om Prakash',
    label: 'Saregama / HMV',
    significance:
      '1953 feature co-composed by Roshan and Robin Chatterjee.',
    songs: [
      origSong('roshan-firdaus-1953', 1, 'Kisi Ne Nazar Se Nazar Jab Mila Di', 'Lata Mangeshkar', 'Firdaus', 1953),
      origSong('roshan-firdaus-1953', 2, 'Dil Unko Dhoondhta Hai', 'Talat Mahmood', 'Firdaus', 1953),
    ],
  },
  {
    id: 'roshan-malkin-1953',
    directorId: 'roshan',
    title: 'Malkin',
    year: 1953,
    cast: 'Nutan, Sajjan, Purnima',
    label: 'Saregama / HMV',
    significance:
      'O.P. Dutta comedy-drama featuring memorable Kishore Kumar and Mohammed Rafi numbers.',
    songs: [
      origSong('roshan-malkin-1953', 1, 'Kahin Se Oonchi Kahin Se Neechi (Sadak Zamane Ki)', 'Mohammed Rafi, Kishore Kumar', 'Malkin', 1953),
      origSong('roshan-malkin-1953', 2, 'Ae Mere Humsafar Kya Tujhe Hai Khabar', 'Talat Mahmood', 'Malkin', 1953),
      origSong('roshan-malkin-1953', 3, 'Meri Har Khushi Tere Saath Hai', 'Lata Mangeshkar', 'Malkin', 1953),
    ],
  },
  {
    id: 'roshan-mashuqa-1953',
    directorId: 'roshan',
    title: 'Mashuqa',
    year: 1953,
    cast: 'Suraiya, Mukesh, Agha',
    label: 'Saregama / HMV',
    significance:
      'Classic 1953 musical romance starring Suraiya and Mukesh singing for themselves.',
    songs: [
      origSong('roshan-mashuqa-1953', 1, 'Ye Samaa Hum Tum Jawaan', 'Suraiya, Mukesh', 'Mashuqa', 1953),
      origSong('roshan-mashuqa-1953', 2, 'Mera Bachpan Waapas Aaya', 'Suraiya', 'Mashuqa', 1953),
      origSong('roshan-mashuqa-1953', 3, 'Jhilmil Taare Karein Ishaare', 'Suraiya, Mukesh', 'Mashuqa', 1953),
    ],
  },
  {
    id: 'roshan-baap-beti-1954',
    directorId: 'roshan',
    title: 'Baap Beti',
    year: 1954,
    cast: 'Ranjan, Baby Tabassum, Vijayalaxmi',
    label: 'Saregama / HMV',
    significance:
      'Bimal Roy production with lyrics by Kavi Pradeep and soulful Lata Mangeshkar solos.',
    songs: [
      origSong('roshan-baap-beti-1954', 1, 'Andhere Se Ujale Ki Taraf Le Jaaye', 'Lata Mangeshkar', 'Baap Beti', 1954),
      origSong('roshan-baap-beti-1954', 2, 'Le Chal Ri Nindiya Le Chal Hamen', 'Lata Mangeshkar', 'Baap Beti', 1954),
    ],
  },
  {
    id: 'roshan-barati-1954',
    directorId: 'roshan',
    title: 'Barati',
    year: 1954,
    cast: 'Agha, Chand Usmani, Peace Kanwal',
    label: 'Saregama / HMV',
    significance:
      '1954 light musical featuring Lata Mangeshkar, Asha Bhosle, and even C. Ramchandra on playback.',
    songs: [
      origSong('roshan-barati-1954', 1, 'Aa Phir Se Mere Pyar Ki Kismat Sanwaar De', 'Lata Mangeshkar', 'Barati', 1954),
      origSong('roshan-barati-1954', 2, 'Kahin Door Koyaliya Gaaye Re', 'Lata Mangeshkar, Sudha Malhotra', 'Barati', 1954),
      origSong('roshan-barati-1954', 3, 'Teri Nazron Ne Humko Chheda Hai', 'C. Ramchandra, Asha Bhosle', 'Barati', 1954),
    ],
  },
  {
    id: 'roshan-chandni-chowk-1954',
    directorId: 'roshan',
    title: 'Chandni Chowk',
    year: 1954,
    cast: 'Meena Kumari, Shekhar, Kumar',
    label: 'Saregama / HMV',
    significance:
      'B.R. Chopra’s Old Delhi social drama showcasing Roshan’s early mastery of Muslim-social ghazal textures.',
    songs: [
      origSong('roshan-chandni-chowk-1954', 1, 'Tera Dil Kahan Hai', 'Asha Bhosle', 'Chandni Chowk', 1954),
      origSong('roshan-chandni-chowk-1954', 2, 'Bahar Aayi Khilin Kaliyan', 'Lata Mangeshkar', 'Chandni Chowk', 1954),
      origSong('roshan-chandni-chowk-1954', 3, 'Zameen Bhi Wohi Hai', 'Mohammed Rafi', 'Chandni Chowk', 1954),
    ],
  },
  {
    id: 'roshan-mehbooba-1954',
    directorId: 'roshan',
    title: 'Mehbooba',
    year: 1954,
    cast: 'Shammi Kapoor, Nalini Jaywant, Gope',
    label: 'Saregama / HMV',
    significance:
      '1954 costume romance with music initiated by Roshan and completed with O.P. Nayyar.',
    songs: [
      origSong('roshan-mehbooba-1954', 1, 'Aate Jaate Pehlu Mein Aaya Koi', 'Asha Bhosle', 'Mehbooba', 1954),
      origSong('roshan-mehbooba-1954', 2, 'Chhod Ke Teri Duniya', 'Talat Mahmood', 'Mehbooba', 1954),
    ],
  },

  // =========================================================================
  // 1955 – 1959 (Mid-Fifties Gems & Collaborations with Anand Bakshi)
  // =========================================================================
  {
    id: 'roshan-chhora-chhori-1955',
    directorId: 'roshan',
    title: 'Chhora Chhori',
    year: 1955,
    cast: 'Geeta Bali, Agha, P. Jairaj',
    label: 'Saregama / HMV',
    significance:
      'Kidar Sharma production with lyrics by Kedar Sharma.',
    songs: [
      origSong('roshan-chhora-chhori-1955', 1, 'Bedardi Balma Preet Ka Kare Hisab', 'Lata Mangeshkar, Mohammed Rafi, Geeta Dutt', 'Chhora Chhori', 1955),
      origSong('roshan-chhora-chhori-1955', 2, 'Khali Jeben Hon Kadki Ho', 'Mohammed Rafi', 'Chhora Chhori', 1955),
    ],
  },
  {
    id: 'roshan-ghar-ghar-mein-diwali-1955',
    directorId: 'roshan',
    title: 'Ghar Ghar Mein Diwali',
    year: 1955,
    cast: 'Shyama, Sajjan, Manorama',
    label: 'Saregama / HMV',
    significance:
      'Festive social drama featuring Lata Mangeshkar and Mohammed Rafi tracks.',
    songs: [
      origSong('roshan-ghar-ghar-mein-diwali-1955', 1, 'Deep Jalao Deep Jalao', 'Lata Mangeshkar, Chorus', 'Ghar Ghar Mein Diwali', 1955),
      origSong('roshan-ghar-ghar-mein-diwali-1955', 2, 'Kisi Ke Chhote Se Dil Mein', 'Lata Mangeshkar', 'Ghar Ghar Mein Diwali', 1955),
    ],
  },
  {
    id: 'roshan-jashan-1955',
    directorId: 'roshan',
    title: 'Jashan',
    year: 1955,
    cast: 'Vyjayanthimala, Karan Dewan, Johnny Walker',
    label: 'Saregama / HMV',
    significance:
      '1955 musical drama with Rajendra Krishan lyrics.',
    songs: [
      origSong('roshan-jashan-1955', 1, 'Duniya Mein Dilwalo Le Lo Maze Pyar Ke', 'Lata Mangeshkar', 'Jashan', 1955),
      origSong('roshan-jashan-1955', 2, 'Marenge Kas Kas Ke Baan', 'Mohammed Rafi, Asha Bhosle', 'Jashan', 1955),
    ],
  },
  {
    id: 'roshan-rangeen-raaten-1956',
    directorId: 'roshan',
    title: 'Rangeen Raaten',
    year: 1956,
    cast: 'Shammi Kapoor, Mala Sinha, Geeta Bali',
    label: 'Saregama / HMV',
    significance:
      'Kidar Sharma’s hill-station romantic musical shot in Ranikhet.',
    songs: [
      origSong('roshan-rangeen-raaten-1956', 1, 'Duniya Ki Nazar Hai Buri', 'Geeta Dutt', 'Rangeen Raaten', 1956),
      origSong('roshan-rangeen-raaten-1956', 2, 'Aaj Aa Gayi Yaad Woh', 'Mohammed Rafi', 'Rangeen Raaten', 1956),
    ],
  },
  {
    id: 'roshan-taksaal-1956',
    directorId: 'roshan',
    title: 'Taksaal',
    year: 1956,
    cast: 'Balraj Sahni, Nirupa Roy, Radhakishan',
    label: 'Saregama / HMV',
    significance:
      'Hemen Gupta social drama remembered for "Dil Bhi Tera Hum Bhi Tere" and "Mukhda Dekh Le Prani".',
    songs: [
      origSong('roshan-taksaal-1956', 1, 'Dil Bhi Tera Hum Bhi Tere', 'Lata Mangeshkar', 'Taksaal', 1956),
      origSong('roshan-taksaal-1956', 2, 'Mukhda Dekh Le Prani Zara Darpan Mein', 'Mohammed Rafi', 'Taksaal', 1956),
    ],
  },
  {
    id: 'roshan-agra-road-1957',
    directorId: 'roshan',
    title: 'Agra Road',
    year: 1957,
    cast: 'Vijay Anand, Shakila, Nanda, Satish Vyas',
    label: 'Saregama / HMV',
    significance:
      '1957 musical thriller famous for evergreen Geeta Dutt and Asha Bhosle hits.',
    songs: [
      origSong('roshan-agra-road-1957', 1, 'Suno Suno Re Mera Gaana', 'Asha Bhosle', 'Agra Road', 1957),
      origSong('roshan-agra-road-1957', 2, 'Gajab Hua Ram Sitam Hua Ram', 'Geeta Dutt, Mohammed Rafi', 'Agra Road', 1957),
    ],
  },
  {
    id: 'roshan-coffee-house-1957',
    directorId: 'roshan',
    title: 'Coffee House',
    year: 1957,
    cast: 'Shammi Kapoor, Geeta Bali, Helen',
    label: 'Saregama / HMV',
    significance:
      'Breezy 1957 urban romance with crisp Geeta Dutt and Asha Bhosle solos.',
    songs: [
      origSong('roshan-coffee-house-1957', 1, 'Jhoom Jhoom Ke', 'Geeta Dutt', 'Coffee House', 1957),
      origSong('roshan-coffee-house-1957', 2, 'Yeh Hawa Yeh Fizaa', 'Geeta Dutt', 'Coffee House', 1957),
      origSong('roshan-coffee-house-1957', 3, 'Jawan Yeh Zindagi Yeh Pyar Ka', 'Asha Bhosle', 'Coffee House', 1957),
    ],
  },
  {
    id: 'roshan-do-roti-1957',
    directorId: 'roshan',
    title: 'Do Roti',
    year: 1957,
    cast: 'Balraj Sahni, Nirupa Roy, Johnny Walker',
    label: 'Saregama / HMV',
    significance:
      'Social drama with Khumar Barabankvi lyrics and poignant Mohammed Rafi tracks.',
    songs: [
      origSong('roshan-do-roti-1957', 1, 'Sun Le Meri Pukar', 'Mohammed Rafi', 'Do Roti', 1957),
      origSong('roshan-do-roti-1957', 2, 'Aankhon Mein Aankh Daal Ke', 'Asha Bhosle', 'Do Roti', 1957),
    ],
  },
  {
    id: 'roshan-aji-bas-shukriya-1958',
    directorId: 'roshan',
    title: 'Aji Bas Shukriya',
    year: 1958,
    cast: 'Geeta Bali, Suresh, Johnny Walker',
    label: 'Saregama / HMV',
    significance:
      'Home to Lata Mangeshkar’s timeless hit "Saari Saari Raat Teri Yaad Sataaye".',
    songs: [
      origSong('roshan-aji-bas-shukriya-1958', 1, 'Saari Saari Raat Teri Yaad Sataaye', 'Lata Mangeshkar', 'Aji Bas Shukriya', 1958),
      origSong('roshan-aji-bas-shukriya-1958', 2, 'Sach Kehta Hai Johnny Walker', 'Asha Bhosle', 'Aji Bas Shukriya', 1958),
    ],
  },
  {
    id: 'roshan-aangan-1959',
    directorId: 'roshan',
    title: 'Aangan',
    year: 1959,
    cast: 'Asha Parekh, Mahipal, Shakila',
    label: 'Saregama / HMV',
    significance:
      'O.P. Dutta family drama featuring Mohammed Rafi and Asha Bhosle duets.',
    songs: [
      origSong('roshan-aangan-1959', 1, 'Ghunghat Se Kyon Naina Jhanke', 'Mohammed Rafi, Asha Bhosle', 'Aangan', 1959),
      origSong('roshan-aangan-1959', 2, 'Chhedo Na Dil Ki Baat', 'Asha Bhosle', 'Aangan', 1959),
    ],
  },
  {
    id: 'roshan-cid-girl-1959',
    directorId: 'roshan',
    title: 'CID Girl',
    year: 1959,
    cast: 'Balraj Sahni, Shakila, Johnny Walker',
    label: 'Saregama / HMV',
    significance:
      'Crime thriller credited with giving lyricist Anand Bakshi a crucial early break with Roshan.',
    songs: [
      origSong('roshan-cid-girl-1959', 1, 'Badi Buland Meri Bhabhi Ki Pasand', 'Mohammed Rafi', 'CID Girl', 1959),
      origSong('roshan-cid-girl-1959', 2, 'Dheere Dheere Chal Chand Gagan Mein', 'Asha Bhosle, Sudha Malhotra', 'CID Girl', 1959),
    ],
  },
  {
    id: 'roshan-deep-jalte-rahe-1959',
    directorId: 'roshan',
    title: 'Deep Jalte Rahe',
    year: 1959,
    cast: 'Balraj Sahni, Shakila, Prem Nath',
    label: 'Saregama / HMV',
    significance:
      'Remembered for Mohammed Rafi’s patriotic children’s classic "Chhodo Kal Ki Baaten".',
    songs: [
      origSong('roshan-deep-jalte-rahe-1959', 1, 'Chhodo Kal Ki Baaten', 'Mohammed Rafi, Asha Bhosle', 'Deep Jalte Rahe', 1959),
      origSong('roshan-deep-jalte-rahe-1959', 2, 'Ek Daur Woh Bhi Tha', 'Asha Bhosle', 'Deep Jalte Rahe', 1959),
    ],
  },
  {
    id: 'roshan-heera-moti-1959',
    directorId: 'roshan',
    title: 'Heera Moti',
    year: 1959,
    cast: 'Balraj Sahni, Nirupa Roy, Shobha Khote',
    label: 'Saregama / HMV',
    significance:
      'Krishan Chopra’s adaptation of Premchand’s Do Bailon Ki Katha with earthy North Indian folk music.',
    songs: [
      adaptedSong('roshan-heera-moti-1959', 1, 'Naach Re Dharti Ke Pyare', 'Lata Mangeshkar, Usha Mangeshkar', 'Heera Moti', 1959, {
        adaptationType: 'inspired',
        originalSongTitle: 'North Indian / Awadhi Rural Harvest Folk Idiom',
        originalArtist: 'Traditional North Indian Folk Repertoire',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Built on rustic North Indian harvest folk rhythms and flute phrasing suited to Premchand’s rural fable.',
        originalLink: 'https://www.youtube.com/watch?v=j8gMF-dTfZE',
        referenceSource: 'Songs of Yore & Hindi Folk Music Archives',
      }),
      origSong('roshan-heera-moti-1959', 2, 'Kaun Rang Mungwa', 'Lata Mangeshkar', 'Heera Moti', 1959),
    ],
  },
  {
    id: 'roshan-madhu-1959',
    directorId: 'roshan',
    title: 'Madhu',
    year: 1959,
    cast: 'Karan Dewan, Meena Kumari, Jagirdar',
    label: 'Saregama / HMV',
    significance:
      '1959 romantic drama featuring Lata Mangeshkar and Mohammed Rafi duets.',
    songs: [
      origSong('roshan-madhu-1959', 1, 'Kaanon Mein Jhumka Chaal Mein Thumka', 'Mohammed Rafi, Lata Mangeshkar', 'Madhu', 1959),
      origSong('roshan-madhu-1959', 2, 'Bata Do Koi Kaun Gali Gaye Shyam', 'Lata Mangeshkar', 'Madhu', 1959),
    ],
  },
  {
    id: 'roshan-maine-jeena-seekh-liya-1959',
    directorId: 'roshan',
    title: 'Maine Jeena Seekh Liya',
    year: 1959,
    cast: 'Ameeta, Ravindra Kapoor, Manohar Deepak',
    label: 'Saregama / HMV',
    significance:
      'Features "Tere Pyar Ko Is Tarah Se Bhulana" and sparkling Asha Bhosle-Rafi melodies.',
    songs: [
      origSong('roshan-maine-jeena-seekh-liya-1959', 1, 'Tere Pyar Ko Is Tarah Se Bhulana', 'Mukesh', 'Maine Jeena Seekh Liya', 1959),
      origSong('roshan-maine-jeena-seekh-liya-1959', 2, 'Yeh Na Thi Hamari Kismat', 'Asha Bhosle', 'Maine Jeena Seekh Liya', 1959),
    ],
  },

  // =========================================================================
  // 1960 – 1964 (Barsaat Ki Raat, Aarti, Taj Mahal, Dil Hi To Hai, Chitralekha)
  // =========================================================================
  {
    id: 'roshan-babar-1960',
    directorId: 'roshan',
    title: 'Babar',
    year: 1960,
    cast: 'Gajanan Jagirdar, Shubha Khote, Madhu Apte',
    label: 'Saregama / HMV',
    significance:
      'Historical drama scored by Roshan with Sahir Ludhianvi lyrics, including Sudha Malhotra’s ghazal "Salaam-E-Hasrat Qubool Kar Lo".',
    songs: [
      origSong('roshan-babar-1960', 1, 'Salaam-E-Hasrat Qubool Kar Lo', 'Sudha Malhotra', 'Babar', 1960),
      origSong('roshan-babar-1960', 2, 'Tum Ek Baar Mohabbat Ka Imtihaan To Lo', 'Mohammed Rafi', 'Babar', 1960),
      origSong('roshan-babar-1960', 3, 'Payam-E-Ishq-O-Mohabbat', 'Sudha Malhotra', 'Babar', 1960),
    ],
  },
  {
    id: 'roshan-barsaat-ki-raat-1960',
    directorId: 'roshan',
    title: 'Barsaat Ki Raat',
    year: 1960,
    cast: 'Bharat Bhushan, Madhubala, Shyama',
    label: 'Saregama / HMV',
    significance:
      'Watershed album of Hindi cinema with Sahir Ludhianvi, redefining cinematic qawwali and romantic melody.',
    songs: [
      adaptedSong('roshan-barsaat-ki-raat-1960', 1, 'Na To Karvan Ki Talash Hai', 'Manna Dey, Asha Bhosle, Sudha Malhotra, S.D. Batish, Mohammed Rafi', 'Barsaat Ki Raat', 1960, {
        adaptationType: 'inspired',
        originalSongTitle: 'Na To Butkade Ki Talab Mujhe',
        originalArtist: 'Ustad Mubarak Ali Khan & Ustad Fateh Ali Khan',
        originalYear: '1950s',
        originCategory: 'Pakistani Film & Ghazal',
        adaptationNotes:
          'Producer R. Chandra legally acquired the rights to Mubarak Ali Khan & Fateh Ali Khan’s celebrated qawwali "Na To Butkade Ki Talab Mujhe", which Roshan expanded into this epic 12-minute cinematic suite.',
        originalLink: 'https://www.youtube.com/watch?v=_vwQLiutb7o',
        referenceSource: 'Scroll.in & MySwar Qawwali Provenance Archives',
      }),
      origSong('roshan-barsaat-ki-raat-1960', 2, 'Zindagi Bhar Nahin Bhoolegi Woh Barsaat Ki Raat', 'Mohammed Rafi, Lata Mangeshkar', 'Barsaat Ki Raat', 1960),
      origSong('roshan-barsaat-ki-raat-1960', 3, 'Yeh Ishq Ishq Hai', 'Mohammed Rafi, Manna Dey, S.D. Batish, Sudha Malhotra', 'Barsaat Ki Raat', 1960),
      origSong('roshan-barsaat-ki-raat-1960', 4, 'Maine Shayad Tumhein Pehle Bhi Kahin Dekha Hai', 'Mohammed Rafi', 'Barsaat Ki Raat', 1960),
      origSong('roshan-barsaat-ki-raat-1960', 5, 'Mujhe Mil Gaya Bahana Teri Deed Ka', 'Lata Mangeshkar', 'Barsaat Ki Raat', 1960),
    ],
  },
  {
    id: 'roshan-warrant-1961',
    directorId: 'roshan',
    title: 'Warrant',
    year: 1961,
    cast: 'Ashok Kumar, Shakila, Pran',
    label: 'Saregama / HMV',
    significance:
      '1961 suspense thriller featuring luminous Lata Mangeshkar and Mukesh melodies.',
    songs: [
      origSong('roshan-warrant-1961', 1, 'Nainon Mein Kyun Aan Base', 'Lata Mangeshkar, Mukesh', 'Warrant', 1961),
      origSong('roshan-warrant-1961', 2, 'Hothon Pe Hasi Palkon Pe Haya', 'Lata Mangeshkar', 'Warrant', 1961),
    ],
  },
  {
    id: 'roshan-aarti-1962',
    directorId: 'roshan',
    title: 'Aarti',
    year: 1962,
    cast: 'Meena Kumari, Ashok Kumar, Pradeep Kumar',
    label: 'Saregama / HMV',
    significance:
      'Classic Rajshri-linked family drama penned by Majrooh Sultanpuri with immortal Rafi-Lata-Asha tracks.',
    songs: [
      origSong('roshan-aarti-1962', 1, 'Ab Kya Misaal Doon Main Tumhare Shabaab Ki', 'Mohammed Rafi', 'Aarti', 1962),
      origSong('roshan-aarti-1962', 2, 'Kabhi To Milegi Kahin To Milegi', 'Lata Mangeshkar', 'Aarti', 1962),
      origSong('roshan-aarti-1962', 3, 'Aapne Yaad Dilaya To Mujhe Yaad Aaya', 'Lata Mangeshkar, Mohammed Rafi', 'Aarti', 1962),
      origSong('roshan-aarti-1962', 4, 'Baar Baar Tohe Kya Samjhaayen', 'Mohammed Rafi, Lata Mangeshkar', 'Aarti', 1962),
    ],
  },
  {
    id: 'roshan-soorat-aur-seerat-1962',
    directorId: 'roshan',
    title: 'Soorat Aur Seerat',
    year: 1962,
    cast: 'Dharmendra, Nutan, I.S. Johar',
    label: 'Saregama / HMV',
    significance:
      'Notable for Shailendra lyrics and Mohammed Rafi-Asha Bhosle lullabies and duets.',
    songs: [
      origSong('roshan-soorat-aur-seerat-1962', 1, 'Bahut Diya Dene Wale Ne Tujhko', 'Mukesh', 'Soorat Aur Seerat', 1962),
      origSong('roshan-soorat-aur-seerat-1962', 2, 'Jaag Dil-e-Diwana Rut Jaagi Wasl-e-Yaar Ki', 'Mohammed Rafi', 'Soorat Aur Seerat', 1962),
    ],
  },
  {
    id: 'roshan-wallah-kya-baat-hai-1962',
    directorId: 'roshan',
    title: 'Wallah Kya Baat Hai',
    year: 1962,
    cast: 'Shammi Kapoor, Bina Rai, Nishi',
    label: 'Saregama / HMV',
    significance:
      'Shammi Kapoor comedy-romance highlighted by Rafi’s ghazal-inflected "Gham-E-Hasti Se Bas Begana Hota".',
    songs: [
      origSong('roshan-wallah-kya-baat-hai-1962', 1, 'Gham-E-Hasti Se Bas Begana Hota', 'Mohammed Rafi', 'Wallah Kya Baat Hai', 1962),
      origSong('roshan-wallah-kya-baat-hai-1962', 2, 'Kahin Se Shaam Ko', 'Mohammed Rafi', 'Wallah Kya Baat Hai', 1962),
    ],
  },
  {
    id: 'roshan-zindagi-aur-hum-1962',
    directorId: 'roshan',
    title: 'Zindagi Aur Hum',
    year: 1962,
    cast: 'Nalini Jaywant, Chand Usmani, Agha',
    label: 'Saregama / HMV',
    significance:
      '1962 social drama directed by Anand Kumar.',
    songs: [
      origSong('roshan-zindagi-aur-hum-1962', 1, 'Ja Re Ja Re Meri', 'Lata Mangeshkar', 'Zindagi Aur Hum', 1962),
      origSong('roshan-zindagi-aur-hum-1962', 2, 'Tu Humko Dekh Aur Humari Nazar Se Dekh', 'Mohammed Rafi, Asha Bhosle', 'Zindagi Aur Hum', 1962),
    ],
  },
  {
    id: 'roshan-commercial-pilot-officer-1963',
    directorId: 'roshan',
    title: 'Commercial Pilot Officer',
    year: 1963,
    cast: 'Shyama, Sudhir, Madan Puri',
    label: 'Saregama / HMV',
    significance:
      'Rare 1963 O.P. Dutta drama with lyrics by Anand Bakshi.',
    songs: [
      origSong('roshan-commercial-pilot-officer-1963', 1, 'Sharaab Ka Sahara Leke', 'Mohammed Rafi', 'Commercial Pilot Officer', 1963),
      origSong('roshan-commercial-pilot-officer-1963', 2, 'Rimjhim Rimjhim Barse Badarwa', 'Asha Bhosle', 'Commercial Pilot Officer', 1963),
    ],
  },
  {
    id: 'roshan-dil-hi-to-hai-1963',
    directorId: 'roshan',
    title: 'Dil Hi To Hai',
    year: 1963,
    cast: 'Raj Kapoor, Nutan, Pran, Agha',
    label: 'Saregama / HMV',
    significance:
      'Masterwork with Sahir Ludhianvi uniting "Laaga Chunari Mein Daag" (Raag Bhairavi) and "Nigahen Milane Ko Jee Chahta Hai".',
    songs: [
      adaptedSong('roshan-dil-hi-to-hai-1963', 1, 'Laaga Chunari Mein Daag', 'Manna Dey', 'Dil Hi To Hai', 1963, {
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Raag Bhairavi Bandish & Spiritual Chunari Idiom',
        originalArtist: 'Traditional Hindustani Classical / Bhakti Repertoire',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Composed strictly in Hindustani Raag Bhairavi with tarana, adapting classical devotional metaphor and bandish grammar.',
        originalLink: 'https://www.youtube.com/watch?v=j_Bgts0a_1k',
        referenceSource: 'Hindustani Classical Film Music Archives',
      }),
      origSong('roshan-dil-hi-to-hai-1963', 2, 'Nigahen Milane Ko Jee Chahta Hai', 'Asha Bhosle', 'Dil Hi To Hai', 1963),
      origSong('roshan-dil-hi-to-hai-1963', 3, 'Tum Agar Mujhko Na Chaho To Koi Baat Nahin', 'Mukesh', 'Dil Hi To Hai', 1963),
      origSong('roshan-dil-hi-to-hai-1963', 4, 'Parda Uthe Salam Ho Jaye', 'Asha Bhosle, Manna Dey', 'Dil Hi To Hai', 1963),
    ],
  },
  {
    id: 'roshan-taj-mahal-1963',
    directorId: 'roshan',
    title: 'Taj Mahal',
    year: 1963,
    cast: 'Pradeep Kumar, Bina Rai, Veena, Rehman',
    label: 'Saregama / HMV',
    significance:
      'Won Roshan the Filmfare Award for Best Music Director (1963) with Sahir Ludhianvi’s immortal poetry.',
    songs: [
      origSong('roshan-taj-mahal-1963', 1, 'Jo Vaada Kiya Woh Nibhana Padega', 'Mohammed Rafi, Lata Mangeshkar', 'Taj Mahal', 1963, 'Set in Raag Yaman-inspired courtly romantic cadence.'),
      origSong('roshan-taj-mahal-1963', 2, 'Paaon Chhoo Lene Do Phoolon Ko Inayat Hogi', 'Mohammed Rafi, Lata Mangeshkar', 'Taj Mahal', 1963),
      origSong('roshan-taj-mahal-1963', 3, 'Jurm-e-Ulfat Pe Humen Log Saza Dete Hain', 'Lata Mangeshkar', 'Taj Mahal', 1963),
      origSong('roshan-taj-mahal-1963', 4, 'Chandi Ka Badan Sone Ki Nazar', 'Asha Bhosle, Meena Kapoor, Manna Dey, Mohammed Rafi', 'Taj Mahal', 1963),
    ],
  },
  {
    id: 'roshan-chitralekha-1964',
    directorId: 'roshan',
    title: 'Chitralekha',
    year: 1964,
    cast: 'Ashok Kumar, Meena Kumari, Pradeep Kumar',
    label: 'Saregama / HMV',
    significance:
      'Kidar Sharma & Sahir Ludhianvi classical landmark revered as one of Hindi cinema’s purest raga-based scores.',
    songs: [
      origSong('roshan-chitralekha-1964', 1, 'Man Re Tu Kaahe Na Dheer Dhare', 'Mohammed Rafi', 'Chitralekha', 1964, 'Composed in Raag Yaman Kalyan with serene tanpura and sitar accompaniment.'),
      origSong('roshan-chitralekha-1964', 2, 'Sansaar Se Bhaage Phirte Ho', 'Lata Mangeshkar', 'Chitralekha', 1964),
      origSong('roshan-chitralekha-1964', 3, 'Sakhi Re Mera Man Uljhe Tan Dole', 'Lata Mangeshkar', 'Chitralekha', 1964),
      origSong('roshan-chitralekha-1964', 4, 'Ae Ri Jaane Na Doongi', 'Lata Mangeshkar', 'Chitralekha', 1964),
    ],
  },
  {
    id: 'roshan-dooj-ka-chaand-1964',
    directorId: 'roshan',
    title: 'Dooj Ka Chaand',
    year: 1964,
    cast: 'Bharat Bhushan, Saroja Devi, Ashok Kumar',
    label: 'Saregama / HMV',
    significance:
      '1964 drama featuring Sahir Ludhianvi lyrics for Mohammed Rafi and Lata Mangeshkar.',
    songs: [
      origSong('roshan-dooj-ka-chaand-1964', 1, 'Mehfil Se Uth Jaane Walon', 'Mohammed Rafi', 'Dooj Ka Chaand', 1964),
      origSong('roshan-dooj-ka-chaand-1964', 2, 'Phool Sa Chehra Chand Si Rangat', 'Mohammed Rafi', 'Dooj Ka Chaand', 1964),
    ],
  },

  // =========================================================================
  // 1965 – 1968 (Mamta, Devar, Bahu Begum, Noorjehan & Posthumous Anokhi Raat)
  // =========================================================================
  {
    id: 'roshan-bedaag-1965',
    directorId: 'roshan',
    title: 'Bedaag',
    year: 1965,
    cast: 'Manoj Kumar, Nanda, Shashikala',
    label: 'Saregama / HMV',
    significance:
      'Family drama featuring Shakeel Badayuni and Anand Bakshi lyrics.',
    songs: [
      origSong('roshan-bedaag-1965', 1, 'Aankhon Aankhon Mein Na Jaane Kya Ishara Ho Gaya', 'Mohammed Rafi, Asha Bhosle', 'Bedaag', 1965),
      origSong('roshan-bedaag-1965', 2, 'Zindagi Ke Mod Par', 'Mohammed Rafi', 'Bedaag', 1965),
    ],
  },
  {
    id: 'roshan-bheegi-raat-1965',
    directorId: 'roshan',
    title: 'Bheegi Raat',
    year: 1965,
    cast: 'Ashok Kumar, Meena Kumari, Pradeep Kumar',
    label: 'Saregama / HMV',
    significance:
      'Melodic 1965 hit featuring the timeless twin-version "Dil Jo Na Keh Saka".',
    songs: [
      origSong('roshan-bheegi-raat-1965', 1, 'Dil Jo Na Keh Saka Wohi Raaz-e-Dil', 'Mohammed Rafi / Lata Mangeshkar', 'Bheegi Raat', 1965),
      origSong('roshan-bheegi-raat-1965', 2, 'Aise To Na Dekho Ki Behak Jaayen Kahin Hum', 'Mohammed Rafi, Suman Kalyanpur', 'Bheegi Raat', 1965),
    ],
  },
  {
    id: 'roshan-nai-umar-ki-nai-fasal-1965',
    directorId: 'roshan',
    title: 'Nai Umar Ki Nai Fasal',
    year: 1965,
    cast: 'Rajiv, Tanuja, Ulhas',
    label: 'Saregama / HMV',
    significance:
      'Introduced poet Gopaldas Neeraj to Hindi cinema with the immortal "Karvan Guzar Gaya".',
    songs: [
      origSong('roshan-nai-umar-ki-nai-fasal-1965', 1, 'Karvan Guzar Gaya Gubar Dekhte Rahe (Swapna Jhare Phool Se)', 'Mohammed Rafi', 'Nai Umar Ki Nai Fasal', 1965),
      origSong('roshan-nai-umar-ki-nai-fasal-1965', 2, 'Dekhti Hi Raho Aaj Darpan Na Tum', 'Mukesh', 'Nai Umar Ki Nai Fasal', 1965),
    ],
  },
  {
    id: 'roshan-daadi-maa-1966',
    directorId: 'roshan',
    title: 'Daadi Maa',
    year: 1966,
    cast: 'Ashok Kumar, Bina Rai, Durga Khote, Mehmood',
    label: 'Saregama / HMV',
    significance:
      'L.V. Prasad emotional classic famed for Manna Dey & Mahendra Kapoor’s "Usko Nahin Dekha Humne Kabhi".',
    songs: [
      origSong('roshan-daadi-maa-1966', 1, 'Usko Nahin Dekha Humne Kabhi', 'Manna Dey, Mahendra Kapoor', 'Daadi Maa', 1966),
      origSong('roshan-daadi-maa-1966', 2, 'Aana Hai To Aa Raah Mein', 'Mohammed Rafi', 'Daadi Maa', 1966),
    ],
  },
  {
    id: 'roshan-devar-1966',
    directorId: 'roshan',
    title: 'Devar',
    year: 1966,
    cast: 'Dharmendra, Sharmila Tagore, Deven Verma',
    label: 'Saregama / HMV',
    significance:
      'Peak Roshan–Anand Bakshi–Mukesh collaboration delivering evergreen classics.',
    songs: [
      origSong('roshan-devar-1966', 1, 'Baharon Ne Mera Chaman Loot Kar', 'Mukesh', 'Devar', 1966),
      origSong('roshan-devar-1966', 2, 'Aaya Hai Mujhe Phir Yaad Woh Zaalim', 'Mukesh', 'Devar', 1966),
      origSong('roshan-devar-1966', 3, 'Duniya Mein Aisa Kahan Sab Ka Naseeb Hai', 'Lata Mangeshkar', 'Devar', 1966),
    ],
  },
  {
    id: 'roshan-mamta-1966',
    directorId: 'roshan',
    title: 'Mamta',
    year: 1966,
    cast: 'Suchitra Sen, Ashok Kumar, Dharmendra',
    label: 'Saregama / HMV',
    significance:
      'Asit Sen masterpiece penned by Majrooh Sultanpuri with Lata Mangeshkar’s pinnacle performances.',
    songs: [
      adaptedSong('roshan-mamta-1966', 1, 'Rahen Na Rahen Hum Mehka Karenge', 'Lata Mangeshkar', 'Mamta', 1966, {
        adaptationType: 'inspired',
        originalSongTitle: 'Return to Paradise (Opening Violin Prelude)',
        originalArtist: 'Ron Goodwin (Music for an Arabian Night)',
        originalYear: '1959',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'ITWOFS documents that the opening orchestral string prelude draws inspiration from Ron Goodwin’s 1959 piece "Return to Paradise", while the vocal melody and song body remain Roshan’s original composition.',
        originalLink: 'https://www.youtube.com/watch?v=OGOB4whpadM',
        referenceSource: 'ITWOFS & Golden Era Musicology Archives',
      }),
      origSong('roshan-mamta-1966', 2, 'Rehte The Kabhi Jinke Dil Mein', 'Lata Mangeshkar', 'Mamta', 1966),
      origSong('roshan-mamta-1966', 3, 'Chhupa Lo Yun Dil Mein Pyar Mera', 'Hemant Kumar, Lata Mangeshkar', 'Mamta', 1966),
      origSong('roshan-mamta-1966', 4, 'Vikal Mora Manwa', 'Lata Mangeshkar', 'Mamta', 1966),
    ],
  },
  {
    id: 'roshan-bahu-begum-1967',
    directorId: 'roshan',
    title: 'Bahu Begum',
    year: 1967,
    cast: 'Pradeep Kumar, Meena Kumari, Ashok Kumar',
    label: 'Saregama / HMV',
    significance:
      'Muslim-social triumph with Sahir Ludhianvi poetry, released shortly before Roshan’s passing in November 1967.',
    songs: [
      origSong('roshan-bahu-begum-1967', 1, 'Hum Intezar Karenge Tera Qayamat Tak', 'Asha Bhosle, Mohammed Rafi', 'Bahu Begum', 1967),
      origSong('roshan-bahu-begum-1967', 2, 'Duniya Kare Sawaal To Hum Kya Jawaab Den', 'Lata Mangeshkar', 'Bahu Begum', 1967),
      origSong('roshan-bahu-begum-1967', 3, 'Padh Gaye Jhoole Sawan Rut Aayi Re', 'Lata Mangeshkar, Asha Bhosle', 'Bahu Begum', 1967),
    ],
  },
  {
    id: 'roshan-noorjehan-1967',
    directorId: 'roshan',
    title: 'Noorjehan',
    year: 1967,
    cast: 'Meena Kumari, Pradeep Kumar, Johnny Walker',
    label: 'Saregama / HMV',
    significance:
      'Mughal historical score remembered for "Aap Jab Se Qareeb Aaye Hain" and "Sharaabi Sharaabi Ye Saawan Ka Mausam".',
    songs: [
      origSong('roshan-noorjehan-1967', 1, 'Aap Jab Se Qareeb Aaye Hain', 'Asha Bhosle, Mohammed Rafi', 'Noorjehan', 1967),
      origSong('roshan-noorjehan-1967', 2, 'Sharaabi Sharaabi Ye Saawan Ka Mausam', 'Suman Kalyanpur', 'Noorjehan', 1967),
      origSong('roshan-noorjehan-1967', 3, 'Raat Ki Mehfil Sooni Sooni', 'Lata Mangeshkar', 'Noorjehan', 1967),
    ],
  },
  {
    id: 'roshan-anokhi-raat-1968',
    directorId: 'roshan',
    title: 'Anokhi Raat',
    year: 1968,
    cast: 'Sanjeev Kumar, Zaheeda, Tarun Bose, Aruna Irani',
    label: 'Saregama / HMV',
    significance:
      'Posthumous swan song following Roshan’s passing on 16 November 1967; celebrated for Indeevar’s philosophical Mukesh & Rafi ballads.',
    songs: [
      adaptedSong('roshan-anokhi-raat-1968', 1, 'Oh Re Taal Mile Nadi Ke Jal Mein', 'Mukesh', 'Anokhi Raat', 1968, {
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional North Indian / Baul River Folk Idiom',
        originalArtist: 'Traditional Indian Folk Repertoire',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Roshan’s swan-song melody draws its rustic, unhurried flow from traditional Indian boatman/Baul river folk phrasing paired with Indeevar’s philosophical verse.',
        originalLink: 'https://www.youtube.com/watch?v=W9H0f_EJSC4',
        referenceSource: 'Songs of Yore & Hindi Folk Music Archives',
      }),
      origSong('roshan-anokhi-raat-1968', 2, 'Mile Na Phool To Kanton Se Dosti Kar Li', 'Mohammed Rafi', 'Anokhi Raat', 1968),
      origSong('roshan-anokhi-raat-1968', 3, 'Mahalon Ka Raja Mila', 'Lata Mangeshkar', 'Anokhi Raat', 1968),
    ],
  },
];
