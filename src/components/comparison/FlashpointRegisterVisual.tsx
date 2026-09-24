import React, { useState } from "react";
import {
  AlertOctagon,
  MapPin,
  History,
  Activity,
  Flame,
  Filter,
  Layers,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import type { RivalryAnalysis } from "../../types";

interface FlashpointRegisterVisualProps {
  analysis: RivalryAnalysis;
}

interface FlashpointItem {
  id: string;
  type: "BORDER" | "MARITIME" | "PROXY" | "WATER" | "TRADE" | "ALLIANCE";
  title: string;
  location: string;
  historicalContext: string;
  currentStatus: string;
  escalationTrigger: string;
  severity: "CRITICAL" | "HIGH" | "ELEVATED";
}

export const FlashpointRegisterVisual: React.FC<FlashpointRegisterVisualProps> = ({ analysis }) => {
  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  const [selectedType, setSelectedType] = useState<string>("ALL");
  const [activeFlashpointId, setActiveFlashpointId] = useState<string>("fp-1");

  // Bilateral flashpoint registry derived from geographic and strategic friction points
  const flashpoints: FlashpointItem[] = [
    {
      id: "fp-1",
      type: "BORDER",
      title: "Line of Actual Control & Disputed Frontier Sectors",
      location: "Himalayan Frontier / Aksai Chin / Eastern Sector",
      historicalContext: "Rooted in differing perceptions of the border resulting from colonial cartography, leading to the 1962 conflict and subsequent disengagements without demarcated settlement.",
      currentStatus: "Militarized stand-off with forward troop concentration, buffer zones established in specific friction sectors, and periodic corps-commander level diplomatic talks.",
      escalationTrigger: "Forward patrol contact along un-demarcated patrolling points or unilateral infrastructure construction in contested buffer zones.",
      severity: "CRITICAL",
    },
    {
      id: "fp-2",
      type: "MARITIME",
      title: "Indian Ocean & Malacca Sea Lane Approaches",
      location: "Northern Indian Ocean Basin / Ten Degree Channel / Malacca Approaches",
      historicalContext: "Strategic convergence where energy flows transit narrow straits, driving naval modernization and expanded maritime domain awareness patrols.",
      currentStatus: "Persistent naval presence, anti-submarine surveillance operations, and dual-use commercial port facility developments along regional sea lanes.",
      escalationTrigger: "Submarine shadowing incident or maritime interdiction of energy transport within key maritime chokepoint funnels.",
      severity: "HIGH",
    },
    {
      id: "fp-3",
      type: "PROXY",
      title: "Regional Influence in Peripheral Buffer States",
      location: "South Asia / Central Asia / Indian Ocean Island States",
      historicalContext: "Competition between traditional regional primacy and expanded external infrastructure loans, development assistance, and security agreements.",
      currentStatus: "Active infrastructure financing, port lease arrangements, and sovereign diplomatic overtures following electoral transitions in buffer states.",
      escalationTrigger: "Deployment of military reconnaissance assets or permanent naval basing agreements in an immediate neighboring buffer state.",
      severity: "ELEVATED",
    },
    {
      id: "fp-4",
      type: "WATER",
      title: "Transboundary Riparian Hydrology & Dam Construction",
      location: "Yarlung Tsangpo / Brahmaputra & Indus River Basins",
      historicalContext: "Major international rivers originate in high-altitude plateaus, flowing downstream into heavily populated agricultural river valleys.",
      currentStatus: "Upstream construction of mega-hydropower cascades without formal water-sharing treaties, reliant on seasonal hydrological data exchange pacts.",
      escalationTrigger: "Sudden uncoordinated water discharge causing downstream flooding, or diversion during dry seasons impacting agricultural security.",
      severity: "HIGH",
    },
    {
      id: "fp-5",
      type: "TRADE",
      title: "Tariff Barriers, Tech Screening & Market Decoupling",
      location: "Commercial Cross-Border Trade & Digital Platforms",
      historicalContext: "Growing bilateral trade deficits combined with national security investigations into foreign telecommunications, software applications, and capital investments.",
      currentStatus: "Restrictions on foreign mobile applications, heightened scrutiny of foreign direct investment in sensitive sectors, and anti-dumping duties on key industrial goods.",
      escalationTrigger: "Complete unilateral export embargo on critical pharmaceutical ingredients or rare earth processing technologies.",
      severity: "ELEVATED",
    },
    {
      id: "fp-6",
      type: "ALLIANCE",
      title: "Plurilateral Alignments & Strategic Balancing",
      location: "Indo-Pacific & Eurasian Strategic Architecture",
      historicalContext: "Formation of minilateral defense arrangements (such as QUAD) perceived by opposing states as counter-containment coalitions.",
      currentStatus: "Joint military and naval exercises, enhanced satellite intelligence sharing, and defense industrial co-development pacts.",
      escalationTrigger: "Formalization of binding mutual defense clauses or permanent rotational deployment of third-party strategic assets.",
      severity: "HIGH",
    },
  ];

  const types = ["ALL", "BORDER", "MARITIME", "PROXY", "WATER", "TRADE", "ALLIANCE"];

  const filtered = flashpoints.filter(
    (fp) => selectedType === "ALL" || fp.type === selectedType
  );

  const activeFlashpoint = flashpoints.find((f) => f.id === activeFlashpointId) || flashpoints[0];

  const getSeverityBadge = (sev: string) => {
    switch (sev) {
      case "CRITICAL":
        return "bg-red-950 text-red-400 border-red-500/40";
      case "HIGH":
        return "bg-amber-950 text-amber-400 border-amber-500/40";
      default:
        return "bg-sky-950 text-sky-400 border-sky-500/40";
    }
  };

  return (
    <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              06 // Friction Catalog
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Bilateral Flashpoint & Crisis Vector Register
            </span>
          </div>
          <h3 className="font-display text-2xl text-white font-medium flex items-center gap-3">
            <AlertOctagon className="size-6 text-trinetra-saffron" />
            Bilateral Flashpoint Register: {nameA} ⚡ {nameB}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-3xl font-light">
            Systematic catalog of territorial, maritime, riparian, and proxy friction points with historical context, operational status, and escalation triggers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1 bg-[#0c0f16] border border-neutral-800 p-1 rounded-xl">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-colors ${
                selectedType === t
                  ? "bg-trinetra-saffron text-black font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Workstation: Left Flashpoint Cards, Right Deep Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Interactive List */}
        <div className="lg:col-span-6 space-y-3">
          {filtered.map((fp) => {
            const isSelected = activeFlashpoint.id === fp.id;

            return (
              <button
                key={fp.id}
                onClick={() => setActiveFlashpointId(fp.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#141822] border-trinetra-saffron shadow-lg shadow-orange-500/10"
                    : "bg-[#0b0e14] border-neutral-800 hover:border-neutral-700 hover:bg-[#0f131a]"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black border border-neutral-800 text-neutral-400 font-bold">
                      {fp.type}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border font-semibold ${getSeverityBadge(
                        fp.severity
                      )}`}
                    >
                      {fp.severity}
                    </span>
                  </div>
                  <ChevronRight
                    className={`size-4 transition-transform ${
                      isSelected ? "text-trinetra-saffron rotate-90" : "text-neutral-600"
                    }`}
                  />
                </div>

                <h4 className="font-display text-sm font-semibold text-white">
                  {fp.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1 font-mono">
                  <MapPin className="size-3 text-neutral-500" />
                  <span className="truncate">{fp.location}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Dossier View */}
        <div className="lg:col-span-6 border border-neutral-800 rounded-xl bg-[#0c0f16] p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
              <span className="font-mono text-[10px] uppercase text-trinetra-saffron font-bold tracking-wider">
                FLASHPOINT INTELLIGENCE DOSSIER
              </span>
              <span
                className={`font-mono text-[10px] px-2.5 py-1 rounded border font-bold ${getSeverityBadge(
                  activeFlashpoint.severity
                )}`}
              >
                {activeFlashpoint.severity} THREAT PROFILE
              </span>
            </div>

            <h3 className="font-display text-xl text-white font-bold mb-2">
              {activeFlashpoint.title}
            </h3>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-5">
              <MapPin className="size-3.5 text-trinetra-saffron" />
              <span>Location: {activeFlashpoint.location}</span>
            </div>

            <div className="space-y-4">
              {/* Historical Context */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-neutral-400 tracking-wider flex items-center gap-1.5">
                  <History className="size-3 text-neutral-400" />
                  Historical Context & Origins
                </span>
                <p className="text-xs text-neutral-200 leading-relaxed font-light">
                  {activeFlashpoint.historicalContext}
                </p>
              </div>

              {/* Current Status */}
              <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-sky-400 tracking-wider flex items-center gap-1.5">
                  <Activity className="size-3 text-sky-400" />
                  Current Operational Status
                </span>
                <p className="text-xs text-neutral-200 leading-relaxed font-light">
                  {activeFlashpoint.currentStatus}
                </p>
              </div>

              {/* Escalation Trigger */}
              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                  <Flame className="size-3 text-red-400" />
                  Escalation Trigger Scenario
                </span>
                <p className="text-xs text-red-200/90 leading-relaxed font-light">
                  {activeFlashpoint.escalationTrigger}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-500">
            <span>DYAD: {codeA} ⚡ {codeB}</span>
            <span>SOURCE: TRINETRA CONFLICT REGISTRY</span>
          </div>
        </div>
      </div>
    </div>
  );
};
