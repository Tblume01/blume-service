import { Metadata } from 'next';
import { config } from '@/lib/config';

interface SEOPageProps {
  slug: string;
  title: string;
  h1: string;
  shortDesc: string;
}

function JsonLd({ slug, title }: Pick<SEOPageProps, 'slug' | 'title'>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    provider: {
      '@type': 'LocalBusiness',
      name: config.company.name,
      telephone: config.company.phoneHref,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.address.street,
        addressLocality: config.address.city,
        addressRegion: config.address.state,
        postalCode: config.address.zip,
        addressCountry: config.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: config.geo.lat,
        longitude: config.geo.lng,
      },
      areaServed: config.cities.map((city) => ({
        '@type': 'City',
        name: city + ', FL',
      })),
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    serviceType: title,
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export async function generateMetadata(props: SEOPageProps): Promise<Metadata> {
  return {
    title: props.title,
    description: `Need help with ${props.slug.replace(/-/g, ' ')}? ${config.company.name} provides fast, reliable HVAC service in Tampa Bay. Available 24/7 for emergencies. Call now for same-day service.`,
    openGraph: {
      title: props.title,
      description: '24/7 HVAC emergency service in Tampa Bay. Licensed, insured, and ready to help.',
      type: 'website',
      url: `${config.site.url}/${props.slug}`,
    },
    alternates: {
      canonical: `${config.site.url}/${props.slug}`,
    },
  };
}

export function SEOPageTemplate({ slug, h1, shortDesc }: SEOPageProps) {
  const relatedLinks = [
    { label: 'Emergency AC Repair', href: '/emergency-air-conditioning-repair' },
    { label: '24 Hour AC Repair', href: '/24-hour-ac-repair-near-me' },
    { label: 'Same Day Service', href: '/same-day-ac-repair' },
  ].filter((link) => link.href !== `/${slug}`);

  return (
    <>
      <JsonLd slug={slug} title={h1} />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{h1}</h1>
          <p className="text-xl text-gray-600 mb-6">{shortDesc}</p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition"
            onClick={() => (window as any).trackEvent?.('phone_call', { service: slug })}
          >
            Schedule Emergency Service — {config.company.phone}
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Average response time: 45 minutes in the Tampa Bay area
          </p>
        </section>

        {/* Photo placeholders */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {['Technician at work', 'Before & after', 'Service truck'].map(
            (alt, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500"
              >
                <span>{alt}</span>
              </div>
            )
          )}
        </section>

        {/* Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>Why Tampa Bay Trusts Blume for {slug.replace(/-/g, ' ')}</h2>
          <p>
            When you need help with {slug.replace(/-/g, ' ')}, {config.company.name} is the name
            Tampa Bay homeowners and businesses trust. Our licensed technicians
            are available 24/7 — because HVAC emergencies don&apos;t wait for
            business hours.
          </p>
          <ul>
            <li>Licensed and insured Florida HVAC contractors</li>
            <li>Same-day service available in {config.cities.join(', ')}</li>
            <li>Upfront pricing — no surprise charges</li>
            <li>All major brands serviced and installed</li>
          </ul>

          <h2>Service Areas</h2>
          <p>
            We provide {slug.replace(/-/g, ' ')} services across the Tampa Bay region including:
          </p>
          <ul>
            {config.cities.map((city) => (
              <li key={city}>{city}, FL</li>
            ))}
          </ul>
        </section>

        {/* CTA repeat */}
        <section className="bg-blue-50 rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Help Now?</h2>
          <p className="text-gray-600 mb-6">
            Our dispatch team is standing by. Call or book online for priority scheduling.
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition"
            onClick={() => (window as any).trackEvent?.('conversion', { value: 1, currency: 'USD' })}
          >
            Schedule Emergency Service
          </a>
        </section>

        {/* Internal links */}
        <nav className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <ul className="space-y-2">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-blue-600 hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
}
