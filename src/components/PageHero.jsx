import React from 'react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, subtitle, breadcrumbs = [], bgImage }) => {
  return (
    <section
      className="relative py-20 md:py-28 hero-bg diagonal-stripe overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-accent opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />

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
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-none" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
          {title}
        </h1>
        <div className="w-20 h-1 bg-accent mt-4" />
      </div>
    </section>
  );
};

export default PageHero;
