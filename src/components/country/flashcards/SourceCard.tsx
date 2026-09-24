import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { FlashCard } from "./FlashCard";

interface SourceCardProps {
  countryName: string;
  sourcesTiers: { tier: string; name: string; orgs: string[] }[];
  onClick?: () => void;
}

export const SourceCard: React.FC<SourceCardProps> = ({
  countryName,
  sourcesTiers,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="16"
      title="Sources & Verification"
      category="Multi-Tier Institutional Provenance"
      icon={<ShieldCheck className="size-4 text-emerald-400 group-hover:scale-110 transition-transform" />}
      source="TRINETRA Institutional Intelligence Verification Standard"
      actionLabel="Inspect data provenance →"
      onClick={onClick}
    >
      <div className="space-y-2">
        {sourcesTiers.map((st) => (
          <div
            key={st.tier}
            className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2 text-xs"
          >
            <CheckCircle2 className="size-3.5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-white block text-[11px] truncate">
                {st.name}
              </span>
              <span className="text-[10px] text-neutral-400 font-mono block truncate">
                {st.tier.split(":")[0]} • {st.orgs.slice(0, 2).join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-mono text-emerald-400/90 px-1 pt-1 flex items-center justify-between">
        <span>VERIFICATION STATUS: 100% INSTITUTIONAL</span>
        <span className="text-white">Conf: HIGH</span>
      </div>
    </FlashCard>
  );
};
