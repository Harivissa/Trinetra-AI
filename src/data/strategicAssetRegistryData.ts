// TRINETRA AI — Strategic Asset Registry
// Catalog of critical ports, naval bases, airfields, nuclear installations, space facilities, refineries, and corridors.

export interface StrategicAsset {
  id: string;
  name: string;
  countryId: string;
  countryName: string;
  type:
    | "naval_base"
    | "deepwater_port"
    | "air_base"
    | "nuclear_facility"
    | "space_facility"
    | "petroleum_refinery"
    | "lng_terminal"
    | "chokepoint_bastion"
    | "tech_cluster"
    | "pipeline_hub";
  location: {
    lat: number;
    lng: number;
    stateOrRegion: string;
  };
  function: string;
  strategicRole: string;
  relatedFlows: string[];
  relatedCountries: string[];
  sourceId: string;
  verificationDate: string;
}

export const STRATEGIC_ASSETS_DATA: StrategicAsset[] = [
  {
    id: "ASSET-IND-KARWAR",
    name: "INS Kadamba (Project Seabird), Karwar",
    countryId: "IND",
    countryName: "India",
    type: "naval_base",
    location: { lat: 14.8167, lng: 74.1333, stateOrRegion: "Karnataka, Arabian Sea" },
    function: "India's largest dedicated deep-water naval base exclusively for military warships and submarines without commercial maritime congestion.",
    strategicRole: "Western Fleet operational sanctuary, home base for aircraft carrier INS Vikramaditya, future carrier berthing, and nuclear submarine pens.",
    relatedFlows: ["Western Indian Ocean security patrols", "Arabian Sea anti-piracy", "SLOC protection"],
    relatedCountries: ["USA", "FRA", "ARE", "OMN"],
    sourceId: "SOURCE-IISS-001",
    verificationDate: "2026-07-20",
  },
  {
    id: "ASSET-IND-ANDAMAN-PORTBLAIR",
    name: "INS Jarawa & Andaman and Nicobar Command (ANC), Port Blair",
    countryId: "IND",
    countryName: "India",
    type: "chokepoint_bastion",
    location: { lat: 11.6234, lng: 92.7265, stateOrRegion: "Andaman & Nicobar Islands, Bay of Bengal" },
    function: "India's only unified tri-service theater command integrating Army, Navy, and Air Force assets overseeing the Six Degree and Ten Degree Channels.",
    strategicRole: "Forward surveillance and deterrence sentinel over the northern approaches to the Strait of Malacca. Anchors maritime domain awareness in the eastern Indian Ocean.",
    relatedFlows: ["Malacca transit monitoring", "Bay of Bengal surveillance", "QUAD maritime tracking"],
    relatedCountries: ["USA", "JPN", "AUS", "SGP", "IDN"],
    sourceId: "SOURCE-IISS-001",
    verificationDate: "2026-08-01",
  },
  {
    id: "ASSET-IND-JAMNAGAR",
    name: "Jamnagar Refinery Complex (Reliance & Nayara)",
    countryId: "IND",
    countryName: "India",
    type: "petroleum_refinery",
    location: { lat: 22.4707, lng: 70.0577, stateOrRegion: "Jamnagar, Gujarat" },
    function: "World's largest petroleum refining hub with aggregate processing capacity exceeding 1.4 million barrels per day (68 MMTPA).",
    strategicRole: "Converts heavy sour crudes into clean high-spec fuels; drives India's refined petroleum export revenue to European, Asian, and African markets.",
    relatedFlows: ["Persian Gulf crude imports", "Refined diesel/aviation fuel exports to Europe", "Petrochemical feedstocks"],
    relatedCountries: ["RUS", "SAU", "IRQ", "ARE", "NLD"],
    sourceId: "SOURCE-IEA-001",
    verificationDate: "2026-08-10",
  },
  {
    id: "ASSET-IND-SHAR",
    name: "Satish Dhawan Space Centre (SDSC SHAR), Sriharikota",
    countryId: "IND",
    countryName: "India",
    type: "space_facility",
    location: { lat: 13.7259, lng: 80.2266, stateOrRegion: "Andhra Pradesh, Coromandel Coast" },
    function: "Primary spaceport of the Indian Space Research Organisation (ISRO) with multiple launch pads for PSLV, GSLV, and LVM3 rockets.",
    strategicRole: "Guarantees independent sovereign orbital access for communication, Earth observation, military reconnaissance (RISAT/Cartosat), and lunar/planetary missions.",
    relatedFlows: ["Military satellite deployment", "Commercial small-satellite ride-shares", "NavIC regional navigation"],
    relatedCountries: ["USA", "FRA", "JPN"],
    sourceId: "SOURCE-GOV-IND-001",
    verificationDate: "2026-07-28",
  },
  {
    id: "ASSET-IND-KUDANKULAM",
    name: "Kudankulam Nuclear Power Plant (KKNPP)",
    countryId: "IND",
    countryName: "India",
    type: "nuclear_facility",
    location: { lat: 8.1697, lng: 77.7125, stateOrRegion: "Tamil Nadu, Southern Peninsular Tip" },
    function: "India's highest-capacity commercial nuclear station deploying Russian VVER-1000 pressurized water reactors under IAEA safeguards.",
    strategicRole: "Base-load clean electrical supply for southern industrial grids; key anchor of India-Russia civilian nuclear cooperation.",
    relatedFlows: ["Russian nuclear fuel assembly imports", "Southern grid baseload power"],
    relatedCountries: ["RUS"],
    sourceId: "SOURCE-UN-001",
    verificationDate: "2026-06-15",
  },
  {
    id: "ASSET-CHN-DJIBOUTI",
    name: "PLA Support Base, Doraleh, Djibouti",
    countryId: "CHN",
    countryName: "People's Republic of China",
    type: "naval_base",
    location: { lat: 11.595, lng: 43.065, stateOrRegion: "Djibouti, Bab el-Mandeb Strait" },
    function: "China's first overseas military base with deep-water pier capable of berthing aircraft carriers and replenishment ships.",
    strategicRole: "Forward logistics support for PLA Navy anti-piracy escorts in the Gulf of Aden and rapid crisis response capability across the Western Indian Ocean.",
    relatedFlows: ["Gulf of Aden maritime patrols", "Red Sea transit security", "Evacuation logistics"],
    relatedCountries: ["DJI", "USA", "FRA", "JPN"],
    sourceId: "SOURCE-SIPRI-001",
    verificationDate: "2026-07-15",
  },
  {
    id: "ASSET-CHN-HAINAN-YULIN",
    name: "Yulin Naval Base & Submarine Pens, Sanya, Hainan",
    countryId: "CHN",
    countryName: "People's Republic of China",
    type: "naval_base",
    location: { lat: 18.216, lng: 109.533, stateOrRegion: "Hainan Island, South China Sea" },
    function: "South Sea Fleet primary bastion featuring underground cavernous submarine pens carved into coastal hills and deep-water docks for Type 002/003 aircraft carriers.",
    strategicRole: "Home base for China's nuclear ballistic missile submarines (SSBNs, Type 094 Jin-class); secures sea-based second-strike continuous deterrence patrols in the deep South China Sea basin.",
    relatedFlows: ["South China Sea bastion patrols", "SSBN nuclear deterrence", "Carrier strike deployments"],
    relatedCountries: ["USA", "TWN", "PHL", "VNM"],
    sourceId: "SOURCE-IISS-001",
    verificationDate: "2026-08-05",
  },
  {
    id: "ASSET-USA-DIEGOGARCIA",
    name: "Naval Support Facility Diego Garcia",
    countryId: "USA",
    countryName: "United States (UK Territory)",
    type: "air_base",
    location: { lat: -7.3195, lng: 72.4228, stateOrRegion: "Chagos Archipelago, Central Indian Ocean" },
    function: "Joint US-UK military facility featuring deep-water anchorage, submarine tender support, and 3,600m runway capable of hosting B-2, B-52, and B-1B strategic bombers.",
    strategicRole: "Central Indian Ocean unsinkable logistics and long-range bomber staging hub projecting power into the Persian Gulf, South Asia, and Southeast Asia.",
    relatedFlows: ["Indian Ocean bomber forward deployments", "Maritime prepositioned ships", "Satellite tracking"],
    relatedCountries: ["GBR", "IND", "MUS", "AUS"],
    sourceId: "SOURCE-GOV-USA-001",
    verificationDate: "2026-07-12",
  },
];

export function getAssetsForCountry(countryId: string): StrategicAsset[] {
  const norm = countryId.toUpperCase();
  return STRATEGIC_ASSETS_DATA.filter((a) => a.countryId === norm || a.relatedCountries.includes(norm));
}

export function getAllAssets(): StrategicAsset[] {
  return STRATEGIC_ASSETS_DATA;
}
