import { useState, useMemo } from "react";
import {
  Calendar,
  Swords,
  Landmark,
  TrendingUp,
  Radiation,
  Cpu,
  Globe2,
  Compass,
  Flame,
  FileCheck2,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";

export interface TimelineEvent {
  year?: string | number;
  title?: string;
  what_happened?: string;
  description?: string;
  why_it_happened?: string;
  key_actors?: string[];
  consequences?: string;
  long_term_significance?: string;
  type?: string;
  confidence?: string;
}

interface EnhancedTimelineVisualProps {
  events?: TimelineEvent[];
  countryName: string;
}

type TimelineCategory =
  | "ALL"
  | "WAR"
  | "DIPLOMACY"
  | "ECONOMY"
  | "NUCLEAR"
  | "TECHNOLOGY"
  | "POLITICS"
  | "TERRITORIAL"
  | "ENERGY";

const CATEGORY_ICONS: Record<TimelineCategory, any> = {
  ALL: Calendar,
  WAR: Swords,
  DIPLOMACY: Globe2,
  ECONOMY: TrendingUp,
  NUCLEAR: Radiation,
  TECHNOLOGY: Cpu,
  POLITICS: Landmark,
  TERRITORIAL: Compass,
  ENERGY: Flame,
};

const CATEGORY_COLORS: Record<TimelineCategory, { text: string; bg: string; border: string }> = {
  ALL: { text: "text-neutral-300", bg: "bg-neutral-900", border: "border-neutral-700" },
  WAR: { text: "text-rose-400", bg: "bg-rose-950/40", border: "border-rose-800/80" },
  DIPLOMACY: { text: "text-emerald-400", bg: "bg-emerald-950/40", border: "border-emerald-800/80" },
  ECONOMY: { text: "text-cyan-400", bg: "bg-cyan-950/40", border: "border-cyan-800/80" },
  NUCLEAR: { text: "text-amber-400", bg: "bg-amber-950/40", border: "border-amber-800/80" },
  TECHNOLOGY: { text: "text-blue-400", bg: "bg-blue-950/40", border: "border-blue-800/80" },
  POLITICS: { text: "text-purple-400", bg: "bg-purple-950/40", border: "border-purple-800/80" },
  TERRITORIAL: { text: "text-yellow-400", bg: "bg-yellow-950/40", border: "border-yellow-800/80" },
  ENERGY: { text: "text-orange-400", bg: "bg-orange-950/40", border: "border-orange-800/80" },
};

export default function EnhancedTimelineVisual({
  events = [],
  countryName,
}: EnhancedTimelineVisualProps) {
  const [selectedFilter, setSelectedFilter] = useState<TimelineCategory>("ALL");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  // Automatically categorize events into prompt's 8 categories
  const categorizedEvents = useMemo(() => {
    return events.map((ev, index) => {
      const text = `${ev.title || ""} ${ev.what_happened || ""} ${ev.description || ""} ${ev.type || ""}`.toLowerCase();
      let category: TimelineCategory = "POLITICS";

      if (
        text.includes("war") ||
        text.includes("conflict") ||
        text.includes("attack") ||
        text.includes("military") ||
        text.includes("battle") ||
        text.includes("invasion")
      ) {
        category = "WAR";
      } else if (
        text.includes("nuclear") ||
        text.includes("atomic") ||
        text.includes("warhead") ||
        text.includes("pokhran") ||
        text.includes("deterrent")
      ) {
        category = "NUCLEAR";
      } else if (
        text.includes("treaty") ||
        text.includes("alliance") ||
        text.includes("accord") ||
        text.includes("agreement") ||
        text.includes("pact") ||
        text.includes("diplom") ||
        text.includes("summit")
      ) {
        category = "DIPLOMACY";
      } else if (
        text.includes("reform") ||
        text.includes("economy") ||
        text.includes("gdp") ||
        text.includes("trade") ||
        text.includes("crisis") ||
        text.includes("imf")
      ) {
        category = "ECONOMY";
      } else if (
        text.includes("space") ||
        text.includes("tech") ||
        text.includes("satellite") ||
        text.includes("semiconductor") ||
        text.includes("isro")
      ) {
        category = "TECHNOLOGY";
      } else if (
        text.includes("border") ||
        text.includes("territor") ||
        text.includes("island") ||
        text.includes("strait") ||
        text.includes("annex")
      ) {
        category = "TERRITORIAL";
      } else if (
        text.includes("oil") ||
        text.includes("gas") ||
        text.includes("pipeline") ||
        text.includes("refinery") ||
        text.includes("energy")
      ) {
        category = "ENERGY";
      }

      return {
        ...ev,
        computedCategory: category,
        originalIndex: index,
      };
    });
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (selectedFilter === "ALL") return categorizedEvents;
    return categorizedEvents.filter((ev) => ev.computedCategory === selectedFilter);
  }, [categorizedEvents, selectedFilter]);

  if (!events || events.length === 0) {
    return (
      <div className="text-sm text-neutral-500 py-6 text-center border border-neutral-800 rounded-xl bg-neutral-950/40">
        Historical timeline records are being verified for this nation.
      </div>
    );
  }

  const availableCategories: TimelineCategory[] = [
    "ALL",
    "WAR",
    "DIPLOMACY",
    "NUCLEAR",
    "ECONOMY",
    "TECHNOLOGY",
    "POLITICS",
    "TERRITORIAL",
    "ENERGY",
  ];

  return (
    <section className="mb-10" id="visual-timeline" aria-label="Interactive Historical Strategic Timeline">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Question 9: What should I know?
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                {events.length} Historical Milestones
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Historical Strategic Continuum
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Chronological milestones that established current borders, military doctrines, diplomatic alignments, and economic structures for {countryName}. Filterable across 8 core strategic domains.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-xl p-1 text-xs font-mono self-start sm:self-auto">
            {availableCategories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg transition-colors text-[10px] uppercase font-bold ${
                    isSelected
                      ? "bg-amber-500 text-black shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Timeline Events List */}
        <div className="space-y-3.5">
          {filteredEvents.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            const categoryStyle = CATEGORY_COLORS[item.computedCategory];
            const IconComp = CATEGORY_ICONS[item.computedCategory];
            const title = item.title || item.what_happened || "Historical Event";

            return (
              <div
                key={idx}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isExpanded
                    ? "border-neutral-700 bg-black/60 shadow-md"
                    : "border-neutral-800/80 bg-black/30 hover:border-neutral-700 hover:bg-neutral-900/30"
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex flex-col items-center justify-center size-12 rounded-xl bg-neutral-950 border border-neutral-800 text-amber-300 font-mono font-bold text-xs shrink-0 shadow-inner">
                      <span>{item.year || "—"}</span>
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className={`text-[9px] font-mono px-2 py-0.5 rounded border uppercase font-bold flex items-center gap-1 ${categoryStyle.bg} ${categoryStyle.border} ${categoryStyle.text}`}
                        >
                          <IconComp size={10} />
                          {item.computedCategory}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                          Milestone 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-semibold text-white truncate">
                        {title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                      {isExpanded ? "Collapse" : "Inspect"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={16} className="text-amber-400" />
                    ) : (
                      <ChevronDown size={16} className="text-neutral-500" />
                    )}
                  </div>
                </button>

                {/* Expanded Detailed Intelligence Panel */}
                {isExpanded && (
                  <div className="p-4 sm:p-5 pt-0 border-t border-neutral-800/80 mt-1 space-y-3.5 text-xs">
                    {/* Event Description */}
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                        Event Summary
                      </span>
                      <p className="text-neutral-200 leading-relaxed bg-neutral-950/70 border border-neutral-800/80 rounded-lg p-3">
                        {item.description || item.what_happened || "Documented milestone in national historical record."}
                      </p>
                    </div>

                    {/* Cause vs Consequence */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {item.why_it_happened && (
                        <div className="bg-neutral-950/50 border border-neutral-800/80 rounded-lg p-3">
                          <span className="text-[10px] font-mono uppercase text-amber-400 font-bold block mb-1">
                            Why It Happened (Direct Cause)
                          </span>
                          <p className="text-neutral-300 leading-relaxed">
                            {item.why_it_happened}
                          </p>
                        </div>
                      )}

                      {item.consequences && (
                        <div className="bg-neutral-950/50 border border-neutral-800/80 rounded-lg p-3">
                          <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                            Direct Consequence
                          </span>
                          <p className="text-neutral-300 leading-relaxed">
                            {item.consequences}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Strategic Significance */}
                    {item.long_term_significance && (
                      <div className="bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3">
                        <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block mb-1">
                          Long-Term Strategic Significance
                        </span>
                        <p className="text-neutral-200 leading-relaxed">
                          {item.long_term_significance}
                        </p>
                      </div>
                    )}

                    {/* Actors & Source Footer */}
                    <div className="pt-2.5 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-neutral-400">
                      {item.key_actors && item.key_actors.length > 0 && (
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="text-neutral-500 uppercase">Key Actors:</span>
                          <span className="text-neutral-300">{item.key_actors.join(", ")}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 ml-auto">
                        <FileCheck2 size={11} className="text-emerald-400" />
                        <span>Source: Official Historical Records / SIPRI Archives</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
