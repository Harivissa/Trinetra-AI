import { useState } from "react";
import {
  Flame,
  Shield,
  Cpu,
  Package,
  Layers,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Workflow,
  HelpCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  GitFork,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryStrategicData, type DependencyNodeItem } from "../../data/countryStrategicData";

interface DependencyFlowsVisualProps {
  country: Country;
}

const CATEGORY_ICONS: Record<string, any> = {
  ENERGY: Flame,
  DEFENCE: Shield,
  TECHNOLOGY: Cpu,
  TRADE: Package,
  "RAW MATERIALS": Layers,
};

export default function DependencyFlowsVisual({ country }: DependencyFlowsVisualProps) {
  const strategic = getCountryStrategicData(country.id, country.name, country);
  const [selectedDepId, setSelectedDepId] = useState<string>(
    strategic.dependencies[0]?.id || "dep-crude"
  );
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeDep: DependencyNodeItem =
    strategic.dependencies.find((d) => d.id === selectedDepId) ||
    strategic.dependencies[0];

  return (
    <section className="mb-10" id="visual-dependencies" aria-label="Interactive Dependency Graph & Geopolitical Flows">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Question 4: What does it depend on?
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                Interactive Dependency Graph & Supply Chain Vectors
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              National Dependencies & Geopolitical Flow Corridors
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Mapping critical foreign inputs, origins, transit pathways, and potential disruption vectors. Relationships are analyzed objectively without automatically categorizing every normal trade dependency as a vulnerability.
            </p>
          </div>
        </div>

        {/* Part 1: Interactive Dependency Graph & Tree */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-8">
          {/* Left: Dependency Tree Hierarchy */}
          <div className="lg:col-span-5 border border-neutral-800 rounded-xl bg-black/50 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-neutral-400 font-mono text-xs uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2.5">
                <GitFork size={14} className="text-trinetra-saffron" />
                <span>Dependency Architecture: {country.name.toUpperCase()}</span>
              </div>

              {/* Tree Node Structure */}
              <div className="space-y-3 font-mono text-xs">
                {/* Root Country Node */}
                <div className="p-3 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center gap-2.5 font-bold text-white shadow-sm">
                  <span className="size-2 rounded-full bg-trinetra-saffron animate-pulse" />
                  <span>{country.name.toUpperCase()} (SOVEREIGN CORE)</span>
                </div>

                {/* Branches Container */}
                <div className="pl-4 border-l-2 border-dashed border-neutral-800 space-y-2.5 ml-2.5">
                  {strategic.dependencies.map((dep) => {
                    const IconComp = CATEGORY_ICONS[dep.category] || Layers;
                    const isSelected = dep.id === activeDep?.id;

                    return (
                      <div key={dep.id} className="relative">
                        <button
                          onClick={() => {
                            setSelectedDepId(dep.id);
                            setActiveStepIndex(0);
                          }}
                          className={`w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between gap-2 ${
                            isSelected
                              ? "bg-rose-950/40 border-rose-500/80 text-rose-200 shadow-sm"
                              : "bg-black/40 border-neutral-800/80 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900/40"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <IconComp
                              size={14}
                              className={isSelected ? "text-rose-400" : "text-neutral-500"}
                            />
                            <div className="truncate">
                              <span className="text-[10px] text-neutral-500 block uppercase">
                                +-- {dep.category}
                              </span>
                              <span className="font-semibold text-xs truncate block">
                                {dep.title}
                              </span>
                            </div>
                          </div>
                          <ChevronRight
                            size={14}
                            className={`shrink-0 ${isSelected ? "text-rose-400" : "text-neutral-600"}`}
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500 flex items-center justify-between">
              <span>Select any dependency branch to inspect</span>
              <span>{strategic.dependencies.length} Vector Streams</span>
            </div>
          </div>

          {/* Right: Detailed Dependency Dossier */}
          {activeDep && (
            <div className="lg:col-span-7 border border-neutral-800 rounded-xl bg-black/60 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800/80 pb-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-rose-400 font-bold uppercase">
                        {activeDep.category} DEPENDENCY
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {country.name} External Sourcing
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-white font-semibold">
                      {activeDep.title}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 uppercase">
                    ID: {activeDep.id}
                  </span>
                </div>

                {/* 1. What is being imported / relied upon */}
                <div className="mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    What Is Relied Upon
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3 leading-relaxed">
                    {activeDep.reliedUpon}
                  </p>
                </div>

                {/* 2. Source Country / Region */}
                <div className="mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Primary Sourcing Origin & Countries
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeDep.sourceRegions.map((src, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        {src}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. Why It Matters vs Possible Vulnerability vs Alternatives */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3.5">
                  {/* Why It Matters */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">
                      Why It Matters (National Operation)
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {activeDep.whyItMatters}
                    </p>
                  </div>

                  {/* Possible Vulnerability */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3">
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1 flex items-center gap-1">
                      <AlertTriangle size={11} />
                      Possible Vulnerability & Disruption Point
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {activeDep.possibleVulnerability}
                    </p>
                  </div>
                </div>

                {/* Available Alternatives & Stockpiles */}
                <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3 mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1 flex items-center gap-1">
                    <CheckCircle2 size={11} />
                    Available Alternatives, Buffers & Mitigations
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeDep.availableAlternatives}
                  </p>
                </div>
              </div>

              {/* Evidence & Verification */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>
                  Source: {activeDep.evidence.source} ({activeDep.evidence.year})
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  {activeDep.evidence.nature} · Confidence: {activeDep.evidence.confidence}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Part 2: Geopolitical Flow Diagram (Section 7) */}
        {activeDep && activeDep.flowSteps.length > 0 && (
          <div className="border border-neutral-800 rounded-xl bg-black/40 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800/80 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                  Geopolitical Supply Chain Flow // Stage Progression
                </span>
                <h3 className="font-display text-lg text-white font-medium flex items-center gap-2">
                  <Workflow size={16} className="text-cyan-400" />
                  {activeDep.category} Flow: How Sourced Materials Reach {country.name}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-500">
                Click any stage to examine disruption risks
              </span>
            </div>

            {/* Stepper Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {activeDep.flowSteps.map((step, sIdx) => {
                const isSelected = sIdx === activeStepIndex;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveStepIndex(sIdx)}
                    className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-cyan-500/80 bg-cyan-950/20 shadow-sm"
                        : "border-neutral-800 bg-black/60 hover:border-neutral-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[9px] font-mono uppercase text-neutral-500">
                          STAGE 0{sIdx + 1}
                        </span>
                        <span
                          className={`size-2 rounded-full ${
                            isSelected ? "bg-cyan-400 animate-ping" : "bg-neutral-700"
                          }`}
                        />
                      </div>
                      <h4
                        className={`text-xs font-bold font-display uppercase ${
                          isSelected ? "text-cyan-300" : "text-neutral-200"
                        }`}
                      >
                        {step.stepName}
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-400 block mt-0.5">
                        {step.locationOrStage}
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Drill-down (Where does it come from, How does it reach the country, Where can disruption occur) */}
            {activeDep.flowSteps[activeStepIndex] && (
              <div className="bg-neutral-950/90 border border-neutral-800 rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Stage & Location
                  </span>
                  <span className="text-sm font-semibold text-white block">
                    {activeDep.flowSteps[activeStepIndex].stepName}
                  </span>
                  <span className="text-neutral-400 font-mono text-xs block mt-0.5">
                    {activeDep.flowSteps[activeStepIndex].locationOrStage}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Operational Description
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeDep.flowSteps[activeStepIndex].description}
                  </p>
                </div>

                <div className="border-t md:border-t-0 md:border-l border-neutral-800 pt-2 md:pt-0 md:pl-4">
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1 flex items-center gap-1">
                    <AlertTriangle size={12} />
                    Where Disruption Can Occur
                  </span>
                  <p className="text-neutral-300 leading-relaxed">
                    {activeDep.flowSteps[activeStepIndex].disruptionRisk}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
