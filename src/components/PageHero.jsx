import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import JsonLd, { toAbsoluteUrl } from './StructuredData';

const PageHero = ({ title, subtitle, breadcrumbs = [], bgImage }) => {
  const location = useLocation();
  const crumbItems = [
    { label: 'Home', to: '/' },
    ...breadcrumbs.map((crumb) => ({ label: crumb.label, to: crumb.to || location.pathname })),
  ];

  const breadcrumbSchema = breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbItems.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.label,
          item: toAbsoluteUrl(crumb.to),
        })),
      }
    : null;

  return (
    <section className="relative py-14 md:py-24 hero-bg diagonal-stripe overflow-hidden">
      <JsonLd data={breadcrumbSchema} />
      {/* Decorative elements */}
      <div className="hidden md:block absolute right-0 top-0 w-64 h-64 bg-accent opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="hidden md:block absolute left-0 bottom-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav className="mb-4 flex items-center gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <React.Fragment key={i}>
                <span className="text-gray-600">/</span>
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-accent transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gray-300">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {subtitle && (
          <div className="section-subtitle">{subtitle}</div>
        )}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
          {title}
        </h1>
        <div className="w-20 h-1 bg-accent mt-4" />
      </div>
    </section>
  );
};

export default PageHero;
