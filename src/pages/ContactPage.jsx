import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import Icon from '../components/Icon';
import siteData from '../data/siteData.json';
import servicesData from '../data/servicesData.json';
import SEO from '../components/SEO';

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
      <SEO
        title="Contact PTC Logistics | Get a Freight Quote"
        description="Contact PTC Logistics for road transport, air freight, sea freight, and import-export shipment support. Request a quote today."
        canonicalPath="/contact"
        keywords="contact logistics company, freight quote India, PTC Logistics contact"
      />
      <PageHero title="Contact Us" subtitle="Get in Touch" breadcrumbs={[{ label: 'Contact' }]} />

      <section className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white text-center">
            {[
              { icon: 'phone', label: 'Call Us', value: company.phone, href: `tel:${company.phone}` },
              { icon: 'mail', label: 'Email Us', value: company.email, href: `mailto:${company.email}` },
              { icon: 'mapPin', label: 'Visit Us', value: 'Virar East, Mumbai', href: '#map' },
              { icon: 'clock', label: 'Working Hours', value: 'Mon-Sat: 9AM - 6PM', href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label}>
                <div className="mb-2 flex justify-center"><Icon name={icon} className="w-8 h-8" /></div>
                <div className="text-xs uppercase tracking-widest text-white/70 mb-1">{label}</div>
                {href ? <a href={href} className="font-semibold hover:text-primary transition-colors text-sm">{value}</a> : <div className="font-semibold text-sm">{value}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white p-5 md:p-10 shadow-sm">
              <div className="section-subtitle">Send a Message</div>
              <h2 className="section-title mb-8">Request a Quote</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 p-8 text-center">
                  <div className="text-green-600 flex justify-center mb-3"><Icon name="checkCircle" className="w-12 h-12" /></div>
                  <h3 className="font-heading text-2xl font-bold text-green-700 uppercase mb-2">Inquiry Received!</h3>
                  <p className="text-green-600 text-sm">Thank you, <strong>{form.name}</strong>! Our team will contact you within 24 hours with a competitive quote.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:'',company:'',email:'',phone:'',service:'',origin:'',destination:'',message:'' }); }} className="mt-5 btn-primary inline-block text-xs">Submit Another Inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">{/* unchanged form fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name="name" required value={form.name} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm" placeholder="Your full name" />
                    <input type="text" name="company" value={form.company} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm" placeholder="Your company name" />
                    <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm" placeholder="your@email.com" />
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm" placeholder="+91 97108 79879" />
                    <select name="service" value={form.service} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm bg-white"><option value="">Select a service</option>{servicesData.map((s) => (<option key={s.id} value={s.id}>{s.title}</option>))}</select>
                    <input type="text" name="origin" value={form.origin} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm" placeholder="City / Port of origin" />
                    <input type="text" name="destination" value={form.destination} onChange={handleChange} className="w-full border border-gray-200 px-4 py-3 text-sm md:col-span-2" placeholder="City / Port / Country of destination" />
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} className="w-full border border-gray-200 px-4 py-3 text-sm resize-none md:col-span-2" placeholder="Describe your cargo..." />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 text-sm text-center">Submit Inquiry</button>
                </form>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary text-white p-5 md:p-7"><h3 className="font-heading text-2xl font-bold uppercase mb-5">Office Address</h3><p className="text-gray-300 leading-relaxed text-sm">{company.address}</p></div>
            <div className="bg-accent p-5 md:p-7 text-white">
              <h3 className="font-heading text-2xl font-bold uppercase mb-3">Emergency?</h3>
              <p className="text-white/80 text-sm mb-4">For urgent shipments, call us directly and we'll arrange express logistics within hours.</p>
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-white text-accent font-bold text-center py-3 text-sm uppercase hover:bg-primary hover:text-white transition-colors"><Icon name="phone" className="w-4 h-4" />Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="h-64 md:h-72 bg-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
          <div className="text-center">
            <div className="text-primary flex justify-center mb-3"><Icon name="mapPin" className="w-12 h-12" /></div>
            <div className="font-heading text-2xl font-bold text-primary uppercase">PTC Logistics Pvt. Ltd.</div>
            <div className="text-gray-600 text-sm mt-1">Virar East, Mumbai, Maharashtra, India</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

