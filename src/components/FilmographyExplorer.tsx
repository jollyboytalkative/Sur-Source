import React, { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Search,
  Copy,
  Sparkles,
  Disc,
} from 'lucide-react';
import { DirectorId, MovieEntry } from '../types/archive';

interface FilmographyExplorerProps {
  directorId: DirectorId;
  directorName: string;
  movies: MovieEntry[];
  onFilterTableToMovie: (movieId: string) => void;
}

type DecadeFilter =
  | 'all'
  | '1970s-80s'
  | '1990-1994'
  | '1995-1999'
  | '2000-2009'
  | '1961-1969'
  | '1970-1979'
  | '1980-1989'
  | '1990-1997'
  | '1949-1959'
  | '1960-1969'
  | '1980-1991'
  | '1995-2000'
  | '2001-2009'
  | '2010-2019'
  | '2020-present'
  | '1940-1949'
  | '1950-1959'
  | '1970-2005'
  | '1952-1956'
  | '1957-1961'
  | '1962-1969'
  | '1970-1994'
  | '1984-1989'
  | '1990-1993'
  | '1994-1998'
  | '1999-present'
  | '1963-1969'
  | '1990-2004'
  | '1946-1955'
  | '1956-1964'
  | '1965-1970'
  | '1971-1977'
  | '1955-1961'
  | '1962-1965'
  | '1966-1969'
  | '1970-2003'
  | '1949-1954'
  | '1955-1959'
  | '1960-1964'
  | '1965-1968'
  | '1970-1975'
  | '1976-2004';

export const FilmographyExplorer: React.FC<FilmographyExplorerProps> = ({
  directorId,
  directorName,
  movies,
  onFilterTableToMovie,
}) => {
  const [decade, setDecade] = useState<DecadeFilter>('all');
  const [movieSearch, setMovieSearch] = useState('');
  const [onlyWithAdaptations, setOnlyWithAdaptations] = useState(false);
  const [expandedMovieIds, setExpandedMovieIds] = useState<Set<string>>(
    () =>
      new Set([
        'ns-aashiqui-1990',
        'ns-dhadkan-2000',
        'ns-raja-hindustani-1996',
        'am-baazigar-1993',
        'am-akele-hum-akele-tum-1995',
        'am-main-hoon-na-2004',
        'am-murder-2004',
        'rdb-teesri-manzil-1966',
        'rdb-yaadon-ki-baaraat-1973',
        'rdb-sholay-1975',
        'rdb-satte-pe-satta-1982',
        'rdb-1942-a-love-story-1994',
        'sj-barsaat-1949',
        'sj-awaara-1951',
        'sj-chori-chori-1956',
        'sj-junglee-1961',
        'sj-gumnaam-1965',
        'sj-an-evening-in-paris-1967',
        'sj-mera-naam-joker-1970',
        'arr-rangeela-1995',
        'arr-dil-se-1998',
        'arr-taal-1999',
        'arr-lagaan-2001',
        'arr-rang-de-basanti-2006',
        'arr-rockstar-2011',
        'arr-amar-singh-chamkila-2024',
        'arr-chhaava-2025',
        'naushad-rattan-1944',
        'naushad-anmol-ghadi-1946',
        'naushad-baiju-bawra-1952',
        'naushad-mother-india-1957',
        'naushad-mughal-e-azam-1960',
        'naushad-gunga-jumna-1961',
        'opn-aar-paar-1954',
        'opn-mr-and-mrs-55-1955',
        'opn-cid-1956',
        'opn-naya-daur-1957',
        'opn-howrah-bridge-1958',
        'opn-kashmir-ki-kali-1964',
        'opn-kismat-1968',
        'anm-qayamat-se-qayamat-tak-1988',
        'anm-dil-1990',
        'anm-baaghi-1990',
        'anm-beta-1992',
        'anm-anari-1993',
        'anm-raja-babu-1994',
        'anm-coolie-no-1-1995',
        'anm-hero-no-1-1997',
        'anm-dulhe-raja-1998',
        'lp-dosti-1964',
        'lp-do-raaste-1969',
        'lp-bobby-1973',
        'lp-amar-akbar-anthony-1977',
        'lp-karz-1980',
        'lp-mr-india-1987',
        'lp-hum-1991',
        'lp-khalnayak-1993',
        'sdb-baazi-1951',
        'sdb-pyaasa-1957',
        'sdb-chalti-ka-naam-gaadi-1958',
        'sdb-kaagaz-ke-phool-1959',
        'sdb-bandini-1963',
        'sdb-guide-1965',
        'sdb-jewel-thief-1967',
        'sdb-aradhana-1969',
        'sdb-abhimaan-1973',
        'sdb-chupke-chupke-1975',
        'ravi-vachan-1955',
        'ravi-dilli-ka-thug-1958',
        'ravi-chaudhvin-ka-chand-1960',
        'ravi-gharana-1961',
        'ravi-china-town-1962',
        'ravi-gumrah-1963',
        'ravi-kaajal-1965',
        'ravi-khandan-1965',
        'ravi-waqt-1965',
        'ravi-phool-aur-patthar-1966',
        'ravi-hamraaz-1967',
        'ravi-neel-kamal-1968',
        'ravi-nikaah-1982',
        'roshan-baawre-nain-1950',
        'roshan-barsaat-ki-raat-1960',
        'roshan-aarti-1962',
        'roshan-dil-hi-to-hai-1963',
        'roshan-taj-mahal-1963',
        'roshan-chitralekha-1964',
        'roshan-mamta-1966',
        'roshan-anokhi-raat-1968',
        'mm-aankhen-1950',
        'mm-dekh-kabira-roya-1957',
        'mm-adalat-1958',
        'mm-anpadh-1962',
        'mm-haqeeqat-1964',
        'mm-jahan-ara-1964',
        'mm-woh-kaun-thi-1964',
        'mm-mera-saaya-1966',
        'mm-chirag-1969',
        'mm-dastak-1970',
        'mm-heer-raanjha-1970',
        'mm-hanste-zakhm-1973',
        'mm-mausam-1975',
        'mm-laila-majnu-1976',
        'mm-veer-zaara-2004',
      ])
  );

  const filteredMovies = useMemo(() => {
    const q = movieSearch.trim().toLowerCase();
    return movies
      .filter((m) => {
        if (decade === '1970s-80s' && m.year >= 1990) return false;
        if (decade === '1990-1994' && (m.year < 1990 || m.year > 1994)) return false;
        if (decade === '1995-1999' && (m.year < 1995 || m.year > 1999)) return false;
        if (decade === '2000-2009' && m.year < 2000) return false;
        if (decade === '1961-1969' && m.year > 1969) return false;
        if (decade === '1970-1979' && (m.year < 1970 || m.year > 1979)) return false;
        if (decade === '1980-1989' && (m.year < 1980 || m.year > 1989)) return false;
        if (decade === '1990-1997' && m.year < 1990) return false;
        if (decade === '1949-1959' && m.year > 1959) return false;
        if (decade === '1960-1969' && (m.year < 1960 || m.year > 1969)) return false;
        if (decade === '1980-1991' && m.year < 1980) return false;
        if (decade === '1995-2000' && (m.year < 1995 || m.year > 2000)) return false;
        if (decade === '2001-2009' && (m.year < 2001 || m.year > 2009)) return false;
        if (decade === '2010-2019' && (m.year < 2010 || m.year > 2019)) return false;
        if (decade === '2020-present' && m.year < 2020) return false;
        if (decade === '1940-1949' && (m.year < 1940 || m.year > 1949)) return false;
        if (decade === '1950-1959' && (m.year < 1950 || m.year > 1959)) return false;
        if (decade === '1970-2005' && m.year < 1970) return false;
        if (decade === '1952-1956' && (m.year < 1952 || m.year > 1956)) return false;
        if (decade === '1957-1961' && (m.year < 1957 || m.year > 1961)) return false;
        if (decade === '1962-1969' && (m.year < 1962 || m.year > 1969)) return false;
        if (decade === '1970-1994' && (m.year < 1970 || m.year > 1994)) return false;
        if (decade === '1984-1989' && (m.year < 1984 || m.year > 1989)) return false;
        if (decade === '1990-1993' && (m.year < 1990 || m.year > 1993)) return false;
        if (decade === '1994-1998' && (m.year < 1994 || m.year > 1998)) return false;
        if (decade === '1999-present' && m.year < 1999) return false;
        if (decade === '1963-1969' && (m.year < 1963 || m.year > 1969)) return false;
        if (decade === '1990-2004' && m.year < 1990) return false;
        if (decade === '1946-1955' && (m.year < 1946 || m.year > 1955)) return false;
        if (decade === '1956-1964' && (m.year < 1956 || m.year > 1964)) return false;
        if (decade === '1965-1970' && (m.year < 1965 || m.year > 1970)) return false;
        if (decade === '1971-1977' && m.year < 1971) return false;
        if (decade === '1955-1961' && (m.year < 1955 || m.year > 1961)) return false;
        if (decade === '1962-1965' && (m.year < 1962 || m.year > 1965)) return false;
        if (decade === '1966-1969' && (m.year < 1966 || m.year > 1969)) return false;
        if (decade === '1970-2003' && m.year < 1970) return false;
        if (decade === '1949-1954' && (m.year < 1949 || m.year > 1954)) return false;
        if (decade === '1955-1959' && (m.year < 1955 || m.year > 1959)) return false;
        if (decade === '1960-1964' && (m.year < 1960 || m.year > 1964)) return false;
        if (decade === '1965-1968' && (m.year < 1965 || m.year > 1968)) return false;
        if (decade === '1970-1975' && (m.year < 1970 || m.year > 1975)) return false;
        if (decade === '1976-2004' && m.year < 1976) return false;

        if (onlyWithAdaptations) {
          const hasAdapted = m.songs.some((s) => s.adaptationType !== 'original');
          if (!hasAdapted) return false;
        }

        if (q) {
          const matchMovie =
            m.title.toLowerCase().includes(q) ||
            String(m.year).includes(q) ||
            (m.cast ?? '').toLowerCase().includes(q) ||
            m.songs.some((s) => s.title.toLowerCase().includes(q));
          if (!matchMovie) return false;
        }
        return true;
      })
      .sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  }, [movies, decade, movieSearch, onlyWithAdaptations]);

  const toggleMovie = (id: string) => {
    setExpandedMovieIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section id="filmography" className="py-10 border-b border-[#E4DDD0]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#1C1917] tracking-tight">
              Complete Filmography Index
            </h2>
            <p className="text-sm text-[#57534E] mt-1 max-w-2xl">
              Chronological directory of films scored by {directorName}. Expand any movie
              to inspect its tracklist, reported origins, and direct external links.
            </p>
          </div>
          <span className="font-mono text-xs text-[#6B655D] tabular-nums whitespace-nowrap">
            {filteredMovies.length} movies shown
          </span>
        </div>

        {/* Filmography Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-1 p-1 bg-[#F2EDE4] rounded-md overflow-x-auto">
            {(directorId === 'rd-burman'
              ? ([
                  { id: 'all', label: 'All Eras (1961–1997)' },
                  { id: '1961-1969', label: '1961–1969' },
                  { id: '1970-1979', label: '1970–1979' },
                  { id: '1980-1989', label: '1980–1989' },
                  { id: '1990-1997', label: '1990–1997' },
                ] as const)
              : directorId === 'shankar-jaikishan'
                ? ([
                    { id: 'all', label: 'All Eras (1949–1991)' },
                    { id: '1949-1959', label: '1949–1959' },
                    { id: '1960-1969', label: '1960–1969' },
                    { id: '1970-1979', label: '1970–1979' },
                    { id: '1980-1991', label: '1980–1991' },
                  ] as const)
                : directorId === 'ar-rahman'
                  ? ([
                      { id: 'all', label: 'All Eras (1995–Present)' },
                      { id: '1995-2000', label: '1995–2000' },
                      { id: '2001-2009', label: '2001–2009' },
                      { id: '2010-2019', label: '2010–2019' },
                      { id: '2020-present', label: '2020–Present' },
                    ] as const)
                  : directorId === 'naushad'
                    ? ([
                        { id: 'all', label: 'All Eras (1940–2005)' },
                        { id: '1940-1949', label: '1940–1949' },
                        { id: '1950-1959', label: '1950–1959' },
                        { id: '1960-1969', label: '1960–1969' },
                        { id: '1970-2005', label: '1970–2005' },
                      ] as const)
                      : directorId === 'op-nayyar'
                        ? ([
                            { id: 'all', label: 'All Eras (1952–1994)' },
                            { id: '1952-1956', label: '1952–1956' },
                            { id: '1957-1961', label: '1957–1961' },
                            { id: '1962-1969', label: '1962–1969' },
                            { id: '1970-1994', label: '1970–1994' },
                          ] as const)
                        : directorId === 'anand-milind'
                          ? ([
                              { id: 'all', label: 'All Eras (1984–Present)' },
                              { id: '1984-1989', label: '1984–1989' },
                              { id: '1990-1993', label: '1990–1993' },
                              { id: '1994-1998', label: '1994–1998' },
                              { id: '1999-present', label: '1999–Present' },
                            ] as const)
                          : directorId === 'laxmikant-pyarelal'
                            ? ([
                                { id: 'all', label: 'All Eras (1963–2026)' },
                                { id: '1963-1969', label: '1963–1969' },
                                { id: '1970-1979', label: '1970–1979' },
                                { id: '1980-1989', label: '1980–1989' },
                                { id: '1990-2004', label: '1990–2026' },
                              ] as const)
                            : directorId === 'sd-burman'
                              ? ([
                                  { id: 'all', label: 'All Eras (1946–1977)' },
                                  { id: '1946-1955', label: '1946–1955' },
                                  { id: '1956-1964', label: '1956–1964' },
                                  { id: '1965-1970', label: '1965–1970' },
                                  { id: '1971-1977', label: '1971–1977' },
                                ] as const)
                              : directorId === 'ravi'
                                ? ([
                                    { id: 'all', label: 'All Eras (1955–2003)' },
                                    { id: '1955-1961', label: '1955–1961' },
                                    { id: '1962-1965', label: '1962–1965' },
                                    { id: '1966-1969', label: '1966–1969' },
                                    { id: '1970-2003', label: '1970–2003' },
                                  ] as const)
                                : directorId === 'roshan'
                                  ? ([
                                      { id: 'all', label: 'All Eras (1949–1968)' },
                                      { id: '1949-1954', label: '1949–1954' },
                                      { id: '1955-1959', label: '1955–1959' },
                                      { id: '1960-1964', label: '1960–1964' },
                                      { id: '1965-1968', label: '1965–1968' },
                                    ] as const)
                                  : directorId === 'madan-mohan'
                                    ? ([
                                        { id: 'all', label: 'All Eras (1950–2004)' },
                                        { id: '1950-1959', label: '1950–1959' },
                                        { id: '1960-1969', label: '1960–1969' },
                                        { id: '1970-1975', label: '1970–1975' },
                                        { id: '1976-2004', label: '1976–2004' },
                                      ] as const)
                                    : ([
                            {
                              id: 'all',
                              label:
                                directorId === 'anu-malik'
                                  ? 'All Eras (1977–Present)'
                                  : 'All Eras (1977–2009)',
                            },
                            { id: '1970s-80s', label: '1977–1989' },
                            { id: '1990-1994', label: '1990–1994' },
                            { id: '1995-1999', label: '1995–1999' },
                            {
                              id: '2000-2009',
                              label: directorId === 'anu-malik' ? '2000–Present' : '2000–2009',
                            },
                          ] as const)
            ).map((d) => (
              <button
                key={d.id}
                type="button"
                onClick={() => setDecade(d.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  decade === d.id
                    ? 'bg-[#FFFFFF] text-[#1C1917] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search
                className="w-3.5 h-3.5 text-[#78716C] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={movieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
                placeholder="Filter movie or cast..."
                aria-label="Filter movies"
                className="pl-8 pr-3 py-1.5 text-xs bg-[#FFFFFF] border border-[#D6CEBE] rounded-md text-[#1C1917] placeholder:text-[#78716C] focus:outline-none focus:border-[#9A3412] w-56"
              />
            </div>

            <label className="inline-flex items-center gap-2 text-xs text-[#44403C] cursor-pointer select-none whitespace-nowrap">
              <input
                type="checkbox"
                checked={onlyWithAdaptations}
                onChange={(e) => setOnlyWithAdaptations(e.target.checked)}
                className="accent-[#9A3412] w-3.5 h-3.5 rounded"
              />
              <span>Only films with close similarity / inspired tracks</span>
            </label>
          </div>
        </div>

        {/* Chronological Accordion List */}
        <div className="bg-[#FFFFFF] border border-[#E4DDD0] rounded-lg divide-y divide-[#E4DDD0]">
          {filteredMovies.map((movie) => {
            const isExpanded = expandedMovieIds.has(movie.id);
            const copiedCount = movie.songs.filter(
              (s) => s.adaptationType === 'copied'
            ).length;
            const inspiredCount = movie.songs.filter(
              (s) => s.adaptationType === 'inspired'
            ).length;

            return (
              <div key={movie.id}>
                <button
                  type="button"
                  onClick={() => toggleMovie(movie.id)}
                  aria-expanded={isExpanded}
                  className="w-full px-4 py-3.5 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 text-left hover:bg-[#FBF9F5] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {isExpanded ? (
                      <ChevronDown
                        className="w-4 h-4 text-[#9A3412] shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronRight
                        className="w-4 h-4 text-[#78716C] shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span className="font-mono text-xs text-[#6B655D] tabular-nums w-10 shrink-0">
                      {movie.year}
                    </span>
                    <div className="min-w-0">
                      <span className="font-semibold text-sm text-[#1C1917] block truncate">
                        {movie.title}
                      </span>
                      {movie.cast && (
                        <span className="text-xs text-[#78716C] block truncate">
                          {movie.cast}
                          {movie.label ? ` · ${movie.label}` : ''}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs shrink-0 pl-7 md:pl-0">
                    <span className="font-mono text-[#57534E] tabular-nums whitespace-nowrap">
                      {movie.songs.length} {movie.songs.length === 1 ? 'track' : 'tracks'}
                    </span>
                    {copiedCount > 0 && (
                      <>
                        <span aria-hidden="true" className="text-[#D6CEBE]">
                          ·
                        </span>
                        <span className="font-semibold text-[#9A3412] whitespace-nowrap tabular-nums">
                          {copiedCount} Close {copiedCount === 1 ? 'Similarity' : 'Similarities'}
                        </span>
                      </>
                    )}
                    {inspiredCount > 0 && (
                      <>
                        <span aria-hidden="true" className="text-[#D6CEBE]">
                          ·
                        </span>
                        <span className="font-semibold text-[#1E3A8A] whitespace-nowrap tabular-nums">
                          {inspiredCount} Inspired
                        </span>
                      </>
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="bg-[#FBF9F5] px-4 pb-4 pt-2 border-t border-[#EFEAE0]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pl-7">
                      <p className="text-xs text-[#57534E]">
                        {movie.significance ??
                          `Soundtrack cataloged under ${directorName} (${movie.year}).`}
                      </p>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => onFilterTableToMovie(movie.id)}
                          className="text-xs font-medium text-[#9A3412] hover:underline cursor-pointer whitespace-nowrap"
                        >
                          View in Main Table ↑
                        </button>
                      </div>
                    </div>

                    <div className="overflow-x-auto bg-[#FFFFFF] border border-[#E4DDD0] rounded-md ml-0 md:ml-7">
                      <table className="w-full text-left border-collapse min-w-[740px] text-xs">
                        <thead>
                          <tr className="border-b border-[#E4DDD0] bg-[#F2EDE4]/60 text-[11px] uppercase tracking-wider text-[#6B655D]">
                            <th className="py-2 px-3">Song Title</th>
                            <th className="py-2 px-3">Status</th>
                            <th className="py-2 px-3">Reported Close Similarity / Inspired Origin</th>
                            <th className="py-2 px-3 text-right">Links</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EFEAE0]">
                          {movie.songs.map((song) => (
                            <tr key={song.id} className="hover:bg-[#FBF9F5]">
                              <td className="py-2.5 px-3">
                                <div className="font-medium text-[#1C1917]">
                                  {song.title}
                                </div>
                                <div className="text-[11px] text-[#6B655D]">
                                  {song.singers}
                                </div>
                              </td>
                              <td className="py-2.5 px-3 whitespace-nowrap">
                                {song.adaptationType === 'copied' && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[#9A3412]">
                                    <Copy className="w-3 h-3" aria-hidden="true" />
                                    Close Similarity
                                  </span>
                                )}
                                {song.adaptationType === 'inspired' && (
                                  <span className="inline-flex items-center gap-1 font-semibold text-[#1E3A8A]">
                                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                                    Inspired
                                  </span>
                                )}
                                {song.adaptationType === 'original' && (
                                  <span className="inline-flex items-center gap-1 font-medium text-[#14532D]">
                                    <Disc className="w-3 h-3" aria-hidden="true" />
                                    Original
                                  </span>
                                )}
                              </td>
                              <td className="py-2.5 px-3">
                                {song.adaptationType === 'original' ? (
                                  <span className="text-[#78716C]">
                                    Original Composition
                                  </span>
                                ) : (
                                  <div>
                                    <span className="font-medium text-[#1C1917]">
                                      {song.originalSongTitle}
                                    </span>
                                    <span className="text-[#6B655D] block">
                                      {song.originalArtist}
                                    </span>
                                  </div>
                                )}
                              </td>
                              <td className="py-2.5 px-3 text-right whitespace-nowrap">
                                <div className="inline-flex items-center gap-2">
                                  <a
                                    href={song.bollywoodLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-[#1C1917] hover:text-[#9A3412] underline underline-offset-2"
                                  >
                                    <span>Movie</span>
                                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                  </a>
                                  {song.originalLink && (
                                    <a
                                      href={song.originalLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      title={
                                        song.originalSongTitle
                                          ? `Open closest original source: ${song.originalSongTitle}`
                                          : 'Open closest original source video'
                                      }
                                      className="inline-flex items-center gap-1 font-medium text-[#9A3412] hover:underline underline-offset-2"
                                    >
                                      <span>Original</span>
                                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
