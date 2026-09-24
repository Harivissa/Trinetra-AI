import React from "react";
import type { TopMetricCardData } from "../../../data/countryFlashCardData";

interface MetricCardProps {
  metric: TopMetricCardData;
  onClick?: () => void;
}

export const MetricCard: React.FC<MetricCardProps> = ({ metric, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-3.5 rounded-xl border border-white/8 bg-[#0b0e14] hover:border-trinetra-saffron/40 hover:bg-[#101520] transition-all duration-200 hover:-translate-y-0.5 shadow-md flex flex-col justify-between cursor-pointer min-w-[140px] flex-1"
    >
      <div>
        <div className="flex items-center justify-between gap-1 mb-1">
          <span className="text-[10px] font-mono text-neutral-400 tracking-wider uppercase truncate">
            {metric.label}
          </span>
          <span className="text-[9px] font-mono text-neutral-400">
            {metric.year}
          </span>
        </div>
        <div className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-trinetra-saffron transition-colors tracking-tight">
          {metric.value}
        </div>
        {metric.subValue && (
          <div className="text-[11px] text-neutral-400 truncate mt-0.5">
            {metric.subValue}
          </div>
        )}
      </div>

      <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-neutral-400">
        <span className="truncate max-w-[110px]">{metric.source}</span>
        <span className="text-trinetra-saffron opacity-0 group-hover:opacity-100 transition-opacity">
          ↗
        </span>
      </div>
    </div>
  );
};
