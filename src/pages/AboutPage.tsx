import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingSection } from '../components/BookingSection';
import { FloatingConcierge } from '../components/FloatingConcierge';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Award, 
  GraduationCap, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Clock, 
  Eye, 
  VolumeX, 
  Leaf, 
  Layers,
  MapPin,
  Building2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Comprehensive Diagnostic Consultation');

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
        
        {/* Editorial Hero Section with Gold Dust Texture */}
        <section className="relative py-28 md:py-36 border-b border-[#E9DFCC] overflow-hidden bg-alabaster-hero">
          <div className="gold-shimmer-hero" aria-hidden="true" />
          <div className="gold-dust-section" aria-hidden="true" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#706B62] mb-12">
              <a href="/" className="hover:text-[#C5A869] transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C5A869] font-medium">About Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Headline & Abstract (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[11px] uppercase tracking-[0.26em] font-semibold text-[#C5A869]">
                  The Atelier Genesis & Ethos
                </span>
                <div className="w-12 h-[1.5px] bg-[#C5A869]" />
                
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[68px] font-light text-[#24211D] leading-[1.08] tracking-tight">
                  Dentistry reconsidered as an <span className="italic font-normal text-[#C5A869]">unhurried, human art.</span>
                </h1>

                <p className="text-[#555047] text-base sm:text-lg font-light leading-relaxed max-w-2xl pt-2">
                  Valence Dental Atelier was established in 2016 as a quiet rebellion against high-volume commercial dentistry. We believe that caring for teeth is fundamentally caring for a human being — demanding patient dialog, acoustic stillness, and master-level ceramic preservation.
                </p>

                <div className="pt-4 flex flex-wrap items-center gap-5">
                  <button
                    onClick={() => handleOpenBooking()}
                    className="bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 rounded-[2px] transition-all shadow-[0_4px_16px_rgba(197,168,105,0.25)] cursor-pointer"
                  >
                    Schedule Atelier Consultation
                  </button>
                  <a
                    href="#founder"
                    className="text-xs font-semibold tracking-[0.18em] uppercase text-[#24211D] hover:text-[#C5A869] transition-colors flex items-center gap-2 py-3 px-4"
                  >
                    <span>Meet Dr. Sarah Jenkins</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A869]" />
                  </a>
                </div>
              </div>

              {/* Right Architectural Image Frame (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-[2px] overflow-hidden shadow-2xl border border-[#C5A869]/30 bg-[#24211D]">
                  <img
                    src="/assets/images/hero_dental_atelier_lounge_1792659237422.jpg"
                    alt="Valence Dental Atelier Architectural Lounge"
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EE] text-xs">
                    <div className="font-serif text-xl font-light">One Bonifacio High Street Suite</div>
                    <div className="text-[#C5A869] text-[10.5px] uppercase tracking-[0.2em] mt-0.5">
                      Designed with natural travertine and acoustic wool
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Founding Manifesto & Contrast Section */}
        <section className="py-28 md:py-36 bg-[#E9DFCC]/30 border-b border-[#E9DFCC] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="max-w-3xl mb-16">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Our Core Manifesto
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight">
                Why we rejected the corporate clinic template.
              </h2>
              <p className="mt-4 text-[#706B62] text-sm sm:text-base font-light leading-relaxed">
                Most dental clinics are structured like transit hubs: bright flickering fluorescent lights, 15-minute appointment slots, sharp drill whines, and pressure to agree to aggressive irreversible procedures. We envisioned something profoundly different.
              </p>
            </div>

            {/* Contrast Grid: Conventional vs Valence */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Conventional Practice */}
              <div className="bg-[#F7F4EE] p-8 sm:p-10 border border-[#DDD4C5] rounded-[2px] space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#706B62] border-b border-[#E9DFCC] pb-4">
                  Conventional Clinical Model
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-[#706B62] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5A4B] font-bold shrink-0">✕</span>
                    <span>15–20 minute rapid rotations where patients feel like numbers on a conveyor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5A4B] font-bold shrink-0">✕</span>
                    <span>Aggressive tooth reduction (amputating up to 70% of healthy enamel for standardized crowns).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5A4B] font-bold shrink-0">✕</span>
                    <span>Auditory shock: 85+ decibel air-turbine drills that trigger severe nervous anxiety.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5A4B] font-bold shrink-0">✕</span>
                    <span>Outsourced overseas mass-batch ceramic labs with monochromatic opaque results.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#8B5A4B] font-bold shrink-0">✕</span>
                    <span>Paternalistic shaming or guilt regarding past dental lapse or fear.</span>
                  </li>
                </ul>
              </div>

              {/* The Valence Atelier Model */}
              <div className="bg-[#24211D] text-[#F7F4EE] p-8 sm:p-10 border border-[#C5A869]/40 shadow-[0_8px_30px_rgba(0,0,0,0.15)] rounded-[2px] space-y-6 relative overflow-hidden">
                <div className="gold-dust-dark" aria-hidden="true" />
                <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A869] border-b border-[#C5A869]/20 pb-4 flex items-center justify-between">
                  <span>The Valence Atelier Standard</span>
                  <Sparkles className="w-4 h-4 text-[#C5A869]" />
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-[#F7F4EE]/90 font-light relative z-10">
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">60 to 90 minutes</strong> reserved solely for you. No waiting, no rushing, no shared operatories.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Biomimetic Preservation:</strong> We preserve every millimeter of viable natural tooth structure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Acoustic Stillness:</strong> Swiss electric motors under 55dB and active noise-cancelling headphones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Artisan In-House Ceramist:</strong> Micro-layered porcelain matched chairside under 5500K daylight.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Zero Guilt Guarantee:</strong> Total empathy, collaborative co-diagnosis on 4K digital scans.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </section>

        {/* Lead Clinician Section */}
        <section id="founder" className="py-28 md:py-36 bg-transparent border-b border-[#E9DFCC] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Clinician Portrait (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] shadow-2xl bg-[#24211D] border border-[#C5A869]/30">
                  <img
                    src="/assets/images/dr_lead_dentist_portrait_1792659237679.jpg"
                    alt="Dr. Sarah Jenkins, Lead Restorative Dentist"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.98]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EE]">
                    <div className="font-serif text-2xl font-light">Dr. Sarah Jenkins, DMD, MSc</div>
                    <div className="text-[#C5A869] text-xs uppercase tracking-[0.2em] font-medium mt-1">
                      Founder & Clinical Director
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-3.5 absolute -bottom-6 -right-4 bg-[#E9DFCC] border border-[#DDD4C5] px-5 py-3.5 shadow-xl rounded-[2px]">
                  <GraduationCap className="w-5 h-5 text-[#C5A869]" />
                  <div className="text-left">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#24211D]">
                      MSc Restorative Dentistry
                    </div>
                    <div className="text-[10px] text-[#706B62]">Columbia University, New York</div>
                  </div>
                </div>
              </div>

              {/* Clinician Background & Philosophy (7 cols) */}
              <div className="lg:col-span-7 space-y-7">
                <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                  Clinical Direction & Leadership
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-tight">
                  Dr. Sarah Jenkins
                </h2>
                <div className="w-12 h-[1.5px] bg-[#C5A869]" />

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  After completing her Doctor of Dental Medicine at the University of the Philippines Manila with Magna Cum Laude honors, Dr. Sarah pursued post-graduate specialization in New York at Columbia University, focusing on advanced adhesive protocols and aesthetic biomimetics.
                </p>

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  Her approach is rooted in the Swiss concept of <em>biological conservation</em>. She treats teeth not as isolated pegs to be ground down, but as vital living structures that require microscopic precision. Under her leadership, Valence maintains an ethos where no clinician is incentivized by procedure speed or aggressive quotas.
                </p>

                {/* Credentials Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#E9DFCC]">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-full text-[#C5A869] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                        Columbia University
                      </h4>
                      <p className="text-[11px] text-[#706B62] mt-0.5 font-light">
                        Master of Science in Restorative & Aesthetic Dentistry
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-full text-[#C5A869] shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                        UP Manila
                      </h4>
                      <p className="text-[11px] text-[#706B62] mt-0.5 font-light">
                        Doctor of Dental Medicine (DMD), Magna Cum Laude
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-full text-[#C5A869] shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                        AACD Member
                      </h4>
                      <p className="text-[11px] text-[#706B62] mt-0.5 font-light">
                        American Academy of Cosmetic Dentistry Active Member
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-full text-[#C5A869] shrink-0">
                      <HeartHandshake className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#24211D]">
                        ITI Fellow
                      </h4>
                      <p className="text-[11px] text-[#706B62] mt-0.5 font-light">
                        International Team for Implantology (Basel, Switzerland)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#E9DFCC]/50 border border-[#DDD4C5] rounded-[2px] text-xs text-[#555047] italic leading-relaxed font-light shadow-2xs">
                  “When a patient trusts us with their smile, they are trusting us with their identity and emotional confidence. That honor will never be treated casually or hurriedly in this atelier.”
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* The 5 Patient Guarantees (The Patient Charter) */}
        <section className="py-28 md:py-36 bg-[#E9DFCC]/30 border-b border-[#E9DFCC] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner-bottom" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Ethical Commitments
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-4" />
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight">
                The Valence Patient Charter
              </h2>
              <p className="mt-4 text-[#706B62] text-sm sm:text-base font-light">
                Five non-negotiable standards upheld for every consultation and treatment session.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-[#F7F4EE] p-8 border border-[#DDD4C5] rounded-[2px] space-y-4 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-4">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">01 / TIME</div>
                  <h3 className="font-serif text-2xl text-[#24211D] font-light">
                    Unhurried Sessions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B62] font-light leading-relaxed">
                    We schedule generous appointment windows so we never juggle multiple patients at once. When you are in our chair, you have our entire clinical attention.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-8 border border-[#DDD4C5] rounded-[2px] space-y-4 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-4">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">02 / AUTONOMY</div>
                  <h3 className="font-serif text-2xl text-[#24211D] font-light">
                    Co-Diagnosis & Clarity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B62] font-light leading-relaxed">
                    We display high-resolution intraoral photography and 3D digital scans on screen. We explain findings openly, giving you options without coercive pressure.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-8 border border-[#DDD4C5] rounded-[2px] space-y-4 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-4">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">03 / COMFORT</div>
                  <h3 className="font-serif text-2xl text-[#24211D] font-light">
                    Zero Auditory Shock
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B62] font-light leading-relaxed">
                    We eliminated shrieking pneumatic drills in favor of brushless electric micro-motors under 55dB, accompanied by warm lighting and spatial noise cancellation.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-8 border border-[#DDD4C5] rounded-[2px] space-y-4 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-4">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">04 / BIOLOGY</div>
                  <h3 className="font-serif text-2xl text-[#24211D] font-light">
                    Preservation First
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B62] font-light leading-relaxed">
                    We avoid destructive, irreversible enamel reduction. Our biomimetic protocols conserve tooth structure for 20+ years of predictable biological health.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-8 border border-[#DDD4C5] rounded-[2px] space-y-4 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-4">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">05 / INTEGRITY</div>
                  <h3 className="font-serif text-2xl text-[#24211D] font-light">
                    Financial Transparency
                  </h3>
                  <p className="text-xs sm:text-sm text-[#706B62] font-light leading-relaxed">
                    Detailed written treatment scopes with fixed fees provided before any work starts. No surprise clinic facility surcharges or hidden line items.
                  </p>
                </div>
              </div>

              <div className="bg-[#24211D] text-[#F7F4EE] p-8 border border-[#C5A869]/30 rounded-[2px] space-y-4 flex flex-col justify-between relative overflow-hidden">
                <div className="gold-dust-dark" aria-hidden="true" />
                <div className="relative z-10">
                  <div className="font-mono text-sm text-[#C5A869] font-semibold">EXPLORE</div>
                  <h3 className="font-serif text-2xl text-white font-light mt-2">
                    Experience The Atelier
                  </h3>
                  <p className="text-xs text-[#F7F4EE]/70 font-light leading-relaxed mt-2">
                    Tour our private suites, sensory arrival lounge, and artisan ceramic laboratory.
                  </p>
                </div>
                <a
                  href="/experience/"
                  className="relative z-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A869] hover:text-white transition-colors pt-2"
                >
                  <span>Explore The Experience &rarr;</span>
                </a>
              </div>

            </div>

          </div>
        </section>

        {/* Atelier Practice Locations & Sanctuary Access Section */}
        <section id="locations" className="py-28 md:py-36 bg-[#F7F4EE] relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="max-w-3xl mb-16">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                Practice Locations & Access
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight">
                Two private urban sanctuaries in Metro Manila.
              </h2>
              <p className="mt-4 text-[#706B62] text-sm sm:text-base font-light leading-relaxed">
                Positioned in the twin financial capitals of Bonifacio Global City and Makati CBD, each atelier suite is designed for seamless arrival, underground valet parking, and complete acoustic privacy.
              </p>
            </div>

            {/* Locations Cards Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Location 1: BGC */}
              <div className="bg-[#E9DFCC]/40 border border-[#DDD4C5] p-8 sm:p-10 rounded-[2px] shadow-sm hover:border-[#C5A869] transition-all flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#DDD4C5]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#C5A869] font-semibold">LOCATION 01</span>
                        <div className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium">One Bonifacio High Street Suite</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] bg-[#F7F4EE] text-[#706B62] border border-[#DDD4C5] px-2.5 py-1 rounded-[2px] font-medium">
                      BGC Flagship
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div>
                      <strong className="text-[#24211D] block font-medium">Full Address:</strong>
                      Level 14, Penthouse Suite 1408, One Bonifacio High Street, 5th Avenue corner 28th Street, Bonifacio Global City, Taguig City, 1634 Metro Manila
                    </div>
                    <div>
                      <strong className="text-[#24211D] block font-medium">Concierge Operating Hours:</strong>
                      Monday to Saturday: 9:00 AM – 7:00 PM · Closed Sundays (Emergency On-Call)
                    </div>
                    <div>
                      <strong className="text-[#24211D] block font-medium">Guest Arrival & Parking:</strong>
                      Complimentary valet service available at B1 Hotel/Suite drop-off. Private high-speed elevator directly to Penthouse Level 14.
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD4C5] flex items-center justify-between text-xs">
                  <a
                    href="https://maps.google.com/?q=One+Bonifacio+High+Street+Taguig"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A869] hover:text-[#B39454] font-semibold uppercase tracking-[0.16em] flex items-center gap-1.5"
                  >
                    <span>Open Navigation Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleOpenBooking()}
                    className="text-[#24211D] hover:text-[#C5A869] uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer"
                  >
                    Select Location &rarr;
                  </button>
                </div>
              </div>

              {/* Location 2: Makati */}
              <div className="bg-[#E9DFCC]/40 border border-[#DDD4C5] p-8 sm:p-10 rounded-[2px] shadow-sm hover:border-[#C5A869] transition-all flex flex-col justify-between group">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#DDD4C5]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-xs text-[#C5A869] font-semibold">LOCATION 02</span>
                        <div className="font-serif text-xl sm:text-2xl text-[#24211D] font-medium">Ayala Triangle Tower Two Suite</div>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] bg-[#F7F4EE] text-[#706B62] border border-[#DDD4C5] px-2.5 py-1 rounded-[2px] font-medium">
                      Makati CBD
                    </span>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div>
                      <strong className="text-[#24211D] block font-medium">Full Address:</strong>
                      Level 21, Executive Tower Two, Paseo de Roxas corner Makati Avenue, Makati Central Business District, 1226 Metro Manila
                    </div>
                    <div>
                      <strong className="text-[#24211D] block font-medium">Concierge Operating Hours:</strong>
                      Monday to Friday: 8:30 AM – 6:30 PM · By Appointment Only
                    </div>
                    <div>
                      <strong className="text-[#24211D] block font-medium">Guest Arrival & Parking:</strong>
                      Dedicated underground parking accessible via Makati Avenue entrance. Direct elevator bank to Level 21 Executive Suites.
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD4C5] flex items-center justify-between text-xs">
                  <a
                    href="https://maps.google.com/?q=Ayala+Triangle+Gardens+Tower+2+Makati"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C5A869] hover:text-[#B39454] font-semibold uppercase tracking-[0.16em] flex items-center gap-1.5"
                  >
                    <span>Open Navigation Map</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => handleOpenBooking()}
                    className="text-[#24211D] hover:text-[#C5A869] uppercase tracking-[0.14em] font-medium transition-colors cursor-pointer"
                  >
                    Select Location &rarr;
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Booking Consultation CTA */}
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
