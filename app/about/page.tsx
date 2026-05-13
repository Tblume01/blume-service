import { Metadata } from 'next';
import { config, fullAddress } from '@/lib/config';

export const metadata: Metadata = {
  title: `About Blume Mechanical Service | Industry Leaders in HVAC`,
  description: `Learn about Blume Mechanical Service — Florida's trusted HVAC experts since 1976. Licensed, insured, and committed to premium climate solutions.`,
  openGraph: {
    title: `About Blume Mechanical Service`,
    description: `Premium HVAC solutions since 1976. Meet the team behind Tampa Bay's most trusted mechanical service.`,
    type: 'website',
    url: 'https://blumeservice.com/about',
  },
};

export default function About() {
  return (
    <>
      <link rel="canonical" href="https://blumeservice.com/about" />
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            About Blume Mechanical Service
          </h1>
          <p className="text-xl text-blue-200">
            50+ Years of Trusted HVAC Excellence in Tampa Bay
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>Our Legacy</h2>
            <p>
              Founded in 1976, Blume Mechanical Service has been the cornerstone of climate
              comfort across the Tampa Bay region for over 50 years. What started as a
              commitment to reliable HVAC service has evolved into a comprehensive mechanical
              solutions provider serving residential and commercial clients.
            </p>

            <h2>Our Mission</h2>
            <p>
              We believe that premium climate solutions should be accessible, transparent, and
              built on trust. Our mission is to deliver world-class HVAC service that prioritizes
              your comfort, your home, and your peace of mind — 24/7, 365 days a year.
            </p>

            <h2>What Sets Us Apart</h2>
            <ul>
              <li><strong>Licensed & Insured:</strong> Full Florida state licensure and comprehensive coverage</li>
              <li><strong>24/7 Emergency Response:</strong> Average response time under 45 minutes</li>
              <li><strong>Certified Technicians:</strong> NATE-certified professionals with decades of experience</li>
              <li><strong>Upfront Pricing:</strong> No hidden charges, no surprises — transparent quotes every time</li>
              <li><strong>All Major Brands:</strong> We service and install every leading HVAC manufacturer</li>
              <li><strong>Premium Service Plans:</strong> Preventative maintenance that extends equipment life</li>
            </ul>

            <h2>Service Area</h2>
            <p>
              We proudly serve homeowners and businesses throughout the Tampa Bay region, including:
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {config.cities.map((city) => (
              <span
                key={city}
                className="bg-blue-50 px-4 py-2 rounded-full text-sm font-medium text-blue-900 border border-blue-200"
              >
                {city}, FL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Reliability', desc: 'Your comfort is our accountability. We show up, on time, every time.' },
              { title: 'Integrity', desc: 'Honest assessments and transparent pricing — no pressure, no upsell.' },
              { title: 'Excellence', desc: 'Premium solutions delivered with precision and pride in every job.' },
            ].map((val) => (
              <div key={val.title} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-blue-900 mb-3">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Contact us today for superior HVAC service in the Tampa Bay area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${config.company.phoneHref}`}
              className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition"
            >
              Call {config.company.phone}
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-blue-900 text-blue-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-50 transition"
            >
              Get in Touch
            </a>
          </div>
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
            foundingDate: '1976',
            areaServed: config.cities.map((c) => ({ '@type': 'City', name: `${c}, FL` })),
          }),
        }}
      />
    </>
  );
}
