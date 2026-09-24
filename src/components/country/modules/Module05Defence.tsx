import React from "react";
import { Shield, Crosshair, Anchor, Plane, Users, Wrench, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { MilitarySecurityData } from "../../../data/countryDeepProfileData";
import { MilitarySecurityVisual } from "../MilitarySecurityVisual";

interface Module05DefenceProps {
  countryName: string;
  military: MilitarySecurityData;
}

export const Module05Defence: React.FC<Module05DefenceProps> = ({
  countryName,
  military,
}) => {
  return (
    <section id="module-05-defence" className="mb-14 scroll-mt-24" aria-label="05 Defence and Security">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 05
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Armed Forces, Order of Battle & Defense Industrial Base
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Shield className="size-6 text-trinetra-saffron" />
            <span>Defence & Security: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for regular armed forces, service branch doctrines (Army, Navy, Air Force), standing personnel, defense budgets, flagship weapons systems, domestic production self-reliance, and operational constraints.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Active Forces: <strong className="text-rose-400">{military.activePersonnel}</strong>
          </span>
        </div>
      </div>

      {/* Complete Military Security Visual */}
      <MilitarySecurityVisual
        military={military}
        countryName={countryName}
      />
    </section>
  );
};
