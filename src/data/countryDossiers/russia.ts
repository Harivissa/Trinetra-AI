import type { CountrySimpleQuestionsDossier } from "./types";

export const RUSSIA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "RUS",
  countryName: "Russia",
  tagline: "A resource-rich Eurasian power deploying raw material leverage and nuclear deterrence to preserve imperial influence",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Russia is the world's largest country by landmass, spanning eleven time zones across Europe and Asia, and possesses the world's largest nuclear arsenal.",
      whyItMatters: "Its vast reserves of oil, natural gas, enriched uranium, fertilizer, and wheat give it outsized leverage over global energy and food security despite economic sanctions.",
      deeperDetails: {
        facts: [
          "Spans 17.1 million square kilometers across northern Eurasia, bordering 14 sovereign nations by land.",
          "Commands the world's largest nuclear arsenal with approximately 5,580 warheads deployed across land-based ICBMs, ballistic missile submarines, and strategic bombers.",
          "Permanent veto-wielding member of the United Nations Security Council (UNSC).",
          "Centralized presidential republic governed by Vladimir Putin, transitioning toward a full-scale militarized wartime economy."
        ],
        metrics: {
          "Territory": "17.1 Million sq km",
          "Population": "144 Million",
          "Nuclear Warheads": "~5,580",
          "Nominal GDP": "$2.06 Trillion"
        },
        sources: ["Rosstat", "SIPRI Nuclear Forces", "World Bank"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Russia wants to secure a recognized sphere of influence across the former Soviet territories, halt NATO's eastward expansion, and dismantle Western global hegemony.",
      whyItMatters: "Russian strategic culture believes that without defensive buffer zones in Eastern Europe and Central Asia, the Russian heartland remains vulnerable to foreign invasion.",
      deeperDetails: {
        facts: [
          "Establishment of a 'Multipolar World' free from American unipolar leadership, coordinating with China, Iran, and North Korea.",
          "Subordination or neutralization of Ukraine, Moldova, and Georgia to prevent further integration into Western institutions (NATO and the European Union).",
          "International recognition of its territorial annexations in Ukraine (Crimea, Donetsk, Luhansk, Zaporizhzhia, Kherson).",
          "Expansion of the Northern Sea Route as an Arctic shipping corridor controlled exclusively by Moscow."
        ],
        sources: ["Foreign Policy Concept of the Russian Federation (2023)", "Valdai Discussion Club Transcripts"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Russia excels in heavy resource extraction (oil, gas, metals), nuclear reactor construction, mass-scale artillery warfare, and sophisticated cyber and asymmetric operations.",
      whyItMatters: "Its ability to produce massive volumes of heavy artillery ammunition, refine enriched uranium for global power plants, and conduct global cyber espionage makes it a persistent challenge for Western planners.",
      deeperDetails: {
        facts: [
          "Energy & Mining: Second-largest exporter of crude oil globally, top exporter of natural gas (historically), and major producer of palladium (40% global share), nickel, and titanium.",
          "Nuclear Energy Technology: Rosatom is the world's dominant exporter of nuclear power plants, constructing reactors across Turkey, India, China, Egypt, and Bangladesh.",
          "Defense Mass Production: Produces artillery shells (152mm/122mm) and armored vehicles at production volumes exceeding the combined output of all NATO European members.",
          "Asymmetric & Cyber Capabilities: Highly capable offensive cyber warfare units (GRU Unit 26165, SVR) executing critical infrastructure attacks and global information operations."
        ],
        metrics: {
          "Artillery Production": ">3 Million Shells/Year",
          "Global Enriched Uranium": "~44% Share",
          "Oil Production": "~10.5 Million bpd"
        },
        sources: ["Rosatom Annual Reports", "Royal United Services Institute (RUSI)", "IEA Energy Data"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Russia depends heavily on oil and gas export revenues, consumer goods and precision machine tools imported from China, and foreign financial clearing systems.",
      whyItMatters: "Because Western sanctions severed access to European energy buyers, Russia's economic stability now depends almost entirely on China and India continuing to purchase its discounted commodities.",
      deeperDetails: {
        facts: [
          "Re-routing Commodity Flows: Oil and gas revenues historically funded over 40% of the federal budget; these flows now depend heavily on Chinese pipelines and Indian maritime refineries.",
          "High-Tech Components: Reliant on dual-use microelectronics, CNC machine tools, and industrial bearings routed through intermediaries in China, Türkiye, and the UAE.",
          "Financial Clearing: Severed from SWIFT and Western banking systems, relying increasingly on yuan-denominated cross-border clearing and informal barter networks.",
          "Civil Aviation: Commercial passenger aircraft fleets (Boeing and Airbus) face severe parts shortages, forcing domestic airlines to cannibalize aircraft for maintenance."
        ],
        metrics: {
          "Budget Revenue from Hydrocarbons": "~30-35%",
          "Imports from China": ">$110 Billion",
          "Frozen Forex Reserves": "~$300 Billion"
        },
        sources: ["Bank of Russia Monetary Policy Reports", "Centre for Research on Energy and Clean Air (CREA)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Russia faces steep demographic decline, severe Western economic sanctions, high battlefield casualties, and increasing economic dependence on China.",
      whyItMatters: "Heavy casualties and hundreds of thousands of educated professionals fleeing abroad have exacerbated a severe peacetime labor shortage across domestic Russian industries.",
      deeperDetails: {
        facts: [
          "Demographic Contraction: Low birth rates, excess male mortality, and emigration of tech professionals have created historic labor deficits across manufacturing sectors.",
          "Economic Distortions: Transitioning to a wartime military-Keynesian economy has driven high domestic inflation and high benchmark interest rates (approaching 20%).",
          "Sino-Russian Asymmetry: Growing reliance on Beijing risks turning Russia into a raw-material vassal dependent on Chinese technology and currency terms.",
          "European Market Loss: Permanent loss of high-margin pipeline gas contracts in Northern Europe (Nord Stream destruction and European diversification to LNG)."
        ],
        sources: ["Rosstat Demographic Bulletins", "Vienna Institute for International Economic Studies (WIIW)"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Russia's primary strategic partner is China, supported by military supply relationships with Iran and North Korea, and a crucial economic partnership with India.",
      whyItMatters: "China keeps Russia's economy afloat with purchases and technology exports, North Korea supplies artillery ammunition, Iran provides combat drones, and India buys crude oil.",
      deeperDetails: {
        facts: [
          "Russia has formed an informal 'axis of realignment' with states actively sanctioned by or opposed to the Western alliance."
        ],
        partners: [
          {
            who: "China",
            relationshipType: "Comprehensive Strategic Partner of Coordination",
            whyItMatters: "Vital economic lifeline purchasing discounted crude, gas, and coal while exporting machine tools, automobiles, and industrial inputs.",
            areasOfCooperation: ["Power of Siberia energy pipeline", "Dual-use technology trade", "Joint military drills in the Sea of Japan", "BRICS/SCO diplomatic coordination"],
            areasOfCompetition: ["Russian reluctance to become fully subservient to Beijing's global agenda"],
            dependencies: ["Chinese manufactured components, electronics, and yuan liquidity"],
            strategicSignificance: "Without Beijing's economic buffer, Moscow could not sustain its prolonged wartime mobilization.",
            source: "Joint Declaration of the Russian Federation and the PRC (2024)"
          },
          {
            who: "India",
            relationshipType: "Special and Privileged Strategic Partner",
            whyItMatters: "Major buyer of seaborne Urals crude oil, generating billions in export revenue, and longtime co-developer of defense systems (BrahMos).",
            areasOfCooperation: ["Discounted crude oil sales", "Civil nuclear power (Kudankulam)", "Fertilizers and defense platform maintenance"],
            areasOfCompetition: ["Growing Russian military closeness with China; India's deepening US ties"],
            strategicSignificance: "Provides Russia with diplomatic legitimacy outside the Western bloc.",
            source: "Official Kremlin Bilateral Summit Communiqués"
          },
          {
            who: "Iran & North Korea",
            relationshipType: "Military-Technical Security Partners",
            whyItMatters: "Supply direct battlefield munitions: North Korea provided millions of artillery shells; Iran supplied Shahed loitering drones and ballistic missiles.",
            areasOfCooperation: ["Ammunition and drone transfers", "Russian aerospace and air defense technology sharing (Su-35, S-400)", "Space and satellite launch assistance"],
            strategicSignificance: "Immediate force-multipliers for ongoing conventional combat operations.",
            source: "Defense Intelligence Agency (DIA) Threat Assessments"
          }
        ],
        sources: ["Kremlin Foreign Policy Statements", "SIPRI"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Russia's primary geopolitical adversary is the United States and the NATO alliance, along with Ukraine.",
      whyItMatters: "Moscow views NATO's military infrastructure along its borders as an existential encirclement threat, driving its aggressive military interventions.",
      deeperDetails: {
        facts: [
          "Russian military doctrine categorizes NATO expansion and US missile defense deployments as primary threats to national security."
        ],
        competitors: [
          {
            who: "United States & NATO",
            competitionType: "Existential Strategic Adversary",
            areasOfCompetition: ["European security architecture", "Ukraine military conflict and territorial borders", "Baltic and Black Sea naval freedom", "Cyber and information warfare"],
            whyItMatters: "Direct military confrontation carries potential nuclear escalation risks.",
            source: "Military Doctrine of the Russian Federation; NATO Strategic Concept"
          },
          {
            who: "Ukraine",
            competitionType: "Direct Battlefield Conflict",
            areasOfCompetition: ["Territorial control over Donbas, Crimea, and southern oblasts", "Black Sea maritime corridor access", "National sovereignty and geopolitical orientation"],
            whyItMatters: "The largest land war fought in Europe since 1945.",
            source: "UN Human Rights Monitoring Mission; RUSI Conflict Studies"
          }
        ],
        sources: ["Russian Ministry of Defence", "NATO Headquarters Documents"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Russia has the longest land borders on Earth across the flat European Plain, leaving its capital historically vulnerable to western invasion, while most of its ports freeze in winter.",
      whyItMatters: "Without natural barriers like oceans or high mountains between Moscow and Western Europe, Russian rulers have historically sought to push their borders as far west as possible to create buffer zones.",
      deeperDetails: {
        facts: [
          "The North European Plain: An uninterrupted flat corridor extending from France through Germany and Poland directly to Moscow, historically traversed by Napoleon (1812) and Hitler (1941).",
          "Warm-Water Port Deficit: Russia's northern ports (Murmansk, Arkhangelsk) face Arctic pack ice, while its Baltic and Black Sea outlets must transit narrow chokepoints controlled by NATO members (Danish Straits and Turkish Bosporus).",
          "Crimean Pivot: Sevastopol in Crimea represents Russia's premier naval base with warm-water access to the Black Sea and the Mediterranean.",
          "Vast Siberian Depth: The Ural Mountains and Siberian expanse provide strategic depth that enabled industrial relocation during World War II, but require immense transportation costs."
        ],
        sources: ["Tim Marshall, 'Prisoners of Geography'", "Russian Geographical Society"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Russia's established strategic behavior is driven by an enduring imperial mindset, a profound fear of encirclement, and a willingness to endure extreme economic pain to remain a recognized great power.",
      whyItMatters: "Expecting economic sanctions alone to collapse Russian state policy underestimates the population's historical capacity to absorb deprivation when convinced they are defending the motherland.",
      deeperDetails: {
        facts: [
          "Historical Continuity: From the Tsarist Empire and Soviet Union to the modern Federation, state authority relies on strong central command and external expansion to maintain domestic cohesion.",
          "Fortress Mentality: Official propaganda successfully frames Western sanctions not as penalties for aggression, but as proof of a perpetual Western desire to dismember Russia.",
          "Commodity Weaponization: Uses gas cutoffs, wheat export quotas, and nuclear safety leverage at captured facilities (Zaporizhzhia) as instruments of political coercion."
        ],
        sources: ["Dmitri Trenin, 'Should We Fear Russia?'", "Carnegie Russia Eurasia Center"]
      }
    }
  ]
};
