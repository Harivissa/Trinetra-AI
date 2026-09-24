// TRINETRA AI — Strategic Asset Registry (Section 14)
// Sovereign infrastructure, naval bastions, airfields, spaceports, and hydrocarbon refining complexes.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Anchor,
  Compass,
  MapPin,
  ShieldCheck,
  Search,
  ExternalLink,
  Layers,
  Flame,
  Radio,
  Rocket,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { STRATEGIC_ASSETS_DATA, StrategicAsset } from "../data/strategicAssetRegistryData";

export default function StrategicAssets() {
  const [selectedType, setSelectedType] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAssets = STRATEGIC_ASSETS_DATA.filter((ast) => {
    const matchesType = selectedType === "all" || ast.type === selectedType;
    const matchesQuery =
      !searchQuery ||
      ast.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ast.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ast.location.stateOrRegion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ast.function.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  const assetTypes = [
    { id: "all", label: "All Strategic Nodes" },
    { id: "naval_base", label: "Naval Bases & Bastions" },
    { id: "chokepoint_bastion", label: "Chokepoint Bastions" },
    { id: "petroleum_refinery", label: "Refinery Complexes" },
    { id: "space_facility", label: "Orbital Spaceports" },
    { id: "nuclear_facility", label: "Nuclear Facilities" },
    { id: "air_base", label: "Strategic Airbases" },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Anchor className="size-3 text-emerald-400" />
              SOVEREIGN ASSET REGISTRY
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Critical Ports, Naval Bastions, Refineries & Spaceports
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-medium">
            Strategic Assets & Critical Infrastructure
          </h1>
          <p className="text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed">
            Examine the physical installations that project sovereign power, safeguard maritime choke access, and refine global energy flows. Every entry links coordinates, functions, and verified institutional sources.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-stretch md:items-center bg-[#090b10] p-4 rounded-xl border border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {assetTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedType === t.id
                    ? "bg-emerald-400 text-black font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets, locations..."
              className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-black/60 border border-white/15 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400 font-sans"
            />
          </div>
        </div>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAssets.map((ast) => (
            <div
              key={ast.id}
              className="rounded-2xl border border-white/10 bg-[#090b10] p-6 hover:border-emerald-500/40 transition-colors shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase">
                    {ast.type.replace("_", " ")}
                  </span>
                  <Link
                    to={`/country?id=${ast.countryId}`}
                    className="text-xs font-mono text-neutral-400 hover:text-trinetra-saffron"
                  >
                    {ast.countryName} ({ast.countryId})
                  </Link>
                </div>

                <h3 className="font-display text-lg text-white font-semibold mb-1.5">
                  {ast.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-4">
                  <MapPin className="size-3 text-neutral-500" />
                  <span>{ast.location.stateOrRegion}</span>
                  <span className="text-neutral-500">
                    ({ast.location.lat.toFixed(2)}°N, {ast.location.lng.toFixed(2)}°E)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2 mb-4 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">Operational Function:</span>
                    <p className="text-neutral-300 leading-snug">{ast.function}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">Strategic Role:</span>
                    <p className="text-neutral-300 leading-snug">{ast.strategicRole}</p>
                  </div>
                </div>

                {/* Related Flows */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Related Security & Trade Flows:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {ast.relatedFlows.map((flow, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded bg-[#131722] border border-white/5 text-[10px] font-mono text-neutral-300"
                      >
                        {flow}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                <span>Verified: {ast.verificationDate}</span>
                <span className="text-neutral-400">{ast.sourceId}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
