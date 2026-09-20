export interface GeopoliticalTerm {
  id: string;
  term: string;
  aliases?: string[];
  category: "Security & Military" | "Diplomacy & Strategy" | "Economy & Trade" | "Geography & Oceans";
  simpleDefinition: string; // Layer 1: What does this mean? (Simple everyday English)
  whyItMatters: string;     // Layer 2: Why it matters in world affairs
  example: string;          // Layer 3: Concrete real-world example
}

export const GEOPOLITICAL_TERMS: Record<string, GeopoliticalTerm> = {
  chokepoint: {
    id: "chokepoint",
    term: "Chokepoint",
    aliases: ["maritime chokepoint", "strait", "choke point"],
    category: "Geography & Oceans",
    simpleDefinition: "A narrow route (usually a sea strait or canal) that is very important for shipping, where large volumes of global trade or oil must pass through.",
    whyItMatters: "If a conflict or accident blocks a chokepoint, oil and trade shipments stop, fuel prices spike worldwide, and factories run out of supplies.",
    example: "The Strait of Malacca carries about 80% of China's crude oil imports, and the Strait of Hormuz carries roughly 20% of the world's petroleum."
  },
  strategic_autonomy: {
    id: "strategic_autonomy",
    term: "Strategic Autonomy",
    aliases: ["strategic autonomy", "independent foreign policy", "non-alignment"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "The ability of a country to make its own foreign policy, security, and trade choices without depending too heavily on any single foreign power.",
    whyItMatters: "Countries with strategic autonomy avoid being dragged into other nations' wars and can trade or partner with competing powers based purely on their own national interest.",
    example: "India buys oil from Russia while simultaneously cooperating with the United States in the Quad to safeguard maritime security."
  },
  deterrence: {
    id: "deterrence",
    term: "Deterrence",
    aliases: ["conventional deterrence", "deterrent"],
    category: "Security & Military",
    simpleDefinition: "Stopping an opponent from attacking by making them realize that the cost and punishment of an attack will be far higher than any gain.",
    whyItMatters: "Deterrence is the primary way countries maintain peace in tense regions without fighting everyday wars.",
    example: "South Korea deploys high-precision missile systems to show North Korea that any artillery strike will be met with immediate destruction of launch sites."
  },
  nuclear_deterrence: {
    id: "nuclear_deterrence",
    term: "Nuclear Deterrence",
    aliases: ["nuclear deterrent", "nuclear umbrella", "second strike capability"],
    category: "Security & Military",
    simpleDefinition: "Using the threat of nuclear retaliation to convince enemies that launching an attack would result in total destruction.",
    whyItMatters: "It creates a condition where direct full-scale war between major nuclear powers becomes suicidal, drastically lowering the chance of world wars.",
    example: "The United States and Russia maintain nuclear triads (submarines, bombers, and land silos) to guarantee neither can launch a surprise strike without being destroyed in return."
  },
  indo_pacific: {
    id: "indo_pacific",
    term: "Indo-Pacific",
    aliases: ["indo-pacific region", "asia-pacific"],
    category: "Geography & Oceans",
    simpleDefinition: "The huge connected maritime region stretching from the eastern coast of Africa through the Indian Ocean to the Pacific Ocean and the Americas.",
    whyItMatters: "Over 60% of world trade and the majority of global economic growth happen here, making it the central stage for 21st-century diplomacy and competition.",
    example: "The Quad (India, US, Japan, Australia) operates across the Indo-Pacific to ensure international sea routes remain open and free for navigation."
  },
  balance_of_power: {
    id: "balance_of_power",
    term: "Balance of Power",
    aliases: ["balance of power", "regional balance"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "A situation where military and economic strength is distributed so that no single country is powerful enough to bully or dominate everyone else.",
    whyItMatters: "When one nation becomes too dominant, it often invades neighbors or dictates their policies. Maintaining a balance prevents regional hegemony.",
    example: "Smaller Southeast Asian nations balance between the United States and China so neither country gains exclusive control over the region."
  },
  defence_industry: {
    id: "defence_industry",
    term: "Defence Industry",
    aliases: ["defense industry", "military-industrial base", "indigenous defense"],
    category: "Security & Military",
    simpleDefinition: "The factories, shipyards, aerospace companies, and research labs that design, build, and maintain a nation's military equipment and weapons.",
    whyItMatters: "Relying on other nations for weapons leaves a country vulnerable to arms embargos and supply cutoffs during a war.",
    example: "India's 'Make in India' and South Korea's K-Defense programs aim to build tanks, jet fighters, and submarines domestically rather than importing them."
  },
  economic_dependence: {
    id: "economic_dependence",
    term: "Economic Dependence",
    aliases: ["economic dependence", "trade dependence", "import dependency"],
    category: "Economy & Trade",
    simpleDefinition: "When one country relies so heavily on another country for essential goods (like oil, food, microchips, or revenue) that cutting ties would cause severe damage.",
    whyItMatters: "A country can use another's economic dependence as leverage or blackmail to force diplomatic concessions.",
    example: "Before 2022, Germany relied on Russia for more than half its natural gas, making it difficult to respond quickly to geopolitical crises."
  },
  strategic_partnership: {
    id: "strategic_partnership",
    term: "Strategic Partnership",
    aliases: ["strategic partnership", "bilateral partnership"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "A long-term cooperation agreement between two countries on defense, intelligence, energy, or trade, without signing a binding mutual-defense military alliance.",
    whyItMatters: "It gives countries flexibility to coordinate on common threats without losing the freedom to stay out of each other's conflicts.",
    example: "The strategic partnership between India and France includes joint naval exercises, fighter jet sales, and space research, but does not obligate either to fight in the other's wars."
  },
  geopolitical_rivalry: {
    id: "geopolitical_rivalry",
    term: "Geopolitical Rivalry",
    aliases: ["geopolitical rivalry", "strategic competition", "great power competition"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "A sustained, long-term competition between countries for regional power, military security, economic dominance, and international prestige.",
    whyItMatters: "Rivalries shape global alliances, military spending, technology sanctions, and the risk of localized conflicts.",
    example: "The rivalry between China and the United States across the Western Pacific over trade rules, semiconductors, and the status of Taiwan."
  },
  foreign_policy: {
    id: "foreign_policy",
    term: "Foreign Policy",
    aliases: ["foreign policy", "diplomatic doctrine"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "The overall strategy, goals, and official choices a government uses to manage its relations with other countries and international organizations.",
    whyItMatters: "Foreign policy determines whether a country secures peaceful trade and strong alliances or ends up isolated and in conflict.",
    example: "India's 'Neighborhood First' policy prioritizes close ties and economic assistance to nearby South Asian neighbors like Sri Lanka, Nepal, and Bangladesh."
  },
  military_doctrine: {
    id: "military_doctrine",
    term: "Military Doctrine",
    aliases: ["military doctrine", "defense doctrine", "operational doctrine"],
    category: "Security & Military",
    simpleDefinition: "The official fundamental rules and instructions that guide an armed force on how to organize, train, deploy, and fight.",
    whyItMatters: "Doctrine tells military commanders what kind of conflicts to prepare for and signals to neighbors what circumstances might trigger armed retaliation.",
    example: "India's nuclear doctrine states 'No First Use', meaning India will only use nuclear weapons in retaliation to a nuclear attack on its territory or forces."
  },
  sanctions: {
    id: "sanctions",
    term: "Sanctions",
    aliases: ["economic sanctions", "trade embargo", "financial sanctions"],
    category: "Economy & Trade",
    simpleDefinition: "Economic penalties, trade bans, asset freezes, or financial restrictions imposed on a country to punish bad behavior and force policy changes.",
    whyItMatters: "They allow governments to punish aggression and isolate adversaries economically without sending troops or starting a shooting war.",
    example: "Western sanctions on Russia after 2022 restricted Russian banks from SWIFT and capped Russian sea-borne crude oil prices."
  },
  supply_chain: {
    id: "supply_chain",
    term: "Supply Chain",
    aliases: ["global supply chain", "critical supply chains"],
    category: "Economy & Trade",
    simpleDefinition: "The entire international network of mining, raw materials, factories, transport, and ports required to make and deliver a finished product.",
    whyItMatters: "Modern high-tech products like smartphones, electric vehicles, and jet engines require parts from dozens of nations; a single disruption can halt entire industries.",
    example: "Over 90% of advanced semiconductor microchips are manufactured in Taiwan; any interruption there would stall global electronics manufacturing."
  },
  maritime_security: {
    id: "maritime_security",
    term: "Maritime Security",
    aliases: ["maritime security", "sea lane security", "freedom of navigation"],
    category: "Geography & Oceans",
    simpleDefinition: "Protecting oceans, sea routes, territorial waters, and ports from piracy, illegal fishing, naval aggression, and blockades.",
    whyItMatters: "Over 80% of all international merchandise by volume travels by sea. Unsafe waters disrupt food and energy supplies worldwide.",
    example: "Navies from India, the US, and Europe patrol the Gulf of Aden and the Red Sea to protect merchant cargo vessels from drone and pirate attacks."
  },
  exclusive_economic_zone: {
    id: "exclusive_economic_zone",
    term: "Exclusive Economic Zone (EEZ)",
    aliases: ["eez", "exclusive economic zone"],
    category: "Geography & Oceans",
    simpleDefinition: "The sea zone extending up to 200 nautical miles (370 km) from a country's coast where that country has the exclusive legal right to fish, drill for oil, and build structures.",
    whyItMatters: "EEZs contain the vast majority of the world's commercial fisheries and offshore oil and gas reserves, frequently sparking maritime boundary disputes.",
    example: "China's 'Nine-Dash Line' claim in the South China Sea overlaps with the recognized EEZs of the Philippines, Vietnam, and Malaysia."
  },
  sea_lines_of_communication: {
    id: "sea_lines_of_communication",
    term: "Sea Lines of Communication (SLOC)",
    aliases: ["sloc", "slocs", "sea lanes"],
    category: "Geography & Oceans",
    simpleDefinition: "The primary maritime highways used for commercial container ships, oil tankers, and naval fleets across the oceans.",
    whyItMatters: "Countries depend on open SLOCs for economic survival; navies are built primarily to protect their own SLOCs and threaten those of adversaries during wartime.",
    example: "The sea lane connecting the Persian Gulf through the northern Indian Ocean to East Asia is the lifeblood of Asian energy imports."
  },
  multialignment: {
    id: "multialignment",
    term: "Multi-alignment",
    aliases: ["multi-alignment", "issue-based alignment", "omni-alignment"],
    category: "Diplomacy & Strategy",
    simpleDefinition: "Working closely with several rival global powers at the same time on different specific issues, without committing exclusively to any single bloc.",
    whyItMatters: "It maximizes a country's diplomatic room to maneuver and prevents it from becoming a proxy or vassal of any single superpower.",
    example: "India participates in the Quad with Western democracies, while also being an active member of BRICS and the SCO alongside China and Russia."
  },
  two_front_challenge: {
    id: "two_front_challenge",
    term: "Two-Front Challenge",
    aliases: ["two front war", "two-front threat"],
    category: "Security & Military",
    simpleDefinition: "The strategic security danger of having to fight or deter two hostile neighboring countries at the same time along two separate borders.",
    whyItMatters: "It forces a military to divide its troops, fighter jets, ammunition, and budget between two frontiers rather than concentrating strength.",
    example: "India maintains military doctrines and mountain strike corps to deter simultaneous coordinated hostility from both Pakistan and China."
  }
};

export function lookupTerm(termStr: string): GeopoliticalTerm | undefined {
  if (!termStr) return undefined;
  const clean = termStr.toLowerCase().trim().replace(/[^a-z0-9\s]/g, "");
  
  // Direct key lookup
  const directKey = clean.replace(/\s+/g, "_");
  if (GEOPOLITICAL_TERMS[directKey]) return GEOPOLITICAL_TERMS[directKey];

  // Alias or name search
  for (const item of Object.values(GEOPOLITICAL_TERMS)) {
    if (item.term.toLowerCase() === clean) return item;
    if (item.aliases?.some(a => a.toLowerCase() === clean || clean.includes(a.toLowerCase()))) {
      return item;
    }
  }
  return undefined;
}
