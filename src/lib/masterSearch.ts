import type {
  AdaptationType,
  DirectorId,
  DirectorProfile,
  MovieEntry,
  OriginCategory,
  SongEntry,
} from '../types/archive';

export interface MasterSongHit {
  song: SongEntry;
  movie: MovieEntry;
  director: DirectorProfile;
  score: number;
  matchedCue?: string;
  matchedReason: string;
}

export interface MasterMovieHit {
  movie: MovieEntry;
  director: DirectorProfile;
  score: number;
  adaptedCount: number;
  originalCount: number;
}

export interface MasterSearchResults {
  songs: MasterSongHit[];
  movies: MasterMovieHit[];
  totalMatchedSongs: number;
  totalMatchedMovies: number;
}

const DIRECTOR_ALIASES: Record<DirectorId, string[]> = {
  'nadeem-shravan': ['Nadeem Shravan', 'Nadeem-Shravan', 'Nadeem Saifee', 'Shravan Rathod'],
  'anu-malik': ['Anu Malik', 'Anwar Sardar Malik', 'Annu Malik'],
  'rd-burman': ['R.D. Burman', 'RD Burman', 'Rahul Dev Burman', 'Pancham', 'Pancham Da'],
  'shankar-jaikishan': ['Shankar Jaikishan', 'Shankar-Jaikishan', 'SJ'],
  'ar-rahman': ['A.R. Rahman', 'AR Rahman', 'Allah Rakha Rahman', 'Rahman', 'Mozart of Madras'],
  naushad: ['Naushad', 'Naushad Ali'],
  'op-nayyar': ['O.P. Nayyar', 'OP Nayyar', 'Omkar Prasad Nayyar'],
  'anand-milind': ['Anand Milind', 'Anand-Milind', 'Anand Shrivastav', 'Milind Shrivastav'],
  'laxmikant-pyarelal': ['Laxmikant Pyarelal', 'Laxmikant-Pyarelal', 'LP'],
  'sd-burman': ['S.D. Burman', 'SD Burman', 'Sachin Dev Burman', 'Burman Dada'],
  ravi: ['Ravi', 'Ravi Shankar Sharma', 'Bombay Ravi'],
  roshan: ['Roshan', 'Roshan Lal Nagrath'],
  'madan-mohan': ['Madan Mohan', 'Madan Mohan Kohli', 'Ghazal King'],
  'bappi-lahiri': ['Bappi Lahiri', 'Bappi Lahri', 'Bappi Da', 'Disco King', 'Alokesh Lahiri'],
  'jatin-lalit': ['Jatin Lalit', 'Jatin-Lalit', 'Jatin Pandit', 'Lalit Pandit'],
  'kalyanji-anandji': ['Kalyanji Anandji', 'Kalyanji-Anandji', 'Kalyanji Virji Shah', 'Anandji'],
  khayyam: ['Khayyam', 'Mohammed Zahur Khayyam', 'Sharmaji Varmaji'],
  'dilip-sen-sameer-sen': ['Dilip Sen Sameer Sen', 'Dilip Sen-Sameer Sen', 'Dilip Sen', 'Sameer Sen', 'Sen Brothers'],
  'viju-shah': ['Viju Shah', 'Vijay Kalyanji Shah', 'King of Synth Sounds'],
  'himesh-reshammiya': ['Himesh Reshammiya', 'Himesh', 'HR', 'Lord Himesh'],
  'salil-chowdhury': ['Salil Chowdhury', 'Salil Chaudhry', 'Salilda', 'Salil Da'],
  'ismail-darbar': ['Ismail Darbar', 'Ismail Durbar'],
  'nikhil-vinay': ['Nikhil Vinay', 'Nikhil-Vinay', 'Nikhil Kamath', 'Vinay Tiwari'],
  'shiv-hari': ['Shiv Hari', 'Shiv-Hari', 'Shivkumar Sharma', 'Hariprasad Chaurasia', 'Pandit Shivkumar Sharma', 'Pandit Hariprasad Chaurasia'],
  raamlaxman: ['Raamlaxman', 'Ram Laxman', 'Ram-Laxman', 'Vijay Patil', 'Surendra Hendre'],
  jaidev: ['Jaidev', 'Jaidev Verma', 'Jaidev Varma'],
  'aadesh-shrivastava': ['Aadesh Shrivastava', 'Adesh Shrivastav', 'Aadesh Shrivastav', 'Adesh Shrivastava'],
  'usha-khanna': ['Usha Khanna', 'Javed Anwar', 'Ushaji'],
  'uttam-singh': ['Uttam Singh', 'Uttam Jagdish', 'Uttam-Jagdish', 'Jagdish Khanna'],
  'shankar-ehsaan-loy': [
    'Shankar Ehsaan Loy',
    'Shankar-Ehsaan-Loy',
    'SEL',
    'Shankar Mahadevan',
    'Ehsaan Noorani',
    'Loy Mendonsa',
  ],
  'sanjeev-darshan': [
    'Sanjeev Darshan',
    'Sanjeev-Darshan',
    'Sanjeev Rathod',
    'Darshan Rathod',
  ],
  'c-ramchandra': [
    'C. Ramchandra',
    'C Ramchandra',
    'Ramchandra Narhar Chitalkar',
    'Chitalkar Ramchandra',
    'Chitalkar',
    'Anna Saheb',
    'Annasaheb',
  ],
  'anil-biswas': [
    'Anil Biswas',
    'Anil Krishna Biswas',
    'Anil-da',
    'Anilda',
    'Anil Da',
    'Bhishma Pitamah of Hindi film music',
  ],
};

/**
 * Iconic opening lines (mukhda), popular chorus hooks, and common Hinglish search cues
 * keyed by exact verified song IDs across all 18 music directors.
 */
const SONG_LYRIC_CUES_BY_ID: Record<string, string[]> = {
  // Dilip Sen–Sameer Sen
  'ds-yeh-dillagi-1994-1': [
    'Jab bhi koi ladki dekhu mera dil deewana bole ole ole',
    'Jab koi ladki dekhun mera dil diwana bole ole ole',
    'Mera dil deewana bole ole ole',
  ],
  'ds-yeh-dillagi-1994-2': ['Hothon pe bas tera naam hai', 'Tujhe chahta hoon main hothon pe bas'],
  'ds-aflatoon-1997-1': ['Poster lagwa do bazar mein', 'Ladki ko ladka pasand aa gaya', 'Poster lagwado'],
  'ds-aflatoon-1997-2': ['We will rock you Rocky', 'We love we love Rocky'],
  'ds-arjun-pandit-1999-1': ['Kudiya shehar diya', 'Kudiyan shaher diyan Daler Mehndi'],
  'ds-aaina-1993-1': ['Goriya re goriya mera dil chura le ja'],
  'ds-aaina-1993-3': ['Banno ki aayegi baraat dholak', 'Saj ke aayegi baraat'],
  'ds-jeena-marna-tere-sang-1992-1': ['Chaha hai tumhein chahenge har dam'],
  'ds-jeena-marna-tere-sang-1992-6': ['Kala doriya kunde naal adiya oye'],
  'ds-haqeeqat-1995-1': ['Le pappiyan jhappiyan pa le', 'Tequila brass hook'],
  'ds-ziddi-1997-1': ['Kammo mera dil le gayee', 'Billo de ghar Abrar ul Haq'],
  'ds-ittefaq-2001-1': ['Deewana dil mera dil dil dil', 'Cup of Life Ricky Martin La Copa De La Vida'],
  'ds-achanak-1998-1': ['Duniya bhulake tumse mila hoon', 'Main aur meri tanhai'],

  // Nadeem–Shravan
  'ns-aashiqui-1': ['Dheere dheere se meri zindagi mein aana', 'Meri zindagi mein aana'],
  'ns-aashiqui-2': ['Tu meri zindagi hai tu meri har khushi hai'],
  'ns-aashiqui-3': ['Nazar ke saamne jigar ke paas koi rehta hai'],
  'ns-aashiqui-4': ['Main duniya bhula doonga teri chahat mein'],
  'ns-aashiqui-5': ['Bas ek sanam chahiye aashiqui ke liye'],
  'ns-aashiqui-6': ['Ab tere bin jee lenge hum zahar zindagi ka pee lenge hum'],
  'ns-aashiqui-7': ['Dil ka aalam main kya bataun tujhe'],
  'ns-saajan-1': ['Bahut pyar karte hain tumko sanam kasam chahe le lo'],
  'ns-saajan-3': ['Mera dil bhi kitna pagal hai yeh pyar to tumse karta hai'],
  'ns-saajan-4': ['Dekha hai pehli baar saajan ki aankhon mein pyar'],
  'ns-saajan-5': ['Tu shayar hai main teri shayari'],
  'ns-saajan-6': ['Jiye to jiye kaise bin aapke'],
  'ns-deewana-1': ['Aisi deewangi dekhi nahi kahin maine isliye'],
  'ns-deewana-2': ['Sochenge tumhe pyar kare ki nahi yeh dil beqarar kare ki nahi'],
  'ns-rh-1': ['Kitna pyara tujhe rab ne banaya jee kare dekhta rahoon'],
  'ns-rh-3': ['Pardesi pardesi jaana nahi mujhe chhod ke'],
  'ns-rh-4': ['Aaye ho meri zindagi mein tum bahar ban ke'],
  'ns-pardes-3': ['Do dil mil rahe hain magar chupke chupke'],
  'ns-st-2': ['Dilbar dilbar haan dilbar dilbar', 'Hosh na khabar hai yeh kaisa asar hai'],
  'ns-dhadkan-1': ['Dil ne yeh kaha hai dil se mohabbat ho gayi hai tumse'],
  'ns-dhadkan-3': ['Tum dil ki dhadkan mein rehte ho rehte ho'],
  'ns-dhadkan-4': ['Dulhe ka sehra suhana lagta hai'],
  'ns-raaz-2': ['Aapke pyaar mein hum savarne lage'],

  // Anu Malik
  'am-baaz93-1': ['Yeh kaali kaali aankhen tururu', 'Go goa gone'],
  'am-baaz93-2': ['Baazigar o baazigar tu hai bada jadugar'],
  'am-baaz93-3': ['Kitaben bahut si padhi hongi tumne'],
  'am-ahat-1': ['Raja ko rani se pyar ho gaya pehli nazar mein'],
  'am-ahat-2': ['Dil mera churaya kyun jab yeh dil todna hi tha'],
  'am-bord97-1': ['Sandese aate hain humein tadpate hain', 'Ke ghar kab aaoge'],
  'am-ishq97-1': ['Neend churayee meri kisne o sanam tune'],
  'am-mhn04-1': ['Tumse milke dil ka hai jo haal kya kahein', 'Hua hai tumse pyaar'],
  'am-mhn04-3': ['Kiska hai yeh tumko intezaar main hoon na'],
  'am-murd04-1': ['Kaho na kaho yeh aankhen bolti hain', 'Tamally Maak Amr Diab'],
  'am-hdjpk-1': ['Ek garam chai ki pyali ho koi usko pilane wali ho'],

  // R.D. Burman
  'rdb-tm66-1': ['Aaja aaja main hoon pyar tera allah allah inkar tera'],
  'rdb-pad68-1': ['Ek chatur naar karke sringar', 'Mere man ke dwar'],
  'rdb-pad68-2': ['Mere samne wali khidki mein ek chand ka tukda rehta hai'],
  'rdb-kp71-1': ['Yeh shaam mastani madhosh kiye jaye'],
  'rdb-kp71-2': ['Pyar diwana hota hai mastana hota hai'],
  'rdb-hrhk71-1': ['Dum maro dum mit jaye gham bolo subah shaam hare krishna hare ram'],
  'rdb-car71-1': ['Piya tu ab to aaja shola sa man dahke aake bujha ja', 'Monica o my darling'],
  'rdb-ap72-1': ['Chingari koi bhadke to sawan use bujhaye'],
  'rdb-ap72-2': ['Kuchh to log kahenge logon ka kaam hai kehna'],
  'rdb-ykb73-1': ['Chura liya hai tumne jo dil ko nazar nahin churaana sanam'],
  'rdb-sho75-1': ['Mehbooba mehbooba o mehbooba', 'Gulshan mein gul khilte hain'],
  'rdb-sho75-2': ['Yeh dosti hum nahin todengay todenge dum magar'],
  'rdb-hkkn77-2': ['Kya hua tera vaada woh kasam woh irada'],
  'rdb-hkkn77-3': ['Bachna ae haseeno lo main aa gaya'],
  'rdb-mas83-1': ['Tujhse naraz nahin zindagi hairan hoon main'],
  'rdb-1942-1': ['Ek ladki ko dekha to aisa laga jaise khilta gulab'],
  'rdb-1942-2': ['Kuchh na kaho kuchh bhi na kaho kya kehna hai kya sunna hai'],

  // Shankar–Jaikishan
  'sj-awa51-2': ['Awaara hoon ya gardish mein hoon aasman ka tara hoon'],
  'sj-s420-1': ['Mera joota hai japani yeh patloon inglistani sar pe laal topi roosi'],
  'sj-s420-2': ['Pyar hua iqrar hua hai pyar se phir kyun darta hai dil'],
  'sj-s420-3': ['Ramaiya vastavaiya maine dil tujhko diya'],
  'sj-san64-1': ['Dost dost na raha pyar pyar na raha zindagi humein tera aitbaar na raha'],

  // A.R. Rahman
  'arr-dil-se-1998-1': ['Chaiyya chaiyya chal chaiyya chaiyya', 'Jinke sar ho ishq ki chhaon'],
  'arr-dil-se-1998-2': ['Jiya jale jaan jale naino tale dhuan chale'],
  'arr-taal-1999-1': ['Taal se taal mila o re saathi'],
  'arr-lagaan-2001-1': ['Sun mitwa re mitwa sun tujhko kya darr hai re'],
  'arr-rockstar-2011-2': ['Kun faya kun sajra savera mere tan barse'],
  'arr-rockstar-2011-3': ['Nadaan parindey ghar aaja', 'Kaaga re kaaga re mori itni araz tose'],

  // Naushad
  'naushad-baiju-bawra-1952-3': ['O duniya ke rakhwale sun dard bhare mere nale'],
  'naushad-mughal-e-azam-1960-1': ['Pyar kiya to darna kya jab pyar kiya to darna kya'],
  'naushad-mughal-e-azam-1960-2': ['Mohe panghat pe nandlal chhed gayo re'],

  // O.P. Nayyar
  'opn-naya-daur-1957-1': ['Uden jab jab zulfen teri kawariyon ka dil machle'],
  'opn-howrah-bridge-1958-1': ['Mera naam chin chin chu baba chin chin chu'],
  'opn-howrah-bridge-1958-2': ['Aaiye meherbaan baithiye jaane jaan'],
  'opn-kashmir-ki-kali-1964-2': ['Yeh chand sa roshan chehra zulfon ka rang sunehra'],
  'opn-kismat-1968-2': ['Kajra mohabbat wala aankhiyon mein aisa dala'],

  // Laxmikant–Pyarelal
  'lp-bobby-1973-1': ['Jhooth bole kauwa kaate kaale kauwe se dariyo'],
  'lp-bobby-1973-2': ['Hum tum ek kamre mein band ho aur chaabi kho jaye'],
  'lp-karz-1980-1': ['Meri umar ke naujawano dil na lagana o deewano om shanti om'],
  'lp-karz-1980-2': ['Ek haseena thi ek deewana tha kya umar kya sama'],
  'lp-tezaab-1988-1': ['Ek do teen char paanch cheh saat aath nau das gyarah barah terah'],
  'lp-hum-1991-1': ['Are o jumma meri jaanemann jumma chumma de de'],
  'lp-khalnayak-1993-1': ['Choli ke peeche kya hai chunari ke neeche kya hai'],

  // S.D. Burman
  'sdb-solva-saal-1958-2': ['Hai apna dil to aawara na jaane kis pe aayega'],
  'sdb-kala-bazar-1960-1': ['Khoya khoya chand khula aasman aankhon mein saari raat jayegi'],
  'sdb-guide-1965-2': ['Kaaton se kheench ke yeh aanchal aaj phir jeene ki tamanna hai'],
  'sdb-guide-1965-3': ['Gaata rahe mera dil tu hi meri manzil'],
  'sdb-aradhana-1969-1': ['Mere sapno ki rani kab aayegi tu aayi rut mastani'],
  'sdb-aradhana-1969-2': ['Roop tera mastana pyar mera deewana bhool koi humse na ho jaye'],
  'sdb-aradhana-1969-3': ['Kora kagaz tha yeh man mera likh liya naam ispe tera'],

  // Madan Mohan
  'mm-anpadh-1962-1': ['Aap ki nazron ne samjha pyar ke kabil mujhe'],
  'mm-woh-kaun-thi-1964-1': ['Lag ja gale ke phir yeh haseen raat ho na ho'],
  'mm-woh-kaun-thi-1964-2': ['Naina barse rimjhim rimjhim piya tore aawan ki aas'],
  'mm-hanste-zakhm-1973-1': ['Tum jo mil gaye ho to yeh lagta hai ke jahan mil gaya'],

  // Bappi Lahiri
  'bl-chalte-chalte-1976-1': ['Chalte chalte mere yeh geet yaad rakhna kabhi alvida na kehna'],
  'bl-disco-dancer-1982-1': ['I am a disco dancer zindagi mera gaana'],
  'bl-disco-dancer-1982-2': ['Yaad aa raha hai tera pyar kahan hum kahan tum'],
  'bl-disco-dancer-1982-3': ['Jimmy jimmy jimmy aaja aaja aaja'],
  'bl-namak-halaal-1982-2': ['Jawani janeman haseen dilruba mile do dil jawan nisar ho gaya'],
  'bl-sharaabi-1984-2': ['Inteha ho gayi intezaar ki aayi na kuchh khabar mere yaar ki'],
  'bl-thanedaar-1990-1': ['Tu premi aaha main premi aaha tamma tamma loge'],

  // Jatin–Lalit
  'jl-jo-jeeta-wohi-sikandar-1992-1': ['Chahe tum kuch na kaho maine sun liya pehla nasha pehla khumar'],
  'jl-dilwale-dulhania-le-jayenge-1995-1': ['Tujhe dekha to yeh jaana sanam pyar hota hai deewana sanam'],
  'jl-dilwale-dulhania-le-jayenge-1995-2': ['Mehndi laga ke rakhna doli saja ke rakhna'],
  'jl-ghulam-1998-1': ['Ae kya bolti tu aati kya khandala'],
  'jl-kuch-kuch-hota-hai-1998-1': ['Tum paas aaye yun muskuraye kuch kuch hota hai'],
  'jl-kuch-kuch-hota-hai-1998-2': ['Koi mil gaya mera dil gaya kya karoon'],
  'jl-kabhi-khushi-kabhie-gham-2001-2': ['Bole chudiyan bole kangana haaye main ho gayi teri sajna'],
  'jl-fanaa-2006-1': ['Subhanallah chand sifarish jo karta hamari'],

  // Kalyanji–Anandji
  'ka-chhalia-1960-1': ['Dum dum diga diga mausam bheega bheega'],
  'ka-don-1978-1': ['Khaike paan banaraswala khul jaye band akal ka tala'],
  'ka-don-1978-2': ['Yeh mera dil yaar ka deewana deewana deewana pyar ka parwana'],
  'ka-qurbani-1980-1': ['Laila o laila main laila kaisi hoon laila'],
  'ka-lawaaris-1981-1': ['Mere angne mein tumhara kya kaam hai'],
  'ka-lawaaris-1981-2': ['Apni to jaise taise thodi aise ya waise kat jayegi'],
  'ka-kalaakaar-1983-1': ['Neele neele ambar par chand jab aaye'],
  'ka-tridev-1989-1': ['Oye oye tirchhi topiwale oye oye'],

  // Khayyam
  'kh-phir-subha-hogi-1958-1': ['Woh subah kabhi to aayegi'],
  'kh-noorie-1979-1': ['Aaja re o mere dilbar aaja dil ki pyas bujha ja re'],
  'kh-bazaar-1982-1': ['Dikhayi diye yun ki bekhud kiya humein aap se bhi juda kar chali'],
  'kh-bazaar-1982-3': ['Karoge yaad to har baat yaad aayegi'],

  // Viju Shah
  'viju-vishwatma-1992-1': ['Saat samundar paar main tere peeche peeche aa gayi'],
  'viju-mohra-1994-1': ['Tu cheez badi hai mast mast nahin tujhko koi hosh', 'Dam mast qalandar mast'],
  'viju-mohra-1994-2': ['Tip tip barsa paani paani ne aag lagayi'],
  'viju-mohra-1994-3': ['Na kajre ki dhar na motiyon ke haar', 'Koi kiya singaar phir bhi kitni sundar ho'],
  'viju-tere-mere-sapne-1996-1': ['Ladka aankh maare aankh maare', 'Seeti bajaye'],
  'viju-gupt-1997-2': ['Duniya haseenon ka mela mele mein yeh dil akela'],
  'viju-gupt-1997-3': ['Mushkil bada yeh pyar hai hota nahin aasan'],
  'viju-bade-miyan-chote-miyan-1998-2': ['Oye makhna oye makhna'],
  'viju-bade-miyan-chote-miyan-1998-3': ['Kisi disco mein jaaye kisi hotel mein khaye'],

  // Himesh Reshammiya
  'hr-tere-naam-2003-1': ['Tere naam humne kiya hai jeevan apna saara sanam'],
  'hr-aashiq-banaya-aapne-2005-1': ['Aashiq banaya aapne aashiq banaya aapne'],
  'hr-aashiq-banaya-aapne-2005-3': ['Aap ki kashish sarfarosh hai'],
  'hr-aksar-2006-1': ['Jhalak dikhlaja ek baar aaja aaja aaja'],
  'hr-36-china-town-2006-1': ['Aashiqui mein teri jaayegi jaan meri'],
  'hr-namastey-london-2007-1': ['Main jahaan rahoon main kahin bhi hoon teri yaad saath hai'],
  'hr-bodyguard-2011-1': ['Teri meri meri teri prem kahani hai mushkil', 'La Betleem colo-n jos'],
  'hr-khiladi-786-2012-1': ['Tera pyaar pyaar pyaar hookah bar'],
  'hr-khiladi-786-2012-2': ['Lonely lonely tere bin main lonely', 'Mr Saxobeat'],
  'hr-kick-2014-1': ['Jumme ki raat hai chumme ki baat hai'],
  'hr-prem-ratan-dhan-payo-2015-1': ['Payoji maine prem ratan dhan payo'],
  'hr-sanam-teri-kasam-2016-2': ['Meri bebasi ka bayan hai tera chehra'],
  'hr-teraa-surroor-2016-3': ['Wafa ne bewafai ki hai'],
  'hr-genius-2018-1': ['Tera fitoor jabse chadh gaya re'],
  'hr-kisi-ka-bhai-kisi-ki-jaan-2023-1': ['Naiyo lagda dil tere bina'],
  'hr-kyaa-dil-ne-kahaa-2002-2': ['Nikamma kiya is dil ne hai tere pyaar mein'],
  'hr-zameen-2003-2': ['Dilli ki sardi mein tu bhi aa ja'],
  'hr-dil-ne-jise-apna-kahaa-2004-1': ['Bindiya chamakne lagi choodiyan khanakne lagi'],
  'hr-main-aisa-hi-hoon-2005-3': ['Papa mere papa chanda ne poochha taaron se'],
  'hr-rocky-the-rebel-2006-1': ['Junoon junoon tera hi junoon'],
  'hr-dil-diya-hai-2006-1': ['Afsana banake bhool na jaana'],
  'hr-aap-ki-khatir-2006-1': ['Aap ki khatir mere dil ka jahan hai hazir'],
  'hr-tom-dick-and-harry-2006-1': ['Jhoom jhoom ta hoon main'],
  'hr-kajraare-2010-1': ['Kajra kajra kajraare naina tere kajraare'],
  'hr-dangerous-ishhq-2012-1': ['Tu hi rab tu hi dua'],
  'hr-dangerous-ishhq-2012-2': ['Naina re naina tujhse bura na koi'],
  'hr-humshakals-2014-1': ['Caller tune baby caller tune'],
  'hr-humshakals-2014-2': ['Piya ke bazaar mein nachungi aaj saari raat'],

  // Salil Chowdhury
  'sc-do-bigha-zamin-1953-3': ['Dharti kahe pukar ke paas aa', 'Mausam beeta jaye'],
  'sc-do-bigha-zamin-1953-4': ['Aaja ri aa nindiya tu aa', 'Ghoom aay re aay'],
  'sc-madhumati-1958-1': ['Zulmi sang ankh ladi re', 'Kaisi yeh peer badi re'],
  'sc-madhumati-1958-3': ['Aaja re pardesi main to kab se khadi is paar'],
  'sc-madhumati-1958-4': ['Dil tadap tadap ke keh raha hai aa bhi jaa'],
  'sc-madhumati-1958-5': ['Chadh gayo papi bichhua haye ram'],
  'sc-madhumati-1958-11': ['Suhana safar aur yeh mausam haseen'],
  'sc-parakh-1960-3': ['O sajna barkha bahar aayi ras ki phuhar layi'],
  'sc-chhaya-1961-1': ['Itna na mujhse tu pyar badha ke main ek badal awara', 'Mozart Symphony 40'],
  'sc-kabuliwala-1961-1': ['Ae mere pyare watan ae mere bichhde chaman'],
  'sc-kabuliwala-1961-2': ['Ganga aaye kahan se ganga jaye kahan re'],
  'sc-maya-1961-3': ['Tasveer teri dil mein jis din se utari hai'],
  'sc-maya-1961-4': ['Ja re ja re ud ja re panchhi baharon ke des ja re'],
  'sc-maya-1961-8': ['Zindagi hai kya sun meri jaan', 'Limelight Terry theme Chaplin'],
  'sc-half-ticket-1962-4': ['Aake seedhi lagi dil pe jaise katariya'],
  'sc-half-ticket-1962-6': ['Chil chil chilla ke kajri sunaye'],
  'sc-anand-1971-1': ['Kahin door jab din dhal jaye saanjh ki dulhan badan churaaye'],
  'sc-anand-1971-2': ['Zindagi kaisi hai paheli haye kabhi to hasaye kabhi ye rulaye'],
  'sc-anand-1971-4': ['Maine tere liye hi saat rang ke sapne chune'],
  'sc-annadata-1972-2': ['Raaton ke saaye ghane jab bojh dil par bane', 'Chopin Nocturne'],
  'sc-annadata-1972-3': ['Guzar jaye din din din ke har pal'],
  'sc-rajnigandha-1974-1': ['Kai baar yunhi dekha hai yeh jo man ki seema rekha hai'],
  'sc-rajnigandha-1974-2': ['Rajnigandha phool tumhare mahke yun hi jeevan mein'],
  'sc-chhoti-si-baat-1975-1': ['Jaaneman jaaneman tere do nayan chori chori leke gaye dekho mera man'],
  'sc-chhoti-si-baat-1975-2': ['Yeh din kya aaye lage phool hasne'],
  'sc-chhoti-si-baat-1975-3': ['Na jaane kyon hota hai yeh zindagi ke saath'],

  // Ismail Darbar
  'id-hum-dil-de-chuke-sanam-1999-1': ['Chand chhupa badal mein sharma ke meri jaana'],
  'id-hum-dil-de-chuke-sanam-1999-2': ['Nimbooda nimbooda nimbooda are kacha kacha chhota chhota'],
  'id-hum-dil-de-chuke-sanam-1999-3': ['Aankhon ki gustakhiyan maaf ho ek tuk tumhe dekhti hain'],
  'id-hum-dil-de-chuke-sanam-1999-6': ['Dholi taro dhol baje ke dham dham baje dhol'],
  'id-hum-dil-de-chuke-sanam-1999-9': ['Jhonka hawa ka aaj bhi zulfein udata hoga na'],
  'id-hum-dil-de-chuke-sanam-1999-10': ['Albela sajan aayo ri mora ati mann sukh payo ri'],
  'id-hum-dil-de-chuke-sanam-1999-11': ['Tadap tadap ke is dil se aah nikalti rahi'],
  'id-tera-jadoo-chal-gayaa-2000-1': ['Seene se yeh dil gaya tera jadoo chal gaya'],
  'id-devdas-2002-1': ['Silsila ye chahat ka maine bujhne na diya'],
  'id-devdas-2002-2': ['Maar daala maar daala hum pe yeh kisne hara rang daala'],
  'id-devdas-2002-3': ['Bairi piya bada bedardi ishq karake sataye'],
  'id-devdas-2002-5': ['Hamesha tumko chaha aur chaha kuch bhi nahi'],
  'id-devdas-2002-6': ['Woh chand jaisi ladki is dil pe chhaa rahi hai'],
  'id-devdas-2002-8': ['Dola re dola re dola re dola man dola tan dola'],
  'id-deewangee-2002-5': ['Ai ajnabi yeh kya hua kyun dil dhadakne laga', 'Cancao do Mar Dulce Pontes'],
  'id-baaz-a-bird-in-danger-2003-4': ['Sannate mein ek shor sunai deta hai yeh jo ajab si duniya hai'],
  'id-baaz-a-bird-in-danger-2003-6': ['Are are jala koi mita koi'],
  'id-kisna-the-warrior-poet-2005-1': ['Woh kisna hai woh kisna hai kisna kisna'],
  'id-kaanchi-2014-1': ['Kaanchi re kaanchi teri akhiyon mein hai jaadoo'],

  // Nikhil–Vinay
  'nv-dulaara-1994-7': ['Meri pant bhi sexy meri shirt bhi sexy', 'Arey ek hai anaar yahan'],
  'nv-bewafa-sanam-1995-1': ['Achchha sila diya toone mere pyar ka yaar ne hi loot liya ghar yaar ka'],
  'nv-bewafa-sanam-1995-2': ['Wafa na raas aayee tujhe o harjaee'],
  'nv-bewafa-sanam-1995-3': ['O dil tod ke hansti ho mera wafayein meri yaad karogi'],
  'nv-english-babu-desi-mem-1996-6': ['Kaise mukhde se nazarein hataun ki tujh mein mera rab dikhta', 'Kiven mukhre ton nazraan'],
  'nv-tum-bin-2001-1': ['Chhoti chhoti raatein lambi ho jaati hain baithe bithaye yunhi neendein kho jaati hain'],
  'nv-tum-bin-2001-2': ['Tumhare siva kuchh na chaahat karenge ke jab tak jiyenge mohabbat karenge'],
  'nv-tum-bin-2001-3': ['Koi fariyaad tere dil mein dabi ho jaise tune aankhon se koi baat kahi ho jaise'],
  'nv-tum-bin-2001-4': ['Dekhte hi dekhte dil kho gaya tumse milke na jaane mujhe kya ho gaya'],
  'nv-tum-bin-2001-8': ['Pyar humko hone laga kho na jaye yeh dil'],
  'nv-hum-tumhare-hain-sanam-2002-1': ['Hum tumhare hain sanam hum tumhare hain', 'Boohey barian Hadiqa Kiani'],
  'nv-aapko-pehle-bhi-kahin-dekha-hai-2003-3': ['Kuch bhi na kaha aur keh bhi gaye'],
  'nv-aapko-pehle-bhi-kahin-dekha-hai-2003-4': ['Aapko pehle bhi kahin dekha hai dil ne yeh mujhse kaha'],
  'nv-aapko-pehle-bhi-kahin-dekha-hai-2003-7': ['Aisi aankhen nahin dekhin aisi baatein nahin suni'],
  'nv-muskaan-2004-1': ['Woh ho tum woh ho tum zara si shokhi zara sa nasha ho tum'],
  'nv-phir-milenge-2004-1': ['Betab dil hai dhadkanon ki kasam na roko isey'],

  // Shiv–Hari
  'sh-silsila-1981-1': ['Rang barse bheege chunarwali rang barse o khaaike paan', 'Sone ki thaali mein jona parosa'],
  'sh-silsila-1981-2': ['Yeh kahan aa gaye hum yunhi saath saath chalte', 'Main aur meri tanhai aksar yeh baatein karte hain'],
  'sh-silsila-1981-3': ['Dekha ek khwab to yeh silsile hue door tak nigahon mein hain gul khile hue'],
  'sh-silsila-1981-4': ['Neela aasman so gaya neela aasman so gaya'],
  'sh-silsila-1981-6': ['Sar se sarke sarke chunariya ho gori'],
  'sh-vijay-1988-2': ['Badal pe chhalke aa sawan mein dhalke aa'],
  'sh-chandni-1989-1': ['Mere haathon mein nau nau choodiyan hain thoda thehro sajan majbooriyan hain'],
  'sh-chandni-1989-2': ['Lagi aaj sawan ki phir woh jhadi hai wohi aag seene mein phir jal padi hai'],
  'sh-chandni-1989-3': ['Chandni o meri chandni rang bhare baadal se tere naino ke kaajal se'],
  'sh-chandni-1989-4': ['Mitwa bhool na jaana mitwa', 'Tere mere hothon pe meethe meethe geet mitwa'],
  'sh-lamhe-1991-1': ['Kabhi main kahoon kabhi tum kaho maine tumhe yeh dil de diya'],
  'sh-lamhe-1991-2': ['Morni baaga ma bole aadhi raat ma chudiyan khanak gayeen haath ma'],
  'sh-darr-1993-1': ['Jaadu teri nazar khushboo tera badan tu haan kar ya na kar tu hai meri kiran'],
  'sh-darr-1993-2': ['Darwaza band karlo aji darwaza band karlo'],
  'sh-darr-1993-3': ['Tu mere samne main tere samne tujhko dekhoon ke pyar karoon'],
  'sh-darr-1993-7': ['Ang se ang lagana sajan humein aise rang lagana'],

  // Raamlaxman
  'rl-hum-se-badkar-kaun-1981-1': ['Deva ho deva ganpati deva tumse badhkar kaun', 'Ganpati bappa moriya deva ho deva'],
  'rl-maine-pyar-kiya-1989-1': ['Mere rang mein rangne wali pari ho ya ho pariyon ki rani'],
  'rl-maine-pyar-kiya-1989-3': ['Dil deewana bin sajna ke maane na yeh pagla hai samjhane se samjhe na'],
  'rl-maine-pyar-kiya-1989-4': ['Aate jaate hanste gaate socha tha maine man mein kai baar'],
  'rl-maine-pyar-kiya-1989-5': ['Kabootar ja ja ja kabootar ja pahle pyar ki pahli chitthi'],
  'rl-maine-pyar-kiya-1989-8': ['Aaya mausam dosti ka aaya mausam pyar ka tum ladke ho'],
  'rl-police-public-1990-1': ['Main jis din bhula doon tera pyar dil se woh din aakhiri ho meri zindagi ka'],
  'rl-100-days-1991-1': ['Sun beliya shukriya meharbani', 'Tanha na kat sakegi jawani'],
  'rl-patthar-ke-phool-1991-1': ['Tumse jo dekhte hi pyar hua zindagi mein pehli baar hua'],
  'rl-patthar-ke-phool-1991-2': ['Kabhi tu chhalia lagta hai kabhi deewana lagta hai'],
  'rl-hum-aapke-hain-koun-1994-1': ['Pehla pehla pyar hai pehli pehli baar hai'],
  'rl-hum-aapke-hain-koun-1994-6': ['Didi tera devar deewana hai ram kudiyon ko daale daana'],
  'rl-hum-aapke-hain-koun-1994-8': ['Wah wah ramji jodi kya banayi'],
  'rl-hum-saath-saath-hain-1999-5': ['Abcdefghi jklmn opqrstuvwxyz i love you'],
  'rl-hum-saath-saath-hain-1999-6': ['Mhare hiwra mein nache mor tak thaiya thaiya'],

  // Jaidev
  'jd-hum-dono-1961-1': ['Abhi na jao chhod kar ke dil abhi bhara nahi'],
  'jd-hum-dono-1961-2': ['Main zindagi ka saath nibhata chala gaya har fikr ko dhuen mein udata'],
  'jd-hum-dono-1961-3': ['Allah tero naam ishwar tero naam sabko sanmati de bhagwan'],
  'jd-hum-dono-1961-5': ['Kabhi khud pe kabhi halaat pe rona aaya baat nikli to har ek baat pe'],
  'jd-reshma-aur-shera-1971-1': ['Tu chanda main chandni tu taruvar main shakh re'],
  'jd-prem-parbat-1973-1': ['Yeh dil aur unki nigahon ke saaye mujhe gher lete hain baahon ke saaye'],
  'jd-parinay-1974-1': ['Jaise suraj ki garmi se jalte hue tan ko mil jaye taruvar ki chhaya'],
  'jd-alaap-1977-2': ['Koi gaata main so jaata'],
  'jd-gharaonda-1977-1': ['Ek akela is shaher mein raat mein aur dopahar mein aabodana dhoondhta hai'],
  'jd-gharaonda-1977-2': ['Do deewane shehar mein raat mein ya dopahar mein'],
  'jd-gaman-1978-1': ['Aap ki yaad aati rahi raat bhar chashm-e-nam muskurati rahi raat bhar'],
  'jd-gaman-1978-2': ['Seene mein jalan aankhon mein toofan sa kyun hai'],
  'jd-tumhare-liye-1978-1': ['Tumhen dekhti hoon to lagta hai aise ke jaise yugon se tumhe jaanti hoon'],
  'jd-dooriyaan-1979-1': ['Zindagi zindagi mere ghar aana mere ghar aana'],
  'jd-ankahee-1985-3': ['Kauno thagava nagariya lootal ho chandan kath ke bana khatola'],

  // Aadesh Shrivastava
  'as-aao-pyaar-karen-1994-1': ['Chand se parda kijiye kahin chura na le chehre ka noor'],
  'as-aao-pyaar-karen-1994-2': ['Haathon mein aa gaya jo kal roomal aapka', 'Hathon mein aa gaya jo kal'],
  'as-shastra-1996-1': ['Kya ada kya jalwe tere paro', 'Dil mera le gayi paro'],
  'as-major-saab-1998-1': ['Sona sona itna bhi kaise tu sona', 'Sona sona hai meri sona'],
  'as-kunwara-2000-7': ['Meri chamak chalo maan bhi jaa', 'Simarik kiss kiss Tarkan'],
  'as-tarkieb-2000-1': ['Kiska chehra ab main dekhun tera chehra dekh kar'],
  'as-kabhi-khushi-kabhie-gham-2001-1': ['Say shava shava mahiya say shava shava', 'Dekha tenu pehli pehli baar ve', 'Batiyan bujaye rakhdi Shazia Manzoor'],
  'as-baghban-2003-2': ['Main yahan tu wahan zindagi hai kahan'],
  'as-baghban-2003-3': ['Hori khele raghuveera awadh mein hori khele raghuveera'],
  'as-baghban-2003-5': ['Chali chali phir chali chali chali ishq di hawa chali'],
  'as-chalte-chalte-2003-1': ['Suno na suno na sun lo na humsafar mujhko chun lo na'],
  'as-chalte-chalte-2003-3': ['Layi vi na gayee te nibhai vi na gayee'],
  'as-raajneeti-2010-1': ['Mora piya mose bolat naahin', 'Mora piya mora piya'],
  'as-anari-no-1-1999-1': ['Tujhe dekh ke jaane jaana meri saanson mein tu hai samaaya'],
  'as-mummy-punjabi-2011-2': ['Kudiye pataka mummy ji'],
  'as-stand-by-2011-1': ['Aankhon mein angaara chamke lad bapu'],
  'as-blue-mountains-2017-1': ['Shanno sunidhi chauhan blue mountains'],

  // Usha Khanna
  'uk-dil-deke-dekho-1959-10': ['Dil deke dekho dil deke dekho dil lene walon dil dena seekho', 'Sugartime McGuire Sisters'],
  'uk-hum-hindustani-1960-2': ['Chhodo kal ki baatein kal ki baat purani', 'Naye daur mein likhenge milkar nayi kahani hum hindustani'],
  'uk-ek-sapera-ek-lutera-1965-3': ['Hum tum se juda hoke mar jayenge ro ro ke'],
  'uk-sabak-1973-2': ['Barkha rani zara jamke barso mera dilbar ja na paye', 'Ae abre karam Ahmed Rushdi'],
  'uk-hawas-1974-1': ['Teri galiyon mein na rakhenge qadam aaj ke baad'],
  'uk-saajan-bina-suhagan-1978-2': ['Madhuban khushboo deta hai sagar sawan deta hai'],
  'uk-dada-1979-2': ['Dil ke tukde tukde karke muskurake chal diye'],
  'uk-aap-to-aise-na-the-1980-1': ['Tu is tarah se mere zindagi main shamil hai jahan bhi jaun yeh lagta hai teri mehfil hai'],
  'uk-souten-1983-1': ['Zindagi pyar ka geet hai ise har dil ko gaana padega'],
  'uk-souten-1983-3': ['Shaayad meri shaadi ka khayal dil mein aaya hai isliye mummy ne meri tumhe chai pe bulaya hai'],

  // Uttam Singh
  'us-waaris-1988-1': ['Mere pyar ki umar ho itni sanam tere naam se shuru tere naam pe khatam'],
  'us-dil-to-pagal-hai-1997-1': ['Dil to pagal hai dil deewana hai', 'Pehli pehli baar mohabbat ki hai kuch na samajh mein aaye main kya karoon'],
  'us-dil-to-pagal-hai-1997-2': ['Are re are yeh kya hua maine na yeh jaana'],
  'us-dil-to-pagal-hai-1997-3': ['Bholi si surat aankhon mein masti door khadi sharmaye aaye haaye'],
  'us-dil-to-pagal-hai-1997-4': ['Dholna dholna mere paas to aa dholna'],
  'us-dil-to-pagal-hai-1997-5': ['Le gayi le gayi dil le gayi le gayi', 'Ya Habaybi Ya Ghaybin Farid al Atrash'],
  'us-dushman-1998-3': ['Chithi na koi sandesh jaane woh kaun sa desh jahan tum chale gaye'],
  'us-gadar-ek-prem-katha-2001-1': ['Udja kale kawan tere munh vich khand paawan'],
  'us-gadar-ek-prem-katha-2001-2': ['Main nikla gaddi leke oh raste par oh sadak mein ek mod aaya main uthe dil chhod aaya'],

  // Shankar–Ehsaan–Loy
  'sel-mission-kashmir-2000-1': ['Bumbro bumbro shaam rang bumbro aaye ho kis bagiya se tum'],
  'sel-dil-chahta-hai-2001-1': ['Dil chahta hai kabhi na beetein chamkeele din'],
  'sel-dil-chahta-hai-2001-3': ['Woh ladki hai kahan jise dhoondhta raha hoon main'],
  'sel-kal-ho-naa-ho-2003-1': ['Har ghadi badal rahi hai roop zindagi chhaon hai kabhi kabhi hai dhoop zindagi'],
  'sel-kal-ho-naa-ho-2003-2': ['Maahi ve mohabbataan sachiyaan ne'],
  'sel-kal-ho-naa-ho-2003-6': ['Pretty woman dekho dekho na pretty woman', 'Oh Pretty Woman Roy Orbison'],
  'sel-lakshya-2004-4': ['Haan yehi rasta hai tera tune ab jaana hai'],
  'sel-bunty-aur-babli-2005-6': ['Kajra re kajra re tere kare kare naina', 'Aisi nazar se dekha us zaalim ne chowk par'],
  'sel-kabhi-alvida-naa-kehna-2006-2': ['Mitwa kahe dhadkane tujhse kya'],
  'sel-taare-zameen-par-2007-4': ['Main kabhi batlata nahi par andhere se darta hoon main maa'],
  'sel-rock-on-2008-3': ['Rock on hai yeh waqt ka ishara'],
  'sel-my-name-is-khan-2010-1': ['Sajda tera kar na sakoon to bandagi kya bandagi'],
  'sel-zindagi-na-milegi-dobara-2011-4': ['Senorita badi dilruba', 'Na main samjha na main jaana jo bhi tumne mujhse kaha'],
  'sel-bhaag-milkha-bhaag-2013-2': ['Zinda hai to pyaala poora bhar le', 'Hawaon se jo maanga hissa mera'],
  'sel-2-states-2014-3': ['Ishq ki dhooni roz jalaaye uthta dhuan to kaise chhupaye', 'Man mast magan bas tera naam dohraaye'],
  'sel-raazi-2018-1': ['Ae watan watan mere aabaad rahe tu'],
  'sel-raazi-2018-2': ['Dilbaro dilbaro mudh tulu naav', 'Ungli pakad ke tune chalna sikhaya tha na'],
  'sel-sitaare-zameen-par-2025-2': ['Sar aankhon pe mere hai yeh duniya saari'],

  // Sanjeev–Darshan
  'sd-mann-1999-1': ['Mera mann kyun tumhe chahe mera mann na jaane'],
  'sd-mann-1999-2': ['Chaaha hai tujhko chaahunga har dam mar ke bhi dil se yeh pyaar na hoga kam'],
  'sd-mann-1999-3': ['Nasha yeh pyar ka nasha hai yeh meri baat yaaron maano', 'L Italiano Toto Cutugno'],
  'sd-mann-1999-4': ['Tinak tin tana woh dhun bajna naache man mora', 'Yang Sedang Sedang Saja Iwan'],
  'sd-mann-1999-5': ['Kehna hai tumse kehna aaj dil ki baat kehni hai', 'Liquid Jars of Clay'],
  'sd-mann-1999-7': ['Khushiyan aur gham sehti hai phir bhi chup rehti hai', 'Come Vorrei Ricchi e Poveri'],
  'sd-mann-1999-8': ['Kali nagin ke jaisi zulfen teri kaali kaali', 'Ya Rayah Rachid Taha'],
  'sd-deewane-2000-1': ['Pyar karone wale deewane hote hain', 'Hum to deewane huye yaar'],
  'sd-hamara-dil-aapke-paas-hai-2000-1': ['Hamara dil aapke paas hai humara dil aapke paas hai'],
  'sd-hamara-dil-aapke-paas-hai-2000-4': ['Shukriya shukriya dard jo tumne diya', 'Awedony Amr Diab'],
  'sd-aashiq-2001-1': ['O mere dholna mere saath chalna'],
  'sd-aashiq-2001-8': ['Tum kya jaano mohabbat kya hai', 'Godfather love theme Nino Rota'],
  'sd-style-2001-1': ['Excuse me kya re mera dil tere pe fida re', 'Style mein rehne ka'],
  'sd-style-2001-4': ['Mohabbat ho na jaye deewana kho na jaye', 'Habibi Nour El Ain Amr Diab'],
  'sd-rishtey-2002-5': ['Dilbar dilbar dilbar dilbar kar liya dil ka sauda', 'Al Bal Samira Said'],
  'sd-xcuse-me-2003-1': ['Boom boom tera mera ishq hai boom boom'],
  'sd-nh10-2015-1': ['Chhil gaye naina chhil gaye naina naina kanika kapoor'],
  'sd-ghost-2019-1': ['Dil maang raha hai mohlat tere saath dhadakne ki'],

  // C. Ramchandra
  'cr-shehnai-1947-2': ['Aana meri jaan meri jaan sunday ke sunday', 'Benny Goodman swing'],
  'cr-nadiya-ke-paar-1948-2': ['More raja ho le chal nadiya ke paar'],
  'cr-patanga-1949-1': ['Mere piya gaye rangoon kiya hai wahan se telephone', 'Mere piya gaye rangun'],
  'cr-nirala-1950-1': ['Mehfil mein jal uthi shama parwane ke liye', 'Mahafil men jal uthi shamaa'],
  'cr-samadhi-1950-3': ['Gore gore o banke chore kabhi meri gali aaya karo', 'Chico chico Edmundo Ros'],
  'cr-albela-1951-1': ['Dheere se aaja ri ankhiyan mein nindiya aaja ri aaja'],
  'cr-albela-1951-2': ['Shaam dhale khidki tale tum seeti bajana chhod do'],
  'cr-albela-1951-3': ['Bholi surat dil ke khote naam bade aur darshan chhote'],
  'cr-albela-1951-6': ['Shola jo bhadke dil mera dhadke dard jawani ka sataye badh badh ke'],
  'cr-anarkali-1953-2': ['Yeh zindagi usi ki hai jo kisi ka ho gaya pyar hi mein kho gaya'],
  'cr-anarkali-1953-3': ['Jaag dard e ishq jaag dil ko beqarar kar'],
  'cr-azaad-1955-2': ['Apalam chapalam chap layi re duniya ko chhod teri gali aayi re'],
  'cr-aasha-1957-1': ['Eena meena deeka dai damonika naka naka', 'Ina mina dika'],
  'cr-aasha-1957-2': ['Eena meena deeka dai damonika kishore kumar'],
  'cr-aasha-1957-3': ['Haal tujhe apni duniya ka kaisa lagta hai', 'Andalucia Breeze and I Lecuona'],
  'cr-navrang-1959-1': ['Aadha hai chandrama raat aadhi reh na jaye teri meri baat aadhi'],
  'cr-navrang-1959-2': ['Tu chhupi hai kahan main tadapta yahan'],
  'cr-navrang-1959-3': ['Aaya holi ka tyohar ude rang ki bauchhar', 'Arre ja re hat natkhat na chhoo re mera ghoonghat'],
  'cr-paigham-1959-1': ['Insaan ka insaan se ho bhaichara yahi paigham hamara'],
  'cr-sarhad-1960-1': ['Aaja re aaja lage na mora jiya', 'Volare Domenico Modugno'],
  'cr-bahurani-1963-1': ['Umr hui tumse mile phir bhi jaane kyun aisa lagta hai'],

  // Anil Biswas
  'ab-aurat-1940-1': ['Jamuna tat shyam khelen holi'],
  'ab-roti-1942-1': ['Roti roti roti kyun ratata roti roti'],
  'ab-roti-1942-3': ['Sajana sanjh bhayi aan milo'],
  'ab-kismet-1943-1': ['Ab tere siwa kaun mera krishan kanhaiya'],
  'ab-kismet-1943-2': ['Dhire dhire aa re badal mera bulbul so raha hai'],
  'ab-kismet-1943-3': ['Papiha re mere piya se kahiyo jaay'],
  'ab-kismet-1943-4': ['Aaj himalay ki choti se phir humne lalkara hai door hato ae duniya walon hindustan hamara hai'],
  'ab-pehli-nazar-1945-1': ['Dil jalta hai to jalne de aansoo na baha fariyad na kar'],
  'ab-anokha-pyar-1948-2': ['Yaad rakhna chaand taaro is suhani raat ko'],
  'ab-anokha-pyar-1948-3': ['Jeevan sapna toot gaya mukesh'],
  'ab-arzoo-1950-1': ['Aye dil mujhe aisi jagah le chal jahan koi na ho'],
  'ab-tarana-1951-1': ['Seene mein sulagte hain armaan aankhon mein udaasi chhayi hai'],
  'ab-tarana-1951-2': ['Beiman tore nainwa nindiya na aaye'],
  'ab-tarana-1951-5': ['Nain mile nain huye baaware chein kahan dil ko sajan saware'],
  'ab-waris-1954-1': ['Rahi matwale tu chhed ek baar man ka sitar', 'O Re Grihobasi Khol Dwar Khol Rabindranath Tagore'],
  'ab-jasoos-1957-1': ['Jeevan hai madhuban tu is mein phool khila', 'Que Sera Sera Doris Day'],
  'ab-pardesi-1957-2': ['Rasiya re man basiya re'],
  'ab-pardesi-1957-3': ['Phir milenge jaane wale yaar dusvidaniya'],
  'ab-char-dil-char-raahen-1959-4': ['Saathi re qadam qadam se dil se dil mila rahe hain hum'],
  'ab-angulimaal-1960-1': ['Buddham sharanam gachchhami'],
  'ab-chhoti-chhoti-baatein-1965-1': ['Zindagi ka ajab fasana hai'],
  'ab-chhoti-chhoti-baatein-1965-3': ['Zindagi khvaab hai tha hamen bhi pataa motilal mukesh'],
};

/**
 * Fallback phrase cues matched by normalized song title when IDs differ across albums/reprises.
 */
const TITLE_PHRASE_ALIASES: Record<string, string[]> = {
  'ole ole': ['jab bhi koi ladki dekhu mera dil deewana bole', 'mera dil diwana bole ole'],
  'pehla nasha': ['chahe tum kuch na kaho maine sun liya', 'udta hi phiroon in hawaon mein kahin'],
  'lag ja gale': ['ke phir yeh haseen raat ho na ho', 'shayad phir is janam mein mulakat ho na ho'],
  'tujhe dekha toh': ['tujhe dekha to yeh jaana sanam', 'pyar hota hai deewana sanam'],
  'tip tip barsa paani': ['paani ne aag lagayi', 'aag lagi dil mein to dil ko teri yaad aayi'],
  'tu cheez badi hai mast mast': ['tu cheez badi hai mast', 'nahin tujhko koi hosh'],
  'chura ke dil mera': ['goriya chali chura ke dil mera'],
  'aankh marey': ['ladka aankh maare', 'seeti bajaye'],
  'dheere dheere se meri zindagi mein aana': ['aana meri zindagi mein', 'dheere dheere se dil ko churana'],
  'dilbar dilbar': ['hosh na khabar hai yeh kaisa asar hai', 'tumse milne ke baad dilbar'],
  'pal pal dil ke paas': ['tum rehti ho pal pal dil ke paas'],
  'kabhi kabhie mere dil mein': ['khayal aata hai jaise tujhko banaya gaya hai mere liye'],
  'in aankhon ki masti': ['mastaane hazaron hain', 'in aankhon ki masti ke'],
  'aap jaisa koi meri zindagi mein aaye': ['to baat ban jaye haan haan baat ban jaye'],
  'poster lagwado bazar mein': ['ladki ko ladka pasand aa gaya', 'poster lagwa do bazaar mein'],
  'kudiyan shaher diyan': ['kudiya shehar diya', 'kudiyan shahar diyan'],
  'saat samundar paar': ['main tere peeche peeche aa gayi', 'saat samundar paar divya bharti'],
  'duniya haseenon ka mela': ['mele mein yeh dil akela', 'duniya hasino ka mela'],
  'na kajre ki dhar': ['na motiyon ke haar', 'tum itna jo muskura rahi ho'],
  'jhalak dikhlaja': ['ek baar aaja aaja aaja', 'jhalak dikhla ja'],
  'aashiq banaya aapne': ['sine se lagaya aapne', 'tere bin jeena nahi'],
  'teri meri': ['teri meri meri teri prem kahani hai mushkil'],
  'hookah bar': ['tera pyaar pyaar hookah bar'],
  'main jahaan rahoon': ['main kahin bhi hoon teri yaad saath hai'],
  'aashiq deewana hoon': ['aashiq deewana main tera deewana', 'aashiq deewana hoon afsana pyar ka'],
  'tip tip tip baarish shuru ho gayi': ['tip tip tip tip baarish shuru ho gayi', 'afsana pyar ka barish'],
  'nazrein mili': ['nazren mili dhadkan badhi', 'nazrein mili afsana pyar ka'],
  'yaad teri aati hai': ['yaad teri aati hai mujhe tadpati hai', 'afsana pyar ka alka yagnik'],
  'afsana pyar ka': ['afsana pyar ka asha bhosle udit narayan'],
  'roshni se': ['asoka roshni se bhare bhare'],
  'san sanana': ['ja ja re ja pawan asoka'],
  'chori chori sapno mein': ['chori chori sapnon mein aata hai koi'],
  'kahin door jab din dhal jaye': ['saanjh ki dulhan badan churaye chupke se aaye'],
  'zindagi kaisi hai paheli': ['kabhi to hasaye kabhi yeh rulaye'],
  'itna na mujhse tu pyar badha': ['ke main ek badal awara kaise kisi ka sahara banoo'],
  'o sajna barkha bahar aayi': ['ras ki phuhar layi ankhiyon mein pyar layi'],
  'suhana safar aur yeh mausam': ['hamein dar hai hum kho na jayein kahin'],
  'aaja re pardesi': ['main to kab se khadi is paar yeh ankhiyan thak gayi panth nihaar'],
  'na jane kyon hota hai': ['yeh zindagi ke saath achanak yeh man kisi ke jaane ke baad'],
  'jaaneman jaaneman tere do nayan': ['chori chori leke gaye dekho mera man'],
  'tadap tadap': ['tadap tadap ke is dil se aah nikalti rahi'],
  'dholi taro dhol baaje': ['dholi taro dhol baje ke dham dham baje dhol'],
  'chand chhupa badal mein': ['sharma ke meri jaana chand chhupa badal mein'],
  'bairi piya': ['bairi piya bada bedardi ishq karake sataye'],
  'dola re dola': ['dola re dola re dola man dola tan dola'],
  'maar daala': ['hum pe yeh kisne hara rang daala'],
  'woh kisna hai': ['hai krishna hai woh kisna hai'],
  'koi fariyaad': ['tere dil mein dabi ho jaise', 'ab tere bina yahan meri saansein'],
  'tumhare siva': ['kuchh na chaahat karenge ke jab tak jiyenge mohabbat karenge'],
  'chhoti chhoti raatein': ['chhoti chhoti raatein lambi ho jaati hain'],
  'achchha sila diya': ['yaar ne hi loot liya ghar yaar ka'],
  'o dil tod ke hansti ho mera': ['wafayein meri yaad karogi', 'dil tod ke hansti ho mera'],
  'dekha ek khwab': ['door tak nigahon mein hain gul khile hue'],
  'yeh kahan aa gaye hum': ['yunhi saath saath chalte', 'main aur meri tanhai'],
  'rang barse bheege chunarwali': ['rang barse bheege chunarwali rang barse'],
  'jaadu teri nazar': ['tu haan kar ya na kar tu hai meri kiran'],
  'tu mere samne': ['tujhko dekhoon ke pyar karoon'],
  'mere haathon mein nau nau choodiyan': ['thoda thehro sajan majbooriyan hain'],
  'lagi aaj sawan ki': ['phir woh jhadi hai wohi aag seene mein'],
  'didi tera devar deewana': ['hai ram kudiyon ko daale daana'],
  'kabootar ja ja ja': ['pahle pyar ki pahli chitthi sajan ko de aa'],
  'aate jaate hanste gaate': ['socha tha maine man mein kai baar'],
  'mere rang mein rangne wali': ['pari ho ya ho pariyon ki rani'],
  'main jis din bhula doon tera pyar': ['woh din aakhiri ho meri zindagi ka'],
  'tumse jo dekhte hi pyar hua': ['zindagi mein pehli baar hua'],
  'pehla pehla pyar': ['pehli pehli baar hai jaan ke bhi anjaana'],
  'a b c d e f g h i': ['abcdefghi i love you', 'chhuttiyon ke din hain suhane'],
  'abhi na jao chhod kar': ['ke dil abhi bhara nahi abhi abhi to aayi ho'],
  'main zindagi ka saath nibhata chala gaya': ['har fikr ko dhuen mein udata chala gaya'],
  'allah tero naam ishwar tero naam': ['sabko sanmati de bhagwan', 'allah tero naam'],
  'seene mein jalan': ['aankhon mein toofan sa kyun hai is shahar mein har shakhs'],
  'ek akela is shaher mein': ['aabodana dhoondhta hai aashiyana dhoondhta hai'],
  'do deewane shehar mein': ['aabodana dhoondhte hain aashiyana dhoondhte hain'],
  'kauno thagava nagariya lootal ho': ['chandan kath ke bana khatola'],
  'say shava shava': ['dekha tenu pehli pehli baar ve', 'mahiya say shava shava'],
  'sona sona': ['itna bhi kaise tu sona sonu nigam major saab'],
  'suno na suno na': ['humsafar mujhko chun lo na suno na'],
  'hori khele raghuveera': ['awadh mein hori khele raghuveera'],
  'main yahan tu wahan': ['zindagi hai kahan main yahan tu wahan'],
  'mora piya': ['mora piya mose bolat naahin'],
  'hum hindustani': ['chhodo kal ki baatein kal ki baat purani', 'naye daur mein likhenge milkar nayi kahani'],
  'teri galiyon mein': ['na rakhenge qadam aaj ke baad'],
  'madhuban khushboo deta hai': ['sagar sawan deta hai jeena usika jeena hai'],
  'dil ke tukde tukde karke': ['muskurake chal diye jaate jaate yeh toh bata ja'],
  'tu is tarah se mere zindagi main': ['jahan bhi jaun yeh lagta hai teri mehfil hai'],
  'shayad meri shaadi': ['shaayad meri shaadi ka khayal dil mein aaya hai'],
  'zindagi pyar ka geet hai': ['ise har dil ko gaana padega'],
  'bholi si surat': ['aankhon mein masti door khadi sharmaye'],
  'are re are': ['are re are yeh kya hua maine na yeh jaana'],
  'dil to pagal hai': ['dil deewana hai pehli pehli baar mohabbat ki hai'],
  'chithi na koi sandesh': ['jaane woh kaun sa desh jahan tum chale gaye'],
  'main nikla gaddi leke': ['ek mod aaya main uthe dil chhod aaya'],
  'udja kale kawan': ['tere munh vich khand paawan udd ja kaale kaava'],
  'mere pyar ki umar ho itni sanam': ['tere naam se shuru tere naam pe khatam'],
  'kal ho naa ho': ['har ghadi badal rahi hai roop zindagi', 'chaahe jo tumhe poore dil se milta hai woh mushkil se'],
  'kajra re': ['tere kare kare naina kajra re', 'mere naina mere naina mere naina judwaa naina'],
  'mitwa': ['kahe dhadkane tujhse kya mitwa yeh khudse to na tu chhupa'],
  'maa': ['main kabhi batlata nahi par andhere se darta hoon main maa'],
  'dil chahta hai': ['kabhi na beetein chamkeele din hum na rahein kabhi yaaron ke bin'],
  'mast magan': ['man mast magan bas tera naam dohraaye'],
  'ae watan': ['ae watan watan mere aabaad rahe tu main jahan rahoon jahan mein yaad rahe tu'],
  'dilbaro': ['ungli pakad ke tune chalna sikhaya tha na dehleez oonchi hai yeh paar kara de'],
  'sar aankhon pe mere': ['sar aankhon pe mere hai sitaare zameen par'],
  'mera mann': ['mera mann kyun tumhe chahe mera mann na jaane'],
  'chaaha hai tujhko': ['chaaha hai tujhko chaahunga har dam mar ke bhi dil se yeh pyaar na hoga kam'],
  'tinak tin tana': ['tinak tin tana woh dhun bajna naache man mora'],
  'kali nagin ke jaisi': ['kali nagin ke jaisi zulfen teri kaali kaali'],
  'mohabbat ho na jaye': ['mohabbat ho na jaye deewana kho na jaye', 'nour el ain habibi'],
  'chhil gaye naina': ['chhil gaye naina naina kanika kapoor nh10'],
  'dil maang raha hai': ['dil maang raha hai mohlat tere saath dhadakne ki'],
  'aana meri jaan': ['sunday ke sunday shehnai c ramchandra'],
  'mere piya gaye rangun': ['mere piya gaye rangoon kiya hai wahan se telephone'],
  'gore gore o banke chore': ['kabhi meri gali aaya karo samadhi chico chico'],
  'shola jo bhadke': ['shola jo bhadke dil mera dhadke albela'],
  'bholi surat dil ke khote': ['naam bade aur darshan chhote albela'],
  'eena meena deeka': ['ina mina dika dai damonika aasha kishore kumar asha bhosle'],
  'aadha hai chandrama': ['aadha hai chandrama raat aadhi navrang mahendra kapoor'],
  'arre ja re hat natkhat': ['aaya holi ka tyohar ude rang ki bauchhar navrang'],
  'dil jalta hai to jalne de': ['aansoo na baha fariyad na kar pehli nazar mukesh'],
  'aye dil mujhe aisi jagah le chal': ['jahan koi na ho arzoo talat mahmood'],
  'seene mein sulagte hain armaan': ['aankhon mein udaasi chhayi hai tarana talat lata'],
  'rahi matwale': ['tu chhed ek baar man ka sitar waris suraiya talat'],
  'jeevan hai madhuban': ['tu is mein phool khila jasoos que sera sera'],
  'zindagi khvaab hai': ['thaa hamen bhi pataa chhoti chhoti baatein mukesh'],
};

const HINDI_STOP_WORDS = new Set([
  'ka', 'ki', 'ke', 'ko', 'se', 'me', 'hai', 'hain', 'ho', 'to', 're', 'o', 'ye', 'yeh', 'ek',
]);

export function normalizeText(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[’'`"]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function compactNormalize(str: string): string {
  return normalizeText(str).replace(/\s+/g, '');
}

/**
 * Hinglish / Romanized Urdu phonetic normalizer so spelling variations
 * (ee/i, oo/u, aa/a, w/v, q/k, z/j, ph/f, sh/s, double letters, trailing silent -n)
 * match effortlessly.
 */
export function phoneticNormalizeWord(word: string): string {
  let w = word
    .toLowerCase()
    .replace(/(ee|ea|ie|ei)/g, 'i')
    .replace(/(oo|ou)/g, 'u')
    .replace(/aa+/g, 'a')
    .replace(/w/g, 'v')
    .replace(/q/g, 'k')
    .replace(/z/g, 'j')
    .replace(/ph/g, 'f')
    .replace(/sh/g, 's')
    .replace(/kh/g, 'k')
    .replace(/gh/g, 'g')
    .replace(/bh/g, 'b')
    .replace(/dh/g, 'd')
    .replace(/th/g, 't')
    .replace(/jh/g, 'j')
    .replace(/chh/g, 'ch')
    .replace(/([a-z])\1+/g, '$1');

  // Hindi nasalization: dekhu / dekhun, main / mai, nahin / nahi, aankhon / aankho
  if (w.length >= 3 && /[aeiou]n$/.test(w)) {
    w = w.slice(0, -1);
  }
  return w;
}

export function phoneticNormalize(str: string): string {
  const norm = normalizeText(str);
  if (!norm) return '';
  return norm
    .split(' ')
    .map(phoneticNormalizeWord)
    .filter(Boolean)
    .join(' ');
}

function editDistanceOneOrZero(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1) return false;
  if (a.length < 5 || b.length < 5) return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
    } else {
      edits++;
      if (edits > 1) return false;
      if (a.length > b.length) i++;
      else if (b.length > a.length) j++;
      else {
        i++;
        j++;
      }
    }
  }
  if (i < a.length || j < b.length) edits++;
  return edits <= 1;
}

interface IndexedSongEntry {
  song: SongEntry;
  movie: MovieEntry;
  director: DirectorProfile;
  titleNorm: string;
  titlePhon: string;
  titleCompact: string;
  movieNorm: string;
  moviePhon: string;
  movieCompact: string;
  lyricCues: string[];
  lyricCuesNorm: string[];
  lyricCuesPhon: string[];
  origNorm: string;
  origPhon: string;
  directorNorm: string;
  directorPhon: string;
  allTextNorm: string;
  allTextPhon: string;
  coreTokensNorm: Set<string>;
  coreTokensPhon: Set<string>;
  allTokensNorm: Set<string>;
  allTokensPhon: Set<string>;
}

interface IndexedMovieEntry {
  movie: MovieEntry;
  director: DirectorProfile;
  titleNorm: string;
  titlePhon: string;
  titleCompact: string;
  castNorm: string;
  directorNorm: string;
  allTokensPhon: Set<string>;
  adaptedCount: number;
  originalCount: number;
}

export interface MasterSearchIndex {
  songs: IndexedSongEntry[];
  movies: IndexedMovieEntry[];
}

export function buildMasterSearchIndex(
  allMovies: MovieEntry[],
  directors: DirectorProfile[]
): MasterSearchIndex {
  const dirMap = new Map<DirectorId, DirectorProfile>(directors.map((d) => [d.id, d]));
  const songs: IndexedSongEntry[] = [];
  const movies: IndexedMovieEntry[] = [];

  for (const movie of allMovies) {
    const director = dirMap.get(movie.directorId);
    if (!director) continue;

    const dirAliases = DIRECTOR_ALIASES[director.id] ?? [director.name];
    const dirText = `${director.name} ${director.fullName} ${dirAliases.join(' ')}`;
    const directorNorm = normalizeText(dirText);
    const directorPhon = phoneticNormalize(dirText);

    const movieNorm = normalizeText(`${movie.title} ${movie.year}`);
    const moviePhon = phoneticNormalize(`${movie.title} ${movie.year}`);
    const movieCompact = compactNormalize(movie.title);
    const castNorm = normalizeText(movie.cast ?? '');

    let adaptedCount = 0;
    let originalCount = 0;

    const movieTokenSet = new Set<string>(
      `${moviePhon} ${directorPhon} ${phoneticNormalize(movie.cast ?? '')}`.split(' ').filter(Boolean)
    );

    movies.push({
      movie,
      director,
      titleNorm: normalizeText(movie.title),
      titlePhon: phoneticNormalize(movie.title),
      titleCompact: movieCompact,
      castNorm,
      directorNorm,
      allTokensPhon: movieTokenSet,
      adaptedCount: movie.songs.filter((s) => s.adaptationType !== 'original').length,
      originalCount: movie.songs.filter((s) => s.adaptationType === 'original').length,
    });

    for (const song of movie.songs) {
      if (song.adaptationType === 'original') originalCount++;
      else adaptedCount++;

      const titleNorm = normalizeText(song.title);
      const titlePhon = phoneticNormalize(song.title);
      const titleCompact = compactNormalize(song.title);

      const idCues = SONG_LYRIC_CUES_BY_ID[song.id] ?? [];
      const aliasCues = TITLE_PHRASE_ALIASES[titleNorm] ?? [];
      const lyricCues = Array.from(new Set([...idCues, ...aliasCues]));
      const lyricCuesNorm = lyricCues.map(normalizeText);
      const lyricCuesPhon = lyricCues.map(phoneticNormalize);

      const origText = `${song.originalSongTitle ?? ''} ${song.originalArtist ?? ''} ${song.originalYear ?? ''}`;
      const origNorm = normalizeText(origText);
      const origPhon = phoneticNormalize(origText);

      const extraText = `${song.singers} ${song.lyricist ?? ''} ${song.originCategory} ${song.adaptationNotes ?? ''} ${movie.cast ?? ''}`;
      const allTextNorm = `${titleNorm} ${lyricCuesNorm.join(' ')} ${movieNorm} ${origNorm} ${directorNorm} ${normalizeText(extraText)}`;
      const allTextPhon = `${titlePhon} ${lyricCuesPhon.join(' ')} ${moviePhon} ${origPhon} ${directorPhon} ${phoneticNormalize(extraText)}`;

      const coreNorm = new Set<string>(
        `${titleNorm} ${lyricCuesNorm.join(' ')} ${movieNorm}`.split(' ').filter(Boolean)
      );
      const corePhon = new Set<string>(
        `${titlePhon} ${lyricCuesPhon.join(' ')} ${moviePhon}`.split(' ').filter(Boolean)
      );

      songs.push({
        song,
        movie,
        director,
        titleNorm,
        titlePhon,
        titleCompact,
        movieNorm,
        moviePhon,
        movieCompact,
        lyricCues,
        lyricCuesNorm,
        lyricCuesPhon,
        origNorm,
        origPhon,
        directorNorm,
        directorPhon,
        allTextNorm,
        allTextPhon,
        coreTokensNorm: coreNorm,
        coreTokensPhon: corePhon,
        allTokensNorm: new Set(allTextNorm.split(' ').filter(Boolean)),
        allTokensPhon: new Set(allTextPhon.split(' ').filter(Boolean)),
      });
    }

    // ensure final counts match
    const lastMovie = movies[movies.length - 1];
    lastMovie.adaptedCount = adaptedCount;
    lastMovie.originalCount = originalCount;
  }

  return { songs, movies };
}

function tokenMatchesSet(tokenNorm: string, tokenPhon: string, setNorm: Set<string>, setPhon: Set<string>): boolean {
  if (setNorm.has(tokenNorm) || setPhon.has(tokenPhon)) return true;
  if (tokenPhon.length >= 4) {
    for (const candidate of setPhon) {
      if (candidate.startsWith(tokenPhon) || (candidate.length >= 5 && editDistanceOneOrZero(tokenPhon, candidate))) {
        return true;
      }
    }
  }
  return false;
}

export function searchMasterArchive(
  index: MasterSearchIndex,
  rawQuery: string,
  statusFilter: 'all' | 'adapted' | 'copied' | 'inspired' | 'original' = 'all'
): MasterSearchResults {
  const qNorm = normalizeText(rawQuery);
  const qPhon = phoneticNormalize(rawQuery);
  const qCompact = compactNormalize(rawQuery);

  if (qNorm.length < 2) {
    return { songs: [], movies: [], totalMatchedSongs: 0, totalMatchedMovies: 0 };
  }

  const qTokensNorm = qNorm.split(' ').filter(Boolean);
  const qTokensPhon = qPhon.split(' ').filter(Boolean);
  const qContentPhon = qTokensPhon.filter((t, i) => !HINDI_STOP_WORDS.has(qTokensNorm[i] ?? ''));
  const meaningfulTokensPhon = qContentPhon.length > 0 ? qContentPhon : qTokensPhon;

  const songHits: MasterSongHit[] = [];

  for (const entry of index.songs) {
    if (statusFilter === 'adapted' && entry.song.adaptationType === 'original') continue;
    if (statusFilter === 'copied' && entry.song.adaptationType !== 'copied') continue;
    if (statusFilter === 'inspired' && entry.song.adaptationType !== 'inspired') continue;
    if (statusFilter === 'original' && entry.song.adaptationType !== 'original') continue;

    let score = 0;
    let matchedCue: string | undefined;
    const reasons: string[] = [];

    // 1. Exact / substring matches on Song Title
    if (entry.titleNorm === qNorm || (qCompact.length >= 4 && entry.titleCompact === qCompact)) {
      score += 180;
      reasons.push('Exact song title');
    } else if (entry.titleNorm.includes(qNorm) || (qCompact.length >= 4 && entry.titleCompact.includes(qCompact))) {
      score += 130;
      reasons.push('Song title');
    } else if (qPhon.length >= 3 && entry.titlePhon.includes(qPhon)) {
      score += 115;
      reasons.push('Song title (phonetic)');
    }

    // 2. Lyric Mukhda / Opening Line Matches
    for (let i = 0; i < entry.lyricCues.length; i++) {
      const cueNorm = entry.lyricCuesNorm[i];
      const cuePhon = entry.lyricCuesPhon[i];
      if (cueNorm.includes(qNorm) || (qPhon.length >= 4 && cuePhon.includes(qPhon))) {
        score += 145;
        matchedCue = entry.lyricCues[i];
        reasons.push('Opening line / lyric cue');
        break;
      }
    }

    // 3. Movie Title Matches
    if (entry.movieNorm === qNorm || (qCompact.length >= 4 && entry.movieCompact === qCompact)) {
      score += 120;
      reasons.push('Movie title');
    } else if (entry.movieNorm.includes(qNorm) || (qPhon.length >= 3 && entry.moviePhon.includes(qPhon))) {
      score += 85;
      reasons.push('Movie title');
    }

    // 4. Original Source Song / Artist Match
    if (entry.origNorm && (entry.origNorm.includes(qNorm) || (qPhon.length >= 4 && entry.origPhon.includes(qPhon)))) {
      score += 105;
      reasons.push('Original source');
    }

    // 5. General combined field substring match (singers, director, notes, cast)
    if (score === 0 && (entry.allTextNorm.includes(qNorm) || (qPhon.length >= 4 && entry.allTextPhon.includes(qPhon)))) {
      score += 65;
      reasons.push('Credits / archive notes');
    }

    // 6. Multi-token & partial lyric-keyword coverage (crucial for long lyric queries!)
    if (qTokensPhon.length >= 2) {
      let allMatched = 0;
      let coreMatched = 0;
      let strongCoreMatched = 0;

      for (let i = 0; i < qTokensPhon.length; i++) {
        const tn = qTokensNorm[i] ?? '';
        const tp = qTokensPhon[i];
        if (tokenMatchesSet(tn, tp, entry.allTokensNorm, entry.allTokensPhon)) {
          allMatched++;
        }
        if (tokenMatchesSet(tn, tp, entry.coreTokensNorm, entry.coreTokensPhon)) {
          coreMatched++;
          if (tp.length >= 4 && !HINDI_STOP_WORDS.has(tn)) {
            strongCoreMatched++;
          }
        }
      }

      const fullAllRatio = allMatched / qTokensPhon.length;
      const coreRatio = coreMatched / qTokensPhon.length;

      if (fullAllRatio === 1) {
        score += 75 + Math.round(coreRatio * 40);
        if (!reasons.length) reasons.push('All keywords matched');
      } else if (
        qTokensPhon.length >= 3 &&
        ((coreRatio >= 0.55 && strongCoreMatched >= 2) ||
          (strongCoreMatched >= 3 && meaningfulTokensPhon.length >= 4))
      ) {
        score += Math.round(coreRatio * 80) + strongCoreMatched * 12;
        if (!matchedCue && entry.lyricCues.length > 0) {
          matchedCue = entry.lyricCues[0];
        }
        if (!reasons.length) reasons.push('Lyric / keyword match');
      } else if (score === 0 && qTokensPhon.length === 2 && allMatched === 2) {
        score += 55;
        reasons.push('Keywords matched');
      }
    }

    if (score > 0) {
      // Slight tie-breaker preference for documented adaptations when relevance is equal
      const tieBonus =
        entry.song.adaptationType === 'copied'
          ? 2
          : entry.song.adaptationType === 'inspired'
            ? 1
            : 0;
      songHits.push({
        song: entry.song,
        movie: entry.movie,
        director: entry.director,
        score: score + tieBonus,
        matchedCue,
        matchedReason: reasons[0] ?? 'Archive match',
      });
    }
  }

  songHits.sort(
    (a, b) =>
      b.score - a.score ||
      a.movie.year - b.movie.year ||
      a.song.title.localeCompare(b.song.title)
  );

  // Movie-level hits (shown cleanly when searching movie names / years / casts / directors)
  const movieHits: MasterMovieHit[] = [];
  for (const m of index.movies) {
    let mScore = 0;
    if (m.titleNorm === qNorm || (qCompact.length >= 4 && m.titleCompact === qCompact)) {
      mScore += 200;
    } else if (m.titleNorm.includes(qNorm) || (qPhon.length >= 3 && m.titlePhon.includes(qPhon))) {
      mScore += 130;
    } else if (qTokensPhon.length >= 2) {
      let matched = 0;
      for (const tp of qTokensPhon) {
        if (m.allTokensPhon.has(tp)) matched++;
      }
      if (matched === qTokensPhon.length && m.titlePhon.split(' ').some((w) => qTokensPhon.includes(w))) {
        mScore += 80;
      }
    }
    if (mScore > 0) {
      movieHits.push({
        movie: m.movie,
        director: m.director,
        score: mScore,
        adaptedCount: m.adaptedCount,
        originalCount: m.originalCount,
      });
    }
  }

  movieHits.sort((a, b) => b.score - a.score || a.movie.year - b.movie.year);

  return {
    songs: songHits,
    movies: movieHits,
    totalMatchedSongs: songHits.length,
    totalMatchedMovies: movieHits.length,
  };
}

export function getClassificationLabel(type: AdaptationType): string {
  if (type === 'copied') return 'Close Similarity';
  if (type === 'inspired') return 'Inspired / Adapted';
  return 'Original Composition';
}

export function getOriginLabel(category: OriginCategory): string {
  return category;
}
