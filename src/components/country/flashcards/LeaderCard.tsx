import React from "react";
import { UserCheck } from "lucide-react";
import type { CountryLeadershipDossier } from "../../../data/countryLeadershipData";
import { FlashCard } from "./FlashCard";

interface LeaderCardProps {
  countryName: string;
  leadership: CountryLeadershipDossier;
  onClick?: () => void;
}

export const LeaderCard: React.FC<LeaderCardProps> = ({
  countryName,
  leadership,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="01"
      title="Current Leadership"
      category="Constitutional Executive"
      icon={<UserCheck className="size-4 text-amber-400 group-hover:scale-110 transition-transform" />}
      source={leadership.leaders[0]?.sourceName || "Official Government Registry"}
      actionLabel="View government structure →"
      onClick={onClick}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {leadership.leaders.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-black/40 border border-white/5 group/leader hover:border-white/20 transition-colors"
          >
            <div className="relative size-12 sm:size-14 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-neutral-900">
              {leader.imageUrl ? (
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover/leader:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to silhouette if image fails
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800 text-neutral-400 font-mono text-xs">
                  {leader.name.slice(0, 2).toUpperCase()}
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-display text-xs sm:text-sm font-bold text-white truncate group-hover/leader:text-trinetra-saffron transition-colors">
                {leader.name}
              </h4>
              <p className="text-[11px] text-amber-400/90 font-medium truncate">
                {leader.position}
              </p>
              <div className="flex items-center gap-2 mt-1 text-[10px] font-mono text-neutral-400">
                <span>Since {leader.since}</span>
                <span>•</span>
                <span className="truncate">{leader.termInfo}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] font-mono text-neutral-400 px-1">
        SYSTEM: <span className="text-neutral-200">{leadership.systemType}</span>
      </div>
    </FlashCard>
  );
};
