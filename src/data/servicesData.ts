export interface ServiceDetail {
  slug: string;
  url: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  category: 'Diagnostic & Preventive' | 'Restorative' | 'Orthodontic' | 'Cosmetic & Aesthetic' | 'Surgical';
  heroSummary: string;
  overview: {
    leadParagraph: string;
    clinicalContext: string;
  };
  candidacy: {
    reasons: string[];
    whenToConsider: string;
  };
  benefitsAndLimitations: {
    benefits: string[];
    limitations: string[];
  };
  treatmentProcess: {
    step: string;
    title: string;
    description: string;
  }[];
  patientExpectations: {
    beforeTreatment: string[];
    afterTreatment: string[];
  };
  faqs: {
    q: string;
    a: string;
  }[];
  relatedServices: {
    slug: string;
    title: string;
    url: string;
    desc: string;
  }[];
  appointmentServiceValue: string;
  badge: string;
  heroImage: string;
  secondaryImage?: string;
}

export const DENTAL_SERVICES: Record<string, ServiceDetail> = {
  'general-dentistry': {
    slug: 'general-dentistry',
    url: '/services/general-dentistry/',
    shortTitle: 'General Dentistry',
    title: 'General Dentistry & Comprehensive Checkups',
    subtitle: 'Unhurried digital diagnostics, oral cancer screening, and baseline wellness mapping.',
    category: 'Diagnostic & Preventive',
    badge: 'Foundation Care',
    heroImage: '/assets/images/hero_dental_atelier_lounge_1792659237422.jpg',
    heroSummary: 'Every lasting smile begins with an objective, comprehensive evaluation. At Valence Dental Atelier, routine examinations are never rushed 10-minute glances. We reserve generous time to systematically evaluate tooth structure, periodontal attachments, occlusal mechanics, and soft tissues under high magnification.',
    overview: {
      leadParagraph: 'General dentistry serves as the primary gateway to long-term oral vitality. Rather than focusing solely on active problems or emergency toothaches, our comprehensive checkups seek to identify micro-fractures, early demineralization, subgingival calculus, and structural imbalances years before they cause discomfort.',
      clinicalContext: 'We employ high-resolution intraoral photography, sub-millimeter digital radiography, and when indicated, low-dose cone-beam computed tomography (CBCT). You observe your scans alongside your clinician on private lounge displays, discussing findings in plain language before any recommendations are made.'
    },
    candidacy: {
      reasons: [
        'New patients seeking an objective, pressure-free assessment of their dental health',
        'Routine bi-annual oral wellness, cancer screening, and occlusal monitoring',
        'Experiencing vague sensitivity to hot or cold, gum bleeding, or jaw fatigue',
        'Planning extensive cosmetic or orthodontic work requiring a healthy foundation'
      ],
      whenToConsider: 'We recommend comprehensive checkups every six months for most adults, or more frequently if managing active periodontal conditions or high caries risk.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Early detection of hidden decay and enamel micro-cracks before they reach dental pulp',
        'Objective high-definition digital photographic baseline for tracking wear over time',
        'Full periodontal pocket depth charting to prevent systemic bone loss',
        'Screening for temporomandibular joint (TMJ) dysfunction, sleep airway concerns, and bruxism'
      ],
      limitations: [
        'A comprehensive checkup is an evaluative and diagnostic appointment, not a curative procedure itself',
        'Certain complex structural or genetic conditions may require multi-disciplinary referral or staged specialty consultations'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Dialogue & Medical History Review',
        description: 'We begin with an unhurried consultation covering medical health, prior dental experiences, sensory sensitivities, and personal goals.'
      },
      {
        step: '02',
        title: 'Digital Imaging & Intraoral Photography',
        description: 'Low-radiation digital radiographs and true-color intraoral photographs capture every quadrant in razor-sharp detail without uncomfortable trays.'
      },
      {
        step: '03',
        title: 'Microscopic Periodontal & Soft-Tissue Exam',
        description: 'Detailed assessment of gum attachment levels, mobility, mucosal health, and head and neck lymph node palpation.'
      },
      {
        step: '04',
        title: 'Collaborative Treatment Plan Review',
        description: 'Together with your clinician, you review your images on the private operatory screen, prioritizing preventative or restorative pathways at your pace.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'No special preparation required; bring any relevant dental history or night guards you currently wear',
        'Please inform our concierge if you experience dental anxiety or physical neck/back discomfort so we can tailor chair support'
      ],
      afterTreatment: [
        'You will receive a clear digital record summarizing all diagnostic findings and clear priority tiers',
        'No recovery downtime; you can immediately return to daily business, workouts, or dining'
      ]
    },
    faqs: [
      {
        q: 'How long does a comprehensive checkup take at Valence?',
        a: 'We reserve 60 minutes for adult comprehensive examinations to ensure our clinicians have ample time to discuss diagnostic scans without rushing.'
      },
      {
        q: 'Are digital X-rays necessary if I feel no pain?',
        a: 'Yes. Up to 40% of dental decay and bone recession occurs in interproximal spaces between teeth or under roots where the naked eye cannot see until irreversible nerve damage has already started.'
      },
      {
        q: 'Will you prescribe dental treatments during the first visit?',
        a: 'We will outline all clinical options, explain trade-offs, and provide transparent costs. You are never obligated to begin restorative work on the day of your checkup.'
      }
    ],
    relatedServices: [
      { slug: 'teeth-cleaning', title: 'Teeth Cleaning & Prophylaxis', url: '/services/teeth-cleaning/', desc: 'Gentle biofilm therapy to maintain tissue health.' },
      { slug: 'dental-fillings', title: 'Tooth-Colored Fillings', url: '/services/dental-fillings/', desc: 'Biomimetic resin restorations for early enamel decay.' },
      { slug: 'crowns-bridges', title: 'Crowns & Bridges', url: '/services/crowns-bridges/', desc: 'Structural reinforcement for cracked or severely worn teeth.' }
    ],
    appointmentServiceValue: 'General Dentistry & Comprehensive Checkup'
  },

  'teeth-cleaning': {
    slug: 'teeth-cleaning',
    url: '/services/teeth-cleaning/',
    shortTitle: 'Teeth Cleaning',
    title: 'Professional Teeth Cleaning & Oral Prophylaxis',
    subtitle: 'Guided Biofilm Therapy and warm-water prophylaxis for gentle, thorough hygiene.',
    category: 'Diagnostic & Preventive',
    badge: 'Preventive Wellness',
    heroImage: '/assets/images/dental_treatment_suite_1792659238509.jpg',
    heroSummary: 'Routine dental cleanings should never be an agonizing ritual of aggressive scraping and vibrating discomfort. Valence Dental Atelier utilizes Swiss Guided Biofilm Therapy (GBT) with warm-temperature saline and ultra-fine erythritol powder to thoroughly eliminate plaque, tartar, and surface stains with remarkable gentleness.',
    overview: {
      leadParagraph: 'Oral prophylaxis is the vital preventive defense against periodontal disease, which is the leading cause of adult tooth loss and chronic systemic inflammation. Our hygienists and dentists focus on removing subgingival microbial biofilms without damaging tooth enamel or delicate ceramic restorations.',
      clinicalContext: 'Rather than traditional heavy manual scaling alone, we use disclosing solutions to visually highlight biofilm colonies, followed by gentle air-polishing and warm ultrasonic debridement. The experience is comfortable even for patients with sensitive gum recession or cold dentin sensitivity.'
    },
    candidacy: {
      reasons: [
        'Routine 6-month preventative oral hygiene and stain removal',
        'Visible discoloration from coffee, tea, matcha, or tobacco',
        'Bleeding during brushing, persistent bad breath, or puffy red gums',
        'Maintenance of dental implants, porcelain veneers, or orthodontic aligners'
      ],
      whenToConsider: 'Recommended every 4 to 6 months for most patients. Individuals with active periodontitis or systemic conditions like diabetes benefit from maintenance every 3 to 4 months.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Leaves teeth velvet-smooth without micro-scratching natural enamel or veneers',
        'Warm water delivery prevents painful thermal shocks to exposed roots',
        'Reaches deep interdental crevices where standard toothbrushing cannot penetrate',
        'Helps prevent gingivitis from progressing into irreversible periodontitis and bone loss'
      ],
      limitations: [
        'Surface cleaning lifts extrinsic stains but does not alter the natural internal shade of tooth enamel (for internal brightening, see our Cosmetic Dentistry page)',
        'Patients with advanced periodontitis and deep subgingival calculus may require specialized root surface debridement (deep scaling) over multiple sessions'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Periodontal Assessment & Biofilm Disclosing',
        description: 'We examine gum tissue health and apply a harmless natural dye that highlights bacterial plaque, letting you see exactly where bacteria congregate.'
      },
      {
        step: '02',
        title: 'Guided Airflow Powder Therapy',
        description: 'A pressurized stream of warm water and micro-fine erythritol powder gently lifts biofilm and extrinsic coffee/tea stains from teeth, gums, and tongues.'
      },
      {
        step: '03',
        title: 'Targeted Ultrasonic Debridement',
        description: 'Gentle, frequency-adjusted Piezo ultrasonic tips remove hardened tartar deposits without abrasive gouging.'
      },
      {
        step: '04',
        title: 'Bioactive Remineralization Glaze',
        description: 'Application of nano-hydroxyapatite or remineralizing fluoride paste to strengthen enamel prisms and seal open dentinal tubules.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'Eat a normal meal before your appointment; you may brush as usual',
        'Let us know if your gums are currently tender so we can apply topical comfort numbing'
      ],
      afterTreatment: [
        'Teeth feel completely clean, smooth, and free of gritty biofilm',
        'Avoid deeply staining foods (soy sauce, red wine, turmeric) for 2 to 3 hours after treatment to allow the natural protective pellicle to re-form'
      ]
    },
    faqs: [
      {
        q: 'Does teeth cleaning damage enamel?',
        a: 'No. Professional prophylaxis performed with modern erythritol powder and calibrated ultrasonics is far gentler than aggressive at-home scrubbing with stiff bristles or abrasive charcoal toothpastes.'
      },
      {
        q: 'Why do my gums bleed during or after cleaning?',
        a: 'Bleeding is a symptom of existing bacterial inflammation (gingivitis), not the cleaning itself. As biofilm is removed and tissue heals over the next 48 to 72 hours, bleeding typically resolves.'
      },
      {
        q: 'Is prophylaxis safe around porcelain veneers and crowns?',
        a: 'Yes. We use specialized non-abrasive glycine/erythritol powders that preserve the high glaze of ceramic restorations without scratching.'
      }
    ],
    relatedServices: [
      { slug: 'general-dentistry', title: 'General Dentistry Checkups', url: '/services/general-dentistry/', desc: 'Complete 3D diagnostic evaluations and cancer screenings.' },
      { slug: 'cosmetic-dentistry', title: 'Cosmetic Dentistry & Whitening', url: '/services/cosmetic-dentistry/', desc: 'Professional in-office brightening and bespoke porcelain veneers.' },
      { slug: 'dental-fillings', title: 'Tooth-Colored Fillings', url: '/services/dental-fillings/', desc: 'Preserving teeth after calculus debridement reveals decay.' }
    ],
    appointmentServiceValue: 'Professional Teeth Cleaning & Oral Prophylaxis'
  },

  'dental-fillings': {
    slug: 'dental-fillings',
    url: '/services/dental-fillings/',
    shortTitle: 'Dental Fillings',
    title: 'Tooth-Colored Biomimetic Dental Fillings',
    subtitle: 'Micro-hybrid composite restorations engineered to preserve natural tooth structure.',
    category: 'Restorative',
    badge: 'Preservation Restorative',
    heroImage: '/assets/images/dental_craftsmanship_close_up_1792659238510.jpg',
    heroSummary: 'When dental decay or minor fractures compromise a tooth, traditional dentistry often removed healthy tooth structure to create mechanical retention. At Valence, we practice biomimetic adhesive restoration, using advanced micro-hybrid composite resins that bond directly to natural enamel and dentin, matching natural tooth shade and elasticity.',
    overview: {
      leadParagraph: 'A tooth-colored filling restores the structural integrity, anatomy, and aesthetics of a tooth damaged by caries or physical wear. Unlike historical silver amalgam restorations that contained mercury and expanded over time, causing tooth fractures, modern composite resins seamlessly integrate with natural tooth biology.',
      clinicalContext: 'We place restorations under rubber dam isolation to eliminate moisture contamination. Using multi-layer incremental layering, each tier of composite is cured to emulate the exact optical properties of natural tooth layers — from deep opaque dentin to translucent outer enamel.'
    },
    candidacy: {
      reasons: [
        'Cavities identified during comprehensive clinical or radiographic evaluations',
        'Replacing old, fractured, or leaking dark amalgam (silver) fillings',
        'Chipped, abraded, or worn enamel from nocturnal teeth grinding (bruxism)',
        'Cervical abfraction notches near the gumline causing acute cold sensitivity'
      ],
      whenToConsider: 'Whenever tooth decay is detected before it penetrates the central dental pulp. Treating decay while it is localized prevents the future need for root canals or crowns.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Preserves maximum natural healthy tooth structure with conservative preparation',
        'Chemically bonds to tooth substance, strengthening weakened cusp walls',
        'Color-matched to your surrounding natural dentition for virtually invisible results',
        'Immediate Dentin Sealing (IDS) minimizes post-procedure sensitivity'
      ],
      limitations: [
        'Composites require meticulous, dry placement technique to ensure longevity',
        'Severely broken teeth missing more than 50% of their coronal structure may require a lab-fabricated ceramic onlay or crown rather than a direct filling'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Targeted Anesthesia & Isolation',
        description: 'Gentle computer-controlled or topical-first local anesthetic ensures total numbness. A flexible dental dam isolates the tooth from oral saliva.'
      },
      {
        step: '02',
        title: 'Micro-Conservative Caries Removal',
        description: 'Specialized micro-burs remove only diseased infected dentin, safeguarding healthy sound tooth structure.'
      },
      {
        step: '03',
        title: 'Biomimetic Adhesive Layering',
        description: 'Application of universal adhesive bonding agents followed by shade-matched nano-hybrid composite placed in delicate anatomical increments.'
      },
      {
        step: '04',
        title: 'Sculpting, Occlusal Check & High-Gloss Polish',
        description: 'The chewing anatomy is hand-sculpted, bite articulation verified with micro-thin articulating film, and polished to a diamond luster.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'Local anesthesia is administered; you can eat lightly prior to your appointment',
        'Bring headphones or enjoy our suite entertainment system during treatment'
      ],
      afterTreatment: [
        'Because composite cures instantly with LED light, you can chew immediately once local anesthesia wears off',
        'Mild sensitivity to extreme hot or cold is common for 2 to 5 days as the nerve recovers'
      ]
    },
    faqs: [
      {
        q: 'How long do tooth-colored composite fillings last?',
        a: 'With good oral hygiene and regular prophylaxis, modern composite fillings typically last 7 to 12+ years. Patients who grind heavily should wear a custom night guard to prevent premature wear.'
      },
      {
        q: 'Should I replace all my old silver amalgam fillings?',
        a: 'We only recommend replacing amalgam fillings if there is active recurrent decay, marginal breakdown, tooth fracture lines, or if you desire aesthetic harmonization.'
      },
      {
        q: 'Will the procedure hurt?',
        a: 'No. We use pre-numbing topical gels and gentle local anesthesia techniques. Most patients report feeling only mild vibration during the restoration.'
      }
    ],
    relatedServices: [
      { slug: 'crowns-bridges', title: 'Dental Crowns & Bridges', url: '/services/crowns-bridges/', desc: 'For teeth with structural damage too extensive for fillings.' },
      { slug: 'root-canal-treatment', title: 'Root Canal Treatment', url: '/services/root-canal-treatment/', desc: 'When bacterial decay has reached the internal tooth nerve.' },
      { slug: 'teeth-cleaning', title: 'Oral Prophylaxis', url: '/services/teeth-cleaning/', desc: 'Keep restorations free of marginal plaque buildup.' }
    ],
    appointmentServiceValue: 'Tooth-Colored Dental Fillings'
  },

  'root-canal-treatment': {
    slug: 'root-canal-treatment',
    url: '/services/root-canal-treatment/',
    shortTitle: 'Root Canal Treatment',
    title: 'Root Canal Treatment & Endodontic Therapy',
    subtitle: 'Pain-relieving internal nerve disinfection designed to save your natural tooth from extraction.',
    category: 'Restorative',
    badge: 'Tooth Preservation',
    heroImage: '/assets/images/dental_treatment_suite_1792659238509.jpg',
    heroSummary: 'Few dental procedures are surrounded by as many misconceptions as root canals. In reality, endodontic therapy does not cause pain — it relieves it. When bacteria penetrate the inner pulp chamber through deep decay or cracks, modern root canal therapy disinfects the microscopic root canals, allowing you to retain your natural tooth root for life.',
    overview: {
      leadParagraph: 'A root canal removes inflamed or necrotic pulp tissue from within the root canal system of a tooth. Natural teeth possess unique periodontal ligament fibers that provide sensory proprioception and anchor into the jawbone; saving your natural tooth is almost always clinically superior to extraction.',
      clinicalContext: 'We perform endodontic procedures using rotary nickel-titanium instruments, digital apex locators, and ultrasonic acoustic irrigation. This guarantees thorough biological disinfection of complex lateral canal anatomy while you rest comfortably in our operatory.'
    },
    candidacy: {
      reasons: [
        'Persistent throbbing tooth pain, spontaneous pain keeping you awake at night',
        'Prolonged sensitivity to hot temperatures that lingers after the stimulus is removed',
        'Localized swelling, tenderness on biting, or a small drainage fistula on the gums',
        'Trauma to a tooth causing internal pulp death or discoloration'
      ],
      whenToConsider: 'As soon as irreversible pulpitis or periapical infection is diagnosed. Postponing endodontic care risks spreading infection into surrounding facial tissue and jawbone.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Immediately terminates internal toothache and halts advancing bone infection',
        'Preserves your natural tooth root, maintaining natural jawbone volume and bite force',
        'Far more conservative and cost-effective than tooth extraction followed by an implant or bridge',
        'Performed in unhurried comfort with modern rotary instruments and profound anesthesia'
      ],
      limitations: [
        'Endodontically treated posterior teeth become more brittle over time and generally require a protective crown or onlay to prevent structural fracture',
        'Teeth with severe vertical root fractures extending through the root cannot be saved by root canal therapy and must be extracted'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Diagnostic Radiography & Profound Anesthesia',
        description: 'High-resolution imaging maps root anatomy and curvature. Local anesthesia ensures total numbness of the pulp and surrounding bone.'
      },
      {
        step: '02',
        title: 'Micro-Access & Canal Disinfection',
        description: 'A tiny opening in the crown allows flexible nickel-titanium instruments and antibacterial irrigants to clean all canal branches.'
      },
      {
        step: '03',
        title: 'Biocompatible 3D Obturation',
        description: 'The sterilized canals are sealed hermetically with biocompatible gutta-percha and bioceramic sealers to prevent bacterial reinfection.'
      },
      {
        step: '04',
        title: 'Coronal Seal & Crown Planning',
        description: 'A bonded composite core seals the access chamber, followed by preparation for a protective ceramic crown to restore full chewing strength.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'If prescribed antibiotics or pain relievers prior to your visit, take them as directed',
        'Plan for an unhurried 75 to 90 minute appointment'
      ],
      afterTreatment: [
        'Mild tenderness around the tooth ligament when biting is normal for 48 to 72 hours and responds well to standard over-the-counter anti-inflammatories',
        'Avoid chewing hard foods on the treated tooth until the permanent protective crown is placed'
      ]
    },
    faqs: [
      {
        q: 'Is root canal treatment painful?',
        a: 'With modern local anesthetics, the procedure itself is virtually painless and feels very similar to having a routine filling placed.'
      },
      {
        q: 'Why not just pull the tooth instead?',
        a: 'Natural tooth roots are irreplaceable biological anchors. Extracting a tooth leads to shifting adjacent teeth, bone loss, and requires an expensive implant or bridge to replace.'
      },
      {
        q: 'How many visits does a root canal take?',
        a: 'Most straightforward cases can be completed in a single 75-minute appointment. Complex cases with severe active infection may require two visits with an antibacterial medicament placed between sessions.'
      }
    ],
    relatedServices: [
      { slug: 'crowns-bridges', title: 'Dental Crowns & Bridges', url: '/services/crowns-bridges/', desc: 'Essential protection for root canal treated teeth.' },
      { slug: 'dental-fillings', title: 'Tooth-Colored Fillings', url: '/services/dental-fillings/', desc: 'For early decay that has not yet reached the dental pulp.' },
      { slug: 'tooth-extraction', title: 'Tooth Extraction', url: '/services/tooth-extraction/', desc: 'When teeth have suffered non-restorable vertical root fractures.' }
    ],
    appointmentServiceValue: 'Root Canal Treatment & Endodontic Therapy'
  },

  'tooth-extraction': {
    slug: 'tooth-extraction',
    url: '/services/tooth-extraction/',
    shortTitle: 'Tooth Extraction',
    title: 'Unhurried Tooth Extractions & Wisdom Tooth Removal',
    subtitle: 'Atraumatic surgical protocols, socket preservation, and comprehensive patient recovery care.',
    category: 'Surgical',
    badge: 'Gentle Oral Surgery',
    heroImage: '/assets/images/dental_treatment_suite_1792659238509.jpg',
    heroSummary: 'While our primary philosophy is always biological preservation, certain situations require the removal of non-restorable teeth or impacted third molars (wisdom teeth). At Valence, we approach extractions with gentle atraumatic technique — carefully preserving surrounding bone architecture and prioritizing your peace of mind.',
    overview: {
      leadParagraph: 'Tooth extraction involves the careful, planned removal of a tooth from its socket in the alveolar bone. Wisdom teeth, in particular, frequently lack adequate space in modern jaws, resulting in impactions, recurrent pericoronitis infections, or destructive crowding of adjacent molars.',
      clinicalContext: 'We employ 3D CBCT imaging to accurately locate inferior alveolar nerve bundles before any surgical intervention. Using specialized periotomes and sectioning techniques rather than forceful levering, we preserve the surrounding cortical bone plates for smoother healing.'
    },
    candidacy: {
      reasons: [
        'Painful, partially erupted, or impacted wisdom teeth causing pericoronitis',
        'Severe, non-restorable structural fractures splitting the tooth below the bone line',
        'Advanced periodontal disease resulting in terminal tooth mobility and bone loss',
        'Orthodontic decompensation or serial extraction planned for facial balance'
      ],
      whenToConsider: 'Prompt evaluation is recommended when experiencing recurring pain at the back of the jaw, localized swelling, difficulty opening the mouth (trismus), or unexplained headaches.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Eliminates chronic sources of infection, cysts, and damage to adjacent healthy second molars',
        'Atraumatic technique protects surrounding bone, making future implant placement seamless',
        'Clear, detailed post-operative recovery kits with written guidance and concierge text follow-up',
        'Options for conscious twilight sedation or deep local anesthesia tailored to your comfort'
      ],
      limitations: [
        'Requires 3 to 7 days of mindful recovery and temporary dietary adjustments',
        'Extracted non-wisdom teeth will require planned replacement (e.g., implant or bridge) to prevent adjacent teeth from shifting'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: '3D Anatomical Mapping & Nerve Proximity Scan',
        description: 'Low-dose CBCT imaging verifies root anatomy and the exact 3D distance to the mandibular nerve canal.'
      },
      {
        step: '02',
        title: 'Profound Local Anesthesia & Sedation Option',
        description: 'Targeted nerve blocks guarantee total pain relief before any procedure commences.'
      },
      {
        step: '03',
        title: 'Atraumatic Sectioning & Socket Preservation',
        description: 'The tooth is gently sectioned into small pieces to lift it out with minimal bone disruption, followed by socket debridement.'
      },
      {
        step: '04',
        title: 'Biomaterial Hemostasis & Dissolvable Sutures',
        description: 'Placement of collagen plugs to stabilize blood clotting and soft resorbable sutures that do not require removal.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'Eat a soft, balanced meal beforehand unless receiving intravenous sedation',
        'Arrange comfortable transportation home and stock cold soft foods (smoothies, yogurt, broths)'
      ],
      afterTreatment: [
        'Bite firmly on sterile gauze packs for 45 minutes to stabilize the blood clot',
        'Avoid using drinking straws, smoking, or vigorous spitting for 5 days to avoid painful dry socket (alveolitis)'
      ]
    },
    faqs: [
      {
        q: 'Do all wisdom teeth have to be extracted?',
        a: 'No. If wisdom teeth are fully erupted, functional, pain-free, and cleanable with dental floss, they may be safely monitored during regular checkups.'
      },
      {
        q: 'Will I feel pain during wisdom tooth removal?',
        a: 'No. You will feel pressure and vibrations, but no sharp pain. We test numbness thoroughly before starting and re-anesthetize at the slightest sign of discomfort.'
      },
      {
        q: 'How long does recovery take?',
        a: 'Most patients return to school or desk work within 48 to 72 hours. Strenuous athletic workouts should be paused for 3 to 5 days.'
      }
    ],
    relatedServices: [
      { slug: 'general-dentistry', title: 'Comprehensive Checkups', url: '/services/general-dentistry/', desc: 'Routine 3D evaluations to assess wisdom tooth orientation.' },
      { slug: 'crowns-bridges', title: 'Dental Bridges & Restorations', url: '/services/crowns-bridges/', desc: 'Options for replacing extracted teeth.' },
      { slug: 'braces-clear-aligners', title: 'Orthodontics & Aligners', url: '/services/braces-clear-aligners/', desc: 'Harmonizing space after surgical tooth removal.' }
    ],
    appointmentServiceValue: 'Tooth Extraction & Wisdom Tooth Removal'
  },

  'braces-clear-aligners': {
    slug: 'braces-clear-aligners',
    url: '/services/braces-clear-aligners/',
    shortTitle: 'Braces & Clear Aligners',
    title: 'Architectural Orthodontics: Braces & Clear Aligners',
    subtitle: 'Airway-centered, facial-aesthetic alignment using low-profile brackets and clear aligners.',
    category: 'Orthodontic',
    badge: 'Orthodontic Harmony',
    heroImage: '/assets/images/hero_dental_atelier_lounge_1792659237422.jpg',
    heroSummary: 'Orthodontics at Valence Dental Atelier is not merely about straightening crooked front teeth. We approach alignment as facial architecture — considering lip support, airway health, temporomandibular joint (TMJ) balance, and smile arc proportion. Whether choosing discreet clear aligners or modern ceramic braces, treatment is planned digitally from start to finish.',
    overview: {
      leadParagraph: 'Orthodontic treatment guides teeth into harmonious alignment within the dental arches and balances the upper and lower jaw bite. Straight teeth are significantly easier to clean, reduce abnormal enamel wear, and distribute masticatory forces evenly across your dentition.',
      clinicalContext: 'Using iTero digital intraoral scanners, we capture complete dental arches in minutes without messy impression putty. Patients visualize their proposed treatment progression in 3D before committing to aligners or brackets.'
    },
    candidacy: {
      reasons: [
        'Crowded, overlapping, or rotated teeth that trap food and are difficult to floss',
        'Spacing, gaps (diastema), or asymmetrical smile lines',
        'Overbite, underbite, crossbite, or open bites causing jaw pain or premature tooth wear',
        'Adults experiencing orthodontic relapse after not wearing retainers in adolescence'
      ],
      whenToConsider: 'Adults and teenagers can begin orthodontic care whenever their periodontium is healthy. There is no upper age limit for achieving healthy dental alignment.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Clear aligners are virtually invisible and removable for dining and effortless brushing',
        'Low continuous orthodontic forces reduce soreness compared to traditional heavy wires',
        '3D outcome simulation enables realistic treatment tracking and milestones',
        'Harmonizes smile aesthetics while improving lifelong periodontal cleanability'
      ],
      limitations: [
        'Clear aligners require strict patient compliance (20 to 22 hours of daily wear) to achieve planned results',
        'Severe skeletal discrepancies or severely impacted canines may require hybrid treatment combining fixed appliances with aligners'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: '3D Optical Scan & Facial Photography',
        description: 'Comprehensive digital impressions and facial profile photographs create a complete virtual smile model.'
      },
      {
        step: '02',
        title: 'Digital Treatment Plan & Simulation',
        description: 'Our clinician choreographs every millimeter of tooth movement to match your ideal facial aesthetics and bite health.'
      },
      {
        step: '03',
        title: 'Appliance Fitting & Patient Guidance',
        description: 'Placement of aligner attachments or ceramic brackets with complete instruction on insertion, wear, and hygiene.'
      },
      {
        step: '04',
        title: 'Refinement, Finishing & Retention',
        description: 'Final micro-adjustments followed by custom retainers to ensure your beautiful alignment remains stable for life.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'Any active dental decay or periodontal inflammation must be resolved before orthodontic tooth movement begins',
        'Expect an engaging consultation reviewing your 3D digital simulation'
      ],
      afterTreatment: [
        'Mild pressure is normal for 24 to 48 hours after starting a new aligner or wire adjustment',
        'Retainer wear at night is essential post-treatment to maintain stable results permanently'
      ]
    },
    faqs: [
      {
        q: 'How long does clear aligner treatment take?',
        a: 'Minor cosmetic alignments can take as little as 4 to 6 months, while comprehensive bite corrections average 10 to 18 months.'
      },
      {
        q: 'Can I eat and drink with clear aligners on?',
        a: 'You should remove aligners when eating or drinking anything other than cool water to prevent warping the medical-grade polymer or trapping sugars against your enamel.'
      },
      {
        q: 'Are clear aligners as effective as traditional metal braces?',
        a: 'For the vast majority of adult orthodontic cases, modern clear aligners planned by an experienced clinician achieve outcomes identical to or superior to metal brackets.'
      }
    ],
    relatedServices: [
      { slug: 'cosmetic-dentistry', title: 'Porcelain Veneers & Whitening', url: '/services/cosmetic-dentistry/', desc: 'Combine alignment with aesthetic ceramic enhancement.' },
      { slug: 'teeth-cleaning', title: 'Oral Prophylaxis', url: '/services/teeth-cleaning/', desc: 'Maintain clean gums and brackets throughout alignment.' },
      { slug: 'general-dentistry', title: 'Comprehensive Checkups', url: '/services/general-dentistry/', desc: 'Ensure teeth are sound before moving them.' }
    ],
    appointmentServiceValue: 'Dental Braces & Clear Aligners'
  },

  'crowns-bridges': {
    slug: 'crowns-bridges',
    url: '/services/crowns-bridges/',
    shortTitle: 'Crowns & Bridges',
    title: 'Precision Dental Crowns & Fixed Ceramic Bridges',
    subtitle: 'High-translucency zirconia and lithium disilicate restorations built for lifelong masticatory strength.',
    category: 'Restorative',
    badge: 'Structural Restoration',
    heroImage: '/assets/images/dental_craftsmanship_close_up_1792659238510.jpg',
    heroSummary: 'When teeth suffer extensive fractures, large failing fillings, or when a tooth is missing entirely, dental crowns and bridges restore full chewing power and natural aesthetics. At Valence, we work exclusively with biocompatible, metal-free ceramics like monolithic zirconia and lithium disilicate (E.max) crafted by master ceramicists.',
    overview: {
      leadParagraph: 'A dental crown encapsulates the entire visible portion of a compromised tooth, restoring its anatomy, bite alignment, and structural integrity. A dental bridge uses adjacent crowned teeth (abutments) to support one or more artificial teeth (pontics), permanently bridging the gap left by missing teeth without removable partial dentures.',
      clinicalContext: 'We avoid metal substructures that produce dark gray margins around the gumline over time. Using optical intraoral scanning and CAD/CAM precision milling, our margins fit within 20 microns of prepared tooth margins, preventing bacterial ingress.'
    },
    candidacy: {
      reasons: [
        'Teeth with cracked tooth syndrome, severe enamel wear, or structural fractures',
        'Protecting posterior teeth after root canal therapy from catastrophic splitting',
        'Replacing heavily filled, discolored teeth that cannot support another direct filling',
        'Replacing one or two missing teeth using fixed permanent ceramic bridges'
      ],
      whenToConsider: 'When more than half of a tooth’s coronal width is compromised, or when missing teeth begin causing adjacent teeth to tilt and opposing teeth to over-erupt.'
    },
    benefitsAndLimitations: {
      benefits: [
        'High flexural strength (up to 1,200 MPa with monolithic zirconia) withstands heavy biting',
        'Lifelike light refraction matching natural enamel without unsightly dark metal lines',
        'Prevents tooth loss from catastrophic chewing fractures',
        'Bridges permanently restore chewing ability without removable plastic plates'
      ],
      limitations: [
        'Placing a bridge requires modifying healthy adjacent abutment teeth; dental implants may be a more conservative alternative when adjacent teeth are pristine',
        'Crowns require careful flossing around margins to prevent recurrent root decay'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Precision Tooth Preparation',
        description: 'Conservative reduction under local anesthesia creates smooth, rounded margins designed for ceramic longevity.'
      },
      {
        step: '02',
        title: 'High-Definition Optical Scan & Shade Matching',
        description: 'Digital 3D impressions and true-color shade analysis in daylight-balanced 5500K lighting.'
      },
      {
        step: '03',
        title: 'Custom Aesthetic Provisional Placement',
        description: 'A hand-trimmed temporary crown protects your tooth and tests shape and speech while our master lab fabricates the final ceramic.'
      },
      {
        step: '04',
        title: 'Master Ceramic Try-In & Adhesive Cementation',
        description: 'Verification of margin fit, contact points, and bite harmony, followed by resin bonding.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'The tooth and gums will be completely numbed with local anesthesia',
        'You will leave the first visit with a functional, comfortable provisional crown in place'
      ],
      afterTreatment: [
        'Avoid sticky or chewy candies while wearing provisional restorations',
        'Once the final crown is bonded, you can eat, floss, and brush normally'
      ]
    },
    faqs: [
      {
        q: 'Will my crown look like a fake or artificial tooth?',
        a: 'No. We use all-ceramic, metal-free materials that capture the internal translucency, depth, and characterization of your natural surrounding teeth.'
      },
      {
        q: 'How long do ceramic crowns and bridges last?',
        a: 'High-quality crowns regularly last 15 to 20+ years when supported by excellent daily oral hygiene and bi-annual professional cleanings.'
      },
      {
        q: 'Is a dental implant better than a bridge for a missing tooth?',
        a: 'If adjacent teeth are healthy and intact, a dental implant is often preferable because it preserves adjacent teeth from being prepped. If adjacent teeth already need crowns, a bridge is a wonderful solution.'
      }
    ],
    relatedServices: [
      { slug: 'root-canal-treatment', title: 'Root Canal Treatment', url: '/services/root-canal-treatment/', desc: 'Often performed before crowning severely infected teeth.' },
      { slug: 'dental-fillings', title: 'Tooth-Colored Fillings', url: '/services/dental-fillings/', desc: 'Core buildups underneath structural crowns.' },
      { slug: 'cosmetic-dentistry', title: 'Porcelain Veneers & Whitening', url: '/services/cosmetic-dentistry/', desc: 'Front-teeth aesthetic ceramic enhancements.' }
    ],
    appointmentServiceValue: 'Dental Crowns & Bridges'
  },

  'cosmetic-dentistry': {
    slug: 'cosmetic-dentistry',
    url: '/services/cosmetic-dentistry/',
    shortTitle: 'Cosmetic Dentistry',
    title: 'Cosmetic Dentistry: Porcelain Veneers & Teeth Whitening',
    subtitle: 'Bespoke hand-layered feldspathic veneers and biological enamel brightening.',
    category: 'Cosmetic & Aesthetic',
    badge: 'Aesthetic Craftsmanship',
    heroImage: '/assets/images/dental_craftsmanship_close_up_1792659238510.jpg',
    heroSummary: 'Cosmetic dentistry at Valence is not about creating identical, unnatural Hollywood piano-key smiles. We treat smile design as bespoke art. Through micro-layered feldspathic porcelain veneers and biological in-office teeth brightening, we enhance your natural facial proportions, incisal edge curves, and tooth translucency.',
    overview: {
      leadParagraph: 'Cosmetic dentistry encompasses treatments that refine the color, shape, proportion, and alignment of teeth visible in your smile frame. Porcelain veneers are ultra-thin ceramic facings hand-crafted by master ceramicists and permanently bonded to the front of teeth, while professional whitening safely removes deep enamel chromogens.',
      clinicalContext: 'We employ Digital Smile Design (DSD) to test mockups directly in your mouth before preparing teeth. This allows you to speak, smile, and approve your new proportions in real life before any permanent ceramic is created.'
    },
    candidacy: {
      reasons: [
        'Persistent internal staining, tetracycline discoloration, or fluorosis resistant to standard whitening',
        'Worn, chipped, uneven, or disproportionately small teeth (peg laterals)',
        'Diastemas (gaps between teeth) that you prefer to close without extended orthodontic years',
        'Desire for a brighter, more youthful, harmonious smile prior to milestone life events'
      ],
      whenToConsider: 'When you are self-conscious about smiling in photographs or professional settings, and your underlying gums and tooth roots are healthy.'
    },
    benefitsAndLimitations: {
      benefits: [
        'Custom feldspathic layering replicates natural enamel mammelons, light halos, and opalescence',
        'Stain-resistant ceramic surfaces retain their vibrant shade permanently',
        'Minimal-prep protocols preserve up to 90%+ of natural healthy enamel',
        'Professional in-office whitening brightens teeth by 4 to 8 Vita shades with desensitizing protocols'
      ],
      limitations: [
        'Porcelain veneers are an irreversible treatment requiring long-term commitment and eventual replacement after 15 to 20+ years',
        'Patients with active severe bruxism must wear a protective night guard to safeguard ceramic edges'
      ]
    },
    treatmentProcess: [
      {
        step: '01',
        title: 'Digital Smile Design Consultation & 3D Trial',
        description: 'Facial photography and 3D scans guide a temporary trial smile placed in your mouth to preview your proportions.'
      },
      {
        step: '02',
        title: 'Minimal Enamel Preparation & Master Impressions',
        description: 'Conservative enamel shaping followed by intraoral optical scanning and bespoke temporaries.'
      },
      {
        step: '03',
        title: 'Chairside Master Ceramist Shade Verification',
        description: 'You meet directly with our ceramic artisan to refine micro-textures, incisal translucency, and individualized nuances.'
      },
      {
        step: '04',
        title: 'Adhesive Cementation & Articulation Balance',
        description: 'Light-cured resin bonding under rubber dam isolation, ensuring high bond strength and long-term vitality.'
      }
    ],
    patientExpectations: {
      beforeTreatment: [
        'Bring reference photos of smiles you find natural and appealing',
        'Ensure a baseline dental cleaning has been performed recently'
      ],
      afterTreatment: [
        'Temporary sensitivity to temperature is normal for 1 to 2 weeks after veneer bonding',
        'Practice good daily hygiene and wear a night guard if recommended to preserve your ceramic investment'
      ]
    },
    faqs: [
      {
        q: 'Do teeth have to be filed down into little pegs for veneers?',
        a: 'No! That is a common myth popularized by aggressive social media dentistry. Our biomimetic approach uses minimal-prep techniques that remove only 0.3mm to 0.5mm of superficial enamel.'
      },
      {
        q: 'Does in-office teeth whitening damage enamel?',
        a: 'No. Professional whitening formulations use pH-neutral hydrogen peroxide combined with potassium nitrate and fluoride desensitizers that lift organic stains safely without stripping enamel minerals.'
      },
      {
        q: 'Can veneers stain from coffee or red wine?',
        a: 'High-density glazed porcelain is non-porous and will not stain from coffee, tea, or red wine. The underlying margins should still be cleaned diligently to protect the natural tooth beneath.'
      }
    ],
    relatedServices: [
      { slug: 'teeth-cleaning', title: 'Teeth Cleaning & Prophylaxis', url: '/services/teeth-cleaning/', desc: 'Essential baseline before whitening or veneer bonding.' },
      { slug: 'braces-clear-aligners', title: 'Clear Aligners & Orthodontics', url: '/services/braces-clear-aligners/', desc: 'Align teeth first for ultra-conservative minimal veneer prep.' },
      { slug: 'crowns-bridges', title: 'Crowns & Bridges', url: '/services/crowns-bridges/', desc: 'For posterior teeth requiring full 360-degree structural support.' }
    ],
    appointmentServiceValue: 'Cosmetic Dentistry: Veneers & Teeth Whitening'
  }
};

export const ALL_SERVICES_LIST = Object.values(DENTAL_SERVICES);
