// TRINETRA AI — Leadership & Political Architecture Visual Panel
// Section 03: WHO RUNS THE COUNTRY? & Political System
// Neutral, constitutional, factual, and timestamped.
import React, { useState } from "react";
import { Landmark, User, ShieldCheck, Vote, Scale, GitFork, Calendar, CheckCircle2 } from "lucide-react";
import type { LeadershipProfile } from "../../data/countryDeepProfileData";

interface LeadershipPanelProps {
  leadership: LeadershipProfile;
  countryName: string;
}

export const LeadershipPanel: React.FC<LeadershipPanelProps> = ({ leadership, countryName }) => {
  const [activeTab, setActiveTab] = useState<"leaders" | "architecture" | "powers">("leaders");

  return (
    <section className="mb-12" aria-label="Country Leadership & Political Architecture">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                03 // State & Governance
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Constitutional Architecture & Active Mandate
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Landmark className="size-6 text-trinetra-saffron" />
              Who Runs {countryName}?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Factual, non-partisan constitutional structure, active leadership mandates, and legislative dynamics for {countryName}.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-mono text-[11px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded">
              As of: <span className="text-neutral-200">{leadership.asOf}</span>
            </span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-neutral-850 pb-3 overflow-x-auto">
          <button
            onClick={() => setActiveTab("leaders")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
              activeTab === "leaders"
                ? "bg-trinetra-saffron text-black font-semibold shadow-md"
                : "text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800"
            }`}
          >
            <User className="size-3.5" />
            Executive Leadership
          </button>
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
              activeTab === "architecture"
                ? "bg-trinetra-saffron text-black font-semibold shadow-md"
                : "text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800"
            }`}
          >
            <GitFork className="size-3.5" />
            Constitutional Flow
          </button>
          <button
            onClick={() => setActiveTab("powers")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-2 ${
              activeTab === "powers"
                ? "bg-trinetra-saffron text-black font-semibold shadow-md"
                : "text-neutral-400 hover:text-white bg-neutral-900/60 border border-neutral-800"
            }`}
          >
            <Scale className="size-3.5" />
            Legislature & Judiciary
          </button>
        </div>

        {/* Tab 1: Executive Leadership Cards */}
        {activeTab === "leaders" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Head of State */}
            <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Head of State
                </span>
                <ShieldCheck className="size-4 text-emerald-400" />
              </div>
              <h3 className="text-lg font-display text-white font-medium mb-1">
                {leadership.headOfState.name}
              </h3>
              <p className="text-xs text-trinetra-saffron font-mono mb-2">
                {leadership.headOfState.title}
              </p>
              <div className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
                {leadership.headOfState.role}
              </div>
              <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>In Office:</span>
                <span className="text-neutral-200">{leadership.headOfState.since}</span>
              </div>
            </div>

            {/* Head of Government */}
            <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Head of Government
                </span>
                <User className="size-4 text-amber-400" />
              </div>
              <h3 className="text-lg font-display text-white font-medium mb-1">
                {leadership.headOfGovernment.name}
              </h3>
              <p className="text-xs text-amber-400 font-mono mb-2">
                {leadership.headOfGovernment.title}
              </p>
              <div className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
                {leadership.headOfGovernment.role}
              </div>
              <div className="pt-3 border-t border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>In Office:</span>
                <span className="text-neutral-200">{leadership.headOfGovernment.since}</span>
              </div>
            </div>

            {/* Governing Party & Mandate */}
            <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5 md:col-span-2 lg:col-span-1">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                  Governing Mandate
                </span>
                <Vote className="size-4 text-sky-400" />
              </div>
              <h3 className="text-lg font-display text-white font-medium mb-1">
                {leadership.governingParty}
              </h3>
              {leadership.governingCoalition && (
                <p className="text-xs text-sky-400 font-mono mb-2">
                  Coalition: {leadership.governingCoalition}
                </p>
              )}
              <div className="space-y-2 mt-3 pt-3 border-t border-neutral-800/60 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono">System Type:</span>
                  <span className="text-neutral-200 font-medium text-right">{leadership.systemType}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono">Date Took Office:</span>
                  <span className="text-neutral-200">{leadership.dateTookOffice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400 font-mono">Next Election:</span>
                  <span className="text-emerald-400 font-mono">{leadership.nextElection}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Constitutional Power Flow Diagram */}
        {activeTab === "architecture" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 mb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                <span className="size-2 rounded-full bg-trinetra-saffron" />
                <span>Constitutional Structure: </span>
                <strong className="text-white">{leadership.systemType}</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {leadership.powerFlow.map((flow, idx) => (
                <div key={idx} className="relative rounded-xl border border-neutral-800 bg-[#0c0e12] p-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-trinetra-saffron font-bold tracking-widest uppercase mb-1 block">
                      {flow.step}
                    </span>
                    <h4 className="text-sm font-display text-white font-medium mb-2">
                      {flow.actor}
                    </h4>
                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {flow.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t border-neutral-850 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                    <CheckCircle2 className="size-3 text-emerald-400 shrink-0" />
                    <span>Documented Authority</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Legislature & Judiciary */}
        {activeTab === "powers" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Legislature */}
            <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Vote className="size-4 text-trinetra-saffron" />
                <h3 className="font-display text-base text-white font-medium">
                  Legislature: {leadership.legislature.name}
                </h3>
              </div>
              <div className="space-y-3 text-xs text-neutral-300">
                {leadership.legislature.upperHouse && (
                  <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Upper Chamber</span>
                    <span className="text-white font-medium">{leadership.legislature.upperHouse}</span>
                  </div>
                )}
                {leadership.legislature.lowerHouse && (
                  <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Lower Chamber</span>
                    <span className="text-white font-medium">{leadership.legislature.lowerHouse}</span>
                  </div>
                )}
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Current Seat Distribution</span>
                  <span className="text-neutral-300">{leadership.legislature.composition}</span>
                </div>
              </div>
            </div>

            {/* Judiciary */}
            <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
              <div className="flex items-center gap-2 mb-3">
                <Scale className="size-4 text-emerald-400" />
                <h3 className="font-display text-base text-white font-medium">
                  Judiciary: {leadership.judiciary.highestCourt}
                </h3>
              </div>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Highest Sovereign Court</span>
                  <span className="text-white font-medium">{leadership.judiciary.highestCourt}</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Jurisdiction Structure</span>
                  <span className="text-neutral-300">{leadership.judiciary.structure}</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Next Constitutional Election</span>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                    <Calendar className="size-3.5" />
                    <span>{leadership.nextElection}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Source Footer */}
        <div className="mt-5 pt-3 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Source: {leadership.source}</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Verified Constitutional Record
          </span>
        </div>
      </div>
    </section>
  );
};
