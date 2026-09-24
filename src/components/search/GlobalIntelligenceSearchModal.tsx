// TRINETRA AI — Global Intelligence Search Modal (Section 34)
// Cross-domain search engine indexing Countries, Relationships, Events, Chokepoints, Strategic Assets, and Sources.

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  Globe2,
  Swords,
  Radio,
  Compass,
  Anchor,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { GLOBAL_EVENTS_DATA } from "../../data/eventsIntelligenceData";
import { STRATEGIC_ASSETS_DATA } from "../../data/strategicAssetRegistryData";
import { STRATEGIC_CHOKEPOINTS_DATA } from "../../data/chokepointsIntelligenceData";
import { BILATERAL_RELATIONSHIPS_DATA } from "../../data/relationshipsIntelligenceData";
import { CENTRAL_SOURCE_REGISTRY } from "../../data/sourcesRegistryData";

interface SearchResultItem {
  id: string;
  title: string;
  subtitle: string;
  entityType: "Country" | "Relationship" | "Event" | "Chokepoint" | "Strategic Asset" | "Evidence Source";
  navigationUrl: string;
  icon: any;
  colorClass: string;
}

interface GlobalIntelligenceSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const COUNTRIES_INDEX = [
  { id: "IND", name: "India", capital: "New Delhi", region: "South Asia" },
  { id: "CHN", name: "People's Republic of China", capital: "Beijing", region: "East Asia" },
  { id: "USA", name: "United States of America", capital: "Washington, D.C.", region: "North America" },
  { id: "RUS", name: "Russian Federation", capital: "Moscow", region: "Eurasia" },
  { id: "PAK", name: "Islamic Republic of Pakistan", capital: "Islamabad", region: "South Asia" },
  { id: "JPN", name: "Japan", capital: "Tokyo", region: "East Asia" },
  { id: "DEU", name: "Germany", capital: "Berlin", region: "Western Europe" },
  { id: "GBR", name: "United Kingdom", capital: "London", region: "Western Europe" },
  { id: "FRA", name: "France", capital: "Paris", region: "Western Europe" },
  { id: "SAU", name: "Saudi Arabia", capital: "Riyadh", region: "Middle East" },
  { id: "IRN", name: "Iran", capital: "Tehran", region: "Middle East" },
  { id: "ISR", name: "Israel", capital: "Jerusalem", region: "Middle East" },
  { id: "ARE", name: "United Arab Emirates", capital: "Abu Dhabi", region: "Middle East" },
  { id: "TUR", name: "Republic of Türkiye", capital: "Ankara", region: "Eurasia" },
];

export const GlobalIntelligenceSearchModal: React.FC<GlobalIntelligenceSearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build Results
  const results: SearchResultItem[] = [];
  const q = query.trim().toLowerCase();

  if (q.length > 0) {
    // 1. Countries
    for (const c of COUNTRIES_INDEX) {
      if (c.name.toLowerCase().includes(q) || c.id.toLowerCase().includes(q) || c.capital.toLowerCase().includes(q)) {
        results.push({
          id: `country-${c.id}`,
          title: c.name,
          subtitle: `${c.capital} · ${c.region} · Sovereign State`,
          entityType: "Country",
          navigationUrl: `/country?id=${c.id}`,
          icon: Globe2,
          colorClass: "text-trinetra-saffron bg-trinetra-saffron/10 border-trinetra-saffron/30",
        });
      }
    }

    // 2. Chokepoints
    for (const cp of STRATEGIC_CHOKEPOINTS_DATA) {
      if (cp.name.toLowerCase().includes(q) || cp.location.toLowerCase().includes(q)) {
        results.push({
          id: `chokepoint-${cp.id}`,
          title: cp.name,
          subtitle: `${cp.location} · ${cp.globalFlowPct}`,
          entityType: "Chokepoint",
          navigationUrl: `/dependencies`,
          icon: Compass,
          colorClass: "text-red-400 bg-red-500/10 border-red-500/30",
        });
      }
    }

    // 3. Bilateral Relationships
    for (const rel of BILATERAL_RELATIONSHIPS_DATA) {
      const match =
        rel.countryA.name.toLowerCase().includes(q) ||
        rel.countryB.name.toLowerCase().includes(q) ||
        rel.id.toLowerCase().includes(q) ||
        rel.primaryClassification.toLowerCase().includes(q);
      if (match) {
        results.push({
          id: `rel-${rel.id}`,
          title: `${rel.countryA.name} ↔ ${rel.countryB.name}`,
          subtitle: rel.primaryClassification,
          entityType: "Relationship",
          navigationUrl: `/compare?a=${rel.pair[0]}&b=${rel.pair[1]}`,
          icon: Swords,
          colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/30",
        });
      }
    }

    // 4. Strategic Assets
    for (const ast of STRATEGIC_ASSETS_DATA) {
      if (ast.name.toLowerCase().includes(q) || ast.function.toLowerCase().includes(q) || ast.location.stateOrRegion.toLowerCase().includes(q)) {
        results.push({
          id: `asset-${ast.id}`,
          title: ast.name,
          subtitle: `${ast.location.stateOrRegion} · ${ast.type.replace("_", " ")}`,
          entityType: "Strategic Asset",
          navigationUrl: `/assets`,
          icon: Anchor,
          colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        });
      }
    }

    // 5. Events
    for (const evt of GLOBAL_EVENTS_DATA) {
      if (evt.title.toLowerCase().includes(q) || evt.whatHappened.toLowerCase().includes(q) || evt.location.toLowerCase().includes(q)) {
        results.push({
          id: `event-${evt.id}`,
          title: evt.title,
          subtitle: `${evt.date} · ${evt.location} · ${evt.eventType.replace("_", " ")}`,
          entityType: "Event",
          navigationUrl: `/events`,
          icon: Radio,
          colorClass: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
        });
      }
    }

    // 6. Evidence Sources
    for (const src of Object.values(CENTRAL_SOURCE_REGISTRY)) {
      if (src.id.toLowerCase().includes(q) || src.name.toLowerCase().includes(q) || src.organization.toLowerCase().includes(q)) {
        results.push({
          id: `source-${src.id}`,
          title: src.name,
          subtitle: `${src.id} · ${src.organization}`,
          entityType: "Evidence Source",
          navigationUrl: `/sources`,
          icon: ShieldCheck,
          colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        });
      }
    }
  }

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    navigate(item.navigationUrl);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl rounded-2xl border border-white/15 bg-[#080a0f] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-black/40">
          <Search className="size-5 text-trinetra-saffron shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search countries, chokepoints, relationships, assets, events, sources..."
            className="flex-1 bg-transparent text-white placeholder:text-neutral-500 text-sm focus:outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded text-neutral-400 hover:text-white mr-2"
            >
              <X className="size-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-neutral-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 divide-y divide-white/5">
          {query.trim().length === 0 ? (
            <div className="p-8 text-center text-neutral-500 font-mono text-xs space-y-3">
              <div className="text-trinetra-saffron/80 text-sm font-semibold uppercase tracking-wider">
                Cross-Domain Geopolitical Index
              </div>
              <p className="max-w-md mx-auto text-neutral-400">
                Type any sovereign nation, strategic waterway, military bastion, or institutional registry code (e.g. "Hormuz", "India", "Jamnagar", "SIPRI", "Malacca").
              </p>
              <div className="flex flex-wrap gap-2 justify-center pt-2">
                {["India", "Strait of Hormuz", "China", "Jamnagar", "BRICS", "SIPRI"].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setQuery(suggestion)}
                    className="px-2.5 py-1 rounded bg-[#131722] hover:bg-trinetra-saffron/15 hover:border-trinetra-saffron/40 border border-white/5 text-[11px] text-neutral-300"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-neutral-400 font-mono text-xs">
              No verified entities found matching "{query}".
            </div>
          ) : (
            results.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className={`p-3 rounded-xl transition-colors cursor-pointer flex items-center justify-between group ${
                    selectedIndex === idx ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg border shrink-0 ${item.colorClass}`}>
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-display text-sm font-semibold text-white group-hover:text-trinetra-saffron truncate">
                          {item.title}
                        </span>
                        <span className={`px-2 py-0.2 rounded text-[10px] font-mono uppercase font-bold border ${item.colorClass}`}>
                          {item.entityType}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className="size-4 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 ml-3" />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>Trinetra Global Graph Index</span>
          <span>{results.length} Entities Resolved</span>
        </div>
      </div>
    </div>
  );
};
