import React, { useState } from 'react';
import { SUITE_SPACES } from '../data/clinicData';
import { Check, VolumeX, Eye } from 'lucide-react';

export const TheSuites: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const activeSpace = SUITE_SPACES[activeTab];

  return (
    <section id="suites" style={{ backgroundColor: '#24211D' }} className="py-28 md:py-32 bg-[#24211D] text-[#F7F4EE] border-b border-[#C5A869]/25 relative overflow-hidden">
      {/* Refined Gold Stardust on Dark Charcoal */}
      <div className="gold-dust-dark" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Section Header with Generous Whitespace */}
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
            Spatial Architecture
          </span>
          <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.15]">
            Designed for acoustic and sensory tranquility.
          </h2>
          <p className="mt-4 text-[#D4CBBF] text-sm sm:text-base font-light leading-relaxed">
            Every material — from the travertine walls that absorb reverberation to the hidden surgical equipment — was selected to replace clinical intimidation with deep physical rest.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex items-center gap-6 border-b border-white/10 pb-5 mb-14 overflow-x-auto scrollbar-none">
          {SUITE_SPACES.map((space, idx) => (
            <button
              key={space.id}
              onClick={() => setActiveTab(idx)}
              className={`pb-4 text-xs uppercase tracking-[0.2em] font-medium transition-all relative whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === idx
                  ? 'text-[#C5A869]'
                  : 'text-[#A69E92] hover:text-white'
              }`}
            >
              <span>0{idx + 1}. {space.title}</span>
              {activeTab === idx && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#C5A869]" />
              )}
            </button>
          ))}
        </div>

        {/* Space Detailed Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Carrier (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-white/10 bg-[#1A1815] shadow-2xl group">
              <img
                src={activeSpace.image}
                alt={activeSpace.title}
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs">
                <div>
                  <div className="font-serif text-lg text-white">{activeSpace.title}</div>
                  <div className="text-[#C5A869] text-[11px] tracking-[0.16em] uppercase">{activeSpace.subtitle}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/20 text-white/90 text-[10px] uppercase tracking-[0.18em] flex items-center gap-1.5 rounded-[2px]">
                  <Eye className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Interactive Suite View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#C5A869]">
                {activeSpace.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-white mt-1.5 mb-4">
                {activeSpace.title}
              </h3>
              <p className="text-[#D4CBBF] text-sm sm:text-base font-light leading-relaxed">
                {activeSpace.description}
              </p>
            </div>

            <div className="border-t border-white/10 pt-6 space-y-3.5">
              <div className="text-xs uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-3">
                Curated Environment Details
              </div>
              {activeSpace.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3 text-xs text-[#E9DFCC]">
                  <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                  </div>
                  <span className="font-light">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-5 bg-[#1A1815] border border-white/10 rounded-[2px] mt-6">
              <div className="flex items-center gap-2 text-xs text-[#C5A869] font-medium uppercase tracking-[0.16em] mb-1.5">
                <VolumeX className="w-4 h-4" />
                <span>Zero Sound Shock</span>
              </div>
              <p className="text-[12px] text-[#A69E92] leading-relaxed font-light">
                Hospital drills hit 85+ decibels. Valence suites operate under acoustic dampers and precision brushless motors so you never experience sudden auditory shock.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/experience/"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] font-semibold text-xs tracking-[0.2em] uppercase rounded-[2px] transition-all shadow-[0_4px_16px_rgba(197,168,105,0.25)]"
              >
                <span>Discover The Complete Experience</span>
                <span className="text-[#24211D]">&rarr;</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
