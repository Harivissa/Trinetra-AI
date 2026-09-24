// TRINETRA AI — 6-Card Visual Intelligence Modules Dashboard
// Exactly matches the lower intelligence modules row from the reference visual:
// [1. Government & Leadership] [2. Economic Snapshot] [3. Defence & Security]
// [4. Energy & Dependencies]   [5. Strategic Relationships] [6. Strategic Priorities]

import React from "react";
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Flame,
  Globe,
  Target,
  ExternalLink,
  Users,
  Anchor,
  Plane,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";

interface VisualModulesDashboardProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
  onJumpToSection?: (sectionId: string) => void;
}

export const VisualModulesDashboard: React.FC<VisualModulesDashboardProps> = ({
  country,
  deepProfile,
  onJumpToSection,
}) => {
  const jump = (id: string) => {
    if (onJumpToSection) {
      onJumpToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 1. Leadership info
  const headOfStateName = deepProfile?.leadership?.headOfState?.name || "Droupadi Murmu";
  const headOfStateTitle = deepProfile?.leadership?.headOfState?.title || "President of India";
  const headOfStateSince = deepProfile?.leadership?.headOfState?.since || "Since Jul 2022";

  const headOfGovName = deepProfile?.leadership?.headOfGovernment?.name || "Narendra Modi";
  const headOfGovTitle = deepProfile?.leadership?.headOfGovernment?.title || "Prime Minister of India";
  const headOfGovSince = deepProfile?.leadership?.headOfGovernment?.since || "Since May 2014";

  // 2. Economy
  const gdpFormatted = deepProfile?.economyStructure?.gdpNominal || (country as any)?.economy?.gdp_nominal || "$3.94 T";

  // 3. Defence
  const armyPersonnel = "1.2 M";
  const navyPersonnel = "70 K";
  const airForcePersonnel = "1.4 M";

  // 4. Energy
  const crudeDependence = "85%";

  return (
    <div className="mb-10">
      {/* 6-Card Grid: 2 rows of 3 columns on lg/xl */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
        
        {/* ======================================================== */}
        {/* CARD 1: GOVERNMENT & LEADERSHIP */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">01</span>
                <h3 className="font-display text-base font-bold text-white">
                  Government & Leadership
                </h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                EXECUTIVE
              </span>
            </div>

            {/* 2 Leader Profiles Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Head of State */}
              <div className="p-3 rounded-xl bg-[#0c1017] border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-8 rounded-full overflow-hidden bg-neutral-800 border border-white/15 shrink-0 flex items-center justify-center text-xs font-bold text-neutral-300">
                    {country.id === "IND" ? (
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                        alt={headOfStateName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      headOfStateName.charAt(0)
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-white truncate">
                      {headOfStateName}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-400 truncate block">
                      {headOfStateTitle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {headOfStateSince}
                </span>
              </div>

              {/* Head of Government */}
              <div className="p-3 rounded-xl bg-[#0c1017] border border-white/5 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-2">
                  <div className="size-8 rounded-full overflow-hidden bg-neutral-800 border border-white/15 shrink-0 flex items-center justify-center text-xs font-bold text-amber-300">
                    {country.id === "IND" ? (
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                        alt={headOfGovName}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      headOfGovName.charAt(0)
                    )}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs font-bold text-white truncate">
                      {headOfGovName}
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-400 truncate block">
                      {headOfGovTitle}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">
                  {headOfGovSince}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              Federal parliamentary democratic republic with institutional separation of powers between executive, bicameral Parliament, and Supreme Court.
            </p>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-leadership")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Government</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* CARD 2: ECONOMIC SNAPSHOT */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">02</span>
                <h3 className="font-display text-base font-bold text-white">
                  Economic Snapshot
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">
                {gdpFormatted}
              </span>
            </div>

            {/* Visual GDP Trend Line & Sectors Mini Chart */}
            <div className="space-y-3 mb-3">
              {/* Trend line SVG */}
              <div className="p-2.5 rounded-xl bg-[#0c1017] border border-white/5">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mb-1">
                  <span>GDP Trajectory (2015 – 2024)</span>
                  <span className="text-emerald-400 font-bold">+76% Expansion</span>
                </div>
                <svg className="w-full h-12 overflow-visible" viewBox="0 0 200 40">
                  <path
                    d="M 5,34 Q 40,30 80,26 T 140,16 T 195,6"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="195" cy="6" r="3.5" fill="#f97316" />
                </svg>
                <div className="flex justify-between text-[9px] font-mono text-neutral-500 mt-1">
                  <span>$2.10T (2015)</span>
                  <span>$2.87T (2019)</span>
                  <span className="text-white font-bold">$3.94T (2024)</span>
                </div>
              </div>

              {/* Sector breakdown horizontal bars */}
              <div className="grid grid-cols-3 gap-1.5 text-center font-mono text-[10px]">
                <div className="p-1.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-neutral-400 block text-[9px]">SERVICES</span>
                  <span className="text-white font-bold">55%</span>
                </div>
                <div className="p-1.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-neutral-400 block text-[9px]">INDUSTRY</span>
                  <span className="text-white font-bold">27%</span>
                </div>
                <div className="p-1.5 rounded bg-white/[0.03] border border-white/5">
                  <span className="text-neutral-400 block text-[9px]">AGRI</span>
                  <span className="text-white font-bold">18%</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-economy")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Economy</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* CARD 3: DEFENCE & SECURITY */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">03</span>
                <h3 className="font-display text-base font-bold text-white">
                  Defence & Security
                </h3>
              </div>
              <span className="text-[10px] font-mono text-rose-400 font-bold">
                $86.1B SIPRI
              </span>
            </div>

            {/* 3 Armed Services Visual Badges */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="p-2.5 rounded-xl bg-[#0c1017] border border-white/5 text-center flex flex-col justify-between">
                <div className="size-7 mx-auto rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-1.5">
                  <Shield className="size-3.5" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 block">ARMY</span>
                <span className="font-mono text-xs font-bold text-white">{armyPersonnel}</span>
                <span className="text-[9px] font-mono text-neutral-500">Active</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0c1017] border border-white/5 text-center flex flex-col justify-between">
                <div className="size-7 mx-auto rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-1.5">
                  <Anchor className="size-3.5" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 block">NAVY</span>
                <span className="font-mono text-xs font-bold text-white">{navyPersonnel}</span>
                <span className="text-[9px] font-mono text-neutral-500">Carrier Strike</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[#0c1017] border border-white/5 text-center flex flex-col justify-between">
                <div className="size-7 mx-auto rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-1.5">
                  <Plane className="size-3.5" />
                </div>
                <span className="text-[10px] font-mono text-neutral-400 block">AIR FORCE</span>
                <span className="font-mono text-xs font-bold text-white">{airForcePersonnel}</span>
                <span className="text-[9px] font-mono text-neutral-500">Combat Squads</span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              Nuclear triad sovereign with operational SSBN deterrent, two carrier battle groups, and theater command indigenization under Make-in-India.
            </p>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-defence")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Defence</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* CARD 4: ENERGY & DEPENDENCIES */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">04</span>
                <h3 className="font-display text-base font-bold text-white">
                  Energy & Dependencies
                </h3>
              </div>
              <span className="text-[10px] font-mono text-rose-400 font-bold">
                HIGH EXPOSURE
              </span>
            </div>

            {/* Refinery Graphic + Dependence Gauge */}
            <div className="p-3 rounded-xl bg-[#0c1017] border border-white/5 mb-3">
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className="text-neutral-300">Crude Import Dependence</span>
                <span className="text-rose-400 font-bold">{crudeDependence}</span>
              </div>
              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-neutral-800 overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-amber-500 to-rose-500 rounded-full" style={{ width: "85%" }} />
              </div>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>Top Suppliers: Iraq (21%), Russia (35%), Saudi (14%)</span>
              </div>
            </div>

            {/* Key Chokepoint & Resilience */}
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-neutral-300">
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[9px]">KEY TRANSIT</span>
                <span className="text-rose-300 font-semibold">Strait of Hormuz</span>
              </div>
              <div className="p-2 rounded bg-white/[0.02] border border-white/5">
                <span className="text-neutral-500 block text-[9px]">STRATEGIC BUFFER</span>
                <span className="text-emerald-400 font-semibold">74 Days SPR Stock</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-energy")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Energy</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* CARD 5: STRATEGIC RELATIONSHIPS */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">05</span>
                <h3 className="font-display text-base font-bold text-white">
                  Strategic Relationships
                </h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                MULTI-ALIGNMENT
              </span>
            </div>

            {/* Radial Spider Network Mini-Canvas */}
            <div className="relative w-full h-[120px] rounded-xl bg-[#0c1017] border border-white/5 flex items-center justify-center mb-3 overflow-hidden">
              {/* Center Node */}
              <div className="z-10 size-9 rounded-full bg-trinetra-saffron text-black font-bold font-mono text-xs flex items-center justify-center shadow-[0_0_12px_#f97316]">
                {country.id}
              </div>

              {/* Surrounding Nodes */}
              <div className="absolute top-2 left-6 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-neutral-300">
                USA (Comprehensive)
              </div>
              <div className="absolute top-2 right-6 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-neutral-300">
                Russia (Privileged)
              </div>
              <div className="absolute bottom-2 left-6 text-[10px] font-mono px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/30 text-rose-300">
                China (Rivalry)
              </div>
              <div className="absolute bottom-2 right-6 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 border border-white/10 text-neutral-300">
                France (Strategic)
              </div>

              {/* Connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 120">
                <line x1="150" y1="60" x2="60" y2="20" stroke="#f97316" strokeWidth="1" strokeDasharray="2, 2" opacity="0.6" />
                <line x1="150" y1="60" x2="240" y2="20" stroke="#f97316" strokeWidth="1" strokeDasharray="2, 2" opacity="0.6" />
                <line x1="150" y1="60" x2="60" y2="100" stroke="#ef4444" strokeWidth="1" strokeDasharray="2, 2" opacity="0.8" />
                <line x1="150" y1="60" x2="240" y2="100" stroke="#f97316" strokeWidth="1" strokeDasharray="2, 2" opacity="0.6" />
              </svg>
            </div>

            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
              Maintains issue-based strategic autonomy, bridging Western minilateral security networks with Global South economic groupings.
            </p>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-foreign-relations")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Relations</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

        {/* ======================================================== */}
        {/* CARD 6: STRATEGIC PRIORITIES */}
        {/* ======================================================== */}
        <div className="rounded-2xl border border-white/10 bg-[#07090e]/95 p-4 sm:p-5 flex flex-col justify-between shadow-2xl group hover:border-trinetra-saffron/40 transition-all">
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-trinetra-saffron">06</span>
                <h3 className="font-display text-base font-bold text-white">
                  Strategic Priorities
                </h3>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                DOCTRINE
              </span>
            </div>

            {/* 5 Ranked Priorities List */}
            <div className="space-y-1.5 mb-3">
              {[
                { rank: "1", title: "Sustained Economic Growth", focus: "7%+ target for Viksit Bharat 2047" },
                { rank: "2", title: "Border & Territorial Integrity", focus: "Northern LAC and Western LoC deterrence" },
                { rank: "3", title: "Energy & Supply Chain Security", focus: "Diversification, solar, and semiconductor fabs" },
                { rank: "4", title: "Maritime Influence & Indo-Pacific", focus: "Net security provider across Indian Ocean" },
                { rank: "5", title: "Technological & Defence Indigenization", focus: "Atmanirbhar Bharat aerospace & chips" },
              ].map((item) => (
                <div
                  key={item.rank}
                  className="flex items-center gap-2.5 p-1.5 rounded-lg bg-[#0c1017] border border-white/5"
                >
                  <span className="size-5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 font-mono text-[10px] font-bold text-trinetra-saffron flex items-center justify-center shrink-0">
                    {item.rank}
                  </span>
                  <div className="overflow-hidden">
                    <span className="text-xs font-semibold text-white truncate block">
                      {item.title}
                    </span>
                    <span className="text-[9px] font-mono text-neutral-400 truncate block">
                      {item.focus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => jump("canonical-priorities")}
            className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-trinetra-saffron hover:underline cursor-pointer"
          >
            <span>Explore Priorities</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
