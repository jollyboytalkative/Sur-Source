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
