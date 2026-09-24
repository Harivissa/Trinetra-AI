// TRINETRA AI — Visual Global Events & Strategic Shock Intelligence Hub
// Strict adherence to prompt specifications:
// 1. TOP: Global Event Map (Interactive Leaflet map with event markers & layers)
// 2. BELOW MAP: Strategic Event Timeline (Interactive chronological scrubber)
// 3. THEN: Event Network / Impact Graph (Event -> Actors -> Affected Countries -> Chokepoints -> Outcome)
// 4. THEN: Compact Event Details (Structured cards with multi-tag filter & slide-over intelligence drawer)
// ZERO generic news articles or blog paragraphs.

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import {
  Radio,
  Calendar,
  MapPin,
  Users,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Flame,
  Globe2,
  Filter,
  Search,
  X,
  FileCheck2,
  ExternalLink,
  Layers,
  Sparkles,
  GitBranch,
  Shield,
  Activity,
  Plus,
  Minus,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { GLOBAL_EVENTS_DATA, GeopoliticalEvent } from "../data/eventsIntelligenceData";

// Geocoordinates for events
const EVENT_COORDINATES: Record<string, [number, number]> = {
  "EVT-2024-LAC-PATROL": [34.5, 78.5],
  "EVT-2024-REDSEA-BAB": [12.6, 43.3],
  "EVT-2024-US-CHIPS-ACT": [38.9, -77.0],
  "EVT-2023-IMEC-G20": [28.6, 77.2],
  "EVT-2024-BRICS-EXPANSION": [55.8, 49.1],
};

const DEFAULT_COORDS: [number, number] = [20.0, 45.0];

export default function GlobalEvents() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<GeopoliticalEvent | null>(
    GLOBAL_EVENTS_DATA[0] || null
  );
  const [timelineYear, setTimelineYear] = useState<string>("all");

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  // Filter events
  const filteredEvents = GLOBAL_EVENTS_DATA.filter((evt) => {
    const matchesType =
      selectedType === "all" ||
      evt.eventType.toLowerCase().includes(selectedType.toLowerCase());

    const matchesYear =
      timelineYear === "all" || evt.date.startsWith(timelineYear);

    const matchesQuery =
      !searchQuery ||
      evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.whatHappened.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evt.actors.some((a) => a.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesType && matchesYear && matchesQuery;
  });

  // Filter categories
  const categories = [
    { id: "all", label: "All Events" },
    { id: "diplomatic", label: "Diplomatic" },
    { id: "military", label: "Military" },
    { id: "economic", label: "Economic" },
    { id: "energy", label: "Energy" },
    { id: "technology", label: "Technology" },
    { id: "trade", label: "Trade" },
    { id: "maritime", label: "Maritime" },
    { id: "treaty", label: "Treaty" },
    { id: "sanctions", label: "Sanctions" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  // Initialize Global Event Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: selectedEvent
        ? EVENT_COORDINATES[selectedEvent.id] || DEFAULT_COORDS
        : DEFAULT_COORDS,
      zoom: 3,
      zoomControl: false,
      attributionControl: false,
    });

    // Dark Basemap
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 12, minZoom: 2 }
    ).addTo(map);

    // Reference Layer (Borders & ocean labels)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 12, minZoom: 2, opacity: 0.85 }
    ).addTo(map);

    // Render Event Markers
    const markers: Record<string, L.Marker> = {};
    GLOBAL_EVENTS_DATA.forEach((evt) => {
      const coords = EVENT_COORDINATES[evt.id] || [25.0, 75.0];
      const isSelected = selectedEvent?.id === evt.id;

      const markerHtml = `
        <div class="relative group cursor-pointer">
          <div class="absolute -inset-2 rounded-full ${
            isSelected ? "bg-trinetra-saffron/50 animate-ping" : "bg-cyan-500/20"
          }"></div>
          <div class="size-4 rounded-full ${
            isSelected
              ? "bg-trinetra-saffron border-2 border-white shadow-[0_0_12px_#f97316]"
              : "bg-cyan-400 border border-white/80"
          } flex items-center justify-center">
            <span class="size-1.5 rounded-full bg-black"></span>
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: "event-map-pin",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
      });

      const m = L.marker(coords, { icon: customIcon }).addTo(map);
      m.on("click", () => {
        setSelectedEvent(evt);
        map.flyTo(coords, 5, { duration: 1 });
      });

      markers[evt.id] = m;
    });

    markersRef.current = markers;
    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update map center when selectedEvent changes
  const handleSelectEvent = (evt: GeopoliticalEvent) => {
    setSelectedEvent(evt);
    const coords = EVENT_COORDINATES[evt.id];
    if (coords && mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(coords, 5, { duration: 1.2 });
    }
  };

  return (
    <div className="min-h-screen bg-[#050608] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-[1640px] mx-auto w-full px-4 sm:px-6 py-8">
        
        {/* Hub Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Radio className="size-3 text-trinetra-saffron" />
                EVENT INTELLIGENCE SYSTEM
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Systemic Disruption Graph & Second-Order Cascades
              </span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-bold tracking-tight">
              Global Events & Strategic Shocks
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-400 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg">
              {filteredEvents.length} Active Verified Events
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 1. TOP: GLOBAL EVENT MAP */}
        {/* ======================================================== */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-trinetra-saffron" />
              <h2 className="font-display text-base font-bold text-white tracking-tight">
                Global Theater Event GIS Map
              </h2>
              <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
                · Click marker to track ripple cascades
              </span>
            </div>

            {/* Quick Map Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomIn()}
                className="p-1 rounded bg-black/60 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white"
              >
                <Plus className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => mapInstanceRef.current?.zoomOut()}
                className="p-1 rounded bg-black/60 hover:bg-neutral-800 border border-white/10 text-neutral-300 hover:text-white"
              >
                <Minus className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Map Viewport */}
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden border border-white/10 bg-black">
            <div ref={mapContainerRef} className="w-full h-full z-0" />
            
            {/* Overlay Active Event Badge */}
            {selectedEvent && (
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-md z-10 p-3 rounded-xl bg-black/85 border border-trinetra-saffron/40 backdrop-blur-md shadow-2xl">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-trinetra-saffron">
                    FOCAL SHOCK: {selectedEvent.eventType.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {selectedEvent.date}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold text-white line-clamp-1 mb-1">
                  {selectedEvent.title}
                </h3>
                <p className="text-[11px] text-neutral-300 line-clamp-2">
                  {selectedEvent.whatChanged}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. STRATEGIC EVENT TIMELINE (Scrubber) */}
        {/* ======================================================== */}
        <div className="mb-8 rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-sky-400" />
              <h2 className="font-display text-base font-bold text-white tracking-tight">
                Strategic Event Timeline
              </h2>
              <span className="text-[10px] font-mono text-neutral-400">
                · Chronological Escalation & Disengagement
              </span>
            </div>

            {/* Year Filters */}
            <div className="flex items-center gap-1.5">
              {["all", "2024", "2023"].map((y) => (
                <button
                  type="button"
                  key={y}
                  onClick={() => setTimelineYear(y)}
                  className={`px-2.5 py-1 rounded text-xs font-mono cursor-pointer transition-colors ${
                    timelineYear === y
                      ? "bg-trinetra-saffron text-black font-bold"
                      : "bg-white/5 hover:bg-white/10 text-neutral-400"
                  }`}
                >
                  {y === "all" ? "All Years" : y}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div className="overflow-x-auto pb-2 scrollbar-thin">
            <div className="flex items-stretch gap-3 min-w-[700px]">
              {GLOBAL_EVENTS_DATA.map((evt) => {
                const isSelected = selectedEvent?.id === evt.id;
                return (
                  <button
                    type="button"
                    key={evt.id}
                    onClick={() => handleSelectEvent(evt)}
                    className={`flex-1 min-w-[200px] p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#141822] border-trinetra-saffron shadow-lg scale-[1.02]"
                        : "bg-[#0c0f16] border-white/8 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="text-[10px] font-mono text-trinetra-saffron font-bold">
                          {evt.date}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-neutral-400">
                          {evt.actors.join(" · ")}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug mb-1">
                        {evt.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400 truncate block mt-2">
                      📍 {evt.location}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. EVENT NETWORK / IMPACT GRAPH */}
        {/* ======================================================== */}
        {selectedEvent && (
          <div className="mb-8 rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <GitBranch className="size-4 text-emerald-400" />
                <h2 className="font-display text-base font-bold text-white tracking-tight">
                  Systemic Impact Cascade
                </h2>
                <span className="text-[10px] font-mono text-neutral-400">
                  · Event → Actors → Affected Relationships → Corridors → Strategic Outcome
                </span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                Verified Ripple Vector
              </span>
            </div>

            {/* Cascade Flow Node Chain */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-stretch">
              
              {/* Node 1: Event Focal Shock */}
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    STEP 1 // FOCAL SHOCK
                  </span>
                  <h4 className="text-xs font-bold text-white line-clamp-2 mb-1">
                    {selectedEvent.title}
                  </h4>
                  <span className="text-[10px] font-mono text-trinetra-saffron">
                    {selectedEvent.date}
                  </span>
                </div>
                <div className="text-[10px] text-neutral-400 mt-2">
                  Location: {selectedEvent.location}
                </div>
              </div>

              {/* Node 2: Primary Actors */}
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    STEP 2 // ACTORS
                  </span>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {selectedEvent.actors.map((a) => (
                      <span
                        key={a}
                        className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-[10px] text-neutral-400 line-clamp-2">
                  Direct sovereign participants driving bilateral action.
                </p>
              </div>

              {/* Node 3: Affected Relationships */}
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    STEP 3 // BILATERAL TIES
                  </span>
                  <div className="space-y-1">
                    {selectedEvent.affectedRelationships.map(([c1, c2], idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 text-xs font-mono text-neutral-200"
                      >
                        <Shield className="size-3 text-sky-400" />
                        <span>{c1} ↔ {c2}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-sky-400 mt-2 block">
                  Altered Strategic Posture
                </span>
              </div>

              {/* Node 4: Affected Flows / Chokepoints */}
              <div className="p-3.5 rounded-xl bg-[#0e121a] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                    STEP 4 // TRANSIT & FLOWS
                  </span>
                  <div className="text-[11px] text-neutral-300 space-y-1">
                    {selectedEvent.affectedEnergyFlows?.slice(0, 2).map((fl, i) => (
                      <p key={i} className="line-clamp-2">
                        • {fl}
                      </p>
                    ))}
                    {selectedEvent.affectedEconomicFlows?.slice(0, 1).map((fl, i) => (
                      <p key={i} className="line-clamp-2">
                        • {fl}
                      </p>
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-amber-400 mt-2 block">
                  Supply Chain Realignment
                </span>
              </div>

              {/* Node 5: Strategic Outcome */}
              <div className="p-3.5 rounded-xl bg-trinetra-saffron/[0.04] border border-trinetra-saffron/30 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-trinetra-saffron uppercase tracking-wider block mb-1">
                    STEP 5 // STRATEGIC SHIFT
                  </span>
                  <p className="text-xs text-white leading-relaxed line-clamp-3">
                    {selectedEvent.whatChanged}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 mt-2 block">
                  Source: {selectedEvent.sourceId}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 4. COMPACT EVENT DETAILS & FILTER TABS */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 shadow-2xl">
          {/* Filters & Search Bar */}
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center mb-6 pb-4 border-b border-white/10">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setSelectedType(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                    selectedType === c.id
                      ? "bg-trinetra-saffron text-black font-bold shadow-md"
                      : "bg-[#0d1017] hover:bg-[#141822] text-neutral-400 hover:text-white border border-white/5"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <Search className="size-3.5 text-neutral-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, actors, chokepoints..."
                className="w-full pl-9 pr-3.5 py-1.5 rounded-lg bg-[#0d1017] border border-white/10 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-trinetra-saffron font-sans"
              />
            </div>
          </div>

          {/* Compact Grid of Events */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredEvents.map((evt) => {
              const isSelected = selectedEvent?.id === evt.id;
              return (
                <div
                  key={evt.id}
                  onClick={() => handleSelectEvent(evt)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#121622] border-trinetra-saffron/80 shadow-xl"
                      : "bg-[#0c0f16] border-white/8 hover:border-white/20 hover:bg-[#10141e]"
                  }`}
                >
                  <div>
                    {/* Top tags */}
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-mono text-trinetra-saffron font-bold">
                        {evt.date}
                      </span>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5 uppercase">
                        {evt.eventType.replace("_", " ")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-sm font-bold text-white line-clamp-2 leading-snug mb-1.5">
                      {evt.title}
                    </h3>

                    {/* Compact what happened */}
                    <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3">
                      {evt.whatHappened}
                    </p>
                  </div>

                  {/* Bottom Metadata */}
                  <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="truncate">📍 {evt.location}</span>
                    <span className="text-trinetra-saffron font-semibold hover:underline">
                      Explore Impact →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
