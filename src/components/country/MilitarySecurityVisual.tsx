// TRINETRA AI — Military & Security Architecture Visualizer
// Section 09: MILITARY & SECURITY
// Service branches, major platforms, defense industrial self-reliance, budget, operational constraints.
import React, { useState } from "react";
import { Shield, Crosshair, Anchor, Plane, Users, Wrench, AlertTriangle, CheckCircle2 } from "lucide-react";
import type { MilitarySecurityData } from "../../data/countryDeepProfileData";

interface MilitarySecurityVisualProps {
  military: MilitarySecurityData;
  countryName: string;
}

export const MilitarySecurityVisual: React.FC<MilitarySecurityVisualProps> = ({ military, countryName }) => {
  const [activeBranch, setActiveBranch] = useState<number>(0);

  return (
    <section className="mb-12" aria-label="Military and Security">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                09 // Defense Readiness
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Order of Battle, Platforms & Industrial Posture
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Shield className="size-6 text-trinetra-saffron" />
              Military & Security Architecture: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Armed forces branches, flagship weapons platforms, domestic defense production self-reliance, and operational constraints.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Budget: <strong className="text-trinetra-saffron">{military.defenseBudgetUsd}</strong> ({military.defenseBudgetGdpPercent} GDP)
            </span>
          </div>
        </div>

        {/* Personnel Top Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Users className="size-3.5 text-trinetra-saffron" />
              Active Armed Forces
            </div>
            <div className="text-2xl font-mono font-semibold text-white">{military.activePersonnel}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Full-time regular personnel</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Users className="size-3.5 text-sky-400" />
              Trained Reserves
            </div>
            <div className="text-2xl font-mono font-semibold text-white">{military.reservePersonnel}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Mobilizable reserve echelons</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Shield className="size-3.5 text-amber-400" />
              Paramilitary / National Guard
            </div>
            <div className="text-2xl font-mono font-semibold text-white">{military.paramilitaryPersonnel}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Internal & border security</span>
          </div>
        </div>

        {/* Armed Service Branches Explorer */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Crosshair className="size-4 text-trinetra-saffron" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Armed Service Branches & Major Platforms
            </span>
          </div>

          <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
            {military.branches.map((branch, idx) => {
              const isSelected = activeBranch === idx;
              return (
                <button
                  key={branch.name}
                  onClick={() => setActiveBranch(idx)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-mono font-medium transition-colors whitespace-nowrap ${
                    isSelected
                      ? "bg-trinetra-saffron text-black font-semibold shadow-md"
                      : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                  }`}
                >
                  {branch.name}
                </button>
              );
            })}
          </div>

          {/* Active Branch Display */}
          {military.branches[activeBranch] && (
            <div className="p-5 rounded-xl border border-neutral-800/90 bg-[#0c0e12]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-neutral-850">
                <h3 className="font-display text-lg text-white font-medium">
                  {military.branches[activeBranch].name}
                </h3>
                <span className="font-mono text-xs text-trinetra-saffron">
                  Strength: {military.branches[activeBranch].strength}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Operational Mandate</span>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {military.branches[activeBranch].operationalFocus}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-2">Flagship Weapons Systems & Platforms</span>
                <div className="flex flex-wrap gap-2">
                  {military.branches[activeBranch].flagshipPlatforms.map((plat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-700/80 text-xs font-mono text-neutral-200"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Defense Industrial Self-Reliance & Suppliers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 mb-3">
              <Wrench className="size-4 text-trinetra-saffron" />
              <h4 className="font-display text-sm text-white font-medium">
                Defense Industrial Base & Indigenization
              </h4>
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="text-neutral-400 font-mono">Self-Reliance Level:</span>
                <span className="text-trinetra-saffron font-mono font-bold">
                  {military.defenseIndustry.selfRelianceStatus}
                </span>
              </div>
              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="text-neutral-400 font-mono block mb-1">Domestic Production Share:</span>
                <span className="text-neutral-200">{military.defenseIndustry.domesticProductionShare}</span>
              </div>
              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="text-neutral-400 font-mono block mb-1">Key Indigenous Platforms:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {military.defenseIndustry.keyIndigenousPlatforms.map((p, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="size-4 text-amber-400" />
              <h4 className="font-display text-sm text-white font-medium">
                Foreign Defense Suppliers & Constraints
              </h4>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="text-neutral-400 font-mono block mb-1">Foreign Equipment Origins:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {military.defenseIndustry.majorForeignSuppliers.map((s, i) => (
                    <span key={i} className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-2.5 rounded bg-neutral-900/60 border border-neutral-800">
                <span className="text-neutral-400 font-mono block mb-1">Operational Constraints:</span>
                <ul className="space-y-1 mt-1">
                  {military.operationalConstraints.map((c, i) => (
                    <li key={i} className="text-neutral-300 flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Source Footer */}
        <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Source: {military.source}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="size-3" />
            SIPRI / IISS Military Balance Audited
          </span>
        </div>
      </div>
    </section>
  );
};
