import React from "react";
import { History, Calendar, Swords, Landmark, TrendingUp, Radiation, FileCheck2 } from "lucide-react";
import type { TimelineEvent } from "../EnhancedTimelineVisual";
import EnhancedTimelineVisual from "../EnhancedTimelineVisual";

interface Module14HistoryProps {
  countryName: string;
  events?: TimelineEvent[];
}

export const Module14History: React.FC<Module14HistoryProps> = ({
  countryName,
  events,
}) => {
  return (
    <section id="module-14-history" className="mb-14 scroll-mt-24" aria-label="14 History">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 14
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Geopolitical Milestones, Wars, Treaties & Strategic Turning Points
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <History className="size-6 text-trinetra-saffron" />
            <span>History: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical timeline of national trajectory. Chronicles foundational independence, major armed conflicts, peace treaties, constitutional reforms, economic liberalization pivots, and strategic nuclear tests.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Chronology: <strong className="text-white">{events?.length || 6}+ Milestones</strong>
          </span>
        </div>
      </div>

      {/* Complete Interactive Timeline Visual */}
      <EnhancedTimelineVisual
        events={events}
        countryName={countryName}
      />
    </section>
  );
};
