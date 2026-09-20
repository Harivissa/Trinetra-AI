import React, { useState } from "react";
import { Search, X, BookOpen, ExternalLink, Shield, Compass, TrendingUp, Anchor } from "lucide-react";
import { GEOPOLITICAL_TERMS, type GeopoliticalTerm } from "../../data/geopoliticalTerms";

interface TermsGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function TermsGuideModal({ isOpen, onClose, initialCategory }: TermsGuideModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || "All");

  if (!isOpen) return null;

  const categories = ["All", "Security & Military", "Diplomacy & Strategy", "Economy & Trade", "Geography & Oceans"];

  const termsList = Object.values(GEOPOLITICAL_TERMS);

  const filtered = termsList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simpleDefinition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.whyItMatters.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.example.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Security & Military":
        return <Shield size={14} className="text-red-400" />;
      case "Diplomacy & Strategy":
        return <Compass size={14} className="text-blue-400" />;
      case "Economy & Trade":
        return <TrendingUp size={14} className="text-emerald-400" />;
      case "Geography & Oceans":
        return <Anchor size={14} className="text-cyan-400" />;
      default:
        return <BookOpen size={14} className="text-trinetra-saffron" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-white/10 bg-[#090b0e] text-neutral-200 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 bg-neutral-950/60 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1.5 rounded-lg bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron">
                <BookOpen size={18} />
              </span>
              <h2 className="font-display text-2xl text-white font-medium">
                Geopolitical Intelligence Guide
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-xl">
              TRINETRA Language Principle: Deep intelligence explained in simple, clear, human language. Every concept broken down into simple meaning, geopolitical significance, and real-world proof.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close guide"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 border-b border-neutral-800 bg-[#0c0e14] flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search concepts, straits, doctrines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-trinetra-saffron"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? "bg-trinetra-saffron text-black font-semibold"
                    : "bg-neutral-900/80 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List with Three-Layer Cards */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-neutral-500 text-sm">
              No matching geopolitical concepts found for &ldquo;{searchTerm}&rdquo;.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="border border-neutral-800 hover:border-neutral-700 rounded-xl bg-neutral-900/40 p-5 transition-all"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(item.category)}
                    <h3 className="font-display text-lg text-white font-medium">
                      {item.term}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-300">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Layer 1 */}
                  <div>
                    <div className="text-[10px] uppercase font-mono font-bold text-amber-400 tracking-wider mb-0.5">
                      Layer 1 · Simple Meaning
                    </div>
                    <p className="text-sm text-neutral-200 leading-relaxed font-normal">
                      {item.simpleDefinition}
                    </p>
                  </div>

                  {/* Layer 2 */}
                  <div className="bg-neutral-950/60 border border-neutral-800/80 rounded-lg p-3">
                    <div className="text-[10px] uppercase font-mono font-bold text-cyan-400 tracking-wider mb-1">
                      Layer 2 · Why It Matters In World Politics
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>

                  {/* Layer 3 */}
                  <div className="border-l-2 border-trinetra-saffron pl-3 py-0.5">
                    <span className="text-[10px] uppercase font-mono font-bold text-neutral-400">
                      Layer 3 · Real-World Example:{" "}
                    </span>
                    <span className="text-xs text-neutral-300">
                      {item.example}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-950/70 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
          <span>Trinetra Analytical Glossary · Sourced Framework</span>
          <span>Showing {filtered.length} terms</span>
        </div>
      </div>
    </div>
  );
}
