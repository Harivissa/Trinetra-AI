import React from "react";
import { Compass, MapPin } from "lucide-react";
import { FlashCard } from "./FlashCard";
import { HeaderMiniMap } from "../HeaderMiniMap";

interface MapCardProps {
  countryId: string;
  countryName: string;
  capital: string;
  region: string;
  onClick?: () => void;
}

export const MapCard: React.FC<MapCardProps> = ({
  countryId,
  countryName,
  capital,
  region,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="03"
      title="Strategic Geography"
      category="Theater Border & SLOC Posture"
      icon={<Compass className="size-4 text-cyan-400 group-hover:scale-110 transition-transform" />}
      source="UN Cartographic Section & Hydrographic Data"
      actionLabel="Open interactive GIS map →"
      onClick={onClick}
    >
      <div className="relative h-44 rounded-xl overflow-hidden border border-white/10 bg-black/60">
        <HeaderMiniMap countryId={countryId} countryName={countryName} />
      </div>

      <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1 pt-1">
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3 text-trinetra-saffron" />
          <strong className="text-white">{capital}</strong> ({region})
        </span>
        <span className="text-[11px] text-cyan-400 font-semibold">
          Real GIS Engine
        </span>
      </div>
    </FlashCard>
  );
};
