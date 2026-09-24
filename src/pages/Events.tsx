import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  AlertTriangle,
  Radio,
  ArrowRight,
  Shield,
  Layers,
  Filter,
  Search,
  ExternalLink,
  Share2,
  TrendingUp,
  Anchor,
  Zap,
  Globe2,
  FileCheck2,
  ChevronRight,
  RefreshCw,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { STRATEGIC_EVENTS } from "../data/strategicEventsData";
import type { StrategicEvent, EventCategory } from "../types";
import { api } from "../services/api";

const CATEGORIES: EventCategory[] = [
  "Diplomatic",
  "Military",
  "Economic",
  "Energy",
  "Trade",
  "Technology",
  "Maritime",
  "Cyber",
  "Space",
  "Infrastructure",
  "Sanctions",
  "Treaties",
  "Humanitarian",
  "Political",
  "Security",
];

const SEVERITY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  CRITICAL: { bg: "bg-red-950/40", text: "text-red-400", border: "border-red-500/50" },
  HIGH: { bg: "bg-orange-950/40", text: "text-[#FF7A00]", border: "border-orange-500/50" },
  ELEVATED: { bg: "bg-yellow-950/40", text: "text-amber-400", border: "border-amber-500/50" },
  MONITORED: { bg: "bg-blue-950/40", text: "text-sky-400", border: "border-blue-500/50" },
};

export default function Events() {
  const [events, setEvents] = useState<StrategicEvent[]>(STRATEGIC_EVENTS);
  const [selectedEventId, setSelectedEventId] = useState<string>(STRATEGIC_EVENTS[0]?.id || "");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.getEvents()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setEvents(data);
          if (!selectedEventId) setSelectedEventId(data[0].id);
        }
      })
      .catch(() => {
        // Fallback to bundled STRATEGIC_EVENTS
      });
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((ev) => {
      const matchesCat = selectedCategory === "ALL" || ev.type.toLowerCase() === selectedCategory.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.whatHappened.toLowerCase().includes(q) ||
        ev.actors.some((a) => a.toLowerCase().includes(q)) ||
        ev.affectedCountries.some((c) => c.toLowerCase().includes(q)) ||
        ev.location.name.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [events, selectedCategory, searchQuery]);

  const activeEvent = useMemo(() => {
    return events.find((e) => e.id === selectedEventId) || filteredEvents[0] || events[0] || null;
  }, [events, selectedEventId, filteredEvents]);

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-200 selection:bg-[#FF7A00]/30 selection:text-white">
      <Header />

      <main className="mx-auto max-w-[1720px] px-4 sm:px-8 py-8">
        {/* Top Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] font-mono text-[11px] font-bold uppercase tracking-wider">
                STRATEGIC RADAR // REAL-TIME GEOPOLITICAL DYNAMICS
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                {filteredEvents.length} Active Monitored Flashpoints
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-neutral-100 font-normal tracking-tight">
              Global Strategic Events & Impact Graphs
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed font-light">
              Structured operational telemetry tracking state actions, maritime interdictions, infrastructure realignments, and multi-domain impact chains across the global intelligence graph.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search actor, strait, commodity..."
                className="pl-9 pr-4 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-[#FF7A00] w-64"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-neutral-800/60">
          <button
            onClick={() => setSelectedCategory("ALL")}
            className={`px-3 py-1 rounded text-xs font-mono transition-colors whitespace-nowrap ${
              selectedCategory === "ALL"
                ? "bg-[#FF7A00] text-black font-semibold"
                : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
            }`}
          >
            All Disciplines ({events.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = events.filter((e) => e.type.toLowerCase() === cat.toLowerCase()).length;
            if (count === 0) return null;
            const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded text-xs font-mono transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#FF7A00] text-black font-semibold"
                    : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* MAIN VISUALIZATION WORKSPACE: 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Column 1: Strategic Event Timeline (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Calendar className="size-3.5 text-[#FF7A00]" />
                Event Timeline Stream
              </span>
              <span className="text-[11px] font-mono text-neutral-500">
                {filteredEvents.length} Loaded
              </span>
            </div>

            <div className="space-y-3 max-h-[820px] overflow-y-auto pr-1">
              {filteredEvents.map((ev) => {
                const isSelected = activeEvent?.id === ev.id;
                const sevStyle = SEVERITY_COLORS[ev.severity] || SEVERITY_COLORS.HIGH;

                return (
                  <button
                    key={ev.id}
                    onClick={() => setSelectedEventId(ev.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group relative ${
                      isSelected
                        ? "bg-[#11141c] border-[#FF7A00] shadow-lg shadow-orange-950/20"
                        : "bg-[#0b0c10] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#0e1017]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">
                        {ev.type}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${sevStyle.bg} ${sevStyle.text} ${sevStyle.border}`}
                      >
                        {ev.severity}
                      </span>
                    </div>

                    <h3 className="font-serif text-base font-medium text-neutral-100 group-hover:text-[#FF7A00] transition-colors line-clamp-2 leading-snug">
                      {ev.title}
                    </h3>

                    <div className="flex items-center gap-3 mt-2.5 text-xs text-neutral-400 font-mono">
                      <span className="flex items-center gap-1 truncate max-w-[160px]">
                        <MapPin className="size-3 text-neutral-500 shrink-0" />
                        {ev.location.name}
                      </span>
                      <span>·</span>
                      <span>{ev.date}</span>
                    </div>

                    <p className="text-xs text-neutral-400 line-clamp-2 mt-2 font-light leading-relaxed">
                      {ev.whatHappened}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                      <span className="truncate max-w-[200px]">
                        Actors: {ev.actors.slice(0, 3).join(", ")}
                      </span>
                      <span className="text-[#FF7A00] flex items-center gap-0.5">
                        Inspect <ChevronRight className="size-3" />
                      </span>
                    </div>
                  </button>
                );
              })}

              {filteredEvents.length === 0 && (
                <div className="p-8 text-center border border-neutral-800 rounded-xl bg-neutral-900/30 text-neutral-400">
                  <AlertTriangle className="size-6 text-neutral-600 mx-auto mb-2" />
                  <p className="text-xs font-mono">No events match the selected filter</p>
                </div>
              )}
            </div>
          </div>

          {/* Column 2 & 3: Active Event Intelligence Dossier & Impact Graph (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {activeEvent && (
              <>
                {/* 1. COMPACT EVENT DETAIL PANEL & MAP COORDINATE HEADER */}
                <div className="border border-neutral-800 rounded-2xl bg-[#090b10] p-6 sm:p-8 shadow-xl relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-neutral-800 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#FF7A00]/10 border border-[#FF7A00]/40 text-[#FF7A00] font-bold">
                        {activeEvent.type} Flashpoint
                      </span>
                      <span
                        className={`font-mono text-xs uppercase px-2.5 py-1 rounded border font-semibold ${
                          SEVERITY_COLORS[activeEvent.severity]?.bg || ""
                        } ${SEVERITY_COLORS[activeEvent.severity]?.text || ""} ${
                          SEVERITY_COLORS[activeEvent.severity]?.border || ""
                        }`}
                      >
                        {activeEvent.severity} PRIORITY
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-[#FF7A00]" />
                        {activeEvent.location.name} [{activeEvent.location.lat.toFixed(2)}°N,{" "}
                        {activeEvent.location.lng.toFixed(2)}°E]
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-neutral-500" />
                        {activeEvent.date}
                      </span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl text-neutral-100 font-normal leading-tight mb-4">
                    {activeEvent.title}
                  </h2>

                  {/* 3-Column Quick Metrics Strip */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                        Primary Sovereign Actors
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeEvent.actors.map((actor) => (
                          <span
                            key={actor}
                            className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-200 text-xs font-medium border border-neutral-700"
                          >
                            {actor}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                        Affected Sovereigns & Treaties
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeEvent.affectedCountries.map((code) => (
                          <Link
                            key={code}
                            to={`/country?id=${code}`}
                            className="px-2 py-0.5 rounded bg-[#FF7A00]/10 text-[#FF7A00] hover:bg-[#FF7A00] hover:text-black transition-colors text-xs font-mono font-bold border border-[#FF7A00]/30"
                          >
                            {code}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                        Bilateral Axis Impact
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeEvent.affectedRelationships.map((pair) => (
                          <Link
                            key={pair}
                            to={`/compare?a=${pair.split("-")[0]}&b=${pair.split("-")[1]}`}
                            className="px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 hover:text-white hover:border-[#FF7A00] transition-colors text-xs font-mono border border-neutral-700"
                          >
                            {pair}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/80">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF7A00] mb-2 flex items-center gap-1.5">
                        <Radio className="size-3.5" />
                        What Happened
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        {activeEvent.whatHappened}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                        <TrendingUp className="size-3.5" />
                        What Changed (Strategic Inflection)
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                        {activeEvent.whatChanged}
                      </p>
                    </div>
                  </div>

                  {/* Strategic Significance Callout */}
                  <div className="mt-6 p-4 rounded-xl bg-[#12151f] border border-[#FF7A00]/30">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A00] font-bold block mb-1">
                      Strategic Geopolitical Significance
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                      {activeEvent.strategicSignificance}
                    </p>
                  </div>

                  {/* Affected Resource & Trade Flows */}
                  <div className="mt-6">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-2">
                      Compromised / Re-routed Flows
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeEvent.affectedFlows.map((flow, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-light flex items-center gap-2"
                        >
                          <Zap className="size-3 text-[#FF7A00]" />
                          <span>{flow}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Source & Verification Metadata */}
                  <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <FileCheck2 className="size-3.5 text-emerald-400" />
                      Source Authority: <strong className="text-neutral-300">{activeEvent.source.name}</strong>
                    </span>
                    <span>Date Verified: {activeEvent.source.date}</span>
                    {activeEvent.source.url && (
                      <a
                        href={activeEvent.source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#FF7A00] hover:underline flex items-center gap-1"
                      >
                        Inspect Official Source <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* 2. SECTION 19: EVENT INTELLIGENCE GRAPH (SVG FLOW DIAGRAM) */}
                <div className="border border-neutral-800 rounded-2xl bg-[#090b10] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Graph Theory // Vector Transmission
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-neutral-100 font-medium">
                        Event Intelligence Impact Graph
                      </h3>
                      <p className="text-xs text-neutral-400 font-light mt-1">
                        Interactive transmission chain tracing causal impact across sovereigns, relationships, and supply arteries.
                      </p>
                    </div>
                    <span className="text-xs font-mono text-neutral-500 bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                      7-Node Transmission Model
                    </span>
                  </div>

                  {/* Horizontal Flow Steps (Desktop & Mobile Responsive) */}
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-2 relative">
                    {/* Node 1: Event */}
                    <div className="p-3.5 rounded-xl bg-neutral-900 border border-[#FF7A00]/50 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-[#FF7A00] uppercase font-bold mb-1">
                        01 // EVENT
                      </div>
                      <div className="font-serif text-xs text-white font-medium line-clamp-3">
                        {activeEvent.title}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-neutral-500">
                        {activeEvent.type}
                      </div>
                    </div>

                    {/* Node 2: Actors */}
                    <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold mb-1">
                        02 // ACTORS
                      </div>
                      <div className="text-xs text-neutral-200 line-clamp-3 font-mono">
                        {activeEvent.actors.slice(0, 2).join(", ")}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-neutral-500">
                        Primary Powers
                      </div>
                    </div>

                    {/* Node 3: Location */}
                    <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold mb-1">
                        03 // LOCATION
                      </div>
                      <div className="text-xs text-neutral-200 line-clamp-3">
                        {activeEvent.location.name}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-neutral-500">
                        {activeEvent.location.region}
                      </div>
                    </div>

                    {/* Node 4: What Changed */}
                    <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-amber-400 uppercase font-bold mb-1">
                        04 // SHIFT
                      </div>
                      <div className="text-xs text-neutral-300 line-clamp-3 font-light leading-snug">
                        {activeEvent.whatChanged}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-neutral-500">
                        Systemic Inflection
                      </div>
                    </div>

                    {/* Node 5: Affected Countries */}
                    <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold mb-1">
                        05 // STATES
                      </div>
                      <div className="text-xs text-neutral-200 font-mono line-clamp-2">
                        {activeEvent.affectedCountries.slice(0, 4).join(", ")}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-[#FF7A00]">
                        {activeEvent.affectedCountries.length} Sovereigns
                      </div>
                    </div>

                    {/* Node 6: Affected Flows */}
                    <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-neutral-400 uppercase font-bold mb-1">
                        06 // FLOWS
                      </div>
                      <div className="text-xs text-neutral-300 font-light line-clamp-3 leading-snug">
                        {activeEvent.affectedFlows[0] || "Maritime cargo"}
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-neutral-500">
                        Supply Re-routing
                      </div>
                    </div>

                    {/* Node 7: Strategic Significance */}
                    <div className="p-3.5 rounded-xl bg-neutral-900 border border-emerald-500/40 text-center flex flex-col justify-between">
                      <div className="text-[10px] font-mono text-emerald-400 uppercase font-bold mb-1">
                        07 // IMPACT
                      </div>
                      <div className="text-xs text-neutral-200 line-clamp-3 font-medium">
                        Balance of Leverage Shift
                      </div>
                      <div className="mt-2 text-[9px] font-mono text-emerald-400">
                        Structural Reorder
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
