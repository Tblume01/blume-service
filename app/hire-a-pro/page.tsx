import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Join Our Team | HVAC Careers at Blume Mechanical Service`,
  description: `Join Blume Mechanical Service! We're hiring licensed HVAC technicians and team members in the Tampa Bay area. Competitive pay, benefits, and professional growth.`,
  openGraph: {
    title: `Careers at Blume Mechanical Service`,
    description: `Join Florida's trusted HVAC team. Apply now for technician positions.`,
    type: 'website',
    url: 'https://blumeservice.com/hire-a-pro',
  },
};

export default function HireAPro() {
  return (
    <>
      <link rel="canonical" href="https://blumeservice.com/hire-a-pro" />
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-200">
            Build Your Career with Florida&apos;s Most Trusted HVAC Company
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Work with Blume?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Competitive Compensation',
                desc: 'Competitive wages, benefits package, and growth-based raises for skilled technicians.',
              },
              {
                title: 'Professional Development',
                desc: 'Ongoing training, certification support, and opportunities to advance into leadership roles.',
              },
              {
                title: 'Modern Equipment',
                desc: 'Work with the latest HVAC diagnostic tools and technology in the industry.',
              },
              {
                title: '24/7 Team Culture',
                desc: 'Shift flexibility, fair scheduling, and a supportive team environment.',
              },
              {
                title: 'Company Vehicle',
                desc: 'Fully equipped service vehicles for all technicians — ready to go each morning.',
              },
              {
                title: 'Established Reputation',
                desc: 'Join a company with 50+ years of trust in the Tampa Bay community.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current opportunities */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Opportunities</h2>
          <div className="space-y-6">
            {[
              {
                role: 'Licensed HVAC Technician',
                requirements: [
                  'Florida HVAC license (CAC) required',
                  'Minimum 3+ years service experience',
                  'Valid driver&apos;s license with clean record',
                  'Comfortable with emergency calls (24/7 rotation)',
                ],
              },
              {
                role: 'HVAC Service Apprentice',
                requirements: [
                  'High school diploma or equivalent',
                  'Willingness to pursue Florida HVAC license',
                  'Strong mechanical aptitude',
                  'Reliable transportation',
                ],
              },
              {
                role: 'Service Dispatcher',
                requirements: [
                  'Excellent communication skills',
                  'Scheduling and customer service experience',
                  'Proficiency with computer systems',
                  'Ability to handle fast-paced environment',
                ],
              },
            ].map((opp, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{opp.role}</h3>
                <h4 className="font-semibold text-gray-700 mb-2">Key Requirements:</h4>
                <ul className="space-y-2 mb-6">
                  {opp.requirements.map((req, j) => (
                    <li key={j} className="text-gray-600 flex items-start gap-3">
                      <span className="text-red-600 font-bold mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Apply</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Submit Resume',
                desc: 'Send your resume and qualifications to our team.',
              },
              {
                step: '2',
                title: 'Phone Interview',
                desc: 'Initial conversation to discuss experience and goals.',
              },
              {
                step: '3',
                title: 'In-Person Meeting',
                desc: 'Meet with management and tour our facility.',
              },
              {
                step: '4',
                title: 'Offer & Onboard',
                desc: 'Accept offer and begin your new career with us.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-200 text-center">
                <div className="text-4xl font-bold text-red-600 mb-3">{item.step}</div>
                <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for applications */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the Team?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Send your resume or call us to discuss your career with Blume.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${config.company.email}?subject=Career Inquiry`}
              className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-red-700 transition"
            >
              Send Your Resume
            </a>
            <a
              href={`tel:${config.company.phoneHref}`}
              className="inline-block border-2 border-white text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition"
            >
              Call {config.company.phone}
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
            '@type': 'JobPosting',
            hiringOrganization: {
              '@type': 'Organization',
              name: config.company.name,
              sameAs: config.site.url,
              logo: 'https://blumeservice.com/logo.png',
            },
            jobLocations: {
              '@type': 'Place',
              address: {
                '@type': 'PostalAddress',
                streetAddress: config.address.street,
                addressLocality: config.address.city,
                addressRegion: config.address.state,
                postalCode: config.address.zip,
                addressCountry: 'US',
              },
            },
            baseSalary: {
              '@type': 'PriceSpecification',
              priceCurrency: 'USD',
              price: 'Competitive — Based on Experience',
            },
          }),
        }}
      />
    </>
  );
}
