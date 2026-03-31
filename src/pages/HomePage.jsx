import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import siteData from '../data/siteData.json';
import servicesData from '../data/servicesData.json';
import ServiceCard from '../components/ServiceCard';
import CTABanner from '../components/CTABanner';
import { StatCard, TestimonialCard } from '../components/UIComponents';

const HomePage = () => {
  const { stats, whyUs, testimonials } = siteData;

  return (
    <div>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero-bg diagonal-stripe relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Decorative circles */}
        <div className="absolute -right-32 top-1/2 w-[500px] h-[500px] rounded-full border border-white/5 -translate-y-1/2" />
        <div className="absolute -right-16 top-1/2 w-[350px] h-[350px] rounded-full border border-white/5 -translate-y-1/2" />
        <div className="absolute right-16 top-1/2 w-[200px] h-[200px] rounded-full border border-accent/20 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Trusted Logistics Partner Since 2010
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-black uppercase text-white leading-none mb-4">
              Pan India<br />
              <span className="text-accent">Transport.</span><br />
              Global Logistics.
            </h1>
            <p className="text-gray-300 text-base leading-relaxed max-w-lg mb-8">
              PTC Logistics provides reliable and efficient freight services through Air, Road, and Sea transportation — ensuring safe, timely, and cost-effective delivery across India and worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary py-3.5 px-8 text-sm">
                Get a Free Quote
              </Link>
              <Link to="/services" className="btn-outline py-3.5 px-8 text-sm">
                Our Services
              </Link>
            </div>

            {/* Mode pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { icon: '🚚', label: 'Pan India Road' },
                { icon: '✈️', label: 'Air Freight' },
                { icon: '🚢', label: 'Sea Freight' },
                { icon: '🌐', label: 'Import & Export' },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 border border-white/20">
                  {icon} {label}
                </span>
              ))}
            </div>
          </div>

          {/* Hero info card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 space-y-5">
              <div className="font-heading text-2xl font-bold text-white uppercase">Quick Contact</div>
              <div className="space-y-4">
                {[
                  { label: 'Phone', value: '+91 85303 40676', icon: '📞', href: 'tel:+918530340676' },
                  { label: 'Email', value: 'info@ptclogistics.com', icon: '✉', href: 'mailto:info@ptclogistics.com' },
                  { label: 'Office', value: 'Virar East, Mumbai', icon: '📍', href: '#' },
                  { label: 'Hours', value: 'Mon–Sat: 9AM – 6PM', icon: '🕐', href: '#' },
                ].map(({ label, value, icon, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 group">
                    <span className="text-2xl w-8 text-center">{icon}</span>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-widest">{label}</div>
                      <div className="text-white font-semibold group-hover:text-accent transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <Link to="/contact" className="block bg-accent text-white text-center font-bold uppercase tracking-wider py-3 text-sm hover:bg-accent-dark transition-colors mt-2">
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce">
          <span>Scroll</span>
          <span>↓</span>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">What We Offer</div>
            <h2 className="section-title">Our Logistics Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">
              From Pan India road transport to international air and sea freight, we provide end-to-end logistics solutions for businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-subtitle">Why PTC Logistics</div>
              <h2 className="section-title mb-6">Your Trusted Freight Partner</h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                With 15+ years of experience in the logistics industry, PTC Logistics has built a reputation for reliability, professionalism, and customer-first service across India and international destinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-neutral-light hover:bg-accent/5 transition-colors border-l-2 border-transparent hover:border-accent">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-heading text-base font-bold uppercase text-primary">{item.title}</div>
                      <div className="text-xs text-gray-500 mt-1 leading-relaxed">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-primary p-10 text-white relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent" />
                <div className="relative">
                  <div className="font-heading text-6xl font-black text-white/10 leading-none mb-2">15+</div>
                  <div className="font-heading text-4xl font-black uppercase text-white -mt-8 mb-6">Years of Excellence</div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    Since 2010, PTC Logistics has been serving businesses across India with dedicated freight solutions. Our team of logistics professionals ensures your cargo reaches safely and on time.
                  </p>
                  <div className="space-y-3">
                    {[
                      'ISO Certified Logistics Company',
                      'IATA Registered Freight Forwarder',
                      'Member of FIATA',
                      'Customs Licensed Broker',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm">
                        <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/about" className="inline-block mt-8 border-2 border-accent text-accent font-bold px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-accent hover:text-white transition-all">
                    About Us →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ────────────────────────────────── */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">Industries We Serve</div>
            <h2 className="section-title">Logistics Across Every Sector</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '🏭', label: 'Manufacturing' },
              { icon: '💊', label: 'Pharma' },
              { icon: '🚗', label: 'Automotive' },
              { icon: '📦', label: 'E-Commerce' },
              { icon: '🧵', label: 'Textiles' },
              { icon: '⚙️', label: 'Engineering' },
              { icon: '🥬', label: 'Agriculture' },
              { icon: '🏗️', label: 'Construction' },
              { icon: '💻', label: 'Electronics' },
              { icon: '🥤', label: 'FMCG' },
              { icon: '⚗️', label: 'Chemicals' },
              { icon: '🛒', label: 'Retail' },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-white p-5 text-center hover:shadow-md hover:border-accent border border-transparent transition-all group cursor-pointer">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform inline-block">{icon}</div>
                <div className="font-heading text-sm font-bold uppercase text-primary">{label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/industries" className="btn-primary inline-block">View All Industries</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">Client Feedback</div>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <CTABanner />
    </div>
  );
};

export default HomePage;
