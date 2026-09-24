// TRINETRA AI — Strategic Dependency Intelligence Engine
// Models supply chain vulnerabilities, critical import exposures, and reverse dependencies.
// Architecture: Country -> Resource -> Supplier -> Route -> Chokepoint -> Infrastructure -> Domestic Consumer

export interface StrategicDependency {
  id: string;
  dependentCountry: string; // Country needing the resource (e.g. "IND")
  category:
    | "energy_hydrocarbons"
    | "critical_minerals"
    | "semiconductors_tech"
    | "defence_subsystems"
    | "pharmaceuticals_apis"
    | "industrial_feedstocks"
    | "food_fertilizer"
    | "maritime_shipping";
  commodity: string;
  suppliers: {
    countryId: string;
    countryName: string;
    sharePct: number;
    flag: string;
  }[];
  flowRoute: {
    origin: string;
    routeType: "maritime" | "pipeline" | "air_freight" | "overland_rail";
    transitRoute: string;
    chokepoint: string | null;
    entryHub: string;
    processingInfrastructure: string;
    domesticConsumer: string;
  };
  alternativesAssessment: string;
  vulnerabilityLevel: "CRITICAL" | "HIGH" | "MODERATE" | "MANAGEABLE";
  strategicSignificance: string;
  mitigationInitiatives: string[];
  relatedCountries: string[];
  sourceId: string;
  confidence: "High" | "Moderate" | "Documented";
}

export interface ReverseDependency {
  id: string;
  providerCountry: string; // Country supplying the world (e.g. "CHN", "IND", "SAU")
  category: string;
  commodity: string;
  globalSharePct: string;
  dependentNations: string[];
  strategicLeverage: string;
  sourceId: string;
}

export const STRATEGIC_DEPENDENCIES_DATA: StrategicDependency[] = [
  {
    id: "DEP-IND-CRUDE-001",
    dependentCountry: "IND",
    category: "energy_hydrocarbons",
    commodity: "Crude Petroleum (Seaborne Import)",
    suppliers: [
      { countryId: "RUS", countryName: "Russian Federation", sharePct: 36, flag: "🇷🇺" },
      { countryId: "IRQ", countryName: "Iraq", sharePct: 20, flag: "🇮🇶" },
      { countryId: "SAU", countryName: "Saudi Arabia", sharePct: 15, flag: "🇸🇦" },
      { countryId: "ARE", countryName: "United Arab Emirates", sharePct: 8, flag: "🇦🇪" },
    ],
    flowRoute: {
      origin: "Gulf Export Terminals (Ras Tanura, Basra) & Baltic/Black Sea Ports (Primorsk, Novorossiysk)",
      routeType: "maritime",
      transitRoute: "Persian Gulf / Arabian Sea & Mediterranean / Red Sea / Indian Ocean",
      chokepoint: "Strait of Hormuz & Bab el-Mandeb",
      entryHub: "Vadinar (Gujarat), Sikka, Paradip (Odisha), Mumbai",
      processingInfrastructure: "Jamnagar Refinery Complex, IOCL Paradip, BPCL Kochi",
      domesticConsumer: "National Transport Sector (85% diesel/petrol), Petrochemical Industry, Power Generation",
    },
    alternativesAssessment: "Limited short-term physical substitutes; India imports over 85% of crude requirements. Diversification across Russian, Gulf, and West African suppliers provides commercial flexibility, but aggregate volume requirement remains inflexible.",
    vulnerabilityLevel: "CRITICAL",
    strategicSignificance: "High oil import prices directly impact the current account balance, retail fuel inflation, and sovereign foreign currency reserves.",
    mitigationInitiatives: [
      "Strategic Petroleum Reserve (SPR) capacity at Padur, Mangalore, and Visakhapatnam (9.5 days cover + commercial stock).",
      "Ethanol blending mandate (20% target by 2025-26).",
      "Accelerated solar, wind, and nuclear energy expansion.",
    ],
    relatedCountries: ["RUS", "IRQ", "SAU", "ARE", "USA"],
    sourceId: "SOURCE-IEA-001",
    confidence: "High",
  },
  {
    id: "DEP-IND-DEFENCE-002",
    dependentCountry: "IND",
    category: "defence_subsystems",
    commodity: "Jet Engines, Air Defence Spares & Naval Subsystems",
    suppliers: [
      { countryId: "RUS", countryName: "Russian Federation", sharePct: 36, flag: "🇷🇺" },
      { countryId: "FRA", countryName: "France", sharePct: 33, flag: "🇫🇷" },
      { countryId: "USA", countryName: "United States", sharePct: 13, flag: "🇺🇸" },
      { countryId: "ISR", countryName: "Israel", sharePct: 8, flag: "🇮🇱" },
    ],
    flowRoute: {
      origin: "European, Russian, and American Defence Manufacturing Hubs",
      routeType: "air_freight",
      transitRoute: "Trans-continental air cargo & secured maritime freight",
      chokepoint: null,
      entryHub: "Naval Dockyards (Mumbai, Vizag) & Air Force Base Depots (Nashik, Bengaluru)",
      processingInfrastructure: "Hindustan Aeronautics Limited (HAL), Mazagon Dock Shipbuilders, Bharat Electronics",
      domesticConsumer: "Indian Armed Forces (Active inventory of 1.45M personnel across three services)",
    },
    alternativesAssessment: "Domestic indigenous production (Atmanirbhar Bharat / Make in India) is scaling rapidly via Tejas Mk1A, INS Vikrant, and artillery platforms, but advanced high-thrust jet engine single-crystal turbine blades still necessitate foreign licensing (e.g. GE F414 co-production accord).",
    vulnerabilityLevel: "HIGH",
    strategicSignificance: "Readiness of front-line fighter squadrons, submarine battery systems, and air defense batteries during potential border standoffs.",
    mitigationInitiatives: [
      "Indigenization negative import lists prohibiting over 500 weapon subsystems.",
      "GE-HAL transfer of technology agreement for 80% domestic manufacture of F414 engines.",
      "Defence industrial corridors in Uttar Pradesh and Tamil Nadu.",
    ],
    relatedCountries: ["RUS", "FRA", "USA", "ISR"],
    sourceId: "SOURCE-SIPRI-001",
    confidence: "High",
  },
  {
    id: "DEP-IND-PHARMA-003",
    dependentCountry: "IND",
    category: "pharmaceuticals_apis",
    commodity: "Active Pharmaceutical Ingredients (APIs) & Key Starting Materials (KSMs)",
    suppliers: [
      { countryId: "CHN", countryName: "People's Republic of China", sharePct: 68, flag: "🇨🇳" },
      { countryId: "USA", countryName: "United States", sharePct: 6, flag: "🇺🇸" },
      { countryId: "DEU", countryName: "Germany", sharePct: 5, flag: "🇩🇪" },
    ],
    flowRoute: {
      origin: "Chinese Chemical & Synthesis Hubs (Zhejiang, Jiangsu, Hubei)",
      routeType: "maritime",
      transitRoute: "East China Sea / South China Sea / Strait of Malacca / Bay of Bengal",
      chokepoint: "Strait of Malacca",
      entryHub: "Nhava Sheva (JNPT), Chennai Port, Kolkata Port",
      processingInfrastructure: "Pharma Formulations Hubs (Hyderabad Genome Valley, Gujarat, Baddi)",
      domesticConsumer: "Generic formulation export industry (India supplies 20% of global generic volume and 40% of US generics) and domestic healthcare.",
    },
    alternativesAssessment: "India produces the final generic tablets and vaccines for the world, but upstream chemicals and fermentation-based starting molecules (penicillin G, erythromycin) remain concentrated in China due to power and scale subsidies.",
    vulnerabilityLevel: "HIGH",
    strategicSignificance: "Potential supply disruption could cripple India's $50B pharmaceutical export industry and national essential medicines supply.",
    mitigationInitiatives: [
      "Production Linked Incentive (PLI) Scheme for Bulk Drugs (₹6,940 Crore).",
      "Mega Bulk Drug Parks in Gujarat, Andhra Pradesh, and Himachal Pradesh.",
    ],
    relatedCountries: ["CHN", "USA", "DEU"],
    sourceId: "SOURCE-WB-001",
    confidence: "High",
  },
  {
    id: "DEP-CHN-IRONORE-004",
    dependentCountry: "CHN",
    category: "critical_minerals",
    commodity: "Iron Ore (Seaborne Fines & Pellets)",
    suppliers: [
      { countryId: "AUS", countryName: "Australia", sharePct: 62, flag: "🇦🇺" },
      { countryId: "BRA", countryName: "Brazil", sharePct: 21, flag: "🇧🇷" },
      { countryId: "IND", countryName: "India", sharePct: 3, flag: "🇮🇳" },
    ],
    flowRoute: {
      origin: "Pilbara Ports (Port Hedland, Dampier) & Ponta da Madeira (Brazil)",
      routeType: "maritime",
      transitRoute: "Western Australia to Northern China Sea & Atlantic / Indian Ocean / Malacca",
      chokepoint: "Lombok Strait / Sunda Strait & Strait of Malacca",
      entryHub: "Qingdao, Ningbo-Zhoushan, Caofeidian, Rizhao",
      processingInfrastructure: "State Steel Giants (Baowu Steel Group, Ansteel, Shougang)",
      domesticConsumer: "Construction sector, automobile manufacturing, heavy engineering, shipbuilding.",
    },
    alternativesAssessment: "China imports over 70% of consumed iron ore. Domestic Chinese ore has low average Fe content (~20-30%) requiring expensive beneficiation. African Simandou project in Guinea offers eventual diversification but requires years of rail completion.",
    vulnerabilityLevel: "HIGH",
    strategicSignificance: "Steel production underpins the entire industrial, civil infrastructure, and defense manufacturing base of the Chinese economy.",
    mitigationInitiatives: [
      "China Mineral Resources Group (CMRG) centralized state procurement vehicle.",
      "Consortium investment in the Simandou iron ore deposit in Guinea.",
      "Increased electric arc furnace (EAF) scrap steel recycling.",
    ],
    relatedCountries: ["AUS", "BRA", "IND", "GIN"],
    sourceId: "SOURCE-USGS-001",
    confidence: "High",
  },
  {
    id: "DEP-USA-RAREEARTH-005",
    dependentCountry: "USA",
    category: "critical_minerals",
    commodity: "Rare Earth Permanent Magnets (NdFeB) & Heavy Rare Earths (Dy, Tb)",
    suppliers: [
      { countryId: "CHN", countryName: "People's Republic of China", sharePct: 74, flag: "🇨🇳" },
      { countryId: "MYS", countryName: "Malaysia", sharePct: 11, flag: "🇲🇾" },
      { countryId: "JPN", countryName: "Japan", sharePct: 6, flag: "🇯🇵" },
    ],
    flowRoute: {
      origin: "Inner Mongolia (Baotou) & Southern China Ionic Clay Refineries",
      routeType: "maritime",
      transitRoute: "Pacific Maritime Corridors",
      chokepoint: null,
      entryHub: "Long Beach, Los Angeles, Oakland",
      processingInfrastructure: "Downstream Magnet Component Integrators & Defense Primes",
      domesticConsumer: "F-35 Lightning II flight controls, Virginia-class submarine drive motors, EV drive motors, wind turbine generators.",
    },
    alternativesAssessment: "The US mines rare earth ore at Mountain Pass (MP Materials), but historically shipped concentrated carbonates back to China for chemical cracking and metallization. Rebuilding domestic separation and sintering takes 5-8 years of capital incubation.",
    vulnerabilityLevel: "CRITICAL",
    strategicSignificance: "Chinese export licensing controls on gallium, germanium, and antimony directly constrain US precision munitions and radar production.",
    mitigationInitiatives: [
      "Defense Production Act Title III grants for domestic heavy rare earth separation.",
      "Partnership with Lynas (Australia) for Texas processing facility.",
      "Minerals Security Partnership (MSP) with allied democracies.",
    ],
    relatedCountries: ["CHN", "AUS", "JPN", "MYS"],
    sourceId: "SOURCE-USGS-001",
    confidence: "High",
  },
];

export const REVERSE_DEPENDENCIES_DATA: ReverseDependency[] = [
  {
    id: "REV-IND-GENERIC-PHARMA",
    providerCountry: "IND",
    category: "Pharmaceuticals",
    commodity: "Generic Medicines & Vaccines",
    globalSharePct: "20% of global generic drug volume; >50% of global vaccine supply",
    dependentNations: ["USA", "GBR", "ZAF", "NGA", "BRA", "CAN"],
    strategicLeverage: "Crucial supplier to US and European public healthcare systems; prevents healthcare inflation in advanced economies.",
    sourceId: "SOURCE-WB-001",
  },
  {
    id: "REV-IND-TECH-SERVICES",
    providerCountry: "IND",
    category: "Information Technology",
    commodity: "Enterprise Software Engineering & Cloud Architecture",
    globalSharePct: "Over 55% of global IT services delivery market",
    dependentNations: ["USA", "GBR", "DEU", "JPN", "AUS"],
    strategicLeverage: "Global Fortune 500 enterprise operations, airline booking systems, and banking backbones are deeply integrated with Indian engineering centers.",
    sourceId: "SOURCE-WTO-001",
  },
  {
    id: "REV-CHN-RARE-EARTH",
    providerCountry: "CHN",
    category: "Critical Minerals",
    commodity: "Rare Earth Refining & Sintered Neodymium Magnets",
    globalSharePct: "~68% of mining and ~90% of global magnet refining",
    dependentNations: ["USA", "JPN", "DEU", "KOR", "FRA"],
    strategicLeverage: "Asymmetric leverage over global electric vehicle production, wind turbines, and precision military actuators.",
    sourceId: "SOURCE-USGS-001",
  },
  {
    id: "REV-SAU-CRUDE-OIL",
    providerCountry: "SAU",
    category: "Hydrocarbons",
    commodity: "Spare Crude Production Capacity & Low-Cost Extraction",
    globalSharePct: "~12% of global crude supply; >70% of OPEC spare capacity buffer",
    dependentNations: ["CHN", "JPN", "KOR", "IND", "USA"],
    strategicLeverage: "Ability to adjust output by 1-2 million barrels per day influences global oil market pricing and inflation benchmarks.",
    sourceId: "SOURCE-IEA-001",
  },
];

export function getDependenciesForCountry(countryId: string): {
  criticalNeeds: StrategicDependency[];
  worldDependsOnUs: ReverseDependency[];
} {
  const norm = countryId.toUpperCase();
  return {
    criticalNeeds: STRATEGIC_DEPENDENCIES_DATA.filter((d) => d.dependentCountry === norm),
    worldDependsOnUs: REVERSE_DEPENDENCIES_DATA.filter((d) => d.providerCountry === norm),
  };
}

export function getAllDependencies(): StrategicDependency[] {
  return STRATEGIC_DEPENDENCIES_DATA;
}
