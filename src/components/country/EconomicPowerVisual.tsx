// TRINETRA AI — Economic Structure & Industrial Power Visualizer
// Section 08: ECONOMY & INDUSTRIAL POWER
// GDP structure breakdown, critical industries, debt, reserves, inflation.
import React, { useState } from "react";
import { DollarSign, Briefcase, Factory, Wheat, Coins, TrendingUp, ShieldAlert, CheckCircle2 } from "lucide-react";
import type { EconomicStructureData } from "../../data/countryDeepProfileData";

interface EconomicPowerVisualProps {
  economy: EconomicStructureData;
  countryName: string;
}

export const EconomicPowerVisual: React.FC<EconomicPowerVisualProps> = ({ economy, countryName }) => {
  const [selectedSector, setSelectedSector] = useState<"Services" | "Industry" | "Agriculture">("Services");

  return (
    <section className="mb-12" aria-label="Economy and Industrial Power">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                08 // Economic Engine
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Structural Composition & Industrial Foundations
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <DollarSign className="size-6 text-trinetra-saffron" />
              Economic & Industrial Power: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Output breakdown across services, manufacturing, and agriculture alongside strategic industrial bases and fiscal resilience.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              FX Reserves: <strong className="text-emerald-400">{economy.foreignReservesUsd}</strong>
            </span>
          </div>
        </div>

        {/* Top 4 Macro Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              Nominal GDP (USD)
            </span>
            <div className="text-2xl font-mono font-semibold text-white">{economy.gdpNominal}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">PPP: {economy.gdpPpp}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              GDP Per Capita
            </span>
            <div className="text-2xl font-mono font-semibold text-white">{economy.gdpPerCapita}</div>
            <span className="text-[11px] font-mono text-emerald-400 mt-1 block">Real Growth: {economy.realGrowthRate}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              Sovereign Debt / GDP
            </span>
            <div className="text-2xl font-mono font-semibold text-white">{economy.sovereignDebtGdpPercent}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Inflation: {economy.inflationRate}</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              Sovereign Currency
            </span>
            <div className="text-lg font-mono font-semibold text-trinetra-saffron">{economy.currency.name} ({economy.currency.code})</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block truncate">{economy.currency.fxRegime}</span>
          </div>
        </div>

        {/* Economic Structure (Services / Industry / Agriculture) */}
        <div className="mb-8 p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Economic Structure Breakdown (GDP Share)
            </span>
            <span className="text-xs font-mono text-neutral-400">Click a sector to inspect output weight</span>
          </div>

          {/* Visual Stacked Progress Bar */}
          <div className="h-6 w-full rounded-lg overflow-hidden flex bg-neutral-900 p-0.5 border border-neutral-800 mb-4">
            {economy.sectorBreakdown.map((sec) => {
              const bg =
                sec.sector === "Services"
                  ? "bg-sky-500"
                  : sec.sector === "Industry"
                  ? "bg-amber-500"
                  : "bg-emerald-500";
              return (
                <div
                  key={sec.sector}
                  style={{ width: `${sec.percentage}%` }}
                  onClick={() => setSelectedSector(sec.sector)}
                  className={`${bg} h-full transition-all cursor-pointer hover:opacity-90 flex items-center justify-center text-[10px] font-mono font-bold text-black truncate px-1`}
                  title={`${sec.sector}: ${sec.percentage}%`}
                >
                  {sec.percentage > 10 ? `${sec.sector} ${sec.percentage}%` : `${sec.percentage}%`}
                </div>
              );
            })}
          </div>

          {/* Sector Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {economy.sectorBreakdown.map((sec) => {
              const isSelected = selectedSector === sec.sector;
              const Icon =
                sec.sector === "Services"
                  ? Briefcase
                  : sec.sector === "Industry"
                  ? Factory
                  : Wheat;
              const accentColor =
                sec.sector === "Services"
                  ? "text-sky-400 border-sky-500/40"
                  : sec.sector === "Industry"
                  ? "text-amber-400 border-amber-500/40"
                  : "text-emerald-400 border-emerald-500/40";

              return (
                <div
                  key={sec.sector}
                  onClick={() => setSelectedSector(sec.sector)}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? `bg-neutral-900 ${accentColor}`
                      : "bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Icon className="size-4" />
                      <span className="font-mono text-xs font-bold text-white uppercase">{sec.sector}</span>
                    </div>
                    <span className="font-mono text-xs font-semibold text-white">{sec.percentage}%</span>
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400">
                    Gross Output: <span className="text-neutral-200">{sec.outputUsd}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Critical Industries */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Factory className="size-4 text-trinetra-saffron" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Critical Sovereign Industries
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {economy.criticalIndustries.map((ind, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h4 className="font-display text-sm text-white font-medium">{ind.name}</h4>
                  {ind.globalShare && (
                    <span className="shrink-0 px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[10px]">
                      {ind.globalShare}
                    </span>
                  )}
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {ind.significance}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
