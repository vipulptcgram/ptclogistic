import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import siteData from '../data/siteData.json';
import JsonLd, { SITE_URL } from './StructuredData';

const Layout = () => {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const { company } = siteData;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: company.description,
    email: company.email,
    telephone: company.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: Object.values(company.social || {}).filter((url) => typeof url === 'string' && url.startsWith('http')),
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: company.name,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/services?search={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    const normalizedPath = (() => {
      const lower = pathname.toLowerCase();
      if (lower === '/') return '/';
      return lower.replace(/\/+$/, '');
    })();

    if (normalizedPath !== pathname) {
      navigate(`${normalizedPath}${search}${hash}`, { replace: true });
    }
  }, [pathname, search, hash, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 px-3 h-10 w-10 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-lg transition-all z-50"
        title="Back to top"
      >
        ⇧
      </button>
    </div>
  );
};

export default Layout;
