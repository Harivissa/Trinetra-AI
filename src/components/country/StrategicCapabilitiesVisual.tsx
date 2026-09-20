import React, { useState, useMemo } from "react";
import {
  Shield,
  Radiation,
  Rocket,
  Cpu,
  Anchor,
  TrendingUp,
  Package,
  Flame,
  Wrench,
  Factory,
  Globe,
  Compass,
  Users,
  Building,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Filter,
  ExternalLink,
  Layers,
  ChevronRight,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryStrategicData, type StrategicDomainItem } from "../../data/countryStrategicData";

interface StrategicCapabilitiesVisualProps {
  country: Country;
}

const DOMAIN_ICONS: Record<string, any> = {
  defence: Shield,
  nuclear: Radiation,
  space: Rocket,
  cyber: Cpu,
  maritime: Anchor,
  economy: TrendingUp,
  trade: Package,
  energy: Flame,
  technology: Wrench,
  industry: Factory,
  diplomacy: Globe,
  geography: Compass,
  demographics: Users,
  infrastructure: Building,
};

export default function StrategicCapabilitiesVisual({ country }: StrategicCapabilitiesVisualProps) {
  const strategic = getCountryStrategicData(country.id, country.name, country);
  const [selectedDomainId, setSelectedDomainId] = useState<string>(strategic.domains[0]?.id || "defence");
  const [categoryFilter, setCategoryFilter] = useState<"ALL" | "SECURITY" | "ECONOMIC" | "PHYSICAL" | "GOVERNANCE">("ALL");

  const filteredDomains = useMemo(() => {
    if (categoryFilter === "ALL") return strategic.domains;
    return strategic.domains.filter((d) => d.category === categoryFilter);
  }, [strategic.domains, categoryFilter]);

  const activeDomain = useMemo(() => {
    return (
      strategic.domains.find((d) => d.id === selectedDomainId) ||
      filteredDomains[0] ||
      strategic.domains[0]
    );
  }, [strategic.domains, selectedDomainId, filteredDomains]);

  return (
    <section className="mb-10" id="visual-domains" aria-label="Strategic Domain Capabilities Matrix">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Question 3: What is it good at?
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                14 Strategic Domains Matrix
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Strategic Domains & Sovereign Levers
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Objective examination of {country.name}&apos;s key sovereign domains. Grounded in documented state capacity, verified assets, operational dependencies, and real constraints—without arbitrary gamified ratings.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900/80 border border-neutral-800 rounded-xl p-1 text-xs font-mono self-start sm:self-auto">
            {(["ALL", "SECURITY", "ECONOMIC", "PHYSICAL", "GOVERNANCE"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-1 rounded-lg transition-colors text-[11px] ${
                  categoryFilter === cat
                    ? "bg-emerald-500 text-black font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Left Domain Selector Grid, Right Detailed Domain Intelligence Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Domain Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-2 gap-2.5 max-h-[580px] overflow-y-auto pr-1">
            {filteredDomains.map((dom) => {
              const IconComp = DOMAIN_ICONS[dom.id] || Layers;
              const isSelected = dom.id === activeDomain?.id;

              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomainId(dom.id)}
                  className={`text-left p-3 rounded-xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? "border-emerald-500/80 bg-emerald-950/20 shadow-md shadow-emerald-950/40"
                      : "border-neutral-800/80 bg-black/40 hover:border-neutral-700 hover:bg-neutral-900/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div
                        className={`size-7 rounded-lg flex items-center justify-center ${
                          isSelected
                            ? "bg-emerald-500 text-black"
                            : "bg-neutral-800 text-neutral-300"
                        }`}
                      >
                        <IconComp size={15} />
                      </div>
                      <span className="text-[9px] font-mono uppercase text-neutral-500">
                        {dom.category}
                      </span>
                    </div>

                    <h4
                      className={`text-xs font-bold font-display uppercase tracking-wide line-clamp-1 ${
                        isSelected ? "text-emerald-300" : "text-neutral-200"
                      }`}
                    >
                      {dom.name}
                    </h4>
                  </div>

                  <p className="text-[11px] text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                    {dom.capabilitySummary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Selected Domain Deep Intelligence Inspector */}
          {activeDomain && (
            <div className="lg:col-span-7 border border-neutral-800 rounded-xl bg-black/60 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Domain Header */}
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800/80 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      {React.createElement(DOMAIN_ICONS[activeDomain.id] || Layers, { size: 22 })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 uppercase font-semibold">
                          Domain Matrix · {activeDomain.category}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500">
                          Verified Profile
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-white font-semibold mt-1">
                        {activeDomain.name}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-emerald-400 uppercase font-bold shrink-0">
                    Active Inspection
                  </span>
                </div>

                {/* Current State & Capability */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Current Capability Assessment
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3 leading-relaxed">
                    {activeDomain.capabilitySummary}
                  </p>
                </div>

                {/* Key Assets vs Dependencies vs Constraints in 3 Clean Factual Blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {/* 1. Key Assets */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                      <CheckCircle2 size={12} />
                      Key National Assets
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-neutral-300">
                      {activeDomain.keyAssets.map((asset, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-emerald-500 shrink-0 mt-0.5">•</span>
                          <span>{asset}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 2. Dependencies */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                      <AlertTriangle size={12} />
                      External Dependencies
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-neutral-300">
                      {activeDomain.dependencies.map((dep, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-amber-500 shrink-0 mt-0.5">•</span>
                          <span>{dep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3. Constraints */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
                      <Layers size={12} />
                      Operational Constraints
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-neutral-300">
                      {activeDomain.constraints.map((con, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-neutral-500 shrink-0 mt-0.5">•</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Strategic Relevance */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Strategic Relevance // Why It Matters
                  </span>
                  <p className="text-xs text-neutral-300 bg-neutral-950/40 border border-neutral-800/60 rounded-lg p-2.5 leading-relaxed">
                    {activeDomain.strategicRelevance}
                  </p>
                </div>
              </div>

              {/* Verified Source & Confidence Footer */}
              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                    Source: {activeDomain.evidence.source} ({activeDomain.evidence.year})
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/50 text-emerald-300">
                    {activeDomain.evidence.nature}
                  </span>
                </div>
                <span className="text-neutral-500">
                  Confidence: {activeDomain.evidence.confidence}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
