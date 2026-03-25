import React from 'react';
import { Link } from 'react-router-dom';
import siteData from '../data/siteData.json';
import servicesData from '../data/servicesData.json';

const Footer = () => {
  const { company } = siteData;

  return (
    <footer className="bg-neutral-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src="/images/logo.png" alt="PTC Logistics" className="h-12 w-auto object-contain bg-white p-1 rounded" />
           
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Reliable logistics and freight solutions across Air, Road & Sea. Pan India transport with global freight forwarding services.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Twitter', 'Facebook'].map((s) => (
                <a key={s} href="#" className="w-8 h-8 bg-gray-700 hover:bg-accent transition-colors rounded flex items-center justify-center text-xs font-bold">
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Our Services</h4>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="text-accent text-xs">▶</span> {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                  <span className="text-accent text-xs">▶</span> All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Industries We Serve', to: '/industries' },
                { label: 'Get a Quote', to: '/contact' },
                { label: 'Contact Us', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="text-accent text-xs">▶</span> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3">
                <span className="text-accent mt-1">📍</span>
                <span>{company.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">📞</span>
                <div>
                  <a href={`tel:${company.phone}`} className="hover:text-accent transition-colors block">{company.phone}</a>
                  <a href={`tel:${company.phone2}`} className="hover:text-accent transition-colors block">{company.phone2}</a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✉</span>
                <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">{company.email}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">🕐</span>
                <span>Mon - Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PTC Logistics Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>GST: {company.gst}</span>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
