import type { CountrySimpleQuestionsDossier } from "./types";

export const PAKISTAN_DOSSIER: CountrySimpleQuestionsDossier = {
  countryId: "PAK",
  countryName: "Pakistan",
  tagline: "A nuclear-armed South Asian state managing debt distress, military primacy, and an all-weather Chinese alliance",
  questions: [
    {
      questionId: "what_is_this_country",
      question: "What is this country?",
      simpleAnswer: "Pakistan is a nuclear-armed nation of over 240 million people in South Asia, where the military establishment plays the dominant role in foreign policy and national security.",
      whyItMatters: "Its strategic position connecting South Asia, Central Asia, and the Persian Gulf—combined with its expanding nuclear arsenal—makes its internal stability a critical global concern.",
      deeperDetails: {
        facts: [
          "Fifth-most populous nation in the world (over 241 million people), with a nominal GDP of approximately $375 billion.",
          "Maintains an estimated arsenal of 170 nuclear warheads developed specifically to deter its larger neighbor, India.",
          "Federal parliamentary republic where the military high command (GHQ Rawalpindi) exercises decisive institutional control over national security, nuclear doctrine, and major diplomatic choices.",
          "Key host of the $62 billion China-Pakistan Economic Corridor (CPEC), the flagship initiative of China's Belt and Road."
        ],
        metrics: {
          "Population": "241.5 Million",
          "Nuclear Arsenal": "~170 Warheads",
          "Nominal GDP": "$375 Billion",
          "External Debt": ">$125 Billion"
        },
        sources: ["Pakistan Bureau of Statistics", "SIPRI Nuclear Forces", "State Bank of Pakistan"]
      }
    },
    {
      questionId: "what_does_it_want",
      question: "What does it want?",
      simpleAnswer: "Pakistan wants to prevent Indian military dominance in South Asia, maintain full-spectrum nuclear deterrence, secure financial bailout funding to avoid sovereign debt default, and preserve friendly influence in Afghanistan.",
      whyItMatters: "Its pursuit of military parity with a much larger and wealthier neighbor forces Pakistan to allocate significant national resources to defense, contributing to recurring economic crises.",
      deeperDetails: {
        facts: [
          "Maintain 'Full Spectrum Deterrence' against India, including low-yield tactical battlefield nuclear weapons (Nasr missile system) to counter India's conventional forces.",
          "Internationalize the disputed status of Jammu & Kashmir and advocate for self-determination plebiscites under historic UN resolutions.",
          "Secure recurring IMF loan tranches and bilateral financial rollovers from China, Saudi Arabia, and the UAE to service massive sovereign external debt.",
          "Eliminate violent extremist attacks by the Tehreek-e-Taliban Pakistan (TTP) emanating from Afghan sanctuaries."
        ],
        sources: ["National Security Policy of Pakistan (2022-2026)", "IMF Country Report Pakistan"]
      }
    },
    {
      questionId: "what_is_it_good_at",
      question: "What is it good at?",
      simpleAnswer: "Pakistan excels in uranium enrichment, ballistic and cruise missile engineering, regional asymmetric intelligence operations, and textile manufacturing.",
      whyItMatters: "Its advanced missile program and tactical nuclear systems ensure that any large-scale conventional military conflict with India carries an immediate risk of nuclear escalation.",
      deeperDetails: {
        facts: [
          "Nuclear & Missile Engineering: Successfully developed solid-fuel ballistic missiles (Shaheen-III with 2,750 km range) and cruise missiles (Babur, Ra'ad) capable of striking any part of India.",
          "Military & Intelligence Operations: The Inter-Services Intelligence (ISI) possesses decades of experience operating covert proxy networks and intelligence networks across South and Central Asia.",
          "Conventional Army Cohesion: The Pakistan Army is a professional, disciplined 650,000-strong conventional force with deep institutional roots and strong social welfare organizations (Fauji Foundation).",
          "Textile Exports: Cotton textiles and apparel account for nearly 60% of Pakistan's total merchandise export earnings."
        ],
        metrics: {
          "Standing Military": "654,000 Active Personnel",
          "Textiles Share of Exports": "~58%",
          "Shaheen-III Missile Range": "2,750 km"
        },
        sources: ["Inter-Services Public Relations (ISPR)", "Pakistan Ministry of Commerce", "SIPRI Arms Database"]
      }
    },
    {
      questionId: "what_does_it_depend_on",
      question: "What does it depend on?",
      simpleAnswer: "Pakistan depends critically on emergency financial loans from the IMF and Gulf monarchies, Chinese military hardware and infrastructure loans, and imported fuel.",
      whyItMatters: "Without regular loan rollovers and deposits from China and Saudi Arabia into the State Bank of Pakistan, the country faces immediate foreign-exchange depletion and fuel shortages.",
      deeperDetails: {
        facts: [
          "External Debt Rollovers: Relies on rolling over billions of dollars in commercial and central-bank deposits from China ($15B+), Saudi Arabia, and the UAE to avoid national debt default.",
          "Chinese Defense Technology: Over 70% of Pakistan's major arms imports are now sourced from China, including the JF-17 Block III fighter, VT-4 main battle tanks, and Type 054A/P frigates.",
          "Energy Import Bills: Imports over 80% of its crude oil and large volumes of LNG, which consume a huge portion of export revenues whenever global fuel prices rise.",
          "Water from the Indus River: Agriculture and food security depend almost 100% on the Indus River basin, whose upper river headwaters flow through Indian territory governed by the Indus Waters Treaty."
        ],
        metrics: {
          "Chinese Share of Arms Imports": "73%",
          "External Debt-to-GDP": "~42%",
          "Foreign Exchange Reserves": "~$8-10 Billion (2-3 months import cover)"
        },
        sources: ["State Bank of Pakistan", "SIPRI Arms Transfers", "World Bank Pakistan Economic Update"]
      }
    },
    {
      questionId: "what_are_its_biggest_problems",
      question: "What are its biggest problems?",
      simpleAnswer: "Pakistan suffers from chronic economic crises with high inflation, deep internal political instability, and a resurgence of cross-border terrorism along the Afghan border.",
      whyItMatters: "These overlapping crises create a fragile domestic environment where civilian governments change frequently while the military establishment struggles to fix the broken economy.",
      deeperDetails: {
        facts: [
          "Sovereign Debt Spiral: Debt servicing costs consume over 50% of the federal government's net revenue, severely restricting spending on education, healthcare, and infrastructure.",
          "Internal Political Polarization: High domestic political friction involving the imprisonment of former Prime Minister Imran Khan, disputed parliamentary elections, and civilian-military tension.",
          "Security Deterioration: Rising attacks by Tehrik-i-Taliban Pakistan (TTP) in Khyber Pakhtunkhwa and separatist insurgents (BLA) targeting Chinese workers in Balochistan.",
          "Climate Vulnerability: Susceptible to extreme weather; the catastrophic 2022 monsoon floods submerged one-third of the country and caused over $30 billion in economic damage."
        ],
        sources: ["World Bank Post-Disaster Needs Assessment", "Pakistan Institute for Conflict and Security Studies (PICSS)"]
      }
    },
    {
      questionId: "who_are_its_important_partners",
      question: "Who are its important partners?",
      simpleAnswer: "Pakistan's most vital strategic partner is China, supported by traditional diplomatic and financial ties with Saudi Arabia, Turkey, and the United Arab Emirates.",
      whyItMatters: "China provides an essential diplomatic shield at the UN and supplies advanced weaponry, while Saudi Arabia and the UAE provide urgent oil credits and cash deposits.",
      deeperDetails: {
        facts: [
          "Pakistan relies on bilateral relationships with friendly Muslim nations and China to sustain its fiscal health and defense procurement."
        ],
        partners: [
          {
            who: "China",
            relationshipType: "'All-Weather' Strategic Cooperative Partner",
            whyItMatters: "Pakistan's primary arms supplier, economic creditor, and geopolitical ally balancing India.",
            areasOfCooperation: ["CPEC infrastructure and energy plants", "Joint fighter co-development (JF-17 Thunder)", "Hangor-class stealth submarines", "UN Security Council diplomatic cover"],
            areasOfCompetition: ["Chinese impatience regarding security protections for Chinese engineers in Balochistan"],
            dependencies: ["Chinese financial loan rollovers and 70%+ of imported military hardware"],
            strategicSignificance: "The absolute cornerstone of Pakistan's defense architecture and economic survival.",
            source: "Ministry of Foreign Affairs Pakistan; CPEC Official Portal"
          },
          {
            who: "Saudi Arabia",
            relationshipType: "Strategic and Financial Partner",
            whyItMatters: "Deposits billions into the State Bank of Pakistan, supplies oil on deferred payments, and hosts over 2.5 million Pakistani workers whose remittances support the economy.",
            areasOfCooperation: ["Central bank cash deposits", "Oil supply facilities", "Security and military training cooperation"],
            areasOfCompetition: ["Saudi reluctance to provide unconditional grants without IMF structural reforms"],
            strategicSignificance: "Vital financial backstop preventing Pakistani sovereign default.",
            source: "Saudi Press Agency; Pakistan Ministry of Finance"
          },
          {
            who: "Türkiye",
            relationshipType: "Comprehensive Defense & Diplomatic Partner",
            whyItMatters: "Shares strong ideological solidarity, co-produces naval corvettes (MILGEM class), and provides joint diplomatic backing on the Kashmir issue.",
            areasOfCooperation: ["MILGEM Babur-class corvettes", "T129 ATAK helicopter co-production", "Mutual diplomatic support in the OIC"],
            strategicSignificance: "Important non-Chinese source of modern defense technology and diplomatic alignment.",
            source: "Joint Declaration of the Pakistan-Türkiye High Level Strategic Cooperation Council"
          },
          {
            who: "United States",
            relationshipType: "Transactional Security Partner",
            whyItMatters: "Historically a major military and civilian aid provider; maintains counter-terrorism intelligence sharing and support for IMF loan programs.",
            areasOfCooperation: ["F-16 fleet sustainment", "Counter-terrorism coordination", "IMF executive board voting"],
            areasOfCompetition: ["US closer ties with India (Quad); Pakistan's alignment with China"],
            strategicSignificance: "Remains Pakistan's largest single export destination for manufactured goods.",
            source: "US Department of State Bilateral Relations Fact Sheets"
          }
        ],
        sources: ["Ministry of Foreign Affairs Pakistan", "State Bank of Pakistan Annual Reports"]
      }
    },
    {
      questionId: "who_does_it_compete_with",
      question: "Who does it compete with?",
      simpleAnswer: "Pakistan's primary historic and strategic adversary is India, alongside worsening border tensions with the Taliban government in Afghanistan.",
      whyItMatters: "Pakistan's entire military posture, nuclear arsenal, and national security doctrine were created to counter India, while tension with Afghanistan creates a second volatile front.",
      deeperDetails: {
        facts: [
          "Pakistan's military doctrine is structurally oriented around the perceived existential threat from India."
        ],
        competitors: [
          {
            who: "India",
            competitionType: "Historic Nuclear-Armed Adversary",
            areasOfCompetition: ["Disputed status of Jammu & Kashmir (Line of Control)", "Conventional military balance and nuclear doctrine", "River water allocation (Indus Waters Treaty)", "Regional diplomatic influence in South Asia"],
            whyItMatters: "Fought four wars (1947, 1965, 1971, 1999) and multiple military standoffs (2001, 2019 Balakot airstrikes); both possess nuclear weapons.",
            source: "SIPRI Yearbook; Pakistan Army Green Book"
          },
          {
            who: "Afghanistan (Taliban Regime)",
            competitionType: "Border Security and Proxy Friction",
            areasOfCompetition: ["Durand Line border recognition", "Cross-border sanctuaries for Tehrik-i-Taliban Pakistan (TTP)", "Mass deportation of Afghan refugees from Pakistan"],
            whyItMatters: "Despite Pakistan's historic support for the Afghan Taliban, the current Kabul regime refuses to recognize the border or suppress anti-Pakistan militants.",
            source: "UN Analytical Support and Sanctions Monitoring Team Reports on Afghanistan"
          }
        ],
        sources: ["ISPR", "SIPRI"]
      }
    },
    {
      questionId: "why_does_its_geography_matter",
      question: "Why does its geography matter?",
      simpleAnswer: "Pakistan acts as a natural land bridge between the oil-rich Persian Gulf, the landlocked energy resources of Central Asia, and the massive markets of China and India.",
      whyItMatters: "However, Pakistan's geography also leaves it strategically narrow: its major highways, railways, and cities run very close to the Indian border, giving it little territorial depth in a conventional war.",
      deeperDetails: {
        facts: [
          "Lack of Strategic Depth: Major population centers (Lahore, Sialkot) and the main north-south Grand Trunk Road lie within 50-100 km of the Indian border, leaving them vulnerable to fast armored thrusts.",
          "Gwadar Deepwater Port: Positioned at the mouth of the Persian Gulf just 400 km from the Strait of Hormuz, providing China with a potential warm-water naval and commercial outlet to the Indian Ocean.",
          "The Karakoram Highway: The world's highest paved international road cuts through the Karakoram mountains, providing the only direct overland link between Pakistan and western China.",
          "The Indus Water Lifeline: Nearly all irrigated agriculture relies on the Indus River and its five tributaries; three western rivers (Indus, Jhelum, Chenab) were allocated to Pakistan under the 1960 Indus Waters Treaty."
        ],
        sources: ["Survey of Pakistan Geographic Maps", "World Bank Indus Waters Treaty Archives"]
      }
    },
    {
      questionId: "what_should_i_know_about_this_country",
      question: "What should I know about this country?",
      simpleAnswer: "Pakistan's established strategic behavior is defined by its military's institutional supremacy, its nuclear doctrine focused on countering India, and its ability to secure foreign financial bailouts during crises.",
      whyItMatters: "Foreign analysts who periodically forecast Pakistan's immediate collapse overlook the military's deep domestic control and the international interest in keeping a nuclear-armed state fiscally solvent.",
      deeperDetails: {
        facts: [
          "Civilian-Military Dynamics: While civilian political parties contest elections, the military establishment ('the Establishment') retains informal veto power over nuclear doctrine, foreign defense ties, and intelligence policy.",
          "Too Nuclear to Fail: International financial institutions and partner nations repeatedly extend lifeline loans because the geopolitical risk of a bankrupt, destabilized nuclear state of 240 million people is considered unacceptable.",
          "Balancing Act Between Powers: Despite deep dependence on Beijing, Pakistan actively preserves military ties and counter-terrorism cooperation with Washington to avoid total subservience to China."
        ],
        sources: ["Ayesha Siddiqa, 'Military Inc.: Inside Pakistan's Military Economy'", "Brookings Institution"]
      }
    }
  ]
};
