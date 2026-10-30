import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingSection } from '../components/BookingSection';
import { FloatingConcierge } from '../components/FloatingConcierge';
import { 
  VolumeX, 
  Coffee, 
  Eye, 
  Sparkles, 
  Check, 
  Music, 
  Wind, 
  ShieldCheck, 
  ArrowRight, 
  Tv, 
  Layers 
} from 'lucide-react';

export const ExperiencePage: React.FC = () => {
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
        
        {/* Editorial Experience Hero with Champagne-Gold Dust */}
        <section className="py-28 md:py-36 border-b border-[#E9DFCC] bg-[#F7F4EE] relative overflow-hidden">
          <div className="gold-dust-hero" aria-hidden="true" />
          <div className="gold-dust-hero-tr" aria-hidden="true" />
          <div className="gold-dust-hero-bl" aria-hidden="true" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#706B62] mb-10">
              <a href="/" className="hover:text-[#C5A869] transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C5A869] font-medium">The Patient Experience</span>
            </div>

            <div className="max-w-3xl">
              <span className="text-[11px] uppercase tracking-[0.26em] font-semibold text-[#C5A869]">
                Spatial & Sensory Architecture
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
              <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#24211D] tracking-tight leading-[1.08]">
                Designed to soothe your <span className="italic font-normal text-[#C5A869]">nervous system</span>, not just your teeth.
              </h1>
              <p className="mt-5 text-[#706B62] text-base sm:text-lg font-light leading-relaxed">
                We believe that clinical excellence cannot flourish in a cold, stressful environment. Every tactile surface, acoustic barrier, and scent note in our atelier was curated to disassemble dental apprehension from the second you cross the threshold.
              </p>
            </div>

            {/* Quick Navigation to the 3 Spaces */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#E9DFCC]">
              <a
                href="#lounge"
                className="p-5 bg-[#E9DFCC]/50 border border-[#DDD4C5] hover:border-[#C5A869] rounded-[2px] transition-all group shadow-sm"
              >
                <div className="font-mono text-[11px] text-[#C5A869] font-semibold">SPACE 01</div>
                <div className="font-serif text-lg text-[#24211D] group-hover:text-[#C5A869] transition-colors mt-1 font-medium">
                  The Arrival Lounge
                </div>
                <div className="text-[11px] text-[#706B62] mt-0.5 font-light">
                  Sensory decompression & herbal hospitality
                </div>
              </a>

              <a
                href="#operatory"
                className="p-5 bg-[#E9DFCC]/50 border border-[#DDD4C5] hover:border-[#C5A869] rounded-[2px] transition-all group shadow-sm"
              >
                <div className="font-mono text-[11px] text-[#C5A869] font-semibold">SPACE 02</div>
                <div className="font-serif text-lg text-[#24211D] group-hover:text-[#C5A869] transition-colors mt-1 font-medium">
                  The Treatment Operatory
                </div>
                <div className="text-[11px] text-[#706B62] mt-0.5 font-light">
                  Skyline views & ultra-quiet electric drills
                </div>
              </a>

              <a
                href="#ceramist"
                className="p-5 bg-[#E9DFCC]/50 border border-[#DDD4C5] hover:border-[#C5A869] rounded-[2px] transition-all group shadow-sm"
              >
                <div className="font-mono text-[11px] text-[#C5A869] font-semibold">SPACE 03</div>
                <div className="font-serif text-lg text-[#24211D] group-hover:text-[#C5A869] transition-colors mt-1 font-medium">
                  The Ceramist Atelier
                </div>
                <div className="text-[11px] text-[#706B62] mt-0.5 font-light">
                  Hand-layered artisan ceramic restorations
                </div>
              </a>
            </div>

          </div>
        </section>

        {/* Space 1: The Arrival Lounge */}
        <section id="lounge" className="py-28 md:py-36 bg-[#F7F4EE] border-b border-[#E9DFCC] scroll-mt-24 relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#C5A869] px-2.5 py-1 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px]">
                    SPACE 01
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#706B62]">
                    Sensory Decompression & Herbal Hospitality
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-tight">
                  The Arrival Lounge
                </h2>
                <div className="w-12 h-[1.5px] bg-[#C5A869]" />

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  Most dental visits begin in crowded waiting rooms with blaring televisions, anxious glances, and the pungent chemical scent of eugenol. Valence eliminates this entirely.
                </p>

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  Upon arrival, our private concierge greets you by name. You are invited to sink into organic linen seating enveloped by travertine acoustic walls that silence city sirens. We offer warm Japanese oshibori towels infused with hinoki essential oils and a curated menu of loose-leaf botanical infusions designed to lower resting cortisol.
                </p>

                {/* Amenities List */}
                <div className="pt-4 space-y-3.5 border-t border-[#E9DFCC]">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-3">
                    Lounge Features & Hospitality
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Bespoke Herbal Teas:</strong> Chamomile lavender, lemon verbena, and roasted Kyoto hojicha.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Zero Waiting Room Queues:</strong> Appointments are synchronized so you never wait behind other patients.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Olfactory Calm:</strong> Bespoke white tea and cedar botanical diffusers (100% medical chemical odor-free).</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Executive Work Suite:</strong> High-speed Wi-Fi, wireless charging, and silent acoustic phone booths.</span>
                  </div>
                </div>

              </div>

              {/* Right Image (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden shadow-2xl border border-[#C5A869]/30 bg-[#24211D] group">
                  <img
                    src="/assets/images/hero_dental_atelier_lounge_1792659237422.jpg"
                    alt="The Arrival Lounge at Valence Dental Atelier"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-[#F7F4EE] flex items-center justify-between">
                    <div>
                      <div className="font-serif text-lg font-light">The Arrival Sanctuary</div>
                      <div className="text-[#C5A869] text-[10.5px] uppercase tracking-[0.18em]">Natural light and travertine acoustics</div>
                    </div>
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <Coffee className="w-4 h-4 text-[#C5A869]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Space 2: The Treatment Operatory (Deep Charcoal Signature Section) */}
        <section id="operatory" style={{ backgroundColor: '#24211D' }} className="py-28 md:py-36 bg-[#24211D] text-[#F7F4EE] border-b border-[#C5A869]/25 scroll-mt-24 relative overflow-hidden">
          <div className="gold-dust-dark" aria-hidden="true" />

          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Image (6 cols) */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden shadow-2xl border border-[#C5A869]/30 bg-black group">
                  <img
                    src="/assets/images/dental_treatment_suite_1792659238509.jpg"
                    alt="The Treatment Operatory at Valence Dental Atelier"
                    className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <div className="font-serif text-lg font-light">The Penthouse Suite</div>
                      <div className="text-[#C5A869] text-[10.5px] uppercase tracking-[0.18em]">Panoramic Metro Manila Skyline View</div>
                    </div>
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <VolumeX className="w-4 h-4 text-[#C5A869]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#C5A869] px-2.5 py-1 bg-white/5 border border-white/10 rounded-[2px]">
                    SPACE 02
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                    Skyline Views & Ultra-Quiet Electric Drills
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F4EE] tracking-tight leading-tight">
                  The Treatment Operatory
                </h2>
                <div className="w-12 h-[1.5px] bg-[#C5A869]" />

                <p className="text-[#F7F4EE]/80 text-sm sm:text-base font-light leading-relaxed">
                  Clinical procedures at Valence take place inside expansive private penthouse suites with sweeping floor-to-ceiling vistas overlooking Bonifacio Global City or the lush canopy of Ayala Triangle.
                </p>

                <p className="text-[#F7F4EE]/80 text-sm sm:text-base font-light leading-relaxed">
                  We engineered out the two largest triggers of dental panic: <em className="text-[#C5A869] font-normal">sound</em> and <em className="text-[#C5A869] font-normal">discomfort</em>. In place of standard air-turbine drills that screech at 85+ decibels, our clinicians operate with precision Swiss electric micro-motors that hum softly under 55dB. You are provided with Bose noise-cancelling headphones and ceiling-mounted 4K displays so you can watch your favorite cinema while being cared for.
                </p>

                {/* Operatory Features */}
                <div className="pt-4 space-y-3.5 border-t border-white/10">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-3">
                    Operatory Engineering
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F4EE]/85 font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Ultra-Quiet Electric Motors:</strong> Brushless Swiss motors eliminate the piercing drill whine.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F4EE]/85 font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Active Acoustic Isolation:</strong> Bose noise-cancelling headphones streaming curated soundscapes or film audio.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F4EE]/85 font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Ceiling Cinema Displays:</strong> Stream your preferred media from an effortless reclining angle.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#F7F4EE]/85 font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-white font-medium">Ergonomic Memory Contour:</strong> Custom medical lounges with active lumbar and cervical support.</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Space 3: The Ceramist Atelier */}
        <section id="ceramist" className="py-28 md:py-36 bg-[#F7F4EE] border-b border-[#E9DFCC] scroll-mt-24 relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="gold-dust-corner-bottom" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Content (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-semibold text-[#C5A869] px-2.5 py-1 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px]">
                    SPACE 03
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#706B62]">
                    Hand-Layered Artisan Ceramic Restorations
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-tight">
                  The Ceramist Atelier
                </h2>
                <div className="w-12 h-[1.5px] bg-[#C5A869]" />

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  Traditional dental clinics ship impressions to anonymous commercial dental labs that batch-bake teeth like identical ceramic Chiclets. Natural human teeth are never uniform or flat white; they possess depth, mammelons, light refraction, and subtle micro-textures.
                </p>

                <p className="text-[#555047] text-sm sm:text-base font-light leading-relaxed">
                  Valence houses its own dedicated artisan ceramist bench. You meet directly with our master ceramicist. Under 5500K daylight-calibrated lighting and cross-polarized studio flash photography, we map your unique incisal translucency and facial landmarks. Every veneer and crown is sculpted by hand with multi-shaded feldspathic porcelain for an authentic result that belongs uniquely to you.
                </p>

                {/* Ceramist Highlights */}
                <div className="pt-4 space-y-3.5 border-t border-[#E9DFCC]">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-3">
                    Artisanal Ceramic Craftsmanship
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Chairside Shade Customization:</strong> In-person collaboration directly with the master artisan.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">Microscopic Stratification:</strong> Individual brush-layering of enamel, dentin, and incisal opalescence.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">5500K True-Daylight Studio:</strong> Eliminates shade discrepancies caused by artificial clinic lighting.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-[#555047] font-light">
                    <div className="w-4 h-4 rounded-full bg-[#C5A869]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#C5A869]" />
                    </div>
                    <span><strong className="text-[#24211D] font-medium">No Overseas Shipping Delays:</strong> Rapid custom adjustments performed right in the atelier.</span>
                  </div>
                </div>

              </div>

              {/* Right Image (6 cols) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-[2px] overflow-hidden shadow-2xl border border-[#C5A869]/30 bg-[#24211D] group">
                  <img
                    src="/assets/images/dental_craftsmanship_close_up_1792659238510.jpg"
                    alt="The Ceramist Atelier at Valence Dental Atelier"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24211D]/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                    <div>
                      <div className="font-serif text-lg font-light">Artisan Ceramic Bench</div>
                      <div className="text-[#C5A869] text-[10.5px] uppercase tracking-[0.18em]">Hand-stratified feldspathic porcelain</div>
                    </div>
                    <div className="p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <Layers className="w-4 h-4 text-[#C5A869]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Sensory Protocol Summary Checklist */}
        <section className="py-28 bg-[#E9DFCC]/30 relative overflow-hidden">
          <div className="gold-dust-section" aria-hidden="true" />
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
            
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-[11px] uppercase tracking-[0.24em] font-semibold text-[#C5A869]">
                The Five Senses of Valence
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] mx-auto my-4" />
              <h3 className="font-serif text-3xl sm:text-4xl font-light text-[#24211D]">
                Every sense considered.
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-[#F7F4EE] p-6 border border-[#DDD4C5] rounded-[2px] space-y-2.5 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9DFCC] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                    <VolumeX className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-[#24211D] font-medium">Sound</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Quiet electric drills below 55dB & Bose noise-canceling playlists.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-6 border border-[#DDD4C5] rounded-[2px] space-y-2.5 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9DFCC] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                    <Wind className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-[#24211D] font-medium">Scent</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Hinoki cedar & white tea botanicals; 100% medical chemical odor-free.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-6 border border-[#DDD4C5] rounded-[2px] space-y-2.5 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9DFCC] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                    <Eye className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-[#24211D] font-medium">Sight</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Skyline views, warm indirect travertine lighting, and ceiling cinema.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-6 border border-[#DDD4C5] rounded-[2px] space-y-2.5 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9DFCC] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-[#24211D] font-medium">Touch</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Memory-foam contoured lounges, warm oshibori towels, soft linen throws.
                  </p>
                </div>
              </div>

              <div className="bg-[#F7F4EE] p-6 border border-[#DDD4C5] rounded-[2px] space-y-2.5 shadow-sm relative overflow-hidden">
                <div className="gold-dust-card" aria-hidden="true" />
                <div className="relative z-10 space-y-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E9DFCC] border border-[#DDD4C5] flex items-center justify-center text-[#C5A869]">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg text-[#24211D] font-medium">Taste</h4>
                  <p className="text-xs text-[#706B62] font-light leading-relaxed">
                    Organic loose-leaf infusions & pH-neutral botanical rinses.
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
