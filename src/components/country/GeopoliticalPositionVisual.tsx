// TRINETRA AI — Geopolitical Position Visualizer
// Section 06: WHERE DOES THIS COUNTRY FIT INTO THE WORLD?
// Regional alignment, multilateral bodies, strategic corridors, and buffer zones.
import React from "react";
import { Globe, Compass, Shield, Anchor, Building, Layers } from "lucide-react";
import type { GeopoliticalPositionData } from "../../data/countryDeepProfileData";

interface GeopoliticalPositionVisualProps {
  position: GeopoliticalPositionData;
  countryName: string;
}

export const GeopoliticalPositionVisual: React.FC<GeopoliticalPositionVisualProps> = ({
  position,
  countryName,
}) => {
  return (
    <section className="mb-12" aria-label="Geopolitical Position">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                06 // Global Architecture
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Multilateral Alignment & Corridors
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <Globe className="size-6 text-trinetra-saffron" />
              Where Does {countryName} Fit Into the World?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Strategic posture, regional coalitions, multilateral seats, and vital continental and maritime corridors.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-xs">
              Posture: <span className="text-trinetra-saffron font-medium">{position.strategicPosture}</span>
            </span>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pillar 1: Regional Organizations & Blocs */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800/60">
              <Compass className="size-4 text-trinetra-saffron" />
              <h3 className="font-display text-base text-white font-medium">
                Regional Coalitions & Treaties
              </h3>
            </div>
            <div className="space-y-3">
              {position.regionalOrganizations.map((org, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-white">{org.name}</span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron">
                      {org.status}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {org.significance}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: Global Organizations & Multilateral Role */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800/60">
              <Building className="size-4 text-sky-400" />
              <h3 className="font-display text-base text-white font-medium">
                Global Multilateral Bodies
              </h3>
            </div>
            <div className="space-y-3">
              {position.globalOrganizations.map((org, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70">
                  <div className="font-mono text-xs font-bold text-sky-400 mb-1">
                    {org.name}
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {org.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3: Strategic Corridors & Arteries */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800/60">
              <Anchor className="size-4 text-amber-400" />
              <h3 className="font-display text-base text-white font-medium">
                Strategic Economic & Freight Corridors
              </h3>
            </div>
            <div className="space-y-3">
              {position.keyStrategicCorridors.map((corridor, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70">
                  <div className="font-mono text-xs font-bold text-amber-300 mb-1">
                    {corridor.name}
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {corridor.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 4: Geography & Sovereign Buffer Zones */}
          <div className="rounded-xl border border-neutral-800/80 bg-[#0c0e12] p-5">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-800/60">
              <Shield className="size-4 text-emerald-400" />
              <h3 className="font-display text-base text-white font-medium">
                Sovereign Geography & Perimeter
              </h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70">
                <div className="font-mono text-[10px] text-neutral-400 uppercase mb-1">Regional Anchor</div>
                <div className="text-sm font-medium text-white">{position.region} — {position.subregion}</div>
              </div>
              <div className="p-3 rounded-lg bg-neutral-900/50 border border-neutral-800/70">
                <div className="font-mono text-[10px] text-neutral-400 uppercase mb-1">Primary Buffer Zones</div>
                <ul className="space-y-1 mt-1">
                  {position.primaryBufferZones.map((zone, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
