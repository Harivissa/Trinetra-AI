import React from "react";
import {
  Compass,
  Mountain,
  ShieldCheck,
  AlertOctagon,
  Anchor,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryGeoProfile } from "../../data/countryGeoData";
import { getCountrySimpleQuestions } from "../../data/countrySimpleQuestions";

interface GeographicStrategyVisualProps {
  country: Country;
}

export default function GeographicStrategyVisual({ country }: GeographicStrategyVisualProps) {
  const geo = getCountryGeoProfile(country.id, country.name, country);
  const dossier = getCountrySimpleQuestions(country.id, country.name, country);
  const q8 = dossier.questions.find((q) => q.questionId === "why_does_its_geography_matter");

  return (
    <section className="mb-10" aria-label="Geographic Strategy Analysis">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Physical Geography & Terrain Strategy // Question 8
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Territorial Geometry
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Why Physical Geography Shapes {country.name}&apos;s Destiny
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              {q8?.simpleAnswer || "Physical terrain, maritime access, and neighbor proximity that govern national defense and economic survival."}
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-neutral-300 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg self-start sm:self-auto">
            <span className="text-neutral-500">Strategic Depth:</span>
            <span className="text-amber-400 font-bold">{geo.strategicDepth}</span>
          </div>
        </div>

        {/* 3 Strategic Geographic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Natural Defensive Bastions */}
          <div className="border border-neutral-800 rounded-xl p-5 bg-black/40 space-y-3">
            <div className="flex items-center gap-2.5 border-b border-neutral-800/80 pb-3">
              <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Mountain size={18} />
              </div>
              <div>
                <h3 className="font-display text-base text-white font-semibold">
                  Natural Defensive Assets
                </h3>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Terrain Friction & Moats
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-neutral-300">
              {geo.naturalDefenses.map((def, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{def}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Geographic Vulnerabilities & Exposure */}
          <div className="border border-neutral-800 rounded-xl p-5 bg-black/40 space-y-3">
            <div className="flex items-center gap-2.5 border-b border-neutral-800/80 pb-3">
              <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400">
                <AlertOctagon size={18} />
              </div>
              <div>
                <h3 className="font-display text-base text-white font-semibold">
                  Exposure & Friction Points
                </h3>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Frontiers & Choke Risks
                </span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-neutral-300">
              {geo.geographicVulnerabilities.map((vuln, idx) => (
                <li key={idx} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-rose-400 font-bold shrink-0">•</span>
                  <span>{vuln}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Territorial Footprint & Neighborhood */}
          <div className="border border-neutral-800 rounded-xl p-5 bg-black/40 space-y-3">
            <div className="flex items-center gap-2.5 border-b border-neutral-800/80 pb-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Anchor size={18} />
              </div>
              <div>
                <h3 className="font-display text-base text-white font-semibold">
                  Maritime & Border Footprint
                </h3>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                  Boundary Mechanics
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-neutral-300">
              <div className="bg-neutral-950/70 border border-neutral-800/70 rounded p-2.5 space-y-1">
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-mono">Maritime Classification:</span>
                  <span className="text-neutral-200 font-medium">{geo.maritimeType}</span>
                </div>
                {geo.coastlineKm && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500 font-mono">Coastline Length:</span>
                    <span className="text-neutral-200 font-medium">{geo.coastlineKm.toLocaleString()} km</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-500 font-mono">Shared Land Frontiers:</span>
                  <span className="text-neutral-200 font-medium">{geo.landBordersCount} Countries</span>
                </div>
              </div>

              {geo.borderingCountries.length > 0 && (
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Direct Border Neighbors
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {geo.borderingCountries.map((border, idx) => (
                      <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
