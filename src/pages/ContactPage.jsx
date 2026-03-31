import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import siteData from '../data/siteData.json';
import servicesData from '../data/servicesData.json';

const ContactPage = () => {
  const { company } = siteData;
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in Touch"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact info strip */}
      <section className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
            {[
              { icon: '📞', label: 'Call Us', value: company.phone, href: `tel:${company.phone}` },
              { icon: '✉', label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
              { icon: '📍', label: 'Visit Us', value: 'Virar East, Mumbai', href: '#map' },
              { icon: '🕐', label: 'Working Hours', value: 'Mon–Sat: 9AM – 6PM', href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label}>
                <div className="text-3xl mb-2">{icon}</div>
                <div className="text-xs uppercase tracking-widest text-white/70 mb-1">{label}</div>
                {href ? (
                  <a href={href} className="font-semibold hover:text-primary transition-colors text-sm">{value}</a>
                ) : (
                  <div className="font-semibold text-sm">{value}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 shadow-sm">
              <div className="section-subtitle">Send a Message</div>
              <h2 className="section-title mb-8">Request a Quote</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <div className="text-5xl mb-3">✅</div>
                  <h3 className="font-heading text-2xl font-bold text-green-700 uppercase mb-2">Inquiry Received!</h3>
                  <p className="text-green-600 text-sm">Thank you, <strong>{form.name}</strong>! Our team will contact you within 24 hours with a competitive quote.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',service:'',origin:'',destination:'',message:'' }); }}
                    className="mt-5 btn-primary inline-block text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Company Name</label>
                      <input
                        type="text" name="company" value={form.company} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Phone Number *</label>
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+91 97108 79879"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Service Required</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                      >
                        <option value="">Select a service</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Origin</label>
                      <input
                        type="text" name="origin" value={form.origin} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="City / Port of origin"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Destination</label>
                      <input
                        type="text" name="destination" value={form.destination} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="City / Port / Country of destination"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1.5">Cargo Details / Message</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={5}
                        className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Describe your cargo, weight, dimensions, and any special requirements..."
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-sm text-center">
                    Submit Inquiry →
                  </button>
                  <p className="text-xs text-gray-400 text-center">We will respond within 24 business hours.</p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-primary text-white p-7">
              <h3 className="font-heading text-2xl font-bold uppercase mb-5">Office Address</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-accent font-semibold uppercase tracking-wide text-xs mb-1">Registered Office</div>
                  <p className="text-gray-300 leading-relaxed">{company.address}</p>
                </div>
                <div>
                  {/* <div className="text-accent font-semibold uppercase tracking-wide text-xs mb-1">GST No.</div> */}
                  {/* <p className="text-gray-300">{company.gst}</p> */}
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 p-7">
              <h3 className="font-heading text-xl font-bold uppercase text-primary mb-4">Our Services</h3>
              <ul className="space-y-2">
                {servicesData.map((s) => (
                  <li key={s.id} className="flex items-center gap-2 text-sm text-gray-700 hover:text-accent transition-colors cursor-pointer">
                    <span className="text-accent text-xs">▶</span> {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent p-7 text-white">
              <h3 className="font-heading text-2xl font-bold uppercase mb-3">Emergency?</h3>
              <p className="text-white/80 text-sm mb-4">For urgent shipments, call us directly and we'll arrange express logistics within hours.</p>
              <a href="tel:+919876543210" className="block bg-white text-accent font-bold text-center py-3 text-sm uppercase hover:bg-primary hover:text-white transition-colors">
                📞 Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section id="map" className="h-72 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
          <div className="text-center">
            <div className="text-5xl mb-3">📍</div>
            <div className="font-heading text-2xl font-bold text-primary uppercase">PTC Logistics Pvt. Ltd.</div>
            <div className="text-gray-600 text-sm mt-1">Virar East, Mumbai, Maharashtra, India</div>
            <a
              href="https://maps.google.com/?q=Virar+East+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 btn-primary inline-block text-xs"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
