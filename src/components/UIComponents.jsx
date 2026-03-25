import React, { useEffect, useRef, useState } from 'react';

export const StatCard = ({ stat, delay = 0 }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-2">{stat.icon}</div>
      <div className="font-heading text-4xl md:text-5xl font-black text-white">{stat.value}</div>
      <div className="text-accent text-sm font-semibold uppercase tracking-widest mt-1">{stat.label}</div>
    </div>
  );
};

export const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i} className="text-accent text-lg">★</span>
        ))}
      </div>
      <p className="text-gray-600 italic leading-relaxed mb-6 text-sm">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-heading text-lg">
          {testimonial.name[0]}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export const SectionWrapper = ({ children, className = '', id = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
    >
      {children}
    </section>
  );
};

export default { StatCard, TestimonialCard, SectionWrapper };
