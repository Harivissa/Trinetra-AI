import type { CountrySimpleQuestionsDossier } from "./types";

export const SAUDI_ARABIA_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "SAU",
  countryName: "Saudi Arabia",
  tagline: "The world's leading oil exporter leveraging vast sovereign wealth to engineer a post-hydrocarbon transformation",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Saudi Arabia is the world's premier crude oil exporter, the largest economy in the Arab world, and the geographic guardian of Islam's two holiest sites, Mecca and Medina.",
      whyItMatters: "Its control over roughly 17% of the world's proven petroleum reserves gives it unmatched power to influence global oil prices, energy inflation, and Middle Eastern security.",
      deeperDetails: {
        facts: [
          "World's top exporter of crude oil, commanding proven petroleum reserves of approximately 267 billion barrels.",
          "Absolute monarchy governed by King Salman bin Abdulaziz and Crown Prince Mohammed bin Salman (MBS), the Kingdom's active executive leader.",
          "Nominal GDP of roughly $1.07 trillion, the largest in the Middle East and North Africa (MENA) region.",
          "Commands the Public Investment Fund (PIF), a sovereign wealth fund with over $925 billion in assets driving global investments in tech, sports, mining, and domestic megaprojects."
        ],
        metrics: {
          "Proven Oil Reserves": "267 Billion Barrels",
          "Nominal GDP": "$1.07 Trillion",
          "PIF Sovereign Wealth Assets": ">$925 Billion",
          "Daily Oil Production Capacity": "~12 Million Barrels"
        },
        sources: ["Saudi Aramco Annual Disclosures", "OPEC Annual Statistical Bulletin", "PIF Official Reports"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Saudi Arabia wants to transition its economy away from total oil dependence through 'Vision 2030', secure binding American security guarantees, and establish itself as an indispensable diplomatic bridge between East and West.",
      whyItMatters: "If the Kingdom succeeds in building a non-oil industrial and high-tech economy, it secures its long-term future as fossil fuel demand peaks; if it fails, it faces severe fiscal distress when oil revenues decline.",
      deeperDetails: {
        facts: [
          "Execute 'Vision 2030' to raise non-oil government revenue to $266 billion and develop gigaprojects like NEOM, the Red Sea Project, and Qiddiya.",
          "Negotiate a formal mutual defense treaty with the United States modeled on NATO Article 5 in exchange for normalizing diplomatic relations with Israel.",
          "Acquire civil nuclear energy technology and domestic uranium enrichment capabilities.",
          "Establish leadership in regional artificial intelligence data centers, global mining investments, and international sports entertainment."
        ],
        sources: ["Saudi Vision 2030 Official Strategy", "Saudi Ministry of Foreign Affairs Communiqués"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Saudi Arabia excels in ultra-low-cost petroleum extraction, global energy cartel management through OPEC+, religious diplomacy across the Islamic world, and deploying immense sovereign capital.",
      whyItMatters: "Saudi Aramco produces crude oil at an extraction cost of around $3 per barrel—the lowest on Earth—giving the Kingdom the ability to stay profitable and flood or starve global energy markets at will.",
      deeperDetails: {
        facts: [
          "Energy Production & Reserves: Operates the world's most lucrative energy company (Saudi Aramco) with unmatched extraction efficiency and spare pumping capacity.",
          "OPEC+ Leadership: Coordinates with Russia and Persian Gulf monarchies to manage global crude supply quotas, setting floors on world oil prices.",
          "Islamic Cultural Soft Power: Custodianship of Mecca and Medina grants the Saudi monarch moral legitimacy and diplomatic leadership across the 1.9-billion-strong Muslim world.",
          "Sovereign Capital Deployment: The Public Investment Fund (PIF) can write multi-billion dollar checks to acquire foreign technology firms, golf leagues (LIV), and electric vehicle manufacturers (Lucid Motors)."
        ],
        metrics: {
          "Upstream Extraction Cost": "~$3.20 per barrel",
          "Global Proven Reserves Share": "17.2%",
          "Annual Hajj & Umrah Pilgrims": ">20 Million Visitors"
        },
        sources: ["Saudi Aramco Prospectus", "OPEC", "Saudi Ministry of Hajj and Umrah"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Saudi Arabia depends on oil sales to fund over 60% of its state budget, American military protection and weapons for its defense, and imported food and water desalination.",
      whyItMatters: "A sustained collapse in world oil prices below its fiscal breakeven level (roughly $80-85 per barrel) immediately forces the government to cut spending or borrow money, while its airspace defense relies on American Patriot missile interceptors.",
      deeperDetails: {
        facts: [
          "Fiscal Oil Reliance: Oil revenues fund over 60% of the state budget and generate roughly 70% of export earnings, making government payrolls vulnerable to oil price crashes.",
          "Defense Hardware & Air Defense: Over 75% of Saudi military hardware is American-made (F-15 fighter jets, Patriot PAC-3 missile batteries, Abrams tanks), requiring American spare parts and technical contractors.",
          "Water & Food Security: Possesses virtually no permanent natural rivers or lakes; 70% of drinking water is produced by energy-intensive thermal desalination plants along the coast.",
          "Expatriate Labor Force: Expatriates make up over 40% of the population and perform the majority of private-sector technical, construction, and service jobs."
        ],
        metrics: {
          "Fiscal Breakeven Oil Price": "~$80-85 per barrel",
          "US Share of Arms Imports": "78%",
          "Drinking Water from Desalination": "~70%"
        },
        sources: ["International Monetary Fund (IMF) Regional Economic Outlook", "SIPRI Arms Transfers", "Saline Water Conversion Corporation (SWCC)"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Saudi Arabia faces vulnerability to drone and missile attacks on its oil facilities, a looming global transition away from fossil fuels, and massive financial costs to build its Vision 2030 megaprojects.",
      whyItMatters: "The 2019 drone and cruise missile attack on Aramco's Abqaiq processing facility knocked out half of Saudi oil output in an instant, proving that high-tech oil facilities are highly vulnerable to cheap asymmetric weapons.",
      deeperDetails: {
        facts: [
          "Critical Infrastructure Vulnerability: Oil processing plants, export terminals (Ras Tanura), and desalination plants are concentrated along the Arabian Gulf coast within range of Iranian and Houthi missiles.",
          "Megaproject Capital Squeeze: Ambitious projects like NEOM and the Line require hundreds of billions of dollars, forcing the government to scale back timelines and issue international debt.",
          "Youth Unemployment & Private Sector Transition: High historic reliance on public sector government jobs creates challenges in integrating young Saudis into private enterprise.",
          "Regional Proxy Threats: Bordered to the south by Yemen, where the Houthi movement retains ballistic missiles and loitering drones capable of targeting Saudi cities."
        ],
        sources: ["IMF Article IV Consultation Saudi Arabia", "Center for Strategic and International Studies (CSIS) Transnational Threats"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Saudi Arabia's primary security guarantor is the United States, while its largest economic customer is China, and its key energy-coordination partner is Russia.",
      whyItMatters: "Saudi Arabia practices transactional diplomacy: it relies on the US military for protection against regional threats, sells massive amounts of oil to China, and cooperates with Russia inside OPEC+ to keep oil prices high.",
      deeperDetails: {
        facts: [
          "The Kingdom has moved away from exclusive reliance on Washington, pursuing a multi-aligned foreign policy balancing major global powers."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Strategic Defense & Security Partner",
            whyItMatters: "Provides essential air defense umbrellas, intelligence sharing, and military equipment under the historic 'oil-for-security' framework established in 1945.",
            areasOfCooperation: ["Patriot and THAAD air defense", "F-15 fleet sustainment", "Counter-terrorism", "Civilian nuclear discussions"],
            areasOfCompetition: ["US domestic oil production competition (shale)", "Saudi human rights records", "Saudi cooperation with OPEC+ and China"],
            dependencies: ["US advanced military contractor support and missile interceptor stocks"],
            strategicSignificance: "The sole power capable of guaranteeing the Kingdom's territorial integrity against major state adversaries.",
            source: "US Department of State; Saudi Ministry of Defense"
          },
          {
            who: "China",
            relationshipType: "Comprehensive Strategic Partner & Top Oil Customer",
            whyItMatters: "Purchases over 1.7 million barrels of Saudi crude per day, making China the Kingdom's single most important commercial buyer and infrastructure builder.",
            areasOfCooperation: ["Crude oil trade", "Belt and Road infrastructure co-development", "Local ballistic missile production assistance", "Yuan-denominated trade exploration"],
            areasOfCompetition: ["China's parallel strategic partnership and oil purchases from Iran"],
            strategicSignificance: "Guarantees long-term energy demand and diplomatic diversification away from Western conditionalities.",
            source: "Saudi-Chinese Comprehensive Strategic Partnership Agreement (2022)"
          },
          {
            who: "Russia (OPEC+)",
            relationshipType: "Energy Market Coordination Partner",
            whyItMatters: "Bilateral Riyadh-Moscow coordination forms the core of the OPEC+ alliance that sets global oil production quotas.",
            areasOfCooperation: ["OPEC+ crude production cuts", "Global energy market stability", "Bilateral investment cooperation"],
            areasOfCompetition: ["Competition for market share in Asian refineries (India and China)"],
            strategicSignificance: "Prevents independent price wars that historically bankrupted oil exporters.",
            source: "OPEC+ Ministerial Declarations"
          },
          {
            who: "United Arab Emirates (UAE) & GCC",
            relationshipType: "Regional Security & Economic Partner",
            whyItMatters: "Core member of the Gulf Cooperation Council (GCC) coordinating regional security and infrastructure.",
            areasOfCooperation: ["Gulf maritime security", "Anti-smuggling operations", "Regional capital integration"],
            areasOfCompetition: ["Fierce economic competition to attract foreign corporate headquarters and tourism"],
            strategicSignificance: "Anchors the monarchical political order across the Arabian Peninsula.",
            source: "Gulf Cooperation Council Secretariat General"
          }
        ],
        sources: ["Saudi Ministry of Foreign Affairs", "US Department of State"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Saudi Arabia's primary regional security rival is Iran, alongside growing economic competition with its neighbor, the United Arab Emirates.",
      whyItMatters: "Even though a Chinese-brokered diplomatic truce was signed in 2023, Saudi Arabia and Iran remain ideological and military rivals competing for dominance across the Middle East.",
      deeperDetails: {
        facts: [
          "The Saudi-Iranian rivalry has shaped Middle Eastern geopolitics for four decades through proxy conflicts in Yemen, Syria, Lebanon, and Iraq."
        ],
        competitors: [
          {
            who: "Iran",
            competitionType: "Regional & Ideological Rival",
            areasOfCompetition: ["Dominance over Persian Gulf waters and Strait of Hormuz", "Proxy networks across the Arab world ('Axis of Resistance')", "Islamic theological leadership (Sunni vs. Shia)"],
            whyItMatters: "Direct strikes on Saudi energy facilities or shipping lanes represent the Kingdom's most acute national security risk.",
            source: "IISS Strategic Dossiers on Iran and the Gulf"
          },
          {
            who: "United Arab Emirates (UAE)",
            competitionType: "Economic & Regional Influence Competitor",
            areasOfCompetition: ["Regional hub status for multinational corporate headquarters", "Global aviation, tourism, and logistics leadership", "Conflicting policy in Yemen and Sudan"],
            whyItMatters: "Both seek to capture foreign capital and become the primary commercial capital of the Arab world.",
            source: "Chatham House Middle East Policy Papers"
          }
        ],
        sources: ["SIPRI", "Carnegie Middle East Center"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Saudi Arabia occupies 80% of the Arabian Peninsula, flanked by two critical maritime bottlenecks: the Strait of Hormuz to the east and the Bab el-Mandeb strait to the west.",
      whyItMatters: "Nearly all Saudi oil exports must pass through narrow straits that can be easily threatened by Iranian naval forces or Yemeni Houthi anti-ship missiles.",
      deeperDetails: {
        facts: [
          "The Chokepoint Dilemma: The Strait of Hormuz (east) handles the majority of seaborne oil exports, while the Bab el-Mandeb / Red Sea (west) handles tanker traffic bound for the Suez Canal and Europe.",
          "East-West Petroline Bypass: Built the 1,200 km East-West crude oil pipeline connecting eastern oil fields to the Red Sea port of Yanbu, allowing up to 5 million barrels/day to bypass the Strait of Hormuz.",
          "Arid Interior: The Rub' al Khali (Empty Quarter) desert forms a massive natural barrier to the south, but the total absence of permanent freshwater rivers makes the country completely reliant on coastal desalination.",
          "Proximity to Hostile Launch Sites: Its major urban and industrial centers lie within short ballistic missile and drone flight times from western Iran, southern Iraq, and northern Yemen."
        ],
        sources: ["Saudi Geological Survey", "US Energy Information Administration (EIA) Chokepoint Briefs"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Saudi Arabia's established strategic behavior is defined by energetic state-driven modernization, heavy public investments to outrun the end of the oil era, and a strictly non-ideological, transactional foreign policy.",
      whyItMatters: "The Kingdom is no longer a passive Western client; it actively plays Washington, Beijing, and Moscow off against one another to secure maximum benefits for its own national survival.",
      deeperDetails: {
        facts: [
          "Pragmatic Multi-Alignment: Actively rejected US pressure to increase oil output during the 2022 energy crisis, demonstrating that national fiscal revenue takes precedence over historic alliances.",
          "Social Transformation: Rapid social reforms (allowing women to drive, curbing religious police, expanding public entertainment) aim to keep the 60% youth population politically loyal while building a tourist economy.",
          "Defense Localization: Mandated that at least 50% of national military equipment spending must be manufactured inside Saudi Arabia by 2030 (via SAMI - Saudi Arabian Military Industries)."
        ],
        sources: ["Bernard Haykel, 'Saudi Arabia in Transition'", "Chatham House Middle East Programme"]
      }
    }
  ]
};
