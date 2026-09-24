import React from "react";
import { History, Calendar } from "lucide-react";
import type { TimelineNodeData } from "../../../data/countryFlashCardData";
import { FlashCard } from "./FlashCard";

interface TimelineCardProps {
  countryName: string;
  timeline: TimelineNodeData[];
  onClick?: () => void;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  countryName,
  timeline,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="14"
      title="Historical Timeline"
      category="Geopolitical Milestones & Trajectory"
      icon={<History className="size-4 text-neutral-400 group-hover:scale-110 transition-transform" />}
      source="Constitutional Treaties & Sovereign Historical Archives"
      actionLabel="View complete trajectory →"
      onClick={onClick}
    >
      <div className="space-y-3 border-l border-white/10 pl-3.5 ml-1">
        {timeline.slice(0, 3).map((tl) => (
          <div key={tl.year} className="relative text-xs group/item">
            <span className="absolute -left-[19px] top-1 size-2 rounded-full bg-trinetra-saffron/40 border border-trinetra-saffron" />
            <div className="font-mono text-trinetra-saffron font-bold text-[11px]">
              {tl.year}
            </div>
            <div className="text-white font-semibold truncate group-hover/item:text-trinetra-saffron transition-colors">
              {tl.event}
            </div>
            <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
              {tl.significance}
            </p>
          </div>
        ))}
      </div>
    </FlashCard>
  );
};
