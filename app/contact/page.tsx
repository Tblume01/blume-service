import { Metadata } from 'next';
import { config, fullAddress } from '@/lib/config';

export const metadata: Metadata = {
  title: `Contact Blume Mechanical Service | 24/7 Support`,
  description: `Get in touch with Blume Mechanical Service. Call ${config.company.phone} for emergency HVAC service or use our contact form for inquiries.`,
  openGraph: {
    title: `Contact Blume Mechanical Service`,
    description: `24/7 HVAC emergency support in Tampa Bay. Call or contact us online.`,
    type: 'website',
    url: 'https://blumeservice.com/contact',
  },
};

export default function Contact() {
  return (
    <>
      <link rel="canonical" href="https://blumeservice.com/contact" />
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-200">
            24/7 Support for All Your HVAC Needs
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Emergency service available 24/7</p>
              <a
                href={`tel:${config.company.phoneHref}`}
                className="text-red-600 font-bold text-lg hover:underline"
              >
                {config.company.phone}
              </a>
              <p className="text-sm text-gray-500 mt-2">Average response time: 45 minutes</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Non-urgent inquiries</p>
              <a
                href={`mailto:${config.company.email}`}
                className="text-red-600 font-bold hover:underline"
              >
                {config.company.email}
              </a>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                {config.address.street}<br />
                {config.address.city}, {config.address.state} {config.address.zip}
              </p>
            </div>
          </div>

          {/* Service area coverage */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Service Area Coverage</h2>
            <p className="text-gray-600 mb-6">
              We provide emergency HVAC service throughout the Tampa Bay region:
            </p>
            <div className="flex flex-wrap gap-3">
              {config.cities.map((city) => (
                <span
                  key={city}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-900 border border-blue-200"
                >
                  {city}, FL
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Blume?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              '✓ Licensed & insured Florida HVAC contractors',
              '✓ 24/7 emergency response availability',
              '✓ NATE-certified technicians',
              '✓ Upfront, transparent pricing',
              '✓ Same-day service available',
              '✓ All major brands serviced & installed',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-gray-700">{item.replace('✓ ', '')}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready for Professional HVAC Service?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Call our dispatch team now for immediate service or to schedule an appointment.
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-red-700 transition"
          >
            Schedule Service — {config.company.phone}
          </a>
        </div>
      </section>

      {/* JSON-LD */}
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
            geo: {
              '@type': 'GeoCoordinates',
              latitude: config.geo.lat,
              longitude: config.geo.lng,
            },
            areaServed: config.cities.map((c) => ({ '@type': 'City', name: `${c}, FL` })),
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: config.company.phoneHref,
              areaServed: 'US',
              availableLanguage: ['en'],
            },
          }),
        }}
      />
    </>
  );
}
