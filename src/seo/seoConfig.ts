import {
  ALL_DIRECTOR_MOVIES,
  DIRECTOR_BASE_STATS,
  TOTAL_CATALOG_STATS,
} from '../data/catalog.ts';
import { DIRECTORS } from '../data/directors.ts';
import type { DirectorId, DirectorProfile, MovieEntry } from '../types/archive.ts';

export type PublicSeoRoute = '/' | '/director' | '/disclaimer' | '/contact';

export interface ResolvedSeoRoute {
  route: PublicSeoRoute;
  directorId: DirectorId | null;
  canonicalPath: string;
}

export interface RouteSeoMeta {
  path: PublicSeoRoute;
  canonicalPath: string;
  title: string;
  description: string;
  keywords: string;
  robots: string;
  ogType: 'website' | 'profile';
}

export const SITE_NAME = 'Sur & Source';
export const DEFAULT_APP_ORIGIN =
  'https://ais-pre-ctlhphzqer6embfkrimqiu-386234381851.asia-southeast1.run.app';

export const SEO_KEYWORDS =
  'Indian music directors, Bollywood music directors, Hindi cinema composers, Bollywood music origins, Bollywood filmography archive, Indian film music history, Hindi film songs adapted, Bollywood song inspirations, Nadeem-Shravan, Anu Malik, Bappi Lahiri, Dilip Sen-Sameer Sen, Himesh Reshammiya, Ismail Darbar, Jatin-Lalit, Kalyanji-Anandji, Khayyam, Nikhil-Vinay, R.D. Burman, Shankar-Jaikishan, Shiv-Hari, A. R. Rahman, Naushad, O.P. Nayyar, Anand-Milind, Laxmikant-Pyarelal, S. D. Burman, Salil Chowdhury, Ravi, Roshan, Madan Mohan, Viju Shah, Sur & Source';

export const OG_IMAGE_PATH = '/og-image.jpg';
export const OG_IMAGE_ALT =
  'Sur & Source — Indian & Bollywood Music Directors Archive logo featuring vinyl records, musical notes, filmstrip, and magnifying glass';

const DUO_DIRECTOR_IDS = new Set<DirectorId>([
  'nadeem-shravan',
  'shankar-jaikishan',
  'anand-milind',
  'laxmikant-pyarelal',
  'jatin-lalit',
  'kalyanji-anandji',
  'dilip-sen-sameer-sen',
  'nikhil-vinay',
  'shiv-hari',
]);

export const ARCHIVE_FAQS = [
  {
    question:
      'Which Indian and Bollywood music directors are indexed in Sur & Source?',
    answer: `Sur & Source indexes ${DIRECTORS.length} iconic Indian & Bollywood music directors across ${TOTAL_CATALOG_STATS.totalMovies.toLocaleString('en-US')} Hindi films and ${TOTAL_CATALOG_STATS.totalSongs.toLocaleString('en-US')} songs (maintaining strictly Bollywood/Hindi filmography records only, excluding regional Tamil, Telugu, Malayalam, and Bengali scores): A. R. Rahman, Anand–Milind, Anu Malik, Bappi Lahiri, Dilip Sen–Sameer Sen, Himesh Reshammiya, Ismail Darbar, Jatin–Lalit, Kalyanji–Anandji, Khayyam, Laxmikant–Pyarelal, Madan Mohan, Nadeem–Shravan, Naushad, Nikhil–Vinay, O.P. Nayyar, R.D. Burman, Ravi, Roshan, S. D. Burman, Salil Chowdhury, Shankar–Jaikishan, Shiv–Hari, and Viju Shah.`,
  },
  {
    question:
      'How are Bollywood film songs classified for musical origins and similarities?',
    answer:
      'Every indexed Hindi soundtrack track is categorized into three tiers: Close Similarity (closely matching a pre-existing recording), Inspired / Adapted (documented folk, classical, ghazal, or structural motifs), and Original Composition (studio originals preserved alongside adapted tracks).',
  },
  {
    question:
      'Does the archive include complete chronological filmographies or only adapted songs?',
    answer:
      'Each music director dossier preserves a complete chronological filmography with verified release years, singers, lyricists, external listening links, and catalog filters so researchers can study both studio originals and documented influences in full context.',
  },
  {
    question:
      'How can researchers verify credits or submit musicology corrections?',
    answer:
      'Researchers and listeners can use the side-by-side external listening links on every row and submit missing films, lyricist credits, or provenance corrections via the Contact / Corrections page.',
  },
] as const;

const DIRECTOR_MAP = new Map<DirectorId, DirectorProfile>(
  DIRECTORS.map((d) => [d.id, d])
);

const SORTED_DIRECTORS: DirectorProfile[] = [...DIRECTORS].sort((a, b) =>
  a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
);

function formatDirectorTitle(director: DirectorProfile): string {
  const full = `${director.name} Filmography & Song Origins | ${SITE_NAME}`;
  if (full.length <= 60) return full;
  const medium = `${director.name} Filmography & Songs | ${SITE_NAME}`;
  if (medium.length <= 60) return medium;
  return `${director.name} Songs & Origins | ${SITE_NAME}`;
}

function clampMetaDescription(text: string): string {
  if (text.length <= 160) return text;
  return `${text.slice(0, 157).trimEnd()}...`;
}

export function resolveSeoRoute(pathname: string): ResolvedSeoRoute {
  const cleanPath = (pathname.split('?')[0] ?? '/').replace(/\/+$/, '') || '/';
  if (cleanPath === '/disclaimer') {
    return { route: '/disclaimer', directorId: null, canonicalPath: '/disclaimer' };
  }
  if (cleanPath === '/contact') {
    return { route: '/contact', directorId: null, canonicalPath: '/contact' };
  }
  if (cleanPath.startsWith('/director/')) {
    const slug = cleanPath.slice('/director/'.length) as DirectorId;
    if (DIRECTOR_MAP.has(slug)) {
      return {
        route: '/director',
        directorId: slug,
        canonicalPath: `/director/${slug}`,
      };
    }
  }
  return { route: '/', directorId: null, canonicalPath: '/' };
}

export function normalizeSeoRoute(pathname: string): PublicSeoRoute {
  return resolveSeoRoute(pathname).route;
}

export function getDirectorSeoMeta(directorId: DirectorId): RouteSeoMeta {
  const director = DIRECTOR_MAP.get(directorId) ?? DIRECTORS[0];
  const stats = DIRECTOR_BASE_STATS[director.id];
  const movies = ALL_DIRECTOR_MOVIES.filter((m) => m.directorId === director.id);
  const sampleFilms = movies
    .filter((m) => m.significance || m.songs.some((s) => s.adaptationType !== 'original'))
    .slice(0, 6)
    .map((m) => `${m.title} (${m.year})`);

  const description = clampMetaDescription(
    `Explore ${director.name} (${director.era}) Indian & Bollywood filmography: ${stats.totalMovies} films, ${stats.totalSongs} songs, documented musical origins & listening links.`
  );

  const keywords = [
    `${director.name} filmography`,
    `${director.name} Bollywood songs`,
    `${director.name} music director`,
    `${director.name} song origins`,
    director.fullName,
    'Indian music directors',
    'Bollywood music directors',
    ...sampleFilms,
    SITE_NAME,
  ].join(', ');

  return {
    path: '/director',
    canonicalPath: `/director/${director.id}`,
    title: formatDirectorTitle(director),
    description,
    keywords,
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'profile',
  };
}

export const ROUTE_SEO_META: Record<Exclude<PublicSeoRoute, '/director'>, RouteSeoMeta> = {
  '/': {
    path: '/',
    canonicalPath: '/',
    title: 'Sur & Source — Indian & Bollywood Music Directors Archive',
    description: clampMetaDescription(
      `Research Indian & Bollywood music directors’ complete filmographies (${TOTAL_CATALOG_STATS.totalMovies} films, ${TOTAL_CATALOG_STATS.totalSongs} songs), song origins & listening links across ${DIRECTORS.length} composers.`
    ),
    keywords: SEO_KEYWORDS,
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'website',
  },
  '/disclaimer': {
    path: '/disclaimer',
    canonicalPath: '/disclaimer',
    title: 'Editorial Disclaimer & Methodology | Sur & Source',
    description:
      'Editorial methodology, fair-study principles, and provenance guidelines behind the Sur & Source Indian & Bollywood Music Directors archive.',
    keywords: `${SEO_KEYWORDS}, Bollywood music research methodology, fair study disclaimer`,
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'website',
  },
  '/contact': {
    path: '/contact',
    canonicalPath: '/contact',
    title: 'Contact & Archive Corrections | Sur & Source',
    description:
      'Submit song provenance corrections, missing Indian & Bollywood filmography credits, or feedback to improve the Sur & Source research archive.',
    keywords: `${SEO_KEYWORDS}, submit Bollywood filmography correction`,
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogType: 'website',
  },
};

export function getSeoMetaForPath(pathname: string): RouteSeoMeta {
  const resolved = resolveSeoRoute(pathname);
  if (resolved.route === '/director' && resolved.directorId) {
    return getDirectorSeoMeta(resolved.directorId);
  }
  return ROUTE_SEO_META[
    resolved.route === '/director' ? '/' : resolved.route
  ];
}

export function getSitemapEntries(): Array<{
  path: string;
  changefreq: string;
  priority: string;
}> {
  return [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    ...SORTED_DIRECTORS.map((d) => ({
      path: `/director/${d.id}`,
      changefreq: 'weekly',
      priority: '0.9',
    })),
    { path: '/disclaimer', changefreq: 'monthly', priority: '0.6' },
    { path: '/contact', changefreq: 'monthly', priority: '0.6' },
  ];
}

function getComposerSchemaType(id: DirectorId): 'MusicGroup' | 'Person' {
  return DUO_DIRECTOR_IDS.has(id) ? 'MusicGroup' : 'Person';
}

export function buildStructuredDataJsonLd(
  origin: string,
  pathname = '/'
): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  const ogImageUrl = `${cleanOrigin}${OG_IMAGE_PATH}`;
  const logoUrl = `${cleanOrigin}/favicon-512x512.png`;
  const resolved = resolveSeoRoute(pathname);
  const meta = getSeoMetaForPath(pathname);

  const publisher = {
    '@type': 'Organization',
    name: 'jmmweb-india.com',
    url: 'https://jmmweb-india.com',
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 512,
      height: 512,
    },
  };

  const websiteNode = {
    '@type': 'WebSite',
    '@id': `${cleanOrigin}/#website`,
    name: SITE_NAME,
    alternateName: 'Bollywood Music Origins',
    url: `${cleanOrigin}/`,
    description: ROUTE_SEO_META['/'].description,
    inLanguage: 'en',
    publisher,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${cleanOrigin}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const datasetNode = {
    '@type': 'Dataset',
    '@id': `${cleanOrigin}/#dataset`,
    name: 'Indian & Bollywood Music Directors Filmography & Song Origins Dataset',
    description: `Structured chronological research dataset covering ${DIRECTORS.length} Indian and Bollywood music directors, ${TOTAL_CATALOG_STATS.totalMovies} Hindi feature soundtracks, and ${TOTAL_CATALOG_STATS.totalSongs} indexed film songs with documented origins and external listening links.`,
    url: `${cleanOrigin}/`,
    keywords: [
      'Indian music directors',
      'Bollywood music directors',
      'Hindi filmography',
      'Bollywood song origins',
      'Indian cinema music history',
    ],
    temporalCoverage: '1940/2026',
    spatialCoverage: {
      '@type': 'Place',
      name: 'India',
    },
    creator: publisher,
    isAccessibleForFree: true,
    license: `${cleanOrigin}/disclaimer`,
  };

  const graph: Array<Record<string, unknown>> = [websiteNode, datasetNode];

  if (resolved.route === '/director' && resolved.directorId) {
    const director = DIRECTOR_MAP.get(resolved.directorId)!;
    const stats = DIRECTOR_BASE_STATS[director.id];
    const directorUrl = `${cleanOrigin}/director/${director.id}`;
    const movies = ALL_DIRECTOR_MOVIES.filter((m) => m.directorId === director.id);

    const featuredMovies = [...movies]
      .sort((a, b) => {
        const aAdapted = a.songs.filter((s) => s.adaptationType !== 'original').length;
        const bAdapted = b.songs.filter((s) => s.adaptationType !== 'original').length;
        return bAdapted - aAdapted || a.year - b.year;
      })
      .slice(0, 20);

    const composerEntity: Record<string, unknown> = {
      '@type': getComposerSchemaType(director.id),
      '@id': `${directorUrl}#composer`,
      name: director.name,
      alternateName: director.fullName,
      url: directorUrl,
      description: `${director.summary} (${stats.totalMovies} cataloged films, ${stats.totalSongs} indexed songs).`,
      knowsAbout: [
        'Indian film music',
        'Bollywood soundtracks',
        'Hindustani cinema scores',
        director.signatureSound,
      ],
    };

    if (getComposerSchemaType(director.id) === 'Person') {
      composerEntity.jobTitle = 'Indian & Bollywood Music Director & Film Composer';
    }

    graph.push(
      {
        '@type': 'ProfilePage',
        '@id': `${directorUrl}#profile`,
        url: directorUrl,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${cleanOrigin}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
        mainEntity: composerEntity,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Sur & Source',
            item: `${cleanOrigin}/`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Indian & Bollywood Music Directors',
            item: `${cleanOrigin}/#director-tabs`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: director.name,
            item: directorUrl,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: `${director.name} Notable Bollywood Films`,
        numberOfItems: featuredMovies.length,
        itemListElement: featuredMovies.map((movie: MovieEntry, idx: number) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Movie',
            name: movie.title,
            dateCreated: String(movie.year),
            musicBy: { '@id': `${directorUrl}#composer` },
            url: `${directorUrl}?q=${encodeURIComponent(movie.title)}`,
          },
        })),
      }
    );
  } else {
    graph.push(
      {
        '@type': 'WebApplication',
        '@id': `${cleanOrigin}/#webapp`,
        name: meta.title,
        url: `${cleanOrigin}${resolved.canonicalPath}`,
        applicationCategory: 'ReferenceApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        description: meta.description,
        image: ogImageUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
      {
        '@type': 'CollectionPage',
        '@id': `${cleanOrigin}/#archive`,
        name: 'Indian & Bollywood Music Directors Filmography & Song Origins Catalog',
        url: `${cleanOrigin}/`,
        isPartOf: { '@id': `${cleanOrigin}/#website` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: ogImageUrl,
          width: 1200,
          height: 630,
        },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Indexed Indian & Bollywood Music Directors',
          numberOfItems: SORTED_DIRECTORS.length,
          itemListElement: SORTED_DIRECTORS.map((composer, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': getComposerSchemaType(composer.id),
              name: composer.name,
              alternateName: composer.fullName,
              url: `${cleanOrigin}/director/${composer.id}`,
              description: `${composer.name} (${composer.era}) — ${DIRECTOR_BASE_STATS[composer.id].totalMovies} films, ${DIRECTOR_BASE_STATS[composer.id].totalSongs} songs. ${composer.summary}`,
            },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${cleanOrigin}/#faq`,
        mainEntity: ARCHIVE_FAQS.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    );
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }).replace(/</g, '\\u003c');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function buildSsrRootHtml(pathname: string): string {
  const resolved = resolveSeoRoute(pathname);

  const directoryNav = `<nav aria-label="Indian and Bollywood Music Directors Directory">
    <ul>
      ${SORTED_DIRECTORS.map((d) => {
        const st = DIRECTOR_BASE_STATS[d.id];
        return `<li><a href="/director/${escapeHtml(d.id)}">${escapeHtml(d.name)} (${escapeHtml(d.era)})</a> — ${st.totalMovies} films, ${st.totalSongs} songs</li>`;
      }).join('\n      ')}
    </ul>
  </nav>`;

  if (resolved.route === '/disclaimer') {
    return `<main class="max-w-[1280px] mx-auto px-6 py-12">
  <header><a href="/">Sur &amp; Source — Indian &amp; Bollywood Music Directors Archive</a></header>
  <h1>Editorial Disclaimer &amp; Research Methodology</h1>
  <p>Sur &amp; Source is an independent educational research archive documenting Indian and Bollywood music directors, their complete Hindi filmographies, and comparative musical origins strictly for discovery and appreciation.</p>
  <section>
    <h2>Indexed Music Directors</h2>
    ${directoryNav}
  </section>
  <footer><a href="/">Back to Archive</a> · <a href="/contact">Contact / Corrections</a></footer>
</main>`;
  }

  if (resolved.route === '/contact') {
    return `<main class="max-w-[1280px] mx-auto px-6 py-12">
  <header><a href="/">Sur &amp; Source — Indian &amp; Bollywood Music Directors Archive</a></header>
  <h1>Contact &amp; Archive Corrections</h1>
  <p>Submit missing Hindi filmography credits, lyricist details, or musical origin updates for any of the ${DIRECTORS.length} indexed Indian &amp; Bollywood music directors.</p>
  <section>
    <h2>Indexed Music Directors</h2>
    ${directoryNav}
  </section>
  <footer><a href="/">Back to Archive</a> · <a href="/disclaimer">Disclaimer</a></footer>
</main>`;
  }

  if (resolved.route === '/director' && resolved.directorId) {
    const director = DIRECTOR_MAP.get(resolved.directorId)!;
    const stats = DIRECTOR_BASE_STATS[director.id];
    const movies = ALL_DIRECTOR_MOVIES.filter((m) => m.directorId === director.id).sort(
      (a, b) => a.year - b.year
    );
    const documentedOrigins = movies.flatMap((m) =>
      m.songs
        .filter((s) => s.adaptationType !== 'original' && s.originalSongTitle)
        .map((s) => ({ movie: m, song: s }))
    );

    return `<main class="max-w-[1280px] mx-auto px-6 py-10">
  <header>
    <p><a href="/">Sur &amp; Source</a> &rsaquo; <a href="/#director-tabs">Indian &amp; Bollywood Music Directors</a> &rsaquo; ${escapeHtml(director.name)}</p>
  </header>
  <article>
    <h1>${escapeHtml(director.name)} (${escapeHtml(director.era)}): Filmography &amp; Song Origins</h1>
    <p><strong>${escapeHtml(director.fullName)}</strong> · ${stats.totalMovies} Cataloged Films · ${stats.totalSongs} Indexed Songs · ${stats.copiedOrInspiredCount} Documented Close Similarities / Inspirations · ${stats.originalCount} Original Tracks</p>
    <p>${escapeHtml(director.editorialEssay)}</p>
    <p><strong>Signature Sound:</strong> ${escapeHtml(director.signatureSound)}</p>
    ${
      documentedOrigins.length > 0
        ? `<section>
      <h2>Notable Documented Song Origins (${documentedOrigins.length})</h2>
      <ul>
        ${documentedOrigins
          .slice(0, 30)
          .map(
            ({ movie, song }) =>
              `<li><strong>${escapeHtml(song.title)}</strong> (${escapeHtml(movie.title)}, ${movie.year}) — ${song.adaptationType === 'copied' ? 'Close Similarity' : 'Inspired'}: ${escapeHtml(song.originalSongTitle ?? '')}${song.originalArtist ? ` by ${escapeHtml(song.originalArtist)}` : ''}</li>`
          )
          .join('\n        ')}
      </ul>
    </section>`
        : ''
    }
    <section>
      <h2>Complete Chronological Filmography (${movies.length} Films)</h2>
      <ul>
        ${movies
          .map(
            (m) =>
              `<li>${m.year} — <strong>${escapeHtml(m.title)}</strong> (${m.songs.length} songs${m.cast ? `, ${escapeHtml(m.cast)}` : ''})</li>`
          )
          .join('\n        ')}
      </ul>
    </section>
  </article>
  <aside>
    <h2>Explore All ${DIRECTORS.length} Indian &amp; Bollywood Music Directors</h2>
    ${directoryNav}
  </aside>
  <footer>
    <p>Sur &amp; Source · Design and Managed by <a href="https://jmmweb-india.com" target="_blank" rel="noopener noreferrer">jmmweb-india.com</a></p>
    <nav aria-label="Footer navigation"><a href="/">Home</a> · <a href="/disclaimer">Disclaimer</a> · <a href="/contact">Contact / Corrections</a></nav>
  </footer>
</main>`;
  }

  return `<main class="max-w-[1280px] mx-auto px-6 py-10">
  <header>
    <p>Sur &amp; Source · Indian &amp; Bollywood Music Origins Archive</p>
  </header>
  <section>
    <h1>Indian &amp; Bollywood Music Directors: Filmographies &amp; Song Origins</h1>
    <p>Sur &amp; Source is an independent musicology research archive indexing ${DIRECTORS.length} iconic Indian &amp; Bollywood music directors across ${TOTAL_CATALOG_STATS.totalMovies.toLocaleString('en-US')} Hindi films and ${TOTAL_CATALOG_STATS.totalSongs.toLocaleString('en-US')} songs—preserving complete chronological filmographies, studio originals, and documented adaptations with listening links.</p>
  </section>
  <section>
    <h2>Indexed Indian &amp; Bollywood Music Directors (A–Z)</h2>
    ${directoryNav}
  </section>
  <section>
    <h2>Research Methodology &amp; Frequently Asked Questions</h2>
    ${ARCHIVE_FAQS.map(
      (faq) =>
        `<article><h3>${escapeHtml(faq.question)}</h3><p>${escapeHtml(faq.answer)}</p></article>`
    ).join('\n    ')}
  </section>
  <footer>
    <p>Sur &amp; Source · Design and Managed by <a href="https://jmmweb-india.com" target="_blank" rel="noopener noreferrer">jmmweb-india.com</a></p>
    <nav aria-label="Footer navigation"><a href="/disclaimer">Disclaimer</a> · <a href="/contact">Contact / Corrections</a></nav>
  </footer>
</main>`;
}
