// TRINETRA AI — Central Evidence & Source Registry
// Canonical registry of all institutional, sovereign, multilateral, and analytical sources.
// Every fact, metric, event, dependency, and asset in Trinetra references a standardized Source ID.

export interface SourceRecord {
  id: string;
  name: string;
  organization: string;
  type: "government" | "international_org" | "think_tank" | "academic" | "dataset" | "official_gazette" | "reputable_media";
  coverageDomain: string;
  dataYear: string;
  lastVerified: string;
  confidence: "High" | "Moderate" | "Documented";
  description: string;
  citationUrl?: string;
}

export const CENTRAL_SOURCE_REGISTRY: Record<string, SourceRecord> = {
  "SOURCE-WB-001": {
    id: "SOURCE-WB-001",
    name: "World Development Indicators (WDI)",
    organization: "World Bank Group",
    type: "international_org",
    coverageDomain: "Macroeconomics, Demographics, Poverty, Trade Ratios",
    dataYear: "2024-2026",
    lastVerified: "2026-08-15",
    confidence: "High",
    description: "Primary multilateral repository for national economic accounts, GDP purchasing power parities, and population demographics.",
  },
  "SOURCE-IMF-001": {
    id: "SOURCE-IMF-001",
    name: "World Economic Outlook (WEO) Database",
    organization: "International Monetary Fund",
    type: "international_org",
    coverageDomain: "GDP Growth, Fiscal Balances, Public Debt, Inflation",
    dataYear: "2024-2026",
    lastVerified: "2026-08-20",
    confidence: "High",
    description: "Standard sovereign macroeconomic reporting baseline tracking fiscal deficits, sovereign debt-to-GDP, and headline inflation.",
  },
  "SOURCE-SIPRI-001": {
    id: "SOURCE-SIPRI-001",
    name: "SIPRI Military Expenditure & Arms Transfers Database",
    organization: "Stockholm International Peace Research Institute",
    type: "think_tank",
    coverageDomain: "Defence Budgets, Arms Imports/Exports, Strategic Weapons",
    dataYear: "2024-2026",
    lastVerified: "2026-07-30",
    confidence: "High",
    description: "Authoritative global accounting for sovereign military expenditure, arms sales, major platform transfers, and nuclear stockpile estimates.",
  },
  "SOURCE-IISS-001": {
    id: "SOURCE-IISS-001",
    name: "The Military Balance",
    organization: "International Institute for Strategic Studies (IISS)",
    type: "think_tank",
    coverageDomain: "Order of Battle, Armed Forces Personnel, Branch Inventory",
    dataYear: "2025-2026",
    lastVerified: "2026-06-15",
    confidence: "High",
    description: "Documented global assessment of armed forces personnel, active and reserve strength, and combat platform deployments.",
  },
  "SOURCE-IEA-001": {
    id: "SOURCE-IEA-001",
    name: "World Energy Balances & Oil Market Reports",
    organization: "International Energy Agency",
    type: "international_org",
    coverageDomain: "Crude Oil Production, Net Energy Imports, Refining Capacity",
    dataYear: "2024-2026",
    lastVerified: "2026-08-01",
    confidence: "High",
    description: "Official multilateral benchmark for national primary energy supply, oil import corridors, refining bottlenecks, and strategic stockpiles.",
  },
  "SOURCE-EIA-001": {
    id: "SOURCE-EIA-001",
    name: "International Energy Statistics",
    organization: "U.S. Energy Information Administration (EIA)",
    type: "government",
    coverageDomain: "Maritime Chokepoint Flows, LNG Trade, Proven Reserves",
    dataYear: "2024-2026",
    lastVerified: "2026-07-22",
    confidence: "High",
    description: "Detailed hydrographic and volumetric tracking of hydrocarbon transit through maritime straits (Hormuz, Malacca, Bab el-Mandeb).",
  },
  "SOURCE-UNCTAD-001": {
    id: "SOURCE-UNCTAD-001",
    name: "Review of Maritime Transport",
    organization: "United Nations Conference on Trade and Development",
    type: "international_org",
    coverageDomain: "Container Port Throughput, Merchant Fleet Tonnage, Seaborne Trade",
    dataYear: "2024-2026",
    lastVerified: "2026-06-10",
    confidence: "High",
    description: "Multilateral statistics on container throughput, liner shipping connectivity, and bulk commodity transit routes.",
  },
  "SOURCE-WTO-001": {
    id: "SOURCE-WTO-001",
    name: "World Tariff Profiles & Merchandise Trade Matrix",
    organization: "World Trade Organization",
    type: "international_org",
    coverageDomain: "Bilateral Trade Flows, Tariff Schedules, Trade Remedy Measures",
    dataYear: "2024-2026",
    lastVerified: "2026-08-10",
    confidence: "High",
    description: "Empirical merchandise trade data covering bilateral exports, imports, and critical commodity dependencies.",
  },
  "SOURCE-USGS-001": {
    id: "SOURCE-USGS-001",
    name: "Mineral Commodity Summaries",
    organization: "United States Geological Survey",
    type: "government",
    coverageDomain: "Critical Minerals, Rare Earths, Lithium, Cobalt, Processing Monopolies",
    dataYear: "2025-2026",
    lastVerified: "2026-07-15",
    confidence: "High",
    description: "Documented global assessments of critical mineral deposits, refining concentration, and supply-chain vulnerabilities.",
  },
  "SOURCE-UN-001": {
    id: "SOURCE-UN-001",
    name: "UN Treaty Collection & Security Council Documentation",
    organization: "United Nations",
    type: "international_org",
    coverageDomain: "Multilateral Treaties, Maritime Borders, Sanctions Regimes",
    dataYear: "2024-2026",
    lastVerified: "2026-08-05",
    confidence: "High",
    description: "Repository of international agreements, UNCLOS maritime boundary submissions, and official Security Council sanctions records.",
  },
  "SOURCE-GOV-IND-001": {
    id: "SOURCE-GOV-IND-001",
    name: "Union Budget & Economic Survey / Gazette of India",
    organization: "Government of India (Ministry of Finance & MEA)",
    type: "official_gazette",
    coverageDomain: "Constitutional Mandates, Sovereign Expenditure, Foreign Policy Doctrines",
    dataYear: "2024-2026",
    lastVerified: "2026-08-18",
    confidence: "High",
    description: "Official Indian sovereign publications, parliamentary records, and Ministry of External Affairs diplomatic communiques.",
  },
  "SOURCE-GOV-USA-001": {
    id: "SOURCE-GOV-USA-001",
    name: "National Defense Strategy & Congressional Research Service",
    organization: "U.S. Department of Defense & Library of Congress",
    type: "government",
    coverageDomain: "Force Posture, Strategic Alliances, Export Control Frameworks",
    dataYear: "2024-2026",
    lastVerified: "2026-08-12",
    confidence: "High",
    description: "Official strategic posture statements, congressional defense authorizations, and documented sanctions registries.",
  },
  "SOURCE-GOV-CHN-001": {
    id: "SOURCE-GOV-CHN-001",
    name: "National Bureau of Statistics & Defense White Paper",
    organization: "State Council of the People's Republic of China",
    type: "government",
    coverageDomain: "Five-Year Plan Milestones, PLA Modernization, Trade Accounts",
    dataYear: "2024-2026",
    lastVerified: "2026-08-10",
    confidence: "High",
    description: "Official Chinese statistical releases, customs administration trade data, and defense policy white papers.",
  },
  "SOURCE-GOV-RUS-001": {
    id: "SOURCE-GOV-RUS-001",
    name: "Federal State Statistics Service (Rosstat) & Foreign Policy Concept",
    organization: "Government of the Russian Federation",
    type: "government",
    coverageDomain: "Energy Production, Eurasian Economic Union Agreements, Military Doctrines",
    dataYear: "2024-2026",
    lastVerified: "2026-07-28",
    confidence: "High",
    description: "Official Russian statutory publications, Rosstat macroeconomic data, and presidential strategic decrees.",
  },
};

export function getSource(sourceId: string): SourceRecord | undefined {
  return CENTRAL_SOURCE_REGISTRY[sourceId];
}

export function getAllSources(): SourceRecord[] {
  return Object.values(CENTRAL_SOURCE_REGISTRY);
}
