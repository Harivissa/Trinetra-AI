// TRINETRA AI — Expanded Intelligence Modal (3-Layer Deep Dive)
// Strict Non-Jargon Layer 1 -> Geopolitical Stakes Layer 2 -> Sourced Evidence Layer 3
import React, { useEffect } from "react";
import { X, ArrowDownRight, ShieldCheck, CheckCircle2, ExternalLink } from "lucide-react";

export interface ModalIntelligenceContent {
  sectionNumber: string;
  title: string;
  category: string;
  simpleAnswer: string;
  whyItMatters: string;
  deepDetails: {
    label: string;
    value: string | string[];
  }[];
  sources: {
    name: string;
    domain: string;
    confidence: string;
  }[];
  jumpTargetId?: string;
}

interface ExpandedIntelligenceModalProps {
  isOpen: boolean;
  content: ModalIntelligenceContent | null;
  onClose: () => void;
  countryName: string;
  countryFlag: string;
}

export const ExpandedIntelligenceModal: React.FC<ExpandedIntelligenceModalProps> = ({
  isOpen,
  content,
  onClose,
  countryName,
  countryFlag,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !content) return null;

  const handleJumpToSection = (targetId?: string) => {
    onClose();
    if (!targetId) return;
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl border border-white/15 bg-[#0a0d14] text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#0d121c] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-trinetra-saffron px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30">
              {content.sectionNumber}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base">{countryFlag}</span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white tracking-tight">
                  {content.title}
                </h3>
              </div>
              <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                {countryName} · {content.category}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Modal Scrollable Content: 3-Layer Structure */}
        <div className="overflow-y-auto px-6 py-5 space-y-6 text-sm">
          {/* LAYER 1: Simple Answer */}
          <div className="rounded-xl border border-sky-500/20 bg-sky-950/20 p-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
              <span className="size-2 rounded-full bg-sky-400 animate-pulse" />
              LAYER 1 — SIMPLE ANSWER
            </div>
            <p className="text-sm sm:text-base text-sky-100 font-medium leading-relaxed">
              {content.simpleAnswer}
            </p>
          </div>

          {/* LAYER 2: Why It Matters */}
          <div className="rounded-xl border border-amber-500/20 bg-amber-950/20 p-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
              <span className="size-2 rounded-full bg-amber-400" />
              LAYER 2 — WHY IT MATTERS
            </div>
            <p className="text-sm text-neutral-200 leading-relaxed">
              {content.whyItMatters}
            </p>
          </div>

          {/* LAYER 3: Detailed Intelligence */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-trinetra-saffron uppercase tracking-wider mb-2">
              <span className="size-2 rounded-full bg-trinetra-saffron" />
              LAYER 3 — DEEPER INTELLIGENCE & DOCUMENTED DATA
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.deepDetails.map((detail, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-1">
                    {detail.label}
                  </div>
                  {Array.isArray(detail.value) ? (
                    <ul className="space-y-1 text-xs text-neutral-200">
                      {detail.value.map((v, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-trinetra-saffron mt-0.5">•</span>
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-xs font-medium text-white">{detail.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Sourced Evidence Registry */}
          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              Verified Sourced Repositories
            </div>
            <div className="flex flex-wrap gap-2">
              {content.sources.map((src, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e121a] border border-white/5 text-[11px] text-neutral-300"
                >
                  <CheckCircle2 className="size-3 text-emerald-400" />
                  <span className="font-medium text-white">{src.name}</span>
                  <span className="text-neutral-500">({src.domain})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-[#0d121c] flex items-center justify-between shrink-0">
          <div className="text-[11px] font-mono text-neutral-500">
            TRINETRA AI Sovereign Knowledge Engine
          </div>

          <div className="flex items-center gap-3">
            {content.jumpTargetId && (
              <button
                type="button"
                onClick={() => handleJumpToSection(content.jumpTargetId)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-trinetra-saffron/15 hover:bg-trinetra-saffron/25 border border-trinetra-saffron/40 text-trinetra-saffron text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Jump to Interactive Deep Module</span>
                <ArrowDownRight className="size-3.5" />
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-neutral-200 text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
