// TRINETRA AI — Strategic Dependency Intelligence Engine (Sections 6 & 7)
// Visualizes supply chain vulnerabilities, critical resource dependencies, and reverse dependencies.
// Architecture: Country -> Resource -> Supplier -> Route -> Chokepoint -> Infrastructure -> Domestic Consumer

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GitBranch,
  ShieldAlert,
  ArrowRight,
  TrendingDown,
  Globe2,
  Anchor,
  Filter,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import {
  STRATEGIC_DEPENDENCIES_DATA,
  REVERSE_DEPENDENCIES_DATA,
  StrategicDependency,
} from "../data/dependenciesIntelligenceData";

export default function StrategicDependencies() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVulnerability, setSelectedVulnerability] = useState<string>("all");

  const filteredDependencies = STRATEGIC_DEPENDENCIES_DATA.filter((dep) => {
    const matchesCategory = selectedCategory === "all" || dep.category === selectedCategory;
    const matchesVuln = selectedVulnerability === "all" || dep.vulnerabilityLevel === selectedVulnerability;
    return matchesCategory && matchesVuln;
  });

  const categories = [
    { id: "all", label: "All Commodities" },
    { id: "energy_hydrocarbons", label: "Energy & Hydrocarbons" },
    { id: "critical_minerals", label: "Critical Minerals & Rare Earths" },
    { id: "defence_subsystems", label: "Defence Subsystems" },
    { id: "pharmaceuticals_apis", label: "Pharma & Active Ingredients" },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-8 py-10">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <GitBranch className="size-3 text-amber-400" />
              STRATEGIC DEPENDENCY ENGINE
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Country → Resource → Route → Chokepoint → Infrastructure
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-medium">
            Strategic Dependencies & Reverse Leverage
          </h1>
          <p className="text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed">
            Trace the physical conduits and bottlenecks sustaining modern sovereign economies. Evaluate critical import dependencies alongside reverse strategic leverage (what the global economy requires from key provider nations).
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center bg-[#090b10] p-4 rounded-xl border border-white/10 mb-8">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-400 text-black font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-500">Vulnerability:</span>
            <select
              value={selectedVulnerability}
              onChange={(e) => setSelectedVulnerability(e.target.value)}
              className="bg-black/60 border border-white/15 text-xs text-white px-3 py-1.5 rounded-lg font-mono focus:outline-none focus:border-amber-400"
            >
              <option value="all">All Severities</option>
              <option value="CRITICAL">Critical</option>
              <option value="HIGH">High</option>
              <option value="MODERATE">Moderate</option>
            </select>
          </div>
        </div>

        {/* Section 1: Sovereign Critical Dependencies */}
        <div className="mb-14 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-display text-white font-semibold flex items-center gap-2">
              <ShieldAlert className="size-5 text-amber-400" />
              Sovereign Import Vulnerabilities & Chokepoint Exposures
            </h2>
            <span className="text-xs font-mono text-neutral-400">
              {filteredDependencies.length} Monitored Strategic Flows
            </span>
          </div>

          <div className="space-y-6">
            {filteredDependencies.map((dep) => (
              <div
                key={dep.id}
                className="rounded-2xl border border-white/10 bg-[#090b10] p-6 sm:p-8 hover:border-amber-400/40 transition-colors shadow-2xl"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-bold uppercase border ${
                        dep.vulnerabilityLevel === "CRITICAL"
                          ? "bg-red-500/10 text-red-400 border-red-500/30"
                          : "bg-amber-500/10 text-amber-400 border-amber-500/30"
                      }`}
                    >
                      {dep.vulnerabilityLevel} VULNERABILITY
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      Target State: <strong className="text-white">{dep.dependentCountry}</strong>
                    </span>
                    <span className="text-xs font-mono text-neutral-500">
                      ID: {dep.id}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-neutral-400">
                    Source: <strong className="text-trinetra-saffron">{dep.sourceId}</strong>
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl text-white font-semibold mb-2">
                  {dep.commodity}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {dep.strategicSignificance}
                </p>

                {/* Physical Supply Chain Flow Architecture */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/8 mb-6">
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-3">
                    Physical Transmission Architecture: Origin → Chokepoint → Hub → Consumer
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-[#11141d] border border-white/5">
                      <span className="text-neutral-500 text-[10px] block mb-1">01 // ORIGIN & SUPPLIERS</span>
                      <div className="space-y-1">
                        {dep.suppliers.map((s) => (
                          <div key={s.countryId} className="flex items-center justify-between text-neutral-200">
                            <span>{s.flag} {s.countryName}</span>
                            <span className="text-amber-400 font-semibold">{s.sharePct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#11141d] border border-white/5">
                      <span className="text-neutral-500 text-[10px] block mb-1">02 // ROUTE & CHOKEPOINT</span>
                      <div className="text-neutral-300 space-y-1">
                        <div><span className="text-neutral-500">Route:</span> {dep.flowRoute.transitRoute}</div>
                        {dep.flowRoute.chokepoint && (
                          <div className="text-red-300"><span className="text-neutral-500">Chokepoint:</span> {dep.flowRoute.chokepoint}</div>
                        )}
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#11141d] border border-white/5">
                      <span className="text-neutral-500 text-[10px] block mb-1">03 // ENTRY HUB & REFINING</span>
                      <div className="text-neutral-300 space-y-1">
                        <div><span className="text-neutral-500">Port Hub:</span> {dep.flowRoute.entryHub}</div>
                        <div><span className="text-neutral-500">Infrastructure:</span> {dep.flowRoute.processingInfrastructure}</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-[#11141d] border border-white/5">
                      <span className="text-neutral-500 text-[10px] block mb-1">04 // DOMESTIC CONSUMER</span>
                      <div className="text-neutral-300 leading-snug">
                        {dep.flowRoute.domesticConsumer}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alternatives & Mitigation Strategies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#0d1018] border border-white/5">
                    <span className="text-[10px] uppercase text-neutral-400 font-bold block mb-1.5">
                      Alternatives & Substitution Assessment
                    </span>
                    <p className="text-neutral-300 leading-relaxed font-sans text-xs">
                      {dep.alternativesAssessment}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0d1018] border border-white/5">
                    <span className="text-[10px] uppercase text-emerald-400 font-bold block mb-1.5">
                      Active Mitigation Initiatives
                    </span>
                    <ul className="space-y-1 text-neutral-300 pl-3 list-disc marker:text-emerald-400 font-sans text-xs">
                      {dep.mitigationInitiatives.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Reverse Dependencies (What the World Needs from These Nations) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-display text-white font-semibold flex items-center gap-2">
              <Globe2 className="size-5 text-emerald-400" />
              Reverse Strategic Dependencies: Critical Global Supplier Monopolies
            </h2>
            <span className="text-xs font-mono text-neutral-400">
              Asymmetric Leverage Baselines
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REVERSE_DEPENDENCIES_DATA.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-white/10 bg-[#090b10] p-6 hover:border-emerald-500/40 transition-colors shadow-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
                    PROVIDER: {rev.providerCountry}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">{rev.category}</span>
                </div>

                <h3 className="font-display text-lg text-white font-semibold mb-2">
                  {rev.commodity}
                </h3>
                <div className="text-xs font-mono text-emerald-300 mb-3">
                  <span className="text-neutral-500">Global Share: </span>
                  <strong>{rev.globalSharePct}</strong>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {rev.strategicLeverage}
                </p>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-500">Dependent States:</span>
                    <span>{rev.dependentNations.join(", ")}</span>
                  </div>
                  <span className="text-neutral-500">{rev.sourceId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
