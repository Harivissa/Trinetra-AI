// TRINETRA AI — Recent Strategic Developments Visual Timeline Strip & Sovereign Creed Banner
// Exactly reproduces the bottom timeline strip and creed banner from the reference visual:

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  Briefcase,
  Cpu,
  Flame,
  Globe2,
  ExternalLink,
  X,
  FileCheck2,
} from "lucide-react";
import type { Country } from "../../types";

interface RecentStrategicDevelopmentsBarProps {
  country: Country;
}

interface EventItem {
  id: string;
  date: string;
  title: string;
  category: "Diplomatic" | "Military" | "Economic" | "Technology" | "Energy";
  impact: string;
  source: string;
  details: string;
}

const COUNTRY_DEVELOPMENTS: Record<string, EventItem[]> = {
  IND: [
    {
      id: "ev-ind-1",
      date: "21 Oct 2024",
      title: "India-China LAC Patrolling Agreement",
      category: "Diplomatic",
      impact: "Restores patrolling rights in Depsang and Demchok, cooling 4-year border standoff.",
      source: "Ministry of External Affairs (MEA)",
      details: "Diplomatic disengagement pact brokered ahead of the BRICS Kazan Summit establishes coordinated patrolling routines along disputed friction points in Eastern Ladakh.",
    },
    {
      id: "ev-ind-2",
      date: "05 Sep 2024",
      title: "INS Arighaat Commissioned",
      category: "Military",
      impact: "Second nuclear-powered ballistic missile submarine (SSBN) strengthens continuous sea-based deterrence.",
      source: "Ministry of Defence / Indian Navy",
      details: "Commissioning of India's second indigenous SSBN carrying K-15 SLBMs secures continuous at-sea nuclear triad survivability in the Bay of Bengal bastion.",
    },
    {
      id: "ev-ind-3",
      date: "18 Aug 2024",
      title: "India-UAE CEPA Expansion",
      category: "Economic",
      impact: "Bilateral non-oil trade expands with direct local currency settlement (INR-AED) framework.",
      source: "Department of Commerce",
      details: "Comprehensive Economic Partnership Agreement deepens supply chain integration and expands sovereign wealth fund investments into Indian green energy and logistics.",
    },
    {
      id: "ev-ind-4",
      date: "12 Jul 2024",
      title: "New Semiconductor Fab Approvals",
      category: "Technology",
      impact: "Tata-PSMC and Micron packaging plants advance domestic silicon independence.",
      source: "India Semiconductor Mission (ISM)",
      details: "$10B incentive pipeline moves to construction phase in Dholera and Sanand to hedge geopolitical disruptions in East Asian chip foundries.",
    },
    {
      id: "ev-ind-5",
      date: "28 Jun 2024",
      title: "Renewable Energy Capacity Milestone",
      category: "Energy",
      impact: "Non-fossil generation capacity reaches 200 GW, on track for 500 GW target by 2030.",
      source: "Ministry of New and Renewable Energy",
      details: "Rapid solar and wind deployment softens crude import dependence growth and anchors the International Solar Alliance global grid initiative.",
    },
  ],
};

export const RecentStrategicDevelopmentsBar: React.FC<RecentStrategicDevelopmentsBarProps> = ({
  country,
}) => {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events = COUNTRY_DEVELOPMENTS[country.id] || [
    {
      id: "ev-gen-1",
      date: "Oct 2024",
      title: `${country.name} Bilateral Trade Accord`,
      category: "Economic" as const,
      impact: "Strengthens regional supply chain resilience.",
      source: "Official Gazette",
      details: "Strategic trade agreement signed to expand export corridors.",
    },
    {
      id: "ev-gen-2",
      date: "Aug 2024",
      title: `${country.name} Defense Modernization Review`,
      category: "Military" as const,
      impact: "Realigns defense spending toward asymmetric readiness.",
      source: "Ministry of Defense",
      details: "Comprehensive review of armed forces doctrine and procurement.",
    },
    {
      id: "ev-gen-3",
      date: "Jun 2024",
      title: "Regional Summit Strategic Communiqué",
      category: "Diplomatic" as const,
      impact: "Reaffirms commitment to multilateral security.",
      source: "Diplomatic Corps",
      details: "Joint declarations on regional stability and maritime freedom.",
    },
  ];

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case "Diplomatic":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Military":
        return "bg-rose-500/20 text-rose-300 border-rose-500/30";
      case "Economic":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30";
      case "Technology":
        return "bg-sky-500/20 text-sky-300 border-sky-500/30";
      case "Energy":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30";
      default:
        return "bg-neutral-500/20 text-neutral-300 border-neutral-500/30";
    }
  };

  return (
    <div className="mb-10">
      {/* TIMELINE STRIP CONTAINER */}
      <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 shadow-2xl mb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-trinetra-saffron" />
            <h3 className="font-display text-base sm:text-lg font-bold text-white">
              Recent Strategic Developments
            </h3>
            <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline">
              · Verified Timeline
            </span>
          </div>
          <Link
            to="/events"
            className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1.5"
          >
            <span>View All Events</span>
            <ArrowRight className="size-3" />
          </Link>
        </div>

        {/* Horizontal Timeline Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {events.map((ev) => (
            <button
              type="button"
              key={ev.id}
              onClick={() => setSelectedEvent(ev)}
              className="p-3 rounded-xl bg-[#0c1017] hover:bg-[#131722] border border-white/5 hover:border-trinetra-saffron/50 text-left transition-all group flex flex-col justify-between cursor-pointer min-h-[110px]"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono text-neutral-400">
                    {ev.date}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${getCategoryBadge(
                      ev.category
                    )}`}
                  >
                    {ev.category}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-amber-300 line-clamp-2 leading-tight mb-1">
                  {ev.title}
                </h4>
              </div>
              <p className="text-[10px] text-neutral-400 line-clamp-2 leading-tight mt-1">
                {ev.impact}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* SOVEREIGN CREED BANNER */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-r from-[#0b0e14] via-[#10141d] to-[#07090e] p-6 sm:p-8 text-center shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06)_0,transparent_70%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-serif italic text-lg sm:text-2xl text-white/95 mb-3 leading-snug">
            {country.id === "IND"
              ? "“A stronger India contributes to a more stable, multipolar world.”"
              : `“Sovereign strategic autonomy, empirical clarity, and national resilience.”`}
          </p>
          <div className="flex items-center justify-center gap-3 text-[11px] font-mono text-neutral-400">
            <span className="text-trinetra-saffron font-bold tracking-widest">
              TRINETRA AI
            </span>
            <span>·</span>
            <span className="tracking-wider uppercase">
              OBSERVE · ANALYZE · CONNECT · UNDERSTAND · SERVE BHARAT
            </span>
          </div>
        </div>
      </div>

      {/* EVENT MODAL */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl border border-trinetra-saffron/40 bg-[#0a0d14] p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border inline-block mb-1.5 ${getCategoryBadge(
                    selectedEvent.category
                  )}`}
                >
                  {selectedEvent.category} · {selectedEvent.date}
                </span>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedEvent.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="p-1 rounded text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-3 mb-5">
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 mb-1">
                  Strategic Significance
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed bg-[#0d1017] p-3 rounded-lg border border-white/5">
                  {selectedEvent.details}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-wider text-trinetra-saffron mb-1">
                  Primary Source & Authority
                </h4>
                <p className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                  <FileCheck2 className="size-3.5 text-emerald-400" />
                  {selectedEvent.source}
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-3 flex items-center justify-between">
              <Link
                to="/events"
                className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1"
              >
                Open in Global Events Hub
                <ExternalLink className="size-3" />
              </Link>
              <button
                type="button"
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
