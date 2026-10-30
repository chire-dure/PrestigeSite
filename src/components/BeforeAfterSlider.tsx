import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, CheckCircle2, Info } from 'lucide-react';
import craftsmanshipImage from '../assets/images/dental_craftsmanship_close_up_1792659238510.jpg';

interface CaseStudy {
  id: string;
  patientNote: string;
  treatmentName: string;
  duration: string;
  technique: string;
  notes: string[];
}

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(52); // percentage
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases: CaseStudy[] = [
    {
      id: "case-1",
      treatmentName: "Biomimetic Ceramic Veneers (6 Anterior Units)",
      patientNote: "Correction of incisal wear, mild diastema, and intrinsic fluorosis staining while preserving 95% of healthy natural enamel.",
      duration: "3 visits over 2 weeks",
      technique: "Micro-layered Feldspathic Porcelain with Vita 3D Master Bleach Blending",
      notes: [
        "Incisal edge length balanced to lower lip curvature",
        "Individualized surface micro-texture mimicking natural developmental grooves",
        "Zero artificial 'flat opaque white' effect"
      ]
    },
    {
      id: "case-2",
      treatmentName: "Clear Aligner Guided Harmony + Biological Enamel Brightening",
      patientNote: "Correction of severe lower crowding and crossbite coupled with gentle in-office remineralizing whitening.",
      duration: "8 months non-extraction alignment",
      technique: "Custom clear aligner sequence with low-friction biomechanics",
      notes: [
        "Airway posture and arch width expanded by 2.4mm",
        "No tooth extractions required",
        "Followed by Guided Biofilm Therapy deep prophylaxis"
      ]
    }
  ];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1) { // Left mouse button held
      handleMove(e.clientX);
    }
  };

  const currentCase = cases[activeCase];

  return (
    <section className="py-28 md:py-32 bg-transparent text-[#24211D] border-b border-[#E5D8C3] relative overflow-hidden">
      {/* Subtle Gold Dust Overlay */}
      <div className="gold-dust-section" aria-hidden="true" />
      <div className="gold-dust-corner" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        {/* Section Header with generous spacing */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869] mb-3">
            Clinical Documentation
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#24211D] tracking-tight leading-[1.15] mb-5">
            Subtle architecture. <br />
            <em className="font-normal italic text-[#C5A869]">Imperceptible intervention.</em>
          </h2>
          <p className="text-[#4A453E] text-sm sm:text-base font-light leading-relaxed">
            When restorative dentistry achieves its highest form, no one compliments your dentist — they simply compliment your quiet assurance. Slide across to inspect the balance between biological preservation and refined harmony.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex items-center gap-3.5 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(idx)}
              className={`px-6 py-3 text-xs uppercase tracking-[0.16em] font-semibold rounded-[2px] transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                activeCase === idx
                  ? 'bg-[#C5A869] text-[#24211D] shadow-sm'
                  : 'bg-[#E9DFCC] border border-[#DDD4C5] text-[#24211D] hover:border-[#C5A869]'
              }`}
            >
              Case 0{idx + 1}: {c.treatmentName.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Interactive Split Visual Card in Deep Charcoal (7 cols) */}
          <div className="lg:col-span-7 bg-[#24211D] p-5 sm:p-7 rounded-[2px] shadow-2xl border border-[#C5A869]/30">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] overflow-hidden select-none cursor-ew-resize rounded-[2px]"
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
            >
              {/* After Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={craftsmanshipImage || "/assets/images/dental_craftsmanship_close_up_1792659238510.jpg"}
                  alt="Restored Smile Architecture"
                  className="w-full h-full object-cover filter brightness-[1.05] contrast-[1.02]"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-[#C5A869] border border-white/10 rounded-[2px]">
                  After · Restored Biomechanics
                </div>
              </div>

              {/* Before Image */}
              <div 
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={craftsmanshipImage || "/assets/images/dental_craftsmanship_close_up_1792659238510.jpg"}
                  alt="Initial Presentation"
                  className="absolute inset-0 w-full h-full object-cover filter sepia-[0.35] contrast-[0.95] hue-rotate-[15deg] brightness-[0.88]"
                  style={{ width: `${containerRef.current ? containerRef.current.clientWidth : 700}px`, maxWidth: 'none' }}
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-white/90 border border-white/10 rounded-[2px]">
                  Before · Baseline Anatomy
                </div>
              </div>

              {/* Slider Divider Line */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-[#C5A869] pointer-events-none shadow-[0_0_14px_rgba(0,0,0,0.9)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#24211D] border-2 border-[#C5A869] text-[#C5A869] flex items-center justify-center shadow-lg pointer-events-auto">
                  <SlidersHorizontal className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 text-[11px] text-white/60 tracking-[0.16em] uppercase">
              <span>Drag slider horizontally to compare</span>
              <span className="text-[#C5A869] font-mono tabular-nums">{Math.round(sliderPosition)}% reveal</span>
            </div>
          </div>

          {/* Case Technical Specifications & Narrative (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#C5A869]">
                Treatment Profile
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#24211D] mt-1.5 mb-3">
                {currentCase.treatmentName}
              </h3>
              <p className="text-[#4A453E] text-sm leading-relaxed font-light">
                {currentCase.patientNote}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-[#E5D8C3] py-5 text-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#706B62] block mb-1">
                  Treatment Duration
                </span>
                <span className="font-medium text-[#24211D]">{currentCase.duration}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#706B62] block mb-1">
                  Primary Modality
                </span>
                <span className="font-medium text-[#24211D] text-[11px] leading-tight block">{currentCase.technique}</span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.16em] text-[#24211D] font-semibold block">
                Biomimetic Clinical Highlights
              </span>
              {currentCase.notes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A453E] font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                  <span>{note}</span>
                </div>
              ))}
            </div>

            {/* Factual Educational Disclaimer */}
            <div className="p-3.5 bg-[#E9DFCC] border border-[#DDD4C5] rounded-[2px] flex items-start gap-2.5 text-[11px] text-[#59534A]">
              <Info className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
              <span>
                Representative clinical sample documentation. Recommended procedures and outcomes are subject to individual biological evaluation and clinical assessment by Dr. Sarah Jenkins.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
