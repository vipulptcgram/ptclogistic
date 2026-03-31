import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/servicesData.json';

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const service = servicesData.find((s) => s.id === serviceId);
  const others = servicesData.filter((s) => s.id !== serviceId);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <div>
      <PageHero
        title={service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      />

      {/* ── Overview ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="text-6xl mb-4">{service.icon}</div>
            <div className="section-subtitle">{service.subtitle}</div>
            <h2 className="section-title mb-6">{service.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-sm">{service.heroDescription}</p>

            {/* Features grid */}
            <div className="mb-10">
              <h3 className="font-heading text-2xl font-bold uppercase text-primary mb-5">Service Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-neutral-light hover:bg-accent/5 transition-colors">
                    <span className="text-accent font-bold shrink-0 mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-heading text-2xl font-bold uppercase text-primary mb-5">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="border border-gray-100 p-5 hover:border-accent hover:shadow-md transition-all">
                    <div className="font-heading text-lg font-bold uppercase text-primary mb-1">{b.title}</div>
                    <p className="text-gray-600 text-xs leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Inquiry */}
            <div className="bg-primary p-7 text-white">
              <h3 className="font-heading text-2xl font-bold uppercase mb-4">Quick Inquiry</h3>
              <p className="text-gray-300 text-sm mb-5">Get a competitive quote for your {service.title.toLowerCase()} requirement.</p>
              <Link to="/contact" className="block bg-accent text-white text-center font-bold uppercase tracking-wider py-3 text-sm hover:bg-accent-dark transition-colors mb-3">
                Request a Quote
              </Link>
              <a href="tel:+919876543210" className="block border border-white/30 text-white text-center font-bold uppercase tracking-wider py-3 text-sm hover:bg-white/10 transition-colors">
                📞 Call Us Now
              </a>
            </div>

            {/* Industries */}
            <div className="bg-neutral-light p-7">
              <h3 className="font-heading text-xl font-bold uppercase text-primary mb-4">Industries Served</h3>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind) => (
                  <span key={ind} className="bg-white border border-gray-200 text-gray-700 text-xs font-semibold px-3 py-1.5 hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="bg-white border border-gray-100 p-7">
              <h3 className="font-heading text-xl font-bold uppercase text-primary mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex gap-3">
                  <span className="text-accent">📞</span>
                  <a href="tel:+919710879879" className="hover:text-accent">+91 97108 79879</a>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent">✉</span>
                  <a href="mailto:info@ptclogistics.com" className="hover:text-accent">info@ptclogistics.com</a>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent">🕐</span>
                  <span>Mon–Sat: 9 AM – 6 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Services ────────────────────────── */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="section-subtitle">Explore More</div>
            <h2 className="section-title">Other Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default ServiceDetailPage;
