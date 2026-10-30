import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/clinicData';
import { Quote, ChevronDown, ChevronUp } from 'lucide-react';

export const TestimonialsPress: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const pressOutlets = [
    { name: "TATLER PHILIPPINES", quote: "The architectural dental sanctuary redefining healthcare luxury." },
    { name: "MEGA MAGAZINE", quote: "Where bespoke craftsmanship meets calm medical rigor." },
    { name: "SPOT.PH", quote: "Say goodbye to clinical anxiety in this serene BGC and Makati haven." },
    { name: "PHILIPPINE DAILY INQUIRER", quote: "Elevating dental wellness into an unhurried lifestyle ritual." }
  ];

  return (
    <section id="stories" className="py-28 md:py-32 bg-transparent text-[#24211D] relative overflow-hidden">
      {/* Subtle Gold Dust Texture Overlays */}
      <div className="gold-dust-section" aria-hidden="true" />
      <div className="gold-dust-corner" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Editorial Press Recognition Strip */}
        <div className="border-b border-[#E5D8C3] pb-14 mb-20">
          <div className="text-center mb-8">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#706B62]">
              As Documented In
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {pressOutlets.map((outlet) => (
              <div key={outlet.name} className="p-4 rounded-[2px] bg-[#E9DFCC]/50 border border-[#DDD4C5] group">
                <div className="font-serif text-base tracking-[0.16em] text-[#24211D] font-medium">
                  {outlet.name}
                </div>
                <p className="text-[11px] text-[#59534A] italic mt-1.5 line-clamp-2">
                  “{outlet.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Patient Reflections Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
            Patient Experiences &amp; Reflections
          </span>
          <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-4" />
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight">
            Comfort before conversion.
          </h2>
          <p className="mt-4 text-[#4A453E] text-sm sm:text-base font-light">
            Reflections from patients who previously experienced intense dental intimidation before finding quiet reassurance at Valence.
          </p>
        </div>

        {/* Testimonials Cards in Champagne Cream */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-24">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id} 
              className="bg-[#E9DFCC] p-7 sm:p-9 border border-[#DDD4C5] rounded-[2px] shadow-xs flex flex-col justify-between hover:border-[#C5A869] transition-all relative overflow-hidden group"
            >
              <div className="card-marble-cream" aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <Quote className="w-5 h-5 text-[#C5A869]" />
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#706B62] font-mono">
                      {t.timeframe}
                    </span>
                  </div>
                  <p className="font-serif italic text-base sm:text-lg text-[#24211D] leading-relaxed mb-6 font-light">
                    “{t.quote}”
                  </p>
                </div>

                <div className="border-t border-[#DDD4C5] pt-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#24211D]">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#706B62] mt-0.5 font-light">
                    {t.location}
                  </div>
                  <div className="text-[11px] text-[#C5A869] font-medium tracking-wide mt-1.5">
                    {t.treatment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Answered Questions Accordion */}
        <div className="max-w-3xl mx-auto pt-4">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
              Patient Guidance &amp; Clarifications
            </span>
            <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-4" />
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-sm sm:text-base text-[#24211D]">
                      {faq.q}
                    </span>
                    <span className="text-[#C5A869] shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#4A453E] font-light leading-relaxed border-t border-[#DDD4C5] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
