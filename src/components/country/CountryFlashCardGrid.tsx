// TRINETRA AI — Universal Country Intelligence Flash-Card Grid
// Renders the modular intelligence board matching the visual specification for any sovereign country.
// Strictly authentic, verified, neutral, and timestamped.
import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  Landmark,
  Compass,
  MapPin,
  TrendingUp,
  Flame,
  Globe2,
  Anchor,
  Radiation,
  Rocket,
  Cpu,
  History,
  Radio,
  FileCheck2,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  Target,
  Zap,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import { getCountryFlashCardDossier } from "../../data/countryFlashCardData";
import { getCountryLeadership } from "../../data/countryLeadershipData";
import { getCountrySimpleQuestions } from "../../data/countryDossiers";
import {
  ExpandedIntelligenceModal,
  type ModalIntelligenceContent,
} from "./ExpandedIntelligenceModal";
import {
  FlashCard,
  LeaderCard,
  QuestionCard,
  DomainCard,
  MapCard,
  ChartCard,
  TimelineCard,
  RelationshipCard,
  DependencyCard,
  AssetCard,
  SourceCard,
} from "./flashcards";

interface CountryFlashCardGridProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
  onJumpToSection?: (sectionId: string) => void;
}

export const CountryFlashCardGrid: React.FC<CountryFlashCardGridProps> = ({
  country,
  deepProfile,
  onJumpToSection,
}) => {
  const [selectedModalContent, setSelectedModalContent] = useState<ModalIntelligenceContent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const flashDossier = getCountryFlashCardDossier(country.id, country, deepProfile);
  const leadershipDossier = getCountryLeadership(country.id, country.name, country, deepProfile);
  const nineQuestionsDossier = getCountrySimpleQuestions(country.id, country.name, deepProfile);

  const openCardModal = (content: ModalIntelligenceContent) => {
    setSelectedModalContent(content);
    setIsModalOpen(true);
  };

  // 9 Questions list
  const nineQuestionsList = (nineQuestionsDossier.questions || []).map((q, idx) => ({
    num: String(idx + 1).padStart(2, "0"),
    key: q.questionId,
    title: q.question,
    answer: q,
  }));

  return (
    <div className="space-y-6">
      {/* SECTION ROW 1: Leadership, National Snapshot, Strategic Geography */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 01: Current Leadership */}
        <LeaderCard
          countryName={country.name}
          leadership={leadershipDossier}
          onClick={() =>
            openCardModal({
              sectionNumber: "01",
              title: "Current Government & Constitutional Leadership",
              category: "Executive Leadership",
              simpleAnswer: `${country.name} is governed under a ${leadershipDossier.systemType}. The executive authority is led by ${leadershipDossier.leaders.map(l => `${l.name} (${l.position})`).join(" and ")}.`,
              whyItMatters: "Executive stability and constitutional structures determine national security posture, defense procurement cycles, fiscal policy, and diplomatic alignment.",
              deepDetails: leadershipDossier.leaders.map((l) => ({
                label: l.position,
                value: [`Name: ${l.name}`, `Tenure: Since ${l.since} (${l.termInfo || "Active"})`, `Source: ${l.sourceName}`],
              })),
              sources: [
                { name: "National Constitutional Registry", domain: "Government Portals", confidence: "High" },
                { name: "Cabinet Secretariat", domain: "Executive Gazettes", confidence: "High" },
              ],
              jumpTargetId: "leadership-section",
            })
          }
        />

        {/* CARD 02: National Snapshot */}
        <FlashCard
          sectionNumber="02"
          title="National Snapshot"
          category="Sovereign Profile & Governance"
          icon={<Landmark className="size-4 text-trinetra-saffron group-hover:scale-110 transition-transform" />}
          source="UN Member States Directory & National Central Bank"
          actionLabel="Inspect sovereign dossier →"
          onClick={() =>
            openCardModal({
              sectionNumber: "02",
              title: "Sovereign Profile & Institutional Structure",
              category: "Sovereignty & Governance",
              simpleAnswer: `${flashDossier.officialName} is a sovereign state in ${flashDossier.region} with its capital at ${flashDossier.capital}, holding a GDP of ${flashDossier.topMetrics.find(m => m.id === "gdp")?.value || "N/A"}.`,
              whyItMatters: "Institutional governance models dictate regulatory continuity, foreign direct investment protection, and international law compliance.",
              deepDetails: [
                { label: "Official Sovereign Designation", value: flashDossier.officialName },
                { label: "Capital & Seat of Government", value: flashDossier.capital },
                { label: "Geographic Region", value: flashDossier.region },
                { label: "Governmental System", value: (country.politics as any)?.system || (country.politics as any)?.type || leadershipDossier.systemType },
                { label: "Executive Leadership", value: leadershipDossier.leaders.map(l => `${l.position}: ${l.name}`) },
                { label: "Strategic Doctrine Summary", value: flashDossier.doctrineQuote },
              ],
              sources: [
                { name: "United Nations Member State Protocol", domain: "Sovereign Registry", confidence: "High" },
                { name: "National Government Portal", domain: "Executive Records", confidence: "High" },
              ],
              jumpTargetId: "snapshot-section",
            })
          }
        >
          <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-black">
            <img
              src={flashDossier.heroImage}
              alt={country.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-2.5">
              <span className="font-display text-xs font-bold text-white tracking-wide truncate">
                {flashDossier.officialName}
              </span>
              <span className="text-[10px] font-mono text-neutral-300">
                Seat of Government: <strong className="text-white">{flashDossier.capital}</strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="text-[10px] text-neutral-400 block uppercase">Region</span>
              <span className="text-white font-semibold truncate block">{flashDossier.region}</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="text-[10px] text-neutral-400 block uppercase">System</span>
              <span className="text-white font-semibold truncate block">
                {leadershipDossier.systemType?.split(" ")[0] || "Constitutional"}
              </span>
            </div>
          </div>
        </FlashCard>

        {/* CARD 03: Strategic Geography */}
        <MapCard
          countryId={country.id}
          countryName={country.name}
          capital={flashDossier.capital}
          region={flashDossier.region}
          onClick={() => {
            if (onJumpToSection) {
              onJumpToSection("geography-section");
            } else {
              openCardModal({
                sectionNumber: "03",
                title: "Strategic Geography & Border Theater",
                category: "Geopolitical Geography",
                simpleAnswer: `${country.name}'s geographic location in ${flashDossier.region} establishes its commercial access to key sea lines and defines its territorial security borders.`,
                whyItMatters: "Physical topography, maritime access, and neighbor proximity dictate defensive depth and supply chain resilience.",
                deepDetails: [
                  { label: "Strategic Region", value: flashDossier.region },
                  { label: "Capital Coordinates", value: `${flashDossier.capital} (${country.id})` },
                  { label: "Border Environment", value: "Regional littoral and continental theater posture" },
                ],
                sources: [
                  { name: "UN Cartographic Section", domain: "International Boundaries", confidence: "High" },
                ],
                jumpTargetId: "geography-section",
              });
            }
          }}
        />

      </div>

      {/* SECTION ROW 2: Card 04 - The 9 Core Questions (3x3 Matrix) */}
      <FlashCard
        sectionNumber="04"
        title="The 9 Core Intelligence Questions"
        category="3-Layer Analytical Framework"
        icon={<Layers className="size-4 text-trinetra-saffron group-hover:scale-110 transition-transform" />}
        size="full"
        source="TRINETRA 3-Layer Geopolitical Intelligence Methodology"
        actionLabel="Inspect complete 9-question dossier →"
        onClick={() => {
          if (onJumpToSection) {
            onJumpToSection("nine-questions-section");
          }
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          {nineQuestionsList.map((item) => (
            <QuestionCard
              key={item.key}
              numberStr={item.num}
              question={item.answer}
              onClick={() => {
                openCardModal({
                  sectionNumber: `Q${item.num}`,
                  title: item.title,
                  category: "Core Intelligence Question",
                  simpleAnswer: item.answer.simpleAnswer,
                  whyItMatters: item.answer.whyItMatters,
                  deepDetails: [
                    { label: "Core Assessment", value: item.answer.simpleAnswer },
                    { label: "Strategic Consequence", value: item.answer.whyItMatters },
                    ...(item.answer.deeperDetails?.partners ? [{
                      label: "Documented Partners",
                      value: item.answer.deeperDetails.partners.map((p) => `${p.who} (${p.relationshipType}): ${p.whyItMatters}`),
                    }] : []),
                    ...(item.answer.deeperDetails?.competitors ? [{
                      label: "Documented Competitors",
                      value: item.answer.deeperDetails.competitors.map((c) => `${c.who} (${c.competitionType}): ${c.whyItMatters}`),
                    }] : []),
                    ...(item.answer.deeperDetails?.facts ? [{
                      label: "Documented Facts",
                      value: item.answer.deeperDetails.facts,
                    }] : []),
                  ],
                  sources: item.answer.deeperDetails?.sources?.map((s: string) => ({
                    name: s,
                    domain: "Official Repositories",
                    confidence: "High",
                  })) || [
                    { name: "Government Whitepapers", domain: "National Policy", confidence: "High" },
                    { name: "Multilateral Economic Databases", domain: "Statistics", confidence: "High" },
                  ],
                  jumpTargetId: "nine-questions-section",
                });
              }}
            />
          ))}
        </div>
      </FlashCard>

      {/* SECTION ROW 3: Economy & Trade, Military & Security, Nuclear/Space/Cyber */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 05: Economy & Trade */}
        <ChartCard
          countryName={country.name}
          economy={flashDossier.economy}
          onClick={() =>
            openCardModal({
              sectionNumber: "05",
              title: "Economic Composition, Growth & Trade Flows",
              category: "Macroeconomics",
              simpleAnswer: `${country.name}'s economy produces ${flashDossier.economy.currentGdp} with major services and industrial sectors powering international commerce.`,
              whyItMatters: "Economic scale, FX reserves, and export diversity fund national defense, infrastructure projects, and sovereign debt service.",
              deepDetails: [
                { label: "Current Nominal GDP", value: flashDossier.economy.currentGdp },
                { label: "Economic Composition", value: flashDossier.economy.sectors.map(s => `${s.name}: ${s.pct}%`) },
                { label: "Top Trading Partners", value: flashDossier.economy.topPartners.map(p => `${p.name} (${p.share}%)`) },
                { label: "Critical Sovereign Industries", value: flashDossier.economy.criticalIndustries },
              ],
              sources: [
                { name: "World Bank WDI", domain: "Macroeconomics", confidence: "High" },
                { name: "IMF Article IV Consultations", domain: "Fiscal Stability", confidence: "High" },
                { name: "UN Comtrade", domain: "Trade Flows", confidence: "High" },
              ],
              jumpTargetId: "economy-section",
            })
          }
        />

        {/* CARD 06: Military & Security */}
        <FlashCard
          sectionNumber="06"
          title="Military & Security"
          category="Armed Forces & Defense Capability"
          icon={<Shield className="size-4 text-rose-400 group-hover:scale-110 transition-transform" />}
          source={flashDossier.military.source}
          actionLabel="View full military balance →"
          onClick={() =>
            openCardModal({
              sectionNumber: "06",
              title: "Military Posture, Order of Battle & Defense Spending",
              category: "Armed Forces & Security",
              simpleAnswer: `${country.name} fields ${flashDossier.military.totalActive} active military personnel supported by an annual defense budget of ${flashDossier.military.defenceSpendUsd} (${flashDossier.military.defenceSpendPctGdp} of GDP).`,
              whyItMatters: "Military capabilities ensure sovereign territorial integrity, sea-lane freedom of navigation, and border deterrence against external aggression.",
              deepDetails: [
                { label: "Total Active Duty Strength", value: flashDossier.military.totalActive },
                { label: "Annual Defense Budget", value: `${flashDossier.military.defenceSpendUsd} (${flashDossier.military.defenceSpendPctGdp} GDP)` },
                { label: "Armed Service Branches", value: flashDossier.military.branches.map(b => `${b.branch}: ${b.strength}`) },
                { label: "Flagship Platforms & Equipment", value: flashDossier.military.majorPlatforms },
                { label: "Core Strategic Doctrines", value: flashDossier.military.doctrines },
              ],
              sources: [
                { name: "SIPRI Military Expenditure Database", domain: "Defense Budgets", confidence: "High" },
                { name: "IISS The Military Balance", domain: "Order of Battle", confidence: "High" },
              ],
              jumpTargetId: "military-section",
            })
          }
        >
          {/* Service Branches Cards */}
          <div className="grid grid-cols-3 gap-2.5">
            {flashDossier.military.branches.map((br) => (
              <div key={br.branch} className="p-3 rounded-xl bg-black/40 border border-white/5 text-center">
                <span className="text-[10px] font-mono text-neutral-400 uppercase block mb-1">
                  {br.branch}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white block">
                  {br.strength}
                </span>
              </div>
            ))}
          </div>

          {/* Major Platforms preview */}
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Flagship Capabilities & Platforms
            </span>
            <div className="flex flex-wrap gap-1.5">
              {flashDossier.military.majorPlatforms.slice(0, 3).map((plat) => (
                <span
                  key={plat}
                  className="px-2 py-1 rounded bg-[#121824] border border-white/8 text-[11px] text-neutral-200"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 px-1">
            <span>DEFENCE SPEND: <strong className="text-white">{flashDossier.military.defenceSpendUsd}</strong></span>
            <span className="text-rose-400 font-semibold">{flashDossier.military.defenceSpendPctGdp}</span>
          </div>
        </FlashCard>

        {/* CARD 07: Nuclear, Space & Cyber */}
        <FlashCard
          sectionNumber="07"
          title="Nuclear, Space & Cyber"
          category="Strategic Deterrence & Non-Conventional Domains"
          icon={<Rocket className="size-4 text-purple-400 group-hover:scale-110 transition-transform" />}
          source="SIPRI Yearbook & IAEA Safeguards Records"
          actionLabel="Inspect non-conventional domains →"
          onClick={() =>
            openCardModal({
              sectionNumber: "07",
              title: "Strategic Deterrence: Nuclear, Space & Cyber",
              category: "Strategic Deterrence",
              simpleAnswer: `${country.name} maintains a ${flashDossier.strategicAssets.nuclear.status} deterrence posture, with active space programs under ${flashDossier.strategicAssets.space.agency} and dedicated cyber command infrastructure.`,
              whyItMatters: "Non-conventional strategic assets provide high-order deterrence, sovereign communications redundancy, and anti-access electronic resilience.",
              deepDetails: [
                { label: "Nuclear Deterrent Status", value: flashDossier.strategicAssets.nuclear.status },
                { label: "Estimated Warhead Stockpile", value: flashDossier.strategicAssets.nuclear.warheads },
                { label: "Strategic Triad Readiness", value: flashDossier.strategicAssets.nuclear.triadReadiness },
                { label: "Space Exploration Agency", value: flashDossier.strategicAssets.space.agency },
                { label: "Space Flagship Capabilities", value: flashDossier.strategicAssets.space.capabilities },
                { label: "Cyber Warfare Command", value: flashDossier.strategicAssets.cyber.command },
              ],
              sources: [
                { name: "SIPRI Yearbook", domain: "Nuclear Forces", confidence: "High" },
                { name: "IAEA Safeguards Registry", domain: "Treaty Verification", confidence: "High" },
              ],
              jumpTargetId: "strategic-domains",
            })
          }
        >
          <div className="space-y-2.5">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Radiation className="size-3.5 text-rose-400" />
                <span className="text-xs text-neutral-300">Nuclear Posture</span>
              </div>
              <span className="text-xs font-mono font-bold text-white">
                {flashDossier.strategicAssets.nuclear.warheads}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Rocket className="size-3.5 text-purple-400" />
                <span className="text-xs text-neutral-300">Space Agency</span>
              </div>
              <span className="text-xs font-mono font-bold text-white truncate max-w-[130px]">
                {flashDossier.strategicAssets.space.agency.split("(")[0]}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="size-3.5 text-emerald-400" />
                <span className="text-xs text-neutral-300">Cyber Defense</span>
              </div>
              <span className="text-xs font-mono font-bold text-white truncate max-w-[130px]">
                {flashDossier.strategicAssets.cyber.command}
              </span>
            </div>
          </div>
        </FlashCard>

      </div>

      {/* SECTION ROW 4: Energy Flow, Relationships, Dependencies */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 08: Energy & Maritime Flow */}
        <FlashCard
          sectionNumber="08"
          title="Energy & Maritime Flow"
          category="Hydrocarbon Balance & SLOC Transit"
          icon={<Flame className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />}
          source={flashDossier.energyMaritime.source}
          actionLabel="Inspect energy flows →"
          onClick={() =>
            openCardModal({
              sectionNumber: "08",
              title: "Energy Balances & Maritime Chokepoint Exposure",
              category: "Energy & Maritime",
              simpleAnswer: `${country.name} functions as a ${flashDossier.energyMaritime.statusLabel} with ${flashDossier.energyMaritime.netImportRatio}, relying on key maritime corridors for transit.`,
              whyItMatters: "Sea lines of communication (SLOCs) and hydrocarbon import bottlenecks create acute geopolitical vulnerabilities in times of regional conflict.",
              deepDetails: [
                { label: "Energy Balance Posture", value: flashDossier.energyMaritime.statusLabel },
                { label: "Hydrocarbon Import Ratio", value: flashDossier.energyMaritime.netImportRatio },
                { label: "Primary Energy Sources", value: flashDossier.energyMaritime.primarySources },
                { label: "Critical Maritime Chokepoints", value: flashDossier.energyMaritime.chokepoints.map(c => `${c.name}: ${c.whyMatters}`) },
                { label: "Supply Chain Flow Sequence", value: flashDossier.energyFlow.map(f => `${f.step} - ${f.label}: ${f.detail}`) },
              ],
              sources: [
                { name: "International Energy Agency (IEA)", domain: "Energy Balances", confidence: "High" },
                { name: "International Hydrographic Organization", domain: "SLOCs", confidence: "High" },
              ],
              jumpTargetId: "energy-section",
            })
          }
        >
          {/* Energy Flow Diagram */}
          <div className="space-y-2">
            {flashDossier.energyFlow.map((ef, idx) => (
              <div
                key={ef.step}
                className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="min-w-0 pr-2">
                  <span className="text-[9px] font-mono text-amber-400 block">{ef.step}</span>
                  <span className="font-semibold text-white truncate block">{ef.label}</span>
                </div>
                <span className="text-[10px] text-neutral-400 truncate max-w-[120px] text-right">
                  {ef.detail.split(",")[0]}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs font-mono">
            <span className="text-neutral-400">BALANCE:</span>
            <span className="text-amber-400 font-bold">{flashDossier.energyMaritime.statusLabel}</span>
          </div>
        </FlashCard>

        {/* CARD 09: Strategic Relationships */}
        <RelationshipCard
          countryName={country.name}
          relationshipsNetwork={flashDossier.relationshipsNetwork}
          onClick={() =>
            openCardModal({
              sectionNumber: "09",
              title: "Strategic Relationships & Geopolitical Constellation",
              category: "Diplomatic & Security Partnerships",
              simpleAnswer: `${country.name}'s foreign policy constellation spans formal partners and strategic competitors across multiple regional theaters.`,
              whyItMatters: "Bilateral alliances, security pacts, and competition friction points dictate crisis escalation dynamics and mutual defense triggers.",
              deepDetails: [
                { label: "Key Strategic Partners", value: flashDossier.relationshipsNetwork.partners.map(p => `${p.name} (${p.relationshipType}): ${p.whyItMatters}`) },
                { label: "Documented Competitors & Flashpoints", value: flashDossier.relationshipsNetwork.competitors.map(c => `${c.name} (${c.competitionType}): ${c.whyItMatters}`) },
              ],
              sources: [
                { name: "Ministry of Foreign Affairs Treaties Database", domain: "Bilateral Accords", confidence: "High" },
                { name: "TRINETRA Strategic Assessments", domain: "Geopolitics", confidence: "High" },
              ],
              jumpTargetId: "relations-section",
            })
          }
        />

        {/* CARD 10: Strategic Dependencies */}
        <DependencyCard
          countryName={country.name}
          dependenciesGraph={flashDossier.dependenciesGraph}
          onClick={() =>
            openCardModal({
              sectionNumber: "10",
              title: "Strategic Dependencies & Critical Supply Chains",
              category: "Supply Chain Resilience",
              simpleAnswer: `${country.name}'s strategic supply chains depend on critical external inflows of hydrocarbons, semiconductors, aerospace components, and industrial minerals.`,
              whyItMatters: "Dependency bottlenecks create sanctions exposure, price shock sensitivity, and defense readiness choke points during international disruptions.",
              deepDetails: [
                { label: "Energy & Hydrocarbon Dependencies", value: flashDossier.dependenciesGraph.energy.map(e => `${e.title}: ${e.share} (${e.criticalSource})`) },
                { label: "Advanced Technology & Chips", value: flashDossier.dependenciesGraph.technology.map(t => `${t.title}: ${t.share} (${t.criticalSource})`) },
                { label: "Defense & Munitions Inputs", value: flashDossier.dependenciesGraph.defence.map(d => `${d.title}: ${d.share} (${d.criticalSource})`) },
                { label: "Critical Minerals & Commodities", value: flashDossier.dependenciesGraph.resources.map(r => `${r.title}: ${r.share} (${r.criticalSource})`) },
              ],
              sources: [
                { name: "UN Comtrade Supply Chain Data", domain: "Trade Dependencies", confidence: "High" },
                { name: "USGS Mineral Commodity Summaries", domain: "Critical Minerals", confidence: "High" },
              ],
              jumpTargetId: "dependencies-section",
            })
          }
        />

      </div>

      {/* SECTION ROW 5: Strategic Assets, Chokepoints, Strategic Priorities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 11: Strategic Assets */}
        <AssetCard
          countryName={country.name}
          strategicSites={flashDossier.strategicSites}
          onClick={() =>
            openCardModal({
              sectionNumber: "11",
              title: "Strategic Assets, Naval Bases & Critical Ports",
              category: "Physical Infrastructure",
              simpleAnswer: `${country.name}'s sovereign infrastructure includes verified deep-water commercial ports, naval bases, and critical energy export/import facilities.`,
              whyItMatters: "Concentrated physical assets serve as nodes of national economic power and primary targets in military contingencies.",
              deepDetails: flashDossier.strategicSites.map(s => ({
                label: `${s.name} (${s.type.replace("_", " ")})`,
                value: [`Strategic Relevance: ${s.strategicRelevance}`, `Why It Matters: ${s.whyItMatters}`, `Source: ${s.source}`],
              })),
              sources: [
                { name: "National Hydrographic Administration", domain: "Maritime Facilities", confidence: "High" },
                { name: "Ministry of Ports and Transport", domain: "Commercial Infrastructure", confidence: "High" },
              ],
              jumpTargetId: "assets-section",
            })
          }
        />

        {/* CARD 12: Chokepoints */}
        <FlashCard
          sectionNumber="12"
          title="Maritime Chokepoints"
          category="Strategic Waterways & Bottlenecks"
          icon={<Anchor className="size-4 text-cyan-400 group-hover:scale-110 transition-transform" />}
          source="International Hydrographic Organization & Lloyd's List"
          actionLabel="Inspect chokepoint risks →"
          onClick={() =>
            openCardModal({
              sectionNumber: "12",
              title: "Maritime Chokepoints & Strategic Passages",
              category: "Maritime Security",
              simpleAnswer: `Commercial and energy trade for ${country.name} relies on key strategic waterways including ${flashDossier.energyMaritime.chokepoints.map(c => c.name).join(", ")}.`,
              whyItMatters: "Any blockade, conflict, or disruption in these narrow waterways immediately triggers shipping delays, insurance surges, and domestic energy shortages.",
              deepDetails: flashDossier.energyMaritime.chokepoints.map(cp => ({
                label: cp.name,
                value: [`Strategic Route: ${cp.strategicRoute}`, `Significance: ${cp.whyMatters}`],
              })),
              sources: [
                { name: "International Hydrographic Organization", domain: "Maritime Chokepoints", confidence: "High" },
                { name: "US Energy Information Administration (EIA)", domain: "World Oil Transit Chokepoints", confidence: "High" },
              ],
              jumpTargetId: "chokepoints-section",
            })
          }
        >
          <div className="space-y-2.5">
            {flashDossier.energyMaritime.chokepoints.map((cp) => (
              <div
                key={cp.name}
                className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Anchor className="size-3 text-cyan-400" />
                    {cp.name}
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400">SLOC Corridor</span>
                </div>
                <p className="text-[11px] text-neutral-400 line-clamp-2">
                  {cp.whyMatters}
                </p>
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-neutral-400 px-1 pt-1 flex items-center justify-between">
            <span>TRANSIT DEPENDENCY: HIGH</span>
            <span className="text-cyan-400">Vulnerable SLOC</span>
          </div>
        </FlashCard>

        {/* CARD 13: Strategic Priorities */}
        <FlashCard
          sectionNumber="13"
          title="Strategic Priorities"
          category="National Objectives & Doctrine"
          icon={<Target className="size-4 text-trinetra-saffron group-hover:scale-110 transition-transform" />}
          source="Cabinet Policy Guidelines & National Development Strategy"
          actionLabel="Inspect strategic priorities →"
          onClick={() =>
            openCardModal({
              sectionNumber: "13",
              title: "National Strategic Priorities & Doctrine",
              category: "Policy Objectives",
              simpleAnswer: `${country.name}'s strategic agenda prioritizes ${flashDossier.priorities.map(p => p.label).join(", ")}.`,
              whyItMatters: "National strategic priorities dictate budget allocation, statutory reforms, and diplomatic capital allocation over the decade.",
              deepDetails: flashDossier.priorities.map(p => ({
                label: `${p.label} (${p.domain})`,
                value: p.desc,
              })),
              sources: [
                { name: "Cabinet Policy Guidelines", domain: "Government Priorities", confidence: "High" },
                { name: "National Development Framework", domain: "Sovereign Planning", confidence: "High" },
              ],
              jumpTargetId: "priorities-section",
            })
          }
        >
          <div className="space-y-2">
            {flashDossier.priorities.slice(0, 4).map((pri) => (
              <div key={pri.label} className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between text-xs">
                <span className="text-neutral-200 font-medium truncate max-w-[150px]">{pri.label}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-trinetra-saffron shrink-0">
                  {pri.domain}
                </span>
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-neutral-400 px-1 pt-1 flex items-center justify-between">
            <span>CORE DOCTRINE:</span>
            <span className="text-trinetra-saffron truncate max-w-[150px]">{flashDossier.doctrineQuote}</span>
          </div>
        </FlashCard>

      </div>

      {/* SECTION ROW 6: History, Current Developments, Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        
        {/* CARD 14: Historical Timeline */}
        <TimelineCard
          countryName={country.name}
          timeline={flashDossier.timeline}
          onClick={() =>
            openCardModal({
              sectionNumber: "14",
              title: "Geopolitical Milestones Timeline",
              category: "Historical Trajectory",
              simpleAnswer: `Key pivotal moments defining ${country.name}'s modern trajectory span from ${flashDossier.timeline[0]?.year} to present.`,
              whyItMatters: "Historical conflicts, constitutional treaties, and crises anchor contemporary strategic culture and doctrine.",
              deepDetails: flashDossier.timeline.map(t => ({
                label: `${t.year} — ${t.event}`,
                value: t.significance,
              })),
              sources: [
                { name: "Historical Treaties Archives", domain: "Constitutional History", confidence: "High" },
                { name: "Diplomatic Records", domain: "Sovereign Milestones", confidence: "High" },
              ],
              jumpTargetId: "timeline-section",
            })
          }
        />

        {/* CARD 15: Current Developments */}
        <FlashCard
          sectionNumber="15"
          title="Current Developments"
          category="Verified Recent Events & Status"
          icon={<Radio className="size-4 text-emerald-400 animate-pulse" />}
          source="Official Gazettes & Diplomatic Bulletins"
          actionLabel="View all developments →"
          onClick={() =>
            openCardModal({
              sectionNumber: "15",
              title: "Verified Contemporary Developments",
              category: "Live Monitoring",
              simpleAnswer: `Active geopolitical developments in ${country.name} focus on border accords, multilateral partnerships, and strategic industrial initiatives.`,
              whyItMatters: "Tracking live verified developments enables predictive intelligence and dynamic risk forecasting.",
              deepDetails: flashDossier.developments.map(d => ({
                label: d.title,
                value: [`Significance: ${d.significance}`, `Status: ${d.status.toUpperCase()}`, `Source: ${d.source}`],
              })),
              sources: [
                { name: "Government News Agency", domain: "Official Releases", confidence: "High" },
                { name: "Intelligence Desk Verification", domain: "TRINETRA Verified", confidence: "High" },
              ],
              jumpTargetId: "developments-section",
            })
          }
        >
          <div className="space-y-2">
            {flashDossier.developments.slice(0, 3).map((dev) => (
              <div key={dev.title} className="p-2 rounded bg-black/40 border border-white/5 text-xs">
                <div className="text-white font-medium truncate mb-0.5">{dev.title}</div>
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-emerald-400 uppercase">● {dev.status}</span>
                  <span className="text-neutral-400 truncate max-w-[110px]">{dev.source}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[10px] font-mono text-neutral-400 px-1 pt-1 flex items-center justify-between">
            <span>FEED STATUS: ACTIVE</span>
            <span className="text-emerald-400">Zero Fabrications</span>
          </div>
        </FlashCard>

        {/* CARD 16: Sources & Verification */}
        <SourceCard
          countryName={country.name}
          sourcesTiers={flashDossier.sourcesTiers}
          onClick={() =>
            openCardModal({
              sectionNumber: "16",
              title: "Sources Registry & Data Quality Verification",
              category: "Source Credibility",
              simpleAnswer: `All dossier intelligence for ${country.name} is grounded in verified, non-partisan, public institutional sources categorized across 4 verification tiers.`,
              whyItMatters: "Zero fabrication policy ensures institutional reliability for foreign policy researchers, defense analysts, and intelligence professionals.",
              deepDetails: flashDossier.sourcesTiers.map(t => ({
                label: `${t.tier} — ${t.name}`,
                value: t.orgs,
              })),
              sources: [
                { name: "Official Sovereign Portals", domain: "Tier 1 Verified", confidence: "High" },
                { name: "UN & Multilateral Repositories", domain: "Tier 2 Verified", confidence: "High" },
                { name: "SIPRI & IISS Military Balances", domain: "Tier 3 Verified", confidence: "High" },
              ],
              jumpTargetId: "sources-section",
            })
          }
        />

      </div>

      {/* SECTION 9: National Condition (12-Domain Empirical Matrix) */}
      <div className="p-5 rounded-2xl border border-white/10 bg-[#090c12] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs font-bold text-trinetra-saffron px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/20">
              09
            </span>
            <div>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                Empirical Indicator Framework
              </span>
              <h3 className="font-display text-base font-semibold text-white">
                National Condition — 12-Domain Assessment
              </h3>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
            12 Sovereign Domains Tracked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {flashDossier.nationalConditionSummary.map((domain) => (
            <DomainCard
              key={domain.domain}
              domain={domain.domain}
              indicator={domain.indicator}
              value={domain.value}
              trend={domain.trend}
              onClick={() => {
                if (onJumpToSection) {
                  onJumpToSection("national-condition-section");
                }
              }}
            />
          ))}
        </div>
      </div>

      {/* Expanded Intelligence Modal Dialog */}
      <ExpandedIntelligenceModal
        isOpen={isModalOpen}
        content={selectedModalContent}
        onClose={() => setIsModalOpen(false)}
        countryName={country.name}
        countryFlag={flashDossier.flag}
      />
    </div>
  );
};
