import React from "react";
import { Network, Zap, Cpu, Shield, Box } from "lucide-react";
import type { DependencyGraphData } from "../../../data/countryFlashCardData";
import { FlashCard } from "./FlashCard";

interface DependencyCardProps {
  countryName: string;
  dependenciesGraph: DependencyGraphData;
  onClick?: () => void;
}

export const DependencyCard: React.FC<DependencyCardProps> = ({
  countryName,
  dependenciesGraph,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="10"
      title="Strategic Dependencies"
      category="Supply Chain & Critical Import Vulnerabilities"
      icon={<Network className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />}
      source="UN Comtrade & International Supply Chain Audits"
      actionLabel="Explore dependency tree →"
      onClick={onClick}
    >
      <div className="space-y-2.5">
        {/* Energy Branch */}
        <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
          <Zap className="size-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Energy & Hydrocarbons</span>
              <span className="font-mono text-[10px] text-amber-400">{dependenciesGraph.energy[0]?.share}</span>
            </div>
            <p className="text-[11px] text-neutral-400 truncate mt-0.5">
              {dependenciesGraph.energy[0]?.criticalSource}
            </p>
          </div>
        </div>

        {/* Technology Branch */}
        <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
          <Cpu className="size-4 text-blue-400 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Advanced Technology</span>
              <span className="font-mono text-[10px] text-blue-400">{dependenciesGraph.technology[0]?.share}</span>
            </div>
            <p className="text-[11px] text-neutral-400 truncate mt-0.5">
              {dependenciesGraph.technology[0]?.criticalSource}
            </p>
          </div>
        </div>

        {/* Defence / Resources Branch */}
        <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5">
          <Shield className="size-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Defense & Munitions</span>
              <span className="font-mono text-[10px] text-rose-400">{dependenciesGraph.defence[0]?.share}</span>
            </div>
            <p className="text-[11px] text-neutral-400 truncate mt-0.5">
              {dependenciesGraph.defence[0]?.criticalSource}
            </p>
          </div>
        </div>
      </div>
    </FlashCard>
  );
};
