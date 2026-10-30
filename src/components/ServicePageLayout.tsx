import React, { useState } from 'react';
import { ServiceDetail } from '../data/servicesData';
import { Navbar } from './Navbar';
import { BookingSection } from './BookingSection';
import { Footer } from './Footer';
import { FloatingConcierge } from './FloatingConcierge';
import { 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface ServicePageLayoutProps {
  service: ServiceDetail;
}

export const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({ service }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(prev => prev === idx ? null : idx);
  };

  const handleScrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] bg-ivory-gold-dust text-[#24211D] selection:bg-[#C5A869] selection:text-[#24211D] font-sans">
      {/* Shared Deep Charcoal Header */}
      <Navbar onOpenBooking={handleScrollToBooking} isServicePage={true} />

      <main className="pt-20">
        {/* Breadcrumb Navigation with Generous Spacing */}
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 py-5 border-b border-[#E5D8C3]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 text-xs text-[#706B62]">
            <a href="/" className="hover:text-[#C5A869] transition-colors uppercase tracking-[0.14em]">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#C5A869]/60" />
            <a href="/#services-overview" className="hover:text-[#C5A869] transition-colors uppercase tracking-[0.14em]">Services</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#C5A869]/60" />
            <span className="text-[#24211D] font-medium uppercase tracking-[0.14em]" aria-current="page">{service.shortTitle}</span>
          </nav>
        </div>

        {/* Hero Section with Warm Liquid Gold Alabaster Waves */}
        <section className="relative py-24 md:py-32 overflow-hidden border-b border-[#E5D8C3] bg-alabaster-hero">
          <div className="gold-shimmer-hero" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Headlines & Summary (7 cols) */}
              <div className="lg:col-span-7 space-y-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] text-[10.5px] uppercase tracking-[0.22em] font-semibold text-[#24211D]">
                  <Sparkles className="w-3 h-3 text-[#C5A869]" />
                  <span>{service.badge}</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#24211D] tracking-tight leading-[1.12]">
                  {service.title}
                </h1>

                <p className="font-serif italic text-lg sm:text-2xl text-[#706B62] font-light leading-snug">
                  “{service.subtitle}”
                </p>

                <div className="w-16 h-[1.5px] bg-[#C5A869]" />

                <p className="text-[#4A453E] text-base leading-relaxed font-light max-w-2xl">
                  {service.heroSummary}
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <button
                    onClick={handleScrollToBooking}
                    className="px-8 py-4 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] text-xs font-semibold tracking-[0.2em] uppercase rounded-[2px] transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,105,0.25)] hover:shadow-[0_6px_20px_rgba(197,168,105,0.35)] cursor-pointer"
                  >
                    Reserve Consultation
                  </button>

                  <a
                    href="#overview"
                    className="px-6 py-4 border border-[#DDD4C5] hover:border-[#24211D] text-[#24211D] text-xs font-semibold tracking-[0.16em] uppercase rounded-[2px] transition-colors"
                  >
                    Read Treatment Guide
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden shadow-2xl border border-[#E5D8C3] bg-[#E9DFCC]">
                  <img
                    src={service.heroImage}
                    alt={`${service.title} at Valence Dental Atelier`}
                    className="w-full h-full object-cover filter contrast-[1.03] brightness-[0.98]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-white text-xs flex justify-between items-center">
                    <span className="font-serif text-sm tracking-wide">Valence Clinical Operatory</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase text-[#24211D] bg-[#C5A869] px-2.5 py-1 font-semibold rounded-[2px]">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Overview & Clinical Context */}
        <section id="overview" className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Treatment Overview
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] mt-2 mb-6">
                Understanding the clinical approach.
              </h2>
              <div className="space-y-5 text-sm sm:text-base text-[#4A453E] font-light leading-relaxed">
                <p>{service.overview.leadParagraph}</p>
                <p>{service.overview.clinicalContext}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Candidacy & Reasons to Consider */}
        <section id="overview" className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              <div className="lg:col-span-5 space-y-5">
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                  Candidacy &amp; Assessment
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D]">
                  Who considers this treatment?
                </h2>
                <p className="text-sm text-[#4A453E] font-light leading-relaxed">
                  {service.candidacy.whenToConsider}
                </p>
                <div className="p-5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] text-xs text-[#59534A] font-light">
                  <strong className="text-[#24211D] font-semibold">Clinical Note:</strong> Treatment suitability is determined during an in-person diagnostic evaluation. Recommendations depend entirely on personal oral health.
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#E9DFCC] p-8 sm:p-9 border border-[#DDD4C5] rounded-[2px] shadow-xs space-y-5">
                <div className="text-xs uppercase tracking-[0.18em] font-semibold text-[#24211D] mb-2">
                  Common Patient Presentations
                </div>
                <div className="space-y-4">
                  {service.candidacy.reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-sm text-[#38332B]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="font-light">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Benefits & Transparent Limitations */}
        <section className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner-bottom" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-2xl mb-14">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Balanced Perspective
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] mt-1.5">
                Potential benefits &amp; clinical limitations.
              </h2>
              <p className="text-xs sm:text-sm text-[#706B62] mt-2 font-light">
                We believe in complete transparency before treatment begins. We do not make unsupported claims or promise guaranteed permanent results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="p-8 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#455348]">
                  <ShieldCheck className="w-4 h-4 text-[#455348]" />
                  <span>Clinical Benefits</span>
                </div>
                <ul className="space-y-3.5">
                  {service.benefitsAndLimitations.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#38332B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#455348] shrink-0 mt-2" />
                      <span className="font-light">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div className="p-8 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#706B62]">
                  <AlertCircle className="w-4 h-4 text-[#706B62]" />
                  <span>Important Clinical Considerations</span>
                </div>
                <ul className="space-y-3.5">
                  {service.benefitsAndLimitations.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#38332B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#706B62] shrink-0 mt-2" />
                      <span className="font-light">{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Step-by-Step Treatment Process */}
        <section className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-2xl mb-14">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Step-by-Step Workflow
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] mt-1.5">
                The consultation &amp; treatment journey.
              </h2>
              <p className="text-sm text-[#4A453E] font-light mt-2">
                What you can expect from the moment you sit down in our consultation lounge through completion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.treatmentProcess.map((step) => (
                <div key={step.step} className="p-7 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="font-mono text-xs font-semibold text-[#C5A869] tracking-wider mb-4">
                      STEP {step.step}
                    </div>
                    <h3 className="font-serif text-xl font-light text-[#24211D] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#59534A] font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: What to Expect Before & After */}
        <section className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-2xl mb-14">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Patient Preparation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] mt-1.5">
                What to expect before &amp; after your visit.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] space-y-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#24211D]">
                  Before Treatment
                </div>
                <div className="space-y-3.5">
                  {service.patientExpectations.beforeTreatment.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#38332B]">
                      <Clock className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] space-y-5">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#24211D]">
                  Aftercare &amp; Recovery
                </div>
                <div className="space-y-3.5">
                  {service.patientExpectations.afterTreatment.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-[#38332B]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                      <span className="font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Service-Specific FAQ */}
        <section className="py-24 md:py-28 bg-transparent border-b border-[#E5D8C3] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                  Specific Inquiries
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D] mt-1.5">
                  Questions regarding {service.shortTitle}.
                </h2>
              </div>

              <div className="divide-y divide-[#DDD4C5] border-y border-[#DDD4C5] bg-[#E9DFCC] p-7 rounded-[2px] shadow-xs">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="py-5">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                      >
                        <span className="font-serif text-lg sm:text-xl font-light text-[#24211D] group-hover:text-[#C5A869] transition-colors">
                          {faq.q}
                        </span>
                        <span className="w-7 h-7 rounded-full border border-[#DDD4C5] flex items-center justify-center shrink-0 group-hover:border-[#C5A869] group-hover:text-[#C5A869] text-[#24211D] transition-colors">
                          {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-3.5 text-xs sm:text-sm text-[#4A453E] font-light leading-relaxed pr-6">
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

        {/* Section: Related Dental Services */}
        <section className="py-24 md:py-28 bg-transparent relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner-bottom" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                  Complementary Disciplines
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#24211D] mt-1.5">
                  Related services at Valence Atelier.
                </h2>
              </div>
              <a href="/#services-overview" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A869] hover:text-[#B39454]">
                All Services &rarr;
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {service.relatedServices.map((rel) => (
                <a
                  key={rel.slug}
                  href={rel.url}
                  className="p-8 bg-[#E9DFCC] border border-[#DDD4C5] hover:border-[#C5A869] rounded-[2px] transition-all group flex flex-col justify-between hover:shadow-xs"
                >
                  <div>
                    <h3 className="font-serif text-xl font-light text-[#24211D] group-hover:text-[#C5A869] transition-colors mb-2.5">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#59534A] font-light leading-relaxed">
                      {rel.desc}
                    </p>
                  </div>
                  <div className="pt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#24211D] group-hover:text-[#C5A869] mt-4">
                    <span>View Service Page</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A869] group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Appointment Booking with Service Preselected in Deep Charcoal */}
        <BookingSection preselectedService={service.appointmentServiceValue} />
      </main>

      {/* Shared Deep Charcoal Footer */}
      <Footer />

      {/* Floating Concierge Desk */}
      <FloatingConcierge onOpenBooking={handleScrollToBooking} />
    </div>
  );
};
