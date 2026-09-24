import React, { useState } from "react";
import {
  Anchor,
  Plane,
  Radio,
  Flame,
  Building2,
  Compass,
  MapPin,
  ExternalLink,
  Shield,
  FileCheck2,
  Layers,
  Search,
  Filter,
} from "lucide-react";
import { getCountryStrategicSites, type StrategicSite } from "../../data/countryStrategicSites";

interface StrategicAssetMapHybridProps {
  countryId: string;
  countryName: string;
}

export const StrategicAssetMapHybrid: React.FC<StrategicAssetMapHybridProps> = ({
  countryId,
  countryName,
}) => {
  const allSites = getCountryStrategicSites(countryId);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeSite, setActiveSite] = useState<StrategicSite | null>(allSites[0] || null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", "PORT", "NAVAL_BASE", "AIR_BASE", "SPACE", "ENERGY", "CORRIDOR", "ISLAND"];

  const filteredSites = allSites.filter((s) => {
    const matchesCat =
      selectedCategory === "ALL" ||
      s.type.toUpperCase().includes(selectedCategory) ||
      (selectedCategory === "SPACE" && s.type.toUpperCase().includes("SPACE")) ||
      (selectedCategory === "ENERGY" && s.type.toUpperCase().includes("ENERGY"));
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.whyItMatters.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.strategicRelevance.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getSiteIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes("port") || t.includes("naval")) return Anchor;
    if (t.includes("air")) return Plane;
    if (t.includes("space")) return Radio;
    if (t.includes("energy") || t.includes("refinery") || t.includes("terminal")) return Flame;
    return Building2;
  };

  return (
    <section className="mb-12" id="sec-assets" aria-label="Strategic Asset Directory & Map Hybrid">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                10 // Critical Geography
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Strategic Infrastructure & Key Operational Nodes
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Building2 className="size-6 text-trinetra-saffron" />
              Strategic Asset Registry: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Naval bases, commercial gateway ports, space launch infrastructure, and energy refining complexes. Click any asset to inspect its operational relevance.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              {allSites.length} Catalogued Strategic Sites
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6 bg-[#0c0f16] border border-neutral-800 p-3 rounded-xl">
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  selectedCategory === cat
                    ? "bg-trinetra-saffron text-black font-bold"
                    : "text-neutral-400 hover:text-white bg-black/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="w-full md:w-64 relative">
            <Search className="size-3.5 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search strategic assets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-trinetra-saffron"
            />
          </div>
        </div>

        {/* 2-Column Workstation: Left Asset List, Right Detailed Asset Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Asset Scrollable List */}
          <div className="lg:col-span-6 space-y-2.5 max-h-[560px] overflow-y-auto pr-1">
            {filteredSites.length === 0 ? (
              <div className="p-8 text-center text-neutral-500 font-mono text-xs">
                No strategic assets match current filter.
              </div>
            ) : (
              filteredSites.map((site) => {
                const Icon = getSiteIcon(site.type);
                const isSelected = activeSite?.id === site.id;

                return (
                  <button
                    key={site.id}
                    onClick={() => setActiveSite(site)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                      isSelected
                        ? "bg-[#141a24] border-trinetra-saffron shadow-lg shadow-orange-500/10"
                        : "bg-[#0b0e14] border-neutral-800/90 hover:border-neutral-700 hover:bg-[#0f131a]"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isSelected
                          ? "bg-trinetra-saffron text-black"
                          : "bg-black/60 text-neutral-400 border border-white/5"
                      }`}
                    >
                      <Icon className="size-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-display text-sm font-semibold text-white truncate">
                          {site.name}
                        </h4>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60 border border-neutral-700 text-neutral-400 shrink-0">
                          {site.type}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed font-light">
                        {site.whyItMatters}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-[10px] font-mono text-neutral-500">
                        <span>
                          [{site.coordinates[0].toFixed(2)}°N, {site.coordinates[1].toFixed(2)}°E]
                        </span>
                        <span>•</span>
                        <span className="text-neutral-400">Confidence: {(site as any).confidence || "Verified Source"}</span>
                      </div>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right Column: Detailed Strategic Asset Inspector */}
          <div className="lg:col-span-6 border border-neutral-800 rounded-xl bg-[#0c0f16] p-6 flex flex-col justify-between shadow-xl">
            {activeSite ? (
              <div>
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                  <span className="font-mono text-[10px] uppercase text-trinetra-saffron tracking-wider font-bold">
                    STRATEGIC ASSET DOSSIER // {activeSite.id}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-black border border-neutral-700 text-neutral-300">
                    {activeSite.type}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-white font-bold mb-1">
                  {activeSite.name}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
                  <MapPin className="size-3.5 text-trinetra-saffron" />
                  <span>
                    Coordinates: {activeSite.coordinates[0]}° N, {activeSite.coordinates[1]}° E
                  </span>
                </div>

                <div className="space-y-4">
                  {/* Why It Matters */}
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider block mb-1">
                      Why It Matters
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                      {activeSite.whyItMatters}
                    </p>
                  </div>

                  {/* Strategic Relevance */}
                  <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                    <span className="text-[10px] font-mono font-bold uppercase text-sky-400 tracking-wider block mb-1">
                      Operational & Geopolitical Relevance
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                      {activeSite.strategicRelevance}
                    </p>
                  </div>

                  {/* Operational Capabilities or Details if present */}
                  {(activeSite as any).details && (
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs text-neutral-300 font-mono">
                      {(activeSite as any).details}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center text-neutral-500 font-mono text-xs">
                Select a strategic asset to view detailed operational intelligence.
              </div>
            )}

            {activeSite && (
              <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <FileCheck2 className="size-3 text-emerald-400" />
                  <span>Source: {activeSite.source}</span>
                </div>
                <span className="text-neutral-500">TRINETRA VERIFIED</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
