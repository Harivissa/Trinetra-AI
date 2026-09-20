// Verified strategic ports, naval facilities, and energy infrastructure
// Sourced from public hydrographic and official port authority records

export interface StrategicSite {
  id: string;
  countryId: string;
  name: string;
  type: "PORT" | "ENERGY_HUB" | "DEFENSE_FACILITY" | "STRATEGIC_PASS";
  coordinates: [number, number]; // [lat, lng]
  whyItMatters: string;
  strategicRelevance: string;
  source: string;
}

export const STRATEGIC_SITES_REGISTRY: Record<string, StrategicSite[]> = {
  IND: [
    {
      id: "site-jnpt",
      countryId: "IND",
      name: "Jawaharlal Nehru Port (JNPT) / Nhava Sheva",
      type: "PORT",
      coordinates: [18.9498, 72.9515],
      whyItMatters: "India's premier container gateway handling over 50% of the nation's containerized maritime trade.",
      strategicRelevance: "Industrial manufacturing supply chain hub connecting western and northern industrial corridors.",
      source: "JNPA Official Annual Report / Ministry of Ports, Shipping and Waterways",
    },
    {
      id: "site-mundra",
      countryId: "IND",
      name: "Mundra Commercial Port",
      type: "PORT",
      coordinates: [22.7441, 69.7042],
      whyItMatters: "Largest private commercial port in India handling substantial crude, dry bulk, and container cargo.",
      strategicRelevance: "Deep-water maritime access along the Gulf of Kutch closest to northern industrial heartland.",
      source: "Directorate General of Shipping",
    },
    {
      id: "site-jamnagar",
      countryId: "IND",
      name: "Jamnagar Refining Complex",
      type: "ENERGY_HUB",
      coordinates: [22.4707, 70.0577],
      whyItMatters: "World's largest single-site petroleum refining complex with 1.24 million bpd capacity.",
      strategicRelevance: "Key processing center for imported Persian Gulf and Russian crude into exportable refined fuels.",
      source: "Reliance Industries Annual Report / IEA",
    },
    {
      id: "site-karwar",
      countryId: "IND",
      name: "INS Kadamba / Project Seabird (Karwar)",
      type: "DEFENSE_FACILITY",
      coordinates: [14.8089, 74.1309],
      whyItMatters: "Primary deep-water operational naval base on the western seaboard housing aircraft carriers and nuclear submarines.",
      strategicRelevance: "Ensures blue-water naval projection and operational dispersion south of Mumbai.",
      source: "Indian Navy Headquarters / Integrated Defence Staff",
    },
    {
      id: "site-portblair",
      countryId: "IND",
      name: "Andaman & Nicobar Tri-Service Command (Port Blair)",
      type: "DEFENSE_FACILITY",
      coordinates: [11.6234, 92.7265],
      whyItMatters: "Sole operational tri-service command sitting astride the Six Degree and Ten Degree channels.",
      strategicRelevance: "Commands the western entrance to the Strait of Malacca, providing maritime domain surveillance.",
      source: "Indian Armed Forces / HQ ANC",
    },
  ],
  CHN: [
    {
      id: "site-shanghai",
      countryId: "CHN",
      name: "Port of Shanghai / Yangshan Deep-Water Port",
      type: "PORT",
      coordinates: [30.6277, 122.0645],
      whyItMatters: "World's busiest container port handling over 47 million TEUs annually.",
      strategicRelevance: "Core maritime outlet for the Yangtze River Economic Belt and global export manufacturing.",
      source: "Shanghai International Port Group (SIPG) / UNCTAD",
    },
    {
      id: "site-ningbo",
      countryId: "CHN",
      name: "Ningbo-Zhoushan Port",
      type: "PORT",
      coordinates: [29.8683, 121.544],
      whyItMatters: "World's largest port by total cargo tonnage, handling vast iron ore and crude oil imports.",
      strategicRelevance: "Strategic raw material import depot and crude oil storage facility for eastern China.",
      source: "Ministry of Transport PRC / Lloyd's List",
    },
    {
      id: "site-yulin",
      countryId: "CHN",
      name: "Yulin Naval Base (Hainan Island)",
      type: "DEFENSE_FACILITY",
      coordinates: [18.2167, 109.5333],
      whyItMatters: "South Sea Fleet naval base with deep underground tunnels for nuclear ballistic missile submarines (SSBNs).",
      strategicRelevance: "Enables direct, unobserved SSBN egress into the deep waters of the South China Sea.",
      source: "Office of Naval Intelligence (ONI) / DoD China Military Power",
    },
    {
      id: "site-daqing",
      countryId: "CHN",
      name: "Daqing Oilfield & Energy Complex",
      type: "ENERGY_HUB",
      coordinates: [46.5833, 125.0],
      whyItMatters: "Historic domestic crude production basin and terminus for the Russia-China ESPO crude pipeline.",
      strategicRelevance: "Provides overland, sanctions-resistant Russian hydrocarbon supplies.",
      source: "PetroChina / IEA",
    },
  ],
  PAK: [
    {
      id: "site-gwadar",
      countryId: "PAK",
      name: "Port of Gwadar",
      type: "PORT",
      coordinates: [25.1216, 62.3254],
      whyItMatters: "Deep-sea warm-water port at the mouth of the Persian Gulf and terminus of CPEC.",
      strategicRelevance: "Offers direct Arabian Sea outlet for western China and alternative maritime routing.",
      source: "Gwadar Port Authority / CPEC Secretariat",
    },
    {
      id: "site-karachi",
      countryId: "PAK",
      name: "Karachi Port & Port Qasim",
      type: "PORT",
      coordinates: [24.8333, 66.9833],
      whyItMatters: "Handles over 90% of Pakistan's international commercial trade and imported LNG shipments.",
      strategicRelevance: "Economic and industrial maritime lifeline of the Pakistani state.",
      source: "Ministry of Maritime Affairs Pakistan",
    },
  ],
  SAU: [
    {
      id: "site-rastanura",
      countryId: "SAU",
      name: "Ras Tanura Crude Export Terminal",
      type: "ENERGY_HUB",
      coordinates: [26.6439, 50.1594],
      whyItMatters: "World's largest offshore oil loading facility handling millions of barrels per day.",
      strategicRelevance: "Primary export gateway powering global energy markets and OPEC+ production delivery.",
      source: "Saudi Aramco Disclosures / EIA",
    },
    {
      id: "site-jeddah",
      countryId: "SAU",
      name: "Jeddah Islamic Port",
      type: "PORT",
      coordinates: [21.4647, 39.1764],
      whyItMatters: "Principal maritime commercial hub on the Red Sea handling food, capital equipment, and pilgrim logistics.",
      strategicRelevance: "Crucial for national food security imports and Western province supply chains.",
      source: "Saudi Ports Authority (Mawani)",
    },
  ],
  KOR: [
    {
      id: "site-busan",
      countryId: "KOR",
      name: "Port of Busan",
      type: "PORT",
      coordinates: [35.1028, 129.0403],
      whyItMatters: "World's second largest transshipment port and primary maritime export gateway for South Korea.",
      strategicRelevance: "Handles semiconductors, electronics, and automotive manufacturing exports.",
      source: "Busan Port Authority",
    },
    {
      id: "site-ulsan",
      countryId: "KOR",
      name: "Ulsan Industrial & Energy Complex",
      type: "ENERGY_HUB",
      coordinates: [35.5384, 129.3114],
      whyItMatters: "Massive hub for petroleum refining, petrochemicals, HD Hyundai shipbuilding, and auto assembly.",
      strategicRelevance: "Crucial heavy industrial engine sustaining national manufacturing competitiveness.",
      source: "Korea Petrochemical Industry Association",
    },
  ],
};

export function getCountryStrategicSites(countryId: string): StrategicSite[] {
  return STRATEGIC_SITES_REGISTRY[countryId] || [];
}
