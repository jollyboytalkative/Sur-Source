export type PublicSeoRoute = '/' | '/disclaimer' | '/contact' | '/admin';

export interface RouteSeoMeta {
  path: PublicSeoRoute;
  title: string;
  description: string;
  robots: string;
}

export const SITE_NAME = 'Sur & Source';
export const DEFAULT_APP_ORIGIN =
  'https://ais-pre-ctlhphzqer6embfkrimqiu-386234381851.asia-southeast1.run.app';

export const SEO_KEYWORDS =
  'Sur & Source, Bollywood music origins, Bollywood music directors archive, Hindi film songs adapted, Bollywood song inspirations, Nadeem-Shravan, Anu Malik, R.D. Burman, Shankar-Jaikishan, A. R. Rahman Bollywood, Naushad, O.P. Nayyar, Anand-Milind, Laxmikant-Pyarelal, S. D. Burman, Ravi Bollywood';

export const OG_IMAGE_PATH = '/og-image.jpg';
export const OG_IMAGE_ALT =
  'Sur & Source — Bollywood Music Origins logo featuring vinyl records, musical notes, filmstrip, and magnifying glass';

export const ARCHIVED_COMPOSER_LIST = [
  { name: 'Nadeem–Shravan', era: '1977–2009' },
  { name: 'Anu Malik', era: '1977–Present' },
  { name: 'R.D. Burman', era: '1961–1994' },
  { name: 'Shankar–Jaikishan', era: '1949–1987' },
  { name: 'A. R. Rahman (Bollywood)', era: '1995–Present' },
  { name: 'Naushad', era: '1940–2005' },
  { name: 'O.P. Nayyar', era: '1952–1994' },
  { name: 'Anand–Milind', era: '1984–Present' },
  { name: 'Laxmikant–Pyarelal', era: '1963–1998' },
  { name: 'S. D. Burman', era: '1946–1977' },
  { name: 'Ravi (Bollywood)', era: '1955–2003' },
] as const;

export const ROUTE_SEO_META: Record<PublicSeoRoute, RouteSeoMeta> = {
  '/': {
    path: '/',
    title: 'Sur & Source — Bollywood Music Directors & Origins Archive',
    description:
      'Explore Bollywood music directors’ complete filmographies, song-by-song origins, close similarities, and listening links across 11 iconic Hindi composers.',
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/disclaimer': {
    path: '/disclaimer',
    title: 'Editorial Disclaimer & Methodology | Sur & Source',
    description:
      'Read the editorial methodology, fair-study principles, and provenance attribution guidelines behind the Sur & Source Bollywood Music Origins archive.',
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact & Archive Corrections | Sur & Source',
    description:
      'Submit song provenance corrections, missing filmography credits, or feedback to improve the Sur & Source Bollywood Music Origins research archive.',
    robots:
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  },
  '/admin': {
    path: '/admin',
    title: 'Curator Review Queue | Sur & Source',
    description:
      'Private curator review workspace for verifying archival music provenance submissions on Sur & Source.',
    robots: 'noindex, nofollow',
  },
};

export function normalizeSeoRoute(pathname: string): PublicSeoRoute {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/disclaimer') return '/disclaimer';
  if (normalized === '/contact') return '/contact';
  if (normalized === '/admin') return '/admin';
  return '/';
}

export function buildStructuredDataJsonLd(origin: string): string {
  const cleanOrigin = origin.replace(/\/+$/, '');
  const ogImageUrl = `${cleanOrigin}${OG_IMAGE_PATH}`;
  const logoUrl = `${cleanOrigin}/favicon-512x512.png`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${cleanOrigin}/#website`,
        name: SITE_NAME,
        alternateName: 'Bollywood Music Origins',
        url: `${cleanOrigin}/`,
        description: ROUTE_SEO_META['/'].description,
        inLanguage: 'en',
        publisher: {
          '@type': 'Organization',
          name: 'jmmweb-india.com',
          url: 'https://jmmweb-india.com',
          logo: {
            '@type': 'ImageObject',
            url: logoUrl,
            width: 512,
            height: 512,
          },
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${cleanOrigin}/?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'WebApplication',
        '@id': `${cleanOrigin}/#webapp`,
        name: 'Sur & Source — Bollywood Music Directors & Origins Archive',
        url: `${cleanOrigin}/`,
        applicationCategory: 'ReferenceApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        description: ROUTE_SEO_META['/'].description,
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
        name: 'Bollywood Music Directors Filmography & Song Origins Catalog',
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
          name: 'Indexed Bollywood Music Directors',
          numberOfItems: ARCHIVED_COMPOSER_LIST.length,
          itemListElement: ARCHIVED_COMPOSER_LIST.map((composer, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Person',
              name: composer.name,
              jobTitle: 'Bollywood Music Director & Film Composer',
              description: `${composer.name} Bollywood filmography and song provenance archive (${composer.era})`,
            },
          })),
        },
      },
    ],
  };

  return JSON.stringify(graph);
}
