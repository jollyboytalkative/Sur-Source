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

export const UTTAM_SINGH_MOVIES: MovieEntry[] = [
  {
    id: 'us-painter-babu-1983',
    directorId: 'uttam-singh',
    title: 'Painter Babu',
    year: 1983,
    cast: 'Rajiv Goswami, Meenakshi Sheshadri, Neelima Azeem',
    label: 'Saregama',
    significance:
      'Uttam Singh’s Hindi film composing debut alongside Jagdish Khanna (credited as Uttam–Jagdish) for producer Manoj Kumar, uniting Kishore Kumar, Lata Mangeshkar, Mahendra Kapoor, and Bhupinder Singh.',
    songs: [
      origSong('us-painter-babu-1983', 1, 'O Mere Sajan Barsat Men', 'Lata Mangeshkar, Mahendra Kapoor', 'UURA9cveAzQ', 'Qamar Jalalabadi, Manoj Kumar'),
      origSong('us-painter-babu-1983', 2, 'Yaar Kapada Shaandar Hain', 'Mahendra Kapoor, Bhupinder Singh', 'ZMuhI9y1XsA', 'Qamar Jalalabadi'),
      origSong('us-painter-babu-1983', 3, 'Painter Babu I Love You', 'Lata Mangeshkar, Kishore Kumar', '73yS3wCVnXk', 'Qamar Jalalabadi, Manoj Kumar'),
      origSong('us-painter-babu-1983', 4, 'Kab Talak Shama Jali', 'Lata Mangeshkar, Mahendra Kapoor', '8KCA8DHcyBU', 'Qamar Jalalabadi, Manoj Kumar'),
      origSong('us-painter-babu-1983', 5, 'Humka Lai Chal Yara', 'Lata Mangeshkar, Mahendra Kapoor', '_ySNa-IASYE', 'Manoj Kumar'),
      origSong('us-painter-babu-1983', 6, 'Jab Yaad Ki Badli Chhati Hai', 'Mahendra Kapoor', 'dY-TsglErRs', 'Manoj Kumar'),
    ],
  },
  {
    id: 'us-teesra-kinara-1986',
    directorId: 'uttam-singh',
    title: 'Teesra Kinara',
    year: 1986,
    cast: 'Raj Babbar, Smita Patil, Anita Raj, Gulshan Grover',
    label: 'Saregama',
    significance:
      'Ketan Anand drama indexing strictly Uttam–Jagdish’s two per-track credited compositions ("Bahut Yaad Aata Hai" and "Sab Kuchh Milkar"); Shyam Sagar’s four separately credited songs ("Jheel Rakhoon Kanwal Rakhoon", "Diya To Jale", "Ham Kitne Khush Naseeb Hain", and "Koi Naam") are excluded.',
    songs: [
      origSong('us-teesra-kinara-1986', 1, 'Bahut Yaad Aata Hai', 'Shabbir Kumar', '0ZfCy3lf3Fk', 'Anjaan'),
      origSong('us-teesra-kinara-1986', 2, 'Sab Kuchh Milkar', 'Shabbir Kumar, Raj Babbar', 'zgw0jR5OaLU', 'Anjaan, Sameer'),
    ],
  },
  {
    id: 'us-waaris-1988',
    directorId: 'uttam-singh',
    title: 'Waaris',
    year: 1988,
    cast: 'Smita Patil, Raj Babbar, Raj Kiran, Amrita Singh',
    label: 'T-Series / Super Cassettes',
    significance:
      'Critically acclaimed rural drama and standout milestone of the Uttam–Jagdish partnership, immortalized by "Mere Pyar Ki Umar Ho Itni Sanam", "Husn Ki Vaadiyo Mein", and "Ghata Cha Gayee Hai".',
    songs: [
      origSong('us-waaris-1988', 1, 'Mere Pyar Ki Umar Ho Itni Sanam', 'Lata Mangeshkar, Manmohan Singh', '60U-LwYARMg', 'Verma Malik'),
      origSong('us-waaris-1988', 2, 'Husn Ki Vaadiyo Mein', 'Lata Mangeshkar, Kishore Kumar', 'UnRoivm6vfc', 'Verma Malik'),
      origSong('us-waaris-1988', 3, 'Ghata Cha Gayee Hai', 'Lata Mangeshkar, Suresh Wadkar', 'DACnroPNTyk', 'Verma Malik'),
      origSong('us-waaris-1988', 4, 'Ghunghat Utha Ke Na Dekha', 'Lata Mangeshkar', 'GIScETWBu2E', 'Sardar Panchhi'),
      origSong('us-waaris-1988', 5, 'Aa Re Munjhe', 'Asha Bhosle', 'jcL0LDNecIo', 'Qamar Jalalabadi'),
      origSong('us-waaris-1988', 6, 'Jholi Mein Heere Hon Tere', 'Lata Mangeshkar', '76Adpm4bU5I', 'Sardar Panchhi'),
      origSong('us-waaris-1988', 7, 'Oh Duniya Tu Yaad Rakhna', 'Mahendra Kapoor', 'EqQ9ShrUmTM', 'Qamar Jalalabadi'),
      origSong('us-waaris-1988', 8, 'Khud Ko Samajh Na Akeli', 'Kishore Kumar', 'uj5Gf17MP8M', 'Verma Malik'),
      origSong('us-waaris-1988', 9, 'Oh Duniya Tu Yaad Rakhna (Sad)', 'Mahendra Kapoor', 'rY_xBQpWMxM', 'Qamar Jalalabadi'),
    ],
  },
  {
    id: 'us-kabrastan-1988',
    directorId: 'uttam-singh',
    title: 'Kabrastan',
    year: 1988,
    cast: 'Hemant Birje, Raza Murad, Kunickaa Sadanand, Amjad Khan',
    label: 'Venus Records',
    significance:
      'Mohan Bhakri horror feature scored by Uttam–Jagdish with lyrics by Nida Fazli across five verified soundtrack numbers featuring Asha Bhosle, Lata Mangeshkar, and Shailendra Singh.',
    songs: [
      origSong('us-kabrastan-1988', 1, 'Do Din Ka Hai Khel Jawani Pyare', 'Asha Bhosle', 'X1EduU5V9-U', 'Nida Fazli'),
      origSong('us-kabrastan-1988', 2, 'Main Hoon Yahan', 'Lata Mangeshkar', '8GFQFxf4yCg', 'Nida Fazli'),
      origSong('us-kabrastan-1988', 3, 'Mushkil Mein Hai Jaan Meri', 'Shailendra Singh', 'FX7JKYOXRos', 'Nida Fazli'),
      origSong('us-kabrastan-1988', 4, 'Jab Dil Tarse Badal Barse', 'Asha Bhosle', 'EB18jhLTVZU', 'Nida Fazli'),
      origSong('us-kabrastan-1988', 5, 'Chumma Chumma Pyar Ko', 'Asha Bhosle, Shailendra Singh', 'NBR65i3lw58', 'Nida Fazli'),
    ],
  },
  {
    id: 'us-paanch-fauladi-1989',
    directorId: 'uttam-singh',
    title: 'Paanch Fauladi',
    year: 1989,
    cast: 'Raj Babbar, Anita Raj, Dara Singh, Hemant Birje, Salma Agha, Amjad Khan',
    label: 'T-Series',
    significance:
      'Action ensemble directed by Mohan Bhakri and scored by Uttam–Jagdish to Nida Fazli’s verses, highlighted by Lata Mangeshkar and Suresh Wadkar’s "Zara Chal Sambhaal Ke Aanchal Ko".',
    songs: [
      origSong('us-paanch-fauladi-1989', 1, 'Zara Chal Sambhaal Ke Aanchal Ko', 'Lata Mangeshkar, Suresh Wadkar', 'mUcyLbCJTjU', 'Nida Fazli'),
      origSong('us-paanch-fauladi-1989', 2, 'Koi Kahe Jani Mujhe', 'Anuradha Paudwal, Kavita Krishnamurthy', 'rqctoyUTVXg', 'Nida Fazli'),
      origSong('us-paanch-fauladi-1989', 3, 'Jis Ladki Se Tumko Pyar Hai', 'Suresh Wadkar, Shailendra Singh', 'TkB-kaky2JY', 'Nida Fazli'),
      origSong('us-paanch-fauladi-1989', 4, 'Aaj Behna Ki Shaadi Hai', 'Mahendra Kapoor, Suresh Wadkar, Shailendra Singh', 'gc_E5jURFyI', 'Nida Fazli'),
      origSong('us-paanch-fauladi-1989', 5, 'Lach Lach Lachke Kamariya', 'Asha Bhosle', 'byylX-CFyog', 'Nida Fazli'),
    ],
  },
  {
    id: 'us-clerk-1989',
    directorId: 'uttam-singh',
    title: 'Clerk',
    year: 1989,
    cast: 'Manoj Kumar, Rekha, Ashok Kumar, Rajendra Kumar, Shashi Kapoor',
    label: 'Saregama',
    significance:
      'Manoj Kumar’s social drama reunification with Uttam–Jagdish, pairing patriotic and nostalgic anthems ("Rakh Geeta Pe Haath", "Tumse Jo Baat Huee") with Bhupinder Singh, Nitin Mukesh, and Lata Mangeshkar.',
    songs: [
      origSong('us-clerk-1989', 1, 'Rakh Geeta Pe Haath', 'Lata Mangeshkar, Nitin Mukesh', 'R5fomTZlVSg', 'Manoj Kumar'),
      origSong('us-clerk-1989', 2, 'Neelaam Ghar Mein Hamne', 'Lata Mangeshkar', 'Q9H6drF8GYg', 'Manoj Kumar'),
      origSong('us-clerk-1989', 3, 'Tumse Jo Baat Huee', 'Bhupinder Singh', '_srUIKG2Q1U', 'Manoj Kumar'),
      origSong('us-clerk-1989', 4, 'Main Ek Clerk Hoon', 'Mahendra Kapoor', 'h0VfXCpKYhU', 'Manoj Kumar'),
      origSong('us-clerk-1989', 5, 'Kadam Kadam', 'Mahendra Kapoor', 'kfz1HihNamo', 'Manoj Kumar'),
      origSong('us-clerk-1989', 6, 'Aaj Pandra August Hai', 'Lata Mangeshkar, Mahendra Kapoor', 'CljqYqJ9nEk', 'Manoj Kumar'),
      origSong('us-clerk-1989', 7, 'Tun Tun', 'Lata Mangeshkar', 'yWPuz475764', 'Manoj Kumar'),
    ],
  },
  {
    id: 'us-gawaahi-1989',
    directorId: 'uttam-singh',
    title: 'Gawaahi',
    year: 1989,
    cast: 'Zeenat Aman, Shekhar Kapur, Ranjeeta Kaur, Ashutosh Gowariker',
    label: 'T-Series',
    significance:
      'Closing chapter of the Uttam–Jagdish duo era featuring four lyrical ghazals and duets by Pankaj Udhas and Anuradha Paudwal written by Sardar Anjum.',
    songs: [
      origSong('us-gawaahi-1989', 1, 'Dil Ki Baatein Hain', 'Pankaj Udhas, Anuradha Paudwal', 'CABzw8LmS08', 'Sardar Anjum'),
      origSong('us-gawaahi-1989', 2, 'Dekh Ke Tumko', 'Pankaj Udhas, Anuradha Paudwal', '3JXxu-4e7QM', 'Sardar Anjum'),
      origSong('us-gawaahi-1989', 3, 'Bhool Bhulaiya Sa Yeh Jeevan', 'Pankaj Udhas, Anuradha Paudwal', 'zDQqLUzwlEM', 'Sardar Anjum'),
      origSong('us-gawaahi-1989', 4, 'Khat Mein Likha Hai', 'Anuradha Paudwal', 'QdND8es4Z9g', 'Sardar Anjum'),
    ],
  },
  {
    id: 'us-dil-to-pagal-hai-1997',
    directorId: 'uttam-singh',
    title: 'Dil To Pagal Hai',
    year: 1997,
    cast: 'Shah Rukh Khan, Madhuri Dixit, Karisma Kapoor, Akshay Kumar',
    label: 'YRF Music',
    significance:
      'Yash Chopra’s musical blockbuster that catapulted Uttam Singh into solo Bollywood stardom, winning both the Filmfare Award and Zee Cine Award for Best Music Director (12.5M+ albums sold) with over 100 bespoke orchestral strings.',
    songs: [
      origSong('us-dil-to-pagal-hai-1997', 1, 'Dil To Pagal Hai', 'Lata Mangeshkar, Udit Narayan', 'lZ2PhyBF3GQ', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 2, 'Are Re Are', 'Lata Mangeshkar, Udit Narayan', 'OEpFiDKqH7E', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 3, 'Bholi Si Surat', 'Lata Mangeshkar, Udit Narayan', 'IsPOtygII-Q', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 4, 'Dholna', 'Lata Mangeshkar, Udit Narayan', 'bWNkpJdkOj4', 'Anand Bakshi'),
      adaptedSong('us-dil-to-pagal-hai-1997', 5, 'Le Gayi', 'Asha Bhosle, Udit Narayan', 'dGZb1kv5zW0', 'Anand Bakshi', {
        adaptationType: 'inspired',
        originalSongTitle: 'Ya Habaybi Ya Ghaybin',
        originalArtist: 'Farid al-Atrash',
        originalYear: '1974',
        originCategory: 'Arabic & Middle Eastern',
        adaptationNotes:
          'Documented by ITWOFS as sharing a structural and rhythmic parallel in its opening refrain to Farid al-Atrash’s 1974 Arabic classic "Ya Habaybi Ya Ghaybin" (Nagham Fi Hayati).',
        originalLink: ytWatch('0a6XghaJssk'),
        referenceSource: 'ITWOFS (Uttam Singh) · Arabic Film Music Cross-References',
      }),
      origSong('us-dil-to-pagal-hai-1997', 6, 'Pyar Kar', 'Lata Mangeshkar, Udit Narayan', 'tvxXAZo1Hlg', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 7, 'Koi Ladki Hai', 'Lata Mangeshkar, Udit Narayan', 'u6bk53x2Kno', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 8, 'Ek Duje Ke Vaaste', 'Lata Mangeshkar, Hariharan', 'uori-FN0pXs', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 9, 'Kitni Hai Bekarar Yeh', 'Lata Mangeshkar, Kumar Sanu', '-W6GZjXjUoY', 'Anand Bakshi', 'Deleted theatrical sequence song left off the original 1997 CD pressing and preserved through archival film recordings.'),
      origSong('us-dil-to-pagal-hai-1997', 10, 'Are Re Are, Pt. 2', 'Lata Mangeshkar, Udit Narayan', 'Dn_FWnylpbE', 'Anand Bakshi'),
      origSong('us-dil-to-pagal-hai-1997', 11, 'The Dance of Envy (Instrumental)', 'Uttam Singh', 'fowD4e6kON0', 'Instrumental'),
    ],
  },
  {
    id: 'us-dushman-1998',
    directorId: 'uttam-singh',
    title: 'Dushman',
    year: 1998,
    cast: 'Sanjay Dutt, Kajol, Ashutosh Rana',
    label: 'Saregama',
    significance:
      'Tanuja Chandra’s gripping psychological thriller yielding Jagjit Singh and Lata Mangeshkar’s timeless elegy "Chithi Na Koi Sandesh" alongside "Aawaz Do Humko" and "Pyar Ko Ho Jane Do".',
    songs: [
      origSong('us-dushman-1998', 1, 'Pyar Ko Ho Jane Do', 'Lata Mangeshkar, Kumar Sanu', 'hDJuqJSFmX4', 'Anand Bakshi'),
      origSong('us-dushman-1998', 2, 'Aawaz Do Humko, Pt. 1', 'Lata Mangeshkar, Udit Narayan', 'YEa4QpyJxO4', 'Anand Bakshi'),
      origSong('us-dushman-1998', 3, 'Chithi Na Koi Sandesh (Male)', 'Jagjit Singh', 'HbOCFkEdrbI', 'Anand Bakshi'),
      origSong('us-dushman-1998', 4, 'Chithi Na Koi Sandesh (Female)', 'Lata Mangeshkar', 'X7Za5cKADUo', 'Anand Bakshi'),
      origSong('us-dushman-1998', 5, 'Tunna Tunna', 'Shankar Mahadevan', '-YPxfQtFsEQ', 'Anand Bakshi'),
      origSong('us-dushman-1998', 6, 'Hippy Hippy Ya', 'Asha Bhosle, Shankar Mahadevan', 'kJLEq26Nu-0', 'Anand Bakshi'),
      origSong('us-dushman-1998', 7, 'Aawaz Do Humko, Pt. 2', 'Lata Mangeshkar, Udit Narayan', 'XMCv5D9xb7U', 'Anand Bakshi'),
      origSong('us-dushman-1998', 8, 'Chidiya Chidiya', 'Children Chorus', 'JLwaYyIzYGQ', 'Anand Bakshi'),
      origSong('us-dushman-1998', 9, 'Khoobsurat', 'Kumar Sanu', 'GnnP_K7g-BQ', 'Anand Bakshi'),
    ],
  },
  {
    id: 'us-hum-tum-pe-marte-hain-1999',
    directorId: 'uttam-singh',
    title: 'Hum Tum Pe Marte Hain',
    year: 1999,
    cast: 'Govinda, Urmila Matondkar, Dimple Kapadia, Paresh Rawal',
    label: 'T-Series',
    significance:
      'Family comedy-romance reuniting Uttam Singh with lyricist Anand Bakshi across eight buoyant vocal tracks led by Lata Mangeshkar, Udit Narayan, Hariharan, and Amit Kumar.',
    songs: [
      origSong('us-hum-tum-pe-marte-hain-1999', 1, 'Hum Tum Pe Marte Hain', 'Lata Mangeshkar, Udit Narayan', 'R7Z_mifN_xg', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 2, 'O Mere Daddy', 'Udit Narayan, Hariharan', 'G8cQgDM0hjY', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 3, 'Duniya Se Kuchh Lo', 'Udit Narayan, Amit Kumar', 'Dc9jz_5ML6g', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 4, 'O Mere Bitwa', 'Udit Narayan, Hariharan', 'TlZGCQY-rQM', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 5, 'Ladki Ko Ladka Pasand Nahin', 'Udit Narayan', 'k0EmIJ78U2c', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 6, 'Hum Banjaare Ho', 'Udit Narayan, Shobha Joshi', 'JsHzjXoJgt4', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 7, 'Jaa Rahe Ho Tum', 'Udit Narayan', 'w7C-0PD-rwc', 'Anand Bakshi'),
      origSong('us-hum-tum-pe-marte-hain-1999', 8, 'Pyar Mein Door Kya', 'Lata Mangeshkar, Udit Narayan', 'mzzEj4ni2O4', 'Anand Bakshi'),
    ],
  },
  {
    id: 'us-farz-2001',
    directorId: 'uttam-singh',
    title: 'Farz',
    year: 2001,
    cast: 'Sunny Deol, Preity Zinta, Jackie Shroff',
    label: 'T-Series',
    significance:
      'Raj Kanwar action thriller; indexes strictly Uttam Singh’s six composed tracks ("Dekhen Bhi To Kya Dekhen", "Dhola Dhola", "Har Subah Yaad Rakhna") while excluding Anu Malik’s "Mohabbat Ke Din Ho" and Aadesh Shrivastava’s "Saare Sheher Mein / Jhanak Jhanak Baaje".',
    songs: [
      origSong('us-farz-2001', 1, 'Dekhen Bhi To Kya Dekhen', 'Lata Mangeshkar, Udit Narayan', 'GgmLnom-Z9k', 'Sameer'),
      origSong('us-farz-2001', 2, 'Har Subah Yaad Rakhna', 'Lata Mangeshkar, Udit Narayan, Sunny Deol', 'lTSKVflZjNI', 'Sameer'),
      origSong('us-farz-2001', 3, 'Jadoo Hai Ye Kaisa', 'Sonu Nigam, Anuradha Paudwal', '2YfmsHVfI_Y', 'Sameer'),
      origSong('us-farz-2001', 4, 'Aelo Aelo Ji', 'Udit Narayan, Alka Yagnik', 'C2Zdh5JIwGg', 'Sameer'),
      origSong('us-farz-2001', 5, 'Dhola Dhola', 'Sonu Nigam, Anuradha Paudwal', 'Thjl1dUYaXU', 'Sameer'),
      origSong('us-farz-2001', 6, 'Bichua Bichua', 'Anupama Deshpande', 'QcIOE1SAVV0', 'Sameer'),
    ],
  },
  {
    id: 'us-gadar-ek-prem-katha-2001',
    directorId: 'uttam-singh',
    title: 'Gadar: Ek Prem Katha',
    year: 2001,
    cast: 'Sunny Deol, Ameesha Patel, Amrish Puri',
    label: 'Zee Music Company',
    significance:
      'All-time box-office and soundtrack colossus earning Filmfare, IIFA, and Screen nominations (2.5M+ albums sold), preserving strictly the original 2001 recordings led by "Udja Kale Kawan", "Main Nikla Gaddi Leke", "Musafir Jaane Wale", and Pandit Ajoy Chakrabarty’s classical thumri "Aan Milo Sajna" (2023 Gadar 2 recreations excluded).',
    songs: [
      origSong('us-gadar-ek-prem-katha-2001', 1, 'Udja Kale Kawan (Folk Version)', 'Udit Narayan', 'mzNc6qxUqpo', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 2, 'Main Nikla Gaddi Leke', 'Udit Narayan', 'IJNR_UVLDhs', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 3, 'Udja Kale Kawan (Marriage)', 'Udit Narayan, Alka Yagnik, Nihar S.', 'dOd7mmzCzpI', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 4, 'Musafir Jaane Wale', 'Udit Narayan, Preeti Uttam', 'I2nQfiux2sk', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 5, 'Hum Juda Ho Gaye', 'Udit Narayan, Preeti Uttam', 'eS5P0-rumXY', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 6, 'Aan Milo Sajna', 'Ajoy Chakrabarty, Parveen Sultana', 'Bx3izRX7bsk', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 7, 'Udja Kale Kawan (Search)', 'Alka Yagnik, Udit Narayan, Nihar S.', 'pR9ZHO3JN2A', 'Anand Bakshi'),
      origSong('us-gadar-ek-prem-katha-2001', 8, 'Udja Kale Kawan (Victory)', 'Udit Narayan, Preeti Uttam, Nihar S.', 'YJ70xDuUlt8', 'Anand Bakshi'),
      adaptedSong('us-gadar-ek-prem-katha-2001', 9, 'Traditional Shaadi Geet', 'Preeti Uttam', 'nS6HKc5nAtY', 'Traditional', {
        adaptationType: 'inspired',
        originalSongTitle: 'Punjabi Suhaag / Traditional Wedding Folk',
        originalArtist: 'Traditional Punjabi Folk',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Traditional Punjabi Suhaag / Kudmai wedding folk verse arranged directly by Uttam Singh and daughter Preeti Uttam for Sakeena’s wedding sequence.',
        originalLink: ytWatch('04q5_tAV_Xo'),
        referenceSource: 'Zee Music OST Credits · Punjabi Wedding Folk Heritage',
      }),
    ],
  },
  {
    id: 'us-pyaar-diwana-hota-hai-2002',
    directorId: 'uttam-singh',
    title: 'Pyaar Diwana Hota Hai',
    year: 2002,
    cast: 'Govinda, Rani Mukerji, Apurva Agnihotri',
    label: 'Universal Music India / Tips',
    significance:
      'Romantic drama starring Govinda and Rani Mukerji released April 26, 2002 (a remake of 1998 Tamil Sollamale, predating December 2002 Tamil Kadhal Sugamanathu—making the title duet an original Uttam Singh studio composition alongside Hariharan and Preeti Uttam’s "Deewane Dil").',
    songs: [
      origSong('us-pyaar-diwana-hota-hai-2002', 1, 'Pyaar Diwana Hota Hai', 'Udit Narayan, Kavita Krishnamurthy', 'UHn3LPc4yCI', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 2, 'Deewane Dil', 'Hariharan, Preeti Uttam', 'zj8b9BSbg3U', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 3, 'Pyaar Achha Hota Hai', 'Jaspinder Narula', '75kgxBAUtJs', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 4, 'Teri Aankhen Bolti Hai', 'Alka Yagnik, Vinod Rathod', '6FcnSTmeu5M', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 5, 'Ye Kya Jadu', 'Udit Narayan', '01qlm7ynwOo', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 6, 'Kya Dilli Kya Jalandar', 'Sonu Nigam, Preeti Uttam', '0SHi2r3tTrQ', 'Anand Bakshi'),
      origSong('us-pyaar-diwana-hota-hai-2002', 7, 'Pyaar Diwana Hota Hai (Theme Music)', 'Preeti Uttam', 'F1-vIGApcyc', 'Anand Bakshi'),
    ],
  },
  {
    id: 'us-the-hero-love-story-of-a-spy-2003',
    directorId: 'uttam-singh',
    title: 'The Hero: Love Story of a Spy',
    year: 2003,
    cast: 'Sunny Deol, Preity Zinta, Priyanka Chopra, Amrish Puri',
    label: 'Times Music',
    significance:
      'Anil Sharma espionage tentpole reuniting Uttam Singh with Sunny Deol across six official soundtrack compositions penned by Anand Bakshi and Javed Akhtar, led by "Dil Main Hai Pyaar", "In Mast Nigahon Se", and "Tum Bhi Na Mano".',
    songs: [
      origSong('us-the-hero-love-story-of-a-spy-2003', 1, 'Dil Main Hai Pyaar', 'Udit Narayan, Alka Yagnik, Jaspinder Narula', 'EVPmqkyzBl4', 'Anand Bakshi'),
      origSong('us-the-hero-love-story-of-a-spy-2003', 2, 'Tere Shehar Ka Kya Hai Naam', 'Udit Narayan, Alka Yagnik', 'NaCLmZK8HKE', 'Anand Bakshi'),
      origSong('us-the-hero-love-story-of-a-spy-2003', 3, 'In Mast Nigahon Se', 'Udit Narayan, Sunidhi Chauhan', 'n056VHF4zWw', 'Javed Akhtar'),
      origSong('us-the-hero-love-story-of-a-spy-2003', 4, 'Mari Koyal Ne Aisi Cook', 'Sardool Sikander, Jaspinder Narula', 'NIWNPfHuKJU', 'Anand Bakshi'),
      origSong('us-the-hero-love-story-of-a-spy-2003', 5, 'Tum Bhi Na Mano', 'Hariharan, Alka Yagnik', 'ghv74-H3mUw', 'Javed Akhtar'),
      origSong('us-the-hero-love-story-of-a-spy-2003', 6, 'Dil Main Hai Pyaar (Sad / Version 2)', 'Alka Yagnik, Jaspinder Narula', 'SzEP6aX1LWk', 'Anand Bakshi'),
    ],
  },
  {
    id: 'us-pinjar-2003',
    directorId: 'uttam-singh',
    title: 'Pinjar',
    year: 2003,
    cast: 'Urmila Matondkar, Manoj Bajpayee, Sanjay Suri, Priyanshu Chatterjee, Isha Koppikar',
    label: 'Saregama',
    significance:
      'Dr. Chandraprakash Dwivedi’s National Award-winning Partition classic and arguably Uttam Singh’s artistic zenith, blending Gulzar and Amrita Pritam’s poetry with Wadali Brothers, Jagjit Singh, Roop Kumar Rathod, and Preeti Uttam.',
    songs: [
      origSong('us-pinjar-2003', 1, 'Shaba Ni Shaba', 'Udit Narayan, Kavita Krishnamurthy, Sadhana Sargam', 'Pp5p_0HrvbY', 'Gulzar'),
      origSong('us-pinjar-2003', 2, 'Maar Udari', 'Jaspinder Narula, Preeti Uttam, Ameya Date, Nihar S.', 'Ifwsa6c2if0', 'Gulzar'),
      origSong('us-pinjar-2003', 3, 'Haath Choote (Duet)', 'Jagjit Singh, Preeti Uttam', 'FPX5P9GAXsY', 'Gulzar'),
      origSong('us-pinjar-2003', 4, 'Vatna Ve', 'Roop Kumar Rathod, Uttam Singh', 'bp5WoPsinqQ', 'Gulzar'),
      origSong('us-pinjar-2003', 5, 'Darda Marya', 'Wadali Brothers, Jaspinder Narula', 'Jc8a2aO5IUQ', 'Gulzar'),
      origSong('us-pinjar-2003', 6, 'Charkha Chalati Maa', 'Preeti Uttam', 'WYgiq9FrO3E', 'Amrita Pritam'),
      origSong('us-pinjar-2003', 7, 'Sita Ko Dekhe', 'Suresh Wadkar, Sadhana Sargam', 'VBdOqSApl5E', 'Zehra Nigah'),
      adaptedSong('us-pinjar-2003', 8, 'Shabad', 'Preeti Uttam', 'FOSSXkn0VYk', 'Traditional', {
        adaptationType: 'inspired',
        originalSongTitle: 'Gurbani Shabad Kirtan (Traditional Sikh Hymn)',
        originalArtist: 'Traditional Gurbani Heritage',
        originalYear: 'Traditional',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Devotional rendering grounded directly in traditional Punjabi Gurbani Shabad Kirtan ragas.',
        originalLink: ytWatch('KsKMjzUSek0'),
        referenceSource: 'Saregama Soundtrack Credits · Traditional Sikh Sacred Music',
      }),
      adaptedSong('us-pinjar-2003', 9, 'Waris Shah Nu', 'Wadali Brothers, Preeti Uttam', 'FHxMi5d5XCk', 'Gulzar (after Amrita Pritam)', {
        adaptationType: 'inspired',
        originalSongTitle: 'Ajj Aakhaan Waris Shah Nu (Traditional Punjabi Heer Elegy)',
        originalArtist: 'Amrita Pritam / Traditional Punjabi Sufi Folk',
        originalYear: '1948',
        originCategory: 'Indian Folk & Classical',
        adaptationNotes:
          'Set directly to Amrita Pritam’s historic 1948 Partition poem "Ajj Aakhaan Waris Shah Nu" and traditional Punjabi Heer–Waris Shah Sufi recitation.',
        originalLink: ytWatch('rBvFabOMPVs'),
        referenceSource: 'Punjabi Literary & Sufi Heritage · Pinjar OST',
      }),
      origSong('us-pinjar-2003', 10, 'Haath Choote (Male)', 'Jagjit Singh', 'HfsIEIrEulI', 'Gulzar'),
    ],
  },
  {
    id: 'us-ho-jaata-hai-pyaar-2005',
    directorId: 'uttam-singh',
    title: 'Ho Jaata Hai Pyaar',
    year: 2005,
    cast: 'Jeetendra, Rati Agnihotri, Aleeza, Gaurav Ghai',
    label: 'Retro Music India',
    significance:
      'Delayed 2005 romantic family drama starring Jeetendra and Rati Agnihotri, featuring late-90s-recorded studio melodies by Abhijeet Bhattacharya, Udit Narayan, Shaan, and Kavita Krishnamurthy.',
    songs: [
      origSong('us-ho-jaata-hai-pyaar-2005', 1, 'Ho Jata Hai Pyar', 'Abhijeet Bhattacharya, Kavita Krishnamurthy', 'D4CcznUD51U', 'Basit Khan'),
      origSong('us-ho-jaata-hai-pyaar-2005', 2, 'Dil Pe Chal Rahe', 'Udit Narayan, Kavita Krishnamurthy', '8op-zjI_rOU', 'Basit Khan'),
      origSong('us-ho-jaata-hai-pyaar-2005', 3, 'College Ke Chakkar', 'Shaan, Kavita Krishnamurthy', 'xN_NHVyKlSE', 'Basit Khan'),
    ],
  },
  {
    id: 'us-kachchi-sadak-2006',
    directorId: 'uttam-singh',
    title: 'Kachchi Sadak',
    year: 2006,
    cast: 'Rahul Singh, Parmita Katkar, Mithun Chakraborty, Amrish Puri, Madhoo',
    label: 'Saregama',
    significance:
      'Sanjay D. Singh drama pairing Amrish Puri and Mithun Chakraborty, indexing Uttam Singh’s six vocal tracks led by Adnan Sami’s qawwali "Khawaja Mere Khwaja", KK’s title song, and Shreya Ghoshal’s "Ek Tum Se Baat Poochun".',
    songs: [
      origSong('us-kachchi-sadak-2006', 1, 'Khawaja Mere Khwaja', 'Adnan Sami', 'AP69IkX_G7g', 'Dr. Prabha Thakur'),
      origSong('us-kachchi-sadak-2006', 2, 'Kachhi Sadak', 'KK', 'AkaEKRFGNGA', 'Dr. Prabha Thakur'),
      origSong('us-kachchi-sadak-2006', 3, 'Ek Tum Se Baat Poochun (Duet)', 'Udit Narayan, Shreya Ghoshal', 'XjHi_UmT6P8', 'Dr. Prabha Thakur'),
      origSong('us-kachchi-sadak-2006', 4, 'Ek Tum Se Baat Poochun (Female)', 'Shreya Ghoshal', 'CLFguo6eos0', 'Dr. Prabha Thakur'),
      origSong('us-kachchi-sadak-2006', 5, 'Hungama Hungama (Duet)', 'Udit Narayan, Vinod Rathod', '2gBI7frRhW8', 'Dr. Prabha Thakur'),
      origSong('us-kachchi-sadak-2006', 6, 'Hungama Hungama (Male)', 'Udit Narayan', 'id5CXIpbl7k', 'Dr. Prabha Thakur'),
    ],
  },
  {
    id: 'us-rajjo-2013',
    directorId: 'uttam-singh',
    title: 'Rajjo',
    year: 2013,
    cast: 'Kangana Ranaut, Paras Arora, Prakash Raj, Mahesh Manjrekar, Jaya Prada',
    label: 'Times Music',
    significance:
      'Vishwas Patil’s musical period drama starring Kangana Ranaut as a traditional kotha performer, preserving Uttam Singh’s five Times Music video/Topic vocal songs led by Bela Shende, Javed Ali, and Shaan (excluding Gurmeet Singh’s co-composed instrumental theme and unuploaded soundtrack B-cuts).',
    songs: [
      origSong('us-rajjo-2013', 1, 'Mere Dil Ki Train Bulaati Hain', 'Shaan, Mumbai Voices', 'DNKETvaIBHM', 'Sameer'),
      origSong('us-rajjo-2013', 2, 'Kaise Milu Main Piya', 'Javed Ali, Bela Shende', '9sF73zi-E10', 'Sameer'),
      origSong('us-rajjo-2013', 3, 'Kaleja Hai Hazir', 'Bela Shende', '7oxRfPn17lg', 'Dev Kohli'),
      origSong('us-rajjo-2013', 4, 'Mere Ghungroo Ki Jhankar', 'Javed Ali, Bela Shende', 'nJYRYhMGH-o', 'Sameer'),
      origSong('us-rajjo-2013', 5, 'Julmi Re Julmi (Uchat Gayi Nindiya)', 'Bela Shende', 'M-eW1MP9kiM', 'Sameer'),
    ],
  },
  {
    id: 'us-honour-killing-2014',
    directorId: 'uttam-singh',
    title: 'Honour Killing',
    year: 2014,
    cast: 'Sandeep Singh, Zara Sheikh, Gulshan Grover, Prem Chopra, Tom Alter',
    label: 'Blue Tomatoes Music / Ek Onkar Films',
    significance:
      'Avtar Bhogal’s UK–Punjab social drama marking Uttam Singh’s final released Hindi feature soundtrack, uniting Shreya Ghoshal, Kunal Ganjawala, Roop Kumar Rathod, Lakhwinder Wadali, Javed Ali, and Uttam Singh himself to Dev Kohli’s lyrics.',
    songs: [
      origSong('us-honour-killing-2014', 1, 'Dholna', 'Shreya Ghoshal, Kunal Ganjawala', 'e2OBXMXYlvU', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 2, 'Rabba Maaf Kareen', 'Roop Kumar Rathod', 'Uq7KBZE1dBU', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 3, 'Dharti Guruan Di', 'Lakhwinder Wadali', 'dF6fBBzANDU', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 4, 'Khao Piyo Jio', 'Sumitra Iyer, Ravinder Upadhyay', 'YG1V4zfM8aE', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 5, 'Balle Balle Shava Shava', 'Javed Ali, Uttam Singh', 'xdzvborSBEQ', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 6, 'Chahe London Aake Vaso Chahe India Vich Raho', 'Ravinder Grewal', 'Uo6I8NeUm5g', 'Dev Kohli'),
      origSong('us-honour-killing-2014', 7, 'Masti Chai Liyo Badai Nach Nach Pao Bhangra', 'Javed Ali', '8yd7GgtD8y0', 'Dev Kohli'),
    ],
  },
];
