import React, { useState } from "react";
import { Flame, GitFork, Droplets, Shield, Cpu, Package, ArrowRight, Layers } from "lucide-react";
import type { Country } from "../../../types";
import { EnergyDependencyFlowVisual } from "../EnergyDependencyFlowVisual";
import DependencyFlowsVisual from "../DependencyFlowsVisual";

interface Module07EnergyDependenciesProps {
  country: Country;
  energy?: any;
}

export const Module07EnergyDependencies: React.FC<Module07EnergyDependenciesProps> = ({
  country,
  energy,
}) => {
  const [activeTab, setActiveTab] = useState<"energyFlows" | "dependencyMatrix">("energyFlows");

  return (
    <section id="module-07-energy" className="mb-14 scroll-mt-24" aria-label="07 Energy and Dependencies">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 07
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Hydrocarbon Corridors, Critical Imports & Strategic Buffers
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Flame className="size-6 text-trinetra-saffron" />
            <span>Energy & Dependencies: {country.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for national energy consumption (oil, gas, coal, renewables), foreign supplier origin flows, maritime tanker choke routes, refining complexes, strategic petroleum reserves, and critical technological and defense supply-chain dependencies.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab("energyFlows")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === "energyFlows"
                ? "bg-trinetra-saffron text-black font-semibold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Droplets className="size-3.5" />
            <span>Hydrocarbon Flows</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("dependencyMatrix")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === "dependencyMatrix"
                ? "bg-trinetra-saffron text-black font-semibold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <GitFork className="size-3.5" />
            <span>Multi-Domain Dependencies</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Energy Supply Chain & Refining Vectors */}
      {activeTab === "energyFlows" && (
        <div>
          <EnergyDependencyFlowVisual
            countryId={country.id}
            countryName={country.name}
            energy={energy}
          />
        </div>
      )}

      {/* Tab 2: Cross-Domain Dependency Graph (Energy, Tech, Defense, Raw Materials) */}
      {activeTab === "dependencyMatrix" && (
        <div>
          <DependencyFlowsVisual country={country} />
        </div>
      )}
    </section>
  );
};
