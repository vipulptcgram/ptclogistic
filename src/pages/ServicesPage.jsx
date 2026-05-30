import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import Icon from '../components/Icon';
import servicesData from '../data/servicesData.json';
import SEO from '../components/SEO';

const processSteps = [
  { step: '01', title: 'Get a Quote', desc: 'Contact us with your cargo details - type, weight, origin, and destination. We provide a fast, competitive quote.', icon: 'clipboard' },
  { step: '02', title: 'Booking & Planning', desc: 'Our logistics team plans the most efficient route and mode of transport for your specific requirements.', icon: 'calendar' },
  { step: '03', title: 'Pickup & Handling', desc: 'We arrange professional cargo pickup, proper packing, documentation, and loading with utmost care.', icon: 'package' },
  { step: '04', title: 'Delivery & POD', desc: 'Your cargo is delivered on time. Proof of delivery is shared electronically for your records.', icon: 'checkCircle' },
];

const ServicesPage = () => {
  return (
    <div>
      <SEO
        title="Logistics Services | Road, Air, Sea Freight & Import Export"
        description="Explore PTC Logistics services including Pan India road transport, air freight, sea freight, and import-export logistics support."
        canonicalPath="/services"
        keywords="logistics services India, road transport services, air freight services, sea freight services, import export logistics"
      />
      <PageHero title="Our Services" subtitle="Logistics Solutions" breadcrumbs={[{ label: 'Services' }]} />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="section-subtitle">What We Offer</div>
          <h2 className="section-title mb-4">Comprehensive Freight & Logistics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
            PTC Logistics offers a full suite of freight and logistics services from Pan India road transport to international air and sea freight.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">How We Work</div>
            <h2 className="section-title">Our Logistics Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-0 relative">
            {processSteps.map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-5 md:p-8">
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/3 w-1/2 h-0.5 bg-gray-200" />}
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading text-2xl font-black flex items-center justify-center mb-4 relative z-10">
                  {item.step}
                </div>
                <div className="text-primary mb-3"><Icon name={item.icon} className="w-8 h-8" /></div>
                <h3 className="font-heading text-xl font-bold uppercase text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default ServicesPage;
