import React from "react";
import {
  Swords,
  Shield,
  Landmark,
  TrendingUp,
  Flame,
  Radio,
  MapPin,
  Scale,
  Award,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import type { Country, RivalryAnalysis } from "../../types";
import { SOVEREIGN_PHOTO_DOSSIERS } from "../../data/geopoliticalMedia";
import { getCountryDeepProfile } from "../../data/countryDeepProfileData";

interface BilateralCommandHeaderProps {
  analysis: RivalryAnalysis;
}

export const BilateralCommandHeader: React.FC<BilateralCommandHeaderProps> = ({ analysis }) => {
  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  const photoA = SOVEREIGN_PHOTO_DOSSIERS[codeA] || {
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    capital: "Capital Seat",
    strategicFocus: "Territorial & Strategic Integrity",
    flag: "🌐",
  };

  const photoB = SOVEREIGN_PHOTO_DOSSIERS[codeB] || {
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80",
    capital: "Capital Seat",
    strategicFocus: "Geopolitical Influence & Security",
    flag: "🌐",
  };

  const deepA = getCountryDeepProfile(codeA, nameA, analysis.country_a_profile);
  const deepB = getCountryDeepProfile(codeB, nameB, analysis.country_b_profile);

  const formatBillion = (val?: number | string | null) => {
    if (!val || val === "Not available") return "N/A";
    if (typeof val === "number") return `$${val.toLocaleString()}B`;
    return String(val);
  };

  const gdpA = formatBillion(analysis.economic?.gdp_usd_billions?.country_a?.value);
  const gdpB = formatBillion(analysis.economic?.gdp_usd_billions?.country_b?.value);

  const defA = formatBillion(analysis.military?.defense_budget_usd_billions?.country_a?.value);
  const defB = formatBillion(analysis.military?.defense_budget_usd_billions?.country_b?.value);

  const nuclearA =
    analysis.country_a_profile?.nuclear?.weapons_state ? "Declared Nuclear Deterrent" : "Non-Nuclear";
  const nuclearB =
    analysis.country_b_profile?.nuclear?.weapons_state ? "Declared Nuclear Deterrent" : "Non-Nuclear";

  return (
    <div className="mb-10 rounded-2xl border border-white/10 bg-[#06080c] overflow-hidden shadow-2xl">
      {/* Top Vector Intelligence Bar */}
      <div className="px-6 py-3 bg-[#0a0d14] border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-trinetra-saffron animate-ping" />
          <span className="text-trinetra-saffron font-bold tracking-widest uppercase">
            BILATERAL INTELLIGENCE COMMAND MATRIX
          </span>
          <span className="text-neutral-500 hidden sm:inline">
            // STRATEGIC DYAD: {codeA} ⚡ {codeB}
          </span>
        </div>
        <div className="flex items-center gap-3 text-neutral-400">
          <span className="px-2.5 py-0.5 rounded bg-black/60 border border-neutral-800">
            SYSTEM-LEVEL COMPARISON
          </span>
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <Scale className="size-3.5" />
            LIVE VERIFIED DATASET
          </span>
        </div>
      </div>

      {/* Split Cinematic Hero Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 relative divide-y md:divide-y-0 md:divide-x divide-neutral-800/80">
        {/* Country A Half */}
        <div className="relative p-6 sm:p-8 overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <img
              src={photoA.image}
              alt={nameA}
              className="w-full h-full object-cover object-center filter brightness-50 contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/80 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl" role="img" aria-label="Flag A">
                  {photoA.flag}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-trinetra-saffron bg-trinetra-saffron/10 border border-trinetra-saffron/30 px-2 py-0.5 rounded">
                  {codeA}
                </span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400 bg-black/70 px-2.5 py-1 rounded border border-white/5">
                SEAT: {photoA.capital.toUpperCase()}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-white font-medium tracking-tight">
              {nameA}
            </h2>

            <div className="mt-2 text-xs font-mono text-neutral-300 flex items-center gap-2">
              <Landmark className="size-3.5 text-neutral-400" />
              <span>
                Executive Head:{" "}
                <strong className="text-white">
                  {deepA.leadership.headOfState?.name || "Constitutional Sovereign"}
                </strong>{" "}
                ({deepA.leadership.headOfState?.title || "Head of State"})
              </span>
            </div>

            <p className="mt-3 text-xs text-neutral-300 font-light leading-relaxed border-l-2 border-trinetra-saffron/50 pl-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider font-semibold">
                Strategic Doctrine & Posture
              </span>
              {photoA.strategicFocus}
            </p>
          </div>
        </div>

        {/* Center VS Clash Icon Overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
          <div className="size-11 rounded-full bg-[#0c0f17] border-2 border-trinetra-saffron/60 text-trinetra-saffron shadow-2xl flex items-center justify-center font-display font-bold text-sm">
            VS
          </div>
        </div>

        {/* Country B Half */}
        <div className="relative p-6 sm:p-8 overflow-hidden group">
          <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
            <img
              src={photoB.image}
              alt={nameB}
              className="w-full h-full object-cover object-center filter brightness-50 contrast-125"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/80 to-transparent" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-3xl" role="img" aria-label="Flag B">
                  {photoB.flag}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-sky-400 bg-sky-950/60 border border-sky-500/40 px-2 py-0.5 rounded">
                  {codeB}
                </span>
              </div>
              <span className="font-mono text-[11px] text-neutral-400 bg-black/70 px-2.5 py-1 rounded border border-white/5">
                SEAT: {photoB.capital.toUpperCase()}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-white font-medium tracking-tight">
              {nameB}
            </h2>

            <div className="mt-2 text-xs font-mono text-neutral-300 flex items-center gap-2">
              <Landmark className="size-3.5 text-neutral-400" />
              <span>
                Executive Head:{" "}
                <strong className="text-white">
                  {deepB.leadership.headOfState?.name || "Constitutional Sovereign"}
                </strong>{" "}
                ({deepB.leadership.headOfState?.title || "Head of State"})
              </span>
            </div>

            <p className="mt-3 text-xs text-neutral-300 font-light leading-relaxed border-l-2 border-sky-500/50 pl-3">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block tracking-wider font-semibold">
                Strategic Doctrine & Posture
              </span>
              {photoB.strategicFocus}
            </p>
          </div>
        </div>
      </div>

      {/* Head-to-Head Comparative Metric Ribbon */}
      <div className="bg-[#0a0d14] border-t border-neutral-800 p-4 sm:p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* GDP Comparison */}
          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <TrendingUp className="size-3 text-emerald-400" />
                GDP (Nominal)
              </span>
            </div>
            <div className="flex items-baseline justify-between font-mono text-sm font-bold">
              <span className="text-trinetra-saffron">{gdpA}</span>
              <span className="text-neutral-600 text-xs">vs</span>
              <span className="text-sky-400">{gdpB}</span>
            </div>
          </div>

          {/* Defense Budget */}
          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Shield className="size-3 text-rose-400" />
                Defense Budget
              </span>
            </div>
            <div className="flex items-baseline justify-between font-mono text-sm font-bold">
              <span className="text-trinetra-saffron">{defA}</span>
              <span className="text-neutral-600 text-xs">vs</span>
              <span className="text-sky-400">{defB}</span>
            </div>
          </div>

          {/* Nuclear Deterrence Status */}
          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <Radio className="size-3 text-amber-400" />
                Nuclear Posture
              </span>
            </div>
            <div className="flex items-baseline justify-between font-mono text-xs font-bold">
              <span className="text-trinetra-saffron truncate max-w-[45%]">
                {String(nuclearA)}
              </span>
              <span className="text-neutral-600 text-xs">vs</span>
              <span className="text-sky-400 truncate max-w-[45%]">
                {String(nuclearB)}
              </span>
            </div>
          </div>

          {/* Capital Distance / Geographic Dyad */}
          <div className="p-3 rounded-xl bg-black/50 border border-neutral-800/80">
            <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1.5">
              <span className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="size-3 text-cyan-400" />
                Sovereign Seats
              </span>
            </div>
            <div className="flex items-baseline justify-between font-mono text-xs font-bold">
              <span className="text-trinetra-saffron">{photoA.capital}</span>
              <span className="text-neutral-600 text-xs">↔</span>
              <span className="text-sky-400">{photoB.capital}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
