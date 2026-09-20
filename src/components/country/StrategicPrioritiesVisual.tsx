// TRINETRA AI — Strategic Priorities Visualizer
// Section 17: WHAT DOES THIS COUNTRY WANT?
// Domain-specific objectives, strategic significance, current actions, concrete evidence.
import React from "react";
import { Target, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { StrategicPriorityEntry } from "../../data/countryDeepProfileData";

interface StrategicPrioritiesVisualProps {
  priorities: StrategicPriorityEntry[];
  countryName: string;
}

export const StrategicPrioritiesVisual: React.FC<StrategicPrioritiesVisualProps> = ({
  priorities,
  countryName,
}) => {
  return (
    <section className="mb-12" aria-label="Strategic Priorities">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                17 // Grand Strategy
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Sovereign Objectives & Active Statecraft
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Target className="size-6 text-trinetra-saffron" />
              What Does {countryName} Want?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Documented grand strategic objectives, active diplomatic/military steps, and verifiable policy directives.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Documented Priorities: <strong className="text-trinetra-saffron">{priorities.length}</strong>
            </span>
          </div>
        </div>

        {/* Priority Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {priorities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12] flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[10px] font-bold uppercase tracking-wider">
                    {item.domain}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">#0{idx + 1}</span>
                </div>

                <h3 className="font-display text-base text-white font-medium mb-3 leading-snug">
                  {item.objective}
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Strategic Significance:</span>
                    <p className="text-neutral-300 font-light leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Current State Action:</span>
                    <p className="text-neutral-300 font-light leading-relaxed">
                      {item.currentAction}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="truncate max-w-[280px]">Evidence: {item.evidence}</span>
                <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
