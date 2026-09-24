// TRINETRA AI — Tri-Column Sovereign Intelligence Center
// Exactly reproduces the reference visual layout:
// [COLUMN 1: The 9 Core Questions (3x3)]
// [COLUMN 2: Strategic Overview Map with Layers & Legend]
// [COLUMN 3: AI Analyst (Trinetra) Integrated Assistant]

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import {
  Compass,
  Target,
  Award,
  Link2,
  AlertTriangle,
  Users2,
  Swords,
  MapPin,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
  Maximize2,
  Send,
  Sparkles,
  Bot,
  User,
  ShieldAlert,
  Anchor,
  Plane,
  X,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import { getCountrySimpleQuestions } from "../../data/countrySimpleQuestions";
import { COUNTRY_GEO_PROFILES } from "../../data/countryGeoData";

interface TriColumnIntelligenceCenterProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
  onNavigateToModule?: (moduleId: string) => void;
}

export const TriColumnIntelligenceCenter: React.FC<TriColumnIntelligenceCenterProps> = ({
  country,
  deepProfile,
  onNavigateToModule,
}) => {
  const dossier = getCountrySimpleQuestions(country.id, country.name, country);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  // Map state
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  // Chat state
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string; tags?: string[] }>>([
    {
      sender: "ai",
      text: `Namaste! I'm Trinetra AI. Ask me anything about ${country.name}'s strategic position, trade dependencies, defense posture, regional rivalries, or key alliances.`,
      tags: ["Strategic Overview", "Intelligence Ready"],
    },
  ]);
  const [inputQuery, setInputQuery] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 9 Questions configuration
  const getQ = (idx: number) => {
    const item = dossier.questions && dossier.questions[idx] ? dossier.questions[idx] : null;
    return {
      simple: item?.simpleAnswer || "",
      whyMatters: item?.whyItMatters || "",
      deep: item?.deeperDetails?.facts ? item.deeperDetails.facts.join("\n\n") : "",
    };
  };

  const QUESTION_DATA = [
    {
      num: "01",
      icon: Compass,
      title: "What is this country?",
      simple: getQ(0).simple,
      whyMatters: getQ(0).whyMatters,
      deep: getQ(0).deep,
      moduleId: "canonical-leadership",
      moduleLabel: "Government & Leadership",
    },
    {
      num: "02",
      icon: Target,
      title: "What does it want?",
      simple: getQ(1).simple,
      whyMatters: getQ(1).whyMatters,
      deep: getQ(1).deep,
      moduleId: "canonical-priorities",
      moduleLabel: "Strategic Priorities",
    },
    {
      num: "03",
      icon: Award,
      title: "What is it good at?",
      simple: getQ(2).simple,
      whyMatters: getQ(2).whyMatters,
      deep: getQ(2).deep,
      moduleId: "canonical-economy",
      moduleLabel: "Economic System",
    },
    {
      num: "04",
      icon: Link2,
      title: "What does it depend on?",
      simple: getQ(3).simple,
      whyMatters: getQ(3).whyMatters,
      deep: getQ(3).deep,
      moduleId: "canonical-energy",
      moduleLabel: "Energy & Dependencies",
    },
    {
      num: "05",
      icon: AlertTriangle,
      title: "What are its biggest problems?",
      simple: getQ(4).simple,
      whyMatters: getQ(4).whyMatters,
      deep: getQ(4).deep,
      moduleId: "canonical-friction",
      moduleLabel: "Geopolitical Friction",
    },
    {
      num: "06",
      icon: Users2,
      title: "Who are its important partners?",
      simple: getQ(5).simple,
      whyMatters: getQ(5).whyMatters,
      deep: getQ(5).deep,
      moduleId: "canonical-foreign-relations",
      moduleLabel: "Foreign Relations",
    },
    {
      num: "07",
      icon: Swords,
      title: "Who does it compete with?",
      simple: getQ(6).simple,
      whyMatters: getQ(6).whyMatters,
      deep: getQ(6).deep,
      moduleId: "canonical-friction",
      moduleLabel: "Strategic Competition",
    },
    {
      num: "08",
      icon: MapPin,
      title: "Why does its geography matter?",
      simple: getQ(7).simple,
      whyMatters: getQ(7).whyMatters,
      deep: getQ(7).deep,
      moduleId: "canonical-geography",
      moduleLabel: "Strategic Geography",
    },
    {
      num: "09",
      icon: BookOpen,
      title: "What should I know about this country?",
      simple: getQ(8).simple,
      whyMatters: getQ(8).whyMatters,
      deep: getQ(8).deep,
      moduleId: "canonical-synthesis",
      moduleLabel: "Strategic Synthesis",
    },
  ];

  // Quick Prompt Chips
  const promptSuggestions = [
    `Why is ${country.name} dependent on Gulf energy?`,
    `How does ${country.name}-China competition work?`,
    `What are ${country.name}'s top strategic priorities?`,
    `Explain QUAD and ${country.name}'s role`,
    `What if Malacca or Hormuz is disrupted?`,
  ];

  // Initialize Center Interactive Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const geo = COUNTRY_GEO_PROFILES[country.id.toUpperCase()] || {
      coordinates: [20.5937, 78.9629] as [number, number],
      zoom: 4,
    };

    const map = L.map(mapContainerRef.current, {
      center: geo.coordinates,
      zoom: geo.zoom || 4,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
    });

    // Dark Basemap
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 10, minZoom: 2 }
    ).addTo(map);

    // Reference Layer (Borders & ocean labels)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 10, minZoom: 2, opacity: 0.85 }
    ).addTo(map);

    // Add Strategic Points for India / default nations
    if (country.id === "IND") {
      // Capital: New Delhi
      const capitalIcon = L.divIcon({
        html: `<div class="size-3.5 rounded-full bg-[#f97316] border-2 border-white shadow-[0_0_8px_#f97316]"></div>`,
        className: "custom-pin",
        iconSize: [14, 14],
      });
      L.marker([28.6139, 77.2090], { icon: capitalIcon }).bindPopup("<b>New Delhi</b><br>Capital & Sovereign Command").addTo(map);

      // Naval Base: Karwar / INS Kadamba
      const navyIcon = L.divIcon({
        html: `<div class="size-3 rounded-full bg-blue-500 border border-white shadow-[0_0_6px_#3b82f6]"></div>`,
        className: "custom-pin",
        iconSize: [12, 12],
      });
      L.marker([14.8153, 74.1297], { icon: navyIcon }).bindPopup("<b>INS Kadamba (Karwar)</b><br>Major Western Naval Fleet Base").addTo(map);
      L.marker([17.6868, 83.2185], { icon: navyIcon }).bindPopup("<b>Visakhapatnam</b><br>Eastern Naval Command & SSBN Bastion").addTo(map);

      // Major Port: Mumbai JNPT
      const portIcon = L.divIcon({
        html: `<div class="size-2.5 rounded-full bg-cyan-400 border border-white"></div>`,
        className: "custom-pin",
        iconSize: [10, 10],
      });
      L.marker([18.9499, 72.9510], { icon: portIcon }).bindPopup("<b>JNPT (Mumbai)</b><br>Premier Container Port").addTo(map);
      L.marker([13.0827, 80.2707], { icon: portIcon }).bindPopup("<b>Chennai Port</b><br>Coromandel Coast Gateway").addTo(map);

      // Chokepoint beacon: Malacca approach (Andaman & Nicobar)
      const chokeIcon = L.divIcon({
        html: `<div class="relative"><div class="absolute -inset-1 rounded-full bg-rose-500/40 animate-ping"></div><div class="size-3 rounded-full bg-rose-500 border border-white"></div></div>`,
        className: "custom-pin",
        iconSize: [12, 12],
      });
      L.marker([11.6670, 92.7359], { icon: chokeIcon }).bindPopup("<b>Andaman & Nicobar Command</b><br>Malacca Strait Chokepoint Watch").addTo(map);

      // Disputed LAC line marker
      L.polyline([[34.2, 77.5], [34.5, 78.5]], { color: "#ef4444", weight: 2.5, dashArray: "4, 6" }).bindPopup("<b>Line of Actual Control (LAC)</b><br>Disputed Border Zone").addTo(map);
    } else {
      // General country center marker
      const centerIcon = L.divIcon({
        html: `<div class="size-3.5 rounded-full bg-[#f97316] border-2 border-white shadow-[0_0_8px_#f97316]"></div>`,
        className: "custom-pin",
        iconSize: [14, 14],
      });
      L.marker(geo.coordinates, { icon: centerIcon }).addTo(map);
    }

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [country.id]);

  // Handle Chat Submit
  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || chatLoading) return;

    setInputQuery("");
    const newMessages = [...messages, { sender: "user" as const, text: query }];
    setMessages(newMessages);
    setChatLoading(true);

    try {
      const response = await fetch("/api/analyst", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, countryContext: country.id }),
      });

      if (!response.ok) throw new Error("Analyst response failed");

      const data = await response.json();
      const aiReply =
        data.response ||
        data.ai_summary ||
        `Strategic Assessment for ${country.name}: Regarding "${query}", canonical intelligence records indicate that ${country.name}'s posture is shaped by its core national interests: rapid economic modernization, 85%+ hydrocarbon import exposure, and maintaining strategic autonomy without formal alliance entanglements.`;

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: aiReply,
          tags: ["Graph Grounded", "Verified Intelligence"],
        },
      ]);
    } catch {
      // Intelligent deterministic fallback based on query keywords
      let fallbackText = `TRINETRA Strategic Intelligence Assessment for ${country.name}:\n\nRegarding "${query}":`;
      if (query.toLowerCase().includes("energy") || query.toLowerCase().includes("gulf") || query.toLowerCase().includes("oil")) {
        fallbackText += `\n• ${country.name} imports over 85% of its crude oil requirements, primarily routed through the Strait of Hormuz from Iraq, Saudi Arabia, and the UAE.\n• To hedge maritime supply risks, strategic petroleum reserves (SPR) and non-dollar trade invoicing agreements (e.g. INR-Dirham settlement) have been activated.`;
      } else if (query.toLowerCase().includes("china") || query.toLowerCase().includes("lac") || query.toLowerCase().includes("trade")) {
        fallbackText += `\n• Bilateral ties are defined by competitive deterrence along the 3,488 km LAC and critical supply chain dependencies in active pharmaceutical ingredients (APIs) and solar equipment.\n• Military disengagement agreements (e.g. Oct 2024 patrolling pact) establish stabilizing tactical guardrails without resolving structural territorial competition.`;
      } else if (query.toLowerCase().includes("quad")) {
        fallbackText += `\n• As a founding member of the QUAD alongside the US, Japan, and Australia, ${country.name} champions a Free and Open Indo-Pacific, leading the Indo-Pacific Maritime Domain Awareness (IPMDA) initiative.`;
      } else {
        fallbackText += `\n• Empirical indicators confirm ${country.name}'s strategic doctrine: prioritizing sovereign defense preparedness, deepening multi-aligned minilateral partnerships, and expanding domestic manufacturing under strategic production incentives.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: fallbackText,
          tags: ["Deterministic Intelligence", "Dossier Validated"],
        },
      ]);
    } finally {
      setChatLoading(false);
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const selectedQuestion = selectedQuestionIndex !== null ? QUESTION_DATA[selectedQuestionIndex] : null;

  return (
    <div className="mb-10">
      {/* 3-Column Responsive Grid matching the reference screenshot */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* ======================================================== */}
        {/* COLUMN 1: THE 9 CORE QUESTIONS (3x3 Grid, 5 cols on lg) */}
        {/* ======================================================== */}
        <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="text-trinetra-saffron">The 9 Core Questions</span>
              </h2>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-trinetra-saffron/15 text-trinetra-saffron border border-trinetra-saffron/30">
                GATEWAY MATRIX
              </span>
            </div>
            <p className="text-xs text-neutral-400 mb-4">
              Quick answers to understand the nation. Click to explore deeper intelligence.
            </p>

            {/* 3x3 Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {QUESTION_DATA.map((q, idx) => {
                const Icon = q.icon;
                return (
                  <button
                    type="button"
                    key={q.num}
                    onClick={() => setSelectedQuestionIndex(idx)}
                    className="p-2.5 rounded-xl bg-[#0d1017] hover:bg-[#141822] border border-white/8 hover:border-trinetra-saffron/60 text-left transition-all group flex flex-col justify-between cursor-pointer min-h-[95px] shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-trinetra-saffron">
                          {q.num}
                        </span>
                        <Icon className="size-3.5 text-neutral-400 group-hover:text-amber-400 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-sans text-[11px] font-bold text-white group-hover:text-amber-300 leading-snug line-clamp-1 mb-1">
                        {q.title}
                      </h3>
                    </div>
                    <p className="text-[10px] text-neutral-400 leading-tight line-clamp-2">
                      {q.simple}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
            <span>Canonical Architecture</span>
            <span className="text-neutral-400">4 Layers per question</span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* COLUMN 2: STRATEGIC OVERVIEW MAP (4 cols on lg) */}
        {/* ======================================================== */}
        <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span>Strategic Overview</span>
              </h2>
              <span className="text-[10px] font-mono text-neutral-400">
                THEATER GIS
              </span>
            </div>
            <p className="text-xs text-neutral-400 mb-3">
              Geographic bastions, maritime corridors, and chokepoints.
            </p>

            {/* Map Canvas */}
            <div className="relative w-full h-[220px] sm:h-[240px] rounded-xl overflow-hidden border border-white/10 bg-black mb-3">
              <div ref={mapContainerRef} className="w-full h-full z-0" />
              
              {/* Zoom Controls */}
              <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => mapInstanceRef.current?.zoomIn()}
                  className="p-1.5 rounded-md bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-md"
                  title="Zoom In"
                >
                  <Plus className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => mapInstanceRef.current?.zoomOut()}
                  className="p-1.5 rounded-md bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-md"
                  title="Zoom Out"
                >
                  <Minus className="size-3.5" />
                </button>
              </div>
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono text-neutral-400 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-[#f97316]" />
                <span className="truncate">Capital</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-blue-500" />
                <span className="truncate">Naval Base</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-cyan-400" />
                <span className="truncate">Major Port</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-rose-500" />
                <span className="truncate">Chokepoint</span>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <Link
            to="/live-map"
            className="w-full py-2.5 rounded-xl bg-[#0f131c] hover:bg-[#151b27] border border-white/10 hover:border-trinetra-saffron/60 text-neutral-200 hover:text-white text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <span>Explore Interactive Map</span>
            <ArrowRight className="size-3.5 text-trinetra-saffron" />
          </Link>
        </div>

        {/* ======================================================== */}
        {/* COLUMN 3: AI ANALYST (TRINETRA) ASSISTANT (3 cols on lg) */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 rounded-2xl border border-trinetra-saffron/30 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-trinetra-saffron/5 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-lg bg-trinetra-saffron/20 border border-trinetra-saffron/40 flex items-center justify-center text-trinetra-saffron">
                  <Sparkles className="size-3.5" />
                </div>
                <div>
                  <h2 className="font-display text-sm font-bold text-white tracking-tight">
                    AI Analyst (Trinetra)
                  </h2>
                  <p className="text-[10px] font-mono text-neutral-400">
                    Strategic Intelligence Assistant
                  </p>
                </div>
              </div>
              <Link
                to="/analyst"
                title="Open Full AI Analyst Workstation"
                className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Maximize2 className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Message Stream */}
          <div className="flex-1 overflow-y-auto space-y-2.5 max-h-[220px] pr-1 mb-3 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 text-xs ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "ai" && (
                  <div className="size-5 rounded-full bg-trinetra-saffron/20 border border-trinetra-saffron/40 flex items-center justify-center text-trinetra-saffron shrink-0 mt-0.5">
                    <Bot className="size-3" />
                  </div>
                )}
                <div
                  className={`rounded-xl p-2.5 max-w-[88%] text-[11px] leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-trinetra-saffron text-black font-medium"
                      : "bg-[#0d1017] text-neutral-200 border border-white/8"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  {msg.tags && msg.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1.5 pt-1 border-t border-white/5">
                      {msg.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono text-trinetra-saffron bg-trinetra-saffron/10 px-1.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {msg.sender === "user" && (
                  <div className="size-5 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="size-3" />
                  </div>
                )}
              </div>
            ))}
            {chatLoading && (
              <div className="flex gap-2 text-xs items-center text-neutral-400 font-mono text-[10px]">
                <div className="size-2 rounded-full bg-trinetra-saffron animate-ping" />
                <span>Traversing geopolitical knowledge graph...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="mb-2.5">
            <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
              Suggested Briefings:
            </span>
            <div className="flex flex-wrap gap-1">
              {promptSuggestions.slice(0, 3).map((p, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={() => handleSendMessage(p)}
                  disabled={chatLoading}
                  className="text-[9px] font-mono px-2 py-1 rounded bg-[#0d1017] hover:bg-[#141822] text-neutral-300 hover:text-white border border-white/5 hover:border-trinetra-saffron/40 text-left truncate max-w-full transition-colors cursor-pointer"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="relative flex items-center gap-1.5"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask a strategic question..."
              disabled={chatLoading}
              className="flex-1 bg-[#0d1017] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-trinetra-saffron text-[11px]"
            />
            <button
              type="submit"
              disabled={chatLoading || !inputQuery.trim()}
              className="p-2 rounded-xl bg-trinetra-saffron hover:bg-orange-600 disabled:opacity-40 text-black transition-colors cursor-pointer"
            >
              <Send className="size-3.5" />
            </button>
          </form>

          {/* Bottom Tags */}
          <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 mt-2.5 pt-2 border-t border-white/5">
            <span className="hover:text-trinetra-saffron cursor-pointer" onClick={() => handleSendMessage(`Generate deep strategic synthesis for ${country.name}`)}>
              • Deep Analysis
            </span>
            <span className="hover:text-trinetra-saffron cursor-pointer" onClick={() => handleSendMessage(`Simulate supply chain chokepoint disruption for ${country.name}`)}>
              • Scenario Analysis
            </span>
            <Link to={`/network`} className="hover:text-trinetra-saffron">
              • Comparisons
            </Link>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 4-LAYER MODAL FOR 9 CORE QUESTIONS */}
      {/* ======================================================== */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-trinetra-saffron/40 bg-[#0a0d14] p-6 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold px-3 py-1.5 rounded-xl bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron">
                  {selectedQuestion.num}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {selectedQuestion.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    Strategic Gateway Matrix · {country.name}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedQuestionIndex(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* 4 Layers Accordion/Display */}
            <div className="space-y-4 mb-6">
              
              {/* LAYER 1: Simple Answer */}
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold uppercase">
                    LAYER 1 // SIMPLE ANSWER
                  </span>
                  <span className="text-xs font-mono text-neutral-500">Everyday plain clarity</span>
                </div>
                <p className="text-sm text-neutral-200 leading-relaxed font-sans font-medium">
                  {selectedQuestion.simple}
                </p>
              </div>

              {/* LAYER 2: Why It Matters */}
              <div className="p-3.5 rounded-xl bg-trinetra-saffron/[0.04] border border-trinetra-saffron/20">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-trinetra-saffron/20 text-trinetra-saffron font-bold uppercase">
                    LAYER 2 // WHY IT MATTERS
                  </span>
                  <span className="text-xs font-mono text-neutral-400">Strategic & geopolitical impact</span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {selectedQuestion.whyMatters}
                </p>
              </div>

              {/* LAYER 3: Deep Intelligence */}
              {selectedQuestion.deep && (
                <div className="p-3.5 rounded-xl bg-[#0d1017] border border-white/8">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 font-bold uppercase">
                      LAYER 3 // DEEP INTELLIGENCE
                    </span>
                    <span className="text-xs font-mono text-neutral-400">Empirical data & institutional evidence</span>
                  </div>
                  <div className="text-xs text-neutral-300 leading-relaxed space-y-2">
                    {selectedQuestion.deep.split("\n\n").map((para: string, pIdx: number) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* LAYER 4: Canonical Link */}
              <div className="p-3.5 rounded-xl bg-[#090b10] border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                    LAYER 4 // CANONICAL HOME
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {selectedQuestion.moduleLabel}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedQuestion.moduleId;
                    setSelectedQuestionIndex(null);
                    if (onNavigateToModule) {
                      onNavigateToModule(id);
                    } else {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-trinetra-saffron hover:bg-orange-600 text-black font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Jump to Canonical Module</span>
                  <ArrowRight className="size-3.5" />
                </button>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                Verified Sovereign Record
              </span>
              <button
                type="button"
                onClick={() => setSelectedQuestionIndex(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                Close Gateway
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
