import React from "react";
import {
  Landmark,
  Activity,
  Compass,
  DollarSign,
  Shield,
  Radiation,
  Flame,
  TrendingUp,
  Globe2,
  Users2,
  Building2,
  Swords,
  Target,
  History,
  Radio,
  FileCheck2,
  ChevronRight,
  ArrowDown,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import type { CountryFlashCardDossier } from "../../data/countryFlashCardData";

interface IntelligenceModuleBoardProps {
  country: Country;
  deepProfile: CountryDeepProfile;
  flashDossier: CountryFlashCardDossier;
  onExploreModule: (moduleId: string) => void;
}

interface ModuleBoardItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon: any;
  indicators: { label: string; value: string }[];
  accentColor: string;
}

export const IntelligenceModuleBoard: React.FC<IntelligenceModuleBoardProps> = ({
  country,
  deepProfile,
  flashDossier,
  onExploreModule,
}) => {
  const isNuclear = country.nuclear?.weapons_state || deepProfile.nuclear?.status?.toLowerCase().includes("weapon");

  const modules: ModuleBoardItem[] = [
    {
      id: "module-01-government",
      number: "01",
      title: "Government & Leadership",
      category: "Constitutional Executive",
      description: "Heads of state and government, constitutional branches, ruling coalitions, and institutional stability.",
      icon: Landmark,
      indicators: [
        { label: "Head of State", value: deepProfile.leadership?.headOfState?.name || "Documented" },
        { label: "System", value: deepProfile.leadership?.systemType?.split(" ")[0] || "Constitutional" },
        { label: "Ruling Party", value: deepProfile.leadership?.governingParty?.split("(")[0]?.trim() || "National Govt" },
      ],
      accentColor: "text-amber-400",
    },
    {
      id: "module-02-condition",
      number: "02",
      title: "National Condition",
      category: "Empirical Baseline",
      description: "12-domain statistical baseline spanning demography, healthcare, education, human capital, and resources.",
      icon: Activity,
      indicators: [
        { label: "Population", value: flashDossier.topMetrics.find(m => m.id === "pop")?.value || "Documented" },
        { label: "Urbanization", value: deepProfile.nationalProfile?.demography[1]?.value || "40%" },
        { label: "Median Age", value: deepProfile.nationalProfile?.humanCapital[0]?.value || "28.7 yrs" },
      ],
      accentColor: "text-orange-400",
    },
    {
      id: "module-03-geography",
      number: "03",
      title: "Strategic Geography",
      category: "Territorial & Maritime",
      description: "Physical frontiers, maritime boundaries, defensive depth, and strategic maritime chokepoints with live GIS.",
      icon: Compass,
      indicators: [
        { label: "Region", value: flashDossier.region },
        { label: "Coastline", value: flashDossier.topMetrics.find(m => m.id === "coast")?.value || "Strategic" },
        { label: "Border Depth", value: "Multi-Theater" },
      ],
      accentColor: "text-sky-400",
    },
    {
      id: "module-04-economy",
      number: "04",
      title: "Economic System",
      category: "Domestic Production",
      description: "Macroeconomic output, services/manufacturing breakdown, sovereign debt, currency, and fiscal resilience.",
      icon: DollarSign,
      indicators: [
        { label: "Nominal GDP", value: flashDossier.topMetrics.find(m => m.id === "gdp")?.value || "$-- B" },
        { label: "GDP Growth", value: flashDossier.topMetrics.find(m => m.id === "growth")?.value || "N/A" },
        { label: "FX Reserves", value: deepProfile.economyStructure?.foreignReservesUsd || "$-- B" },
      ],
      accentColor: "text-emerald-400",
    },
    {
      id: "module-05-defence",
      number: "05",
      title: "Defence & Security",
      category: "Military Capabilities",
      description: "Standing armed forces, service branches, flagship platforms, domestic defense production, and budget.",
      icon: Shield,
      indicators: [
        { label: "Active Forces", value: flashDossier.topMetrics.find(m => m.id === "forces")?.value || "Regular" },
        { label: "Budget", value: flashDossier.topMetrics.find(m => m.id === "budget")?.value || "$-- B" },
        { label: "Reserves", value: deepProfile.militarySecurity?.reservePersonnel || "Reserve Base" },
      ],
      accentColor: "text-rose-400",
    },
    {
      id: "module-06-strategic-domains",
      number: "06",
      title: "Nuclear / Space / Cyber",
      category: "Strategic Deterrence",
      description: "Nuclear delivery triad & posture, sovereign orbital launch assets, and defensive/offensive cyberspace command.",
      icon: Radiation,
      indicators: [
        { label: "Nuclear Status", value: isNuclear ? "Declared Deterrent" : "Non-Nuclear State" },
        { label: "Space Agency", value: deepProfile.space?.agency?.split("(")[0]?.trim() || "National Org" },
        { label: "Cyber Command", value: deepProfile.cyber?.primaryAgencies?.[0]?.split("(")[0]?.trim() || "State Command" },
      ],
      accentColor: "text-purple-400",
    },
    {
      id: "module-07-energy",
      number: "07",
      title: "Energy & Dependencies",
      category: "Resource Vectors",
      description: "End-to-end hydrocarbon flows, supplier origins, maritime transit routes, refineries, and dependency chains.",
      icon: Flame,
      indicators: [
        { label: "Oil Dependence", value: flashDossier.topMetrics.find(m => m.id === "energy")?.value || "Documented" },
        { label: "Primary Route", value: flashDossier.energyMaritime?.chokepoints[0]?.name || "Maritime SLOCs" },
        { label: "Clean Energy", value: "Transitioning" },
      ],
      accentColor: "text-amber-500",
    },
    {
      id: "module-08-trade",
      number: "08",
      title: "Trade & Geo-Economics",
      category: "External Commerce",
      description: "Merchandise exports and imports, bilateral balance, key commodity flows, and external economic corridors.",
      icon: TrendingUp,
      indicators: [
        { label: "Total Exports", value: deepProfile.tradeFlows?.totalExportsUsd || "$-- B" },
        { label: "Top Partner", value: deepProfile.tradeFlows?.topExportPartners?.[0]?.country || "Global Markets" },
        { label: "Trade Balance", value: deepProfile.tradeFlows?.tradeBalanceUsd || "$-- B" },
      ],
      accentColor: "text-teal-400",
    },
    {
      id: "module-09-foreign-relations",
      number: "09",
      title: "Foreign Relations",
      category: "Bilateral Statecraft",
      description: "Bilateral ties, strategic partnership levels, defense pacts, commercial links, and documented friction points.",
      icon: Globe2,
      indicators: [
        { label: "Key Partners", value: `${flashDossier.relationshipsNetwork.partners.length} Documented` },
        { label: "Strategic Posture", value: "Multi-Alignment" },
        { label: "Diplomatic Depth", value: "Global Embassies" },
      ],
      accentColor: "text-blue-400",
    },
    {
      id: "module-10-multilateral",
      number: "10",
      title: "Multilateral Alignment",
      category: "Institutional Coalitions",
      description: "Memberships across UN, G20, BRICS, SCO, QUAD, regional pacts, minilateral coalitions, and treaties.",
      icon: Users2,
      indicators: [
        { label: "Sovereign Blocs", value: `${deepProfile.geopoliticalPosition?.regionalOrganizations?.length || 6} Blocs` },
        { label: "Global Role", value: "Leading Voice" },
        { label: "UN Mandate", value: "Active Member" },
      ],
      accentColor: "text-indigo-400",
    },
    {
      id: "module-11-assets",
      number: "11",
      title: "Strategic Assets",
      category: "Physical Nodes",
      description: "Critical ports, naval facilities, air bases, space centers, refineries, and strategic transport corridors.",
      icon: Building2,
      indicators: [
        { label: "Strategic Sites", value: `${flashDossier.strategicSites.length} Catalogued` },
        { label: "Major Ports", value: `${flashDossier.strategicSites.filter(s => s.type.includes("PORT") || s.type.includes("NAVAL")).length} Hubs` },
        { label: "Energy Centers", value: `${flashDossier.strategicSites.filter(s => s.type.includes("ENERGY") || s.type.includes("REFINERY")).length} Hubs` },
      ],
      accentColor: "text-cyan-400",
    },
    {
      id: "module-12-friction",
      number: "12",
      title: "Geopolitical Friction",
      category: "Contestation & Flashpoints",
      description: "Territorial disputes, border standoffs, systemic great-power competition, sanctions, and flashpoint monitors.",
      icon: Swords,
      indicators: [
        { label: "Active Rivals", value: `${deepProfile.competitions?.length || 1} Documented` },
        { label: "Primary Flashpoint", value: deepProfile.competitions?.[0]?.domains?.[0]?.flashpoints?.[0] || "Border Frontier" },
        { label: "Readiness State", value: "High Posture" },
      ],
      accentColor: "text-red-400",
    },
    {
      id: "module-13-priorities",
      number: "13",
      title: "Strategic Priorities",
      category: "Grand Strategy",
      description: "National objectives, security mandates, economic expansion, and technology sovereignty policy directives.",
      icon: Target,
      indicators: [
        { label: "Core Priorities", value: `${deepProfile.priorities?.length || 5} Directives` },
        { label: "Defense Mandate", value: "Modernization" },
        { label: "Economic Goal", value: "Industrial Growth" },
      ],
      accentColor: "text-trinetra-saffron",
    },
    {
      id: "module-14-history",
      number: "14",
      title: "History",
      category: "Milestones & Turning Points",
      description: "Historical timeline of conflicts, constitutional transformations, treaties, and geopolitical inflection points.",
      icon: History,
      indicators: [
        { label: "Timeline Scope", value: "Modern Era" },
        { label: "Key Turning Point", value: flashDossier.timeline[0]?.year || "Foundational" },
        { label: "Events Catalogued", value: `${flashDossier.timeline.length}+ Milestones` },
      ],
      accentColor: "text-neutral-300",
    },
    {
      id: "module-15-developments",
      number: "15",
      title: "Current Developments",
      category: "Verified Events",
      description: "Recent verified actions, bilateral summits, infrastructure milestones, and defense procurement approvals.",
      icon: Radio,
      indicators: [
        { label: "Recent Events", value: `${flashDossier.developments.length} Tracked` },
        { label: "Freshness", value: "Active Audit" },
        { label: "Status", value: "Verified Sourced" },
      ],
      accentColor: "text-emerald-400",
    },
    {
      id: "module-16-sources",
      number: "16",
      title: "Sources & Verification",
      category: "Integrity & Provenance",
      description: "Four-tier source provenance registry, institutional certifications, and citation confidence audit trails.",
      icon: FileCheck2,
      indicators: [
        { label: "Tiers Catalogued", value: "4 Sovereign Tiers" },
        { label: "Primary Sources", value: "Ministries & UN" },
        { label: "Audit State", value: "Certified" },
      ],
      accentColor: "text-emerald-500",
    },
  ];

  return (
    <section id="module-directory-board" className="mb-14 scroll-mt-24" aria-label="16 Canonical Intelligence Modules">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold tracking-wider uppercase">
              Standard Architecture
            </span>
            <span className="text-xs font-mono text-neutral-400">
              16 Canonical Intelligence Modules
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span>Intelligence Module Board</span>
            <span className="text-neutral-500 font-normal text-lg">· Complete Sovereign Dossier</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl">
            Modular intelligence board previewing all 16 canonical analytical sections. Click any module to jump directly to its complete interactive dossier.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-xs font-mono text-neutral-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
            16 Canonical Homes
          </span>
        </div>
      </div>

      {/* 4x4 Responsive Module Board Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {modules.map((mod) => {
          const IconComponent = mod.icon;

          return (
            <div
              key={mod.id}
              className="group relative rounded-xl border border-white/10 bg-[#080a0f] hover:bg-[#0d121b] hover:border-trinetra-saffron/40 p-4 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Module Number & Category */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-trinetra-saffron px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/25">
                      {mod.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider truncate">
                      {mod.category}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-md bg-black/50 border border-white/5 group-hover:scale-110 transition-transform">
                    <IconComponent className={`size-3.5 ${mod.accentColor}`} />
                  </div>
                </div>

                {/* Module Title */}
                <h3 className="font-display text-sm sm:text-base font-bold text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2 mb-3 font-sans">
                  {mod.description}
                </p>

                {/* 2-3 Preview Indicators */}
                <div className="space-y-1 py-2 px-2.5 rounded-lg bg-black/40 border border-white/5 mb-3">
                  {mod.indicators.map((ind, iIdx) => (
                    <div key={iIdx} className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-neutral-400 truncate max-w-[55%]">{ind.label}:</span>
                      <span className="text-neutral-200 font-medium truncate max-w-[45%] text-right">{ind.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore Button */}
              <button
                type="button"
                onClick={() => onExploreModule(mod.id)}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-trinetra-saffron hover:text-black text-neutral-300 font-mono text-xs font-semibold border border-white/10 hover:border-trinetra-saffron transition-all cursor-pointer"
              >
                <span>Explore Module {mod.number}</span>
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
