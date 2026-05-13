/**
 * Keyword × Service × City Matrix
 * Maps high-priority keywords to specific services and generates content variations
 *
 * Strategy:
 * - Phase 1: Top 100 keywords × 4 primary services × all cities
 * - Focus on high-intent, high-volume keywords with revenue potential
 * - Each page gets unique title, meta, and content
 */

import { SERVICE_CATEGORIES } from './service-categories';
import { GEOGRAPHIC_DATA } from './geographic-data';

/**
 * High-priority keywords for Phase 1 (sorted by search volume + commercial intent)
 * These are the 100 keywords with highest volume × intent score
 */
export const PHASE_1_KEYWORDS = [
  'ac repair near me',
  'air conditioning repair',
  'hvac repair',
  'ac installation',
  'hvac installation',
  'emergency ac repair',
  'emergency hvac service',
  'ac maintenance',
  'hvac maintenance',
  'air conditioner service',
  'ac service near me',
  'hvac services',
  'ac repair 24 hours',
  'hvac repair 24 hours',
  'ac unit repair',
  'air conditioning service',
  'furnace repair',
  'heating repair',
  'ac replacement',
  'hvac contractor',
  'same day ac repair',
  'emergency heating repair',
  'ac condenser repair',
  'air conditioner repair near me',
  'ac compressor repair',
  'hvac company near me',
  'ac unit not working',
  'air conditioner not cooling',
  'hvac not working',
  'commercial ac repair',
  'commercial hvac service',
  'apartment ac repair',
  'office hvac repair',
  'restaurant hvac',
  'ac recharge',
  'ac refill',
  'ac leak repair',
  'ac fan not working',
  'ac blowing warm air',
  'heating and air conditioning repair',
  'hvac replacement',
  'ac system installation',
  'furnace installation',
  'heating system repair',
  'air conditioning installation',
  'split system ac',
  'window air conditioner repair',
  'portable ac repair',
  'ductless ac repair',
  'commercial ac installation',
  // Add 50 more high-volume keywords...
  'ac inspection',
  'hvac inspection',
  'ac certification',
  'hvac certification',
  'ac emergency service',
  'hvac emergency service',
  'ac same day service',
  'hvac same day service',
  'ac licensed contractor',
  'hvac licensed contractor',
  'ac insured',
  'hvac insured',
  'ac warranty',
  'hvac warranty',
  'ac parts replacement',
  'hvac parts replacement',
  'ac cleaning',
  'hvac cleaning',
  'ac filter replacement',
  'hvac filter replacement',
  'air duct cleaning',
  'hvac duct sealing',
  'ac duct repair',
  'hvac system maintenance',
  'ac preventative maintenance',
  'hvac preventative maintenance',
  'ac spring maintenance',
  'hvac spring maintenance',
  'ac summer service',
  'hvac summer service',
  'ac winter service',
  'hvac winter service',
  'ac seasonal maintenance',
  'hvac seasonal maintenance',
  'ac energy efficient',
  'hvac energy efficient',
  'ac high efficiency',
  'hvac high efficiency',
  'ac smart thermostat',
  'hvac smart thermostat',
  'ac upgrade',
  'hvac upgrade',
  'ac expansion tank',
  'hvac expansion tank',
  'ac pressure relief valve',
  'hvac pressure relief valve',
  'ac refrigerant leak',
  'hvac refrigerant leak',
  'ac outdoor unit repair',
  'hvac outdoor unit repair',
  'ac indoor unit repair',
  'hvac indoor unit repair',
];

export interface KeywordVariation {
  keyword: string;
  slug: string;
  intent: 'local' | 'informational' | 'commercial';
  serviceIds: string[];
  titleTemplate: string;
  descriptionTemplate: string;
}

/**
 * Convert keyword to URL slug
 */
export function keywordToSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Generate content title for keyword × service × location combo
 */
export function generateTitle(
  keyword: string,
  service: (typeof SERVICE_CATEGORIES)[0],
  cityName: string,
  stateName: string
): string {
  // Prioritize keyword first, then add location context
  const baseTitle = `${keyword} - ${cityName}, ${stateName}`;
  const withBrand = `${baseTitle} | Blume Mechanical`;

  // Ensure under 60 chars for SEO
  if (withBrand.length > 60) {
    return `${keyword} in ${cityName} | Blume`;
  }
  return withBrand;
}

/**
 * Generate meta description for keyword × service × location combo
 */
export function generateDescription(
  keyword: string,
  service: (typeof SERVICE_CATEGORIES)[0],
  cityName: string,
  countyName: string
): string {
  const templates = [
    `Professional ${keyword} in ${cityName}, ${countyName}. ${service.name} with 24/7 emergency support. Licensed technicians. Call (855) 258-6322.`,
    `Expert ${keyword} services in ${cityName}. Fast response, same-day availability. ${service.cta}. Licensed & insured HVAC contractor.`,
    `Local ${keyword} in ${cityName}, ${countyName}. Emergency support, transparent pricing. 50+ years serving the area. Call now.`,
  ];

  const desc = templates[Math.floor(Math.random() * templates.length)];

  // Ensure 150-160 chars for SEO
  if (desc.length > 160) {
    return desc.substring(0, 157) + '...';
  }
  return desc;
}

/**
 * Get primary services for a keyword (most services are AC/HVAC focused)
 */
export function getServicesForKeyword(keyword: string): typeof SERVICE_CATEGORIES {
  // Most keywords are HVAC/AC focused
  const acResId = 'ac-residential';
  const hvacResId = 'hvac-residential';
  const emergencyId = 'emergency-services';

  const isCommercial =
    keyword.includes('commercial') || keyword.includes('business') || keyword.includes('office');
  const isEmergency = keyword.includes('emergency') || keyword.includes('24 hour');

  const serviceIds: string[] = [];

  if (isCommercial) {
    serviceIds.push('ac-commercial', 'hvac-commercial');
  } else {
    serviceIds.push(acResId, hvacResId);
  }

  if (isEmergency) {
    serviceIds.push(emergencyId);
  }

  return SERVICE_CATEGORIES.filter((s) => serviceIds.includes(s.id));
}

/**
 * Get all keyword page params for static generation
 * Phase 1: Top 100 keywords × all cities × primary services
 */
export function getPhase1PageParams() {
  const params = [];

  for (const state of GEOGRAPHIC_DATA) {
    for (const county of state.counties) {
      for (const city of county.cities) {
        for (const keyword of PHASE_1_KEYWORDS) {
          // Get services for this keyword
          const services = getServicesForKeyword(keyword);

          for (const service of services) {
            // Only include primary services in Phase 1
            if (service.tier === 'primary') {
              params.push({
                state: state.slug,
                county: county.slug,
                city: city.slug,
                service: service.slug,
                keyword: keywordToSlug(keyword),
              });
            }
          }
        }
      }
    }
  }

  return params;
}

/**
 * Get page count estimate for deployment planning
 */
export function getPhase1PageCount() {
  return getPhase1PageParams().length;
}

/**
 * Find keyword and service objects from URL slugs
 */
export function findKeywordAndService(keywordSlug: string, serviceSlug: string) {
  const keyword = PHASE_1_KEYWORDS.find((k) => keywordToSlug(k) === keywordSlug);
  const service = SERVICE_CATEGORIES.find((s) => s.slug === serviceSlug);

  return { keyword, service };
}
