// TRINETRA AI — Strategic Domains Visualizer (Nuclear, Space, Cyber)
// Section 10: SPECIALIZED STRATEGIC DOMAINS
// Factual, declassified, treaty-backed, and sourced.
import React, { useState } from "react";
import { Radiation, Rocket, ShieldCheck, Terminal, Disc, Lock, Orbit, FileText, CheckCircle2 } from "lucide-react";
import type { NuclearCapabilityData, SpaceCapabilityData, CyberCapabilityData } from "../../data/countryDeepProfileData";

interface StrategicDomainsVisualProps {
  nuclear: NuclearCapabilityData;
  space: SpaceCapabilityData;
  cyber: CyberCapabilityData;
  countryName: string;
}

export const StrategicDomainsVisual: React.FC<StrategicDomainsVisualProps> = ({
  nuclear,
  space,
  cyber,
  countryName,
}) => {
  const [activeTab, setActiveTab] = useState<"nuclear" | "space" | "cyber">("nuclear");

  return (
    <section className="mb-12" aria-label="Nuclear, Space, and Cyber Domains">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                10 // High-End Asymmetry
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Strategic Deterrence, Spaceflight & Cyberspace
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Radiation className="size-6 text-trinetra-saffron" />
              Strategic Deterrence Domains: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Nuclear posture and delivery vectors, sovereign orbital launch assets, and state cyberspace commands.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
            <button
              onClick={() => setActiveTab("nuclear")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === "nuclear"
                  ? "bg-trinetra-saffron text-black font-semibold shadow"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Radiation className="size-3.5" />
              Nuclear
            </button>
            <button
              onClick={() => setActiveTab("space")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === "space"
                  ? "bg-trinetra-saffron text-black font-semibold shadow"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Rocket className="size-3.5" />
              Space
            </button>
            <button
              onClick={() => setActiveTab("cyber")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 ${
                activeTab === "cyber"
                  ? "bg-trinetra-saffron text-black font-semibold shadow"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Terminal className="size-3.5" />
              Cyber
            </button>
          </div>
        </div>

        {/* 1. NUCLEAR CAPABILITY TAB */}
        {activeTab === "nuclear" && (
          <div className="space-y-5">
            {/* Top Indicator Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Nuclear Weapons Status
                </span>
                <div className="text-lg font-display text-white font-medium">{nuclear.status}</div>
                <span className="text-[11px] font-mono text-trinetra-saffron mt-1 block">
                  {nuclear.treaties[0] || "NPT Recognized"}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Estimated Stockpile
                </span>
                <div className="text-2xl font-mono font-bold text-amber-400">{nuclear.estimatedWarheads}</div>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Source: {nuclear.source}</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Triad Readiness
                </span>
                <div className="text-base font-mono font-medium text-emerald-400">{nuclear.triadReadiness}</div>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Land, sea, and air vectors</span>
              </div>
            </div>

            {/* Doctrine & Delivery Vectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="size-4 text-trinetra-saffron" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Nuclear Use Doctrine
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                  {nuclear.doctrine}
                </p>
                <div className="pt-3 border-t border-neutral-850">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Treaty Signatures</span>
                  <div className="flex flex-wrap gap-1.5">
                    {nuclear.treaties.map((t: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <Disc className="size-4 text-amber-400" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Key Strategic Delivery Systems
                  </h4>
                </div>
                <ul className="space-y-2 text-xs">
                  {nuclear.keyDeliverySystems.map((sys: string, i: number) => (
                    <li key={i} className="p-2.5 rounded bg-neutral-900/50 border border-neutral-800/70 text-neutral-200 font-mono flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{sys}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* 2. SPACE CAPABILITY TAB */}
        {activeTab === "space" && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  National Space Agency
                </span>
                <div className="text-base font-display text-white font-medium">{space.agency}</div>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Civilian & dual-use leadership</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Orbital Launch Status
                </span>
                <div className="text-lg font-mono font-semibold text-emerald-400">
                  {space.orbitalLaunchCapability ? "Autonomous Orbital Capability" : "Dependent on Commercial Launch"}
                </div>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">Indigenous rocketry</span>
              </div>

              <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800/80">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                  Active Constellations
                </span>
                <div className="text-lg font-mono font-semibold text-trinetra-saffron">{space.activeSatellites}</div>
                <span className="text-[11px] font-mono text-neutral-400 mt-1 block">LEO, GEO, and Nav systems</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <Orbit className="size-4 text-sky-400" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Spaceports & Interplanetary Missions
                  </h4>
                </div>
                <div className="space-y-3 text-xs">
                  <div>
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Primary Launch Sites:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {space.majorLaunchSites.map((site: string, i: number) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 font-mono text-neutral-200">
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-neutral-850">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Lunar & Exploration Milestones:</span>
                    <ul className="space-y-1">
                      {space.lunarInterplanetaryMissions.map((m: string, i: number) => (
                        <li key={i} className="text-neutral-300 flex items-start gap-2">
                          <span className="size-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-4 text-amber-400" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Military Space Doctrine & Counter-Space
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                  {space.militarySpaceDoctrine}
                </p>
                <div className="pt-3 border-t border-neutral-850 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Source: {space.source}</span>
                  <span className="text-emerald-400">Audited Space Registry</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CYBER CAPABILITY TAB */}
        {activeTab === "cyber" && (
          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="size-4 text-emerald-400" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Cyber Security Doctrine & Agencies
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                  {cyber.doctrine}
                </p>
                <div className="pt-3 border-t border-neutral-850">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Primary State Cyber Agencies</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cyber.primaryAgencies.map((agency: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-emerald-400">
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-neutral-800/80 bg-[#0c0e12]">
                <div className="flex items-center gap-2 mb-3">
                  <Lock className="size-4 text-sky-400" />
                  <h4 className="font-display text-sm text-white font-medium">
                    Infrastructure Defense & Alliances
                  </h4>
                </div>
                <div className="space-y-3 text-xs text-neutral-300">
                  <div className="p-2.5 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Critical Infrastructure Defense</span>
                    <p className="font-light">{cyber.criticalInfrastructureDefense}</p>
                  </div>
                  <div className="p-2.5 rounded bg-neutral-900/50 border border-neutral-800">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase block mb-1">Cyber Alliances & Treaties</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {cyber.internationalAlliances.map((a: string, i: number) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300 font-mono text-[11px]">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
