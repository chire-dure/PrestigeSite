import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ALL_SERVICES_LIST } from '../data/servicesData';

interface TreatmentMenuProps {
  onSelectService?: (serviceName: string) => void;
}

export const TreatmentMenu: React.FC<TreatmentMenuProps> = ({ onSelectService }) => {
  return (
    <section id="services-overview" className="py-28 md:py-32 bg-transparent text-[#24211D] border-b border-[#E5D8C3] relative overflow-hidden">
      {/* Subtle Gold Dust Texture Overlays */}
      <div className="gold-dust-section" aria-hidden="true" />
      <div className="gold-dust-corner" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Section Header with Generous Whitespace */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
              Eight Dedicated Disciplines
            </span>
            <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-[1.15]">
              Thoughtful care, individualized for your biology.
            </h2>
            <p className="mt-4 text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
              We approach every discipline with biological preservation, unhurried time reservations, and transparent 3D imaging. Explore each dedicated service page below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/services/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] font-semibold text-xs tracking-[0.2em] uppercase rounded-[2px] transition-all shadow-[0_4px_16px_rgba(197,168,105,0.25)]"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 8 Services Airy Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {ALL_SERVICES_LIST.map((service, idx) => (
            <div 
              key={service.slug}
              className="bg-[#E9DFCC] p-7 sm:p-8 border border-[#DDD4C5] rounded-[2px] flex flex-col justify-between hover:border-[#C5A869] hover:shadow-[0_12px_32px_rgba(36,33,29,0.08)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="gold-dust-card" aria-hidden="true" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-semibold text-[#C5A869] tracking-wider">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#706B62] bg-[#F7F4EE] px-2.5 py-1 border border-[#DDD4C5] rounded-[2px]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-light text-[#24211D] group-hover:text-[#C5A869] transition-colors leading-snug mb-3.5">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#59534A] font-light leading-relaxed mb-8 line-clamp-3">
                    {service.subtitle}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#DDD4C5] flex items-center justify-between">
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#24211D] group-hover:text-[#C5A869] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A869] group-hover:translate-x-1 transition-transform" />
                  </a>

                  {onSelectService && (
                    <button
                      onClick={() => onSelectService(service.appointmentServiceValue)}
                      className="text-[11px] text-[#706B62] hover:text-[#C5A869] uppercase tracking-[0.12em] font-medium transition-colors cursor-pointer"
                    >
                      Quick Book
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote reassurance banner in Champagne Cream */}
        <div className="mt-14 p-6 sm:p-7 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 text-xs text-[#4A453E]">
          <div className="flex items-center gap-3.5">
            <ShieldCheck className="w-5 h-5 text-[#C5A869] shrink-0" />
            <span className="leading-relaxed">Not certain which restorative pathway best matches your anatomy? We evaluate all options during an unhurried initial examination.</span>
          </div>
          <a 
            href="/services/general-dentistry/"
            className="text-[#24211D] hover:text-[#C5A869] font-semibold uppercase tracking-[0.16em] whitespace-nowrap transition-colors"
          >
            Explore General Dentistry &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
