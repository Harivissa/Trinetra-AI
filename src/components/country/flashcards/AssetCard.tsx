import React from "react";
import { Anchor, ShieldAlert, Flame, MapPin } from "lucide-react";
import type { StrategicSite } from "../../../data/countryStrategicSites";
import { FlashCard } from "./FlashCard";

interface AssetCardProps {
  countryName: string;
  strategicSites: StrategicSite[];
  onClick?: () => void;
}

export const AssetCard: React.FC<AssetCardProps> = ({
  countryName,
  strategicSites,
  onClick,
}) => {
  const getIcon = (type: StrategicSite["type"]) => {
    switch (type) {
      case "PORT":
        return <Anchor className="size-3.5 text-cyan-400" />;
      case "DEFENSE_FACILITY":
        return <ShieldAlert className="size-3.5 text-rose-400" />;
      case "ENERGY_HUB":
        return <Flame className="size-3.5 text-amber-400" />;
      default:
        return <MapPin className="size-3.5 text-emerald-400" />;
    }
  };

  return (
    <FlashCard
      sectionNumber="11"
      title="Strategic Assets"
      category="Ports, Naval Bases & Energy Hubs"
      icon={<Anchor className="size-4 text-cyan-400 group-hover:scale-110 transition-transform" />}
      source="Hydrographic Services & National Infrastructure Records"
      actionLabel="Inspect strategic sites →"
      onClick={onClick}
    >
      <div className="space-y-2.5">
        {strategicSites.slice(0, 3).map((site) => (
          <div
            key={site.id}
            className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-start gap-2.5 group/site hover:border-white/20 transition-colors"
          >
            <div className="mt-0.5 shrink-0">{getIcon(site.type)}</div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-1">
                <span className="font-semibold text-white text-xs truncate group-hover/site:text-trinetra-saffron transition-colors">
                  {site.name}
                </span>
                <span className="text-[9px] font-mono text-neutral-400">
                  {site.type.replace("_", " ")}
                </span>
              </div>
              <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                {site.whyItMatters}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-mono text-neutral-400 px-1 pt-1 flex items-center justify-between">
        <span>LOCATIONS: {strategicSites.length} VERIFIED HUBS</span>
        <span className="text-cyan-400">GIS Sourced</span>
      </div>
    </FlashCard>
  );
};
