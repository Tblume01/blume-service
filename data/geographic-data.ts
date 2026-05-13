/**
 * Geographic Data for Blume Mechanical Service
 * Defines all states, counties, and cities for location page generation
 *
 * Structure:
 * - West Coast Florida (Tallahassee to Key West): ALL cities
 * - Other states (AL, GA, SC, NC): TOP 5-10 major cities per county
 */

export interface City {
  name: string;
  slug: string;
}

export interface County {
  name: string;
  slug: string;
  cities: City[];
}

export interface State {
  name: string;
  slug: string;
  fullName: string;
  counties: County[];
}

// West Coast Florida - ALL Cities (15 counties)
const floridaWestCoastCounties: County[] = [
  {
    name: "Leon County",
    slug: "leon-county",
    cities: [
      { name: "Tallahassee", slug: "tallahassee" },
      { name: "Quincy", slug: "quincy" },
      { name: "Woodville", slug: "woodville" },
    ],
  },
  {
    name: "Wakulla County",
    slug: "wakulla-county",
    cities: [
      { name: "Crawfordville", slug: "crawfordville" },
      { name: "Sopchoppy", slug: "sopchoppy" },
      { name: "St. Marks", slug: "st-marks" },
    ],
  },
  {
    name: "Gulf County",
    slug: "gulf-county",
    cities: [
      { name: "Port St. Joe", slug: "port-st-joe" },
      { name: "Mexico Beach", slug: "mexico-beach" },
      { name: "Wewahitchka", slug: "wewahitchka" },
    ],
  },
  {
    name: "Franklin County",
    slug: "franklin-county",
    cities: [
      { name: "Apalachicola", slug: "apalachicola" },
      { name: "Carrabelle", slug: "carrabelle" },
    ],
  },
  {
    name: "Dixie County",
    slug: "dixie-county",
    cities: [
      { name: "Cross City", slug: "cross-city" },
      { name: "Horseshoe Beach", slug: "horseshoe-beach" },
    ],
  },
  {
    name: "Taylor County",
    slug: "taylor-county",
    cities: [
      { name: "Perry", slug: "perry" },
      { name: "Mayo", slug: "mayo" },
    ],
  },
  {
    name: "Jefferson County",
    slug: "jefferson-county",
    cities: [
      { name: "Monticello", slug: "monticello" },
      { name: "Lloyd", slug: "lloyd" },
    ],
  },
  {
    name: "Madison County",
    slug: "madison-county",
    cities: [
      { name: "Madison", slug: "madison" },
      { name: "Lee", slug: "lee" },
    ],
  },
  {
    name: "Lafayette County",
    slug: "lafayette-county",
    cities: [
      { name: "Mayo", slug: "mayo-laf" },
    ],
  },
  {
    name: "Levy County",
    slug: "levy-county",
    cities: [
      { name: "Williston", slug: "williston" },
      { name: "Chiefland", slug: "chiefland" },
      { name: "Otter Creek", slug: "otter-creek" },
    ],
  },
  {
    name: "Gilchrist County",
    slug: "gilchrist-county",
    cities: [
      { name: "Trenton", slug: "trenton" },
      { name: "Bell", slug: "bell" },
    ],
  },
  {
    name: "Citrus County",
    slug: "citrus-county",
    cities: [
      { name: "Inverness", slug: "inverness" },
      { name: "Crystal River", slug: "crystal-river" },
      { name: "Homosassa", slug: "homosassa" },
      { name: "Lecanto", slug: "lecanto" },
    ],
  },
  {
    name: "Hernando County",
    slug: "hernando-county",
    cities: [
      { name: "Brooksville", slug: "brooksville" },
      { name: "Spring Hill", slug: "spring-hill" },
      { name: "Homosassa Springs", slug: "homosassa-springs" },
      { name: "Weeki Wachee", slug: "weeki-wachee" },
    ],
  },
  {
    name: "Pasco County",
    slug: "pasco-county",
    cities: [
      { name: "Dade City", slug: "dade-city" },
      { name: "New Port Richey", slug: "new-port-richey" },
      { name: "Zephyrhills", slug: "zephyrhills" },
      { name: "Port Richey", slug: "port-richey" },
      { name: "Holiday", slug: "holiday" },
    ],
  },
  {
    name: "Hillsborough County",
    slug: "hillsborough-county",
    cities: [
      { name: "Tampa", slug: "tampa" },
      { name: "Brandon", slug: "brandon" },
      { name: "Plant City", slug: "plant-city" },
      { name: "Temple Terrace", slug: "temple-terrace" },
      { name: "Riverview", slug: "riverview" },
      { name: "Westchase", slug: "westchase" },
      { name: "Carrollwood", slug: "carrollwood" },
      { name: "Ybor City", slug: "ybor-city" },
    ],
  },
  {
    name: "Pinellas County",
    slug: "pinellas-county",
    cities: [
      { name: "Clearwater", slug: "clearwater" },
      { name: "St. Petersburg", slug: "st-petersburg" },
      { name: "Largo", slug: "largo" },
      { name: "Seminole", slug: "seminole" },
      { name: "Dunedin", slug: "dunedin" },
      { name: "Belleair", slug: "belleair" },
      { name: "Belleair Beach", slug: "belleair-beach" },
      { name: "Indian Rocks Beach", slug: "indian-rocks-beach" },
      { name: "Pinellas Park", slug: "pinellas-park" },
      { name: "Largo", slug: "largo" },
      { name: "Treasure Island", slug: "treasure-island" },
    ],
  },
  {
    name: "Manatee County",
    slug: "manatee-county",
    cities: [
      { name: "Bradenton", slug: "bradenton" },
      { name: "Sarasota", slug: "sarasota-manatee" },
      { name: "Palmetto", slug: "palmetto" },
      { name: "Lakewood Ranch", slug: "lakewood-ranch" },
      { name: "Parrish", slug: "parrish" },
      { name: "Holmes Beach", slug: "holmes-beach" },
    ],
  },
  {
    name: "Sarasota County",
    slug: "sarasota-county",
    cities: [
      { name: "Sarasota", slug: "sarasota" },
      { name: "Bradenton Beach", slug: "bradenton-beach" },
      { name: "Venice", slug: "venice" },
      { name: "Osprey", slug: "osprey" },
      { name: "North Port", slug: "north-port" },
      { name: "Siesta Key", slug: "siesta-key" },
      { name: "Longboat Key", slug: "longboat-key" },
    ],
  },
  {
    name: "Charlotte County",
    slug: "charlotte-county",
    cities: [
      { name: "Punta Gorda", slug: "punta-gorda" },
      { name: "Port Charlotte", slug: "port-charlotte" },
      { name: "Rotonda", slug: "rotonda" },
    ],
  },
  {
    name: "Lee County",
    slug: "lee-county",
    cities: [
      { name: "Fort Myers", slug: "fort-myers" },
      { name: "Cape Coral", slug: "cape-coral" },
      { name: "Fort Myers Beach", slug: "fort-myers-beach" },
      { name: "Estero", slug: "estero" },
      { name: "Sanibel", slug: "sanibel" },
      { name: "Captiva", slug: "captiva" },
      { name: "Lehigh Acres", slug: "lehigh-acres" },
      { name: "Bonita Springs", slug: "bonita-springs" },
    ],
  },
  {
    name: "Collier County",
    slug: "collier-county",
    cities: [
      { name: "Naples", slug: "naples" },
      { name: "Marco Island", slug: "marco-island" },
      { name: "Everglades City", slug: "everglades-city" },
      { name: "Golden Gate", slug: "golden-gate" },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    cities: [
      { name: "Key West", slug: "key-west" },
      { name: "Marathon", slug: "marathon" },
      { name: "Key Largo", slug: "key-largo" },
      { name: "Islamorada", slug: "islamorada" },
    ],
  },
];

// Other States - TOP 5-10 Major Cities Per County
const alabamaCounties: County[] = [
  {
    name: "Mobile County",
    slug: "mobile-county",
    cities: [
      { name: "Mobile", slug: "mobile" },
      { name: "Daphne", slug: "daphne" },
      { name: "Fairhope", slug: "fairhope" },
      { name: "Spanish Fort", slug: "spanish-fort" },
    ],
  },
  {
    name: "Baldwin County",
    slug: "baldwin-county",
    cities: [
      { name: "Gulf Shores", slug: "gulf-shores" },
      { name: "Orange Beach", slug: "orange-beach" },
      { name: "Foley", slug: "foley" },
      { name: "Fairhope", slug: "fairhope-baldwin" },
    ],
  },
  {
    name: "Jefferson County",
    slug: "jefferson-county-al",
    cities: [
      { name: "Birmingham", slug: "birmingham" },
      { name: "Bessemer", slug: "bessemer" },
      { name: "Homewood", slug: "homewood" },
      { name: "Vestavia Hills", slug: "vestavia-hills" },
    ],
  },
  {
    name: "Madison County",
    slug: "madison-county-al",
    cities: [
      { name: "Huntsville", slug: "huntsville" },
      { name: "Madison", slug: "madison-al" },
      { name: "Ardmore", slug: "ardmore" },
    ],
  },
  {
    name: "Montgomery County",
    slug: "montgomery-county-al",
    cities: [
      { name: "Montgomery", slug: "montgomery" },
      { name: "Prattville", slug: "prattville" },
    ],
  },
];

const georgiaCounties: County[] = [
  {
    name: "Fulton County",
    slug: "fulton-county-ga",
    cities: [
      { name: "Atlanta", slug: "atlanta" },
      { name: "Sandy Springs", slug: "sandy-springs" },
      { name: "Johns Creek", slug: "johns-creek" },
      { name: "Alpharetta", slug: "alpharetta" },
    ],
  },
  {
    name: "DeKalb County",
    slug: "dekalb-county",
    cities: [
      { name: "Decatur", slug: "decatur" },
      { name: "Brookhaven", slug: "brookhaven" },
      { name: "Dunwoody", slug: "dunwoody" },
      { name: "Chamblee", slug: "chamblee" },
    ],
  },
  {
    name: "Gwinnett County",
    slug: "gwinnett-county",
    cities: [
      { name: "Lawrenceville", slug: "lawrenceville" },
      { name: "Duluth", slug: "duluth" },
      { name: "Snellville", slug: "snellville" },
      { name: "Suwanee", slug: "suwanee" },
    ],
  },
  {
    name: "Cobb County",
    slug: "cobb-county",
    cities: [
      { name: "Marietta", slug: "marietta" },
      { name: "Kennesaw", slug: "kennesaw" },
      { name: "Acworth", slug: "acworth" },
    ],
  },
  {
    name: "Chatham County",
    slug: "chatham-county",
    cities: [
      { name: "Savannah", slug: "savannah" },
      { name: "Bloomingdale", slug: "bloomingdale" },
    ],
  },
];

const southCarolinaCounties: County[] = [
  {
    name: "Charleston County",
    slug: "charleston-county-sc",
    cities: [
      { name: "Charleston", slug: "charleston" },
      { name: "Goose Creek", slug: "goose-creek" },
      { name: "Moncks Corner", slug: "moncks-corner" },
      { name: "Folly Beach", slug: "folly-beach" },
    ],
  },
  {
    name: "Greenville County",
    slug: "greenville-county",
    cities: [
      { name: "Greenville", slug: "greenville" },
      { name: "Mauldin", slug: "mauldin" },
      { name: "Simpsonville", slug: "simpsonville" },
    ],
  },
  {
    name: "Richland County",
    slug: "richland-county-sc",
    cities: [
      { name: "Columbia", slug: "columbia" },
      { name: "Forest Acres", slug: "forest-acres" },
    ],
  },
  {
    name: "Horry County",
    slug: "horry-county",
    cities: [
      { name: "Myrtle Beach", slug: "myrtle-beach" },
      { name: "Conway", slug: "conway" },
      { name: "North Myrtle Beach", slug: "north-myrtle-beach" },
    ],
  },
];

const northCarolinaCounties: County[] = [
  {
    name: "Mecklenburg County",
    slug: "mecklenburg-county-nc",
    cities: [
      { name: "Charlotte", slug: "charlotte-nc" },
      { name: "Cornelius", slug: "cornelius" },
      { name: "Huntersville", slug: "huntersville" },
    ],
  },
  {
    name: "Wake County",
    slug: "wake-county",
    cities: [
      { name: "Raleigh", slug: "raleigh" },
      { name: "Cary", slug: "cary" },
      { name: "Durham", slug: "durham" },
    ],
  },
  {
    name: "Guilford County",
    slug: "guilford-county",
    cities: [
      { name: "Greensboro", slug: "greensboro" },
      { name: "High Point", slug: "high-point" },
    ],
  },
  {
    name: "Forsyth County",
    slug: "forsyth-county",
    cities: [
      { name: "Winston-Salem", slug: "winston-salem" },
    ],
  },
  {
    name: "Buncombe County",
    slug: "buncombe-county",
    cities: [
      { name: "Asheville", slug: "asheville" },
      { name: "Black Mountain", slug: "black-mountain" },
    ],
  },
];

export const GEOGRAPHIC_DATA: State[] = [
  {
    name: "Florida",
    slug: "florida",
    fullName: "Florida",
    counties: floridaWestCoastCounties,
  },
  {
    name: "Alabama",
    slug: "alabama",
    fullName: "Alabama",
    counties: alabamaCounties,
  },
  {
    name: "Georgia",
    slug: "georgia",
    fullName: "Georgia",
    counties: georgiaCounties,
  },
  {
    name: "South Carolina",
    slug: "south-carolina",
    fullName: "South Carolina",
    counties: southCarolinaCounties,
  },
  {
    name: "North Carolina",
    slug: "north-carolina",
    fullName: "North Carolina",
    counties: northCarolinaCounties,
  },
];

/**
 * Helper to flatten all pages for sitemap generation
 */
export function getAllGeographicPages() {
  const pages: Array<{ path: string; priority: number }> = [];

  GEOGRAPHIC_DATA.forEach((state) => {
    // State page
    pages.push({
      path: `/hvac-repair-${state.slug}`,
      priority: 0.8,
    });

    // County pages
    state.counties.forEach((county) => {
      pages.push({
        path: `/hvac-repair-${state.slug}/${county.slug}`,
        priority: 0.7,
      });

      // City pages
      county.cities.forEach((city) => {
        pages.push({
          path: `/hvac-repair-${state.slug}/${county.slug}/${city.slug}`,
          priority: 0.6,
        });
      });
    });
  });

  return pages;
}

/**
 * Get page count by level
 */
export function getPageCounts() {
  const states = GEOGRAPHIC_DATA.length;
  const counties = GEOGRAPHIC_DATA.reduce((acc, state) => acc + state.counties.length, 0);
  const cities = GEOGRAPHIC_DATA.reduce((acc, state) => {
    return (
      acc +
      state.counties.reduce((countyAcc, county) => countyAcc + county.cities.length, 0)
    );
  }, 0);

  return { states, counties, cities, total: states + counties + cities };
}
