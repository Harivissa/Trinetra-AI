// TRINETRA AI — Strategic Chokepoint Intelligence Layer
// Hydrographic, territorial, and corridor bottlenecks governing global trade and energy security.

export interface StrategicChokepoint {
  id: string;
  name: string;
  type: "maritime_strait" | "maritime_canal" | "mountain_pass" | "overland_corridor" | "pipeline_artery";
  location: string;
  coordinates: { lat: number; lng: number };
  connectedRegions: string[];
  resourceAndTradeFlow: string;
  globalFlowPct: string;
  exposedNations: { countryId: string; countryName: string; exposureSeverity: "CRITICAL" | "HIGH" | "MODERATE" }[];
  leverageNations: { countryId: string; countryName: string; leverageType: string }[];
  strategicVulnerabilities: string[];
  historicalPrecedents: string;
  sourceId: string;
}

export const STRATEGIC_CHOKEPOINTS_DATA: StrategicChokepoint[] = [
  {
    id: "CP-HORMUZ",
    name: "Strait of Hormuz",
    type: "maritime_strait",
    location: "Between Iran and Oman / United Arab Emirates",
    coordinates: { lat: 26.5667, lng: 56.25 },
    connectedRegions: ["Persian Gulf", "Gulf of Oman", "Arabian Sea", "Indian Ocean"],
    resourceAndTradeFlow: "World's most critical hydrocarbon transit corridor; transports approximately 21 million barrels of crude oil and petroleum products per day plus ~20% of global liquefied natural gas (LNG), primarily from Qatar and UAE.",
    globalFlowPct: "~21% of global petroleum liquids consumption; ~20% of global LNG trade",
    exposedNations: [
      { countryId: "CHN", countryName: "China", exposureSeverity: "CRITICAL" },
      { countryId: "IND", countryName: "India", exposureSeverity: "CRITICAL" },
      { countryId: "JPN", countryName: "Japan", exposureSeverity: "CRITICAL" },
      { countryId: "KOR", countryName: "South Korea", exposureSeverity: "CRITICAL" },
      { countryId: "EU", countryName: "European Union", exposureSeverity: "HIGH" },
    ],
    leverageNations: [
      { countryId: "IRN", countryName: "Iran", leverageType: "Direct littoral control, anti-ship cruise missile batteries, fast-attack craft, sea-mining capabilities" },
      { countryId: "OMN", countryName: "Oman", leverageType: "Musandam Peninsula sovereignty governing outbound deep-water navigation channels" },
      { countryId: "USA", countryName: "United States", leverageType: "U.S. Fifth Fleet naval escort patrols and carrier strike presence (Bahrain HQ)" },
    ],
    strategicVulnerabilities: [
      "Navigation channel is only 2 nautical miles wide in each direction, separated by a 2-mile buffer zone.",
      "Vulnerable to asymmetric naval mines, drone swarms, and shore-based anti-ship missiles.",
      "Limited alternative bypass pipeline capacity: Saudi East-West Pipeline (5 mbpd) and Abu Dhabi Crude Oil Pipeline (1.5 mbpd) cannot absorb the full volume.",
    ],
    historicalPrecedents: "1980s Tanker War during Iran-Iraq War; repeated commercial tanker seizures and maritime drone confrontations in 2019-2024.",
    sourceId: "SOURCE-EIA-001",
  },
  {
    id: "CP-MALACCA",
    name: "Strait of Malacca",
    type: "maritime_strait",
    location: "Between the Malay Peninsula and Indonesian island of Sumatra",
    coordinates: { lat: 4.0, lng: 100.0 },
    connectedRegions: ["Indian Ocean / Andaman Sea", "South China Sea / Pacific Ocean"],
    resourceAndTradeFlow: "Shortest maritime route linking Persian Gulf/African energy exporters to East Asian industrial economies. Transits roughly 16 million barrels of petroleum per day and over 80,000 commercial cargo vessels annually.",
    globalFlowPct: "~25% of all global seaborne merchandise trade; ~80% of China's crude oil imports",
    exposedNations: [
      { countryId: "CHN", countryName: "China ('Malacca Dilemma')", exposureSeverity: "CRITICAL" },
      { countryId: "JPN", countryName: "Japan", exposureSeverity: "CRITICAL" },
      { countryId: "KOR", countryName: "South Korea", exposureSeverity: "CRITICAL" },
      { countryId: "TWN", countryName: "Taiwan", exposureSeverity: "HIGH" },
    ],
    leverageNations: [
      { countryId: "SGP", countryName: "Singapore", leverageType: "World's top bunkering and transshipment port at the southern apex" },
      { countryId: "MYS", countryName: "Malaysia", leverageType: "Littoral surveillance and maritime control" },
      { countryId: "IDN", countryName: "Indonesia", leverageType: "Sovereignty over southern shoreline and alternative straits (Sunda, Lombok)" },
      { countryId: "IND", countryName: "India", leverageType: "Andaman & Nicobar Command sits at northern entrance (Six Degree Channel)" },
    ],
    strategicVulnerabilities: [
      "Phillips Channel in Singapore Strait narrows to just 1.5 nautical miles, creating physical collision and grounding bottlenecks.",
      "Congestion and shallow draft limits (Malaccamax depth: 25 meters).",
      "Alternative detour through Lombok Strait adds 3-5 days and significant freight costs for bulk carriers.",
    ],
    historicalPrecedents: "Piracy surges in the 1990s leading to MALSINDO trilateral patrols; focal point of Chinese Belt and Road alternative pipeline projects (China-Myanmar pipelines).",
    sourceId: "SOURCE-EIA-001",
  },
  {
    id: "CP-BAB-EL-MANDEB",
    name: "Bab el-Mandeb Strait",
    type: "maritime_strait",
    location: "Between Yemen on the Arabian Peninsula and Djibouti/Eritrea in the Horn of Africa",
    coordinates: { lat: 12.5833, lng: 43.3333 },
    connectedRegions: ["Gulf of Aden / Indian Ocean", "Red Sea", "Suez Canal / Mediterranean Sea"],
    resourceAndTradeFlow: "Gateway connecting the Indian Ocean to the Mediterranean Sea via the Suez Canal; critical corridor for Gulf crude oil and refined products heading to Europe, and European manufactured goods heading to Asia.",
    globalFlowPct: "~12% of total global seaborne trade; ~8.8 million barrels/day of oil and refined products pre-2024",
    exposedNations: [
      { countryId: "EGY", countryName: "Egypt (Suez transit fees)", exposureSeverity: "CRITICAL" },
      { countryId: "ISR", countryName: "Israel (Eilat port access)", exposureSeverity: "CRITICAL" },
      { countryId: "EU", countryName: "European Union", exposureSeverity: "HIGH" },
      { countryId: "SAU", countryName: "Saudi Arabia (Red Sea ports)", exposureSeverity: "HIGH" },
      { countryId: "IND", countryName: "India (European export corridor)", exposureSeverity: "HIGH" },
    ],
    leverageNations: [
      { countryId: "YEM", countryName: "Yemen (Ansar Allah / Houthi movement)", leverageType: "Asymmetric coastal anti-ship ballistic/cruise missiles, maritime attack drones" },
      { countryId: "DJI", countryName: "Djibouti", leverageType: "Hosts international military bases from USA, China, France, Japan, and Italy" },
    ],
    strategicVulnerabilities: [
      "Narrow navigation channel divided into two 2-mile corridors by Perim Island.",
      "Extreme proximity to conflict-affected coastlines enabling low-cost asymmetric drone interdiction.",
      "Forced diversions around Cape of Good Hope add 3,500 nautical miles and 10-14 days transit time.",
    ],
    historicalPrecedents: "1973 Yom Kippur War blockade of Eilat; sustained 2023-2026 Red Sea maritime crisis diverting majority of container carriers.",
    sourceId: "SOURCE-UNCTAD-001",
  },
];

export function getChokepoint(id: string): StrategicChokepoint | undefined {
  return STRATEGIC_CHOKEPOINTS_DATA.find((c) => c.id === id);
}

export function getAllChokepoints(): StrategicChokepoint[] {
  return STRATEGIC_CHOKEPOINTS_DATA;
}
