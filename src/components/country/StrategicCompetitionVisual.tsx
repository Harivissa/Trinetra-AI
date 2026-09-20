// TRINETRA AI — Strategic Competition & Friction Domain Visualizer
// Section 14: STRATEGIC COMPETITION
// Competitor profiles, active friction domains, flashpoints, concrete evidence.
import React, { useState } from "react";
import { Swords, AlertTriangle, ShieldAlert, Crosshair, Flag, CheckCircle2 } from "lucide-react";
import type { CompetitorEntry } from "../../data/countryDeepProfileData";

interface StrategicCompetitionVisualProps {
  competitions: CompetitorEntry[];
  countryName: string;
}

export const StrategicCompetitionVisual: React.FC<StrategicCompetitionVisualProps> = ({
  competitions,
  countryName,
}) => {
  const [activeCompetitorIdx, setActiveCompetitorIdx] = useState<number>(0);

  if (!competitions || competitions.length === 0) {
    return (
      <section className="mb-12" aria-label="Strategic Competition">
        <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 text-center text-xs font-mono text-neutral-400">
          No documented systemic great-power rivalries identified for this state.
        </div>
      </section>
    );
  }

  const current = competitions[activeCompetitorIdx] || competitions[0];

  return (
    <section className="mb-12" aria-label="Strategic Competition">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                14 // Geopolitical Friction
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Bilateral Contestation & Conflict Flashpoints
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Swords className="size-6 text-trinetra-saffron" />
              Who Does {countryName} Compete With?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Systemic rivalries, contested frontiers, technological sanctions, and military posturing documented through verified actions.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Active Rivals Documented: <strong className="text-white">{competitions.length}</strong>
            </span>
          </div>
        </div>

        {/* Competitor Selector Pills */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {competitions.map((comp, idx) => {
            const isSelected = activeCompetitorIdx === idx;
            return (
              <button
                key={comp.competitorId}
                onClick={() => setActiveCompetitorIdx(idx)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-colors flex items-center gap-2.5 shrink-0 ${
                  isSelected
                    ? "bg-trinetra-saffron text-black font-semibold shadow-lg"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                <span className="text-base">{comp.flag}</span>
                <span>{comp.competitorName}</span>
                <span className="text-[10px] opacity-75 font-normal">({comp.domains.length} domains)</span>
              </button>
            );
          })}
        </div>

        {/* Active Competitor Deep-Dive Card */}
        <div className="p-6 rounded-xl border border-neutral-800/90 bg-[#0c0e12]">
          {/* Strategic Context Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-neutral-850">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{current.flag}</span>
              <div>
                <h3 className="text-xl font-display text-white font-medium">
                  {countryName} ⚔️ {current.competitorName}
                </h3>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  {current.strategicContext}
                </p>
              </div>
            </div>
          </div>

          {/* Friction Domains Matrix */}
          <div className="space-y-4">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider block">
              Active Friction Domains & Flashpoints
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.domains.map((dom: any, i: number) => {
                const isHigh = dom.currentStatus.toLowerCase().includes("high") || dom.currentStatus.toLowerCase().includes("standoff");

                return (
                  <div key={i} className="p-4 rounded-lg bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold text-white">{dom.domain}</span>
                        <span className={`px-2 py-0.5 rounded font-mono text-[10px] font-bold ${
                          isHigh
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        }`}>
                          {dom.currentStatus}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
                        {dom.frictionSummary}
                      </p>

                      <div className="mb-2">
                        <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Key Flashpoints:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {dom.flashpoints.map((fp: string, fIdx: number) => (
                            <span key={fIdx} className="px-2 py-0.5 rounded bg-neutral-800 text-[11px] font-mono text-neutral-200">
                              {fp}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-neutral-800 text-[10px] font-mono text-neutral-400">
                      Evidence: <span className="text-neutral-300">{dom.evidence}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
