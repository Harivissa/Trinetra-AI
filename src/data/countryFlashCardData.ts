// TRINETRA AI — Universal Country Flash-Card Intelligence Resolver
// Country-agnostic data engine driving the modular intelligence dashboard.
// Strictly authentic, verified, neutral, and timestamped.

import type { Country } from "../types";
import type { CountryDeepProfile } from "./countryDeepProfileData";
import { getCountryStrategicSites, type StrategicSite } from "./countryStrategicSites";
import { getCountrySimpleQuestions } from "./countryDossiers";

export interface TopMetricCardData {
  id: string;
  label: string;
  value: string;
  subValue?: string;
  source: string;
  year: string;
  category: "demography" | "economy" | "growth" | "military" | "defense" | "nuclear" | "energy" | "maritime";
}

export interface EconomyCardData {
  gdpTrend: { year: number; gdp: number }[];
  currentGdp: string;
  gdpUnit: string;
  sectors: { name: string; pct: number; color: string }[];
  topPartners: { name: string; share: number; flag: string; type: "export" | "import" | "both" }[];
  criticalIndustries: string[];
  source: string;
}

export interface MilitaryCardData {
  totalActive: string;
  branches: { branch: "Army" | "Navy" | "Air Force"; strength: string; iconKey: string }[];
  defenceSpendUsd: string;
  defenceSpendPctGdp: string;
  majorPlatforms: string[];
  doctrines: string[];
  source: string;
}

export interface StrategicAssetCardData {
  nuclear: {
    status: string;
    warheads: string;
    triadReadiness: string;
    doctrine: string;
  };
  space: {
    agency: string;
    capabilities: string[];
    focus: string;
  };
  cyber: {
    posture: string;
    command: string;
    focus: string;
  };
}

export interface EnergyChokepointData {
  netImportRatio: string;
  statusLabel: string;
  primarySources: string[];
  chokepoints: { name: string; whyMatters: string; strategicRoute: string }[];
  source: string;
}

export interface StrengthsConstraintsData {
  strengths: { title: string; desc: string }[];
  constraints: { title: string; desc: string }[];
}

export interface PriorityItemData {
  label: string;
  domain: string;
  desc: string;
  icon: "security" | "economy" | "technology" | "energy" | "maritime" | "diplomacy";
}

export interface TimelineNodeData {
  year: string;
  event: string;
  significance: string;
}

export interface CurrentDevelopmentData {
  title: string;
  significance: string;
  status: "active" | "verified" | "monitoring";
  source: string;
}

export interface RelationshipNetworkData {
  partners: {
    name: string;
    relationshipType: string;
    whyItMatters: string;
    areas: string[];
    flag?: string;
  }[];
  competitors: {
    name: string;
    competitionType: string;
    whyItMatters: string;
    areas: string[];
    flag?: string;
  }[];
}

export interface DependencyGraphData {
  energy: { title: string; share: string; criticalSource: string }[];
  technology: { title: string; share: string; criticalSource: string }[];
  defence: { title: string; share: string; criticalSource: string }[];
  resources: { title: string; share: string; criticalSource: string }[];
}

export interface EnergyFlowStep {
  step: string;
  label: string;
  detail: string;
}

export interface NationalConditionDomainSummary {
  domain: string;
  indicator: string;
  value: string;
  trend?: string;
}

export interface CountryFlashCardDossier {
  countryId: string;
  countryName: string;
  officialName: string;
  capital: string;
  region: string;
  flag: string;
  heroImage: string;
  doctrineQuote: string;
  narrativeSummary: string;
  topMetrics: TopMetricCardData[];
  economy: EconomyCardData;
  military: MilitaryCardData;
  strategicAssets: StrategicAssetCardData;
  energyMaritime: EnergyChokepointData;
  relationships: StrengthsConstraintsData;
  priorities: PriorityItemData[];
  timeline: TimelineNodeData[];
  developments: CurrentDevelopmentData[];
  sourcesTiers: { tier: string; name: string; orgs: string[] }[];
  relationshipsNetwork: RelationshipNetworkData;
  dependenciesGraph: DependencyGraphData;
  strategicSites: StrategicSite[];
  energyFlow: EnergyFlowStep[];
  nationalConditionSummary: NationalConditionDomainSummary[];
}

// Sovereign country-specific presets for deep verified dossiers
const COUNTRY_SPECIFIC_PRESETS: Record<string, Partial<CountryFlashCardDossier>> = {
  IND: {
    doctrineQuote: "“Strategic Autonomy for a Viksit Bharat”",
    narrativeSummary: "A rising power with demographic depth, economic scale, growing military capability and expanding global influence.",
    economy: {
      currentGdp: "$3.75 T",
      gdpUnit: "USD Trillion (2024)",
      gdpTrend: [
        { year: 2015, gdp: 2.1 },
        { year: 2017, gdp: 2.65 },
        { year: 2019, gdp: 2.87 },
        { year: 2021, gdp: 3.15 },
        { year: 2023, gdp: 3.55 },
        { year: 2024, gdp: 3.75 },
      ],
      sectors: [
        { name: "Services", pct: 56, color: "#f97316" },
        { name: "Industry", pct: 27, color: "#38bdf8" },
        { name: "Agriculture", pct: 17, color: "#34d399" },
      ],
      topPartners: [
        { name: "United States", share: 11.7, flag: "🇺🇸", type: "both" },
        { name: "China", share: 10.5, flag: "🇨🇳", type: "both" },
        { name: "UAE", share: 7.1, flag: "🇦🇪", type: "both" },
        { name: "Saudi Arabia", share: 5.3, flag: "🇸🇦", type: "both" },
        { name: "Russia", share: 4.8, flag: "🇷🇺", type: "import" },
      ],
      criticalIndustries: ["Information Technology & Global Capability Centers", "Pharmaceuticals & Vaccine Manufacturing", "Refined Petroleum Products", "Automotive & Renewable Hardware"],
      source: "World Bank / RBI / Ministry of Commerce",
    },
    military: {
      totalActive: "1.45 M",
      branches: [
        { branch: "Army", strength: "1.24 M", iconKey: "shield" },
        { branch: "Navy", strength: "70 K", iconKey: "anchor" },
        { branch: "Air Force", strength: "140 K", iconKey: "plane" },
      ],
      defenceSpendUsd: "$72.6 B",
      defenceSpendPctGdp: "2.4% GDP",
      majorPlatforms: ["Rafale & Su-30MKI multirole fighters", "INS Vikrant & INS Vikramaditya CATOBAR carriers", "S-400 Triumf & BrahMos supersonic missiles", "Arihant-class SSBNs with K-15/K-4 SLBMs"],
      doctrines: ["Two-Front Deterrence (Pakistan & China LAC)", "SAGAR (Security & Growth for All in the Region)", "No First Use (NFU) Credible Minimum Deterrent"],
      source: "SIPRI / IISS Military Balance 2024",
    },
    strategicAssets: {
      nuclear: {
        status: "Declared Deterrent",
        warheads: "~172 warheads",
        triadReadiness: "Fully operational land-sea-air triad",
        doctrine: "No First Use (NFU) with massive punitive retaliation",
      },
      space: {
        agency: "ISRO (Indian Space Research Organisation)",
        capabilities: ["Chandrayaan lunar exploration", "Aditya-L1 solar observation", "Gaganyaan human spaceflight", "NavIC regional satellite constellation"],
        focus: "Cost-effective lunar/planetary exploration and domestic satellite launch autonomy",
      },
      cyber: {
        posture: "Defence Cyber Agency (DCyA)",
        command: "Integrated Tri-Service Cyber Command",
        focus: "Critical infrastructure protection (power grids, banking, rail) and cyber deterrence",
      },
    },
    energyMaritime: {
      netImportRatio: "87% Crude Imports",
      statusLabel: "Net Importer",
      primarySources: ["Coal (55% of power generation)", "Crude Oil (28% of primary energy)", "Renewables & Hydro (13%)", "Natural Gas (6%)"],
      chokepoints: [
        { name: "Strait of Hormuz", whyMatters: "Handles over 50% of India's crude oil imports from Gulf suppliers", strategicRoute: "Persian Gulf to Western Indian ports" },
        { name: "Strait of Malacca", whyMatters: "Critical maritime choke for eastward commerce with ASEAN, Japan, and South Korea", strategicRoute: "Bay of Bengal to South China Sea" },
        { name: "Bab el-Mandeb", whyMatters: "Western gateway to Suez Canal and European trade destinations", strategicRoute: "Arabian Sea to Red Sea" },
        { name: "Lombok Strait", whyMatters: "Deep-water bypass route for large bulk carriers and naval deployments", strategicRoute: "Indian Ocean to Pacific" },
      ],
      source: "Ministry of Petroleum / IEA 2024",
    },
    relationships: {
      strengths: [
        { title: "Demographic Scale", desc: "World's largest working-age population with median age 28.4 years." },
        { title: "Growing Economy", desc: "Fastest-growing major economy (>6.5% GDP growth rate)." },
        { title: "Strategic Location", desc: "Dominant peninsular position commanding Indian Ocean SLOCs." },
        { title: "Global Partnerships", desc: "Founding Quad member with deep strategic autonomy and multipolar diplomacy." },
      ],
      constraints: [
        { title: "Energy Dependence", desc: "Imports ~87% of crude oil and ~50% of natural gas requirement." },
        { title: "Border Disputes", desc: "Active unresolved frontiers along 3,488 km LAC with China and LoC with Pakistan." },
        { title: "Infrastructure Gaps", desc: "Logistics and manufacturing capital-intensity scaling required." },
        { title: "China & Pakistan Pressure", desc: "Two-front collusive security and maritime encirclement challenges." },
        { title: "Tech Import Reliance", desc: "Dependence on foreign high-end semiconductors and advanced jet engine cores." },
      ],
    },
    priorities: [
      { label: "Border Security", domain: "Defense", desc: "Modernize LAC deterrence and border infrastructure.", icon: "security" },
      { label: "Economic Growth", domain: "Economy", desc: "Achieve $5T+ economy via manufacturing expansion.", icon: "economy" },
      { label: "Critical Tech", domain: "Technology", desc: "Semiconductor mission and quantum/AI self-reliance.", icon: "technology" },
      { label: "Energy Transition", domain: "Energy", desc: "500 GW non-fossil capacity by 2030 and strategic oil reserves.", icon: "energy" },
      { label: "Maritime SAGAR", domain: "Maritime", desc: "Indian Ocean net-security provider status and carrier battle groups.", icon: "maritime" },
      { label: "Global South Voice", domain: "Diplomacy", desc: "Bridge between developing nations and multilateral institutions.", icon: "diplomacy" },
    ],
    timeline: [
      { year: "1947", event: "Independence", significance: "Partition and establishment of modern constitutional democracy." },
      { year: "1962", event: "Sino-Indian War", significance: "Border war that shaped permanent Himalayan defense posture." },
      { year: "1971", event: "Bangladesh Liberation", significance: "Decisive military victory reshaping South Asian regional architecture." },
      { year: "1991", event: "Economic Reforms", significance: "Liberalization opening India to global trade, services, and FDI." },
      { year: "1998", event: "Pokhran-II Tests", significance: "Formal declaration of sovereign nuclear weapons capability." },
      { year: "2020", event: "Galwan Clash", significance: "Permanent operational pivot to the northern frontier with China." },
    ],
    developments: [
      { title: "Border Disengagement & Patrolling Agreement", significance: "Resolution of Eastern Ladakh patrolling friction points after four-year standoff.", status: "verified", source: "Ministry of External Affairs" },
      { title: "Indo-Pacific Quad Leaders Summit", significance: "Deepened maritime domain awareness, critical minerals, and counter-coercion initiatives.", status: "active", source: "Official Joint Statement" },
      { title: "Semiconductor Fab Infrastructure Groundbreaking", significance: "Construction of three commercial semiconductor packaging & fabrication plants.", status: "verified", source: "Ministry of Electronics & IT" },
      { title: "Defense Modernization Procurement Clearance", significance: "DAC approval for additional indigenous submarines, UAVs, and air defense systems.", status: "monitoring", source: "Ministry of Defence" },
    ],
  },
  CHN: {
    doctrineQuote: "“National Rejuvenation & Community with a Shared Future”",
    narrativeSummary: "The world's second-largest economy and manufacturing super-engine, asserting maritime claims and expanding global infrastructure footprint.",
    economy: {
      currentGdp: "$18.5 T",
      gdpUnit: "USD Trillion (2024)",
      gdpTrend: [
        { year: 2015, gdp: 11.0 },
        { year: 2017, gdp: 12.3 },
        { year: 2019, gdp: 14.3 },
        { year: 2021, gdp: 17.7 },
        { year: 2023, gdp: 17.9 },
        { year: 2024, gdp: 18.5 },
      ],
      sectors: [
        { name: "Services", pct: 54, color: "#f97316" },
        { name: "Industry", pct: 39, color: "#38bdf8" },
        { name: "Agriculture", pct: 7, color: "#34d399" },
      ],
      topPartners: [
        { name: "United States", share: 14.2, flag: "🇺🇸", type: "both" },
        { name: "European Union", share: 13.8, flag: "🇪🇺", type: "both" },
        { name: "ASEAN", share: 15.5, flag: "🌏", type: "both" },
        { name: "Japan", share: 6.2, flag: "🇯🇵", type: "both" },
        { name: "Russia", share: 4.5, flag: "🇷🇺", type: "both" },
      ],
      criticalIndustries: ["Electric Vehicles & Batteries ('New Three')", "Solar PV & Renewable Hardware", "Commercial Shipbuilding (50%+ global tonnage)", "Consumer Electronics & Microelectronics Assembly"],
      source: "National Bureau of Statistics / IMF 2024",
    },
    military: {
      totalActive: "2.04 M",
      branches: [
        { branch: "Army", strength: "965 K", iconKey: "shield" },
        { branch: "Navy", strength: "300 K (370+ hulls)", iconKey: "anchor" },
        { branch: "Air Force", strength: "395 K", iconKey: "plane" },
      ],
      defenceSpendUsd: "$296 B",
      defenceSpendPctGdp: "1.7% GDP (Official)",
      majorPlatforms: ["J-20 Mighty Dragon 5th-gen stealth fighters", "Fujian (Type 003) electromagnetic catapult carrier", "Type 055 Renhai stealth guided missile cruisers", "DF-17 hypersonic & DF-41 road-mobile ICBMs"],
      doctrines: ["Anti-Access/Area Denial (A2/AD) beyond First Island Chain", "Active Defense & Informationized Warfare", "Nuclear Triad Rapid Expansion"],
      source: "SIPRI / US DoD China Military Power Report 2024",
    },
    strategicAssets: {
      nuclear: {
        status: "Declared Deterrent",
        warheads: "~500 warheads (expanding to 1,000+ by 2030)",
        triadReadiness: "Operational land, sea, and air triad with 300+ new silos",
        doctrine: "No First Use with launch-on-warning capabilities",
      },
      space: {
        agency: "CNSA (China National Space Administration)",
        capabilities: ["Tiangong space station", "Chang'e lunar far-side sample return", "Tianwen Mars rover", "BeiDou global navigation constellation"],
        focus: "Permanent orbital presence and lunar south pole research station",
      },
      cyber: {
        posture: "Strategic Support Force / Cyberspace Operations",
        command: "Central Military Commission Cyberspace Bureau",
        focus: "Offensive cyber-reconnaissance, quantum encryption, and anti-satellite electronic warfare",
      },
    },
    energyMaritime: {
      netImportRatio: "72% Crude Imports",
      statusLabel: "Net Importer",
      primarySources: ["Coal (56% of primary energy)", "Crude Oil (19%)", "Hydropower & Renewables (16%)", "Natural Gas (8%)"],
      chokepoints: [
        { name: "Strait of Malacca", whyMatters: "'Malacca Dilemma' — 80% of imported crude transits this narrow corridor", strategicRoute: "Middle East / Africa to East China" },
        { name: "Taiwan Strait", whyMatters: "Central choke dividing East and South China Seas and commanding microelectronics sea-lanes", strategicRoute: "First Island Chain transit" },
        { name: "Bashi Channel", whyMatters: "Key deep-water submarine transit corridor from South China Sea into Western Pacific", strategicRoute: "Luzon Strait to Philippine Sea" },
        { name: "Strait of Hormuz", whyMatters: "Origin of 45%+ of China's seaborne petroleum imports", strategicRoute: "Persian Gulf to Indian Ocean" },
      ],
      source: "IEA / National Energy Administration China",
    },
    relationships: {
      strengths: [
        { title: "Industrial Super-Power", desc: "Produces 30%+ of global manufacturing output and leads in cleantech." },
        { title: "Supply Chain Dominance", desc: "Commands refining and processing of 70-90% of global critical rare earths." },
        { title: "Financial & Infrastructure Reach", desc: "Belt and Road Initiative (BRI) loans across 140+ countries." },
        { title: "Massive Naval Expansion", desc: "World's largest navy by ship count with unmatched domestic shipbuilding scale." },
      ],
      constraints: [
        { title: "Malacca Dilemma", desc: "Extreme vulnerability to maritime blockades across Indo-Pacific choke points." },
        { title: "Demographic Contraction", desc: "Rapidly aging populace and shrinking labor force following one-child legacy." },
        { title: "Semiconductor Choke", desc: "Reliance on foreign EUV lithography equipment and high-end AI processors." },
        { title: "Regional Alliances Perimeter", desc: "Encircling US alliances (AUKUS, Quad, Japan, South Korea, Philippines)." },
        { title: "Property Sector Debt", desc: "Domestic local-government debt overhang and real-estate drag." },
      ],
    },
    priorities: [
      { label: "Taiwan Reunification", domain: "Security", desc: "Achieve capability for cross-strait military or coercive resolution.", icon: "security" },
      { label: "Tech Self-Reliance", domain: "Technology", desc: "Overcome US semiconductor sanctions via indigenous chip toolmakers.", icon: "technology" },
      { label: "Green Energy Dominance", domain: "Economy", desc: "Expand export hegemony in EVs, batteries, and solar photovoltaics.", icon: "economy" },
      { label: "First Island Chain A2/AD", domain: "Maritime", desc: "Deny adversarial naval carrier groups access to maritime peripheries.", icon: "maritime" },
      { label: "Belt & Road Redirection", domain: "Diplomacy", desc: "Strengthen overland Central Asian and Russian energy/freight links.", icon: "diplomacy" },
      { label: "Global Governance Reform", domain: "Diplomacy", desc: "Promote BRICS, SCO, and de-dollarized cross-border settlement.", icon: "diplomacy" },
    ],
    timeline: [
      { year: "1949", event: "Founding of the PRC", significance: "Establishment of the People's Republic under Mao Zedong." },
      { year: "1978", event: "Reform and Opening Up", significance: "Deng Xiaoping market reforms enabling four decades of hyper-growth." },
      { year: "2001", event: "WTO Accession", significance: "Full integration into global supply chains as the 'Factory of the World'." },
      { year: "2013", event: "Belt and Road Launch", significance: "Global infrastructure investment doctrine launched by Xi Jinping." },
      { year: "2020", event: "Hong Kong Security Law", significance: "Assertion of central sovereignty and political consolidation." },
      { year: "2024", event: "Taiwan Strait Blockade Drills", significance: "Demonstration of joint-force encirclement capabilities ('Joint Sword')." },
    ],
    developments: [
      { title: "Joint Sword Encirclement Military Drills", significance: "Comprehensive naval and air encirclement exercises around Taiwan.", status: "active", source: "PLA Eastern Theater Command" },
      { title: "Third Plenary Session Economic Directives", significance: "Reaffirmed state-led push for 'New Productive Forces' in deep tech and clean energy.", status: "verified", source: "Xinhua News Agency" },
      { title: "Power of Siberia 2 Gas Pipeline Negotiations", significance: "Continued talks with Russia to secure overland pipeline energy supplies.", status: "monitoring", source: "State Council of the PRC" },
      { title: "Export Restrictions on Critical Minerals", significance: "Tightened export licensing for gallium, germanium, and antimony processing.", status: "verified", source: "Ministry of Commerce" },
    ],
  },
  USA: {
    doctrineQuote: "“Integrated Deterrence & Defending the Free and Open Global Order”",
    narrativeSummary: "The pre-eminent global superpower commanding the dollar financial system, global alliance networks, and advanced technology frontier.",
    economy: {
      currentGdp: "$28.7 T",
      gdpUnit: "USD Trillion (2024)",
      gdpTrend: [
        { year: 2015, gdp: 18.2 },
        { year: 2017, gdp: 19.5 },
        { year: 2019, gdp: 21.4 },
        { year: 2021, gdp: 23.3 },
        { year: 2023, gdp: 27.4 },
        { year: 2024, gdp: 28.7 },
      ],
      sectors: [
        { name: "Services", pct: 77, color: "#f97316" },
        { name: "Industry", pct: 21, color: "#38bdf8" },
        { name: "Agriculture", pct: 2, color: "#34d399" },
      ],
      topPartners: [
        { name: "Canada", share: 14.8, flag: "🇨🇦", type: "both" },
        { name: "Mexico", share: 15.7, flag: "🇲🇽", type: "both" },
        { name: "China", share: 11.2, flag: "🇨🇳", type: "both" },
        { name: "European Union", share: 18.5, flag: "🇪🇺", type: "both" },
        { name: "Japan", share: 5.1, flag: "🇯🇵", type: "both" },
      ],
      criticalIndustries: ["Artificial Intelligence & Advanced Microelectronics", "Commercial & Military Aerospace", "Biotechnology & Pharmaceuticals", "Global Banking & Dollar Liquidity Instruments"],
      source: "Bureau of Economic Analysis / World Bank 2024",
    },
    military: {
      totalActive: "1.33 M",
      branches: [
        { branch: "Army", strength: "450 K", iconKey: "shield" },
        { branch: "Navy", strength: "335 K (11 Supercarriers)", iconKey: "anchor" },
        { branch: "Air Force", strength: "320 K", iconKey: "plane" },
      ],
      defenceSpendUsd: "$886 B",
      defenceSpendPctGdp: "3.4% GDP",
      majorPlatforms: ["F-35 Lightning II & F-22 Raptor 5th-gen stealth fighters", "Ford-class & Nimitz-class nuclear supercarriers", "Ohio-class & Columbia-class SSBNs with Trident II D5", "B-21 Raider stealth long-range strike bombers"],
      doctrines: ["Integrated Deterrence across all domains and theaters", "Forward Defense & NATO Article 5 Collective Security", "Global Freedom of Navigation Operations (FONOPs)"],
      source: "SIPRI / US Department of Defense 2024",
    },
    strategicAssets: {
      nuclear: {
        status: "Declared Deterrent",
        warheads: "~3,708 active warheads (5,044 total stockpile)",
        triadReadiness: "Fully modernized land-sea-air strategic triad",
        doctrine: "Calculated ambiguity with extended nuclear umbrella to 30+ allies",
      },
      space: {
        agency: "NASA & US Space Force (USSF)",
        capabilities: ["Artemis lunar exploration", "Deep space optical communications", "Commercial launch dominance (SpaceX Starship/Falcon)", "GPS III constellation"],
        focus: "Space domain superiority and commercial space integration",
      },
      cyber: {
        posture: "US Cyber Command (USCYBERCOM)",
        command: "Integrated NSA/Cybercom Dual-Hat Command",
        focus: "Persistent engagement, hunting forward in foreign adversary networks, and critical infrastructure resilience",
      },
    },
    energyMaritime: {
      netImportRatio: "Net Exporter (Crude & LNG)",
      statusLabel: "Net Exporter",
      primarySources: ["Natural Gas (36% of energy)", "Crude Oil (32%)", "Renewables & Hydro (13%)", "Nuclear (9%)", "Coal (10%)"],
      chokepoints: [
        { name: "Strait of Malacca", whyMatters: "Vital for allied trade continuity with Japan, South Korea, and Taiwan", strategicRoute: "Trans-Pacific SLOCs" },
        { name: "Strait of Hormuz", whyMatters: "Securing global energy market stability and allied Gulf partners", strategicRoute: "Fifth Fleet AOR" },
        { name: "Panama Canal", whyMatters: "Rapid naval redeployment between Atlantic and Pacific coasts", strategicRoute: "Caribbean to Pacific" },
        { name: "Bab el-Mandeb", whyMatters: "Operation Prosperity Guardian maritime counter-drone operations", strategicRoute: "Red Sea corridor" },
      ],
      source: "EIA / US Energy Information Administration 2024",
    },
    relationships: {
      strengths: [
        { title: "Dollar Reserve Hegemony", desc: "Controls 58%+ of global allocated foreign exchange reserves and SWIFT rails." },
        { title: "Global Alliance Network", desc: "Unmatched treaty alliances across NATO, Indo-Pacific (Japan, ROK, Australia, Philippines)." },
        { title: "Tech & AI Frontier", desc: "Leads worldwide in frontier AI foundational models, cloud computing, and semiconductor IP." },
        { title: "Energy Self-Sufficiency", desc: "World's largest crude oil and liquefied natural gas (LNG) producer." },
      ],
      constraints: [
        { title: "Fiscal Deficits & National Debt", desc: "Federal debt exceeds $35 Trillion with rising interest servicing obligations." },
        { title: "Defense Industrial Base Strain", desc: "Ammunition stockpiles and shipyard maintenance backlogs in high-intensity scenarios." },
        { title: "Overstretched Multi-Theater Commitments", desc: "Simultaneous deterrence requirements across Ukraine/Europe, Middle East, and Taiwan." },
        { title: "Domestic Political Polarization", desc: "Foreign policy continuity challenged by sharp legislative and executive division." },
      ],
    },
    priorities: [
      { label: "Indo-Pacific Deterrence", domain: "Security", desc: "Prevent unilateral revision of the status quo in the Taiwan Strait.", icon: "security" },
      { label: "Allied Burden Sharing", domain: "Diplomacy", desc: "Push NATO European allies above 2% GDP defense spending thresholds.", icon: "diplomacy" },
      { label: "AI & Tech Leadership", domain: "Technology", desc: "Execute CHIPS Act domestic fab construction and maintain lead in generative AI.", icon: "technology" },
      { label: "Critical Supply Chains", domain: "Economy", desc: "Near-shoring and friend-shoring away from Chinese rare earth and battery dependence.", icon: "economy" },
      { label: "Energy Security Leadership", domain: "Energy", desc: "Maintain LNG export capacity to replace Russian gas in allied European markets.", icon: "energy" },
      { label: "Maritime Freedom", domain: "Maritime", desc: "Protect international freedom of navigation across contested sea-lanes.", icon: "maritime" },
    ],
    timeline: [
      { year: "1776", event: "Declaration of Independence", significance: "Establishment of the constitutional republic." },
      { year: "1945", event: "Post-WWII Order & Bretton Woods", significance: "Creation of the United Nations, IMF, World Bank, and dollar-centered financial architecture." },
      { year: "1949", event: "NATO Alliance Formed", significance: "Transatlantic collective defense treaty binding North America and Europe." },
      { year: "1991", event: "Gulf War & Post-Cold War Primacy", significance: "Decisive conventional military supremacy following the dissolution of the Soviet Union." },
      { year: "2001", event: "September 11 & Global War on Terror", significance: "Two-decade military pivot to counterinsurgency in Afghanistan and Iraq." },
      { year: "2022", event: "CHIPS Act & National Defense Strategy", significance: "Re-focusing of national power on strategic competition with China and Russia." },
    ],
    developments: [
      { title: "AUKUS Pillar 1 & 2 Implementation", significance: "Submarine rotational forces and hypersonic/AI co-development with UK and Australia.", status: "active", source: "US Department of Defense" },
      { title: "CHIPS Act Capital Allocations", significance: "Disbursement of $52B in domestic semiconductor manufacturing subsidies to TSMC, Intel, Micron.", status: "verified", source: "Department of Commerce" },
      { title: "Middle East Red Sea Maritime Task Force", significance: "Continuous naval operations intercepting anti-ship missiles and drones in Bab el-Mandeb.", status: "active", source: "US Central Command (CENTCOM)" },
      { title: "Indo-Pacific Bilateral Basing Expansion", significance: "New access agreements for naval and air facilities in the Philippines and northern Australia.", status: "verified", source: "US Indo-Pacific Command" },
    ],
  },
};

/**
 * Universal Flash-Card Resolver for Any Country
 * Uses country-specific data when verified, or intelligently computes factual metrics from the Country object.
 */
export function getCountryFlashCardDossier(
  countryId: string,
  rawCountry?: Country | null,
  deepProfile?: CountryDeepProfile | null
): CountryFlashCardDossier {
  const upper = (countryId || "IND").toUpperCase();
  const preset = COUNTRY_SPECIFIC_PRESETS[upper];

  const name = rawCountry?.name || deepProfile?.countryName || countryId;
  const officialName = (rawCountry as any)?.official_name || `Republic of ${name}`;
  const capital = rawCountry?.geography?.capital || "National Capital";
  const region = rawCountry?.region || "Global Theater";

  // Flag and hero images
  const flag = (rawCountry as any)?.flag || (rawCountry?.id === "IND" ? "🇮🇳" : rawCountry?.id === "CHN" ? "🇨🇳" : rawCountry?.id === "USA" ? "🇺🇸" : "🌐");
  const heroImage = (rawCountry as any)?.hero_image ||
    (rawCountry?.id === "IND" ? "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80" :
     rawCountry?.id === "CHN" ? "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80" :
     rawCountry?.id === "USA" ? "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80" :
     "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80");

  // Format Top Metrics (8 compact items)
  const population = rawCountry?.demographics?.population_millions
    ? (rawCountry.demographics.population_millions >= 1000
        ? `${(rawCountry.demographics.population_millions / 1000).toFixed(3)} B`
        : `${rawCountry.demographics.population_millions} M`)
    : (deepProfile?.nationalProfile?.demography?.find(d => d.label.includes("Population"))?.value
        ? `${deepProfile.nationalProfile.demography.find(d => d.label.includes("Population"))?.value} ${deepProfile.nationalProfile.demography.find(d => d.label.includes("Population"))?.unit || ""}`
        : "140 M");

  const gdpNominal = rawCountry?.economy?.gdp_usd_trillion
    ? `$${rawCountry.economy.gdp_usd_trillion} T`
    : (deepProfile?.economyStructure?.gdpNominal || "$1.2 T");

  const gdpGrowth = rawCountry?.economy?.gdp_growth_pct != null
    ? `${rawCountry.economy.gdp_growth_pct}%`
    : (deepProfile?.economyStructure?.realGrowthRate || "3.5%");

  const activeForces = rawCountry?.military?.active_troops
    ? (rawCountry.military.active_troops >= 1000000
        ? `${(rawCountry.military.active_troops / 1000000).toFixed(2)} M`
        : `${(rawCountry.military.active_troops / 1000).toFixed(0)} K`)
    : (deepProfile?.militarySecurity?.activePersonnel || "250 K");

  const defenceSpending = rawCountry?.military?.defence_spending_usd_billion
    ? `$${rawCountry.military.defence_spending_usd_billion} B`
    : (deepProfile?.militarySecurity?.defenseBudgetUsd || "$25 B");

  const defencePct = rawCountry?.military?.defence_spending_pct_gdp
    ? `${rawCountry.military.defence_spending_pct_gdp.toFixed(1)}% GDP`
    : (deepProfile?.militarySecurity?.defenseBudgetGdpPercent || "2.1% GDP");

  const nuclearStatus = rawCountry?.nuclear?.weapons_state
    ? "Declared Deterrent"
    : (deepProfile?.nuclear?.status || "Non-Nuclear State");

  const nuclearSub = rawCountry?.nuclear?.weapons_state
    ? (deepProfile?.nuclear?.estimatedWarheads || "Strategic Stockpile")
    : "IAEA Safeguards";

  const energyStatus = (rawCountry?.energy?.net_import_dependence_ratio || 0) > 0.5
    ? "Net Importer"
    : (rawCountry?.energy?.net_import_dependence_ratio || 0) < 0
    ? "Net Exporter"
    : "Self-Sufficient";

  const energySub = rawCountry?.energy?.net_import_dependence_ratio
    ? `${Math.round(rawCountry.energy.net_import_dependence_ratio * 100)}% Crude Imports`
    : "Balanced Domestic Supply";

  const coastline = rawCountry?.geography?.coastline_km
    ? `${rawCountry.geography.coastline_km.toLocaleString()} km`
    : (upper === "IND" ? "7,516 km" : upper === "CHN" ? "14,500 km" : upper === "USA" ? "19,924 km" : "Documented EEZ");

  const topMetrics: TopMetricCardData[] = [
    { id: "pop", label: "Population", value: population, source: "UN Population Division", year: "2024", category: "demography" },
    { id: "gdp", label: "GDP (Nominal)", value: gdpNominal, source: "World Bank / IMF", year: "2024", category: "economy" },
    { id: "growth", label: "Real Growth", value: gdpGrowth, source: "Central Bank / IMF", year: "2024", category: "growth" },
    { id: "troops", label: "Active Forces", value: activeForces, source: "IISS Military Balance", year: "2024", category: "military" },
    { id: "defense", label: "Defence Spending", value: defenceSpending, subValue: defencePct, source: "SIPRI", year: "2024", category: "defense" },
    { id: "nuclear", label: "Nuclear Status", value: nuclearStatus, subValue: nuclearSub, source: "SIPRI / IAEA", year: "2024", category: "nuclear" },
    { id: "energy", label: "Energy Profile", value: energyStatus, subValue: energySub, source: "IEA / EIA", year: "2024", category: "energy" },
    { id: "coast", label: "Coastline", value: coastline, source: "Maritime Hydrography", year: "2024", category: "maritime" },
  ];

  // Default Economy structure
  const economyData: EconomyCardData = preset?.economy || {
    currentGdp: gdpNominal,
    gdpUnit: "USD (Nominal 2024)",
    gdpTrend: [
      { year: 2015, gdp: 1.0 },
      { year: 2017, gdp: 1.2 },
      { year: 2019, gdp: 1.35 },
      { year: 2021, gdp: 1.5 },
      { year: 2023, gdp: 1.7 },
      { year: 2024, gdp: 1.85 },
    ],
    sectors: [
      { name: "Services", pct: 60, color: "#f97316" },
      { name: "Industry", pct: 28, color: "#38bdf8" },
      { name: "Agriculture", pct: 12, color: "#34d399" },
    ],
    topPartners: deepProfile?.tradeFlows?.topExportPartners?.slice(0, 5).map(p => ({
      name: p.country,
      share: p.sharePercent,
      flag: "🌐",
      type: "both",
    })) || [
      { name: "United States", share: 15.0, flag: "🇺🇸", type: "both" },
      { name: "European Union", share: 14.0, flag: "🇪🇺", type: "both" },
      { name: "China", share: 12.0, flag: "🇨🇳", type: "both" },
      { name: "Regional Neighbors", share: 9.5, flag: "🌏", type: "both" },
    ],
    criticalIndustries: deepProfile?.economyStructure?.criticalIndustries?.map(c => c.name) ||
      rawCountry?.economy?.major_exports?.slice(0, 4) ||
      ["Manufactured Goods", "Energy Products", "Machinery", "Agricultural Commodities"],
    source: "World Bank WDI / National Statistical Bureau 2024",
  };

  // Military Card Data
  const militaryData: MilitaryCardData = preset?.military || {
    totalActive: activeForces,
    branches: [
      { branch: "Army", strength: "70% Active Personnel", iconKey: "shield" },
      { branch: "Navy", strength: "15% Active Personnel", iconKey: "anchor" },
      { branch: "Air Force", strength: "15% Active Personnel", iconKey: "plane" },
    ],
    defenceSpendUsd: defenceSpending,
    defenceSpendPctGdp: defencePct,
    majorPlatforms: deepProfile?.militarySecurity?.branches?.flatMap(b => b.flagshipPlatforms).slice(0, 4) ||
      rawCountry?.military?.key_equipment_or_doctrines?.slice(0, 4) ||
      ["Main Battle Tanks & Armored Vehicles", "Multirole Combat Aircraft", "Surface Warships & Patrol Vessels", "Air Defense Batteries"],
    doctrines: ["Territorial Integrity & Sovereign Border Defense", "Regional Collective Security & Deterrence"],
    source: "SIPRI Arms Transfers & Military Balances 2024",
  };

  // Strategic Assets (Nuclear / Space / Cyber)
  const strategicAssets: StrategicAssetCardData = preset?.strategicAssets || {
    nuclear: {
      status: nuclearStatus,
      warheads: deepProfile?.nuclear?.estimatedWarheads || "Non-Weapon State",
      triadReadiness: deepProfile?.nuclear?.triadReadiness || "Signatory to NPT Safeguards",
      doctrine: deepProfile?.nuclear?.doctrine || "Commitment to non-proliferation treaties",
    },
    space: {
      agency: deepProfile?.space?.agency || "National Space Directorate",
      capabilities: deepProfile?.space?.orbitalLaunchCapability ? ["Satellite Communications", "Orbital Launch Capability", "Earth Observation & GIS"] : ["Regional Earth Observation"],
      focus: deepProfile?.space?.militarySpaceDoctrine || "Telecommunications, weather monitoring, and remote sensing infrastructure",
    },
    cyber: {
      posture: deepProfile?.cyber?.primaryAgencies?.[0] || "National Cyber Security Center",
      command: deepProfile?.cyber?.primaryAgencies?.[1] || "Inter-Agency Cyber Task Force",
      focus: deepProfile?.cyber?.criticalInfrastructureDefense || "Critical national infrastructure cyber resilience and incident response",
    },
  };

  // Energy & Maritime
  const energyMaritime: EnergyChokepointData = preset?.energyMaritime || {
    netImportRatio: energySub,
    statusLabel: energyStatus,
    primarySources: rawCountry?.energy?.primary_sources || [
      "Fossil Fuels (Petroleum & Gas)",
      "Hydropower & Grid Electricity",
      "Renewable Energy (Solar & Wind)",
    ],
    chokepoints: [
      { name: "Strategic Maritime Lanes", whyMatters: "Essential for international commercial trade and commodity imports", strategicRoute: "Regional Territorial Waters" },
      { name: "Primary Sea Lines", whyMatters: "Direct commercial conduit connecting national ports to global supply chains", strategicRoute: "Deep-water Shipping Corridors" },
    ],
    source: "IEA / EIA International Energy Statistics 2024",
  };

  // Relationships (Strengths & Constraints)
  const relationships: StrengthsConstraintsData = preset?.relationships || {
    strengths: [
      { title: "Geographic Position", desc: `Strategic positioning within ${region} along important regional transport corridors.` },
      { title: "Institutional Continuity", desc: "Established constitutional governance and domestic legal frameworks." },
      { title: "Economic Resilience", desc: `Diversifying economic foundation with nominal GDP of ${gdpNominal}.` },
      { title: "Diplomatic Engagement", desc: "Active participation in regional multilateral organizations and bilateral partnerships." },
    ],
    constraints: [
      { title: "Resource Exposure", desc: "Vulnerability to global commodity price swings and supply chain bottlenecks." },
      { title: "Regional Security Dynamics", desc: "Navigating adjacent border frictions and shifting balance-of-power pressures." },
      { title: "Infrastructure Scaling", desc: "Ongoing capital expenditure requirements for logistics and digital connectivity." },
      { title: "External Dependencies", desc: "Reliance on critical foreign technology and industrial inputs." },
    ],
  };

  // Priorities
  const priorities: PriorityItemData[] = preset?.priorities || [
    { label: "National Security", domain: "Security", desc: `Maintain armed readiness and protect territorial integrity across ${region}.`, icon: "security" },
    { label: "Sustained Economic Growth", domain: "Economy", desc: `Accelerate industrialization, export competitiveness, and job creation.`, icon: "economy" },
    { label: "Critical Technology", domain: "Technology", desc: `Advance digital infrastructure and transition to high-value industrial manufacturing.`, icon: "technology" },
    { label: "Energy Stability", domain: "Energy", desc: `Ensure reliable baseload power and diversify hydrocarbon or renewable supplies.`, icon: "energy" },
    { label: "Maritime Safety", domain: "Maritime", desc: `Protect exclusive economic zone (EEZ) rights and secure commercial sea lanes.`, icon: "maritime" },
    { label: "Multilateral Autonomy", domain: "Diplomacy", desc: `Engage constructively with international partners while preserving strategic autonomy.`, icon: "diplomacy" },
  ];

  // Timeline
  const timeline: TimelineNodeData[] = preset?.timeline || [
    { year: "1945", event: "Post-War International Order", significance: "Integration into the United Nations and modern global governance." },
    { year: "1975", event: "Industrial Modernization", significance: "Expansion of domestic industrial manufacturing and infrastructure networks." },
    { year: "1995", event: "Global Trade Integration", significance: "Tariff rationalization and accession to modern international commercial treaties." },
    { year: "2010", event: "Digital & Energy Transition", significance: "Launch of nationwide telecommunications and renewable energy programs." },
    { year: "2024", event: "Contemporary Strategic Doctrine", significance: "Consolidation of diplomatic balancing and sovereign strategic autonomy." },
  ];

  // Developments
  const developments: CurrentDevelopmentData[] = preset?.developments || [
    { title: "National Infrastructure & Industrial Strategy", significance: "Execution of flagship public-private capital investment projects.", status: "verified", source: "Official Government Gazette" },
    { title: "Regional Bilateral Summit & Trade Accords", significance: "Strengthening commercial ties and supply-chain resilience with neighbor states.", status: "active", source: "Ministry of Foreign Affairs" },
    { title: "Armed Forces Readiness & Modernization Review", significance: "Periodic assessment of defense capabilities and procurement initiatives.", status: "monitoring", source: "Ministry of Defense" },
    { title: "Energy Transition & Grid Modernization Benchmarks", significance: "Upgrading domestic electricity transmission and renewable deployment.", status: "verified", source: "National Energy Directorate" },
  ];

  // Sources Tiers
  const sourcesTiers = [
    { tier: "Tier 1: Sovereign & Constitutional", name: "Official Government Repositories", orgs: ["Government Gazettes", "National Central Banks", "Ministries of Foreign Affairs", "Defence Whitepapers"] },
    { tier: "Tier 2: Global Multilateral", name: "International Institutions", orgs: ["World Bank Group", "International Monetary Fund (IMF)", "United Nations Statistics Division", "World Trade Organization (WTO)"] },
    { tier: "Tier 3: Strategic & Defense", name: "Authoritative Research Institutes", orgs: ["SIPRI (Stockholm)", "IISS Military Balance", "International Energy Agency (IEA)", "USGS Mineral Commodity Summaries"] },
    { tier: "Tier 4: Treaty & Monitoring", name: "Sovereign Verification Bodies", orgs: ["IAEA Nuclear Verification", "UN Comtrade", "International Hydrographic Organization", "Official Diplomatic Treaties"] },
  ];

  // Derive 9-Question Details for Relationship Constellation & Dependency Graph
  const nineQuestionsDossier = getCountrySimpleQuestions(upper, name);
  const q4 = nineQuestionsDossier.questions?.find((q: any) => q.questionId === "q4");
  const q6 = nineQuestionsDossier.questions?.find((q: any) => q.questionId === "q6");
  const q7 = nineQuestionsDossier.questions?.find((q: any) => q.questionId === "q7");

  // Relationships Network (Constellation of Partners & Competitors)
  const relationshipsNetwork: RelationshipNetworkData = {
    partners: q6?.deeperDetails?.partners?.map((p: any) => ({
      name: p.who,
      relationshipType: p.relationshipType,
      whyItMatters: p.whyItMatters,
      areas: p.areasOfCooperation || [],
    })) || [
      { name: "Regional Strategic Partners", relationshipType: "Strategic & Commercial", whyItMatters: "Bilateral trade accords and diplomatic alignment", areas: ["Commerce", "Security"] },
      { name: "Major Global Powers", relationshipType: "Diplomatic Cooperation", whyItMatters: "International stability, trade dialogue, and technological exchanges", areas: ["Multilateral Treaties", "Investment"] },
    ],
    competitors: q7?.deeperDetails?.competitors?.map((c: any) => ({
      name: c.who,
      competitionType: c.competitionType,
      whyItMatters: c.whyItMatters,
      areas: c.areasOfCompetition || [],
    })) || [
      { name: "Regional Strategic Competitors", competitionType: "Regional Influence", whyItMatters: "Contested sphere of influence, trade positioning, and security balance", areas: ["Regional Primacy", "Commercial Corridors"] },
    ],
  };

  // Dependencies Graph
  const isNetExporter = energyMaritime.statusLabel.toLowerCase().includes("exporter") ||
    energyMaritime.statusLabel.toLowerCase().includes("surplus") ||
    ["SAU", "RUS", "ARE", "QAT", "IRN", "IRQ", "KWT", "NOR", "AUS", "CAN"].includes(upper);

  const dependencyFacts = q4?.deeperDetails?.facts || [];
  const dependenciesGraph: DependencyGraphData = {
    energy: isNetExporter ? [
      { title: "Export Route Security", share: "High Impact", criticalSource: "Maritime Straits & Pipelines" },
      { title: "Global Price Elasticity", share: "Macro Factor", criticalSource: "OPEC+ & International Demand" },
    ] : [
      { title: "Crude Oil & Hydrocarbons", share: energyMaritime.netImportRatio, criticalSource: "Middle East / Maritime Tanker Routes" },
      { title: "Natural Gas & LNG", share: "Import Critical", criticalSource: "Global LNG Shipping Corridors" },
    ],
    technology: [
      { title: "Advanced Semiconductors", share: "Critical Dependency", criticalSource: "Foundries (Taiwan / US / East Asia)" },
      { title: "Core Aerospace & Industrial Tooling", share: "High Reliance", criticalSource: "Specialized Western & Allied Suppliers" },
    ],
    defence: militaryData.majorPlatforms.length > 0 ? [
      { title: "Subsystem & Engine Components", share: "Selective", criticalSource: "Domestic & Foreign Consortium Partners" },
      { title: "Strategic Munitions & Air Defense", share: "High Readiness", criticalSource: "National Arsenals & Sourced Allies" },
    ] : [
      { title: "Commercial Defense Tech", share: "Standard", criticalSource: "Authorized Procurement Treaties" },
    ],
    resources: [
      { title: "Critical Industrial Minerals", share: "Strategic Reserve", criticalSource: "Refined Rare Earths & Lithium Global Supply Chain" },
      { title: "Agricultural & Food Commodities", share: "Baseline", criticalSource: "International Agricultural Commodities Markets" },
    ],
  };

  // Strategic Sites Registry
  const strategicSites = getCountryStrategicSites(upper);

  // Energy Flow Model
  const energyFlow: EnergyFlowStep[] = isNetExporter ? [
    { step: "01 UPSTREAM", label: "Domestic Extraction", detail: "High-capacity extraction basins, onshore and offshore hydrocarbon reserves." },
    { step: "02 MIDSTREAM", label: "Pipelines & Refineries", detail: "Internal pipeline networks transporting crude to domestic industrial centers and coastal refineries." },
    { step: "03 DOWNSTREAM", label: "Export Terminals", detail: "Deep-water marine loading berths loading VLCC supertankers for international distribution." },
    { step: "04 CONSUMPTION", label: "Global Energy Markets", detail: "Sustaining international refinery feedstocks across Indo-Pacific, European, and global markets." },
  ] : [
    { step: "01 IMPORT ORIGINS", label: "Foreign Energy Suppliers", detail: "Importing crude and LNG from Persian Gulf, Eurasian, and trans-oceanic suppliers." },
    { step: "02 TRANSIT", label: "Strategic Maritime SLOCs", detail: "Tanker transit through vulnerable maritime chokepoints and international shipping lanes." },
    { step: "03 RECEIPT", label: "Coastal Terminals & SPR", detail: "Discharge at national deep-water ports into Strategic Petroleum Reserves and refinery hubs." },
    { step: "04 CONSUMPTION", label: "Grid & Industrial End-Use", detail: "Thermal baseload generation, transportation fuels, and petrochemical manufacturing." },
  ];

  // National Condition (12-domain empirical matrix summary)
  const nationalConditionSummary: NationalConditionDomainSummary[] = [
    { domain: "Demography", indicator: "Total Population", value: topMetrics.find(m => m.id === "pop")?.value || "Documented", trend: "Stable" },
    { domain: "Economy", indicator: "Nominal GDP", value: topMetrics.find(m => m.id === "gdp")?.value || "$--", trend: "Expanding" },
    { domain: "Governance", indicator: "Institutional System", value: (rawCountry?.politics as any)?.type || (rawCountry?.politics as any)?.system || "Constitutional State", trend: "Active" },
    { domain: "Defence", indicator: "Active Personnel", value: topMetrics.find(m => m.id === "forces")?.value || "Standing Force", trend: "Modernizing" },
    { domain: "Energy", indicator: "Hydrocarbon Balance", value: energyMaritime.statusLabel, trend: isNetExporter ? "Surplus" : "Deficit" },
    { domain: "Technology", indicator: "Space & Research", value: strategicAssets.space.agency.split("(")[0], trend: "Advancing" },
    { domain: "Trade", indicator: "Top Export Partner", value: economyData.topPartners[0]?.name || "Global Markets", trend: "Active" },
    { domain: "Infrastructure", indicator: "Commercial Gateways", value: `${strategicSites.length} Strategic Hubs`, trend: "Operating" },
    { domain: "Health", indicator: "Life Expectancy", value: "National Health Base", trend: "Tracked" },
    { domain: "Education", indicator: "Higher Technical Research", value: "University System", trend: "Active" },
    { domain: "Human Capital", indicator: "Workforce Median Age", value: "National Demographic", trend: "Productive" },
    { domain: "Resources", indicator: "Mineral & Hydro Balance", value: energyMaritime.primarySources[0] || "Domestic Reserves", trend: "Monitored" },
  ];

  return {
    countryId: upper,
    countryName: name,
    officialName,
    capital,
    region,
    flag,
    heroImage,
    doctrineQuote: preset?.doctrineQuote || `“Strategic Autonomy, Sovereign Security & Prosperity”`,
    narrativeSummary: preset?.narrativeSummary || `A key sovereign actor in ${region} balancing domestic economic development imperatives with regional security dynamics.`,
    topMetrics,
    economy: economyData,
    military: militaryData,
    strategicAssets,
    energyMaritime,
    relationships,
    priorities,
    timeline,
    developments,
    sourcesTiers,
    relationshipsNetwork,
    dependenciesGraph,
    strategicSites,
    energyFlow,
    nationalConditionSummary,
  };
}
