// TRINETRA AI — International Alignments & Sovereign Memberships Registry
// Exhaustive institutional mappings: G20, G7, BRICS, SCO, QUAD, ASEAN, SAARC, BIMSTEC, IORA, NATO, EU, UN, WTO, IMF, OPEC, etc.

export interface InternationalOrg {
  id: string;
  name: string;
  shortName: string;
  category: "multilateral" | "economic" | "security" | "regional" | "energy";
  logoText: string;
  emblemColor: string;
  headquarters: string;
  established: number;
  purpose: string;
  strategicSignificance: string;
  keyMembers: string[];
}

export interface CountryMembership {
  orgId: string;
  status: "Member" | "Founding Member" | "Dialogue Partner" | "Observer" | "Strategic Partner";
  since?: number;
  role?: string;
}

export const INTERNATIONAL_ORGS: Record<string, InternationalOrg> = {
  UN: {
    id: "UN",
    name: "United Nations",
    shortName: "UN",
    category: "multilateral",
    logoText: "🇺🇳",
    emblemColor: "#3B82F6",
    headquarters: "New York, USA",
    established: 1945,
    purpose: "Maintaining international peace and security, developing friendly relations among nations, and achieving international cooperation.",
    strategicSignificance: "The premier global forum for sovereign diplomacy and international law. Holds universal legitimacy through the UN General Assembly and binding Security Council resolutions.",
    keyMembers: ["IND", "USA", "CHN", "RUS", "FRA", "GBR", "DEU", "JPN"],
  },
  G20: {
    id: "G20",
    name: "Group of Twenty",
    shortName: "G20",
    category: "economic",
    logoText: "🌐",
    emblemColor: "#FF7A00",
    headquarters: "Rotating Presidency",
    established: 1999,
    purpose: "Premier forum for international economic cooperation representing 85% of global GDP and 75% of international trade.",
    strategicSignificance: "Bridges the G7 advanced industrial economies with major emerging powers. Critical for global macroeconomic coordination, debt restructuring, and climate finance.",
    keyMembers: ["IND", "USA", "CHN", "RUS", "DEU", "GBR", "FRA", "JPN", "SAU", "TUR"],
  },
  BRICS: {
    id: "BRICS",
    name: "BRICS Alliance",
    shortName: "BRICS",
    category: "economic",
    logoText: "🌿",
    emblemColor: "#10B981",
    headquarters: "Rotating Presidency (NDB in Shanghai)",
    established: 2009,
    purpose: "Consortium of leading emerging economies fostering South-South coordination, alternative settlement systems, and multilateral reform.",
    strategicSignificance: "Represents over 45% of world population and over 35% of global GDP (PPP). Actively building sovereign alternative payment mechanisms to mitigate Western sanctions vulnerability.",
    keyMembers: ["IND", "CHN", "RUS", "BRA", "ZAF", "IRN", "ARE", "EGY", "ETH"],
  },
  SCO: {
    id: "SCO",
    name: "Shanghai Cooperation Organisation",
    shortName: "SCO",
    category: "security",
    logoText: "🛡️",
    emblemColor: "#06B6D4",
    headquarters: "Beijing, China",
    established: 2001,
    purpose: "Eurasian political, economic, and security alliance focusing on regional stability, counter-terrorism (RATS), and connectivity.",
    strategicSignificance: "Encompasses the core of the Eurasian landmass, including Russia, China, Central Asian states, and South Asia. Critical for balancing maritime vs. continental security.",
    keyMembers: ["IND", "CHN", "RUS", "PAK", "IRN", "KAZ", "UZB"],
  },
  QUAD: {
    id: "QUAD",
    name: "Quadrilateral Security Dialogue",
    shortName: "QUAD",
    category: "security",
    logoText: "⚓",
    emblemColor: "#6366F1",
    headquarters: "Diplomatic Consultation Network",
    established: 2007,
    purpose: "Strategic diplomatic network between Australia, India, Japan, and the United States championing a free, open, and prosperous Indo-Pacific.",
    strategicSignificance: "Serves as the vital maritime security and technological counterweight to unilateral hegemony in the Indo-Pacific. Coordinates maritime domain awareness, critical tech supply chains, and humanitarian assistance.",
    keyMembers: ["IND", "USA", "JPN", "AUS"],
  },
  WTO: {
    id: "WTO",
    name: "World Trade Organization",
    shortName: "WTO",
    category: "economic",
    logoText: "⚖️",
    emblemColor: "#F59E0B",
    headquarters: "Geneva, Switzerland",
    established: 1995,
    purpose: "Regulates international trade in goods, services, and intellectual property, providing dispute settlement frameworks.",
    strategicSignificance: "Underpins the global rules-based trading system. Crucial forum for developing nations defending agricultural food security stockpiles and tariff flexibilities.",
    keyMembers: ["IND", "USA", "CHN", "DEU", "JPN", "GBR", "FRA"],
  },
  BIMSTEC: {
    id: "BIMSTEC",
    name: "Bay of Bengal Initiative for Multi-Sectoral Technical and Economic Cooperation",
    shortName: "BIMSTEC",
    category: "regional",
    logoText: "🌊",
    emblemColor: "#14B8A6",
    headquarters: "Dhaka, Bangladesh",
    established: 1997,
    purpose: "Connects South Asia and Southeast Asia through maritime trade, energy corridors, and transport infrastructure around the Bay of Bengal.",
    strategicSignificance: "Acts as India's primary institutional anchor for its Act East Policy and Neighborhood First initiative, bypassing stagnant South Asian platforms.",
    keyMembers: ["IND", "BGD", "MMR", "LKA", "THA", "NPL", "BTN"],
  },
  IORA: {
    id: "IORA",
    name: "Indian Ocean Rim Association",
    shortName: "IORA",
    category: "regional",
    logoText: "🧭",
    emblemColor: "#EC4899",
    headquarters: "Ebène, Mauritius",
    established: 1997,
    purpose: "Fosters regional cooperation, maritime safety, trade facilitation, and sustainable blue economy development across the Indian Ocean littoral.",
    strategicSignificance: "The central intergovernmental body covering the entire Indian Ocean maritime continuum, vital for safeguarding vital sea lines of communication (SLOCs).",
    keyMembers: ["IND", "ARE", "ZAF", "AUS", "IDN", "SGP", "MYS"],
  },
  G7: {
    id: "G7",
    name: "Group of Seven",
    shortName: "G7",
    category: "economic",
    logoText: "🏛️",
    emblemColor: "#8B5CF6",
    headquarters: "Rotating Presidency",
    established: 1975,
    purpose: "Intergovernmental political forum of the world's most advanced liberal industrialized democracies coordinating on global security and economic policies.",
    strategicSignificance: "Coordinates financial sanctions, export control regimes on advanced technology, and Western security assistance frameworks.",
    keyMembers: ["USA", "DEU", "GBR", "FRA", "JPN", "ITA", "CAN"],
  },
  NATO: {
    id: "NATO",
    name: "North Atlantic Treaty Organization",
    shortName: "NATO",
    category: "security",
    logoText: "⚔️",
    emblemColor: "#3B82F6",
    headquarters: "Brussels, Belgium",
    established: 1949,
    purpose: "Collective defence alliance committed to the mutual protection of member states under Article 5 of the North Atlantic Treaty.",
    strategicSignificance: "The world's preeminent military alliance providing collective nuclear and conventional deterrence across the Euro-Atlantic theatre.",
    keyMembers: ["USA", "GBR", "FRA", "DEU", "TUR", "ITA", "CAN"],
  },
  ASEAN: {
    id: "ASEAN",
    name: "Association of Southeast Asian Nations",
    shortName: "ASEAN",
    category: "regional",
    logoText: "🌾",
    emblemColor: "#EF4444",
    headquarters: "Jakarta, Indonesia",
    established: 1967,
    purpose: "Accelerating economic growth, social progress, and cultural development while promoting regional peace and stability through consensus diplomacy.",
    strategicSignificance: "Holds 'ASEAN Centrality' in East Asian regional architecture, presiding over the East Asia Summit (EAS) and ASEAN Regional Forum (ARF).",
    keyMembers: ["IDN", "MYS", "SGP", "THA", "VNM", "PHL"],
  },
  OPEC: {
    id: "OPEC",
    name: "Organization of the Petroleum Exporting Countries",
    shortName: "OPEC",
    category: "energy",
    logoText: "🛢️",
    emblemColor: "#F97316",
    headquarters: "Vienna, Austria",
    established: 1960,
    purpose: "Coordinating petroleum production policies among member nations to stabilize international crude oil markets and secure steady producer revenues.",
    strategicSignificance: "Commands approximately 80% of world proven crude oil reserves; with OPEC+ partners (including Russia), exercises massive swing-producer price leverage.",
    keyMembers: ["SAU", "ARE", "IRN", "IRQ", "KWT", "DZA"],
  },
  EU: {
    id: "EU",
    name: "European Union",
    shortName: "EU",
    category: "economic",
    logoText: "🇪🇺",
    emblemColor: "#2563EB",
    headquarters: "Brussels, Belgium",
    established: 1993,
    purpose: "Supranational political and economic union governing a single internal market, common currency (Eurozone), and unified external trade policy.",
    strategicSignificance: "World's largest trading bloc with premier global regulatory power ('Brussels Effect') across privacy (GDPR), carbon borders (CBAM), and artificial intelligence.",
    keyMembers: ["DEU", "FRA", "ITA", "ESP", "NLD", "POL"],
  },
};

// Verified Country Memberships mapping
export const COUNTRY_ALIGNMENTS: Record<string, CountryMembership[]> = {
  IND: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Non-Permanent UNSC periodic member; top troop contributor" },
    { orgId: "G20", status: "Member", since: 1999, role: "2023 Presidency (New Delhi Declaration; AU inducted)" },
    { orgId: "BRICS", status: "Founding Member", since: 2009, role: "Core economic contributor; New Development Bank co-founder" },
    { orgId: "SCO", status: "Member", since: 2017, role: "2023 Chair; RATS counter-terror partner" },
    { orgId: "QUAD", status: "Member", since: 2017, role: "Lead maritime anchor in Indian Ocean littoral" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "Champion of G33 developing nation agricultural protections" },
    { orgId: "BIMSTEC", status: "Founding Member", since: 1997, role: "Primary regional security and connectivity provider" },
    { orgId: "IORA", status: "Founding Member", since: 1997, role: "Lead maritime safety and disaster relief coordination node" },
  ],
  USA: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Permanent UNSC Member (P5); host state" },
    { orgId: "G7", status: "Founding Member", since: 1975, role: "Primary financial, military, and strategic leader" },
    { orgId: "G20", status: "Member", since: 1999, role: "Anchor macroeconomic sovereign" },
    { orgId: "NATO", status: "Founding Member", since: 1949, role: "Supreme Allied Commander Europe provider; primary security guarantor" },
    { orgId: "QUAD", status: "Member", since: 2007, role: "Pacific maritime security and advanced tech co-lead" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "Original creator of multilateral GATT/WTO frameworks" },
  ],
  CHN: [
    { orgId: "UN", status: "Member", since: 1971, role: "Permanent UNSC Member (P5) with veto authority" },
    { orgId: "G20", status: "Member", since: 1999, role: "World's largest trading state by volume" },
    { orgId: "BRICS", status: "Founding Member", since: 2009, role: "Largest economic component; NDB host (Shanghai)" },
    { orgId: "SCO", status: "Founding Member", since: 2001, role: "Headquarters host (Beijing) and Eurasian security architect" },
    { orgId: "WTO", status: "Member", since: 2001, role: "Global manufacturing export powerhouse" },
  ],
  RUS: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Permanent UNSC Member (P5) with active veto authority" },
    { orgId: "G20", status: "Member", since: 1999, role: "Global hydrocarbon and nuclear energy supplier" },
    { orgId: "BRICS", status: "Founding Member", since: 2009, role: "2024 Kazan Summit host; de-dollarization advocate" },
    { orgId: "SCO", status: "Founding Member", since: 2001, role: "Eurasian continental defense coordinator" },
    { orgId: "WTO", status: "Member", since: 2012, role: "Primary commodities exporter" },
  ],
  JPN: [
    { orgId: "UN", status: "Member", since: 1956, role: "Major financial contributor; G4 UNSC reform aspirant" },
    { orgId: "G7", status: "Founding Member", since: 1975, role: "Sole Asian permanent G7 sovereign" },
    { orgId: "G20", status: "Member", since: 1999, role: "World 4th largest economy" },
    { orgId: "QUAD", status: "Founding Member", since: 2007, role: "Conceived 'Free and Open Indo-Pacific' strategic doctrine" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "Advanced high-tech and industrial goods exporter" },
  ],
  DEU: [
    { orgId: "UN", status: "Member", since: 1973, role: "Top multilateral contributor; G4 UNSC reform aspirant" },
    { orgId: "EU", status: "Founding Member", since: 1993, role: "Largest economy and political pillar of the European Union" },
    { orgId: "G7", status: "Founding Member", since: 1975, role: "European industrial engine" },
    { orgId: "G20", status: "Member", since: 1999, role: "Major macroeconomic creditor nation" },
    { orgId: "NATO", status: "Member", since: 1955, role: "Key European conventional defender; Zeitenwende modernization" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "High-precision engineering and capital goods trade leader" },
  ],
  GBR: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Permanent UNSC Member (P5) with veto power" },
    { orgId: "G7", status: "Founding Member", since: 1975, role: "Global financial services capital (City of London)" },
    { orgId: "G20", status: "Member", since: 1999, role: "Advanced sovereign economy" },
    { orgId: "NATO", status: "Founding Member", since: 1949, role: "European nuclear deterrent & Royal Navy carrier projection" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "Independent post-Brexit tariff and services jurisdiction" },
  ],
  FRA: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Permanent UNSC Member (P5) with independent veto" },
    { orgId: "EU", status: "Founding Member", since: 1993, role: "Diplomatic and military spearhead of European strategic autonomy" },
    { orgId: "G7", status: "Founding Member", since: 1975, role: "Nuclear and aerospace powerhouse" },
    { orgId: "G20", status: "Member", since: 1999, role: "Major European agricultural and sovereign economy" },
    { orgId: "NATO", status: "Founding Member", since: 1949, role: "Independent nuclear triad sovereign" },
    { orgId: "IORA", status: "Member", since: 2020, role: "Indian Ocean sovereign via Réunion and Mayotte territories" },
  ],
  SAU: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Leading Arab and Islamic sovereign diplomacy" },
    { orgId: "G20", status: "Member", since: 1999, role: "Sole Arab member of the G20" },
    { orgId: "OPEC", status: "Founding Member", since: 1960, role: "De facto leader of OPEC/OPEC+ and global oil swing producer" },
    { orgId: "BRICS", status: "Member", since: 2024, role: "Major sovereign wealth fund investor and energy linchpin" },
    { orgId: "WTO", status: "Member", since: 2005, role: "Global energy trade hub" },
  ],
  PAK: [
    { orgId: "UN", status: "Member", since: 1947, role: "Frequent non-permanent UNSC member and top peacekeeper" },
    { orgId: "SCO", status: "Member", since: 2017, role: "Regional Eurasian security participant; CPEC terminus" },
    { orgId: "WTO", status: "Founding Member", since: 1995, role: "Textiles and agriculture exporter" },
  ],
  IRN: [
    { orgId: "UN", status: "Founding Member", since: 1945, role: "Sovereign Middle Eastern power" },
    { orgId: "BRICS", status: "Member", since: 2024, role: "Major Persian Gulf energy producer and sanctions-resilience pioneer" },
    { orgId: "SCO", status: "Member", since: 2023, role: "Eurasian transit corridor node (INSTC)" },
    { orgId: "OPEC", status: "Founding Member", since: 1960, role: "Major crude and natural gas reserve holder" },
  ],
};

export function getCountryAlignments(countryId: string): CountryMembership[] {
  return COUNTRY_ALIGNMENTS[countryId] || [
    { orgId: "UN", status: "Member", since: 1945, role: "Sovereign General Assembly participant" },
    { orgId: "WTO", status: "Member", since: 1995, role: "Multilateral trade signatory" },
  ];
}
