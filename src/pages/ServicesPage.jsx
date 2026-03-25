import React from 'react';
import PageHero from '../components/PageHero';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import servicesData from '../data/servicesData.json';

const ServicesPage = () => {
  return (
    <div>
      <PageHero
        title="Our Services"
        subtitle="Logistics Solutions"
        breadcrumbs={[{ label: 'Services' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="section-subtitle">What We Offer</div>
          <h2 className="section-title mb-4">Comprehensive Freight & Logistics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
            PTC Logistics offers a full suite of freight and logistics services — from Pan India road transport to international air and sea freight. We specialize in providing tailored solutions for businesses of all sizes, ensuring your cargo moves safely, efficiently, and on time.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">How We Work</div>
            <h2 className="section-title">Our Logistics Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
            {[
              { step: '01', title: 'Get a Quote', desc: 'Contact us with your cargo details — type, weight, origin, and destination. We provide a fast, competitive quote.', icon: '📋' },
              { step: '02', title: 'Booking & Planning', desc: 'Our logistics team plans the most efficient route and mode of transport for your specific requirements.', icon: '📅' },
              { step: '03', title: 'Pickup & Handling', desc: 'We arrange professional cargo pickup, proper packing, documentation, and loading with utmost care.', icon: '📦' },
              { step: '04', title: 'Delivery & POD', desc: 'Your cargo is delivered on time. Proof of delivery is shared electronically for your records.', icon: '✅' },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col items-center text-center p-8">
                {/* connector line */}
                {i < 3 && <div className="hidden md:block absolute right-0 top-1/3 w-1/2 h-0.5 bg-gray-200" />}
                <div className="w-16 h-16 rounded-full bg-primary text-white font-heading text-2xl font-black flex items-center justify-center mb-4 relative z-10">
                  {item.step}
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
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
