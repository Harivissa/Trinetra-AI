import type { CountrySimpleQuestionsDossier } from "./types";

export const JAPAN_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "JPN",
  countryName: "Japan",
  tagline: "An East Asian democratic economic superpower transforming its pacifist defense posture against authoritarian neighbors",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Japan is an island nation of 124 million people, the world's fourth-largest economy, and a technologically advanced democracy anchored to a mutual defense alliance with the United States.",
      whyItMatters: "Its advanced industrial base, premier naval power, and position along the First Island Chain make it the indispensable democratic anchor of Indo-Pacific security.",
      deeperDetails: {
        facts: [
          "Fourth-largest economy in nominal terms ($4.11 trillion GDP) and a member of the G7 and OECD.",
          "Maintains the Japan Self-Defense Forces (JSDF), one of the world's most modern and capable naval and air forces, supported by over 54,000 US military personnel stationed in the country.",
          "Commands world-leading industrial engineering corporations (Toyota, Sony, Mitsubishi Heavy Industries, Tokyo Electron).",
          "Governed as a constitutional parliamentary monarchy under its 1947 pacifist constitution."
        ],
        metrics: {
          "Population": "124.5 Million",
          "Nominal GDP": "$4.11 Trillion",
          "Defense Budget Target": "2% of GDP by 2027 (~$80 Billion)",
          "US Military Personnel Stationed": "54,000+"
        },
        sources: ["Cabinet Office of Japan", "Ministry of Defense Japan (MOD)", "IMF World Economic Outlook"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Japan wants to deter Chinese military expansion in the East China Sea, defend its southern island territories, protect open maritime trade routes across the Indo-Pacific, and revitalize its domestic economy.",
      whyItMatters: "To achieve this, Japan is undertaking its largest military expansion since World War II, acquiring long-range counterstrike missiles and breaking seven decades of strict defense spending caps.",
      deeperDetails: {
        facts: [
          "Double annual defense spending to 2% of GDP (~$80B annually) to acquire long-range counterstrike capabilities (Tomahawk cruise missiles, Type 12 upgraded missiles).",
          "Uphold the 'Free and Open Indo-Pacific' (FOIP) vision first conceptualized by the late Prime Minister Shinzo Abe.",
          "Prevent any forcible Chinese takeover of Taiwan, recognizing that 'a Taiwan contingency is a Japan contingency'.",
          "Secure permanent access to critical mineral supply chains independent of Chinese processing monopolies."
        ],
        sources: ["National Security Strategy of Japan (2022)", "Defense of Japan Annual White Paper"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Japan excels in precision manufacturing, robotics, ultra-quiet conventional submarine engineering, semiconductor manufacturing equipment, and disaster-resilient infrastructure.",
      whyItMatters: "Its specialized manufacturing equipment and materials (Tokyo Electron, Shin-Etsu) are essential to the entire world's semiconductor chip foundries; without Japanese chemicals and tools, global chip production would grind to a halt.",
      deeperDetails: {
        facts: [
          "Submarine & Naval Warfare: The Maritime Self-Defense Force (JMSDF) builds Taigei-class submarines with lithium-ion battery propulsion, considered the quietest, most advanced non-nuclear submarines on Earth.",
          "Semiconductor Materials & Equipment: Japanese firms control over 50% of the world's semiconductor silicon wafers and dominating market shares in photoresists and wafer etching equipment.",
          "Automotive & Robotics: World leader in industrial automation (Fanuc, Yaskawa) and automotive engineering (Toyota remains the world's largest carmaker by volume).",
          "Economic Diplomacy: Largest provider of bilateral infrastructure aid and high-standard public financing across Southeast Asia, counterbalancing China's Belt and Road."
        ],
        metrics: {
          "Silicon Wafer Global Share": ">50%",
          "Submarine Fleet Size": "22 Modern Attack Submarines",
          "Industrial Robot Production Share": "46% of World Total"
        },
        sources: ["International Federation of Robotics (IFR)", "Japan Maritime Self-Defense Force", "METI Japan"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Japan depends on imports for over 90% of its energy, over 60% of its food calories, and relies on the American military umbrella for its defense against nuclear-armed neighbors.",
      whyItMatters: "Because Japan is a mountainous island nation with almost no domestic oil, gas, or coal, any disruption to sea lanes from the Persian Gulf or through the South China Sea would immediately threaten its economic survival.",
      deeperDetails: {
        facts: [
          "Energy Imports: Imports approximately 90% of its energy requirements, including over 95% of its crude oil sourced from the Middle East through the Strait of Hormuz.",
          "Food Calorie Self-Sufficiency: Only 38% of food calories are produced domestically, requiring massive imports of wheat, soybeans, and animal feeds from North and South America.",
          "US Extended Deterrence: Relies on the US nuclear umbrella to deter nuclear threats from Russia, China, and North Korea, as Japan remains bound by non-nuclear principles.",
          "Critical Mineral Supply: Highly reliant on Chinese processing for rare earths used in hybrid and electric vehicle motors."
        ],
        metrics: {
          "Energy Self-Sufficiency": "11.2%",
          "Food Caloric Self-Sufficiency": "38%",
          "Crude Oil from Middle East": "95%+"
        },
        sources: ["Agency for Natural Resources and Energy (ANRE)", "Ministry of Agriculture, Forestry and Fisheries (MAFF) Japan"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Japan faces the world's oldest population with a shrinking workforce, massive public debt, and three hostile nuclear-armed neighbors directly on its borders: China, Russia, and North Korea.",
      whyItMatters: "A rapidly aging population reduces tax revenues while driving up healthcare costs, making it harder to fund both social services and the national defense expansion.",
      deeperDetails: {
        facts: [
          "Super-Aging Demographics: Over 29% of the population is aged 65 or older, and the total population is contracting by over 800,000 citizens each year, causing chronic labor shortages.",
          "Sovereign Debt Burden: Gross government debt exceeds 250% of GDP, the highest among developed nations, limiting fiscal flexibility as global interest rates fluctuate.",
          "Complex Threat Environment: Bordered simultaneously by three nuclear-armed states carrying active territorial grievances (China over the Senkakus, Russia over the Kurils, North Korea launching missiles over Japan).",
          "Constitutional Constraints: Article 9 of the 1947 constitution restricts the use of military force, requiring complex legal reinterpretations to enable collective self-defense."
        ],
        sources: ["Statistics Bureau of Japan", "Ministry of Finance Japan", "National Institute of Population and Social Security Research"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Japan's most critical ally is the United States, supported by close Quad security partnerships with Australia and India, and a restored trilateral cooperation with South Korea.",
      whyItMatters: "The US-Japan Security Treaty is the cornerstone of Japan's defense; US naval and air bases in Okinawa and Yokosuka allow the two nations to jointly defend East Asian sea lanes.",
      deeperDetails: {
        facts: [
          "Japan has built a web of 'minilateral' democratic partnerships to supplement its bilateral alliance with Washington."
        ],
        partners: [
          {
            who: "United States",
            relationshipType: "Cornerstone Mutual Defense Treaty Ally (1960)",
            whyItMatters: "Provides extended nuclear deterrence, intelligence sharing, and commands the 7th Fleet headquartered at Yokosuka Naval Base.",
            areasOfCooperation: ["Joint command modernization", "Aegis ballistic missile defense", "Patriot PAC-3 co-production", "Taiwan Strait deterrence"],
            areasOfCompetition: ["Domestic industrial tariffs", "Burden sharing debates over base hosting costs"],
            dependencies: ["US nuclear umbrella and high-end fifth-generation stealth aircraft (F-35A/B)"],
            strategicSignificance: "The foundation of Japan's entire post-war national defense policy.",
            source: "US-Japan Security Consultative Committee (2+2) Statements"
          },
          {
            who: "Australia",
            relationshipType: "Special Strategic Partner & Reciprocal Access Agreement",
            whyItMatters: "First non-US country with which Japan signed a Reciprocal Access Agreement (RAA) allowing troop deployments on each other's soil.",
            areasOfCooperation: ["LNG and critical mineral supplies", "Joint military exercises (Talisman Sabre)", "Quad coordination"],
            strategicSignificance: "Secures Japan's southern maritime flank and guarantees natural resource supplies.",
            source: "Japan-Australia Joint Declaration on Security Cooperation"
          },
          {
            who: "India",
            relationshipType: "Special Strategic and Global Partner",
            whyItMatters: "Key democratic partner in the Quad sharing common concerns regarding Chinese maritime and continental expansion.",
            areasOfCooperation: ["Northeast India infrastructure connectivity", "Malabar joint naval drills", "High-speed rail investments"],
            strategicSignificance: "Ensures the balance of power across the broader Indo-Pacific maritime space.",
            source: "Ministry of Foreign Affairs Japan (MOFA)"
          },
          {
            who: "South Korea",
            relationshipType: "Trilateral Democratic Security Partner",
            whyItMatters: "Co-hosts US forward military presence and shares real-time tracking data on North Korean missile launches.",
            areasOfCooperation: ["Trilateral missile warning data sharing", "Semiconductor supply chain dialogues", "Maritime search and rescue"],
            areasOfCompetition: ["Takeshima/Dokdo territorial claims and unresolved colonial compensation disputes"],
            strategicSignificance: "Critical democratic partner along the immediate East Asian perimeter.",
            source: "Camp David Trilateral Framework"
          }
        ],
        sources: ["Ministry of Foreign Affairs of Japan", "Japan MOD White Paper"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Japan's primary strategic competitor is China, followed by acute military tensions with North Korea and Russia.",
      whyItMatters: "China frequently sends coast guard and naval warships into the waters surrounding Japan's Senkaku Islands, while North Korea repeatedly tests ballistic missiles that fly directly over Japanese territory.",
      deeperDetails: {
        facts: [
          "Japan faces three simultaneous nuclear-armed adversaries along its maritime perimeter."
        ],
        competitors: [
          {
            who: "China",
            competitionType: "Primary Strategic Challenge",
            areasOfCompetition: ["Senkaku Islands territorial sovereignty", "East China Sea oil and gas drilling", "Taiwan Strait security", "Indo-Pacific maritime domain influence"],
            whyItMatters: "The 2022 National Security Strategy officially designated China as 'the greatest strategic challenge' Japan has ever faced.",
            source: "Japan National Security Strategy; Japan Coast Guard Incident Reports"
          },
          {
            who: "North Korea",
            competitionType: "Direct Ballistic & Nuclear Threat",
            areasOfCompetition: ["Intermediate and long-range ballistic missile overflights", "Abduction of Japanese citizens issue", "Cyber attacks and illicit maritime transfers"],
            whyItMatters: "North Korean missiles possess flight times of under 10 minutes to reach major Japanese urban centers.",
            source: "Ministry of Defense Japan Threat Assessments"
          },
          {
            who: "Russia",
            competitionType: "Territorial & Border Friction",
            areasOfCompetition: ["Northern Territories (Kuril Islands) territorial dispute", "Russian militarization of the Kuril chain", "Joint Sino-Russian bomber patrols around Japan"],
            whyItMatters: "Tokyo and Moscow never signed a formal peace treaty ending World War II due to this unresolved island dispute.",
            source: "MOFA Japan Diplomatic Bluebook"
          }
        ],
        sources: ["Defense of Japan 2023", "SIPRI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Japan is an island archipelago forming the northern half of the First Island Chain, sitting like a natural barricade between the Asian mainland and the open Pacific Ocean.",
      whyItMatters: "Because Japan controls the narrow straits between its islands (Tsushima, Tsugaru, Miyako), the Chinese and Russian navies must pass near Japanese sensors and shore-based missiles to enter the deep ocean.",
      deeperDetails: {
        facts: [
          "The First Island Chain Fortress: Japan's 6,852 islands stretch over 3,000 kilometers from Hokkaido to Yonaguni Island (which sits just 111 km from Taiwan's coast).",
          "Miyako and Tsushima Straits: Vital international waterways monitored around the clock by the JMSDF to track Chinese naval carrier groups breaking out into the Philippine Sea.",
          "Pacific Trade Chokepoint Dependence: Over 80% of Japan's imported oil and raw materials must navigate the South China Sea, Luzon Strait, or Taiwan Strait before reaching Tokyo Bay.",
          "Natural Disaster Vulnerability: Sits on the Pacific 'Ring of Fire' at the junction of four tectonic plates, creating constant exposure to major earthquakes, tsunamis, and volcanic eruptions."
        ],
        sources: ["Geospatial Information Authority of Japan", "Japan Coast Guard Hydrographic Surveys"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Japan's established strategic behavior is defined by a shift from post-war pacifism toward assertive defense deterrence, anchored by its US alliance and technological leadership.",
      whyItMatters: "While Japan will not initiate foreign aggression due to deeply rooted democratic norms, it is rapidly preparing its society and defense industries to deter major regional military aggression.",
      deeperDetails: {
        facts: [
          "End of the 1% GDP Ceiling: Abandoned the historical unwritten limit that kept defense spending capped at 1% of GDP, authorizing historic funding for counterstrike missiles.",
          "Dual-Use Civil Power: Possesses extensive civilian nuclear technology, heavy rocket launch systems (H3), and precision aerospace engineering that provide high latent deterrence.",
          "Quality and Reliability Diplomat: Globally respected for upholding international rule-of-law standards, transparent infrastructure financing, and disaster relief aid."
        ],
        sources: ["Richard Samuels, 'Special Duty: A History of the Japanese Intelligence Community'", "CSIS Japan Chair"]
      }
    }
  ]
};
