import React, { useState } from "react";
import { Compass, Map, Layers, Anchor, Globe, ArrowRight } from "lucide-react";
import type { Country } from "../../../types";
import CountryGeospatialMap from "../CountryGeospatialMap";
import GeographicStrategyVisual from "../GeographicStrategyVisual";
import ChokepointsIdentificationVisual from "../ChokepointsIdentificationVisual";

interface Module03GeographyProps {
  country: Country;
}

export const Module03Geography: React.FC<Module03GeographyProps> = ({ country }) => {
  const [activeGeoView, setActiveGeoView] = useState<"gis" | "frontiers" | "maritime">("gis");

  return (
    <section id="module-03-geography" className="mb-14 scroll-mt-24" aria-label="03 Strategic Geography">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 03
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Geospatial Frontiers, SLOCs & Defensive Depth
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Compass className="size-6 text-trinetra-saffron" />
            <span>Strategic Geography: {country.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for physical topography, international borders, defensive depth, maritime exclusive economic zones (EEZ), sea lines of communication, and strategic maritime chokepoints.
          </p>
        </div>

        {/* View Switcher: Interactive GIS Map vs Border Theaters vs Maritime Chokepoints */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900 border border-neutral-800 shrink-0">
          <button
            type="button"
            onClick={() => setActiveGeoView("gis")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeGeoView === "gis"
                ? "bg-trinetra-saffron text-black font-semibold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Map className="size-3.5" />
            <span>Interactive GIS Map</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveGeoView("frontiers")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeGeoView === "frontiers"
                ? "bg-trinetra-saffron text-black font-semibold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Layers className="size-3.5" />
            <span>Border Theaters</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveGeoView("maritime")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeGeoView === "maritime"
                ? "bg-trinetra-saffron text-black font-semibold shadow"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            <Anchor className="size-3.5" />
            <span>Chokepoints & SLOCs</span>
          </button>
        </div>
      </div>

      {/* Dynamic View Display */}
      {activeGeoView === "gis" && (
        <div className="space-y-6">
          <CountryGeospatialMap country={country} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-neutral-800 bg-[#080a0d]">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                Territorial Depth & Frontiers
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                {country.name}&apos;s continental positioning dictates its strategic depth, logistics nodes, and perimeter defense obligations across active borders.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-800 bg-[#080a0d]">
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                Maritime Sea Lines of Communication
              </span>
              <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                Naval patrol corridors protect vital commercial sealanes through which critical energy and trade cargoes transit.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeGeoView === "frontiers" && (
        <div>
          <GeographicStrategyVisual country={country} />
        </div>
      )}

      {activeGeoView === "maritime" && (
        <div>
          <ChokepointsIdentificationVisual country={country} />
        </div>
      )}
    </section>
  );
};
