import React from 'react';
import { Check } from 'lucide-react';
import operatoryImage from '../assets/images/dental_treatment_suite_1792659238509.jpg';

export const PhilosophyStory: React.FC = () => {
  return (
    <section id="philosophy" className="pt-32 pb-24 bg-transparent text-[#24211D] relative overflow-hidden border-b border-[#E5D8C3]">
      {/* Subtle Section Gold Dust */}
      <div className="gold-dust-section" aria-hidden="true" />
      <div className="gold-dust-corner-bottom" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Centered Editorial Prologue with Generous Whitespace */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
            The Atelier Manifesto
          </span>
          <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-6" />
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#24211D] tracking-tight leading-[1.15]">
            Why we founded Valence.
          </h2>
          <p className="mt-8 text-[#4A453E] text-base sm:text-lg font-light leading-relaxed">
            Most dental visits in modern cities feel like hurried transactions — sterile waiting rooms, sudden diagnoses delivered over a tilted chair, and prescriptions made without conversation. We established Valence on a single conviction: clinical precision and deeply respectful hospitality are not opposites. They belong together.
          </p>
        </div>

        {/* Side-by-Side Asymmetric Feature: The Standard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-[0_20px_50px_rgba(36,33,29,0.12)] border border-[#E5D8C3] bg-[#E9DFCC]">
              <img
                src={operatoryImage || "/assets/images/dental_treatment_suite_1792659238509.jpg"}
                alt="Valence Operatory Treatment Suite"
                className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.98]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <div>
                  <div className="font-serif text-base tracking-wide">The Operatory Suite · Skyline View</div>
                  <div className="text-[#E9DFCC] text-[11px] tracking-[0.16em] uppercase">Level 14, One Bonifacio High Street</div>
                </div>
                <div className="bg-[#C5A869] text-[#24211D] px-3 py-1 font-semibold text-[10px] uppercase tracking-[0.2em] rounded-[2px]">
                  Acoustic Sanctuary
                </div>
              </div>
            </div>
            
            {/* Subtle floating architectural caption card in Champagne Cream Calacatta Marble */}
            <div className="hidden sm:block absolute -bottom-7 -right-5 max-w-xs bg-[#E9DFCC] border border-[#DDD4C5] p-5 shadow-lg text-left rounded-[2px] overflow-hidden">
              <div className="card-marble-cream" aria-hidden="true" />
              <div className="relative z-10">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#24211D] font-semibold mb-1">
                  Zero High-Pitched Drills
                </div>
                <p className="text-xs text-[#59534A] leading-relaxed font-light">
                  Equipped with custom Swiss electric handpieces running under 50 decibels — as quiet as soft ambient room frequencies.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Content (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#C5A869]">
              The Clinical Standard
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] leading-tight">
              One standard. <br />
              <em className="font-normal italic text-[#C5A869]">Every single visit.</em>
            </h3>
            <div className="w-12 h-[1.5px] bg-[#C5A869]" />
            <p className="text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
              You will never encounter an assembly line here. Every appointment is booked with generous buffer time so our clinicians never hurry your questions, rush diagnostic imaging, or force an anesthetic to take effect before you are completely numb and comfortable.
            </p>
            <p className="text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
              From hospital-grade class-B autoclave sterilization to sub-millimeter 3D CBCT digital imaging, the environment was designed so that you remain the informed author of your own smile.
            </p>

            <div className="pt-4 space-y-3.5">
              {[
                "60–90 minutes reserved per patient visit",
                "Digital mockups and scans reviewed together before any treatment",
                "Non-invasive biomimetic techniques preserving natural tooth roots",
                "Personalized sensory controls (lighting, acoustic ambience, room climate)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs text-[#24211D]">
                  <div className="w-4 h-4 rounded-full bg-[#E9DFCC] flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                  </div>
                  <span className="font-light">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6 flex items-center gap-4">
              <a
                href="/about/"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#E9DFCC] border border-[#C5A869] text-[#24211D] hover:bg-[#C5A869] font-semibold text-xs tracking-[0.2em] uppercase rounded-[2px] transition-all shadow-xs"
              >
                <span>Read Our Full Atelier Story</span>
                <span className="text-[#C5A869] group-hover:text-[#24211D]">&rarr;</span>
              </a>
            </div>
          </div>

        </div>

        {/* Pullquote Anchor Break */}
        <div className="mt-20 pt-14 pb-4 text-center max-w-3xl mx-auto relative">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#C5A869]/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869]" />
            <span className="w-12 h-[1px] bg-[#C5A869]/50" />
          </div>

          <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-[2.1rem] text-[#24211D] font-light leading-relaxed">
            “Dentistry is subtle architecture. When our work is at its finest, no one notices the intervention — they simply see your calm assurance.”
          </blockquote>
          <div className="mt-6 text-xs uppercase tracking-[0.24em] text-[#C5A869] font-medium">
            — Dr. Sarah Jenkins, DMD, MSc · Clinical Director
          </div>
          <div className="mt-4">
            <a href="/about/#founder" className="text-xs uppercase tracking-[0.18em] text-[#706B62] hover:text-[#C5A869] transition-colors underline underline-offset-4">
              View Clinician Credentials &amp; Background &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
