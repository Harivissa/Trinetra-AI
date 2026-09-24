// TRINETRA AI — Global Events Intelligence Architecture
// Verified, timestamped, evidence-backed geopolitical events with systemic impact tracking.

export interface GeopoliticalEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  actors: string[]; // Country IDs or institutional entities
  eventType:
    | "conflict"
    | "military_activity"
    | "diplomatic_development"
    | "election"
    | "sanctions"
    | "trade_agreement"
    | "energy_disruption"
    | "infrastructure_event"
    | "technology_development"
    | "treaty"
    | "territorial_dispute"
    | "maritime_incident"
    | "cyber_incident"
    | "space_event";
  whatHappened: string;
  whatChanged: string;
  whyItMatters: string;
  immediateEffects: string[];
  longerTermImplications: string[];
  affectedCountries: string[];
  affectedRelationships: [string, string][]; // e.g. [["IND", "CHN"], ["USA", "CHN"]]
  affectedEconomicFlows: string[];
  affectedEnergyFlows: string[];
  affectedSecurityConditions: string[];
  sourceId: string;
  sourceDate: string;
  confidence: "High" | "Moderate" | "Documented";
}

export const GLOBAL_EVENTS_DATA: GeopoliticalEvent[] = [
  {
    id: "EVT-2024-LAC-PATROL",
    title: "India-China Agreement on Line of Actual Control (LAC) Patrolling Arrangements",
    date: "2024-10-21",
    location: "Kazan / Depsang & Demchok, Eastern Ladakh",
    actors: ["IND", "CHN"],
    eventType: "diplomatic_development",
    whatHappened: "India and China reached a formal diplomatic and military agreement on patrolling arrangements along the Line of Actual Control in eastern Ladakh, leading to disengagement at Depsang and Demchok.",
    whatChanged: "Restored regular ground patrolling rights to 2020 pre-standoff baselines in the two remaining friction friction zones; followed by the first formal bilateral meeting between Prime Minister Modi and President Xi in five years.",
    whyItMatters: "De-escalates the primary conventional military flashpoint in the Himalayas and creates diplomatic room for measured economic and commercial normalization.",
    immediateEffects: [
      "Physical disengagement of frontline troops from coordinated patrol points in Depsang Plains and Demchok.",
      "Resumption of verified military commander communication channels.",
      "High-level bilateral leader summit on the sidelines of the BRICS Summit in Kazan.",
    ],
    longerTermImplications: [
      "Selective easing of Indian regulatory scrutiny on non-strategic Chinese investments (e.g. green tech, solar manufacturing).",
      "Continued vigilance and permanent Indian infrastructure build-out across the northern border theater.",
      "Recalibration of regional deterrence signaling between New Delhi and Beijing.",
    ],
    affectedCountries: ["IND", "CHN", "USA", "PAK"],
    affectedRelationships: [
      ["IND", "CHN"],
      ["IND", "USA"],
      ["CHN", "PAK"],
    ],
    affectedEconomicFlows: [
      "Bilateral tech component and intermediate manufacturing input shipments.",
      "Visa issuance and business travel between Indian and Chinese industrial hubs.",
    ],
    affectedEnergyFlows: [],
    affectedSecurityConditions: [
      "Reduction in tactical kinetic clash risk along the Himalayan boundary.",
      "Maintained high-altitude logistics forward posture on both flanks.",
    ],
    sourceId: "SOURCE-GOV-IND-001",
    sourceDate: "2024-10-21",
    confidence: "High",
  },
  {
    id: "EVT-2024-REDSEA-CRISIS",
    title: "Sustained Maritime Interdictions in Southern Red Sea & Bab el-Mandeb",
    date: "2024-01-15",
    location: "Bab el-Mandeb Strait & Southern Red Sea",
    actors: ["YEM", "USA", "GBR", "IND", "CHN", "ISR", "IRN"],
    eventType: "maritime_incident",
    whatHappened: "Ansar Allah (Houthi) drone and anti-ship missile attacks targeting international commercial vessels forced major shipping lines to divert container and bulk vessels around the Cape of Good Hope.",
    whatChanged: "Transit volumes through the Suez Canal dropped by over 60%, adding 10-14 transit days and substantial insurance premiums for Asia-Europe maritime trade.",
    whyItMatters: "Demonstrated the vulnerability of concentrated maritime chokepoints to asymmetric standoff weapons, impacting global freight rates and European energy imports.",
    immediateEffects: [
      "Cape of Good Hope rerouting became the baseline for major container carriers (Maersk, MSC, Hapag-Lloyd).",
      "Deployment of multinational maritime security coalitions (Operation Prosperity Guardian and EU Operation Aspides).",
      "Indian Navy expanded forward anti-piracy and merchant escort patrols in the Arabian Sea and Gulf of Aden.",
    ],
    longerTermImplications: [
      "Accelerated strategic investment in alternative overland trade corridors (IMEC, INSTC).",
      "Structural re-evaluation of just-in-time maritime supply chain inventories in Europe and North America.",
    ],
    affectedCountries: ["EGY", "ISR", "SAU", "IND", "CHN", "USA", "DEU", "GBR", "ARE"],
    affectedRelationships: [
      ["USA", "IRN"],
      ["ISR", "IRN"],
      ["IND", "ARE"],
      ["CHN", "SAU"],
    ],
    affectedEconomicFlows: [
      "Asia-to-Europe containerized manufacturing exports.",
      "Egyptian Suez Canal transit fee revenues (down >50%).",
    ],
    affectedEnergyFlows: [
      "Qatari and Gulf LNG shipments heading to Mediterranean and Atlantic terminals.",
      "Russian seaborne crude transiting toward Asian buyers.",
    ],
    affectedSecurityConditions: [
      "Heightened maritime kinetic threat in Bab el-Mandeb and Gulf of Aden.",
      "Increased surface combatant deployments across the Western Indian Ocean.",
    ],
    sourceId: "SOURCE-UNCTAD-001",
    sourceDate: "2024-06-10",
    confidence: "High",
  },
  {
    id: "EVT-2024-IMEC-MOU",
    title: "India-Middle East-Europe Economic Corridor (IMEC) Strategic Progression",
    date: "2024-02-13",
    location: "Abu Dhabi / New Delhi / Riyadh",
    actors: ["IND", "ARE", "SAU", "USA", "FRA", "DEU", "ITA"],
    eventType: "infrastructure_event",
    whatHappened: "India and the United Arab Emirates ratified an intergovernmental framework agreement operationalizing the maritime and logistics legs of the India-Middle East-Europe Economic Corridor (IMEC).",
    whatChanged: "Established concrete port-to-port connectivity protocols between Mundra/JNPT in India and Jebel Ali/Khalifa Port in the UAE, alongside digital trade corridor integrations.",
    whyItMatters: "Creates a multimodal counterweight to reliance on single maritime chokepoints and provides an integrated commercial architecture linking South Asia, the Gulf, and Europe.",
    immediateEffects: [
      "Bilateral logistics coordination between DP World and Indian port authorities.",
      "Interoperability agreements on rail-gauge standards and freight documentation.",
    ],
    longerTermImplications: [
      "Diversification of Eurasian trade transit options away from the Red Sea chokepoint.",
      "Deeper institutionalization of India-Gulf strategic security and commercial integration.",
    ],
    affectedCountries: ["IND", "ARE", "SAU", "ISR", "USA", "FRA", "ITA", "DEU"],
    affectedRelationships: [
      ["IND", "ARE"],
      ["IND", "SAU"],
      ["USA", "ARE"],
      ["IND", "FRA"],
    ],
    affectedEconomicFlows: [
      "Containerized freight between Western India and Gulf transshipment hubs.",
      "Clean hydrogen and digital data cable connectivity planning.",
    ],
    affectedEnergyFlows: [
      "Cross-border energy grid interconnectors and petroleum product bunkering.",
    ],
    affectedSecurityConditions: [
      "Deepened maritime domain awareness sharing in the Persian Gulf and Arabian Sea.",
    ],
    sourceId: "SOURCE-GOV-IND-001",
    sourceDate: "2024-02-14",
    confidence: "High",
  },
  {
    id: "EVT-2024-CHIPS-EXPORT",
    title: "Expansion of Multilateral Semiconductor Export Controls on Advanced AI Accelerators",
    date: "2024-04-04",
    location: "Washington, D.C. / Tokyo / The Hague",
    actors: ["USA", "JPN", "NLD", "CHN", "KOR", "TWN"],
    eventType: "technology_development",
    whatHappened: "The United States, Japan, and the Netherlands tightened export restrictions on advanced semiconductor fabrication equipment (including advanced DUV immersion systems) and high-bandwidth memory (HBM) AI chips to China.",
    whatChanged: "Restricted Chinese access to leading-edge sub-7nm process node manufacturing tools and advanced datacenter GPUs for training frontier AI models.",
    whyItMatters: "Directly impacts the pace of Chinese indigenous semiconductor fabrication scaling and compels Beijing to invest aggressively in legacy node capacity and mature-node silicon.",
    immediateEffects: [
      "ASML, Nikon, and Tokyo Electron curtailed maintenance services on select advanced tools in China.",
      "Chinese semiconductor manufacturers accelerated stockpiling of spare parts and legacy equipment.",
    ],
    longerTermImplications: [
      "Bifurcation of the global semiconductor supply chain into Western-aligned and Chinese domestic ecosystems.",
      "Surge in Chinese market share in mature automotive and industrial chips (28nm and above).",
    ],
    affectedCountries: ["USA", "CHN", "JPN", "NLD", "KOR", "TWN"],
    affectedRelationships: [
      ["USA", "CHN"],
      ["USA", "JPN"],
      ["CHN", "JPN"],
      ["CHN", "KOR"],
    ],
    affectedEconomicFlows: [
      "Global semiconductor equipment sales and foundry manufacturing contracts.",
    ],
    affectedEnergyFlows: [],
    affectedSecurityConditions: [
      "Technological friction elevated as a core domain of strategic deterrence.",
    ],
    sourceId: "SOURCE-GOV-USA-001",
    sourceDate: "2024-04-05",
    confidence: "High",
  },
  {
    id: "EVT-2024-BRICS-EXPANSION",
    title: "16th BRICS Summit in Kazan & Formal Integration of New Member States",
    date: "2024-10-23",
    location: "Kazan, Russian Federation",
    actors: ["BRA", "RUS", "IND", "CHN", "ZAF", "EGY", "ETH", "IRN", "ARE"],
    eventType: "treaty",
    whatHappened: "BRICS convened its first summit with expanded membership (Egypt, Ethiopia, Iran, UAE) and adopted the Kazan Declaration, endorsing localized currency settlement frameworks and partner-country partner categories.",
    whatChanged: "Broadened the multilateral forum's geographic reach across the Middle East and Africa while solidifying its role as an alternative institutional platform for non-Western economies.",
    whyItMatters: "Accelerates bilateral local-currency trade settlements (reducing dollar dependence in bilateral balances) and coordinates diplomatic positions on global institutional reform.",
    immediateEffects: [
      "Adoption of BRICS Cross-Border Payment Initiative guidelines.",
      "Elevation of Iran and UAE as full members within the same economic coordination body.",
    ],
    longerTermImplications: [
      "Gradual erosion of Western secondary sanctions enforcement efficiency across non-Western corridors.",
      "Complex internal balancing between members with deep Western ties (India, UAE, Brazil) and those seeking explicit anti-Western alignment (Russia, Iran).",
    ],
    affectedCountries: ["BRA", "RUS", "IND", "CHN", "ZAF", "EGY", "ETH", "IRN", "ARE", "USA", "EU"],
    affectedRelationships: [
      ["RUS", "CHN"],
      ["IND", "RUS"],
      ["SAU", "IRN"],
      ["IND", "CHN"],
      ["USA", "ARE"],
    ],
    affectedEconomicFlows: [
      "Bilateral hydrocarbon trade invoiced in Dirhams, Yuan, and Rubles.",
      "New Development Bank (NDB) local-currency development lending.",
    ],
    affectedEnergyFlows: [
      "Consolidation of over 40% of global crude oil production within member borders.",
    ],
    affectedSecurityConditions: [
      "Institutional forum providing diplomatic insulation against unilateral economic isolation.",
    ],
    sourceId: "SOURCE-UN-001",
    sourceDate: "2024-10-24",
    confidence: "High",
  },
];

export function getEventsForCountry(countryId: string): GeopoliticalEvent[] {
  const norm = countryId.toUpperCase();
  return GLOBAL_EVENTS_DATA.filter(
    (e) =>
      e.actors.includes(norm) ||
      e.affectedCountries.includes(norm) ||
      e.affectedRelationships.some(([a, b]) => a === norm || b === norm)
  );
}

export function getAllEvents(): GeopoliticalEvent[] {
  return GLOBAL_EVENTS_DATA;
}
