import { Metadata } from 'next';

// SEO Priority: Volume=1000, Difficulty=8, Intent=Commercial
// Topic cluster: emergency ac repair
// Generated from: PRIORITY-top-leverage.csv (drew-burks SEMrush export)

const CITIES = ['Tampa', 'Clearwater', 'St Petersburg', 'Largo', 'Brandon'];
const PRIMARY_CITY = 'Tampa';

export const metadata: Metadata = {
  title: 'emergency heating repair | Blume Service Group | ${PRIMARY_CITY} FL',
  description: 'Need help with emergency heating repair? Blume Service Group provides fast, reliable HVAC service in Tampa Bay. Available 24/7 for emergencies. Call now for same-day service.',
  openGraph: {
    title: 'emergency heating repair — Blume Service Group',
    description: '24/7 HVAC emergency service in Tampa Bay. Licensed, insured, and ready to help.',
    type: 'website',
  },
};

function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'emergency heating repair',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Blume Service Group',
      image: '/images/blume-logo.png',
      telephone: '+1-727-XXX-XXXX',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '123 Main Street',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33601',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.9506,
        longitude: -82.4572,
      },
      areaServed: CITIES.map((city) => ({
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
    serviceType: 'emergency heating repair',
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

export default function Page() {
  return (
    <>
      <JsonLd />
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            emergency heating repair
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Fast, reliable HVAC service in Tampa Bay — available 24/7 for emergencies
          </p>
          <a
            href="tel:+1727XXXXXXX"
            className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition"
          >
            Schedule Emergency Service
          </a>
          <p className="text-sm text-gray-500 mt-2">
            Average response time: 45 minutes in the Tampa Bay area
          </p>
        </section>

        {/* Photo placeholders */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {['Technician at work', 'Before & after', 'Blume service truck'].map(
            (alt, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500"
              >
                {/* TODO: Replace with GMB photos */}
                <span>{alt}</span>
              </div>
            )
          )}
        </section>

        {/* Content */}
        <section className="prose prose-lg max-w-none mb-12">
          <h2>Why Tampa Bay Trusts Blume for emergency heating repair</h2>
          <p>
            When you need help with emergency heating repair, Blume Service Group is the name
            Tampa Bay homeowners and businesses trust. Our licensed technicians
            are available 24/7 — because HVAC emergencies don&apos;t wait for
            business hours.
          </p>
          <ul>
            <li>Licensed and insured Florida HVAC contractors</li>
            <li>Same-day service available in {CITIES.join(', ')}</li>
            <li>Upfront pricing — no surprise charges</li>
            <li>All major brands serviced and installed</li>
          </ul>

          <h2>Service Areas</h2>
          <p>
            We provide emergency heating repair services across the Tampa Bay region including:
          </p>
          <ul>
            {CITIES.map((city) => (
              <li key={city}>{city}, FL</li>
            ))}
          </ul>
        </section>

        {/* CTA repeat */}
        <section className="bg-blue-50 rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Need emergency heating repair Help Now?
          </h2>
          <p className="text-gray-600 mb-6">
            Our dispatch team is standing by. Call or book online for priority
            scheduling.
          </p>
          <a
            href="tel:+1727XXXXXXX"
            className="inline-block bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition"
          >
            Schedule Emergency Service
          </a>
        </section>

        {/* Internal links */}
        <nav className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4">Related Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="/emergency-ac-repair" className="text-blue-600 hover:underline">
                ← emergency ac repair (all services)
              </a>
            </li>
            <li>
              <a href="/emergency-ac-repair" className="text-blue-600 hover:underline">
                Emergency AC Repair
              </a>
            </li>
            <li>
              <a href="/24-hour-ac-repair-near-me" className="text-blue-600 hover:underline">
                24 Hour AC Repair Near Me
              </a>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
