import type { CountrySimpleQuestionsDossier } from "./types";

export const CHINA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "CHN",
  countryName: "China",
  tagline: "The world's manufacturing superpower seeking regional primacy and global technological leadership",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "China is the world's second-largest economy, the globe's foremost industrial manufacturing powerhouse, and the primary superpower challenger to the United States.",
      whyItMatters: "Almost every major global supply chain—from consumer electronics and solar panels to active pharmaceutical ingredients and electric vehicle batteries—relies on Chinese factories.",
      deeperDetails: {
        facts: [
          "Second-largest nominal economy ($18.53 trillion GDP) and largest economy in purchasing power parity (PPP).",
          "Maintains the world's largest standing active military (People's Liberation Army: over 2.03 million personnel) and the largest naval fleet by hull count (>370 combatants).",
          "Governed by the Chinese Communist Party (CCP) under General Secretary Xi Jinping with centralized state planning.",
          "Commands over 30% of total global manufacturing output."
        ],
        metrics: {
          "Population": "1.41 Billion",
          "Nominal GDP": "$18.53 Trillion",
          "Active Military": "2,035,000",
          "Foreign Reserves": ">$3.2 Trillion"
        },
        sources: ["National Bureau of Statistics China", "SIPRI Yearbook", "US DoD China Military Power Report"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "China wants to secure undisputed control over Taiwan, dominate its maritime periphery within the First Island Chain, and become the world's leading economic and technological power by 2049.",
      whyItMatters: "Achieving these goals requires pushing American military power away from East Asia and rewriting international trade and financial rules to favor Chinese state capitalism.",
      deeperDetails: {
        facts: [
          "The 'National Rejuvenation' doctrine targets full modernization by 2035 and premier global power status by the PRC centenary in 2049.",
          "Non-negotiable sovereignty claim over Taiwan, with refusal to renounce the use of military force for reunification.",
          "Promoting the 'Global Security Initiative' and 'Global Development Initiative' to construct alternative international governance institutions alongside BRICS and SCO.",
          "De-dollarization efforts through bilateral yuan-denominated cross-border trade settlements (CIPS system)."
        ],
        sources: ["20th CCP National Congress Report", "State Council Information Office White Papers"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "China possesses unmatched industrial manufacturing capacity, dominance in clean energy technology, advanced hypersonic weaponry, and massive high-speed infrastructure.",
      whyItMatters: "Its manufacturing scale allows it to build infrastructure, naval ships, and green technology at speeds and costs that no single Western competitor can currently match.",
      deeperDetails: {
        facts: [
          "Industry & Supply Chains: Controls over 75% of global solar panel manufacturing, 70% of commercial drone production (DJI), and dominates lithium-ion battery processing (CATL, BYD).",
          "Military & Naval Shipbuilding: Produces commercial and naval ships at more than 200 times the shipyard capacity of the United States, rapidly commissioning guided-missile destroyers (Type 055) and aircraft carriers.",
          "Infrastructure: Operates over 45,000 km of high-speed rail network—more than the rest of the world combined.",
          "Critical Mineral Refining: Refines roughly 60-70% of the world's lithium and cobalt and over 90% of global rare earth permanent magnets."
        ],
        metrics: {
          "Global Manufacturing Share": "31.6%",
          "Naval Fleet Size": "~370 Combat Ships",
          "High-Speed Rail": "45,000+ km",
          "Rare Earth Refining": "~90%"
        },
        sources: ["International Energy Agency (IEA)", "Office of Naval Intelligence (ONI)", "China State Railway Group"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "China depends critically on foreign imports of crude oil, high-end semiconductor manufacturing equipment, and agricultural staples to feed its population.",
      whyItMatters: "Over 70% of China's oil arrives by sea through narrow chokepoints like the Strait of Malacca, leaving its economic engine vulnerable to a naval blockade in a major conflict.",
      deeperDetails: {
        facts: [
          "Energy Imports: Imports over 72% of its crude oil needs, with approximately 80% transiting the Strait of Malacca (the 'Malacca Dilemma').",
          "Semiconductor Tooling: While expanding domestic legacy chip fabrication, China remains reliant on ASML (Netherlands) lithography tools and Japanese photoresists for sub-7nm node production.",
          "Food & Agriculture: World's largest importer of soybeans (largely from Brazil and the US) and corn, importing over 100 million metric tons of animal feed annually.",
          "Export Markets: Economic growth remains heavily reliant on access to consumer markets in the European Union, United States, and Southeast Asia."
        ],
        metrics: {
          "Crude Oil Import Dependency": "72%",
          "Soybean Import Share": "85%+",
          "Annual Bilateral Exports": ">$3.3 Trillion"
        },
        sources: ["General Administration of Customs China", "US Department of Agriculture (USDA)", "IEA Oil Market Report"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "China faces rapid population aging, an over-indebted property and local government sector, and growing trade restrictions imposed by the US and Europe.",
      whyItMatters: "A shrinking workforce combined with massive domestic real estate debt threatens to slow economic growth before China reaches developed-nation income levels.",
      deeperDetails: {
        facts: [
          "Demographic Contraction: Working-age population is shrinking; the national birth rate hit historic lows, with projections indicating the population could fall by hundreds of millions by 2100.",
          "Real Estate Debt: The property market crisis (Evergrande, Country Garden) has frozen household wealth and strained local government financing vehicles (LGFVs).",
          "Western Technology Controls: US export curbs on advanced AI chips (Nvidia A100/H100) and chip-making equipment constrain domestic semiconductor development.",
          "Regional Geopolitical Containment: Surrounded by US treaty allies (Japan, South Korea, Philippines) and strategic competitors (India, Taiwan)."
        ],
        sources: ["National Bureau of Statistics China", "IMF Country Report China", "Peterson Institute for International Economics"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "China's most crucial strategic partner is Russia, reinforced by close security and economic ties with Pakistan, North Korea, and Iran.",
      whyItMatters: "Partnering with Russia gives China secure overland oil, gas, and wheat imports that cannot be severed by a US naval blockade, while cooperation with Pakistan secures access to the Arabian Sea.",
      deeperDetails: {
        facts: [
          "China's foreign policy officially eschews formal military alliances (with the exception of its 1961 mutual defense treaty with North Korea), favoring tiered strategic partnerships."
        ],
        partners: [
          {
            who: "Russia",
            relationshipType: "Comprehensive Strategic Partnership of Coordination",
            whyItMatters: "Provides immense overland energy supplies, advanced military technology, and diplomatic solidarity against Western pressure.",
            areasOfCooperation: ["Overland oil and natural gas pipelines (Power of Siberia)", "Joint military drills and bomber patrols", "Trade settlement in ruble and yuan", "UNSC veto coordination"],
            areasOfCompetition: ["Influence in Central Asia", "Russian arms sales to India and Southeast Asia"],
            dependencies: ["Russian crude oil, timber, and metallurgical coal"],
            strategicSignificance: "Guarantees a friendly 4,200 km northern border, allowing Beijing to focus all naval and air power toward the Pacific.",
            source: "Joint Statement on Deepening the Comprehensive Strategic Partnership (2024)"
          },
          {
            who: "Pakistan",
            relationshipType: "'All-Weather' Strategic Cooperative Partner",
            whyItMatters: "Hosts the China-Pakistan Economic Corridor (CPEC), linking Xinjiang to the Arabian Sea port of Gwadar, and ties down Indian military assets.",
            areasOfCooperation: ["CPEC energy and road infrastructure ($62B planned)", "Joint JF-17 Thunder fighter jet production", "Type 054A/P frigates and Hangor submarines"],
            areasOfCompetition: ["Security threats to Chinese personnel from Baloch separatists and TTP militants"],
            strategicSignificance: "Serves as China's primary overland outlet bypassing the Strait of Malacca and balances India in South Asia.",
            source: "China-Pakistan Joint Statements; Ministry of Planning Development & Special Initiatives Pakistan"
          },
          {
            who: "North Korea",
            relationshipType: "Treaty Ally (1961 Mutual Defense Pact)",
            whyItMatters: "Maintains a vital buffer state between China's industrial northeast and US military forces stationed in South Korea.",
            areasOfCooperation: ["Food and fuel assistance", "Trade across the Yalu River", "Diplomatic shielding at the UN"],
            areasOfCompetition: ["Pyongyang's unpredictable nuclear and ballistic missile testing"],
            strategicSignificance: "Prevents a unified, pro-American democratic Korean Peninsula on China's immediate land border.",
            source: "Sino-North Korean Treaty of Friendship, Cooperation and Mutual Assistance"
          }
        ],
        sources: ["Ministry of Foreign Affairs PRC", "China-Russia Joint Statements"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "China's greatest global competitor is the United States, alongside major regional friction with India, Japan, Taiwan, and the Philippines.",
      whyItMatters: "Competition with the United States is a systemic contest spanning military dominance in the Pacific, control over advanced artificial intelligence, and leadership of the global financial system.",
      deeperDetails: {
        facts: [
          "China's military doctrine emphasizes Anti-Access/Area Denial (A2/AD) to prevent adversary intervention in the Western Pacific."
        ],
        competitors: [
          {
            who: "United States",
            competitionType: "Global Superpower Rivalry",
            areasOfCompetition: ["Naval primacy in the Indo-Pacific", "Advanced semiconductors and AI dominance", "Taiwan security", "Global trade architecture and financial hegemony"],
            whyItMatters: "The single most decisive bilateral contest shaping 21st-century international security and economic order.",
            source: "US National Defense Strategy; PRC National Defense White Papers"
          },
          {
            who: "India",
            competitionType: "Continental and Maritime Strategic Competitor",
            areasOfCompetition: ["3,488 km Himalayan border (Line of Actual Control)", "Indian Ocean maritime presence", "Supply chain relocation and manufacturing competition", "Diplomatic influence across the Global South"],
            whyItMatters: "World's two most populous nations with competing regional ambitions and active border deployments.",
            source: "SIPRI; Indian MoD Annual Reports"
          },
          {
            who: "Japan & Taiwan",
            competitionType: "Regional Maritime & Territorial Rivals",
            areasOfCompetition: ["Senkaku/Diaoyu Islands sovereignty", "Taiwan Strait political status and airspace/maritime demarcation", "Semiconductor fabrication dominance"],
            whyItMatters: "Direct frontline states along the First Island Chain that constrain Chinese naval breakout into the open Pacific.",
            source: "Japan Ministry of Defense White Paper 'Defense of Japan'"
          }
        ],
        sources: ["SIPRI", "IISS Military Balance"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "China is locked behind a chain of US-allied island nations in the Pacific, while its western interior is protected by the high Tibetan plateau.",
      whyItMatters: "China's navy must pass through narrow straits controlled by Japan, Taiwan, or the Philippines to reach open ocean, driving Beijing's urgent push to dominate the South China Sea.",
      deeperDetails: {
        facts: [
          "First Island Chain Barrier: A string of islands (Japan, Okinawa, Taiwan, northern Philippines) forms a natural strategic barrier containing Chinese naval breakout into the deep Pacific.",
          "South China Sea Fortifications: Built and militarized artificial islands (Fiery Cross, Subi, Mischief Reefs) with runways and missile batteries to establish de facto maritime control.",
          "Tibetan Water Tower: Controls the Qinghai-Tibet plateau, the source of Asia's ten largest river systems (Yangtze, Yellow, Mekong, Brahmaputra, Indus), providing immense water leverage over downstream nations.",
          "Malacca Dilemma: Roughly 80% of imported crude oil must transit the 2.7-kilometer-wide Philip Channel in the Singapore Strait, which could be interdicted during wartime."
        ],
        sources: ["US Naval War College Studies", "China Oceanic Information Network"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "China's established strategic behavior combines deep civilizational patience with uncompromising territorial claims and state-directed economic mobilization.",
      whyItMatters: "Assuming China will abandon core sovereignty objectives or adopt Western political models overlooks its historical narrative of overcoming the 'Century of Humiliation' through CCP leadership.",
      deeperDetails: {
        facts: [
          "Historical Lens: Leaders view the 1839-1949 era of Western and Japanese colonial intervention as a historical aberration that China is systematically and permanently reversing.",
          "Civil-Military Fusion: Mandates that all private commercial technologies (AI, aerospace, quantum computing) must be shared with the People's Liberation Army.",
          "Pragmatic Economic Statecraft: Uses massive trade leverage, Belt and Road infrastructure loans, and raw material processing dominance to deter foreign governments from challenging its core political interests."
        ],
        sources: ["Rush Doshi, 'The Long Game: China's Grand Strategy to Displace American Order'", "Harvard Belfer Center"]
      }
    }
  ]
};
