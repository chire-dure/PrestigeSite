import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { ConsultationFormData } from '../types';
import { Calendar, Clock, MapPin, Sparkles, CheckCircle2, MessageSquare, Phone, Shield, ArrowRight } from 'lucide-react';

interface BookingSectionProps {
  preselectedService?: string;
  onClearPreselect?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService, onClearPreselect }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: preselectedService || 'Comprehensive Diagnostic Consultation',
    location: CLINIC_INFO.locations[0].name,
    preferredDate: '',
    preferredTime: 'Morning (9:00 AM – 12:00 PM)',
    comfortPreference: 'Standard Comfort',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set minimum date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please provide your full name.');
      return;
    }

    // Philippine mobile or international phone check
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setErrorMsg('Please enter a valid mobile number (e.g. 0917 123 4567).');
      return;
    }

    if (!formData.preferredDate) {
      setErrorMsg('Please select your preferred consultation date.');
      return;
    }

    setIsSubmitting(true);

    // Generate reference code
    const randomRef = 'VAL-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(randomRef);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const downloadCalendarEvent = () => {
    const event = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:Valence Dental Atelier Consultation (${formData.service})`,
      `DESCRIPTION:Consultation with Dr. Sarah Jenkins and clinical concierge at ${formData.location}. Ref: ${bookingRef}`,
      `LOCATION:${formData.location === 'One Bonifacio High Street' ? CLINIC_INFO.locations[0].suite : CLINIC_INFO.locations[1].suite}`,
      `DTSTART:${formData.preferredDate.replace(/-/g, '')}T090000Z`,
      `DTEND:${formData.preferredDate.replace(/-/g, '')}T103000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Valence_Consultation_${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking" style={{ backgroundColor: '#24211D' }} className="pt-28 md:pt-32 pb-12 bg-[#24211D] text-[#F7F4EE] relative overflow-hidden">
      {/* Background architectural gold glow & delicate dark stardust */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="gold-dust-dark" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Editorial Invitation & Concierge (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#C5A869]">
                Private Concierge
              </span>
              <div className="w-12 h-[1.5px] bg-[#C5A869] my-4" />
              <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
                Begin your consultation.
              </h2>
              <p className="mt-4 text-white/70 text-sm sm:text-base font-light leading-relaxed">
                Step into an unhurried, pressure-free dialogue. We reserve 60 to 90 minutes exclusively for you to discuss anatomy, past anxieties, and the smile you wish to inhabit.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="p-6 bg-white/5 border border-white/10 rounded-[2px]">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-1.5">
                  Atelier Concierge Hotline
                </div>
                <a href={`tel:${CLINIC_INFO.mobile}`} className="text-sm text-white hover:text-[#C5A869] transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A869]" />
                  <span>{CLINIC_INFO.mobile} · {CLINIC_INFO.phone}</span>
                </a>
                <div className="text-[11px] text-white/50 mt-1 font-light">
                  Dedicated concierge available Mon – Sat, 8:30 AM – 7:00 PM
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-[2px]">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[#C5A869] font-medium mb-1.5">
                  Instant Messaging Assistance
                </div>
                <div className="flex items-center gap-4 text-xs text-white/80 mt-2">
                  <a 
                    href="https://wa.me/639178425300" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#C5A869]" /> WhatsApp
                  </a>
                  <span>·</span>
                  <a 
                    href="viber://chat?number=639178425300" 
                    className="inline-flex items-center gap-1.5 hover:text-[#C5A869] transition-colors"
                  >
                    Viber Concierge
                  </a>
                </div>
              </div>

              {/* Atelier Practice Locations Template Card */}
              <div className="p-6 bg-white/[0.04] border border-white/10 rounded-[2px] space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#C5A869] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C5A869]" />
                    <span>Atelier Practice Locations</span>
                  </div>
                  <span className="text-[10px] text-white/40 uppercase tracking-[0.14em]">Metro Manila</span>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Location 1: BGC */}
                  <div className="border-b border-white/5 pb-3.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white/95 text-xs sm:text-sm">
                        One Bonifacio High Street Suite
                      </h4>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] bg-[#C5A869]/15 text-[#C5A869] px-2 py-0.5 rounded-[2px] font-mono">
                        BGC Penthouse
                      </span>
                    </div>
                    <p className="text-white/60 text-[11.5px] font-light mt-1.5 leading-relaxed">
                      Level 14, Penthouse Suite 1408, One Bonifacio High Street, 5th Ave cor. 28th St, BGC, Taguig
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/50 mt-2 font-light">
                      <span className="flex items-center gap-1.5 text-white/75">
                        <Clock className="w-3 h-3 text-[#C5A869]" /> Mon – Sat: 9:00 AM – 7:00 PM
                      </span>
                      <span>·</span>
                      <span className="text-[#C5A869]">B1 Valet Parking Available</span>
                    </div>
                  </div>

                  {/* Location 2: Makati */}
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white/95 text-xs sm:text-sm">
                        Ayala Triangle Tower Two Suite
                      </h4>
                      <span className="text-[9.5px] uppercase tracking-[0.16em] bg-[#C5A869]/15 text-[#C5A869] px-2 py-0.5 rounded-[2px] font-mono">
                        Makati CBD
                      </span>
                    </div>
                    <p className="text-white/60 text-[11.5px] font-light mt-1.5 leading-relaxed">
                      Level 21, Executive Tower Two, Paseo de Roxas cor. Makati Avenue, Makati Central Business District
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-white/50 mt-2 font-light">
                      <span className="flex items-center gap-1.5 text-white/75">
                        <Clock className="w-3 h-3 text-[#C5A869]" /> Mon – Fri: 8:30 AM – 6:30 PM
                      </span>
                      <span>·</span>
                      <span className="text-[#C5A869]">Underground Parking via Makati Ave</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reassurance bullet points */}
            <div className="space-y-2.5 text-xs text-white/60 font-light">
              <div className="flex items-center gap-2.5">
                <Shield className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Zero sales pressure or procedure quotas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Responses dispatched within 2 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Booking Form Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF7F2] text-[#1C1A17] p-8 sm:p-11 rounded-[2px] shadow-2xl border border-[#E5D8C3]">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#1C1A17]">
                    Reserve An Appointment
                  </h3>
                  <p className="text-xs text-[#706B62] mt-1 font-light">
                    Our concierge coordinator will personally verify suite availability.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-[2px]">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Sofia Laurel"
                      required
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Phone Number (Mobile) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0917 123 4567"
                      required
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Suite Location
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    >
                      {CLINIC_INFO.locations.map(loc => (
                        <option key={loc.name} value={loc.name}>{loc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Treatment Focus
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    >
                      <option value="General Dentistry & Comprehensive Checkup">General Dentistry & Comprehensive Checkup</option>
                      <option value="Professional Teeth Cleaning & Oral Prophylaxis">Professional Teeth Cleaning & Oral Prophylaxis</option>
                      <option value="Tooth-Colored Dental Fillings">Tooth-Colored Dental Fillings</option>
                      <option value="Root Canal Treatment & Endodontic Therapy">Root Canal Treatment & Endodontic Therapy</option>
                      <option value="Tooth Extraction & Wisdom Tooth Removal">Tooth Extraction & Wisdom Tooth Removal</option>
                      <option value="Dental Braces & Clear Aligners">Dental Braces & Clear Aligners</option>
                      <option value="Dental Crowns & Bridges">Dental Crowns & Bridges</option>
                      <option value="Cosmetic Dentistry: Veneers & Teeth Whitening">Cosmetic Dentistry: Veneers & Teeth Whitening</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Patient Comfort Preference
                    </label>
                    <select
                      name="comfortPreference"
                      value={formData.comfortPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    >
                      <option value="Standard Comfort">Standard Unhurried Care</option>
                      <option value="High Anxiety / Sensitive">High Dental Anxiety (Request Extra Reassurance)</option>
                      <option value="Low Pain Threshold">Low Pain Tolerance (Request Topical Pre-Numbing)</option>
                      <option value="Sound Sensitive">Sound Sensitive (Request Noise-Canceling Bose)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      min={minDate}
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors text-[#1C1A17]"
                    >
                      <option value="Morning (9:00 AM – 12:00 PM)">Morning (9:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (1:00 PM – 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                      <option value="Twilight (4:00 PM – 7:00 PM)">Twilight (4:00 PM – 7:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.16em] font-semibold text-[#555047] mb-1.5">
                    Specific Concerns or Aesthetic Goals (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Tell us about previous dental experiences, specific tooth concerns, or wedding/event timelines..."
                    className="w-full px-4 py-3 text-sm bg-white border border-[#E5D8C3] focus:border-[#C5A869] focus:outline-none rounded-[2px] transition-colors resize-none text-[#1C1A17]"
                  />
                </div>

                {/* Signature Brushed Gold Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C5A869] hover:bg-[#B39454] text-[#24211D] font-semibold text-xs tracking-[0.2em] uppercase rounded-[2px] transition-all duration-300 shadow-[0_4px_16px_rgba(197,168,105,0.25)] hover:shadow-[0_6px_20px_rgba(197,168,105,0.35)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? 'Confirming Concierge Slot...' : 'Submit Consultation Request'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              /* Success Confirmation Card */
              <div className="py-6 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border-2 border-[#C5A869] flex items-center justify-center mx-auto text-[#C5A869]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C5A869]">
                    Reservation Requested
                  </span>
                  <h4 className="font-serif text-3xl font-light text-[#1C1A17] mt-1.5">
                    Thank you, {formData.fullName}.
                  </h4>
                  <p className="text-sm text-[#555047] max-w-md mx-auto mt-2 leading-relaxed font-light">
                    Your request has been routed to our Lead Clinical Concierge. We have provisionally set aside a 60-minute window for your care.
                  </p>
                </div>

                <div className="bg-white p-6 border border-[#E5D8C3] text-left max-w-md mx-auto space-y-2.5 text-xs rounded-[2px] shadow-sm">
                  <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
                    <span className="text-[#736E65]">Reference Code:</span>
                    <span className="font-mono font-semibold text-[#1C1A17]">{bookingRef}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
                    <span className="text-[#736E65]">Procedure Focus:</span>
                    <span className="font-medium text-[#1C1A17]">{formData.service}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E8E2D6] pb-2">
                    <span className="text-[#736E65]">Suite:</span>
                    <span className="font-medium text-[#1C1A17]">{formData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#736E65]">Preferred Window:</span>
                    <span className="font-medium text-[#1C1A17]">{formData.preferredDate} ({formData.preferredTime})</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={downloadCalendarEvent}
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#C5A869] hover:bg-[#B39454] text-[#1C1A17] font-semibold text-xs uppercase tracking-[0.16em] rounded-[2px] transition-colors"
                  >
                    Add to Calendar (.ics)
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 bg-white border border-[#E5D8C3] text-[#706B62] hover:text-[#1C1A17] text-xs uppercase tracking-[0.14em] rounded-[2px]"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

