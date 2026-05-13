import { Metadata } from 'next';
import { config } from '@/lib/config';

export const metadata: Metadata = {
  title: `Tampa Bay HVAC Repair | ${config.company.name} | 24/7 Service`,
  description: `Licensed HVAC repair in Tampa Bay. ${config.company.name} provides 24/7 emergency service. Call ${config.company.phone} for same-day repair.`,
  openGraph: {
    title: `HVAC Repair & Service | ${config.company.name}`,
    description: `24/7 emergency HVAC service in Tampa Bay. Licensed, insured, and ready to help.`,
    type: 'website',
    url: config.site.url,
  },
};

const SERVICES = [
  { title: "Emergency AC Repair", href: "/emergency-air-conditioning-repair", desc: "24/7 emergency response. Average 45-minute arrival in Tampa Bay." },
  { title: "AC Not Working", href: "/ac-not-working", desc: "Diagnose and fix your AC fast — same-day service available." },
  { title: "24 Hour AC Repair", href: "/24-hour-ac-repair-near-me", desc: "Round-the-clock HVAC repair when you need it most." },
  { title: "Commercial AC", href: "/commercial-ac-unit", desc: "Keep your business cool. Restaurant, office, and warehouse HVAC." },
  { title: "AC Fan Not Working", href: "/ac-fan-not-working", desc: "Fan motor diagnosis and replacement — fast turnaround." },
  { title: "Same Day AC Repair", href: "/same-day-ac-repair", desc: "Call before noon, fixed by dinner. Guaranteed." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Tampa Bay&apos;s Most Trusted HVAC Team
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Licensed. Insured. Available 24/7. Serving {config.cities.join(", ")} and all of Pinellas &amp; Hillsborough County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${config.company.phoneHref}`}
              className="bg-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition"
            >
              Call Now — {config.company.phone}
            </a>
            <a
              href="#services"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-blue-900 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-600 font-medium">
          <span>✓ Licensed &amp; Insured</span>
          <span>✓ 24/7 Emergency Service</span>
          <span>✓ Same-Day Appointments</span>
          <span>✓ Upfront Pricing</span>
          <span>✓ All Major Brands</span>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            HVAC Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <a
                key={svc.href}
                href={svc.href}
                className="block p-6 bg-white border rounded-xl hover:shadow-lg transition group"
              >
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-red-600 transition">
                  {svc.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{svc.desc}</p>
                <span className="text-red-600 text-sm font-medium mt-3 inline-block">
                  Learn more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
          <p className="text-gray-600 mb-8">
            Proudly serving homeowners and businesses across the Tampa Bay region.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {config.cities.map((city) => (
              <span
                key={city}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-blue-900 border"
              >
                {city}, FL
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need HVAC Help Now?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our dispatch team is standing by. Call or book online for priority scheduling.
          </p>
          <a
            href={`tel:${config.company.phoneHref}`}
            className="inline-block bg-red-600 text-white font-bold py-4 px-10 rounded-lg text-xl hover:bg-red-700 transition"
          >
            Schedule Emergency Service
          </a>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: config.company.name,
            telephone: config.company.phoneHref,
            email: config.company.email,
            url: config.site.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: config.address.street,
              addressLocality: config.address.city,
              addressRegion: config.address.state,
              postalCode: config.address.zip,
              addressCountry: config.address.country,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: config.geo.lat,
              longitude: config.geo.lng,
            },
            areaServed: config.cities.map((c) => ({ "@type": "City", name: `${c}, FL` })),
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              opens: "00:00",
              closes: "23:59",
            },
            priceRange: "$$",
            sameAs: [config.site.url],
          }),
        }}
      />
    </>
  );
}
