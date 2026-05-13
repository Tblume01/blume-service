import { MetadataRoute } from 'next';
import { config } from '@/lib/config';
import { GEOGRAPHIC_DATA } from '@/data/geographic-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.site.url;

  // All SEO pages
  const seoPages = [
    '24-hour-ac-repair-near-me',
    '24-hour-ac-service',
    '24-hour-ac-unit-repair',
    '24-hour-air-conditioner-repair',
    '24-hour-air-conditioning-repair',
    '24-hour-heating-and-air-conditioning-repair',
    '24-hour-heating-and-air-conditioning',
    '24-hour-hvac',
    'ac-fan-not-working',
    'ac-not-working',
    'ac-unit-fan-not-working',
    'ac-unit-not-working',
    'air-conditioner-fan-not-working',
    'air-conditioning-not-working',
    'air-conditioning-unit-not-working',
    'aircon-not-working',
    'apartment-ac-unit',
    'apartment-air-conditioner',
    'commercial-ac-unit',
    'emergency-air-conditioning-repair',
    'emergency-air-conditioning-service',
    'emergency-air-conditioning',
    'emergency-furnace-repair',
    'emergency-heating-repair',
    'emergency-hvac-services',
    'hvac-emergency-repair',
    'rent-to-own-washer-dryer-rental',
    'same-day-ac-repair',
    'same-day-air-conditioning-repair',
    'why-is-my-ac-not-working',
  ];

  // Service area pages
  const serviceAreas = ['belleair-bluffs-fl'];

  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Core pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/giving-back`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/hire-a-pro`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Add SEO pages
  seoPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add service area pages
  serviceAreas.forEach((area) => {
    entries.push({
      url: `${baseUrl}/areas-we-serve/${area}/ac-repair`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Add geographic pages (state, county, city)
  GEOGRAPHIC_DATA.forEach((state) => {
    // State page
    entries.push({
      url: `${baseUrl}/hvac-repair-${state.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });

    // County pages
    state.counties.forEach((county) => {
      entries.push({
        url: `${baseUrl}/hvac-repair-${state.slug}/${county.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });

      // City pages
      county.cities.forEach((city) => {
        entries.push({
          url: `${baseUrl}/hvac-repair-${state.slug}/${county.slug}/${city.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      });
    });
  });

  return entries;
}
