import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import express, { type NextFunction, type Request, type Response } from 'express';
import type { DiscoveryTargetDirector } from './src/types/archive.ts';
type SeoConfigModule = typeof import('./src/seo/seoConfig.ts');
type DiscoveryServiceModule = typeof import('./src/server/discoveryService.ts');

let seoConfigPromise: Promise<SeoConfigModule> | null = null;
let discoveryServicePromise: Promise<DiscoveryServiceModule> | null = null;

function getSeoConfig(): Promise<SeoConfigModule> {
  if (!seoConfigPromise) {
    seoConfigPromise = import('./src/seo/seoConfig.ts');
  }
  return seoConfigPromise;
}

function getDiscoveryService(): Promise<DiscoveryServiceModule> {
  if (!discoveryServicePromise) {
    discoveryServicePromise = import('./src/server/discoveryService.ts');
  }
  return discoveryServicePromise;
}

const ADMIN_EMAIL = 'jollyboytalkative@gmail.com';
const PORT = Number(process.env.PORT || 3000);

interface FirebaseConfigFile {
  apiKey?: string;
}

function loadFirebaseApiKey(): string {
  try {
    const configPath = path.resolve(process.cwd(), 'firebase-applet-config.json');
    const raw = fs.readFileSync(configPath, 'utf8');
    const parsed = JSON.parse(raw) as FirebaseConfigFile;
    return parsed.apiKey ?? '';
  } catch {
    return '';
  }
}

const FIREBASE_API_KEY = loadFirebaseApiKey();

interface VerifiedAdminRequest extends Request {
  adminUser?: {
    uid: string;
    email: string;
  };
}

async function requireVerifiedAdmin(
  req: VerifiedAdminRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization ?? '';
  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length).trim()
    : '';

  if (!token) {
    res.status(401).json({ error: 'Authentication token required.' });
    return;
  }

  if (!FIREBASE_API_KEY) {
    res.status(500).json({ error: 'Firebase configuration missing on server.' });
    return;
  }

  try {
    const verifyRes = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(FIREBASE_API_KEY)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: token }),
      }
    );

    if (!verifyRes.ok) {
      res.status(401).json({ error: 'Invalid or expired Firebase session.' });
      return;
    }

    const data = (await verifyRes.json()) as {
      users?: Array<{
        localId?: string;
        email?: string;
        emailVerified?: boolean;
      }>;
    };

    const user = data.users?.[0];
    if (
      !user?.localId ||
      !user.emailVerified ||
      (user.email ?? '').toLowerCase() !== ADMIN_EMAIL.toLowerCase()
    ) {
      res.status(403).json({
        error: `Access denied. Private admin review is restricted to ${ADMIN_EMAIL}.`,
      });
      return;
    }

    req.adminUser = {
      uid: user.localId,
      email: user.email ?? ADMIN_EMAIL,
    };
    next();
  } catch (err) {
    console.error('Admin token verification error:', err);
    res.status(500).json({ error: 'Failed to verify Firebase authentication token.' });
  }
}

function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function resolvePublicOrigin(req: Request): string {
  const forwardedHost = req.get('x-forwarded-host')?.split(',')[0]?.trim();
  const rawHost = forwardedHost || req.get('host') || '';
  const isLoopback =
    !rawHost ||
    rawHost.startsWith('127.0.0.1') ||
    rawHost.startsWith('localhost') ||
    rawHost.startsWith('0.0.0.0');

  if (!isLoopback) {
    const forwardedProto = req
      .get('x-forwarded-proto')
      ?.split(',')[0]
      ?.trim();
    const proto = forwardedProto || (req.secure ? 'https' : 'https');
    return `${proto}://${rawHost}`.replace(/\/+$/, '');
  }

  const envUrl = (process.env.APP_URL ?? '').trim();
  if (
    envUrl &&
    envUrl !== 'MY_APP_URL' &&
    (envUrl.startsWith('https://') || envUrl.startsWith('http://'))
  ) {
    return envUrl.replace(/\/+$/, '');
  }

  return 'https://ais-pre-ctlhphzqer6embfkrimqiu-386234381851.asia-southeast1.run.app';
}

async function injectSeoMeta(html: string, req: Request): Promise<string> {
  const {
    buildSsrRootHtml,
    buildStructuredDataJsonLd,
    getSeoMetaForPath,
    OG_IMAGE_ALT,
    OG_IMAGE_PATH,
  } = await getSeoConfig();
  const origin = resolvePublicOrigin(req);
  const meta = getSeoMetaForPath(req.path);
  const canonicalUrl = `${origin}${meta.canonicalPath}`;
  const ogImageUrl = `${origin}${OG_IMAGE_PATH}`;
  const structuredData = buildStructuredDataJsonLd(origin, req.path);
  const ssrRootHtml = buildSsrRootHtml(req.path);

  const safeTitle = escapeHtmlAttr(meta.title);
  const safeDesc = escapeHtmlAttr(meta.description);
  const safeKeywords = escapeHtmlAttr(meta.keywords);
  const safeRobots = escapeHtmlAttr(meta.robots);
  const safeCanonical = escapeHtmlAttr(canonicalUrl);
  const safeOgType = escapeHtmlAttr(meta.ogType);
  const safeOgImage = escapeHtmlAttr(ogImageUrl);
  const safeOgAlt = escapeHtmlAttr(OG_IMAGE_ALT);

  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="keywords" content="${safeKeywords}" />`
    )
    .replace(
      /<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="robots" content="${safeRobots}" />`
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i,
      `<link rel="canonical" href="${safeCanonical}" />`
    )
    .replace(
      /<meta\s+property="og:type"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:type" content="${safeOgType}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:url" content="${safeCanonical}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:image" content="${safeOgImage}" />`
    )
    .replace(
      /<meta\s+property="og:image:secure_url"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:image:secure_url" content="${safeOgImage}" />`
    )
    .replace(
      /<meta\s+property="og:image:alt"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta property="og:image:alt" content="${safeOgAlt}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${safeDesc}" />`
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:image" content="${safeOgImage}" />`
    )
    .replace(
      /<meta\s+name="twitter:image:alt"\s+content="[\s\S]*?"\s*\/?>/i,
      `<meta name="twitter:image:alt" content="${safeOgAlt}" />`
    )
    .replace(
      /<script id="structured-data-jsonld" type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="structured-data-jsonld" type="application/ld+json">${structuredData}</script>`
    )
    .replace(
      /<div id="root">\s*<\/div>/i,
      `<div id="root">${ssrRootHtml}</div>`
    );
}

async function startServer(): Promise<void> {
  const app = express();
  app.set('trust proxy', true);
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  const playRedirectCache = new Map<string, string>();
  app.get('/api/play', async (req, res) => {
    const q = typeof req.query.q === 'string' ? req.query.q.trim() : '';
    const title = typeof req.query.title === 'string' ? req.query.title.trim() : '';
    const movie = typeof req.query.movie === 'string' ? req.query.movie.trim() : '';
    const artist = typeof req.query.artist === 'string' ? req.query.artist.trim() : '';
    const kind = req.query.kind === 'original' ? 'original' : 'movie';

    const queryText = q || [title, movie, artist].filter(Boolean).join(' ');
    if (!queryText) {
      res.status(400).send('Missing song query');
      return;
    }

    const cacheKey = `${kind}::${queryText.toLowerCase()}`;
    const cached = playRedirectCache.get(cacheKey);
    if (cached) {
      res.redirect(302, cached);
      return;
    }

    try {
      const { resolveClosestYouTubeVideoUrl } = await import(
        './src/server/youtubeResolver.ts'
      );
      const resolvedUrl = await resolveClosestYouTubeVideoUrl({
        query: queryText,
        bollywoodSongTitle: kind === 'movie' ? title || queryText : undefined,
        originalSongTitle: kind === 'original' ? title || queryText : undefined,
        originalArtist: kind === 'original' ? artist : undefined,
        movieTitle: movie || undefined,
        kind,
        isBroadComparison: true,
      });
      if (resolvedUrl.includes('watch?v=')) {
        if (playRedirectCache.size > 5000) {
          playRedirectCache.clear();
        }
        playRedirectCache.set(cacheKey, resolvedUrl);
      }
      res.redirect(302, resolvedUrl);
    } catch {
      res.redirect(
        302,
        `https://www.youtube.com/results?search_query=${encodeURIComponent(queryText)}`
      );
    }
  });

  app.get('/robots.txt', (req, res) => {
    const origin = resolvePublicOrigin(req);
    res
      .type('text/plain')
      .send(
        `User-agent: *\nAllow: /\nDisallow: /admin\nDisallow: /api/\n\nSitemap: ${origin}/sitemap.xml\n`
      );
  });

  app.get('/sitemap.xml', async (req, res, next) => {
    try {
      const { getSitemapEntries } = await getSeoConfig();
      const origin = resolvePublicOrigin(req);
      const today = new Date().toISOString().slice(0, 10);
      const urls = getSitemapEntries().map((entry) => ({
        loc: `${origin}${entry.path}`,
        changefreq: entry.changefreq,
        priority: entry.priority,
      }));
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
        .map(
          (u) =>
            `  <url>\n    <loc>${escapeHtmlAttr(u.loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
        )
        .join('\n')}\n</urlset>\n`;
      res.type('application/xml').send(xml);
    } catch (err) {
      next(err);
    }
  });

  app.get('/api/discovery/status', async (_req, res, next) => {
    try {
      const ds = await getDiscoveryService();
      res.json(ds.getDiscoveryStatus());
    } catch (err) {
      next(err);
    }
  });

  app.get(
    '/api/discovery/staged',
    requireVerifiedAdmin,
    async (_req: VerifiedAdminRequest, res: Response, next: NextFunction) => {
      try {
        const ds = await getDiscoveryService();
        const staged = ds.getStagedPayload();
        res.json({
          candidates: staged.candidates,
          releases: staged.releases,
          status: ds.getDiscoveryStatus(),
        });
      } catch (err) {
        next(err);
      }
    }
  );

  app.post(
    '/api/discovery/staged/ack',
    requireVerifiedAdmin,
    async (req: VerifiedAdminRequest, res: Response, next: NextFunction) => {
      try {
        const ds = await getDiscoveryService();
        const discoveryIds = Array.isArray(req.body?.discoveryIds)
          ? (req.body.discoveryIds as string[])
          : [];
        const releaseIds = Array.isArray(req.body?.releaseIds)
          ? (req.body.releaseIds as string[])
          : [];
        ds.acknowledgeStagedPayload(discoveryIds, releaseIds);
        res.json({ ok: true, status: ds.getDiscoveryStatus() });
      } catch (err) {
        next(err);
      }
    }
  );

  app.post(
    '/api/discovery/schedule',
    requireVerifiedAdmin,
    async (req: VerifiedAdminRequest, res: Response, next: NextFunction) => {
      try {
        const ds = await getDiscoveryService();
        const body = req.body ?? {};
        const status = ds.updateDiscoverySchedule({
          enabled: typeof body.enabled === 'boolean' ? body.enabled : undefined,
          intervalHours:
            typeof body.intervalHours === 'number' ? body.intervalHours : undefined,
          targetDirector: body.targetDirector as DiscoveryTargetDirector | undefined,
          batchSize:
            typeof body.batchSize === 'number' ? body.batchSize : undefined,
        });
        res.json(status);
      } catch (err) {
        next(err);
      }
    }
  );

  app.post(
    '/api/discovery/scan',
    requireVerifiedAdmin,
    async (req: VerifiedAdminRequest, res: Response) => {
      try {
        const ds = await getDiscoveryService();
        const body = req.body ?? {};
        const result = await ds.runSearchGroundedDiscoveryScan({
          targetDirector: (body.targetDirector ?? 'all') as DiscoveryTargetDirector,
          batchSize:
            typeof body.batchSize === 'number' ? body.batchSize : 6,
          excludeSongIds: Array.isArray(body.excludeSongIds)
            ? (body.excludeSongIds as string[])
            : [],
          songQuery:
            typeof body.songQuery === 'string' ? body.songQuery : undefined,
          persistToServerStage: false,
        });
        res.json({
          ...result,
          status: ds.getDiscoveryStatus(),
        });
      } catch (err) {
        const ds = await getDiscoveryService().catch(() => null);
        if (ds) {
          const parsed = ds.formatGeminiApiError(err);
          res.status(parsed.status).json({ error: parsed.message });
          return;
        }
        const message =
          err instanceof Error
            ? err.message
            : 'Discovery scan failed unexpectedly.';
        const statusCode = message.includes('already in progress') ? 409 : 500;
        res.status(statusCode).json({ error: message });
      }
    }
  );

  app.post(
    '/api/discovery/scan-releases',
    requireVerifiedAdmin,
    async (req: VerifiedAdminRequest, res: Response) => {
      try {
        const ds = await getDiscoveryService();
        const body = req.body ?? {};
        const result = await ds.runNewReleaseDiscoveryScan({
          targetDirector: (body.targetDirector ?? 'all') as DiscoveryTargetDirector,
          excludeMovieTitles: Array.isArray(body.excludeMovieTitles)
            ? (body.excludeMovieTitles as string[])
            : [],
          persistToServerStage: false,
        });
        res.json({
          ...result,
          status: ds.getDiscoveryStatus(),
        });
      } catch (err) {
        const ds = await getDiscoveryService().catch(() => null);
        if (ds) {
          const parsed = ds.formatGeminiApiError(err);
          res.status(parsed.status).json({ error: parsed.message });
          return;
        }
        const message =
          err instanceof Error
            ? err.message
            : 'New release discovery scan failed unexpectedly.';
        const statusCode = message.includes('already in progress') ? 409 : 500;
        res.status(statusCode).json({ error: message });
      }
    }
  );

  if (process.env.NODE_ENV !== 'production') {
    const viteReady = import('vite').then(({ createServer: createViteServer }) =>
      createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
      })
    );
    app.use(async (req, res, next) => {
      try {
        const vite = await viteReady;
        const accept = req.headers.accept ?? '';
        const isPageRequest =
          req.method === 'GET' &&
          !req.path.startsWith('/api/') &&
          !req.path.startsWith('/@') &&
          !req.path.startsWith('/src/') &&
          !req.path.startsWith('/node_modules/') &&
          !path.extname(req.path) &&
          (accept.includes('text/html') || accept === '*/*' || accept === '');

        if (isPageRequest) {
          const templatePath = path.resolve(process.cwd(), 'index.html');
          const rawTemplate = fs.readFileSync(templatePath, 'utf8');
          const transformed = await vite.transformIndexHtml(
            req.originalUrl,
            rawTemplate
          );
          const seoHtml = await injectSeoMeta(transformed, req);
          res.status(200).set({ 'Content-Type': 'text/html' }).end(seoHtml);
          return;
        }

        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir, { index: false }));
    app.get('*', async (req, res, next) => {
      if (req.path.startsWith('/api/')) {
        next();
        return;
      }
      try {
        const indexPath = path.join(distDir, 'index.html');
        const rawHtml = fs.readFileSync(indexPath, 'utf8');
        const seoHtml = await injectSeoMeta(rawHtml, req);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(seoHtml);
      } catch (err) {
        next(err);
      }
    });
  }

  const FIVE_MINUTES_MS = 5 * 60 * 1000;
  setInterval(() => {
    void getDiscoveryService().then((ds) => ds.runScheduledDiscoveryTickIfDue());
  }, FIVE_MINUTES_MS);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sur & Source server listening on http://0.0.0.0:${PORT}`);
  });
}

void startServer();
