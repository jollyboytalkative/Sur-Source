import type { MovieEntry, SongEntry } from '../types/archive.ts';

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
  bollywoodLink: yt(`${title} ${movieTitle} ${year} A R Rahman`),
});

export const AR_RAHMAN_BOLLYWOOD_MOVIES: MovieEntry[] = [
  {
    id: 'arr-rangeela-1995',
    directorId: 'ar-rahman',
    title: 'Rangeela',
    year: 1995,
    cast: 'Aamir Khan, Urmila Matondkar, Jackie Shroff',
    label: 'Tips Music',
    significance:
      "A. R. Rahman's full-fledged original Hindi (Bollywood) debut, redefining 1990s Mumbai studio sound design.",
    songs: [
      origSong(
        'arr-rangeela-1995',
        1,
        'Rangeela Re',
        'Asha Bhosle, Aditya Narayan',
        'Rangeela',
        1995,
        'Celebrated jazz-pop and acoustic brass showcase marking his first original Bollywood feature album.'
      ),
      origSong(
        'arr-rangeela-1995',
        2,
        'Tanha Tanha Yahan Pe Jeena',
        'Asha Bhosle',
        'Rangeela',
        1995
      ),
      origSong(
        'arr-rangeela-1995',
        3,
        'Hai Rama Yeh Kya Hua',
        'Hariharan, Swarnalatha',
        'Rangeela',
        1995
      ),
      origSong(
        'arr-rangeela-1995',
        4,
        'Kya Kare Kya Na Kare',
        'Udit Narayan',
        'Rangeela',
        1995
      ),
      origSong(
        'arr-rangeela-1995',
        5,
        'Pyar Yeh Jaane Kaisa Hai',
        'Suresh Wadkar, Kavita Krishnamurthy',
        'Rangeela',
        1995
      ),
    ],
  },
  {
    id: 'arr-daud-1997',
    directorId: 'ar-rahman',
    title: 'Daud',
    year: 1997,
    cast: 'Sanjay Dutt, Urmila Matondkar',
    label: 'Tips Music',
    significance:
      "Ram Gopal Varma's comedy-thriller pairing Rahman with Mehboob for high-tempo brass and percussion tracks.",
    songs: [
      origSong(
        'arr-daud-1997',
        1,
        'Zehreela Pyar',
        'Asha Bhosle, Deena Chandra Das',
        'Daud',
        1997
      ),
      origSong(
        'arr-daud-1997',
        2,
        'Shabba Shabba',
        'Sonu Nigam, Swarnalatha, Ranu Mukherjee',
        'Daud',
        1997
      ),
      origSong(
        'arr-daud-1997',
        3,
        'O Bhavre',
        'K. J. Yesudas, Asha Bhosle',
        'Daud',
        1997
      ),
    ],
  },
  {
    id: 'arr-kabhi-na-kabhi-1998',
    directorId: 'ar-rahman',
    title: 'Kabhi Na Kabhi',
    year: 1998,
    cast: 'Jackie Shroff, Anil Kapoor, Pooja Bhatt',
    label: 'Sony Music India',
    significance:
      'Priyadarshan romantic drama noted by music archivists for the brief Simon & Garfunkel motif in "Tu Hi Tu".',
    songs: [
      {
        id: 'arr-kabhi-na-kabhi-1998-1',
        movieId: 'arr-kabhi-na-kabhi-1998',
        title: 'Tu Hi Tu',
        singers: 'M. G. Sreekumar, Chitra',
        adaptationType: 'inspired',
        originalSongTitle: 'Scarborough Fair',
        originalArtist: 'Simon & Garfunkel',
        originalYear: '1966',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'ITWOFS notes that the opening 4–5 words mirror the English folk standard "Scarborough Fair" before diverging into an original Carnatic pattern.',
        bollywoodLink: yt('Tu Hi Tu Kabhi Na Kabhi 1998 A R Rahman'),
        originalLink: 'https://www.youtube.com/watch?v=-Jj4s9I-53g',
        referenceSource: 'ITWOFS (Coincidences)',
      },
      origSong(
        'arr-kabhi-na-kabhi-1998',
        2,
        'Mere Dil Ka Woh Shehzada',
        'Asha Bhosle',
        'Kabhi Na Kabhi',
        1998
      ),
    ],
  },
  {
    id: 'arr-dil-se-1998',
    directorId: 'ar-rahman',
    title: 'Dil Se..',
    year: 1998,
    cast: 'Shah Rukh Khan, Manisha Koirala, Preity Zinta',
    label: 'Venus Records',
    significance:
      "Mani Ratnam's Hindi political drama featuring Gulzar's poetry and iconic Sufi and regional folk fusions.",
    songs: [
      {
        id: 'arr-dil-se-1998-1',
        movieId: 'arr-dil-se-1998',
        title: 'Chaiyya Chaiyya',
        singers: 'Sukhwinder Singh, Sapna Awasthi',
        lyricist: 'Gulzar',
        adaptationType: 'inspired',
        originalSongTitle: 'Thaiya Thaiya (Tere Ishq Nachaya)',
        originalArtist: 'Baba Bulleh Shah / Punjabi Sufi Folk Tradition',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Refrain and Sufi spiritual meter adapted from Bulleh Shah’s classic "Thaiya Thaiya", reimagined with electronic drum-and-bass grooves.',
        bollywoodLink: yt('Chaiyya Chaiyya Dil Se 1998 A R Rahman'),
        originalLink: 'https://www.youtube.com/watch?v=I1phuqpF8kU',
        referenceSource: 'Gulzar / Public Folk Attribution',
      },
      {
        id: 'arr-dil-se-1998-2',
        movieId: 'arr-dil-se-1998',
        title: 'Jiya Jale',
        singers: 'Lata Mangeshkar, M. G. Sreekumar',
        lyricist: 'Gulzar',
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Kerala Vallappattu & Lullaby',
        originalArtist: 'Malayalam Folk Tradition',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Wove traditional Kerala boat-song chants and regional Malayalam vocal refrains into a Hindi romantic duet.',
        bollywoodLink: yt('Jiya Jale Dil Se 1998 Lata Mangeshkar'),
        originalLink: 'https://www.youtube.com/watch?v=b9LyQn-rXEA',
        referenceSource: 'Liner & Musicology Notes',
      },
      origSong(
        'arr-dil-se-1998',
        3,
        'Dil Se Re',
        'A. R. Rahman, Anuradha Sriram, Anupama',
        'Dil Se..',
        1998
      ),
      origSong(
        'arr-dil-se-1998',
        4,
        'Ae Ajnabi',
        'Udit Narayan, Mahalakshmi Iyer',
        'Dil Se..',
        1998
      ),
      origSong(
        'arr-dil-se-1998',
        5,
        'Satrangi Re',
        'Sonu Nigam, Kavita Krishnamurthy',
        'Dil Se..',
        1998
      ),
    ],
  },
  {
    id: 'arr-1947-earth-1998',
    directorId: 'ar-rahman',
    title: '1947: Earth',
    year: 1998,
    cast: 'Aamir Khan, Nandita Das, Rahul Khanna',
    label: 'Universal Music India',
    significance:
      "Deepa Mehta's Partition drama blending Hindustani classical sitar and Javed Akhtar poetry.",
    songs: [
      origSong(
        'arr-1947-earth-1998',
        1,
        'Dheemi Dheemi',
        'Hariharan',
        '1947: Earth',
        1998
      ),
      origSong(
        'arr-1947-earth-1998',
        2,
        'Ishwar Allah',
        'Anuradha Sriram, Sujata Mohan',
        '1947: Earth',
        1998
      ),
      origSong(
        'arr-1947-earth-1998',
        3,
        'Banno Rani',
        'Sadhana Sargam',
        '1947: Earth',
        1998
      ),
    ],
  },
  {
    id: 'arr-doli-saja-ke-rakhna-1998',
    directorId: 'ar-rahman',
    title: 'Doli Saja Ke Rakhna',
    year: 1998,
    cast: 'Akshaye Khanna, Jyothika',
    label: 'Sony Music India',
    significance:
      'Priyadarshan Hindi romantic drama mixing gentle orchestral ballads with playful instrumental passages.',
    songs: [
      {
        id: 'arr-doli-saja-ke-rakhna-1998-1',
        movieId: 'arr-doli-saja-ke-rakhna-1998',
        title: 'Tara Rum Pum',
        singers: 'Srinivas, Chitra',
        adaptationType: 'inspired',
        originalSongTitle: 'Tequila',
        originalArtist: 'The Champs',
        originalYear: '1958',
        originCategory: 'Western Pop & Ambient',
        adaptationNotes:
          'A short brass riff deep inside the interlude mirrors The Champs’ "Tequila"; noted on ITWOFS as a brief coincidence.',
        bollywoodLink: yt('Tara Rum Pum Doli Saja Ke Rakhna 1998'),
        originalLink: 'https://www.youtube.com/watch?v=4hswHOEQfj8',
        referenceSource: 'ITWOFS (Coincidences)',
      },
      origSong(
        'arr-doli-saja-ke-rakhna-1998',
        2,
        'Kissa Hum Likhenge',
        'Anuradha Paudwal, M. G. Sreekumar',
        'Doli Saja Ke Rakhna',
        1998
      ),
      origSong(
        'arr-doli-saja-ke-rakhna-1998',
        3,
        'Bol Sajni Mori Sajni',
        'Sonu Nigam, Kavita Krishnamurthy',
        'Doli Saja Ke Rakhna',
        1998
      ),
    ],
  },
  {
    id: 'arr-taal-1999',
    directorId: 'ar-rahman',
    title: 'Taal',
    year: 1999,
    cast: 'Aishwarya Rai, Akshaye Khanna, Anil Kapoor',
    label: 'Tips Music',
    significance:
      'Landmark Subhash Ghai musical uniting mountain folk themes with widescreen symphonic orchestration.',
    songs: [
      origSong(
        'arr-taal-1999',
        1,
        'Taal Se Taal Mila',
        'Alka Yagnik, Udit Narayan',
        'Taal',
        1999
      ),
      origSong(
        'arr-taal-1999',
        2,
        'Nahi Samne Tu',
        'Hariharan, Sukhwinder Singh',
        'Taal',
        1999
      ),
      origSong(
        'arr-taal-1999',
        3,
        'Ramta Jogi',
        'Sukhwinder Singh, Alka Yagnik',
        'Taal',
        1999
      ),
      origSong(
        'arr-taal-1999',
        4,
        'Ishq Bina',
        'Anuradha Sriram, Sujata Mohan, Sonu Nigam, A. R. Rahman',
        'Taal',
        1999
      ),
      origSong(
        'arr-taal-1999',
        5,
        'Kahin Aag Lage Lag Jaave',
        'Asha Bhosle, Aditya Narayan, Richa Sharma',
        'Taal',
        1999
      ),
    ],
  },
  {
    id: 'arr-thakshak-1999',
    directorId: 'ar-rahman',
    title: 'Thakshak',
    year: 1999,
    cast: 'Ajay Devgn, Tabu',
    label: 'Venus Records',
    significance:
      "Govind Nihalani's crime drama highlighting understated classical-electronic atmospheres.",
    songs: [
      origSong(
        'arr-thakshak-1999',
        1,
        'Khamosh Raat',
        'Roop Kumar Rathod',
        'Thakshak',
        1999
      ),
      origSong(
        'arr-thakshak-1999',
        2,
        'Rang De',
        'Asha Bhosle',
        'Thakshak',
        1999
      ),
    ],
  },
  {
    id: 'arr-pukar-2000',
    directorId: 'ar-rahman',
    title: 'Pukar',
    year: 2000,
    cast: 'Anil Kapoor, Madhuri Dixit, Namrata Shirodkar',
    label: 'Zee Music / Tips',
    significance:
      'Rajkumar Santoshi drama balancing big-band funk ("Kay Sera Sera") with spiritual ballads.',
    songs: [
      origSong(
        'arr-pukar-2000',
        1,
        'Kay Sera Sera',
        'Shankar Mahadevan, Kavita Krishnamurthy',
        'Pukar',
        2000
      ),
      origSong(
        'arr-pukar-2000',
        2,
        'Sunta Hai Mera Khuda',
        'Udit Narayan, Kavita Krishnamurthy, Swarnalatha',
        'Pukar',
        2000
      ),
      origSong(
        'arr-pukar-2000',
        3,
        'Ek Tu Hi Bharosa',
        'Lata Mangeshkar',
        'Pukar',
        2000
      ),
    ],
  },
  {
    id: 'arr-fiza-2000',
    directorId: 'ar-rahman',
    title: 'Fiza',
    year: 2000,
    cast: 'Karisma Kapoor, Hrithik Roshan, Jaya Bachchan',
    label: 'Tips Music',
    significance:
      'Contributed the spiritual qawwali anthem "Piya Haji Ali" and background score highlights for Khalid Mohammed.',
    songs: [
      {
        id: 'arr-fiza-2000-1',
        movieId: 'arr-fiza-2000',
        title: 'Piya Haji Ali',
        singers: 'Kader Ghulam Mustafa, Murtaza Ghulam Mustafa, Srinivas, A. R. Rahman',
        lyricist: 'Shaukat Ali',
        adaptationType: 'inspired',
        originalSongTitle: 'Traditional Qawwali / Haji Ali Devotional Meter',
        originalArtist: 'Traditional South Asian Qawwali',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Built on traditional Dargah qawwali call-and-response cadence honoring Pir Haji Ali Shah Bukhari.',
        bollywoodLink: yt('Piya Haji Ali Fiza 2000 A R Rahman'),
        originalLink: 'https://www.youtube.com/watch?v=uCPYKteek74',
        referenceSource: 'Soundtrack Liner Credits',
      },
      origSong(
        'arr-fiza-2000',
        2,
        'Mere Watan: Amaanat',
        'Zubeen Garg',
        'Fiza',
        2000
      ),
    ],
  },
  {
    id: 'arr-zubeidaa-2001',
    directorId: 'ar-rahman',
    title: 'Zubeidaa',
    year: 2001,
    cast: 'Karisma Kapoor, Rekha, Manoj Bajpayee',
    label: 'Sony Music India',
    significance:
      "Shyam Benegal's period classic featuring timeless Lata Mangeshkar and Kavita Krishnamurthy melodies.",
    songs: [
      origSong(
        'arr-zubeidaa-2001',
        1,
        'So Gaye Hain',
        'Lata Mangeshkar',
        'Zubeidaa',
        2001
      ),
      origSong(
        'arr-zubeidaa-2001',
        2,
        'Dheeme Dheeme Gaaon',
        'Kavita Krishnamurthy',
        'Zubeidaa',
        2001
      ),
      origSong(
        'arr-zubeidaa-2001',
        3,
        'Mehndi Hai Rachnewali',
        'Alka Yagnik',
        'Zubeidaa',
        2001
      ),
    ],
  },
  {
    id: 'arr-one-2-ka-4-2001',
    directorId: 'ar-rahman',
    title: 'One 2 Ka 4',
    year: 2001,
    cast: 'Shah Rukh Khan, Juhi Chawla, Jackie Shroff',
    label: 'Saregama',
    significance:
      'Action-comedy featuring smooth soul balladry alongside energetic rhythms.',
    songs: [
      origSong(
        'arr-one-2-ka-4-2001',
        1,
        'Khamoshiyan Gungunane Lagi',
        'Sonu Nigam, Lata Mangeshkar',
        'One 2 Ka 4',
        2001
      ),
      origSong(
        'arr-one-2-ka-4-2001',
        2,
        'Haye Dil Ki Bazi Laga',
        'Alka Yagnik, Sonu Nigam',
        'One 2 Ka 4',
        2001
      ),
    ],
  },
  {
    id: 'arr-nayak-2001',
    directorId: 'ar-rahman',
    title: 'Nayak: The Real Hero',
    year: 2001,
    cast: 'Anil Kapoor, Rani Mukerji, Amrish Puri',
    label: 'Tips Music',
    significance:
      "S. Shankar's Hindi political drama featuring fresh Hindi lyrics by Anand Bakshi.",
    songs: [
      origSong(
        'arr-nayak-2001',
        1,
        'Chalo Chale Mitwa',
        'Udit Narayan, Kavita Krishnamurthy',
        'Nayak: The Real Hero',
        2001
      ),
      origSong(
        'arr-nayak-2001',
        2,
        'Ruki Sukhi Roti',
        'Shankar Mahadevan, Alka Yagnik',
        'Nayak: The Real Hero',
        2001
      ),
      origSong(
        'arr-nayak-2001',
        3,
        'Shakalaka Baby',
        'Vasundhara Das, Shiraz Uppal, Pravin Mani',
        'Nayak: The Real Hero',
        2001
      ),
    ],
  },
  {
    id: 'arr-lagaan-2001',
    directorId: 'ar-rahman',
    title: 'Lagaan',
    year: 2001,
    cast: 'Aamir Khan, Gracy Singh',
    label: 'Sony Music India',
    significance:
      'Oscar-nominated historical sports epic winning the National Film Award for Best Music Direction.',
    songs: [
      origSong(
        'arr-lagaan-2001',
        1,
        'Mitwa',
        'Udit Narayan, Alka Yagnik, Sukhwinder Singh, Srinivas',
        'Lagaan',
        2001
      ),
      origSong(
        'arr-lagaan-2001',
        2,
        'Ghanan Ghanan',
        'Udit Narayan, Alka Yagnik, Sukhwinder Singh, Shankar Mahadevan, Shaan',
        'Lagaan',
        2001
      ),
      origSong(
        'arr-lagaan-2001',
        3,
        'Radha Kaise Na Jale',
        'Asha Bhosle, Udit Narayan, Vaishali Samant',
        'Lagaan',
        2001
      ),
      origSong(
        'arr-lagaan-2001',
        4,
        'O Paalanhaare',
        'Lata Mangeshkar, Udit Narayan',
        'Lagaan',
        2001
      ),
      origSong(
        'arr-lagaan-2001',
        5,
        'Chale Chalo',
        'A. R. Rahman, Srinivas',
        'Lagaan',
        2001
      ),
    ],
  },
  {
    id: 'arr-legend-of-bhagat-singh-2002',
    directorId: 'ar-rahman',
    title: 'The Legend of Bhagat Singh',
    year: 2002,
    cast: 'Ajay Devgn, Sushant Singh, Amrita Rao',
    label: 'Tips Music',
    significance:
      'Patriotic historical biopic with Punjabi folk idioms and orchestral marches.',
    songs: [
      origSong(
        'arr-legend-of-bhagat-singh-2002',
        1,
        'Mera Rang De Basanti Chola',
        'Sonu Nigam, Manmohan Waris',
        'The Legend of Bhagat Singh',
        2002
      ),
      origSong(
        'arr-legend-of-bhagat-singh-2002',
        2,
        'Sarfaroshi Ki Tamanna',
        'Sonu Nigam',
        'The Legend of Bhagat Singh',
        2002
      ),
      origSong(
        'arr-legend-of-bhagat-singh-2002',
        3,
        'Jogiya Jogiya',
        'Alka Yagnik, Udit Narayan',
        'The Legend of Bhagat Singh',
        2002
      ),
    ],
  },
  {
    id: 'arr-saathiya-2002',
    directorId: 'ar-rahman',
    title: 'Saathiya',
    year: 2002,
    cast: 'Vivek Oberoi, Rani Mukerji',
    label: 'Yash Raj Music / Saregama',
    significance:
      "Shaad Ali's Hindi romantic feature with Gulzar lyrics and freshly recorded Hindi compositions alongside reworked motifs.",
    songs: [
      origSong(
        'arr-saathiya-2002',
        1,
        'Saathiya',
        'Sonu Nigam',
        'Saathiya',
        2002
      ),
      origSong(
        'arr-saathiya-2002',
        2,
        'O Humdum Suniyo Re',
        'KK, Shaan, Kunal Ganjawala',
        'Saathiya',
        2002
      ),
      origSong(
        'arr-saathiya-2002',
        3,
        'Chhalka Chhalka Re',
        'Richa Sharma, Mahalakshmi Iyer, Vaishali Samant',
        'Saathiya',
        2002
      ),
      origSong(
        'arr-saathiya-2002',
        4,
        'Aye Udi Udi Udi',
        'Adnan Sami',
        'Saathiya',
        2002
      ),
    ],
  },
  {
    id: 'arr-tehzeeb-2003',
    directorId: 'ar-rahman',
    title: 'Tehzeeb',
    year: 2003,
    cast: 'Shabana Azmi, Urmila Matondkar, Arjun Rampal',
    label: 'Times Music',
    significance:
      'Intimate family drama featuring Javed Akhtar lyrics and acoustic ghazal-pop textures.',
    songs: [
      origSong(
        'arr-tehzeeb-2003',
        1,
        'Aksar Is Duniya Mein',
        'Alka Yagnik',
        'Tehzeeb',
        2003
      ),
      origSong(
        'arr-tehzeeb-2003',
        2,
        'Meherbaan Meherbaan',
        'Asha Bhosle, Sukhwinder Singh',
        'Tehzeeb',
        2003
      ),
    ],
  },
  {
    id: 'arr-meenaxi-2004',
    directorId: 'ar-rahman',
    title: 'Meenaxi: A Tale of Three Cities',
    year: 2004,
    cast: 'Tabu, Kunal Kapoor, Nadira Babbar',
    label: 'T-Series',
    significance:
      "M. F. Husain's artistic cinema project pairing Hyderabadi poetry and classical vocal experiments.",
    songs: [
      origSong(
        'arr-meenaxi-2004',
        1,
        'Noor-Un-Ala-Noor',
        'A. R. Rahman, Murtaza Khan, Qadir Khan',
        'Meenaxi: A Tale of Three Cities',
        2004
      ),
      origSong(
        'arr-meenaxi-2004',
        2,
        'Chinnamma Chilakkamma',
        'Sukhwinder Singh',
        'Meenaxi: A Tale of Three Cities',
        2004
      ),
      origSong(
        'arr-meenaxi-2004',
        3,
        'Yeh Rishta Kya Kehlata Hai',
        'Reena Bhardwaj',
        'Meenaxi: A Tale of Three Cities',
        2004
      ),
    ],
  },
  {
    id: 'arr-yuva-2004',
    directorId: 'ar-rahman',
    title: 'Yuva',
    year: 2004,
    cast: 'Ajay Devgn, Abhishek Bachchan, Vivek Oberoi, Rani Mukerji',
    label: 'Venus Records',
    significance:
      "Mani Ratnam's Hindi ensemble drama introducing contemporary youth-rock and electronic grooves.",
    songs: [
      origSong(
        'arr-yuva-2004',
        1,
        'Khuda Hafiz',
        'Sunitha Sarathy, Lucky Ali, Karthik',
        'Yuva',
        2004
      ),
      origSong(
        'arr-yuva-2004',
        2,
        'Fanaa',
        'A. R. Rahman, Sunitha Sarathy, Tanvi Shah',
        'Yuva',
        2004
      ),
      origSong(
        'arr-yuva-2004',
        3,
        'Kabhi Neem Neem',
        'Madhushree, A. R. Rahman',
        'Yuva',
        2004
      ),
    ],
  },
  {
    id: 'arr-lakeer-2004',
    directorId: 'ar-rahman',
    title: 'Lakeer – Forbidden Lines',
    year: 2004,
    cast: 'Sunny Deol, Sunil Shetty, John Abraham',
    label: 'T-Series',
    significance:
      'Action drama with dance grooves and romantic duets penned by Mehboob.',
    songs: [
      origSong(
        'arr-lakeer-2004',
        1,
        'Nachley Nachley',
        'Daler Mehndi, Kunal Ganjawala',
        'Lakeer – Forbidden Lines',
        2004
      ),
      origSong(
        'arr-lakeer-2004',
        2,
        'Sadiyaan',
        'Hariharan, Udit Narayan, Madhushree',
        'Lakeer – Forbidden Lines',
        2004
      ),
    ],
  },
  {
    id: 'arr-dil-ne-jise-apna-kahaa-2004',
    directorId: 'ar-rahman',
    title: 'Dil Ne Jise Apna Kahaa',
    year: 2004,
    cast: 'Salman Khan, Preity Zinta, Bhumika Chawla',
    label: 'T-Series',
    significance:
      'Multi-composer album for which Rahman scored the title song, "Zindagi Hai Dua", and "Jaane Bahara".',
    songs: [
      origSong(
        'arr-dil-ne-jise-apna-kahaa-2004',
        1,
        'Dil Ne Jise Apna Kahaa',
        'Kamal Khan, Sujata Mohan',
        'Dil Ne Jise Apna Kahaa',
        2004
      ),
      origSong(
        'arr-dil-ne-jise-apna-kahaa-2004',
        2,
        'Zindagi Hai Dua',
        'Madhushree, Pamela Jain, Gayatri Iyer',
        'Dil Ne Jise Apna Kahaa',
        2004
      ),
    ],
  },
  {
    id: 'arr-swades-2004',
    directorId: 'ar-rahman',
    title: 'Swades',
    year: 2004,
    cast: 'Shah Rukh Khan, Gayatri Joshi',
    label: 'T-Series',
    significance:
      "Ashutosh Gowariker's deeply loved rural homecoming drama anchored by acoustic shehnai and brass textures.",
    songs: [
      origSong(
        'arr-swades-2004',
        1,
        'Yeh Jo Des Hai Tera',
        'A. R. Rahman',
        'Swades',
        2004
      ),
      origSong(
        'arr-swades-2004',
        2,
        'Yun Hi Chala Chal',
        'Udit Narayan, Kailash Kher, Hariharan',
        'Swades',
        2004
      ),
      origSong(
        'arr-swades-2004',
        3,
        'Saawariya Saawariya',
        'Alka Yagnik',
        'Swades',
        2004
      ),
      origSong(
        'arr-swades-2004',
        4,
        'Pal Pal Hai Bhaari',
        'Madhushree, Vijay Prakash, Ashutosh Gowariker',
        'Swades',
        2004
      ),
    ],
  },
  {
    id: 'arr-kisna-2005',
    directorId: 'ar-rahman',
    title: 'Kisna: The Warrior Poet',
    year: 2005,
    cast: 'Vivek Oberoi, Antonia Bernath, Isha Sharvani',
    label: 'Sony Music India',
    significance:
      "Subhash Ghai's period drama co-composed with Ismail Darbar, featuring Rahman's symphonic themes.",
    songs: [
      origSong(
        'arr-kisna-2005',
        1,
        'Wohi Din Aa Gaya',
        'Sukhwinder Singh, Alka Yagnik',
        'Kisna: The Warrior Poet',
        2005
      ),
      origSong(
        'arr-kisna-2005',
        2,
        'My Wish Comes True',
        'Sunitha Sarathy',
        'Kisna: The Warrior Poet',
        2005
      ),
    ],
  },
  {
    id: 'arr-netaji-subhas-2005',
    directorId: 'ar-rahman',
    title: 'Netaji Subhas Chandra Bose: The Forgotten Hero',
    year: 2005,
    cast: 'Sachin Khedekar, Kulbhushan Kharbanda',
    label: 'Times Music',
    significance:
      "Shyam Benegal's biographical drama featuring orchestral military marches and INA anthems.",
    songs: [
      origSong(
        'arr-netaji-subhas-2005',
        1,
        'Kadam Kadam Badhaye Ja',
        'Vijay Prakash, Choir',
        'Netaji Subhas Chandra Bose',
        2005
      ),
      origSong(
        'arr-netaji-subhas-2005',
        2,
        'Ekla Cholo Re',
        'Sonu Nigam, Nachiketa Chakraborty',
        'Netaji Subhas Chandra Bose',
        2005
      ),
    ],
  },
  {
    id: 'arr-mangal-pandey-2005',
    directorId: 'ar-rahman',
    title: 'Mangal Pandey: The Rising',
    year: 2005,
    cast: 'Aamir Khan, Rani Mukerji, Toby Stephens',
    label: 'Yash Raj Music',
    significance:
      '1857 period epic uniting rustic Bhojpuri folk idioms and battle percussion.',
    songs: [
      origSong(
        'arr-mangal-pandey-2005',
        1,
        'Al Maddath Maula',
        'A. R. Rahman, Kailash Kher, Murtaza Khan',
        'Mangal Pandey: The Rising',
        2005
      ),
      origSong(
        'arr-mangal-pandey-2005',
        2,
        'Holi Re',
        'Aamir Khan, Udit Narayan, Madhushree, Srinivas, Chinmayi',
        'Mangal Pandey: The Rising',
        2005
      ),
    ],
  },
  {
    id: 'arr-water-2005',
    directorId: 'ar-rahman',
    title: 'Water',
    year: 2005,
    cast: 'Seema Biswas, Lisa Ray, John Abraham',
    label: 'Sony Music',
    significance:
      "Deepa Mehta's Hindi-language Academy Award–nominated film anchored by traditional bhajan and classical motifs.",
    songs: [
      origSong(
        'arr-water-2005',
        1,
        'Aayo Re Sakhi',
        'Sadhana Sargam, Sukhwinder Singh',
        'Water',
        2005
      ),
      origSong(
        'arr-water-2005',
        2,
        'Naina Neer Bahaye',
        'Sadhana Sargam',
        'Water',
        2005
      ),
    ],
  },
  {
    id: 'arr-rang-de-basanti-2006',
    directorId: 'ar-rahman',
    title: 'Rang De Basanti',
    year: 2006,
    cast: 'Aamir Khan, Siddharth, Soha Ali Khan, Sharman Joshi',
    label: 'Sony Music India',
    significance:
      'Generational youth anthem soundtrack blending indie rock guitars, Punjabi folk, and Lata Mangeshkar lullabies.',
    songs: [
      origSong(
        'arr-rang-de-basanti-2006',
        1,
        'Roobaroo',
        'A. R. Rahman, Naresh Iyer',
        'Rang De Basanti',
        2006
      ),
      origSong(
        'arr-rang-de-basanti-2006',
        2,
        'Luka Chuppi',
        'Lata Mangeshkar, A. R. Rahman',
        'Rang De Basanti',
        2006
      ),
      origSong(
        'arr-rang-de-basanti-2006',
        3,
        'Rang De Basanti',
        'Daler Mehndi, Chitra',
        'Rang De Basanti',
        2006
      ),
      origSong(
        'arr-rang-de-basanti-2006',
        4,
        'Khalbali',
        'A. R. Rahman, Mohammed Aslam, Nacim',
        'Rang De Basanti',
        2006
      ),
      origSong(
        'arr-rang-de-basanti-2006',
        5,
        'Khoon Chala',
        'Mohit Chauhan',
        'Rang De Basanti',
        2006
      ),
    ],
  },
  {
    id: 'arr-guru-2007',
    directorId: 'ar-rahman',
    title: 'Guru',
    year: 2007,
    cast: 'Abhishek Bachchan, Aishwarya Rai, Madhavan, Vidya Balan',
    label: 'Sony Music India',
    significance:
      "Mani Ratnam's Hindi drama winning Filmfare awards for its rich melodic, Middle Eastern, and folk palette.",
    songs: [
      origSong('arr-guru-2007', 1, 'Tere Bina', 'A. R. Rahman, Chinmayi', 'Guru', 2007),
      origSong(
        'arr-guru-2007',
        2,
        'Barso Re',
        'Shreya Ghoshal, Uday Mazumdar',
        'Guru',
        2007
      ),
      origSong(
        'arr-guru-2007',
        3,
        'Mayya Mayya',
        'Maryem Tollar, Chinmayi, Keerthi Sagathia',
        'Guru',
        2007
      ),
      origSong(
        'arr-guru-2007',
        4,
        'Ay Hairathe',
        'Hariharan, Alka Yagnik',
        'Guru',
        2007
      ),
    ],
  },
  {
    id: 'arr-jodhaa-akbar-2008',
    directorId: 'ar-rahman',
    title: 'Jodhaa Akbar',
    year: 2008,
    cast: 'Hrithik Roshan, Aishwarya Rai',
    label: 'UTV / Sony Music',
    significance:
      'Mughal historical romance featuring royal dhol orchestration and Sufi devotional qawwali.',
    songs: [
      {
        id: 'arr-jodhaa-akbar-2008-1',
        movieId: 'arr-jodhaa-akbar-2008',
        title: 'Khwaja Mere Khwaja',
        singers: 'A. R. Rahman',
        lyricist: 'Kashif',
        adaptationType: 'inspired',
        originalSongTitle: 'Ajmer Sharif Chishti Qawwali Tradition',
        originalArtist: 'Traditional Sufi Qawwali',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Composed within classical Ajmer Sharif Sufi qawwali harmonic structures and harmonium/dholak phrasing.',
        bollywoodLink: yt('Khwaja Mere Khwaja Jodhaa Akbar 2008'),
        originalLink: 'https://www.youtube.com/watch?v=GKxKr0Wv3EU',
        referenceSource: 'Musicology / Liner Notes',
      },
      origSong(
        'arr-jodhaa-akbar-2008',
        2,
        'Jashn-E-Bahaaraa',
        'Javed Ali',
        'Jodhaa Akbar',
        2008
      ),
      origSong(
        'arr-jodhaa-akbar-2008',
        3,
        'In Lamhon Ke Daaman Mein',
        'Sonu Nigam, Madhushree',
        'Jodhaa Akbar',
        2008
      ),
      origSong(
        'arr-jodhaa-akbar-2008',
        4,
        'Azeem-O-Shaan Shahenshah',
        'Mohammed Aslam, Bonnie Chakraborty',
        'Jodhaa Akbar',
        2008
      ),
    ],
  },
  {
    id: 'arr-jaane-tu-2008',
    directorId: 'ar-rahman',
    title: 'Jaane Tu... Ya Jaane Na',
    year: 2008,
    cast: 'Imran Khan, Genelia D’Souza',
    label: 'T-Series',
    significance:
      'Filmfare Best Music winner defining urban campus acoustic pop and upbeat brass anthems.',
    songs: [
      origSong(
        'arr-jaane-tu-2008',
        1,
        'Kabhi Kabhi Aditi',
        'Rashid Ali',
        'Jaane Tu Ya Jaane Na',
        2008
      ),
      origSong(
        'arr-jaane-tu-2008',
        2,
        'Pappu Can’t Dance',
        'Anupama, Benny Dayal, Blaaze, Tanvi Shah',
        'Jaane Tu Ya Jaane Na',
        2008
      ),
      origSong(
        'arr-jaane-tu-2008',
        3,
        'Kahin To Hogi Woh',
        'Rashid Ali, Vasundhara Das',
        'Jaane Tu Ya Jaane Na',
        2008
      ),
    ],
  },
  {
    id: 'arr-yuvvraaj-2008',
    directorId: 'ar-rahman',
    title: 'Yuvvraaj',
    year: 2008,
    cast: 'Salman Khan, Katrina Kaif, Anil Kapoor',
    label: 'T-Series',
    significance:
      'Subhash Ghai musical built around Western classical cello, choir, and symphonic crossovers.',
    songs: [
      origSong(
        'arr-yuvvraaj-2008',
        1,
        'Tu Meri Dost Hain',
        'Benny Dayal, Shreya Ghoshal, A. R. Rahman',
        'Yuvvraaj',
        2008
      ),
      origSong('arr-yuvvraaj-2008', 2, 'Tu Muskura', 'Alka Yagnik, Javed Ali', 'Yuvvraaj', 2008),
    ],
  },
  {
    id: 'arr-ghajini-2008',
    directorId: 'ar-rahman',
    title: 'Ghajini',
    year: 2008,
    cast: 'Aamir Khan, Asin, Jiah Khan',
    label: 'T-Series',
    significance:
      'Original Hindi soundtrack composed for the Bollywood action blockbuster.',
    songs: [
      origSong('arr-ghajini-2008', 1, 'Guzaarish', 'Javed Ali, Sonu Nigam', 'Ghajini', 2008),
      origSong(
        'arr-ghajini-2008',
        2,
        'Kaise Mujhe Tum Mil Gayi',
        'Benny Dayal, Shreya Ghoshal',
        'Ghajini',
        2008
      ),
      origSong('arr-ghajini-2008', 3, 'Behka', 'Karthik', 'Ghajini', 2008),
    ],
  },
  {
    id: 'arr-delhi-6-2009',
    directorId: 'ar-rahman',
    title: 'Delhi-6',
    year: 2009,
    cast: 'Abhishek Bachchan, Sonam Kapoor, Waheeda Rehman',
    label: 'T-Series',
    significance:
      'Old Delhi soundscape weaving Chhattisgarhi wedding folk, qawwali, and urban hip-hop.',
    songs: [
      {
        id: 'arr-delhi-6-2009-1',
        movieId: 'arr-delhi-6-2009',
        title: 'Genda Phool (Sasural Genda Phool)',
        singers: 'Rekha Bhardwaj, Shraddha Pandit, Sujata Mazumdar',
        lyricist: 'Prasoon Joshi (Traditional Adaptation)',
        adaptationType: 'inspired',
        originalSongTitle: 'Sasural Genda Phool',
        originalArtist: 'Traditional Chhattisgarhi Folk',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Direct modern arrangement and lyrical adaptation of the traditional Chhattisgarhi wedding folk song "Sasural Genda Phool".',
        bollywoodLink: yt('Sasural Genda Phool Delhi 6 2009 A R Rahman'),
        originalLink: 'https://www.youtube.com/watch?v=vum9GsX6Vt0',
        referenceSource: 'Album Credits / Public Folk Documentation',
      },
      origSong('arr-delhi-6-2009', 2, 'Masakali', 'Mohit Chauhan', 'Delhi-6', 2009),
      origSong(
        'arr-delhi-6-2009',
        3,
        'Arziyan',
        'Javed Ali, Kailash Kher',
        'Delhi-6',
        2009
      ),
      origSong(
        'arr-delhi-6-2009',
        4,
        'Rehna Tu',
        'A. R. Rahman, Benny Dayal, Tanvi Shah',
        'Delhi-6',
        2009
      ),
    ],
  },
  {
    id: 'arr-blue-2009',
    directorId: 'ar-rahman',
    title: 'Blue',
    year: 2009,
    cast: 'Akshay Kumar, Sanjay Dutt, Lara Dutta',
    label: 'T-Series',
    significance:
      'Underwater action thriller pairing global electronic pop and Kylie Minogue guest vocals.',
    songs: [
      origSong(
        'arr-blue-2009',
        1,
        'Chiggy Wiggy',
        'Kylie Minogue, Sonu Nigam, Suzanne D’Mello',
        'Blue',
        2009
      ),
      origSong('arr-blue-2009', 2, 'Aaj Dil Gustakh Hai', 'Sukhwinder Singh, Shreya Ghoshal', 'Blue', 2009),
    ],
  },
  {
    id: 'arr-raavan-2010',
    directorId: 'ar-rahman',
    title: 'Raavan',
    year: 2010,
    cast: 'Abhishek Bachchan, Aishwarya Rai, Vikram',
    label: 'T-Series',
    significance:
      "Mani Ratnam's mythological action-drama featuring tribal percussion and Gulzar lyricism.",
    songs: [
      origSong('arr-raavan-2010', 1, 'Beera', 'Vijay Prakash, Mustafa Kutoane', 'Raavan', 2010),
      origSong('arr-raavan-2010', 2, 'Behne De', 'Karthik, Mohammed Irfan', 'Raavan', 2010),
      origSong('arr-raavan-2010', 3, 'Ranjha Ranjha', 'Rekha Bhardwaj, Javed Ali', 'Raavan', 2010),
    ],
  },
  {
    id: 'arr-jhootha-hi-sahi-2010',
    directorId: 'ar-rahman',
    title: 'Jhootha Hi Sahi',
    year: 2010,
    cast: 'John Abraham, Pakhi Tyrewala',
    label: 'Saregama',
    significance:
      'London-set romantic comedy featuring breezy acoustic guitar pop and choral ballads.',
    songs: [
      origSong('arr-jhootha-hi-sahi-2010', 1, 'Cry Cry', 'Rashid Ali, Shreya Ghoshal', 'Jhootha Hi Sahi', 2010),
      origSong('arr-jhootha-hi-sahi-2010', 2, 'Maiyya Yashoda', 'Javed Ali, Chinmayi', 'Jhootha Hi Sahi', 2010),
    ],
  },
  {
    id: 'arr-ada-2010',
    directorId: 'ar-rahman',
    title: 'Ada... A Way of Life',
    year: 2010,
    cast: 'Ayaan Ahmad, Nauheed Cyrusi, Rahul Roy',
    label: 'Big Music',
    significance:
      'Delayed-release Hindi musical showcase penned by Nusrat Badr.',
    songs: [
      origSong('arr-ada-2010', 1, 'Meherbaan', 'A. R. Rahman', 'Ada A Way of Life', 2010),
      origSong('arr-ada-2010', 2, 'Gum Sum', 'Sonu Nigam, Alka Yagnik', 'Ada A Way of Life', 2010),
    ],
  },
  {
    id: 'arr-rockstar-2011',
    directorId: 'ar-rahman',
    title: 'Rockstar',
    year: 2011,
    cast: 'Ranbir Kapoor, Nargis Fakhri',
    label: 'T-Series',
    significance:
      'Imtiaz Ali’s modern cult classic spanning grunge rock, qawwali ("Kun Faya Kun"), and Punjabi folk.',
    songs: [
      {
        id: 'arr-rockstar-2011-1',
        movieId: 'arr-rockstar-2011',
        title: 'Katiya Karoon',
        singers: 'Harshdeep Kaur',
        lyricist: 'Irshad Kamil',
        adaptationType: 'inspired',
        originalSongTitle: 'Katiya Karoon (Punjabi Spinning-Wheel Folk)',
        originalArtist: 'Traditional Punjabi Folk (Asa Singh Mastana / Surinder Kaur)',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Hook and folk premise draw upon classic Punjabi charkha (spinning-wheel) songs while expanding into an upbeat acoustic-rock arrangement.',
        bollywoodLink: yt('Katiya Karoon Rockstar 2011 Harshdeep Kaur'),
        originalLink: 'https://www.youtube.com/watch?v=nonwKVEkZcQ',
        referenceSource: 'Irshad Kamil / Folk Music Archives',
      },
      origSong('arr-rockstar-2011', 2, 'Kun Faya Kun', 'A. R. Rahman, Javed Ali, Mohit Chauhan', 'Rockstar', 2011),
      origSong('arr-rockstar-2011', 3, 'Nadaan Parindey', 'Mohit Chauhan, A. R. Rahman', 'Rockstar', 2011),
      origSong('arr-rockstar-2011', 4, 'Sadda Haq', 'Mohit Chauhan, Orianthi', 'Rockstar', 2011),
      origSong('arr-rockstar-2011', 5, 'Tum Ho', 'Mohit Chauhan, Suzanne D’Mello', 'Rockstar', 2011),
    ],
  },
  {
    id: 'arr-ekk-deewana-tha-2012',
    directorId: 'ar-rahman',
    title: 'Ekk Deewana Tha',
    year: 2012,
    cast: 'Prateik Babbar, Amy Jackson',
    label: 'Sony Music India',
    significance:
      "Gautham Vasudev Menon's Hindi romantic drama with acoustic arrangements and Javed Akhtar lyrics.",
    songs: [
      origSong('arr-ekk-deewana-tha-2012', 1, 'Hosanna', 'Leon D’Souza, Suzanne D’Mello', 'Ekk Deewana Tha', 2012),
      origSong('arr-ekk-deewana-tha-2012', 2, 'Phoolon Jaisi', 'Javed Ali, Madhushree', 'Ekk Deewana Tha', 2012),
    ],
  },
  {
    id: 'arr-jab-tak-hai-jaan-2012',
    directorId: 'ar-rahman',
    title: 'Jab Tak Hai Jaan',
    year: 2012,
    cast: 'Shah Rukh Khan, Katrina Kaif, Anushka Sharma',
    label: 'YRF Music',
    significance:
      "Yash Chopra's final directorial feature uniting Gulzar's poetry with lush London acoustic & Punjabi idioms.",
    songs: [
      {
        id: 'arr-jab-tak-hai-jaan-2012-1',
        movieId: 'arr-jab-tak-hai-jaan-2012',
        title: 'Heer',
        singers: 'Harshdeep Kaur',
        lyricist: 'Gulzar',
        adaptationType: 'inspired',
        originalSongTitle: 'Heer Waris Shah Traditional Recitation',
        originalArtist: 'Traditional Punjabi Folk',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Uses traditional Punjabi Heer singing cadences and folk storytelling imagery adapted by Gulzar.',
        bollywoodLink: yt('Heer Jab Tak Hai Jaan 2012 Harshdeep Kaur'),
        originalLink: 'https://www.youtube.com/watch?v=m_VHiNI_pAE',
        referenceSource: 'Traditional Folk Attribution',
      },
      origSong('arr-jab-tak-hai-jaan-2012', 2, 'Challa', 'Rabbi Shergill', 'Jab Tak Hai Jaan', 2012),
      origSong('arr-jab-tak-hai-jaan-2012', 3, 'Saans', 'Mohit Chauhan, Shreya Ghoshal', 'Jab Tak Hai Jaan', 2012),
    ],
  },
  {
    id: 'arr-raanjhanaa-2013',
    directorId: 'ar-rahman',
    title: 'Raanjhanaa',
    year: 2013,
    cast: 'Dhanush, Sonam Kapoor, Abhay Deol',
    label: 'Sony Music India / Eros',
    significance:
      'Banaras-set romantic tragedy pairing North Indian shehnai, folk chants, and symphonic swells.',
    songs: [
      origSong('arr-raanjhanaa-2013', 1, 'Tum Tak', 'Javed Ali, Keerthi Sagathia, Pooja AV', 'Raanjhanaa', 2013),
      origSong('arr-raanjhanaa-2013', 2, 'Raanjhanaa Hua Main Tera', 'Jaswinder Singh, Shiraz Uppal', 'Raanjhanaa', 2013),
      origSong('arr-raanjhanaa-2013', 3, 'Banarasiya', 'Shreya Ghoshal, Anweshaa', 'Raanjhanaa', 2013),
    ],
  },
  {
    id: 'arr-highway-2014',
    directorId: 'ar-rahman',
    title: 'Highway',
    year: 2014,
    cast: 'Alia Bhatt, Randeep Hooda',
    label: 'T-Series',
    significance:
      "Imtiaz Ali's road drama spanning Rajasthani folk ballads and Nooran Sisters' electrifying Sufi rock.",
    songs: [
      {
        id: 'arr-highway-2014-1',
        movieId: 'arr-highway-2014',
        title: 'Patakha Guddi',
        singers: 'Nooran Sisters (Sultana & Jyoti Nooran)',
        lyricist: 'Irshad Kamil',
        adaptationType: 'inspired',
        originalSongTitle: 'Punjabi Jugni / Sufi Dervish Folk Tradition',
        originalArtist: 'Traditional Punjabi Sufi Tradition',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Built on traditional Punjabi Jugni / Sufi vocal improvisation styles brought by the Nooran Sisters.',
        bollywoodLink: yt('Patakha Guddi Highway 2014 Nooran Sisters'),
        originalLink: 'https://www.youtube.com/watch?v=jqXHQU49c4I',
        referenceSource: 'Album Credits / Sufi Tradition',
      },
      origSong('arr-highway-2014', 2, 'Maahi Ve', 'A. R. Rahman', 'Highway', 2014),
      origSong('arr-highway-2014', 3, 'Sooha Saha', 'Alia Bhatt, Zeb Bangash', 'Highway', 2014),
    ],
  },
  {
    id: 'arr-lekar-hum-deewana-dil-2014',
    directorId: 'ar-rahman',
    title: 'Lekar Hum Deewana Dil',
    year: 2014,
    cast: 'Armaan Jain, Deeksha Seth',
    label: 'Eros Music',
    significance:
      'Youthful romantic comedy with peppy electronic funk and soft acoustic ballads.',
    songs: [
      origSong('arr-lekar-hum-deewana-dil-2014', 1, 'Khalifa', 'A. R. Rahman, Shweta Pandit', 'Lekar Hum Deewana Dil', 2014),
      origSong('arr-lekar-hum-deewana-dil-2014', 2, 'Maaloom', 'Hriday Gattani, Jonita Gandhi', 'Lekar Hum Deewana Dil', 2014),
    ],
  },
  {
    id: 'arr-tamasha-2015',
    directorId: 'ar-rahman',
    title: 'Tamasha',
    year: 2015,
    cast: 'Ranbir Kapoor, Deepika Padukone',
    label: 'T-Series',
    significance:
      "Imtiaz Ali's narrative drama anchored by \"Agar Tum Saath Ho\" and Corsican-flavoured acoustic textures.",
    songs: [
      origSong('arr-tamasha-2015', 1, 'Agar Tum Saath Ho', 'Alka Yagnik, Arijit Singh', 'Tamasha', 2015),
      origSong('arr-tamasha-2015', 2, 'Matargashti', 'Mohit Chauhan', 'Tamasha', 2015),
      origSong('arr-tamasha-2015', 3, 'Safarnama', 'Lucky Ali', 'Tamasha', 2015),
    ],
  },
  {
    id: 'arr-mohenjo-daro-2016',
    directorId: 'ar-rahman',
    title: 'Mohenjo Daro',
    year: 2016,
    cast: 'Hrithik Roshan, Pooja Hegde',
    label: 'T-Series',
    significance:
      "Ashutosh Gowariker's Bronze Age historical epic featuring orchestral chimes and ancient-mode motifs.",
    songs: [
      origSong('arr-mohenjo-daro-2016', 1, 'Tu Hai', 'A. R. Rahman, Sanah Moidutty', 'Mohenjo Daro', 2016),
      origSong('arr-mohenjo-daro-2016', 2, 'Sarsariya', 'Shashwat Singh, Shashaa Tirupati', 'Mohenjo Daro', 2016),
    ],
  },
  {
    id: 'arr-ok-jaanu-2017',
    directorId: 'ar-rahman',
    title: 'OK Jaanu',
    year: 2017,
    cast: 'Aditya Roy Kapur, Shraddha Kapoor',
    label: 'Sony Music India',
    significance:
      "Shaad Ali's Hindi urban romance featuring Gulzar lyrics and contemporary synth-soul ballads.",
    songs: [
      origSong('arr-ok-jaanu-2017', 1, 'Enna Sona', 'Arijit Singh', 'OK Jaanu', 2017),
      origSong('arr-ok-jaanu-2017', 2, 'OK Jaanu', 'A. R. Rahman, Srinidhi Venkatesh', 'OK Jaanu', 2017),
    ],
  },
  {
    id: 'arr-sachin-2017',
    directorId: 'ar-rahman',
    title: 'Sachin: A Billion Dreams',
    year: 2017,
    cast: 'Sachin Tendulkar',
    label: 'Times Music',
    significance:
      'Biographical sports documentary-feature with rousing stadium anthems penned by Irshad Kamil.',
    songs: [
      origSong('arr-sachin-2017', 1, 'Sachin Sachin', 'Sukhwinder Singh', 'Sachin A Billion Dreams', 2017),
      origSong('arr-sachin-2017', 2, 'Hind Mere Jind', 'A. R. Rahman', 'Sachin A Billion Dreams', 2017),
    ],
  },
  {
    id: 'arr-mom-2017',
    directorId: 'ar-rahman',
    title: 'Mom',
    year: 2017,
    cast: 'Sridevi, Nawazuddin Siddiqui, Akshaye Khanna',
    label: 'T-Series',
    significance:
      'Intense thriller highlighted by delicate acoustic piano themes and National Award–honored score.',
    songs: [
      origSong('arr-mom-2017', 1, 'O Sona Tere Liye', 'A. R. Rahman, Shashaa Tirupati', 'Mom', 2017),
      origSong('arr-mom-2017', 2, 'Kooke Kawn', 'Sukhwinder Singh, Blaaze, Sameera Bharadwaj', 'Mom', 2017),
    ],
  },
  {
    id: 'arr-beyond-the-clouds-2017',
    directorId: 'ar-rahman',
    title: 'Beyond the Clouds',
    year: 2017,
    cast: 'Ishaan Khatter, Malavika Mohanan',
    label: 'Zee Music Company',
    significance:
      "Majid Majidi's Mumbai-set Hindi feature with atmospheric score and poignant vocals.",
    songs: [
      origSong('arr-beyond-the-clouds-2017', 1, 'Ey Chhote Motor Chala', 'MC Heam, Arjun Chandy', 'Beyond the Clouds', 2017),
    ],
  },
  {
    id: 'arr-sanju-2018',
    directorId: 'ar-rahman',
    title: 'Sanju',
    year: 2018,
    cast: 'Ranbir Kapoor, Vicky Kaushal, Paresh Rawal',
    label: 'T-Series',
    significance:
      'Rajkumar Hirani biopic featuring two original guest tracks composed by Rahman ("Ruby Ruby" & "Mujhe Chand Pe Le Chalo").',
    songs: [
      origSong('arr-sanju-2018', 1, 'Ruby Ruby', 'Shashwat Singh, Poorvi Koutish', 'Sanju', 2018),
      origSong('arr-sanju-2018', 2, 'Mujhe Chand Pe Le Chalo', 'Nikhita Gandhi', 'Sanju', 2018),
    ],
  },
  {
    id: 'arr-fakir-of-venice-2019',
    directorId: 'ar-rahman',
    title: 'The Fakir of Venice',
    year: 2019,
    cast: 'Farhan Akhtar, Annu Kapoor',
    label: 'Zee Music Company',
    significance:
      'Anand Surapur satire pairing surreal street-brass motifs and quirky Hindi storytelling.',
    songs: [
      origSong('arr-fakir-of-venice-2019', 1, 'Wako Naam Fakir', 'A. R. Rahman, Arjun Chandy, Abhay Jodhpurkar', 'The Fakir of Venice', 2019),
    ],
  },
  {
    id: 'arr-dil-bechara-2020',
    directorId: 'ar-rahman',
    title: 'Dil Bechara',
    year: 2020,
    cast: 'Sushant Singh Rajput, Sanjana Sanghi',
    label: 'Sony Music India',
    significance:
      'Record-breaking 2020 streaming soundtrack blending soulful orchestral melodies with Amitabh Bhattacharya lyrics.',
    songs: [
      origSong('arr-dil-bechara-2020', 1, 'Dil Bechara', 'A. R. Rahman', 'Dil Bechara', 2020),
      origSong('arr-dil-bechara-2020', 2, 'Taare Ginn', 'Mohit Chauhan, Shreya Ghoshal', 'Dil Bechara', 2020),
      origSong('arr-dil-bechara-2020', 3, 'Khulke Jeene Ka', 'Arijit Singh, Shashaa Tirupati', 'Dil Bechara', 2020),
    ],
  },
  {
    id: 'arr-99-songs-2021',
    directorId: 'ar-rahman',
    title: '99 Songs',
    year: 2021,
    cast: 'Ehan Bhat, Edilsy Vargas',
    label: 'Sony Music India',
    significance:
      'Musical romance co-written, produced, and scored by Rahman with expansive 14-track orchestration.',
    songs: [
      origSong('arr-99-songs-2021', 1, 'O Aashiqa', 'Arijit Singh', '99 Songs', 2021),
      origSong('arr-99-songs-2021', 2, 'Jaanam', 'Armaan Malik, Shashaa Tirupati', '99 Songs', 2021),
    ],
  },
  {
    id: 'arr-mimi-2021',
    directorId: 'ar-rahman',
    title: 'Mimi',
    year: 2021,
    cast: 'Kriti Sanon, Pankaj Tripathi',
    label: 'Sony Music India',
    significance:
      'Laxman Utekar comedy-drama uniting Rajasthani percussion dance hits ("Param Sundari") with tender ballads.',
    songs: [
      origSong('arr-mimi-2021', 1, 'Param Sundari', 'Shreya Ghoshal', 'Mimi', 2021),
      origSong('arr-mimi-2021', 2, 'Rihaayi De', 'A. R. Rahman', 'Mimi', 2021),
    ],
  },
  {
    id: 'arr-atrangi-re-2021',
    directorId: 'ar-rahman',
    title: 'Atrangi Re',
    year: 2021,
    cast: 'Dhanush, Sara Ali Khan, Akshay Kumar',
    label: 'T-Series',
    significance:
      "Aanand L. Rai's musical fantasy showcasing Irshad Kamil poetry and Arijit Singh's \"Rait Zara Si\".",
    songs: [
      origSong('arr-atrangi-re-2021', 1, 'Chaka Chak', 'Shreya Ghoshal', 'Atrangi Re', 2021),
      origSong('arr-atrangi-re-2021', 2, 'Rait Zara Si', 'Arijit Singh, Shashaa Tirupati', 'Atrangi Re', 2021),
      origSong('arr-atrangi-re-2021', 3, 'Tere Rang', 'Haricharan, Shreya Ghoshal', 'Atrangi Re', 2021),
    ],
  },
  {
    id: 'arr-heropanti-2-2022',
    directorId: 'ar-rahman',
    title: 'Heropanti 2',
    year: 2022,
    cast: 'Tiger Shroff, Tara Sutaria, Nawazuddin Siddiqui',
    label: 'T-Series',
    significance:
      'High-energy Bollywood action entertainer featuring Mehboob lyrics.',
    songs: [
      origSong('arr-heropanti-2-2022', 1, 'DaFa Kar', 'A. R. Rahman, Hiral Viradia', 'Heropanti 2', 2022),
      origSong('arr-heropanti-2-2022', 2, 'Jalwanuma', 'Pooja Tiwari, Javed Ali', 'Heropanti 2', 2022),
    ],
  },
  {
    id: 'arr-mili-2022',
    directorId: 'ar-rahman',
    title: 'Mili',
    year: 2022,
    cast: 'Janhvi Kapoor, Sunny Kaushal',
    label: 'Zee Music Company',
    significance:
      'Survival thriller pairing Javed Akhtar lyrics with atmospheric acoustic themes.',
    songs: [
      origSong('arr-mili-2022', 1, 'Sun Aye Mili', 'Vishal Mishra', 'Mili', 2022),
      origSong('arr-mili-2022', 2, 'Tum Bhi Raahi', 'A. R. Rahman, Shashaa Tirupati', 'Mili', 2022),
    ],
  },
  {
    id: 'arr-gandhi-godse-2023',
    directorId: 'ar-rahman',
    title: 'Gandhi Godse – Ek Yudh',
    year: 2023,
    cast: 'Deepak Antani, Chinmay Mandlekar',
    label: 'Saregama',
    significance:
      "Rajkumar Santoshi's historical drama featuring Rahman's original orchestral score and bhajan arrangements.",
    songs: [
      origSong('arr-gandhi-godse-2023', 1, 'Vaishnava Jana To', 'Shreya Ghoshal', 'Gandhi Godse Ek Yudh', 2023),
    ],
  },
  {
    id: 'arr-pippa-2023',
    directorId: 'ar-rahman',
    title: 'Pippa',
    year: 2023,
    cast: 'Ishaan Khatter, Mrunal Thakur',
    label: 'Zee Music Company',
    significance:
      '1971 war drama spanning Punjabi folk celebration ("Main Parwaana") and Shellee lyrics.',
    songs: [
      origSong('arr-pippa-2023', 1, 'Main Parwaana', 'Arijit Singh', 'Pippa', 2023),
      origSong('arr-pippa-2023', 2, 'Rampage', 'MC Heam, Crystal', 'Pippa', 2023),
    ],
  },
  {
    id: 'arr-maidaan-2024',
    directorId: 'ar-rahman',
    title: 'Maidaan',
    year: 2024,
    cast: 'Ajay Devgn, Priyamani',
    label: 'Zee Music Company',
    significance:
      'Biographical Indian football epic propelled by Rahman’s rousing stadium anthems and sweeping score.',
    songs: [
      origSong('arr-maidaan-2024', 1, 'Team India Hain Hum', 'A. R. Rahman, Nakul Abhyankar', 'Maidaan', 2024),
      origSong('arr-maidaan-2024', 2, 'Mirza', 'Javed Ali, Richa Sharma', 'Maidaan', 2024),
    ],
  },
  {
    id: 'arr-amar-singh-chamkila-2024',
    directorId: 'ar-rahman',
    title: 'Amar Singh Chamkila',
    year: 2024,
    cast: 'Diljit Dosanjh, Parineeti Chopra',
    label: 'Saregama',
    significance:
      "Imtiaz Ali's biographical musical drama blending Rahman's new originals with traditional Punjabi akhada folk templates.",
    songs: [
      {
        id: 'arr-amar-singh-chamkila-2024-1',
        movieId: 'arr-amar-singh-chamkila-2024',
        title: 'Naram Kaalja',
        singers: 'Alka Yagnik, Richa Sharma, Pooja Tiwari, Yashika Sikka',
        lyricist: 'Irshad Kamil',
        adaptationType: 'inspired',
        originalSongTitle: 'Punjabi Giddha / Chamkila Akhada Folk Style',
        originalArtist: 'Traditional Punjabi Folk & Amar Singh Chamkila Heritage',
        originalYear: '1980s',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Crafted around traditional Punjabi women’s giddha rhythms and Amar Singh Chamkila’s signature dholki-tumbi stage idiom.',
        bollywoodLink: yt('Naram Kaalja Amar Singh Chamkila 2024 A R Rahman'),
        originalLink: 'https://www.youtube.com/watch?v=0CFRRM--MPk',
        referenceSource: 'Film Soundtrack Liner Notes',
      },
      origSong('arr-amar-singh-chamkila-2024', 2, 'Ishq Mitaye', 'Mohit Chauhan', 'Amar Singh Chamkila', 2024),
      origSong('arr-amar-singh-chamkila-2024', 3, 'Vida Karo', 'Arijit Singh, Jonita Gandhi', 'Amar Singh Chamkila', 2024),
      origSong('arr-amar-singh-chamkila-2024', 4, 'Tu Kya Jaane', 'Yashika Sikka', 'Amar Singh Chamkila', 2024),
    ],
  },
  {
    id: 'arr-chhaava-2025',
    directorId: 'ar-rahman',
    title: 'Chhaava',
    year: 2025,
    cast: 'Vicky Kaushal, Rashmika Mandanna, Akshaye Khanna',
    label: 'Sony Music India',
    significance:
      "Laxman Utekar's Maratha historical epic uniting warrior percussion, powada folk inflections, and symphonic brass.",
    songs: [
      origSong('arr-chhaava-2025', 1, 'Jaane Tu', 'Arijit Singh', 'Chhaava', 2025),
      origSong('arr-chhaava-2025', 2, 'Aaya Re Toofan', 'A. R. Rahman, Vaishali Samant', 'Chhaava', 2025),
      origSong('arr-chhaava-2025', 3, 'Zinda Rahey', 'Hiral Viradia', 'Chhaava', 2025),
    ],
  },
  {
    id: 'arr-tere-ishk-mein-2025',
    directorId: 'ar-rahman',
    title: 'Tere Ishk Mein',
    year: 2025,
    cast: 'Dhanush, Kriti Sanon',
    label: 'T-Series',
    significance:
      "Aanand L. Rai's Hindi romantic drama reuniting Rahman and Irshad Kamil.",
    songs: [
      origSong('arr-tere-ishk-mein-2025', 1, 'Tere Ishk Mein Title Track', 'A. R. Rahman, Arijit Singh', 'Tere Ishk Mein', 2025),
    ],
  },
  {
    id: 'arr-ufff-yeh-siyapaa-2025',
    directorId: 'ar-rahman',
    title: 'Ufff Yeh Siyapaa',
    year: 2025,
    cast: 'Sohum Shah, Nushrratt Bharuccha, Nora Fatehi',
    label: 'Luv Films / T-Series',
    significance:
      "Silent-comedy Hindi feature scored with playful orchestral and quirky melodic cues by Rahman.",
    songs: [
      origSong('arr-ufff-yeh-siyapaa-2025', 1, 'Dil Parinda', 'A. R. Rahman, Armaan Malik', 'Ufff Yeh Siyapaa', 2025),
    ],
  },
  {
    id: 'arr-gandhi-talks-2026',
    directorId: 'ar-rahman',
    title: 'Gandhi Talks',
    year: 2026,
    cast: 'Vijay Sethupathi, Arvind Swamy, Aditi Rao Hydari',
    label: 'Zee Studios',
    significance:
      'Dialogue-free dark comedy feature driven musically by Rahman’s symphonic and folk-inspired score.',
    songs: [
      origSong('arr-gandhi-talks-2026', 1, 'Gandhi Talks Theme', 'A. R. Rahman', 'Gandhi Talks', 2026),
    ],
  },
  {
    id: 'arr-batwara-1947-2026',
    directorId: 'ar-rahman',
    title: 'Batwara 1947 (Lahore 1947)',
    year: 2026,
    cast: 'Sunny Deol, Preity Zinta, Shabana Azmi',
    label: 'Zee Music Company',
    significance:
      'Rajkumar Santoshi’s Partition-era drama (produced by Aamir Khan Productions, originally titled Lahore 1947), uniting A. R. Rahman with lyricist Javed Akhtar.',
    songs: [
      origSong('arr-batwara-1947-2026', 1, 'Chal Anjaane', 'Sarthak Kalyani, Heer', 'Batwara 1947', 2026),
      origSong('arr-batwara-1947-2026', 2, 'Tabassum', 'Sonu Nigam, Heer', 'Batwara 1947', 2026),
      origSong('arr-batwara-1947-2026', 3, 'Kahaan Chale Gaye Ho Ram', 'Anuradha Paudwal, Shaan', 'Batwara 1947', 2026),
      origSong('arr-batwara-1947-2026', 4, 'Dekhiye Jahaan Jaiye Kahin', 'Javed Ali, Anandi Joshi, Rabbani Mustafa Khan', 'Batwara 1947', 2026),
      origSong('arr-batwara-1947-2026', 5, 'Maa Kahaan Jaa Rahi Hai', 'A. R. Rahman, Sarthak Kalyani', 'Batwara 1947', 2026),
    ],
  },
  {
    id: 'arr-ramayana-part-1-2026',
    directorId: 'ar-rahman',
    title: 'Ramayana: Part 1',
    year: 2026,
    cast: 'Ranbir Kapoor, Yash, Sai Pallavi, Sunny Deol',
    label: 'T-Series',
    significance:
      'Historic Diwali 2026 mythological epic directed by Nitesh Tiwari, pairing A. R. Rahman with Hollywood composer Hans Zimmer and lyricist Dr. Kumar Vishwas.',
    songs: [
      origSong('arr-ramayana-part-1-2026', 1, 'Jai Jai Ram', 'Arijit Singh, Shreya Ghoshal', 'Ramayana Part 1', 2026),
      origSong('arr-ramayana-part-1-2026', 2, 'Ravana Tandav', 'Vishal Dadlani', 'Ramayana Part 1', 2026),
      origSong('arr-ramayana-part-1-2026', 3, "Sita's Aspiration", 'A. R. Ameen, Vaishali Samant, Rakshita Suresh, Antra Nandy', 'Ramayana Part 1', 2026),
      origSong('arr-ramayana-part-1-2026', 4, 'Mangal Rang', 'Arijit Singh, Shreya Ghoshal', 'Ramayana Part 1', 2026),
      origSong('arr-ramayana-part-1-2026', 5, 'Rama Theme (with Hans Zimmer)', 'A. R. Rahman, Hans Zimmer', 'Ramayana Part 1', 2026),
    ],
  },
];
