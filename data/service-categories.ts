/**
 * Service Category Structure for Blume
 * Hierarchical: Primary (HVAC/AC) → Secondary (Home Services)
 * Each service gets its own keyword targeting + city pages
 */

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  tier: 'primary' | 'secondary';
  keywords: string[];
  cta: string;
  icon?: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  // ===== PRIMARY SERVICES (Revenue drivers) =====

  {
    id: 'ac-residential',
    name: 'AC Repair & Installation (Residential)',
    slug: 'ac-repair-residential',
    description: 'Professional air conditioning repair, maintenance, and installation for homes',
    tier: 'primary',
    cta: 'Schedule AC Service',
    keywords: [
      'ac repair near me',
      'air conditioning repair',
      'ac installation',
      'ac maintenance',
      'emergency ac repair',
      'ac recharge',
      'ac condenser',
      'air conditioner service',
      'ac service near me',
      'window air conditioner',
      'portable air conditioner',
    ],
  },

  {
    id: 'ac-commercial',
    name: 'AC Repair & Installation (Commercial)',
    slug: 'ac-repair-commercial',
    description: 'Commercial HVAC solutions for businesses, offices, restaurants, and facilities',
    tier: 'primary',
    cta: 'Schedule Commercial Service',
    keywords: [
      'commercial air conditioning',
      'business hvac service',
      'restaurant hvac',
      'office ac repair',
      'commercial hvac contractor',
      'commercial ac installation',
      'hvac for apartments',
      'hvac for data centers',
      'commercial hvac maintenance',
    ],
  },

  {
    id: 'hvac-residential',
    name: 'HVAC Repair & Installation (Residential)',
    slug: 'hvac-repair-residential',
    description: 'Complete HVAC systems including heating, cooling, and ventilation for homes',
    tier: 'primary',
    cta: 'Schedule HVAC Service',
    keywords: [
      'hvac repair',
      'hvac installation',
      'hvac maintenance',
      'hvac services',
      'hvac contractor',
      'furnace repair',
      'furnace installation',
      'furnace replacement',
      'heating repair',
      'hvac near me',
    ],
  },

  {
    id: 'hvac-commercial',
    name: 'HVAC Repair & Installation (Commercial)',
    slug: 'hvac-repair-commercial',
    description: 'Commercial HVAC systems and services for large-scale operations',
    tier: 'primary',
    cta: 'Schedule Commercial HVAC',
    keywords: [
      'commercial hvac',
      'hvac companies near me',
      'hvac contractor commercial',
      'building hvac systems',
      'facility hvac maintenance',
    ],
  },

  // ===== SECONDARY SERVICES (Home Services Bundle) =====

  {
    id: 'solar-installation',
    name: 'Solar Panel Installation',
    slug: 'solar-installation',
    description: 'Solar panel installation, maintenance, and monitoring for residential homes',
    tier: 'secondary',
    cta: 'Get Solar Quote',
    keywords: [
      'solar installation',
      'solar panels near me',
      'residential solar',
      'solar panel cost',
      'best solar companies',
      'solar energy systems',
      'home solar installation',
      'solar quotes',
      'solar panel maintenance',
    ],
  },

  {
    id: 'powerwall-backup',
    name: 'Powerwall & Backup Power',
    slug: 'powerwall-backup-power',
    description: 'Tesla Powerwall, battery storage, and backup power solutions',
    tier: 'secondary',
    cta: 'Schedule Power Assessment',
    keywords: [
      'powerwall installation',
      'backup power system',
      'battery backup',
      'solar battery storage',
      'home battery system',
      'emergency backup power',
      'powerwall cost',
      'home backup generator',
      'tesla powerwall',
    ],
  },

  {
    id: 'surge-protection',
    name: 'Surge Protection & Electrical',
    slug: 'surge-protection-electrical',
    description: 'Whole-home surge protection, electrical upgrades, and power management',
    tier: 'secondary',
    cta: 'Get Electrical Quote',
    keywords: [
      'surge protection',
      'whole home surge protection',
      'electrical surge protection',
      'power surge protection',
      'lightning protection',
      'electrical upgrades',
      'home electrical service',
      'electrical installation',
      'surge protector',
    ],
  },

  {
    id: 'windows-doors',
    name: 'Window & Door Installation',
    slug: 'windows-doors',
    description: 'Energy-efficient window and door installation and replacement',
    tier: 'secondary',
    cta: 'Get Window Quote',
    keywords: [
      'window replacement',
      'energy efficient windows',
      'window installation',
      'replacement windows',
      'vinyl windows',
      'window repair',
      'window company near me',
      'best windows for home',
      'window cost',
    ],
  },

  // ===== AGGREGATED (Multi-service bundles) =====

  {
    id: 'home-energy-solutions',
    name: 'Complete Home Energy Solutions',
    slug: 'home-energy-solutions',
    description: 'Bundle: Efficient AC + Solar + Powerwall + Surge Protection',
    tier: 'secondary',
    cta: 'Get Energy Assessment',
    keywords: [
      'home energy solutions',
      'energy efficient home',
      'home energy management',
      'solar plus storage',
      'backup power solar',
      'whole home energy upgrade',
      'home energy audit',
    ],
  },

  {
    id: 'emergency-services',
    name: 'Emergency Home Services',
    slug: 'emergency-services',
    description: '24/7 emergency response for AC, HVAC, electrical, and power emergencies',
    tier: 'primary',
    cta: 'Call for Emergency Service',
    keywords: [
      'emergency ac repair',
      'emergency hvac service',
      'emergency electrician',
      'emergency home repair',
      '24 hour ac repair',
      'emergency service near me',
    ],
  },
];

/**
 * Service bundles - logical groupings for marketing
 */
export const SERVICE_BUNDLES = [
  {
    name: 'Climate Control (HVAC + AC)',
    services: ['ac-residential', 'ac-commercial', 'hvac-residential', 'hvac-commercial'],
    description: 'Complete heating, cooling, and ventilation solutions',
  },
  {
    name: 'Home Services (Electrical + Windows)',
    services: ['surge-protection', 'windows-doors'],
    description: 'Complementary home improvement services',
  },
  {
    name: 'Energy Independence (Solar + Batteries)',
    services: ['solar-installation', 'powerwall-backup'],
    description: 'Renewable energy and backup power solutions',
  },
  {
    name: 'Complete Home Solution',
    services: [
      'hvac-residential',
      'solar-installation',
      'powerwall-backup',
      'surge-protection',
      'windows-doors',
    ],
    description: 'Full home energy and comfort package',
  },
];

/**
 * Keywords organized by service
 * Maps to your 3,861 keyword export
 */
export const KEYWORDS_BY_SERVICE = {
  'ac-residential': [
    'ac repair near me',
    'air conditioning repair',
    'ac installation',
    'ac maintenance',
    'emergency ac repair',
    'ac recharge',
    'ac condenser',
    'air conditioner service',
    'ac service near me',
  ],
  'hvac-residential': [
    'hvac repair',
    'hvac installation',
    'hvac maintenance',
    'hvac services',
    'hvac contractor',
    'furnace repair',
    'furnace installation',
    'furnace replacement',
  ],
  'solar-installation': [
    'solar installation',
    'solar panels near me',
    'residential solar',
    'solar panel cost',
    'best solar companies',
  ],
  'powerwall-backup': [
    'powerwall installation',
    'backup power system',
    'battery backup',
    'solar battery storage',
    'home battery system',
  ],
  'surge-protection': [
    'surge protection',
    'whole home surge protection',
    'electrical surge protection',
    'electrical upgrades',
  ],
  'windows-doors': [
    'window replacement',
    'energy efficient windows',
    'window installation',
    'replacement windows',
  ],
};

/**
 * Get all keywords for a service
 */
export function getServiceKeywords(serviceId: string): string[] {
  return KEYWORDS_BY_SERVICE[serviceId as keyof typeof KEYWORDS_BY_SERVICE] || [];
}

/**
 * Get related services for cross-selling
 */
export function getRelatedServices(serviceId: string): ServiceCategory[] {
  const service = SERVICE_CATEGORIES.find((s) => s.id === serviceId);
  if (!service) return [];

  // Find bundles containing this service
  const bundles = SERVICE_BUNDLES.filter((b) => b.services.includes(serviceId));

  // Get all other services in those bundles
  const relatedIds = new Set<string>();
  bundles.forEach((bundle) => {
    bundle.services.forEach((id) => {
      if (id !== serviceId) relatedIds.add(id);
    });
  });

  return Array.from(relatedIds)
    .map((id) => SERVICE_CATEGORIES.find((s) => s.id === id))
    .filter((s): s is ServiceCategory => s !== undefined);
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((s) => s.slug === slug);
}

/**
 * Get all primary services
 */
export function getPrimaryServices(): ServiceCategory[] {
  return SERVICE_CATEGORIES.filter((s) => s.tier === 'primary');
}

/**
 * Get all secondary services
 */
export function getSecondaryServices(): ServiceCategory[] {
  return SERVICE_CATEGORIES.filter((s) => s.tier === 'secondary');
}
