import React from 'react';

export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.ptclogistics.com').replace(/\/+$/, '');

export const toAbsoluteUrl = (path = '/') => {
  if (!path) return SITE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

const JsonLd = ({ data }) => {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export default JsonLd;
