import React from "react";
import { DollarSign, Coins, TrendingUp, Factory, Briefcase, Wheat, ShieldAlert, CheckCircle2 } from "lucide-react";
import type { EconomicStructureData } from "../../../data/countryDeepProfileData";
import { EconomicPowerVisual } from "../EconomicPowerVisual";

interface Module04EconomyProps {
  countryName: string;
  economy: EconomicStructureData;
}

export const Module04Economy: React.FC<Module04EconomyProps> = ({
  countryName,
  economy,
}) => {
  return (
    <section id="module-04-economy" className="mb-14 scroll-mt-24" aria-label="04 Economic System">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 04
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Domestic Macroeconomics & Industrial Architecture
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <DollarSign className="size-6 text-trinetra-saffron" />
            <span>Economic System: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for gross domestic product, structural composition (services, manufacturing, agriculture), sovereign debt, foreign exchange reserves, currency resilience, and domestic industrial foundations.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Nominal GDP: <strong className="text-emerald-400">{economy.gdpNominal}</strong>
          </span>
        </div>
      </div>

      {/* Complete Domestic Economic Structure Visual */}
      <EconomicPowerVisual
        economy={economy}
        countryName={countryName}
      />
    </section>
  );
};
