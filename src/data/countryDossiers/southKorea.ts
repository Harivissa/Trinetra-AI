import type { CountrySimpleQuestionsDossier } from "./types";

export const SOUTH_KOREA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "KOR",
  countryName: "South Korea",
  tagline: "A democratic technological and shipbuilding powerhouse anchored to the US alliance against a nuclear North Korea",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "South Korea is an advanced industrial democracy of 51 million people that transformed itself from a war-torn agrarian country into one of the world's leading high-tech and manufacturing economies.",
      whyItMatters: "South Korea produces the majority of the world's memory computer chips and advanced commercial ships, making its stability vital to the global digital economy.",
      deeperDetails: {
        facts: [
          "World's 14th-largest economy ($1.71 trillion nominal GDP) and a member of the OECD and G20.",
          "Commands a technologically advanced military of 500,000 active personnel, backed by roughly 28,500 US troops under a mutual defense treaty.",
          "Produces over 60% of the world's dynamic random-access memory (DRAM) chips and large shares of NAND flash memory (Samsung Electronics and SK Hynix).",
          "One of the world's premier commercial and naval shipbuilders (HD Hyundai, Hanwha Ocean, Samsung Heavy Industries)."
        ],
        metrics: {
          "Population": "51.3 Million",
          "Nominal GDP": "$1.71 Trillion",
          "Active Military Personnel": "500,000",
          "Global DRAM Market Share": "~60-70%"
        },
        sources: ["Bank of Korea Economic Statistics", "Ministry of National Defense ROK", "TrendForce Semiconductor Data"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "South Korea wants to deter North Korean nuclear attacks, preserve uninterrupted access to global trade sea lanes, and protect its high-tech industry without getting crushed in the US-China rivalry.",
      whyItMatters: "Seoul sits just 50 kilometers from North Korea's artillery batteries, meaning any war on the peninsula would cause immediate mass casualties and collapse global electronics supply chains.",
      deeperDetails: {
        facts: [
          "Deter North Korean aggression via the 'Three-Axis System': Kill Chain pre-emptive strike, Korea Air and Missile Defense (KAMD), and Korea Massive Punishment and Retaliation (KMPR).",
          "Strengthen extended nuclear deterrence with the United States through the bilateral Nuclear Consultative Group (NCG) established under the 2023 Washington Declaration.",
          "Pursue the 'Global Pivotal State' (GPS) doctrine to elevate South Korea's role across the Indo-Pacific, international development, and multilateral institutions.",
          "Diversify high-tech export markets away from heavy reliance on mainland China toward Southeast Asia, Europe, and the Americas."
        ],
        sources: ["ROK Ministry of Foreign Affairs Strategy Briefings", "2022 ROK Defense White Paper"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "South Korea is exceptionally good at manufacturing semiconductors, building advanced cargo and liquefied natural gas (LNG) ships, producing electric vehicle batteries, and exporting high-end conventional weapons.",
      whyItMatters: "Its high-tech industrial base allows South Korea to rapidly deliver sophisticated fighter jets (KF-21), tanks (K2 Black Panther), and artillery (K9 Thunder) to European and Asian allies while Western factories face backlogs.",
      deeperDetails: {
        facts: [
          "Semiconductor Memory: Samsung Electronics and SK Hynix lead the world in high-bandwidth memory (HBM) chips required for artificial intelligence processors.",
          "Defense Exports: Emerged as one of the world's fastest-growing arms exporters, signing multibillion-dollar contracts with Poland and Australia for K9 howitzers, K2 tanks, and FA-50 light combat aircraft.",
          "Naval & Commercial Shipbuilding: Controls over 85% of global orders for high-value liquefied natural gas (LNG) carrier vessels.",
          "Automotive & Batteries: Global leaders in electric vehicle battery production (LG Energy Solution, Samsung SDI, SK On) and global automotive manufacturing (Hyundai-Kia)."
        ],
        metrics: {
          "Defense Export Contracts": ">$13-15 Billion Annually",
          "Global LNG Ship Orders": ">80% Share",
          "R&D Spending": "4.9% of GDP (2nd highest in OECD)"
        },
        sources: ["Defense Acquisition Program Administration (DAPA)", "Korea International Trade Association (KITA)", "OECD Science & Technology Indicators"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "South Korea depends on imported foreign energy for 93% of its needs, the American nuclear umbrella for its ultimate survival, and China as its largest export customer.",
      whyItMatters: "Because South Korea has virtually no domestic oil, gas, or coal, any naval blockade of Pacific sea lanes would shut down its factories and power grid within weeks.",
      deeperDetails: {
        facts: [
          "Energy Imports: Imports 93% of its primary energy, including nearly 100% of its crude oil and natural gas, primarily shipped through the Strait of Hormuz and the South China Sea.",
          "US Nuclear Shield: Relies on American extended nuclear deterrence because it does not possess its own nuclear weapons, despite facing a nuclear-armed North Korea.",
          "Chinese Market Access: China has historically been South Korea's largest trading partner, consuming massive quantities of intermediate components and electronics.",
          "Critical Mineral Refining: Dependent on China for over 70% of refined lithium, cobalt, and nickel precursor materials needed for its domestic EV battery plants."
        ],
        metrics: {
          "Energy Import Dependence": "93%",
          "Export-to-GDP Ratio": "~44%",
          "US Troop Deployment in ROK": "28,500 Personnel"
        },
        sources: ["Korea Energy Economics Institute (KEEI)", "Ministry of Trade, Industry and Energy (MOTIE)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "South Korea has the lowest birth rate in human history, an immediate nuclear threat directly across its border, and high vulnerability to US-China economic conflict.",
      whyItMatters: "With a fertility rate of just 0.72 children per woman, South Korea's military conscription pool and national workforce will shrink dramatically over the next two decades.",
      deeperDetails: {
        facts: [
          "Demographic Collapse: The total fertility rate dropped to 0.72 in 2023, the lowest recorded in any sovereign state, threatening a catastrophic drop in military conscripts from 330,000 to under 150,000 by 2040.",
          "North Korean Nuclear Buildup: Pyongyang has deployed tactical nuclear-capable cruise missiles, hypersonic glide vehicles, and solid-fuel ICBMs designed to strike Seoul in minutes.",
          "Vulnerability of the Capital: Seoul and its metropolitan area (home to 26 million people, half the country) lie entirely within range of thousands of North Korean conventional artillery and rocket tubes.",
          "Economic Squeeze: Caught between US tech export restrictions on advanced chip fabrication in China and Chinese state subsidies competing directly against Korean displays and petrochemicals."
        ],
        sources: ["Statistics Korea (KOSTAT)", "ROK Ministry of National Defense", "Brookings Institution Korea Chair"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "South Korea's most important partner is the United States, followed by a revitalized security and economic partnership with Japan, and growing defense ties across NATO.",
      whyItMatters: "The 1953 US-ROK Mutual Defense Treaty guarantees American military intervention if North Korea attacks, while trilateral cooperation with Japan creates an integrated radar shield against incoming missiles.",
      deeperDetails: {
        facts: [
          "South Korea's security architecture relies fundamentally on the Combined Forces Command (CFC) with the United States."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Mutual Defense Treaty Ally (1953)",
            whyItMatters: "Guarantees extended nuclear deterrence, intelligence sharing, and commands the joint defense of the peninsula during wartime.",
            areasOfCooperation: ["Washington Declaration / Nuclear Consultative Group", "Semiconductor CHIPS Act investments in the US", "Combined joint military drills (Ulchi Freedom Shield)"],
            areasOfCompetition: ["Restrictions on Korean chip fabrication plants in China", "US domestic manufacturing subsidies favoring US assembly"],
            dependencies: ["US extended nuclear umbrella and advanced stealth aerospace systems (F-35A)"],
            strategicSignificance: "The non-negotiable guarantor of South Korean national sovereignty.",
            source: "US-ROK Mutual Defense Treaty; 2023 Washington Declaration"
          },
          {
            who: "Japan",
            relationshipType: "Trilateral Security Partner & Regional Democracy",
            whyItMatters: "Hosts crucial US rear-base logistics hubs (United Nations Command Rear) necessary to reinforce South Korea during a wartime contingency.",
            areasOfCooperation: ["Real-time missile warning data sharing (Camp David Summit agreement)", "Maritime security patrols", "High-tech semiconductor supply chain coordination"],
            areasOfCompetition: ["Dokdo/Takeshima territorial dispute and unresolved historical grievances from the colonial era (1910-1945)"],
            strategicSignificance: "Essential co-anchor of East Asian democratic security deterrence.",
            source: "Camp David Trilateral Joint Statement (2023)"
          },
          {
            who: "Poland & NATO European Nations",
            relationshipType: "Strategic Defense & Industrial Partner",
            whyItMatters: "Purchases tens of billions in Korean tanks, howitzers, and aircraft, establishing South Korea as a premier defense supplier to Europe.",
            areasOfCooperation: ["K2 Black Panther tank production", "K9 Thunder howitzers", "FA-50 fighter aircraft deliveries"],
            strategicSignificance: "Expands Korean defense manufacturing scale and diversifies geopolitical partnerships outside East Asia.",
            source: "Polish Ministry of National Defence; DAPA South Korea"
          }
        ],
        sources: ["Ministry of Foreign Affairs ROK", "ROK Defense White Paper"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "South Korea's primary existential enemy is North Korea, while it engages in intense industrial and technological competition with China and Japan.",
      whyItMatters: "North Korea poses an immediate daily military threat, while Chinese state subsidies threaten Korean market share in shipbuilding, displays, petrochemicals, and electric vehicles.",
      deeperDetails: {
        facts: [
          "South Korea is technically still at war with North Korea under an active armistice signed in 1953, without a permanent peace treaty."
        ],
        competitors: [
          {
            who: "North Korea (DPRK)",
            competitionType: "Existential Military Adversary",
            areasOfCompetition: ["Peninsular legitimacy and sovereignty", "Nuclear and ballistic missile escalation", "Artillery standoff across the DMZ", "Cyber warfare and cryptocurrency theft"],
            whyItMatters: "North Korea officially discarded the goal of peaceful reunification in 2024, designating South Korea as its 'principal enemy' and threatening nuclear annihilation.",
            source: "DPRK Supreme People's Assembly Declarations; ROK Ministry of Unification"
          },
          {
            who: "China",
            competitionType: "Commercial Competitor & Geopolitical Pressure",
            areasOfCompetition: ["Commercial shipbuilding dominance", "Flat panel displays and memory chips", "Electric vehicle battery supply chains", "Yellow Sea EEZ demarcation"],
            whyItMatters: "Beijing previously used retaliatory economic boycotts (over the 2017 THAAD missile deployment) to punish South Korean businesses.",
            source: "Korea International Trade Association (KITA) Studies"
          }
        ],
        sources: ["ROK Ministry of Unification", "SIPRI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "South Korea is effectively an island: cut off from the Asian mainland by the fortified Demilitarized Zone (DMZ) with North Korea, and surrounded on three sides by water.",
      whyItMatters: "Because overland transit to Europe and Asia is completely blocked by North Korea, 99.7% of South Korea's international trade must move by sea through vulnerable maritime chokepoints.",
      deeperDetails: {
        facts: [
          "The Peninsular Trap: The 250-km-long Demilitarized Zone (DMZ) is the most heavily fortified border on Earth, cutting off South Korea from any overland rail or highway connection to Eurasia.",
          "Maritime Lifelines: Commercial shipping must transit the Korea Strait, East China Sea, Taiwan Strait, and Strait of Malacca to deliver food, energy, and factory exports.",
          "Vulnerability of the Capital Region: Seoul sits just 40-50 km from the DMZ, placing the national government, stock exchange, and corporate headquarters within range of 1,000+ North Korean long-range artillery pieces.",
          "Maritime Chokepoint Dependence: Over 70% of crude oil imports pass through the Taiwan Strait and South China Sea, meaning any conflict in Taiwan would immediately strand Korean trade."
        ],
        sources: ["National Geographic Information Institute ROK", "Korea Maritime Institute (KMI)"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "South Korea's established strategic behavior is defined by high technological agility, a firm reliance on the US defense alliance, and growing domestic debates over developing its own nuclear weapons.",
      whyItMatters: "Faced with an unpredictable North Korean nuclear arsenal and doubts about long-term US political reliability, over 70% of the South Korean public frequently supports building an independent domestic nuclear deterrent.",
      deeperDetails: {
        facts: [
          "Nuclear Latency: Possesses advanced civil nuclear energy infrastructure and ballistic missile technology, allowing it to rapidly build a nuclear weapon if the US nuclear umbrella ever faltered.",
          "Rapid Execution Culture: South Korea's industrial base is famous for the 'Palli-Palli' (hurry, hurry) speed of delivery, allowing defense contractors to deliver weapons years faster than European competitors.",
          "Democratic Resilience: Strong civil society and constitutional institutions that have successfully impeached sitting presidents and overcome military dictatorships without civil collapse."
        ],
        sources: ["Asan Institute for Policy Studies Public Opinion Polls", "Victor Cha, 'The Impossible State'"]
      }
    }
  ]
};
