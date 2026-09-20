// TRINETRA AI — Trade Flows & Global Economic Connections Visualizer
// Section 12: TRADE & GLOBAL ECONOMIC CONNECTIONS
// Exports, imports, trade balance, top partners, critical commodity flows.
import React, { useState } from "react";
import { TrendingUp, ArrowUpRight, ArrowDownLeft, Scale, AlertOctagon, CheckCircle2 } from "lucide-react";
import type { TradeFlowsData } from "../../data/countryDeepProfileData";

interface TradeNetworkVisualProps {
  trade: TradeFlowsData;
  countryName: string;
}

export const TradeNetworkVisual: React.FC<TradeNetworkVisualProps> = ({ trade, countryName }) => {
  const [activeFlow, setActiveFlow] = useState<"exports" | "imports">("exports");

  return (
    <section className="mb-12" aria-label="Trade and Global Economic Connections">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                12 // Geo-Economics
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Bilateral Flows & Commodity Dependencies
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <TrendingUp className="size-6 text-trinetra-saffron" />
              Trade & Global Economic Connections: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Export and import partners, trade balance, and critical single-source commodity vulnerabilities.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
              Net Balance: <strong className={trade.tradeBalanceUsd.includes("-") ? "text-amber-400" : "text-emerald-400"}>{trade.tradeBalanceUsd}</strong>
            </span>
          </div>
        </div>

        {/* Top 3 Headline Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <ArrowUpRight className="size-3.5 text-emerald-400" />
              Total Merchandise Exports
            </div>
            <div className="text-2xl font-mono font-semibold text-white">{trade.totalExportsUsd}</div>
            <span className="text-[11px] font-mono text-emerald-400 mt-1 block">Global outbound flow</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <ArrowDownLeft className="size-3.5 text-sky-400" />
              Total Merchandise Imports
            </div>
            <div className="text-2xl font-mono font-semibold text-white">{trade.totalImportsUsd}</div>
            <span className="text-[11px] font-mono text-sky-400 mt-1 block">Inbound consumption flow</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
            <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
              <Scale className="size-3.5 text-amber-400" />
              Trade Balance Status
            </div>
            <div className="text-lg font-mono font-medium text-white truncate">{trade.tradeBalanceUsd}</div>
            <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Customs clearance basis</span>
          </div>
        </div>

        {/* Partner Flow Switcher */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveFlow("exports")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
                  activeFlow === "exports"
                    ? "bg-trinetra-saffron text-black font-semibold shadow"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                <ArrowUpRight className="size-3.5" />
                Top Export Destinations ({trade.topExportPartners.length})
              </button>
              <button
                onClick={() => setActiveFlow("imports")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
                  activeFlow === "imports"
                    ? "bg-trinetra-saffron text-black font-semibold shadow"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                <ArrowDownLeft className="size-3.5" />
                Top Import Sources ({trade.topImportPartners.length})
              </button>
            </div>
            <span className="text-[11px] font-mono text-neutral-400 hidden sm:inline">
              Source: {trade.source}
            </span>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(activeFlow === "exports" ? trade.topExportPartners : trade.topImportPartners).map((p, idx) => {
              const isHighExposure = p.sharePercent >= 20;

              return (
                <div key={idx} className="p-4 rounded-xl border border-neutral-800/80 bg-[#0c0e12] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-sm font-medium text-white">{p.country}</span>
                      <span className={`font-mono text-xs px-2 py-0.5 rounded font-bold ${
                        isHighExposure
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : "bg-neutral-900 text-trinetra-saffron border border-neutral-800"
                      }`}>
                        {p.sharePercent}%
                      </span>
                    </div>

                    {/* Visual share bar */}
                    <div className="w-full h-1.5 rounded-full bg-neutral-900 overflow-hidden mb-3">
                      <div
                        className={`h-full ${isHighExposure ? "bg-amber-400" : "bg-trinetra-saffron"}`}
                        style={{ width: `${Math.min(p.sharePercent * 2, 100)}%` }}
                      />
                    </div>

                    <div className="text-[11px] font-mono text-neutral-400 mb-1">Key Commodities:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {p.keyGoods.map((good, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                          {good}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isHighExposure && (
                    <div className="mt-3 pt-2 border-t border-neutral-850 flex items-center gap-1.5 text-[10px] font-mono text-amber-400">
                      <AlertOctagon className="size-3 shrink-0" />
                      <span>Single-partner dependency risk (&gt;20%)</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Critical Commodity Baskets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-neutral-850">
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/70">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
              Critical Commodity Exports
            </span>
            <div className="flex flex-wrap gap-2">
              {trade.criticalCommodityExports.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-mono text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/70">
            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Critical Commodity Imports (Vulnerabilities)
            </span>
            <div className="flex flex-wrap gap-2">
              {trade.criticalCommodityImports.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-amber-950/40 border border-amber-500/30 text-amber-300 font-mono text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
