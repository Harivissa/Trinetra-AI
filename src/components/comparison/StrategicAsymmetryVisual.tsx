import React from "react";
import {
  Swords,
  ShieldAlert,
  Zap,
  TrendingDown,
  Flame,
  AlertTriangle,
  Scale,
  Crosshair,
  ArrowRight,
} from "lucide-react";
import type { RivalryAnalysis } from "../../types";

interface StrategicAsymmetryVisualProps {
  analysis: RivalryAnalysis;
}

export const StrategicAsymmetryVisual: React.FC<StrategicAsymmetryVisualProps> = ({ analysis }) => {
  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  return (
    <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="border-b border-neutral-800 pb-5 mb-8">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
            05 // Asymmetry Confrontation
          </span>
          <span className="text-neutral-400 text-xs font-mono">
            Direct Balance of Leverage, Vulnerabilities & Flashpoint Vectors
          </span>
        </div>
        <h3 className="font-display text-2xl text-white font-medium flex items-center gap-3">
          <Crosshair className="size-6 text-trinetra-saffron" />
          Strategic Asymmetry Breakdown: {nameA} vs {nameB}
        </h3>
        <p className="text-xs text-neutral-400 mt-1 max-w-3xl font-light">
          Assessing structural levers of coercion, mutual vulnerabilities, and high-probability escalation triggers across operational domains.
        </p>
      </div>

      {/* 4 Quadrants of Asymmetric Leverage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Quadrant 1: Where Country A has leverage over Country B */}
        <div className="p-6 rounded-xl border border-amber-500/30 bg-[#0e121a] space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-trinetra-saffron" />
              <h4 className="font-display text-base font-semibold text-white">
                Where {nameA} Holds Leverage Over {nameB}
              </h4>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron font-bold">
              {codeA} LEVERAGE
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-neutral-300 font-light leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-trinetra-saffron font-bold">•</span>
              <span><strong>Maritime Chokepoint Proximity:</strong> Dominant geographic position astride primary energy and merchant transit corridors in the Northern Indian Ocean basin.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trinetra-saffron font-bold">•</span>
              <span><strong>Market Size & Digital Consumer Base:</strong> Massive domestic consumer and demographic footprint that foreign enterprises seek access to for long-term growth.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-trinetra-saffron font-bold">•</span>
              <span><strong>Democratic Coalition Alignment:</strong> Enhanced interoperability and intelligence-sharing partnerships with major Indo-Pacific democratic powers.</span>
            </li>
          </ul>
        </div>

        {/* Quadrant 2: Where Country B has leverage over Country A */}
        <div className="p-6 rounded-xl border border-sky-500/30 bg-[#0e121a] space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-sky-400" />
              <h4 className="font-display text-base font-semibold text-white">
                Where {nameB} Holds Leverage Over {nameA}
              </h4>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-sky-950 border border-sky-500/40 text-sky-400 font-bold">
              {codeB} LEVERAGE
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-neutral-300 font-light leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Industrial Scale & Trade Surplus:</strong> Dominance in intermediate manufacturing, consumer goods, telecom components, and raw industrial hardware.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Defense Budget Disparity:</strong> Gross fiscal capability to invest in rapid shipbuilding, missile mass-production, and 5th-generation stealth aviation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sky-400 font-bold">•</span>
              <span><strong>Upstream Riparian Hydrology:</strong> Control over transboundary river origins providing upstream hydrological monitoring and dam control capabilities.</span>
            </li>
          </ul>
        </div>

        {/* Quadrant 3: Mutual Vulnerabilities (Where Both are Vulnerable) */}
        <div className="p-6 rounded-xl border border-rose-500/30 bg-[#120e14] space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-4 text-rose-400" />
              <h4 className="font-display text-base font-semibold text-white">
                Where Both Are Vulnerable
              </h4>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-950 border border-rose-500/40 text-rose-400 font-bold">
              MUTUAL EXPOSURE
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-neutral-300 font-light leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Hydrocarbon Import Dependency:</strong> Both states remain heavy net importers of Middle Eastern seaborne crude oil, vulnerable to Strait of Hormuz closures.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Nuclear Deterrence Escalation Dynamics:</strong> Contiguous borders with nuclear triads create tight decision cycles during tactical military confrontations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span><strong>Economic Decoupling Shocks:</strong> Abrupt severing of trade links would impose inflation, supply disruptions, and capital market volatility on both domestic economies.</span>
            </li>
          </ul>
        </div>

        {/* Quadrant 4: Escalation Triggers (Where Conflict is Most Likely) */}
        <div className="p-6 rounded-xl border border-red-600/40 bg-[#160c0f] space-y-3 relative overflow-hidden shadow-lg">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2">
              <Flame className="size-4 text-red-500" />
              <h4 className="font-display text-base font-semibold text-white">
                Primary Escalation Triggers
              </h4>
            </div>
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-950 border border-red-500/40 text-red-400 font-bold animate-pulse">
              HOT FLASHPOINT
            </span>
          </div>
          <ul className="space-y-2.5 text-xs text-neutral-300 font-light leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Unresolved Border Skirmishes:</strong> Patrol confrontations along disputed frontier sectors where overlapping claims and forward infrastructure create accidental skirmish vectors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Maritime Encroachment & Survey Operations:</strong> Deployment of research and surveillance vessels into exclusive economic zones or key approaches.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span><strong>Third-Party Proxy Friction:</strong> Diplomatic, infrastructural, or naval competition in smaller neighboring buffer states.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
