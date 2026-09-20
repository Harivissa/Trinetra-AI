import type { CountrySimpleQuestionsDossier } from "./types";

export const GERMANY_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "DEU",
  countryName: "Germany",
  tagline: "Europe's economic engine navigating an historic defense transformation and industrial energy transition",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Germany is Europe's largest national economy, the third-largest economy in the world, and the industrial manufacturing heart of the European Union.",
      whyItMatters: "Its financial strength, precision manufacturing, and leadership inside the EU make German decisions decisive for European economic stability and defense spending.",
      deeperDetails: {
        facts: [
          "World's third-largest nominal economy ($4.59 trillion GDP) and Europe's demographic heavyweight (84.4 million citizens).",
          "Leading exporter of high-precision automobiles, machinery, and industrial chemicals (Volkswagen, BMW, Siemens, BASF).",
          "Committed to the 'Zeitenwende' (historic turning point) defense policy, creating a €100 billion special fund to modernize the Bundeswehr.",
          "Core founding pillar of the Eurozone currency union and the European Central Bank (headquartered in Frankfurt)."
        ],
        metrics: {
          "Nominal GDP": "$4.59 Trillion",
          "Population": "84.4 Million",
          "Zeitenwende Defense Fund": "€100 Billion",
          "Export-to-GDP Ratio": "~47%"
        },
        sources: ["Destatis (Federal Statistical Office of Germany)", "Bundesbank", "IMF World Economic Outlook"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Germany wants a stable and integrated European Union, secure access to affordable energy and green technology, and a modernized military capable of defending NATO's eastern flank.",
      whyItMatters: "Germany has abandoned its decades-long policy of buying cheap Russian pipeline gas and relying on US protection with minimal defense spending, fundamentally rewriting its post-Cold War model.",
      deeperDetails: {
        facts: [
          "Reach NATO's 2% of GDP defense spending target permanently and establish the most capable conventional military brigade in Lithuania to deter Russian aggression.",
          "Execute the 'Energiewende' transition: replace nuclear power and Russian gas with wind, solar, hydrogen, and imported seaborne LNG.",
          "Preserve the competitiveness of its domestic Mittelstand (small-to-medium specialized manufacturing enterprises) against subsidized Chinese and American competition.",
          "Maintain free international trade and access to open export markets worldwide."
        ],
        sources: ["National Security Strategy of the Federal Republic of Germany (2023)", "Federal Ministry of Defence (BMVg)"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Germany is world-class in advanced mechanical engineering, automotive manufacturing, high-precision industrial machine tools, and chemicals.",
      whyItMatters: "Its specialized engineering firms ('hidden champions') produce the indispensable components, pumps, bearings, and robotics that power factory assembly lines worldwide.",
      deeperDetails: {
        facts: [
          "Industrial Machinery & Automotive: Global benchmark for luxury vehicles (Mercedes-Benz, Porsche, Audi) and heavy industrial robotics (KUKA, Bosch).",
          "Armor & Defense Systems: Krauss-Maffei Wegmann and Rheinmetall build the Leopard 2 main battle tank, considered the gold standard for European armored forces.",
          "Financial Discipline: Constitutional 'debt brake' (Schuldenbremse) that legally restricts federal borrowing, ensuring Germany maintains an AAA credit rating.",
          "Chemical Processing: Houses the world's largest integrated chemical manufacturing complex (BASF Ludwigshafen Verbund site)."
        ],
        metrics: {
          "Leopard 2 Tank Users": "19+ Nations Worldwide",
          "Trade Surplus": ">€200 Billion Annually",
          "R&D Intensity": "3.1% of GDP"
        },
        sources: ["VDA (German Association of the Automotive Industry)", "Rheinmetall AG Annual Disclosures", "Federal Ministry for Economic Affairs and Climate Action"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Germany depends heavily on imported energy, the American nuclear umbrella for its ultimate security, and the Chinese market to buy its industrial machinery and cars.",
      whyItMatters: "Having shut down its domestic nuclear power plants and lost Russian pipeline gas, high electricity costs now threaten to push energy-intensive German factories to relocate overseas.",
      deeperDetails: {
        facts: [
          "Energy Imports: Imports over 70% of its primary energy; after severing Nord Stream gas supplies, Germany built floating LNG terminals in record time to import American and Qatari gas.",
          "Chinese Commercial Exposure: German carmakers (Volkswagen, BMW) sell roughly 30-40% of their vehicles in China, making them highly vulnerable to Chinese retaliatory trade sanctions.",
          "US Military Backing: Hosts over 35,000 US military troops and US European Command (EUCOM) in Stuttgart; relies on American B61 nuclear bombs under NATO nuclear sharing.",
          "Raw Material Inputs: 100% dependent on foreign imports for critical battery raw materials like lithium, cobalt, and rare earths."
        ],
        metrics: {
          "Energy Import Dependency": "~71%",
          "German Auto Sales in China": "30-40% Share",
          "US Troops in Germany": "35,000+"
        },
        sources: ["Federal Network Agency (Bundesnetzagentur)", "German Economic Institute (IW Köln)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Germany faces high industrial energy costs, a severe skilled labor shortage due to an aging population, and an under-equipped military needing years to rebuild.",
      whyItMatters: "High electricity and gas prices threaten 'deindustrialization', where chemical and metal manufacturers shut German plants to invest in the US or China where energy is cheaper.",
      deeperDetails: {
        facts: [
          "Deindustrialization Risks: High industrial electricity prices have caused chemical and metal output to drop, prompting corporate investments to shift abroad.",
          "Bundeswehr Readiness Deficits: Decades of defense underfunding left the German military with acute equipment shortages, depleted ammunition stocks, and bureaucratic procurement delays.",
          "Demographic Aging: Baby-boomer retirements are causing an annual deficit of 400,000 skilled workers, straining the pension system and manufacturing productivity.",
          "Digital & Physical Infrastructure Backlog: Aging railway bridges (Deutsche Bahn), slow bureaucratic approvals, and lagging high-speed fiber broadband adoption."
        ],
        sources: ["German Council of Economic Experts", "Bundeswehr Parliamentary Commissioner Annual Reports"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Germany's most essential partners are France inside the European Union, the United States inside NATO, and its neighboring European trade allies like Poland and the Netherlands.",
      whyItMatters: "France and Germany lead the EU together, while the United States provides the indispensable security umbrella that protects German industry and NATO's eastern flank.",
      deeperDetails: {
        facts: [
          "Germany operates as an embedded multilateral power, rarely taking unilateral military or foreign-policy actions."
        ],
        partners: [
          {
            who: "France",
            relationshipType: "Core European Union Co-Leader",
            whyItMatters: "The Franco-German engine designs European regulations, trade policies, and monetary integration.",
            areasOfCooperation: ["EU single market stability", "Joint defense development (Main Ground Combat System / MGCS tank)", "European green industrial policy"],
            areasOfCompetition: ["Nuclear energy vs. renewable subsidies in EU taxonomy"],
            strategicSignificance: "The non-negotiable anchor of European political unity.",
            source: "Franco-German Treaty of Aachen"
          },
          {
            who: "United States",
            relationshipType: "Primary Security Guarantor & NATO Ally",
            whyItMatters: "Guarantees extended nuclear deterrence, hosts US European Command (EUCOM), and purchases German exports.",
            areasOfCooperation: ["NATO collective defense", "Intelligence sharing", "Procurement of US defense systems (F-35A fighters, Patriot PAC-3)"],
            areasOfCompetition: ["US industrial protectionism (Inflation Reduction Act)", "German reluctance to fully decouple trade from China"],
            dependencies: ["US nuclear weapons sharing and high-tech defense aerospace"],
            strategicSignificance: "The ultimate guarantor of German freedom and European peace.",
            source: "US Department of Defense; German BMVg"
          },
          {
            who: "Poland & Central European Neighbors",
            relationshipType: "Industrial Supply Chain & Eastern Flank Partner",
            whyItMatters: "Central European factories are deeply integrated into German automotive and machine manufacturing supply chains.",
            areasOfCooperation: ["NATO Eastern Flank defense (deploying a permanent German brigade to Lithuania)", "Cross-border industrial logistics"],
            strategicSignificance: "Secures Germany's immediate eastern territorial border.",
            source: "Federal Foreign Office Germany"
          }
        ],
        sources: ["Auswärtiges Amt (Federal Foreign Office)", "German Institute for International and Security Affairs (SWP)"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Germany identifies Russia as the primary existential threat to European security, while facing intense industrial competition from China.",
      whyItMatters: "Russia cut off Germany's historical energy model, while Chinese companies are now directly challenging Germany's core automobile and machinery exports in global markets.",
      deeperDetails: {
        facts: [
          "Germany's 2023 National Security Strategy designated Russia as the greatest threat to peace in the Euro-Atlantic area."
        ],
        competitors: [
          {
            who: "Russia",
            competitionType: "Direct Security & Strategic Adversary",
            areasOfCompetition: ["European territorial integrity and military balance", "Energy infrastructure sabotage (Nord Stream pipelines)", "Cyber attacks and hybrid disinformation"],
            whyItMatters: "Forced Germany to completely abandon its 'Wandel durch Handel' (change through trade) policy with Moscow.",
            source: "German National Security Strategy 2023; Federal Office for the Protection of the Constitution (BfV)"
          },
          {
            who: "China",
            competitionType: "Systemic Rival & Industrial Competitor",
            areasOfCompetition: ["Electric vehicles (BYD, NIO competing against VW and BMW)", "Industrial machinery and renewable energy technology", "Control of critical mineral supply chains"],
            whyItMatters: "Official German policy categorizes China simultaneously as a partner, competitor, and systemic rival.",
            source: "Federal Government Strategy on China (2023)"
          }
        ],
        sources: ["BfV Annual Reports", "Federal Foreign Office"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Germany sits directly in the physical center of Europe, surrounded by nine sovereign neighbors and serving as the primary logistics crossroads for the entire continent.",
      whyItMatters: "Because of its central location, any military supplies, commercial trade, or energy pipelines moving across Europe must transit German highways, railways, and ports.",
      deeperDetails: {
        facts: [
          "NATO's Central Logistics Hub: In any military conflict on NATO's eastern flank, Germany is the indispensable transit country through which thousands of allied troops and tanks must pass.",
          "Nine Land Borders: Shares borders with nine sovereign nations (Denmark, Poland, Czechia, Austria, Switzerland, France, Luxembourg, Belgium, Netherlands), requiring continuous diplomatic coordination.",
          "The Rhine River Corridor: The Rhine is Europe's most heavily trafficked commercial inland waterway, moving millions of tons of raw materials, coal, and chemicals from the Port of Rotterdam directly into German industrial plants.",
          "Baltic and North Sea Access: Northern ports (Hamburg, Bremerhaven, Wilhelmshaven) provide maritime access to global container shipping and host new floating LNG import terminals."
        ],
        sources: ["Federal Agency for Cartography and Geodesy (BKG)", "Central Commission for the Navigation of the Rhine (CCNR)"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Germany's established strategic behavior is defined by a slow, consensus-driven democracy that hesitates before acting, but executes with massive financial and institutional power once a decision is made.",
      whyItMatters: "While international observers often criticize Germany for slow decision-making, its political system is deliberately designed to build deep democratic consensus before launching historic policy reversals.",
      deeperDetails: {
        facts: [
          "The Zeitenwende Reality: The defense shift is real: defense spending has crossed 2% of GDP, the €100 billion fund is being spent on F-35s and Arrow-3 missile defense, and a combat brigade is moving to Lithuania.",
          "Consensus-Driven Politics: Governed by coalition governments that require months of negotiation between political parties, preventing erratic foreign-policy swings.",
          "Deep Commitment to Rules: Prioritizes international law, multilateral treaties, and EU institutional processes above unilateral geopolitical power plays."
        ],
        sources: ["Ulrich Speck, 'German Power in Europe'", "Berlin Policy Journal"]
      }
    }
  ]
};

export const TURKEY_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "TUR",
  countryName: "Türkiye",
  tagline: "A strategic transcontinental bridge leveraging drone warfare, the Turkish Straits, and independent balancing diplomacy",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Türkiye is a transcontinental nation of 85 million people spanning Europe and Asia, commanding the Turkish Straits, and maintaining NATO's second-largest standing army.",
      whyItMatters: "Its unique geographic position between Europe, the Middle East, and the Black Sea allows it to act as an indispensable mediator and independent regional power.",
      deeperDetails: {
        facts: [
          "Nominal economy of approximately $1.15 trillion, bridging Southeastern Europe and Western Asia.",
          "Second-largest military in NATO by active personnel (roughly 425,000 active troops), with extensive combat experience in Syria, Iraq, and the Mediterranean.",
          "Commands legal jurisdiction over the Bosporus and Dardanelles straits under the 1936 Montreux Convention.",
          "Pioneer in modern autonomous drone warfare (Bayraktar TB2, Kızılelma) reshaping contemporary battlefields."
        ],
        metrics: {
          "Population": "85.3 Million",
          "Nominal GDP": "$1.15 Trillion",
          "NATO Standing Army": "2nd Largest (~425,000)",
          "Defense Export Growth": ">$5.5 Billion Annually"
        },
        sources: ["TurkStat", "Turkish Ministry of National Defence (MSB)", "SIPRI"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Türkiye wants complete strategic autonomy, international recognition as an independent global pole, unchallenged control over its maritime borders ('Blue Homeland'), and the elimination of Kurdish militant groups along its southern frontier.",
      whyItMatters: "Under President Recep Tayyip Erdogan, Türkiye rejects being treated as a junior NATO subordinate, instead pursuing its own independent military and diplomatic agenda.",
      deeperDetails: {
        facts: [
          "Achieve sovereign defense self-sufficiency (>80% domestic weapons production target, including the KAAN 5th-gen fighter).",
          "Enforce the 'Mavi Vatan' (Blue Homeland) maritime doctrine claiming extensive Mediterranean and Aegean continental shelf rights.",
          "Establish permanent buffer zones in northern Syria and northern Iraq to dismantle PKK/YPG Kurdish militant networks.",
          "Maintain independent diplomatic mediation between Russia and Ukraine while keeping Montreux Straits restrictions active."
        ],
        sources: ["Presidency of the Republic of Türkiye Directorate of Communications", "Secretariat of Defence Industries (SSB)"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Türkiye excels in low-cost combat drone engineering, expeditionary military intervention, transcontinental energy transit diplomacy, and construction.",
      whyItMatters: "Turkish drones (Bayraktar TB2) altered the outcome of wars in Azerbaijan (Nagorno-Karabakh), Libya, and Ukraine by destroying tanks, air defenses, and warships at a fraction of Western costs.",
      deeperDetails: {
        facts: [
          "Combat Drone Warfare: Baykar and TAI build reliable, battle-proven combat drones exported to over 30 countries worldwide.",
          "Expeditionary Power Projection: Maintains active military bases in Qatar, Somalia, northern Cyprus, northern Syria, and northern Iraq.",
          "Straits Legal Gatekeeping: Skillfully implements the 1936 Montreux Convention, blocking Russian warships from entering the Black Sea during wartime.",
          "Global Construction & Infrastructure: Turkish contractors rank second globally behind China in international construction and engineering projects."
        ],
        metrics: {
          "Bayraktar TB2 Export Clients": "34+ Nations",
          "Domestic Defense Industry Share": ">80%",
          "Black Sea Warship Transits Blocked": "Dozens since 2022"
        },
        sources: ["Baykar Technologies Disclosures", "Turkish Ministry of Foreign Affairs Montreux Registry", "Engineering News-Record (ENR)"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Türkiye depends on foreign imports for over 70% of its energy, foreign capital and tourism to stabilize its volatile currency, and Western supply chains for aircraft engines.",
      whyItMatters: "Because Türkiye has limited domestic oil and gas, its currency (the Turkish Lira) and economy are highly vulnerable whenever global fuel prices spike or inflation accelerates.",
      deeperDetails: {
        facts: [
          "Energy Imports: Imports over 90% of its crude oil and nearly 100% of its natural gas, sourced primarily from Russia, Azerbaijan, and Iran.",
          "Aerospace Engine Technology: While building advanced airframes (KAAN, Hürjet), Türkiye still relies on American GE F110 engines and foreign components.",
          "Foreign Capital & Currency Stability: Chronic inflation and severe currency depreciation require billions in swap lines from Gulf monarchies (UAE, Saudi Arabia, Qatar) to stabilize reserves.",
          "European Trade Access: Over 40% of Turkish exports go to the European Union under the EU-Türkiye Customs Union agreement."
        ],
        metrics: {
          "Energy Import Dependency": "~74%",
          "Exports to EU": ">40% Share",
          "Inflation Peak": ">70-80% in recent cycles"
        },
        sources: ["Central Bank of the Republic of Türkiye (CBRT)", "Ministry of Energy and Natural Resources"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Türkiye suffers from chronic domestic inflation and currency depreciation, recurring political friction with NATO allies, and high seismic earthquake risk.",
      whyItMatters: "Purchasing Russian S-400 missile systems caused the US to expel Türkiye from the F-35 stealth fighter program, complicating its long-term air force modernization.",
      deeperDetails: {
        facts: [
          "Economic Volatility & Inflation: High inflation and rapid lira depreciation have eroded domestic consumer purchasing power and required drastic central bank interest rate hikes.",
          "F-35 Expulsion Fallout: Expulsion from the F-35 program under CAATSA sanctions created a modernization gap for the Turkish Air Force, partially mitigated by F-16 upgrades.",
          "Hostile Regional Border Zones: Borders volatile war zones in Syria and Iraq; hosts approximately 3 million Syrian refugees, creating domestic political friction.",
          "High Seismic Disaster Vulnerability: Sits directly atop major fault lines; the devastating February 2023 earthquakes killed over 50,000 citizens and caused over $100 billion in damage."
        ],
        sources: ["Turkish Ministry of Treasury and Finance", "Disaster and Emergency Management Authority (AFAD)"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Türkiye balances its NATO treaty alliance with the United States and Europe against an intense, pragmatic working relationship with Russia and Azerbaijan.",
      whyItMatters: "Türkiye does not choose sides: it supplies combat drones to Ukraine while purchasing natural gas from Russia, refusing to join Western sanctions against Moscow.",
      deeperDetails: {
        facts: [
          "Türkiye practices strategic hedging, refusing to allow any single superpower to dictate its foreign-policy decisions."
        ],
        partners: [
          {
            who: "Azerbaijan",
            relationshipType: "'One Nation, Two States' Strategic Alliance",
            whyItMatters: "Closest blood ally; Turkish military support, drones, and special forces were decisive in Azerbaijan's victory in the 2020 Nagorno-Karabakh war.",
            areasOfCooperation: ["Joint military command integration", "Trans-Anatolian Natural Gas Pipeline (TANAP)", "Zangezur Corridor advocacy"],
            strategicSignificance: "Secures direct Turkish energy access and geopolitical connectivity into the Turkic world of Central Asia.",
            source: "Shusha Declaration on Allied Relations (2021)"
          },
          {
            who: "Russia",
            relationshipType: "Pragmatic Competitor-Partner (Coopetition)",
            whyItMatters: "Primary supplier of natural gas, builder of the Akkuyu nuclear power plant, and key interlocutor in Syria and the South Caucasus.",
            areasOfCooperation: ["TurkStream natural gas pipeline", "Akkuyu nuclear plant construction", "Grain deal mediation", "Tourism flows"],
            areasOfCompetition: ["Opposing sides in Syria, Libya, and Nagorno-Karabakh; Turkish drone sales to Ukraine"],
            dependencies: ["Russian natural gas and tourist revenue"],
            strategicSignificance: "Gives Ankara leverage against Western pressure.",
            source: "Official Turkish-Russian Bilateral Summit Records"
          },
          {
            who: "NATO & United States",
            relationshipType: "Treaty Ally with Frequent Bilateral Friction",
            whyItMatters: "Guarantees collective defense under Article 5 and hosts US nuclear weapons and radars at Incirlik and Kürecik bases.",
            areasOfCooperation: ["Black Sea deterrence", "F-16 fighter fleet modernization", "Counter-piracy"],
            areasOfCompetition: ["US partnership with Kurdish YPG in Syria; Turkish acquisition of Russian S-400s"],
            strategicSignificance: "Anchor of Turkish integration into Western security structures.",
            source: "NATO Parliamentary Assembly Briefings"
          }
        ],
        sources: ["Ministry of Foreign Affairs Türkiye", "SETA Foundation"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Türkiye competes intensely with Greece and the Republic of Cyprus in the Aegean and Eastern Mediterranean, alongside long-term strategic rivalry with Iran.",
      whyItMatters: "Disputes over underwater gas drilling rights, island airspace, and maritime boundaries bring Greek and Turkish fighter jets into frequent dogfights over the Aegean Sea.",
      deeperDetails: {
        facts: [
          "Türkiye and Greece are both NATO members, yet have repeatedly come to the brink of military clashes (1974 Cyprus, 1996 Imia/Kardak crisis, 2020 Mediterranean standoff)."
        ],
        competitors: [
          {
            who: "Greece & Cyprus",
            competitionType: "Historic Maritime & Territorial Rivalry",
            areasOfCompetition: ["Aegean Sea territorial waters, airspace, and militarized islands", "Exclusive Economic Zone (EEZ) demarcation for offshore natural gas", "Divided status of Cyprus"],
            whyItMatters: "Direct military posturing with naval deployments in contested Mediterranean energy waters.",
            source: "Turkish Ministry of Foreign Affairs Maritime Statements; Greek MFA"
          },
          {
            who: "Iran",
            competitionType: "Historic Imperial Competition",
            areasOfCompetition: ["Influence in northern Iraq (Sinjar/Nineveh)", "Control of trade corridors in the South Caucasus (Zangezur Corridor)", "Syrian post-war political settlement"],
            whyItMatters: "Two historic empires (Ottoman and Persian) balancing influence across the northern Middle East without direct war.",
            source: "Center for Iranian Studies (IRAM) Ankara"
          }
        ],
        sources: ["MSB Türkiye", "IISS Strategic Survey"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Türkiye controls the Bosporus and Dardanelles straits—the only water passage connecting the Black Sea to the Mediterranean—making it the gatekeeper of naval access for Russia and Ukraine.",
      whyItMatters: "Under the 1936 Montreux Convention, Türkiye has the legal right to close the straits to warring nations' warships, giving Ankara immense power to influence naval wars.",
      deeperDetails: {
        facts: [
          "Montreux Convention Power: Controls the Bosporus and Dardanelles; closed the straits to non-home-port warships in 2022, preventing Russia from reinforcing its Black Sea naval fleet.",
          "Bridge Between Continents: 97% of land is in Asia (Anatolia) and 3% in Europe (Thrace), divided by the historic city of Istanbul.",
          "Energy Pipeline Crossroads: Hosts transit pipelines carrying oil and natural gas from Azerbaijan (BTC, TANAP), Russia (Blue Stream, TurkStream), and Iraq (Kirkuk-Ceyhan) directly to European ports.",
          "Challenging Mountainous Terrain: The Anatolian plateau is ringed by high mountain ranges (Pontic Alps in north, Taurus Mountains in south), creating natural defensive barriers."
        ],
        sources: ["General Directorate of Mapping (HGM) Türkiye", "Turkish Straits Maritime Traffic Records"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Türkiye's established strategic behavior is defined by its refusal to be confined to any single geopolitical camp, aggressively leveraging its geographic chokepoints and military industry to maximize its sovereign freedom of action.",
      whyItMatters: "Western analysts who assume Türkiye will eventually conform to standard NATO directives misunderstand its deep historical tradition as an imperial center that views itself as equal to any great power.",
      deeperDetails: {
        facts: [
          "Post-Western Foreign Policy: Public and elite consensus strongly supports a self-reliant foreign policy that engages China, Russia, Africa, and the Islamic world independently.",
          "Proactive Military Interventions: Unhesitatingly deploys military troops and drones across sovereign borders (Syria, Iraq, Libya) when it perceives direct threats to its vital security interests.",
          "African Expansion: Opened over 44 embassies across Africa, combining drone sales, humanitarian assistance (TIKA), and Turkish Airlines flights into an influential soft-power network."
        ],
        sources: ["Ziya Öniş, 'Turkey and the New Global Order'", "Carnegie Europe"]
      }
    }
  ]
};

export const IRAN_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "IRN",
  countryName: "Iran",
  tagline: "A revolutionary Islamic theocracy commanding regional proxy networks, ballistic missiles, and near-weapons-grade uranium enrichment",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Iran is an Islamic theocracy of 89 million people in the Middle East, commanding the world's fourth-largest oil reserves and an extensive regional network of armed proxy groups.",
      whyItMatters: "Its uranium enrichment program sits within days of weapons-grade material, while its missile arsenal and proxy allies give it the ability to disrupt global oil flows through the Persian Gulf.",
      deeperDetails: {
        facts: [
          "Theocratic republic established after the 1979 Islamic Revolution, led by Supreme Leader Ayatollah Ali Khamenei and guarded by the Islamic Revolutionary Guard Corps (IRGC).",
          "Controls proven petroleum reserves of roughly 208 billion barrels (roughly 13% of world total) and the world's second-largest natural gas reserves.",
          "Commands the largest and most diverse ballistic missile arsenal in the Middle East.",
          "Has enriched uranium to 60% purity at underground facilities (Fordow and Natanz), just a short technical step from 90% weapons-grade."
        ],
        metrics: {
          "Population": "89.2 Million",
          "Oil Reserves": "208 Billion Barrels (4th global)",
          "Enriched Uranium (60%)": ">140 kg (IAEA monitored)",
          "Ballistic Missile Range": "Up to 2,000+ km"
        },
        sources: ["IAEA Board of Governors Reports", "OPEC Annual Statistical Bulletin", "Defense Intelligence Agency (DIA) Iran Military Power"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Iran wants to expel American military forces from the Middle East, eliminate the state of Israel, achieve recognized dominance across the Persian Gulf, and develop threshold nuclear weapon capabilities.",
      whyItMatters: "Achieving these revolutionary objectives would dismantle the Western-backed security architecture that has protected Arab monarchies and shipping lanes for over half a century.",
      deeperDetails: {
        facts: [
          "Expel US military presence from Iraq, Syria, and Gulf bases through asymmetric drone, rocket, and proxy pressure.",
          "Maintain 'Forward Defense' via the 'Axis of Resistance' (Hezbollah in Lebanon, Houthis in Yemen, Hamas in Gaza, Shia militias in Iraq and Syria) to fight adversaries far beyond Iranian borders.",
          "Preserve nuclear latency: achieve the technical ability to produce nuclear weapons on demand as an ultimate deterrent against foreign invasion.",
          "Bypass Western economic sanctions by selling oil to China and deepening military trade with Russia."
        ],
        sources: ["Statements of the Supreme Leader of the Islamic Revolution", "IRGC Doctrine Declarations"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Iran excels in manufacturing low-cost loitering attack drones (Shahed series), building long-range precision ballistic missiles, and organizing disciplined foreign proxy militias.",
      whyItMatters: "Its inexpensive drones and missiles have transformed modern warfare, allowing Iranian-backed forces like the Houthis to shut down commercial shipping in the Red Sea and strike targets thousands of kilometers away.",
      deeperDetails: {
        facts: [
          "Asymmetric Drone & Missile Tech: Mass-produces Shahed-136 delta-wing attack drones (exported to Russia) and precision-guided ballistic missiles (Kheibar Shekan, Fateh-110).",
          "Expeditionary Proxy Command: The IRGC Quds Force excels in training, arming, and commanding indigenous non-state militias across Lebanon, Yemen, Iraq, and Syria.",
          "Deep Underground Hardening: Constructed massive underground missile bases ('missile cities') and nuclear facilities buried hundreds of feet under mountains to survive bunker-buster bombs.",
          "Sanctions Evasion: Operates an elaborate 'ghost fleet' of oil tankers using flags of convenience and ship-to-ship transfers to sell hundreds of thousands of barrels of crude daily to Chinese independent refiners."
        ],
        metrics: {
          "Ballistic Missiles Stockpile": ">3,000+ Missiles",
          "Shahed-136 Drone Unit Cost": "~$20,000 - $40,000",
          "Illicit Oil Exports": ">1.5 Million Barrels/Day to China"
        },
        sources: ["US Central Command (CENTCOM)", "TankerTrackers.com", "Conflict Armament Research"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Iran depends heavily on Chinese purchases of its sanctioned crude oil, Russian political cover at the UN, and foreign supply chains for precision electronic chips.",
      whyItMatters: "Because Western banking sanctions cut off Iran from international trade, China is Iran's sole major economic lifeline, purchasing over 90% of its oil exports.",
      deeperDetails: {
        facts: [
          "Chinese Oil Revenue: Over 90% of Iranian crude oil exports are purchased by small Chinese independent refiners ('teapots') settled in Chinese yuan or informal barter.",
          "Russian Military Systems: Reliant on Moscow for advanced air defense upgrades (S-400 radar systems), electronic warfare equipment, and modern fighter jets (Su-35).",
          "Imported Smuggled Components: Relies on illicit transnational smuggling networks to obtain Western microelectronics and optical sensors required for its drone and missile guidance kits.",
          "Water Management: Facing severe domestic water crises and droughts due to mismanagement, river diversions, and climate change."
        ],
        metrics: {
          "Crude Exports to China": ">90% Share",
          "Inflation Rate": "~40-50%",
          "Youth Unemployment": ">20%"
        },
        sources: ["US Energy Information Administration (EIA)", "Statistical Centre of Iran"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Iran faces severe domestic economic hardship from sanctions, widespread public protests against theocratic rule, devastating water shortages, and an aging Supreme Leader without a clear successor.",
      whyItMatters: "Mass demonstrations—such as the 'Woman, Life, Freedom' movement in 2022—demonstrate that millions of Iranian youths deeply oppose mandatory theocratic laws and economic stagnation.",
      deeperDetails: {
        facts: [
          "Regime Legitimacy Deficit: High public dissatisfaction over mandatory hijab laws, social repression, and economic hardship, leading to repeated nationwide uprisings met with lethal crackdowns.",
          "Severe Economic Misery: Galloping inflation (~40-50%), a collapsing currency (the Iranian Rial), and high youth unemployment caused by structural corruption and US financial sanctions.",
          "Catastrophic Water Scarcity: Over-extraction of underground aquifers has caused severe land subsidence across major cities and dried up historic lakes and rivers (Lake Urmia, Zayandeh Rood).",
          "Succession Uncertainty: 85-year-old Supreme Leader Ali Khamenei's eventual passing carries high risks of power struggles between the IRGC and clerical institutions."
        ],
        sources: ["Amnesty International Iran Reports", "World Bank Iran Economic Monitor", "Water Resources Management Company of Iran"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Iran's most critical international partners are Russia and China, supported by its regional network of proxy groups in Lebanon, Yemen, Iraq, and Syria.",
      whyItMatters: "Iran provides Russia with combat drones and ballistic missiles for its war in Ukraine, while China buys Iranian oil and provides diplomatic cover alongside Moscow at the UN.",
      deeperDetails: {
        facts: [
          "Iran has formally joined the SCO and expanded BRICS, anchoring its foreign policy around an explicit 'Look to the East' orientation."
        ],
        partners: [
          {
            who: "Russia",
            relationshipType: "Strategic Defense & Military-Technical Partner",
            whyItMatters: "Supplying battlefield drones and missiles to Moscow has elevated Iran to an indispensable Russian military supplier.",
            areasOfCooperation: ["Shahed drone manufacturing plant in Russia (Alabuga)", "Russian Su-35 fighter jet and S-400 acquisitions", "Joint coordination in Syria"],
            strategicSignificance: "Secures Russian UNSC veto power and advanced aerospace technology.",
            source: "US National Security Council Declassified Intelligence"
          },
          {
            who: "China",
            relationshipType: "Comprehensive Strategic Partner (25-Year Accord)",
            whyItMatters: "Buys nearly all of Iran's exported crude oil and signed a 25-year strategic cooperation pact promising $400 billion in potential investments.",
            areasOfCooperation: ["Sanctioned crude oil trade", "Infrastructure investments", "BRICS and SCO integration"],
            areasOfCompetition: ["China's parallel strategic partnerships with Saudi Arabia and the UAE"],
            strategicSignificance: "The financial lifeline keeping the Iranian state economy solvent.",
            source: "Iran-China 25-Year Strategic Agreement (2021)"
          },
          {
            who: "The 'Axis of Resistance' (Hezbollah, Houthis, PMF)",
            relationshipType: "Regional Asymmetric Proxy Network",
            whyItMatters: "Provides forward military deterrence against Israel and allows Iran to threaten maritime chokepoints without direct attribution.",
            areasOfCooperation: ["Missile and drone transfers", "Military training and intelligence sharing", "Coordinated multi-front attacks"],
            strategicSignificance: "Iran's primary conventional defense and deterrence shield.",
            source: "IISS Strategic Dossier: Iran's Networks of Influence"
          }
        ],
        sources: ["Ministry of Foreign Affairs Islamic Republic of Iran", "SIPRI"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Iran's primary existential adversaries are Israel and the United States, alongside long-standing ideological and regional rivalry with Saudi Arabia.",
      whyItMatters: "Iran and Israel are engaged in a direct shadow war involving assassinations, airstrikes, and cyber warfare that repeatedly threatens to explode into a full-scale regional conflict.",
      deeperDetails: {
        facts: [
          "Iranian military doctrine explicitly calls for the eradication of the 'Zionist regime' (Israel) and the expulsion of the 'Great Satan' (the United States)."
        ],
        competitors: [
          {
            who: "Israel",
            competitionType: "Existential Ideological & Military Adversary",
            areasOfCompetition: ["Nuclear weapons program sabotage and assassinations", "Direct missile and drone exchanges (April/October 2024)", "Israeli strikes on Iranian proxy leadership (Hezbollah/Hamas)"],
            whyItMatters: "The most volatile military flashpoint in the contemporary Middle East.",
            source: "IDF Statements; Iranian Foreign Ministry Communiqués"
          },
          {
            who: "United States",
            competitionType: "Primary Strategic Superpower Adversary",
            areasOfCompetition: ["US military bases in the Persian Gulf, Iraq, and Syria", "Sanctions enforcement and oil interdictions", "Persian Gulf freedom of navigation"],
            whyItMatters: "Direct strikes on US forces risk triggering large-scale American retaliatory air campaigns.",
            source: "US National Security Strategy; US Central Command"
          },
          {
            who: "Saudi Arabia",
            competitionType: "Historic Regional & Religious Rival",
            areasOfCompetition: ["Leadership of the Islamic world (Sunni vs. Shia)", "Dominance across Yemen, Iraq, and Lebanon", "Strait of Hormuz maritime influence"],
            whyItMatters: "Despite a 2023 diplomatic agreement brokered by China, structural rivalry across the Gulf remains high.",
            source: "Chatham House Middle East Programme"
          }
        ],
        sources: ["IISS", "Center for Strategic and International Studies (CSIS)"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Iran sits on high, mountainous terrain directly overlooking the Strait of Hormuz, giving it the natural geographic ability to shut down 20% of the world's petroleum supply.",
      whyItMatters: "The country is a natural mountain fortress ringed by the Zagros and Alborz ranges, making a foreign land invasion virtually impossible while allowing Iran to dominate coastal shipping below.",
      deeperDetails: {
        facts: [
          "The Strait of Hormuz Chokepoint: Controls the entire northern coast of the 39-km-wide strait through which roughly 21 million barrels of oil transit daily; Iranian naval gunboats and shore-based anti-ship missiles can interdict commercial tankers at will.",
          "Mountainous Fortress Plateau: Ringed by the rugged Zagros Mountains (west) and Alborz Mountains (north), creating immense physical barriers that protect the Iranian heartland from conventional ground assault.",
          "Underground Nuclear Bastions: Facilities at Fordow and Natanz are carved deep into granite mountains under dozens of meters of rock and reinforced concrete, shielded from most conventional bunker-buster munitions.",
          "Trans-Iranian Corridor: Serves as the central land bridge connecting Russia and the Caspian Sea directly to the Indian Ocean via the International North-South Transport Corridor (INSTC)."
        ],
        sources: ["National Cartographic Center of Iran", "US Energy Information Administration (EIA) Chokepoint Data"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Iran's established strategic behavior is defined by high ideological discipline, extraordinary skill in asymmetric warfare, and an ability to project power across the Middle East despite crushing economic sanctions.",
      whyItMatters: "Viewing Iran simply as an unstable theocracy overlooks its 2,500-year imperial statecraft tradition and the strategic patience with which it has constructed its regional defensive network.",
      deeperDetails: {
        facts: [
          "Strategic Asymmetry: Recognizing it cannot match the US or Israel in conventional fighter jets or tanks, Iran strategically invested in low-cost, asymmetric weapons (missiles, drones, cyber, proxies) that bypass Western technological superiority.",
          "Regime Preservation First: Supreme Leader Ayatollah Ruhollah Khomeini established the constitutional principle that preserving the Islamic Republic overrides even primary religious duties, explaining why the regime acts pragmatically when survival is at stake.",
          "Nuclear Threshold Status: Rather than testing a weapon and inviting immediate pre-emptive war, Iran has methodically developed all the components of a nuclear weapon, leaving itself days away from breakout if attacked."
        ],
        sources: ["Karim Sadjadpour, 'The Iran Primer'", "Carnegie Endowment for International Peace"]
      }
    }
  ]
};

export const ISRAEL_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "ISR",
  countryName: "Israel",
  tagline: "A technologically advanced nuclear-armed democracy fighting a multi-front war against Iranian-backed adversaries",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Israel is a technologically advanced parliamentary democracy of 10 million people in the Middle East with a world-leading high-tech sector, an unacknowledged nuclear arsenal, and an ironclad defense alliance with the United States.",
      whyItMatters: "Its high-tech military, intelligence agencies (Mossad, Shin Bet), and multi-layered air defense systems make it the most militarily capable state in the Levant.",
      deeperDetails: {
        facts: [
          "Nominal economy of approximately $530 billion with the highest venture capital investment per capita in the world ('Start-Up Nation').",
          "Maintains an unacknowledged nuclear deterrent (estimated 90 warheads) under a policy of deliberate 'nuclear ambiguity' (Amimut).",
          "Universal military conscription for most citizens, backed by roughly 170,000 active personnel and 465,000 rapidly mobilizable reserves.",
          "World's most advanced multi-tiered integrated missile defense shield: Iron Dome, David's Sling, Arrow 2, and Arrow 3."
        ],
        metrics: {
          "Population": "9.9 Million",
          "Nominal GDP": "$530 Billion",
          "Estimated Nuclear Warheads": "~90",
          "Active + Reserve Forces": "~635,000 Personnel"
        },
        sources: ["Central Bureau of Statistics Israel", "SIPRI Nuclear Forces", "Israel Defense Forces (IDF) Records"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Israel wants to guarantee the survival of the Jewish state, prevent Iran from acquiring nuclear weapons, dismantle hostile militant groups along its borders (Hamas and Hezbollah), and expand diplomatic normalization with Arab nations.",
      whyItMatters: "Because Israel lacks geographic depth, its military doctrine requires fighting wars entirely on enemy territory and launching pre-emptive strikes against existential threats.",
      deeperDetails: {
        facts: [
          "Enforce the 'Begin Doctrine': prevent any hostile regional adversary from acquiring weapons of mass destruction through pre-emptive military action.",
          "Dismantle the military and governance capabilities of Hamas in the Gaza Strip and push Hezbollah north of the Litani River in Lebanon.",
          "Deter Iranian ballistic missile and drone attacks through advanced multi-tier interception and direct retaliatory strikes.",
          "Expand the 'Abraham Accords' to normalize diplomatic, security, and economic ties with Saudi Arabia and other Arab states."
        ],
        sources: ["Israel National Security Strategy", "Ministry of Foreign Affairs Israel"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Israel excels in multi-layered air and missile defense, offensive cyber operations, targeted intelligence operations (Mossad), and military drone and radar technology.",
      whyItMatters: "Its Iron Dome and Arrow missile systems shoot down thousands of incoming rockets and ballistic missiles, while its intelligence services execute complex covert operations across the Middle East.",
      deeperDetails: {
        facts: [
          "Multi-Tiered Air Defense: Iron Dome intercepts short-range rockets (>90% success rate); David's Sling intercepts heavy cruise missiles; Arrow 2/3 intercept exo-atmospheric ballistic missiles in space.",
          "Cyber Warfare & Intelligence: Elite military intelligence units (Unit 8200) and agencies (Mossad) pioneer cyber weapons (Stuxnet) and deep targeted covert penetrations across Iran and Lebanon.",
          "High-Tech Innovation: World leader in cybersecurity, agricultural drip irrigation, water desalination, and artificial intelligence defense systems.",
          "Rapid Mobilization: Able to mobilize and deploy over 300,000 civilian military reservists into active combat units within 48 hours."
        ],
        metrics: {
          "Air Defense Interception Rate": ">90% (Iron Dome)",
          "Venture Capital Funding per Capita": "Highest Worldwide",
          "Desalinated Water Share": "85% of municipal water"
        },
        sources: ["Israel Ministry of Defense (IMOD)", "Start-Up Nation Central", "Israel Water Authority"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Israel depends critically on American military financing, joint weapon development, emergency ammunition resupply, and diplomatic veto protection at the United Nations.",
      whyItMatters: "Without regular American shipments of precision-guided bombs, artillery shells, and Iron Dome interceptor missiles, Israel would face acute ammunition shortages in a prolonged multi-front war.",
      deeperDetails: {
        facts: [
          "US Military Aid & Munitions: Receives $3.8 billion in annual Foreign Military Financing (FMF) under a 10-year memorandum of understanding, plus billions in emergency wartime supplemental funding.",
          "US Diplomatic Shield: Relies on the United States to exercise its veto in the UN Security Council to block binding sanctions or international embargoes.",
          "Imported Raw Materials & Fuel: While offshore natural gas fields (Leviathan, Tamar) provide electricity, Israel imports all its crude oil (primarily via pipelines from Azerbaijan and Iraqi Kurdistan) and coal.",
          "International Tech Investment: High-tech exports account for over 50% of total national exports, making the economy sensitive to global tech sector cycles."
        ],
        metrics: {
          "US Annual Defense Aid": "$3.8 Billion (MOU)",
          "Tech Share of Total Exports": "53%",
          "UN Security Council US Vetoes": "Over 45 times for Israel"
        },
        sources: ["Congressional Research Service (CRS) Reports on US Aid to Israel", "Bank of Israel Annual Reports"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Israel faces a simultaneous multi-front war with Iranian-backed groups, severe international diplomatic isolation over civilian casualties in Gaza, and deep domestic political division.",
      whyItMatters: "Prolonged multi-front conflict strains the economy by keeping hundreds of thousands of reservists away from tech jobs, while global legal challenges at the ICJ and ICC threaten international partnerships.",
      deeperDetails: {
        facts: [
          "Multi-Front War Burden: Simultaneous combat against Hamas in Gaza, Hezbollah in Lebanon, Houthis in Yemen, and Iranian ballistic missiles places immense psychological and economic strain on society.",
          "International Diplomatic Isolation: Growing international scrutiny over civilian casualties in Gaza, leading to genocide allegations at the International Court of Justice (ICJ) and ICC arrest warrant requests.",
          "Domestic Political Fracture: Severe social divisions between secular Israelis, religious Zionist factions, and Ultra-Orthodox (Haredi) communities over judicial reforms and military conscription exemptions.",
          "Displacement of Citizens: Tens of thousands of Israeli civilians evacuated from northern and southern border communities due to continuous rocket fire."
        ],
        sources: ["Israel Democracy Institute (IDI)", "Bank of Israel Macroeconomic Forecasts"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Israel's most indispensable ally is the United States, supported by European defense partners like Germany, and Arab normalization partners under the Abraham Accords (UAE, Bahrain, Morocco).",
      whyItMatters: "The United States guarantees Israel's 'Qualitative Military Edge' (QME) by law, ensuring Israel always possesses more advanced American weapon systems than any potential regional adversary.",
      deeperDetails: {
        facts: [
          "Israel has built strategic diplomatic and intelligence bridges with moderate Sunni Arab states who share its fear of Iranian expansion."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Ironclad Strategic Ally & QME Guarantor",
            whyItMatters: "Guarantees military resupply, intelligence sharing, diplomatic veto cover at the UN, and co-develops missile defense systems.",
            areasOfCooperation: ["Joint missile defense (Arrow 3, David's Sling)", "F-35 stealth fighter integration", "Intelligence sharing on Iran", "Red Sea maritime security"],
            areasOfCompetition: ["Disagreements over Palestinian statehood and post-war governance of Gaza"],
            dependencies: ["US precision-guided munitions, interceptor restocking, and international legal shielding"],
            strategicSignificance: "The irreplaceable guarantor of Israeli security and diplomatic standing.",
            source: "US-Israel Strategic Partnership Act; Defense Security Cooperation Agency (DSCA)"
          },
          {
            who: "Germany",
            relationshipType: "Key European Defense & Naval Supplier",
            whyItMatters: "Supplies Israel with Dolphin-class submarines (equipped with nuclear-capable cruise missile tubes) and purchased Israel's Arrow 3 missile defense system for €3.5 billion.",
            areasOfCooperation: ["Submarine construction (ThyssenKrupp Marine Systems)", "Arrow 3 export to NATO", "Diplomatic support in Europe"],
            strategicSignificance: "Israel's most important European security and naval partner.",
            source: "German Federal Ministry of Defence; Israel Ministry of Defense"
          },
          {
            who: "United Arab Emirates & Abraham Accords States",
            relationshipType: "Normalization & Security Partners",
            whyItMatters: "Broke decades of Arab diplomatic boycott to establish trade, direct flights, tourism, and quiet intelligence sharing against Iran.",
            areasOfCooperation: ["Bilateral trade (> $3 billion)", "Cybersecurity and defense technology", "Regional air defense coordination"],
            strategicSignificance: "Dismantles the historical Arab coalition against Israel and integrates Israel into the regional economy.",
            source: "The Abraham Accords Declaration (2020)"
          }
        ],
        sources: ["Ministry of Foreign Affairs Israel", "US Department of State"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Israel's primary existential enemy is Iran, along with its armed proxy network including Hezbollah, Hamas, and the Houthis.",
      whyItMatters: "These adversaries do not just compete for influence; their declared foundational goal is the military destruction and eradication of the State of Israel.",
      deeperDetails: {
        facts: [
          "Israel's defense establishment operates under a continuous wartime footing against Iranian-directed multi-front threats."
        ],
        competitors: [
          {
            who: "Iran",
            competitionType: "Existential State Enemy",
            areasOfCompetition: ["Nuclear weapons breakout prevention", "Direct ballistic missile and drone warfare", "Sabotage of Iranian nuclear and missile infrastructure"],
            whyItMatters: "Iran finances, arms, and directs the encirclement of Israel through its 'ring of fire' proxy network.",
            source: "IDF Strategy Documents; Iranian State Media Declarations"
          },
          {
            who: "Hezbollah (Lebanon) & Hamas (Gaza)",
            competitionType: "Immediate Border Military Adversaries",
            areasOfCompetition: ["Border incursions, cross-border rocketry, and anti-tank guided missile fire", "Subterranean tunnel warfare", "Territorial sovereignty and hostage taking"],
            whyItMatters: "Direct cross-border terrorist attacks (October 7, 2023) triggered the deadliest conflict in modern Israeli history.",
            source: "IDF Operational Briefings; UN Security Council Briefings on Resolution 1701"
          }
        ],
        sources: ["IDF Spokesperson's Unit", "IISS Military Balance"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Israel is a tiny country just 15 kilometers wide at its narrowest waistline, giving it virtually no territorial depth to absorb an attack before enemies reach major cities.",
      whyItMatters: "Because Israeli cities, airports, and military bases are located within minutes of rocket flight time from Lebanon and Gaza, the military cannot afford to lose a single war on its own soil.",
      deeperDetails: {
        facts: [
          "Lack of Strategic Depth: The distance from the Mediterranean Sea to the 1967 Green Line near Netanya is merely 15 km, meaning enemy armor could theoretically cut the country in half within an hour without forward defense.",
          "The Golan Heights Vantage: Controlling the elevated basalt plateau of the Golan Heights prevents Syrian forces from overlooking and shelling the Sea of Galilee and the Galilee valley below.",
          "Red Sea Port of Eilat: Eilat provides Israel with direct maritime access to the Red Sea, Indian Ocean, and Asian trade markets, bypassing the Suez Canal.",
          "Offshore Natural Gas Reserves: The Tamar and Leviathan gas fields in Israel's Mediterranean EEZ transformed the country from an energy importer into an energy exporter to Egypt and Jordan."
        ],
        sources: ["Survey of Israel (MAPI)", "Ministry of Energy and Infrastructure Israel"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Israel's established strategic behavior is driven by the conviction of 'Never Again'—believing that Jewish survival requires relying ultimately only on its own military strength, striking first when threatened, and refusing to outsource homeland defense.",
      whyItMatters: "While Israel cherishes its American alliance, Israeli leaders will execute pre-emptive military operations without prior US approval whenever they believe an existential threshold has been crossed.",
      deeperDetails: {
        facts: [
          "The Iron Wall Philosophy: Articulated by Ze'ev Jabotinsky in 1923: Arab adversaries will only accept peace when they realize Israel's military defense is an impenetrable wall that cannot be broken.",
          "Complete Military Integration in Society: Conscription and reserve duty create an intensely interconnected society where tech entrepreneurs, generals, and politicians have served together in combat units.",
          "Pre-emption Doctrine: Established by strikes on Iraqi (1981 Osirak) and Syrian (2007 Operation Orchard) nuclear reactors: Israel will destroy any regional reactor capable of producing atomic bombs."
        ],
        sources: ["Anita Shapira, 'Israel: A History'", "Michael Oren, 'Six Days of War'"]
      }
    }
  ]
};
