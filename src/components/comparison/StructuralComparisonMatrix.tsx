import React from "react";
import {
  Landmark,
  TrendingUp,
  Shield,
  Globe2,
  Cpu,
  Flame,
  Scale,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import type { RivalryAnalysis } from "../../types";
import { getCountryDeepProfile } from "../../data/countryDeepProfileData";

interface StructuralComparisonMatrixProps {
  analysis: RivalryAnalysis;
}

interface CapabilityDomain {
  id: string;
  title: string;
  icon: any;
  realityA: string;
  realityB: string;
  keyAsymmetry: string;
  strategicImplication: string;
}

export const StructuralComparisonMatrix: React.FC<StructuralComparisonMatrixProps> = ({
  analysis,
}) => {
  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  const deepA = getCountryDeepProfile(codeA, nameA, analysis.country_a_profile);
  const deepB = getCountryDeepProfile(codeB, nameB, analysis.country_b_profile);

  // Extract or synthesize structural domains from real data
  const domains: CapabilityDomain[] = [
    {
      id: "governance",
      title: "Governance Model & Decision Velocity",
      icon: Landmark,
      realityA: `${deepA.leadership.headOfState?.title || "Constitutional Head"} led structure; constitutional framework balancing executive decision-making with institutional oversight.`,
      realityB: `${deepB.leadership.headOfState?.title || "Constitutional Head"} led authority; governance apparatus optimized for strategic state mobilization and policy continuity.`,
      keyAsymmetry: `Institutional consensus-building vs centralized strategic directive speed.`,
      strategicImplication: `In prolonged crises, centralized systems execute rapid resource reallocation, whereas democratic consensus frameworks demonstrate superior institutional resilience and international legitimacy.`,
    },
    {
      id: "economy",
      title: "Economic Depth & Industrial Scale",
      icon: TrendingUp,
      realityA: `Nominal GDP: $${analysis.economic?.gdp_usd_billions?.country_a?.value || "N/A"}B. Growth rate: ${analysis.country_a_profile?.economy?.gdp_growth_rate || "Moderate"}%. Industrial foundation anchored in domestic consumption and services.`,
      realityB: `Nominal GDP: $${analysis.economic?.gdp_usd_billions?.country_b?.value || "N/A"}B. Growth rate: ${analysis.country_b_profile?.economy?.gdp_growth_rate || "Moderate"}%. Export manufacturing ecosystem with deep sovereign balance sheets.`,
      keyAsymmetry: `Gross scale disparity in industrial manufacturing vs services and demographic workforce expansion.`,
      strategicImplication: `Industrial capacity directly limits wartime replenishment and technological scaling under unilateral sanctions regimes.`,
    },
    {
      id: "defense",
      title: "Defense Posture & Power Projection",
      icon: Shield,
      realityA: `Defense expenditure: $${analysis.military?.defense_budget_usd_billions?.country_a?.value || "N/A"}B. Active personnel: ${analysis.military?.active_military_personnel?.country_a?.value || "Significant"}. Doctrinal posture: ${analysis.country_a_profile?.strategic_priorities?.[0] || "Territorial deterrence"}.`,
      realityB: `Defense expenditure: $${analysis.military?.defense_budget_usd_billions?.country_b?.value || "N/A"}B. Active personnel: ${analysis.military?.active_military_personnel?.country_b?.value || "Significant"}. Doctrinal posture: ${analysis.country_b_profile?.strategic_priorities?.[0] || "Anti-Access/Area Denial (A2/AD)"}.`,
      keyAsymmetry: `Regional continental deterrence vs maritime blue-water power projection capabilities.`,
      strategicImplication: `Determines which actor can sustain expeditionary operations beyond its immediate territorial perimeter without overextending supply chains.`,
    },
    {
      id: "diplomatic",
      title: "Diplomatic Weight & Multilateral Coalitions",
      icon: Globe2,
      realityA: `Key alignments: ${analysis.country_a_profile?.alliances?.slice(0, 3).join(", ") || "Strategic partnerships and multilateral groupings"}. Strategic autonomy paradigm.`,
      realityB: `Key alignments: ${analysis.country_b_profile?.alliances?.slice(0, 3).join(", ") || "Bilateral treaties and comprehensive partnerships"}. Multipolar alignment builder.`,
      keyAsymmetry: `Bridge-building multi-alignment across Global South vs counter-hegemonic bloc consolidation.`,
      strategicImplication: `Diplomatic leverage dictates coalition-building speed in international forums and access to swing-state sovereign support.`,
    },
    {
      id: "technology",
      title: "Technological Sovereignty & Critical Supply Chains",
      icon: Cpu,
      realityA: `High capability in software architectures, space exploration, and pharmaceuticals; expanding indigenous semiconductor fabrication initiatives.`,
      realityB: `World-leading manufacturing in electronics, telecom equipment, high-speed rail, battery chemistry, and advanced materials.`,
      keyAsymmetry: `Hardware manufacturing concentration vs software talent and global engineering integration.`,
      strategicImplication: `Vulnerability to export controls on advanced semiconductor tooling, critical minerals, and intellectual property transfers.`,
    },
    {
      id: "energy",
      title: "Energy Resilience & Chokepoint Vulnerability",
      icon: Flame,
      realityA: `High reliance on seaborne crude imports primarily via Strait of Hormuz. Expanding domestic renewables and solar capacity.`,
      realityB: `Massive strategic petroleum reserves combined with overland pipeline corridors (Central Asia/Russia) alongside heavy Malacca Strait maritime vulnerability.`,
      keyAsymmetry: `Overland pipeline diversification vs purely seaborne tanker vulnerability.`,
      strategicImplication: `In a maritime blockade scenario, overland conduits provide critical sustainment buffers that seaborne-dependent powers lack.`,
    },
  ];

  return (
    <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
      {/* Section Header */}
      <div className="border-b border-neutral-800 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
            03 // Capability Matrix
          </span>
          <span className="text-neutral-400 text-xs font-mono">
            Systemic Comparison Across 6 Foundational Pillars
          </span>
        </div>
        <h3 className="font-display text-2xl text-white font-medium flex items-center gap-3">
          <Scale className="size-6 text-trinetra-saffron" />
          Structural Comparison Matrix
        </h3>
        <p className="text-xs text-neutral-400 mt-1 max-w-3xl font-light">
          Evaluating structural asymmetries between {nameA} and {nameB} across governance velocity, economic depth, defense posture, diplomatic leverage, technology, and energy resilience.
        </p>
      </div>

      {/* 6 Capability Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {domains.map((dom) => {
          const Icon = dom.icon;

          return (
            <div
              key={dom.id}
              className="rounded-xl border border-neutral-800/90 bg-[#0c0f16] p-5 flex flex-col justify-between hover:border-neutral-700 transition-colors shadow-lg"
            >
              <div>
                {/* Domain Header */}
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-white/5">
                  <div className="p-2 rounded-lg bg-black/60 border border-white/10 text-trinetra-saffron">
                    <Icon className="size-4" />
                  </div>
                  <h4 className="font-display text-base font-semibold text-white">
                    {dom.title}
                  </h4>
                </div>

                {/* Country A vs Country B Realities */}
                <div className="space-y-3 mb-4">
                  {/* Country A Reality */}
                  <div className="p-3 rounded-lg bg-black/40 border-l-2 border-trinetra-saffron">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold uppercase text-trinetra-saffron">
                        {nameA} ({codeA}) Reality
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light">
                      {dom.realityA}
                    </p>
                  </div>

                  {/* Country B Reality */}
                  <div className="p-3 rounded-lg bg-black/40 border-l-2 border-sky-400">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[10px] font-bold uppercase text-sky-400">
                        {nameB} ({codeB}) Reality
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-light">
                      {dom.realityB}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Asymmetry & Strategic Implication */}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="flex items-start gap-2 text-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-amber-400 shrink-0 mt-0.5">
                    KEY ASYMMETRY:
                  </span>
                  <span className="text-neutral-300 font-light">
                    {dom.keyAsymmetry}
                  </span>
                </div>

                <div className="flex items-start gap-2 text-xs">
                  <span className="font-mono text-[10px] uppercase font-bold text-rose-400 shrink-0 mt-0.5">
                    STRATEGIC IMPACT:
                  </span>
                  <span className="text-neutral-400 font-light leading-relaxed">
                    {dom.strategicImplication}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
