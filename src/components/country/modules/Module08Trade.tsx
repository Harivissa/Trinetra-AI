import React from "react";
import { TrendingUp, ArrowUpRight, ArrowDownLeft, Scale, AlertOctagon, CheckCircle2 } from "lucide-react";
import type { TradeFlowsData } from "../../../data/countryDeepProfileData";
import { TradeNetworkVisual } from "../TradeNetworkVisual";

interface Module08TradeProps {
  countryName: string;
  trade: TradeFlowsData;
}

export const Module08Trade: React.FC<Module08TradeProps> = ({
  countryName,
  trade,
}) => {
  return (
    <section id="module-08-trade" className="mb-14 scroll-mt-24" aria-label="08 Trade and Geo-Economics">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 08
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Bilateral Commerce, Commodity Flows & Balance of Trade
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <TrendingUp className="size-6 text-trinetra-saffron" />
            <span>Trade & Geo-Economics: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for external trade flows: total merchandise exports and imports, net trade balance, leading bilateral trade partners, critical single-source commodity vulnerabilities, and global economic corridors.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Balance: <strong className={trade.tradeBalanceUsd.includes("-") ? "text-amber-400" : "text-emerald-400"}>{trade.tradeBalanceUsd}</strong>
          </span>
        </div>
      </div>

      {/* Complete Trade Network Visual */}
      <TradeNetworkVisual
        trade={trade}
        countryName={countryName}
      />
    </section>
  );
};
