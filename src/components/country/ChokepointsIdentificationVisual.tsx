import { useState } from "react";
import {
  Anchor,
  Compass,
  Ship,
  Clock,
  ArrowRight,
  Shield,
  FileCheck2,
  AlertTriangle,
  Globe2,
  ExternalLink,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryChokepointsDetailed } from "../../data/countryGeoData";

interface ChokepointsIdentificationVisualProps {
  country: Country;
}

export default function ChokepointsIdentificationVisual({ country }: ChokepointsIdentificationVisualProps) {
  const detailedChokepoints = getCountryChokepointsDetailed(country.id, country.name, country);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const activeItem = detailedChokepoints[selectedIdx] || detailedChokepoints[0];

  return (
    <section className="mb-10" id="visual-chokepoints" aria-label="Maritime Chokepoint & Strategic Geography Analysis">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Question 8: Why does its geography matter?
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                Maritime Bottlenecks & Strategic Passages
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Strategic Maritime Chokepoints
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Narrow maritime straits and navigation passages determining energy and trade flows for {country.name}. Structured into Location, Cargo Flows, Global Dependence, and National Relevance.
            </p>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Chokepoint Selection List on Left, Deep Inspection Dossier on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Chokepoints Quick Selector */}
          <div className="lg:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
            {detailedChokepoints.map(({ profile, chokepoint }, idx) => {
              const isSelected = idx === selectedIdx;
              const isCritical = profile.exposureLevel === "CRITICAL";

              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-neutral-900 border-cyan-500/80 shadow-md shadow-cyan-950/30"
                      : "bg-black/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40"
                  }`}
                >
                  <div className="truncate">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                        {chokepoint.region}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                          isCritical
                            ? "bg-rose-950/80 text-rose-300 border border-rose-800/60"
                            : "bg-amber-950/80 text-amber-300 border border-amber-800/60"
                        }`}
                      >
                        {profile.exposureLevel}
                      </span>
                    </div>
                    <h3 className="font-display text-sm font-semibold text-white truncate">
                      {chokepoint.name}
                    </h3>
                    <span className="text-[11px] font-mono text-neutral-400 block mt-0.5 truncate">
                      {chokepoint.dailyVolume}
                    </span>
                  </div>

                  <ArrowRight
                    size={14}
                    className={`shrink-0 ${isSelected ? "text-cyan-400" : "text-neutral-600"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Chokepoint Deep Intelligence Dossier */}
          {activeItem && (
            <div className="lg:col-span-7 border border-neutral-800 rounded-xl bg-black/60 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800/80 pb-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-cyan-400 uppercase font-semibold">
                        {activeItem.chokepoint.region}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Status: {activeItem.chokepoint.status.replace(/_/g, " ")}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-white font-semibold">
                      {activeItem.chokepoint.name}
                    </h3>
                  </div>

                  <div className="text-right font-mono text-[10px] text-neutral-400 shrink-0">
                    <span className="block text-neutral-500 uppercase">Coordinates</span>
                    <span className="text-neutral-300">
                      {activeItem.chokepoint.coordinates[0].toFixed(2)}°N,{" "}
                      {activeItem.chokepoint.coordinates[1].toFixed(2)}°E
                    </span>
                  </div>
                </div>

                {/* 1. LOCATION & GEOGRAPHY */}
                <div className="mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Location & Geographic Profile
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3 leading-relaxed">
                    {activeItem.chokepoint.importance}
                  </p>
                </div>

                {/* 2. WHAT MOVES THROUGH IT */}
                <div className="mb-3.5 bg-neutral-950/60 border border-neutral-800/80 rounded-xl p-3 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      Daily Transit Volume
                    </span>
                    <span className="text-sm font-semibold font-mono text-amber-300 block mt-0.5">
                      {activeItem.chokepoint.dailyVolume}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      Primary Cargo Types
                    </span>
                    <span className="text-xs text-neutral-200 block mt-0.5">
                      Crude Oil, LNG, Containerized Freight, Dry Bulk
                    </span>
                  </div>
                </div>

                {/* 3. WHY IT MATTERS & REGIONAL DEPENDENCE */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3.5">
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block mb-1">
                      Why It Matters Globally
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Connects major global production hubs with energy basins. Closure or restriction forces multi-thousand mile diversions around continental capes.
                    </p>
                  </div>

                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 font-bold block mb-1">
                      Regions Depending on It
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      East Asia, South Asia, Middle East, Western Europe, and Mediterranean supply chains.
                    </p>
                  </div>
                </div>

                {/* 4. RELEVANT COUNTRY CONNECTIONS */}
                <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3 mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1">
                    Direct Strategic Connection to {country.name}
                  </span>
                  <p className="text-xs text-neutral-200 leading-relaxed">
                    {activeItem.profile.relevance}
                  </p>
                  <div className="mt-2 pt-2 border-t border-neutral-800/80 flex items-start gap-1.5 text-xs">
                    <Clock size={12} className="text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-[11px] text-amber-300">
                      <strong>Alternative Reroute Penalty:</strong> {activeItem.profile.rerouteAlternative}
                    </span>
                  </div>
                </div>
              </div>

              {/* Source & Attribution */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5 truncate">
                  <FileCheck2 size={12} className="text-emerald-400 shrink-0" />
                  <span>
                    Source: EIA / UNCTAD Maritime Transport Review (2024)
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                  Confidence: High
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
