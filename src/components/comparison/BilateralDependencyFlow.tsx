import React, { useState } from "react";
import {
  ArrowLeftRight,
  TrendingUp,
  Cpu,
  Flame,
  FileText,
  DollarSign,
  AlertTriangle,
  Layers,
  ChevronRight,
} from "lucide-react";
import type { RivalryAnalysis } from "../../types";

interface BilateralDependencyFlowProps {
  analysis: RivalryAnalysis;
}

export const BilateralDependencyFlow: React.FC<BilateralDependencyFlowProps> = ({ analysis }) => {
  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  const [activeTab, setActiveTab] = useState<"TRADE" | "TECH_MINERALS" | "TREATIES">("TRADE");

  // Determine realistic trade and interaction facts from analysis or country profiles
  const tradeVolA = analysis.economic?.trade_balance_usd_billions?.country_a?.value ?? "Active";
  const tradeVolB = analysis.economic?.trade_balance_usd_billions?.country_b?.value ?? "Active";

  return (
    <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              04 // Bilateral Interaction
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Interdependence, Mutual Exposure & Bilateral Flows
            </span>
          </div>
          <h3 className="font-display text-2xl text-white font-medium flex items-center gap-3">
            <ArrowLeftRight className="size-6 text-trinetra-saffron" />
            Bilateral Dependency Flow: {nameA} ↔ {nameB}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-3xl font-light">
            Mapping direct economic exchanges, commodity interdependencies, critical technology inputs, and bilateral treaties between both sovereign actors.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 bg-[#0c0f16] border border-neutral-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("TRADE")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              activeTab === "TRADE"
                ? "bg-trinetra-saffron text-black font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Trade & Imports
          </button>
          <button
            onClick={() => setActiveTab("TECH_MINERALS")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              activeTab === "TECH_MINERALS"
                ? "bg-trinetra-saffron text-black font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Tech & Minerals
          </button>
          <button
            onClick={() => setActiveTab("TREATIES")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
              activeTab === "TREATIES"
                ? "bg-trinetra-saffron text-black font-bold"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Treaties & Accords
          </button>
        </div>
      </div>

      {/* Tab 1: Trade & Import flows */}
      {activeTab === "TRADE" && (
        <div className="space-y-6">
          {/* Visual 2-Way Flow Exchange Container */}
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
            {/* Country A Exports to B */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#0c0f16] border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron uppercase">
                  {nameA} ({codeA}) Exports to {nameB}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-neutral-800 text-neutral-400">
                  OUTBOUND FLOW
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Key commodities exported include raw materials, refined petroleum products, agricultural produce, generic pharmaceuticals, software services, and intermediate industrial components.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/5">
                <span>Direct Trade Linkage:</span>
                <span className="text-white font-bold">Active Commercial Corridors</span>
              </div>
            </div>

            {/* Central Transfer Vector Indicator */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center gap-2 py-2">
              <div className="hidden lg:flex items-center justify-center size-10 rounded-full bg-neutral-900 border border-neutral-700 text-trinetra-saffron">
                <ArrowLeftRight className="size-5" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 text-center">
                BILATERAL VOLUME
              </span>
            </div>

            {/* Country B Exports to A */}
            <div className="lg:col-span-5 p-5 rounded-xl bg-[#0c0f16] border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between border-b border-white/5 pb-2">
                <span className="font-mono text-xs font-bold text-sky-400 uppercase">
                  {nameB} ({codeB}) Exports to {nameA}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-neutral-800 text-neutral-400">
                  INBOUND FLOW
                </span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Key imports include electrical machinery, telecommunications equipment, active pharmaceutical ingredients (APIs), solar modules, consumer electronics, and heavy industrial machinery.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/5">
                <span>Supply Chain Position:</span>
                <span className="text-white font-bold">High Value-Add Manufacturing</span>
              </div>
            </div>
          </div>

          {/* Trade Asymmetry Assessment Note */}
          <div className="p-4 rounded-xl bg-black/40 border border-neutral-800/80 flex items-start gap-3 text-xs">
            <AlertTriangle className="size-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-mono text-[10px] uppercase font-bold text-amber-400 tracking-wider block mb-0.5">
                TRADE DEFICIT & INTERDEPENDENCE LEVERAGE
              </span>
              <p className="text-neutral-300 leading-relaxed font-light">
                Trade asymmetries create asymmetric coercion risks. If one party holds near-monopoly positions in critical intermediate manufacturing inputs (such as precursor chemicals or printed circuit boards), supply chain weaponization during diplomatic standoffs carries high economic disruption costs for the recipient state.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Technology & Critical Minerals */}
      {activeTab === "TECH_MINERALS" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-[#0c0f16] border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <Cpu className="size-4 text-trinetra-saffron" />
              <h4 className="font-display text-sm font-semibold text-white">
                Critical Technology Dependencies
              </h4>
            </div>
            <ul className="space-y-2 text-xs font-light text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-trinetra-saffron">•</span>
                <span><strong>Semiconductor supply chain:</strong> Reliance on global fabrication foundries, lithography tooling, and outsourced packaging ecosystems.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-trinetra-saffron">•</span>
                <span><strong>Telecom & 5G Infrastructure:</strong> Strict sovereign screening of telecommunications hardware and network core components to protect national security.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-trinetra-saffron">•</span>
                <span><strong>Cloud & Data Sovereignty:</strong> Enacted data localization frameworks restricting cross-border transfer of biometric and sovereign financial records.</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#0c0f16] border border-neutral-800 space-y-3">
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <Flame className="size-4 text-sky-400" />
              <h4 className="font-display text-sm font-semibold text-white">
                Critical Minerals & Refining Control
              </h4>
            </div>
            <ul className="space-y-2 text-xs font-light text-neutral-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400">•</span>
                <span><strong>Rare Earth Elements (REEs):</strong> Asymmetric vulnerability to export controls on neodymium, dysprosium, and permanent magnets required for electric motors and defense avionics.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">•</span>
                <span><strong>Lithium & Battery Chemistries:</strong> Mutual competition to secure direct concessions in the Lithium Triangle (South America) and Australian spodumene reserves.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400">•</span>
                <span><strong>Processing Chokepoints:</strong> Downstream refining and chemical conversion of battery-grade minerals remain heavily centralized in regional Asian hubs.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab 3: Treaties & Accords */}
      {activeTab === "TREATIES" && (
        <div className="p-5 rounded-xl bg-[#0c0f16] border border-neutral-800 space-y-4">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="size-4 text-emerald-400" />
              <h4 className="font-display text-sm font-semibold text-white">
                Bilateral Treaties, Protocols & Confidence Building Measures
              </h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-neutral-800 text-neutral-400">
              DIPLOMATIC ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                Confidence Building & Border Protocols
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Historic peace and tranquility accords establish protocols on troop deployments along contested sectors, flag meetings, hotlines between operational commanders, and pre-notification of military exercises.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-sky-400 font-bold block">
                Multilateral Plurilateral Engagement
              </span>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Shared membership in multilateral bodies (e.g., BRICS, Shanghai Cooperation Organisation, Asian Infrastructure Investment Bank, G20) provides diplomatic forums for head-of-state bilateral sidelines.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
