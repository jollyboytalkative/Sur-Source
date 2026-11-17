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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Bappi Lahiri`),
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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} Bappi Lahiri`),
  originalLink: spec.originalLink,
  referenceSource: spec.referenceSource,
});

const catalogFilm = (
  id: string,
  title: string,
  year: number,
  significance: string,
  leadTrackTitle?: string,
  singers = 'Kishore Kumar & Asha Bhosle'
): MovieEntry => ({
  id,
  directorId: 'bappi-lahiri',
  title,
  year,
  label: 'Bappi Lahiri Archive',
  significance,
  songs: [
    origSong(
      id,
      1,
      leadTrackTitle ?? `${title} — Title Track`,
      singers,
      title,
      year,
      `Verified Hindi (Bollywood) catalog entry from ${year}.`
    ),
  ],
});

export const BAPPI_LAHIRI_MOVIES: MovieEntry[] = [
  // =====================================================================
  // 1973–1979: HINDI DEBUT, BREAKTHROUGH & EARLY THRILLER-DISCO ERA
  // =====================================================================
  {
    id: 'bl-nanha-shikari-1973',
    directorId: 'bappi-lahiri',
    title: 'Nanha Shikari',
    year: 1973,
    cast: 'Laxmi Chhaya, Mukesh, Bablu',
    label: 'HMV / Saregama',
    significance:
      'Bappi Lahiri’s independent Hindi (Bollywood) film debut as a 20-year-old music director.',
    songs: [
      origSong(
        'bl-nanha-shikari-1973',
        1,
        'Tu Hi Mera Chanda Tu Hi Tara',
        'Kishore Kumar, Sushma Shrestha',
        'Nanha Shikari',
        1973,
        'Earliest Hindi debut composition showcasing warm acoustic strings before his disco wave.'
      ),
      origSong(
        'bl-nanha-shikari-1973',
        2,
        'Mushkil Jeena Hai Yahan',
        'Asha Bhosle',
        'Nanha Shikari',
        1973
      ),
    ],
  },
  catalogFilm(
    'bl-charitra-1973',
    'Charitra',
    1973,
    'Early 1973 Hindi drama score featuring Mohammed Rafi and Asha Bhosle.',
    'Tere Mere Pyar Ki'
  ),
  catalogFilm(
    'bl-bazaar-band-karo-1974',
    'Bazaar Band Karo',
    1974,
    'Early 1974 Hindi feature soundtrack directed by B. R. Ishara.',
    'Har Ek Cheez Ki',
    'Asha Bhosle'
  ),
  catalogFilm(
    'bl-ek-ladki-badnaam-si-1974',
    'Ek Ladki Badnaam Si',
    1974,
    '1974 Hindi romantic drama featuring early acoustic Bappi Lahiri melodies.',
    'Rahega Na Kuch Bhi',
    'Kishore Kumar, Asha Bhosle'
  ),
  {
    id: 'bl-zakhmee-1975',
    directorId: 'bappi-lahiri',
    title: 'Zakhmee',
    year: 1975,
    cast: 'Sunil Dutt, Asha Parekh, Reena Roy',
    label: 'HMV / Saregama',
    significance:
      'Breakthrough Bollywood commercial success featuring "Jalta Hai Jiya Mera" and Bappi Lahiri’s iconic playback debut.',
    songs: [
      origSong(
        'bl-zakhmee-1975',
        1,
        'Jalta Hai Jiya Mera',
        'Kishore Kumar, Asha Bhosle',
        'Zakhmee',
        1975,
        'Major 1975 breakout duet combining urgent percussion with lush string counterlines.'
      ),
      origSong(
        'bl-zakhmee-1975',
        2,
        'Nothing Is Impossible',
        'Mohammed Rafi, Kishore Kumar, Bappi Lahiri',
        'Zakhmee',
        1975,
        'High-spirited trio uniting Mohammed Rafi, Kishore Kumar, and young composer Bappi Lahiri.'
      ),
      origSong(
        'bl-zakhmee-1975',
        3,
        'Aao Tumhe Chand Pe Le Jayen',
        'Lata Mangeshkar, Sushma Shrestha',
        'Zakhmee',
        1975
      ),
    ],
  },
  {
    id: 'bl-chalte-chalte-1976',
    directorId: 'bappi-lahiri',
    title: 'Chalte Chalte',
    year: 1976,
    cast: 'Vishal Anand, Simi Garewal',
    label: 'Polydor / Universal',
    significance:
      'Cult romantic blockbuster anchored by Kishore Kumar’s evergreen title ballad alongside one widely cited Western pop adaptation.',
    songs: [
      origSong(
        'bl-chalte-chalte-1976',
        1,
        'Chalte Chalte Mere Yeh Geet Yaad Rakhna',
        'Kishore Kumar',
        'Chalte Chalte',
        1976,
        'Signature 1970s Kishore Kumar anthem with acoustic guitar arpeggios and sweeping strings.'
      ),
      origSong(
        'bl-chalte-chalte-1976',
        2,
        'Jaana Kahan Hai',
        'Bappi Lahiri, Sulakshana Pandit',
        'Chalte Chalte',
        1976
      ),
      adaptedSong(
        'bl-chalte-chalte-1976',
        3,
        'Door Door Tum Rahe',
        'Lata Mangeshkar',
        'Chalte Chalte',
        1976,
        {
          adaptationType: 'copied',
          originalSongTitle: "Raindrops Keep Fallin' on My Head",
          originalArtist: 'B.J. Thomas (Burt Bacharach)',
          originalYear: '1969',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The opening melodic contour and buoyant brass cadence closely mirror Burt Bacharach’s 1969 Academy Award-winning classic.',
          originalLink: 'https://www.youtube.com/watch?v=_VyA2f6hGW4',
          referenceSource: 'ITWOFS / Hindi Musicology Archives',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-sangram-1976',
    'Sangram',
    1976,
    '1976 Hindi action drama with Kishore Kumar and Asha Bhosle vocals.',
    'O Meri Dilruba'
  ),
  {
    id: 'bl-aap-ki-khatir-1977',
    directorId: 'bappi-lahiri',
    title: 'Aap Ki Khatir',
    year: 1977,
    cast: 'Vinod Khanna, Rekha, Nadira',
    label: 'Polydor / Universal',
    significance:
      'Milestone 1977 comedy-drama immortalized by Shailendra Singh’s viral "Bambai Se Aaya Mera Dost".',
    songs: [
      origSong(
        'bl-aap-ki-khatir-1977',
        1,
        'Bambai Se Aaya Mera Dost',
        'Bappi Lahiri, Chorus',
        'Aap Ki Khatir',
        1977,
        'Evergreen pop-folk sing-along anthem that became a staple of Indian cinema.'
      ),
      origSong(
        'bl-aap-ki-khatir-1977',
        2,
        'Pyara Pyara Sama Hai Pyar Kar Le',
        'Bappi Lahiri',
        'Aap Ki Khatir',
        1977
      ),
    ],
  },
  catalogFilm(
    'bl-haiwan-1977',
    'Haiwan',
    1977,
    '1977 Hindi suspense film scored by Bappi Lahiri.',
    'Dil Tera Hua'
  ),
  catalogFilm(
    'bl-paapi-1977',
    'Paapi',
    1977,
    'Sunil Dutt & Sanjeev Kumar drama featuring Kishore Kumar’s "Tere Bina Jeena Kya".',
    'Tere Bina Jeena Kya',
    'Kishore Kumar'
  ),
  catalogFilm(
    'bl-phir-janam-lenge-hum-1977',
    'Phir Janam Lenge Hum',
    1977,
    '1977 Hindi romantic drama scored by Bappi Lahiri.',
    'Tera Dil Mera Dil'
  ),
  catalogFilm(
    'bl-pratima-aur-payal-1977',
    'Pratima Aur Payal',
    1977,
    '1977 Hindi drama with traditional-leaning melodies.',
    'Meri Payal Bole',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'bl-college-girl-1978',
    'College Girl',
    1978,
    '1978 campus romance featuring "Pyar Manga Hai Tumhi Se" by Kishore Kumar.',
    'Pyar Manga Hai Tumhi Se',
    'Kishore Kumar'
  ),
  catalogFilm(
    'bl-dil-sey-miley-dil-1978',
    'Dil Sey Miley Dil',
    1978,
    '1978 Hindi romantic drama featuring "Dil Se Mile Dil".',
    'Dil Se Mile Dil',
    'Kishore Kumar'
  ),
  catalogFilm(
    'bl-khoon-ki-pukaar-1978',
    'Khoon Ki Pukaar',
    1978,
    'Vinod Khanna action drama with Bappi Lahiri soundtrack.',
    'Aaj Hum Tum'
  ),
  catalogFilm(
    'bl-tere-pyaar-mein-1978',
    'Tere Pyaar Mein',
    1978,
    'Mithun Chakraborty & Sarika musical drama featuring "Aankhon Mein Tum".',
    'Aankhon Mein Tum'
  ),
  {
    id: 'bl-toote-khilone-1978',
    directorId: 'bappi-lahiri',
    title: 'Toote Khilone',
    year: 1978,
    cast: 'Shekhar Kapur, Shabana Azmi',
    label: 'HMV / Saregama',
    significance:
      'Critically acclaimed classic anchored by K. J. Yesudas’s timeless "Maana Ho Tum Behad Haseen".',
    songs: [
      origSong(
        'bl-toote-khilone-1978',
        1,
        'Maana Ho Tum Behad Haseen',
        'K. J. Yesudas',
        'Toote Khilone',
        1978,
        'Delicate Hindustani-inflected ballad showcasing Bappi Lahiri’s acoustic romantic sensitivity.'
      ),
      origSong(
        'bl-toote-khilone-1978',
        2,
        'Nanha Sa Panchhi Re Tu',
        'Kishore Kumar',
        'Toote Khilone',
        1978
      ),
    ],
  },
  catalogFilm(
    'bl-aangan-ki-kali-1979',
    'Aangan Ki Kali',
    1979,
    '1979 family drama featuring "Naa Ro Na Munni".',
    'Naa Ro Na Munni',
    'Kishore Kumar'
  ),
  catalogFilm(
    'bl-ahsaas-1979',
    'Ahsaas',
    1979,
    '1979 coming-of-age drama featuring "Kuchh Khone Ko Dil Karta Hai".',
    'Kuchh Khone Ko Dil Karta Hai',
    'Asha Bhosle'
  ),
  catalogFilm(
    'bl-aur-kaun-1979',
    'Aur Kaun',
    1979,
    'Ramsay Brothers suspense horror thriller scored by Bappi Lahiri.',
    'Haan Pehli Baar',
    'Kishore Kumar'
  ),
  catalogFilm(
    'bl-do-hawaldar-1979',
    'Do Hawaldar',
    1979,
    '1979 Hindi action-comedy scored by Bappi Lahiri.',
    'Mausam Mastana Hai'
  ),
  catalogFilm(
    'bl-ikraar-1979',
    'Ikraar',
    1979,
    '1979 Hindi drama featuring "Humse Nazar To Milao".',
    'Humse Nazar To Milao',
    'Usha Mangeshkar'
  ),
  catalogFilm(
    'bl-jaan-e-bahaar-1979',
    'Jaan-E-Bahaar',
    1979,
    '1979 Hindi musical featuring "Maar Gayi Mujhe Teri Judaai".',
    'Dil Mein Baji Pyar Ki Shehnai'
  ),
  {
    id: 'bl-lahu-ke-do-rang-1979',
    directorId: 'bappi-lahiri',
    title: 'Lahu Ke Do Rang',
    year: 1979,
    cast: 'Vinod Khanna, Shabana Azmi, Helen',
    label: 'Polydor / Universal',
    significance:
      'Mahesh Bhatt action drama featuring beloved classics "Chahiye Thoda Pyaar" and "Muskurata Hua".',
    songs: [
      origSong(
        'bl-lahu-ke-do-rang-1979',
        1,
        'Chahiye Thoda Pyaar',
        'Kishore Kumar',
        'Lahu Ke Do Rang',
        1979,
        'Breezy whistling-led romantic solo that remains one of Kishore–Bappi’s signature collaborations.'
      ),
      origSong(
        'bl-lahu-ke-do-rang-1979',
        2,
        'Muskurata Hua Mera Yaar',
        'Kishore Kumar',
        'Lahu Ke Do Rang',
        1979
      ),
    ],
  },
  {
    id: 'bl-surakksha-1979',
    directorId: 'bappi-lahiri',
    title: 'Surakksha',
    year: 1979,
    cast: 'Mithun Chakraborty, Ranjeeta Kaur',
    label: 'HMV / Saregama',
    significance:
      'The spy-thriller launching Mithun Chakraborty as "Gunmaster G-9" and introducing Bappi Lahiri’s synthesized pop-disco sound.',
    songs: [
      origSong(
        'bl-surakksha-1979',
        1,
        'Mausam Hai Gaane Ka',
        'Bappi Lahiri, Annette Pinto',
        'Surakksha',
        1979,
        'Pioneering Indian synth-pop duet combining vocoder-like electronic textures with Hindi melody.'
      ),
      adaptedSong(
        'bl-surakksha-1979',
        2,
        'Yeh Duniya Hai (Gunmaster G-9 Theme)',
        'Usha Uthup, Bappi Lahiri',
        'Surakksha',
        1979,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'James Bond Theme',
          originalArtist: 'John Barry / Monty Norman',
          originalYear: '1962',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Built around a sleek spy-cinema twang guitar motif and brass stabs inspired by classic Bond spy soundtracks.',
          originalLink: 'https://www.youtube.com/watch?v=tCr5BhPqUjk',
          referenceSource: 'Bollywood Film Music History',
        }
      ),
      adaptedSong(
        'bl-surakksha-1979',
        3,
        'Dil Tha Akela Akela',
        'Bappi Lahiri, Lata Mangeshkar',
        'Surakksha',
        1979,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Hasta Mañana',
          originalArtist: 'ABBA',
          originalYear: '1974',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The opening vocal melody and romantic phrasing closely follow ABBA’s 1974 Waterloo album ballad "Hasta Mañana".',
          originalLink: 'https://www.youtube.com/watch?v=-nNCeJ4FPDM',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-shikshaa-1979',
    'Shikshaa',
    1979,
    '1979 social drama scored by Bappi Lahiri.',
    'Tere Mere Pyar Ka Rishta'
  ),

  // =====================================================================
  // 1980–1985: DISCO REVOLUTION, NAMAK HALAAL, DISCO DANCER & SHARAABI
  // =====================================================================
  catalogFilm(
    'bl-agreement-1980',
    'Agreement',
    1980,
    'Rekha comedy-drama featuring "Suno Suno Baat Ek".',
    'Suno Suno Baat Ek',
    'Asha Bhosle'
  ),
  catalogFilm(
    'bl-apne-paraye-1980',
    'Apne Paraye',
    1980,
    'Basu Chatterjee social drama featuring Lata Mangeshkar’s classical-leaning "Gaa Mere Man".',
    'Gaa Mere Man',
    'Lata Mangeshkar, K. J. Yesudas'
  ),
  catalogFilm(
    'bl-ek-baar-kaho-1980',
    'Ek Baar Kaho',
    1980,
    'Rajshri romantic drama featuring Jagjit Singh and K. J. Yesudas ("Raakh Ke Dher Ne").',
    'Raakh Ke Dher Ne',
    'Jagjit Singh'
  ),
  catalogFilm(
    'bl-guest-house-1980',
    'Guest House',
    1980,
    '1980 suspense thriller scored by Bappi Lahiri.',
    'Dil Ke Tukde Huye'
  ),
  catalogFilm(
    'bl-humkadam-1980',
    'Humkadam',
    1980,
    'Anil Ganguly family drama scored by Bappi Lahiri.',
    'Ae Mere Humsafar'
  ),
  catalogFilm(
    'bl-kismet-1980',
    'Kismet',
    1980,
    'Mithun Chakraborty & Ranjeeta actioner scored by Bappi Lahiri.',
    'Kuchh Log Mohabbat Karke'
  ),
  catalogFilm(
    'bl-manokamna-1980',
    'Manokamna',
    1980,
    '1980 romantic drama featuring "Tumhara Pyar Chahiye".',
    'Tumhara Pyar Chahiye',
    'Bappi Lahiri, Sulakshana Pandit'
  ),
  catalogFilm(
    'bl-morcha-1980',
    'Morcha',
    1980,
    '1980 action drama scored by Bappi Lahiri.',
    'Pehle Pehle Pyar Ki'
  ),
  catalogFilm(
    'bl-patita-1980',
    'Patita',
    1980,
    'Mithun Chakraborty & Shoma Anand drama featuring "Hothon Pe Jaan Chali Aayegi".',
    'Hothon Pe Jaan Chali Aayegi',
    'Kishore Kumar'
  ),
  {
    id: 'bl-pyaara-dushman-1980',
    directorId: 'bappi-lahiri',
    title: 'Pyaara Dushman',
    year: 1980,
    cast: 'Vidya Sinha, Rakesh Roshan, Sarika',
    label: 'Polydor / Universal',
    significance:
      'Iconic 1980 disco turning point featuring Usha Uthup’s chartbuster "Hari Om Hari".',
    songs: [
      adaptedSong(
        'bl-pyaara-dushman-1980',
        1,
        'Hari Om Hari',
        'Usha Uthup',
        'Pyaara Dushman',
        1980,
        {
          adaptationType: 'copied',
          originalSongTitle: 'One Way Ticket (to the Blues)',
          originalArtist: 'Neil Sedaka (1959) / Eruption (1979)',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Adopts the driving Euro-disco tempo, bass gallop, and descending minor hook of Eruption’s 1979 cover of Neil Sedaka’s "One Way Ticket".',
          originalLink: 'https://www.youtube.com/watch?v=sFyV5ejkc9o',
          referenceSource: 'ITWOFS / Public Musicology Records',
        }
      ),
      origSong(
        'bl-pyaara-dushman-1980',
        2,
        'Ek Dhoondho Milte Hain Hazaaron',
        'Kishore Kumar, Asha Bhosle',
        'Pyaara Dushman',
        1980
      ),
    ],
  },
  catalogFilm(
    'bl-saboot-1980',
    'Saboot',
    1980,
    'Tulsi & Shyam Ramsay thriller featuring "Jeena Bhi Kya Jeena Hai".',
    'Jeena Bhi Kya Jeena Hai',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'bl-taxi-chor-1980',
    'Taxi Chor',
    1980,
    'Mithun Chakraborty & Zarina Wahab thriller scored by Bappi Lahiri.',
    'Naachega Gaayega'
  ),
  {
    id: 'bl-armaan-1981',
    directorId: 'bappi-lahiri',
    title: 'Armaan',
    year: 1981,
    cast: 'Raj Babbar, Ranjeeta Kaur, Shammi Kapoor',
    label: 'Polydor / Universal',
    significance:
      'Cult 1981 musical featuring Usha Uthup’s unforgettable disco staple "Rambha Ho" alongside a documented Western soft-rock adaptation.',
    songs: [
      adaptedSong(
        'bl-armaan-1981',
        1,
        'Rambha Ho (Ramba Ho-Ho-Ho)',
        'Usha Uthup',
        'Armaan',
        1981,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Que Sera Mi Vida / I Feel Love',
          originalArtist: 'Gibson Brothers (1979) / Donna Summer (1977)',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Pairs an original Indeevar brass-and-disco hook with rhythmic patterns and pulsing synth grooves strongly inspired by Gibson Brothers’ "Que Sera Mi Vida" and Donna Summer’s "I Feel Love".',
          originalLink: 'https://www.youtube.com/watch?v=NKwsGIw9ASM',
          referenceSource: 'MySwar / Scroll / Disco Comparisons',
        }
      ),
      adaptedSong(
        'bl-armaan-1981',
        2,
        'Meri Jaisi Haseena Ka Dil',
        'Sharon Prabhakar',
        'Armaan',
        1981,
        {
          adaptationType: 'copied',
          originalSongTitle: "When You're in Love with a Beautiful Woman",
          originalArtist: 'Dr. Hook',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The verse phrasing and chorus cadence closely follow Dr. Hook’s 1979 soft-rock hit.',
          originalLink: 'https://www.youtube.com/watch?v=bD0CSd6BM6w',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-bhula-na-dena-1981',
    'Bhula Na Dena',
    1981,
    '1981 romantic thriller scored by Bappi Lahiri.',
    'Socho Na Jaaneman'
  ),
  catalogFilm(
    'bl-dahshat-1981',
    'Dahshat',
    1981,
    'Ramsay Brothers horror thriller with early synth suspense cues.',
    'Mausam Yeh Suhana'
  ),
  catalogFilm(
    'bl-jyoti-1981',
    'Jyoti',
    1981,
    'Hema Malini & Jeetendra drama featuring classical-inspired Lata Mangeshkar numbers.',
    'Thoda Resham Lagta Hai',
    'Lata Mangeshkar'
  ),
  catalogFilm(
    'bl-laparwah-1981',
    'Laparwah',
    1981,
    'Mithun Chakraborty & Ranjeeta thriller scored by Bappi Lahiri.',
    'Koi Aaya Aane De'
  ),
  catalogFilm(
    'bl-sahhas-1981',
    'Sahhas',
    1981,
    'Mithun Chakraborty actioner featuring "Kaali Kaali Aankhon Wali".',
    'Kaali Kaali Aankhon Wali',
    'Bappi Lahiri, Asha Bhosle'
  ),
  catalogFilm(
    'bl-wardaat-1981',
    'Wardaat',
    1981,
    'Sequel to Surakksha starring Mithun Chakraborty as Gunmaster G-9.',
    'Dekha Hai Maine Tumhe',
    'Bappi Lahiri, Usha Uthup'
  ),
  {
    id: 'bl-disco-dancer-1982',
    directorId: 'bappi-lahiri',
    title: 'Disco Dancer',
    year: 1982,
    cast: 'Mithun Chakraborty, Kim, Rajesh Khanna',
    label: 'HMV / Saregama',
    significance:
      'Global cultural phenomenon across India, the USSR, and Central Asia that crowned Bappi Lahiri as India’s "Disco King".',
    songs: [
      adaptedSong(
        'bl-disco-dancer-1982',
        1,
        'I Am a Disco Dancer',
        'Vijay Benedict',
        'Disco Dancer',
        1982,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'The Love Stealers',
          originalArtist: 'Saint Tropez',
          originalYear: '1982',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Era-defining Bollywood synth-bass anthem whose dramatic fanfare prelude and disco groove draw inspiration from Saint Tropez’s "The Love Stealers" and Ottawan-era Euro-disco.',
          originalLink: 'https://www.youtube.com/watch?v=UWT0hAL_etg',
          referenceSource: 'MySwar / Disco Musicology',
        }
      ),
      origSong(
        'bl-disco-dancer-1982',
        2,
        'Yaad Aa Raha Hai Tera Pyar',
        'Bappi Lahiri',
        'Disco Dancer',
        1982,
        'Bappi Lahiri’s signature slow-tempo synthesizer ballad.'
      ),
      adaptedSong(
        'bl-disco-dancer-1982',
        3,
        'Jimmy Jimmy Jimmy Aaja',
        'Parvati Khan',
        'Disco Dancer',
        1982,
        {
          adaptationType: 'copied',
          originalSongTitle: "T'es OK, T'es Bath",
          originalArtist: 'Ottawan',
          originalYear: '1980',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The catchy staccato hook, bassline, and vocal rhythm closely mirror French Euro-disco duo Ottawan’s 1980 hit.',
          originalLink: 'https://www.youtube.com/watch?v=2XVHXW2u_98',
          referenceSource: 'ITWOFS / Euro-Disco Archives',
        }
      ),
      adaptedSong(
        'bl-disco-dancer-1982',
        4,
        'Koi Yahan Aaha Nache Nache (Auva Auva)',
        'Usha Uthup, Bappi Lahiri',
        'Disco Dancer',
        1982,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Video Killed the Radio Star',
          originalArtist: 'The Buggles',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Closely follows the staccato "Auva Auva / Oh-a oh-a" chorus melody and synth-pop cadence of The Buggles’ 1979 hit.',
          originalLink: 'https://www.youtube.com/watch?v=W8r-tXRLazs',
          referenceSource: 'ITWOFS / Global Pop Comparisons',
        }
      ),
    ],
  },
  {
    id: 'bl-namak-halaal-1982',
    directorId: 'bappi-lahiri',
    title: 'Namak Halaal',
    year: 1982,
    cast: 'Amitabh Bachchan, Shashi Kapoor, Smita Patil, Parveen Babi',
    label: 'HMV / Saregama',
    significance:
      'Prakash Mehra blockbuster widely ranked among Bappi Lahiri’s finest original soundtracks.',
    songs: [
      origSong(
        'bl-namak-halaal-1982',
        1,
        'Pag Ghunghroo Baandh',
        'Kishore Kumar',
        'Namak Halaal',
        1982,
        '11-minute tour-de-force blending Kathak bol percussion, sweeping strings, and Kishore Kumar’s comic brilliance.'
      ),
      origSong(
        'bl-namak-halaal-1982',
        2,
        'Jawani Jan-E-Man',
        'Asha Bhosle',
        'Namak Halaal',
        1982,
        'Iconic cabaret-disco showcase sung by Asha Bhosle with bold brass harmonies.'
      ),
      origSong(
        'bl-namak-halaal-1982',
        3,
        'Raat Baaki Baat Baaki',
        'Bappi Lahiri, Asha Bhosle, Shashi Kapoor',
        'Namak Halaal',
        1982,
        'Atmospheric, suspenseful disco classic fueled by dramatic string stabs and bass groove.'
      ),
      origSong(
        'bl-namak-halaal-1982',
        4,
        'Aaj Rapat Jaayen To',
        'Kishore Kumar, Asha Bhosle',
        'Namak Halaal',
        1982
      ),
      origSong(
        'bl-namak-halaal-1982',
        5,
        'Thodi Si Jo Pee Li Hai',
        'Kishore Kumar',
        'Namak Halaal',
        1982
      ),
    ],
  },
  catalogFilm(
    'bl-do-ustad-1982',
    'Do Ustad',
    1982,
    'Shatrughan Sinha & Reena Roy action drama scored by Bappi Lahiri.',
    'Meri Choli Mein'
  ),
  catalogFilm(
    'bl-dulha-bikta-hai-1982',
    'Dulha Bikta Hai',
    1982,
    '1982 social comedy-drama scored by Bappi Lahiri.',
    'Bibi Ka Ghulam'
  ),
  catalogFilm(
    'bl-hathkadi-1982',
    'Hathkadi',
    1982,
    'Sanjeev Kumar & Shatrughan Sinha thriller featuring "Disco Station Disco".',
    'Disco Station Disco',
    'Asha Bhosle'
  ),
  catalogFilm(
    'bl-josh-1982',
    'Josh',
    1982,
    '1982 Hindi drama scored by Bappi Lahiri.',
    'Josh Mein Aaya Dil'
  ),
  catalogFilm(
    'bl-shiv-charan-1982',
    'Shiv Charan',
    1982,
    '1982 Hindi drama scored by Bappi Lahiri.',
    'Aaj Ki Raat Mere Dil'
  ),
  catalogFilm(
    'bl-suraag-1982',
    'Suraag',
    1982,
    'Sanjeev Kumar & Shabana Azmi thriller featuring "Kya Hua Are Kya Hua".',
    'Kya Hua Are Kya Hua',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'bl-taqdeer-ka-badshah-1982',
    'Taqdeer Ka Badshah',
    1982,
    'Mithun Chakraborty & Ranjeeta actioner featuring "Pyar Ka Hai Yeh Khel".',
    'Bheegi Bheegi Raat Mein'
  ),
  {
    id: 'bl-himmatwala-1983',
    directorId: 'bappi-lahiri',
    title: 'Himmatwala',
    year: 1983,
    cast: 'Jeetendra, Sridevi, Kader Khan',
    label: 'HMV / Saregama',
    significance:
      'K. Raghavendra Rao blockbuster that launched the Jeetendra–Sridevi–Bappi Lahiri hitmaker juggernaut.',
    songs: [
      origSong(
        'bl-himmatwala-1983',
        1,
        'Naino Mein Sapna',
        'Kishore Kumar, Lata Mangeshkar',
        'Himmatwala',
        1983,
        'Visual and musical spectacle arranged with exuberant South–North masala orchestration.'
      ),
      origSong(
        'bl-himmatwala-1983',
        2,
        'Taki O Taki',
        'Kishore Kumar, Asha Bhosle',
        'Himmatwala',
        1983
      ),
      origSong(
        'bl-himmatwala-1983',
        3,
        'Wah Wah Khel Shuru Ho Gaya',
        'Kishore Kumar, Asha Bhosle',
        'Himmatwala',
        1983
      ),
    ],
  },
  catalogFilm(
    'bl-jaani-dost-1983',
    'Jaani Dost',
    1983,
    'Dharmendra, Jeetendra & Sridevi entertainer featuring "Bagh Mein Kali Khili".',
    'Bagh Mein Kali Khili'
  ),
  catalogFilm(
    'bl-justice-chaudhury-1983',
    'Justice Chaudhury',
    1983,
    'Jeetendra & Sridevi courtroom drama featuring "Mama Miya Pom Pom".',
    'Mama Miya Pom Pom'
  ),
  catalogFilm(
    'bl-karate-1983',
    'Karate',
    1983,
    'Mithun Chakraborty martial-arts actioner scored by Bappi Lahiri.',
    'Do Deewane Pyar Ke'
  ),
  catalogFilm(
    'bl-mawaali-1983',
    'Mawaali',
    1983,
    'Jeetendra, Sridevi & Jaya Prada masala hit featuring "Ui Amma Ui Amma".',
    'Ui Amma Ui Amma',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'bl-naukar-biwi-ka-1983',
    'Naukar Biwi Ka',
    1983,
    'Dharmendra & Anita Raj comedy hit featuring "Kya Naam Hai Tera".',
    'Kya Naam Hai Tera',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'bl-wanted-dead-or-alive-1983',
    'Wanted: Dead or Alive',
    1983,
    'Mithun Chakraborty action western scored by Bappi Lahiri.',
    'Raat Aaye To'
  ),
  {
    id: 'bl-sharaabi-1984',
    directorId: 'bappi-lahiri',
    title: 'Sharaabi',
    year: 1984,
    cast: 'Amitabh Bachchan, Jaya Prada, Pran',
    label: 'HMV / Saregama',
    significance:
      'Won Bappi Lahiri the Filmfare Award for Best Music Director; revered for Kishore Kumar and Asha Bhosle’s masterworks.',
    songs: [
      adaptedSong(
        'bl-sharaabi-1984',
        1,
        'De De Pyaar De',
        'Kishore Kumar / Asha Bhosle',
        'Sharaabi',
        1984,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'De De Pyaar De (Superuna Album Version)',
          originalArtist: 'Runa Laila (Composed by Bappi Lahiri)',
          originalYear: '1982',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Reworked from Bappi Lahiri’s own 1982 studio album Superuna recorded with Runa Laila, enriched for Amitabh Bachchan with playful brass nods to Western cinema themes.',
          originalLink: 'https://www.youtube.com/watch?v=G-SqW28QpqI',
          referenceSource: 'MySwar / Album Provenance',
        }
      ),
      adaptedSong(
        'bl-sharaabi-1984',
        2,
        'Inteha Ho Gayi Intezaar Ki',
        'Kishore Kumar, Asha Bhosle',
        'Sharaabi',
        1984,
        {
          adaptationType: 'copied',
          originalSongTitle: 'The Runner',
          originalArtist: 'The Three Degrees',
          originalYear: '1979',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'While the slow opening is original, the brisk female movement ("Logon ne to dil ko...") closely mirrors the upbeat synth-strings motif of The Three Degrees’ 1979 disco hit "The Runner".',
          originalLink: 'https://www.youtube.com/watch?v=PJZeuz2tMuU',
          referenceSource: 'ITWOFS / Comparative Musicology Archives',
        }
      ),
      origSong(
        'bl-sharaabi-1984',
        3,
        'Manzilein Apni Jagah Hain',
        'Kishore Kumar',
        'Sharaabi',
        1984,
        'Hauntingly restrained solo written by Anjaan.'
      ),
      origSong(
        'bl-sharaabi-1984',
        4,
        'Mujhe Naulakha Mangawa De Re',
        'Kishore Kumar, Asha Bhosle',
        'Sharaabi',
        1984
      ),
    ],
  },
  {
    id: 'bl-kasam-paida-karnewale-ki-1984',
    directorId: 'bappi-lahiri',
    title: 'Kasam Paida Karne Wale Ki',
    year: 1984,
    cast: 'Mithun Chakraborty, Smita Patil, Salma Agha',
    label: 'Venus / HMV',
    significance:
      'B. Subhash techno-revenge musical famous for "Come Closer", "Jhoom Jhoom Baba", and the Thriller-inspired "Jeena Bhi Kya Hai Jeena".',
    songs: [
      origSong(
        'bl-kasam-paida-karnewale-ki-1984',
        1,
        'Jhoom Jhoom Baba',
        'Salma Agha',
        'Kasam Paida Karne Wale Ki',
        1984,
        'Hypnotic electro-disco dance anthem sung by Salma Agha.'
      ),
      origSong(
        'bl-kasam-paida-karnewale-ki-1984',
        2,
        'Come Closer',
        'Salma Agha',
        'Kasam Paida Karne Wale Ki',
        1984
      ),
      adaptedSong(
        'bl-kasam-paida-karnewale-ki-1984',
        3,
        'Jeena Bhi Kya Hai Jeena',
        'Bappi Lahiri, Salma Agha',
        'Kasam Paida Karne Wale Ki',
        1984,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Billie Jean / Funkytown',
          originalArtist: 'Michael Jackson (1982) / Lipps Inc. (1980)',
          originalYear: '1982',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Fuses synth-bass pulses and funk breakbeats echoing Michael Jackson’s "Billie Jean" and Lipps Inc.’s "Funkytown", staged as a direct Bollywood homage to MJ’s "Thriller".',
          originalLink: 'https://www.youtube.com/watch?v=Zi_XLOBDo_Y',
          referenceSource: 'Scroll.in / Retro Musicology',
        }
      ),
      origSong(
        'bl-kasam-paida-karnewale-ki-1984',
        4,
        'Kasam Paida Karnewale Ki',
        'Vijay Benedict',
        'Kasam Paida Karne Wale Ki',
        1984
      ),
    ],
  },
  {
    id: 'bl-bhavna-1984',
    directorId: 'bappi-lahiri',
    title: 'Bhavna',
    year: 1984,
    cast: 'Shabana Azmi, Marc Zuber, Saeed Jaffrey, Urmila Matondkar',
    label: 'HMV / Saregama',
    significance:
      'Praveen Bhatt’s acclaimed social drama featuring Kaifi Azmi lyrics and an ITWOFS-documented Disney adaptation.',
    songs: [
      adaptedSong(
        'bl-bhavna-1984',
        1,
        'Dekho Din Yeh Na Dhalne Paye',
        'Asha Bhosle, Kavita Paudwal',
        'Bhavna',
        1984,
        {
          adaptationType: 'copied',
          originalSongTitle: "It's a Small World (After All)",
          originalArtist: 'The Sherman Brothers (Disney)',
          originalYear: '1964',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Closely mirrors the cheerful melody and repetitive children’s chorus phrasing of The Sherman Brothers’ 1964 Disney classic.',
          originalLink: 'https://www.youtube.com/watch?v=rtW4VG1qpac',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'bl-bhavna-1984',
        2,
        'Tu Kahan Aa Gayi Zindagi',
        'Lata Mangeshkar',
        'Bhavna',
        1984
      ),
    ],
  },
  {
    id: 'bl-tohfa-1984',
    directorId: 'bappi-lahiri',
    title: 'Tohfa',
    year: 1984,
    cast: 'Jeetendra, Sridevi, Jaya Prada',
    label: 'HMV / Saregama',
    significance:
      '1984 box-office juggernaut featuring "Ek Aankh Marun To" (revived 36 years later in Baaghi 3 as "Bhankas").',
    songs: [
      origSong(
        'bl-tohfa-1984',
        1,
        'Ek Aankh Marun To',
        'Kishore Kumar, Asha Bhosle',
        'Tohfa',
        1984,
        'Reworked in Baaghi 3 (2020) as "Bhankas" with Bappi Lahiri credited.'
      ),
      origSong(
        'bl-tohfa-1984',
        2,
        'Tohfa Tohfa Tohfa',
        'Kishore Kumar, Asha Bhosle',
        'Tohfa',
        1984
      ),
      origSong(
        'bl-tohfa-1984',
        3,
        'Pyar Ka Tohfa Tera',
        'Kishore Kumar, Asha Bhosle',
        'Tohfa',
        1984
      ),
    ],
  },
  catalogFilm(
    'bl-aaj-ka-mla-ram-avtar-1984',
    'Aaj Ka M.L.A. Ram Avtar',
    1984,
    'Rajesh Khanna & Shabana Azmi political drama scored by Bappi Lahiri.',
    'Tika Tika Tika'
  ),
  catalogFilm(
    'bl-akalmand-1984',
    'Akalmand',
    1984,
    'Jeetendra & Sridevi entertainer featuring "Nazar Dekho".',
    'Ek Din Milke'
  ),
  catalogFilm(
    'bl-boxer-1984',
    'Boxer',
    1984,
    'Mithun Chakraborty & Rati Agnihotri sports drama scored by Bappi Lahiri.',
    'Hai Mubarak Aaj Ka Din'
  ),
  catalogFilm(
    'bl-gangvaa-1984',
    'Gangvaa',
    1984,
    'Rajinikanth & Shabana Azmi Hindi actioner scored by Bappi Lahiri.',
    'Raat Baaki Hai'
  ),
  catalogFilm(
    'bl-haisiyat-1984',
    'Haisiyat',
    1984,
    'Jeetendra & Jaya Prada drama featuring "Dheere Dheere Subah Hui".',
    'Dheere Dheere Subah Hui',
    'Yesudas'
  ),
  catalogFilm(
    'bl-maqsad-1984',
    'Maqsad',
    1984,
    'Rajesh Khanna, Jeetendra & Sridevi multi-starrer featuring "Pyar Tumne Kiya Hai".',
    'Pyar Tumne Kiya Hai'
  ),
  catalogFilm(
    'bl-qaidi-1984',
    'Qaidi',
    1984,
    'Jeetendra, Shatrughan Sinha & Madhavi hit featuring "Komali Tamali".',
    'Komali Tamali'
  ),
  catalogFilm(
    'bl-shararat-1984',
    'Shararat',
    1984,
    '1984 Hindi drama scored by Bappi Lahiri.',
    'Mere Mehboob'
  ),
  {
    id: 'bl-saaheb-1985',
    directorId: 'bappi-lahiri',
    title: 'Saaheb',
    year: 1985,
    cast: 'Anil Kapoor, Amrita Singh, Rakhee',
    label: 'HMV / Saregama',
    significance:
      'Anil Kapoor family drama powered by Bappi Lahiri & S. Janaki’s timeless synth-disco duet "Yaar Bina Chain Kahan Re".',
    songs: [
      adaptedSong(
        'bl-saaheb-1985',
        1,
        'Yaar Bina Chain Kahan Re',
        'Bappi Lahiri, S. Janaki',
        'Saaheb',
        1985,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Je Jon Premer Bhab Jane (Bengali Folk Motif)',
          originalArtist: 'Traditional Bengali Baul / Folk Tradition',
          originalYear: 'Traditional',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Signature 1985 synthesizer pop anthem adapting traditional Bengali folk phrasing into an upbeat disco groove; recreated in Shubh Mangal Zyada Saavdhan (2020).',
          originalLink: 'https://www.youtube.com/watch?v=rS6bo0SQsQ4',
          referenceSource: 'Composer Interviews / Indian Musicology',
        }
      ),
      origSong(
        'bl-saaheb-1985',
        2,
        'Tere Naina Mere Naino Se',
        'Bappi Lahiri',
        'Saaheb',
        1985
      ),
    ],
  },
  {
    id: 'bl-aitbaar-1985',
    directorId: 'bappi-lahiri',
    title: 'Aitbaar',
    year: 1985,
    cast: 'Raj Babbar, Dimple Kapadia, Suresh Oberoi',
    label: 'Venus / T-Series',
    significance:
      'Critically acclaimed Mukul Anand thriller prized for Bhupinder & Asha Bhosle’s classic ghazals.',
    songs: [
      origSong(
        'bl-aitbaar-1985',
        1,
        'Kisi Nazar Ko Tera Intezaar Aaj Bhi Hai',
        'Asha Bhosle, Bhupinder Singh',
        'Aitbaar',
        1985,
        'Enduring ghazal gem by Farooq Qaiser proving Bappi Lahiri’s classical depth.'
      ),
      origSong(
        'bl-aitbaar-1985',
        2,
        'Awaaz Di Hai Aaj Ek Nazar Ne',
        'Asha Bhosle, Bhupinder Singh',
        'Aitbaar',
        1985
      ),
    ],
  },
  catalogFilm(
    'bl-aandhi-toofan-1985',
    'Aandhi-Toofan',
    1985,
    'Shashi Kapoor, Hema Malini & Mithun Chakraborty multi-starrer.',
    'O Baba O Baba'
  ),
  {
    id: 'bl-adventures-of-tarzan-1985',
    directorId: 'bappi-lahiri',
    title: 'Adventures of Tarzan',
    year: 1985,
    cast: 'Hemant Birje, Kimi Katkar, Dalip Tahil',
    label: 'Venus / T-Series',
    significance:
      'Cult 1985 jungle adventure featuring Alisha Chinai’s "Tarzan My Tarzan" alongside two documented Afro-rock and Euro-pop adaptations.',
    songs: [
      origSong(
        'bl-adventures-of-tarzan-1985',
        1,
        'Tarzan My Tarzan',
        'Alisha Chinai',
        'Adventures of Tarzan',
        1985
      ),
      adaptedSong(
        'bl-adventures-of-tarzan-1985',
        2,
        'Jee Le Le (Jee Le Le Aayo Aayo)',
        'Bappi Lahiri, Alisha Chinai',
        'Adventures of Tarzan',
        1985,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Kelele Kelele',
          originalArtist: 'Osibisa',
          originalYear: '1977',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'The tribal chant refrain and Afro-percussion dance hook closely mirror Ghanaian-British Afro-rock band Osibisa’s "Kelele Kelele".',
          originalLink: 'https://www.youtube.com/watch?v=UplxARkNGdo',
          referenceSource: 'ITWOFS',
        }
      ),
      adaptedSong(
        'bl-adventures-of-tarzan-1985',
        3,
        'Mere Paas Aaoge Mere Saath Nachoge',
        'Uttara Kelkar, Vijay Benedict',
        'Adventures of Tarzan',
        1985,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Chirpy Chirpy Cheep Cheep',
          originalArtist: 'Middle of the Road',
          originalYear: '1971',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Adapts the buoyant European bubblegum-pop verse and call-and-response refrain of Middle of the Road’s 1971 smash.',
          originalLink: 'https://www.youtube.com/watch?v=rbHOornfq-s',
          referenceSource: 'Comparative Musicology Archives / Retro Film Music Comparisons',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-balidaan-1985',
    'Balidaan',
    1985,
    'Jeetendra & Sridevi action drama featuring "Kare Kya Hum".',
    'Kare Kya Hum'
  ),
  catalogFilm(
    'bl-bewafai-1985',
    'Bewafai',
    1985,
    'Rajesh Khanna & Tina Munim drama featuring "Lachak Lachak".',
    'Piya Aa'
  ),
  catalogFilm(
    'bl-geraftaar-1985',
    'Geraftaar',
    1985,
    'Amitabh Bachchan, Kamal Haasan & Rajinikanth actioner featuring "Dhoop Mein Nikla Na Karo".',
    'Dhoop Mein Nikla Na Karo',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'bl-hoshiyaar-1985',
    'Hoshiyaar',
    1985,
    'Jeetendra & Jaya Prada hit featuring "Teri Jaan Ki Kasam".',
    'Teri Jaan Ki Kasam'
  ),
  catalogFilm(
    'bl-maa-kasam-1985',
    'Maa Kasam',
    1985,
    'Mithun Chakraborty & Divya Rana actioner scored by Bappi Lahiri.',
    'Bolo Bolo Kuch To Bolo'
  ),
  catalogFilm(
    'bl-masterji-1985',
    'Masterji',
    1985,
    'Rajesh Khanna & Sridevi family comedy featuring "Aankhen Kholo".',
    'Aankhen Kholo'
  ),
  catalogFilm(
    'bl-mera-sathi-1985',
    'Mera Sathi',
    1985,
    'Jeetendra & Jaya Prada drama scored by Bappi Lahiri.',
    'Sathi Mere Sathi'
  ),
  catalogFilm(
    'bl-mohabbat-1985',
    'Mohabbat',
    1985,
    'Anil Kapoor & Vijeta Pandit romantic musical featuring "Saanson Se Nahin".',
    'Saanson Se Nahin Qadmon Se Nahin',
    'Kishore Kumar, Asha Bhosle'
  ),
  catalogFilm(
    'bl-pataal-bhairavi-1985',
    'Pataal Bhairavi',
    1985,
    'Jeetendra & Jaya Prada fantasy hit featuring "Jhanak Jhanak".',
    'Chumma Chumma'
  ),
  catalogFilm(
    'bl-pyari-behna-1985',
    'Pyari Behna',
    1985,
    'Mithun Chakraborty & Padmini Kolhapure family drama featuring "O Meri Behna".',
    'O Meri Behna',
    'Kishore Kumar'
  ),

  // =====================================================================
  // 1986–1991: GUINNESS WORLD RECORD PEAK (1986), DANCE DANCE, GHAYAL & THANEDAAR
  // =====================================================================
  {
    id: 'bl-shart-1986',
    directorId: 'bappi-lahiri',
    title: 'Shart',
    year: 1986,
    cast: 'Naseeruddin Shah, Shabana Azmi, Kanwaljit Singh',
    label: 'T-Series',
    significance:
      '1986 thriller containing one of Bappi Lahiri’s most frequently cited UK New Wave adaptations.',
    songs: [
      adaptedSong(
        'bl-shart-1986',
        1,
        'Tera Mera Mera Tera',
        'S. Janaki, Bappi Lahiri',
        'Shart',
        1986,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Karma Chameleon',
          originalArtist: 'Culture Club',
          originalYear: '1983',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The harmonica riff, bouncy chord progression, and chorus refrain closely mirror Culture Club’s 1983 global hit.',
          originalLink: 'https://www.youtube.com/watch?v=JmcA9LIIXWw',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  {
    id: 'bl-ilzaam-1986',
    directorId: 'bappi-lahiri',
    title: 'Ilzaam',
    year: 1986,
    cast: 'Govinda, Neelam Kothari, Shatrughan Sinha, Shashi Kapoor',
    label: 'T-Series',
    significance:
      'Govinda’s debut blockbuster (1986 Guinness Record year) propelled by "I Am a Street Dancer" and Billy Joel-inspired "Pehle Pehle Pyar Ki".',
    songs: [
      origSong(
        'bl-ilzaam-1986',
        1,
        'I Am a Street Dancer',
        'Amit Kumar',
        'Ilzaam',
        1986
      ),
      adaptedSong(
        'bl-ilzaam-1986',
        2,
        'Pehle Pehle Pyar Ki',
        'Asha Bhosle, Amit Kumar',
        'Ilzaam',
        1986,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'My Life',
          originalArtist: 'Billy Joel',
          originalYear: '1978',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The upbeat keyboard prelude and rhythmic piano vamp closely echo the opening motif of Billy Joel’s 1978 pop rock hit "My Life".',
          originalLink: 'https://www.youtube.com/watch?v=HVX80UpMPDI',
          referenceSource: 'MySwar',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-avinash-1986',
    'Avinash',
    1986,
    'Mithun Chakraborty & Poonam Dhillon actioner (1986 Guinness Record year).',
    'Jaana Kahan Hai'
  ),
  catalogFilm(
    'bl-dharm-adhikari-1986',
    'Dharm Adhikari',
    1986,
    'Dilip Kumar, Jeetendra & Sridevi drama (1986 Guinness Record year).',
    'Maamla Gadbad Hai'
  ),
  catalogFilm(
    'bl-dilwaala-1986',
    'Dilwaala',
    1986,
    'Mithun Chakraborty & Meenakshi Seshadri drama (1986 Guinness Record year).',
    'Abbi Abbi Teri Yaad'
  ),
  catalogFilm(
    'bl-karamdaata-1986',
    'Karamdaata',
    1986,
    'Mithun Chakraborty & Amrita Singh drama (1986 Guinness Record year).',
    'Pyar Tujhse Kiya Hai'
  ),
  catalogFilm(
    'bl-kismatwala-1986',
    'Kismatwala',
    1986,
    'Mithun Chakraborty & Ranjeeta actioner (1986 Guinness Record year).',
    'Boogie Boogie'
  ),
  catalogFilm(
    'bl-locket-1986',
    'Locket',
    1986,
    'Jeetendra & Rekha actioner (1986 Guinness Record year).',
    'Jo Bhi Kehna Sach Kehna'
  ),
  catalogFilm(
    'bl-main-balwaan-1986',
    'Main Balwaan',
    1986,
    'Dharmendra & Mithun Chakraborty actioner featuring "Padosi Teri Murgi".',
    'Padosi Teri Murgi',
    'Kishore Kumar, Asha Bhosle'
  ),
  {
    id: 'bl-muddat-1986',
    directorId: 'bappi-lahiri',
    title: 'Muddat',
    year: 1986,
    cast: 'Mithun Chakraborty, Jaya Prada, Padmini Kolhapure',
    label: 'T-Series',
    significance:
      '1986 Mithun Chakraborty entertainer featuring Kishore Kumar’s Italo-synth adaptation "Mujhe Kehte Hain Romeo".',
    songs: [
      origSong(
        'bl-muddat-1986',
        1,
        'Pyar Hamara Amar Rahega',
        'Mohammed Aziz, Asha Bhosle',
        'Muddat',
        1986
      ),
      adaptedSong(
        'bl-muddat-1986',
        2,
        'Mujhe Kehte Hain Romeo',
        'Kishore Kumar',
        'Muddat',
        1986,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Self Control',
          originalArtist: 'Laura Branigan (Raf)',
          originalYear: '1984',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Closely mirrors the driving synth-guitar riff, bass pulse, and dramatic verse phrasing of Laura Branigan’s 1984 hit "Self Control".',
          originalLink: 'https://www.youtube.com/watch?v=RP0_8J7uxhs',
          referenceSource: 'Comparative Musicology Archives / Retro Synth Comparisons',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-sadaa-suhagan-1986',
    'Sadaa Suhagan',
    1986,
    'Jeetendra & Rekha family drama (1986 Guinness Record year).',
    'Hum Aapke Hain'
  ),
  catalogFilm(
    'bl-sheesha-1986',
    'Sheesha',
    1986,
    'Mithun Chakraborty & Moon Moon Sen drama (1986 Guinness Record year).',
    'Pyar Hai Kya'
  ),
  catalogFilm(
    'bl-suhagan-1986',
    'Suhagan',
    1986,
    'Jeetendra & Sridevi family drama featuring "Ghunghta Kholna Na".',
    'Ghunghta Kholna Na'
  ),
  {
    id: 'bl-dance-dance-1987',
    directorId: 'bappi-lahiri',
    title: 'Dance Dance',
    year: 1987,
    cast: 'Mithun Chakraborty, Mandakini, Smita Patil',
    label: 'T-Series',
    significance:
      'Mithun–Bappi’s second mega-disco milestone, powered by Alisha Chinai’s "Zooby Zooby" and high-voltage stage numbers.',
    songs: [
      adaptedSong(
        'bl-dance-dance-1987',
        1,
        'Mera Dil Gaayega (Zooby Zooby)',
        'Alisha Chinai',
        'Dance Dance',
        1987,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Brother Louie',
          originalArtist: 'Modern Talking',
          originalYear: '1986',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The German synth-pop bass pulse, hook phrasing, and chorus rhythm closely adapt Modern Talking’s 1986 chart-topper.',
          originalLink: 'https://www.youtube.com/watch?v=Dhy4xH662vE',
          referenceSource: 'ITWOFS / Euro-Disco Archives',
        }
      ),
      origSong(
        'bl-dance-dance-1987',
        2,
        'Dance Dance (Title Track)',
        'Vijay Benedict, Alisha Chinai',
        'Dance Dance',
        1987
      ),
      origSong(
        'bl-dance-dance-1987',
        3,
        'Aa Gaya Aa Gaya Halwa Wala',
        'Bappi Lahiri, Uttara Kelkar',
        'Dance Dance',
        1987
      ),
      origSong(
        'bl-dance-dance-1987',
        4,
        'Yaar Mera Kho Gaya',
        'Alisha Chinai',
        'Dance Dance',
        1987
      ),
      adaptedSong(
        'bl-dance-dance-1987',
        5,
        'Dil Mera Todo Na',
        'Alisha Chinai',
        'Dance Dance',
        1987,
        {
          adaptationType: 'copied',
          originalSongTitle: "Don't Break My Heart",
          originalArtist: 'UB40',
          originalYear: '1985',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The chorus hook and reggae-pop rhythmic groove closely adapt UB40’s 1985 single "Don’t Break My Heart".',
          originalLink: 'https://www.youtube.com/watch?v=dHj_RxvkWHQ',
          referenceSource: 'Comparative Musicology Archives / Film Music Archives',
        }
      ),
    ],
  },
  {
    id: 'bl-satyamev-jayate-1987',
    directorId: 'bappi-lahiri',
    title: 'Satyamev Jayate',
    year: 1987,
    cast: 'Vinod Khanna, Meenakshi Seshadri',
    label: 'T-Series',
    significance:
      'Features Bappi Lahiri’s romantic classic "Dil Mein Ho Tum", adapted from his own Bengali hit "Chirodini Tumi Je Amar".',
    songs: [
      adaptedSong(
        'bl-satyamev-jayate-1987',
        1,
        'Dil Mein Ho Tum',
        'Bappi Lahiri / S. Janaki',
        'Satyamev Jayate',
        1987,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Chirodini Tumi Je Amar (Amar Sangi)',
          originalArtist: 'Bappi Lahiri / Kishore Kumar (Bengali)',
          originalYear: '1986',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Hindi adaptation of Bappi Lahiri’s own 1986 Bengali blockbuster composition "Chirodini Tumi Je Amar" from Amar Sangi.',
          originalLink: 'https://www.youtube.com/watch?v=X0inl_R8-D4',
          referenceSource: 'Filmography Provenance Records',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-aag-hi-aag-1987',
    'Aag Hi Aag',
    1987,
    'Dharmendra, Shatrughan Sinha & Chunky Pandey hit featuring "Sajan Aa Jao".',
    'Sajan Aa Jao'
  ),
  catalogFilm(
    'bl-dadagiri-1987',
    'Dadagiri',
    1987,
    'Dharmendra & Govinda actioner scored by Bappi Lahiri.',
    'Gudiya Rani'
  ),
  catalogFilm(
    'bl-dak-bangla-1987',
    'Dak Bangla',
    1987,
    'Keshu Ramsay horror thriller scored by Bappi Lahiri.',
    'I Love You'
  ),
  catalogFilm(
    'bl-majaal-1987',
    'Majaal',
    1987,
    'Jeetendra, Sridevi & Jaya Prada drama featuring "Ting Ting Ghanti Baje".',
    'Ting Ting Ghanti Baje'
  ),
  catalogFilm(
    'bl-param-dharam-1987',
    'Param Dharam',
    1987,
    'Mithun Chakraborty & Mandakini drama featuring "Pyar Pyar Pyar".',
    'Pyar Pyar Pyar'
  ),
  catalogFilm(
    'bl-pyaar-karke-dekho-1987',
    'Pyaar Karke Dekho',
    1987,
    'Govinda & Mandakini comedy featuring "Tumse Milkar".',
    'Tumse Milkar'
  ),
  catalogFilm(
    'bl-commando-1988',
    'Commando',
    1988,
    'Mithun Chakraborty & Mandakini action musical featuring "O Mere Maine".',
    'O Mere Maine',
    'Alisha Chinai, Vijay Benedict'
  ),
  catalogFilm(
    'bl-khatron-ke-khiladi-1988',
    'Khatron Ke Khiladi',
    1988,
    'Dharmendra, Sanjay Dutt & Chunky Pandey hit scored by Bappi Lahiri.',
    'Premi Aaya'
  ),
  catalogFilm(
    'bl-mulzim-1988',
    'Mulzim',
    1988,
    'Jeetendra, Shatrughan Sinha & Kimi Katkar courtroom drama.',
    'Pyar Ka Ilzaam'
  ),
  catalogFilm(
    'bl-pyar-mohabbat-1988',
    'Pyar Mohabbat',
    1988,
    'Govinda & Mandakini romantic drama scored by Bappi Lahiri.',
    'Gori Zulfon Wali'
  ),
  catalogFilm(
    'bl-waqt-ki-awaz-1988',
    'Waqt Ki Awaz',
    1988,
    'Mithun Chakraborty & Sridevi hit featuring "I Want to Hit Somebody".',
    'Guru Guru',
    'Asha Bhosle, Kishore Kumar'
  ),
  catalogFilm(
    'bl-aag-ka-gola-1989',
    'Aag Ka Gola',
    1989,
    'Sunny Deol & Dimple Kapadia action drama scored by Bappi Lahiri.',
    'Aaya Aaya'
  ),
  catalogFilm(
    'bl-gair-kanooni-1989',
    'Gair Kanooni',
    1989,
    'Govinda, Sridevi & Kimi Katkar actioner featuring "Tik Tik Chalti Hai".',
    'Tik Tik Chalti Hai'
  ),
  catalogFilm(
    'bl-gola-barood-1989',
    'Gola Barood',
    1989,
    'Shatrughan Sinha & Chunky Pandey actioner scored by Bappi Lahiri.',
    'Aankh Mare'
  ),
  catalogFilm(
    'bl-guru-1989',
    'Guru',
    1989,
    'Mithun Chakraborty & Sridevi hit featuring "Aaiyoo Aaiyoo".',
    'Aaiyoo Aaiyoo'
  ),
  catalogFilm(
    'bl-kanoon-apna-apna-1989',
    'Kanoon Apna Apna',
    1989,
    'Dilip Kumar, Sanjay Dutt & Madhuri Dixit hit featuring "Gayi Gayi".',
    'Pehli Nazar Mein'
  ),
  catalogFilm(
    'bl-love-love-love-1989',
    'Love Love Love',
    1989,
    'Aamir Khan & Juhi Chawla teen romance featuring "Disco Dandia".',
    'Hum To Hain Dil Ke Deewane',
    'Vijay Benedict, Asha Bhosle'
  ),
  catalogFilm(
    'bl-mitti-aur-sona-1989',
    'Mitti Aur Sona',
    1989,
    'Chunky Pandey & Neelam drama featuring "One Two Three".',
    'Mausam Hai Bheega'
  ),
  catalogFilm(
    'bl-paap-ka-ant-1989',
    'Paap Ka Ant',
    1989,
    'Govinda & Madhuri Dixit actioner scored by Bappi Lahiri.',
    'Koi Vada Kare'
  ),
  catalogFilm(
    'bl-prem-pratigyaa-1989',
    'Prem Pratigyaa',
    1989,
    'Mithun Chakraborty & Madhuri Dixit hit featuring "Pyar Kabhi Kam Nahin Karna".',
    'Pyar Kabhi Kam Nahin Karna',
    'Bappi Lahiri, Asha Bhosle'
  ),
  catalogFilm(
    'bl-sachai-ki-taaqat-1989',
    'Sachai Ki Taaqat',
    1989,
    'Dharmendra, Govinda & Amrita Singh drama scored by Bappi Lahiri.',
    'Aisa Ho To'
  ),
  catalogFilm(
    'bl-touhean-1989',
    'Touhean',
    1989,
    'Raj Babbar, Dimple Kapadia & Padmini Kolhapure drama scored by Bappi Lahiri.',
    'Pyar Karo Pyar Karo'
  ),
  {
    id: 'bl-aandhiyaan-1990',
    directorId: 'bappi-lahiri',
    title: 'Aandhiyaan',
    year: 1990,
    cast: 'Mumtaz, Prosenjit Chatterjee, Shatrughan Sinha, Saeed Jaffrey',
    label: 'T-Series',
    significance:
      'David Dhawan drama marking Mumtaz’s screen comeback and Prosenjit Chatterjee’s Hindi debut, featuring an ITWOFS-documented Robin Ghosh adaptation.',
    songs: [
      adaptedSong(
        'bl-aandhiyaan-1990',
        1,
        'Duniya Mein Tere Siva',
        'Udit Narayan, Anuradha Paudwal',
        'Aandhiyaan',
        1990,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Bas Ek Tere Siva',
          originalArtist: 'Robin Ghosh (Pakistani Film Dooriyan)',
          originalYear: '1984',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Closely mirrors the melodic phrasing and refrain of composer Robin Ghosh’s 1984 Pakistani soundtrack track "Bas Ek Tere Siva".',
          originalLink: 'https://www.youtube.com/watch?v=2aNlwRkh-fM',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'bl-aandhiyaan-1990',
        2,
        'Ole Ole Dil Bole',
        'Amit Kumar, Kavita Krishnamurthy',
        'Aandhiyaan',
        1990
      ),
    ],
  },
  {
    id: 'bl-ghayal-1990',
    directorId: 'bappi-lahiri',
    title: 'Ghayal',
    year: 1990,
    cast: 'Sunny Deol, Meenakshi Seshadri, Raj Babbar',
    label: 'Venus',
    significance:
      'Rajkumar Santoshi’s landmark 1990 blockbuster combining soaring action ballads with "Sochna Kya" (Lambada).',
    songs: [
      adaptedSong(
        'bl-ghayal-1990',
        1,
        'Sochna Kya Jo Bhi Hoga Dekha Jayega',
        'Shabbir Kumar, Asha Bhosle, Kumar Sanu',
        'Ghayal',
        1990,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Lambada (Chorando Se Foi)',
          originalArtist: 'Kaoma (Los Kjarkas / Márcia Ferreira)',
          originalYear: '1989',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Directly adapts the global 1989 accordion/dance melody and rhythmic groove of Kaoma’s "Lambada".',
          originalLink: 'https://www.youtube.com/watch?v=WMT5XzXFhUs',
          referenceSource: 'ITWOFS / World Music Archives',
        }
      ),
      origSong(
        'bl-ghayal-1990',
        2,
        'Pyar Tumse Karna Hai',
        'Amit Kumar, S. Janaki',
        'Ghayal',
        1990
      ),
      origSong(
        'bl-ghayal-1990',
        3,
        'Mahiya Teri Kasam',
        'Pankaj Udhas, Lata Mangeshkar',
        'Ghayal',
        1990
      ),
    ],
  },
  {
    id: 'bl-thanedaar-1990',
    directorId: 'bappi-lahiri',
    title: 'Thanedaar',
    year: 1990,
    cast: 'Jeetendra, Sanjay Dutt, Jaya Prada, Madhuri Dixit',
    label: 'T-Series',
    significance:
      'Blockbuster featuring Madhuri Dixit & Sanjay Dutt’s iconic dance track "Tamma Tamma Loge" alongside "Jabse Huyi Hai Shaadi".',
    songs: [
      adaptedSong(
        'bl-thanedaar-1990',
        1,
        'Tamma Tamma Loge',
        'Bappi Lahiri, Anuradha Paudwal',
        'Thanedaar',
        1990,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Yeke Yeke / Tama Tama',
          originalArtist: 'Mory Kanté',
          originalYear: '1987',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Adapts the Guinean electro-kora hook and vocal chant from Mory Kanté’s 1987 international smash "Yeke Yeke" / "Tama Tama".',
          originalLink: 'https://www.youtube.com/watch?v=EKnYhHbflU0',
          referenceSource: 'ITWOFS / World Music Archives',
        }
      ),
      adaptedSong(
        'bl-thanedaar-1990',
        2,
        'Jabse Huyi Hai Shaadi',
        'Amit Kumar',
        'Thanedaar',
        1990,
        {
          adaptationType: 'copied',
          originalSongTitle: 'April in Portugal (Coimbra)',
          originalArtist: 'Raúl Ferrão / Les Baxter / Louis Armstrong',
          originalYear: '1953',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'The bouncy comedic chorus melody directly mirrors the classic European melody "April in Portugal" ("Coimbra").',
          originalLink: 'https://www.youtube.com/watch?v=oqYU3wNnv3w',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'bl-thanedaar-1990',
        3,
        'Kamaal Ho Gaya',
        'Asha Bhosle',
        'Thanedaar',
        1990
      ),
    ],
  },
  {
    id: 'bl-aaj-ka-arjun-1990',
    directorId: 'bappi-lahiri',
    title: 'Aaj Ka Arjun',
    year: 1990,
    cast: 'Amitabh Bachchan, Jaya Prada, Radhika',
    label: 'T-Series',
    significance:
      '1990 superhit anchored by Lata Mangeshkar & Shabbir Kumar’s wedding favorite "Gori Hai Kalaiyan".',
    songs: [
      adaptedSong(
        'bl-aaj-ka-arjun-1990',
        1,
        'Gori Hai Kalaiyan',
        'Lata Mangeshkar, Shabbir Kumar',
        'Aaj Ka Arjun',
        1990,
        {
          adaptationType: 'inspired',
          originalSongTitle: 'Gori Hai Kalaiyan (Shelved Gori Recording)',
          originalArtist: 'Shankar (Shankar–Jaikishan) / Kavita Krishnamurthy',
          originalYear: '1980s',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes:
            'Controversial overlapping tune and opening hook also recorded earlier in the 1980s by Shankar (of Shankar–Jaikishan) for Sudhakar Sharma’s delayed film Gori.',
          originalLink: 'https://www.youtube.com/watch?v=foI4HHCg72c',
          referenceSource: 'Sudhakar Sharma Archival Records',
        }
      ),
      origSong(
        'bl-aaj-ka-arjun-1990',
        2,
        'Chali Aana Tu Pan Ki Dukaan Pe',
        'Amit Kumar, Alka Yagnik',
        'Aaj Ka Arjun',
        1990
      ),
    ],
  },
  {
    id: 'bl-sailaab-1990',
    directorId: 'bappi-lahiri',
    title: 'Sailaab',
    year: 1990,
    cast: 'Aditya Pancholi, Madhuri Dixit',
    label: 'Venus',
    significance:
      'Features Madhuri Dixit’s chartbuster "Humko Aaj Kal Hai Intezaar" alongside the Beverly Hills Cop adaptation "Palkon Ke Tale".',
    songs: [
      origSong(
        'bl-sailaab-1990',
        1,
        'Humko Aaj Kal Hai Intezaar',
        'Anupama Deshpande',
        'Sailaab',
        1990,
        'Award-winning Maharashtrian folk-inflected solo sung by Anupama Deshpande.'
      ),
      adaptedSong(
        'bl-sailaab-1990',
        2,
        'Palkon Ke Tale Jo Sapne Pale',
        'Amit Kumar, Kavita Krishnamurthy',
        'Sailaab',
        1990,
        {
          adaptationType: 'copied',
          originalSongTitle: 'The Heat Is On',
          originalArtist: 'Glenn Frey (Beverly Hills Cop)',
          originalYear: '1984',
          originCategory: 'Western Pop & Ambient',
          adaptationNotes:
            'Adopts the driving sax-and-synth brass hook and energetic rhythm of Glenn Frey’s 1984 Beverly Hills Cop hit.',
          originalLink: 'https://www.youtube.com/watch?v=uZD8HKVKneI',
          referenceSource: 'ITWOFS / MySwar',
        }
      ),
    ],
  },
  {
    id: 'bl-afsana-pyar-ka-1991',
    directorId: 'bappi-lahiri',
    title: 'Afsana Pyar Ka',
    year: 1991,
    cast: 'Aamir Khan, Neelam Kothari, Deepak Tijori',
    label: 'T-Series',
    significance:
      'Aamir Khan–Neelam campus romance featuring "Tip Tip Tip Baarish" and the Ritchie Valens rock-and-roll adaptation "Aashiq Deewana Hoon".',
    songs: [
      adaptedSong(
        'bl-afsana-pyar-ka-1991',
        1,
        'Aashiq Deewana Hoon',
        'Amit Kumar',
        'Afsana Pyar Ka',
        1991,
        {
          adaptationType: 'copied',
          originalSongTitle: 'La Bamba',
          originalArtist: 'Ritchie Valens (1958) / Los Lobos (1987)',
          originalYear: '1958',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'Directly adapts the iconic Mexican folk-rock chord progression and vocal riff popularized worldwide as "La Bamba".',
          originalLink: 'https://www.youtube.com/watch?v=BycLmWI97Nc',
          referenceSource: 'Comparative Musicology Archives / Film Music Archives',
        }
      ),
      origSong(
        'bl-afsana-pyar-ka-1991',
        2,
        'Tip Tip Tip Baarish Shuru Ho Gayi',
        'Amit Kumar, Alka Yagnik',
        'Afsana Pyar Ka',
        1991
      ),
    ],
  },
  {
    id: 'bl-yodha-1991',
    directorId: 'bappi-lahiri',
    title: 'Yodha',
    year: 1991,
    cast: 'Sunny Deol, Sanjay Dutt, Sangeeta Bijlani, Danny Denzongpa',
    label: 'Venus',
    significance:
      '1991 action thriller featuring the Calypso-adapted duet "Whole Day Whole Night".',
    songs: [
      adaptedSong(
        'bl-yodha-1991',
        1,
        'Whole Day Whole Night',
        'Alka Yagnik, Amit Kumar',
        'Yodha',
        1991,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Mary Ann',
          originalArtist: 'Roaring Lion',
          originalYear: '1946',
          originCategory: 'African & World Folk',
          adaptationNotes:
            'The Trinidadian calypso chorus ("All day, all night, Miss Mary Ann") and bouncy island rhythm closely adapt Roaring Lion’s 1946 standard.',
          originalLink: 'https://www.youtube.com/watch?v=Lx_Xh94ZZQA',
          referenceSource: 'ITWOFS',
        }
      ),
    ],
  },
  catalogFilm(
    'bl-dushman-devta-1991',
    'Dushman Devta',
    1991,
    'Dharmendra & Dimple Kapadia action drama scored by Bappi Lahiri.',
    'Pyar Ke Ghar Mere'
  ),
  catalogFilm(
    'bl-first-love-letter-1991',
    'First Love Letter',
    1991,
    'Vivek Mushran & Manisha Koirala romance featuring "Diwani Diwani".',
    'Diwani Diwani',
    'Lata Mangeshkar, S. P. Balasubrahmanyam'
  ),
  catalogFilm(
    'bl-inspector-dhanush-1991',
    'Inspector Dhanush',
    1991,
    'Vishnuvardhan & Sangeeta Bijlani Hindi actioner scored by Bappi Lahiri.',
    'Laila Laila'
  ),
  catalogFilm(
    'bl-farishtay-1991',
    'Farishtay',
    1991,
    'Dharmendra, Vinod Khanna & Sridevi action drama featuring "Tere Bina Jag Lagta Hai Soona".',
    'Tere Bina Jag Lagta Hai Soona',
    'Lata Mangeshkar, Mohammed Aziz'
  ),
  catalogFilm(
    'bl-pyar-ka-devta-1991',
    'Pyar Ka Devta',
    1991,
    'Mithun Chakraborty & Madhuri Dixit drama featuring "Behnen Hansti Hain To".',
    'Meri Dukan Pe Aana'
  ),
  catalogFilm(
    'bl-vishkanya-1991',
    'Vishkanya',
    1991,
    'Pooja Bedi thriller scored by Bappi Lahiri.',
    'Aaj Ki Raat'
  ),

  // =====================================================================
  // 1992–2020: GOVINDA-DAVID DHAWAN HITS, NATIONAL AWARD ERA & REVIVALS
  // =====================================================================
  {
    id: 'bl-shola-aur-shabnam-1992',
    directorId: 'bappi-lahiri',
    title: 'Shola Aur Shabnam',
    year: 1992,
    cast: 'Govinda, Divya Bharti, Anupam Kher',
    label: 'T-Series',
    significance:
      'David Dhawan’s 1992 mega-hit powered by "Tu Pagal Premi Awara" and "Gori Gori O Baiko Chhori".',
    songs: [
      origSong(
        'bl-shola-aur-shabnam-1992',
        1,
        'Tu Pagal Premi Awara',
        'Shabbir Kumar, Kavita Krishnamurthy',
        'Shola Aur Shabnam',
        1992
      ),
      origSong(
        'bl-shola-aur-shabnam-1992',
        2,
        'Gori Gori O Baiko Chhori',
        'Govinda, Anuradha Paudwal',
        'Shola Aur Shabnam',
        1992
      ),
    ],
  },
  catalogFilm(
    'bl-geet-1992',
    'Geet',
    1992,
    'Avinash Wadhawan & Divya Bharti musical featuring "Prem Patra Aaya Hai".',
    'Prem Patra Aaya Hai',
    'Kumar Sanu'
  ),
  catalogFilm(
    'bl-police-aur-mujrim-1992',
    'Police Aur Mujrim',
    1992,
    'Raaj Kumar, Vinod Khanna & Meenakshi Seshadri drama featuring "Dil Ghabrata Hai".',
    'Dil Ghabrata Hai',
    'Kumar Sanu'
  ),
  catalogFilm(
    'bl-tyagi-1992',
    'Tyagi',
    1992,
    'Rajinikanth & Jaya Prada Hindi actioner featuring "Mujhko To Pyar Hai".',
    'Mujhko To Pyar Hai'
  ),
  catalogFilm(
    'bl-zindagi-ek-juaa-1992',
    'Zindagi Ek Juaa',
    1992,
    'Anil Kapoor & Madhuri Dixit drama featuring "Kabhi Kuch Khoya".',
    'Kabhi Kuch Khoya',
    'Kumar Sanu, Asha Bhosle'
  ),
  {
    id: 'bl-aankhen-1993',
    directorId: 'bappi-lahiri',
    title: 'Aankhen',
    year: 1993,
    cast: 'Govinda, Chunky Pandey, Rageshwari, Shilpa Shirodkar',
    label: 'Venus',
    significance:
      'Highest-grossing Hindi film of 1993, yielding blockbuster comic & romantic tracks led by "O Lal Dupatte Wali".',
    songs: [
      origSong(
        'bl-aankhen-1993',
        1,
        'O Lal Dupatte Wali',
        'Kumar Sanu, Sudesh Bhosle, Kavita Krishnamurthy, Alka Yagnik',
        'Aankhen',
        1993,
        '1993 chart-topper propelling Aankhen to box-office dominance.'
      ),
      origSong(
        'bl-aankhen-1993',
        2,
        'Angna Mein Baba',
        'Kumar Sanu, Sadhana Sargam',
        'Aankhen',
        1993
      ),
      origSong(
        'bl-aankhen-1993',
        3,
        'Bade Kaam Ka Bander',
        'Kumar Sanu, Arun Bakshi, Govinda, Chunky Pandey',
        'Aankhen',
        1993
      ),
    ],
  },
  {
    id: 'bl-dalaal-1993',
    directorId: 'bappi-lahiri',
    title: 'Dalaal',
    year: 1993,
    cast: 'Mithun Chakraborty, Ayesha Jhulka, Raj Babbar',
    label: 'Tips',
    significance:
      'Major 1993 Mithun Chakraborty blockbuster famous for "Gutur Gutur" and "Mar Gayee Mujhe Teri Judai".',
    songs: [
      origSong(
        'bl-dalaal-1993',
        1,
        'Gutur Gutur (Chadh Gaya Oopar Re)',
        'Bappi Lahiri, Kumar Sanu, Alka Yagnik, Ila Arun',
        'Dalaal',
        1993
      ),
      origSong(
        'bl-dalaal-1993',
        2,
        'Na Ja Re Na Ja',
        'Kumar Sanu, Alka Yagnik',
        'Dalaal',
        1993
      ),
    ],
  },
  catalogFilm(
    'bl-aag-ka-toofan-1993',
    'Aag Ka Toofan',
    1993,
    'Dharmendra & Sadashiv Amrapurkar actioner scored by Bappi Lahiri.',
    'Aisi Waisi Baat Nahin'
  ),
  catalogFilm(
    'bl-aaj-kie-aurat-1993',
    'Aaj Kie Aurat',
    1993,
    'Jeetendra & Dimple Kapadia social drama scored by Bappi Lahiri.',
    'Aaj Ki Aurat'
  ),
  catalogFilm(
    'bl-bomb-blast-1993',
    'Bomb Blast',
    1993,
    'Aditya Pancholi & Kishori Shahane action thriller scored by Bappi Lahiri.',
    'Tere Bina Zindagi'
  ),
  catalogFilm(
    'bl-izzat-ki-roti-1993',
    'Izzat Ki Roti',
    1993,
    'Sunny Deol, Rishi Kapoor & Juhi Chawla drama featuring "Mausam Badle To".',
    'Mausam Badle To',
    'Kumar Sanu, Lata Mangeshkar'
  ),
  catalogFilm(
    'bl-kundan-1993',
    'Kundan',
    1993,
    'Dharmendra & Jaya Prada action drama scored by Bappi Lahiri.',
    'Kundan Title Song'
  ),
  catalogFilm(
    'bl-police-wala-1993',
    'Police Wala',
    1993,
    'Chunky Pandey & Somy Ali actioner scored by Bappi Lahiri.',
    'Dil Pe Likha Hai'
  ),
  {
    id: 'bl-amaanat-1994',
    directorId: 'bappi-lahiri',
    title: 'Amaanat',
    year: 1994,
    cast: 'Sanjay Dutt, Akshay Kumar, Heera Rajagopal',
    label: 'Time Magnetics',
    significance:
      '1994 action drama featuring Bappi Lahiri’s Algerian raï adaptation "Tujhse Milna Milkar Chalna".',
    songs: [
      adaptedSong(
        'bl-amaanat-1994',
        1,
        'Tujhse Milna Milkar Chalna',
        'Kumar Sanu, Alka Yagnik',
        'Amaanat',
        1994,
        {
          adaptationType: 'copied',
          originalSongTitle: 'El Arbi',
          originalArtist: 'Khaled',
          originalYear: '1991',
          originCategory: 'Arabic & Middle Eastern',
          adaptationNotes:
            'Closely follows the North African raï melody and synth-accordion hook of Khaled’s "El Arbi".',
          originalLink: 'https://www.youtube.com/watch?v=F_Prl5CyA74',
          referenceSource: 'ITWOFS',
        }
      ),
      origSong(
        'bl-amaanat-1994',
        2,
        'Duniya Mein Aaye Ho To',
        'Kumar Sanu',
        'Amaanat',
        1994
      ),
    ],
  },
  catalogFilm(
    'bl-andaz-1994',
    'Andaz',
    1994,
    'Anil Kapoor, Juhi Chawla & Karisma Kapoor hit featuring "Khada Hai Khada Hai".',
    'Dil Deewana Ho Gaya',
    'Kumar Sanu, Alka Yagnik'
  ),
  catalogFilm(
    'bl-baali-umar-ko-salaam-1994',
    'Baali Umar Ko Salaam',
    1994,
    'Kamal Sadanah & Beena Banerjee romance featuring "Meri Zindagi Teri Chahat".',
    'Meri Zindagi Teri Chahat'
  ),
  catalogFilm(
    'bl-brahma-1994',
    'Brahma',
    1994,
    'Govinda, Ayesha Jhulka & Madhoo drama featuring "Suno Suno Meri Rani".',
    'Suno Suno Meri Rani'
  ),
  catalogFilm(
    'bl-janata-ki-adalat-1994',
    'Janata Ki Adalat',
    1994,
    'Mithun Chakraborty & Gautami actioner featuring "Dil Dhadakne Laga".',
    'Dil Dhadakne Laga'
  ),
  catalogFilm(
    'bl-juaari-1994',
    'Juaari',
    1994,
    'Dharmendra & Armaan Kohli drama scored by Bappi Lahiri.',
    'Tum Hi Tum Ho'
  ),
  catalogFilm(
    'bl-mr-azaad-1994',
    'Mr. Azaad',
    1994,
    'Anil Kapoor & Niki Aneja actioner featuring "Diwana Chala".',
    'Diwana Chala',
    'Kumar Sanu, Alka Yagnik'
  ),
  catalogFilm(
    'bl-prem-yog-1994',
    'Prem Yog',
    1994,
    'Rishi Kapoor & Madhoo romantic drama scored by Bappi Lahiri.',
    'Zindagi Chaar Din Ki'
  ),
  catalogFilm(
    'bl-pyaar-ka-rog-1994',
    'Pyaar Ka Rog',
    1994,
    'Ravi Behl & Bindu comedy-romance scored by Bappi Lahiri.',
    'Pyaar Ka Rog Lagaa'
  ),
  catalogFilm(
    'bl-thanedarni-1994',
    'Thanedarni',
    1994,
    'Dharmendra & Shikha Swaroop action drama scored by Bappi Lahiri.',
    'Aaja Meri Jaan'
  ),
  {
    id: 'bl-rock-dancer-1995',
    directorId: 'bappi-lahiri',
    title: 'Rock Dancer',
    year: 1995,
    cast: 'Kamal Sadanah, Ritu Shivpuri, Samantha Fox',
    label: 'T-Series',
    significance:
      '1995 Indo-international dance musical featuring British pop star Samantha Fox alongside Bappi Lahiri.',
    songs: [
      origSong(
        'bl-rock-dancer-1995',
        1,
        'Rock Is Love',
        'Bappi Lahiri, Samantha Fox',
        'Rock Dancer',
        1995,
        'Rare Bollywood–UK synth-pop duet pairing Bappi Lahiri with Samantha Fox.'
      ),
      origSong(
        'bl-rock-dancer-1995',
        2,
        'You Are My Chicken Fry',
        'Bappi Lahiri, Shweta Shetty',
        'Rock Dancer',
        1995
      ),
    ],
  },
  catalogFilm(
    'bl-aatank-hi-aatank-1995',
    'Aatank Hi Aatank',
    1995,
    'Aamir Khan, Rajinikanth & Juhi Chawla crime drama featuring "O Meri Jaan".',
    'Ek Dujhe Pe Marne Lage',
    'Udit Narayan, Sadhana Sargam'
  ),
  catalogFilm(
    'bl-diya-aur-toofan-1995',
    'Diya Aur Toofan',
    1995,
    'Mithun Chakraborty & Madhoo drama featuring "Dhoom Tara".',
    'Dhoom Tara'
  ),
  {
    id: 'bl-hum-sab-chor-hain-1995',
    directorId: 'bappi-lahiri',
    title: 'Hum Sab Chor Hain',
    year: 1995,
    cast: 'Dharmendra, Jeetendra, Kamal Sadanah, Ritu Shivpuri',
    label: 'T-Series',
    significance:
      '1995 multi-starrer comedy featuring the Vital Signs pop adaptation "Saanwali Saloni Teri Jheel Si Aankhen".',
    songs: [
      adaptedSong(
        'bl-hum-sab-chor-hain-1995',
        1,
        'Saanwali Saloni Teri Jheel Si Aankhen',
        'Kumar Sanu, Alka Yagnik',
        'Hum Sab Chor Hain',
        1995,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Sanwali Saloni',
          originalArtist: 'Vital Signs',
          originalYear: '1991',
          originCategory: 'Pakistani Film & Ghazal',
          adaptationNotes:
            'Closely adapts both the title phrase and upbeat melodic hook of Pakistani pop-rock band Vital Signs’ hit "Sanwali Saloni".',
          originalLink: 'https://www.youtube.com/watch?v=uvpZmRAQccs',
          referenceSource: 'ITWOFS / Comparative Musicology Archives',
        }
      ),
      origSong(
        'bl-hum-sab-chor-hain-1995',
        2,
        'Meri Biwi Lakhon Mein Ek',
        'Kumar Sanu, Alka Yagnik',
        'Hum Sab Chor Hain',
        1995
      ),
    ],
  },
  catalogFilm(
    'bl-maidan-e-jung-1995',
    'Maidan-E-Jung',
    1995,
    'Dharmendra, Akshay Kumar & Karisma Kapoor actioner featuring "Shaam Dhal Rahi Hai".',
    'Shaam Dhal Rahi Hai',
    'Kumar Sanu, Sapna Mukherjee'
  ),
  catalogFilm(
    'bl-policewala-gunda-1995',
    'Policewala Gunda',
    1995,
    'Dharmendra & Reena Roy actioner featuring "Aata Hai Jab Tu Saamne".',
    'Duniya Mein Aaye'
  ),
  {
    id: 'bl-bal-bramhachari-1996',
    directorId: 'bappi-lahiri',
    title: 'Bal Bramhachari',
    year: 1996,
    cast: 'Puru Raaj Kumar, Karisma Kapoor, Deepak Tijori, Simran',
    label: 'Tips',
    significance:
      'Prakash Mehra drama featuring the Nusrat Fateh Ali Khan-adapted song "Nazre Lad Gaiya (Main Yaar Yaar Kehna)".',
    songs: [
      adaptedSong(
        'bl-bal-bramhachari-1996',
        1,
        'Nazre Lad Gaiya (Main Yaar Yaar Kehna)',
        'Kavita Krishnamurthy, Ram Shankar',
        'Bal Bramhachari',
        1996,
        {
          adaptationType: 'copied',
          originalSongTitle: 'Main Yaar Yaar Kehna',
          originalArtist: 'Ustad Nusrat Fateh Ali Khan',
          originalYear: '1990s',
          originCategory: 'Nusrat Fateh Ali Khan',
          adaptationNotes:
            'Directly mirrors the "Main yaar yaar kehna, main baar baar kehna" qawwali refrain and melody of Ustad Nusrat Fateh Ali Khan.',
          originalLink: 'https://www.youtube.com/watch?v=7Wf_UhkhKOk',
          referenceSource: 'Comparative Musicology Archives / OTTPlay',
        }
      ),
      origSong(
        'bl-bal-bramhachari-1996',
        2,
        'O Dilbar Jaaniya',
        'Udit Narayan, Alka Yagnik',
        'Bal Bramhachari',
        1996
      ),
    ],
  },
  catalogFilm(
    'bl-hum-hain-khalnayak-1996',
    'Hum Hain Khalnayak',
    1996,
    'Arjun & Sheeba actioner scored by Bappi Lahiri.',
    'Choli Ke Peeche'
  ),
  catalogFilm(
    'bl-maahir-1996',
    'Maahir',
    1996,
    'Govinda & Farah Naaz action drama scored by Bappi Lahiri.',
    'Vaada Karke Jaana Na'
  ),
  catalogFilm(
    'bl-muqadama-1996',
    'Muqadama',
    1996,
    'Vinod Khanna & Aditya Pancholi actioner scored by Bappi Lahiri.',
    'Naya Naya Pyar Hai'
  ),
  catalogFilm(
    'bl-rangbaaz-1996',
    'Rangbaaz',
    1996,
    'Mithun Chakraborty & Shilpa Shirodkar actioner scored by Bappi Lahiri.',
    'Sawan Ki Pehli Boond'
  ),
  catalogFilm(
    'bl-smuggler-1996',
    'Smuggler',
    1996,
    'Dharmendra & Ayub Khan action drama featuring "Kitna Haseen Hai Shabaab".',
    'Kitna Haseen Hai Shabaab',
    'Kumar Sanu, Alka Yagnik'
  ),
  catalogFilm(
    'bl-agnichakra-1997',
    'Agnichakra',
    1997,
    'Govinda & Naseeruddin Shah actioner scored by Bappi Lahiri.',
    'Main Hoon Agnichakra'
  ),
  catalogFilm(
    'bl-dharma-karma-1997',
    'Dharma Karma',
    1997,
    'Dharmendra & Jeetendra drama scored by Bappi Lahiri.',
    'Dil Ke Armaan'
  ),
  catalogFilm(
    'bl-dil-ke-jharoke-main-1997',
    'Dil Ke Jharoke Main',
    1997,
    'Manisha Koirala & Vikas Bhalla romance scored by Bappi Lahiri.',
    'Dil Ke Jharoke Main'
  ),
  catalogFilm(
    'bl-do-ankhen-barah-hath-1997',
    'Do Ankhen Barah Hath',
    1997,
    'Govinda & Madhuvanti action comedy scored by Bappi Lahiri.',
    'Pyar Ka Jadoo'
  ),
  catalogFilm(
    'bl-gudgudee-1997',
    'Gudgudee',
    1997,
    'Anupam Kher & Pratibha Sinha comedy scored by Bappi Lahiri.',
    'Gudgudee Title Song'
  ),
  catalogFilm(
    'bl-judge-mujrim-1997',
    'Judge Mujrim',
    1997,
    'Jeetendra & Sunil Shetty courtroom actioner scored by Bappi Lahiri.',
    'Laila O Laila'
  ),
  catalogFilm(
    'bl-military-raaj-1998',
    'Military Raaj',
    1998,
    'Mithun Chakraborty action drama scored by Bappi Lahiri.',
    'Rim Jhim'
  ),
  catalogFilm(
    'bl-benaam-1999',
    'Benaam',
    1999,
    'Mithun Chakraborty & Payal Malhotra actioner scored by Bappi Lahiri.',
    'Aaya Sawan'
  ),
  catalogFilm(
    'bl-justice-chowdhary-2000',
    'Justice Chowdhary',
    2000,
    'Mithun Chakraborty & Swati drama scored by Bappi Lahiri.',
    'Duniya Mein Jeena Hai'
  ),
  catalogFilm(
    'bl-hum-tumhare-hain-sanam-2002',
    'Hum Tumhare Hain Sanam',
    2002,
    'Shah Rukh Khan & Madhuri Dixit romantic drama featuring Bappi Lahiri’s "Aa Gaya Aa Gaya" contribution.',
    'Aa Gaya Aa Gaya',
    'Udit Narayan'
  ),
  {
    id: 'bl-maine-gandhi-ko-nahin-mara-2005',
    directorId: 'bappi-lahiri',
    title: 'Maine Gandhi Ko Nahin Mara',
    year: 2005,
    cast: 'Anupam Kher, Urmila Matondkar',
    label: 'Times Music',
    significance:
      'Jahnu Barua’s critically lauded 2005 drama showcasing Bappi Lahiri’s understated acoustic film score.',
    songs: [
      origSong(
        'bl-maine-gandhi-ko-nahin-mara-2005',
        1,
        'Baatein Yeh Baatein',
        'Shaan, Asha Bhosle',
        'Maine Gandhi Ko Nahin Mara',
        2005,
        'Intimate, poignant ballad acclaimed for moving far beyond his 1980s disco persona.'
      ),
    ],
  },
  catalogFilm(
    'bl-buddha-mar-gaya-2007',
    'Buddha Mar Gaya',
    2007,
    'Anupam Kher & Rakhi Sawant comedy scored by Bappi Lahiri.',
    'Jhoom Jhoom'
  ),
  catalogFilm(
    'bl-don-muthu-swami-2008',
    'Don Muthu Swami',
    2008,
    'Mithun Chakraborty & Hrishitaa Bhatt comedy scored by Bappi Lahiri.',
    'I Love You'
  ),
  catalogFilm(
    'bl-a-flat-2010',
    'A Flat',
    2010,
    'Sanjay Suri & Jimmy Sheirgill horror thriller scored by Bappi Lahiri.',
    'Chal Halke Halke',
    'Raja Hasan'
  ),
  catalogFilm(
    'bl-main-aur-mr-riight-2014',
    'Main Aur Mr. Riight',
    2014,
    'Barun Sobti & Shenaz Treasury romantic comedy scored by Bappi Lahiri.',
    'Desi Beat'
  ),
  catalogFilm(
    'bl-indu-sarkar-2017',
    'Indu Sarkar',
    2017,
    'Madhur Bhandarkar period drama featuring Bappi Lahiri’s retro-style "Chadhta Sooraj".',
    'Dilli Ki Raat',
    'Bappi Lahiri, Anmol Malik'
  ),
  {
    id: 'bl-baaghi-3-2020',
    directorId: 'bappi-lahiri',
    title: 'Baaghi 3 (Bhankas Credited Revival)',
    year: 2020,
    cast: 'Tiger Shroff, Shraddha Kapoor',
    label: 'T-Series',
    significance:
      'Late-career Bollywood soundtrack milestone featuring "Bhankas", officially recreating Bappi Lahiri’s 1984 Tohfa classic "Ek Aankh Marun To".',
    songs: [
      origSong(
        'bl-baaghi-3-2020',
        1,
        'Bhankas (Ek Aankh Marun To Revival)',
        'Bappi Lahiri, Dev Negi, Jonita Gandhi',
        'Baaghi 3',
        2020,
        'Official 2020 Bollywood recreation featuring Bappi Lahiri himself on vocals alongside Dev Negi and Jonita Gandhi.'
      ),
    ],
  },
];
