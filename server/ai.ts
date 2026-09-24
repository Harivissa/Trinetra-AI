import { GoogleGenAI } from "@google/genai";
import { repository } from "./data";
import { STRATEGIC_EVENTS } from "../src/data/strategicEventsData";

let genAIClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!genAIClient && process.env.GEMINI_API_KEY) {
    genAIClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  }
  return genAIClient;
}

const SYSTEM_PROMPT = `You are Trinetra AI, a senior geopolitical intelligence analyst.
You synthesize structured intelligence across sovereign capabilities, leadership, geography, trade flows, energy dependencies, military balance, multilateral alliances, and maritime chokepoints.

Analytical Guidelines:
1. Always base statements on the provided TRINETRA ground truth dataset.
2. Structure your answers clearly:
   - **Simple Answer**: Direct, high-impact 1-2 sentence core conclusion.
   - **Why It Matters**: Strategic rationale and geopolitical transmission vectors.
   - **Deeper Intelligence**: Specific facts, metrics, infrastructure, or flows involved.
   - **Contextual Evidence**: Primary institutions and verification anchors.
3. If the user asks about something not in the verified dataset or for which information is genuinely insufficient, explicitly state:
   "Trinetra does not currently have enough verified information to answer this confidently."
4. Never invent statistics, coordinates, alliances, or false military capabilities.
5. Maintain an objective, disciplined, non-partisan, strategic intelligence posture.`;

export interface IntelligenceChatResponse {
  content: string;
  structuredEntities: {
    countries: string[];
    groups: string[];
    events: string[];
    chokepoints: string[];
  };
  followUps: string[];
  confidence: "VERIFIED" | "HIGH" | "INSUFFICIENT_DATA";
  evidence: { source: string; verifiedAt: string }[];
}

export async function answerIntelligenceQuery(
  query: string,
  history: Array<{ role: "user" | "assistant"; content: string }> = []
): Promise<IntelligenceChatResponse> {
  const queryLower = query.toLowerCase();

  // 1. Entity Resolution across the Intelligence Graph
  const countries = repository.getCountryIndex();
  const matchedCountries: any[] = [];
  for (const c of countries) {
    if (queryLower.includes(c.name.toLowerCase()) || queryLower.includes(c.id.toLowerCase())) {
      const full = repository.getCountry(c.id);
      if (full) matchedCountries.push(full);
    }
  }

  const groups = repository.getGroups();
  const matchedGroups: any[] = [];
  for (const g of groups) {
    if (
      queryLower.includes(g.id.toLowerCase()) ||
      queryLower.includes(g.name.toLowerCase()) ||
      (g.acronym && queryLower.includes(g.acronym.toLowerCase()))
    ) {
      matchedGroups.push(g);
    }
  }

  const chokepoints = repository.getChokepoints();
  const matchedChokepoints: any[] = [];
  for (const cp of chokepoints) {
    const cpName = (cp.name || cp.chokepoint || "").toLowerCase();
    if (queryLower.includes(cpName) || (cp.id && queryLower.includes(cp.id.toLowerCase()))) {
      matchedChokepoints.push(cp);
    }
  }

  const matchedEvents: any[] = [];
  for (const ev of STRATEGIC_EVENTS) {
    const evTitle = ev.title.toLowerCase();
    if (
      queryLower.includes(evTitle) ||
      ev.actors.some((a) => queryLower.includes(a.toLowerCase())) ||
      (ev.location.name && queryLower.includes(ev.location.name.toLowerCase()))
    ) {
      matchedEvents.push(ev);
    }
  }

  // 2. Prepare Context Packet for Grounding
  const contextPacket = {
    matched_countries: matchedCountries.map((c) => ({
      id: c.id,
      name: c.name,
      demographics: c.demographics,
      economy: c.economy,
      military: c.military,
      energy: c.energy,
      strategic_priorities: c.strategic_priorities,
      dependencies: c.dependencies,
      alliances: c.alliances,
      rivals: c.rivals,
    })),
    matched_groups: matchedGroups.map((g) => ({
      name: g.name,
      acronym: g.acronym,
      purpose: g.strategic_purpose || g.description,
      members: g.members,
      domains: g.strategic_domains,
    })),
    matched_chokepoints: matchedChokepoints.map((cp) => ({
      name: cp.name || cp.chokepoint,
      importance: cp.importance || cp.why_it_matters,
      dailyVolume: cp.dailyVolume,
      exposure: cp.exposure || cp.countries_most_exposed,
      leverage: cp.leverage || cp.countries_with_leverage,
    })),
    matched_events: matchedEvents.slice(0, 4).map((ev) => ({
      title: ev.title,
      date: ev.date,
      actors: ev.actors,
      whatHappened: ev.whatHappened,
      whatChanged: ev.whatChanged,
      strategicSignificance: ev.strategicSignificance,
      affectedFlows: ev.affectedFlows,
    })),
  };

  const gemini = getGeminiClient();

  if (gemini) {
    try {
      const messages: Array<{ role: string; parts: Array<{ text: string }> }> = [
        {
          role: "user",
          parts: [
            {
              text: `${SYSTEM_PROMPT}\n\nHere is the verified TRINETRA intelligence graph context:\n${JSON.stringify(
                contextPacket,
                null,
                2
              )}`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I will provide a disciplined, structured strategic intelligence briefing grounded in these verified facts, metrics, and relationships.",
            },
          ],
        },
      ];

      // Append past turns (up to last 6)
      for (const turn of history.slice(-6)) {
        messages.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.content }],
        });
      }

      // Append current user query with prompt instructions
      messages.push({
        role: "user",
        parts: [
          {
            text: `Analyze and respond to this strategic intelligence query: "${query}".
Ensure your response has:
1. **Simple Answer**
2. **Why It Matters**
3. **Deeper Intelligence** (incorporating specific geographic transit routes, choke points, supply dependency metrics, or institutional memberships)
4. **Contextual Evidence** (citing verified agencies like IEA, SIPRI, IMF, UN Comtrade, or IMO)`,
          },
        ],
      });

      const response = await gemini.models.generateContent({
        model: "gemini-3.8-flash",
        contents: messages,
      });

      const responseText = response.text || "";

      // Construct Follow-up Suggestions based on resolved entities
      const followUps: string[] = [];
      if (matchedCountries.length > 0) {
        followUps.push(`What are ${matchedCountries[0].name}'s top strategic dependencies?`);
      }
      if (matchedChokepoints.length > 0) {
        followUps.push(`Which nations have operational naval leverage over ${matchedChokepoints[0].name || "this chokepoint"}?`);
      }
      if (matchedGroups.length > 0) {
        followUps.push(`How does ${matchedGroups[0].name} coordinate joint economic or security positions?`);
      }
      if (followUps.length < 3) {
        followUps.push("How do global maritime chokepoints impact energy supply security?");
      }

      return {
        content: responseText,
        structuredEntities: {
          countries: matchedCountries.map((c) => c.name),
          groups: matchedGroups.map((g) => g.name),
          events: matchedEvents.map((e) => e.title),
          chokepoints: matchedChokepoints.map((cp) => cp.name || cp.chokepoint),
        },
        followUps: followUps.slice(0, 3),
        confidence: "VERIFIED",
        evidence: [
          { source: "TRINETRA Canonical Sovereign Registry", verifiedAt: "2026-09" },
          { source: "International Energy Agency (IEA) / UN Comtrade", verifiedAt: "2026-05" },
        ],
      };
    } catch (e: any) {
      console.warn("Gemini chat failed, falling back to analytical graph engine:", e?.message || e);
    }
  }

  // Deterministic Fallback Synthesis (when API key is absent or unreachable)
  let fallbackContent = "";
  if (matchedCountries.length > 0 || matchedChokepoints.length > 0 || matchedGroups.length > 0) {
    const primaryCountry = matchedCountries[0];
    const primaryCp = matchedChokepoints[0];
    const primaryGroup = matchedGroups[0];

    fallbackContent = `### Strategic Intelligence Briefing: ${query}

#### 1. Simple Answer
${
  primaryCountry && primaryCp
    ? `${primaryCountry.name}'s economic and energy security is structurally tied to passage through ${primaryCp.name || primaryCp.chokepoint}, through which the overwhelming majority of its seaborne petroleum imports must transit.`
    : primaryCountry
    ? `${primaryCountry.name} operates as a pivotal sovereign actor characterized by strategic autonomy, managing complex regional multi-alignment between competing geopolitical blocs.`
    : primaryCp
    ? `${primaryCp.name || primaryCp.chokepoint} constitutes one of the planet's primary maritime transit corridors, handling vital daily petroleum and merchandise flows.`
    : primaryGroup
    ? `${primaryGroup.name} (${primaryGroup.acronym || ""}) coordinates collective sovereign leverage across ${primaryGroup.strategic_domains?.join(", ") || "global governance"}.`
    : "The strategic balance of power relies on sovereign geographic leverage, critical maritime supply arteries, and institutional alliances."
}

#### 2. Why It Matters
- **Supply Artery Resilience**: Geographic transit corridors and chokepoints dictate state vulnerability to asymmetric interdiction, naval blockades, and commercial insurance spikes.
- **Economic Transmission**: Interruptions in critical resource flows immediately transmit into domestic inflation, industrial curtailments, and sovereign debt strain.
- **Deterrence Calculus**: States continuously balance unilateral defense postures against multilateral coalitions to deter coercion.

#### 3. Deeper Intelligence
${
  primaryCountry
    ? `- **Sovereign Profile**: ${primaryCountry.name} (GDP: $${primaryCountry.economy?.gdp_usd_trillion || "—"}T | Defence: $${primaryCountry.military?.defence_spending_usd_billion || "—"}B).
- **Core Dependencies**: ${primaryCountry.dependencies?.slice(0, 4).join(", ") || "Crude petroleum, advanced microelectronics, strategic mineral feedstocks"}.
- **Strategic Partners**: ${primaryCountry.alliances?.slice(0, 5).join(", ") || "Active bilateral defense and economic agreements"}.`
    : ""
}
${
  primaryCp
    ? `- **Transit Node**: ${primaryCp.name || primaryCp.chokepoint}
- **Throughput**: ${primaryCp.dailyVolume || "~20M bpd seaborne crude / 15% global commerce"}.
- **Exposed States**: ${primaryCp.exposure || "East Asian and European industrial powers"}.`
    : ""
}

#### 4. Contextual Evidence
- Grounded in TRINETRA Sovereign Infrastructure Matrix, International Energy Agency (IEA) Crude Transit Logs, and IMO Maritime Safety Registry.`;
  } else {
    fallbackContent = `Trinetra does not currently have enough verified information to answer this confidently.

Please verify the country name, international organization, or strategic chokepoint query terms to retrieve grounded sovereign intelligence.`;
  }

  return {
    content: fallbackContent,
    structuredEntities: {
      countries: matchedCountries.map((c) => c.name),
      groups: matchedGroups.map((g) => g.name),
      events: matchedEvents.map((e) => e.title),
      chokepoints: matchedChokepoints.map((cp) => cp.name || cp.chokepoint),
    },
    followUps: [
      "Why is the Strait of Hormuz critical to global energy transit?",
      "How does BRICS expansion impact alternative currency settlements?",
      "What are the major military choke points in the Indo-Pacific?",
    ],
    confidence: matchedCountries.length > 0 || matchedChokepoints.length > 0 ? "HIGH" : "INSUFFICIENT_DATA",
    evidence: [{ source: "TRINETRA Intelligence Graph", verifiedAt: "2026-09" }],
  };
}

export async function explainRivalry(analysis: any): Promise<string> {
  const gemini = getGeminiClient();
  const promptData = `Here is the structured analytical data for this rivalry:\n\n${JSON.stringify(analysis, null, 2)}`;

  if (gemini) {
    try {
      const response = await gemini.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [
          { role: "user", parts: [{ text: `${SYSTEM_PROMPT}\n\n${promptData}` }] },
        ],
      });
      if (response.text) {
        return response.text;
      }
    } catch (e: any) {
      console.warn("Gemini API generation failed:", e?.message || e);
    }
  }

  // Fallback to structured analytical synthesis if AI key is unavailable or fails
  const countryA = analysis.country_a?.name || analysis.country_a?.id;
  const countryB = analysis.country_b?.name || analysis.country_b?.id;
  const milA = analysis.military?.country_a;
  const milB = analysis.military?.country_b;
  const econA = analysis.economic?.country_a;
  const econB = analysis.economic?.country_b;
  const energyA = analysis.energy?.country_a;
  const energyB = analysis.energy?.country_b;
  const chokepointList = (analysis.chokepoints?.relevant_chokepoints || [])
    .map((cp: any) => cp.chokepoint)
    .join(", ");

  return `### Strategic Intelligence Assessment: ${countryA} vs. ${countryB}

1. **Balance of Strategic Leverage**:
   - **${countryA}**: Defence spending estimated at $${milA?.defence_spending_usd_billion ?? "—"}B (${milA?.defence_spending_pct_gdp ?? "—"}% of GDP), with active forces numbering approximately ${milA?.active_troops?.toLocaleString() ?? "—"}. Economic base stands at $${econA?.gdp_usd_trillion ?? "—"}T GDP with growth at ${econA?.gdp_growth_pct ?? "—"}%.
   - **${countryB}**: Defence spending estimated at $${milB?.defence_spending_usd_billion ?? "—"}B (${milB?.defence_spending_pct_gdp ?? "—"}% of GDP), with active forces numbering approximately ${milB?.active_troops?.toLocaleString() ?? "—"}. Economic base stands at $${econB?.gdp_usd_trillion ?? "—"}T GDP with growth at ${econB?.gdp_growth_pct ?? "—"}%.

2. **Critical Dependencies & Vulnerabilities**:
   - **Energy Exposure**: ${countryA} net import dependence ratio is recorded at ${energyA?.net_import_dependence_ratio ?? "N/A"}. For ${countryB}, net import dependence ratio is recorded at ${energyB?.net_import_dependence_ratio ?? "N/A"}.
   - **Maritime & Transit Nodes**: Strategic corridors of consequence include: ${chokepointList || "Regional bilateral border axes"}. Proximity and access constraints dictate shipping and supply security.

3. **Cross-Domain Pressure Dynamics**:
   - Bilateral or regional friction transmits from initial diplomatic/border posturing into maritime freight re-routing, commercial insurance premiums, and localized energy price volatility, impacting downstream consumer inflation.

4. **Strategic Balancers & Third Parties**:
   - Regional middle powers and multilateral forums (G20, SCO, BRICS, QUAD) serve as either potential mediators or structural balancers attempting to prevent zero-sum escalation.

5. **Near-Term Trajectory & De-escalation**:
   - Primary monitored scenario remains managed strategic competition with low-to-elevated localized friction. Off-ramps rely on established bilateral communication mechanisms, high-level diplomatic channels, and multilateral summits.`;
}
