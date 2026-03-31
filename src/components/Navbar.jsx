import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services', to: '/services',
    children: [
      { label: 'Road Transport', to: '/services/road-transport' },
      { label: 'Air Freight', to: '/services/air-freight' },
      { label: 'Sea Freight', to: '/services/sea-freight' },
      { label: 'Import & Export', to: '/services/import-export' },
    ]
  },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+9197108 79879" className="hover:text-accent transition-colors">📞 +91 97108 79879</a>
            <a href="mailto:info@ptclogistics.com" className="hover:text-accent transition-colors">✉ info@ptclogistics.com</a>
          </div>
          <div className="flex gap-4">
            <span className="text-gray-400">Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="PTC Logistics" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className="px-4 py-2 font-semibold text-sm uppercase tracking-wide text-gray-700 hover:text-primary transition-colors flex items-center gap-1"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className="absolute top-full left-0 w-52 bg-white shadow-xl border-t-2 border-accent opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <NavLink to={link.to} className="block px-4 py-2.5 text-sm font-semibold text-primary bg-gray-50 border-b hover:bg-primary hover:text-white transition-colors">
                      All Services
                    </NavLink>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 font-semibold text-sm uppercase tracking-wide transition-colors ${isActive ? 'text-primary border-b-2 border-accent' : 'text-gray-700 hover:text-primary'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Link to="/contact" className="ml-3 btn-primary text-xs py-2.5">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-primary mb-1.5 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-primary transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full text-left px-3 py-2.5 font-semibold text-sm uppercase tracking-wide text-gray-700 flex justify-between items-center"
                    >
                      {link.label}
                      <span className="text-xs">{servicesOpen ? '▲' : '▼'}</span>
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-1 border-l-2 border-accent ml-3">
                        {link.children.map((child) => (
                          <NavLink key={child.to} to={child.to} className="block px-3 py-2 text-sm text-gray-600 hover:text-primary">
                            {child.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 font-semibold text-sm uppercase tracking-wide ${isActive ? 'text-primary' : 'text-gray-700'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-3">
                <Link to="/contact" className="btn-primary block text-center text-xs py-3">Get a Quote</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
