import type { CountrySimpleQuestionsDossier } from "./types";

export const USA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "USA",
  countryName: "United States",
  tagline: "The global superpower anchoring maritime alliances, dollar primacy, and advanced technological innovation",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "The United States is the world's largest economy, its foremost military power, and the primary architect of the post-World War II global alliance system.",
      whyItMatters: "Its military reach, global treaty network, dollar currency reserve status, and technological dominance make it the central anchor of international security and trade.",
      deeperDetails: {
        facts: [
          "World's largest nominal economy ($28.78 trillion GDP, representing roughly 25% of the global total).",
          "Maintains over 750 military bases in more than 80 foreign countries and territories.",
          "Operates 11 nuclear-powered supercarriers, enabling persistent global power projection across every major ocean.",
          "Commands the US Dollar, which comprises nearly 58% of allocated global foreign exchange reserves and over 85% of foreign exchange transactions."
        ],
        metrics: {
          "Population": "336 Million",
          "Nominal GDP": "$28.78 Trillion",
          "Defense Budget": ">$840 Billion",
          "Global Treaty Allies": "50+ Nations"
        },
        sources: ["US Bureau of Economic Analysis", "SIPRI Arms Transfers", "IMF COFER Data"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "The United States wants to preserve its global military and technological edge, prevent any rival power from dominating Europe or East Asia, and protect open international sea lanes.",
      whyItMatters: "To maintain its standard of living and global influence, the US depends on an open world economy, freedom of navigation, and stable democratic alliances.",
      deeperDetails: {
        facts: [
          "Preserve the 'Rules-Based International Order' established via the UN, Bretton Woods institutions, and mutual defense treaties.",
          "Prevent a single hegemon from dominating the Eurasian continent (the classical geopolitical objective articulated by Nicholas Spykman and Zbigniew Brzezinski).",
          "Maintain absolute leadership in foundational technologies: artificial intelligence, advanced semiconductors, quantum computing, and biotechnology.",
          "Strengthen 'Integrated Deterrence' combining conventional forces, cyber capabilities, economic sanctions, and allied cooperation."
        ],
        sources: ["US National Security Strategy (NSS)", "US National Defense Strategy (NDS)"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "The United States is world-class in global expeditionary military power, frontier technological research, deep capital financial markets, and energy production.",
      whyItMatters: "No other nation can deploy carrier strike groups anywhere in the world within days, finance trillion-dollar tech revolutions, or export vast quantities of oil, gas, and food simultaneously.",
      deeperDetails: {
        facts: [
          "Military & Power Projection: Operates 11 CATOBAR nuclear aircraft carriers, fifth-generation stealth fighters (F-35, F-22), and an intercontinental nuclear triad with unmatched command and control.",
          "Technology & Innovation: Home to the world's most valuable tech companies (Apple, Microsoft, Nvidia, Alphabet, Amazon), leading AI research hubs (OpenAI, Google DeepMind, Anthropic), and top research universities.",
          "Energy Independence: World's largest crude oil and natural gas producer thanks to the shale revolution, exporting millions of barrels of LNG and crude daily.",
          "Financial Primacy: Deepest capital markets in the world (NYSE, NASDAQ), with the US Treasury market serving as the risk-free benchmark for global capital."
        ],
        metrics: {
          "Aircraft Carriers": "11 Nuclear Supercarriers",
          "Oil Production": ">13 Million Barrels/Day",
          "Tech Market Cap": ">$12 Trillion (Top 5)",
          "Foreign Aid": ">$60 Billion Annually"
        },
        sources: ["US Energy Information Administration (EIA)", "DoD Comptroller", "World Federation of Exchanges"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "The United States depends heavily on foreign semiconductor manufacturing in Taiwan, critical mineral refining in China, and foreign factory production for affordable consumer goods.",
      whyItMatters: "If a conflict or blockade cuts off Taiwan's advanced computer chip foundries, modern American industries—from smartphones to fighter jet radar systems—would face catastrophic production halts.",
      deeperDetails: {
        facts: [
          "Semiconductor Fabrication: Relies on Taiwan Semiconductor Manufacturing Company (TSMC) for over 90% of the world's most advanced (<5nm) microchips.",
          "Critical Minerals: Highly dependent on Chinese refining for rare earth elements (neodymium, dysprosium) vital for electric motors, missile guidance, and wind turbines.",
          "Consumer Goods & Electronics: Imports hundreds of billions in assembled consumer tech, medical supplies, and industrial components from East Asia and Mexico.",
          "Fiscal Borrowing: Relies on foreign central banks and investors to purchase trillions of dollars in US Treasury debt to fund federal budget deficits."
        ],
        metrics: {
          "Advanced Chips from Taiwan": ">90%",
          "National Debt": ">$35 Trillion",
          "Merchandise Trade Deficit": ">$1 Trillion"
        },
        sources: ["US Geological Survey (USGS)", "Semiconductor Industry Association (SIA)", "US Department of the Treasury"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "The United States faces intense domestic political polarization, ballooning national debt, and an industrial base that struggles to build ships and ammunition fast enough for prolonged war.",
      whyItMatters: "Internal political division can delay vital foreign-policy decisions and budget authorizations, causing foreign allies to question long-term American reliability.",
      deeperDetails: {
        facts: [
          "Political Polarization: Partisan gridlock hampers timely defense appropriations, judicial appointments, and long-term treaty ratifications.",
          "Defense Industrial Capacity: US shipyards face chronic delays in submarine and frigate maintenance, while artillery ammunition stockpiles were severely depleted by conflicts in Ukraine and the Middle East.",
          "Public Debt Burden: Federal debt exceeding 120% of GDP with annual interest payments surpassing $1 trillion, gradually crowding out discretionary domestic and defense spending.",
          "Overextended Commitments: Simultaneously deterring Russia in Europe, China in the Western Pacific, and Iran and its proxies in the Middle East strains military readiness."
        ],
        sources: ["Congressional Budget Office (CBO)", "Government Accountability Office (GAO)", "Center for Strategic and International Studies (CSIS)"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "The United States relies on a global network of treaty allies including NATO members, Japan, South Korea, Australia, and close strategic partners like Israel and India.",
      whyItMatters: "Allies provide the US with forward military bases, shared intelligence networks, and international diplomatic legitimacy that no isolated rival can match.",
      deeperDetails: {
        facts: [
          "The US is the only superpower with formal mutual defense treaties covering over 50 nations across Europe, the Americas, and the Indo-Pacific."
        ],
        partners: [
          {
            who: "NATO (European Allies)",
            relationshipType: "Collective Defense Treaty (Article 5)",
            whyItMatters: "32-nation alliance providing a combined defensive shield against Russian aggression in Europe and shared command structures.",
            areasOfCooperation: ["Collective deterrence", "Interoperable weapon standards", "Joint exercises and nuclear sharing", "Sanctions coordination"],
            areasOfCompetition: ["Burden-sharing (demanding 2%+ GDP defense spending)", "European strategic autonomy debates"],
            dependencies: ["European base access (Ramstein, Rota, Aviano)"],
            strategicSignificance: "The world's most powerful military alliance, anchoring Euro-Atlantic security.",
            source: "North Atlantic Treaty Organization Official Records"
          },
          {
            who: "Japan",
            relationshipType: "Indo-Pacific Cornerstone Treaty Ally",
            whyItMatters: "Hosts over 54,000 US military personnel (US Forces Japan) and key naval/air hubs (Yokosuka, Kadena) essential for Pacific deterrence.",
            areasOfCooperation: ["First Island Chain defense", "Aegis ballistic missile defense", "Semiconductor R&D", "Quad partnership"],
            areasOfCompetition: ["Agricultural import quotas", "Steel acquisition reviews"],
            strategicSignificance: "The indispensable base for American military operations in East Asia.",
            source: "US-Japan Security Consultative Committee (2+2) Communiqués"
          },
          {
            who: "Five Eyes (UK, Australia, Canada, New Zealand)",
            relationshipType: "Intelligence Sharing Alliance",
            whyItMatters: "Provides comprehensive global signals intelligence (SIGINT) coverage across every continent and ocean.",
            areasOfCooperation: ["AUKUS submarine technology", "Signals intelligence", "Cyber defense", "Space surveillance"],
            strategicSignificance: "The deepest intelligence-sharing mechanism in human history.",
            source: "Five Eyes Intelligence Oversight and Review Council"
          },
          {
            who: "South Korea (ROK)",
            relationshipType: "Mutual Defense Treaty Ally",
            whyItMatters: "Hosts 28,500 US troops deterring North Korean aggression and anchoring high-tech semiconductor collaboration.",
            areasOfCooperation: ["Extended nuclear deterrence (Washington Declaration)", "Combined Forces Command", "Battery & chip supply chains"],
            strategicSignificance: "Crucial democratic outpost on the Asian mainland.",
            source: "US-ROK Security Consultative Meeting Statements"
          }
        ],
        sources: ["US Department of State Treaties in Force", "US Department of Defense"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "The United States identifies China as its primary strategic pacing competitor and Russia as an immediate, acute security threat.",
      whyItMatters: "Beijing possesses the economic and technological scale to challenge the US globally, while Moscow threatens European security and possesses the world's largest nuclear arsenal.",
      deeperDetails: {
        facts: [
          "US national defense planning focuses on deterring a multi-theatre conflict involving coordinated revisionist powers."
        ],
        competitors: [
          {
            who: "China",
            competitionType: "Pacing Superpower Competitor",
            areasOfCompetition: ["Indo-Pacific maritime dominance", "Semiconductor and AI export controls", "Taiwan security", "Global supply chain independence and clean tech"],
            whyItMatters: "The only competitor possessing the economic, diplomatic, military, and technological capacity to challenge the global order.",
            source: "US National Defense Strategy; Annual Threat Assessment of the US Intelligence Community"
          },
          {
            who: "Russia",
            competitionType: "Acute Regional & Nuclear Rival",
            areasOfCompetition: ["European territorial integrity (Ukraine)", "Nuclear arms control frameworks", "Cyber espionage and disinformation operations", "Arctic resource corridors"],
            whyItMatters: "Possesses roughly 5,580 nuclear warheads and willingness to employ conventional force to redraw international borders.",
            source: "SIPRI Nuclear Forces Data; US European Command Strategy"
          },
          {
            who: "Iran & North Korea",
            competitionType: "Regional Asymmetric Adversaries",
            areasOfCompetition: ["Ballistic missiles and nuclear proliferation", "Middle East regional proxy networks (Hormuz/Red Sea transit)", "Cyber warfare and illicit finance"],
            whyItMatters: "Directly threaten critical trade chokepoints and forward-deployed US forces.",
            source: "US Central Command (CENTCOM); US Indo-Pacific Command (INDOPACOM)"
          }
        ],
        sources: ["Office of the Director of National Intelligence (ODNI)", "SIPRI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "The United States enjoys the most advantageous geography of any major nation: bordered by two vast oceans and flanked by friendly, non-threatening neighbors.",
      whyItMatters: "The Atlantic and Pacific oceans act as immense defensive moats protecting the American homeland from conventional invasion, while allowing the US Navy to project power globally.",
      deeperDetails: {
        facts: [
          "Continental Isolation: Separated by roughly 5,000 km of ocean from Europe and 8,000 km from East Asia, rendering mainland invasion virtually impossible without warning.",
          "Friendly Land Borders: Shares peaceful borders with Canada (8,891 km) and Mexico (3,145 km), eliminating the need for large standing armies deployed on perimeter homeland defense.",
          "Navigable Inland River System: The Mississippi River basin and Great Lakes provide over 25,000 km of natural, ultra-low-cost inland freight transport linking prime agricultural heartlands to deepwater ports.",
          "Maritime Chokepoints: Controls or guarantees access to pivotal maritime waterways, including the Panama Canal access routes, Bering Strait, and Caribbean sea lines of communication."
        ],
        sources: ["Peter Zeihan, 'The Accidental Superpower'", "US Army Corps of Engineers Waterways"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "The United States maintains its global influence through resilient institutional self-correction, an unmatched global alliance system, and rapid technological reinvention.",
      whyItMatters: "Observers who prematurely predict American collapse often underestimate its ability to innovate through crises, attract global talent, and mobilize vast economic resources under challenge.",
      deeperDetails: {
        facts: [
          "Demographic Advantage: Unlike competitors facing steep demographic contraction, the US maintains higher population vitality sustained by continuous international immigration.",
          "Dollar Dominance Durability: No credible alternative currency currently possesses the liquidity, legal protections, and open capital account necessary to replace the US dollar as the primary global reserve asset.",
          "Alliance Stickiness: Foreign treaty allies remain bound to Washington by mutual defense guarantees and integrated military commands that alternative coalitions cannot replicate."
        ],
        sources: ["Joseph S. Nye, 'Is the American Century Over?'", "Foreign Affairs"]
      }
    }
  ]
};
