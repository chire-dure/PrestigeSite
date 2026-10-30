import React from 'react';
import { Award, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react';
import leadDentistImage from '../assets/images/dr_lead_dentist_portrait_1792659237679.jpg';

export const DentistProfile: React.FC = () => {
  return (
    <section id="dentist" className="py-28 md:py-32 bg-transparent text-[#24211D] border-b border-[#E5D8C3] relative overflow-hidden">
      {/* Subtle Gold Dust Texture Overlays */}
      <div className="gold-dust-section" aria-hidden="true" />
      <div className="gold-dust-corner" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Portrait Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl bg-[#24211D] border border-[#E5D8C3]">
              <img
                src={leadDentistImage || "/assets/images/dr_lead_dentist_portrait_1792659237679.jpg"}
                alt="Dr. Sarah Jenkins, Lead Aesthetic Dentist"
                className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="font-serif text-2xl font-light">Dr. Sarah Jenkins, DMD, MSc</div>
                <div className="text-[#C5A869] text-xs uppercase tracking-[0.2em] font-medium mt-1">
                  Founder &amp; Clinical Director
                </div>
              </div>
            </div>

            {/* Academic badge card in Champagne Cream */}
            <div className="hidden sm:flex items-center gap-3.5 absolute -bottom-6 -right-4 bg-[#E9DFCC] border border-[#DDD4C5] px-5 py-3.5 shadow-lg rounded-[2px]">
              <GraduationCap className="w-5 h-5 text-[#C5A869]" />
              <div className="text-left">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24211D]">
                  MSc Restorative Dentistry
                </div>
                <div className="text-[10px] text-[#706B62]">Columbia University, New York</div>
              </div>
            </div>
          </div>

          {/* Clinician Bio & Treatment Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                The Lead Clinician
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-tight mt-1">
                Dr. Sarah Jenkins
              </h2>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
            </div>

            <p className="text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
              Dr. Sarah began her dental journey after witnessing firsthand how many friends and colleagues avoided preventative care purely out of intimidation and fear of cold, rushed dental offices. She founded Valence to prove that clinical mastery and deep hospitality could exist in the same space.
            </p>

            <p className="text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
              Her restorative philosophy centers on <em>biological preservation</em>. Rather than aggressively preparing or grinding teeth down for standard artificial crowns, she champions minimally-invasive adhesive protocols that preserve natural healthy dentin, optimizing longevity while maintaining facial harmony.
            </p>

            {/* Credentials Grid in Champagne Cream */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5D8C3]">
              <div className="flex items-start gap-3.5 p-3 rounded-[2px] bg-[#E9DFCC]/50 border border-[#DDD4C5]">
                <div className="p-2 bg-[#E9DFCC] rounded-full text-[#C5A869] shrink-0 border border-[#DDD4C5]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                    Columbia University
                  </h4>
                  <p className="text-[11px] text-[#59534A] mt-0.5 font-light">
                    MSc in Restorative &amp; Aesthetic Dentistry
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-[2px] bg-[#E9DFCC]/50 border border-[#DDD4C5]">
                <div className="p-2 bg-[#E9DFCC] rounded-full text-[#C5A869] shrink-0 border border-[#DDD4C5]">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                    UP Manila
                  </h4>
                  <p className="text-[11px] text-[#59534A] mt-0.5 font-light">
                    Doctor of Dental Medicine (DMD), Magna Cum Laude
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-[2px] bg-[#E9DFCC]/50 border border-[#DDD4C5]">
                <div className="p-2 bg-[#E9DFCC] rounded-full text-[#C5A869] shrink-0 border border-[#DDD4C5]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                    AACD Fellow
                  </h4>
                  <p className="text-[11px] text-[#59534A] mt-0.5 font-light">
                    American Academy of Cosmetic Dentistry Active Fellow
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-[2px] bg-[#E9DFCC]/50 border border-[#DDD4C5]">
                <div className="p-2 bg-[#E9DFCC] rounded-full text-[#C5A869] shrink-0 border border-[#DDD4C5]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                    ITI Member
                  </h4>
                  <p className="text-[11px] text-[#59534A] mt-0.5 font-light">
                    International Team for Implantology (Switzerland)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Quote Note in Champagne Cream Calacatta Marble */}
            <div className="p-6 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] text-xs text-[#4A453E] italic leading-relaxed shadow-xs font-light relative overflow-hidden">
              <div className="card-marble-cream" aria-hidden="true" />
              <div className="relative z-10">
                “During your visit, we pull up your 3D digital scans on the screen and examine every finding together. You are never passive here; you remain the principal architect of your health.”
              </div>
            </div>

            <div className="pt-2">
              <a
                href="/about/#founder"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#24211D] hover:text-[#C5A869] transition-colors"
              >
                <span>Read Dr. Sarah's Full Clinical Manifesto &amp; Story</span>
                <span className="text-[#C5A869]">&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
