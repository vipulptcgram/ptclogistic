import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTABanner from '../components/CTABanner';
import siteData from '../data/siteData.json';
import { StatCard } from '../components/UIComponents';

const milestones = [
  { year: '2010', title: 'Founded', desc: 'PTC Logistics established in Mumbai with a vision to transform freight logistics in India.' },
  { year: '2013', title: 'Pan India Expansion', desc: 'Extended road transport network to cover 100+ cities across India.' },
  { year: '2016', title: 'Air Freight Launch', desc: 'Launched international air freight services connecting India to global markets.' },
  { year: '2018', title: 'Sea Freight Division', desc: 'Established sea freight division for FCL and LCL international shipping.' },
  { year: '2021', title: 'ISO Certification', desc: 'Achieved ISO 9001:2015 certification for quality management in logistics.' },
  { year: '2024', title: '500+ Clients', desc: 'Crossed the milestone of serving 500+ satisfied clients across India and globally.' },
];

const team = [
  { name: 'Pradeep T. Chavan', title: 'Managing Director', initials: 'PC' },
  { name: 'Rakesh Sharma', title: 'Head of Operations', initials: 'RS' },
  { name: 'Sunita Mehta', title: 'General Manager – Freight', initials: 'SM' },
  { name: 'Arvind Patel', title: 'Head of International Logistics', initials: 'AP' },
];

const AboutPage = () => {
  const { stats } = siteData;

  return (
    <div>
      <PageHero
        title="About PTC Logistics"
        subtitle="Our Story"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ── INTRO ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="section-subtitle">Who We Are</div>
            <h2 className="section-title mb-6">Delivering Trust Through Logistics</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              PTC Logistics Pvt. Ltd. is a leading freight and logistics company headquartered in Mumbai, India. Founded in 2010, we have grown from a regional road transport operator to a full-service logistics provider offering Air, Road, and Sea freight solutions across India and internationally.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm">
              Our mission is simple: to provide reliable, efficient, and cost-effective logistics solutions that help our clients grow their businesses. With a team of dedicated logistics professionals and a robust technology-driven approach, we ensure every shipment is tracked, managed, and delivered on time.
            </p>
            <div className="space-y-3">
              {[
                'ISO 9001:2015 Certified Company',
                'IATA Registered Freight Forwarder',
                'Member of FIATA & ACAAI',
                'Customs Licensed Clearing Agent',
                'Serving 500+ Clients Pan India & Globally',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-accent rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary p-8 text-white">
              <div className="font-heading text-5xl font-black text-accent">15+</div>
              <div className="font-heading text-xl font-bold uppercase mt-1">Years Experience</div>
              <p className="text-gray-300 text-xs mt-2">Trusted logistics expertise since 2010</p>
            </div>
            <div className="bg-accent p-8 text-white mt-6">
              <div className="font-heading text-5xl font-black text-white">200+</div>
              <div className="font-heading text-xl font-bold uppercase mt-1">Cities Covered</div>
              <p className="text-white/70 text-xs mt-2">Pan India road transport network</p>
            </div>
            <div className="bg-neutral-light p-8 -mt-6">
              <div className="font-heading text-5xl font-black text-primary">500+</div>
              <div className="font-heading text-xl font-bold uppercase mt-1 text-primary">Happy Clients</div>
              <p className="text-gray-500 text-xs mt-2">Building long-term partnerships</p>
            </div>
            <div className="bg-neutral-mid p-8 text-white">
              <div className="font-heading text-5xl font-black text-accent">5000+</div>
              <div className="font-heading text-xl font-bold uppercase mt-1">Shipments</div>
              <p className="text-gray-300 text-xs mt-2">Delivered safely and on time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────── */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Our Mission',
                icon: '🎯',
                text: 'To provide reliable, safe, and efficient logistics solutions that help businesses across India and globally move their cargo seamlessly, while continuously improving our service quality and expanding our network.',
              },
              {
                title: 'Our Vision',
                icon: '🔭',
                text: 'To be the most trusted and preferred logistics partner for businesses of all sizes across India and the world, known for our reliability, innovation, and commitment to excellence in freight forwarding.',
              },
              {
                title: 'Our Values',
                icon: '💎',
                text: 'Integrity in every transaction, reliability in every delivery, respect for our clients and partners, and continuous innovation to stay ahead in the dynamic logistics industry.',
              },
            ].map(({ title, icon, text }) => (
              <div key={title} className="bg-white p-8 border-t-4 border-accent hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="font-heading text-2xl font-bold uppercase text-primary mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">Our Journey</div>
            <h2 className="section-title">Key Milestones</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`md:flex gap-8 items-start ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 border border-gray-100 hover:border-accent hover:shadow-md transition-all">
                      <div className="font-heading text-3xl font-black text-accent">{m.year}</div>
                      <div className="font-heading text-xl font-bold uppercase text-primary mt-1">{m.title}</div>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-5 h-5 rounded-full bg-accent border-4 border-white shadow mt-8" />
                  </div>
                  <div className="md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────── */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="section-subtitle">Leadership</div>
            <h2 className="section-title">Our Core Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white p-8 text-center hover:shadow-lg transition-shadow group">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-heading text-2xl font-bold mx-auto mb-4 group-hover:bg-accent transition-colors">
                  {member.initials}
                </div>
                <h3 className="font-heading text-xl font-bold uppercase text-primary">{member.name}</h3>
                <p className="text-accent text-xs font-semibold uppercase tracking-widest mt-1">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────── */}
      <section className="bg-primary py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
};

export default AboutPage;
