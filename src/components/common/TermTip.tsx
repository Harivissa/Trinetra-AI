import React, { useState, useRef, useEffect } from "react";
import { HelpCircle, X, ExternalLink, BookOpen } from "lucide-react";
import { GEOPOLITICAL_TERMS, lookupTerm, type GeopoliticalTerm } from "../../data/geopoliticalTerms";

interface TermTipProps {
  termKey?: string;
  term?: string;
  children?: React.ReactNode;
  showBadge?: boolean;
  className?: string;
}

export default function TermTip({
  termKey,
  term,
  children,
  showBadge = true,
  className = "",
}: TermTipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const matchedTerm: GeopoliticalTerm | undefined =
    (termKey && GEOPOLITICAL_TERMS[termKey]) ||
    (term ? lookupTerm(term) : undefined) ||
    (typeof children === "string" ? lookupTerm(children) : undefined);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!matchedTerm) {
    return <span className={className}>{children}</span>;
  }

  const categoryColors: Record<string, string> = {
    "Security & Military": "bg-red-950/60 text-red-400 border-red-800/50",
    "Diplomacy & Strategy": "bg-blue-950/60 text-blue-400 border-blue-800/50",
    "Economy & Trade": "bg-emerald-950/60 text-emerald-400 border-emerald-800/50",
    "Geography & Oceans": "bg-cyan-950/60 text-cyan-400 border-cyan-800/50",
  };

  return (
    <span className="relative inline-flex items-baseline">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        title={`Click for simple explanation of ${matchedTerm.term}`}
        className={`inline-flex items-center gap-1 cursor-pointer transition-colors text-left group ${
          children ? "border-b border-dotted border-trinetra-saffron/70 hover:border-trinetra-saffron text-neutral-200 hover:text-white" : ""
        } ${className}`}
      >
        {children || <span className="font-medium text-neutral-200">{matchedTerm.term}</span>}
        {showBadge && (
          <span className="inline-flex items-center text-[10px] text-trinetra-saffron/80 group-hover:text-trinetra-saffron group-hover:scale-110 transition-transform">
            <HelpCircle size={12} className="inline ml-0.5" />
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label={`Explanation of ${matchedTerm.term}`}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-80 sm:w-96 rounded-xl border border-trinetra-saffron/40 bg-[#0d1117] p-4 text-neutral-200 shadow-2xl shadow-black/80 text-left text-xs leading-relaxed animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-2 border-b border-neutral-800 pb-2.5 mb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-sm font-semibold text-white">
                  {matchedTerm.term}
                </span>
                <span
                  className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                    categoryColors[matchedTerm.category] || "bg-neutral-800 text-neutral-300 border-neutral-700"
                  }`}
                >
                  {matchedTerm.category}
                </span>
              </div>
              <p className="text-[10px] font-mono uppercase tracking-wider text-trinetra-saffron mt-0.5">
                Plain-Language Concept Guide
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800 transition-colors"
              aria-label="Close term explanation"
            >
              <X size={14} />
            </button>
          </div>

          {/* Layer 1: What does this mean? */}
          <div className="mb-2.5">
            <div className="text-[10px] uppercase font-mono font-bold text-amber-300 tracking-wider mb-1 flex items-center gap-1">
              <span>Layer 1 · What does this mean?</span>
            </div>
            <p className="text-neutral-100 font-sans text-xs leading-normal">
              {matchedTerm.simpleDefinition}
            </p>
          </div>

          {/* Layer 2: Why it matters */}
          <div className="mb-2.5 bg-neutral-900/70 border border-neutral-800 rounded p-2">
            <div className="text-[10px] uppercase font-mono font-bold text-cyan-400 tracking-wider mb-0.5">
              Layer 2 · Why it matters in geopolitics
            </div>
            <p className="text-neutral-300 text-[11px] leading-relaxed">
              {matchedTerm.whyItMatters}
            </p>
          </div>

          {/* Layer 3: Concrete example */}
          <div className="bg-black/40 border-l-2 border-trinetra-saffron pl-2.5 py-1">
            <span className="text-[10px] uppercase font-mono font-semibold text-neutral-400">
              Real Example:{" "}
            </span>
            <span className="text-neutral-300 text-[11px]">
              {matchedTerm.example}
            </span>
          </div>
        </div>
      )}
    </span>
  );
}
