import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingSection } from '../components/BookingSection';
import { FloatingConcierge } from '../components/FloatingConcierge';
import { ALL_SERVICES_LIST } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';

export const ServicesDirectoryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState('Comprehensive Diagnostic Consultation');

  const categories = ['All', 'Preventative', 'Restorative', 'Aesthetic & Orthodontics'];

  const filteredServices = ALL_SERVICES_LIST.filter(s => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Preventative') {
      return s.slug === 'general-dentistry' || s.slug === 'teeth-cleaning';
    }
    if (selectedCategory === 'Restorative') {
      return (
        s.slug === 'dental-fillings' ||
        s.slug === 'root-canal-treatment' ||
        s.slug === 'crowns-bridges' ||
        s.slug === 'tooth-extraction'
      );
    }
    if (selectedCategory === 'Aesthetic & Orthodontics') {
      return s.slug === 'braces-clear-aligners' || s.slug === 'cosmetic-dentistry';
    }
    return true;
  });

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] bg-ivory-gold-dust text-[#24211D] font-sans selection:bg-[#C5A869] selection:text-[#24211D]">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="pt-20">
        
        {/* Editorial Directory Header */}
        <section className="py-28 md:py-36 border-b border-[#E9DFCC] relative bg-alabaster-hero overflow-hidden">
          <div className="gold-shimmer-hero" aria-hidden="true" />
          <div className="gold-dust-section" aria-hidden="true" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#706B62] mb-10">
              <a href="/" className="hover:text-[#C5A869] transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C5A869] font-medium">Services Directory</span>
            </div>

            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.26em] font-semibold text-[#C5A869]">
                Clinical Disciplines & Specializations
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
              <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#24211D] tracking-tight leading-[1.1]">
                Eight dedicated dental disciplines, delivered with <span className="italic font-normal text-[#C5A869]">precision</span>.
              </h1>
              <p className="mt-5 text-[#706B62] text-base sm:text-lg font-light leading-relaxed">
                Every service at Valence is structured around biological preservation, zero auditory distress, and personalized aesthetic balance. Click into any discipline to review its step-by-step clinical workflow, indications, and direct expectations.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="mt-12 flex flex-wrap items-center gap-3 pt-6 border-t border-[#E9DFCC]">
              <span className="text-xs uppercase tracking-[0.2em] text-[#706B62] mr-2 flex items-center gap-1.5 font-medium">
                <Filter className="w-3.5 h-3.5 text-[#C5A869]" /> Filter Discipline:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs uppercase tracking-[0.18em] px-5 py-2.5 rounded-[2px] transition-all cursor-pointer font-medium ${
                    selectedCategory === cat
                      ? 'bg-[#24211D] text-[#F7F4EE] shadow-sm border border-[#C5A869]/40'
                      : 'bg-[#E9DFCC]/50 text-[#706B62] border border-[#DDD4C5] hover:border-[#C5A869] hover:text-[#24211D]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* 8 Dedicated Services Grid */}
        <section className="py-28 md:py-32 bg-transparent relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {filteredServices.map((service, idx) => (
                <div
                  key={service.slug}
                  className="bg-[#E9DFCC]/40 border border-[#DDD4C5] rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C5A869] transition-all duration-300 flex flex-col justify-between group relative"
                >
                  <div className="gold-dust-card" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Visual Banner */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#24211D]">
                        <img
                          src={service.heroImage}
                          alt={service.title}
                          className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-[#F7F4EE]/90 backdrop-blur-md px-3 py-1 text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#24211D] border border-[#DDD4C5] rounded-[2px]">
                          Discipline 0{idx + 1}
                        </div>
                        <div className="absolute top-4 right-4 bg-[#24211D]/85 backdrop-blur-md px-3 py-1 text-[10.5px] uppercase tracking-[0.16em] text-[#C5A869] border border-[#C5A869]/30 rounded-[2px]">
                          {service.badge}
                        </div>
                      </div>

                      {/* Content Block */}
                      <div className="p-8 sm:p-10">
                        <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A869] font-semibold">
                          {service.subtitle}
                        </span>
                        <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#24211D] mt-1.5 mb-3 group-hover:text-[#C5A869] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-[#706B62] text-sm font-light leading-relaxed line-clamp-3">
                          {service.heroSummary}
                        </p>

                        {/* Clinical Highlights Strip */}
                        <div className="mt-6 pt-5 border-t border-[#DDD4C5] space-y-2">
                          {service.benefitsAndLimitations.benefits.slice(0, 3).map((b: string, bIdx: number) => (
                            <div key={bIdx} className="flex items-center gap-2.5 text-xs text-[#555047] font-light">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0" />
                              <span className="truncate">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Link Footer */}
                    <div className="p-8 sm:p-10 pt-0">
                      <a
                        href={service.url}
                        className="w-full inline-flex items-center justify-between p-4 bg-[#F7F4EE] group-hover:bg-[#C5A869] group-hover:text-[#24211D] border border-[#DDD4C5] text-xs font-semibold uppercase tracking-[0.18em] transition-all rounded-[2px]"
                      >
                        <span>Explore Detailed Guide & Protocols</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4-Step Patient Journey Workflow */}
        <section className="py-28 bg-[#E9DFCC]/30 border-t border-[#E9DFCC] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner-bottom" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                The Patient Journey
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-4" />
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D]">
                How we navigate care together.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#F7F4EE] p-7 border border-[#DDD4C5] rounded-[2px] shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="font-mono text-xs text-[#C5A869] font-bold">STAGE 01</div>
                  <h4 className="font-serif text-lg text-[#24211D] mt-2 mb-2 font-medium">3D Diagnostics</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Low-dose digital scans and high-resolution clinical photography with zero gag-inducing impression putties.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-7 border border-[#DDD4C5] rounded-[2px] shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="font-mono text-xs text-[#C5A869] font-bold">STAGE 02</div>
                  <h4 className="font-serif text-lg text-[#24211D] mt-2 mb-2 font-medium">Co-Design</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    We review your scans on 4K lounge screens and curate a custom treatment plan with transparent itemized investments.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-7 border border-[#DDD4C5] rounded-[2px] shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="font-mono text-xs text-[#C5A869] font-bold">STAGE 03</div>
                  <h4 className="font-serif text-lg text-[#24211D] mt-2 mb-2 font-medium">Gentle Execution</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Unhurried care in private acoustic suites equipped with Bose noise-canceling audio and ultra-quiet electric micro-motors.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-7 border border-[#DDD4C5] rounded-[2px] shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="font-mono text-xs text-[#C5A869] font-bold">STAGE 04</div>
                  <h4 className="font-serif text-lg text-[#24211D] mt-2 mb-2 font-medium">Archival Longevity</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Digital documentation and personalized maintenance protocols to protect your restorations for decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Concierge Booking CTA */}
        <BookingSection
          preselectedService={selectedService}
          onClearPreselect={() => setSelectedService('Comprehensive Diagnostic Consultation')}
        />

      </main>

      <Footer />
      <FloatingConcierge onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
};
