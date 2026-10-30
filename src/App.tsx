import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PhilosophyStory } from './components/PhilosophyStory';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { TreatmentMenu } from './components/TreatmentMenu';
import { TheSuites } from './components/TheSuites';
import { DentistProfile } from './components/DentistProfile';
import { TestimonialsPress } from './components/TestimonialsPress';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingConcierge } from './components/FloatingConcierge';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Comprehensive Diagnostic Consultation');

  const handleOpenBooking = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromMenu = (serviceName: string) => {
    setSelectedService(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] bg-ivory-gold-dust text-[#24211D] selection:bg-[#C5A869] selection:text-[#24211D] font-sans">
      {/* Strict 3-zone Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero with Parallax & Acoustic Relaxation Soundscape */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />

        {/* The Atelier Manifesto & Unhurried Philosophy */}
        <PhilosophyStory />

        {/* Interactive Before & After Smile Architecture Comparison */}
        <BeforeAfterSlider />

        {/* Treatment Menu with Expandable Clinical Protocols */}
        <TreatmentMenu onSelectService={handleSelectServiceFromMenu} />

        {/* The Spatial Architecture & Suites Interactive Tour */}
        <TheSuites />

        {/* Lead Clinician Bio & Credentials */}
        <DentistProfile />

        {/* Attributable Patient Stories, Press Mentions & FAQs */}
        <TestimonialsPress />

        {/* Interactive Consultation Concierge Booking Flow */}
        <BookingSection
          preselectedService={selectedService}
          onClearPreselect={() => setSelectedService('Comprehensive Diagnostic Consultation')}
        />
      </main>

      {/* Quiet Luxury Footer */}
      <Footer />

      {/* Floating Concierge Desk for Instant WhatsApp / Viber / Booking */}
      <FloatingConcierge onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
