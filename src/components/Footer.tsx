import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ALL_SERVICES_LIST } from '../data/servicesData';
import { 
  ArrowUpRight, 
  Instagram, 
  Facebook 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp Concierge",
      label: "+63 917 842 5300",
      url: "https://wa.me/639178425300",
      title: "Direct WhatsApp Concierge: +63 917 842 5300",
      hoverBg: "hover:bg-[#25D366] hover:border-[#25D366] hover:text-white",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.53C9.36 7.53 9.09 7.6 8.87 7.84C8.65 8.08 8.03 8.66 8.03 9.84C8.03 11.02 8.89 12.16 9.01 12.32C9.13 12.48 10.7 14.9 13.1 15.93C15.1 16.79 15.51 16.62 15.95 16.58C16.39 16.54 17.37 16 17.57 15.43C17.77 14.86 17.77 14.37 17.71 14.27C17.65 14.17 17.49 14.11 17.25 13.99C17.01 13.87 15.82 13.29 15.6 13.21C15.38 13.13 15.22 13.09 15.06 13.33C14.9 13.57 14.44 14.11 14.3 14.27C14.16 14.43 14.02 14.45 13.78 14.33C13.54 14.21 12.76 13.95 11.84 13.13C11.12 12.49 10.63 11.7 10.49 11.46C10.35 11.22 10.47 11.09 10.59 10.97C10.7 10.86 10.84 10.68 10.96 10.54C11.08 10.4 11.12 10.3 11.2 10.14C11.28 9.98 11.24 9.84 11.18 9.72C11.12 9.6 10.66 8.47 10.47 8.01C10.28 7.56 10.09 7.62 9.95 7.61C9.81 7.6 9.67 7.53 9.53 7.53Z" />
        </svg>
      )
    },
    {
      name: "Instagram Atelier",
      label: "@valencedentalatelier",
      url: "https://instagram.com/valencedentalatelier",
      title: "Direct Instagram: @valencedentalatelier",
      hoverBg: "hover:bg-[#E4405F] hover:border-[#E4405F] hover:text-white",
      icon: <Instagram className="w-5 h-5 text-current" />
    },
    {
      name: "Facebook Practice",
      label: "Valence Dental Atelier",
      url: "https://facebook.com/valencedentalatelier",
      title: "Direct Facebook: Valence Dental Atelier",
      hoverBg: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white",
      icon: <Facebook className="w-5 h-5 text-current" />
    }
  ];

  return (
    <footer className="bg-[#24211D] text-[#F7F4EE] pt-6 pb-16 relative overflow-hidden">
      {/* Subtle Stardust on Dark Charcoal */}
      <div className="gold-dust-dark" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Soft Feathered Internal Transition Divider (No full-screen harsh dividing line) */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#C5A869]/25 to-transparent mb-16" />

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Direct Channels Column (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <a href="/" className="font-serif text-2xl tracking-[0.2em] uppercase text-white inline-block">
                {CLINIC_INFO.name} <span className="text-[#C5A869]">ATELIER</span>
              </a>
              <p className="font-serif italic text-white/50 text-sm mt-2">
                “{CLINIC_INFO.tagline}”
              </p>
            </div>

            <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              An architectural restorative dental sanctuary in Metro Manila devoted to biological tooth preservation, sensory decompression, and tailored aesthetic craftsmanship.
            </p>

            <div className="pt-1">
              <a
                href="/#booking"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C5A869] hover:text-white transition-colors"
              >
                <span>Request Concierge Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="pt-1 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-[#C5A869]">
              <a href="/about/" className="hover:text-white transition-colors">About Us</a>
              <span>·</span>
              <a href="/services/" className="hover:text-white transition-colors">Services Hub</a>
              <span>·</span>
              <a href="/experience/" className="hover:text-white transition-colors">Experience</a>
            </div>

            <div className="pt-1 text-xs text-white/50 space-y-1">
              <div>Direct Line: <a href={`tel:${CLINIC_INFO.mobile}`} className="text-white hover:text-[#C5A869] transition-colors">{CLINIC_INFO.mobile}</a></div>
              <div>Concierge: <a href={`mailto:${CLINIC_INFO.email}`} className="text-white hover:text-[#C5A869] transition-colors">{CLINIC_INFO.email}</a></div>
            </div>

            {/* Direct Logos: WhatsApp, Instagram, Facebook */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#C5A869] font-medium mb-3">
                Direct Channels &amp; Dedicated Concierge
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    aria-label={item.name}
                    className={`w-11 h-11 rounded-full border border-white/20 bg-white/[0.04] text-white/80 ${item.hoverBg} flex items-center justify-center transition-all duration-300 shadow-xs hover:scale-110 active:scale-95`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Dedicated Eight Services Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C5A869] font-semibold mb-3">
              Eight Dedicated Services
            </div>

            <ul className="space-y-2.5 text-xs text-white/60">
              {ALL_SERVICES_LIST.map((service) => (
                <li key={service.slug}>
                  <a href={service.url} className="hover:text-white transition-colors flex items-center justify-between group py-0.5">
                    <span>{service.shortTitle}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A869]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Practice Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="text-xs uppercase tracking-[0.2em] text-[#C5A869] font-semibold">
              Atelier Locations
            </div>

            <div className="space-y-5 text-xs">
              <div className="border-b border-white/5 pb-4">
                <div className="font-medium text-white/90">One Bonifacio High Street Suite</div>
                <div className="text-white/50 mt-1">
                  Level 14, Penthouse Suite 1408, BGC, Taguig City
                </div>
                <div className="text-[11px] text-white/40 mt-1">
                  Mon – Sat: 9:00 AM – 7:00 PM · Valet Available
                </div>
              </div>

              <div>
                <div className="font-medium text-white/90">Ayala Triangle Tower Two Suite</div>
                <div className="text-white/50 mt-1">
                  Level 21, Executive Tower, Paseo de Roxas, Makati CBD
                </div>
                <div className="text-[11px] text-white/40 mt-1">
                  Mon – Fri: 8:30 AM – 6:30 PM · Undercover Parking
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Direct Social Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-white/40">
          <div>
            &copy; {currentYear} {CLINIC_INFO.fullName}. All rights reserved. Registered medical practice in the Republic of the Philippines.
          </div>

          {/* Clickable Social Logos directly linked */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                aria-label={item.name}
                className={`w-8 h-8 rounded-full border border-white/15 bg-white/[0.03] text-white/60 ${item.hoverBg} flex items-center justify-center transition-all duration-200 hover:scale-105`}
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="font-serif italic text-white/30 text-xs">
            Where considered smiles begin.
          </div>
        </div>

      </div>
    </footer>
  );
};
