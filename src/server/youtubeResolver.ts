interface YtVideoCandidate {
  id: string;
  title: string;
  channel: string;
  durationSec: number;
  score: number;
}

function parseDurationSeconds(text: string): number {
  if (!text) return 0;
  const parts = text.split(':').map((p) => Number(p.trim()));
  if (parts.some((n) => Number.isNaN(n))) return 0;
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  return 0;
}

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length >= 3);
}

function scoreCandidate(
  cand: { title: string; channel: string; durationSec: number },
  idx: number,
  params: {
    originalSongTitle?: string;
    originalArtist?: string;
    bollywoodSongTitle?: string;
    isBroadComparison?: boolean;
  }
): number {
  let score = Math.max(0, 14 - idx * 2);
  const titleLower = cand.title.toLowerCase();
  const channelLower = cand.channel.toLowerCase();
  const combined = `${titleLower} ${channelLower}`;

  if (cand.durationSec > 0 && cand.durationSec < 35) {
    score -= 25;
  }
  if (cand.durationSec > 2700) {
    score -= 15;
  }

  const titleTokens = tokenize(params.originalSongTitle ?? '');
  for (const tok of titleTokens) {
    if (
      [
        'from',
        'original',
        'theme',
        'main',
        'song',
        'film',
        'pakistani',
        'traditional',
        'folk',
        'hindi',
        'classic',
        'album',
        'part',
      ].includes(tok)
    ) {
      continue;
    }
    if (titleLower.includes(tok)) score += 6;
  }

  const artistTokens = tokenize(params.originalArtist ?? '');
  for (const tok of artistTokens) {
    if (
      [
        'music',
        'united',
        'kingdom',
        'states',
        'pakistan',
        'tradition',
        'style',
        'archives',
        'film',
        'archive',
      ].includes(tok)
    ) {
      continue;
    }
    if (combined.includes(tok)) score += 5;
  }

  if (
    channelLower.includes('topic') ||
    channelLower.includes('vevo') ||
    channelLower.includes('official') ||
    channelLower.includes('emi') ||
    channelLower.includes('saregama') ||
    channelLower.includes('tips') ||
    channelLower.includes('sony') ||
    channelLower.includes('universal') ||
    channelLower.includes('t-series')
  ) {
    score += 7;
  }

  if (titleLower.includes('official') || titleLower.includes('original')) {
    score += 3;
  }

  const noiseKeywords = [
    'karaoke',
    'instrumental cover',
    'piano cover',
    'guitar cover',
    'tutorial',
    'reaction',
    'whatsapp status',
    'status video',
    'slowed',
    'reverb',
    '8d audio',
    'ringtone',
    'tiktok',
    'shorts',
    'english remix',
    'mashup',
  ];
  for (const kw of noiseKeywords) {
    if (titleLower.includes(kw)) score -= 16;
  }

  if (!params.isBroadComparison) {
    const bollywoodSpam = ['copied', 'plagiarism', 'chor', 'exposed', 'copycat'];
    for (const kw of bollywoodSpam) {
      if (titleLower.includes(kw)) score -= 18;
    }

    const bTitle = (params.bollywoodSongTitle ?? '').toLowerCase().trim();
    if (
      bTitle &&
      titleLower.includes(bTitle) &&
      !titleLower.includes((params.originalSongTitle ?? '').toLowerCase())
    ) {
      score -= 14;
    }
  }

  return score;
}

async function isPlayableViaOembed(videoId: string): Promise<boolean> {
  try {
    const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const res = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(watchUrl)}&format=json`,
      { signal: AbortSignal.timeout(5000) }
    );
    return res.ok;
  } catch {
    return false;
  }
}

interface SearchRendererPayload {
  contents?: {
    twoColumnSearchResultsRenderer?: {
      primaryContents?: {
        sectionListRenderer?: {
          contents?: Array<{
            itemSectionRenderer?: {
              contents?: Array<{
                videoRenderer?: {
                  videoId?: string;
                  title?: { runs?: Array<{ text?: string }> };
                  ownerText?: { runs?: Array<{ text?: string }> };
                  lengthText?: { simpleText?: string };
                };
              }>;
            };
          }>;
        };
      };
    };
  };
}

export async function resolveClosestYouTubeVideoUrl(params: {
  query: string;
  originalSongTitle?: string;
  originalArtist?: string;
  bollywoodSongTitle?: string;
  isBroadComparison?: boolean;
}): Promise<string> {
  const fallback = `https://www.youtube.com/results?search_query=${encodeURIComponent(params.query)}`;

  try {
    const res = await fetch(
      'https://www.youtube.com/youtubei/v1/search?prettyPrint=false',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0',
        },
        body: JSON.stringify({
          context: {
            client: {
              clientName: 'WEB',
              clientVersion: '2.20240401.00.00',
              hl: 'en',
              gl: 'IN',
            },
          },
          query: params.query,
        }),
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!res.ok) return fallback;
    const data = (await res.json()) as SearchRendererPayload;
    const sections =
      data.contents?.twoColumnSearchResultsRenderer?.primaryContents
        ?.sectionListRenderer?.contents ?? [];

    const candidates: YtVideoCandidate[] = [];
    for (const sec of sections) {
      for (const item of sec.itemSectionRenderer?.contents ?? []) {
        const vr = item.videoRenderer;
        if (!vr?.videoId) continue;
        const title = (vr.title?.runs ?? []).map((r) => r.text ?? '').join('');
        const channel = (vr.ownerText?.runs ?? [])
          .map((r) => r.text ?? '')
          .join('');
        const durationSec = parseDurationSeconds(
          vr.lengthText?.simpleText ?? ''
        );
        candidates.push({
          id: vr.videoId,
          title,
          channel,
          durationSec,
          score: scoreCandidate(
            { title, channel, durationSec },
            candidates.length,
            params
          ),
        });
        if (candidates.length >= 8) break;
      }
      if (candidates.length >= 8) break;
    }

    candidates.sort((a, b) => b.score - a.score);

    for (const cand of candidates.slice(0, 4)) {
      if (await isPlayableViaOembed(cand.id)) {
        return `https://www.youtube.com/watch?v=${cand.id}`;
      }
    }

    return candidates[0]
      ? `https://www.youtube.com/watch?v=${candidates[0].id}`
      : fallback;
  } catch {
    return fallback;
  }
}
