import { useState } from "react";
import {
  Users2,
  Shield,
  DollarSign,
  Flame,
  Cpu,
  Globe,
  Swords,
  AlertOctagon,
  Layers,
  ChevronRight,
  ExternalLink,
  FileCheck2,
  Filter,
} from "lucide-react";
import type { Country } from "../../types";
import { getCountryStrategicData, type StrategicActorRelationship } from "../../data/countryStrategicData";
import { getSovereignMeta } from "../../utils/sovereignMeta";

interface RelationshipNetworkVisualProps {
  country: Country;
}

const TYPE_CONFIG: Record<
  StrategicActorRelationship["relationshipType"],
  { color: string; border: string; bg: string; icon: any }
> = {
  "DEFENCE PARTNER": {
    color: "text-rose-400",
    border: "border-rose-800/80",
    bg: "bg-rose-950/40",
    icon: Shield,
  },
  "TRADE PARTNER": {
    color: "text-emerald-400",
    border: "border-emerald-800/80",
    bg: "bg-emerald-950/40",
    icon: DollarSign,
  },
  "ENERGY SUPPLIER": {
    color: "text-amber-400",
    border: "border-amber-800/80",
    bg: "bg-amber-950/40",
    icon: Flame,
  },
  "TECHNOLOGY PARTNER": {
    color: "text-cyan-400",
    border: "border-cyan-800/80",
    bg: "bg-cyan-950/40",
    icon: Cpu,
  },
  "DIPLOMATIC PARTNER": {
    color: "text-blue-400",
    border: "border-blue-800/80",
    bg: "bg-blue-950/40",
    icon: Globe,
  },
  COMPETITOR: {
    color: "text-orange-400",
    border: "border-orange-800/80",
    bg: "bg-orange-950/40",
    icon: Swords,
  },
  "BORDER DISPUTE": {
    color: "text-red-400",
    border: "border-red-800/80",
    bg: "bg-red-950/40",
    icon: AlertOctagon,
  },
  "REGIONAL COOPERATION": {
    color: "text-teal-400",
    border: "border-teal-800/80",
    bg: "bg-teal-950/40",
    icon: Layers,
  },
};

export default function RelationshipNetworkVisual({ country }: RelationshipNetworkVisualProps) {
  const strategic = getCountryStrategicData(country.id, country.name, country);
  const meta = getSovereignMeta(country.id, country.name);

  const [selectedActorId, setSelectedActorId] = useState<string>(
    strategic.relationships[0]?.actorId || "USA"
  );
  const [filterType, setFilterType] = useState<string>("ALL");

  const filteredRelationships =
    filterType === "ALL"
      ? strategic.relationships
      : strategic.relationships.filter((r) => r.relationshipType === filterType);

  const activeActor =
    strategic.relationships.find((r) => r.actorId === selectedActorId) ||
    filteredRelationships[0] ||
    strategic.relationships[0];

  const uniqueTypes = ["ALL", ...Array.from(new Set(strategic.relationships.map((r) => r.relationshipType)))];

  return (
    <section className="mb-10" id="visual-relationships" aria-label="Strategic Relationship Network Graph">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] p-6 sm:p-7 shadow-xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                Supporting Core Questions 6 & 7: Partners & Competitors
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                Interactive Strategic Relationship Network
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
              Bilateral Alignment Architecture & Great-Power Relations
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Mapping formal partnerships, resource dependencies, and frontline rivalries. Countries are categorized by exact relationship types—avoiding generic labels or terming states &quot;allies&quot; without a formal treaty.
            </p>
          </div>

          {/* Type Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-xl p-1 text-xs font-mono self-start sm:self-auto">
            {uniqueTypes.map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-2.5 py-1 rounded-lg transition-colors text-[10px] ${
                  filterType === t
                    ? "bg-blue-500 text-black font-bold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Layout: Left Radial/Node Map, Right Detailed Actor Dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left: Interactive Radial Network Canvas */}
          <div className="lg:col-span-6 border border-neutral-800 rounded-xl bg-black/50 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider">
                  Network Orbit // Central Sovereign & Bilateral Vectors
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  {filteredRelationships.length} Mapped Actors
                </span>
              </div>

              {/* Central Sovereign Node */}
              <div className="p-3.5 rounded-xl bg-neutral-900 border-2 border-trinetra-saffron/80 flex items-center justify-between shadow-lg shadow-trinetra-saffron/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-lg bg-black border border-neutral-700 overflow-hidden shrink-0 flex items-center justify-center p-0.5">
                    {meta.flagUrl ? (
                      <img src={meta.flagUrl} alt={country.name} className="w-full h-full object-cover rounded" />
                    ) : (
                      <span>🌐</span>
                    )}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase text-trinetra-saffron font-bold block">
                      CENTRAL SOVEREIGN
                    </span>
                    <h3 className="font-display text-base text-white font-bold">
                      {country.name}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black border border-neutral-700 text-neutral-300">
                  Pivot Node
                </span>
              </div>

              {/* Surrounding Network Actors Grid */}
              <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-1">
                {filteredRelationships.map((rel) => {
                  const cfg = TYPE_CONFIG[rel.relationshipType] || TYPE_CONFIG["DIPLOMATIC PARTNER"];
                  const IconComp = cfg.icon;
                  const isSelected = rel.actorId === activeActor?.actorId;

                  return (
                    <button
                      key={rel.actorId}
                      onClick={() => setSelectedActorId(rel.actorId)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? `bg-neutral-900 border-white/60 shadow-md`
                          : "bg-black/40 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/40"
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="text-xl shrink-0">{rel.flag}</span>
                        <div className="truncate">
                          <h4 className="text-xs font-bold font-display text-white truncate">
                            {rel.actorName}
                          </h4>
                          <span
                            className={`text-[10px] font-mono font-semibold uppercase flex items-center gap-1 mt-0.5 ${cfg.color}`}
                          >
                            <IconComp size={10} />
                            {rel.relationshipType}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
                          Inspect
                        </span>
                        <ChevronRight
                          size={14}
                          className={isSelected ? "text-white" : "text-neutral-600"}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-900 text-[10px] font-mono text-neutral-500">
              * Alliance designation reserved exclusively for formal mutual defense treaty signatories.
            </div>
          </div>

          {/* Right: Selected Actor Intelligence Dossier */}
          {activeActor && (
            <div className="lg:col-span-6 border border-neutral-800 rounded-xl bg-black/60 p-5 sm:p-6 flex flex-col justify-between">
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 border-b border-neutral-800/80 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activeActor.flag}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border uppercase font-bold ${
                            TYPE_CONFIG[activeActor.relationshipType]?.bg
                          } ${TYPE_CONFIG[activeActor.relationshipType]?.border} ${
                            TYPE_CONFIG[activeActor.relationshipType]?.color
                          }`}
                        >
                          {activeActor.relationshipType}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-white font-semibold mt-1">
                        {country.name} ⟷ {activeActor.actorName}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                    {activeActor.actorId}
                  </span>
                </div>

                {/* 1. WHY IT MATTERS */}
                <div className="mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1">
                    Why It Matters (Strategic Relevance)
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 bg-neutral-950/80 border border-neutral-800/80 rounded-lg p-3 leading-relaxed">
                    {activeActor.whyItMatters}
                  </p>
                </div>

                {/* 2. KEY AREAS */}
                <div className="mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block mb-1.5">
                    Key Interaction Domains & Cooperation Areas
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeActor.keyAreas.map((area, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3. RECENT DEVELOPMENTS */}
                <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3 mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-bold block mb-1">
                    Recent Strategic Developments
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeActor.recentDevelopments}
                  </p>
                </div>

                {/* 4. CONSTRAINTS & RED LINES */}
                <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3 mb-3.5">
                  <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block mb-1">
                    Strategic Constraints & Red Lines
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {activeActor.constraints}
                  </p>
                </div>
              </div>

              {/* Verified Sources */}
              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5 truncate">
                  <FileCheck2 size={12} className="text-emerald-400 shrink-0" />
                  <span className="truncate">
                    Source: {activeActor.sources.name} ({activeActor.sources.year})
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 shrink-0">
                  Confidence: {activeActor.sources.confidence}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
