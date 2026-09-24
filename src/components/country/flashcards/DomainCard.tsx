import React from "react";
import { ArrowRight, Activity } from "lucide-react";

interface DomainCardProps {
  domain: string;
  indicator: string;
  value: string;
  trend?: string;
  source?: string;
  onClick?: () => void;
}

export const DomainCard: React.FC<DomainCardProps> = ({
  domain,
  indicator,
  value,
  trend,
  source,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-3.5 rounded-xl border border-white/8 bg-black/40 hover:border-trinetra-saffron/40 hover:bg-[#121824] transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-1 mb-1.5">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
            {domain}
          </span>
          {trend && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-trinetra-saffron">
              {trend}
            </span>
          )}
        </div>
        <div className="text-xs text-neutral-400 mb-0.5">{indicator}</div>
        <div className="font-display text-sm sm:text-base font-bold text-white group-hover:text-trinetra-saffron transition-colors truncate">
          {value}
        </div>
      </div>

      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors">
        <span className="truncate max-w-[100px]">{source || "National Registry"}</span>
        <span className="text-trinetra-saffron flex items-center gap-1">
          Inspect <ArrowRight className="size-2.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
};
