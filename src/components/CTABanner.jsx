import React from 'react';
import { Link } from 'react-router-dom';

const CTABanner = ({ 
  title = "Ready to Ship Your Cargo?",
  subtitle = "Get a free quote from our logistics experts today.",
  btnLabel = "Get a Free Quote",
  btnTo = "/contact",
  secondary = { label: "Call Us Now", href: "tel:+919876543210" }
}) => {
  return (
    <section className="bg-accent py-16 relative overflow-hidden">
      <div className="absolute inset-0 diagonal-stripe opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-white leading-tight">
            {title}
          </h2>
          <p className="text-white/80 mt-2 text-sm">{subtitle}</p>
        </div>
        <div className="flex gap-4 shrink-0 flex-wrap">
          <Link to={btnTo} className="bg-white text-accent font-bold px-8 py-3 uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
            {btnLabel}
          </Link>
          {secondary && (
            <a href={secondary.href} className="border-2 border-white text-white font-bold px-8 py-3 uppercase tracking-wider text-sm hover:bg-white hover:text-accent transition-all duration-300">
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
