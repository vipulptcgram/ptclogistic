import { promises as fs } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const publicDir = path.join(rootDir, 'public');
const outFile = path.join(publicDir, 'sitemap.xml');
const appRoutesFile = path.join(rootDir, 'src', 'App.jsx');
const servicesFile = path.join(rootDir, 'src', 'data', 'servicesData.json');

const siteUrl = (process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://www.ptclogistics.com').replace(/\/+$/, '');

const todayIso = new Date().toISOString();

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/industries', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
];

const optionalDynamicSources = [
  {
    file: path.join(rootDir, 'src', 'data', 'productsData.json'),
    routePrefix: '/products',
    idKeys: ['slug', 'id'],
    priority: '0.8',
    changefreq: 'weekly',
  },
  {
    file: path.join(rootDir, 'src', 'data', 'categoriesData.json'),
    routePrefix: '/categories',
    idKeys: ['slug', 'id'],
    priority: '0.7',
    changefreq: 'weekly',
  },
  {
    file: path.join(rootDir, 'src', 'data', 'blogData.json'),
    routePrefix: '/blog',
    idKeys: ['slug', 'id'],
    priority: '0.7',
    changefreq: 'weekly',
  },
  {
    file: path.join(rootDir, 'src', 'data', 'postsData.json'),
    routePrefix: '/blog',
    idKeys: ['slug', 'id'],
    priority: '0.7',
    changefreq: 'weekly',
  },
];

const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const toAbsoluteUrl = (pathname) => `${siteUrl}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;

const getLastMod = async (filePath, fallback = todayIso) => {
  try {
    const stats = await fs.stat(filePath);
    return stats.mtime.toISOString();
  } catch {
    return fallback;
  }
};

const readJsonIfExists = async (filePath) => {
  try {
    const raw = await fs.readFile(filePath, 'utf8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const pickId = (item, keys) => {
  for (const key of keys) {
    const value = item?.[key];
    if (typeof value === 'string' && value.trim()) return value.trim();
  }
  return null;
};

const buildUrlEntry = ({ loc, lastmod, changefreq, priority }) => [
  '  <url>',
  `    <loc>${escapeXml(loc)}</loc>`,
  `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
  `    <changefreq>${escapeXml(changefreq)}</changefreq>`,
  `    <priority>${escapeXml(priority)}</priority>`,
  '  </url>',
].join('\n');

const main = async () => {
  await fs.mkdir(publicDir, { recursive: true });

  const staticLastMod = await getLastMod(appRoutesFile);
  const urlEntries = staticPages.map((page) =>
    buildUrlEntry({
      loc: toAbsoluteUrl(page.path),
      lastmod: staticLastMod,
      changefreq: page.changefreq,
      priority: page.priority,
    })
  );

  const services = await readJsonIfExists(servicesFile);
  if (Array.isArray(services)) {
    const servicesLastMod = await getLastMod(servicesFile, staticLastMod);
    for (const service of services) {
      if (!service?.id) continue;
      urlEntries.push(
        buildUrlEntry({
          loc: toAbsoluteUrl(`/services/${service.id}`),
          lastmod: servicesLastMod,
          changefreq: 'weekly',
          priority: '0.8',
        })
      );
    }
  }

  for (const source of optionalDynamicSources) {
    const items = await readJsonIfExists(source.file);
    if (!Array.isArray(items)) continue;
    const sourceLastMod = await getLastMod(source.file, staticLastMod);
    for (const item of items) {
      const id = pickId(item, source.idKeys);
      if (!id) continue;
      urlEntries.push(
        buildUrlEntry({
          loc: toAbsoluteUrl(`${source.routePrefix}/${id}`),
          lastmod: sourceLastMod,
          changefreq: source.changefreq,
          priority: source.priority,
        })
      );
    }
  }

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urlEntries,
    '</urlset>',
    '',
  ].join('\n');

  await fs.writeFile(outFile, sitemap, 'utf8');
  console.log(`Generated sitemap: ${outFile}`);
  console.log(`Total URLs: ${urlEntries.length}`);
};

main().catch((error) => {
  console.error('Failed to generate sitemap.xml');
  console.error(error);
  process.exit(1);
});
