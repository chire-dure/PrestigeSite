import { Treatment, SuiteSpace, Testimonial } from '../types';

export const CLINIC_INFO = {
  name: "VALENCE",
  fullName: "Valence Dental Atelier",
  estYear: "2016",
  tagline: "Where considered smiles begin.",
  editorialHeadline: "Your smile, reconsidered.",
  subhead: "Biological preservation, acoustic serenity, and bespoke aesthetic craftsmanship in Metro Manila.",
  phone: "+63 (2) 8892 4100",
  mobile: "+63 917 842 5300",
  email: "concierge@valenceatelier.ph",
  locations: [
    {
      name: "One Bonifacio High Street",
      suite: "Level 14, Penthouse Suite 1408, One Bonifacio High Street",
      area: "Bonifacio Global City, Taguig City, Metro Manila",
      hours: "Mon – Sat: 9:00 AM – 7:00 PM (By Appointment)",
      parking: "Valet parking available at B1 Lobby"
    },
    {
      name: "Ayala Triangle Tower Two",
      suite: "Level 21, Executive Tower, Paseo de Roxas",
      area: "Makati Central Business District, Metro Manila",
      hours: "Mon – Fri: 8:30 AM – 6:30 PM (By Appointment)",
      parking: "Underground parking via Makati Avenue entrance"
    }
  ],
  stats: [
    { label: "Dedicated Disciplines", value: "8", detail: "Comprehensive dental care" },
    { label: "Reserved Per Consultation", value: "60–90 min", detail: "Thorough, unhurried dialogue" },
    { label: "Atelier Suites in Metro Manila", value: "2", detail: "BGC & Makati CBD" },
    { label: "Clinician-to-Patient Care", value: "1:1", detail: "Continuous personal attention" }
  ]
};

export const TREATMENTS: Treatment[] = [
  {
    id: "porcelain-veneers",
    name: "Bespoke Ceramic Veneers",
    tagline: "Micro-layered feldspathic and lithium disilicate porcelain tailored to facial anatomy.",
    description: "Every ceramic veneer is crafted like fine sculpture. We replicate natural enamel depth, micro-texture, and translucency rather than creating uniform, opaque piano keys. Your smile remains authentically yours, elevated with subtle harmony.",
    duration: "2–3 visits",
    visits: "Trial Smile Diagnostic + Prep + Master Bond",
    idealFor: "Discoloration, uneven proportions, chipped edges, or diastema closure.",
    category: "Aesthetic",
    details: [
      "Digital Smile Design (DSD) 3D preview before touching any tooth",
      "Conservative minimal-prep technique to protect healthy enamel",
      "True-color 5500K daylight chairside master ceramist shade mapping",
      "Non-destructive biocompatible bonding for 15–20+ year expected longevity"
    ]
  },
  {
    id: "clear-aligners",
    name: "Architectural Orthodontics & Clear Aligners",
    tagline: "Orthodontic harmony designed for facial symmetry and optimal airway health.",
    description: "We do not merely straighten teeth; we position them to support your lip posture, facial profile, and TMJ jaw joint health. Utilizing custom clear aligner sequences and gentle micro-movements, we achieve refined alignment with minimal social disruption.",
    duration: "6–14 months",
    visits: "Check-in every 6–8 weeks (or virtual scans)",
    idealFor: "Crowding, spacing, relapse, and bite alignment without conspicuous metal brackets.",
    category: "Orthodontic",
    details: [
      "iTero Lumina 3D intraoral digital impressions (zero gag-inducing putty)",
      "Continuous force biomechanics reducing treatment soreness",
      "Simulated real-time treatment tracking on patient lounge displays",
      "Includes post-treatment Vivera retainer set and enamel polishing"
    ]
  },
  {
    id: "biomimetic-restorative",
    name: "Biomimetic Inlays, Onlays & Crowns",
    tagline: "Restoring broken teeth by copying nature's natural biomechanics.",
    description: "Traditional dentistry often grinds away 70% of a tooth to fit an aggressive crown. Our biomimetic philosophy seals and preserves natural tooth structure using stress-reduced composite resin bases and monolithic zirconia or lithium disilicate inlays.",
    duration: "1–2 visits",
    visits: "Digital Optical Scan + Precision Adhesive Sealing",
    idealFor: "Fractured teeth, deep decayed cavities, and replacing leaky mercury amalgam fillings.",
    category: "Restorative",
    details: [
      "Immediate Dentin Sealing (IDS) eliminating post-operative tooth sensitivity",
      "Fiber-reinforced composites mimicking natural dentin elasticity",
      "Zero aggressive tooth amputation; we preserve every viable millimeter",
      "Hospital-grade isolation under dental dam optics"
    ]
  },
  {
    id: "dental-implants",
    name: "Guided Titanium & Zirconia Implants",
    tagline: "Permanent tooth replacements anchored with computer-guided surgical navigation.",
    description: "Missing teeth affect facial tone and bone structure over time. Using CBCT 3D bone mapping and custom surgical navigation guides, we position dental implants within 0.1mm of planned trajectory for smooth healing and lasting stability.",
    duration: "3–4 months integration",
    visits: "Virtual Planning + Guided Placement + Custom Abutment & Crown",
    idealFor: "Single or multiple missing teeth, preventing bone loss, and replacing failing bridges.",
    category: "Restorative",
    details: [
      "Swiss Straumann & Nobel Biocare gold-standard implant systems",
      "Metal-free white ceramic zirconia options for high-translucency aesthetic zones",
      "Computer-guided surgical splints ensuring minimal soft-tissue incision",
      "Conscious IV sedation or twilight comfort available with board-certified anesthesiologists"
    ]
  },
  {
    id: "enamel-brightening",
    name: "Biological In-Office Enamel Brightening",
    tagline: "Deep stain lift formulated with potassium nitrate desensitizers and remineralization.",
    description: "A clinical brightening treatment engineered for comfort. We protect your gingival tissues with barrier dams and utilize pH-neutral hydrogen peroxide activated by gentle LED wavelength, concluding with amorphous calcium phosphate (ACP) gloss treatment.",
    duration: "75 minutes",
    visits: "Single appointment",
    idealFor: "Tea, coffee, red wine stains, natural age darkening, and pre-event rejuvenation.",
    category: "Preventative",
    details: [
      "Zero harsh light heat; minimizes thermal pulp sensitivity",
      "Custom take-home touch-up kit with tailored anatomical trays included",
      "Remineralizing hydroxyapatite serum application to reinforce enamel prisms",
      "Average lift of 4 to 8 Vita shade guide tones in one session"
    ]
  },
  {
    id: "periodontal-prophylaxis",
    name: "Atelier Prophylaxis & Guided Airflow Therapy",
    tagline: "Ultra-fine erythritol powder cleansing that leaves teeth velvet-smooth without scraping.",
    description: "Say goodbye to abrasive metal scraping tools. Our Guided Biofilm Therapy uses warm water, warm air, and microscopic medical-grade powder to remove plaque, biofilm, and surface stains with zero pain, even on sensitive gum lines.",
    duration: "50 minutes",
    visits: "Recommended every 6 months",
    idealFor: "All adults, implant wearers, orthodontic patients, and those with sensitive teeth.",
    category: "Preventative",
    details: [
      "Guided Biofilm Therapy (GBT) Swiss technology",
      "Warm saline fluid delivery system prevents shock to cold-sensitive dentin",
      "Fluoride-free nano-hydroxyapatite polishing glaze",
      "Includes comprehensive digital periodontal pocket chart"
    ]
  }
];

export const SUITE_SPACES: SuiteSpace[] = [
  {
    id: "lounge",
    title: "The Arrival Lounge",
    subtitle: "A restorative spatial threshold",
    description: "We intentionally dissolved the sterile, stressful cues of clinical dentistry. Upon entering, you are welcomed by natural travertine, fluted oak paneling, and an acoustic soundscape composed specifically to lower cortisol and steady the heart rate.",
    features: [
      "Bespoke herbal infusions & cold-pressed refreshments",
      "Acoustic isolation dampening outside urban frequencies",
      "Dedicated private concierge check-in with zero waiting queue",
      "Private work nook with high-speed fiber connectivity"
    ],
    image: "/assets/images/hero_dental_atelier_lounge_1792659237422.jpg"
  },
  {
    id: "suite",
    title: "The Treatment Operatory",
    subtitle: "High clinical rigor, zero hospital coldness",
    description: "Each suite is a self-contained private sanctuary facing panoramic skyline vistas. Our custom plush ergonomic chairs are contoured to cradle the spine and neck during extended restorative sessions.",
    features: [
      "Noise-cancelling Bose headphones with curated spatial playlists",
      "Ultra-quiet electric micro-motor handpieces (eliminates high-pitched drill whine)",
      "Ceiling-mounted 4K displays for cinematic distraction during care",
      "True-color surgical LED illumination balanced to 5500K daylight"
    ],
    image: "/assets/images/dental_treatment_suite_1792659238509.jpg"
  },
  {
    id: "artisan",
    title: "The Ceramist Atelier",
    subtitle: "Where medical science meets artisanal craft",
    description: "Natural teeth are never monochromatic. In our dedicated ceramics bench, our master ceramicists layer nuanced translucencies, mammelons, and subtle incisal halos to match your natural dentition seamlessly.",
    features: [
      "Chairside custom shade verification and digital colorimetry",
      "Hand-stacked feldspathic porcelain for lifelike light refraction",
      "High-magnification surgical microscope inspection",
      "Close collaboration between clinician and master artisan"
    ],
    image: "/assets/images/dental_craftsmanship_close_up_1792659238510.jpg"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "I avoided dentists for seven years after a traumatic extraction in university. Stepping into Valence felt closer to a gallery than a clinic. Dr. Sarah paused three times during my procedure just to confirm I felt completely calm. I left feeling restored, not drained.",
    author: "Bianca S. Laurel",
    location: "Senior Architectural Director, Makati",
    treatment: "Biomimetic Ceramic Inlays & Guided Airflow",
    timeframe: "Patient since 2022"
  },
  {
    id: "t2",
    quote: "My veneers do not look like veneers — and that is the highest compliment I can offer. People simply tell me that I look remarkably rested and confident. Dr. Sarah’s attention to proportion is unmatched.",
    author: "Marcella D. Tan",
    location: "Fashion Creative Director, BGC",
    treatment: "Custom Porcelain Veneers (8 units)",
    timeframe: "Completed May 2024"
  },
  {
    id: "t3",
    quote: "The unhurried consultation changed everything for me. We spent an entire hour reviewing my 3D scans and discussing my bite mechanics before scheduling anything. There was zero sales pitch — only clinical clarity.",
    author: "Antonio Carlos Reyes",
    location: "Private Equity Partner, Pasig",
    treatment: "Guided Implant Restoration & Night Guard",
    timeframe: "Patient since 2021"
  }
];

export const FAQS = [
  {
    q: "How does a consultation at Valence differ from a conventional checkup?",
    a: "We reserve a full 60 to 90 minutes exclusively for you. Your clinician personally takes high-resolution digital photographs, CBCT 3D scans, and conducts an in-depth dialogue about your dental goals, previous anxieties, and aesthetic preferences before any treatment is proposed."
  },
  {
    q: "I have acute dental anxiety. How do you accommodate sensitive patients?",
    a: "Anxiety is met with profound empathy, not judgment. We offer noise-cancelling headphones, silent electric instruments (no high-pitched drill whine), customized topical pre-numbing, and can arrange conscious twilight sedation with board-certified anesthesiologists when desired."
  },
  {
    q: "Are the ceramic restorations made locally or abroad?",
    a: "We work directly with master dental ceramicists in Manila and Zurich who specialize exclusively in bespoke feldspathic and lithium disilicate layering. You can even meet with our ceramist in-person during your shade appointment."
  },
  {
    q: "Do you accept health insurance or provide flexible payment arrangements?",
    a: "We assist with all reimbursement documentation for private international and local executive medical insurances. For comprehensive restorative cases, we also offer flexible installment arrangements via zero-interest credit card partnerships (3, 6, or 12 months)."
  }
];
