// TRINETRA AI — Constraints & Vulnerabilities Visualizer
// Section 19: CONSTRAINTS & VULNERABILITIES
// Honest, factual assessment of sovereign structural limits, impact on strategy, mitigations.
import React from "react";
import { AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";
import type { ConstraintEntry } from "../../data/countryDeepProfileData";

interface ConstraintsVulnerabilitiesVisualProps {
  constraints: ConstraintEntry[];
  countryName: string;
}

export const ConstraintsVulnerabilitiesVisual: React.FC<ConstraintsVulnerabilitiesVisualProps> = ({
  constraints,
  countryName,
}) => {
  return (
    <section className="mb-12" aria-label="Constraints and Vulnerabilities">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                19 // Structural Limits
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Objective Sovereign Vulnerability Assessment
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <AlertTriangle className="size-6 text-amber-400" />
              Strategic Constraints & Vulnerabilities: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Geographic, demographic, fiscal, and supply bottlenecks limiting sovereign autonomy. Strictly labeled by evidence standard.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Documented Bottlenecks: <strong className="text-amber-400">{constraints.length}</strong>
            </span>
          </div>
        </div>

        {/* Constraint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {constraints.map((c, idx) => {
            const isFact = c.nature === "FACT";

            return (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-200 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {c.category}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                        isFact
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                      }`}
                    >
                      {c.nature}
                    </span>
                  </div>

                  <h3 className="font-display text-base text-white font-medium mb-3 leading-snug">
                    {c.limitation}
                  </h3>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Impact On National Strategy:</span>
                      <p className="text-neutral-300 font-light leading-relaxed">
                        {c.impactOnStrategy}
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">State Mitigation Response:</span>
                      <p className="text-neutral-300 font-light leading-relaxed">
                        {c.mitigationEffort}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Source: {c.source}</span>
                  <CheckCircle2 className="size-3 text-neutral-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
