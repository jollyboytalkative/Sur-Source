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

export const SHANKAR_JAIKISHAN_MOVIES: MovieEntry[] = [
  // =========================================================================
  // 1949 – 1959: R.K. Films Debut & Golden-Era Ascent
  // =========================================================================
  {
    id: 'sj-barsaat-1949',
    directorId: 'shankar-jaikishan',
    title: 'Barsaat',
    year: 1949,
    cast: 'Raj Kapoor, Nargis, Prem Nath, Nimmi',
    label: 'HMV / Saregama',
    significance: 'Historic debut for R.K. Films that redefined Hindi film orchestration and string interludes',
    songs: [
      song(
        'sj-bar49-1',
        'sj-barsaat-1949',
        'Chhod Gaye Balam Mujhe Haaye Akela Chhod Gaye',
        'Lata Mangeshkar, Mukesh',
        'Barsaat',
        1949,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'The Anniversary Waltz',
          originalArtist: 'Al Jolson / Bing Crosby (Al Dubin & Dave Franklin)',
          originalYear: '1941',
          adaptationNotes:
            'Opening piano waltz prelude adapts the harmonic cadence of The Anniversary Waltz before shifting into Raag Bhairavi.',
          originalLink: 'https://www.youtube.com/watch?v=zs-z0z483sw',
          referenceSource: 'Film Music Archives / Indian Film History',
        }
      ),
      song(
        'sj-bar49-2',
        'sj-barsaat-1949',
        'Hawa Mein Udta Jaaye Mera Laal Dupatta Malmal Ka',
        'Lata Mangeshkar',
        'Barsaat',
        1949,
        { lyricist: 'Ramesh Shastri' }
      ),
      song(
        'sj-bar49-3',
        'sj-barsaat-1949',
        'Jiya Beqarar Hai Chhayi Bahaar Hai',
        'Lata Mangeshkar',
        'Barsaat',
        1949,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-bar49-4',
        'sj-barsaat-1949',
        'Barsaat Mein Humse Mile Tum Sajan',
        'Lata Mangeshkar',
        'Barsaat',
        1949,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-awaara-1951',
    directorId: 'shankar-jaikishan',
    title: 'Awaara',
    year: 1951,
    cast: 'Raj Kapoor, Nargis, Prithviraj Kapoor',
    label: 'HMV / Saregama',
    significance: 'Global musical landmark featuring Awaara Hoon and the iconic nine-minute dream sequence',
    songs: [
      song(
        'sj-awa51-1',
        'sj-awaara-1951',
        'Ghar Aaya Mera Pardesi',
        'Lata Mangeshkar, Manna Dey',
        'Awaara',
        1951,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Ala Baladi El Mahboub',
          originalArtist: 'Umm Kulthum',
          originalYear: '1935',
          adaptationNotes:
            'Dream-sequence melody and dramatic vocal phrasing draw directly from Egyptian legend Umm Kulthum’s 1935 classic.',
          originalLink: 'https://www.youtube.com/watch?v=nzW05lhEPKs',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-awa51-2',
        'sj-awaara-1951',
        'Awaara Hoon',
        'Mukesh',
        'Awaara',
        1951,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-awa51-3',
        'sj-awaara-1951',
        'Dum Bhar Jo Udhar Munh Phere',
        'Lata Mangeshkar, Mukesh',
        'Awaara',
        1951,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-badal-1951',
    directorId: 'shankar-jaikishan',
    title: 'Badal',
    year: 1951,
    cast: 'Prem Nath, Madhubala, Purnima',
    songs: [
      song(
        'sj-bad51-1',
        'sj-badal-1951',
        'Unse Pyar Ho Gaya Dil Bekarar Ho Gaya',
        'Lata Mangeshkar',
        'Badal',
        1951,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-bad51-2',
        'sj-badal-1951',
        'Ae Dil Na Mujhse Chhupa',
        'Lata Mangeshkar, Mukesh',
        'Badal',
        1951,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-kali-ghata-1951',
    directorId: 'shankar-jaikishan',
    title: 'Kali Ghata',
    year: 1951,
    cast: 'Kishore Sahu, Bina Rai, Asha Mathur',
    songs: [
      song(
        'sj-kg51-1',
        'sj-kali-ghata-1951',
        'Humse Na Poochho Koi Pyar Kya Hai',
        'Lata Mangeshkar',
        'Kali Ghata',
        1951,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-nagina-1951',
    directorId: 'shankar-jaikishan',
    title: 'Nagina',
    year: 1951,
    cast: 'Nasir Khan, Nutan, Bipin Gupta',
    songs: [
      song(
        'sj-nag51-1',
        'sj-nagina-1951',
        'Toone Haye Mere Zakhme Jigar Ko Chhu Liya',
        'Lata Mangeshkar',
        'Nagina',
        1951,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-daag-1952',
    directorId: 'shankar-jaikishan',
    title: 'Daag',
    year: 1952,
    cast: 'Dilip Kumar, Nimmi, Usha Kiran',
    significance: 'Dilip Kumar tragedy featuring Talat Mahmood’s unforgettable ghazal-style hits',
    songs: [
      song(
        'sj-daag52-1',
        'sj-daag-1952',
        'Ae Mere Dil Kahin Aur Chal',
        'Talat Mahmood',
        'Daag',
        1952,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-daag52-2',
        'sj-daag-1952',
        'Koi Nahin Mera Is Duniya Mein',
        'Talat Mahmood',
        'Daag',
        1952,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-parbat-1952',
    directorId: 'shankar-jaikishan',
    title: 'Parbat',
    year: 1952,
    cast: 'Prem Nath, Nutan, Purnima',
    songs: [
      song(
        'sj-par52-1',
        'sj-parbat-1952',
        'Haye Mera Dil Le Gaya Koi Aake Ishare Se',
        'Lata Mangeshkar',
        'Parbat',
        1952,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-poonam-1952',
    directorId: 'shankar-jaikishan',
    title: 'Poonam',
    year: 1952,
    cast: 'Ashok Kumar, Kamini Kaushal',
    songs: [
      song(
        'sj-poo52-1',
        'sj-poonam-1952',
        'Chanda Ki Chandni Mein Jhoom Jhoom Ke',
        'Lata Mangeshkar',
        'Poonam',
        1952,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-aah-1953',
    directorId: 'shankar-jaikishan',
    title: 'Aah',
    year: 1953,
    cast: 'Raj Kapoor, Nargis, Vijayalaxmi',
    significance: 'Trilingual R.K. Films classic (Hindi Aah, Tamil Avan, Telugu Premalekhalu)',
    songs: [
      song(
        'sj-aah53-1',
        'sj-aah-1953',
        'Raja Ki Aayegi Baraat',
        'Lata Mangeshkar',
        'Aah',
        1953,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-aah53-2',
        'sj-aah-1953',
        'Jaane Na Nazar Pehchane Jigar',
        'Lata Mangeshkar, Mukesh',
        'Aah',
        1953,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-aah53-3',
        'sj-aah-1953',
        'Aaja Re Ab Mera Dil Pukara',
        'Lata Mangeshkar, Mukesh',
        'Aah',
        1953,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-avan-1953',
    directorId: 'shankar-jaikishan',
    title: 'Avan (Tamil)',
    year: 1953,
    cast: 'Raj Kapoor, Nargis',
    significance: 'Tamil version of R.K. Films’ Aah scored by Shankar–Jaikishan',
    songs: [
      song(
        'sj-avan53-1',
        'sj-avan-1953',
        'Ekantha Nilaiyilum',
        'Jikki, A.M. Rajah',
        'Avan Tamil',
        1953
      ),
    ],
  },
  {
    id: 'sj-premalekhalu-1953',
    directorId: 'shankar-jaikishan',
    title: 'Premalekhalu (Telugu)',
    year: 1953,
    cast: 'Raj Kapoor, Nargis',
    significance: 'Telugu version of Aah scored by Shankar–Jaikishan',
    songs: [
      song(
        'sj-pl53-1',
        'sj-premalekhalu-1953',
        'Neerajanaale Neelala Kannula',
        'Jikki, A.M. Rajah',
        'Premalekhalu Telugu',
        1953
      ),
    ],
  },
  {
    id: 'sj-aas-1953',
    directorId: 'shankar-jaikishan',
    title: 'Aas',
    year: 1953,
    cast: 'Shekhar, Kamini Kaushal, Om Prakash',
    songs: [
      song(
        'sj-aas53-1',
        'sj-aas-1953',
        'Dekho Ji Dekho Mera Dil Le Ke',
        'Lata Mangeshkar',
        'Aas',
        1953,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-aurat-1953',
    directorId: 'shankar-jaikishan',
    title: 'Aurat',
    year: 1953,
    cast: 'Prem Nath, Bina Rai, Purnima',
    songs: [
      song(
        'sj-aur53-1',
        'sj-aurat-1953',
        'Dard-E-Ulfat Chhupaun Kahan',
        'Lata Mangeshkar',
        'Aurat',
        1953,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-naya-ghar-1953',
    directorId: 'shankar-jaikishan',
    title: 'Naya Ghar',
    year: 1953,
    cast: 'Shekhar, Geeta Bali',
    songs: [
      song(
        'sj-ng53-1',
        'sj-naya-ghar-1953',
        'Choom Choom Chhananana Baaje Payal',
        'Lata Mangeshkar',
        'Naya Ghar',
        1953,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-patita-1953',
    directorId: 'shankar-jaikishan',
    title: 'Patita',
    year: 1953,
    cast: 'Dev Anand, Usha Kiran, Agha',
    songs: [
      song(
        'sj-pat53-1',
        'sj-patita-1953',
        'Yaad Kiya Dil Ne Kahan Ho Tum',
        'Hemant Kumar, Lata Mangeshkar',
        'Patita',
        1953,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-pat53-2',
        'sj-patita-1953',
        'Andhe Jahan Ke Andhe Raste',
        'Talat Mahmood',
        'Patita',
        1953,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-shikast-1953',
    directorId: 'shankar-jaikishan',
    title: 'Shikast',
    year: 1953,
    cast: 'Dilip Kumar, Nalini Jaywant',
    songs: [
      song(
        'sj-shi53-1',
        'sj-shikast-1953',
        'Kare Badra Tu Na Jaa',
        'Lata Mangeshkar',
        'Shikast',
        1953,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-boot-polish-1954',
    directorId: 'shankar-jaikishan',
    title: 'Boot Polish',
    year: 1954,
    cast: 'Rattan Kumar, Baby Naaz, David',
    significance: 'Iconic R.K. Films social classic anchored by Nanhe Munne Bachche',
    songs: [
      song(
        'sj-bp54-1',
        'sj-boot-polish-1954',
        'Nanhe Munne Bachche Teri Mutthi Mein Kya Hai',
        'Mohammed Rafi, Asha Bhosle',
        'Boot Polish',
        1954,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-bp54-2',
        'sj-boot-polish-1954',
        'Lapak Jhapak Tu Aa Re Badarwa',
        'Manna Dey',
        'Boot Polish',
        1954,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-badshah-1954',
    directorId: 'shankar-jaikishan',
    title: 'Badshah',
    year: 1954,
    cast: 'Pradeep Kumar, Mala Sinha, Usha Kiran',
    songs: [
      song(
        'sj-bad54-1',
        'sj-badshah-1954',
        'Rula Kar Chal Diye Ek Din',
        'Hemant Kumar',
        'Badshah',
        1954,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-mayurpankh-1954',
    directorId: 'shankar-jaikishan',
    title: 'Mayurpankh',
    year: 1954,
    cast: 'Kishore Sahu, Sumitra Devi, Odette Ferguson',
    songs: [
      song(
        'sj-may54-1',
        'sj-mayurpankh-1954',
        'Khushiyan Hi Khushiyan Hon Daaman Mein',
        'Lata Mangeshkar',
        'Mayurpankh',
        1954,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-pooja-1954',
    directorId: 'shankar-jaikishan',
    title: 'Pooja',
    year: 1954,
    cast: 'Bharat Bhushan, Purnima',
    songs: [
      song(
        'sj-poo54-1',
        'sj-pooja-1954',
        'Holi Aayi Pyari Pyari',
        'Mohammed Rafi, Lata Mangeshkar',
        'Pooja',
        1954,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-seema-1955',
    directorId: 'shankar-jaikishan',
    title: 'Seema',
    year: 1955,
    cast: 'Balraj Sahni, Nutan',
    significance: 'Celebrated social drama featuring Tu Pyar Ka Sagar Hai',
    songs: [
      song(
        'sj-see55-1',
        'sj-seema-1955',
        'Tu Pyar Ka Sagar Hai',
        'Manna Dey',
        'Seema',
        1955,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-see55-2',
        'sj-seema-1955',
        'Suno Chhoti Si Gudiya Ki Lambi Kahani',
        'Lata Mangeshkar',
        'Seema',
        1955,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-shree-420-1955',
    directorId: 'shankar-jaikishan',
    title: 'Shree 420',
    year: 1955,
    cast: 'Raj Kapoor, Nargis, Nadira',
    label: 'HMV / Saregama',
    significance: 'Evergreen R.K. Films masterpiece with Mera Joota Hai Japani and Pyar Hua Iqrar Hua',
    songs: [
      song(
        'sj-s420-1',
        'sj-shree-420-1955',
        'Mera Joota Hai Japani',
        'Mukesh',
        'Shree 420',
        1955,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-s420-2',
        'sj-shree-420-1955',
        'Pyar Hua Iqrar Hua',
        'Lata Mangeshkar, Manna Dey',
        'Shree 420',
        1955,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-s420-3',
        'sj-shree-420-1955',
        'Ramaiya Vastavaiya',
        'Mohammed Rafi, Lata Mangeshkar, Mukesh',
        'Shree 420',
        1955,
        {
          lyricist: 'Shailendra',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes: 'Hook phrase incorporates a traditional Telugu expression recalled by Shankar from Hyderabad.',
        }
      ),
      song(
        'sj-s420-4',
        'sj-shree-420-1955',
        'Mud Mud Ke Na Dekh',
        'Asha Bhosle, Manna Dey',
        'Shree 420',
        1955,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-basant-bahar-1956',
    directorId: 'shankar-jaikishan',
    title: 'Basant Bahar',
    year: 1956,
    cast: 'Bharat Bhushan, Nimmi, Kumkum',
    significance: 'Classical landmark steeped in Hindustani ragas (Bhairavi, Malkauns, Darbari Kanada)',
    songs: [
      song(
        'sj-bb56-1',
        'sj-basant-bahar-1956',
        'Ketaki Gulab Juhi',
        'Manna Dey, Bhimsen Joshi',
        'Basant Bahar',
        1956,
        {
          lyricist: 'Shailendra',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes: 'Set to Raag Basant Bahar; features legendary classical jugalbandi with Pt. Bhimsen Joshi.',
        }
      ),
      song(
        'sj-bb56-2',
        'sj-basant-bahar-1956',
        'Sur Na Saje Kya Gaoon Main',
        'Manna Dey',
        'Basant Bahar',
        1956,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-chori-chori-1956',
    directorId: 'shankar-jaikishan',
    title: 'Chori Chori',
    year: 1956,
    cast: 'Raj Kapoor, Nargis',
    label: 'HMV / Saregama',
    significance: 'Filmfare Award Winner — Best Music Director (1956)',
    songs: [
      song(
        'sj-cc56-1',
        'sj-chori-chori-1956',
        'Aaja Sanam Madhur Chandni Mein Hum',
        'Lata Mangeshkar, Manna Dey',
        'Chori Chori',
        1956,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Tarantella Napoletana',
          originalArtist: 'Traditional Neapolitan Folk',
          originalYear: 'Traditional',
          adaptationNotes:
            'Opening sequence and lilting triple-meter pulse slow down and re-orchestrate the traditional Italian Tarantella folk dance.',
          originalLink: 'https://www.youtube.com/watch?v=6885IgfL8sw',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-cc56-2',
        'sj-chori-chori-1956',
        'Panchhi Banoon Udti Phiroon',
        'Lata Mangeshkar',
        'Chori Chori',
        1956,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Comin’ Thro’ the Rye',
          originalArtist: 'Traditional Scottish Folk (Robert Burns)',
          originalYear: 'Traditional',
          adaptationNotes:
            'Playful refrain melody draws clear inspiration from the classic Scottish folk song Comin’ Thro’ the Rye.',
          originalLink: 'https://www.youtube.com/watch?v=l1_YsTiYTsw',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-cc56-3',
        'sj-chori-chori-1956',
        'Yeh Raat Bheegi Bheegi',
        'Lata Mangeshkar, Manna Dey',
        'Chori Chori',
        1956,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-cc56-4',
        'sj-chori-chori-1956',
        'Rasik Balma',
        'Lata Mangeshkar',
        'Chori Chori',
        1956,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-halaku-1956',
    directorId: 'shankar-jaikishan',
    title: 'Halaku',
    year: 1956,
    cast: 'Ajit, Meena Kumari, Pran, Helen',
    songs: [
      song(
        'sj-hal56-1',
        'sj-halaku-1956',
        'Aaja Ke Intezar Mein Jaane Ko Hai Bahaar Bhi',
        'Lata Mangeshkar, Mohammed Rafi',
        'Halaku',
        1956,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-kismat-ka-khel-1956',
    directorId: 'shankar-jaikishan',
    title: 'Kismat Ka Khel',
    year: 1956,
    cast: 'Sunil Dutt, Vyjayanthimala',
    songs: [
      song(
        'sj-kkk56-1',
        'sj-kismat-ka-khel-1956',
        'Ae Zindagi Ke Rahi',
        'Lata Mangeshkar',
        'Kismat Ka Khel',
        1956,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-new-delhi-1956',
    directorId: 'shankar-jaikishan',
    title: 'New Delhi',
    year: 1956,
    cast: 'Kishore Kumar, Vyjayanthimala',
    songs: [
      song(
        'sj-nd56-1',
        'sj-new-delhi-1956',
        'Nakhrewali Dekhne Mein Dekh Lo Hai Kaisi Bholi Bhali',
        'Kishore Kumar',
        'New Delhi',
        1956,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-patrani-1956',
    directorId: 'shankar-jaikishan',
    title: 'Patrani',
    year: 1956,
    cast: 'Pradeep Kumar, Vyjayanthimala',
    songs: [
      song(
        'sj-patr56-1',
        'sj-patrani-1956',
        'Saat Samundar Paar',
        'Lata Mangeshkar',
        'Patrani',
        1956,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-rajhath-1956',
    directorId: 'shankar-jaikishan',
    title: 'Rajhath',
    year: 1956,
    cast: 'Pradeep Kumar, Madhubala, Sohrab Modi',
    songs: [
      song(
        'sj-raj56-1',
        'sj-rajhath-1956',
        'Aaye Bahaar Ban Ke',
        'Mohammed Rafi',
        'Rajhath',
        1956,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-begunaah-1957',
    directorId: 'shankar-jaikishan',
    title: 'Begunaah',
    year: 1957,
    cast: 'Kishore Kumar, Shakila',
    songs: [
      song(
        'sj-beg57-1',
        'sj-begunaah-1957',
        'Ae Pyase Dil Bezuban Tujhko Le Jaoon Kahan',
        'Mukesh',
        'Begunaah',
        1957,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-kathputli-1957',
    directorId: 'shankar-jaikishan',
    title: 'Kathputli',
    year: 1957,
    cast: 'Balraj Sahni, Vyjayanthimala',
    songs: [
      song(
        'sj-kat57-1',
        'sj-kathputli-1957',
        'Bol Ri Kathputli Dori Kaun Sang Bandhi',
        'Lata Mangeshkar',
        'Kathputli',
        1957,
        {
          lyricist: 'Shailendra',
          adaptationType: 'inspired',
          originCategory: 'African & World Folk',
          originalSongTitle: 'Kayes Ba',
          originalArtist: 'Boubacar Traoré',
          originalYear: '1963 (parallel motif)',
          adaptationNotes:
            'Documented on ITWOFS for its striking, near-identical melodic contour shared with Malian guitarist Boubacar Traoré’s Kayes Ba.',
          originalLink: 'https://www.youtube.com/watch?v=W2TTKU3qBuU',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'sj-kat57-2',
        'sj-kathputli-1957',
        'Manzil Wahi Hai Pyar Ki',
        'Subir Sen',
        'Kathputli',
        1957,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-baaghi-sipaahi-1958',
    directorId: 'shankar-jaikishan',
    title: 'Baaghi Sipaahi',
    year: 1958,
    cast: 'Madhubala, Ranjan, Purnima',
    songs: [
      song(
        'sj-bs58-1',
        'sj-baaghi-sipaahi-1958',
        'Sama Yeh Pyar Ka Bahar Ke Yeh Mele',
        'Asha Bhosle, Manna Dey',
        'Baaghi Sipaahi',
        1958,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-yahudi-1958',
    directorId: 'shankar-jaikishan',
    title: 'Yahudi',
    year: 1958,
    cast: 'Dilip Kumar, Meena Kumari, Sohrab Modi',
    significance: 'Bimal Roy epic; nominated for Filmfare Best Music Director (1958)',
    songs: [
      song(
        'sj-yah58-1',
        'sj-yahudi-1958',
        'Yeh Mera Diwanapan Hai',
        'Mukesh',
        'Yahudi',
        1958,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-yah58-2',
        'sj-yahudi-1958',
        'Meri Jaan Meri Jaan Sunday Ke Sunday',
        'Lata Mangeshkar',
        'Yahudi',
        1958,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-anari-1959',
    directorId: 'shankar-jaikishan',
    title: 'Anari',
    year: 1959,
    cast: 'Raj Kapoor, Nutan, Lalita Pawar',
    label: 'HMV / Saregama',
    significance: 'Filmfare Award Winner — Best Music Director (1959)',
    songs: [
      song(
        'sj-ana59-1',
        'sj-anari-1959',
        'Sab Kuchh Seekha Humne Na Seekhi Hoshiyari',
        'Mukesh',
        'Anari',
        1959,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-ana59-2',
        'sj-anari-1959',
        'Kisi Ki Muskurahaton Pe Ho Nisar',
        'Mukesh',
        'Anari',
        1959,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-ana59-3',
        'sj-anari-1959',
        'Dil Ki Nazar Se Nazaron Ki Had Se',
        'Lata Mangeshkar, Mukesh',
        'Anari',
        1959,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-chhoti-bahen-1959',
    directorId: 'shankar-jaikishan',
    title: 'Chhoti Bahen',
    year: 1959,
    cast: 'Balraj Sahni, Nanda, Rehman',
    songs: [
      song(
        'sj-cb59-1',
        'sj-chhoti-bahen-1959',
        'Bhaiya Mere Rakhi Ke Bandhan Ko Nibhana',
        'Lata Mangeshkar',
        'Chhoti Bahen',
        1959,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-cb59-2',
        'sj-chhoti-bahen-1959',
        'Main Rangeela Pyar Ka Rahi',
        'Lata Mangeshkar, Subir Sen',
        'Chhoti Bahen',
        1959,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-kanhaiya-1959',
    directorId: 'shankar-jaikishan',
    title: 'Kanhaiya',
    year: 1959,
    cast: 'Raj Kapoor, Nutan',
    songs: [
      song(
        'sj-kan59-1',
        'sj-kanhaiya-1959',
        'Mujhe Tumse Kuchh Bhi Na Chahiye',
        'Mukesh',
        'Kanhaiya',
        1959,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-love-marriage-1959',
    directorId: 'shankar-jaikishan',
    title: 'Love Marriage',
    year: 1959,
    cast: 'Dev Anand, Mala Sinha',
    songs: [
      song(
        'sj-lm59-1',
        'sj-love-marriage-1959',
        'Dheere Dheere Chal Chand Gagan Mein',
        'Mohammed Rafi, Lata Mangeshkar',
        'Love Marriage',
        1959,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-main-nashe-mein-hoon-1959',
    directorId: 'shankar-jaikishan',
    title: 'Main Nashe Mein Hoon',
    year: 1959,
    cast: 'Raj Kapoor, Mala Sinha',
    songs: [
      song(
        'sj-mnmh59-1',
        'sj-main-nashe-mein-hoon-1959',
        'Hum Hain To Chand Aur Tare',
        'Mukesh',
        'Main Nashe Mein Hoon',
        1959,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-shararat-1959',
    directorId: 'shankar-jaikishan',
    title: 'Shararat',
    year: 1959,
    cast: 'Kishore Kumar, Meena Kumari, Raaj Kumar',
    songs: [
      song(
        'sj-shar59-1',
        'sj-shararat-1959',
        'Ajab Hai Dastan Teri Ae Zindagi',
        'Mohammed Rafi',
        'Shararat',
        1959,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-ujala-1959',
    directorId: 'shankar-jaikishan',
    title: 'Ujala',
    year: 1959,
    cast: 'Shammi Kapoor, Mala Sinha, Raaj Kumar',
    songs: [
      song(
        'sj-uja59-1',
        'sj-ujala-1959',
        'Jhoomta Mausam Mast Mahina',
        'Lata Mangeshkar, Manna Dey',
        'Ujala',
        1959,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },

  // =========================================================================
  // 1960 – 1969: Peak Orchestral Decade & Global Crossovers
  // =========================================================================
  {
    id: 'sj-college-girl-1960',
    directorId: 'shankar-jaikishan',
    title: 'College Girl',
    year: 1960,
    cast: 'Shammi Kapoor, Vyjayanthimala',
    songs: [
      song(
        'sj-cg60-1',
        'sj-college-girl-1960',
        'Pehla Pehla Pyar Ka Ishara',
        'Mohammed Rafi, Lata Mangeshkar',
        'College Girl',
        1960,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'sj-dil-apna-aur-preet-parai-1960',
    directorId: 'shankar-jaikishan',
    title: 'Dil Apna Aur Preet Parai',
    year: 1960,
    cast: 'Raaj Kumar, Meena Kumari, Nadira',
    label: 'HMV / Saregama',
    significance: 'Filmfare Award Winner — Best Music Director (1960)',
    songs: [
      song(
        'sj-daapp60-1',
        'sj-dil-apna-aur-preet-parai-1960',
        'Ajeeb Dastan Hai Yeh',
        'Lata Mangeshkar',
        'Dil Apna Aur Preet Parai',
        1960,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'My Lips Are Sealed',
          originalArtist: 'Jim Reeves',
          originalYear: '1956',
          adaptationNotes:
            'Core waltz melody and chord progression adapt Jim Reeves’ 1956 country-pop ballad, elevated by Sebastian D’Souza’s Hawaiian guitar and brass interludes.',
          originalLink: 'https://www.youtube.com/watch?v=USn5l66xvX8',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-daapp60-2',
        'sj-dil-apna-aur-preet-parai-1960',
        'Andaz Mera Mastana',
        'Lata Mangeshkar',
        'Dil Apna Aur Preet Parai',
        1960,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-ek-phool-char-kaante-1960',
    directorId: 'shankar-jaikishan',
    title: 'Ek Phool Char Kaante',
    year: 1960,
    cast: 'Sunil Dutt, Waheeda Rehman',
    songs: [
      song(
        'sj-epck60-1',
        'sj-ek-phool-char-kaante-1960',
        'Soch Rahi Thi',
        'Lata Mangeshkar',
        'Ek Phool Char Kaante',
        1960,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Piccolissima Serenata',
          originalArtist: 'Gianni Ferrio (Teddy Reno)',
          originalYear: '1957',
          adaptationNotes:
            'Lilting Italian serenade melody and upbeat phrasing adapt Gianni Ferrio’s 1957 hit Piccolissima Serenata.',
          originalLink: 'https://www.youtube.com/watch?v=Gij8qgP3vpk',
          referenceSource: 'Music Provenance Archives / ITWOFS',
        }
      ),
      song(
        'sj-epck60-2',
        'sj-ek-phool-char-kaante-1960',
        'Matwali Naar Thumak Thumak Chali Jaye',
        'Mukesh',
        'Ek Phool Char Kaante',
        1960,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-jis-desh-men-ganga-behti-hai-1960',
    directorId: 'shankar-jaikishan',
    title: 'Jis Desh Men Ganga Behti Hai',
    year: 1960,
    cast: 'Raj Kapoor, Padmini, Pran',
    label: 'HMV / Saregama',
    significance: 'R.K. Films blockbuster nominated for Filmfare Best Music Director',
    songs: [
      song(
        'sj-jdmgbh60-1',
        'sj-jis-desh-men-ganga-behti-hai-1960',
        'Aa Ab Laut Chalen',
        'Mukesh, Lata Mangeshkar',
        'Jis Desh Men Ganga Behti Hai',
        1960,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Ciao, Ciao Bambina (Piove)',
          originalArtist: 'Domenico Modugno',
          originalYear: '1959',
          adaptationNotes:
            'Dramatic chorus hook adapts Domenico Modugno’s 1959 Sanremo-winning Italian standard.',
          originalLink: 'https://www.youtube.com/watch?v=n0enVNAU5sY',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-jdmgbh60-2',
        'sj-jis-desh-men-ganga-behti-hai-1960',
        'Hothon Pe Sachai Rehti Hai',
        'Mukesh',
        'Jis Desh Men Ganga Behti Hai',
        1960,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-singapore-1960',
    directorId: 'shankar-jaikishan',
    title: 'Singapore',
    year: 1960,
    cast: 'Shammi Kapoor, Padmini, Maria Menado',
    songs: [
      song(
        'sj-sin60-1',
        'sj-singapore-1960',
        'Raasa Sayang Re',
        'Mohammed Rafi, Lata Mangeshkar',
        'Singapore',
        1960,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'African & World Folk',
          originalSongTitle: 'Rasa Sayang (Rasa Sayange)',
          originalArtist: 'Indonesian / Malay Moluccan Folk Tradition',
          originalYear: 'Traditional',
          adaptationNotes:
            'Direct adaptation of the traditional Southeast Asian / Moluccan folk song Rasa Sayang for the film’s Singapore setting.',
          originalLink: 'https://www.youtube.com/watch?v=kx41LzqDzaA',
          referenceSource: 'Music Provenance Archives / ITWOFS',
        }
      ),
      song(
        'sj-sin60-2',
        'sj-singapore-1960',
        'Yeh Shehar Bada Albela',
        'Mohammed Rafi, Lata Mangeshkar',
        'Singapore',
        1960,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-aas-ka-panchhi-1961',
    directorId: 'shankar-jaikishan',
    title: 'Aas Ka Panchhi',
    year: 1961,
    cast: 'Rajendra Kumar, Vyjayanthimala',
    songs: [
      song(
        'sj-akp61-1',
        'sj-aas-ka-panchhi-1961',
        'Tum Roothi Raho Main Manata Rahoon',
        'Mukesh, Lata Mangeshkar',
        'Aas Ka Panchhi',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-boy-friend-1961',
    directorId: 'shankar-jaikishan',
    title: 'Boy Friend',
    year: 1961,
    cast: 'Shammi Kapoor, Madhubala, Dharmendra',
    songs: [
      song(
        'sj-bf61-1',
        'sj-boy-friend-1961',
        'Aiga Aiga Yeh Kya Ho Gaya',
        'Asha Bhosle',
        'Boy Friend',
        1961,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Stupid Cupid',
          originalArtist: 'Connie Francis',
          originalYear: '1958',
          adaptationNotes:
            'Rock-and-roll swing rhythm and vocal hook adapt Connie Francis’ 1958 pop hit Stupid Cupid.',
          originalLink: 'https://www.youtube.com/watch?v=7EQX70weW8o',
          referenceSource: 'Film Music Provenance Archives',
        }
      ),
      song(
        'sj-bf61-2',
        'sj-boy-friend-1961',
        'Mujhe Apna Yaar Bana Lo',
        'Mohammed Rafi',
        'Boy Friend',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-jab-pyar-kisise-hota-hai-1961',
    directorId: 'shankar-jaikishan',
    title: 'Jab Pyar Kisise Hota Hai',
    year: 1961,
    cast: 'Dev Anand, Asha Parekh',
    songs: [
      song(
        'sj-jpkhh61-1',
        'sj-jab-pyar-kisise-hota-hai-1961',
        'Bin Dekhe Aur Bin Pehchane',
        'Mohammed Rafi',
        'Jab Pyar Kisise Hota Hai',
        1961,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Dancing Eyes (Abbo Oubib Ghanoura)',
          originalArtist: 'Rahbani Brothers / Ron Goodwin (Music for an Arabian Night)',
          originalYear: '1959',
          adaptationNotes:
            'Core Middle Eastern orchestral melody closely adapts Dancing Eyes from Ron Goodwin’s 1959 Music for an Arabian Night arrangement of the Rahbani Brothers tune.',
          originalLink: 'https://www.youtube.com/watch?v=xAK1GAO-hUQ',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-jpkhh61-2',
        'sj-jab-pyar-kisise-hota-hai-1961',
        'Jiya O Jiya Kuchh Bol Do',
        'Mohammed Rafi',
        'Jab Pyar Kisise Hota Hai',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-junglee-1961',
    directorId: 'shankar-jaikishan',
    title: 'Junglee',
    year: 1961,
    cast: 'Shammi Kapoor, Saira Banu',
    label: 'HMV / Saregama',
    significance: 'Shammi Kapoor’s Eastmancolor blockbuster anchored by Yahoo and Suku Suku',
    songs: [
      song(
        'sj-jun61-1',
        'sj-junglee-1961',
        'Aiyaiyya Suku Suku',
        'Mohammed Rafi',
        'Junglee',
        1961,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'African & World Folk',
          originalSongTitle: 'Sucu Sucu',
          originalArtist: 'Tarateño Rojas / Nina & Frederik',
          originalYear: '1959 / 1961',
          adaptationNotes:
            'Calypso-Latin melody and signature Suku Suku chorus adapt Tarateño Rojas’ Bolivian tune popularized globally by Nina & Frederik.',
          originalLink: 'https://www.youtube.com/watch?v=ZuKPRDKJado',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-jun61-2',
        'sj-junglee-1961',
        'Chahe Koi Mujhe Junglee Kahe',
        'Mohammed Rafi',
        'Junglee',
        1961,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-jun61-3',
        'sj-junglee-1961',
        'Ehsan Tera Hoga Mujh Par',
        'Mohammed Rafi, Lata Mangeshkar',
        'Junglee',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-krorepati-1961',
    directorId: 'shankar-jaikishan',
    title: 'Krorepati',
    year: 1961,
    cast: 'Kishore Kumar, Shashi Kapoor, Kumkum',
    songs: [
      song(
        'sj-kro61-1',
        'sj-krorepati-1961',
        'O Ladke Badhte Badhte',
        'Asha Bhosle, Kishore Kumar',
        'Krorepati',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-roop-ki-rani-choron-ka-raja-1961',
    directorId: 'shankar-jaikishan',
    title: 'Roop Ki Rani Choron Ka Raja',
    year: 1961,
    cast: 'Dev Anand, Waheeda Rehman',
    songs: [
      song(
        'sj-rkrckr61-1',
        'sj-roop-ki-rani-choron-ka-raja-1961',
        'Tum To Dil Ke Taar Chhed Kar Ho Gaye Bekhabar',
        'Talat Mahmood, Lata Mangeshkar',
        'Roop Ki Rani Choron Ka Raja',
        1961,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-sasuraal-1961',
    directorId: 'shankar-jaikishan',
    title: 'Sasuraal',
    year: 1961,
    cast: 'Rajendra Kumar, B. Saroja Devi',
    songs: [
      song(
        'sj-sas61-1',
        'sj-sasuraal-1961',
        'Teri Pyari Pyari Surat Ko Kisi Ki Nazar Na Lage',
        'Mohammed Rafi',
        'Sasuraal',
        1961,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-aashiq-1962',
    directorId: 'shankar-jaikishan',
    title: 'Aashiq',
    year: 1962,
    cast: 'Raj Kapoor, Padmini, Nanda',
    songs: [
      song(
        'sj-aas62-1',
        'sj-aashiq-1962',
        'Main Aashiq Hoon Bahaaron Ka',
        'Mukesh',
        'Aashiq',
        1962,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Return to Paradise (Sanargi’u)',
          originalArtist: 'Rahbani Brothers / Ron Goodwin (Music for an Arabian Night)',
          originalYear: '1959',
          adaptationNotes:
            'Refrain melody adapts Return to Paradise from Ron Goodwin’s 1959 orchestral arrangement of the Rahbani Brothers composition.',
          originalLink: 'https://www.youtube.com/watch?v=OGOB4whpadM',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'sj-aas62-2',
        'sj-aashiq-1962',
        'Tum Jo Hamare Meet Na Hote',
        'Mukesh',
        'Aashiq',
        1962,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-asli-naqli-1962',
    directorId: 'shankar-jaikishan',
    title: 'Asli-Naqli',
    year: 1962,
    cast: 'Dev Anand, Sadhana',
    songs: [
      song(
        'sj-an62-1',
        'sj-asli-naqli-1962',
        'Tujhe Jeevan Ki Dor Se Bandh Liya Hai',
        'Mohammed Rafi, Lata Mangeshkar',
        'Asli-Naqli',
        1962,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-an62-2',
        'sj-asli-naqli-1962',
        'Tera Mera Pyar Amar',
        'Lata Mangeshkar',
        'Asli-Naqli',
        1962,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-dil-tera-diwana-1962',
    directorId: 'shankar-jaikishan',
    title: 'Dil Tera Diwana',
    year: 1962,
    cast: 'Shammi Kapoor, Mala Sinha',
    songs: [
      song(
        'sj-dtd62-1',
        'sj-dil-tera-diwana-1962',
        'Dil Tera Diwana Hai Sanam',
        'Mohammed Rafi, Lata Mangeshkar',
        'Dil Tera Diwana',
        1962,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-hariyali-aur-rasta-1962',
    directorId: 'shankar-jaikishan',
    title: 'Hariyali Aur Rasta',
    year: 1962,
    cast: 'Manoj Kumar, Mala Sinha',
    songs: [
      song(
        'sj-har62-1',
        'sj-hariyali-aur-rasta-1962',
        'Bol Meri Taqdeer Mein Kya Hai',
        'Lata Mangeshkar, Mukesh',
        'Hariyali Aur Rasta',
        1962,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-professor-1962',
    directorId: 'shankar-jaikishan',
    title: 'Professor',
    year: 1962,
    cast: 'Shammi Kapoor, Kalpana',
    significance: 'Filmfare Award Winner — Best Music Director (1962)',
    songs: [
      song(
        'sj-pro62-1',
        'sj-professor-1962',
        'Ae Gulbadan Ae Gulbadan',
        'Mohammed Rafi',
        'Professor',
        1962,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-pro62-2',
        'sj-professor-1962',
        'Aawaz Deke Humein Tum Bulao',
        'Mohammed Rafi, Lata Mangeshkar',
        'Professor',
        1962,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-rungoli-1962',
    directorId: 'shankar-jaikishan',
    title: 'Rungoli',
    year: 1962,
    cast: 'Kishore Kumar, Vyjayanthimala',
    songs: [
      song(
        'sj-run62-1',
        'sj-rungoli-1962',
        'Chhoti Si Yeh Duniya Pehchane Raste Hain',
        'Kishore Kumar',
        'Rungoli',
        1962,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-dil-ek-mandir-1963',
    directorId: 'shankar-jaikishan',
    title: 'Dil Ek Mandir',
    year: 1963,
    cast: 'Rajendra Kumar, Meena Kumari, Raaj Kumar',
    significance: 'Nominated for Filmfare Best Music Director (1963)',
    songs: [
      song(
        'sj-dem63-1',
        'sj-dil-ek-mandir-1963',
        'Yaad Na Jaaye Beete Dinon Ki',
        'Mohammed Rafi',
        'Dil Ek Mandir',
        1963,
        {
          lyricist: 'Shailendra',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Bésame Mucho',
          originalArtist: 'Consuelo Velázquez',
          originalYear: '1940',
          adaptationNotes:
            'Closing phrase cadence subtly echoes Consuelo Velázquez’s Latin bolero standard while unfolding as a deeply Hindustani classical melody.',
          originalLink: 'https://www.youtube.com/watch?v=a0AvkwvFZPM',
          referenceSource: 'Film Music Archives / CinemaSangeet',
        }
      ),
      song(
        'sj-dem63-2',
        'sj-dil-ek-mandir-1963',
        'Ruk Ja Raat Thahar Ja Re Chanda',
        'Lata Mangeshkar',
        'Dil Ek Mandir',
        1963,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-ek-dil-sau-afsane-1963',
    directorId: 'shankar-jaikishan',
    title: 'Ek Dil Sau Afsane',
    year: 1963,
    cast: 'Raj Kapoor, Waheeda Rehman',
    songs: [
      song(
        'sj-edsa63-1',
        'sj-ek-dil-sau-afsane-1963',
        'Tum Hi Tum Ho Mere Jeevan Mein',
        'Mohammed Rafi, Lata Mangeshkar',
        'Ek Dil Sau Afsane',
        1963,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-hamrahi-1963',
    directorId: 'shankar-jaikishan',
    title: 'Hamrahi',
    year: 1963,
    cast: 'Rajendra Kumar, Jamuna',
    songs: [
      song(
        'sj-ham63-1',
        'sj-hamrahi-1963',
        'Mujhko Apne Gale Laga Lo',
        'Mohammed Rafi, Mubarak Begum',
        'Hamrahi',
        1963,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-apne-huye-paraye-1964',
    directorId: 'shankar-jaikishan',
    title: 'Apne Huye Paraye',
    year: 1964,
    cast: 'Manoj Kumar, Mala Sinha',
    songs: [
      song(
        'sj-ahp64-1',
        'sj-apne-huye-paraye-1964',
        'Koyi Bulaye Aur Koyi Aaye',
        'Lata Mangeshkar',
        'Apne Huye Paraye',
        1964,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Old Beirut (Hala La Laya)',
          originalArtist: 'Rahbani Brothers / Ron Goodwin (Music for an Arabian Night)',
          originalYear: '1959',
          adaptationNotes:
            'Melody closely follows Old Beirut (Hala La Laya) from Ron Goodwin’s 1959 Arabian Night arrangement of the Rahbani Brothers song.',
          originalLink: 'https://www.youtube.com/watch?v=p9Siv6sj7oY',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'sj-ahp64-2',
        'sj-apne-huye-paraye-1964',
        'Bahar Ban Ke Woh Muskuraaye',
        'Lata Mangeshkar',
        'Apne Huye Paraye',
        1964,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-april-fool-1964',
    directorId: 'shankar-jaikishan',
    title: 'April Fool',
    year: 1964,
    cast: 'Biswajeet, Saira Banu',
    songs: [
      song(
        'sj-af64-1',
        'sj-april-fool-1964',
        'April Fool Banaya To Unko Gussa Aaya',
        'Mohammed Rafi',
        'April Fool',
        1964,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Arabic & Middle Eastern',
          originalSongTitle: 'Take Me Back to Cairo',
          originalArtist: 'Karim Shoukry',
          originalYear: '1960s',
          adaptationNotes:
            'Playful mukhda hook and bouncy rhythmic structure adapt Egyptian singer Karim Shoukry’s Take Me Back to Cairo.',
          originalLink: 'https://www.youtube.com/watch?v=SYf_8RLUjpg',
          referenceSource: 'ITWOFS / Film Music Archives',
        }
      ),
      song(
        'sj-af64-2',
        'sj-april-fool-1964',
        'Aa Gale Lag Jaa Mere Sapne Mere Apne',
        'Mohammed Rafi',
        'April Fool',
        1964,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-ayee-milan-ki-bela-1964',
    directorId: 'shankar-jaikishan',
    title: 'Ayee Milan Ki Bela',
    year: 1964,
    cast: 'Rajendra Kumar, Saira Banu, Dharmendra',
    songs: [
      song(
        'sj-amkb64-1',
        'sj-ayee-milan-ki-bela-1964',
        'Tum Kamsin Ho Nadan Ho',
        'Mohammed Rafi',
        'Ayee Milan Ki Bela',
        1964,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-beti-bete-1964',
    directorId: 'shankar-jaikishan',
    title: 'Beti Bete',
    year: 1964,
    cast: 'Sunil Dutt, B. Saroja Devi, Mehmood',
    songs: [
      song(
        'sj-bb64-1',
        'sj-beti-bete-1964',
        'Aaj Kal Mein Dhal Gaya Din Hua Tamam',
        'Mohammed Rafi',
        'Beti Bete',
        1964,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-rajkumar-1964',
    directorId: 'shankar-jaikishan',
    title: 'Rajkumar',
    year: 1964,
    cast: 'Shammi Kapoor, Sadhana',
    songs: [
      song(
        'sj-raj64-1',
        'sj-rajkumar-1964',
        'Aaja Aayi Bahaar Dil Hai Beqarar',
        'Lata Mangeshkar',
        'Rajkumar',
        1964,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-sangam-1964',
    directorId: 'shankar-jaikishan',
    title: 'Sangam',
    year: 1964,
    cast: 'Raj Kapoor, Vyjayanthimala, Rajendra Kumar',
    label: 'HMV / Saregama',
    significance: 'Raj Kapoor’s European colour epic featuring Dost Dost Na Raha and Bol Radha Bol',
    songs: [
      song(
        'sj-san64-1',
        'sj-sangam-1964',
        'Dost Dost Na Raha Pyar Pyar Na Raha',
        'Mukesh',
        'Sangam',
        1964,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-san64-2',
        'sj-sangam-1964',
        'Har Dil Jo Pyar Karega',
        'Lata Mangeshkar, Mukesh, Mahendra Kapoor',
        'Sangam',
        1964,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-san64-3',
        'sj-sangam-1964',
        'Yeh Mera Prem Patra Padh Kar',
        'Mohammed Rafi',
        'Sangam',
        1964,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-sanjh-aur-savera-1964',
    directorId: 'shankar-jaikishan',
    title: 'Sanjh Aur Savera',
    year: 1964,
    cast: 'Guru Dutt, Meena Kumari, Mehmood',
    songs: [
      song(
        'sj-sas64-1',
        'sj-sanjh-aur-savera-1964',
        'Ajhun Na Aaye Balamwa Sawan Beeta Jaaye',
        'Mohammed Rafi, Suman Kalyanpur',
        'Sanjh Aur Savera',
        1964,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-zindagi-1964',
    directorId: 'shankar-jaikishan',
    title: 'Zindagi',
    year: 1964,
    cast: 'Rajendra Kumar, Vyjayanthimala, Raaj Kumar',
    songs: [
      song(
        'sj-zin64-1',
        'sj-zindagi-1964',
        'Humne Jafa Na Seekhi Unko Wafa Na Aayi',
        'Mohammed Rafi',
        'Zindagi',
        1964,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-arzoo-1965',
    directorId: 'shankar-jaikishan',
    title: 'Arzoo',
    year: 1965,
    cast: 'Rajendra Kumar, Sadhana, Feroz Khan',
    significance: 'Nominated for Filmfare Best Music Director (1965)',
    songs: [
      song(
        'sj-arz65-1',
        'sj-arzoo-1965',
        'Aji Rooth Kar Ab Kahan Jaaiyega',
        'Lata Mangeshkar',
        'Arzoo',
        1965,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-arz65-2',
        'sj-arzoo-1965',
        'Ae Phoolon Ki Rani Bahaaron Ki Malika',
        'Mohammed Rafi',
        'Arzoo',
        1965,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-gumnaam-1965',
    directorId: 'shankar-jaikishan',
    title: 'Gumnaam',
    year: 1965,
    cast: 'Manoj Kumar, Nanda, Mehmood, Pran',
    label: 'HMV / Saregama',
    significance: 'Suspense thriller soundtrack blending Henry Mancini, jazz standards, and surf-rock',
    songs: [
      song(
        'sj-gum65-1',
        'sj-gumnaam-1965',
        'Gumnaam Hai Koi Badnaam Hai Koi',
        'Lata Mangeshkar',
        'Gumnaam',
        1965,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Theme from Charade',
          originalArtist: 'Henry Mancini',
          originalYear: '1963',
          adaptationNotes:
            'Haunting minor-key mystery motif and orchestral pacing adapt Henry Mancini’s main title theme for Charade.',
          originalLink: 'https://www.youtube.com/watch?v=eEP7OCfttdc',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-gum65-2',
        'sj-gumnaam-1965',
        'Jaane Chaman Shola Badan',
        'Mohammed Rafi, Sharda',
        'Gumnaam',
        1965,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Autumn Leaves (Les Feuilles Mortes)',
          originalArtist: 'Joseph Kosma / Nat King Cole',
          originalYear: '1945 / 1955',
          adaptationNotes:
            'Opening vocal line and descending jazz chord progression adapt Joseph Kosma’s standard Autumn Leaves.',
          originalLink: 'https://www.youtube.com/watch?v=Gnp58oepHUQ',
          referenceSource: 'ITWOFS / MySwar',
        }
      ),
      song(
        'sj-gum65-3',
        'sj-gumnaam-1965',
        'Jaan Pehchan Ho',
        'Mohammed Rafi',
        'Gumnaam',
        1965,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-jaanwar-1965',
    directorId: 'shankar-jaikishan',
    title: 'Jaanwar',
    year: 1965,
    cast: 'Shammi Kapoor, Rajshree',
    songs: [
      song(
        'sj-jan65-1',
        'sj-jaanwar-1965',
        'Dekho Ab To Kisko Nahin Hai Khabar',
        'Mohammed Rafi, Asha Bhosle, S.D. Batish, S. Balbir',
        'Jaanwar',
        1965,
        {
          lyricist: 'Shailendra',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'I Want to Hold Your Hand',
          originalArtist: 'The Beatles',
          originalYear: '1963',
          adaptationNotes:
            'Beatles-inspired mop-top stage number adapts the riff, handclaps, and chord progression of I Want to Hold Your Hand.',
          originalLink: 'https://www.youtube.com/watch?v=-9o_2_mXjwQ',
          referenceSource: 'Music Provenance Archives / ITWOFS',
        }
      ),
      song(
        'sj-jan65-2',
        'sj-jaanwar-1965',
        'Tumse Achha Kaun Hai',
        'Mohammed Rafi',
        'Jaanwar',
        1965,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-amrapali-1966',
    directorId: 'shankar-jaikishan',
    title: 'Amrapali',
    year: 1966,
    cast: 'Sunil Dutt, Vyjayanthimala',
    songs: [
      song(
        'sj-amr66-1',
        'sj-amrapali-1966',
        'Tumhe Yaad Karte Karte Jaayegi Rain Saari',
        'Lata Mangeshkar',
        'Amrapali',
        1966,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-budtameez-1966',
    directorId: 'shankar-jaikishan',
    title: 'Budtameez',
    year: 1966,
    cast: 'Shammi Kapoor, Sadhana',
    songs: [
      song(
        'sj-bud66-1',
        'sj-budtameez-1966',
        'Budtameez Kaho Ya Kaho Jaanwar',
        'Mohammed Rafi',
        'Budtameez',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-gaban-1966',
    directorId: 'shankar-jaikishan',
    title: 'Gaban',
    year: 1966,
    cast: 'Sunil Dutt, Sadhana',
    songs: [
      song(
        'sj-gab66-1',
        'sj-gaban-1966',
        'Maine Dekha Hai Sapnon Mein',
        'Lata Mangeshkar',
        'Gaban',
        1966,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-love-in-tokyo-1966',
    directorId: 'shankar-jaikishan',
    title: 'Love in Tokyo',
    year: 1966,
    cast: 'Joy Mukherjee, Asha Parekh, Pran',
    songs: [
      song(
        'sj-lit66-1',
        'sj-love-in-tokyo-1966',
        'Sayonara Sayonara',
        'Lata Mangeshkar',
        'Love in Tokyo',
        1966,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'In a Persian Market',
          originalArtist: 'Albert Ketèlbey',
          originalYear: '1920',
          adaptationNotes:
            'Opening orchestral motif and exotic cadence adapt Albert Ketèlbey’s light-classical piece In a Persian Market.',
          originalLink: 'https://www.youtube.com/watch?v=pNZ54SPOvxY',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-lit66-2',
        'sj-love-in-tokyo-1966',
        'O Mere Shahe Khuban',
        'Mohammed Rafi',
        'Love in Tokyo',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-pyar-mohabbat-1966',
    directorId: 'shankar-jaikishan',
    title: 'Pyar Mohabbat',
    year: 1966,
    cast: 'Dev Anand, Saira Banu',
    songs: [
      song(
        'sj-pm66-1',
        'sj-pyar-mohabbat-1966',
        'Aap Naraz Khuda Khair Kare',
        'Mohammed Rafi',
        'Pyar Mohabbat',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-street-singer-1966',
    directorId: 'shankar-jaikishan',
    title: 'Street Singer',
    year: 1966,
    cast: 'Chandrashekhar, Vijaya Choudhary',
    songs: [
      song(
        'sj-ss66-1',
        'sj-street-singer-1966',
        'Aaj Ki Raat Mere Dil Ki Salami Le Le',
        'Mohammed Rafi',
        'Street Singer',
        1966
      ),
    ],
  },
  {
    id: 'sj-suraj-1966',
    directorId: 'shankar-jaikishan',
    title: 'Suraj',
    year: 1966,
    cast: 'Rajendra Kumar, Vyjayanthimala',
    significance: 'Filmfare Award Winner — Best Music Director (1966)',
    songs: [
      song(
        'sj-sur66-1',
        'sj-suraj-1966',
        'Baharon Phool Barsao',
        'Mohammed Rafi',
        'Suraj',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-sur66-2',
        'sj-suraj-1966',
        'Titli Udi Ud Jo Chali',
        'Sharda',
        'Suraj',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-teesri-kasam-1966',
    directorId: 'shankar-jaikishan',
    title: 'Teesri Kasam',
    year: 1966,
    cast: 'Raj Kapoor, Waheeda Rehman',
    label: 'HMV / Saregama',
    significance: 'National Award-winning rustic classic produced by lyricist Shailendra',
    songs: [
      song(
        'sj-tk66-1',
        'sj-teesri-kasam-1966',
        'Sajan Re Jhoot Mat Bolo',
        'Mukesh',
        'Teesri Kasam',
        1966,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-tk66-2',
        'sj-teesri-kasam-1966',
        'Duniya Bananewale Kya Tere Mann Mein Samayi',
        'Mukesh',
        'Teesri Kasam',
        1966,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-tk66-3',
        'sj-teesri-kasam-1966',
        'Paan Khaye Saiyan Hamaro',
        'Asha Bhosle',
        'Teesri Kasam',
        1966,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-aman-1967',
    directorId: 'shankar-jaikishan',
    title: 'Aman',
    year: 1967,
    cast: 'Rajendra Kumar, Saira Banu, Bertrand Russell',
    songs: [
      song(
        'sj-ama67-1',
        'sj-aman-1967',
        'Aaj Ki Raat Yeh Kaisi Raat',
        'Mohammed Rafi, Saira Banu',
        'Aman',
        1967,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Too Much Tequila',
          originalArtist: 'The Champs',
          originalYear: '1960',
          adaptationNotes:
            'Brisk brass-and-organ dance groove adapts The Champs’ 1960 instrumental hit Too Much Tequila.',
          originalLink: 'https://www.youtube.com/watch?v=EU1RprNuNM4',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-ama67-2',
        'sj-aman-1967',
        'Naajuk Naajuk Badan Mora',
        'Lata Mangeshkar',
        'Aman',
        1967,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-an-evening-in-paris-1967',
    directorId: 'shankar-jaikishan',
    title: 'An Evening in Paris',
    year: 1967,
    cast: 'Shammi Kapoor, Sharmila Tagore, Pran',
    label: 'HMV / Saregama',
    songs: [
      song(
        'sj-aeip67-1',
        'sj-an-evening-in-paris-1967',
        'Leja Leja Leja Mera Dil',
        'Sharda',
        'An Evening in Paris',
        1967,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Man of Mystery',
          originalArtist: 'The Shadows',
          originalYear: '1960',
          adaptationNotes:
            'Driving spy-guitar riff and mukhda melody directly adapt British instrumental group The Shadows’ 1960 hit Man of Mystery.',
          originalLink: 'https://www.youtube.com/watch?v=JW5IX-Q_Dfw',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-aeip67-2',
        'sj-an-evening-in-paris-1967',
        'Akele Akele Kahan Ja Rahe Ho',
        'Mohammed Rafi',
        'An Evening in Paris',
        1967,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-aeip67-3',
        'sj-an-evening-in-paris-1967',
        'Raat Ke Humsafar Thak Ke Ghar Ko Chale',
        'Mohammed Rafi, Asha Bhosle',
        'An Evening in Paris',
        1967,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-around-the-world-1967',
    directorId: 'shankar-jaikishan',
    title: 'Around the World',
    year: 1967,
    cast: 'Raj Kapoor, Rajshree',
    songs: [
      song(
        'sj-atw67-1',
        'sj-around-the-world-1967',
        'Jaane Bhi De Sanam Mujhe',
        'Sharda',
        'Around the World',
        1967,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'inspired',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'I’ll Get You',
          originalArtist: 'The Beatles',
          originalYear: '1963',
          adaptationNotes:
            'Upbeat Merseybeat rhythm and melodic turnaround share close structural phrasing with The Beatles’ 1963 B-side.',
          originalLink: 'https://www.youtube.com/watch?v=nFEHqFUONHY',
          referenceSource: 'ITWOFS',
        }
      ),
      song(
        'sj-atw67-2',
        'sj-around-the-world-1967',
        'Duniya Ki Sair Kar Lo',
        'Mukesh, Sharda',
        'Around the World',
        1967,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-chhoti-si-mulaqat-1967',
    directorId: 'shankar-jaikishan',
    title: 'Chhoti Si Mulaqat',
    year: 1967,
    cast: 'Uttam Kumar, Vyjayanthimala',
    songs: [
      song(
        'sj-csm67-1',
        'sj-chhoti-si-mulaqat-1967',
        'Ae Chand Ki Zebaai',
        'Mohammed Rafi',
        'Chhoti Si Mulaqat',
        1967,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-diwana-1967',
    directorId: 'shankar-jaikishan',
    title: 'Diwana',
    year: 1967,
    cast: 'Raj Kapoor, Saira Banu',
    significance: 'Nominated for Filmfare Best Music Director (1967)',
    songs: [
      song(
        'sj-diw67-1',
        'sj-diwana-1967',
        'Tumhari Bhi Jai Jai Hamari Bhi Jai Jai',
        'Mukesh',
        'Diwana',
        1967,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-gunahon-ka-devta-1967',
    directorId: 'shankar-jaikishan',
    title: 'Gunahon Ka Devta',
    year: 1967,
    cast: 'Jeetendra, Rajshree',
    songs: [
      song(
        'sj-gkd67-1',
        'sj-gunahon-ka-devta-1967',
        'Mehfil Mein Sochta Hoon',
        'Mukesh',
        'Gunahon Ka Devta',
        1967,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-hare-kanch-ki-chooriyan-1967',
    directorId: 'shankar-jaikishan',
    title: 'Hare Kanch Ki Chooriyan',
    year: 1967,
    cast: 'Biswajeet, Naina Sahu',
    songs: [
      song(
        'sj-hkkc67-1',
        'sj-hare-kanch-ki-chooriyan-1967',
        'Dhani Chunar Mori Haye Re',
        'Asha Bhosle',
        'Hare Kanch Ki Chooriyan',
        1967
      ),
    ],
  },
  {
    id: 'sj-laat-saheb-1967',
    directorId: 'shankar-jaikishan',
    title: 'Laat Saheb',
    year: 1967,
    cast: 'Shammi Kapoor, Nutan',
    songs: [
      song(
        'sj-ls67-1',
        'sj-laat-saheb-1967',
        'Savere Wali Gaadi Se Chale Jaayenge',
        'Mohammed Rafi',
        'Laat Saheb',
        1967,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-raat-aur-din-1967',
    directorId: 'shankar-jaikishan',
    title: 'Raat Aur Din',
    year: 1967,
    cast: 'Nargis, Pradeep Kumar, Feroz Khan',
    songs: [
      song(
        'sj-rad67-1',
        'sj-raat-aur-din-1967',
        'Dil Ki Girah Khol Do',
        'Lata Mangeshkar, Manna Dey',
        'Raat Aur Din',
        1967,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-brahmachari-1968',
    directorId: 'shankar-jaikishan',
    title: 'Brahmachari',
    year: 1968,
    cast: 'Shammi Kapoor, Rajshree, Mumtaz, Pran',
    label: 'HMV / Saregama',
    significance: 'Filmfare Award Winner — Best Music Director (1968)',
    songs: [
      song(
        'sj-bra68-1',
        'sj-brahmachari-1968',
        'Dil Ke Jharokhe Mein Tujhko Bithakar',
        'Mohammed Rafi',
        'Brahmachari',
        1968,
        {
          lyricist: 'Hasrat Jaipuri',
          originCategory: 'Indian Folk & Classical',
          adaptationNotes: 'Classic Raag Shivaranjani composition paired with grand ballroom strings.',
        }
      ),
      song(
        'sj-bra68-2',
        'sj-brahmachari-1968',
        'Aajkal Tere Mere Pyar Ke Charche',
        'Mohammed Rafi, Suman Kalyanpur',
        'Brahmachari',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-bra68-3',
        'sj-brahmachari-1968',
        'Main Gaoon Tum So Jao',
        'Mohammed Rafi',
        'Brahmachari',
        1968,
        { lyricist: 'Shailendra' }
      ),
    ],
  },
  {
    id: 'sj-duniya-1968',
    directorId: 'shankar-jaikishan',
    title: 'Duniya',
    year: 1968,
    cast: 'Dev Anand, Vyjayanthimala',
    songs: [
      song(
        'sj-dun68-1',
        'sj-duniya-1968',
        'Falsafa Pyar Ka Tum Kya Jano',
        'Mohammed Rafi',
        'Duniya',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-jhuk-gaya-aasman-1968',
    directorId: 'shankar-jaikishan',
    title: 'Jhuk Gaya Aasman',
    year: 1968,
    cast: 'Rajendra Kumar, Saira Banu',
    songs: [
      song(
        'sj-jga68-1',
        'sj-jhuk-gaya-aasman-1968',
        'Kaun Hai Jo Sapnon Mein Aaya',
        'Mohammed Rafi',
        'Jhuk Gaya Aasman',
        1968,
        {
          lyricist: 'Hasrat Jaipuri',
          adaptationType: 'copied',
          originCategory: 'Western Pop & Ambient',
          originalSongTitle: 'Marguerita',
          originalArtist: 'Elvis Presley',
          originalYear: '1963',
          adaptationNotes:
            'Latin-bolero melody and chorus curve closely adapt Elvis Presley’s Marguerita from Fun in Acapulco.',
          originalLink: 'https://www.youtube.com/watch?v=IufsocTXfMY',
          referenceSource: 'ITWOFS / Music Provenance Archives',
        }
      ),
      song(
        'sj-jga68-2',
        'sj-jhuk-gaya-aasman-1968',
        'Kahan Chal Diye Idhar To Aao',
        'Mohammed Rafi',
        'Jhuk Gaya Aasman',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-kahin-aur-chal-1968',
    directorId: 'shankar-jaikishan',
    title: 'Kahin Aur Chal',
    year: 1968,
    cast: 'Dev Anand, Asha Parekh',
    songs: [
      song(
        'sj-kac68-1',
        'sj-kahin-aur-chal-1968',
        'Shokh Aankhen Dekh Kar',
        'Mohammed Rafi, Asha Bhosle',
        'Kahin Aur Chal',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-kanyadaan-1968',
    directorId: 'shankar-jaikishan',
    title: 'Kanyadaan',
    year: 1968,
    cast: 'Shashi Kapoor, Asha Parekh',
    songs: [
      song(
        'sj-kan68-1',
        'sj-kanyadaan-1968',
        'Likhe Jo Khat Tujhe Woh Teri Yaad Mein',
        'Mohammed Rafi',
        'Kanyadaan',
        1968,
        { lyricist: 'Neeraj' }
      ),
    ],
  },
  {
    id: 'sj-mere-huzoor-1968',
    directorId: 'shankar-jaikishan',
    title: 'Mere Huzoor',
    year: 1968,
    cast: 'Raaj Kumar, Mala Sinha, Jeetendra',
    songs: [
      song(
        'sj-mh68-1',
        'sj-mere-huzoor-1968',
        'Jhanak Jhanak Tori Baje Payaliya',
        'Manna Dey',
        'Mere Huzoor',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-sapnon-ka-saudagar-1968',
    directorId: 'shankar-jaikishan',
    title: 'Sapnon Ka Saudagar',
    year: 1968,
    cast: 'Raj Kapoor, Hema Malini',
    songs: [
      song(
        'sj-sks68-1',
        'sj-sapnon-ka-saudagar-1968',
        'Tum Pyar Se Dekho Hum Pyar Se Dekhen',
        'Mukesh, Sharda',
        'Sapnon Ka Saudagar',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-shikar-1968',
    directorId: 'shankar-jaikishan',
    title: 'Shikar',
    year: 1968,
    cast: 'Dharmendra, Asha Parekh',
    songs: [
      song(
        'sj-shik68-1',
        'sj-shikar-1968',
        'Parde Mein Rehne Do Parda Na Uthao',
        'Asha Bhosle',
        'Shikar',
        1968,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-everest-1968',
    directorId: 'shankar-jaikishan',
    title: 'Everest (Documentary)',
    year: 1968,
    cast: 'Documentary Feature',
    songs: [
      song(
        'sj-eve68-1',
        'sj-everest-1968',
        'Everest (Background Theme)',
        'Instrumental',
        'Everest',
        1968
      ),
    ],
  },
  {
    id: 'sj-baalak-1969',
    directorId: 'shankar-jaikishan',
    title: 'Baalak',
    year: 1969,
    cast: 'Sarika, Mahesh Kothare, Sachin',
    songs: [
      song(
        'sj-baa69-1',
        'sj-baalak-1969',
        'Chanda Mama Mere Dwar Aana',
        'Lata Mangeshkar',
        'Baalak',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-bhai-bahen-1969',
    directorId: 'shankar-jaikishan',
    title: 'Bhai Bahen',
    year: 1969,
    cast: 'Sunil Dutt, Nutan, Ashok Kumar',
    songs: [
      song(
        'sj-bb69-1',
        'sj-bhai-bahen-1969',
        'Sapne Hain Sapne Kab Huye Apne',
        'Mukesh',
        'Bhai Bahen',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-chanda-aur-bijli-1969',
    directorId: 'shankar-jaikishan',
    title: 'Chanda Aur Bijli',
    year: 1969,
    cast: 'Sanjeev Kumar, Padmini, Sachin',
    songs: [
      song(
        'sj-cab69-1',
        'sj-chanda-aur-bijli-1969',
        'Kaal Ka Pahiya Ghoome Bhaiya',
        'Manna Dey',
        'Chanda Aur Bijli',
        1969,
        { lyricist: 'Neeraj' }
      ),
    ],
  },
  {
    id: 'sj-jahan-pyar-miley-1969',
    directorId: 'shankar-jaikishan',
    title: 'Jahan Pyar Miley',
    year: 1969,
    cast: 'Shashi Kapoor, Hema Malini',
    songs: [
      song(
        'sj-jpm69-1',
        'sj-jahan-pyar-miley-1969',
        'Chale Ja Chale Ja Jahan Pyar Miley',
        'Mohammed Rafi',
        'Jahan Pyar Miley',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-prince-1969',
    directorId: 'shankar-jaikishan',
    title: 'Prince',
    year: 1969,
    cast: 'Shammi Kapoor, Vyjayanthimala',
    songs: [
      song(
        'sj-pri69-1',
        'sj-prince-1969',
        'Badan Pe Sitare Lapete Hue',
        'Mohammed Rafi',
        'Prince',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-pri69-2',
        'sj-prince-1969',
        'Muqabla Humse Na Karo',
        'Mohammed Rafi, Asha Bhosle',
        'Prince',
        1969,
        { lyricist: 'Farooq Kaiser' }
      ),
    ],
  },
  {
    id: 'sj-pyar-hi-pyar-1969',
    directorId: 'shankar-jaikishan',
    title: 'Pyar Hi Pyar',
    year: 1969,
    cast: 'Dharmendra, Vyjayanthimala',
    songs: [
      song(
        'sj-php69-1',
        'sj-pyar-hi-pyar-1969',
        'Main Kahin Kavi Na Ban Jaoon',
        'Mohammed Rafi',
        'Pyar Hi Pyar',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-sachaai-1969',
    directorId: 'shankar-jaikishan',
    title: 'Sachaai',
    year: 1969,
    cast: 'Shammi Kapoor, Sanjeev Kumar, Sadhana',
    songs: [
      song(
        'sj-sac69-1',
        'sj-sachaai-1969',
        'Sau Baras Ki Zindagi Se Achhe Hain Pyar Ke Do Char Din',
        'Mohammed Rafi, Asha Bhosle',
        'Sachaai',
        1969
      ),
    ],
  },
  {
    id: 'sj-shatranj-1969',
    directorId: 'shankar-jaikishan',
    title: 'Shatranj',
    year: 1969,
    cast: 'Rajendra Kumar, Waheeda Rehman, Mehmood',
    songs: [
      song(
        'sj-sha69-1',
        'sj-shatranj-1969',
        'Badkismati Se Meri',
        'Mohammed Rafi',
        'Shatranj',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-tumse-achha-kaun-hai-1969',
    directorId: 'shankar-jaikishan',
    title: 'Tumse Achha Kaun Hai',
    year: 1969,
    cast: 'Shammi Kapoor, Babita',
    songs: [
      song(
        'sj-takh69-1',
        'sj-tumse-achha-kaun-hai-1969',
        'Janam Janam Ka Saath Hai',
        'Mohammed Rafi',
        'Tumse Achha Kaun Hai',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-takh69-2',
        'sj-tumse-achha-kaun-hai-1969',
        'Ganga Meri Maa Ka Naam',
        'Mohammed Rafi',
        'Tumse Achha Kaun Hai',
        1969,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'sj-yakeen-1969',
    directorId: 'shankar-jaikishan',
    title: 'Yakeen',
    year: 1969,
    cast: 'Dharmendra, Sharmila Tagore',
    songs: [
      song(
        'sj-yak69-1',
        'sj-yakeen-1969',
        'Yakeen Kar Lo Mujhe Mohabbat Hai Tumse',
        'Mohammed Rafi',
        'Yakeen',
        1969,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },

  // =========================================================================
  // 1970 – 1971: Culmination of the Duo (Jaikishan passed away Sept 1971)
  // =========================================================================
  {
    id: 'sj-bhai-bhai-1970',
    directorId: 'shankar-jaikishan',
    title: 'Bhai-Bhai',
    year: 1970,
    cast: 'Sunil Dutt, Asha Parekh, Mumtaz',
    songs: [
      song(
        'sj-bb70-1',
        'sj-bhai-bhai-1970',
        'Sapnon Ka Raja Koi',
        'Mohammed Rafi, Asha Bhosle',
        'Bhai-Bhai',
        1970,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-dharti-1970',
    directorId: 'shankar-jaikishan',
    title: 'Dharti',
    year: 1970,
    cast: 'Rajendra Kumar, Waheeda Rehman',
    songs: [
      song(
        'sj-dha70-1',
        'sj-dharti-1970',
        'Khuda Bhi Aasman Se Jab Zameen Par Dekhta Hoga',
        'Mohammed Rafi',
        'Dharti',
        1970,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'sj-mera-naam-joker-1970',
    directorId: 'shankar-jaikishan',
    title: 'Mera Naam Joker',
    year: 1970,
    cast: 'Raj Kapoor, Simi Garewal, Padmini, Manoj Kumar',
    label: 'HMV / Saregama',
    significance: 'Filmfare Award Winner — Best Music Director (1970); R.K. Films magnum opus',
    songs: [
      song(
        'sj-mnj70-1',
        'sj-mera-naam-joker-1970',
        'Jeena Yahan Marna Yahan',
        'Mukesh',
        'Mera Naam Joker',
        1970,
        { lyricist: 'Shailendra' }
      ),
      song(
        'sj-mnj70-2',
        'sj-mera-naam-joker-1970',
        'Ae Bhai Zara Dekh Ke Chalo',
        'Manna Dey',
        'Mera Naam Joker',
        1970,
        { lyricist: 'Neeraj' }
      ),
      song(
        'sj-mnj70-3',
        'sj-mera-naam-joker-1970',
        'Jaane Kahan Gaye Woh Din',
        'Mukesh',
        'Mera Naam Joker',
        1970,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-pagla-kahin-ka-1970',
    directorId: 'shankar-jaikishan',
    title: 'Pagla Kahin Ka',
    year: 1970,
    cast: 'Shammi Kapoor, Asha Parekh',
    songs: [
      song(
        'sj-pkk70-1',
        'sj-pagla-kahin-ka-1970',
        'Tum Mujhe Yun Bhula Na Paoge',
        'Mohammed Rafi',
        'Pagla Kahin Ka',
        1970,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-pehchan-1970',
    directorId: 'shankar-jaikishan',
    title: 'Pehchan',
    year: 1970,
    cast: 'Manoj Kumar, Babita',
    significance: 'Filmfare Award Winner — Best Music Director (1970)',
    songs: [
      song(
        'sj-peh70-1',
        'sj-pehchan-1970',
        'Bas Yahi Apradh Main Har Baar Karta Hoon',
        'Mukesh',
        'Pehchan',
        1970,
        { lyricist: 'Neeraj' }
      ),
      song(
        'sj-peh70-2',
        'sj-pehchan-1970',
        'Sabse Bada Nadan Wohi Hai',
        'Mukesh',
        'Pehchan',
        1970,
        { lyricist: 'Verma Malik' }
      ),
    ],
  },
  {
    id: 'sj-tum-haseen-main-jawan-1970',
    directorId: 'shankar-jaikishan',
    title: 'Tum Haseen Main Jawan',
    year: 1970,
    cast: 'Dharmendra, Hema Malini',
    songs: [
      song(
        'sj-thmj70-1',
        'sj-tum-haseen-main-jawan-1970',
        'Chehre Pe Girin Zulfen',
        'Mohammed Rafi',
        'Tum Haseen Main Jawan',
        1970,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'sj-umang-1970',
    directorId: 'shankar-jaikishan',
    title: 'Umang',
    year: 1970,
    cast: 'Subhash Ghai, Sohan Kapila',
    songs: [
      song(
        'sj-uma70-1',
        'sj-umang-1970',
        'Naach Meri Jaan Naach',
        'Asha Bhosle',
        'Umang',
        1970,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-tee-mee-navhech-1970',
    directorId: 'shankar-jaikishan',
    title: 'Tee Mee Navhech (Marathi)',
    year: 1970,
    cast: 'Prabhakar Panshikar, Raja Gosavi',
    significance: 'Rare Marathi feature soundtrack by Shankar–Jaikishan',
    songs: [
      song(
        'sj-tmn70-1',
        'sj-tee-mee-navhech-1970',
        'Tee Mee Navhech (Marathi Soundtrack)',
        'Asha Bhosle',
        'Tee Mee Navhech Marathi',
        1970
      ),
    ],
  },
  {
    id: 'sj-albela-1971',
    directorId: 'shankar-jaikishan',
    title: 'Albela',
    year: 1971,
    cast: 'Mehmood, Aruna Irani',
    songs: [
      song(
        'sj-alb71-1',
        'sj-albela-1971',
        'Ae Mere Dil Mat Kar Kisi Pe Aitbaar',
        'Kishore Kumar',
        'Albela',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-andaz-1971',
    directorId: 'shankar-jaikishan',
    title: 'Andaz',
    year: 1971,
    cast: 'Shammi Kapoor, Hema Malini, Rajesh Khanna',
    label: 'HMV / Saregama',
    significance: 'Nominated for Filmfare Best Music Director (1971); features Zindagi Ek Safar Hai Suhana',
    songs: [
      song(
        'sj-and71-1',
        'sj-andaz-1971',
        'Zindagi Ek Safar Hai Suhana',
        'Kishore Kumar, Asha Bhosle',
        'Andaz',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
      song(
        'sj-and71-2',
        'sj-andaz-1971',
        'Re Mama Re Mama Re',
        'Mohammed Rafi',
        'Andaz',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-balidaan-1971',
    directorId: 'shankar-jaikishan',
    title: 'Balidaan',
    year: 1971,
    cast: 'Manoj Kumar, Saira Banu',
    songs: [
      song(
        'sj-bal71-1',
        'sj-balidaan-1971',
        'Hai Chanda Chanda Chanda',
        'Kishore Kumar, Asha Bhosle',
        'Balidaan',
        1971
      ),
    ],
  },
  {
    id: 'sj-bombay-talkie-1971',
    directorId: 'shankar-jaikishan',
    title: 'Bombay Talkie',
    year: 1971,
    cast: 'Shashi Kapoor, Jennifer Kendal',
    significance: 'Merchant Ivory English-Hindi production scored by Shankar–Jaikishan',
    songs: [
      song(
        'sj-bt71-1',
        'sj-bombay-talkie-1971',
        'Typewriter Tip Tip Tip',
        'Kishore Kumar, Asha Bhosle',
        'Bombay Talkie',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-duniya-kya-jaane-1971',
    directorId: 'shankar-jaikishan',
    title: 'Duniya Kya Jaane',
    year: 1971,
    cast: 'Prem Nath, Bharathi',
    songs: [
      song(
        'sj-dkj71-1',
        'sj-duniya-kya-jaane-1971',
        'Saanjh Savere Nainon Mein Tere',
        'Lata Mangeshkar',
        'Duniya Kya Jaane',
        1971
      ),
    ],
  },
  {
    id: 'sj-ek-nari-ek-brahmachari-1971',
    directorId: 'shankar-jaikishan',
    title: 'Ek Nari Ek Brahmachari',
    year: 1971,
    cast: 'Jeetendra, Mumtaz',
    songs: [
      song(
        'sj-eneb71-1',
        'sj-ek-nari-ek-brahmachari-1971',
        'Lapa Tosa Nanpa',
        'Kishore Kumar, Sharda',
        'Ek Nari Ek Brahmachari',
        1971,
        { lyricist: 'Neeraj' }
      ),
    ],
  },
  {
    id: 'sj-elaan-1971',
    directorId: 'shankar-jaikishan',
    title: 'Elaan',
    year: 1971,
    cast: 'Vinod Mehra, Rekha, Vinod Khanna',
    songs: [
      song(
        'sj-ela71-1',
        'sj-elaan-1971',
        'Aaj To Junoon Par Hai',
        'Asha Bhosle',
        'Elaan',
        1971
      ),
    ],
  },
  {
    id: 'sj-jaane-anjaane-1971',
    directorId: 'shankar-jaikishan',
    title: 'Jaane-Anjaane',
    year: 1971,
    cast: 'Shammi Kapoor, Leena Chandavarkar',
    songs: [
      song(
        'sj-ja71-1',
        'sj-jaane-anjaane-1971',
        'Chham Chham Baaje Re Payaliya',
        'Manna Dey',
        'Jaane-Anjaane',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-jawan-mohabbat-1971',
    directorId: 'shankar-jaikishan',
    title: 'Jawan Mohabbat',
    year: 1971,
    cast: 'Shammi Kapoor, Asha Parekh',
    songs: [
      song(
        'sj-jm71-1',
        'sj-jawan-mohabbat-1971',
        'Jawan Mohabbat (Nazar Mein Bijli Ada Mein Shokhi)',
        'Mohammed Rafi',
        'Jawan Mohabbat',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-jeevitha-chakram-1971',
    directorId: 'shankar-jaikishan',
    title: 'Jeevitha Chakram (Telugu)',
    year: 1971,
    cast: 'N.T. Rama Rao, Vanisri',
    significance: 'Landmark Telugu soundtrack composed by Shankar–Jaikishan',
    songs: [
      song(
        'sj-jc71-1',
        'sj-jeevitha-chakram-1971',
        'Kallallo Kallu Petti Chudu',
        'Ghantasala, P. Susheela',
        'Jeevitha Chakram Telugu',
        1971
      ),
    ],
  },
  {
    id: 'sj-jwala-1971',
    directorId: 'shankar-jaikishan',
    title: 'Jwala',
    year: 1971,
    cast: 'Sunil Dutt, Madhubala',
    songs: [
      song(
        'sj-jwa71-1',
        'sj-jwala-1971',
        'Aaha Le Gayi O Jiya Le Gayi',
        'Lata Mangeshkar, Asha Bhosle',
        'Jwala',
        1971,
        { lyricist: 'Rajendra Krishan' }
      ),
    ],
  },
  {
    id: 'sj-kal-aaj-aur-kal-1971',
    directorId: 'shankar-jaikishan',
    title: 'Kal Aaj Aur Kal',
    year: 1971,
    cast: 'Prithviraj Kapoor, Raj Kapoor, Randhir Kapoor, Babita',
    songs: [
      song(
        'sj-kaak71-1',
        'sj-kal-aaj-aur-kal-1971',
        'Aap Yahan Aaye Kis Liye',
        'Kishore Kumar, Asha Bhosle',
        'Kal Aaj Aur Kal',
        1971,
        { lyricist: 'Neeraj' }
      ),
      song(
        'sj-kaak71-2',
        'sj-kal-aaj-aur-kal-1971',
        'Bhanwre Ki Gunjan Hai Mera Dil',
        'Kishore Kumar',
        'Kal Aaj Aur Kal',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-lal-patthar-1971',
    directorId: 'shankar-jaikishan',
    title: 'Lal Patthar',
    year: 1971,
    cast: 'Raaj Kumar, Hema Malini, Rakhee',
    songs: [
      song(
        'sj-lp71-1',
        'sj-lal-patthar-1971',
        'Geet Gaata Hoon Main Gungunata Hoon Main',
        'Kishore Kumar',
        'Lal Patthar',
        1971,
        { lyricist: 'Dev Kohli' }
      ),
    ],
  },
  {
    id: 'sj-main-sundar-hoon-1971',
    directorId: 'shankar-jaikishan',
    title: 'Main Sundar Hoon',
    year: 1971,
    cast: 'Mehmood, Leena Chandavarkar, Biswajeet',
    songs: [
      song(
        'sj-msh71-1',
        'sj-main-sundar-hoon-1971',
        'Naach Meri Jaan Fatafat',
        'Kishore Kumar, Asha Bhosle',
        'Main Sundar Hoon',
        1971
      ),
    ],
  },
  {
    id: 'sj-nadaan-1971',
    directorId: 'shankar-jaikishan',
    title: 'Nadaan',
    year: 1971,
    cast: 'Navin Nischol, Asha Parekh',
    songs: [
      song(
        'sj-nad71-1',
        'sj-nadaan-1971',
        'Bolo Na Bolo Kuchh To Bolo',
        'Lata Mangeshkar',
        'Nadaan',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-parde-ke-peechey-1971',
    directorId: 'shankar-jaikishan',
    title: 'Parde Ke Peechey',
    year: 1971,
    cast: 'Vinod Mehra, Yogeeta Bali',
    songs: [
      song(
        'sj-pkp71-1',
        'sj-parde-ke-peechey-1971',
        'Parde Ke Peechey Kya Hai',
        'Kishore Kumar, Asha Bhosle',
        'Parde Ke Peechey',
        1971
      ),
    ],
  },
  {
    id: 'sj-patanga-1971',
    directorId: 'shankar-jaikishan',
    title: 'Patanga',
    year: 1971,
    cast: 'Shashi Kapoor, Vimi',
    songs: [
      song(
        'sj-pat71-1',
        'sj-patanga-1971',
        'Patanga (Soundtrack)',
        'Mohammed Rafi, Asha Bhosle',
        'Patanga',
        1971
      ),
    ],
  },
  {
    id: 'sj-preetam-1971',
    directorId: 'shankar-jaikishan',
    title: 'Preetam',
    year: 1971,
    cast: 'Shammi Kapoor, Leena Chandavarkar',
    songs: [
      song(
        'sj-pre71-1',
        'sj-preetam-1971',
        'Preetam Meri Duniya Mein Do Din To Rahe Hote',
        'Lata Mangeshkar',
        'Preetam',
        1971,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-seema-1971',
    directorId: 'shankar-jaikishan',
    title: 'Seema',
    year: 1971,
    cast: 'Kabir Bedi, Simi Garewal, Rakesh Roshan',
    songs: [
      song(
        'sj-see71-1',
        'sj-seema-1971',
        'Jab Bhi Yeh Dil Udaas Hota Hai',
        'Mohammed Rafi, Sharda',
        'Seema',
        1971,
        { lyricist: 'Gulzar' }
      ),
    ],
  },
  {
    id: 'sj-yaar-mera-1971',
    directorId: 'shankar-jaikishan',
    title: 'Yaar Mera',
    year: 1971,
    cast: 'Jeetendra, Rakhee',
    songs: [
      song(
        'sj-ym71-1',
        'sj-yaar-mera-1971',
        'Yaar Mera (Soundtrack)',
        'Mohammed Rafi, Suman Kalyanpur',
        'Yaar Mera',
        1971
      ),
    ],
  },

  // =========================================================================
  // 1972 – 1991: Shankar’s Continuation Under the Shankar–Jaikishan Banner
  // =========================================================================
  {
    id: 'sj-aan-baan-1972',
    directorId: 'shankar-jaikishan',
    title: 'Aan Baan',
    year: 1972,
    cast: 'Rajendra Kumar, Rakhee',
    songs: [
      song(
        'sj-ab72-1',
        'sj-aan-baan-1972',
        'Badnaam Ho Gaya Dil Tere Pyar Mein',
        'Mohammed Rafi',
        'Aan Baan',
        1972,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-aankh-micholi-1972',
    directorId: 'shankar-jaikishan',
    title: 'Aankh Micholi',
    year: 1972,
    cast: 'Rakesh Roshan, Bharathi',
    songs: [
      song(
        'sj-am72-1',
        'sj-aankh-micholi-1972',
        'Dil Mein Jo Baatein Hain Aaj Chalo Kah Dein',
        'Kishore Kumar, Asha Bhosle',
        'Aankh Micholi',
        1972
      ),
    ],
  },
  {
    id: 'sj-aankhon-aankhon-mein-1972',
    directorId: 'shankar-jaikishan',
    title: 'Aankhon Aankhon Mein',
    year: 1972,
    cast: 'Rakesh Roshan, Rakhee',
    songs: [
      song(
        'sj-aam72-1',
        'sj-aankhon-aankhon-mein-1972',
        'Aankhon Aankhon Mein Baat Hone Do',
        'Kishore Kumar, Asha Bhosle',
        'Aankhon Aankhon Mein',
        1972
      ),
    ],
  },
  {
    id: 'sj-bandagi-1972',
    directorId: 'shankar-jaikishan',
    title: 'Bandagi',
    year: 1972,
    cast: 'Vinod Mehra, Pandharibai',
    songs: [
      song(
        'sj-ban72-1',
        'sj-bandagi-1972',
        'Phoolon Ki Tarah Woh Hansti Thi',
        'Kishore Kumar',
        'Bandagi',
        1972
      ),
    ],
  },
  {
    id: 'sj-be-imaan-1972',
    directorId: 'shankar-jaikishan',
    title: 'Be-Imaan',
    year: 1972,
    cast: 'Manoj Kumar, Rakhee',
    significance: 'Filmfare Award Winner — Best Music Director (1972)',
    songs: [
      song(
        'sj-bei72-1',
        'sj-be-imaan-1972',
        'Jai Bolo Be-Imaan Ki',
        'Mukesh',
        'Be-Imaan',
        1972,
        { lyricist: 'Verma Malik' }
      ),
    ],
  },
  {
    id: 'sj-dil-daulat-duniya-1972',
    directorId: 'shankar-jaikishan',
    title: 'Dil Daulat Duniya',
    year: 1972,
    cast: 'Rajesh Khanna, Sadhana, Ashok Kumar',
    songs: [
      song(
        'sj-ddd72-1',
        'sj-dil-daulat-duniya-1972',
        'O Meri Lara Loo',
        'Kishore Kumar',
        'Dil Daulat Duniya',
        1972,
        { lyricist: 'Verma Malik' }
      ),
    ],
  },
  {
    id: 'sj-jangal-mein-mangal-1972',
    directorId: 'shankar-jaikishan',
    title: 'Jangal Mein Mangal',
    year: 1972,
    cast: 'Kiran Kumar, Reena Roy',
    songs: [
      song(
        'sj-jmm72-1',
        'sj-jangal-mein-mangal-1972',
        'Tum Kitni Khoobsurat Ho',
        'Kishore Kumar',
        'Jangal Mein Mangal',
        1972,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-rivaaj-1972',
    directorId: 'shankar-jaikishan',
    title: 'Rivaaj',
    year: 1972,
    cast: 'Sanjeev Kumar, Mala Sinha',
    songs: [
      song(
        'sj-riv72-1',
        'sj-rivaaj-1972',
        'Tere Nain Nashe De Pyale',
        'Mohammed Rafi',
        'Rivaaj',
        1972
      ),
    ],
  },
  {
    id: 'sj-aaj-ki-taaza-khabar-1973',
    directorId: 'shankar-jaikishan',
    title: 'Aaj Ki Taaza Khabar',
    year: 1973,
    cast: 'Kiran Kumar, Radha Saluja, Asrani',
    songs: [
      song(
        'sj-aktk73-1',
        'sj-aaj-ki-taaza-khabar-1973',
        'Mujhe Meri Biwi Se Bachao',
        'Kishore Kumar',
        'Aaj Ki Taaza Khabar',
        1973,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-archana-1973',
    directorId: 'shankar-jaikishan',
    title: 'Archana',
    year: 1973,
    cast: 'Sanjeev Kumar, Simi Garewal',
    songs: [
      song(
        'sj-arc73-1',
        'sj-archana-1973',
        'Jo Dil Ki Tadap Na Jaane',
        'Asha Bhosle',
        'Archana',
        1973,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-chori-chori-1973',
    directorId: 'shankar-jaikishan',
    title: 'Chori Chori',
    year: 1973,
    cast: 'Sanjay Khan, Radha Saluja',
    songs: [
      song(
        'sj-cc73-1',
        'sj-chori-chori-1973',
        'Chori Chori (1973 Soundtrack)',
        'Kishore Kumar, Asha Bhosle',
        'Chori Chori',
        1973
      ),
    ],
  },
  {
    id: 'sj-daman-aur-aag-1973',
    directorId: 'shankar-jaikishan',
    title: 'Daman Aur Aag',
    year: 1973,
    cast: 'Sanjay Khan, Saira Banu',
    songs: [
      song(
        'sj-daa73-1',
        'sj-daman-aur-aag-1973',
        'Thirka Badan To Geet Bhara',
        'Asha Bhosle',
        'Daman Aur Aag',
        1973
      ),
    ],
  },
  {
    id: 'sj-door-nahin-manzil-1973',
    directorId: 'shankar-jaikishan',
    title: 'Door Nahin Manzil',
    year: 1973,
    cast: 'Pradeep Kumar, Reshma',
    songs: [
      song(
        'sj-dnm73-1',
        'sj-door-nahin-manzil-1973',
        'Door Nahin Manzil (Soundtrack)',
        'Lata Mangeshkar, Mohammed Rafi',
        'Door Nahin Manzil',
        1973
      ),
    ],
  },
  {
    id: 'sj-naina-1973',
    directorId: 'shankar-jaikishan',
    title: 'Naina',
    year: 1973,
    cast: 'Shashi Kapoor, Moushumi Chatterjee',
    songs: [
      song(
        'sj-nai73-1',
        'sj-naina-1973',
        'Humko To Jaan Se Pyari Hain Tumhari Aankhen',
        'Mohammed Rafi',
        'Naina',
        1973,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-pyar-ka-rishta-1973',
    directorId: 'shankar-jaikishan',
    title: 'Pyar Ka Rishta',
    year: 1973,
    cast: 'Vinod Khanna, Mumtaz, Shatrughan Sinha',
    songs: [
      song(
        'sj-pkr73-1',
        'sj-pyar-ka-rishta-1973',
        'Aaye Hai Mehfil Mein',
        'Mohammed Rafi, Asha Bhosle',
        'Pyar Ka Rishta',
        1973
      ),
    ],
  },
  {
    id: 'sj-chhote-sarkar-1974',
    directorId: 'shankar-jaikishan',
    title: 'Chhote Sarkar',
    year: 1974,
    cast: 'Shammi Kapoor, Sadhana',
    songs: [
      song(
        'sj-cs74-1',
        'sj-chhote-sarkar-1974',
        'Ek Chhatri Aur Hum Hain Do',
        'Mohammed Rafi, Asha Bhosle',
        'Chhote Sarkar',
        1974,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-insaaniyat-1974',
    directorId: 'shankar-jaikishan',
    title: 'Insaaniyat',
    year: 1974,
    cast: 'Shashi Kapoor, Sujit Kumar, Madan Puri',
    songs: [
      song(
        'sj-ins74-1',
        'sj-insaaniyat-1974',
        'Chalte Chalte Yahan Koi Mil Gaya',
        'Kishore Kumar',
        'Insaaniyat',
        1974
      ),
    ],
  },
  {
    id: 'sj-international-crook-1974',
    directorId: 'shankar-jaikishan',
    title: 'International Crook',
    year: 1974,
    cast: 'Dharmendra, Saira Banu, Feroz Khan',
    songs: [
      song(
        'sj-ic74-1',
        'sj-international-crook-1974',
        'Mere Dil Mein Tu Hi Tu Hai',
        'Kishore Kumar',
        'International Crook',
        1974
      ),
    ],
  },
  {
    id: 'sj-mera-vachan-geeta-ki-kasam-1974',
    directorId: 'shankar-jaikishan',
    title: 'Mera Vachan Geeta Ki Kasam',
    year: 1974,
    cast: 'Sanjay Khan, Leena Chandavarkar',
    songs: [
      song(
        'sj-mvgkk74-1',
        'sj-mera-vachan-geeta-ki-kasam-1974',
        'Mera Vachan Geeta Ki Kasam (Soundtrack)',
        'Asha Bhosle',
        'Mera Vachan Geeta Ki Kasam',
        1974
      ),
    ],
  },
  {
    id: 'sj-resham-ki-dori-1974',
    directorId: 'shankar-jaikishan',
    title: 'Resham Ki Dori',
    year: 1974,
    cast: 'Dharmendra, Saira Banu',
    significance: 'Nominated for Filmfare Best Music Director (1974); remembered for Behna Ne Bhai Ki Kalai Se',
    songs: [
      song(
        'sj-rkd74-1',
        'sj-resham-ki-dori-1974',
        'Behna Ne Bhai Ki Kalai Se Pyar Bandha Hai',
        'Suman Kalyanpur',
        'Resham Ki Dori',
        1974,
        { lyricist: 'Indeevar' }
      ),
    ],
  },
  {
    id: 'sj-tarzan-mera-saathi-1974',
    directorId: 'shankar-jaikishan',
    title: 'Tarzan Mera Saathi',
    year: 1974,
    cast: 'Dara Singh, Mumtaz',
    songs: [
      song(
        'sj-tms74-1',
        'sj-tarzan-mera-saathi-1974',
        'Tarzan Mera Saathi (Soundtrack)',
        'Asha Bhosle',
        'Tarzan Mera Saathi',
        1974
      ),
    ],
  },
  {
    id: 'sj-vachan-1974',
    directorId: 'shankar-jaikishan',
    title: 'Vachan',
    year: 1974,
    cast: 'Shashi Kapoor, Vimi',
    songs: [
      song(
        'sj-vac74-1',
        'sj-vachan-1974',
        'Kisi Ki Na Kisi Ki',
        'Kishore Kumar',
        'Vachan',
        1974
      ),
    ],
  },
  {
    id: 'sj-do-jhoot-1975',
    directorId: 'shankar-jaikishan',
    title: 'Do Jhoot',
    year: 1975,
    cast: 'Vinod Mehra, Moushumi Chatterjee',
    songs: [
      song(
        'sj-dj75-1',
        'sj-do-jhoot-1975',
        'Chhatri Na Khol Ud Jaayegi',
        'Kishore Kumar, Usha Mangeshkar',
        'Do Jhoot',
        1975
      ),
    ],
  },
  {
    id: 'sj-love-in-bombay-1975',
    directorId: 'shankar-jaikishan',
    title: 'Love in Bombay',
    year: 1975,
    cast: 'Joy Mukherjee, Waheeda Rehman, Ashok Kumar',
    songs: [
      song(
        'sj-lib75-1',
        'sj-love-in-bombay-1975',
        'Majha Ho Gaya Pyar Mein',
        'Kishore Kumar, Asha Bhosle',
        'Love in Bombay',
        1975
      ),
    ],
  },
  {
    id: 'sj-neelma-1975',
    directorId: 'shankar-jaikishan',
    title: 'Neelma',
    year: 1975,
    cast: 'Sunil Dutt, Zahida',
    songs: [
      song(
        'sj-nee75-1',
        'sj-neelma-1975',
        'Neelma (Soundtrack)',
        'Kishore Kumar, Asha Bhosle',
        'Neelma',
        1975
      ),
    ],
  },
  {
    id: 'sj-saazish-1975',
    directorId: 'shankar-jaikishan',
    title: 'Saazish',
    year: 1975,
    cast: 'Dharmendra, Saira Banu',
    songs: [
      song(
        'sj-saa75-1',
        'sj-saazish-1975',
        'Na Takht Chaahiye Na Taaj Chaahiye',
        'Kishore Kumar',
        'Saazish',
        1975,
        { lyricist: 'Hasrat Jaipuri' }
      ),
    ],
  },
  {
    id: 'sj-sanyasi-1975',
    directorId: 'shankar-jaikishan',
    title: 'Sanyasi',
    year: 1975,
    cast: 'Manoj Kumar, Hema Malini',
    significance: 'Blockbuster 1975 soundtrack nominated for Filmfare Best Music Director',
    songs: [
      song(
        'sj-san75-1',
        'sj-sanyasi-1975',
        'Chal Sanyasi Mandir Mein',
        'Mukesh, Lata Mangeshkar',
        'Sanyasi',
        1975,
        { lyricist: 'Vishweshwar Sharma' }
      ),
      song(
        'sj-san75-2',
        'sj-sanyasi-1975',
        'Sun Baalam Tujhse Kehna',
        'Mukesh, Lata Mangeshkar',
        'Sanyasi',
        1975,
        { lyricist: 'M.G. Hashmat' }
      ),
    ],
  },
  {
    id: 'sj-dhoop-chhaon-1977',
    directorId: 'shankar-jaikishan',
    title: 'Dhoop Chhaon',
    year: 1977,
    cast: 'Sanjeev Kumar, Hema Malini, Yogeeta Bali',
    songs: [
      song(
        'sj-dc77-1',
        'sj-dhoop-chhaon-1977',
        'Ek Panchhi Ban Ke Ud Jaoon',
        'Lata Mangeshkar',
        'Dhoop Chhaon',
        1977
      ),
    ],
  },
  {
    id: 'sj-duniyadari-1977',
    directorId: 'shankar-jaikishan',
    title: 'Duniyadari',
    year: 1977,
    cast: 'Vinod Mehra, Bindiya Goswami',
    songs: [
      song(
        'sj-dun77-1',
        'sj-duniyadari-1977',
        'Pyar Karne Ka Zamana Aaya',
        'Asha Bhosle, Amit Kumar',
        'Duniyadari',
        1977
      ),
    ],
  },
  {
    id: 'sj-mahfil-1978',
    directorId: 'shankar-jaikishan',
    title: 'Mahfil',
    year: 1978,
    cast: 'Ashok Kumar, Sadhana, Anil Dhawan',
    songs: [
      song(
        'sj-mah78-1',
        'sj-mahfil-1978',
        'Mahfil (Soundtrack)',
        'Mohammed Rafi, Asha Bhosle',
        'Mahfil',
        1978
      ),
    ],
  },
  {
    id: 'sj-atmaram-1979',
    directorId: 'shankar-jaikishan',
    title: 'Atmaram',
    year: 1979,
    cast: 'Shatrughan Sinha, Bindiya Goswami',
    songs: [
      song(
        'sj-atm79-1',
        'sj-atmaram-1979',
        'Atmaram (Soundtrack)',
        'Kishore Kumar, Asha Bhosle',
        'Atmaram',
        1979
      ),
    ],
  },
  {
    id: 'sj-ganga-aur-geeta-1979',
    directorId: 'shankar-jaikishan',
    title: 'Ganga Aur Geeta',
    year: 1979,
    cast: 'Reena Roy, Kabir Bedi',
    songs: [
      song(
        'sj-gag79-1',
        'sj-ganga-aur-geeta-1979',
        'Ganga Aur Geeta (Soundtrack)',
        'Asha Bhosle, Usha Mangeshkar',
        'Ganga Aur Geeta',
        1979
      ),
    ],
  },
  {
    id: 'sj-the-gold-medal-1979',
    directorId: 'shankar-jaikishan',
    title: 'The Gold Medal',
    year: 1979,
    cast: 'Dharmendra, Jeetendra, Shatrughan Sinha, Rakhee',
    songs: [
      song(
        'sj-tgm79-1',
        'sj-the-gold-medal-1979',
        'Aaja Re Aaja',
        'Lata Mangeshkar',
        'The Gold Medal',
        1979
      ),
    ],
  },
  {
    id: 'sj-garam-khoon-1980',
    directorId: 'shankar-jaikishan',
    title: 'Garam Khoon',
    year: 1980,
    cast: 'Vinod Khanna, Sulakshana Pandit',
    songs: [
      song(
        'sj-gk80-1',
        'sj-garam-khoon-1980',
        'Pardesiya Tere Desh Mein',
        'Mohammed Rafi, Sulakshana Pandit',
        'Garam Khoon',
        1980
      ),
    ],
  },
  {
    id: 'sj-chorni-1981',
    directorId: 'shankar-jaikishan',
    title: 'Chorni',
    year: 1981,
    cast: 'Jeetendra, Neetu Singh',
    songs: [
      song(
        'sj-cho81-1',
        'sj-chorni-1981',
        'Kehta Hai Yeh Dil Deewana',
        'Asha Bhosle, Kishore Kumar',
        'Chorni',
        1981
      ),
    ],
  },
  {
    id: 'sj-naari-1981',
    directorId: 'shankar-jaikishan',
    title: 'Naari',
    year: 1981,
    cast: 'Rakesh Roshan, Reena Roy',
    songs: [
      song(
        'sj-naa81-1',
        'sj-naari-1981',
        'Naari (Soundtrack)',
        'Asha Bhosle',
        'Naari',
        1981
      ),
    ],
  },
  {
    id: 'sj-eent-ka-jawab-patthar-1982',
    directorId: 'shankar-jaikishan',
    title: 'Eent Ka Jawab Patthar',
    year: 1982,
    cast: 'Sarika, Anil Dhawan',
    songs: [
      song(
        'sj-ekjp82-1',
        'sj-eent-ka-jawab-patthar-1982',
        'Eent Ka Jawab Patthar (Soundtrack)',
        'Asha Bhosle, Anwar',
        'Eent Ka Jawab Patthar',
        1982
      ),
    ],
  },
  {
    id: 'sj-film-hi-film-1983',
    directorId: 'shankar-jaikishan',
    title: 'Film Hi Film',
    year: 1983,
    cast: 'Pran, Ramesh Deo, Archival Compilation',
    songs: [
      song(
        'sj-fhf83-1',
        'sj-film-hi-film-1983',
        'Film Hi Film (Soundtrack)',
        'Kishore Kumar, Asha Bhosle',
        'Film Hi Film',
        1983
      ),
    ],
  },
  {
    id: 'sj-papi-pet-ka-sawal-hai-1984',
    directorId: 'shankar-jaikishan',
    title: 'Papi Pet Ka Sawal Hai',
    year: 1984,
    cast: 'Rajesh Khanna, Jaya Prada, Shatrughan Sinha',
    songs: [
      song(
        'sj-ppksh84-1',
        'sj-papi-pet-ka-sawal-hai-1984',
        'Khilona Jaan Kar Tum To',
        'Kishore Kumar, Lata Mangeshkar',
        'Papi Pet Ka Sawal Hai',
        1984
      ),
    ],
  },
  {
    id: 'sj-inteqaam-ki-aag-1986',
    directorId: 'shankar-jaikishan',
    title: 'Inteqaam Ki Aag',
    year: 1986,
    cast: 'Mahendra Sandhu, Kajal Kiran',
    songs: [
      song(
        'sj-ika86-1',
        'sj-inteqaam-ki-aag-1986',
        'Inteqaam Ki Aag (Soundtrack)',
        'Asha Bhosle, Anwar',
        'Inteqaam Ki Aag',
        1986
      ),
    ],
  },
  {
    id: 'sj-kaanch-ki-deewar-1986',
    directorId: 'shankar-jaikishan',
    title: 'Kaanch Ki Deewar',
    year: 1986,
    cast: 'Sanjeev Kumar, Smita Patil',
    songs: [
      song(
        'sj-kkd86-1',
        'sj-kaanch-ki-deewar-1986',
        'Ari O Chhori',
        'Asha Bhosle, Kishore Kumar',
        'Kaanch Ki Deewar',
        1986
      ),
    ],
  },
  {
    id: 'sj-krishna-krishna-1986',
    directorId: 'shankar-jaikishan',
    title: 'Krishna Krishna',
    year: 1986,
    cast: 'Biswajeet, Anita Guha',
    songs: [
      song(
        'sj-kk86-1',
        'sj-krishna-krishna-1986',
        'Krishna Krishna (Soundtrack)',
        'Lata Mangeshkar, Mahendra Kapoor',
        'Krishna Krishna',
        1986
      ),
    ],
  },
  {
    id: 'sj-gori-1991',
    directorId: 'shankar-jaikishan',
    title: 'Gori',
    year: 1991,
    cast: 'Archival / Posthumous Release',
    significance: 'Final posthumous credit listed under the Shankar–Jaikishan banner (1991)',
    songs: [
      song(
        'sj-gori91-1',
        'sj-gori-1991',
        'Gori (Soundtrack)',
        'Asha Bhosle, Mohammed Aziz',
        'Gori',
        1991
      ),
    ],
  },
];
