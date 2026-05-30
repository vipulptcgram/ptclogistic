import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const canonicalHost = process.env.CANONICAL_HOST || '';

app.disable('x-powered-by');
app.set('trust proxy', true);

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

app.use(compression());
app.use(express.json({ limit: '1mb' }));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] === 'http') {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`);
  }
  next();
});

app.use((req, res, next) => {
  if (!canonicalHost) return next();
  if (req.hostname !== canonicalHost) {
    return res.redirect(301, `https://${canonicalHost}${req.originalUrl}`);
  }
  next();
});

app.use((req, res, next) => {
  const [pathname, query = ''] = req.originalUrl.split('?');
  const normalizedPath = pathname === '/' ? '/' : pathname.toLowerCase().replace(/\/+$/, '');
  if (normalizedPath !== pathname) {
    const search = query ? `?${query}` : '';
    return res.redirect(301, `${normalizedPath}${search}`);
  }
  next();
});

app.use('/api', (req, res, next) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: { status: 'ok' },
    meta: { timestamp: new Date().toISOString() },
  });
});

app.use(['/admin', '/admin/*', '/private', '/private/*'], (req, res) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive');
  return res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: 'Resource not found' },
  });
});

app.use(
  express.static(distDir, {
    etag: true,
    lastModified: true,
    maxAge: 0,
    setHeaders: (res, filePath) => {
      if (/\.(js|css|woff2?|png|jpe?g|gif|svg|webp|avif|ico)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (/\/(robots\.txt|sitemap\.xml)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=300');
      }
    },
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: 'Endpoint not found' },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
