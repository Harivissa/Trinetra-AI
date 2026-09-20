import type { CountrySimpleQuestionsDossier } from "./types";

export const AUSTRALIA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "AUS",
  countryName: "Australia",
  tagline: "An Indo-Pacific continent-nation possessing vast critical mineral wealth, anchored to the US alliance and AUKUS",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Australia is an island continent of 27 million people, a major democratic economy, and the world's leading exporter of critical minerals and energy commodities.",
      whyItMatters: "Its vast resource wealth (lithium, iron ore, LNG) and strategic location between the Indian and Pacific Oceans make it indispensable to Western security and supply chains.",
      deeperDetails: {
        facts: [
          "World's 13th-largest economy ($1.72 trillion nominal GDP) and a member of the G20, Quad, and Five Eyes.",
          "World's top exporter of iron ore and lithium, and one of the largest exporters of liquefied natural gas (LNG) and coal.",
          "Anchored to the AUKUS security pact with the US and UK to acquire conventionally armed, nuclear-powered attack submarines.",
          "Commands the world's third-largest marine jurisdiction (Exclusive Economic Zone of 8.2 million sq km)."
        ],
        metrics: {
          "Population": "26.8 Million",
          "Nominal GDP": "$1.72 Trillion",
          "Global Lithium Mining Share": "~50%",
          "Global Iron Ore Exports Share": "~53%"
        },
        sources: ["Australian Bureau of Statistics (ABS)", "Department of Foreign Affairs and Trade (DFAT) Australia"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Australia wants to deter Chinese military coercion across the Pacific, protect open sea lanes, and diversify its export markets while remaining America's primary security anchor in the southern hemisphere.",
      whyItMatters: "China buys roughly a third of Australia's exports, creating a structural tension between Australia's economic dependence on Beijing and its military alliance with Washington.",
      deeperDetails: {
        facts: [
          "Deploy nuclear-powered attack submarines (SSN-AUKUS) to patrol distant Indo-Pacific maritime chokepoints.",
          "Counter Chinese security pacts and policing influence across Pacific Island nations (Solomon Islands, Vanuatu).",
          "Develop domestic critical mineral refining capacity to break China's monopoly on clean-tech supply chains.",
          "Modernize the Australian Defence Force (ADF) for long-range maritime strike (Naval Strike Missiles, HIMARS)."
        ],
        sources: ["2024 National Defence Strategy Australia", "DFAT Foreign Policy White Paper"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Australia excels in large-scale mining and resource extraction, agricultural exports (wheat, beef), advanced naval and signals intelligence, and marine environmental science.",
      whyItMatters: "Global steelmakers cannot produce steel without Australian iron ore, while electric carmakers rely on Australian mines for roughly half of the world's raw lithium.",
      deeperDetails: {
        facts: [
          "Critical Minerals Dominance: Mines roughly 50% of the world's lithium (Greenbushes, Pilbara) and huge shares of rare earths, nickel, and cobalt.",
          "Signals Intelligence Hub: Operates the Joint Defence Facility Pine Gap near Alice Springs alongside the US, intercepting satellite telemetry and communications across Asia.",
          "Agricultural Food Bowl: One of the world's top exporters of beef, wheat, and wool, feeding an estimated 60-70 million people beyond its borders.",
          "Autonomous Mining Operations: Operates the world's largest automated heavy-haul freight railway and autonomous haulage truck fleets (Rio Tinto, BHP)."
        ],
        metrics: {
          "Lithium Mine Output": "World #1",
          "Iron Ore Export Revenue": ">$120 Billion Annually",
          "LNG Export Capacity": "~80 Million Metric Tons"
        },
        sources: ["Geoscience Australia", "Minerals Council of Australia", "Department of Defence Australia"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Australia depends on China to purchase its resources, the United States for advanced defense weapons and nuclear propulsion, and foreign shipping for refined fuels.",
      whyItMatters: "Australia has closed most of its domestic oil refineries, leaving it with only a few weeks of commercial fuel stocks if maritime shipping is cut off.",
      deeperDetails: {
        facts: [
          "Chinese Export Revenue: China purchases over 30% of total Australian goods exports; when Beijing imposed trade tariffs in 2020-2021, Australian exporters had to urgently find alternative markets.",
          "Refined Fuel Vulnerability: Imports over 90% of its refined transport fuels (diesel, jet fuel), leaving the national economy vulnerable to maritime tanker interruptions.",
          "American Defense Systems: 100% reliant on the US for its fifth-generation stealth fighters (F-35A), naval combat systems (Aegis), and future nuclear submarine reactors.",
          "Foreign Investment: Relies on continuous inflows of foreign capital to develop massive, capital-intensive mining and green hydrogen projects."
        ],
        metrics: {
          "Export Share to China": "~32%",
          "Refined Fuel Imports": ">90%",
          "Domestic Fuel Stock Cover": "Roughly 30-40 Days"
        },
        sources: ["Department of Climate Change, Energy, the Environment and Water", "Reserve Bank of Australia (RBA)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Australia has a vast continental coastline with a very small population to defend it, acute vulnerability to severe climate events, and the multi-decade delay in delivering its AUKUS submarines.",
      whyItMatters: "Its first nuclear-powered submarines will not arrive until the 2030s, creating an expensive capability gap while regional naval tensions in the Pacific are rising now.",
      deeperDetails: {
        facts: [
          "Vast Geography vs. Small Force: An active military of only 60,000 personnel tasked with monitoring 34,000 kilometers of coastline and millions of square kilometers of ocean.",
          "AUKUS Cost and Schedule Risks: The submarine program will cost up to $368 billion over three decades, facing severe technical, shipyard, and workforce hurdles in both Australia and the US.",
          "Climate Extremes: Extreme vulnerability to recurring bushfires, catastrophic floods, and coral bleaching of the Great Barrier Reef.",
          "Housing & Infrastructure Strain: High immigration rates paired with housing supply shortages have created acute domestic affordability pressures."
        ],
        sources: ["Australian Strategic Policy Institute (ASPI)", "Defence Strategic Review 2023"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Australia's primary security ally is the United States, reinforced by Five Eyes intelligence partners, the Quad (Japan, India, US), and close Pacific neighbors like New Zealand.",
      whyItMatters: "The ANZUS Treaty (1951) binds the US and Australia in mutual defense, while cooperation through the Quad helps balance Chinese power across the Indo-Pacific.",
      deeperDetails: {
        facts: [
          "Australia has participated in every major military conflict alongside the United States for over a century."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Essential Mutual Defense Treaty Ally (ANZUS 1951)",
            whyItMatters: "Guarantees Australia's ultimate defense, co-operates the Pine Gap intelligence base, and anchors the AUKUS pact.",
            areasOfCooperation: ["AUKUS submarine technology", "Marine rotational deployments in Darwin", "Intelligence and space surveillance"],
            strategicSignificance: "The irreplaceable foundation of Australian national security.",
            source: "US-Australia Ministerial Consultations (AUSMIN) Statements"
          },
          {
            who: "Japan",
            relationshipType: "Special Strategic Partner & Quad Co-Anchor",
            whyItMatters: "Australia's second-largest trade partner and closest non-US defense partner with a reciprocal military access agreement.",
            areasOfCooperation: ["Energy supply (LNG and coal)", "Joint naval drills", "Quad maritime domain awareness"],
            strategicSignificance: "Anchors democratic naval deterrence between the Pacific and Indian Oceans.",
            source: "Joint Declaration on Security Cooperation between Australia and Japan"
          },
          {
            who: "India",
            relationshipType: "Comprehensive Strategic Partner & Quad Member",
            whyItMatters: "Shared democratic interest in keeping the Indian Ocean free from coercive dominant naval control.",
            areasOfCooperation: ["Malabar joint naval exercises", "Critical mineral supply dialogues", "Economic Cooperation and Trade Agreement (ECTA)"],
            strategicSignificance: "Secures Australia's western maritime approach through the eastern Indian Ocean.",
            source: "Australia-India Annual Leaders' Summit Communiqués"
          }
        ],
        sources: ["DFAT Australia", "Australian Department of Defence"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Australia's primary strategic competitor is China, while managing complex diplomatic relations with Pacific Island micro-states.",
      whyItMatters: "China used economic sanctions against Australian wine, barley, coal, and beef to punish Canberra for calling for an independent inquiry into COVID-19 origins, demonstrating Beijing's willingness to use trade as a political weapon.",
      deeperDetails: {
        facts: [
          "Australia balances trade stabilization with long-term security deterrence against Chinese power projection."
        ],
        competitors: [
          {
            who: "China",
            competitionType: "Comprehensive Regional Strategic Competitor",
            areasOfCompetition: ["Influence across Pacific Island nations", "Economic coercion and trade tariffs", "Critical mineral supply chain sovereignty", "Freedom of navigation in the South China Sea"],
            whyItMatters: "Beijing's naval expansion threatens Australia's maritime trade arteries with East Asia.",
            source: "National Defence Strategy 2024; ASPI Reports"
          }
        ],
        sources: ["Australian Security Intelligence Organisation (ASIO)", "ASPI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Australia is an entire continent surrounded by water, controlling the maritime gateway between the Indian Ocean and the southwestern Pacific.",
      whyItMatters: "Its vast ocean moat makes direct invasion nearly impossible, but its extreme distance from major Western allies means Australia must be able to defend its own maritime approaches.",
      deeperDetails: {
        facts: [
          "Two-Ocean Continental Bastion: Fronts both the Indian Ocean (facing crucial energy sea lanes to the Middle East) and the Pacific Ocean (connecting to the Americas and Asia).",
          "Northern Maritime Approaches: Any hostile surface fleet must approach Australia through the archipelagic chokepoints of Indonesia, Papua New Guinea, or the Solomon Islands.",
          "Extreme Domestic Distances: Separated from Asian population centers by thousands of kilometers of ocean, creating immense logistical challenges for troop movements.",
          "Antarctic Sovereignty: Claims 42% of the Antarctic continent (Australian Antarctic Territory), maintaining active scientific observation and maritime surveillance."
        ],
        sources: ["Geoscience Australia", "Royal Australian Navy Seapower Centre"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Australia's established strategic behavior is defined by balancing its Western cultural and security alliance with the United States against the reality of its geographic immersion in Asia.",
      whyItMatters: "Australia cannot pick up its continent and move: it must permanently live as a wealthy Western democracy in an Asian neighborhood, requiring sophisticated diplomacy alongside strong deterrence.",
      deeperDetails: {
        facts: [
          "Bipartisan Security Consensus: Both major political parties (Labor and Liberal-National Coalition) strongly support the US alliance, AUKUS, and increased defense spending.",
          "Economic Resilience Under Pressure: Successfully resisted multi-year Chinese trade boycotts by redirecting commodities to alternative markets in India, Japan, and Southeast Asia without political concessions.",
          "Multicultural Modern Nation: Over 30% of its population was born overseas, making modern Australia one of the most culturally diverse and globally connected democracies on Earth."
        ],
        sources: ["Allan Gyngell, 'Fear of Abandonment: Australia in the World Since 1942'", "Lowy Institute"]
      }
    }
  ]
};

export const INDONESIA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "IDN",
  countryName: "Indonesia",
  tagline: "Southeast Asia's demographic heavyweight and premier nickel power championing non-aligned strategic autonomy",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Indonesia is the world's fourth-most populous country, its largest Muslim-majority nation, and the dominant economic power in Southeast Asia.",
      whyItMatters: "Its control over the world's most critical maritime chokepoints—including the Strait of Malacca and Sunda Strait—and its monopoly on global nickel supplies make it a crucial geopolitical player.",
      deeperDetails: {
        facts: [
          "Home to over 278 million people and the largest economy in ASEAN ($1.37 trillion nominal GDP).",
          "Controls over 40-50% of the world's mined nickel, essential for electric vehicle batteries and stainless steel.",
          "Archipelagic state composed of over 17,500 islands stretching across 5,000 kilometers along the equator.",
          "A founding leader of the Non-Aligned Movement adhering to an independent and active ('Bebas dan Aktif') foreign policy."
        ],
        metrics: {
          "Population": "278.7 Million",
          "Nominal GDP": "$1.37 Trillion",
          "Global Nickel Mine Production": ">45%",
          "Number of Islands": "17,508"
        },
        sources: ["BPS-Statistics Indonesia", "USGS Mineral Commodity Summaries", "World Bank"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Indonesia wants to achieve high-income developed nation status by 2045 ('Indonesia Emas'), build domestic processing industries for its raw minerals ('downstreaming'), and prevent Southeast Asia from becoming an arena for US-China military conflict.",
      whyItMatters: "By banning the export of raw, unrefined nickel ore, Indonesia forced international companies to invest tens of billions of dollars in domestic smelting factories.",
      deeperDetails: {
        facts: [
          "Execute 'Hilirisasi' (resource downstreaming): compel foreign investors to build domestic refining plants for nickel, bauxite, and copper rather than exporting raw ores.",
          "Construct the new high-tech, green administrative capital city, Nusantara (IKN), in East Kalimantan to ease overcrowding in sinking Jakarta.",
          "Uphold 'ASEAN Centrality' to prevent the Southeast Asian region from being carved into competing American and Chinese spheres of influence.",
          "Upgrade its naval and air defense capabilities (purchasing Rafale fighters, Scorpène submarines) to protect its maritime Exclusive Economic Zone."
        ],
        sources: ["Ministry of Foreign Affairs Republic of Indonesia (Kemlu)", "Ministry of Investment (BKPM)"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Indonesia excels in mineral extraction and processing (nickel, coal, tin), palm oil agriculture, regional consensus diplomacy in ASEAN, and domestic counter-terrorism.",
      whyItMatters: "Indonesia produces nearly 60% of the world's palm oil (used in food, cosmetics, and biofuels) and commands the global market for electric vehicle battery nickel.",
      deeperDetails: {
        facts: [
          "Nickel & Battery Value Chains: Attracted tens of billions in foreign investments from China, South Korea, and Japan to establish end-to-end EV battery complexes (Moroowali, Weda Bay).",
          "Global Palm Oil Dominance: World's largest palm oil producer (>45 million metric tons annually), giving it immense leverage over global agricultural edible oils.",
          "Consensus Multilateral Diplomacy: The natural leader of the 10-nation Association of Southeast Asian Nations (ASEAN), maintaining peaceful regional relations through consensus-building ('the ASEAN Way').",
          "Coal Exports: World's top exporter of thermal coal used in power generation across China, India, and Southeast Asia."
        ],
        metrics: {
          "Global Palm Oil Production": "~59% Share",
          "Thermal Coal Exports": "World #1",
          "ASEAN Economy Share": "~35%"
        },
        sources: ["Indonesian Palm Oil Association (GAPKI)", "Ministry of Energy and Mineral Resources (ESDM)"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Indonesia depends heavily on Chinese investment to build its smelters and infrastructure, imported oil and wheat, and international trade stability.",
      whyItMatters: "While Indonesia is rich in coal and gas, its domestic crude oil production has fallen, making it an importer of transport fuel that must be purchased on global markets.",
      deeperDetails: {
        facts: [
          "Chinese Capital & Smelting Tech: Chinese corporations (Tsingshan, Huayou Cobalt) provided the capital and high-pressure acid leach (HPAL) technology that enabled Indonesia's nickel boom.",
          "Refined Fuel Imports: Former OPEC member that is now a net oil importer, spending billions annually on imported gasoline and diesel to fuel its transport fleet.",
          "Food Staples (Wheat): Due to tropical climate, Indonesia cannot grow wheat, importing over 10 million tons annually from Australia, Canada, and Ukraine for noodle and bread production.",
          "Inter-Island Logistics: Moving freight and food between thousands of fragmented islands creates high domestic logistics costs that hamper rural industrial growth."
        ],
        metrics: {
          "Net Crude Oil Importer": "Since 2004",
          "Wheat Import Dependency": "100%",
          "Foreign Direct Investment Inflow": ">$45 Billion Annually"
        },
        sources: ["Bank Indonesia", "Ministry of Trade Indonesia"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Indonesia faces severe environmental degradation from mining and deforestation, the physical sinking of its capital Jakarta, and Chinese fishing and coast guard incursions near the Natuna Islands.",
      whyItMatters: "Jakarta is sinking into the sea at up to 10 centimeters per year due to excessive groundwater extraction, forcing the government to build a brand new capital in the jungles of Borneo.",
      deeperDetails: {
        facts: [
          "Sinking Capital Crisis: Over 40% of Jakarta now sits below sea level, prompting the multi-billion dollar construction of the new capital Nusantara in East Kalimantan.",
          "South China Sea Friction: China's unilateral 'Nine-Dash Line' overlaps Indonesia's Exclusive Economic Zone off the hydrocarbon-rich Natuna Islands, leading to frequent coast guard standoffs.",
          "Environmental & Coal Smelting Impact: Processing nickel requires massive captive coal-fired power plants, producing heavy carbon emissions that threaten green supply-chain certifications.",
          "Under-Equipped Military Navy: Tasked with patrolling 17,500 islands and thousands of nautical miles of sea lanes with an underfunded fleet of frigates and maritime patrol aircraft."
        ],
        sources: ["National Research and Innovation Agency (BRIN) Indonesia", "Indonesian Navy (TNI-AL) Strategic Briefings"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Indonesia balances close economic partnerships with China against deepening defense and educational partnerships with the United States, Australia, and Japan.",
      whyItMatters: "Indonesia strictly follows its 'rowing between two reefs' foreign policy: it welcomes Chinese industrial investments while conducting major joint military exercises with the US military (Super Garuda Shield).",
      deeperDetails: {
        facts: [
          "Indonesia refuses to enter any military alliance, maintaining cordial ties with both Washington and Beijing."
        ],
        partners: [
          {
            who: "China",
            relationshipType: "Comprehensive Strategic Partner & Premier Economic Investor",
            whyItMatters: "Built the Jakarta-Bandung high-speed railway (Whoosh) and finances the majority of Indonesia's nickel smelting sector.",
            areasOfCooperation: ["Downstream mineral processing", "Infrastructure (Belt and Road)", "Bilateral currency swap agreements"],
            areasOfCompetition: ["Chinese coast guard incursions into the Natuna Sea EEZ"],
            strategicSignificance: "The foremost driver of Indonesia's industrial transformation.",
            source: "Joint Statement on Strengthening Comprehensive Strategic Partnership (2023)"
          },
          {
            who: "United States",
            relationshipType: "Comprehensive Strategic Partner & Defense Co-Anchor",
            whyItMatters: "Hosts the annual 'Super Garuda Shield' joint military exercises and supplies defense avionics and radar systems.",
            areasOfCooperation: ["Multinational military exercises", "Maritime domain awareness", "Critical mineral trade negotiations"],
            strategicSignificance: "Vital democratic counterbalance preventing Chinese regional hegemony.",
            source: "US-Indonesia Comprehensive Strategic Partnership Declaration"
          },
          {
            who: "ASEAN Member States",
            relationshipType: "Regional Core Multilateral Community",
            whyItMatters: "Indonesia is the de facto diplomatic leader and institutional host of ASEAN headquarters in Jakarta.",
            areasOfCooperation: ["Regional Comprehensive Economic Partnership (RCEP)", "Maritime security cooperation", "Cross-border QR payments"],
            strategicSignificance: "Preserves Southeast Asia as a neutral, stable economic zone.",
            source: "ASEAN Secretariat Official Documents"
          }
        ],
        sources: ["Kemlu RI", "CSIS Jakarta"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Indonesia does not consider any state an enemy, but experiences maritime friction with China over the Natuna Sea and commercial competition with Vietnam and Malaysia.",
      whyItMatters: "Indonesia views itself as non-aligned, meaning its primary challenges are managing unlawful fishing in its waters and competing to attract foreign manufacturing factories.",
      deeperDetails: {
        facts: [
          "Indonesian foreign policy doctrine emphasizes having 'a thousand friends and zero enemies'."
        ],
        competitors: [
          {
            who: "China (Maritime Domain Friction)",
            competitionType: "Exclusive Economic Zone Sovereignty Friction",
            areasOfCompetition: ["Natuna Islands continental shelf and offshore natural gas blocks (Tuna field)", "Chinese distant-water fishing fleet escort operations"],
            whyItMatters: "Forces Indonesia to deploy warships and naval maritime aviation to escort Chinese coast guard vessels out of its sovereign EEZ.",
            source: "Bakamla (Indonesian Coast Guard) Incident Logs"
          },
          {
            who: "Vietnam & Malaysia",
            competitionType: "Commercial & Regional Investment Competition",
            areasOfCompetition: ["Attracting foreign electronics and EV assembly factories relocating from China", "Palm oil export standards and European deforestation regulations"],
            whyItMatters: "Compete within ASEAN to attract high-value multinational corporate manufacturing investments.",
            source: "ASEAN Investment Report"
          }
        ],
        sources: ["TNI-AL", "BKPM Indonesia"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Indonesia sits at the ultimate maritime crossroads on Earth, controlling the Strait of Malacca, the Sunda Strait, and the Lombok Strait.",
      whyItMatters: "Every ship traveling between the Persian Gulf/Indian Ocean and the manufacturing ports of China, Japan, and South Korea must pass through Indonesian waters.",
      deeperDetails: {
        facts: [
          "Global Maritime Crossroads: Controls the southern shoreline of the Strait of Malacca (handling roughly a quarter of world maritime trade) and 100% of the Sunda and Lombok straits.",
          "Deepwater Submarine Highways: The Lombok and Makassar straits feature deep underwater trenches that allow nuclear-powered submarines to pass undetected between the Indian and Pacific oceans.",
          "Archipelagic Sea Lanes (ALKI): Designated three official north-south maritime corridors under the UN Convention on the Law of the Sea (UNCLOS) for international shipping.",
          "Dispersed Island Defense Challenge: Defending 17,500 islands spread across 5,000 km requires immense naval and air transport capabilities that stretch military budgets.",
        ],
        sources: ["Hydro-Oceanographic Center of the Indonesian Navy (Pushidrosal)", "UNCLOS Declarations"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Indonesia's established strategic behavior is defined by its deep commitment to non-alignment, its pragmatic use of natural resource nationalism, and its refusal to be bullied by any major power.",
      whyItMatters: "Neither Washington nor Beijing can force Indonesia into an exclusive alliance; Indonesian leaders will always choose the policy that maximizes domestic industrial development and regional independence.",
      deeperDetails: {
        facts: [
          "Bebas dan Aktif (Independent and Active): First formulated in 1948, this foreign-policy principle dictates that Indonesia must never become the passive object of great-power rivalries.",
          "Democratic Moderation: Proves that democracy and Islam are fully compatible, maintaining vibrant parliamentary elections and peaceful presidential transitions.",
          "Economic Statecraft Pioneers: Successfully demonstrated to the developing world that banning raw mineral exports can compel foreign powers to transfer industrial processing technology.",
        ],
        sources: ["Rizal Sukma, 'Indonesia and the Balance of Power in Southeast Asia'", "Lowell Dittmer, 'South Asia and Southeast Asia in World Politics'"]
      }
    }
  ]
};
