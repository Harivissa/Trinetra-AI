import React from "react";
import { TrendingUp, BarChart3 } from "lucide-react";
import type { EconomyCardData } from "../../../data/countryFlashCardData";
import { FlashCard } from "./FlashCard";

interface ChartCardProps {
  countryName: string;
  economy: EconomyCardData;
  onClick?: () => void;
}

export const ChartCard: React.FC<ChartCardProps> = ({
  countryName,
  economy,
  onClick,
}) => {
  const maxGdp = Math.max(...economy.gdpTrend.map((t) => t.gdp), 1);

  return (
    <FlashCard
      sectionNumber="05"
      title="Economy & Trade"
      category="Macro Trajectory & Global Integration"
      icon={<TrendingUp className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />}
      size="large"
      source={economy.source}
      actionLabel="Inspect economic model →"
      onClick={onClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* GDP 10-Year Trend Sparkline */}
        <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
              Nominal GDP Trajectory
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {economy.currentGdp}
            </span>
          </div>

          {/* SVG sparkline chart */}
          <div className="h-24 w-full flex items-end gap-2 pt-3">
            {economy.gdpTrend.map((t) => {
              const heightPct = Math.max(15, Math.round((t.gdp / maxGdp) * 100));
              return (
                <div key={t.year} className="flex-1 flex flex-col items-center gap-1 group/bar">
                  <span className="text-[9px] font-mono text-neutral-400 opacity-0 group-hover/bar:opacity-100 transition-opacity">
                    ${t.gdp}T
                  </span>
                  <div className="w-full rounded-t bg-emerald-500/20 group-hover/bar:bg-emerald-400/50 transition-colors relative flex items-end">
                    <div
                      className="w-full bg-emerald-400 rounded-t transition-all duration-500"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400">
                    '{String(t.year).slice(2)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="text-[10px] font-mono text-neutral-400 text-right mt-1">
            {economy.gdpUnit}
          </div>
        </div>

        {/* Sector Composition & Top Trading Partners */}
        <div className="space-y-3">
          {/* Sector Bars */}
          <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-2">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Economic Composition
            </span>
            <div className="space-y-1.5">
              {economy.sectors.map((sec) => (
                <div key={sec.name} className="space-y-0.5">
                  <div className="flex justify-between text-xs">
                    <span className="text-neutral-300">{sec.name}</span>
                    <span className="font-mono text-neutral-200 font-semibold">{sec.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${sec.pct}%`, backgroundColor: sec.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Trade Partners preview */}
          <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
            <span className="text-[10px] font-mono text-neutral-400 uppercase">
              Key Trade Flows:
            </span>
            <div className="flex items-center gap-2">
              {economy.topPartners.slice(0, 3).map((p) => (
                <span
                  key={p.name}
                  className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[11px] font-mono text-neutral-300"
                >
                  {p.flag} {p.name.split(" ")[0]} ({p.share}%)
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FlashCard>
  );
};
