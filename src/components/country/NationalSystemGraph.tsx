import React, { useState } from "react";
import {
  Network,
  Landmark,
  TrendingUp,
  Shield,
  Globe2,
  ChevronRight,
  ExternalLink,
  Cpu,
  Flame,
  Ship,
  Radiation,
  Building,
  Users,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";

interface NationalSystemGraphProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
  onNavigateSection?: (sectionId: string) => void;
  onSelectRelationship?: (partnerId: string) => void;
}

export const NationalSystemGraph: React.FC<NationalSystemGraphProps> = ({
  country,
  deepProfile,
  onNavigateSection,
  onSelectRelationship,
}) => {
  const [activeNode, setActiveNode] = useState<string | null>("economy");

  const scrollTo = (id: string) => {
    if (onNavigateSection) {
      onNavigateSection(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Top partners from data
  const keyPartners = deepProfile?.competitions?.slice(0, 3).map((c) => ({ id: c.competitorId, name: c.competitorName, flag: c.flag })) || [
    { id: "CHN", name: "China", flag: "🇨🇳" },
    { id: "USA", name: "United States", flag: "🇺🇸" },
    { id: "RUS", name: "Russia", flag: "🇷🇺" },
  ];

  // Multilateral groups
  const keyOrgs = deepProfile?.geopoliticalPosition?.regionalOrganizations?.slice(0, 4) || [
    { name: "G20", significance: "Global economic steering group" },
    { name: "BRICS", significance: "Non-Western economic forum" },
    { name: "QUAD", significance: "Indo-Pacific maritime security" },
    { name: "SCO", significance: "Eurasian security dialogue" },
  ];

  return (
    <section className="mb-12" id="sec-system" aria-label="National System Diagram">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                04 // National System Architecture
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Interactive Sovereign Subsystems & Flow
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Network className="size-6 text-trinetra-saffron" />
              National System Diagram: {country.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Interconnected structure of the state. Click any subsystem node to jump directly to its verified intelligence module or bilateral relationship vector.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              3 Primary Subsystems · Interactive Nodes
            </span>
          </div>
        </div>

        {/* INTERACTIVE SYSTEM GRAPH CANVAS */}
        <div className="relative bg-[#0c0f16] border border-neutral-800/80 rounded-xl p-6 sm:p-8 overflow-x-auto">
          {/* Top Apex Node: Sovereign State */}
          <div className="flex justify-center mb-8">
            <div className="relative group p-4 rounded-xl bg-[#141a24] border-2 border-trinetra-saffron/80 text-center shadow-xl shadow-orange-500/10 min-w-[240px]">
              <span className="text-[10px] font-mono text-trinetra-saffron uppercase font-bold tracking-widest block">
                SOVEREIGN STATE APEX
              </span>
              <h3 className="font-display text-2xl text-white font-bold tracking-wide mt-1">
                {country.name.toUpperCase()}
              </h3>
              <p className="text-[11px] font-mono text-neutral-400 mt-1">
                {country.id} // {country.region}
              </p>
            </div>
          </div>

          {/* Connective SVG Lines for 3 Pillars */}
          <div className="hidden sm:block w-full max-w-4xl mx-auto h-8 relative mb-2">
            <svg className="w-full h-full text-neutral-700 stroke-current fill-none">
              <path d="M 50% 0 L 50% 50% L 16.6% 50% L 16.6% 100%" strokeWidth="2" strokeDasharray="4 4" />
              <path d="M 50% 0 L 50% 100%" strokeWidth="2" />
              <path d="M 50% 0 L 50% 50% L 83.3% 50% L 83.3% 100%" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* 3 Core Pillars: GOVERNMENT | ECONOMY | SECURITY */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
            {/* PILLAR 1: GOVERNMENT */}
            <div
              onClick={() => {
                setActiveNode("government");
                scrollTo("sec-leadership");
              }}
              className="p-5 rounded-xl bg-[#10141c] border border-neutral-800 hover:border-amber-400/80 transition-all cursor-pointer group shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Landmark className="size-4 text-amber-400" />
                  <h4 className="font-display text-lg text-white font-semibold group-hover:text-amber-300 transition-colors">
                    GOVERNMENT
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-black/50 px-2 py-0.5 rounded group-hover:text-white">
                  Inspect →
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Leadership:</span>
                  <span className="text-white font-semibold truncate max-w-[140px]">
                    {deepProfile?.leadership?.headOfGovernment?.name || "Executive"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Parliament:</span>
                  <span className="text-white truncate max-w-[140px]">
                    {deepProfile?.leadership?.legislature?.name || "Legislative Body"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Institutions:</span>
                  <span className="text-white truncate max-w-[140px]">
                    {deepProfile?.leadership?.judiciary?.highestCourt || "Supreme Court"}
                  </span>
                </div>
              </div>
            </div>

            {/* PILLAR 2: ECONOMY */}
            <div
              onClick={() => {
                setActiveNode("economy");
                scrollTo("sec-economy");
              }}
              className="p-5 rounded-xl bg-[#10141c] border border-neutral-800 hover:border-emerald-400/80 transition-all cursor-pointer group shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="size-4 text-emerald-400" />
                  <h4 className="font-display text-lg text-white font-semibold group-hover:text-emerald-300 transition-colors">
                    ECONOMY
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-black/50 px-2 py-0.5 rounded group-hover:text-white">
                  Inspect →
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Trade:</span>
                  <span className="text-emerald-400 font-semibold truncate max-w-[140px]">
                    {deepProfile?.tradeFlows?.totalExportsUsd || "Global Outbound"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Industry:</span>
                  <span className="text-white truncate max-w-[140px]">
                    {deepProfile?.economyStructure?.criticalIndustries?.[0]?.name || "Manufacturing"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Energy:</span>
                  <span className="text-amber-300 truncate max-w-[140px]">
                    Hydrocarbons / Refining
                  </span>
                </div>
              </div>
            </div>

            {/* PILLAR 3: SECURITY */}
            <div
              onClick={() => {
                setActiveNode("security");
                scrollTo("sec-military");
              }}
              className="p-5 rounded-xl bg-[#10141c] border border-neutral-800 hover:border-rose-400/80 transition-all cursor-pointer group shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <Shield className="size-4 text-rose-400" />
                  <h4 className="font-display text-lg text-white font-semibold group-hover:text-rose-300 transition-colors">
                    SECURITY
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-black/50 px-2 py-0.5 rounded group-hover:text-white">
                  Inspect →
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-300">
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Military:</span>
                  <span className="text-white font-semibold truncate max-w-[140px]">
                    {deepProfile?.militarySecurity?.defenseBudgetUsd || "Armed Forces"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Nuclear:</span>
                  <span className="text-rose-400 truncate max-w-[140px]">
                    {country.nuclear?.weapons_state ? "Triad Deterrent" : "Non-Nuclear"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
                  <span className="text-neutral-400">Cyber & Space:</span>
                  <span className="text-cyan-400 truncate max-w-[140px]">
                    {deepProfile?.space?.agency || "Space & Cyber"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Confluence Arrow to Foreign Policy */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-6 bg-neutral-700" />
          </div>

          {/* Middle Layer: FOREIGN POLICY & BILATERAL RELATIONSHIPS */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="p-5 rounded-xl bg-[#121622] border border-blue-500/30 shadow-xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Globe2 className="size-4 text-blue-400" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400">
                  FOREIGN POLICY & BILATERAL RELATIONSHIPS
                </span>
              </div>
              <p className="text-xs text-neutral-300 max-w-xl mx-auto mb-4 font-light">
                Direct strategic, economic, and security ties connecting {country.name} to major powers. Click a partner to view comparative intelligence:
              </p>

              {/* Bilateral Partner Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                {keyPartners.map((partner) => (
                  <button
                    key={partner.id}
                    onClick={() => {
                      if (onSelectRelationship) {
                        onSelectRelationship(partner.id);
                      } else {
                        window.location.href = `/rivalry?a=${country.id}&b=${partner.id}`;
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 hover:border-trinetra-saffron text-neutral-200 hover:text-white text-xs font-mono flex items-center gap-2 transition-colors cursor-pointer group"
                  >
                    <span>{partner.flag}</span>
                    <span className="font-semibold">{country.name} ↔ {partner.name}</span>
                    <ChevronRight className="size-3 text-neutral-500 group-hover:text-trinetra-saffron" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Confluence Arrow to Multilateral System */}
          <div className="flex justify-center mb-4">
            <div className="w-0.5 h-6 bg-neutral-700" />
          </div>

          {/* Bottom Layer: REGIONAL + GLOBAL SYSTEM */}
          <div className="max-w-4xl mx-auto">
            <div className="p-5 rounded-xl bg-[#0f121a] border border-neutral-800 text-center">
              <span className="font-mono text-[10px] text-neutral-400 uppercase font-bold tracking-widest block mb-2">
                REGIONAL + GLOBAL MULTILATERAL SYSTEM
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {keyOrgs.map((org) => (
                  <a
                    key={org.name}
                    href="/groups"
                    className="p-3 rounded-lg bg-black/50 border border-neutral-800 hover:border-neutral-600 transition-colors text-left group block"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-trinetra-saffron">
                        {org.name}
                      </span>
                      <ExternalLink className="size-3 text-neutral-600 group-hover:text-neutral-300" />
                    </div>
                    <span className="text-[10px] text-neutral-400 line-clamp-1 mt-1 block">
                      {org.significance}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
