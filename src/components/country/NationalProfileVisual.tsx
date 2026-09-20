// TRINETRA AI — Current National Profile Visual Indicator Matrix
// Section 04: CURRENT NATIONAL PROFILE (12 Structured Categories)
// Factual metrics with values, units, years, and verified sources.
import React, { useState } from "react";
import {
  Users,
  DollarSign,
  Landmark,
  Shield,
  Zap,
  Cpu,
  TrendingUp,
  Building2,
  HeartPulse,
  GraduationCap,
  Award,
  Gem,
  CheckCircle2,
} from "lucide-react";
import type { NationalProfileData, MetricItem } from "../../data/countryDeepProfileData";

interface NationalProfileVisualProps {
  profile: NationalProfileData;
  countryName: string;
}

const CATEGORIES = [
  { id: "demography", label: "Demography", icon: Users },
  { id: "economy", label: "Economy", icon: DollarSign },
  { id: "governance", label: "Governance", icon: Landmark },
  { id: "defence", label: "Defence", icon: Shield },
  { id: "energy", label: "Energy", icon: Zap },
  { id: "technology", label: "Technology", icon: Cpu },
  { id: "trade", label: "Trade", icon: TrendingUp },
  { id: "infrastructure", label: "Infrastructure", icon: Building2 },
  { id: "health", label: "Health", icon: HeartPulse },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "humanCapital", label: "Human Capital", icon: Award },
  { id: "naturalResources", label: "Resources", icon: Gem },
] as const;

export const NationalProfileVisual: React.FC<NationalProfileVisualProps> = ({ profile, countryName }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const renderMetricCard = (m: MetricItem, idx: number) => {
    const isUnavailable = !m.value || m.value.toLowerCase().includes("unavailable");

    return (
      <div
        key={`${m.label}-${idx}`}
        className="rounded-xl border border-neutral-800/90 bg-[#0c0e12] p-4 flex flex-col justify-between hover:border-neutral-700 transition-colors"
      >
        <div>
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
            {m.label}
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            {isUnavailable ? (
              <span className="text-sm font-mono text-neutral-400 italic">DATA UNAVAILABLE</span>
            ) : (
              <>
                <span className="text-xl sm:text-2xl font-mono font-semibold text-white tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs font-mono text-trinetra-saffron">{m.unit}</span>
              </>
            )}
          </div>
          {m.note && (
            <p className="text-[11px] text-neutral-400 font-light mt-1">{m.note}</p>
          )}
        </div>

        <div className="mt-3 pt-2.5 border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono text-neutral-400">
          <span className="truncate max-w-[150px]">{m.source}</span>
          <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300">
            {m.year}
          </span>
        </div>
      </div>
    );
  };

  const visibleCategories =
    activeCategory === "all"
      ? CATEGORIES
      : CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section className="mb-12" aria-label="Current National Profile">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                04 // National Condition
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                12-Domain Empirical Indicator Matrix
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Current National Profile: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Standardized, source-backed metrics across demography, economy, governance, defense, and human capital. Strictly documented; no invented figures.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded flex items-center gap-1.5">
              <CheckCircle2 className="size-3" />
              Verified Factual Baseline
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-2 scrollbar-thin">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 ${
              activeCategory === "all"
                ? "bg-trinetra-saffron text-black font-semibold"
                : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800"
            }`}
          >
            All 12 Domains
          </button>
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors shrink-0 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-trinetra-saffron text-black font-semibold"
                    : "bg-neutral-900/80 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                <Icon className="size-3" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Matrix of Metrics by Category */}
        <div className="space-y-8">
          {visibleCategories.map((cat) => {
            const Icon = cat.icon;
            const metrics: MetricItem[] = (profile as any)[cat.id] || [];

            return (
              <div key={cat.id} className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-mono text-white font-medium border-l-2 border-trinetra-saffron pl-2.5">
                  <Icon className="size-4 text-trinetra-saffron" />
                  <span className="uppercase tracking-wider">{cat.label}</span>
                  <span className="text-xs text-neutral-400 font-normal">
                    ({metrics.length} indicators)
                  </span>
                </div>

                {metrics.length === 0 ? (
                  <div className="rounded-xl border border-neutral-800/60 bg-[#0c0e12] p-4 text-xs font-mono text-neutral-400 italic">
                    DATA UNAVAILABLE for this category.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
                    {metrics.map((m, idx) => renderMetricCard(m, idx))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
