import { MAP_CHOKEPOINTS, type MapChokepoint } from "./liveMapData";

export interface CountryGeoProfile {
  id: string;
  name: string;
  capital: string;
  coordinates: [number, number]; // [lat, lng]
  zoom: number;
  region: string;
  subregion: string;
  maritimeType: "Coastal" | "Archipelagic" | "Littoral" | "Landlocked" | "Continental";
  coastlineKm?: number;
  landBordersCount: number;
  borderingCountries: string[];
  primaryChokepoints: {
    chokepointId: string;
    relevance: string;
    exposureLevel: "CRITICAL" | "HIGH" | "MODERATE";
    rerouteAlternative: string;
  }[];
  naturalDefenses: string[];
  geographicVulnerabilities: string[];
  strategicDepth: "Vast" | "Moderate" | "Constrained" | "Island-Insular";
}

export const COUNTRY_GEO_PROFILES: Record<string, CountryGeoProfile> = {
  IND: {
    id: "IND",
    name: "India",
    capital: "New Delhi",
    coordinates: [20.5937, 78.9629],
    zoom: 4,
    region: "South Asia",
    subregion: "Indian Subcontinent / Indian Ocean",
    maritimeType: "Continental",
    coastlineKm: 7516,
    landBordersCount: 6,
    borderingCountries: ["China", "Pakistan", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Controls eastern sea lane access to East Asia; commanding position via Andaman & Nicobar Command sitting at the mouth of the strait.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Sunda or Lombok Straits (+3 to 5 days navigation)",
      },
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Handles over 60% of India's crude oil imports from Gulf suppliers (Iraq, Saudi Arabia, UAE).",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Strategic Petroleum Reserves (SPR) ~74 days coverage + Russian crude supplies via western ports",
      },
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Primary maritime highway for Indian exports to Europe and the Mediterranean basin.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Cape of Good Hope circumnavigation (+10–14 days transit and bunker surcharge)",
      },
    ],
    naturalDefenses: [
      "Himalayan mountain wall forming a formidable natural northern barrier",
      "Peninsular geography projecting deeply into the central Indian Ocean providing natural naval dominant positioning",
      "Thar Desert buffering the western frontier",
    ],
    geographicVulnerabilities: [
      "Two-front land border exposure along contested frontiers with Pakistan (LoC) and China (LAC)",
      "Narrow Siliguri Corridor ('Chicken's Neck') connecting northeastern states to the mainland",
      "Heavy reliance on imported maritime hydrocarbons arriving via Arabian Sea sea-lanes",
    ],
    strategicDepth: "Vast",
  },
  CHN: {
    id: "CHN",
    name: "China",
    capital: "Beijing",
    coordinates: [35.8617, 104.1954],
    zoom: 4,
    region: "East Asia",
    subregion: "Continental & Maritime East Asia",
    maritimeType: "Continental",
    coastlineKm: 14500,
    landBordersCount: 14,
    borderingCountries: ["Russia", "Mongolia", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Pakistan", "India", "Nepal", "Bhutan", "Myanmar", "Laos", "Vietnam", "North Korea"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "The core of the 'Malacca Dilemma' — handles ~80% of China's seaborne petroleum imports and vast outbound manufacturing exports.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Overland pipelines (Russia ESPO, Central Asia gas, Myanmar Kyaukpyu corridor) and Gwadar CPEC",
      },
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Origin point of Gulf oil and Qatari LNG powering coastal industrial centers.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Russian pipeline crude, domestic coal conversion, strategic reserves",
      },
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Crucial conduit for container shipping to European consumer markets.",
        exposureLevel: "HIGH",
        rerouteAlternative: "China-Europe Railway Express overland freight and Arctic Northern Sea Route in summer",
      },
    ],
    naturalDefenses: [
      "Tibetan Plateau and Pamir mountain ranges serving as massive western and southwestern bastions",
      "Gobi and Taklamakan deserts providing natural buffers in the northwest",
      "Vast continental interior granting extensive strategic depth and dispersed manufacturing hubs",
    ],
    geographicVulnerabilities: [
      "Enclosure by the First Island Chain (Japan, Taiwan, Philippines) constraining uninhibited blue-water naval egress",
      "Fourteen contiguous land borders creating complex simultaneous territorial security obligations",
      "Concentration of high-value industrial population and GDP along the exposed eastern littoral seaboard",
    ],
    strategicDepth: "Vast",
  },
  USA: {
    id: "USA",
    name: "United States",
    capital: "Washington, D.C.",
    coordinates: [37.0902, -95.7129],
    zoom: 4,
    region: "North America",
    subregion: "Transcontinental North America",
    maritimeType: "Continental",
    coastlineKm: 19924,
    landBordersCount: 2,
    borderingCountries: ["Canada", "Mexico"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_PANAMA",
        relevance: "Bilateral inter-oceanic canal linking Atlantic and Pacific coasts; key for East Coast LNG and grain exports to Asia.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Transcontinental intermodal rail bridge or Cape Horn circumnavigation (+20 days)",
      },
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Secures global oil market price stability even though domestic US consumption is self-sufficient.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "US Strategic Petroleum Reserve (SPR) and domestic shale surplus exports",
      },
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Guarantees free navigation for allied East Asian supply chains (semiconductors, advanced electronics).",
        exposureLevel: "HIGH",
        rerouteAlternative: "Allied Pacific naval escorts and supply chain reshoring/nearshoring",
      },
    ],
    naturalDefenses: [
      "Two vast oceanic moats (Atlantic and Pacific) shielding the continental homeland from conventional invasion",
      "Benign, non-threatening land borders with peaceful continental neighbors (Canada and Mexico)",
      "Unrivaled internal navigable river system (Mississippi-Missouri basin) enabling cheap domestic freight movement",
    ],
    geographicVulnerabilities: [
      "Far-flung global commitments and extended supply lines to European and Indo-Pacific treaty allies",
      "Island dependencies and forward military installations (Guam, Hawaii, Diego Garcia) exposed to missile strikes",
      "Extreme vulnerability of intercontinental undersea communication cables and satellite ground stations",
    ],
    strategicDepth: "Vast",
  },
  RUS: {
    id: "RUS",
    name: "Russia",
    capital: "Moscow",
    coordinates: [61.5240, 105.3188],
    zoom: 3,
    region: "Eurasia",
    subregion: "Northern & Eastern Eurasia",
    maritimeType: "Continental",
    coastlineKm: 37653,
    landBordersCount: 14,
    borderingCountries: ["Norway", "Finland", "Estonia", "Latvia", "Lithuania", "Poland", "Belarus", "Ukraine", "Georgia", "Azerbaijan", "Kazakhstan", "China", "Mongolia", "North Korea"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_BOSPHORUS",
        relevance: "Sole maritime gateway from Black Sea ports (Novorossiysk, Sevastopol) to the Mediterranean for grain and hydrocarbons.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Baltic ports (Primorsk, Ust-Luga) and Pacific rail corridors (Vladivostok)",
      },
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Maritime pathway for redirected Urals crude oil tankers sailing to India and China.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Northern Sea Route (summer) and overland pipelines to China",
      },
      {
        chokepointId: "CHOKEPOINT_GIBRALTAR",
        relevance: "Atlantic exit bottleneck for Mediterranean naval detachments and merchant shipping.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "Northern fleet bases in Murmansk/Severomorsk",
      },
    ],
    naturalDefenses: [
      "Incomparable geographic landmass spanning 11 time zones providing unmatched strategic retreat depth",
      "Harsh subarctic climate and vast Siberian permafrost acting as insurmountable invasion buffers",
      "Vast reserves of domestic fresh water, arable land, minerals, and fossil fuels ensuring survival under autarky",
    ],
    geographicVulnerabilities: [
      "The flat, obstacle-free North European Plain offering minimal natural terrain barriers against western vectors",
      "Chronic absence of warm-water, ice-free oceanic ports with direct unrestricted access to open oceans",
      "Vast, sparsely populated eastern border facing demographic imbalance across the Amur River",
    ],
    strategicDepth: "Vast",
  },
  JPN: {
    id: "JPN",
    name: "Japan",
    capital: "Tokyo",
    coordinates: [36.2048, 138.2529],
    zoom: 5,
    region: "East Asia",
    subregion: "Northwest Pacific Island Arc",
    maritimeType: "Archipelagic",
    coastlineKm: 29751,
    landBordersCount: 0,
    borderingCountries: [],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Transits ~90% of Japan's imported crude oil and primary liquefied natural gas (LNG) supplies.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Lombok/Makassar Straits via Australia route (+4 days and heavy freight premium)",
      },
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Primary supplier basin for Japanese national energy security.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "US LNG imports, Australian coal/gas, and 200+ days national strategic crude reserves",
      },
    ],
    naturalDefenses: [
      "Archipelagic island perimeter protected by turbulent maritime straits (Sea of Japan, Pacific Ocean)",
      "Rugged, mountainous interior creating high natural defensive friction against inland mobility",
      "First Island Chain geographic posture commanding surveillance over Russian and Chinese maritime exits",
    ],
    geographicVulnerabilities: [
      "Total absence of domestic fossil fuels; almost 100% dependency on imported seaborne oil and gas",
      "High seismic and tsunami hazard concentration along the Pacific Rim of Fire",
      "Proximity of major urban centers (Tokyo, Osaka) to North Korean and Chinese ballistic missile arcs",
    ],
    strategicDepth: "Island-Insular",
  },
  DEU: {
    id: "DEU",
    name: "Germany",
    capital: "Berlin",
    coordinates: [51.1657, 10.4515],
    zoom: 5,
    region: "Central Europe",
    subregion: "North European Plain",
    maritimeType: "Littoral",
    coastlineKm: 2389,
    landBordersCount: 9,
    borderingCountries: ["Denmark", "Poland", "Czech Republic", "Austria", "Switzerland", "France", "Luxembourg", "Belgium", "Netherlands"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Transits critical Asian electronics, components, and goods feeding German manufacturing export supply lines.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Air freight for high-value components or Cape of Good Hope rerouting",
      },
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Vital for maritime container lines connecting Hamburg and Bremerhaven to Indo-Pacific markets.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Cape rerouting (+12 days) or overland rail networks",
      },
    ],
    naturalDefenses: [
      "The Alps along the southern border forming a barrier against Mediterranean approaches",
      "Dense network of navigable inland waterways (Rhine, Elbe, Danube canal) boosting domestic logistics",
      "Central geographic hub position inside the European Union and NATO collective security umbrella",
    ],
    geographicVulnerabilities: [
      "Open, flat Northern European Plain lacking natural physical barriers to the east and west",
      "High dependency on imported natural gas, oil, and specialized manufacturing raw materials",
      "Complex coordination required with 9 bordering sovereign nations across central transport routes",
    ],
    strategicDepth: "Moderate",
  },
  GBR: {
    id: "GBR",
    name: "United Kingdom",
    capital: "London",
    coordinates: [55.3781, -3.4360],
    zoom: 5,
    region: "Western Europe",
    subregion: "British Isles / North Atlantic",
    maritimeType: "Archipelagic",
    coastlineKm: 12429,
    landBordersCount: 1,
    borderingCountries: ["Ireland"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_GIBRALTAR",
        relevance: "Sovereign British Overseas Territory commanding the entry to the Mediterranean Sea and naval patrols.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Atlantic open ocean transit",
      },
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Vital conduit for UK-Asia trade and Gulf LNG imports.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Norwegian pipeline gas and US LNG imports",
      },
    ],
    naturalDefenses: [
      "English Channel and North Sea serving as historical maritime moats against continental invasion",
      "GIUK Gap (Greenland-Iceland-UK) commanding acoustic and naval choke control over Russian submarines",
      "Immediate, unobstructed access to the open North Atlantic Ocean",
    ],
    geographicVulnerabilities: [
      "Island dependency on maritime food and energy imports arriving via crowded commercial shipping lanes",
      "Vulnerability of undersea North Sea power cables, telecommunication links, and gas pipelines",
      "Exposure of dense urban population and financial infrastructure to long-range standoff strikes",
    ],
    strategicDepth: "Island-Insular",
  },
  FRA: {
    id: "FRA",
    name: "France",
    capital: "Paris",
    coordinates: [46.2276, 2.2137],
    zoom: 5,
    region: "Western Europe",
    subregion: "Western Europe / Mediterranean & Atlantic",
    maritimeType: "Continental",
    coastlineKm: 4853,
    landBordersCount: 8,
    borderingCountries: ["Belgium", "Luxembourg", "Germany", "Switzerland", "Italy", "Monaco", "Spain", "Andorra"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Direct line from Mediterranean ports (Marseille) to Asia and Indian Ocean territories.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Atlantic ports (Le Havre, Dunkirk) via Cape route",
      },
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Strategic transit point connecting metropolitan France to sovereign territories in Réunion and Mayotte.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Naval escorts and military base in Djibouti",
      },
    ],
    naturalDefenses: [
      "Natural barriers on three frontiers: Pyrenees (Spain), Alps (Italy/Switzerland), and Rhine (Germany)",
      "Dual maritime access to both the North Atlantic/Channel and the Mediterranean Basin",
      "Vast Exclusive Economic Zone (EEZ) — second largest in the world (~11 million km²) spanning Indo-Pacific territories",
    ],
    geographicVulnerabilities: [
      "Northeastern frontier along the Belgian border historically lacking natural physical terrain barriers",
      "Vulnerability of far-flung sovereign overseas territories (New Caledonia, French Polynesia, Réunion) to isolation",
      "Reliance on imported uranium precursors for domestic nuclear reactor fleet",
    ],
    strategicDepth: "Moderate",
  },
  TUR: {
    id: "TUR",
    name: "Turkey",
    capital: "Ankara",
    coordinates: [38.9637, 35.2433],
    zoom: 5,
    region: "Middle East / Europe",
    subregion: "Anatolian Peninsula / Black Sea Straits",
    maritimeType: "Littoral",
    coastlineKm: 7200,
    landBordersCount: 8,
    borderingCountries: ["Greece", "Bulgaria", "Georgia", "Armenia", "Azerbaijan", "Iran", "Iraq", "Syria"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_BOSPHORUS",
        relevance: "Sovereign master of the Turkish Straits under the 1936 Montreux Convention — controls naval and commercial transit between Black Sea and Mediterranean.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Planned Canal Istanbul project; no alternative maritime bypass exists",
      },
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Direct access point for Turkish exports reaching the Gulf and East Africa.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "Overland truck corridors through Iraq and the Gulf",
      },
    ],
    naturalDefenses: [
      "Rugged Anatolian plateau flanked by the Pontic Mountains and Taurus Mountains creating a natural defensive fortress",
      "Peninsular command over three surrounding seas (Black Sea, Aegean, Mediterranean)",
      "Geographic bridge position controlling intercontinental energy pipeline transit between Eurasia and Europe",
    ],
    geographicVulnerabilities: [
      "Bordering volatile conflict zones in Syria, Iraq, and the South Caucasus with spillover risks",
      "High seismic vulnerability along the active North Anatolian and East Anatolian fault lines",
      "Total dependency on imported natural gas (Russia, Azerbaijan, Iran) and crude oil",
    ],
    strategicDepth: "Moderate",
  },
  SAU: {
    id: "SAU",
    name: "Saudi Arabia",
    capital: "Riyadh",
    coordinates: [23.8859, 45.0792],
    zoom: 5,
    region: "Middle East",
    subregion: "Arabian Peninsula",
    maritimeType: "Continental",
    coastlineKm: 2640,
    landBordersCount: 7,
    borderingCountries: ["Jordan", "Iraq", "Kuwait", "Qatar", "UAE", "Oman", "Yemen"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Primary export gateway for Saudi crude oil loading terminals at Ras Tanura.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "East-West Crude Oil Pipeline (Petroline) to Yanbu on the Red Sea (5M bpd capacity)",
      },
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Southern exit of the Red Sea vital for Red Sea oil shipments and Western maritime trade.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Petroline pipeline to Yanbu or northern land transport corridors",
      },
    ],
    naturalDefenses: [
      "Vast desert expanses (Rub' al Khali / Empty Quarter) serving as natural buffers against ground incursions",
      "Dual maritime coastlines along both the Persian Gulf and Red Sea enabling operational flexibility",
      "High central plateau (Nejd) sheltering administrative centers from sudden coastal assaults",
    ],
    geographicVulnerabilities: [
      "Extreme scarcity of natural surface water; near-total reliance on energy-intensive coastal desalination plants",
      "Vulnerability of major oil gathering centers (Abqaiq, Ras Tanura) to asymmetric drone and missile attacks",
      "Long, porous southern border with Yemen vulnerable to insurgent infiltration",
    ],
    strategicDepth: "Moderate",
  },
  IRN: {
    id: "IRN",
    name: "Iran",
    capital: "Tehran",
    coordinates: [32.4279, 53.6880],
    zoom: 5,
    region: "Middle East",
    subregion: "Iranian Plateau",
    maritimeType: "Littoral",
    coastlineKm: 2440,
    landBordersCount: 7,
    borderingCountries: ["Armenia", "Azerbaijan", "Turkmenistan", "Afghanistan", "Pakistan", "Iraq", "Turkey"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Iran holds sovereign littoral command over the northern approaches of the strait, giving it asymmetric leverage over 20% of world petroleum.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Goreh-Jask pipeline bypassing Hormuz directly to the Sea of Oman (partial capacity)",
      },
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Asymmetric regional leverage via allied Ansar Allah (Houthi) forces in Yemen.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "Direct overland trade with Eurasia, Russia, and China",
      },
    ],
    naturalDefenses: [
      "Formidable Zagros and Alborz mountain ranges forming an impregnable natural fortress enclosing the central plateau",
      "Commanding coastal topography along the Persian Gulf and Gulf of Oman ideal for anti-ship missile batteries",
      "Extensive territorial mass granting strategic resilience against conventional land invasion",
    ],
    geographicVulnerabilities: [
      "Vulnerability of coastal oil terminals (Kharg Island) to maritime blockades and naval strikes",
      "Severe internal water stress and desertification across central desert basins (Dasht-e Kavir)",
      "Economic isolation due to international sanctions limiting exploitation of geographic transit corridors",
    ],
    strategicDepth: "Vast",
  },
  ISR: {
    id: "ISR",
    name: "Israel",
    capital: "Jerusalem",
    coordinates: [31.0461, 34.8516],
    zoom: 7,
    region: "Middle East",
    subregion: "Levant / Eastern Mediterranean",
    maritimeType: "Littoral",
    coastlineKm: 273,
    landBordersCount: 4,
    borderingCountries: ["Lebanon", "Syria", "Jordan", "Egypt"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_BAB_EL_MANDEB",
        relevance: "Controls access to Israel's southern port of Eilat on the Gulf of Aqaba, enabling Asian trade bypass.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Mediterranean ports (Haifa, Ashdod) through Gibraltar / European routes",
      },
      {
        chokepointId: "CHOKEPOINT_SUEZ",
        relevance: "Maritime pathway connecting Israel's Mediterranean trade to Asian suppliers.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Trans-Israel pipeline and Mediterranean-Eilat land bridge",
      },
    ],
    naturalDefenses: [
      "Golan Heights providing commanding topographical surveillance over the Syrian basin",
      "Jordan Rift Valley forming a natural geological barrier along the eastern border",
      "Offshore Mediterranean gas fields (Leviathan, Tamar) granting complete electrical energy self-sufficiency",
    ],
    geographicVulnerabilities: [
      "Acute lack of strategic depth — narrow 15 km waist between Mediterranean coast and West Bank hills",
      "Concentration of population, airports, and high-tech industries in the narrow Tel Aviv coastal plain",
      "Direct exposure to short-range rocket, drone, and ballistic missile envelopes from all perimeter vectors",
    ],
    strategicDepth: "Constrained",
  },
  PAK: {
    id: "PAK",
    name: "Pakistan",
    capital: "Islamabad",
    coordinates: [30.3753, 69.3451],
    zoom: 5,
    region: "South Asia",
    subregion: "Indus River Basin",
    maritimeType: "Littoral",
    coastlineKm: 1046,
    landBordersCount: 4,
    borderingCountries: ["India", "Afghanistan", "Iran", "China"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Located in close proximity to Karachi and Gwadar; handles ~85% of Pakistan's oil import shipments.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Overland trade with Iran or pipeline connectivity to Central Asia",
      },
    ],
    naturalDefenses: [
      "Hindu Kush and Karakoram mountain ranges providing an impenetrable northern mountain bastion",
      "Indus River and extensive canal network creating natural obstacles along the eastern plains",
      "Strategic land bridge connecting Central Asian energy basins with the Arabian Sea (via Gwadar Port)",
    ],
    geographicVulnerabilities: [
      "Lack of geographic strategic depth — major population centers (Lahore, Rawalpindi) located within 100 km of the Indian border",
      "Dependence on a single river system (Indus) with headwaters originating upstream in Indian-administered Kashmir",
      "Porous and mountainous Durand Line frontier with Afghanistan prone to militant transit",
    ],
    strategicDepth: "Constrained",
  },
  AUS: {
    id: "AUS",
    name: "Australia",
    capital: "Canberra",
    coordinates: [-25.2744, 133.7751],
    zoom: 4,
    region: "Oceania / Indo-Pacific",
    subregion: "Australasia / Southern Oceans",
    maritimeType: "Continental",
    coastlineKm: 25760,
    landBordersCount: 0,
    borderingCountries: [],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Transits vital manufactured imports, refined fuel supplies, and outbound mineral exports to East Asia.",
        exposureLevel: "HIGH",
        rerouteAlternative: "Direct Pacific routes or Lombok-Makassar Straits (+3 days)",
      },
      {
        chokepointId: "CHOKEPOINT_PANAMA",
        relevance: "Connects Australian east coast ports with transatlantic consumer markets.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "Southern Ocean / Cape routes",
      },
    ],
    naturalDefenses: [
      "Continental island isolation surrounded by Indian, Pacific, and Southern oceans preventing conventional land assault",
      "Vast, inhospitable desert interior (Outback) creating an impassable barrier to any invading force",
      "World's largest reserves of critical minerals, iron ore, bauxite, and lithium ensuring domestic material security",
    ],
    geographicVulnerabilities: [
      "Extreme reliance on maritime sea lines of communication for refined fuel imports (~90% imported)",
      "Concentration of population and industrial assets along a narrow southeastern coastal strip",
      "Vast northern maritime approaches requiring immense surveillance resources to patrol",
    ],
    strategicDepth: "Vast",
  },
  IDN: {
    id: "IDN",
    name: "Indonesia",
    capital: "Jakarta",
    coordinates: [-0.7893, 113.9213],
    zoom: 4,
    region: "Southeast Asia",
    subregion: "Malay Archipelago / Indo-Pacific",
    maritimeType: "Archipelagic",
    coastlineKm: 54716,
    landBordersCount: 3,
    borderingCountries: ["Malaysia", "Papua New Guinea", "East Timor"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Sovereign co-custodian of the Strait of Malacca alongside Malaysia and Singapore.",
        exposureLevel: "CRITICAL",
        rerouteAlternative: "Internal archipelagic sea lanes: Sunda Strait, Lombok Strait, and Makassar Strait",
      },
    ],
    naturalDefenses: [
      "Archipelagic fragmentation across 17,000+ islands making complete military occupation nearly impossible",
      "Commanding position astride all primary sea routes connecting the Indian Ocean to the Pacific Ocean",
      "Vast domestic mineral reserves (nickel, copper, bauxite) essential for global energy transition",
    ],
    geographicVulnerabilities: [
      "Extreme internal logistical fragmentation requiring complex inter-island sea and air transport",
      "High vulnerability to volcanic eruptions, earthquakes, and sea level rise impacting coastal cities",
      "Maritime perimeter security challenges across the Natuna Sea overlapping Chinese maritime claims",
    ],
    strategicDepth: "Island-Insular",
  },
};

// Fallback intelligent generator for any unlisted country
export function getCountryGeoProfile(countryId: string, countryName?: string, rawCountry?: any): CountryGeoProfile {
  const cleanId = (countryId || "IND").trim().toUpperCase();
  if (COUNTRY_GEO_PROFILES[cleanId]) {
    return COUNTRY_GEO_PROFILES[cleanId];
  }

  const region = rawCountry?.region || "Global Region";
  const capital = rawCountry?.capital || rawCountry?.geography?.capital || "Sovereign Seat";
  const landBorders = rawCountry?.geography?.land_borders || rawCountry?.borders || [];

  return {
    id: cleanId,
    name: countryName || rawCountry?.name || cleanId,
    capital: capital,
    coordinates: [20.0, 0.0],
    zoom: 4,
    region: region,
    subregion: `${region} Subregion`,
    maritimeType: "Continental",
    coastlineKm: 1200,
    landBordersCount: Array.isArray(landBorders) ? landBorders.length : 3,
    borderingCountries: Array.isArray(landBorders) ? landBorders : ["Neighboring sovereign states"],
    primaryChokepoints: [
      {
        chokepointId: "CHOKEPOINT_MALACCA",
        relevance: "Primary commercial sea lane connecting regional manufacturing with international markets.",
        exposureLevel: "MODERATE",
        rerouteAlternative: "Extended maritime detours (+5 to 10 days)",
      },
      {
        chokepointId: "CHOKEPOINT_HORMUZ",
        relevance: "Critical artery for imported hydrocarbon supplies and global energy stability.",
        exposureLevel: "HIGH",
        rerouteAlternative: "National emergency reserves and diversified fuel contracts",
      },
    ],
    naturalDefenses: [
      "Territorial geography providing natural spatial buffers",
      "Regional transport connectivity bolstering domestic logistics",
    ],
    geographicVulnerabilities: [
      "Exposure to international trade route disruptions and maritime chokepoints",
      "Cross-border infrastructure dependencies with neighboring states",
    ],
    strategicDepth: "Moderate",
  };
}

// Helper to get matching full chokepoint objects for a country
export function getCountryChokepointsDetailed(countryId: string, countryName?: string, rawCountry?: any): {
  profile: CountryGeoProfile["primaryChokepoints"][0];
  chokepoint: MapChokepoint;
}[] {
  const geoProfile = getCountryGeoProfile(countryId, countryName, rawCountry);
  const results: {
    profile: CountryGeoProfile["primaryChokepoints"][0];
    chokepoint: MapChokepoint;
  }[] = [];

  for (const item of geoProfile.primaryChokepoints) {
    const cp = MAP_CHOKEPOINTS.find((c) => c.id === item.chokepointId);
    if (cp) {
      results.push({ profile: item, chokepoint: cp });
    }
  }

  // If no exact match, fallback to the top 2 global chokepoints
  if (results.length === 0) {
    const malacca = MAP_CHOKEPOINTS.find((c) => c.id === "CHOKEPOINT_MALACCA");
    const hormuz = MAP_CHOKEPOINTS.find((c) => c.id === "CHOKEPOINT_HORMUZ");
    if (malacca) {
      results.push({
        profile: {
          chokepointId: "CHOKEPOINT_MALACCA",
          relevance: "Global trade artery linking Indo-Pacific economic supply chains.",
          exposureLevel: "HIGH",
          rerouteAlternative: "Sunda or Lombok Straits",
        },
        chokepoint: malacca,
      });
    }
    if (hormuz) {
      results.push({
        profile: {
          chokepointId: "CHOKEPOINT_HORMUZ",
          relevance: "Hydrocarbon transit chokepoint influencing global energy security.",
          exposureLevel: "HIGH",
          rerouteAlternative: "Alternative continental supply routes",
        },
        chokepoint: hormuz,
      });
    }
  }

  return results;
}
