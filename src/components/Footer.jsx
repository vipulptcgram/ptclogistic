import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import OptimizedImage from './OptimizedImage';
import siteData from '../data/siteData.json';
import servicesData from '../data/servicesData.json';

const Footer = () => {
  const { company } = siteData;

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <OptimizedImage
                src="/images/logo.png"
                alt="PTC Logistics company logo"
                width={220}
                height={80}
                className="h-12 w-auto object-contain bg-white p-1 rounded"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">Reliable logistics and freight solutions across Air, Road and Sea.</p>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Our Services</h2>
            <ul className="space-y-2.5">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`} className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <Icon name="check" className="w-3 h-3 text-accent" /> {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Quick Links</h2>
            <ul className="space-y-2.5">
              {[{ label: 'Home', to: '/' }, { label: 'About Us', to: '/about' }, { label: 'Industries We Serve', to: '/industries' }, { label: 'Get a Quote', to: '/contact' }, { label: 'Contact Us', to: '/contact' }].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <Icon name="check" className="w-3 h-3 text-accent" /> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-lg font-bold uppercase text-white mb-5 border-b border-gray-700 pb-2">Contact Us</h2>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex gap-3"><Icon name="mapPin" className="w-4 h-4 text-accent mt-0.5 shrink-0" /><span>{company.address}</span></li>
              <li className="flex gap-3"><Icon name="phone" className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href={`tel:${company.phone}`} className="hover:text-accent transition-colors">{company.phone}</a></li>
              <li className="flex gap-3"><Icon name="mail" className="w-4 h-4 text-accent shrink-0 mt-0.5" /><a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">{company.email}</a></li>
              <li className="flex gap-3"><Icon name="clock" className="w-4 h-4 text-accent shrink-0 mt-0.5" /><span>Mon - Sat: 9:00 AM - 6:00 PM</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PTC Logistics Pvt. Ltd. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
