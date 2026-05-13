import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Community Involvement | Blume Mechanical Service`,
  description: `Blume Mechanical Service is committed to giving back to the Tampa Bay community. Learn about our community partnerships and CSR initiatives.`,
  openGraph: {
    title: `Community Involvement | Blume Mechanical Service`,
    description: `Our commitment to the Tampa Bay community and social responsibility.`,
    type: 'website',
    url: 'https://blumeservice.com/giving-back',
  },
};

export default function GivingBack() {
  return (
    <>
      <link rel="canonical" href="https://blumeservice.com/giving-back" />
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Giving Back to Our Community
          </h1>
          <p className="text-xl text-blue-200">
            Blume Mechanical Service is committed to making a positive impact in Tampa Bay
          </p>
        </div>
      </section>

      {/* Community commitment */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>Our Commitment</h2>
            <p>
              For over 50 years, Blume Mechanical Service has been more than just an HVAC
              company — we&apos;re members of the Tampa Bay community. We believe in supporting
              the neighborhoods we serve and contributing to the wellbeing of our customers
              and their families.
            </p>

            <h2>Community Partnerships</h2>
            <p>
              We actively partner with local organizations and nonprofits to address
              important community needs:
            </p>
            <ul>
              <li><strong>Youth Development:</strong> Supporting STEM education initiatives in Pinellas County schools</li>
              <li><strong>Emergency Relief:</strong> Providing emergency HVAC support during natural disasters</li>
              <li><strong>Trade Skills Programs:</strong> Mentoring the next generation of HVAC technicians</li>
              <li><strong>Local Charities:</strong> Annual donations to food banks and homeless services</li>
            </ul>

            <h2>Environmental Responsibility</h2>
            <p>
              We&apos;re committed to sustainable HVAC practices that protect Florida&apos;s
              environment:
            </p>
            <ul>
              <li>Proper refrigerant recovery and recycling on all service calls</li>
              <li>Energy-efficient system recommendations to reduce customer carbon footprint</li>
              <li>Using eco-friendly materials and practices whenever possible</li>
              <li>Supporting the transition to environmentally responsible cooling solutions</li>
            </ul>

            <h2>Industry Leadership</h2>
            <p>
              We&apos;re active members of the Florida HVAC industry, contributing to best
              practices and professional standards that benefit all consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action for volunteers */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Are you interested in joining our team or learning more about partnership opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/hire-a-pro"
              className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition"
            >
              Join Our Team
            </a>
            <a
              href="/contact"
              className="inline-block border-2 border-blue-900 text-blue-900 font-bold py-4 px-10 rounded-lg text-lg hover:bg-blue-100 transition"
            >
              Partnership Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Serving Our Communities</h2>
          <p className="text-gray-600 mb-8">
            We&apos;re proud to serve families and businesses across:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.cities.map((city) => (
              <span
                key={city}
                className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {city}, FL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Questions About Our Community Work?</h2>
          <p className="text-gray-600 mb-8">
            Contact us to learn more about our initiatives or discuss collaboration opportunities.
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition"
          >
            Call {config.company.phone}
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
            description: 'Community-focused HVAC service provider in Tampa Bay',
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
          }),
        }}
      />
    </>
  );
}
