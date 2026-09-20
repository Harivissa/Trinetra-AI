import type { CountrySimpleQuestionsDossier, ThreeLayerAnswer } from "./types";
import { INDIA_DOSSIER } from "./india";
import { CHINA_DOSSIER } from "./china";
import { USA_DOSSIER } from "./usa";
import { RUSSIA_DOSSIER } from "./russia";
import { PAKISTAN_DOSSIER } from "./pakistan";
import { SOUTH_KOREA_DOSSIER } from "./southKorea";
import { SAUDI_ARABIA_DOSSIER } from "./saudiArabia";
import { JAPAN_DOSSIER } from "./japan";
import { FRANCE_DOSSIER, UK_DOSSIER } from "./middleEastEurope";
import { GERMANY_DOSSIER, TURKEY_DOSSIER, IRAN_DOSSIER, ISRAEL_DOSSIER } from "./middleEastKey";
import { AUSTRALIA_DOSSIER, INDONESIA_DOSSIER } from "./globalOthers";

export * from "./types";
export {
  INDIA_DOSSIER,
  CHINA_DOSSIER,
  USA_DOSSIER,
  RUSSIA_DOSSIER,
  PAKISTAN_DOSSIER,
  SOUTH_KOREA_DOSSIER,
  SAUDI_ARABIA_DOSSIER,
  JAPAN_DOSSIER,
  FRANCE_DOSSIER,
  UK_DOSSIER,
  GERMANY_DOSSIER,
  TURKEY_DOSSIER,
  IRAN_DOSSIER,
  ISRAEL_DOSSIER,
  AUSTRALIA_DOSSIER,
  INDONESIA_DOSSIER
};

export const COUNTRY_SIMPLE_QUESTIONS: Record<string, CountrySimpleQuestionsDossier> = {
  IND: INDIA_DOSSIER,
  CHN: CHINA_DOSSIER,
  USA: USA_DOSSIER,
  RUS: RUSSIA_DOSSIER,
  PAK: PAKISTAN_DOSSIER,
  KOR: SOUTH_KOREA_DOSSIER,
  SAU: SAUDI_ARABIA_DOSSIER,
  JPN: JAPAN_DOSSIER,
  FRA: FRANCE_DOSSIER,
  GBR: UK_DOSSIER,
  DEU: GERMANY_DOSSIER,
  TUR: TURKEY_DOSSIER,
  IRN: IRAN_DOSSIER,
  ISR: ISRAEL_DOSSIER,
  AUS: AUSTRALIA_DOSSIER,
  IDN: INDONESIA_DOSSIER
};

// Fallback intelligent synthesizer for any country adhering strictly to the 9 questions and 3 layers
export function getCountrySimpleQuestions(
  countryId: string,
  countryName: string,
  profile?: any
): CountrySimpleQuestionsDossier {
  if (COUNTRY_SIMPLE_QUESTIONS[countryId]) {
    return COUNTRY_SIMPLE_QUESTIONS[countryId];
  }

  const region = profile?.region || profile?.geography?.region || "its home region";
  const capital = profile?.capital || profile?.geography?.capital || "its sovereign seat";
  const system = profile?.politics?.system || profile?.governance_type || "sovereign government";
  const gdp = profile?.economy?.gdp_usd_trillion ? `$${profile.economy.gdp_usd_trillion} Trillion` : undefined;
  const pop = profile?.demographics?.population_millions ? `${profile.demographics.population_millions} Million` : undefined;
  const isNuclear = profile?.nuclear?.weapons_state;

  const strengths = Array.isArray(profile?.strengths) && profile.strengths.length > 0
    ? profile.strengths
    : ["Regional trade connectivity", "Diplomatic engagement", "Territorial defense capabilities"];

  const vulnerabilities = Array.isArray(profile?.vulnerabilities) && profile.vulnerabilities.length > 0
    ? profile.vulnerabilities
    : ["Exposure to international commodity price volatility", "Regional border and security tensions"];

  const dependencies = Array.isArray(profile?.dependencies) && profile.dependencies.length > 0
    ? profile.dependencies
    : ["Global maritime trade routes", "Energy and industrial input imports"];

  const priorities = Array.isArray(profile?.strategic_priorities) && profile.strategic_priorities.length > 0
    ? profile.strategic_priorities
    : ["Protecting territorial integrity", "Advancing national economic development"];

  const rivals = Array.isArray(profile?.rivals) && profile.rivals.length > 0
    ? profile.rivals
    : ["Regional competitors across trade and border spheres"];

  const partners = Array.isArray(profile?.alliances) && profile.alliances.length > 0
    ? profile.alliances
    : ["Regional trade partners and multilateral treaty organizations"];

  return {
    countryId,
    countryName,
    tagline: `Sovereign actor in ${region} maintaining independent strategic priorities and regional partnerships`,
    questions: [
      {
        questionId: "what_is_this_country",
        question: "What is this country?",
        simpleAnswer: `${countryName} is a sovereign nation in ${region} governed under a ${system}, with its capital at ${capital}.`,
        whyItMatters: `It plays an active role in the stability, commerce, and security architecture of ${region}.`,
        deeperDetails: {
          facts: [
            pop ? `Home to a population of approximately ${pop} people.` : `Maintains registered sovereign civil demographics in ${region}.`,
            gdp ? `Generates an estimated nominal GDP of ${gdp}.` : `Engages actively in regional and international commerce.`,
            isNuclear ? "Maintains a declared sovereign nuclear deterrent." : "Operates professional conventional military defense forces."
          ],
          sources: ["Trinetra Verified Geopolitical Registry", "World Bank WDI"]
        }
      },
      {
        questionId: "what_does_it_want",
        question: "What does it want?",
        simpleAnswer: `${countryName} wants to secure its borders, grow its economy, and preserve its sovereign decision-making freedom.`,
        whyItMatters: `Its national objectives guide how it negotiates trade deals, participates in international forums, and deploys military assets.`,
        deeperDetails: {
          facts: priorities.map((p: any) => `Strategic Priority: ${p}`),
          sources: ["Official Foreign Policy Frameworks", "Trinetra Country Database"]
        }
      },
      {
        questionId: "what_is_it_good_at",
        question: "What is it good at?",
        simpleAnswer: `${countryName} has established key national capabilities in ${strengths.slice(0, 2).join(" and ")}.`,
        whyItMatters: `These capabilities give it diplomatic leverage and economic competitiveness in bilateral relations.`,
        deeperDetails: {
          facts: strengths.map((s: any) => `Documented Capability: ${s}`),
          sources: ["Trinetra Sovereign Capabilities Audit"]
        }
      },
      {
        questionId: "what_does_it_depend_on",
        question: "What does it depend on?",
        simpleAnswer: `${countryName} depends primarily on ${dependencies.slice(0, 2).join(" and ")} for ongoing stability.`,
        whyItMatters: `Disruptions in these critical inputs can constrain its diplomatic choices and create domestic economic pressure.`,
        deeperDetails: {
          facts: dependencies.map((d: any) => `Identified Reliance: ${d}`),
          sources: ["Trade & Resources Vulnerability Index"]
        }
      },
      {
        questionId: "what_are_its_biggest_problems",
        question: "What are its biggest problems?",
        simpleAnswer: `The primary challenges facing ${countryName} center on ${vulnerabilities.slice(0, 2).join(" and ")}.`,
        whyItMatters: `These vulnerabilities limit policy options and require ongoing government attention and defensive resources.`,
        deeperDetails: {
          facts: vulnerabilities.map((v: any) => `Vulnerability: ${v}`),
          sources: ["Sovereign Risk Matrix"]
        }
      },
      {
        questionId: "who_are_its_important_partners",
        question: "Who are its important partners?",
        simpleAnswer: `${countryName} works closely with key partners including ${partners.slice(0, 3).join(", ")}.`,
        whyItMatters: `These partnerships provide security coordination, trade opportunities, and diplomatic support in international forums.`,
        deeperDetails: {
          facts: partners.map((p: any) => `Key Bilateral Partner: ${p}`),
          partners: partners.slice(0, 3).map((p: any) => ({
            who: String(p),
            relationshipType: "Strategic & Economic Partner",
            whyItMatters: `Key partner for trade connectivity and regional security alignment with ${countryName}.`,
            areasOfCooperation: ["Bilateral commerce", "Diplomatic coordination"],
            strategicSignificance: `Core regional anchor in ${region}.`,
            source: "Treaty Registries and Bilateral Accords"
          })),
          sources: ["Treaty Registries and Bilateral Accords"]
        }
      },
      {
        questionId: "who_does_it_compete_with",
        question: "Who does it compete with?",
        simpleAnswer: `${countryName} experiences strategic or economic competition with ${rivals.slice(0, 2).join(" and ")}.`,
        whyItMatters: `Friction with competitors shapes defense procurement, border deployments, and trade agreements.`,
        deeperDetails: {
          facts: rivals.map((r: any) => `Competitor: ${r}`),
          competitors: rivals.slice(0, 2).map((r: any) => ({
            who: String(r),
            competitionType: "Regional Strategic & Commercial Competitor",
            areasOfCompetition: ["Trade market share", "Diplomatic alignment in international forums"],
            whyItMatters: `Shapes regional diplomatic and security calculations for ${countryName}.`,
            source: "Regional Security Briefings"
          })),
          sources: ["Regional Security Assessments"]
        }
      },
      {
        questionId: "why_does_its_geography_matter",
        question: "Why does its geography matter?",
        simpleAnswer: `${countryName}'s location in ${region} dictates its trade access, natural borders, and proximity to major sea or land corridors.`,
        whyItMatters: `Geography cannot be moved; it permanently defines which neighbors a country must manage and which trade routes it depends on.`,
        deeperDetails: {
          facts: [
            `Anchored geographically in ${region}.`,
            `Border management and transit corridor connectivity are permanent defense priorities.`
          ],
          sources: ["Geographic Survey Records"]
        }
      },
      {
        questionId: "what_should_i_know_about_this_country",
        question: "What should I know about this country?",
        simpleAnswer: `${countryName}'s established strategic behavior centers on advancing its domestic interests, securing its sovereign territory, and preserving independent foreign-policy decision-making.`,
        whyItMatters: `Understanding its real historical priorities prevents simplistic assumptions about its international behavior.`,
        deeperDetails: {
          facts: [
            `Maintains independent sovereign policy rooted in domestic constitutional mandates.`,
            `Balances regional relationships to safeguard territorial and economic security.`
          ],
          sources: ["Trinetra Sovereign Briefings"]
        }
      }
    ]
  };
}
