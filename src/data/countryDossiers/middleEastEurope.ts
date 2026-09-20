import type { CountrySimpleQuestionsDossier } from "./types";

export const FRANCE_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "FRA",
  countryName: "France",
  tagline: "Europe's foremost sovereign nuclear and expeditionary power championing European strategic autonomy",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "France is a leading European democracy, a permanent member of the UN Security Council, and the European Union's sole sovereign nuclear weapons power.",
      whyItMatters: "Its independent nuclear deterrent, global overseas territories, and independent foreign-policy tradition make it the main driver of European defense autonomy.",
      deeperDetails: {
        facts: [
          "World's seventh-largest economy ($3.05 trillion nominal GDP) and a founding pillar of the European Union.",
          "Maintains an independent national nuclear arsenal of approximately 290 warheads, deployed via submarine-launched ballistic missiles (M51) and air-launched cruise missiles (ASMP-A).",
          "Controls the second-largest Exclusive Economic Zone (EEZ) on Earth (over 10.2 million sq km), spanning territories across the Caribbean, Indian Ocean, and Pacific.",
          "Operates Europe's only nuclear-powered aircraft carrier (Charles de Gaulle) with catapult-launch capabilities."
        ],
        metrics: {
          "Nuclear Warheads": "~290",
          "Nominal GDP": "$3.05 Trillion",
          "Global EEZ Area": "10.2 Million sq km",
          "Defense Spending": "~2.1% of GDP"
        },
        sources: ["INSEE France", "SIPRI Nuclear Forces", "French Ministry for the Armed Forces"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "France wants a united, militarily capable European Union that does not depend entirely on the United States for its security, alongside a leading role in global aerospace and diplomacy.",
      whyItMatters: "The French doctrine of 'European Strategic Autonomy' argues that Europe must build its own defense industry and military forces so it cannot be abandoned by shifting American politics.",
      deeperDetails: {
        facts: [
          "Champion European Strategic Autonomy: Build sovereign European defense capabilities, satellite intelligence networks, and common defense procurement.",
          "Maintain sovereign defense production: Retain the domestic ability to design and build state-of-the-art fighter jets (Rafale), nuclear submarines, and missiles without foreign vetoes.",
          "Protect its vast Indo-Pacific and Caribbean overseas territories (Réunion, Mayotte, New Caledonia, French Polynesia).",
          "Lead European energy security through heavy domestic nuclear power generation."
        ],
        sources: ["National Strategic Review of France (Revue Nationale Stratégique 2022)", "Élysée Palace Strategic Briefings"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "France excels in advanced defense aerospace (Rafale fighters), commercial aircraft manufacturing (Airbus), civil nuclear energy engineering, and high-end luxury goods.",
      whyItMatters: "Its military exports are uniquely attractive because France provides cutting-edge hardware without attaching the restrictive political conditions or human-rights vetoes common to US arms sales.",
      deeperDetails: {
        facts: [
          "Defense Aerospace Exports: Dassault Aviation's Rafale fighter has secured multi-billion-euro contracts worldwide (India, UAE, Egypt, Greece, Indonesia), elevating France to the world's second-largest arms exporter.",
          "Nuclear Energy: Generates roughly 65-70% of its electricity from domestic nuclear reactors (EDF), providing the lowest carbon-intensity power in the EU.",
          "Expeditionary Warfare: Possesses rapid expeditionary forces (Foreign Legion, naval marine commandos) capable of deploying rapidly into Africa and the Mediterranean.",
          "Commercial Aviation & Luxury: Headquarters of Airbus commercial aviation and global luxury fashion conglomerates (LVMH, Kering, Hermès)."
        ],
        metrics: {
          "Global Arms Export Share": "11% (2nd worldwide)",
          "Electricity from Nuclear": "~65-70%",
          "Rafale Combat Jet Export Orders": ">300 Aircraft"
        },
        sources: ["SIPRI Arms Transfers Report", "RTE France Electricity Data", "Dassault Aviation Disclosures"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "France depends on imported uranium for its nuclear plants, imported oil and gas for transportation, and the broader European single market to absorb its industrial exports.",
      whyItMatters: "While France generates its own electricity through nuclear power, it must import 100% of its natural uranium from suppliers in Kazakhstan, Niger, Australia, and Canada.",
      deeperDetails: {
        facts: [
          "Natural Uranium Imports: Requires roughly 8,000 to 10,000 metric tons of natural uranium annually for its 56 nuclear power reactors.",
          "Fossil Fuel Dependence: While electricity is largely nuclear, the transportation, chemical, and domestic heating sectors still depend on imported crude oil and natural gas.",
          "European Economic Cohesion: Over 55% of French exports go directly to other European Union members, making German economic prosperity vital to French corporate health.",
          "High Public Debt: Public debt exceeding 110% of GDP leaves the national budget sensitive to European Central Bank borrowing costs."
        ],
        sources: ["Euratom Supply Agency", "Ministry of Economy, Finance and Industrial Sovereignty France"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "France faces high public debt, domestic social unrest over pension and public spending reforms, and the loss of its historic military and diplomatic influence in West Africa.",
      whyItMatters: "Recent military coups in Niger, Mali, and Burkina Faso expelled French counter-terrorism troops, severely damaging Paris's long-standing geopolitical influence across the Sahel.",
      deeperDetails: {
        facts: [
          "Expulsion from the Sahel: Military juntas in Mali, Burkina Faso, and Niger terminated French defense accords and expelled French forces, replaced by Russian private military formations.",
          "Fiscal Constraints: National public debt exceeding 110% of GDP and recurring budget deficits that trigger warnings from the European Commission.",
          "Social & Political Polarization: Sharp political divisions between centrist coalitions, the nationalist right (National Rally), and the radical left, complicating major domestic reforms.",
          "European Disagreements: Disagreements with Germany regarding defense industrial projects (the Future Combat Air System / FCAS fighter program) and energy regulation."
        ],
        sources: ["Cour des Comptes (French Court of Audit)", "Crisis Group Africa Reports"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "France's primary political and economic partner is Germany, supported by treaty defense alliances in NATO, and strategic defense customers like India and the UAE.",
      whyItMatters: "The Franco-German engine drives the European Union, while independent defense partnerships with India and Greece provide France with geopolitical influence outside the NATO framework.",
      deeperDetails: {
        facts: [
          "France operates both as a core NATO member and as an independent global power with distinct bilateral defense relationships."
        ],
        partners: [
          {
            who: "Germany",
            relationshipType: "Core European Union Partner",
            whyItMatters: "The Franco-German axis drives EU legislation, monetary integration, and European foreign policy consensus.",
            areasOfCooperation: ["EU single market leadership", "Joint defense projects (FCAS, MGCS tank)", "Aachen Treaty coordination"],
            areasOfCompetition: ["Energy policy (nuclear power vs. renewables)", "Defense procurement preferences (US vs. European weapons)"],
            strategicSignificance: "Without Franco-German agreement, EU policy reaches gridlock.",
            source: "Franco-German Treaty of Aachen (2019)"
          },
          {
            who: "United States",
            relationshipType: "Historic Ally & NATO Partner",
            whyItMatters: "Collaborates closely on global counter-terrorism, NATO collective defense, and intelligence sharing.",
            areasOfCooperation: ["NATO Article 5 collective defense", "Intelligence sharing", "Space and cyber defense"],
            areasOfCompetition: ["French insistence on European strategic autonomy", "AUKUS submarine fallout"],
            strategicSignificance: "France is America's oldest ally, though fiercely protective of its operational independence.",
            source: "French Ministry for Europe and Foreign Affairs"
          },
          {
            who: "India",
            relationshipType: "Strategic Partner & Sovereign Defense Customer",
            whyItMatters: "India is France's premier Asian defense client (Rafale fighters, Scorpène submarines) and maritime partner across the Indian Ocean.",
            areasOfCooperation: ["Defense equipment sales with full technology transfer", "Indian Ocean joint patrols", "Civil nuclear energy"],
            strategicSignificance: "Provides France with a major democratic anchor in the Indo-Pacific.",
            source: "Franco-Indian Horizon 2047 Roadmap"
          }
        ],
        sources: ["Ministère de l'Europe et des Affaires étrangères"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "France's primary strategic competitor is Russia, alongside diplomatic and economic competition with Turkey and China.",
      whyItMatters: "Russia has directly targeted French influence in Africa using disinformation and private military forces, while challenging European security on the continent's eastern borders.",
      deeperDetails: {
        facts: [
          "France identifies Russian revisionism as the foremost threat to European territorial stability."
        ],
        competitors: [
          {
            who: "Russia",
            competitionType: "Direct Security & Asymmetric Competitor",
            areasOfCompetition: ["European security architecture and Ukraine support", "Influence in Francophone Africa (Mali, Niger, CAR)", "Cyber warfare and disinformation targeting French elections"],
            whyItMatters: "French President Emmanuel Macron has stated that Europe cannot rule out any option to prevent a Russian victory in Ukraine.",
            source: "Revue Nationale Stratégique; French Senate Defense Committee Reports"
          },
          {
            who: "Türkiye",
            competitionType: "Regional Maritime & Influence Competitor",
            areasOfCompetition: ["Eastern Mediterranean maritime borders and gas drilling", "Libyan civil conflict alignment", "Influence in the South Caucasus and Central Africa"],
            whyItMatters: "Direct naval friction occurred in 2020 off the Libyan coast during NATO maritime inspections.",
            source: "European Council on Foreign Relations (ECFR)"
          }
        ],
        sources: ["Revue Nationale Stratégique", "SIPRI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "France is the only European nation with direct access to both the Atlantic Ocean and the Mediterranean Sea, as well as territories spread across the globe.",
      whyItMatters: "Its Atlantic coast connects it to global trade and the Americas, its Mediterranean ports link it to North Africa and the Suez Canal, and its overseas island territories make it a permanent Pacific and Indian Ocean power.",
      deeperDetails: {
        facts: [
          "Two Maritime Fronts: Bordered by the English Channel/Atlantic Ocean to the west and the Mediterranean Sea to the south, giving the French Navy dual-theater maritime command.",
          "Natural Defensive Borders: Bordered by natural geographic obstacles: the Pyrenees mountains to the south (Spain), the Alps to the east (Italy/Switzerland), and the Rhine river (Germany).",
          "Global Island Territories: Overseas territories (French Guiana, Réunion, Mayotte, New Caledonia, French Polynesia) give France military bases and maritime sovereignty worldwide.",
          "European Spaceport: Hosts the Guiana Space Centre in Kourou, French Guiana, which benefits from an equatorial launch trajectory that maximizes rocket payload capacity.",
        ],
        sources: ["IGN France (National Institute of Geographic and Forest Information)", "CNES Space Center Kourou"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "France's established strategic behavior is defined by its Gaullist tradition of fierce national independence, refusal to blindly follow superpower directives, and pride in sovereign defense capabilities.",
      whyItMatters: "Understanding that France views itself as a universal civilizational power with independent global responsibilities explains why it often challenges US consensus while pushing Europe to think like a geopolitical power.",
      deeperDetails: {
        facts: [
          "The Gaullist Consensus: Across all major political parties, there is widespread consensus that France must never surrender its nuclear button or allow foreign commands to dictate its military operations.",
          "Active Sovereign Defense Ecosystem: Unlike most European nations that rely on American platforms, France maintains complete national production lines for jet fighters, submarines, missiles, and radars.",
          "Universalist Diplomatic Mission: Retains one of the world's three largest diplomatic networks (alongside the US and China) with embassies in nearly every sovereign nation on Earth."
        ],
        sources: ["Frédéric Charillon, 'French Foreign Policy'", "Brookings Center on the United States and Europe"]
      }
    }
  ]
};

export const UK_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "GBR",
  countryName: "United Kingdom",
  tagline: "A global financial and maritime nuclear power anchoring European defense and transatlantic intelligence",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "The United Kingdom is an island nation of 68 million people, a permanent member of the UN Security Council, and Europe's premier intelligence and maritime nuclear power.",
      whyItMatters: "Its 'Special Relationship' with the United States, leadership in NATO, and London's global financial markets make it an essential architect of international security.",
      deeperDetails: {
        facts: [
          "Sixth-largest global economy ($3.34 trillion nominal GDP) and a nuclear-armed power with an estimated 225 warheads.",
          "Maintains continuous at-sea nuclear deterrence via four Vanguard-class ballistic missile submarines carrying Trident II D5 missiles.",
          "Core co-founder of the Five Eyes intelligence alliance and the AUKUS defense pact with the US and Australia.",
          "London is the world's leading center for cross-border banking, international foreign exchange trading, and maritime insurance (Lloyd's of London)."
        ],
        metrics: {
          "Nuclear Warheads": "~225",
          "Nominal GDP": "$3.34 Trillion",
          "Defense Spending": "2.3% of GDP",
          "Aircraft Carriers": "2 (Queen Elizabeth class)"
        },
        sources: ["Office for National Statistics (ONS)", "UK Ministry of Defence", "SIPRI"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "The UK wants to maintain European security by defeating Russian aggression in Ukraine, strengthen the transatlantic alliance with the US, and build global trade partnerships under 'Global Britain'.",
      whyItMatters: "Having departed the European Union via Brexit, the UK relies on free-trade agreements, naval power projection, and intelligence leadership to maintain its global punch.",
      deeperDetails: {
        facts: [
          "Lead European defense efforts in supporting Ukraine against Russian territorial conquest, providing long-range cruise missiles (Storm Shadow) and modern armor.",
          "Deepen the AUKUS security partnership to build nuclear-powered attack submarines for Australia and the Royal Navy.",
          "Expand economic influence across the Indo-Pacific, securing accession to the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP).",
          "Attract international tech and financial capital to London while maintaining leadership in artificial intelligence governance."
        ],
        sources: ["Integrated Review Refresh 2023: Responding to a More Contested and Volatile World", "Cabinet Office UK"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "The UK excels in global financial services, intelligence collection (MI6/GCHQ), special forces operations (SAS), and advanced naval and aerospace defense engineering.",
      whyItMatters: "Its signals intelligence agency (GCHQ) intercepts global electronic communications alongside the US NSA, providing real-time intelligence that shapes battlefield decisions worldwide.",
      deeperDetails: {
        facts: [
          "Intelligence & Surveillance: GCHQ and MI6 form the premier European intelligence apparatus, deeply integrated into the Five Eyes network.",
          "Financial & Legal Capital: English common law governs over 25% of global commercial contracts; London manages foreign exchange trading exceeding $3 trillion daily.",
          "Special Operations & Elite Military: Special Air Service (SAS) and Special Boat Service (SBS) set the international standard for counter-terrorism and covert special warfare.",
          "Aerospace Engineering: Rolls-Royce builds high-thrust jet engines powering international commercial aircraft and nuclear reactor cores for Royal Navy submarines."
        ],
        metrics: {
          "Global FX Turnover": "~38% Share",
          "Global Marine Insurance": ">30% Market Share",
          "Foreign Investment Inward Stock": ">$2 Trillion"
        },
        sources: ["Bank for International Settlements (BIS)", "TheCityUK", "UK Defence Equipment and Support"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "The UK depends on American technology for its nuclear deterrent, imported natural gas and electricity, and open global sea lanes for half its food supply.",
      whyItMatters: "The UK's Trident nuclear missiles are leased from a shared pool managed by the US Navy in Georgia, making British nuclear deterrence technically dependent on ongoing US cooperation.",
      deeperDetails: {
        facts: [
          "Nuclear System Reliance: While warheads are designed at Aldermaston, the Trident II D5 missile delivery systems are maintained through joint agreements with the United States Navy.",
          "Energy Imports: North Sea oil and gas output is in long-term decline; the UK relies heavily on natural gas pipeline imports from Norway and LNG imports from the US and Qatar.",
          "Food Security: Produces only roughly 54% of its domestic food consumption by economic value, importing large volumes of fresh produce from continental Europe.",
          "Service Export Dependence: Services account for over 80% of economic output, making the UK vulnerable to international trade barriers and regulatory disputes post-Brexit."
        ],
        sources: ["House of Commons Library Research Briefings", "Department for Energy Security and Net Zero (DESNZ)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "The UK faces sluggish post-Brexit economic productivity, a shrinking conventional army, and ongoing constitutional tensions over Scottish independence and Northern Ireland.",
      whyItMatters: "The British Army has contracted to around 73,000 regular troops—its smallest size since the Napoleonic Wars—raising questions about its ability to fight a major land war without allies.",
      deeperDetails: {
        facts: [
          "Military Manpower Contraction: Conventional British Army size has shrunk below 74,000 personnel, causing challenges in sustaining heavy armored division deployments.",
          "Economic Stagnation: Weak productivity growth, post-Brexit non-tariff trade frictions with the EU, and high public infrastructure debt constrain national budget allocations.",
          "Constitutional Pressures: Persistent support for Scottish independence in opinion polls and complex cross-border trade friction created by the Northern Ireland Protocol.",
          "Overstretched Public Services: High government borrowing and demographic aging putting severe pressure on the state-funded National Health Service (NHS)."
        ],
        sources: ["UK National Audit Office (NAO)", "Institute for Fiscal Studies (IFS)", "RUSI Defence Briefings"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "The UK's most critical strategic partner is the United States, reinforced by Five Eyes intelligence allies (Australia, Canada, New Zealand) and European NATO allies.",
      whyItMatters: "The US-UK 'Special Relationship' provides Britain with unmatched intelligence sharing, nuclear missile cooperation, and combined command opportunities across the globe.",
      deeperDetails: {
        facts: [
          "The UK acts as the strongest bridge linking American power projection to European and Indo-Pacific security architectures."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "The 'Special Relationship' & Treaty Ally",
            whyItMatters: "Deepest bilateral intelligence, nuclear, and military partnership in the Western world.",
            areasOfCooperation: ["Trident nuclear missile sharing", "Five Eyes intelligence", "F-35 joint fighter integration", "Diego Garcia joint military base"],
            strategicSignificance: "The foundation of modern British defense, nuclear deterrence, and foreign policy.",
            source: "1958 US-UK Mutual Defence Agreement; AUKUS Treaty"
          },
          {
            who: "Australia",
            relationshipType: "AUKUS Partner & Commonwealth Ally",
            whyItMatters: "Co-developer of SSN-AUKUS next-generation nuclear attack submarines, expanding British naval shipbuilding scale.",
            areasOfCooperation: ["AUKUS Pillar 1 (Submarines) & Pillar 2 (Quantum, AI, Hypersonics)", "Five Eyes intelligence", "Bilateral free trade"],
            strategicSignificance: "Secures the UK's forward maritime presence in the Pacific.",
            source: "AUKUS Leaders' Declarations"
          },
          {
            who: "NATO European Allies & Joint Expeditionary Force (JEF)",
            relationshipType: "Collective Defense & Regional Command",
            whyItMatters: "The UK leads the 10-nation Joint Expeditionary Force (JEF) protecting the Baltic and Nordic regions against Russian threats.",
            areasOfCooperation: ["NATO Enhanced Forward Presence (Estonia)", "Baltic air policing", "North Atlantic anti-submarine warfare (GIUK Gap)"],
            strategicSignificance: "Guarantees Northern European maritime and air security.",
            source: "Joint Expeditionary Force (JEF) Communiqués"
          }
        ],
        sources: ["UK Foreign, Commonwealth & Development Office (FCDO)", "Ministry of Defence"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "The UK's foremost geopolitical adversary is Russia, while it engages in systematic economic and security competition with China.",
      whyItMatters: "Russia has targeted British soil with state-sponsored nerve-agent attacks (Salisbury 2018) and actively probes British airspace and undersea communication cables.",
      deeperDetails: {
        facts: [
          "The UK identifies Russia as the most acute direct threat to European security and the UK homeland."
        ],
        competitors: [
          {
            who: "Russia",
            competitionType: "Acute State Security Threat",
            areasOfCompetition: ["European territorial defense (leadership in arming Ukraine)", "Undersea critical data cable sabotage threats in the North Atlantic", "Cyber espionage and state assassinations on British soil"],
            whyItMatters: "Moscow explicitly targets the UK in state media rhetoric due to Britain's uncompromising military aid to Ukraine.",
            source: "Integrated Review Refresh 2023; MI5 Annual Threat Updates"
          },
          {
            who: "China",
            competitionType: "Systemic Epoch-Defining Challenge",
            areasOfCompetition: ["Crackdown on democratic autonomy in Hong Kong (violating the 1984 Sino-British Joint Declaration)", "Exclusion of Huawei from UK 5G telecom networks", "Cyber attacks on parliamentary institutions"],
            whyItMatters: "The UK balances multi-billion dollar trade ties against acute national security and intellectual property risks.",
            source: "UK Intelligence and Security Committee (ISC) China Report"
          }
        ],
        sources: ["MI5 / MI6 Annual Briefings", "Parliament Intelligence and Security Committee"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "The UK is an island nation positioned directly between the North Atlantic Ocean and continental Europe, acting as the maritime gateway to Northern Europe.",
      whyItMatters: "Control of the GIUK Gap (Greenland-Iceland-UK) allows the Royal Navy and RAF to detect Russian nuclear submarines attempting to break out into the Atlantic.",
      deeperDetails: {
        facts: [
          "The GIUK Gap Chokepoint: The strategic maritime channel between Greenland, Iceland, and the northern UK is the primary chokepoint through which Russian Northern Fleet submarines must pass to reach Atlantic shipping lanes.",
          "Insular Defense Advantage: Separated from mainland Europe by the English Channel, Britain has not been successfully invaded by sea since 1066, allowing it to focus military capital on navies and air forces.",
          "North Sea Energy & Wind: Commands extensive offshore continental shelf acreage in the North Sea, home to major offshore wind farms and legacy oil and gas fields.",
          "Overseas Strategic Bastions: Maintains sovereign military outposts at Gibraltar (mouth of Mediterranean), Cyprus (Akrotiri/Dhekelia), Ascension Island, and the Falkland Islands."
        ],
        sources: ["UK Hydrographic Office", "Royal Navy Doctrine Publications"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "The United Kingdom's established strategic behavior is defined by its deep maritime tradition, unmatched intelligence networks, and a foreign policy focused on preventing any single power from dominating continental Europe.",
      whyItMatters: "Even as its land army shrinks, the UK punches above its economic weight globally through soft power, global financial infrastructure, and decisive military leadership in crises.",
      deeperDetails: {
        facts: [
          "Balance of Power Strategy: For over 400 years (against Spain, France, Germany, and now Russia), British grand strategy has sought to prevent any single hostile hegemony from controlling the European continent.",
          "Soft Power & Cultural Reach: Home to the BBC, premier global universities (Oxford, Cambridge), the Premier League, and the English language, giving Britain unmatched global cultural influence.",
          "Speed of Crisis Action: Often moves faster than European allies to provide lethal military hardware during international crises (first to supply modern Western tanks and long-range missiles to Ukraine)."
        ],
        sources: ["Sir Lawrence Freedman, 'The Future of War'", "Chatham House UK in the World Programme"]
      }
    }
  ]
};
