import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import express, { type NextFunction, type Request, type Response } from 'express';
import type { DiscoveryTargetDirector } from './src/types/archive.ts';

type DiscoveryServiceModule = typeof import('./src/server/discoveryService.ts');

let discoveryServicePromise: Promise<DiscoveryServiceModule> | null = null;

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

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
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
        vite.middlewares(req, res, next);
      } catch (err) {
        next(err);
      }
    });
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api/')) {
        next();
        return;
      }
      res.sendFile(path.join(distDir, 'index.html'));
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
