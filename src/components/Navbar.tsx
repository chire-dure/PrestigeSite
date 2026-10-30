import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare, ChevronDown, Sparkles, Instagram, Facebook } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { ALL_SERVICES_LIST } from '../data/servicesData';

interface NavbarProps {
  onOpenBooking?: (servicePreselect?: string) => void;
  isServicePage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [experienceDropdownOpen, setExperienceDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExperienceOpen, setMobileExperienceOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (experienceRef.current && !experienceRef.current.contains(event.target as Node)) {
        setExperienceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.href = '/#booking';
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-40 bg-[#24211D] border-b border-[#C5A869]/30 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 h-20 flex items-center justify-between gap-6">
          
          {/* Left Brand Lockup (Refined Champagne Gold Branding) */}
          <a href="/" className="flex items-center gap-3.5 group shrink-0">
            <div className="w-9 h-9 text-[#C5A869] group-hover:scale-105 transition-transform duration-300">
              <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 12C36 12 24 22 18 36C12 50 14 66 18 80C22 92 32 92 38 82C44 72 46 72 50 72C54 72 56 72 62 82C68 92 78 92 82 80C86 66 88 50 82 36C76 22 64 12 50 12Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M34 32C42 28 58 28 66 32" strokeWidth="4" strokeDasharray="4 4" />
              </svg>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-[23px] tracking-[0.16em] leading-tight text-[#C5A869] group-hover:text-[#E5CF92] transition-colors font-light">
                valence
              </span>
              <span className="text-[8.5px] uppercase tracking-[0.28em] font-medium text-[#C5A869]/80">
                DENTAL ATELIER
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Warm Ivory text with restrained Champagne Gold hover) */}
          <nav className="hidden xl:flex items-center gap-8 lg:gap-9 text-[11px] tracking-[0.2em] uppercase font-medium text-[#F7F4EE]">
            <a href="/" className="py-2 hover:text-[#C5A869] transition-colors whitespace-nowrap">
              HOME
            </a>

            {/* Dedicated ABOUT US Page */}
            <a href="/about/" className="py-2 hover:text-[#C5A869] transition-colors whitespace-nowrap">
              ABOUT US
            </a>

            {/* SERVICES Hub Link & Mega Dropdown */}
            <div 
              className="relative" 
              ref={servicesRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <a
                  href="/services/"
                  className={`py-2 hover:text-[#C5A869] transition-colors whitespace-nowrap cursor-pointer ${
                    servicesDropdownOpen ? 'text-[#C5A869]' : ''
                  }`}
                >
                  SERVICES
                </a>
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="p-1 hover:text-[#C5A869] text-[#A69E92] transition-colors cursor-pointer"
                  aria-label="Toggle Services Menu"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                </button>
              </div>

              {/* Desktop Services Mega Dropdown (Solid Deep Charcoal with Gold Border) */}
              {servicesDropdownOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-[#24211D] border border-[#C5A869]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-7 mt-1 rounded-[2px] grid grid-cols-2 gap-3.5 animate-fadeIn z-50"
                >
                  <div className="col-span-2 pb-3 mb-1 border-b border-white/10 flex items-center justify-between">
                    <span className="text-[10.5px] font-semibold tracking-[0.22em] uppercase text-[#C5A869]">
                      Eight Dedicated Dental Disciplines
                    </span>
                    <a href="/services/" className="text-[10.5px] text-[#D4CBBF] hover:text-[#C5A869] tracking-[0.16em] uppercase flex items-center gap-1 font-semibold transition-colors">
                      <span>View All Services Directory</span>
                      <span>&rarr;</span>
                    </a>
                  </div>

                  {ALL_SERVICES_LIST.map((service, idx) => (
                    <a
                      key={service.slug}
                      href={service.url}
                      className="p-3.5 rounded-[2px] bg-[#1E1B18] hover:bg-[#2C2722] transition-all border border-white/5 hover:border-[#C5A869]/40 group flex items-start gap-3.5"
                    >
                      <span className="font-mono text-[11px] font-semibold text-[#C5A869] pt-0.5 shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-semibold text-[#F7F4EE] group-hover:text-[#C5A869] transition-colors tracking-normal normal-case">
                          {service.shortTitle}
                        </div>
                        <div className="text-[11px] text-[#A69E92] line-clamp-1 mt-0.5 tracking-normal normal-case font-light">
                          {service.subtitle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Dedicated EXPERIENCE Link & 3-Space Menu */}
            <div 
              className="relative" 
              ref={experienceRef}
              onMouseEnter={() => setExperienceDropdownOpen(true)}
              onMouseLeave={() => setExperienceDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <a
                  href="/experience/"
                  className={`py-2 hover:text-[#C5A869] transition-colors whitespace-nowrap cursor-pointer ${
                    experienceDropdownOpen ? 'text-[#C5A869]' : ''
                  }`}
                >
                  EXPERIENCE
                </a>
                <button
                  type="button"
                  onClick={() => setExperienceDropdownOpen(!experienceDropdownOpen)}
                  className="p-1 hover:text-[#C5A869] text-[#A69E92] transition-colors cursor-pointer"
                  aria-label="Toggle Experience Menu"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${experienceDropdownOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                </button>
              </div>

              {/* Experience Mini-Menu (Solid Deep Charcoal) */}
              {experienceDropdownOpen && (
                <div 
                  className="absolute top-full left-0 w-[350px] bg-[#24211D] border border-[#C5A869]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-4 mt-1 rounded-[2px] flex flex-col gap-2 animate-fadeIn z-50"
                >
                  <div className="pb-2 border-b border-white/10 px-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#C5A869]">
                      Spatial Sanctuary
                    </span>
                    <a href="/experience/" className="text-[10px] text-[#D4CBBF] hover:text-[#C5A869] uppercase font-semibold transition-colors">
                      Full Tour &rarr;
                    </a>
                  </div>

                  {/* Space 1: The Arrival Lounge */}
                  <a href="/experience/#lounge" className="p-2.5 rounded-[2px] bg-[#1E1B18] hover:bg-[#2C2722] border border-white/5 hover:border-[#C5A869]/40 transition-colors block text-left group">
                    <div className="text-xs font-semibold text-[#F7F4EE] group-hover:text-[#C5A869] transition-colors tracking-normal normal-case">
                      The Arrival Lounge
                    </div>
                    <div className="text-[11px] text-[#A69E92] tracking-normal normal-case font-light mt-0.5">
                      Sensory decompression & herbal hospitality
                    </div>
                  </a>

                  {/* Space 2: The Treatment Operatory */}
                  <a href="/experience/#operatory" className="p-2.5 rounded-[2px] bg-[#1E1B18] hover:bg-[#2C2722] border border-white/5 hover:border-[#C5A869]/40 transition-colors block text-left group">
                    <div className="text-xs font-semibold text-[#F7F4EE] group-hover:text-[#C5A869] transition-colors tracking-normal normal-case">
                      The Treatment Operatory
                    </div>
                    <div className="text-[11px] text-[#A69E92] tracking-normal normal-case font-light mt-0.5">
                      Skyline views & ultra-quiet electric drills
                    </div>
                  </a>

                  {/* Space 3: The Ceramist Atelier */}
                  <a href="/experience/#ceramist" className="p-2.5 rounded-[2px] bg-[#1E1B18] hover:bg-[#2C2722] border border-white/5 hover:border-[#C5A869]/40 transition-colors block text-left group">
                    <div className="text-xs font-semibold text-[#F7F4EE] group-hover:text-[#C5A869] transition-colors tracking-normal normal-case">
                      The Ceramist Atelier
                    </div>
                    <div className="text-[11px] text-[#A69E92] tracking-normal normal-case font-light mt-0.5">
                      Hand-layered artisan ceramic restorations
                    </div>
                  </a>
                </div>
              )}
            </div>

            <a href="/#booking" className="py-2 hover:text-[#C5A869] transition-colors whitespace-nowrap">
              CONTACT US
            </a>
          </nav>

          {/* Right Action Cluster: Social Logos & High-Contrast Gold Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Direct Social Logos against Charcoal */}
            <div className="flex items-center gap-1.5 pr-2.5 border-r border-[#C5A869]/25">
              {/* WhatsApp */}
              <a
                href="https://wa.me/639178425300"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Concierge (+63 917 842 5300)"
                aria-label="WhatsApp Concierge"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#25D366]/20 hover:border-[#25D366] hover:text-[#25D366] text-[#D4CBBF] flex items-center justify-center transition-all shadow-xs group"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.53C9.36 7.53 9.09 7.6 8.87 7.84C8.65 8.08 8.03 8.66 8.03 9.84C8.03 11.02 8.89 12.16 9.01 12.32C9.13 12.48 10.7 14.9 13.1 15.93C15.1 16.79 15.51 16.62 15.95 16.58C16.39 16.54 17.37 16 17.57 15.43C17.77 14.86 17.77 14.37 17.71 14.27C17.65 14.17 17.49 14.11 17.25 13.99C17.01 13.87 15.82 13.29 15.6 13.21C15.38 13.13 15.22 13.09 15.06 13.33C14.9 13.57 14.44 14.11 14.3 14.27C14.16 14.43 14.02 14.45 13.78 14.33C13.54 14.21 12.76 13.95 11.84 13.13C11.12 12.49 10.63 11.7 10.49 11.46C10.35 11.22 10.47 11.09 10.59 10.97C10.7 10.86 10.84 10.68 10.96 10.54C11.08 10.4 11.12 10.3 11.2 10.14C11.28 9.98 11.24 9.84 11.18 9.72C11.12 9.6 10.66 8.47 10.47 8.01C10.28 7.56 10.09 7.62 9.95 7.61C9.81 7.6 9.67 7.53 9.53 7.53Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/valencedentalatelier"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram (@valencedentalatelier)"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#E4405F]/20 hover:border-[#E4405F] hover:text-[#E4405F] text-[#D4CBBF] flex items-center justify-center transition-all shadow-xs group"
              >
                <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/valencedentalatelier"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook (Valence Dental Atelier)"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/15 bg-white/5 hover:bg-[#1877F2]/20 hover:border-[#1877F2] hover:text-[#1877F2] text-[#D4CBBF] flex items-center justify-center transition-all shadow-xs group"
              >
                <Facebook className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <button
              onClick={handleBookingClick}
              className="bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] font-semibold text-[11px] tracking-[0.2em] uppercase px-7 py-3.5 rounded-[2px] transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,105,0.25)] hover:shadow-[0_6px_20px_rgba(197,168,105,0.4)] whitespace-nowrap cursor-pointer active:scale-[0.98]"
            >
              BOOK APPOINTMENT
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 text-white hover:text-[#C5A869] transition-colors"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Deep Charcoal with Gold Accents & Ivory Text) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#24211D]/98 backdrop-blur-xl flex flex-col justify-between p-7 text-[#F7F4EE] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 text-[#C5A869]">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M50 12C36 12 24 22 18 36C12 50 14 66 18 80C22 92 32 92 38 82C44 72 46 72 50 72C54 72 56 72 62 82C68 92 78 92 82 80C86 66 88 50 82 36C76 22 64 12 50 12Z" fill="currentColor" fillOpacity="0.1" />
                </svg>
              </div>
              <span className="font-serif text-xl tracking-[0.16em] uppercase text-white">
                valence <span className="text-[#C5A869] text-sm block tracking-[0.24em] font-sans">DENTAL ATELIER</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#A69E92] hover:text-white transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 py-6">
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#F7F4EE] hover:text-[#C5A869] transition-colors"
            >
              HOME
            </a>

            <a
              href="/about/"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#F7F4EE] hover:text-[#C5A869] transition-colors"
            >
              ABOUT US
            </a>

            {/* Mobile Services Link + Accordion */}
            <div>
              <div className="w-full flex items-center justify-between">
                <a
                  href="/services/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#F7F4EE] hover:text-[#C5A869] transition-colors py-1"
                >
                  SERVICES
                </a>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 text-[#A69E92]"
                  aria-label="Expand services"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                </button>
              </div>

              {mobileServicesOpen && (
                <div className="pl-4 mt-3 space-y-3 border-l-2 border-[#C5A869]/40 py-2">
                  <a
                    href="/services/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#C5A869] mb-2"
                  >
                    View Services Directory &rarr;
                  </a>
                  {ALL_SERVICES_LIST.map((service, idx) => (
                    <a
                      key={service.slug}
                      href={service.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#D4CBBF] hover:text-[#C5A869] transition-colors"
                    >
                      <span className="font-mono text-xs text-[#C5A869] mr-2">0{idx + 1}</span>
                      {service.shortTitle}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Experience Link + Accordion */}
            <div>
              <div className="w-full flex items-center justify-between">
                <a
                  href="/experience/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#F7F4EE] hover:text-[#C5A869] transition-colors py-1"
                >
                  EXPERIENCE
                </a>
                <button
                  type="button"
                  onClick={() => setMobileExperienceOpen(!mobileExperienceOpen)}
                  className="p-2 text-[#A69E92]"
                  aria-label="Expand experience"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileExperienceOpen ? 'rotate-180 text-[#C5A869]' : ''}`} />
                </button>
              </div>

              {mobileExperienceOpen && (
                <div className="pl-4 mt-3 space-y-3 border-l-2 border-[#C5A869]/40 py-2">
                  <a href="/experience/" onClick={() => setMobileMenuOpen(false)} className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#C5A869] mb-2">
                    Complete Experience Overview &rarr;
                  </a>
                  <a href="/experience/#lounge" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#D4CBBF] hover:text-[#C5A869]">
                    The Arrival Lounge
                    <span className="block text-xs text-[#A69E92] font-light">Sensory decompression & herbal hospitality</span>
                  </a>
                  <a href="/experience/#operatory" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#D4CBBF] hover:text-[#C5A869]">
                    The Treatment Operatory
                    <span className="block text-xs text-[#A69E92] font-light">Skyline views & ultra-quiet electric drills</span>
                  </a>
                  <a href="/experience/#ceramist" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-[#D4CBBF] hover:text-[#C5A869]">
                    The Ceramist Atelier
                    <span className="block text-xs text-[#A69E92] font-light">Hand-layered artisan ceramic restorations</span>
                  </a>
                </div>
              )}
            </div>

            <a
              href="/#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-2xl text-[#F7F4EE] hover:text-[#C5A869] transition-colors"
            >
              CONTACT US
            </a>
          </nav>

          <div className="border-t border-white/10 pt-5 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleBookingClick();
              }}
              className="w-full py-4 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 rounded-[2px] transition-colors cursor-pointer"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-[#A69E92]">
              <a href={`tel:${CLINIC_INFO.mobile}`} className="flex items-center gap-1.5 hover:text-[#C5A869]">
                <Phone className="w-3.5 h-3.5 text-[#C5A869]" /> {CLINIC_INFO.mobile}
              </a>
              <span>·</span>
              <a href="https://wa.me/639178425300" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#C5A869]">
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A869]" /> WhatsApp Concierge
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
