import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, variant = 'default' }) => {
  if (variant === 'mini') {
    return (
      <Link
        to={`/services/${service.id}`}
        className="group flex items-center gap-4 p-4 bg-white border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300"
      >
        <div className="text-3xl w-12 text-center shrink-0">{service.icon}</div>
        <div>
          <div className="font-heading text-lg font-bold text-primary uppercase group-hover:text-accent transition-colors">
            {service.title}
          </div>
          <div className="text-xs text-gray-500">{service.subtitle}</div>
        </div>
        <span className="ml-auto text-gray-300 group-hover:text-accent transition-colors">→</span>
      </Link>
    );
  }

  return (
    <div className="group bg-white border border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Color bar */}
      <div className="h-1.5 bg-accent" />

      <div className="p-8 flex flex-col flex-1">
        <div className="text-5xl mb-4">{service.icon}</div>
        <div className="text-xs text-accent font-semibold uppercase tracking-widest mb-1">{service.subtitle}</div>
        <h3 className="font-heading text-2xl font-bold uppercase text-primary mb-3">{service.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{service.shortDescription}</p>

        <ul className="space-y-1.5 mb-6">
          {service.features.slice(0, 4).map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-accent mt-0.5 shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>

        <Link
          to={`/services/${service.id}`}
          className="mt-auto inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide hover:text-accent transition-colors group-hover:gap-3"
        >
          Learn More
          <span className="transition-all">→</span>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
