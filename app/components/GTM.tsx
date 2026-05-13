'use client';

import Script from 'next/script';
import { config } from '@/lib/config';

export function GTM() {
  if (config.site.gtmId === 'GTM-XXXXX') {
    // GTM not configured yet
    return null;
  }

  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${config.site.gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      {/* Google Tag Manager (script) */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${config.site.gtmId}');
          `,
        }}
      />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="ga"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      />
      <Script
        id="ga-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* Event tracking utility */}
      <Script
        id="tracking-util"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.trackEvent = function(eventName, eventData = {}) {
              if (typeof gtag !== 'undefined') {
                gtag('event', eventName, eventData);
              }
              if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                  'event': eventName,
                  ...eventData
                });
              }
            };

            // Auto-track phone clicks
            document.addEventListener('click', (e) => {
              const link = e.target.closest('a[href^="tel:"]');
              if (link) {
                window.trackEvent('phone_call', {
                  phone_number: link.href.replace('tel:', '')
                });
              }
            });
          `,
        }}
      />
    </>
  );
}
