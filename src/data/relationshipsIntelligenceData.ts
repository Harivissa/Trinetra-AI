// TRINETRA AI — Global Geopolitical Relationship Graph & Bilateral Intelligence
// Models nuanced, multidimensional relationships between sovereign states.

export interface BilateralRelationship {
  id: string; // e.g. "REL-IND-CHN"
  pair: [string, string]; // e.g. ["IND", "CHN"]
  countryA: { id: string; name: string; flag: string };
  countryB: { id: string; name: string; flag: string };
  primaryClassification:
    | "Complex Strategic Competition with Managed Coexistence"
    | "Comprehensive Global Strategic Partnership"
    | "Special & Privileged Strategic Partnership"
    | "Structural Adversarial Rivalry & Border Contest"
    | "Asymmetric Economic Interdependence & Strategic Caution"
    | "Transactional Multipolar Alignment";
  historicalBackground: string;
  currentStatus: string;
  majorCooperationAreas: {
    area: string;
    description: string;
    institutionOrForum?: string;
  }[];
  majorFrictionAreas: {
    area: string;
    description: string;
    riskLevel: "HIGH" | "MODERATE" | "LOW";
  }[];
  economicDimensions: {
    bilateralTradeVolumeUsd: string;
    tradeBalanceDirection: string;
    keyTradeCommodities: string[];
    investmentStatus: string;
  };
  securityDimensions: {
    defenceDialogueLevel: string;
    jointExercises: string[];
    armsTransfersOrRestrictions: string;
    borderOrMaritimeSecurityMechanism: string;
  };
  strategicSignificance: string;
  relevantEventIds: string[];
  sourceId: string;
  lastUpdated: string;
  confidence: "High" | "Moderate" | "Documented";
}

export const BILATERAL_RELATIONSHIPS_DATA: BilateralRelationship[] = [
  {
    id: "REL-IND-CHN",
    pair: ["IND", "CHN"],
    countryA: { id: "IND", name: "India", flag: "🇮🇳" },
    countryB: { id: "CHN", name: "People's Republic of China", flag: "🇨🇳" },
    primaryClassification: "Complex Strategic Competition with Managed Coexistence",
    historicalBackground: "Relations are defined by the unresolved 3,488 km boundary contested since the 1962 Sino-Indian War. Decades of confidence-building mechanisms (1993, 1996, 2005) were disrupted by the 2020 Galwan Valley standoff, leading to heavy military mobilization along the Line of Actual Control (LAC). In late 2024, both sides reached a formal patrolling agreement restoring Depsang and Demchok patrol rights.",
    currentStatus: "Calibrated stabilization and disengagement along frontlines, accompanied by cautious resumption of political dialogue. Structural competition persists across South Asia and the Indian Ocean, while bilateral merchandise trade remains high.",
    majorCooperationAreas: [
      {
        area: "Multilateral Coordination in Non-Western Formats",
        description: "Active joint participation in BRICS and Shanghai Cooperation Organisation (SCO) advocating reform of international financial institutions and localized currency clearing.",
        institutionOrForum: "BRICS, SCO, G20",
      },
      {
        area: "Commercial Supply Chains",
        description: "Continued commercial transactions for active pharmaceutical ingredients, solar photovoltaic cells, electronic intermediate subassemblies, and industrial machinery.",
      },
      {
        area: "Climate & Environmental Policy",
        description: "Shared diplomatic positions within UNFCCC climate summits on common but differentiated responsibilities (CBDR) and development carbon budgets.",
      },
    ],
    majorFrictionAreas: [
      {
        area: "Unresolved Himalayan Boundary (Line of Actual Control)",
        description: "Contested territorial demarcations in Eastern Ladakh, Arunachal Pradesh, and the Doklam trijunction; large permanent military garrisons and infrastructure build-outs on both sides.",
        riskLevel: "HIGH",
      },
      {
        area: "China-Pakistan Strategic Alignment & CPEC",
        description: "China's economic and military backing of Pakistan, including the China-Pakistan Economic Corridor traversing Pakistan-administered Kashmir (Gilgit-Baltistan), viewed by New Delhi as an infringement on territorial sovereignty.",
        riskLevel: "HIGH",
      },
      {
        area: "Indian Ocean vs South China Sea Maritime Friction",
        description: "Chinese naval deployments and research vessel dockings in Sri Lanka, the Maldives, and Djibouti clash with India's role as preferred security responder in the Indian Ocean, while India deepens naval engagements with Vietnam and the Philippines.",
        riskLevel: "MODERATE",
      },
      {
        area: "Asymmetric Trade Deficit & Technology Scrutiny",
        description: "India runs an annual merchandise trade deficit exceeding $85 Billion with China; strict Indian regulatory oversight remains on Chinese telecom equipment (5G ban) and critical investment screening (FDI Press Note 3).",
        riskLevel: "MODERATE",
      },
    ],
    economicDimensions: {
      bilateralTradeVolumeUsd: "$118.4 Billion (FY2024)",
      tradeBalanceDirection: "Heavily in China's favor (India deficit ~ $85B)",
      keyTradeCommodities: [
        "India imports: Electrical machinery, organic chemicals, APIs, telecom components, plastics",
        "India exports: Iron ore, refined petroleum, cotton, marine products, granite",
      ],
      investmentStatus: "Strict government approval screening for Chinese investments under Press Note 3; gradual selective easing for critical green-tech joint ventures.",
    },
    securityDimensions: {
      defenceDialogueLevel: "Corps Commander military talks and Working Mechanism for Consultation & Coordination on India-China Border Affairs (WMCC)",
      jointExercises: ["Hand-in-Hand (dormant since 2019 standoff)"],
      armsTransfersOrRestrictions: "Mutual arms embargo; high strategic tech vigilance",
      borderOrMaritimeSecurityMechanism: "2024 Patrolling Agreement with verified buffer zones and scheduled ground flag meetings",
    },
    strategicSignificance: "The relationship between the world's two most populous nations determines the broader balance of power across Eurasia and the Indo-Pacific. A stable cold-peace allows both to focus on domestic economic transition, while unchecked confrontation risks global economic disruption.",
    relevantEventIds: ["EVT-2024-LAC-PATROL", "EVT-2024-BRICS-EXPANSION"],
    sourceId: "SOURCE-GOV-IND-001",
    lastUpdated: "2026-08-20",
    confidence: "High",
  },
  {
    id: "REL-IND-USA",
    pair: ["IND", "USA"],
    countryA: { id: "IND", name: "India", flag: "🇮🇳" },
    countryB: { id: "USA", name: "United States", flag: "🇺🇸" },
    primaryClassification: "Comprehensive Global Strategic Partnership",
    historicalBackground: "Transitioned from Cold War estrangement ('estranged democracies') to deep strategic convergence accelerated by the 2008 Civil Nuclear Agreement and the emergence of China as a shared strategic competitor. Institutionalized through 2+2 Ministerial Dialogues and foundational defense agreements (LEMOA, COMCASA, BECA).",
    currentStatus: "Unprecedented institutional depth across defense technology co-production (iCET, GE F414 jet engine deal), intelligence sharing, and maritime domain awareness, tempered by India's non-aligned autonomy regarding Russia.",
    majorCooperationAreas: [
      {
        area: "Critical & Emerging Technology (iCET)",
        description: "Co-development in semiconductor fabrication, quantum computing, artificial intelligence, resilient supply chains, and commercial spaceflight.",
        institutionOrForum: "US-India iCET Initiative",
      },
      {
        area: "Defence Industrial Co-Production & Interoperability",
        description: "General Electric and Hindustan Aeronautics Limited transfer of technology for F414 engines; procurement of MQ-9B SeaGuardian drones; joint exercises (Yudh Abhyas, Malabar).",
        institutionOrForum: "QUAD, 2+2 Ministerial Dialogue",
      },
      {
        area: "Indo-Pacific Maritime Security",
        description: "Shared commitment to a free, open, and rules-based maritime order, freedom of navigation, and maritime domain awareness across the Indian Ocean and Western Pacific.",
        institutionOrForum: "QUAD (India, US, Japan, Australia)",
      },
    ],
    majorFrictionAreas: [
      {
        area: "Russia Policy Divergence",
        description: "India's continued procurement of discounted Russian crude oil and maintenance of legacy Russian defense hardware despite Western sanctions and export pressure.",
        riskLevel: "MODERATE",
      },
      {
        area: "Trade Tariffs & Market Access",
        description: "Persistent differences regarding agricultural market protections, medical device price ceilings, and US Generalized System of Preferences (GSP) restoration.",
        riskLevel: "LOW",
      },
    ],
    economicDimensions: {
      bilateralTradeVolumeUsd: "$190+ Billion (Goods & Services)",
      tradeBalanceDirection: "In India's favor (India surplus ~ $35B)",
      keyTradeCommodities: [
        "India exports: IT software, pharmaceuticals, polished diamonds, textiles, engineering goods",
        "US exports: Crude petroleum, LNG, aircraft, defense systems, telecom hardware",
      ],
      investmentStatus: "United States is India's largest trading partner and 3rd largest foreign direct investor (major investments from Apple, Google, Micron).",
    },
    securityDimensions: {
      defenceDialogueLevel: "Annual 2+2 Ministerial Dialogue (Foreign & Defence Ministers)",
      jointExercises: ["Exercise Malabar (Naval)", "Yudh Abhyas (Army)", "Vajra Prahar (Special Forces)", "Cope India (Air Force)"],
      armsTransfersOrRestrictions: "Major Defense Partner status; procurement of P-8I Neptune, AH-64E Apache, MH-60R Seahawk, C-17 Globemaster",
      borderOrMaritimeSecurityMechanism: "BECA geospatial data sharing & LEMOA logistics exchange",
    },
    strategicSignificance: "The anchor partnership defining the balance of power in the Indo-Pacific. It provides India access to leading-edge technology and global capital, while anchoring US strategy in South Asia and the Indian Ocean.",
    relevantEventIds: ["EVT-2024-IMEC-MOU", "EVT-2024-CHIPS-EXPORT"],
    sourceId: "SOURCE-GOV-USA-001",
    lastUpdated: "2026-08-15",
    confidence: "High",
  },
  {
    id: "REL-IND-RUS",
    pair: ["IND", "RUS"],
    countryA: { id: "IND", name: "India", flag: "🇮🇳" },
    countryB: { id: "RUS", name: "Russian Federation", flag: "🇷🇺" },
    primaryClassification: "Special & Privileged Strategic Partnership",
    historicalBackground: "Anchored in the 1971 Indo-Soviet Treaty of Friendship and decades of Soviet/Russian defense equipment supply, diplomatic veto cover at the UN Security Council, and civilian nuclear energy assistance.",
    currentStatus: "Strong energy and raw material trade following the 2022 Ukraine conflict, with India becoming a top buyer of seaborne Urals crude. Balanced against New Delhi's concerns over Russia's deepening junior-partner dependency on China.",
    majorCooperationAreas: [
      {
        area: "Hydrocarbon Trade & Energy Security",
        description: "Substantial imports of discounted Russian crude oil (accounting for ~36% of Indian crude receipts), processed in Indian refineries for domestic consumption and refined product export.",
      },
      {
        area: "Legacy Military Readiness & Nuclear Energy",
        description: "Continued supply of spare parts for Su-30MKI, T-90 tanks, S-400 missile systems, and technical construction of Kudankulam Nuclear Power Plant reactors.",
        institutionOrForum: "IRIGC-TEC (Intergovernmental Commission)",
      },
    ],
    majorFrictionAreas: [
      {
        area: "Sino-Russian 'No Limits' Alignment",
        description: "New Delhi watches with concern Moscow's growing financial and geopolitical reliance on Beijing, which could constrain Russian neutrality in a future India-China border escalation.",
        riskLevel: "MODERATE",
      },
      {
        area: "Payment Settlement Bottlenecks & Defence Delays",
        description: "Sanctions on Russian banking (SWIFT disconnection) created rupee-ruble accumulation challenges and delayed scheduled delivery of remaining S-400 regiments and naval frigates.",
        riskLevel: "MODERATE",
      },
    ],
    economicDimensions: {
      bilateralTradeVolumeUsd: "$65+ Billion (Surged post-2022)",
      tradeBalanceDirection: "Heavily in Russia's favor (driven by crude imports)",
      keyTradeCommodities: [
        "India imports: Crude petroleum, fertilizers, coking coal, vegetable oils, rough diamonds",
        "India exports: Pharmaceuticals, engineering components, tea, chemicals",
      ],
      investmentStatus: "Indian upstream oil equity in Sakhalin-1 and Vankor; Russian Rosneft investment in Nayara Energy Vadinar refinery.",
    },
    securityDimensions: {
      defenceDialogueLevel: "Annual Bilateral Summit & 2+2 Ministerial Format",
      jointExercises: ["INDRA (Tri-service biennial exercise)"],
      armsTransfersOrRestrictions: "BrahMos cruise missile joint venture, licensed production of AK-203 assault rifles in Amethi",
      borderOrMaritimeSecurityMechanism: "Direct secure hotline between National Security Advisers",
    },
    strategicSignificance: "Prevents Russia from becoming exclusively subordinate to China, secures indispensable defense inventory sustainment for India's 1.45M-strong military, and provides energy price hedging.",
    relevantEventIds: ["EVT-2024-BRICS-EXPANSION"],
    sourceId: "SOURCE-GOV-RUS-001",
    lastUpdated: "2026-08-10",
    confidence: "High",
  },
  {
    id: "REL-USA-CHN",
    pair: ["USA", "CHN"],
    countryA: { id: "USA", name: "United States", flag: "🇺🇸" },
    countryB: { id: "CHN", name: "People's Republic of China", flag: "🇨🇳" },
    primaryClassification: "Complex Strategic Competition with Managed Coexistence",
    historicalBackground: "Decades of post-1979 economic integration, WTO accession, and supply-chain interdependence evolved since 2017 into structural strategic competition across technology, advanced manufacturing, maritime control, and global influence.",
    currentStatus: "Deep geopolitical rivalry spanning Taiwan, the South China Sea, and semiconductor export controls, balanced by continuous ministerial guardrails to prevent accidental military escalation.",
    majorCooperationAreas: [
      {
        area: "Macroeconomic & Financial Stability Talks",
        description: "Bilateral working groups addressing sovereign debt distress in emerging economies, anti-money laundering, and macroeconomic signals.",
      },
      {
        area: "Climate & Decarbonization Pledges",
        description: "Joint working groups on methane emissions, renewable deployment, and climate summit coordination.",
      },
    ],
    majorFrictionAreas: [
      {
        area: "Taiwan Strait Deterrence",
        description: "US arms sales and Taiwan Relations Act security commitments vs Beijing's sovereign reunification mandate and frequent PLA military drills around Taiwan.",
        riskLevel: "HIGH",
      },
      {
        area: "Advanced Tech Export Denial & Critical Minerals Restrictions",
        description: "US bans on advanced GPUs and lithography tools vs Chinese export licensing controls on gallium, germanium, antimony, and rare earth processing.",
        riskLevel: "HIGH",
      },
      {
        area: "South China Sea Navigation & Island Militarization",
        description: "US Navy Freedom of Navigation Operations (FONOPs) countering Chinese expansive historic nine-dash line maritime claims and artificial island fortifications.",
        riskLevel: "HIGH",
      },
    ],
    economicDimensions: {
      bilateralTradeVolumeUsd: "$575+ Billion (Goods trade)",
      tradeBalanceDirection: "Significant US deficit ($279B)",
      keyTradeCommodities: [
        "US imports: Consumer electronics, machinery, toys, apparel, furniture",
        "US exports: Soybeans, semiconductors, civil aircraft, pharmaceuticals, crude oil",
      ],
      investmentStatus: "Strict CFIUS review of inbound Chinese capital; outbound US investment restrictions on Chinese AI, quantum, and advanced chips.",
    },
    securityDimensions: {
      defenceDialogueLevel: "Restored military-to-military communications, Defense Policy Coordination Talks (DPCT)",
      jointExercises: ["None"],
      armsTransfersOrRestrictions: "Comprehensive mutual arms embargoes and strategic export denial regimes",
      borderOrMaritimeSecurityMechanism: "Military Maritime Consultative Agreement (MMCA)",
    },
    strategicSignificance: "The central geopolitical axis of the 21st century. Decoupling or conflict between the world's two largest economies would reshape global trade, technology architecture, and maritime security.",
    relevantEventIds: ["EVT-2024-CHIPS-EXPORT"],
    sourceId: "SOURCE-GOV-USA-001",
    lastUpdated: "2026-08-12",
    confidence: "High",
  },
];

export function getRelationshipForPair(countryA: string, countryB: string): BilateralRelationship | null {
  const a = countryA.toUpperCase();
  const b = countryB.toUpperCase();
  return (
    BILATERAL_RELATIONSHIPS_DATA.find(
      (r) => (r.pair[0] === a && r.pair[1] === b) || (r.pair[0] === b && r.pair[1] === a)
    ) || null
  );
}

export function getRelationshipsForCountry(countryId: string): BilateralRelationship[] {
  const norm = countryId.toUpperCase();
  return BILATERAL_RELATIONSHIPS_DATA.filter((r) => r.pair[0] === norm || r.pair[1] === norm);
}

export function getAllRelationships(): BilateralRelationship[] {
  return BILATERAL_RELATIONSHIPS_DATA;
}
