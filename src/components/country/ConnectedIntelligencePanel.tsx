// TRINETRA AI — Connected Intelligence Architecture (Section 39)
// Synthesizes the global intelligence graph around the selected sovereign entity:
// Related Countries, Related Events, Related Assets, Related Dependencies, Related Flows, Related Sources.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Network,
  Globe2,
  Radio,
  Anchor,
  GitBranch,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { getRelationshipsForCountry } from "../../data/relationshipsIntelligenceData";
import { getEventsForCountry } from "../../data/eventsIntelligenceData";
import { getAssetsForCountry } from "../../data/strategicAssetRegistryData";
import { getDependenciesForCountry } from "../../data/dependenciesIntelligenceData";
import { CENTRAL_SOURCE_REGISTRY } from "../../data/sourcesRegistryData";

interface ConnectedIntelligencePanelProps {
  countryId: string;
  countryName: string;
  onSelectCountry?: (id: string) => void;
}

export const ConnectedIntelligencePanel: React.FC<ConnectedIntelligencePanelProps> = ({
  countryId,
  countryName,
  onSelectCountry,
}) => {
  const norm = countryId.toUpperCase();
  const [activeTab, setActiveTab] = useState<"all" | "relationships" | "events" | "assets" | "dependencies" | "sources">("all");

  const relationships = getRelationshipsForCountry(norm);
  const events = getEventsForCountry(norm);
  const assets = getAssetsForCountry(norm);
  const dependencies = getDependenciesForCountry(norm);

  // Relevant sources based on the country's connections
  const sourceKeys = Object.keys(CENTRAL_SOURCE_REGISTRY);

  return (
    <section className="mb-16 mt-12" id="connected-intelligence" aria-label="Connected Intelligence Graph">
      <div className="rounded-2xl border border-white/10 bg-[#07090e] p-6 sm:p-8 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/8 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Network className="size-3 text-trinetra-saffron" />
                GLOBAL INTELLIGENCE GRAPH
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Systemic Interconnections
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Connected Intelligence: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1.5 leading-relaxed">
              No sovereign state exists in isolation. Explore verified bilateral links, recent systemic events, critical assets, supply chain dependencies, and foundational evidence sources connected to {countryName}.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 shrink-0 bg-[#0d1017] p-1.5 rounded-xl border border-white/5">
            {[
              { id: "all", label: "All Connections" },
              { id: "relationships", label: `Bilateral (${relationships.length})` },
              { id: "events", label: `Events (${events.length})` },
              { id: "assets", label: `Assets (${assets.length})` },
              { id: "dependencies", label: `Dependencies (${dependencies.criticalNeeds.length})` },
              { id: "sources", label: "Sources" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-trinetra-saffron text-black font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONNECTED INTELLIGENCE GRID */}
        <div className="space-y-8">
          {/* 1. RELATED COUNTRIES & BILATERAL RELATIONSHIPS */}
          {(activeTab === "all" || activeTab === "relationships") && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <Globe2 className="size-4 text-trinetra-saffron" />
                  Related Countries & Bilateral Linkages
                </h3>
                <Link
                  to="/network"
                  className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1"
                >
                  <span>Open Full Graph</span>
                  <ArrowRight className="size-3" />
                </Link>
              </div>

              {relationships.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relationships.map((rel) => {
                    const partner = rel.countryA.id === norm ? rel.countryB : rel.countryA;
                    return (
                      <div
                        key={rel.id}
                        className="rounded-xl border border-white/10 bg-[#0d1018] p-5 hover:border-trinetra-saffron/40 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xl">{partner.flag}</span>
                              <h4 className="font-display text-base font-semibold text-white">
                                {partner.name}
                              </h4>
                            </div>
                            <span className="text-[11px] font-mono text-trinetra-saffron block mt-1">
                              {rel.primaryClassification}
                            </span>
                          </div>

                          <div className="flex gap-1.5 shrink-0">
                            {onSelectCountry && (
                              <button
                                onClick={() => onSelectCountry(partner.id)}
                                className="px-2.5 py-1 rounded bg-[#161c28] hover:bg-white/10 border border-white/10 text-[11px] font-mono text-neutral-200 transition-colors cursor-pointer"
                                title={`View ${partner.name} Dossier`}
                              >
                                View Dossier
                              </button>
                            )}
                            <Link
                              to={`/compare?a=${norm}&b=${partner.id}`}
                              className="px-2.5 py-1 rounded bg-trinetra-saffron/10 hover:bg-trinetra-saffron hover:text-black border border-trinetra-saffron/30 text-[11px] font-mono text-trinetra-saffron transition-colors"
                            >
                              Compare
                            </Link>
                          </div>
                        </div>

                        <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2 mb-3">
                          {rel.currentStatus}
                        </p>

                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-[11px] font-mono">
                          <div>
                            <span className="text-neutral-500 block text-[10px]">Trade Volume:</span>
                            <span className="text-neutral-200">{rel.economicDimensions.bilateralTradeVolumeUsd}</span>
                          </div>
                          <div>
                            <span className="text-neutral-500 block text-[10px]">Security Framework:</span>
                            <span className="text-neutral-200 truncate block">{rel.securityDimensions.borderOrMaritimeSecurityMechanism}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d1018] text-xs text-neutral-400">
                  Detailed bilateral relationship models are being indexed for {countryName}.
                </div>
              )}
            </div>
          )}

          {/* 2. RELATED EVENTS */}
          {(activeTab === "all" || activeTab === "events") && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <Radio className="size-4 text-cyan-400" />
                  Related Geopolitical Events & Systemic Shocks
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  Verified Chronology
                </span>
              </div>

              {events.length > 0 ? (
                <div className="space-y-3">
                  {events.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-4 rounded-xl border border-white/10 bg-[#0d1018] hover:border-cyan-500/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] font-bold uppercase">
                            {evt.eventType.replace("_", " ")}
                          </span>
                          <span className="text-xs font-mono text-neutral-400">{evt.date}</span>
                          <span className="text-xs text-neutral-500">· {evt.location}</span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">
                          Confidence: <span className="text-green-400">{evt.confidence}</span>
                        </span>
                      </div>

                      <h4 className="font-display text-sm font-semibold text-white mb-1.5">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-neutral-300 leading-relaxed mb-2.5">
                        {evt.whatChanged}
                      </p>

                      <div className="p-2.5 rounded bg-black/40 border border-white/5 text-[11px] text-neutral-400 flex items-start gap-2">
                        <span className="font-mono text-cyan-400 uppercase text-[10px] shrink-0 font-semibold">
                          Strategic Impact:
                        </span>
                        <span>{evt.whyItMatters}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d1018] text-xs text-neutral-400">
                  No critical friction events registered in the active monitoring window for {countryName}.
                </div>
              )}
            </div>
          )}

          {/* 3. RELATED STRATEGIC ASSETS */}
          {(activeTab === "all" || activeTab === "assets") && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <Anchor className="size-4 text-emerald-400" />
                  Sovereign Strategic Assets & Critical Nodes
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  Deep-Water Berths · Naval Bastions · Energy Hubs
                </span>
              </div>

              {assets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {assets.map((ast) => (
                    <div
                      key={ast.id}
                      className="p-4 rounded-xl border border-white/10 bg-[#0d1018] hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] uppercase font-bold">
                            {ast.type.replace("_", " ")}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">
                            {ast.countryId}
                          </span>
                        </div>

                        <h4 className="font-display text-sm font-semibold text-white mb-1.5">
                          {ast.name}
                        </h4>
                        <p className="text-[11px] font-mono text-neutral-400 mb-2">
                          {ast.location.stateOrRegion}
                        </p>
                        <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                          {ast.strategicRole}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>Verified: {ast.verificationDate}</span>
                        <span className="text-neutral-500">{ast.sourceId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-white/5 bg-[#0d1018] text-xs text-neutral-400">
                  Strategic installations registry for {countryName} is indexed in the GIS layer.
                </div>
              )}
            </div>
          )}

          {/* 4. RELATED DEPENDENCIES & SUPPLY CHAINS */}
          {(activeTab === "all" || activeTab === "dependencies") && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <GitBranch className="size-4 text-amber-400" />
                  Strategic Dependency Flows & Reverse Leverage
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  Critical Inputs vs World Dependence
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* What it Needs from Outside */}
                <div className="rounded-xl border border-white/10 bg-[#0d1018] p-5">
                  <h4 className="text-xs font-mono uppercase text-amber-400 font-bold mb-3 flex items-center gap-2">
                    <span>What {countryName} Needs from the Outside World</span>
                  </h4>
                  {dependencies.criticalNeeds.length > 0 ? (
                    <div className="space-y-4">
                      {dependencies.criticalNeeds.map((dep) => (
                        <div key={dep.id} className="p-3 rounded-lg bg-black/40 border border-white/5">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-display text-xs font-semibold text-white">
                              {dep.commodity}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-mono font-bold">
                              {dep.vulnerabilityLevel}
                            </span>
                          </div>

                          {/* Flow Route */}
                          <div className="text-[11px] font-mono text-neutral-300 space-y-1 mb-2">
                            <div className="text-neutral-400">
                              <span className="text-neutral-500">Suppliers: </span>
                              {dep.suppliers.map((s) => `${s.countryName} (${s.sharePct}%)`).join(", ")}
                            </div>
                            {dep.flowRoute.chokepoint && (
                              <div className="text-amber-300">
                                <span className="text-neutral-500">Chokepoint: </span>
                                {dep.flowRoute.chokepoint}
                              </div>
                            )}
                          </div>

                          <p className="text-[11px] text-neutral-400 leading-relaxed">
                            {dep.strategicSignificance}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-400">
                      Standard international trade dependencies apply (energy, critical capital goods).
                    </p>
                  )}
                </div>

                {/* What the World Needs from This Country */}
                <div className="rounded-xl border border-white/10 bg-[#0d1018] p-5">
                  <h4 className="text-xs font-mono uppercase text-emerald-400 font-bold mb-3 flex items-center gap-2">
                    <span>What the World Needs from {countryName} (Reverse Leverage)</span>
                  </h4>
                  {dependencies.worldDependsOnUs.length > 0 ? (
                    <div className="space-y-4">
                      {dependencies.worldDependsOnUs.map((rev) => (
                        <div key={rev.id} className="p-3 rounded-lg bg-black/40 border border-white/5">
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-display text-xs font-semibold text-white">
                              {rev.commodity}
                            </span>
                            <span className="text-[10px] font-mono text-emerald-400">
                              {rev.category}
                            </span>
                          </div>
                          <div className="text-[11px] font-mono text-neutral-300 mb-1.5">
                            <span className="text-neutral-500">Global Share: </span>
                            <span className="text-white font-medium">{rev.globalSharePct}</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 leading-relaxed">
                            {rev.strategicLeverage}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-xs text-neutral-400">
                      Export profiles documented under Trade & Geo-Economics module.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 5. RELATED SOURCES & EVIDENCE */}
          {(activeTab === "all" || activeTab === "sources") && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2">
                  <ShieldCheck className="size-4 text-trinetra-saffron" />
                  Evidence Baseline & Institutional Sources
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  Zero Fabrication Standard
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {sourceKeys.slice(0, 4).map((key) => {
                  const src = CENTRAL_SOURCE_REGISTRY[key];
                  return (
                    <div key={src.id} className="p-3.5 rounded-xl border border-white/10 bg-[#0d1018]">
                      <span className="text-[10px] font-mono text-trinetra-saffron font-bold block mb-1">
                        {src.id}
                      </span>
                      <h5 className="font-display text-xs font-semibold text-white mb-1">
                        {src.name}
                      </h5>
                      <span className="text-[10px] font-mono text-neutral-400 block mb-2">
                        {src.organization}
                      </span>
                      <p className="text-[11px] text-neutral-400 line-clamp-2">
                        {src.coverageDomain}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
