// TRINETRA AI — Top Sovereign Metric Flash Cards (8-Metric Status Row)
// Strictly authentic, verified, neutral, and timestamped.
import React from "react";
import {
  Users,
  BarChart3,
  TrendingUp,
  ShieldAlert,
  Shield,
  Radiation,
  Flame,
  Anchor,
} from "lucide-react";
import type { TopMetricCardData } from "../../data/countryFlashCardData";

interface TopMetricFlashCardsProps {
  metrics: TopMetricCardData[];
}

export const TopMetricFlashCards: React.FC<TopMetricFlashCardsProps> = ({ metrics }) => {
  const getIcon = (category: string) => {
    switch (category) {
      case "demography":
        return <Users className="size-4 text-orange-400" />;
      case "economy":
        return <BarChart3 className="size-4 text-sky-400" />;
      case "growth":
        return <TrendingUp className="size-4 text-emerald-400" />;
      case "military":
        return <ShieldAlert className="size-4 text-amber-400" />;
      case "defense":
        return <Shield className="size-4 text-rose-400" />;
      case "nuclear":
        return <Radiation className="size-4 text-rose-500" />;
      case "energy":
        return <Flame className="size-4 text-amber-500" />;
      case "maritime":
        return <Anchor className="size-4 text-cyan-400" />;
      default:
        return <Users className="size-4 text-orange-400" />;
    }
  };

  return (
    <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5">
      {metrics.map((item) => (
        <div
          key={item.id}
          className="group relative rounded-xl border border-white/8 bg-[#090c10]/95 hover:bg-[#0d1117] hover:border-trinetra-saffron/40 p-3 sm:p-3.5 transition-all duration-200 shadow-lg flex flex-col justify-between"
        >
          {/* Top category label & icon */}
          <div className="flex items-center justify-between gap-1.5 mb-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 truncate">
              {item.label}
            </span>
            <div className="p-1 rounded bg-black/40 border border-white/5 shrink-0 group-hover:scale-110 transition-transform">
              {getIcon(item.category)}
            </div>
          </div>

          {/* Metric Primary Value */}
          <div className="my-1">
            <div className="font-display text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-none group-hover:text-trinetra-saffron transition-colors">
              {item.value}
            </div>
            {item.subValue && (
              <div className="text-[10px] font-mono text-neutral-400 truncate mt-0.5">
                {item.subValue}
              </div>
            )}
          </div>

          {/* Sourced metadata indicator */}
          <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-neutral-500">
            <span className="truncate">{item.year} · {item.source.split(" ")[0]}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
