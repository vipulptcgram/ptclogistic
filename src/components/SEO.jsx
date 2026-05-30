import { useEffect } from 'react';

const upsertMeta = (attr, key, content) => {
  if (!content) return;
  const selector = `meta[${attr}="${key}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const toAbsoluteUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://www.ptclogistics.com').replace(/\/+$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
};

const SEO = ({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  image = '/images/logo.png',
  robots = 'index, follow',
  keywords,
  twitterCard = 'summary_large_image',
}) => {
  useEffect(() => {
    const canonicalUrl = toAbsoluteUrl(canonicalPath);
    const imageUrl = toAbsoluteUrl(image);

    if (title) document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', robots);
    if (keywords) upsertMeta('name', 'keywords', keywords);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', imageUrl);

    upsertMeta('name', 'twitter:card', twitterCard);
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);

    upsertLink('canonical', canonicalUrl);
  }, [title, description, canonicalPath, ogType, image, robots, keywords, twitterCard]);

  return null;
};

export default SEO;
