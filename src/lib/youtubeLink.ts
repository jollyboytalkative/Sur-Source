export function isYouTubeSearchUrl(url: string | undefined): boolean {
  if (!url) return false;
  return url.includes('youtube.com/results') && url.includes('search_query=');
}

export function extractYouTubeSearchQuery(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get('search_query') ?? '';
  } catch {
    const idx = url.indexOf('search_query=');
    if (idx === -1) return '';
    return decodeURIComponent(url.slice(idx + 'search_query='.length));
  }
}

export function toDirectPlayHref(
  rawUrl: string | undefined,
  meta?: {
    title?: string;
    movie?: string;
    artist?: string;
    kind?: 'movie' | 'original';
  }
): string {
  if (!rawUrl) return '';
  if (!isYouTubeSearchUrl(rawUrl)) return rawUrl;

  const q = extractYouTubeSearchQuery(rawUrl);
  if (!q) return rawUrl;

  const params = new URLSearchParams({ q });
  if (meta?.title) params.set('title', meta.title);
  if (meta?.movie) params.set('movie', meta.movie);
  if (meta?.artist) params.set('artist', meta.artist);
  if (meta?.kind) params.set('kind', meta.kind);
  return `/api/play?${params.toString()}`;
}
