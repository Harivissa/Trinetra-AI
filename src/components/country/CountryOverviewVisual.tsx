import React from "react";
import {
  Users,
  DollarSign,
  TrendingUp,
  Radiation,
  Shield,
  Landmark,
  Compass,
  MapPin,
  Anchor,
  Flame,
  Globe2,
  Building2,
  Layers,
  Handshake,
  Swords,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryGeoProfile } from "../../data/countryGeoData";
import { getSovereignMeta } from "../../utils/sovereignMeta";
import { getCountryStrategicData } from "../../data/countryStrategicData";

interface CountryOverviewVisualProps {
  country: Country;
}

export default function CountryOverviewVisual({ country }: CountryOverviewVisualProps) {
  const geo = getCountryGeoProfile(country.id, country.name, country);
  const meta = getSovereignMeta(country.id, country.name);
  const strategic = getCountryStrategicData(country.id, country.name, country);

  const m = strategic.overviewMetrics;
  const isNuclear = m.nuclear.status.toLowerCase().includes("declared") || country.nuclear?.weapons_state;

  return (
    <section className="mb-10" id="visual-overview" aria-label="Country Sovereign Overview">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Top Intelligence Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div className="flex items-start gap-4">
            <div className="size-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden shadow-inner shrink-0 select-none p-1">
              {meta.flagUrl ? (
                <img src={meta.flagUrl} alt={country.name} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-2xl">🌐</span>
              )}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[10px] font-bold uppercase tracking-wider">
                  Supporting Core Question 1: What is this country?
                </span>
                <span className="text-neutral-500 font-mono text-xs">
                  {geo.region.toUpperCase()} · ISO {country.id}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
                {country.name}
                <span className="text-sm font-mono font-normal text-neutral-400">
                  [{geo.capital.toUpperCase()}]
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl mt-1 leading-relaxed">
                Strategic baseline indicators measuring sovereign weight across demographic mass, economic output, defense deterrence, and maritime reach.
              </p>
            </div>
          </div>

          {/* Capital & Geography Quick Coordinates */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <div className="px-3 py-2 rounded-xl bg-black/60 border border-neutral-800 text-right font-mono">
              <span className="text-[10px] uppercase text-neutral-500 block">Sovereign Seat</span>
              <span className="text-xs font-semibold text-neutral-200 flex items-center justify-end gap-1.5 mt-0.5">
                <MapPin size={12} className="text-trinetra-saffron" />
                {geo.capital}
              </span>
              <span className="text-[9px] text-neutral-500 block mt-0.5">
                {geo.coordinates[0].toFixed(2)}°N, {geo.coordinates[1].toFixed(2)}°E
              </span>
            </div>
          </div>
        </div>

        {/* 8 Factual Strategic Metric Blocks (Each with Value, Unit, Year, Source) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {/* 1. Population */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Population</span>
              <Users size={14} className="text-amber-400" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.population.value}
                <span className="text-xs font-mono font-normal text-neutral-400 ml-1.5">{m.population.unit}</span>
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.population.year}</span>
                <span className="truncate max-w-[110px]" title={m.population.source}>{m.population.source}</span>
              </div>
            </div>
          </div>

          {/* 2. Nominal GDP */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Nominal GDP</span>
              <DollarSign size={14} className="text-emerald-400" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.gdp.value}
                <span className="text-xs font-mono font-normal text-neutral-400 ml-1.5">{m.gdp.unit}</span>
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.gdp.year}</span>
                <span className="truncate max-w-[110px]" title={m.gdp.source}>{m.gdp.source}</span>
              </div>
            </div>
          </div>

          {/* 3. Growth Rate */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Real Growth</span>
              <TrendingUp size={14} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.growth.value}
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.growth.year}</span>
                <span className="truncate max-w-[110px]" title={m.growth.source}>{m.growth.source}</span>
              </div>
            </div>
          </div>

          {/* 4. Nuclear Deterrent */}
          <div className={`border rounded-xl p-3.5 flex flex-col justify-between ${
            isNuclear ? "border-rose-900/60 bg-rose-950/20" : "border-neutral-800 bg-black/30"
          }`}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Nuclear Status</span>
              <Radiation size={14} className={isNuclear ? "text-rose-400" : "text-neutral-600"} />
            </div>
            <div>
              <div className="text-sm font-bold font-display text-white truncate tracking-tight">
                {m.nuclear.status}
              </div>
              <div className="text-[10px] font-mono text-neutral-400 truncate mt-0.5" title={m.nuclear.detail}>
                {m.nuclear.detail}
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.nuclear.year}</span>
                <span className="truncate max-w-[110px]" title={m.nuclear.source}>{m.nuclear.source}</span>
              </div>
            </div>
          </div>

          {/* 5. Active Armed Forces */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Active Forces</span>
              <Shield size={14} className="text-trinetra-saffron" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.armedForces.value}
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.armedForces.year}</span>
                <span className="truncate max-w-[110px]" title={m.armedForces.source}>{m.armedForces.source}</span>
              </div>
            </div>
          </div>

          {/* 6. Defense Budget */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Defense Spending</span>
              <Landmark size={14} className="text-amber-400" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.defenseBudget.value}
                <span className="text-xs font-mono font-normal text-neutral-400 ml-1.5">{m.defenseBudget.unit}</span>
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.defenseBudget.year}</span>
                <span className="truncate max-w-[110px]" title={m.defenseBudget.source}>{m.defenseBudget.source}</span>
              </div>
            </div>
          </div>

          {/* 7. Energy Position */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Energy Balance</span>
              <Flame size={14} className="text-rose-400" />
            </div>
            <div>
              <div className="text-sm font-bold font-display text-white tracking-tight">
                {m.netEnergy.status}
              </div>
              <div className="text-[10px] font-mono text-neutral-400 truncate mt-0.5" title={m.netEnergy.detail}>
                {m.netEnergy.detail}
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.netEnergy.year}</span>
                <span className="truncate max-w-[110px]" title={m.netEnergy.source}>{m.netEnergy.source}</span>
              </div>
            </div>
          </div>

          {/* 8. Maritime Coastline */}
          <div className="border border-neutral-800 rounded-xl p-3.5 bg-black/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">Maritime Coastline</span>
              <Anchor size={14} className="text-cyan-400" />
            </div>
            <div>
              <div className="text-lg font-bold font-display text-white tracking-tight">
                {m.maritimeCoast.value}
                <span className="text-xs font-mono font-normal text-neutral-400 ml-1.5">{m.maritimeCoast.unit}</span>
              </div>
              <div className="flex items-center justify-between mt-1 text-[9px] font-mono text-neutral-500 border-t border-neutral-900 pt-1">
                <span>{m.maritimeCoast.year}</span>
                <span className="truncate max-w-[110px]" title={m.maritimeCoast.source}>{m.maritimeCoast.source}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Factual Visual Blocks (Strategic Domains, Partners, Competitors, Dependencies) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 border-t border-neutral-800/80">
          {/* 1. Major Strategic Domains */}
          <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-3.5">
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <Layers size={13} className="text-cyan-400" />
              Strategic Focus Domains
            </div>
            <div className="flex flex-wrap gap-1.5">
              {strategic.keyStrategicDomains.map((domain, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 font-mono"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Major Strategic Partners */}
          <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-3.5">
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <Handshake size={13} className="text-emerald-400" />
              Key Strategic Partners
            </div>
            <div className="flex flex-wrap gap-1.5">
              {strategic.keyStrategicPartners.map((partner, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-800/50 text-[11px] text-emerald-300 font-mono"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Major Competitors / Friction Vectors */}
          <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-3.5">
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <Swords size={13} className="text-rose-400" />
              Strategic Competitors
            </div>
            <div className="flex flex-wrap gap-1.5">
              {strategic.keyCompetitors.map((comp, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-rose-950/40 border border-rose-800/50 text-[11px] text-rose-300 font-mono"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Major Dependencies */}
          <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-xl p-3.5">
            <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] uppercase tracking-wider mb-2">
              <AlertCircle size={13} className="text-amber-400" />
              Critical External Reliances
            </div>
            <div className="flex flex-wrap gap-1.5">
              {strategic.keyDependencies.map((dep, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-amber-950/40 border border-amber-800/50 text-[11px] text-amber-300 font-mono"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
