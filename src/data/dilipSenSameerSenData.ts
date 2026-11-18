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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Dilip Sen Sameer Sen`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Dilip Sen Sameer Sen`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

export const DILIP_SEN_SAMEER_SEN_MOVIES: MovieEntry[] = [
  // =====================================================================
  // 1988 – 1994: SOORMA BHOPALI, JEENA MARNA, AAINA & YEH DILLAGI ERA
  // =====================================================================
  {
    id: 'ds-soorma-bhopali-1988',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Soorma Bhopali',
    year: 1988,
    cast: 'Jagdeep, Amitabh Bachchan, Dharmendra, Rekha',
    label: 'T-Series',
    significance:
      'Early joint Bollywood soundtrack credit for Dilip Sen–Sameer Sen, starring Jagdeep reprising his beloved Sholay persona.',
    songs: [
      origSong('ds-soorma-bhopali-1988', 1, 'Main Hoon Soorma Bhopali', 'Mohammed Aziz & Jagdeep', 'Soorma Bhopali', 1988, 'Asad Bhopali'),
      origSong('ds-soorma-bhopali-1988', 2, 'Taat Ka Parda', 'Mohammed Rafi, Jagdeep & Chorus', 'Soorma Bhopali', 1988, 'Asad Bhopali', 'Includes a posthumous Mohammed Rafi archival vocal recorded during early production.'),
      origSong('ds-soorma-bhopali-1988', 3, 'Tum Aaye Zindagi Mein', 'Alka Yagnik & Dilraj Kaur', 'Soorma Bhopali', 1988, 'Asad Bhopali'),
      origSong('ds-soorma-bhopali-1988', 4, 'Tambakoo Nahin Hai', 'Sameer Sen, Dilip Sen, Dilraj Kaur & Jagdeep', 'Soorma Bhopali', 1988, 'Asad Bhopali'),
    ],
  },
  {
    id: 'ds-basanti-tangewali-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Basanti Tangewali',
    year: 1992,
    cast: 'Ekta Sohini, Avtar Gill, Kader Khan, Shakti Kapoor',
    label: 'T-Series',
    significance:
      '1992 action-drama soundtrack highlighting Dilip Sen–Sameer Sen’s early folk-laced studio arrangements.',
    songs: [
      origSong('ds-basanti-tangewali-1992', 1, 'Aayi Hai Ban Than Ke Basanti Tangewali', 'Alka Yagnik', 'Basanti Tangewali', 1992, 'Mahendra Dehlvi'),
      origSong('ds-basanti-tangewali-1992', 2, 'Pahle Lakshmi Ka Paisa Nikaal Raja Ji', 'Anupama Deshpande', 'Basanti Tangewali', 1992, 'Dilip Tahir'),
      origSong('ds-basanti-tangewali-1992', 3, 'Shama Ban Ke Jalti Hoon', 'Anupama Deshpande', 'Basanti Tangewali', 1992, 'Mahendra Dehlvi'),
      origSong('ds-basanti-tangewali-1992', 4, 'Peekar Shankarji Ka Pyala', 'Chorus', 'Basanti Tangewali', 1992, 'Dilip Tahir'),
    ],
  },
  {
    id: 'ds-do-hanso-ka-joda-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Do Hanso Ka Joda',
    year: 1992,
    cast: 'Anupam Kher, Sudha Chandran',
    label: 'T-Series',
    significance:
      '1992 Hindi family drama featuring early Kumar Sanu and Mohammed Aziz tracks by the duo.',
    songs: [
      origSong('ds-do-hanso-ka-joda-1992', 1, 'Hum Aur Tum', 'Sudesh Bhosle & Anupama Deshpande', 'Do Hanso Ka Joda', 1992),
      origSong('ds-do-hanso-ka-joda-1992', 2, 'Dushman Dilo Ka Jala', 'Kumar Sanu', 'Do Hanso Ka Joda', 1992),
      origSong('ds-do-hanso-ka-joda-1992', 3, 'Tujh Bin Raha Na Jaye', 'Mohammed Aziz', 'Do Hanso Ka Joda', 1992),
    ],
  },
  {
    id: 'ds-zulm-ki-hukumat-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Zulm Ki Hukumat',
    year: 1992,
    cast: 'Dharmendra, Govinda, Moushumi Chatterjee, Kimi Katkar',
    label: 'T-Series',
    significance:
      'High-energy 1992 action entertainer pairing Dharmendra and Govinda with upbeat rhythmic hooks.',
    songs: [
      origSong('ds-zulm-ki-hukumat-1992', 1, 'Yahan Zulm Ki Hukumat Hai', 'Kavita Krishnamurthy', 'Zulm Ki Hukumat', 1992),
      origSong('ds-zulm-ki-hukumat-1992', 2, 'Hum Aap Ki Zulfon Se Khele', 'Asha Bhosle & Amit Kumar', 'Zulm Ki Hukumat', 1992),
      origSong('ds-zulm-ki-hukumat-1992', 3, 'Chiklo Chiklo', 'Alka Yagnik & Amit Kumar', 'Zulm Ki Hukumat', 1992),
      origSong('ds-zulm-ki-hukumat-1992', 4, 'O Dilruba', 'Kavita Krishnamurthy', 'Zulm Ki Hukumat', 1992),
      origSong('ds-zulm-ki-hukumat-1992', 5, 'Kathmandu Kathmandu Oh Mundu', 'Kumar Sanu', 'Zulm Ki Hukumat', 1992),
    ],
  },
  {
    id: 'ds-jeena-marna-tere-sang-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Jeena Marna Tere Sang',
    year: 1992,
    cast: 'Sanjay Dutt, Raveena Tandon, Aruna Irani',
    label: 'T-Series',
    significance:
      'Breakthrough mainstream Hindi soundtrack featuring the evergreen hit "Chaha Hai Tumhein Chahenge" alongside an adaptation of the Punjabi folk classic "Kala Doriya".',
    songs: [
      origSong('ds-jeena-marna-tere-sang-1992', 1, 'Chaha Hai Tumhein Chahenge', 'Kumar Sanu & Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Sameer', 'Breakthrough romantic chartbuster cementing Dilip Sen–Sameer Sen in 1990s Hindi cinema.'),
      origSong('ds-jeena-marna-tere-sang-1992', 2, 'Kal Maine Khuli Aankh Se Ek Sapna Dekha', 'Abhijeet & Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Ibrahim Ashq'),
      origSong('ds-jeena-marna-tere-sang-1992', 3, 'Tumse Hai Kitna Pyar Ye Hum Keh Nahin Sakte', 'Vipin Sachdeva & Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Dilip Tahir'),
      origSong('ds-jeena-marna-tere-sang-1992', 4, 'Aaj Dil Ki Baatein Keh Denge Hum Sabhi', 'Babla Mehta & Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Yogesh'),
      origSong('ds-jeena-marna-tere-sang-1992', 5, 'Tune Zamane Ye Kya Kar Diya', 'Vipin Sachdeva & Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Indeevar'),
      adaptedSong('ds-jeena-marna-tere-sang-1992', 6, 'Kala Doriya', 'Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992, 'Mahendra Dehlvi', {
        adaptationType: 'inspired',
        originalSongTitle: 'Kala Doriya (Traditional Punjabi Folk)',
        originalArtist: 'Surinder Kaur & Prakash Kaur (Punjabi Folk)',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Direct filmi arrangement of the classic Punjabi wedding folk song "Kala Doriya Kunde Naal Adiya Oye", preserving the traditional refrain and dholak meter.',
        originalLink: 'https://www.youtube.com/watch?v=t1w4vU-BmOs',
        referenceSource: 'Punjabi Folk Archive / Soundtrack Credits',
      }),
      origSong('ds-jeena-marna-tere-sang-1992', 7, 'Dil Ek Mandir Pyar Hai Pooja', 'Anuradha Paudwal', 'Jeena Marna Tere Sang', 1992),
    ],
  },
  {
    id: 'ds-umar-55-ki-dil-bachpan-ka-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Umar 55 Ki Dil Bachpan Ka',
    year: 1992,
    cast: 'Kader Khan, Anupam Kher, Akshay Kumar, Chandni',
    label: 'T-Series',
    significance:
      'Late-1992 comedy score balancing melodic Kumar Sanu duets with playful character numbers.',
    songs: [
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 1, 'Jab Se Mila Hai Mujhe', 'Kumar Sanu & Anuradha Paudwal', 'Umar 55 Ki Dil Bachpan Ka', 1992),
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 2, 'Ye Dil Kaho To Dedu', 'Kumar Sanu & Alka Yagnik', 'Umar 55 Ki Dil Bachpan Ka', 1992),
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 3, 'Umar Pachpan Ki Dil Bachpan Ka', 'Sudesh Bhosle, Sarika Kapoor & Aparna Mayekar', 'Umar 55 Ki Dil Bachpan Ka', 1992),
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 4, 'Duniya Ko Chhod Ke Rasmo Ko Tod Ke', 'Amit Kumar & Alka Yagnik', 'Umar 55 Ki Dil Bachpan Ka', 1992),
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 5, 'I Love You', 'Alisha Chinai & Sudesh Bhosle', 'Umar 55 Ki Dil Bachpan Ka', 1992),
      origSong('ds-umar-55-ki-dil-bachpan-ka-1992', 6, 'Bombay Town', 'Sudesh Bhosle, Jolly Mukherjee & Sarika Kapoor', 'Umar 55 Ki Dil Bachpan Ka', 1992),
    ],
  },
  {
    id: 'ds-yudhpath-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Yudhpath',
    year: 1992,
    cast: 'Sudesh Berry, Siddharth Ray, Mohnish Bahl',
    label: 'Tips Music',
    significance:
      '1992 youth action score blending romantic ballads by Kumar Sanu and Anwar with folk-inflected ensembles.',
    songs: [
      origSong('ds-yudhpath-1992', 1, 'Chane Laga Aisa Nasha (I Love You)', 'Kumar Sanu & Kavita Krishnamurthy', 'Yudhpath', 1992),
      origSong('ds-yudhpath-1992', 2, 'Jab Aaye Aise Pal Kabhi', 'Anwar', 'Yudhpath', 1992),
      origSong('ds-yudhpath-1992', 3, 'Chhora Badnaam', 'Jolly Mukherjee, Shailender Singh & Sukhwinder Singh', 'Yudhpath', 1992),
      origSong('ds-yudhpath-1992', 4, 'Iss Pe Joban Ki', 'Sadhana Sargam & Ila Arun', 'Yudhpath', 1992),
      origSong('ds-yudhpath-1992', 5, 'Wah Wah Kya Baat Hai Teri', 'Sarika Kapoor & Simmi Sinha', 'Yudhpath', 1992),
    ],
  },
  {
    id: 'ds-ganga-bani-shola-1992',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ganga Bani Shola',
    year: 1992,
    cast: 'Dalip Tahil, Anupam Kher, Kiran Kumar, Jamuna',
    label: 'Venus Records',
    significance:
      '1992 action-drama soundtrack featuring Sadhana Sargam, Kavita Krishnamurthy, and Alka Yagnik.',
    songs: [
      origSong('ds-ganga-bani-shola-1992', 1, 'Hum Banjare Pyar Ke Maare', 'Sadhana Sargam', 'Ganga Bani Shola', 1992),
      origSong('ds-ganga-bani-shola-1992', 2, 'Ke Wadiya Bajana Balam Dheere Dheere', 'Anupama Deshpande', 'Ganga Bani Shola', 1992),
      origSong('ds-ganga-bani-shola-1992', 3, 'Mere Sajanwa', 'Kavita Krishnamurthy', 'Ganga Bani Shola', 1992),
      origSong('ds-ganga-bani-shola-1992', 4, 'Parody (Ganga Bani Shola)', 'Sudesh Bhosle', 'Ganga Bani Shola', 1992),
      origSong('ds-ganga-bani-shola-1992', 5, 'Sajna Maine Tum Ko Dil Diya', 'Alka Yagnik', 'Ganga Bani Shola', 1992),
    ],
  },
  {
    id: 'ds-phoolan-hasina-ramkali-1993',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Phoolan Hasina Ramkali',
    year: 1993,
    cast: 'Shakti Kapoor, Raza Murad, Sudha Chandran, Anupam Kher',
    label: 'T-Series',
    significance:
      '1993 revenge drama featuring Kumar Sanu’s melodic "Chori Chori Jab Yun Ho".',
    songs: [
      origSong('ds-phoolan-hasina-ramkali-1993', 1, 'Chori Chori Jab Yun Ho', 'Kumar Sanu', 'Phoolan Hasina Ramkali', 1993),
    ],
  },
  {
    id: 'ds-aaina-1993',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Aaina',
    year: 1993,
    cast: 'Jackie Shroff, Juhi Chawla, Amrita Singh',
    label: 'Yash Raj Music / HMV',
    significance:
      'First major Yash Raj Films triumph for Dilip Sen–Sameer Sen, yielding beloved studio originals including "Goriya Re Goriya" and Pamela Chopra’s wedding classic "Banno Ki Aayegi Baraat".',
    songs: [
      origSong('ds-aaina-1993', 1, 'Goriya Re Goriya', 'Lata Mangeshkar & Jolly Mukherjee', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 2, 'Meri Saanson Mein Tum', 'Kumar Sanu & Asha Bhosle', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 3, 'Banno Ki Aayegi Baraat (Happy)', 'Pamela Chopra', 'Aaina', 1993, 'Sameer', 'Iconic Yash Raj wedding number arranged in traditional North Indian banni folk style.'),
      origSong('ds-aaina-1993', 4, 'Dil Ne Dil Se Kya Kahan', 'Lata Mangeshkar & Nitin Mukesh', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 5, 'Yeh Raat Khushnaseeb Hai', 'Lata Mangeshkar', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 6, 'Aaina Hai Mera Chehra', 'Lata Mangeshkar, Asha Bhosle & Suresh Wadkar', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 7, 'Banno Ki Aayegi Baraat (Sad)', 'Pamela Chopra', 'Aaina', 1993, 'Sameer'),
      origSong('ds-aaina-1993', 8, 'Saansen Behki', 'Asha Bhosle & Dilip Sen', 'Aaina', 1993, 'Sameer'),
    ],
  },
  {
    id: 'ds-muqabla-1993',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Muqabla',
    year: 1993,
    cast: 'Govinda, Karisma Kapoor, Aditya Pancholi, Farah Naaz',
    label: 'T-Series',
    significance:
      'Hit 1993 Govinda action-masala album packed with 10 lively tracks spotlighting young Sonu Nigam alongside Abhijeet and Anuradha Paudwal.',
    songs: [
      origSong('ds-muqabla-1993', 1, 'Ik Ladki Ne Mujhpe Jadu Kiya', 'Abhijeet, Sonu Nigam & Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 2, 'Chal Chaliye Wahan Pe Dil Jani', 'Abhijeet & Sonu Nigam', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 3, 'Dil Tera Hai Diwana', 'Abhijeet & Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 4, 'Dekho Pyare Rut Kaisi Aayee', 'Suresh Wadkar & Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 5, 'Jisko Pooja Tha Is Dil Ne', 'Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 6, 'Chhodo Mujhe Jane Do Mere Sanwariya', 'Sonu Nigam & Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 7, 'Naino Ko Karne Do Naino Se Baat', 'Sonu Nigam & Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 8, 'Jane Jana Aaja Na Baahon Mein', 'Anuradha Paudwal', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 9, 'Khanke Ye Kangana Sun More Sajna', 'Anuradha Paudwal & Pankaj Udhas', 'Muqabla', 1993),
      origSong('ds-muqabla-1993', 10, 'Tumbak Tu Baba Tumbak Tu', 'Alisha Chinai', 'Muqabla', 1993),
    ],
  },
  {
    id: 'ds-meherbaan-1993',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Meherbaan',
    year: 1993,
    cast: 'Mithun Chakraborty, Ayesha Jhulka, Shantipriya, Sadashiv Amrapurkar',
    label: 'T-Series',
    significance:
      'Mithun Chakraborty social drama launching the duo’s prolific 1990s partnership with the star, led by Sonu Nigam’s "Agar Aasman Tak Mere Haath Jate".',
    songs: [
      origSong('ds-meherbaan-1993', 1, 'Agar Aasman Tak Mere Haath Jate', 'Sonu Nigam & Anuradha Paudwal', 'Meherbaan', 1993, 'Rani Malik'),
      origSong('ds-meherbaan-1993', 2, 'Bol Gori Bol Jara Itni Si Baat', 'Anuradha Paudwal & Ila Arun', 'Meherbaan', 1993, 'Mahendra Dehlvi'),
      origSong('ds-meherbaan-1993', 3, 'Dhire Se Chupke Se Dil Ne Liya Tera Naam', 'Sonu Nigam & Anuradha Paudwal', 'Meherbaan', 1993),
      origSong('ds-meherbaan-1993', 4, 'Rimjhim Rimjhim Tan Pe Mere Pani', 'Anuradha Paudwal', 'Meherbaan', 1993),
      origSong('ds-meherbaan-1993', 5, 'Aao Guru Karen Peena Shuru', 'Sudesh Bhosle & Anuradha Paudwal', 'Meherbaan', 1993),
      origSong('ds-meherbaan-1993', 6, 'Ye Kya Kya Dikhati Hai Ye Zindagi', 'Sukhwinder Singh', 'Meherbaan', 1993),
    ],
  },
  {
    id: 'ds-yeh-dillagi-1994',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Yeh Dillagi',
    year: 1994,
    cast: 'Akshay Kumar, Saif Ali Khan, Kajol',
    label: 'HMV / Saregama',
    significance:
      'Career-defining Yash Raj blockbuster (~2.2M units sold) earning a Filmfare Best Music Director nomination, anchored by the all-original cultural phenomenon "Ole Ole" and Lata Mangeshkar–Kumar Sanu duets.',
    songs: [
      origSong('ds-yeh-dillagi-1994', 1, 'Ole Ole', 'Abhijeet', 'Yeh Dillagi', 1994, 'Sameer', 'Original smash conceived spontaneously by Dilip Sen during a hailstorm drive; earned Abhijeet a Filmfare Best Male Playback nomination.'),
      origSong('ds-yeh-dillagi-1994', 2, 'Hothon Pe Bas', 'Lata Mangeshkar & Kumar Sanu', 'Yeh Dillagi', 1994, 'Sameer'),
      origSong('ds-yeh-dillagi-1994', 3, 'Dekho Zara Dekho', 'Lata Mangeshkar & Kumar Sanu', 'Yeh Dillagi', 1994, 'Sameer'),
      origSong('ds-yeh-dillagi-1994', 4, 'Gori Kalai', 'Lata Mangeshkar & Udit Narayan', 'Yeh Dillagi', 1994, 'Sameer'),
      origSong('ds-yeh-dillagi-1994', 5, 'Naam Kya Hai', 'Lata Mangeshkar & Kumar Sanu', 'Yeh Dillagi', 1994, 'Sameer'),
      origSong('ds-yeh-dillagi-1994', 6, 'Lagi Lagi Yeh Dil Ki Lagi', 'Lata Mangeshkar, Udit Narayan & Abhijeet', 'Yeh Dillagi', 1994, 'Sameer'),
      origSong('ds-yeh-dillagi-1994', 7, 'Main Deewana Hoon', 'Pankaj Udhas', 'Yeh Dillagi', 1994, 'Sameer'),
    ],
  },
  {
    id: 'ds-aag-1994',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Aag',
    year: 1994,
    cast: 'Govinda, Shilpa Shetty, Sonali Bendre',
    label: 'Venus Records',
    significance:
      '1994 musical entertainer led by the enduring romantic duet "Ankhon Mein Tum Ho" alongside spirited folk-dance numbers.',
    songs: [
      origSong('ds-aag-1994', 1, 'Ankhon Mein Tum Ho', 'Kumar Sanu & Alka Yagnik', 'Aag', 1994, 'Sameer'),
      origSong('ds-aag-1994', 2, 'Main Tera Majnu', 'Kumar Sanu & Poornima', 'Aag', 1994, 'Sameer'),
      origSong('ds-aag-1994', 3, 'Tera Kya Lagta Hai', 'Sonu Nigam, Alka Yagnik & Ila Arun', 'Aag', 1994, 'Sameer'),
      origSong('ds-aag-1994', 4, 'Yeh Kanya Kunwari Hai', 'Hariharan, Sudesh Bhosle & Alka Yagnik', 'Aag', 1994, 'Sameer'),
      origSong('ds-aag-1994', 5, 'Muskura Ke Jiyo Zindagi', 'Kumar Sanu', 'Aag', 1994, 'Sameer'),
      origSong('ds-aag-1994', 6, 'Angiya Mein Ang Na Samaye', 'Poornima', 'Aag', 1994, 'Sameer'),
    ],
  },

  // =====================================================================
  // 1995 – 1996: KARTAVYA, HAQEEQAT, TU CHOR MAIN SIPAHI & ANGAARA
  // =====================================================================
  {
    id: 'ds-reshma-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Reshma',
    year: 1995,
    cast: 'Mithun Chakraborty, Gulshan Grover',
    label: 'T-Series',
    significance:
      '1995 action drama featuring Shabbir Kumar and Kavita Krishnamurthy.',
    songs: [
      origSong('ds-reshma-1995', 1, 'Hum Pyaar Bhi Karte Hai', 'Shabbir Kumar & Kavita Krishnamurthy', 'Reshma', 1995),
    ],
  },
  {
    id: 'ds-ab-to-jeene-do-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ab To Jeene Do',
    year: 1995,
    cast: 'Vikas Bhalla, Ayesha Jhulka',
    label: 'Tips Music',
    significance:
      '1995 romantic drama soundtrack pairing Sadhana Sargam, Mohammed Aziz, and Poornima.',
    songs: [
      origSong('ds-ab-to-jeene-do-1995', 1, 'Dharti Gagan Ho Ke Magan', 'Mohammed Aziz & Sadhana Sargam', 'Ab To Jeene Do', 1995),
      origSong('ds-ab-to-jeene-do-1995', 2, 'Kal Raat Bichhua Ne', 'Sapna Mukherjee', 'Ab To Jeene Do', 1995, 'Jeetu'),
      origSong('ds-ab-to-jeene-do-1995', 3, 'Main Jawan Tu Jawan', 'Sadhana Sargam', 'Ab To Jeene Do', 1995),
      origSong('ds-ab-to-jeene-do-1995', 4, 'Nathaniya Toot Gayi', 'Poornima', 'Ab To Jeene Do', 1995),
    ],
  },
  {
    id: 'ds-aashique-mastane-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Aashique Mastane',
    year: 1995,
    cast: 'Vikas Bhalla, Ayub Khan, Monica Bedi',
    label: 'T-Series',
    significance:
      '1995 youth comedy-romance anchored by Udit Narayan and Alka Yagnik’s "Aaye Din Pyar Ke".',
    songs: [
      origSong('ds-aashique-mastane-1995', 1, 'Aaye Din Pyar Ke', 'Udit Narayan & Alka Yagnik', 'Aashique Mastane', 1995),
      origSong('ds-aashique-mastane-1995', 2, 'Gori Gori Chhori', 'Abhijeet & Poornima', 'Aashique Mastane', 1995),
      origSong('ds-aashique-mastane-1995', 3, 'Hum Aashique Hai', 'Udit Narayan & Abhijeet', 'Aashique Mastane', 1995),
      origSong('ds-aashique-mastane-1995', 4, 'Jane Bhi Do', 'Udit Narayan & Alka Yagnik', 'Aashique Mastane', 1995),
      origSong('ds-aashique-mastane-1995', 5, 'Pyar Kya Hota Hai', 'Kumar Sanu & Kavita Krishnamurthy', 'Aashique Mastane', 1995),
      origSong('ds-aashique-mastane-1995', 6, 'Tere Dil Ke Patri Pe', 'Abhijeet & Poornima', 'Aashique Mastane', 1995),
    ],
  },
  {
    id: 'ds-teen-moti-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Teen Moti',
    year: 1995,
    cast: 'Shakti Kapoor, Raza Murad, Dharmendra',
    label: 'Tips Music',
    significance:
      '1995 action drama led by Kumar Sanu and Sadhana Sargam’s "Dil Tera Deewana Hai".',
    songs: [
      origSong('ds-teen-moti-1995', 1, 'Dil Tera Deewana Hai', 'Kumar Sanu & Sadhana Sargam', 'Teen Moti', 1995, 'Nawab Arzoo'),
      origSong('ds-teen-moti-1995', 2, 'Garam Hai Loha', 'Sudesh Bhosle & Kavita Krishnamurthy', 'Teen Moti', 1995),
      origSong('ds-teen-moti-1995', 3, 'Ishq Pe Koi Zor', 'Kumar Sanu & Sadhana Sargam', 'Teen Moti', 1995),
      origSong('ds-teen-moti-1995', 4, 'Tum Ko Jaanam', 'Udit Narayan & Alka Yagnik', 'Teen Moti', 1995),
    ],
  },
  {
    id: 'ds-the-don-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'The Don',
    year: 1995,
    cast: 'Mithun Chakraborty, Sonali Bendre, Jugal Hansraj',
    label: 'Tips Music',
    significance:
      '1995 underworld thriller featuring Kumar Sanu and Sadhana Sargam romantic duets.',
    songs: [
      origSong('ds-the-don-1995', 1, 'Teri Chaahat Mein Dil Deewana Huva', 'Kumar Sanu & Sadhana Sargam', 'The Don', 1995, 'Deepak Chaudhary'),
      origSong('ds-the-don-1995', 2, 'Dekha Jo Tumhe Yeh Dil', 'Kumar Sanu', 'The Don', 1995, 'Anwar Sagar'),
      origSong('ds-the-don-1995', 3, 'Dil Ki Jo Maanu To', 'Kumar Sanu & Sadhana Sargam', 'The Don', 1995, 'Faiz Anwar'),
      origSong('ds-the-don-1995', 4, 'Rajai Ma To Garmi Lage', 'Udit Narayan & Kavita Krishnamurthy', 'The Don', 1995, 'Nawab Arzoo'),
      origSong('ds-the-don-1995', 5, 'Pum Pum Pum', 'Abhijeet & Chorus', 'The Don', 1995),
      origSong('ds-the-don-1995', 6, 'The Don', 'Mohammed Aziz', 'The Don', 1995),
    ],
  },
  {
    id: 'ds-kartavya-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Kartavya',
    year: 1995,
    cast: 'Sanjay Kapoor, Juhi Chawla, Amrish Puri',
    label: 'Tips Music',
    significance:
      'Popular 1995 action romance packed with Kumar Sanu–Alka Yagnik chartbusters including "Dhadakta Tha Pehle Dil Mera" and "Pyar Me Dil Ka Murga Bole".',
    songs: [
      origSong('ds-kartavya-1995', 1, 'Dhadakta Tha Pehle Dil Mera', 'Kumar Sanu & Alka Yagnik', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 2, 'Hame Kya Khabar Thi', 'Kumar Sanu & Alka Yagnik', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 3, 'Pyar Me Dil Ka Murga Bole', 'Kumar Sanu & Alka Yagnik', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 4, 'Ye Dil Ki Dhadkan', 'Kumar Sanu & Alka Yagnik', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 5, 'Pardesiyo Se Puch Puch', 'Sukhwinder Singh & Sadhana Sargam', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 6, 'Adi Tappa Yeh Desi Mem Hai', 'Vinod Rathod & Kavita Krishnamurthy', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 7, 'Roop Nagar Ki Rani Hoon', 'Poornima', 'Kartavya', 1995),
      origSong('ds-kartavya-1995', 8, 'Ek Baar Beta Mujhe', 'Udit Narayan & Sadhana Sargam', 'Kartavya', 1995),
    ],
  },
  {
    id: 'ds-veer-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Veer',
    year: 1995,
    cast: 'Dharmendra, Jaya Prada, Armaan Kohli, Gautami',
    label: 'Venus Records',
    significance:
      '1995 action entertainer featuring Dilip Sen and Sameer Sen’s own vocals on upbeat bhangra-pop tracks.',
    songs: [
      origSong('ds-veer-1995', 1, 'Balle Balle', 'Sudesh Bhosle, Bali Brahmbhatt & Dilip Sen–Sameer Sen', 'Veer', 1995, 'Maya Govind'),
      origSong('ds-veer-1995', 2, 'Dhoom Dhadaka', 'Kumar Sanu & Poornima', 'Veer', 1995, 'Poonam'),
      origSong('ds-veer-1995', 3, 'Gore Gore Gaal Mere', 'Dilip Sen–Sameer Sen & Poornima', 'Veer', 1995, 'Maya Govind'),
      origSong('ds-veer-1995', 4, 'Tere Hain Hum', 'Kumar Sanu & Alka Yagnik', 'Veer', 1995, 'Rani Malik'),
      origSong('ds-veer-1995', 5, 'Take It Easy', 'Abhijeet & Pradeep Lad', 'Veer', 1995, 'Shyam Anuragi'),
    ],
  },
  {
    id: 'ds-haqeeqat-1995',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Haqeeqat',
    year: 1995,
    cast: 'Ajay Devgn, Tabu, Aruna Irani, Amrish Puri',
    label: 'Tips Music',
    significance:
      'Commercial action-drama hit pairing soulful Alka Yagnik–Hariharan ballads with the ITWOFS-documented "Le Pappiyan Jhappiyan".',
    songs: [
      adaptedSong('ds-haqeeqat-1995', 1, 'Le Pappiyan Jhappiyan', 'Kumar Sanu & Alka Yagnik', 'Haqeeqat', 1995, 'Gulshan Bawra', {
        adaptationType: 'inspired',
        originalSongTitle: 'Tequila',
        originalArtist: 'The Champs',
        originalYear: '1958',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Builds its brass hook and rhythmic horn motif directly around The Champs’ iconic 1958 instrumental rock-and-roll riff "Tequila".',
        originalLink: 'https://www.youtube.com/watch?v=4hswHOEQfj8',
        referenceSource: 'ITWOFS (Hindi Film Songs Archive)',
      }),
      origSong('ds-haqeeqat-1995', 2, 'Ek Ladki Hai', 'Udit Narayan & Alka Yagnik', 'Haqeeqat', 1995, 'Faaiz Anwar'),
      origSong('ds-haqeeqat-1995', 3, 'Dil Ne Dil Se Ikrar Kiya', 'Hariharan & Alka Yagnik', 'Haqeeqat', 1995, 'Nawab Arzoo'),
      origSong('ds-haqeeqat-1995', 4, 'Mele Lage Hue Hain Haseeno Ke', 'Kumar Sanu & Alka Yagnik', 'Haqeeqat', 1995, 'Rani Malik'),
      origSong('ds-haqeeqat-1995', 5, 'O Jaane Jaan', 'Kumar Sanu & Alka Yagnik', 'Haqeeqat', 1995, 'Gulshan Bawra'),
      origSong('ds-haqeeqat-1995', 6, 'Main Tera Dil Mein Saason Mein', 'Kumar Sanu & Alka Yagnik', 'Haqeeqat', 1995, 'Rani Malik'),
      origSong('ds-haqeeqat-1995', 7, 'Akrakam Tuka Ta', 'Udit Narayan & Sudesh Bhosle', 'Haqeeqat', 1995, 'Maya Govind'),
    ],
  },
  {
    id: 'ds-jurmana-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Jurmana',
    year: 1996,
    cast: 'Mithun Chakraborty, Rambha, Ronit Roy, Ashwini Bhave',
    label: 'Tips Music',
    significance:
      '1996 action drama highlighting young Aditya Narayan alongside Udit Narayan and Sadhana Sargam.',
    songs: [
      origSong('ds-jurmana-1996', 1, 'Tere Pyar Mein Dil Ye', 'Udit Narayan & Sadhana Sargam', 'Jurmana', 1996, 'Mithilesh Maan Singh'),
      origSong('ds-jurmana-1996', 2, 'Dil Deewana Ho Gaya', 'Kavita Krishnamurthy', 'Jurmana', 1996),
      origSong('ds-jurmana-1996', 3, 'Sun Meri Jaane Jaana', 'Udit Narayan, Aditya Narayan & Kalyaani Singh', 'Jurmana', 1996),
      origSong('ds-jurmana-1996', 4, 'Sard Raaton Mein Yu', 'Poornima', 'Jurmana', 1996),
      origSong('ds-jurmana-1996', 5, 'Teri Patli Kamar', 'Udit Narayan', 'Jurmana', 1996),
      origSong('ds-jurmana-1996', 6, 'Mirchi Re Mirchi', 'Sudesh Bhosle & Poornima', 'Jurmana', 1996),
    ],
  },
  {
    id: 'ds-tu-chor-main-sipahi-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Tu Chor Main Sipahi',
    year: 1996,
    cast: 'Akshay Kumar, Saif Ali Khan, Tabu, Pratibha Sinha',
    label: 'Tips Music',
    significance:
      'Reuniting the Yeh Dillagi lead trio with lyricist Anand Bakshi, delivering hits like "Hum Do Premee", "Bol O Gori", and Alisha Chinai’s "Ye Aag Thi Dil Mein".',
    songs: [
      origSong('ds-tu-chor-main-sipahi-1996', 1, 'Hum Do Premee', 'Kumar Sanu & Alka Yagnik', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 2, 'Jaaneman Jaane Jaa', 'Kumar Sanu & Kavita Krishnamurthy', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 3, 'Bol O Gori', 'Kumar Sanu & Alka Yagnik', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 4, 'Chal Kar Le Thoda Pyar', 'Kumar Sanu & Poornima', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 5, 'Tak Dhina Tak Dhina', 'Kumar Sanu & Alka Yagnik', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 6, 'Ye Aag Thi Dil Mein', 'Alisha Chinai', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
      origSong('ds-tu-chor-main-sipahi-1996', 7, 'Kuchh Ho Gaya', 'Kumar Sanu & Alka Yagnik', 'Tu Chor Main Sipahi', 1996, 'Anand Bakshi'),
    ],
  },
  {
    id: 'ds-bhishma-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Bhishma',
    year: 1996,
    cast: 'Mithun Chakraborty, Anjali Jathar, Harish, Vani Viswanath',
    label: 'Tips Music',
    significance:
      '1996 Mithun Chakraborty action score written with veteran lyricist Anand Bakshi.',
    songs: [
      origSong('ds-bhishma-1996', 1, 'Chahe Jaan Jaaye', 'Udit Narayan & Kavita Krishnamurthy', 'Bhishma', 1996, 'Anand Bakshi'),
      origSong('ds-bhishma-1996', 2, 'Kya Nahin Kiya', 'Udit Narayan', 'Bhishma', 1996, 'Anand Bakshi'),
      origSong('ds-bhishma-1996', 3, 'Tera Bina Duniya', 'Kumar Sanu', 'Bhishma', 1996, 'Anand Bakshi'),
      origSong('ds-bhishma-1996', 4, 'Mere Seene Mein', 'Jolly Mukherjee & Meena Patel', 'Bhishma', 1996, 'Anand Bakshi'),
      origSong('ds-bhishma-1996', 5, 'O Soni O Soni', 'Udit Narayan', 'Bhishma', 1996, 'Anand Bakshi'),
      origSong('ds-bhishma-1996', 6, 'Dil Jo Lagaa Ye', 'Udit Narayan & Kavita Krishnamurthy', 'Bhishma', 1996, 'Anand Bakshi'),
    ],
  },
  {
    id: 'ds-angaara-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Angaara',
    year: 1996,
    cast: 'Mithun Chakraborty, Simran, Hemant Birje',
    label: 'Tips Music',
    significance:
      '1996 Mithun Chakraborty actioner featuring "Aara Hile Chhapra Hile" alongside the Ustad Nusrat Fateh Ali Khan-derived duet "Dheere Dheere Bolna".',
    songs: [
      adaptedSong('ds-angaara-1996', 1, 'Dheere Dheere Bolna', 'Mohammed Aziz & Kavita Krishnamurthy', 'Angaara', 1996, 'Maya Govind', {
        adaptationType: 'copied',
        originalSongTitle: 'Aiwen Bol Na Banere Utte Kawan',
        originalArtist: 'Ustad Nusrat Fateh Ali Khan',
        originalYear: '1993',
        originCategory: 'Nusrat Fateh Ali Khan',
        adaptationNotes:
          'Adapts the lilting Punjabi folk-qawwali melody popularized by Ustad Nusrat Fateh Ali Khan’s "Aiwen Bol Na Banere Utte Kawan" into a Hindi duet.',
        originalLink: 'https://www.youtube.com/watch?v=bWo7Ue4mCOM',
        referenceSource: 'CopycatList / Punjabi Folk-Qawwali Archives',
      }),
      origSong('ds-angaara-1996', 2, 'Gore Gore Gal Wali', 'Udit Narayan & Sadhana Sargam', 'Angaara', 1996, 'Nawab Arzoo'),
      origSong('ds-angaara-1996', 3, 'Aara Hile Chhapra Hile', 'Udit Narayan & Alka Yagnik', 'Angaara', 1996, 'Maya Govind'),
      origSong('ds-angaara-1996', 4, 'Tun Tuna Tun Tuna', 'Abhijeet & Poornima', 'Angaara', 1996),
      origSong('ds-angaara-1996', 5, 'Jeevan Hai Sangram', 'Kumar Sanu', 'Angaara', 1996),
      origSong('ds-angaara-1996', 6, 'Aaja Gori Banki Chhori', 'Kumar Sanu & Kavita Krishnamurthy', 'Angaara', 1996),
    ],
  },
  {
    id: 'ds-laalchee-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Laalchee',
    year: 1996,
    cast: 'Mithun Chakraborty, Karina Grover, Pran',
    label: 'T-Series',
    significance:
      '1996 social comedy-drama featuring Kumar Sanu, Udit Narayan, and Sonu Nigam.',
    songs: [
      origSong('ds-laalchee-1996', 1, 'Teri Meri Zindagi', 'Kumar Sanu & Suresh Wadkar', 'Laalchee', 1996, 'Sameer'),
      origSong('ds-laalchee-1996', 2, 'Ooperwaale Neeli Chatri', 'Kumar Sanu & Poornima', 'Laalchee', 1996),
      origSong('ds-laalchee-1996', 3, 'Sochona Sochona', 'Udit Narayan & Kavita Krishnamurthy', 'Laalchee', 1996),
      origSong('ds-laalchee-1996', 4, 'Soyi Hai Raat Koi Jaaga Nahin', 'Poornima', 'Laalchee', 1996),
      origSong('ds-laalchee-1996', 5, 'Diki Dum Diki Dum', 'Udit Narayan', 'Laalchee', 1996),
      origSong('ds-laalchee-1996', 6, 'Kheencho Dil Ki Car', 'Sonu Nigam & Mitali Chowdhury', 'Laalchee', 1996),
    ],
  },
  {
    id: 'ds-hasina-aur-nagina-1996',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Hasina Aur Nagina',
    year: 1996,
    cast: 'Ekta Sohini, Jagdeep, Kiran Kumar',
    label: 'T-Series',
    significance:
      '1996 fantasy-action album highlighting Sadhana Sargam, Kavita Krishnamurthy, and Nitin Mukesh.',
    songs: [
      origSong('ds-hasina-aur-nagina-1996', 1, 'Tu Mera Raja Main Teri', 'Sarika Kapoor & Simi Sinha', 'Hasina Aur Nagina', 1996),
      origSong('ds-hasina-aur-nagina-1996', 2, 'Jay Shiv Shankar', 'Sarika Kapoor', 'Hasina Aur Nagina', 1996),
      origSong('ds-hasina-aur-nagina-1996', 3, 'Mai Hu Ek Hasina', 'Kavita Krishnamurthy & Shobha Joshi', 'Hasina Aur Nagina', 1996),
      origSong('ds-hasina-aur-nagina-1996', 4, 'Mai Tera Raja Tu Meri', 'Sadhana Sargam & Nitin Mukesh', 'Hasina Aur Nagina', 1996),
      origSong('ds-hasina-aur-nagina-1996', 5, 'Meri Shishe Wali', 'Sadhana Sargam', 'Hasina Aur Nagina', 1996),
    ],
  },

  // =====================================================================
  // 1997 – 1999: ZIDDI, ITIHAAS, AFLATOON, SALAAKHEN & ARJUN PANDIT
  // =====================================================================
  {
    id: 'ds-nazarr-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Nazarr',
    year: 1997,
    cast: 'Sanjay Kapoor, Ashwini Bhave',
    label: 'Tips Music',
    significance:
      '1997 romantic suspense album featuring Kumar Sanu, Alka Yagnik, Udit Narayan, and Abhijeet.',
    songs: [
      origSong('ds-nazarr-1997', 1, 'Yeh Chand Kahin Chup Jaye Na Phir', 'Kumar Sanu & Alka Yagnik', 'Nazarr', 1997),
      origSong('ds-nazarr-1997', 2, 'Dekho Mere Humsafar', 'Udit Narayan & Sadhana Sargam', 'Nazarr', 1997),
      origSong('ds-nazarr-1997', 3, 'Meri Jaan-E-Adah', 'Abhijeet & Kavita Krishnamurthy', 'Nazarr', 1997),
      origSong('ds-nazarr-1997', 4, 'Do Teen Pancha', 'Udit Narayan & Poornima', 'Nazarr', 1997),
      origSong('ds-nazarr-1997', 5, 'Tu Hai Main Hoon', 'Kavita Krishnamurthy & Babla Mehta', 'Nazarr', 1997),
    ],
  },
  {
    id: 'ds-ziddi-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ziddi',
    year: 1997,
    cast: 'Sunny Deol, Raveena Tandon, Anupam Kher, Raj Babbar',
    label: 'T-Series',
    significance:
      'Blockbuster 1997 Sunny Deol hit featuring Hariharan–Chithra melodies alongside the viral Abrar-ul-Haq-derived dance track "Mera Dil Le Gayee (Kammo)".',
    songs: [
      adaptedSong('ds-ziddi-1997', 1, 'Mera Dil Le Gayee (Kammo)', 'Lalit Sen', 'Ziddi', 1997, 'Sameer', {
        adaptationType: 'copied',
        originalSongTitle: 'Billo De Ghar',
        originalArtist: 'Abrar-ul-Haq',
        originalYear: '1995',
        originCategory: 'Pakistani Film & Ghazal',
        adaptationNotes:
          'Closely reproduces the infectious Punjabi bhangra-pop hook and vocal cadence of Abrar-ul-Haq’s breakthrough 1995 chartbuster "Billo De Ghar".',
        originalLink: 'https://www.youtube.com/watch?v=3vE5jcb4voY',
        referenceSource: 'ITWOFS / CopycatList',
      }),
      origSong('ds-ziddi-1997', 2, 'Hum Tumse Na Kuchh Keh Paye', 'Hariharan & K. S. Chithra', 'Ziddi', 1997, 'Sameer'),
      origSong('ds-ziddi-1997', 3, 'Hum Mile Tum Mile', 'Udit Narayan & Alka Yagnik', 'Ziddi', 1997, 'Sameer'),
      origSong('ds-ziddi-1997', 4, 'O Haseena', 'Kumar Sanu & K. S. Chithra', 'Ziddi', 1997, 'Sameer'),
      origSong('ds-ziddi-1997', 5, 'Aji Suno Suno', 'Udit Narayan & K. S. Chithra', 'Ziddi', 1997, 'Sameer'),
      origSong('ds-ziddi-1997', 6, 'Kaale Kaale Baal', 'Shweta Shetty', 'Ziddi', 1997, 'Sameer'),
    ],
  },
  {
    id: 'ds-itihaas-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Itihaas',
    year: 1997,
    cast: 'Ajay Devgn, Twinkle Khanna, Amrish Puri, Raj Babbar',
    label: 'Time Magnetics',
    significance:
      'Sweeping 10-track Raj Kanwar drama pairing romantic originals ("Chori Chori Dil Diya", "Dil Ke Qalam Se") with two documented Ustad Nusrat Fateh Ali Khan-derived numbers.',
    songs: [
      adaptedSong('ds-itihaas-1997', 1, 'Ramji O Ramji', 'Alka Yagnik & Chorus', 'Itihaas', 1997, 'Sameer', {
        adaptationType: 'copied',
        originalSongTitle: 'Maar Gai Udeek Din Raat Di',
        originalArtist: 'Ustad Nusrat Fateh Ali Khan',
        originalYear: '1993',
        originCategory: 'Nusrat Fateh Ali Khan',
        adaptationNotes:
          'Directly adapts the signature vocal phrase and rhythmic contour of Ustad Nusrat Fateh Ali Khan’s Punjabi devotional-folk recording "Maar Gai Udeek Din Raat Di".',
        originalLink: 'https://www.youtube.com/watch?v=r87_r-N7Ca4',
        referenceSource: 'ITWOFS (Hindi Film Songs Archive)',
      }),
      adaptedSong('ds-itihaas-1997', 2, 'Saathi Mere Tere Bina', 'Kumar Sanu & Anuradha Paudwal', 'Itihaas', 1997, 'Sameer', {
        adaptationType: 'copied',
        originalSongTitle: 'Maar Gai Udeek Din Raat Di',
        originalArtist: 'Ustad Nusrat Fateh Ali Khan',
        originalYear: '1993',
        originCategory: 'Nusrat Fateh Ali Khan',
        adaptationNotes:
          'Ballad companion setting sharing the same core melodic refrain drawn from Ustad Nusrat Fateh Ali Khan’s "Maar Gai Udeek Din Raat Di".',
        originalLink: 'https://www.youtube.com/watch?v=r87_r-N7Ca4',
        referenceSource: 'CopycatList / Musicology Archives',
      }),
      origSong('ds-itihaas-1997', 3, 'Chori Chori Dil Diya', 'Kumar Sanu & Alka Yagnik', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 4, 'Dil Ke Qalam Se', 'Hariharan & Anuradha Paudwal', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 5, 'Achko Machko', 'Alka Yagnik', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 6, 'Bol Bol Bol Raja', 'Vinod Rathod, Shankar Mahadevan & Alka Yagnik', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 7, 'Ja Re Ja Ud Ja Panchhi', 'Shankar Mahadevan & Alka Yagnik', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 8, 'Yeh Ishq Bada', 'Pappu A.K. & Anuradha Paudwal', 'Itihaas', 1997, 'Sameer'),
      origSong('ds-itihaas-1997', 9, 'Juda Apne Dilbar Se', 'Alka Yagnik, Shankar Mahadevan & Sukhwinder Singh', 'Itihaas', 1997, 'Sameer'),
    ],
  },
  {
    id: 'ds-daadagiri-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Daadagiri',
    year: 1997,
    cast: 'Mithun Chakraborty, Ayub Khan, Simran, Rituparna Sengupta',
    label: 'T-Series',
    significance:
      '1997 Mithun Chakraborty actioner featuring the Vital Signs-adapted duet "Gore Rang Ka Zamana".',
    songs: [
      adaptedSong('ds-daadagiri-1997', 1, 'Gore Rang Ka Zamana', 'Udit Narayan & Asha Bhosle', 'Daadagiri', 1997, 'Nawab Arzoo', {
        adaptationType: 'copied',
        originalSongTitle: 'Goray Rang Ka Zamana',
        originalArtist: 'Vital Signs (Junaid Jamshed)',
        originalYear: '1989',
        originCategory: 'Pakistani Film & Ghazal',
        adaptationNotes:
          'Directly adapts the opening hook, lyric premise, and guitar-pop melody of Pakistani pop pioneers Vital Signs’ 1989 classic "Goray Rang Ka Zamana".',
        originalLink: 'https://www.youtube.com/watch?v=VQZ30QGtkn0',
        referenceSource: 'CopycatList / South Asian Pop Archives',
      }),
      origSong('ds-daadagiri-1997', 2, 'Tirchi Nazaria Gore Gaal', 'Udit Narayan & Kavita Krishnamurthy', 'Daadagiri', 1997, 'Nawab Arzoo'),
      origSong('ds-daadagiri-1997', 3, 'Mujhe Yaara Tere Pyar Mein', 'Kumar Sanu & Kavita Krishnamurthy', 'Daadagiri', 1997, 'Nawab Arzoo'),
      origSong('ds-daadagiri-1997', 4, 'Yeh Bandhan Hai Purana', 'Babul Supriyo & Kavita Krishnamurthy', 'Daadagiri', 1997, 'Nawab Arzoo'),
      origSong('ds-daadagiri-1997', 5, 'Maine Tujhe Chaaha', 'Mohammed Aziz & Kavita Krishnamurthy', 'Daadagiri', 1997, 'Nawab Arzoo'),
    ],
  },
  {
    id: 'ds-jaalsaaz-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Jaalsaaz',
    year: 1997,
    cast: 'Mithun Chakraborty, Ayesha Jhulka',
    label: 'Tips Music',
    significance:
      '1997 caper-action soundtrack written with lyricist Ravindra Jain.',
    songs: [
      origSong('ds-jaalsaaz-1997', 1, 'Dil Ko Dhadkata Hai', 'Jolly Mukherjee & Kavita Krishnamurthy', 'Jaalsaaz', 1997, 'Ravindra Jain'),
      origSong('ds-jaalsaaz-1997', 2, 'Kangna Khanke Khanan Khanan', 'Kumar Sanu & Alka Yagnik', 'Jaalsaaz', 1997, 'Ravindra Jain'),
      origSong('ds-jaalsaaz-1997', 3, 'Na Kuchh Diya Na Kuchh Liya', 'Hariharan & Poornima', 'Jaalsaaz', 1997, 'Ravindra Jain'),
      origSong('ds-jaalsaaz-1997', 4, 'Aaja Dilbar Na Na Kar', 'Shweta Shetty', 'Jaalsaaz', 1997, 'Ravindra Jain'),
      origSong('ds-jaalsaaz-1997', 5, 'Jantar Mantar Chhoo', 'Abhijeet & Kavita Krishnamurthy', 'Jaalsaaz', 1997, 'Ravindra Jain'),
      origSong('ds-jaalsaaz-1997', 6, 'Bada Bedardi', 'Jolly Mukherjee & Kavita Krishnamurthy', 'Jaalsaaz', 1997, 'Ravindra Jain'),
    ],
  },
  {
    id: 'ds-aflatoon-1997',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Aflatoon',
    year: 1997,
    cast: 'Akshay Kumar, Urmila Matondkar, Anupam Kher',
    label: 'Venus Records',
    significance:
      'Slick 1997 chartbuster starring Akshay Kumar, crowned by the original dance craze "Poster Lagwado Bazar Mein" and Queen’s "We Will Rock You"-inspired anthem "We Love We Love Rocky".',
    songs: [
      origSong('ds-aflatoon-1997', 1, 'Poster Lagwado Bazar Mein', 'Lalit Sen & Shweta Shetty', 'Aflatoon', 1997, 'Anand Bakshi', 'Original smash dance track later recreated by Tanishk Bagchi in Luka Chuppi (2019).'),
      adaptedSong('ds-aflatoon-1997', 2, 'We Love We Love Rocky', 'Vinod Rathod', 'Aflatoon', 1997, 'Anand Bakshi', {
        adaptationType: 'inspired',
        originalSongTitle: 'We Will Rock You',
        originalArtist: 'Queen',
        originalYear: '1977',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Directly mirrors Queen’s signature stomp-stomp-clap stadium percussion cadence and English chant structure from "We Will Rock You".',
        originalLink: 'https://www.youtube.com/watch?v=-tJYN-eG1zk',
        referenceSource: 'Wikipedia / Musicology Archives',
      }),
      origSong('ds-aflatoon-1997', 3, 'Aflatoon - Aflatoon', 'Remo Fernandes', 'Aflatoon', 1997, 'Anand Bakshi'),
      origSong('ds-aflatoon-1997', 4, 'Oye Oye Tere Si Ladki', 'Udit Narayan & Anuradha Paudwal', 'Aflatoon', 1997, 'Anand Bakshi'),
      origSong('ds-aflatoon-1997', 5, 'Uee Maa Uee Maa Mar Gayi Re', 'Abhijeet & Anuradha Paudwal', 'Aflatoon', 1997, 'Anand Bakshi'),
      origSong('ds-aflatoon-1997', 6, 'Tu Mange Dil Main De Doon Jaan', 'Hariharan & K. S. Chithra', 'Aflatoon', 1997, 'Anand Bakshi'),
      origSong('ds-aflatoon-1997', 7, 'Gori Chori Chori', 'Alisha Chinai', 'Aflatoon', 1997, 'Anand Bakshi'),
    ],
  },
  {
    id: 'ds-mohabbat-aur-jung-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Mohabbat Aur Jung',
    year: 1998,
    cast: 'Mohnish Bahl, Deepak Tijori, Rakesh Bedi',
    label: 'T-Series',
    significance:
      '1998 romantic action soundtrack led by Kumar Sanu, Alka Yagnik, and Udit Narayan.',
    songs: [
      origSong('ds-mohabbat-aur-jung-1998', 1, 'Dil Leke Haathon Me', 'Kumar Sanu & Alka Yagnik', 'Mohabbat Aur Jung', 1998),
      origSong('ds-mohabbat-aur-jung-1998', 2, 'Pyaar Hi Pyaar Hai', 'Udit Narayan & Kavita Krishnamurthy', 'Mohabbat Aur Jung', 1998),
      origSong('ds-mohabbat-aur-jung-1998', 3, 'Tukai Tukai (Tune Ye Kya Jaadu Kiya)', 'Abhijeet & Poornima', 'Mohabbat Aur Jung', 1998),
      origSong('ds-mohabbat-aur-jung-1998', 4, 'Dekho Dekho Kauva Chala Hai Hans Ki Chal', 'Bali Brahmbhatt & Sudesh Bhosle', 'Mohabbat Aur Jung', 1998),
    ],
  },
  {
    id: 'ds-ustadon-ke-ustad-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ustadon Ke Ustad',
    year: 1998,
    cast: 'Mithun Chakraborty, Jackie Shroff, Madhoo, Vineetha',
    label: 'T-Series',
    significance:
      '1998 multi-starrer action drama starring Mithun Chakraborty and Jackie Shroff.',
    songs: [
      origSong('ds-ustadon-ke-ustad-1998', 1, 'Gore Gore Paon Mein', 'Udit Narayan & Poornima', 'Ustadon Ke Ustad', 1998),
      origSong('ds-ustadon-ke-ustad-1998', 2, 'Nigahen Khul Ke Mila', 'Mohammed Aziz & Anuradha Paudwal', 'Ustadon Ke Ustad', 1998),
      origSong('ds-ustadon-ke-ustad-1998', 3, 'Sone Si Jawani Teri', 'Bali Brahmbhatt & Anuradha Paudwal', 'Ustadon Ke Ustad', 1998),
      origSong('ds-ustadon-ke-ustad-1998', 4, 'Jawani Char Din Ki', 'Lalit Sen & Poornima', 'Ustadon Ke Ustad', 1998),
    ],
  },
  {
    id: 'ds-salaakhen-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Salaakhen',
    year: 1998,
    cast: 'Sunny Deol, Raveena Tandon, Amrish Puri, Anupam Kher',
    label: 'T-Series',
    significance:
      'Follow-up Sunny Deol–Raveena Tandon hit with Sameer’s lyrics, propelled by Shweta Shetty’s "Pichhu Pade Hai" and Kumar Sanu–Alka Yagnik’s "Dil Mera Le Gayee".',
    songs: [
      origSong('ds-salaakhen-1998', 1, 'Dil Mera Le Gayee', 'Kumar Sanu & Alka Yagnik', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 2, 'Pichhu Pade Hai', 'Shweta Shetty', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 3, 'Dhak Dhak', 'Abhijeet & Shweta Shetty', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 4, 'Zubaan Pe Jo Nahin Aaye', 'Udit Narayan & K. S. Chithra', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 5, 'Pagal Karna Pagal Hona', 'Udit Narayan & Anuradha Paudwal', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 6, 'Punjabi Kudee Maare Jhatke', 'Lalit Sen & Hema Sardesai', 'Salaakhen', 1998, 'Sameer'),
      origSong('ds-salaakhen-1998', 7, 'Pagal Diwana Awara', 'Vinod Rathod & K. S. Chithra', 'Salaakhen', 1998, 'Sameer'),
    ],
  },
  {
    id: 'ds-mard-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Mard',
    year: 1998,
    cast: 'Mithun Chakraborty, Ravali, Kader Khan',
    label: 'T-Series',
    significance:
      '1998 Mithun Chakraborty drama blending Altaf Raja and Mohammed Aziz vocal flavors.',
    songs: [
      origSong('ds-mard-1998', 1, 'Aaj Kisiki Jeet Hui Hai', 'Mohammed Aziz', 'Mard', 1998),
      origSong('ds-mard-1998', 2, 'Aankhon Main Hai Kya', 'Kumar Sanu & Alka Yagnik', 'Mard', 1998),
      origSong('ds-mard-1998', 3, 'Dil Dhadak Dhadak Mera Jaye', 'Udit Narayan & Poornima', 'Mard', 1998),
      origSong('ds-mard-1998', 4, 'Peelo Ishq Di Whisky', 'Altaf Raja', 'Mard', 1998),
      origSong('ds-mard-1998', 5, 'Tu Apna Kaam Kar Re', 'Kumar Sanu & Alka Yagnik', 'Mard', 1998),
    ],
  },
  {
    id: 'ds-hatyara-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Hatyara',
    year: 1998,
    cast: 'Mithun Chakraborty, Suman Ranganathan, Mukesh Rishi',
    label: 'T-Series',
    significance:
      '1998 Mithun Chakraborty action score highlighting Kumar Sanu, Udit Narayan, and Shweta Shetty.',
    songs: [
      origSong('ds-hatyara-1998', 1, 'O Sanam Tu Le Kasam', 'Kumar Sanu & Anuradha Paudwal', 'Hatyara', 1998),
      origSong('ds-hatyara-1998', 2, 'Dil Ki Khidki Khol De Gori', 'Udit Narayan & Kavita Krishnamurthy', 'Hatyara', 1998),
      origSong('ds-hatyara-1998', 3, 'Aaja Main Sikha Doon Tujhe Prem Kahani', 'Lalit Sen & Shweta Shetty', 'Hatyara', 1998),
      origSong('ds-hatyara-1998', 4, 'Gore Gore Galo Wali', 'Abhijeet & Poornima', 'Hatyara', 1998),
      origSong('ds-hatyara-1998', 5, 'Main Ladki Aur Ladka Tum', 'Poornima', 'Hatyara', 1998),
    ],
  },
  {
    id: 'ds-achanak-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Achanak',
    year: 1998,
    cast: 'Govinda, Manisha Koirala, Farah Naaz, Paresh Rawal',
    label: 'Venus Records',
    significance:
      'Hit 1998 Govinda–Manisha Koirala romantic thriller anchored by "Duniya Bhulake" and Abhijeet’s peppy dance tracks.',
    songs: [
      origSong('ds-achanak-1998', 1, 'Duniya Bhulake', 'Kumar Sanu & Alka Yagnik', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 2, 'Jaane Jaana', 'Abhijeet & Alka Yagnik', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 3, 'Ek Soni Kudi Dila De', 'Abhijeet & Alka Yagnik', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 4, 'Oonchi Oonchi Deewaron Mein', 'Hariharan & Alka Yagnik', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 5, 'Na Koi Awaaz De Humko', 'Hariharan & Alka Yagnik', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 6, 'Dil Le Gaya Chor Pakdo', 'Abhijeet & Johnny Lever', 'Achanak', 1998, 'Sameer'),
      origSong('ds-achanak-1998', 7, 'Jhoom Le', 'Abhijeet & Kavita Krishnamurthy', 'Achanak', 1998, 'Sameer'),
    ],
  },
  {
    id: 'ds-devta-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Devta',
    year: 1998,
    cast: 'Mithun Chakraborty, Ayesha Jhulka, Aditya Pancholi',
    label: 'Tips Music',
    significance:
      '1998 Mithun Chakraborty actioner led by Udit Narayan’s melodic duets and Hema Sardesai’s rhythmic numbers.',
    songs: [
      origSong('ds-devta-1998', 1, 'Chunari Bana Mujhe Odh Le', 'Udit Narayan & Anuradha Paudwal', 'Devta', 1998),
      origSong('ds-devta-1998', 2, 'Dhire Dhire Aakh (Teri Meri Meri Teri)', 'Udit Narayan & Alka Yagnik', 'Devta', 1998),
      origSong('ds-devta-1998', 3, 'Ek Toota Tara Hu', 'Sonu Nigam, Anuradha Paudwal & Jaspinder Narula', 'Devta', 1998),
      origSong('ds-devta-1998', 4, 'Meri Aankh Tana Tan', 'Hema Sardesai', 'Devta', 1998),
      origSong('ds-devta-1998', 5, 'Pehle Meri Aankh Ladi', 'Lalit Sen & Hema Sardesai', 'Devta', 1998),
    ],
  },
  {
    id: 'ds-mafia-raaj-1998',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Mafia Raaj',
    year: 1998,
    cast: 'Mithun Chakraborty, Ayesha Jhulka, Shakti Kapoor',
    label: 'Tips Music',
    significance:
      '1998 Mithun Chakraborty action thriller featuring Kumar Sanu, Sudesh Bhosle, and Kavita Krishnamurthy.',
    songs: [
      origSong('ds-mafia-raaj-1998', 1, 'Ladki Kanwari Ne', 'Kumar Sanu, Sudesh Bhosle & Kavita Krishnamurthy', 'Mafia Raaj', 1998),
    ],
  },
  {
    id: 'ds-lohpurush-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Lohpurush',
    year: 1999,
    cast: 'Dharmendra, Jaya Prada, Ashish Vidyarthi',
    label: 'T-Series',
    significance:
      '1999 Dharmendra action drama balancing Punjabi bhangra-folk flair with Kumar Sanu’s upbeat duets.',
    songs: [
      origSong('ds-lohpurush-1999', 1, 'Bairan Bani Ye Raina Hai', 'Ila Arun', 'Lohpurush', 1999),
      origSong('ds-lohpurush-1999', 2, 'Bandh Kamre Mein Ek Ladka Ho', 'Kumar Sanu & Alisha Chinai', 'Lohpurush', 1999),
      origSong('ds-lohpurush-1999', 3, 'Main Jatt Ludhiyanewala', 'Udit Narayan & Alka Yagnik', 'Lohpurush', 1999),
      origSong('ds-lohpurush-1999', 4, 'Rooth Ke Jaanewali Nakhrewali', 'Kumar Sanu & Poornima', 'Lohpurush', 1999),
    ],
  },
  {
    id: 'ds-anari-no-1-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Anari No.1',
    year: 1999,
    cast: 'Govinda, Raveena Tandon, Simran, Kader Khan',
    label: 'Tips Music',
    significance:
      'Major 1999 Govinda comedy blockbuster written by Dev Kohli, producing smash hits like "Main Laila", "Dheere Dheere Ham Dono Mein", and "Tujhe Dekh Ke Jaana Jaana".',
    songs: [
      origSong('ds-anari-no-1-1999', 1, 'Main Laila', 'Abhijeet & Jaspinder Narula', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 2, 'Dheere Dheere Ham Dono Mein', 'Abhijeet & Alka Yagnik', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 3, 'Tujhe Dekh Ke Jaana Jaana', 'Sonu Nigam & Alka Yagnik', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 4, 'A B C D E F G', 'Udit Narayan & Kavita Krishnamurthy', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 5, 'Le Aaya Hoon', 'Kumar Sanu & Preeti Uttam', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 6, 'Main Hoon Ladki Kunwari', 'Abhijeet & Jaspinder Narula', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 7, 'Pagal Mujhe Bana Gaya Hai', 'Abhijeet & Kavita Krishnamurthy', 'Anari No.1', 1999, 'Dev Kohli'),
      origSong('ds-anari-no-1-1999', 8, 'Bol Hari', 'Dilip Sen, Amit Kumar & Pradeep Suri', 'Anari No.1', 1999, 'Dev Kohli'),
    ],
  },
  {
    id: 'ds-zulmi-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Zulmi',
    year: 1999,
    cast: 'Akshay Kumar, Twinkle Khanna, Amrish Puri',
    label: 'T-Series',
    significance:
      '1999 Akshay Kumar–Twinkle Khanna action romance featuring Asha Bhosle’s "Bhool Se Humne Bhool Ki" (excluding the album’s archival R.D. Burman bonus track).',
    songs: [
      origSong('ds-zulmi-1999', 1, 'Bhool Se Humne Bhool Ki (Happy)', 'Kumar Sanu & Asha Bhosle', 'Zulmi', 1999, 'Gulshan Bawra'),
      origSong('ds-zulmi-1999', 2, 'Teri Badmashiyan Aur Meri', 'Udit Narayan & Asha Bhosle', 'Zulmi', 1999, 'Gulshan Bawra'),
      origSong('ds-zulmi-1999', 3, 'Shalu Ya Sheela', 'Amit Kumar', 'Zulmi', 1999, 'Gulshan Bawra'),
      origSong('ds-zulmi-1999', 4, 'Mere Liye To Fit Hai Tu', 'Amit Kumar & Asha Bhosle', 'Zulmi', 1999, 'Gulshan Bawra'),
      origSong('ds-zulmi-1999', 5, 'Zulmi Toone Zulm Kiya', 'Asha Bhosle', 'Zulmi', 1999, 'Gulshan Bawra'),
      origSong('ds-zulmi-1999', 6, 'Bhool Se Humne Bhool Ki (Sad)', 'Asha Bhosle', 'Zulmi', 1999, 'Gulshan Bawra'),
    ],
  },
  {
    id: 'ds-kohram-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Kohram',
    year: 1999,
    cast: 'Amitabh Bachchan, Nana Patekar, Tabu, Jaya Prada',
    label: 'Universal Music India',
    significance:
      'Big-budget 1999 Mehul Kumar action drama featuring Shankar Mahadevan, Sukhwinder Singh, Hariharan, and Amitabh–Nana comic ensembles.',
    songs: [
      origSong('ds-kohram-1999', 1, 'Janeman Janeman Ladakee Too Number One', 'Udit Narayan & Kavita Krishnamurthy', 'Kohram', 1999, 'Anand Bakshi'),
      origSong('ds-kohram-1999', 2, 'Pagal Huwa Huwa Huwa', 'Shankar Mahadevan & Jaspinder Narula', 'Kohram', 1999, 'Dev Kohli'),
      origSong('ds-kohram-1999', 3, 'Hum Hai Banaras Ke Bhaiya', 'Amit Kumar & Sudesh Bhosle', 'Kohram', 1999, 'Dev Kohli'),
      origSong('ds-kohram-1999', 4, 'Palakon Ko Kalam Banaa Ke', 'Hariharan & Alka Yagnik', 'Kohram', 1999, 'Anand Bakshi'),
      origSong('ds-kohram-1999', 5, 'Ladakee Ladakee Too Woh Ladakee', 'Abhijeet & Alka Yagnik', 'Kohram', 1999, 'Sameer'),
      origSong('ds-kohram-1999', 6, 'Jay Mata Dee He Ambe Baliharee', 'Sukhwinder Singh & Sanjeevani', 'Kohram', 1999, 'Dev Kohli'),
      origSong('ds-kohram-1999', 7, 'Ik Mashuka Hai Yeh Jindagee', 'Amit Kumar & Sudesh Bhosle', 'Kohram', 1999, 'Dev Kohli'),
      origSong('ds-kohram-1999', 8, 'Satanaam Vaaheguru Baabaa Naanak', 'Kishanpal Singh', 'Kohram', 1999, 'Dev Kohli'),
    ],
  },
  {
    id: 'ds-arjun-pandit-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Arjun Pandit',
    year: 1999,
    cast: 'Sunny Deol, Juhi Chawla, Mukesh Rishi, Ashish Vidyarthi',
    label: 'Tips Music',
    significance:
      'Acclaimed 1999 Rahul Rawail thriller with lyrics by Javed Akhtar, uniting Daler Mehndi’s chart-topping bhangra smash "Kudiyan Shaher Diyan" with Hariharan’s "O Priya".',
    songs: [
      origSong('ds-arjun-pandit-1999', 1, 'Kudiyan Shaher Diyan', 'Daler Mehndi & Alka Yagnik', 'Arjun Pandit', 1999, 'Javed Akhtar', 'Massive bhangra-filmi dance hit anchored by Daler Mehndi’s Punjabi folk groove.'),
      origSong('ds-arjun-pandit-1999', 2, 'O Priya', 'Kumar Sanu & Alka Yagnik', 'Arjun Pandit', 1999, 'Javed Akhtar'),
      origSong('ds-arjun-pandit-1999', 3, 'Pyar Ke Geet', 'Abhijeet & Alka Yagnik', 'Arjun Pandit', 1999, 'Javed Akhtar'),
      origSong('ds-arjun-pandit-1999', 4, 'Kahan Jaye Koi', 'Shankar Mahadevan & Preeti Uttam', 'Arjun Pandit', 1999, 'Javed Akhtar'),
      origSong('ds-arjun-pandit-1999', 5, 'O Priya (Reprise)', 'Hariharan & Alka Yagnik', 'Arjun Pandit', 1999, 'Javed Akhtar'),
      origSong('ds-arjun-pandit-1999', 6, 'Pagal Pagal', 'Lalit Sen', 'Arjun Pandit', 1999, 'Javed Akhtar'),
      origSong('ds-arjun-pandit-1999', 7, 'Gher Ghaar Ghagro', 'Jaspinder Narula', 'Arjun Pandit', 1999, 'Javed Akhtar'),
    ],
  },
  {
    id: 'ds-mother-1999',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Mother',
    year: 1999,
    cast: 'Rekha, Jeetendra, Randhir Kapoor, Rakesh Roshan',
    label: 'Tips Music',
    significance:
      '1999 Saawan Kumar musical comedy inspired by Mamma Mia!, pairing Altaf Raja, Anuradha Paudwal, and Sonu Nigam.',
    songs: [
      origSong('ds-mother-1999', 1, 'Pardesi To Hai Pardesi (Part I)', 'Sonu Nigam, Roop Kumar Rathod & Anuradha Paudwal', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 2, 'Mother Mother Dear Mother', 'Anuradha Paudwal & Kavita Krishnamurthy', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 3, 'Ek Duni Do Do Duni', 'Udit Narayan & Anuradha Paudwal', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 4, 'Bivi Hai Chiz Sajaavat', 'Altaf Raja', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 5, 'Jiya I Want To Love You', 'Kumar Sanu & Anuradha Paudwal', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 6, 'Happy Days Are Here Again', 'Sapna Mukherjee, Hariharan, Roop Kumar Rathod & Sanjeevani', 'Mother', 1999, 'Sameer'),
      origSong('ds-mother-1999', 7, 'Chaar Chaar Duni Aath', 'Vipin Sachdeva & Sadhana Sargam', 'Mother', 1999, 'Sameer'),
    ],
  },

  // =====================================================================
  // 2000 – 2007: ITTEFAQ, WOH TERA NAAM THA, SHEESHA & SEN BROTHERS ERA
  // =====================================================================
  {
    id: 'ds-kaali-topi-laal-rumaal-2000',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Kaali Topi Laal Rumaal',
    year: 2000,
    cast: 'Mithun Chakraborty, Zeenat Ibrahim, Rituparna Sengupta',
    label: 'T-Series',
    significance:
      '2000 Mithun Chakraborty action comedy featuring Kumar Sanu and Sadhana Sargam.',
    songs: [
      origSong('ds-kaali-topi-laal-rumaal-2000', 1, 'Jabse Tere Mere', 'Kumar Sanu & Sadhana Sargam', 'Kaali Topi Laal Rumaal', 2000),
      origSong('ds-kaali-topi-laal-rumaal-2000', 2, 'Tere Mere Pyaar Ka', 'Kumar Sanu & Alka Yagnik', 'Kaali Topi Laal Rumaal', 2000),
      origSong('ds-kaali-topi-laal-rumaal-2000', 3, 'Badan Mein Jaadu', 'Kumar Sanu & Kavita Krishnamurthy', 'Kaali Topi Laal Rumaal', 2000),
    ],
  },
  {
    id: 'ds-ittefaq-2001',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ittefaq',
    year: 2001,
    cast: 'Suniel Shetty, Pooja Batra, Mukul Dev, Kader Khan',
    label: 'Zee Records',
    significance:
      '2001 action-thriller album notable for Remo Fernandes’s "Bom Mat Maar" and Jaspinder Narula’s Ricky Martin-derived track "Dil Dil Dil".',
    songs: [
      adaptedSong('ds-ittefaq-2001', 1, 'Dil Dil Dil (Deewana Dil Mera)', 'Jaspinder Narula', 'Ittefaq', 2001, 'Sameer', {
        adaptationType: 'copied',
        originalSongTitle: 'La Copa De La Vida (The Cup of Life)',
        originalArtist: 'Ricky Martin',
        originalYear: '1998',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'Closely adapts the Latin-pop brass fanfare, percussion drive, and chorus cadence of Ricky Martin’s 1998 FIFA World Cup anthem "La Copa De La Vida".',
        originalLink: 'https://www.youtube.com/watch?v=8BkYKwHLXiU',
        referenceSource: 'Musicology Archives / Latin-Pop Comparisons',
      }),
      origSong('ds-ittefaq-2001', 2, 'Raaton Ko', 'Abhijeet & Poornima', 'Ittefaq', 2001, 'Sameer'),
      origSong('ds-ittefaq-2001', 3, 'Main Aashiq Hoon', 'Babul Supriyo & Sunidhi Chauhan', 'Ittefaq', 2001, 'Sameer'),
      origSong('ds-ittefaq-2001', 4, 'Bom Mat Maar', 'Remo Fernandes', 'Ittefaq', 2001, 'Sameer'),
      origSong('ds-ittefaq-2001', 5, 'Mohabbat Ho Gayee', 'Babul Supriyo & Alka Yagnik', 'Ittefaq', 2001, 'Sameer'),
      origSong('ds-ittefaq-2001', 6, 'Tanana Dhir Tanana', 'Abhijeet & Hema Sardesai', 'Ittefaq', 2001, 'Sameer'),
    ],
  },
  {
    id: 'ds-akhiyon-se-goli-maare-2002',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Akhiyon Se Goli Maare',
    year: 2002,
    cast: 'Govinda, Raveena Tandon, Kader Khan, Shakti Kapoor',
    label: 'T-Series',
    significance:
      'Guest composition contribution ("Thumka Lagake Naachlo") by Dilip Sen–Sameer Sen alongside Anand–Milind and Daboo Malik tracks.',
    songs: [
      origSong('ds-akhiyon-se-goli-maare-2002', 1, 'Thumka Lagake Naachlo', 'Sonu Nigam, Vinod Rathod & Sanjeevani', 'Akhiyon Se Goli Maare', 2002, 'Nitin Raikwar', 'Dilip Sen–Sameer Sen’s sole guest composition on the Akhiyon Se Goli Maare soundtrack (other tracks by Anand–Milind and Daboo Malik).'),
    ],
  },
  {
    id: 'ds-koi-hai-2003',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Koi Hai',
    year: 2003,
    cast: 'Raajeshwar, Aman Verma, Rinku Ghosh, Yukta Mookhey',
    label: 'Tips Music',
    significance:
      '2003 supernatural thriller scored with lyricists Nawab Arzoo, Jaffer Sagar, and Asad Ajmeri.',
    songs: [
      origSong('ds-koi-hai-2003', 1, 'Is Raat Ko', 'Roop Kumar Rathod & Sonali Rathod', 'Koi Hai', 2003),
    ],
  },
  {
    id: 'ds-woh-tera-naam-tha-2004',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Woh Tera Naam Tha',
    year: 2004,
    cast: 'Arjan Bajwa, Kanchi Kaul, Amrish Puri',
    label: 'Saregama / HMV',
    significance:
      'Four-track contribution by Dilip Sen–Sameer Sen (shared with Roopkumar Rathod and Sumeet Chopra), highlighted by Pakistani folk legend Reshma’s "Ashqaan Di".',
    songs: [
      origSong('ds-woh-tera-naam-tha-2004', 1, 'Kabhi Dil Se Kam', 'Udit Narayan & Alka Yagnik', 'Woh Tera Naam Tha', 2004),
      origSong('ds-woh-tera-naam-tha-2004', 2, 'Ashqaan Di', 'Reshma', 'Woh Tera Naam Tha', 2004),
      origSong('ds-woh-tera-naam-tha-2004', 3, 'Woh Jo Jaan-E-Jaan', 'Hariharan', 'Woh Tera Naam Tha', 2004),
      origSong('ds-woh-tera-naam-tha-2004', 4, 'Woh Tera Naam Tha (Sad)', 'Roop Kumar Rathod', 'Woh Tera Naam Tha', 2004),
    ],
  },
  {
    id: 'ds-sheesha-2005',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Sheesha',
    year: 2005,
    cast: 'Neha Dhupia, Sonu Sood, Vivek Shauq',
    label: 'Times Music',
    significance:
      '2005 psychological thriller credited under "Sen Brothers" (Dilip Sen–Sameer Sen), pairing Kunal Ganjawala, Shreya Ghoshal, Richa Sharma, and Sonu Kakkar.',
    songs: [
      origSong('ds-sheesha-2005', 1, 'Yaar Ko Maine', 'Kunal Ganjawala', 'Sheesha', 2005),
      origSong('ds-sheesha-2005', 2, 'Mujhe Jeena Sikha Do Na', 'Kunal Ganjawala & Shreya Ghoshal', 'Sheesha', 2005),
      origSong('ds-sheesha-2005', 3, 'Assi Ishq Da Dard', 'Richa Sharma & Shehzad Adeel', 'Sheesha', 2005),
      origSong('ds-sheesha-2005', 4, 'Kar Mundya', 'Sonu Kakkar', 'Sheesha', 2005),
      origSong('ds-sheesha-2005', 5, 'Main Ho Gayee', 'Alka Yagnik & Shehzad Adeel', 'Sheesha', 2005),
      origSong('ds-sheesha-2005', 6, 'Moods - Sheesha', 'Richa Sharma', 'Sheesha', 2005),
    ],
  },
  {
    id: 'ds-ek-hi-bhool-2005',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Ek Hi Bhool',
    year: 2005,
    cast: 'Mithun Chakraborty, Shakti Kapoor',
    label: 'T-Series',
    significance:
      '2005 romantic drama featuring Sunidhi Chauhan, Kumar Sanu, Sadhana Sargam, and Sonu Kakkar.',
    songs: [
      origSong('ds-ek-hi-bhool-2005', 1, 'Mera Dil Pe Nahin Hai Zor Mera', 'Kumar Sanu & Sadhana Sargam', 'Ek Hi Bhool', 2005),
      origSong('ds-ek-hi-bhool-2005', 2, 'Dheere Dheere Haule Haule', 'Sunidhi Chauhan', 'Ek Hi Bhool', 2005),
      origSong('ds-ek-hi-bhool-2005', 3, 'Zindagi Mein Kya Mazaa Hai', 'Sunidhi Chauhan', 'Ek Hi Bhool', 2005),
      origSong('ds-ek-hi-bhool-2005', 4, 'Bolo Bolo Ram Ram', 'Sonu Kakkar & Tarannum Malik', 'Ek Hi Bhool', 2005),
      origSong('ds-ek-hi-bhool-2005', 5, 'Pehli Nazar Mein Jo Hota Hai', 'Abhijeet', 'Ek Hi Bhool', 2005),
      origSong('ds-ek-hi-bhool-2005', 6, 'Chavanni Uchal Ke', 'Sonu Kakkar', 'Ek Hi Bhool', 2005),
    ],
  },
  {
    id: 'ds-rafta-rafta-the-speed-2006',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Rafta Rafta: The Speed',
    year: 2006,
    cast: 'Sameer Dharmadhikari, Sheetal Bedi, Monica Castelino',
    label: 'T-Series',
    significance:
      '2006 thriller credited to the Sen Brothers with lyrics by Nawab Arzoo, led by Udit Narayan and Shreya Ghoshal’s title duet.',
    songs: [
      origSong('ds-rafta-rafta-the-speed-2006', 1, 'Rafta Rafta Tumse Pyar Ho Gaya', 'Udit Narayan & Shreya Ghoshal', 'Rafta Rafta The Speed', 2006, 'Nawab Arzoo'),
      origSong('ds-rafta-rafta-the-speed-2006', 2, 'Lagi Lagan', 'Keerthi Sagathia', 'Rafta Rafta The Speed', 2006, 'Nawab Arzoo'),
      origSong('ds-rafta-rafta-the-speed-2006', 3, 'Main To Sach Much Badi Ho Gayi', 'Sonu Kakkar', 'Rafta Rafta The Speed', 2006, 'Nawab Arzoo'),
      origSong('ds-rafta-rafta-the-speed-2006', 4, 'Pyar Mohabbat Romance', 'Kunal Ganjawala', 'Rafta Rafta The Speed', 2006, 'Nawab Arzoo'),
    ],
  },
  {
    id: 'ds-parveen-bobby-2007',
    directorId: 'dilip-sen-sameer-sen',
    title: 'Parveen Bobby',
    year: 2007,
    cast: 'Ravi Ahlawat, Kashish Duggal, Mohan Joshi',
    label: 'T-Series',
    significance:
      'Late-era joint Hindi release by Dilip Sen–Sameer Sen, pairing Udit Narayan & Shreya Ghoshal with Alisha Chinai and Kunal Ganjawala.',
    songs: [
      origSong('ds-parveen-bobby-2007', 1, 'Lagi Jo Lagan Tere Sang', 'Udit Narayan & Shreya Ghoshal', 'Parveen Bobby', 2007),
      origSong('ds-parveen-bobby-2007', 2, 'Chhore Chhore Pade Hain Piche', 'Alisha Chinai', 'Parveen Bobby', 2007),
      origSong('ds-parveen-bobby-2007', 3, 'Hello Suno To Zara', 'Kunal Ganjawala & Alka Yagnik', 'Parveen Bobby', 2007),
      origSong('ds-parveen-bobby-2007', 4, 'Mere Koke Da Lashkara', 'Sonu Kakkar', 'Parveen Bobby', 2007),
      origSong('ds-parveen-bobby-2007', 5, 'Todke Dil Ko', 'Krishna Beura', 'Parveen Bobby', 2007),
      origSong('ds-parveen-bobby-2007', 6, 'Koi Nahin Hai Mera Siwa', 'Tarannum Malik', 'Parveen Bobby', 2007),
    ],
  },
];
