import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import heroImage from '../assets/images/hero_dental_atelier_lounge_1792659237422.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92svh] flex flex-col justify-between bg-[#F7F4EE] bg-alabaster-hero text-[#24211D] overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20 border-b border-[#E5D8C3]">
      {/* Liquid Gold Alabaster Luminous Layer (pointer-events: none) */}
      <div className="gold-shimmer-hero" aria-hidden="true" />

      {/* Main Content Container with Generous Breathing Room */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 w-full my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headlines & Editorial Story (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Kicker with Champagne Gold Accent */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase text-[#706B62]">
              <span className="text-[#C5A869] font-semibold">Est. {CLINIC_INFO.estYear}</span>
              <span aria-hidden="true" className="text-[#C5A869]/40">·</span>
              <span>BGC &amp; Makati Central Business District</span>
              <span aria-hidden="true" className="text-[#C5A869]/40">·</span>
              <span className="text-[#24211D] font-semibold tracking-[0.2em]">Private Suites</span>
            </div>

            {/* Display Headline: Cormorant Garamond with Charcoal and Gold Italic */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5.2rem] font-light leading-[1.08] tracking-[-0.02em] text-[#24211D] text-balance">
              Your smile, <br />
              <em className="font-normal italic text-[#C5A869] pr-3">reconsidered.</em>
            </h1>

            <div className="w-16 h-[1.5px] bg-[#C5A869]" />

            {/* Editorial Lead Paragraph in readable contrast */}
            <p className="text-[#4A453E] text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
              We do not treat teeth in clinical isolation. We think about how you carry yourself in conversation, how you articulate when relaxed, and how you laugh when you forget anyone is watching — then we design from there.
            </p>

            {/* Action Row with Champagne Gold Button & Clean Editorial Link */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] font-semibold text-xs tracking-[0.2em] uppercase rounded-[2px] transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,105,0.25)] hover:shadow-[0_6px_22px_rgba(197,168,105,0.35)] cursor-pointer active:scale-[0.98]"
              >
                Reserve Consultation
              </button>

              <a
                href="#services-overview"
                className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-semibold text-[#24211D] hover:text-[#C5A869] transition-colors group py-3"
              >
                <span>Explore Eight Services</span>
                <ArrowRight className="w-4 h-4 text-[#C5A869] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Reassurance Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#706B62]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                Unhurried 60–90 min appointments
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
                Zero high-pitched drill acoustics
              </span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Architectural Visual Asset (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative gold frame accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C5A869]/25 to-transparent rounded-[2px] -z-10 blur-[1px]" />
              
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2px] overflow-hidden shadow-[0_20px_50px_rgba(36,33,29,0.14)] border border-[#E5D8C3] bg-[#E9DFCC]">
                <img
                  src={heroImage || "/assets/images/hero_dental_atelier_lounge_1792659237422.jpg"}
                  alt="Valence Dental Atelier Lounge Interior"
                  className="w-full h-full object-cover object-center filter saturate-[0.96] contrast-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Bottom Architectural Caption */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white text-xs">
                  <div>
                    <div className="font-serif text-base tracking-wide text-white">The Arrival Lounge</div>
                    <div className="text-[#E9DFCC] text-[10.5px] tracking-[0.16em] uppercase">Travertine, Fluted Oak &amp; Natural Daylight</div>
                  </div>
                  <div className="bg-[#C5A869] text-[#24211D] px-2.5 py-1 text-[10px] uppercase font-semibold tracking-[0.18em] rounded-[2px]">
                    Sensory Suite
                  </div>
                </div>
              </div>

              {/* Discreet floating accreditation note */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white border border-[#E5D8C3] px-4 py-2.5 shadow-md text-left rounded-[2px]">
                <div className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
                <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#24211D]">
                  Private Suites · Level 14 &amp; 21
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Spacious Proof Stats Strip (Unboxed, airy, warm ivory background) */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 w-full mt-16 pt-8 border-t border-[#E5D8C3] relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E5D8C3]">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <div key={stat.label} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-8' : ''}`}>
              <div className="font-serif text-3xl sm:text-4xl text-[#C5A869] font-light mb-1 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#24211D]">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#706B62] mt-0.5 font-light">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
