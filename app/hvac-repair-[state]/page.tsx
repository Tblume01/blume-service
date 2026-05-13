import { Metadata, MetadataRoute } from 'next';
import { GEOGRAPHIC_DATA, State } from '@/data/geographic-data';
import { config } from '@/lib/config';

export async function generateStaticParams() {
  return GEOGRAPHIC_DATA.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = GEOGRAPHIC_DATA.find((s) => s.slug === stateSlug);

  if (!state) {
    return {};
  }

  return {
    title: `HVAC Repair & Air Conditioning Service in ${state.fullName} | Blume Mechanical`,
    description: `Professional HVAC repair and air conditioning service across ${state.fullName}. Licensed technicians, 24/7 emergency support, upfront pricing. Serving ${state.counties.length} counties.`,
    openGraph: {
      title: `HVAC Repair in ${state.fullName}`,
      description: `Professional climate solutions and HVAC service across ${state.fullName}.`,
      type: 'website',
      url: `https://blumeservice.com/hvac-repair-${stateSlug}`,
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const state = GEOGRAPHIC_DATA.find((s) => s.slug === stateSlug);

  if (!state) {
    return <div>State not found</div>;
  }

  const countyCount = state.counties.length;
  const cityCount = state.counties.reduce((acc, county) => acc + county.cities.length, 0);

  return (
    <>
      <link rel="canonical" href={`https://blumeservice.com/hvac-repair-${stateSlug}`} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            HVAC Repair & Air Conditioning Service in {state.fullName}
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Professional climate solutions across all {countyCount} counties in {state.fullName}
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
            <h2>Why Choose Blume for HVAC Service in {state.fullName}?</h2>
            <p>
              Whether you're in the bustling cities or quiet towns across {state.fullName}, Blume
              Mechanical Service provides professional HVAC repair, maintenance, and installation
              with a commitment to quality and reliability.
            </p>

            <h2>Our {state.fullName} Coverage</h2>
            <p>
              We serve customers across {countyCount} counties and {cityCount}+ cities throughout
              {state.fullName}, from the largest metropolitan areas to smaller communities.
            </p>

            <h3>What We Offer</h3>
            <ul>
              <li>24/7 emergency HVAC repair and support</li>
              <li>Licensed, insured, and NATE-certified technicians</li>
              <li>Same-day service availability in most areas</li>
              <li>Upfront pricing with no hidden charges</li>
              <li>Preventative maintenance plans</li>
              <li>System installation and replacement</li>
              <li>Commercial and residential solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Counties Grid */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service by County</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {state.counties.map((county) => (
              <a
                key={county.slug}
                href={`/hvac-repair-${stateSlug}/${county.slug}`}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-2">{county.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {county.cities.length} cities • Local HVAC service
                </p>
                <span className="text-red-600 font-medium text-sm">View Service Areas →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Professional HVAC Service?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Call us today or select your county above to find local service availability.
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
            areaServed: state.counties.map((county) => ({
              '@type': 'AdministrativeArea',
              name: county.name,
            })),
            priceRange: '$$',
            serviceType: 'HVAC Repair and Installation',
          }),
        }}
      />
    </>
  );
}
