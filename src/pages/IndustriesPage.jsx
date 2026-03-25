import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';

const industries = [
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'We support manufacturing units with reliable raw material inbound logistics and finished goods outbound distribution across India and globally.',
    services: ['FTL Road Transport', 'Factory to Warehouse', 'Industrial Cargo', 'International Freight'],
  },
  {
    icon: '💊',
    title: 'Pharmaceuticals',
    desc: 'Temperature-sensitive pharmaceutical cargo handled with care. Compliant with GDP guidelines for safe drug transport across domestic and international routes.',
    services: ['Cold Chain Logistics', 'Air Freight', 'Regulatory Compliance', 'Express Delivery'],
  },
  {
    icon: '🚗',
    title: 'Automotive',
    desc: 'Dedicated solutions for automotive OEMs, Tier-1, and Tier-2 suppliers. Just-in-time delivery, cross-docking, and multi-modal transport for auto parts.',
    services: ['JIT Delivery', 'Part Load (LTL)', 'FTL Transport', 'Port Handling'],
  },
  {
    icon: '📦',
    title: 'E-Commerce',
    desc: 'Fast-paced e-commerce logistics with last-mile delivery, returns management, and fulfillment center connectivity across major Indian cities.',
    services: ['Last Mile Delivery', 'Reverse Logistics', 'Express Air Cargo', 'Pan India Road'],
  },
  {
    icon: '🧵',
    title: 'Textiles & Apparel',
    desc: 'Export and import freight solutions for garment manufacturers and textile exporters connecting to global fashion markets via air and sea.',
    services: ['Sea Freight Export', 'Air Freight', 'Port Documentation', 'LCL/FCL Shipping'],
  },
  {
    icon: '⚙️',
    title: 'Engineering & Capital Goods',
    desc: 'Heavy machinery, plant equipment, and capital goods transported with specialized vehicles and skilled handling professionals.',
    services: ['ODC Transport', 'Heavy Lift', 'Project Cargo', 'Port Handling'],
  },
  {
    icon: '🥬',
    title: 'Agriculture & Food',
    desc: 'Perishable and non-perishable agri-produce transported with temperature control and food-grade vehicles ensuring freshness.',
    services: ['Reefer Transport', 'Cold Chain', 'Export Cargo', 'Air Freight'],
  },
  {
    icon: '🏗️',
    title: 'Construction & Infrastructure',
    desc: 'Bulk construction materials, steel, cement, and equipment moved efficiently to project sites across India with dedicated vehicles.',
    services: ['Bulk Transport', 'FTL Road', 'Steel Transport', 'Dedicated Vehicles'],
  },
  {
    icon: '💻',
    title: 'Electronics & Technology',
    desc: 'High-value electronics and IT equipment transported securely with anti-static packaging, express air freight, and track-and-trace.',
    services: ['Air Freight', 'Secure Packaging', 'Express Delivery', 'Insurance Support'],
  },
  {
    icon: '🥤',
    title: 'FMCG',
    desc: 'High-volume, time-sensitive FMCG distribution via road transport with multi-point delivery, secondary logistics, and stockist management.',
    services: ['Pan India Road', 'LTL/FTL', 'Multi-drop Delivery', 'Warehouse Connect'],
  },
  {
    icon: '⚗️',
    title: 'Chemicals',
    desc: 'Safe and compliant transport of hazardous and non-hazardous chemicals with trained drivers, proper documentation, and tanker solutions.',
    services: ['Hazmat Transport', 'Tanker Vehicles', 'Compliance Docs', 'Sea Freight'],
  },
  {
    icon: '🛒',
    title: 'Retail & Consumer Goods',
    desc: 'Retail distribution logistics connecting manufacturers to distributors and retail stores across India with flexible part-load services.',
    services: ['LTL Delivery', 'Retail Distribution', 'Pan India Coverage', 'Returns Handling'],
  },
];

const IndustriesPage = () => {
  return (
    <div>
      <PageHero
        title="Industries We Serve"
        subtitle="Sector Expertise"
        breadcrumbs={[{ label: 'Industries' }]}
      />

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="section-subtitle">Our Expertise Across Sectors</div>
          <h2 className="section-title mb-4">Logistics for Every Industry</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm leading-relaxed">
            PTC Logistics brings deep sector-specific expertise to every client engagement. From manufacturing and pharmaceuticals to e-commerce and agriculture, we understand the unique logistics challenges of each industry and deliver tailored solutions.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="pb-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white p-7 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform inline-block">{ind.icon}</span>
                  <div>
                    <h3 className="font-heading text-2xl font-bold uppercase text-primary">{ind.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.services.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-semibold px-2.5 py-1 bg-neutral-light text-primary border border-gray-200 group-hover:border-accent/50"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why specialized */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-accent font-semibold uppercase tracking-widest text-sm mb-3">Specialized Expertise</div>
              <h2 className="font-heading text-4xl md:text-5xl font-black uppercase leading-tight mb-6">
                Industry-Specific Logistics That Delivers
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Every industry has unique logistics requirements. PTC Logistics invests in industry-specific training, equipment, and processes to ensure your cargo is handled by experts who understand your sector's demands and compliance requirements.
              </p>
              <Link to="/contact" className="btn-primary inline-block">Talk to Our Experts</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🛡️', title: 'Compliance', desc: 'Industry-specific regulatory compliance and documentation' },
                { icon: '⚡', title: 'Speed', desc: 'Express solutions for time-critical industries' },
                { icon: '🌡️', title: 'Cold Chain', desc: 'Temperature-controlled transport for sensitive cargo' },
                { icon: '📊', title: 'Analytics', desc: 'Data-driven insights for supply chain optimization' },
              ].map((item) => (
                <div key={item.title} className="bg-white/10 p-5 border border-white/20 hover:bg-white/20 transition-colors">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-heading text-lg font-bold uppercase text-accent">{item.title}</div>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default IndustriesPage;
