export interface Treatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
  visits: string;
  idealFor: string;
  category: 'Aesthetic' | 'Restorative' | 'Preventative' | 'Orthodontic';
  details: string[];
}

export interface SuiteSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  treatment: string;
  timeframe: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  comfortPreference: string;
  notes: string;
}
