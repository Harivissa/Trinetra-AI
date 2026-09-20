import type { CountrySimpleQuestionsDossier } from "./types";

export const INDIA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "IND",
  countryName: "India",
  tagline: "A rising continental democracy balancing strategic autonomy across the Indo-Pacific",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "India is the world's most populous democracy and a rapidly growing economic and military power located centrally along the Indian Ocean.",
      whyItMatters: "Its sheer scale, growing economic weight, and command of vital maritime sea lanes make it essential to maintaining the global balance of power.",
      deeperDetails: {
        facts: [
          "Home to 1.43 billion people and the world's fifth-largest economy ($3.94 trillion nominal GDP, third-largest in PPP terms).",
          "Maintains a declared nuclear triad with an active-duty military force of over 1.45 million personnel.",
          "Constitutional federal republic with unbroken parliamentary democratic succession since independence in 1947.",
          "Diplomatically practices multi-alignment, maintaining active memberships in the Quad, BRICS, and the Shanghai Cooperation Organisation (SCO)."
        ],
        metrics: {
          "Population": "1.43 Billion",
          "Nominal GDP": "$3.94 Trillion",
          "Active Personnel": "1,450,000",
          "Coastline": "7,516 km"
        },
        sources: ["World Bank WDI 2024", "SIPRI Yearbook", "Ministry of External Affairs India"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "India wants rapid economic modernization, secure and peaceful borders, and recognition as a leading global power without being forced into military alliances.",
      whyItMatters: "India insists on 'strategic autonomy', meaning it reserves the right to make independent foreign-policy decisions based on national interest rather than taking orders from major power blocs.",
      deeperDetails: {
        facts: [
          "Pursuing 'Viksit Bharat 2047' with the official goal of achieving high-income developed country status by its independence centenary.",
          "Demands permanent membership on the United Nations Security Council (UNSC) and admission into the Nuclear Suppliers Group (NSG).",
          "Seeks to serve as the primary 'Net Security Provider' and lead the Security and Growth for All in the Region (SAGAR) framework across the Indian Ocean.",
          "Aims to become a premier global manufacturing alternative to China through production-linked incentive (PLI) schemes."
        ],
        sources: ["National Security Council Secretariat (NSCS) India", "Ministry of External Affairs Policy Statements"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "India excels in digital technology services, generic pharmaceutical manufacturing, affordable space exploration, and specialized high-altitude mountain warfare.",
      whyItMatters: "These capabilities give India real international influence: it produces a major share of life-saving medicines worldwide, manages global corporate software systems, and defends harsh Himalayan borders.",
      deeperDetails: {
        facts: [
          "Technology: Global leader in IT-BPM services ($190+ billion exports) and pioneer of digital public infrastructure (UPI processing over 13 billion monthly transactions).",
          "Economy & Industry: World's pharmacy, manufacturing roughly 20% of global generic medicines and over 60% of worldwide vaccines.",
          "Military: The Indian Army commands the largest, most battle-tested mountain warfare force globally, holding strategic heights above 15,000 feet in Ladakh and Sikkim.",
          "Space & Science: ISRO successfully landed Chandrayaan-3 near the lunar south pole and placed the Aditya-L1 observatory at Lagrange Point 1 at a fraction of Western budgets.",
          "Diplomacy: Recognized voice of the Global South, bridging consensus between Western democracies and developing economies."
        ],
        metrics: {
          "IT Services Exports": ">$190 Billion",
          "Pharma Global Share": "~20% Generics",
          "High-Altitude Troops": "Over 12 Mountain Divisions",
          "Forex Reserves": ">$670 Billion"
        },
        sources: ["NASSCOM Annual Report", "Department of Pharmaceuticals", "ISRO Mission Archives", "Reserve Bank of India"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "India depends heavily on imported crude oil, foreign components for its defense equipment, and imported electronics and chemical inputs from China.",
      whyItMatters: "Sudden energy price spikes or supply disruptions in the Persian Gulf or Russia immediately pressure India's currency, while factory input shortages can halt manufacturing.",
      deeperDetails: {
        facts: [
          "Energy Imports: Relies on foreign imports for over 87% of its crude oil and roughly 50% of its natural gas consumption, imported primarily from Russia, Iraq, and Saudi Arabia.",
          "Defense Hardware: Approximately 60% of legacy military platforms (Su-30MKI fighters, T-90 tanks, Kilo-class submarines) are of Russian origin, requiring continuous spare parts and maintenance cycles.",
          "Industrial Chemicals & Tech: Imports over 70% of Active Pharmaceutical Ingredients (APIs) and the majority of solar photovoltaic cells and display components from Chinese factories.",
          "Critical Minerals: Heavily dependent on external supplies of lithium, cobalt, and rare earth elements necessary for its electric mobility and renewable energy transition."
        ],
        metrics: {
          "Crude Oil Import Share": "87.7%",
          "Russian-Origin Military Hardware": "~60%",
          "China Bilateral Trade Deficit": ">$85 Billion"
        },
        sources: ["Petroleum Planning & Analysis Cell (PPAC)", "SIPRI Arms Transfers Database", "Ministry of Commerce and Industry"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "India faces a complex 'two-front' military challenge along its disputed borders with China and Pakistan, alongside domestic pressures to create formal jobs for millions of youths.",
      whyItMatters: "Managing tense borders diverts immense capital toward territorial defense, while underemployment risks squandering India's demographic window of opportunity.",
      deeperDetails: {
        facts: [
          "Security Challenge: Ongoing militarized standoff along the 3,488 km Line of Actual Control (LAC) with China, requiring permanent high-altitude deployments in Eastern Ladakh.",
          "Two-Front Reality: Pakistan's proxy war infrastructure in Jammu & Kashmir coupled with China-Pakistan military co-development (JF-17 fighters, Hangor submarines).",
          "Demographic Pressures: While median age is only 28, the formal manufacturing labor participation rate—especially for women—remains lower than East Asian benchmark economies.",
          "Infrastructure & Bureaucracy: Logistics costs account for approximately 13-14% of GDP (compared to 8% in developed nations), although major highway and rail corridors are closing this gap."
        ],
        sources: ["Manohar Parrikar Institute for Defence Studies and Analyses (MP-IDSA)", "Periodic Labour Force Survey (PLFS)"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "India's most vital strategic and security partners include the United States, France, Russia, Japan, and Israel.",
      whyItMatters: "India carefully balances these relationships: it acquires high-tech defense hardware from France and Israel, shares intelligence and naval coordination with the US and Japan, and sources energy and legacy military maintenance from Russia.",
      deeperDetails: {
        facts: [
          "India avoids formal mutual-defense pacts, preferring comprehensive strategic partnerships tailored to specific national interests."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Comprehensive Global Strategic Partner",
            whyItMatters: "Essential for intelligence sharing, maritime domain awareness, advanced semiconductor technology, and balancing Chinese influence.",
            areasOfCooperation: ["iCET (Critical & Emerging Technology)", "BECA/LEMOA/COMCASA defense foundational pacts", "Quad naval coordination", "Bilateral trade"],
            areasOfCompetition: ["Data localization rules", "Agricultural tariffs", "India's oil purchases from Russia"],
            dependencies: ["High-end jet engine technology (GE F414)", "High-altitude surveillance drones (MQ-9B)"],
            strategicSignificance: "The anchor of India's Western technology integration and maritime deterrence in the Indo-Pacific.",
            source: "US-India 2+2 Ministerial Dialogue Joint Statements"
          },
          {
            who: "France",
            relationshipType: "Strategic Partner & Sovereign Defense Supplier",
            whyItMatters: "India's most dependable European defense supplier that never attaches political conditions or sanctions to equipment deliveries.",
            areasOfCooperation: ["Rafale fighter aircraft", "Scorpène-class submarines (Project 75)", "Civil nuclear energy", "Indian Ocean maritime surveillance"],
            strategicSignificance: "Provides sovereign Western military alternatives without US legislative vetoes.",
            source: "Franco-Indian Horizon 2047 Strategic Roadmap"
          },
          {
            who: "Russia",
            relationshipType: "Special and Privileged Strategic Partner",
            whyItMatters: "Guarantees discounted crude oil supplies, legacy defense platform maintenance, and diplomatic veto cover at the UN Security Council.",
            areasOfCooperation: ["Discounted crude oil imports", "BrahMos missile joint venture", "Kudankulam nuclear power reactors", "Fertilizer trade"],
            areasOfCompetition: ["Growing Russian economic and military dependence on China"],
            dependencies: ["Spare parts for Su-30MKI, T-90 tanks, and naval propulsion systems"],
            strategicSignificance: "Prevents a complete Sino-Russian military alliance against India and guarantees energy security.",
            source: "Annual India-Russia Bilateral Summit Records"
          },
          {
            who: "Japan",
            relationshipType: "Special Strategic and Global Partner",
            whyItMatters: "Primary provider of long-term concessional infrastructure financing and key Quad security co-anchor.",
            areasOfCooperation: ["Mumbai-Ahmedabad High-Speed Rail", "Northeast India connectivity projects", "Malabar joint naval exercises", "Supply Chain Resilience Initiative"],
            strategicSignificance: "Crucial economic investor and democratic maritime balance against Chinese expansion.",
            source: "Japan-India Annual Summit Joint Declaration"
          }
        ],
        sources: ["Ministry of External Affairs India", "Bilateral Summit Treaties"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "India's primary strategic competitor is China, and its most direct historic security rival is Pakistan.",
      whyItMatters: "Competition with China touches disputed borders, naval access across the Indian Ocean, industrial manufacturing, and leadership among developing nations.",
      deeperDetails: {
        facts: [
          "India faces simultaneous military friction on its northern and western frontiers, driving its defense modernization priorities."
        ],
        competitors: [
          {
            who: "China",
            competitionType: "Comprehensive Strategic Competitor",
            areasOfCompetition: ["Himalayan border sovereignty (3,488 km LAC)", "Indian Ocean maritime influence ('String of Pearls')", "Global South diplomatic leadership", "High-tech manufacturing supply chains"],
            whyItMatters: "Direct military clashes (Galwan 2020) demonstrated that territorial disputes remain active and can trigger major troop buildups.",
            source: "Indian Ministry of Defence Annual Report; US DoD China Military Power Report"
          },
          {
            who: "Pakistan",
            competitionType: "Historic Security Rival",
            areasOfCompetition: ["Kashmir territorial dispute (Line of Control)", "Cross-border proxy militancy", "Water distribution (Indus Waters Treaty)", "Regional diplomatic influence in the Islamic world"],
            whyItMatters: "Both states possess nuclear arsenals; localized border confrontations carry escalation risks.",
            source: "SIPRI Armaments and Disarmament; MP-IDSA Regional Security Briefs"
          }
        ],
        sources: ["Ministry of Defence India", "SIPRI Yearbook"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "India sits directly in the center of the northern Indian Ocean, controlling the maritime highway that carries roughly 80% of East Asia's oil.",
      whyItMatters: "Its long peninsula projects outward like a natural aircraft carrier into crucial sea lanes, while the northern Himalayas provide a physical barrier against conventional ground invasion.",
      deeperDetails: {
        facts: [
          "Maritime Chokepoint Command: The Andaman and Nicobar Islands sit directly at the western throat of the Strait of Malacca, giving the Indian Navy immediate observation over Asian energy lanes.",
          "Coastline & EEZ: Commands 7,516 km of coastline and an Exclusive Economic Zone (EEZ) exceeding 2.37 million sq km rich in offshore hydrocarbon and polymetallic resources.",
          "Himalayan Wall: The highest mountain barrier on Earth restricts mechanized ground armor movement from the Tibetan plateau, turning northern defense into specialized mountain warfare.",
          "Geographic Vulnerability: The Siliguri Corridor ('Chicken's Neck') is a narrow strip of land just 22 km wide connecting mainland India to its eight northeastern states, vulnerable to Chinese interdiction from the Chumbi Valley."
        ],
        sources: ["Indian Navy Maritime Security Strategy", "Survey of India Geographic Dossiers"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "India's established strategic behavior centers on maintaining sovereign freedom of action, preferring flexible partnerships over binding military alliances.",
      whyItMatters: "International partners who expect India to automatically join ideological coalitions misunderstand its non-aligned history and constitutional commitment to strategic autonomy.",
      deeperDetails: {
        facts: [
          "Historical Roots: Foreign policy is guided by thousands of years of civilizational statecraft (Kautilya's Arthashastra) and the post-colonial determination never to become a junior partner to any superpower.",
          "Multipolar Worldview: India views the contemporary world order not as a binary contest between Washington and Beijing, but as an emerging multipolar system where India constitutes its own distinct pole.",
          "Pragmatic Commerce: Simultaneously engages competing blocs based on immediate domestic need—such as refining Russian crude oil while expanding strategic tech partnerships with the United States."
        ],
        sources: ["S. Jaishankar, 'The India Way: Strategies for an Uncertain World'", "Observer Research Foundation"]
      }
    }
  ]
};
