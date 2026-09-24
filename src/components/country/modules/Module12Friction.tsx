import React from "react";
import { Swords, AlertTriangle, ShieldAlert, Crosshair, Flag, CheckCircle2 } from "lucide-react";
import type { CompetitorEntry } from "../../../data/countryDeepProfileData";
import { StrategicCompetitionVisual } from "../StrategicCompetitionVisual";

interface Module12FrictionProps {
  countryName: string;
  competitions: CompetitorEntry[];
}

export const Module12Friction: React.FC<Module12FrictionProps> = ({
  countryName,
  competitions,
}) => {
  return (
    <section id="module-12-friction" className="mb-14 scroll-mt-24" aria-label="12 Geopolitical Friction">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 12
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Bilateral Contestation, Disputed Frontiers & Great-Power Rivalry
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Swords className="size-6 text-trinetra-saffron" />
            <span>Geopolitical Friction: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical repository for systemic great-power rivalries, contested borders, maritime zone disputes, technological export controls, and operational flashpoints documented with primary evidence.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Contested Arenas: <strong className="text-rose-400">{competitions?.length || 0} Fronts</strong>
          </span>
        </div>
      </div>

      {/* Complete Strategic Competition Visual */}
      <StrategicCompetitionVisual
        competitions={competitions}
        countryName={countryName}
      />
    </section>
  );
};
