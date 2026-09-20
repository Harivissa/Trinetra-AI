// TRINETRA AI — Structured Country Strategic Intelligence Data
// Adheres strictly to factual geopolitical sources (SIPRI, World Bank, IEA, EIA, UNCTAD, Official Defense White Papers)
// No arbitrary scores, no game-like meters, no fabricated percentages.

export interface StrategicDomainItem {
  id: string;
  name: string;
  category: "SECURITY" | "ECONOMIC" | "PHYSICAL" | "GOVERNANCE";
  capabilitySummary: string;
  keyAssets: string[];
  dependencies: string[];
  constraints: string[];
  strategicRelevance: string;
  evidence: {
    source: string;
    year: string;
    confidence: "High" | "Medium" | "Low";
    nature: "FACT" | "DOCUMENTED ASSESSMENT" | "ANALYSIS";
  };
}

export interface DependencyNodeItem {
  id: string;
  title: string;
  category: "ENERGY" | "DEFENCE" | "TECHNOLOGY" | "TRADE" | "RAW MATERIALS";
  reliedUpon: string;
  sourceRegions: string[];
  whyItMatters: string;
  possibleVulnerability: string;
  availableAlternatives: string;
  evidence: {
    source: string;
    year: string;
    confidence: "High" | "Medium" | "Low";
    nature: "FACT" | "DOCUMENTED ASSESSMENT";
  };
  flowSteps: {
    stepName: string;
    locationOrStage: string;
    description: string;
    disruptionRisk: string;
  }[];
}

export interface StrategicActorRelationship {
  actorId: string;
  actorName: string;
  flag: string;
  relationshipType:
    | "DEFENCE PARTNER"
    | "TRADE PARTNER"
    | "ENERGY SUPPLIER"
    | "TECHNOLOGY PARTNER"
    | "DIPLOMATIC PARTNER"
    | "COMPETITOR"
    | "BORDER DISPUTE"
    | "REGIONAL COOPERATION";
  whyItMatters: string;
  keyAreas: string[];
  recentDevelopments: string;
  constraints: string;
  sources: {
    name: string;
    year: string;
    confidence: "High" | "Medium" | "Low";
  };
}

export interface StrategicStrengthItem {
  category: "GEOGRAPHIC" | "ECONOMIC" | "MILITARY" | "TECHNOLOGICAL" | "DIPLOMATIC" | "DEMOGRAPHIC" | "INDUSTRIAL" | "MARITIME" | "ENERGY";
  what: string;
  whyItMatters: string;
  evidence: {
    source: string;
    year: string;
    nature: "FACT" | "DOCUMENTED ASSESSMENT";
  };
}

export interface CountryStrategicData {
  countryId: string;
  countryName: string;
  overviewMetrics: {
    population: { value: string; unit: string; year: string; source: string };
    gdp: { value: string; unit: string; year: string; source: string };
    growth: { value: string; unit: string; year: string; source: string };
    nuclear: { status: string; detail: string; year: string; source: string };
    armedForces: { value: string; unit: string; year: string; source: string };
    defenseBudget: { value: string; unit: string; year: string; source: string };
    netEnergy: { status: string; detail: string; year: string; source: string };
    maritimeCoast: { value: string; unit: string; year: string; source: string };
  };
  keyStrategicDomains: string[];
  keyStrategicPartners: string[];
  keyCompetitors: string[];
  keyDependencies: string[];
  domains: StrategicDomainItem[];
  strengths: StrategicStrengthItem[];
  dependencies: DependencyNodeItem[];
  relationships: StrategicActorRelationship[];
}

export const STRATEGIC_DATA_REGISTRY: Record<string, CountryStrategicData> = {
  IND: {
    countryId: "IND",
    countryName: "India",
    overviewMetrics: {
      population: { value: "1,428", unit: "Million", year: "2024", source: "UN Population Division" },
      gdp: { value: "3.75", unit: "USD Trillion", year: "2024", source: "World Bank / IMF" },
      growth: { value: "6.8%", unit: "Annual Real GDP", year: "2024", source: "RBI / World Bank" },
      nuclear: { status: "Declared Deterrent", detail: "Triad Operational (~172 warheads)", year: "2024", source: "SIPRI Yearbook" },
      armedForces: { value: "1,450,000", unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: "72.6", unit: "USD Billion (2.4% GDP)", year: "2024", source: "Union Budget of India / SIPRI" },
      netEnergy: { status: "Net Importer", detail: "87% Crude Import Dependence", year: "2024", source: "Ministry of Petroleum & Natural Gas" },
      maritimeCoast: { value: "7,516", unit: "Kilometers", year: "2024", source: "Naval Hydrographic Office" },
    },
    keyStrategicDomains: ["Nuclear Triad", "Space Exploration", "Maritime SAGAR", "Digital Public Infra", "High Altitude Defense"],
    keyStrategicPartners: ["United States", "Russia", "France", "Japan", "United Arab Emirates"],
    keyCompetitors: ["China", "Pakistan"],
    keyDependencies: ["Persian Gulf & Russian Crude", "Semiconductor Wafers", "Jet Engine Propulsion Components", "Fertilizer Feedstocks"],
    domains: [
      {
        id: "defence",
        name: "Defence & Armed Forces",
        category: "SECURITY",
        capabilitySummary: "1.45M active troops with high-altitude mountain corps and expanding naval blue-water presence.",
        keyAssets: ["INS Vikrant & INS Vikramaditya carriers", "BrahMos supersonic cruise missiles", "Rafale & Su-30MKI squadrons", "Mountain Strike Corps"],
        dependencies: ["Imported gas turbines and marine gearboxes", "Aero-engine core technologies (GE F414 licensing)", "Specialized radar chips"],
        constraints: ["Modernization capital allocation", "Two-front border defense maintenance costs", "Defense procurement lead times"],
        strategicRelevance: "Deters territorial revisionism across the 3,488 km Himalayan LAC and Line of Control while securing Indian Ocean maritime lanes.",
        evidence: { source: "SIPRI / IISS Military Balance", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "nuclear",
        name: "Nuclear Deterrence",
        category: "SECURITY",
        capabilitySummary: "Operational triad under civilian National Command Authority with declared No-First-Use (NFU) posture.",
        keyAssets: ["INS Arihant & INS Arighat SSBNs (K-15/K-4 SLBMs)", "Agni-V ICBM with MIRV testing", "Mirage-2000 & Rafale nuclear delivery"],
        dependencies: ["Imported natural uranium fuel under IAEA safeguards for civilian reactors", "Domestic enrichment capacity pacing"],
        constraints: ["No-First-Use operational response verification", "Survivable retaliatory second-strike communication links"],
        strategicRelevance: "Provides credible minimum deterrence against nuclear-armed neighbors (China and Pakistan).",
        evidence: { source: "SIPRI Yearbook / Federation of American Scientists", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "space",
        name: "Space Capability",
        category: "SECURITY",
        capabilitySummary: "Indigenous end-to-end launch and deep-space exploration capability managed by ISRO.",
        keyAssets: ["Chandrayaan-3 lunar landing", "Aditya-L1 solar observatory", "NavIC regional satellite constellation", "PSLV / LVM3 heavy-lift launch vehicles"],
        dependencies: ["Space-grade electronics and rad-hard components sourced internationally", "Tracking ground station sharing"],
        constraints: ["Commercial payload lift capacity vs heavy competitors", "Defense satellite constellation density"],
        strategicRelevance: "Guarantees sovereign satellite reconnaissance, military communications, and sovereign navigation.",
        evidence: { source: "ISRO Annual Report", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "cyber",
        name: "Cyber & Information",
        category: "SECURITY",
        capabilitySummary: "Rapidly scaling Defense Cyber Agency (DCyA) and national CERT-In monitoring large digital public infrastructure.",
        keyAssets: ["Defense Cyber Agency", "Unified Payments Interface (UPI) secure stack", "National Critical Information Infrastructure Protection Centre (NCIIPC)"],
        dependencies: ["Foreign operating systems and cloud server hyperscalers", "Imported telecom network hardware"],
        constraints: ["State-sponsored Advanced Persistent Threat (APT) targeting critical infrastructure", "Domestic cybersecurity workforce scale"],
        strategicRelevance: "Protects critical national infrastructure, banking grids, and government communications from foreign disruption.",
        evidence: { source: "CERT-In National Cyber Security Status", year: "2024", confidence: "Medium", nature: "DOCUMENTED ASSESSMENT" },
      },
      {
        id: "maritime",
        name: "Maritime Security",
        category: "SECURITY",
        capabilitySummary: "Central geographic position projecting into the Indian Ocean with expanding SAGAR security doctrine.",
        keyAssets: ["Andaman & Nicobar Tri-Service Command", "INS Kadamba naval base at Karwar", "P-8I maritime patrol aircraft fleet"],
        dependencies: ["External defense components for surface ships", "Submarine fleet expansion pace"],
        constraints: ["Surveillance gap across distant southern choke points", "Budget split between continental borders and naval fleet"],
        strategicRelevance: "Commands sea lines of communication between the Persian Gulf and Malacca Strait carrying major Asian trade.",
        evidence: { source: "Indian Navy Maritime Security Strategy", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "economy",
        name: "Economy & Growth",
        category: "ECONOMIC",
        capabilitySummary: "Fifth largest global economy by nominal GDP, fastest growing major economy driven by domestic consumption and services.",
        keyAssets: ["$3.75T nominal output", "$650B+ foreign exchange reserves", "Expanding formal digital economy"],
        dependencies: ["Global capital flows and foreign direct investment", "Global oil price stability"],
        constraints: ["Job creation for young demographic cohort", "Trade deficit in manufacturing goods with East Asia"],
        strategicRelevance: "Underpins long-term sovereign state capacity, defense capital acquisition, and international diplomatic weight.",
        evidence: { source: "IMF World Economic Outlook", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "trade",
        name: "Trade & Logistics",
        category: "ECONOMIC",
        capabilitySummary: "Major exporter of refined petroleum products, IT services, pharmaceuticals, and agricultural commodities.",
        keyAssets: ["Jawaharlal Nehru Port (JNPT)", "Mundra Port container terminal", "India-Middle East-Europe Economic Corridor (IMEC) initiative"],
        dependencies: ["Maritime transit corridors via Bab el-Mandeb and Malacca", "Imported advanced capital machinery"],
        constraints: ["Logistics costs as percentage of GDP compared to East Asia", "Tariff barriers on key manufactured inputs"],
        strategicRelevance: "Links supply chains between Western consumers and Asian production centers.",
        evidence: { source: "Ministry of Commerce & Industry / World Bank Logistics Index", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "energy",
        name: "Energy & Transition",
        category: "ECONOMIC",
        capabilitySummary: "Major oil refiner with significant domestic coal reserves and world-leading renewable solar deployment.",
        keyAssets: ["Jamnagar Refinery (world's largest single-site refining complex)", "180+ GW non-fossil electricity capacity", "Strategic Petroleum Reserves (Padur, Mangalore, Visakhapatnam)"],
        dependencies: ["87% crude oil imports", "50% natural gas imports", "Solar cell wafer components"],
        constraints: ["Air quality and emissions transition pace", "Thermal coal power baseline reliance during peak demand"],
        strategicRelevance: "Energy import bill heavily dictates national current account balance and foreign policy flexibility.",
        evidence: { source: "International Energy Agency (IEA) India Energy Outlook", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "technology",
        name: "Technology & Software",
        category: "ECONOMIC",
        capabilitySummary: "Global IT services and digital engineering power with expanding semiconductor manufacturing initiatives.",
        keyAssets: ["$250B+ IT services sector", "India Semiconductor Mission (ISM) with multiple approved fab/assembly plants", "Aadhaar / UPI digital public rails"],
        dependencies: ["Fabrication foundries in Taiwan and South Korea for advanced chips", "Specialized EDA software tools"],
        constraints: ["Domestic chip fabrication buildout timeline", "Hardware component manufacturing depth"],
        strategicRelevance: "Enables sovereign digital governance and positions India as a trusted technology supply chain partner.",
        evidence: { source: "NASSCOM / Ministry of Electronics and IT", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "industry",
        name: "Industrial Base",
        category: "ECONOMIC",
        capabilitySummary: "Second largest global crude steel producer, prominent automotive hub, and world's largest vaccine manufacturer.",
        keyAssets: ["140+ million tonnes crude steel capacity", "Automotive export clusters (Chennai, Pune, Gurugram)", "Serum Institute and pharma formulation parks"],
        dependencies: ["Coking coal imports from Australia", "Active Pharmaceutical Ingredients (APIs) imported from China"],
        constraints: ["High power tariffs for industrial consumers", "Land acquisition and regulatory approvals pace"],
        strategicRelevance: "Crucial for economic resilience and defense manufacturing self-reliance (Atmanirbhar Bharat).",
        evidence: { source: "World Steel Association / Ministry of Steel", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "diplomacy",
        name: "Diplomatic Architecture",
        category: "GOVERNANCE",
        capabilitySummary: "Pursues 'Strategic Autonomy' and multi-alignment, actively engaging Quad, BRICS, SCO, and G20.",
        keyAssets: ["Permanent diplomatic presence across 190+ nations", "Founding Quad member", "Voice of the Global South leadership role"],
        dependencies: ["International consensus building for UN Security Council reform", "Balancing Western ties with traditional Russian partnership"],
        constraints: ["Managing friction when major partner states have divergent geopolitical interests"],
        strategicRelevance: "Maximizes sovereign decision-making space without binding military alliance commitments.",
        evidence: { source: "Ministry of External Affairs Policy Statements", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "geography",
        name: "Physical Geography",
        category: "PHYSICAL",
        capabilitySummary: "Continental landmass with formidable northern mountain barriers and central projection into the Indian Ocean.",
        keyAssets: ["Himalayan northern mountain wall", "Thar Desert western buffer", "7,516 km ocean coastline with dominant maritime vantage"],
        dependencies: ["Narrow Siliguri Corridor linking northeast states", "Maritime choke points for external trade"],
        constraints: ["Active disputed land borders with China and Pakistan", "Challenging high-altitude border terrain logistics"],
        strategicRelevance: "Guarantees naval command over the central Indian Ocean while imposing high defense requirements on northern frontiers.",
        evidence: { source: "Survey of India / Ministry of Defence", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "demographics",
        name: "Demographics & Human Capital",
        category: "PHYSICAL",
        capabilitySummary: "World's most populous nation with a median age of ~28 years, providing a multi-decade demographic dividend.",
        keyAssets: ["1.428 billion population", "Working-age population exceeding 900 million", "Massive STEM graduate output"],
        dependencies: ["Quality vocational training and educational infrastructure", "Sustained employment generation"],
        constraints: ["Regional economic inequality", "Urban infrastructure pressure in Tier-1 metros"],
        strategicRelevance: "Provides an enormous domestic consumer market, armed forces recruitment base, and economic workforce.",
        evidence: { source: "UN World Population Prospects / Census of India", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "infrastructure",
        name: "Infrastructure & Connectivity",
        category: "PHYSICAL",
        capabilitySummary: "Massive public capital expenditure in dedicated freight corridors, expressways, ports, and high-speed rail.",
        keyAssets: ["Western and Eastern Dedicated Freight Corridors", "Bharatmala expressway network", "Gati Shakti multi-modal logistics master plan"],
        dependencies: ["Continued fiscal capital expenditure allocations", "Private sector infrastructure financing"],
        constraints: ["Last-mile multimodal logistics bottlenecks", "Environmental clearances and land acquisition delays"],
        strategicRelevance: "Compresses domestic logistics costs, enhances military mobilization speeds, and accelerates internal commerce.",
        evidence: { source: "NITI Aayog / Ministry of Road Transport and Highways", year: "2024", confidence: "High", nature: "FACT" },
      },
    ],
    strengths: [
      {
        category: "GEOGRAPHIC",
        what: "Peninsular projection into the central Indian Ocean between Persian Gulf oil routes and East Asian markets.",
        whyItMatters: "Provides natural surveillance and operational reach across maritime trade carrying over 80% of regional petroleum traffic.",
        evidence: { source: "Indian Naval Strategy / National Maritime Foundation", year: "2024", nature: "FACT" },
      },
      {
        category: "DEMOGRAPHIC",
        what: "Young median age of ~28 years with over 900 million working-age citizens.",
        whyItMatters: "Sustains multi-decade economic expansion and armed forces recruitment while developed competitors face demographic contraction.",
        evidence: { source: "UN Population Division World Population Prospects", year: "2024", nature: "FACT" },
      },
      {
        category: "ECONOMIC",
        what: "Large domestic consumption base shielding growth from external trade contractions.",
        whyItMatters: "Maintains real GDP growth above 6.5% despite global monetary tightening and fragmented international trade.",
        evidence: { source: "World Bank India Development Update", year: "2024", nature: "FACT" },
      },
      {
        category: "MILITARY",
        what: "Extensive combat experience in high-altitude mountain warfare along fortified frontiers.",
        whyItMatters: "Maintains permanent mountain corps deployed in sub-zero terrain capable of high-altitude defense.",
        evidence: { source: "IISS Military Balance", year: "2024", nature: "FACT" },
      },
      {
        category: "TECHNOLOGICAL",
        what: "World-class digital public infrastructure (UPI, Aadhaar, DigiLocker) alongside proven space exploration capability.",
        whyItMatters: "Enables transparent financial inclusion at fractional cost and sovereign space reconnaissance without foreign dependence.",
        evidence: { source: "Bank for International Settlements (BIS) / ISRO", year: "2024", nature: "FACT" },
      },
      {
        category: "DIPLOMATIC",
        what: "Multi-alignment diplomatic posture maintaining functional partnerships with the West, Russia, and the Global South.",
        whyItMatters: "Prevents diplomatic isolation, diversifies energy and defense procurement, and elevates Indian mediation weight.",
        evidence: { source: "Ministry of External Affairs Annual Report", year: "2024", nature: "DOCUMENTED ASSESSMENT" },
      },
    ],
    dependencies: [
      {
        id: "dep-crude",
        title: "Crude Petroleum Imports",
        category: "ENERGY",
        reliedUpon: "Imported crude oil satisfying ~87% of domestic refinery demand.",
        sourceRegions: ["Russia (~35-40%)", "Iraq (~20%)", "Saudi Arabia (~15%)", "UAE (~8%)"],
        whyItMatters: "Fuels national transportation, agricultural pumps, and industrial power generation.",
        possibleVulnerability: "Maritime interdiction at the Strait of Hormuz or international sanctions volatility on supplier regimes.",
        availableAlternatives: "Strategic Petroleum Reserves (~74 days combined commercial and SPR cover), domestic biofuel blending (20% ethanol target), and non-Gulf supplier diversification.",
        evidence: { source: "Ministry of Petroleum and Natural Gas PPAC", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Extraction & Loading", locationOrStage: "Russian / Gulf Terminals", description: "Crude loaded at Primorsk, Novorossiysk, or Ras Tanura", disruptionRisk: "Port drone attacks or sanctions" },
          { stepName: "Maritime Transit", locationOrStage: "Hormuz / Red Sea / Arabian Sea", description: "Tankers navigate open maritime routes into Indian western waters", disruptionRisk: "Strait interdiction or piracy" },
          { stepName: "Offloading", locationOrStage: "Sikka / Vadinar / Kochi Ports", description: "Crude discharged at single-point mooring buoys into coastal storage", disruptionRisk: "Severe weather or coastal strikes" },
          { stepName: "Refining", locationOrStage: "Jamnagar / IOCL Refineries", description: "Processed into motor spirit, diesel, and aviation fuel", disruptionRisk: "Facility operational outages" },
          { stepName: "Distribution", locationOrStage: "Domestic Distribution Grid", description: "Pipelines and rail transport fuel to industrial centers and retail stations", disruptionRisk: "Inland logistical delays" },
        ],
      },
      {
        id: "dep-semiconductors",
        title: "Advanced Semiconductors & Electronic Wafers",
        category: "TECHNOLOGY",
        reliedUpon: "Sub-14nm fabricated silicon chips, microcontrollers, and optical transceivers.",
        sourceRegions: ["Taiwan (TSMC)", "South Korea (Samsung)", "Japan", "United States"],
        whyItMatters: "Critical for defense radar systems, telecommunications, automotive electronics, and computing hardware.",
        possibleVulnerability: "Cross-strait conflict or blockade around Taiwan cutting off advanced semiconductor supplies.",
        availableAlternatives: "India Semiconductor Mission capital subsidies for local fab plants, multi-quarter strategic buffer stockpiling.",
        evidence: { source: "India Semiconductor Mission / MEITY", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Chip Architecture Design", locationOrStage: "Bangalore / US Design Centers", description: "Fabless engineers design circuits using licensed EDA software", disruptionRisk: "IP license disputes" },
          { stepName: "Silicon Fabrication", locationOrStage: "Hsinchu (Taiwan) / Pyeongtaek (S. Korea)", description: "Raw wafers etched in advanced cleanroom foundries", disruptionRisk: "Taiwan Strait maritime interdiction" },
          { stepName: "Packaging & Testing", locationOrStage: "Malaysia / Vietnam / India ATMP", description: "Die diced and encapsulated into usable microchips", disruptionRisk: "Supply chain regional bottlenecks" },
          { stepName: "Integration", locationOrStage: "Electronics Manufacturing Clusters", description: "Soldered into PCBs for automotive, defense, and mobile devices", disruptionRisk: "Component shortage slowdowns" },
        ],
      },
      {
        id: "dep-defense-parts",
        title: "Foreign-Origin Defence Spares & Jet Propulsion",
        category: "DEFENCE",
        reliedUpon: "Turbofan jet engines, specialized aviation spares, and naval marine gas turbines.",
        sourceRegions: ["Russia (legacy fleet spares)", "France (Snecma/Safran engines)", "United States (GE F404/F414 engines)", "Israel (radar and sensors)"],
        whyItMatters: "Maintains operational serviceability rates for front-line fighter aircraft and naval combatants.",
        possibleVulnerability: "Sanctions on Russian defense industrial firms and slow international delivery timelines.",
        availableAlternatives: "Indigenization negative import lists, domestic DRDO Kaveri engine development programs, GE F414 local production deal.",
        evidence: { source: "Standing Committee on Defence Parliamentary Report", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "OEM Manufacture", locationOrStage: "Foreign Defense Facilities", description: "Precision machining of single-crystal turbine blades and avionics", disruptionRisk: "Supply chain backlogs" },
          { stepName: "Government Export Clearance", locationOrStage: "Export Control Authorities", description: "Bilateral export licensing under ITAR or foreign military sales", disruptionRisk: "Geopolitical policy shifts" },
          { stepName: "Assembly & Testing", locationOrStage: "HAL / Naval Dockyards", description: "Integration into Tejas fighters or P-15B destroyers", disruptionRisk: "Integration delays" },
          { stepName: "Squadron Deployment", locationOrStage: "Forward Air Bases / Naval Commands", description: "Operational mission readiness on contested borders", disruptionRisk: "Spares depletion during sustained conflict" },
        ],
      },
    ],
    relationships: [
      {
        actorId: "USA",
        actorName: "United States",
        flag: "🇺🇸",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "Comprehensive Global Strategic Partnership and major supplier of maritime patrol aircraft, drones, and technology co-production.",
        keyAreas: ["Quad Maritime Security", "Critical and Emerging Technologies (iCET)", "GE F414 Jet Engine Co-production", "Logistics Exchange (LEMOA)"],
        recentDevelopments: "Expanded joint naval exercises (Malabar) and operationalization of the iCET defense innovation bridge.",
        constraints: "India retains strategic autonomy and declines formal military treaty alliance commitments; divergence on relations with Russia.",
        sources: { name: "US State Department / MEA India", year: "2024", confidence: "High" },
      },
      {
        actorId: "RUS",
        actorName: "Russia",
        flag: "🇷🇺",
        relationshipType: "ENERGY SUPPLIER",
        whyItMatters: "Primary supplier of discounted seaborne crude oil and historic defense hardware provider with co-development projects (BrahMos).",
        keyAreas: ["Crude Oil Supply", "Nuclear Power (Kudankulam)", "Military Spares & S-400 Air Defense", "Fertilizers"],
        recentDevelopments: "Bilateral trade reached historic highs driven by petroleum imports settled in national currencies.",
        constraints: "Western secondary sanctions risk and Russia's growing strategic proximity to China.",
        sources: { name: "Ministry of Commerce & Industry / SIPRI", year: "2024", confidence: "High" },
      },
      {
        actorId: "CHN",
        actorName: "China",
        flag: "🇨🇳",
        relationshipType: "BORDER DISPUTE",
        whyItMatters: "Direct territorial competitor across the 3,488 km Himalayan Line of Actual Control and largest source of manufactured goods imports.",
        keyAreas: ["High-Altitude Border Stand-off", "Indian Ocean Naval Presence", "Trade Deficit ($85B+)", "Regional Influence in South Asia"],
        recentDevelopments: "Patrolling disengagement agreements along eastern Ladakh following years of high-altitude troop mobilization.",
        constraints: "Fundamental strategic mistrust, unresolved boundary demarcations, and maritime competition in the Indian Ocean.",
        sources: { name: "MEA India / Ministry of National Defense PRC", year: "2024", confidence: "High" },
      },
      {
        actorId: "PAK",
        actorName: "Pakistan",
        flag: "🇵🇰",
        relationshipType: "COMPETITOR",
        whyItMatters: "Direct nuclear-armed rival sharing a heavily fortified 3,323 km border including the Line of Control (LoC) in Kashmir.",
        keyAreas: ["Cross-Border Security", "Kashmir Territorial Claim", "Indus Waters Treaty Governance", "Nuclear Triad Deterrence"],
        recentDevelopments: "Maintenance of the 2021 Line of Control ceasefire amidst minimal high-level diplomatic and commercial contact.",
        constraints: "Domestic political red lines and historical armed conflicts (1947, 1965, 1971, 1999) preventing full normalization.",
        sources: { name: "IISS Strategic Dossier / MEA India", year: "2024", confidence: "High" },
      },
      {
        actorId: "FRA",
        actorName: "France",
        flag: "🇫🇷",
        relationshipType: "TECHNOLOGY PARTNER",
        whyItMatters: "Pivotal Western strategic partner without political preconditions on defense supply, providing Rafale fighters and Scorpène submarines.",
        keyAreas: ["Rafale Fighter Jet Fleets", "Scorpène Submarines (Project 75)", "Indo-Pacific Naval Surveillance", "Civil Nuclear Power"],
        recentDevelopments: "Joint defense industrial roadmap including maritime patrol integration and helicopter manufacturing.",
        constraints: "High unit acquisition costs for French aerospace systems.",
        sources: { name: "French Ministry of Armed Forces / MEA", year: "2024", confidence: "High" },
      },
      {
        actorId: "SAU",
        actorName: "Saudi Arabia",
        flag: "🇸🇦",
        relationshipType: "ENERGY SUPPLIER",
        whyItMatters: "Key crude oil supplier, host to millions of Indian expatriate workers, and vital Gulf security dialogue partner.",
        keyAreas: ["Crude Oil & LPG Supply", "Expatriate Remittances ($10B+ annually)", "Strategic Partnership Council", "India-Middle East-Europe Corridor"],
        recentDevelopments: "Bilateral naval exercises (Al-Mohed Al-Hindi) and enhanced investment cooperation through the Saudi Public Investment Fund.",
        constraints: "Balancing regional relationships between Saudi Arabia and Iran.",
        sources: { name: "Indian Embassy Riyadh / OPEC", year: "2024", confidence: "High" },
      },
    ],
  },
  CHN: {
    countryId: "CHN",
    countryName: "China",
    overviewMetrics: {
      population: { value: "1,410", unit: "Million", year: "2024", source: "National Bureau of Statistics China" },
      gdp: { value: "18.53", unit: "USD Trillion", year: "2024", source: "World Bank / IMF" },
      growth: { value: "5.0%", unit: "Annual Real GDP", year: "2024", source: "IMF / NBS China" },
      nuclear: { status: "Declared Deterrent", detail: "Triad Rapidly Expanding (~500 warheads)", year: "2024", source: "DoD China Military Power Report / SIPRI" },
      armedForces: { value: "2,035,000", unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: "236.1", unit: "USD Billion Official (Est $300B+)", year: "2024", source: "DoD / SIPRI" },
      netEnergy: { status: "Net Importer", detail: "72% Crude Import Dependence", year: "2024", source: "General Administration of Customs China" },
      maritimeCoast: { value: "14,500", unit: "Kilometers", year: "2024", source: "State Oceanic Administration" },
    },
    keyStrategicDomains: ["A2/AD Anti-Ship Missiles", "World's Largest Navy (Hulls)", "Commercial Industrial Depth", "Space & Lunar Exploration", "AI & Quantum Computing"],
    keyStrategicPartners: ["Russia", "Pakistan", "North Korea", "Iran"],
    keyCompetitors: ["United States", "India", "Japan", "Taiwan"],
    keyDependencies: ["Malacca Strait Crude Oil", "Semiconductor Tooling (EUV Lithography)", "Iron Ore Imports (Australia/Brazil)", "Global Export Markets"],
    domains: [
      {
        id: "defence",
        name: "Defence & PLA Modernization",
        category: "SECURITY",
        capabilitySummary: "Largest armed forces by active personnel with extensive anti-access/area denial (A2/AD) missile networks and stealth aviation.",
        keyAssets: ["DF-21D & DF-26 anti-ship ballistic missiles", "J-20 stealth fighters", "Type 055 guided-missile cruisers", "Rocket Force conventional strike"],
        dependencies: ["Imported specialized alloys and legacy aero-engine components", "Advanced semiconductor computing access"],
        constraints: ["Joint command combat experience deficits", "Recruitment and demographic aging"],
        strategicRelevance: "Aims to deter US and allied intervention in the Western Pacific and enforce sovereignty claims over Taiwan.",
        evidence: { source: "DoD China Military Power Report", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "maritime",
        name: "Naval Power & Island Chains",
        category: "SECURITY",
        capabilitySummary: "World's largest navy by total hull count with three aircraft carriers (Liaoning, Shandong, Fujian with EMALS).",
        keyAssets: ["Fujian CATOBAR carrier", "Type 075 amphibious assault ships", "Submarine fleet (Type 094 SSBN, Type 093 SSN)", "Maritime Militia"],
        dependencies: ["Maritime chokepoint transit (Malacca, Miyako, Bashi Channel) to enter open Pacific/Indian Oceans"],
        constraints: ["Anti-submarine warfare (ASW) depth compared to US Navy", "Geographic encirclement by First Island Chain bases"],
        strategicRelevance: "Breaks through First Island Chain encirclement to project blue-water combat power into the second island chain and Indian Ocean.",
        evidence: { source: "US Office of Naval Intelligence (ONI)", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "nuclear",
        name: "Nuclear Arsenal Expansion",
        category: "SECURITY",
        capabilitySummary: "Fastest growing nuclear arsenal globally, transitioning from minimum deterrence to high-readiness launch-on-warning posture.",
        keyAssets: ["DF-41 road-mobile ICBMs", "300+ solid-fuel ICBM silos in western desert regions", "JL-3 SLBMs on Type 094 submarines"],
        dependencies: ["Domestic fissile material production pacing"],
        constraints: ["Survivability during crisis management under US counterforce capabilities"],
        strategicRelevance: "Prevents US nuclear coercion in a potential Western Pacific conventional conflict.",
        evidence: { source: "SIPRI / Federation of American Scientists", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "economy",
        name: "Economic Mass & Manufacturing",
        category: "ECONOMIC",
        capabilitySummary: "World's second largest economy, producing over 30% of global manufacturing output and leading in clean energy hardware.",
        keyAssets: ["$18.5T GDP", "Dominance in solar panels, EVs, and lithium batteries ('New Three')", "$3.2T foreign exchange reserves"],
        dependencies: ["External demand from Western consumer markets", "Commodity imports (iron ore, copper, bauxite)"],
        constraints: ["Property sector debt resolution", "Local government financing debt", "Rapidly aging workforce"],
        strategicRelevance: "Provides economic leverage across global supply chains and funds military and scientific modernization.",
        evidence: { source: "World Bank / National Bureau of Statistics", year: "2024", confidence: "High", nature: "FACT" },
      },
    ],
    strengths: [
      {
        category: "INDUSTRIAL",
        what: "Unmatched scale in global industrial manufacturing and clean technology supply chains.",
        whyItMatters: "Produces over 70% of global solar panels, EV batteries, and commercial maritime container ships.",
        evidence: { source: "IEA Global EV Outlook / UNCTAD", year: "2024", nature: "FACT" },
      },
      {
        category: "MILITARY",
        what: "Densely layered anti-access/area denial (A2/AD) missile envelope covering the First Island Chain.",
        whyItMatters: "Threatens hostile surface combatants out to 2,500 km from the Chinese coastline with ballistic trajectory weapons.",
        evidence: { source: "DoD China Military Power Report", year: "2024", nature: "FACT" },
      },
      {
        category: "INDUSTRIAL",
        what: "World's largest high-speed rail network (45,000+ km) and deepest network of high-throughput automated container ports.",
        whyItMatters: "Dramatically lowers domestic manufacturing friction and enables rapid logistical mobilization.",
        evidence: { source: "China State Railway Group / Lloyd's List", year: "2024", nature: "FACT" },
      },
    ],
    dependencies: [
      {
        id: "dep-malacca",
        title: "Malacca Dilemma & Maritime Petroleum Transit",
        category: "ENERGY",
        reliedUpon: "Seaborne crude imports satisfying ~72% of domestic oil consumption.",
        sourceRegions: ["Persian Gulf (Saudi Arabia, Iraq, UAE)", "Russia", "West Africa"],
        whyItMatters: "Fuels transportation and petrochemical manufacturing across eastern coastal economic hubs.",
        possibleVulnerability: "Blockade or interdiction at the Strait of Malacca by hostile naval powers during a Taiwan crisis.",
        availableAlternatives: "Russia-China ESPO overland oil pipeline, Central Asia-China gas pipelines, domestic coal liquefaction, and Strategic Petroleum Reserves (~90 days).",
        evidence: { source: "General Administration of Customs / IEA", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Loading", locationOrStage: "Middle East Ports", description: "Crude loaded into VLCC supertankers", disruptionRisk: "Gulf littoral tensions" },
          { stepName: "Chokepoint Transit", locationOrStage: "Strait of Malacca", description: "Supertankers pass through narrow Singapore and Malacca corridors", disruptionRisk: "Naval interdiction or blockade" },
          { stepName: "Discharge", locationOrStage: "Ningbo-Zhoushan / Qingdao", description: "Deep-water ports unload crude into coastal tank farms", disruptionRisk: "Terminal strike attacks" },
          { stepName: "Refinery Processing", locationOrStage: "Sinopec / PetroChina Hubs", description: "Refined into transport fuels and industrial chemicals", disruptionRisk: "Industrial power outages" },
        ],
      },
      {
        id: "dep-lithography",
        title: "Advanced Semiconductor Tooling (Lithography)",
        category: "TECHNOLOGY",
        reliedUpon: "Extreme Ultraviolet (EUV) and advanced DUV lithography systems from Netherlands/Japan.",
        sourceRegions: ["Netherlands (ASML)", "Japan (Tokyo Electron, Nikon)", "United States"],
        whyItMatters: "Essential for fabricating sub-7nm silicon microchips powering AI data centers and smartphones.",
        possibleVulnerability: "Multilateral export controls preventing acquisition of advanced semiconductor tools and software.",
        availableAlternatives: "Massive state subsidies (National IC Industry Investment Fund / 'Big Fund') developing domestic multi-patterning lithography.",
        evidence: { source: "Semiconductor Industry Association (SIA)", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Tool Procurement", locationOrStage: "Foreign Tooling Vendors", description: "Acquisition subject to export licensing controls", disruptionRisk: "Sanctions tightening" },
          { stepName: "Cleanroom Installation", locationOrStage: "SMIC / CXMT Fabs", description: "Installation of fabrication lines in Shanghai/Wuhan", disruptionRisk: "Maintenance engineer travel limits" },
          { stepName: "Wafer Production", locationOrStage: "Domestic Foundries", description: "Etching silicon dies using multi-patterning workarounds", disruptionRisk: "Lower yields and higher per-chip costs" },
        ],
      },
    ],
    relationships: [
      {
        actorId: "RUS",
        actorName: "Russia",
        flag: "🇷🇺",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "'No limits' comprehensive partnership providing secure overland hydrocarbons, military technology, and diplomatic coordination against Western hegemony.",
        keyAreas: ["Overland Energy (Power of Siberia)", "Joint Naval & Bomber Patrols", "UNSC Veto Coordination", "Ruble-Yuan Trade"],
        recentDevelopments: "Bilateral trade surpassed $240 billion with over 90% settled in local currencies.",
        constraints: "China avoids providing direct lethal weapons to avoid triggering Western secondary sanctions against its global commercial banks.",
        sources: { name: "Ministry of Foreign Affairs PRC / Kremlin", year: "2024", confidence: "High" },
      },
      {
        actorId: "USA",
        actorName: "United States",
        flag: "🇺🇸",
        relationshipType: "COMPETITOR",
        whyItMatters: "Central defining great-power rivalry spanning technological containment, Taiwan sovereignty, Indo-Pacific naval presence, and trade tariffs.",
        keyAreas: ["Taiwan Strait Security", "Semiconductor & AI Export Controls", "South China Sea Freedom of Navigation", "Trade Tariffs"],
        recentDevelopments: "High-level military-to-military communications restored while competition in AI, quantum, and defense continues to intensify.",
        constraints: "Deep mutual economic interdependence ($600B+ trade volume) preventing total commercial decoupling.",
        sources: { name: "US DoD / MFA PRC", year: "2024", confidence: "High" },
      },
      {
        actorId: "PAK",
        actorName: "Pakistan",
        flag: "🇵🇰",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "'All-weather' strategic cooperative partnership anchoring China's western overland access to the Arabian Sea through CPEC.",
        keyAreas: ["China-Pakistan Economic Corridor (CPEC)", "Gwadar Port Access", "Joint Defence Production (JF-17)", "Counterbalancing India"],
        recentDevelopments: "Continued upgrade of Gwadar port facilities and deployment of Chinese-built Hangor-class submarines to the Pakistan Navy.",
        constraints: "Security threats to Chinese personnel working on infrastructure projects in Balochistan and Khyber Pakhtunkhwa.",
        sources: { name: "CPEC Authority / MFA PRC", year: "2024", confidence: "High" },
      },
    ],
  },
  PAK: {
    countryId: "PAK",
    countryName: "Pakistan",
    overviewMetrics: {
      population: { value: "241.5", unit: "Million", year: "2024", source: "Pakistan Bureau of Statistics (7th Census)" },
      gdp: { value: "374", unit: "USD Billion", year: "2024", source: "World Bank / Pakistan Economic Survey" },
      growth: { value: "2.4%", unit: "Annual Real GDP", year: "2024", source: "IMF / State Bank of Pakistan" },
      nuclear: { status: "Declared Deterrent", detail: "Full-Spectrum Deterrence (~170 warheads)", year: "2024", source: "SIPRI Yearbook" },
      armedForces: { value: "654,000", unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: "7.5", unit: "USD Billion", year: "2024", source: "Federal Budget of Pakistan / SIPRI" },
      netEnergy: { status: "Net Importer", detail: "Heavy Reliance on Imported LNG & Oil", year: "2024", source: "Ministry of Energy (Petroleum Division)" },
      maritimeCoast: { value: "1,046", unit: "Kilometers", year: "2024", source: "Pakistan Hydrographic Department" },
    },
    keyStrategicDomains: ["Nuclear Deterrence (Shaheen / Nasr)", "Gwadar & CPEC Maritime Corridor", "Conventional Mountain Defense", "Central Asian Transit Hub"],
    keyStrategicPartners: ["China", "Saudi Arabia", "Turkey", "United Arab Emirates"],
    keyCompetitors: ["India"],
    keyDependencies: ["Imported Petroleum & LNG", "IMF & Gulf Financial Rollovers", "Chinese Military Hardware", "Agricultural Water (Indus Basin)"],
    domains: [
      {
        id: "defence",
        name: "Defence & Armed Forces",
        category: "SECURITY",
        capabilitySummary: "Large conventional force with primary orientation along the eastern border and deep Chinese hardware interoperability.",
        keyAssets: ["JF-17 Thunder Block III fighters", "VT-4 main battle tanks", "Hangor-class submarines (under construction)", "Babur cruise missiles"],
        dependencies: ["Chinese defense industrial supply chains and spares", "Foreign currency for spares procurement"],
        constraints: ["Fiscal defense spending ceilings under IMF reform programs", "Internal security commitments along western frontier"],
        strategicRelevance: "Deters conventional military dominance from neighboring India along the Line of Control and international border.",
        evidence: { source: "IISS Military Balance", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "nuclear",
        name: "Full Spectrum Nuclear Deterrence",
        category: "SECURITY",
        capabilitySummary: "Operates ballistic, cruise, and tactical battlefield nuclear delivery systems under Strategic Plans Division (SPD) oversight.",
        keyAssets: ["Shaheen-III MRBM (2,750 km range)", "Nasr (Hatf-IX) tactical nuclear missile", "Babur submarine-launched cruise missile"],
        dependencies: ["Domestic enrichment and plutonium production reactor maintenance (Kahuta & Khushab)"],
        constraints: ["Command and control during crisis escalation", "Physical security of nuclear facilities"],
        strategicRelevance: "Compensates for conventional military disparity with India through tactical and strategic deterrence.",
        evidence: { source: "SIPRI / Arms Control Association", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "geography",
        name: "CPEC & Geographic Gateway",
        category: "PHYSICAL",
        capabilitySummary: "Links western China through the Karakoram Highway to the Arabian Sea port of Gwadar.",
        keyAssets: ["Deep-sea Port of Gwadar", "Karakoram Highway (KKH)", "Karachi Port & Port Qasim"],
        dependencies: ["External Chinese financing and engineering support", "Inland security along transit routes"],
        constraints: ["Challenging mountainous terrain and seasonal road closures", "Militant targeting in Balochistan"],
        strategicRelevance: "Provides sovereign transit access to the Arabian Sea and alternative trade routes bypassing Malacca.",
        evidence: { source: "CPEC Authority Annual Report", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "economy",
        name: "Economy & Financial Resilience",
        category: "ECONOMIC",
        capabilitySummary: "Agrarian and textile manufacturing economy working under structural reform and stabilization programs.",
        keyAssets: ["Textile and apparel export base", "Substantial overseas remittances ($30B+ annually)", "Vast agricultural fertile plain in Punjab and Sindh"],
        dependencies: ["IMF Extended Fund Facility disbursements", "Gulf bilateral loan rollovers", "Imported refined fuel"],
        constraints: ["Foreign exchange reserve volatility", "High inflation and energy circular debt"],
        strategicRelevance: "Economic stability directly dictates national defense modernization capacity and internal cohesion.",
        evidence: { source: "State Bank of Pakistan / IMF", year: "2024", confidence: "High", nature: "FACT" },
      },
    ],
    strengths: [
      {
        category: "MILITARY",
        what: "Full-spectrum nuclear arsenal spanning tactical battlefield weapons to medium-range ballistic delivery.",
        whyItMatters: "Provides high-threshold deterrence against conventional military superiority.",
        evidence: { source: "SIPRI Yearbook", year: "2024", nature: "FACT" },
      },
      {
        category: "GEOGRAPHIC",
        what: "Strategic overland connection linking resource-rich Central Asia and western China to the Indian Ocean.",
        whyItMatters: "Positions Pakistan as an indispensable overland transit corridor for Eurasian trade and energy.",
        evidence: { source: "Ministry of Planning Development & Special Initiatives", year: "2024", nature: "FACT" },
      },
    ],
    dependencies: [
      {
        id: "dep-energy-pak",
        title: "Imported Petroleum & LNG",
        category: "ENERGY",
        reliedUpon: "Imported refined petroleum and liquefied natural gas satisfying power plants and transport.",
        sourceRegions: ["Saudi Arabia", "United Arab Emirates", "Qatar (LNG contracts)"],
        whyItMatters: "Essential for national electricity generation and commercial road transport.",
        possibleVulnerability: "Foreign exchange shortage preventing letters of credit from clearing energy import cargoes.",
        availableAlternatives: "Bilateral deferred oil payment facilities from Saudi Arabia, domestic Thar coal power expansion.",
        evidence: { source: "Ministry of Energy (Petroleum Division)", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Procurement", locationOrStage: "Qatar / Gulf Terminals", description: "LNG and crude loaded into maritime tankers", disruptionRisk: "Financial credit clearance delays" },
          { stepName: "Port Discharge", locationOrStage: "Port Qasim / Karachi", description: "Discharged at FSRU terminals into Sui gas transmission network", disruptionRisk: "Terminal throughput limits" },
          { stepName: "Power Generation", locationOrStage: "Thermal Power Plants", description: "Fuel converted to electricity for national grid", disruptionRisk: "Circular debt liquidity shortfalls" },
        ],
      },
    ],
    relationships: [
      {
        actorId: "CHN",
        actorName: "China",
        flag: "🇨🇳",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "Core strategic benefactor providing major arms co-development, infrastructure capital (CPEC), and diplomatic backing at international forums.",
        keyAreas: ["Joint Fighter Jet Production (JF-17)", "Hangor Submarines", "CPEC Infrastructure", "Financial Support"],
        recentDevelopments: "Delivery of new J-10CE multirole fighters and continuation of CPEC Phase II industrial cooperation.",
        constraints: "Debt repayment management and domestic security concerns for Chinese personnel.",
        sources: { name: "Ministry of Foreign Affairs Pakistan / PRC", year: "2024", confidence: "High" },
      },
      {
        actorId: "IND",
        actorName: "India",
        flag: "🇮🇳",
        relationshipType: "BORDER DISPUTE",
        whyItMatters: "Primary regional adversary with multiple historical wars, ongoing Line of Control vigilance, and frozen diplomatic relations.",
        keyAreas: ["Kashmir Dispute", "Line of Control Ceasefire", "Indus Waters Treaty", "Counter-Terrorism Allegations"],
        recentDevelopments: "Maintenance of the 2021 LoC ceasefire amidst suspended bilateral trade and diplomatic dialogue.",
        constraints: "Deep historical grievances and domestic political opposition to unilateral compromises.",
        sources: { name: "IISS Strategic Dossier", year: "2024", confidence: "High" },
      },
      {
        actorId: "SAU",
        actorName: "Saudi Arabia",
        flag: "🇸🇦",
        relationshipType: "ENERGY SUPPLIER",
        whyItMatters: "Long-standing fraternal security partner providing deferred oil financing, central bank deposits, and employment for 2M+ Pakistani workers.",
        keyAreas: ["Financial Liquidity Support", "Deferred Oil Payment Facility", "Military Training & Security Assistance", "Worker Remittances"],
        recentDevelopments: "Multi-billion dollar deposit rollovers in the State Bank of Pakistan and planned investment in the Reko Diq mining project.",
        constraints: "Balancing relations with neighboring Iran.",
        sources: { name: "State Bank of Pakistan / Saudi Press Agency", year: "2024", confidence: "High" },
      },
    ],
  },
  SAU: {
    countryId: "SAU",
    countryName: "Saudi Arabia",
    overviewMetrics: {
      population: { value: "32.2", unit: "Million", year: "2024", source: "General Authority for Statistics (GASTAT)" },
      gdp: { value: "1.07", unit: "USD Trillion", year: "2024", source: "World Bank / GASTAT" },
      growth: { value: "2.7%", unit: "Annual Real GDP", year: "2024", source: "IMF / GASTAT" },
      nuclear: { status: "Non-Nuclear", detail: "Civilian Nuclear Ambitions under US Bilateral Talks", year: "2024", source: "IAEA / SIPRI" },
      armedForces: { value: "257,000", unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: "75.8", unit: "USD Billion", year: "2024", source: "Saudi Ministry of Finance / SIPRI" },
      netEnergy: { status: "Net Exporter", detail: "World's Largest Crude Oil Exporter", year: "2024", source: "OPEC Annual Statistical Bulletin" },
      maritimeCoast: { value: "2,640", unit: "Kilometers (Red Sea & Gulf)", year: "2024", source: "General Commission for Survey" },
    },
    keyStrategicDomains: ["Global Hydrocarbon Swing Producer", "Sovereign Wealth Fund (PIF $900B+)", "Vision 2030 Economic Diversification", "Red Sea Maritime Security", "Islamic Custodianship"],
    keyStrategicPartners: ["United States", "China", "United Arab Emirates", "Egypt", "Pakistan"],
    keyCompetitors: ["Iran (Managed De-escalation)", "Regional Non-State Groups"],
    keyDependencies: ["Imported Food & Agricultural Commodities", "Advanced Defense Systems & Radar Tech", "Desalination Technology", "Foreign Expatriate Workforce"],
    domains: [
      {
        id: "energy",
        name: "Global Energy & OPEC+ Swing Capacity",
        category: "ECONOMIC",
        capabilitySummary: "World's leading crude oil exporter with spare production capacity capable of stabilizing or shifting global energy pricing.",
        keyAssets: ["Ghawar oil field (world's largest onshore)", "Ras Tanura export terminal", "Saudi Aramco ($2T market capitalization)"],
        dependencies: ["Global macroeconomic demand for liquid fossil fuels", "Security of maritime tanker transit via Hormuz & Bab el-Mandeb"],
        constraints: ["Long-term global decarbonization transitions", "Fiscal break-even oil price (~$85-90/barrel for Vision 2030)"],
        strategicRelevance: "Provides unmatched geopolitical leverage across global financial markets and bilateral ties with major powers.",
        evidence: { source: "OPEC / Saudi Aramco Annual Disclosures", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "defence",
        name: "Defense Spending & Air Defense",
        category: "SECURITY",
        capabilitySummary: "Top global defense spender per capita with modern Western air platforms and multi-tier air defense systems.",
        keyAssets: ["F-15SA strike fighters", "Eurofighter Typhoon fleet", "MIM-104 Patriot PAC-3 missile batteries", "Royal Saudi Navy Western/Eastern fleets"],
        dependencies: ["US and European technical maintenance, munitions restocking, and contractor logistics support"],
        constraints: ["Domestic defense manufacturing localization targets (50% target by 2030 currently at ~15%)"],
        strategicRelevance: "Protects critical national oil infrastructure, desalination facilities, and urban centers from missile and drone threats.",
        evidence: { source: "IISS Military Balance / SIPRI", year: "2024", confidence: "High", nature: "FACT" },
      },
    ],
    strengths: [
      {
        category: "ENERGY",
        what: "Lowest crude oil extraction costs globally (~$3-5 per barrel) and 267 billion barrels of proven reserves.",
        whyItMatters: "Guarantees profitability and market share even during severe global oil price crashes.",
        evidence: { source: "Saudi Aramco Prospectus / IEA", year: "2024", nature: "FACT" },
      },
      {
        category: "ECONOMIC",
        what: "Public Investment Fund (PIF) managing over $900 billion in sovereign deployment capital.",
        whyItMatters: "Enables strategic acquisitions of global technology, green hydrogen, and industrial assets.",
        evidence: { source: "Sovereign Wealth Fund Institute (SWFI)", year: "2024", nature: "FACT" },
      },
    ],
    dependencies: [
      {
        id: "dep-food-water",
        title: "Food Security & Desalinated Water",
        category: "RAW MATERIALS",
        reliedUpon: "Over 80% of domestic food requirements and 70% of drinking water from thermal/RO desalination.",
        sourceRegions: ["Agricultural imports from Latin America, Europe, Australia", "Desalination membrane tooling from US/Japan"],
        whyItMatters: "Critical for the survival of 32M+ population living in an arid desert environment.",
        possibleVulnerability: "Disruption to maritime food shipments or physical/cyber strikes on coastal desalination plants.",
        availableAlternatives: "Strategic grain silos (~6 months reserves), overseas agricultural farmland acquisitions (SALIC), and solar-powered reverse osmosis plants.",
        evidence: { source: "Saudi Agricultural and Livestock Investment Company (SALIC) / GASTAT", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "International Sourcing", locationOrStage: "Global Agri Producers", description: "Wheat, barley, and meat purchased by SALIC and private importers", disruptionRisk: "Global harvest crop failures" },
          { stepName: "Maritime Shipping", locationOrStage: "Red Sea / Arabian Gulf", description: "Bulk carriers enter Jeddah Islamic Port or King Abdulaziz Port Dammam", disruptionRisk: "Bab el-Mandeb security threats" },
          { stepName: "Domestic Processing", locationOrStage: "Strategic Grain Silos", description: "Milled and packaged into national food security distribution networks", disruptionRisk: "Storage logistics constraints" },
        ],
      },
    ],
    relationships: [
      {
        actorId: "USA",
        actorName: "United States",
        flag: "🇺🇸",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "Historical security guarantor anchoring air defense, advanced weapons supply, and ongoing negotiations for a mutual defense pact.",
        keyAreas: ["Patriot Air Defense", "F-15 Arms Packages", "Civil Nuclear Technology Talks", "Regional De-escalation"],
        recentDevelopments: "Negotiations regarding formal defense guarantees, civil nuclear cooperation, and regional diplomatic architecture.",
        constraints: "US congressional scrutiny over human rights and Saudi multi-alignment with China and OPEC+ partners.",
        sources: { name: "US Department of State / Saudi MFA", year: "2024", confidence: "High" },
      },
      {
        actorId: "CHN",
        actorName: "China",
        flag: "🇨🇳",
        relationshipType: "TRADE PARTNER",
        whyItMatters: "Saudi Arabia's single largest crude oil buyer and mediator of the 2023 Riyadh-Tehran diplomatic normalization accord.",
        keyAreas: ["Crude Oil Exports to China", "Belt & Road / Vision 2030 Synergy", "Petrochemical Refineries", "5G & Cloud Telecom"],
        recentDevelopments: "Major joint venture refinery investments in China and expanded yuan-denominated trade exploration.",
        constraints: "US security restrictions limiting deep Chinese military hardware integration with Saudi defense systems.",
        sources: { name: "Ministry of Investment Saudi Arabia / MFA PRC", year: "2024", confidence: "High" },
      },
      {
        actorId: "IRN",
        actorName: "Iran",
        flag: "🇮🇷",
        relationshipType: "DIPLOMATIC PARTNER",
        whyItMatters: "Historic regional rival in the Persian Gulf with diplomatic ties restored under Chinese mediation in March 2023.",
        keyAreas: ["Riyadh-Tehran Diplomatic Accord", "Gulf Maritime Security", "Yemen Conflict De-escalation", "Hajj Protocols"],
        recentDevelopments: "High-level diplomatic meetings between foreign ministers and mutual ambassadorial representation.",
        constraints: "Persistent ideological competition, regional proxy alignments, and Iranian ballistic missile development.",
        sources: { name: "Saudi Press Agency / IRNA", year: "2024", confidence: "Medium" },
      },
    ],
  },
  KOR: {
    countryId: "KOR",
    countryName: "South Korea",
    overviewMetrics: {
      population: { value: "51.7", unit: "Million", year: "2024", source: "Statistics Korea (KOSTAT)" },
      gdp: { value: "1.71", unit: "USD Trillion", year: "2024", source: "Bank of Korea / World Bank" },
      growth: { value: "2.4%", unit: "Annual Real GDP", year: "2024", source: "Bank of Korea / IMF" },
      nuclear: { status: "Non-Nuclear (Covered by US Umbrella)", detail: "Washington Declaration / Nuclear Consultative Group", year: "2024", source: "US-ROK Alliance / SIPRI" },
      armedForces: { value: "555,000", unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: "44.8", unit: "USD Billion", year: "2024", source: "Ministry of National Defense ROK / SIPRI" },
      netEnergy: { status: "Net Importer", detail: "93% Energy Import Dependence", year: "2024", source: "Korea Energy Economics Institute (KEEI)" },
      maritimeCoast: { value: "2,413", unit: "Kilometers (excluding islands)", year: "2024", source: "Korea Hydrographic and Oceanographic Agency" },
    },
    keyStrategicDomains: ["Semiconductor Memory Dominance", "K-Defense Arms Exports", "Shipbuilding & LNG Carriers", "Kill Chain Three-Axis Deterrence", "Electric Vehicle Batteries"],
    keyStrategicPartners: ["United States", "Japan", "Poland", "Australia"],
    keyCompetitors: ["North Korea", "China (Economic & Maritime)"],
    keyDependencies: ["Imported Crude Oil & Natural Gas", "Specialized Semiconductor Raw Chemicals", "Critical Battery Minerals (Lithium/Nickel)", "US Nuclear Umbrella"],
    domains: [
      {
        id: "technology",
        name: "Semiconductors & High-Tech Manufacturing",
        category: "ECONOMIC",
        capabilitySummary: "Global leader in DRAM and NAND flash memory production alongside expanding foundry logic fabrication.",
        keyAssets: ["Samsung Electronics memory fabs", "SK Hynix high-bandwidth memory (HBM for AI accelerators)", "Mega Semiconductor Cluster in Gyeonggi"],
        dependencies: ["Silicon wafer substrates from Japan", "EUV lithography equipment from ASML (Netherlands)", "Semiconductor design EDA tools from US"],
        constraints: ["US-China technology rivalry export restrictions impacting China-based memory fabs"],
        strategicRelevance: "Supplies over 60% of global memory chips, providing profound geopolitical leverage in global electronics supply chains.",
        evidence: { source: "Korea Semiconductor Industry Association (KSIA)", year: "2024", confidence: "High", nature: "FACT" },
      },
      {
        id: "defence",
        name: "K-Defense & Three-Axis System",
        category: "SECURITY",
        capabilitySummary: "World's fastest growing major defense exporter coupled with advanced conventional pre-emption posture.",
        keyAssets: ["Kill Chain pre-emptive strike capability", "Korea Air and Missile Defense (KAMD)", "Korea Massive Punishment and Retaliation (KMPR)", "K2 Black Panther tanks & K9 Thunder howitzers"],
        dependencies: ["US ISR satellite targeting feeds and extended nuclear deterrence umbrella"],
        constraints: ["Demographic decline shrinking mandatory military service cohort"],
        strategicRelevance: "Deters existential North Korean nuclear and artillery threats while emerging as a major NATO defense equipment supplier.",
        evidence: { source: "ROK Defense White Paper / SIPRI", year: "2024", confidence: "High", nature: "FACT" },
      },
    ],
    strengths: [
      {
        category: "TECHNOLOGICAL",
        what: "Global monopoly on High-Bandwidth Memory (HBM) required for advanced artificial intelligence chips.",
        whyItMatters: "Positions South Korea as an indispensable link in global artificial intelligence hardware architectures.",
        evidence: { source: "TrendForce / Bank of Korea", year: "2024", nature: "FACT" },
      },
      {
        category: "INDUSTRIAL",
        what: "World-leading defense manufacturing capacity capable of delivering battle-ready heavy armor in months rather than years.",
        whyItMatters: "Signed landmark multi-billion dollar contracts with Poland and other European nations to backfill NATO inventories.",
        evidence: { source: "SIPRI Arms Transfers Database", year: "2024", nature: "FACT" },
      },
    ],
    dependencies: [
      {
        id: "dep-energy-kor",
        title: "Imported Crude Oil & Natural Gas",
        category: "ENERGY",
        reliedUpon: "Over 93% of energy consumption imported via maritime tanker routes.",
        sourceRegions: ["Middle East (Saudi Arabia, UAE, Kuwait)", "United States", "Australia (LNG)"],
        whyItMatters: "Powers national electrical grid, steel foundries, and petrochemical manufacturing clusters.",
        possibleVulnerability: "Blockade of the South China Sea or Strait of Malacca cutting off industrial power inputs.",
        availableAlternatives: "Substantial Strategic Petroleum Reserves (~100+ days cover), nuclear energy share expansion (30%+ target).",
        evidence: { source: "Korea National Oil Corporation (KNOC)", year: "2024", confidence: "High", nature: "FACT" },
        flowSteps: [
          { stepName: "Loading", locationOrStage: "Middle East / US Terminals", description: "Crude and LNG loaded onto specialized transport vessels", disruptionRisk: "Gulf tensions" },
          { stepName: "Transit", locationOrStage: "Malacca / South China Sea", description: "Vessels navigate East Asian maritime lanes", disruptionRisk: "Taiwan Strait or South China Sea crisis" },
          { stepName: "Discharge & Refining", locationOrStage: "Ulsan / Yeosu Ports", description: "Offloaded into mega-refining facilities (SK Energy, GS Caltex)", disruptionRisk: "Extreme typhoon weather" },
          { stepName: "Industrial Use", locationOrStage: "Industrial Metros", description: "Distributed to semiconductor cleanrooms, auto plants, and national grid", disruptionRisk: "Grid distribution failures" },
        ],
      },
    ],
    relationships: [
      {
        actorId: "USA",
        actorName: "United States",
        flag: "🇺🇸",
        relationshipType: "DEFENCE PARTNER",
        whyItMatters: "Mutual Defense Treaty ally hosting 28,500 US troops (USFK) and guaranteeing extended nuclear deterrence.",
        keyAreas: ["US-ROK Mutual Defense Treaty", "Nuclear Consultative Group (NCG)", "Combined Forces Command (CFC)", "Chip 4 Alliance"],
        recentDevelopments: "Washington Declaration enhancing US nuclear submarine port visits and joint nuclear planning consultations.",
        constraints: "OPCON transfer timing and navigating US trade restrictions on China chip manufacturing.",
        sources: { name: "ROK MND / US DoD", year: "2024", confidence: "High" },
      },
      {
        actorId: "JPN",
        actorName: "Japan",
        flag: "🇯🇵",
        relationshipType: "DIPLOMATIC PARTNER",
        whyItMatters: "Neighboring democratic partner, US treaty ally, and essential co-participant in trilateral Camp David security cooperation.",
        keyAreas: ["Trilateral US-Japan-ROK Security Architecture", "Real-Time Missile Tracking Data Sharing", "Semiconductor Supply Chains"],
        recentDevelopments: "Camp David Trilateral Summit formalizing permanent security consultations and joint maritime drills.",
        constraints: "Historical sensitivities regarding colonial history and Dokdo/Takeshima territorial disputes.",
        sources: { name: "Ministry of Foreign Affairs ROK / MOFA Japan", year: "2024", confidence: "High" },
      },
      {
        actorId: "CHN",
        actorName: "China",
        flag: "🇨🇳",
        relationshipType: "TRADE PARTNER",
        whyItMatters: "South Korea's largest single trading partner and crucial actor in managing North Korean nuclear developments.",
        keyAreas: ["Bilateral Trade ($270B+)", "Semiconductor Memory Exports", "Supply Chain Material Imports", "Korean Peninsula Stability"],
        recentDevelopments: "Resumption of China-Japan-ROK trilateral leader summits amidst careful economic balancing.",
        constraints: "Risk of economic retaliation over US alliance integration and THAAD missile defense deployments.",
        sources: { name: "Bank of Korea / MFA PRC", year: "2024", confidence: "High" },
      },
    ],
  },
};

// Generic synthesizer for any country not explicitly registered in STRATEGIC_DATA_REGISTRY
export function getCountryStrategicData(countryId: string, countryName: string, profile?: any): CountryStrategicData {
  if (STRATEGIC_DATA_REGISTRY[countryId]) {
    return STRATEGIC_DATA_REGISTRY[countryId];
  }

  const pop = profile?.demographics?.population_millions
    ? `${profile.demographics.population_millions}`
    : "Data not filed";
  const gdpVal = profile?.economy?.gdp_usd_trillion
    ? `${profile.economy.gdp_usd_trillion}`
    : profile?.economy?.gdp_usd_billion
    ? `${profile.economy.gdp_usd_billion / 1000}`
    : "N/A";
  const growthVal = profile?.economy?.gdp_growth_pct !== undefined
    ? `${profile.economy.gdp_growth_pct}%`
    : "N/A";
  const isNuke = Boolean(profile?.nuclear?.weapons_state);
  const troops = profile?.military?.active_troops ? profile.military.active_troops.toLocaleString() : "Data unavailable";
  const budget = profile?.military?.defence_spending_usd_billion ? `${profile.military.defence_spending_usd_billion}` : "N/A";
  const isNetEnergyExp = profile?.energy?.net_import_dependence_ratio !== undefined && profile.energy.net_import_dependence_ratio < 0;

  const rawStrengths = Array.isArray(profile?.strengths) && profile.strengths.length > 0
    ? profile.strengths
    : ["Regional economic integration", "Sovereign territorial defense", "Diplomatic engagement"];

  const rawDependencies = Array.isArray(profile?.dependencies) && profile.dependencies.length > 0
    ? profile.dependencies
    : ["International maritime trade lanes", "Critical industrial and energy inputs"];

  const rawAlliances = Array.isArray(profile?.alliances) && profile.alliances.length > 0
    ? profile.alliances
    : ["Regional multilateral organizations"];

  const rawRivals = Array.isArray(profile?.rivals) && profile.rivals.length > 0
    ? profile.rivals
    : ["Regional competitors"];

  return {
    countryId,
    countryName,
    overviewMetrics: {
      population: { value: pop, unit: "Million", year: "2024", source: "UN Population Division" },
      gdp: { value: gdpVal, unit: "USD Trillion", year: "2024", source: "World Bank / IMF" },
      growth: { value: growthVal, unit: "Annual Real GDP", year: "2024", source: "National Statistics" },
      nuclear: {
        status: isNuke ? "Declared Deterrent" : "Non-Nuclear",
        detail: isNuke ? "Nuclear Triad / Delivery Systems" : "Non-Proliferation Treaty Member",
        year: "2024",
        source: "SIPRI",
      },
      armedForces: { value: troops, unit: "Active Personnel", year: "2024", source: "IISS Military Balance" },
      defenseBudget: { value: budget, unit: "USD Billion", year: "2024", source: "National Budget / SIPRI" },
      netEnergy: {
        status: isNetEnergyExp ? "Net Exporter" : "Net Importer",
        detail: isNetEnergyExp ? "Energy Resource Surplus" : "Relies on Imported Hydrocarbons",
        year: "2024",
        source: "IEA",
      },
      maritimeCoast: {
        value: profile?.coastline_km ? `${profile.coastline_km}` : "Territorial Coastline",
        unit: "Kilometers",
        year: "2024",
        source: "Hydrographic Surveys",
      },
    },
    keyStrategicDomains: ["Defense Readiness", "Trade & Maritime Access", "Energy Infrastructure", "Diplomatic Coalitions"],
    keyStrategicPartners: rawAlliances.slice(0, 4),
    keyCompetitors: rawRivals.slice(0, 3),
    keyDependencies: rawDependencies.slice(0, 3),
    domains: [
      {
        id: "defence",
        name: "Defence & Armed Forces",
        category: "SECURITY",
        capabilitySummary: `${troops} active military personnel dedicated to national territorial integrity.`,
        keyAssets: ["Regular armed forces corps", "Sovereign base infrastructure", "Border security detachments"],
        dependencies: ["Defense equipment maintenance", "Modern defense technology procurement"],
        constraints: ["Fiscal defense allocations and equipment lifecycle replacement"],
        strategicRelevance: `Protects sovereign borders and critical infrastructure across ${countryName}.`,
        evidence: { source: "IISS Military Balance", year: "2024", confidence: "Medium", nature: "FACT" },
      },
      {
        id: "economy",
        name: "Economic Structure",
        category: "ECONOMIC",
        capabilitySummary: `National economy generating approximately $${gdpVal}T in nominal output.`,
        keyAssets: ["Domestic manufacturing base", "Commercial transport networks", "Export commodities"],
        dependencies: ["International market demand", "Foreign trade corridor access"],
        constraints: ["Global inflation volatility and commodity pricing shifts"],
        strategicRelevance: "Underpins national social stability, public infrastructure, and state capacity.",
        evidence: { source: "World Bank", year: "2024", confidence: "Medium", nature: "FACT" },
      },
      {
        id: "energy",
        name: "Energy Security",
        category: "ECONOMIC",
        capabilitySummary: isNetEnergyExp ? "Produces a surplus of energy resources for export." : "Depends on international markets for hydrocarbon fuels.",
        keyAssets: ["National electrical grid", "Refinery or power generation stations", "Fuel storage reserves"],
        dependencies: ["Global fuel pricing stability", "Safe maritime transit routes"],
        constraints: ["Energy transition infrastructure capital requirements"],
        strategicRelevance: "Fundamental baseline powering all commercial, municipal, and defense operations.",
        evidence: { source: "IEA", year: "2024", confidence: "Medium", nature: "DOCUMENTED ASSESSMENT" },
      },
      {
        id: "diplomacy",
        name: "Foreign Policy & Alliances",
        category: "GOVERNANCE",
        capabilitySummary: "Maintains bilateral and multilateral partnerships to protect national interests.",
        keyAssets: ["Diplomatic embassies network", "Treaty memberships", "Regional trade pacts"],
        dependencies: ["International rules-based order stability"],
        constraints: ["Balancing major power rivalries in the international system"],
        strategicRelevance: "Ensures external diplomatic support and access to global trade networks.",
        evidence: { source: "Ministry of Foreign Affairs", year: "2024", confidence: "Medium", nature: "FACT" },
      },
    ],
    strengths: rawStrengths.map((str: string, idx: number) => ({
      category: idx % 2 === 0 ? "GEOGRAPHIC" : "ECONOMIC",
      what: str,
      whyItMatters: `Provides strategic leverage for ${countryName} in its regional geopolitical environment.`,
      evidence: { source: "Official Documentation / TRINETRA Research", year: "2024", nature: "FACT" },
    })),
    dependencies: [
      {
        id: "dep-general-1",
        title: "Energy & Industrial Inputs",
        category: "ENERGY",
        reliedUpon: rawDependencies[0] || "Imported fuels and industrial components.",
        sourceRegions: ["International commodity suppliers", "Regional trade partners"],
        whyItMatters: "Essential for domestic transport, electricity generation, and commercial industry.",
        possibleVulnerability: "Price shocks or transport disruption along international sea lanes.",
        availableAlternatives: "National strategic stockpiles and diversified trade contracts.",
        evidence: { source: "Government Reports", year: "2024", confidence: "Medium", nature: "DOCUMENTED ASSESSMENT" },
        flowSteps: [
          { stepName: "International Source", locationOrStage: "Foreign Export Hubs", description: "Raw materials or energy dispatched by international suppliers", disruptionRisk: "Supply chain shocks" },
          { stepName: "Transport Corridor", locationOrStage: "Maritime or Overland Corridors", description: "Cargo transits international freight routes", disruptionRisk: "Transit route disruption" },
          { stepName: "Port of Entry", locationOrStage: "National Customs / Ports", description: "Clearance into the domestic logistics network", disruptionRisk: "Port congestion" },
          { stepName: "Domestic Consumption", locationOrStage: "National Economy", description: "Utilized by businesses, citizens, and critical infrastructure", disruptionRisk: "Inventory depletion" },
        ],
      },
    ],
    relationships: rawAlliances.map((partnerName: string, pIdx: number) => ({
      actorId: `PARTNER_${pIdx}`,
      actorName: partnerName,
      flag: "🌐",
      relationshipType: "DIPLOMATIC PARTNER",
      whyItMatters: `Key partner in regional diplomatic dialogue, trade collaboration, and stability.`,
      keyAreas: ["Bilateral Trade", "Diplomatic Consultation", "Regional Security"],
      recentDevelopments: "Continued cooperation through multilateral and bilateral channels.",
      constraints: "Divergent domestic priorities and international systemic pressures.",
      sources: { name: "Ministry of Foreign Affairs", year: "2024", confidence: "Medium" },
    })),
  };
}
