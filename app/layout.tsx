import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GTM } from "./components/GTM";
import { config } from "@/lib/config";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Blume Mechanical Service | Modern Climate Solutions for Florida",
    template: "%s | Blume Mechanical Service",
  },
  description:
    "Modern climate solutions built around comfort, reliability, and long-term performance. Premium residential and commercial HVAC for Tampa Bay. Est. 1976.",
  metadataBase: new URL("https://blumeservice.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Blume Mechanical Service",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <head>
        <GTM />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Premium sticky nav — glassmorphism */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#081120] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-[#081120] font-bold text-lg tracking-tight">
                  Blume Mechanical
                </span>
                <span className="hidden sm:block text-xs text-gray-400 -mt-1">
                  Climate Solutions &amp; Comfort
                </span>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <a href="/areas-we-serve/belleair-bluffs-fl/ac-repair" className="hover:text-[#081120] transition">
                Residential
              </a>
              <a href="/commercial-ac-unit" className="hover:text-[#081120] transition">
                Commercial
              </a>
              <a href="/24-hour-ac-repair-near-me" className="hover:text-[#081120] transition">
                Comfort Plans
              </a>
              <a href="/about" className="hover:text-[#081120] transition">
                About
              </a>
              <a href="/contact" className="hover:text-[#081120] transition">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${config.company.phoneHref}`}
                className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#081120]"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                {config.company.phone}
              </a>
              <a
                href={`tel:${config.company.phoneHref}`}
                className="btn-primary !py-2 !px-5 !text-sm"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* Premium footer */}
        <footer className="bg-[#081120] text-white">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Blume Mechanical</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Modern climate solutions built around comfort, reliability,
                  and long-term performance. Serving Tampa Bay since 1976.
                </p>
                <p className="text-blue-300 text-xs mt-4">
                  License #CAC-1822618
                </p>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
                  Residential
                </h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><a href="/ac-not-working" className="hover:text-white transition">AC Repair</a></li>
                  <li><a href="/emergency-air-conditioning-repair" className="hover:text-white transition">Emergency Service</a></li>
                  <li><a href="/ac-fan-not-working" className="hover:text-white transition">Diagnostics</a></li>
                  <li><a href="/same-day-ac-repair" className="hover:text-white transition">Same-Day Repair</a></li>
                </ul>
              </div>

              {/* Commercial */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
                  Commercial
                </h4>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li><a href="/commercial-ac-unit" className="hover:text-white transition">Commercial HVAC</a></li>
                  <li><a href="/apartment-ac-unit" className="hover:text-white transition">Multi-Family</a></li>
                  <li><a href="/hvac-emergency-repair" className="hover:text-white transition">Facility Management</a></li>
                  <li><a href="/24-hour-hvac" className="hover:text-white transition">24/7 Support</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-blue-300 mb-4">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-blue-200">
                  <li>
                    <span className="text-blue-400 text-xs block">Office</span>
                    <a href={`tel:${config.company.phoneHref}`} className="hover:text-white transition font-medium">{config.company.phone}</a>
                  </li>
                  <li>
                    <span className="text-blue-400 text-xs block">Email</span>
                    <a href="mailto:Tye@BlumeService.com" className="hover:text-white transition">Tye@BlumeService.com</a>
                  </li>
                  <li>
                    <span className="text-blue-400 text-xs block">HQ</span>
                    <span>2840 W Bay Dr PMB 114<br />Belleair Bluffs, FL 33770</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-blue-400">
              <p>&copy; {new Date().getFullYear()} Blume Mechanical Service, LLC. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">
                <a href="https://search.google.com/local/writereview?placeid=ChIJz81HGyj7wogRn_qa1jMDhb4" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">
                  Leave a Review
                </a>
                {" · "}
                <a href="/giving-back" className="hover:text-white transition">Community</a>
                {" · "}
                <a href="/hire-a-pro" className="hover:text-white transition">Careers</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
