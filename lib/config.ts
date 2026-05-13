// Centralized configuration — sourced from .env.local
export const config = {
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Blume Mechanical Service, LLC',
    phone: process.env.NEXT_PUBLIC_PHONE || '(727) 330-9131',
    phoneHref: process.env.NEXT_PUBLIC_PHONE_HREF || '+17273309131',
    email: process.env.NEXT_PUBLIC_EMAIL || 'Tye@blumeservice.com',
  },
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS_STREET || '2840 West Bay Dr PMB 114',
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || 'Belleair Bluffs',
    state: process.env.NEXT_PUBLIC_ADDRESS_STATE || 'FL',
    zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || '33770',
    country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || 'US',
  },
  geo: {
    lat: parseFloat(process.env.NEXT_PUBLIC_LAT || '27.9175'),
    lng: parseFloat(process.env.NEXT_PUBLIC_LNG || '-82.8106'),
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://blumeservice.com',
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXX',
  },
  cities: ['Tampa', 'Clearwater', 'St Petersburg', 'Largo', 'Brandon'],
};

export function fullAddress() {
  return `${config.address.street}, ${config.address.city}, ${config.address.state} ${config.address.zip}`;
}
