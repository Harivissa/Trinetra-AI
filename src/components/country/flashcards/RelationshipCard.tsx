import React from "react";
import { Users2, ShieldAlert, Handshake } from "lucide-react";
import type { RelationshipNetworkData } from "../../../data/countryFlashCardData";
import { FlashCard } from "./FlashCard";

interface RelationshipCardProps {
  countryName: string;
  relationshipsNetwork: RelationshipNetworkData;
  onClick?: () => void;
}

export const RelationshipCard: React.FC<RelationshipCardProps> = ({
  countryName,
  relationshipsNetwork,
  onClick,
}) => {
  return (
    <FlashCard
      sectionNumber="09"
      title="Strategic Relationships"
      category="Partners & Competitors Constellation"
      icon={<Handshake className="size-4 text-sky-400 group-hover:scale-110 transition-transform" />}
      source="Diplomatic Treaties & Bilateral Security Accords"
      actionLabel="Inspect relationship matrix →"
      onClick={onClick}
    >
      <div className="space-y-3">
        {/* Strategic Partners */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Documented Strategic Partners
          </div>
          <div className="space-y-1.5">
            {relationshipsNetwork.partners.slice(0, 3).map((p) => (
              <div
                key={p.name}
                className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="min-w-0 pr-2">
                  <span className="font-semibold text-white block truncate">{p.name}</span>
                  <span className="text-[10px] text-neutral-400 block truncate">{p.whyItMatters}</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  {p.relationshipType}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Competitors & Friction Points */}
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-rose-400 uppercase tracking-wider mb-1.5">
            <span className="size-1.5 rounded-full bg-rose-400" />
            Documented Strategic Competitors
          </div>
          <div className="space-y-1.5">
            {relationshipsNetwork.competitors.slice(0, 2).map((c) => (
              <div
                key={c.name}
                className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-xs"
              >
                <div className="min-w-0 pr-2">
                  <span className="font-semibold text-white block truncate">{c.name}</span>
                  <span className="text-[10px] text-neutral-400 block truncate">{c.whyItMatters}</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                  {c.competitionType}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FlashCard>
  );
};
