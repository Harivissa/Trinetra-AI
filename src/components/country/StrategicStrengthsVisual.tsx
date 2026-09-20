import { useState } from "react";
import {
  Compass,
  DollarSign,
  Shield,
  Cpu,
  Globe2,
  Users,
  Factory,
  Anchor,
  Flame,
  FileCheck2,
  CheckCircle2,
  Filter,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryStrategicData, type StrategicStrengthItem } from "../../data/countryStrategicData";

interface StrategicStrengthsVisualProps {
  country: Country;
}

const CATEGORY_ICONS: Record<string, any> = {
  GEOGRAPHIC: Compass,
  ECONOMIC: DollarSign,
  MILITARY: Shield,
  TECHNOLOGICAL: Cpu,
  DIPLOMATIC: Globe2,
  DEMOGRAPHIC: Users,
  INDUSTRIAL: Factory,
  MARITIME: Anchor,
  ENERGY: Flame,
};

const CATEGORY_COLORS: Record<string, string> = {
  GEOGRAPHIC: "text-amber-400 bg-amber-950/40 border-amber-800/60",
  ECONOMIC: "text-emerald-400 bg-emerald-950/40 border-emerald-800/60",
  MILITARY: "text-rose-400 bg-rose-950/40 border-rose-800/60",
  TECHNOLOGICAL: "text-cyan-400 bg-cyan-950/40 border-cyan-800/60",
  DIPLOMATIC: "text-blue-400 bg-blue-950/40 border-blue-800/60",
  DEMOGRAPHIC: "text-purple-400 bg-purple-950/40 border-purple-800/60",
  INDUSTRIAL: "text-orange-400 bg-orange-950/40 border-orange-800/60",
  MARITIME: "text-teal-400 bg-teal-950/40 border-teal-800/60",
  ENERGY: "text-yellow-400 bg-yellow-950/40 border-yellow-800/60",
};

export default function StrategicStrengthsVisual({ country }: StrategicStrengthsVisualProps) {
  const strategic = getCountryStrategicData(country.id, country.name, country);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(strategic.strengths.map((s) => s.category)))];

  const filteredStrengths =
    activeFilter === "ALL"
      ? strategic.strengths
      : strategic.strengths.filter((s) => s.category === activeFilter);

  return (
    <section className="mb-10" id="visual-strengths" aria-label="National Strategic Strengths Panel">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Question 3: What is it good at?
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                Verified Competitive Levers
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              National Strategic Strengths
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Documented structural strengths providing geopolitical leverage for {country.name}. Structured strictly into WHAT, WHY IT MATTERS, and EVIDENCE—avoiding hyperbolic or unsupported claims.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-xl p-1 text-xs font-mono self-start sm:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-2.5 py-1 rounded-lg transition-colors text-[10px] ${
                  activeFilter === cat
                    ? "bg-amber-500 text-black font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Strengths Cards Grid showing WHAT, WHY IT MATTERS, EVIDENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStrengths.map((item, index) => {
            const IconComp = CATEGORY_ICONS[item.category] || Shield;
            const badgeColor = CATEGORY_COLORS[item.category] || "text-amber-400 bg-amber-950/40 border-amber-800/60";

            return (
              <div
                key={index}
                className="border border-neutral-800 rounded-xl p-5 bg-black/40 hover:border-neutral-700 transition-colors flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div>
                  {/* Category Pill + Sequence */}
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-3 mb-3">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-semibold uppercase tracking-wider flex items-center gap-1.5 ${badgeColor}`}>
                      <IconComp size={12} />
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      STRENGTH #{index + 1}
                    </span>
                  </div>

                  {/* WHAT */}
                  <div className="mb-3">
                    <span className="text-[9px] font-mono uppercase text-neutral-500 tracking-wider block mb-1">
                      WHAT (Documented Asset / Condition)
                    </span>
                    <h3 className="text-sm font-semibold text-neutral-100 leading-snug">
                      {item.what}
                    </h3>
                  </div>

                  {/* WHY IT MATTERS */}
                  <div className="bg-neutral-950/80 border border-neutral-800/70 rounded-lg p-3">
                    <span className="text-[9px] font-mono uppercase text-amber-400/90 tracking-wider block mb-1 font-bold">
                      WHY IT MATTERS (Geopolitical Relevance)
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>
                </div>

                {/* EVIDENCE */}
                <div className="pt-2.5 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1.5 truncate">
                    <FileCheck2 size={12} className="text-emerald-400 shrink-0" />
                    <span className="truncate" title={item.evidence.source}>
                      Evidence: {item.evidence.source} ({item.evidence.year})
                    </span>
                  </div>
                  <span className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[9px] text-neutral-500 shrink-0">
                    {item.evidence.nature}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
