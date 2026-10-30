import React, { useState } from 'react';
import { MessageSquare, Phone, Calendar, X, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingConciergeProps {
  onOpenBooking: () => void;
}

export const FloatingConcierge: React.FC<FloatingConciergeProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Menu */}
      {expanded && (
        <div className="bg-[#24211D]/98 backdrop-blur-md text-[#F7F4EE] p-4 rounded-sm border border-[#C5A869]/30 shadow-2xl mb-1 flex flex-col gap-2.5 min-w-[210px] animate-fadeIn text-xs">
          <div className="text-[10px] uppercase tracking-[0.18em] text-[#C5A869] font-semibold border-b border-white/10 pb-1.5 flex items-center justify-between">
            <span>Atelier Concierge</span>
            <Sparkles className="w-3 h-3 text-[#C5A869]" />
          </div>
          <button
            onClick={() => {
              setExpanded(false);
              onOpenBooking();
            }}
            className="flex items-center gap-2.5 py-1.5 text-white/90 hover:text-[#C5A869] transition-colors text-left cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Reserve Consultation</span>
          </button>
          <a
            href="https://wa.me/639178425300"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 py-1.5 text-white/90 hover:text-[#C5A869] transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>WhatsApp Direct</span>
          </a>
          <a
            href="viber://chat?number=639178425300"
            className="flex items-center gap-2.5 py-1.5 text-white/90 hover:text-[#C5A869] transition-colors"
          >
            <span className="font-semibold text-[#C5A869] text-xs">V</span>
            <span>Viber Concierge</span>
          </a>
          <a
            href={`tel:${CLINIC_INFO.mobile}`}
            className="flex items-center gap-2.5 py-1.5 text-white/90 hover:text-[#C5A869] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Call Concierge Desk</span>
          </a>
        </div>
      )}

      {/* Main Trigger Toggle in Deep Charcoal & Champagne Gold */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="h-12 px-4 rounded-full bg-[#24211D] text-white border border-[#C5A869]/60 hover:border-[#C5A869] shadow-xl flex items-center gap-2.5 text-xs tracking-[0.14em] uppercase font-medium transition-all group cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Toggle concierge assistance"
      >
        <span className="w-2 h-2 rounded-full bg-[#C5A869] animate-pulse" />
        <span className="font-serif tracking-widest text-[13px] text-[#F7F4EE]">Concierge</span>
        {expanded ? (
          <X className="w-3.5 h-3.5 text-[#C5A869]" />
        ) : (
          <MessageSquare className="w-3.5 h-3.5 text-[#C5A869] group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};
