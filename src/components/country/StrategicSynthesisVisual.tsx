// TRINETRA AI — Strategic Synthesis Executive Visualizer
// Section 21: STRATEGIC SYNTHESIS ("The One-Screen Intelligence Summary")
// Single-screen executive bottom line on sovereign position, capabilities, dependencies, and watchpoints.
import React from "react";
import { Compass, Target, Shield, AlertTriangle, Eye, ArrowRight, Zap, Users, Globe } from "lucide-react";
import type { StrategicSynthesisData } from "../../data/countryDeepProfileData";

interface StrategicSynthesisVisualProps {
  synthesis: StrategicSynthesisData;
  countryName: string;
}

export const StrategicSynthesisVisual: React.FC<StrategicSynthesisVisualProps> = ({
  synthesis,
  countryName,
}) => {
  return (
    <section className="mb-12" aria-label="Strategic Synthesis">
      <div className="rounded-2xl border border-trinetra-saffron/40 bg-[#080a0d] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle accent backdrop indicator */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-trinetra-saffron/5 blur-3xl pointer-events-none rounded-full" />

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6 relative">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                21 // Intelligence Synthesis
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Executive Bottom Line & 24-Month Outlook
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Compass className="size-6 text-trinetra-saffron" />
              Strategic Synthesis: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Consolidated intelligence brief synthesizing grand strategic intent, power projection, and near-term inflection vectors.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Audience: <strong className="text-white">Command Briefing</strong>
            </span>
          </div>
        </div>

        {/* Core Paragraph: Where the Country Stands Right Now */}
        <div className="p-5 rounded-xl border border-neutral-800 bg-[#0c0e12] mb-6">
          <span className="font-mono text-[10px] text-trinetra-saffron uppercase font-bold tracking-wider block mb-1">
            Current Sovereign Position & Strategic Posture
          </span>
          <p className="text-sm sm:text-base text-white font-light leading-relaxed">
            {synthesis.currentPosition}
          </p>
        </div>

        {/* 6 Core Analytical Dimensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* What It Wants */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-trinetra-saffron font-bold uppercase mb-2">
              <Target className="size-4" />
              What It Wants
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.whatItWants}
            </p>
          </div>

          {/* What It Can Do */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase mb-2">
              <Zap className="size-4" />
              What It Can Do
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.whatItCanDo}
            </p>
          </div>

          {/* What It Depends On */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase mb-2">
              <AlertTriangle className="size-4" />
              What It Depends On
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.whatItDependsOn}
            </p>
          </div>

          {/* Who It Works With */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase mb-2">
              <Users className="size-4" />
              Who It Works With
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.whoItWorksWith}
            </p>
          </div>

          {/* Who It Competes With */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold uppercase mb-2">
              <Shield className="size-4" />
              Who It Competes With
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.whoItCompetesWith}
            </p>
          </div>

          {/* Key Geographic Factor & Constraint */}
          <div className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold uppercase mb-2">
              <Globe className="size-4" />
              Geographic Factor & Constraint
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed">
              {synthesis.keyGeographicFactors} <br />
              <strong className="text-amber-400">Constraint:</strong> {synthesis.keyConstraints}
            </p>
          </div>
        </div>

        {/* Key Issues To Watch (Next 12-24 Months) */}
        <div className="p-5 rounded-xl border border-neutral-800 bg-[#0c0e12]">
          <div className="flex items-center gap-2 mb-3">
            <Eye className="size-4 text-trinetra-saffron" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Critical Vectors To Monitor (Next 12–24 Months)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {synthesis.keyIssuesToWatch.map((issue, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-2.5">
                <span className="font-mono text-xs text-trinetra-saffron font-bold shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <p className="text-xs text-neutral-200 font-light leading-relaxed">
                  {issue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
