import { Metadata } from 'next';

// SEO Target: "ac repair belleair bluffs" + "air conditioning repair belleair bluffs fl"
// Volume: local long-tail | Difficulty: low (hyper-local) | Intent: transactional
// This is Blume's HQ city — must own this page completely

const CITY = 'Belleair Bluffs';
const STATE = 'FL';
const COUNTY = 'Pinellas County';
const PHONE_MAIN = '(855) 258-6322';
const PHONE_EMERGENCY = '(727) 205-7984';
const PHONE_LOCAL = '(727) 334-7532';

export const metadata: Metadata = {
  title: `AC Repair in ${CITY}, ${STATE} | Same-Day Service | Blume Mechanical`,
  description: `Need AC repair in ${CITY}? Blume Mechanical Service — headquartered right here in ${CITY} — provides same-day air conditioning repair, 24/7 emergency service, and preventive maintenance. NATE-certified technicians. Call ${PHONE_MAIN}.`,
  openGraph: {
    title: `AC Repair ${CITY} FL — Blume Mechanical Service`,
    description: `Your neighbors' HVAC company since 1976. Same-day AC repair in ${CITY}, FL. Licensed #CAC-1822618.`,
    type: 'website',
  },
};

function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `AC Repair in ${CITY}, ${STATE}`,
    provider: {
      '@type': 'HVACBusiness',
      name: 'Blume Mechanical Service, LLC',
      image: '/images/blume-logo.png',
      telephone: '+1-855-258-6322',
      email: 'Tye@BlumeService.com',
      url: 'https://blumeservice.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2840 W Bay Drive PMB 114',
        addressLocality: CITY,
        addressRegion: STATE,
        postalCode: '33770',
        addressCountry: 'US',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 27.9175, longitude: -82.8106 },
      areaServed: { '@type': 'City', name: `${CITY}, ${STATE}` },
      priceRange: '$$',
      foundingDate: '1976',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '963',
        bestRating: '5',
      },
    },
    serviceType: 'Air Conditioning Repair',
    areaServed: { '@type': 'City', name: `${CITY}, ${STATE}` },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function FAQSchema() {
  const faqs = [
    { q: `How quickly can Blume get to my home in ${CITY}?`, a: `Because our headquarters is located right here in ${CITY} on West Bay Drive, we can typically have a NATE-certified technician at your door within 30-45 minutes during business hours. For after-hours emergencies, our average response time is under 90 minutes anywhere in ${COUNTY}.` },
    { q: `How much does AC repair cost in ${CITY}?`, a: `AC repair costs in ${CITY} typically range from $150 for a simple capacitor replacement to $1,200+ for compressor work. Blume provides free diagnostic assessments and upfront pricing before any work begins — no surprise charges. Our Preventative Maintenance Club members receive priority scheduling and discounted labor rates.` },
    { q: 'Do you offer 24/7 emergency AC repair?', a: `Yes. Florida heat doesn't wait for business hours, and neither do we. Call our emergency line at ${PHONE_EMERGENCY} any time — nights, weekends, holidays. Preventative Maintenance Club members are guaranteed same-day emergency service or the labor is free.` },
    { q: 'What brands of AC units do you repair?', a: 'Blume is brand agnostic — we service and repair every major manufacturer including Carrier, Trane, Lennox, Rheem, Goodman, Daikin, Mitsubishi, York, and Bryant. Our technicians are factory-trained across all major platforms.' },
    { q: `Why should I choose Blume over other HVAC companies in ${CITY}?`, a: `Three reasons: proximity, history, and accountability. We're headquartered in ${CITY} — not driving in from Tampa or Orlando. Our company was founded in 1976 by Steve Blume as BCH Mechanical, so we've been serving this community for nearly 50 years. And our license (#CAC-1822618) and NATE certifications mean every technician meets the highest industry standard.` },
    { q: 'What does your Preventative Maintenance Club include?', a: 'Two full system tune-ups per year, priority emergency scheduling with a same-day guarantee (or labor is free), 15% discount on all repairs, extended equipment life, and lower energy bills. Most members save $200-400/year compared to non-members.' },
    { q: 'How do I know if my AC needs repair or replacement?', a: 'If your system is under 10 years old and the repair cost is less than 50% of a new system, repair is usually the right call. If your system is 15+ years old, requires R-22 refrigerant (phased out), or needs a compressor replacement, we typically recommend replacement. We always provide both options with transparent pricing so you can make an informed decision.' },
    { q: `Do you handle commercial AC repair in ${CITY}?`, a: `Absolutely. Blume serves commercial properties throughout ${CITY} and ${COUNTY} including restaurants, retail stores, office buildings, and multi-unit residential. Our commercial team specializes in rooftop units, split systems, VRF, and chiller systems. We offer preventive maintenance contracts designed to minimize downtime and protect your investment.` },
    { q: 'Is Blume licensed and insured?', a: 'Yes. Blume Mechanical Service holds Florida HVAC License #CAC-1822618, carries full general liability and workers\' compensation insurance, and employs NATE-certified technicians. We also hold NEBB certification for Test and Balance & Commissioning — a credential held by fewer than 5% of HVAC companies in Florida.' },
    { q: 'What are signs my AC is about to fail?', a: 'Watch for these warning signs: unusual noises (grinding, squealing, banging), warm air blowing from vents, frequent cycling on and off, unexplained increases in your electric bill, ice forming on the evaporator coil, musty or burning smells, and water pooling around the indoor unit. If you notice any of these, call us before a minor issue becomes a major repair.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const TESTIMONIALS = [
  { name: 'John Massa', date: 'May 2024', text: 'Very happy with Blume. Tye took me through the entire process and explained all the options. Install only took one day. New system is up and running. Highly recommend if you need HVAC services.' },
  { name: 'Becca Rogers', date: 'March 2024', text: 'Top-notch, timely, and experienced service is an understatement! Our techs (Oz and Chris) answered all of our questions and explained in detail exactly what they were doing and why. If I could give 10 stars, I would.' },
  { name: 'JD Wollinka', date: 'September 2023', text: 'Blume A/C answered my call promptly and had me on the schedule for service immediately. Ty took the time to explain exactly what the issue was and the most cost efficient way to repair. Honest and reliable.' },
];

const NEARBY_CITIES = [
  { name: 'Belleair', slug: '/areas-we-serve/belleair-fl/ac-repair' },
  { name: 'Largo', slug: '/areas-we-serve/largo-fl/ac-repair' },
  { name: 'Clearwater', slug: '/areas-we-serve/clearwater-fl/ac-repair' },
  { name: 'Indian Rocks Beach', slug: '/areas-we-serve/indian-rocks-beach-fl/ac-repair' },
  { name: 'Seminole', slug: '/areas-we-serve/seminole-fl/ac-repair' },
  { name: 'Dunedin', slug: '/areas-we-serve/dunedin-fl/ac-repair' },
];

const SERVICES = [
  { name: 'AC Installation', href: '/areas-we-serve/belleair-bluffs-fl/ac-installation' },
  { name: 'Commercial HVAC', href: '/areas-we-serve/belleair-bluffs-fl/commercial-hvac' },
  { name: 'Emergency AC Service', href: '/areas-we-serve/belleair-bluffs-fl/emergency-ac-repair' },
  { name: 'Heating Services', href: '/areas-we-serve/belleair-bluffs-fl/heating-services' },
  { name: 'Maintenance Plans', href: '/areas-we-serve/belleair-bluffs-fl/maintenance-plans' },
];

export default function BelleairBluffsACRepair() {
  return (
    <>
      <ServiceSchema />
      <FAQSchema />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-technician.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-300 font-semibold uppercase tracking-wider text-sm mb-3">
              Headquartered in {CITY} Since 1976
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              AC Repair in {CITY}, Florida
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Your air conditioner broke down and the Florida heat isn&apos;t waiting.
              Blume Mechanical Service is headquartered right here on West Bay Drive —
              not driving in from Tampa. Our NATE-certified technicians provide same-day
              AC repair with upfront pricing and zero surprise charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:+18552586322`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition text-center">
                Call Now — {PHONE_MAIN}
              </a>
              <a href={`tel:+17272057984`} className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg text-lg transition text-center">
                Emergency — {PHONE_EMERGENCY}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold mb-4">Why {CITY} Chooses Blume</h3>
              <ul className="space-y-3">
                {[
                  'Headquartered in Belleair Bluffs — not a franchise',
                  'NATE-certified, factory-trained technicians',
                  'Same-day service guarantee (PM Club)',
                  'Upfront pricing — no surprise charges',
                  'All brands serviced and installed',
                  'License #CAC-1822618',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 border-b py-5">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600">
          <span>⭐ 4.8 Stars — 963+ Reviews</span>
          <span>🏆 Est. 1976</span>
          <span>📋 License #CAC-1822618</span>
          <span>🔧 NATE Certified</span>
          <span>⏰ 24/7 Emergency Service</span>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Why Blume for AC Repair */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why {CITY} Homeowners Trust Blume for AC Repair
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {CITY} sits at the heart of {COUNTY}, just minutes from the Gulf beaches and surrounded by the
              communities of Belleair, Largo, and Indian Rocks Beach. With summer temperatures regularly pushing
              past 95°F and humidity levels that make it feel like 110°F, a working air conditioner isn&apos;t a
              luxury here — it&apos;s a necessity.
            </p>
            <p>
              Blume Mechanical Service has been headquartered in {CITY} since we established our operations on
              West Bay Drive. Our roots go back to 1976 when founder Steve Blume created BCH Mechanical, building
              a reputation for honest service and technical excellence that spans nearly five decades. Today, under
              the leadership of Tye Blume, we continue that tradition with modern diagnostic equipment, NATE-certified
              technicians, and a commitment to treating every customer like a neighbor — because in {CITY}, you are.
            </p>
            <p>
              Unlike HVAC companies that drive in from Tampa or St. Petersburg, our technicians are already in
              your neighborhood. That means faster response times, lower travel costs passed on to you, and
              technicians who understand the specific challenges of {CITY}&apos;s housing stock — from the
              historic homes along Indian Rocks Road to the newer construction near the Belleair Causeway.
            </p>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            AC Repair Services We Provide in {CITY}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Diagnostic Assessment', desc: 'Complete system evaluation using digital manifolds and thermal imaging to pinpoint the exact issue — not guesswork. Free with any repair.' },
              { title: 'Refrigerant Recharge & Leak Repair', desc: 'R-410A and R-454B charging with electronic leak detection. We find and fix the leak first — not just top off and hope.' },
              { title: 'Compressor Replacement', desc: 'When your compressor fails, we provide same-day replacement on common models. We stock Copeland, Danfoss, and Bristol compressors locally.' },
              { title: 'Capacitor & Contactor Replacement', desc: 'The most common AC failure in Florida heat. We carry the top 20 capacitor sizes on every truck — most repairs done in under an hour.' },
              { title: 'Evaporator & Condenser Coil Service', desc: 'Coil cleaning, leak repair, and replacement. Dirty coils are the #1 cause of high electric bills in Pinellas County.' },
              { title: 'Thermostat Diagnosis & Replacement', desc: 'From basic programmable to Ecobee and Nest smart thermostats — we install, configure, and optimize for Florida climate patterns.' },
              { title: 'Ductwork Inspection & Repair', desc: 'Leaking ducts can waste 30% of your cooling. We pressure-test and seal your duct system to maximize efficiency.' },
              { title: 'Drain Line Clearing', desc: 'Clogged condensate drains cause water damage and system shutdowns. We clear, treat, and install safety switches to prevent future issues.' },
            ].map((svc, i) => (
              <div key={i} className="bg-white border rounded-xl p-6 hover:shadow-md transition">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm">{svc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Climate Context */}
        <section className="mb-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How {CITY}&apos;s Climate Affects Your AC System
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              {CITY} experiences a humid subtropical climate with an average of 246 sunny days per year. Summer
              temperatures average 90-92°F with heat indices regularly exceeding 105°F from June through September.
              This means your air conditioning system runs 8-12 hours per day during peak season — roughly 2,400+
              hours of runtime annually.
            </p>
            <p>
              That level of demand puts enormous stress on every component: compressors wear faster, capacitors
              degrade in the heat, refrigerant charge drops as connections expand and contract with temperature
              cycling, and condensate drains clog with the algae growth that thrives in our humidity. The salt
              air from the nearby Gulf accelerates corrosion on outdoor condenser coils, particularly for homes
              west of Indian Rocks Road.
            </p>
            <p>
              This is why preventive maintenance isn&apos;t optional in {COUNTY} — it&apos;s the difference
              between a system that lasts 8 years and one that lasts 18. Our Preventative Maintenance Club was
              designed specifically for the demands of Gulf Coast living.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What Your {CITY} Neighbors Say About Blume
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-900 font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://search.google.com/local/writereview?placeid=ChIJz81HGyj7wogRn_qa1jMDhb4" className="text-blue-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
              Read all reviews on Google →
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions — AC Repair in {CITY}
          </h2>
          <div className="space-y-4">
            {[
              { q: `How quickly can Blume get to my home in ${CITY}?`, a: `Because our headquarters is located right here in ${CITY} on West Bay Drive, we can typically have a NATE-certified technician at your door within 30-45 minutes during business hours. For after-hours emergencies, our average response time is under 90 minutes anywhere in ${COUNTY}.` },
              { q: `How much does AC repair cost in ${CITY}?`, a: `AC repair costs in ${CITY} typically range from $150 for a simple capacitor replacement to $1,200+ for compressor work. Blume provides free diagnostic assessments and upfront pricing before any work begins — no surprise charges.` },
              { q: 'Do you offer 24/7 emergency AC repair?', a: `Yes. Florida heat doesn't wait for business hours, and neither do we. Call our emergency line at ${PHONE_EMERGENCY} any time — nights, weekends, holidays.` },
              { q: 'What brands of AC units do you repair?', a: 'Blume is brand agnostic — we service every major manufacturer including Carrier, Trane, Lennox, Rheem, Goodman, Daikin, Mitsubishi, York, and Bryant.' },
              { q: `Why choose Blume over other HVAC companies?`, a: `Proximity, history, and accountability. We're headquartered in ${CITY} — not driving in from Tampa. Founded in 1976, nearly 50 years of service. NATE-certified, licensed #CAC-1822618.` },
              { q: 'What does your Preventative Maintenance Club include?', a: 'Two tune-ups per year, priority emergency scheduling with same-day guarantee (or labor is free), 15% repair discount, extended equipment life, and lower energy bills.' },
              { q: 'How do I know if my AC needs repair or replacement?', a: 'Under 10 years old with repair cost under 50% of new system? Repair. Over 15 years, needs R-22, or compressor failure? Usually replacement. We always provide both options with transparent pricing.' },
              { q: `Do you handle commercial AC repair in ${CITY}?`, a: `Yes. We serve restaurants, retail, offices, and multi-unit residential throughout ${CITY} and ${COUNTY}. Our commercial team specializes in rooftop units, split systems, VRF, and chillers.` },
              { q: 'Is Blume licensed and insured?', a: `Yes. Florida HVAC License #CAC-1822618, full general liability and workers' comp insurance, NATE-certified technicians, and NEBB certification for Test and Balance — held by fewer than 5% of Florida HVAC companies.` },
              { q: 'What are signs my AC is about to fail?', a: 'Unusual noises, warm air from vents, frequent cycling, rising electric bills, ice on the evaporator coil, musty or burning smells, and water pooling around the indoor unit. Call us before a minor issue becomes a major repair.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white border rounded-xl group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-blue-600 list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Other services in this city */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Other HVAC Services in {CITY}
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {SERVICES.map((svc) => (
              <a key={svc.href} href={svc.href} className="block bg-white border rounded-xl p-5 hover:shadow-md hover:border-blue-200 transition group">
                <h3 className="font-bold text-blue-900 group-hover:text-red-600 transition">{svc.name}</h3>
                <span className="text-red-600 text-sm mt-2 inline-block">Learn more →</span>
              </a>
            ))}
          </div>
        </section>

        {/* Nearby cities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            AC Repair in Nearby {COUNTY} Cities
          </h2>
          <div className="flex flex-wrap gap-3">
            {NEARBY_CITIES.map((city) => (
              <a key={city.slug} href={city.slug} className="bg-blue-50 hover:bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-medium transition">
                AC Repair in {city.name}, FL →
              </a>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need AC Repair in {CITY} Right Now?
          </h2>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re right down the street. Our dispatch team is standing by — call for same-day
            service or book online for priority scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:+18552586322`} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg text-xl transition">
              Call — {PHONE_MAIN}
            </a>
            <a href={`tel:+17272057984`} className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-10 rounded-lg text-xl transition">
              Emergency — {PHONE_EMERGENCY}
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-4">
            Blume Mechanical Service, LLC — 2840 W Bay Drive PMB 114, {CITY}, FL 33770 — License #CAC-1822618
          </p>
        </section>

      </div>
    </>
  );
}
