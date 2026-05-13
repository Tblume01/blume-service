import { Metadata } from 'next';
import { GEOGRAPHIC_DATA } from '@/data/geographic-data';
import { config } from '@/lib/config';

export async function generateStaticParams() {
  const params = [];
  for (const state of GEOGRAPHIC_DATA) {
    for (const county of state.counties) {
      params.push({
        state: state.slug,
        county: county.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; county: string }>;
}): Promise<Metadata> {
  const { state: stateSlug, county: countySlug } = await params;
  const state = GEOGRAPHIC_DATA.find((s) => s.slug === stateSlug);
  const county = state?.counties.find((c) => c.slug === countySlug);

  if (!state || !county) {
    return {};
  }

  const cityList = county.cities.map((c) => c.name).join(', ');

  return {
    title: `HVAC Repair in ${county.name}, ${state.fullName} | Blume Mechanical`,
    description: `Professional HVAC repair and AC service in ${county.name}. Serving ${county.cities.length} cities including ${county.cities.slice(0, 3).map((c) => c.name).join(', ')}. 24/7 emergency support, licensed technicians.`,
    openGraph: {
      title: `HVAC Repair in ${county.name}, ${state.fullName}`,
      description: `Local AC repair and HVAC service across ${county.name}.`,
      type: 'website',
      url: `https://blumeservice.com/hvac-repair-${stateSlug}/${countySlug}`,
    },
  };
}

export default async function CountyPage({
  params,
}: {
  params: Promise<{ state: string; county: string }>;
}) {
  const { state: stateSlug, county: countySlug } = await params;
  const state = GEOGRAPHIC_DATA.find((s) => s.slug === stateSlug);
  const county = state?.counties.find((c) => c.slug === countySlug);

  if (!state || !county) {
    return <div>County not found</div>;
  }

  return (
    <>
      <link rel="canonical" href={`https://blumeservice.com/hvac-repair-${stateSlug}/${countySlug}`} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            HVAC Repair in {county.name}, {state.fullName}
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Professional air conditioning service across {county.cities.length} cities
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition"
          >
            Schedule Service — {config.company.phone}
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none mb-12">
            <h2>HVAC Service in {county.name}</h2>
            <p>
              Serving homeowners and businesses throughout {county.name} with professional HVAC
              repair, maintenance, and installation. Whether you need emergency AC repair or
              preventative maintenance, Blume Mechanical Service is ready to help.
            </p>

            <h3>Our Service Areas in {county.name}</h3>
            <p>
              We provide 24/7 HVAC service to the following cities and towns in {county.name}:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 mb-12">
            {county.cities.map((city) => (
              <a
                key={city.slug}
                href={`/hvac-repair-${stateSlug}/${countySlug}/${city.slug}`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition"
              >
                <span className="text-blue-600">→</span>
                <span className="font-medium text-gray-900">{city.name}</span>
              </a>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Blume?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Licensed, insured Florida HVAC contractors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">24/7 emergency response availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">NATE-certified, experienced technicians</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Upfront pricing with no surprise charges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700">Same-day service in most cases</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Back to state */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            <a href={`/hvac-repair-${stateSlug}`} className="text-blue-600 hover:underline">
              ← Back to {state.fullName} Service Areas
            </a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need HVAC Help in {county.name}?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Call our dispatch team now for immediate service.
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-red-700 transition"
          >
            Call {config.company.phone}
          </a>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: config.company.name,
            telephone: config.company.phoneHref,
            email: config.company.email,
            url: config.site.url,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.address.street,
              addressLocality: config.address.city,
              addressRegion: config.address.state,
              postalCode: config.address.zip,
              addressCountry: config.address.country,
            },
            areaServed: county.cities.map((city) => ({
              '@type': 'City',
              name: `${city.name}, ${state.fullName}`,
            })),
            serviceType: 'HVAC Repair and Installation',
            priceRange: '$$',
          }),
        }}
      />
    </>
  );
}
