// TRINETRA AI — Primary 9 Core Questions Navigation Layer
// Canonical, non-duplicative human-friendly entry point into sovereign intelligence.
// Adheres strictly to the 4-Layer Architecture (Section 3):
// LAYER 1 — SIMPLE ANSWER
// LAYER 2 — WHY IT MATTERS
// LAYER 3 — DEEP INTELLIGENCE (Supporting facts, empirical metrics, key dimensions)
// LAYER 4 — RELATED CANONICAL MODULES & EVIDENCE SOURCES

import React, { useState } from "react";
import {
  HelpCircle,
  Compass,
  Target,
  Award,
  Link2,
  AlertTriangle,
  Users2,
  Swords,
  Map,
  BookOpen,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import type { CountrySimpleQuestionsDossier } from "../../data/countryDossiers/types";
import { getCountrySimpleQuestions } from "../../data/countrySimpleQuestions";

interface NineQuestionMatrixProps {
  country?: any;
  simpleQuestions?: CountrySimpleQuestionsDossier;
  countryName?: string;
  onNavigateToModule?: (moduleId: string) => void;
}

interface QuestionMapping {
  num: string;
  icon: any;
  canonicalLinks: { label: string; targetId: string }[];
  primarySource: string;
}

const QUESTION_CONFIG: Record<string, QuestionMapping> = {
  q1: {
    num: "01",
    icon: Compass,
    canonicalLinks: [
      { label: "Government & Leadership", targetId: "canonical-leadership" },
      { label: "National Condition", targetId: "canonical-condition" },
    ],
    primarySource: "SOURCE-WB-001 (World Development Indicators)",
  },
  q2: {
    num: "02",
    icon: Target,
    canonicalLinks: [
      { label: "Strategic Priorities", targetId: "canonical-priorities" },
      { label: "Current Developments", targetId: "canonical-developments" },
    ],
    primarySource: "SOURCE-GOV-IND-001 (National Strategic Gazettes)",
  },
  q3: {
    num: "03",
    icon: Award,
    canonicalLinks: [
      { label: "Economic System", targetId: "canonical-economy" },
      { label: "Defence & Security", targetId: "canonical-defence" },
      { label: "Nuclear / Space / Cyber", targetId: "canonical-strategic-domains" },
    ],
    primarySource: "SOURCE-SIPRI-001 & SOURCE-IMF-001",
  },
  q4: {
    num: "04",
    icon: Link2,
    canonicalLinks: [
      { label: "Energy & Dependencies", targetId: "canonical-energy" },
      { label: "Trade & Geo-Economics", targetId: "canonical-trade" },
    ],
    primarySource: "SOURCE-IEA-001 (World Energy Balances)",
  },
  q5: {
    num: "05",
    icon: AlertTriangle,
    canonicalLinks: [
      { label: "Geopolitical Friction", targetId: "canonical-friction" },
      { label: "Strategic Priorities", targetId: "canonical-priorities" },
    ],
    primarySource: "SOURCE-IMF-001 & Sovereign Fiscal Reports",
  },
  q6: {
    num: "06",
    icon: Users2,
    canonicalLinks: [
      { label: "Foreign Relations", targetId: "canonical-foreign-relations" },
      { label: "Multilateral Alignment", targetId: "canonical-multilateral" },
    ],
    primarySource: "SOURCE-UN-001 (Bilateral Treaty Registries)",
  },
  q7: {
    num: "07",
    icon: Swords,
    canonicalLinks: [
      { label: "Geopolitical Friction", targetId: "canonical-friction" },
      { label: "Foreign Relations", targetId: "canonical-foreign-relations" },
    ],
    primarySource: "SOURCE-IISS-001 (The Military Balance)",
  },
  q8: {
    num: "08",
    icon: Map,
    canonicalLinks: [
      { label: "Strategic Geography", targetId: "canonical-geography" },
      { label: "Strategic Assets", targetId: "canonical-assets" },
    ],
    primarySource: "SOURCE-UNCTAD-001 (Maritime SLOC Hydrography)",
  },
  q9: {
    num: "09",
    icon: BookOpen,
    canonicalLinks: [
      { label: "Current Developments", targetId: "canonical-developments" },
      { label: "History", targetId: "canonical-history" },
      { label: "Sources & Verification", targetId: "canonical-sources" },
    ],
    primarySource: "SOURCE-UN-001 & Institutional Dossiers",
  },
};

export const NineQuestionMatrix: React.FC<NineQuestionMatrixProps> = ({
  country,
  simpleQuestions: propSimpleQuestions,
  countryName: propCountryName,
  onNavigateToModule,
}) => {
  const dossier =
    propSimpleQuestions ||
    (country ? getCountrySimpleQuestions(country.id, country.name, country) : null);
  const countryName = propCountryName || country?.name || dossier?.countryName || "Sovereign State";

  // State to track which question has Layer 3 (Deep Intelligence) expanded
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

  const toggleLayer3 = (qId: string) => {
    setExpandedQuestions((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  if (!dossier) return null;

  const scrollToModule = (targetId: string) => {
    if (onNavigateToModule) {
      onNavigateToModule(targetId);
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const questions = dossier.questions || [];

  return (
    <section className="mb-12" id="nine-questions" aria-label="The 9 Core Geopolitical Questions">
      <div className="border border-white/10 rounded-2xl bg-[#080a0e] p-6 sm:p-8 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/8 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                PRIMARY INTELLIGENCE NAVIGATION LAYER
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                4-Layer Strategic Inquiry Matrix
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <HelpCircle className="size-6 text-trinetra-saffron" />
              The 9 Core Questions: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Human-friendly entry point into sovereign intelligence. Explore Layer 1 (Simple Answer), Layer 2 (Why It Matters), expand Layer 3 (Deep Intelligence), and navigate via Layer 4 to authoritative canonical modules.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-[#0c0f16] border border-white/10 px-3 py-1.5 rounded-lg">
              9/9 Canonical Queries Active
            </span>
          </div>
        </div>

        {/* 3x3 MATRIX TILES (Q01 through Q09) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {questions.map((q, idx) => {
            const config = QUESTION_CONFIG[q.questionId] || {
              num: String(idx + 1).padStart(2, "0"),
              icon: HelpCircle,
              canonicalLinks: [{ label: "View Dossier", targetId: "canonical-leadership" }],
              primarySource: "Institutional Baseline",
            };
            const IconComp = config.icon;
            const isExpanded = Boolean(expandedQuestions[q.questionId]);
            const details = q.deeperDetails;

            return (
              <div
                key={q.questionId}
                className="p-5 rounded-xl border border-white/10 bg-[#0c0e14] hover:border-trinetra-saffron/40 hover:bg-[#10141d] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number + Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-trinetra-saffron/10 text-trinetra-saffron border border-trinetra-saffron/20">
                        Q{config.num}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        LAYER 1 & 2
                      </span>
                    </div>
                    <IconComp className="size-4 text-neutral-400" />
                  </div>

                  {/* Question Title */}
                  <h3 className="font-display text-base font-semibold text-white mb-2 leading-snug">
                    {q.question}
                  </h3>

                  {/* Layer 1: Simple Answer */}
                  <p className="text-xs text-neutral-200 leading-relaxed mb-3 font-sans">
                    {q.simpleAnswer}
                  </p>

                  {/* Layer 2: Why It Matters */}
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 mb-3">
                    <span className="text-[10px] font-mono uppercase text-trinetra-saffron/90 font-semibold tracking-wider block mb-1">
                      Strategic Consequence (Why It Matters)
                    </span>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {q.whyItMatters}
                    </p>
                  </div>

                  {/* Layer 3: Deep Intelligence Toggle */}
                  <button
                    onClick={() => toggleLayer3(q.questionId)}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 rounded bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-[11px] font-mono text-neutral-300 transition-colors mb-3 cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
                      <span>{isExpanded ? "Hide" : "Expand"} Deep Intelligence</span>
                    </span>
                    {isExpanded ? <ChevronUp className="size-3 text-trinetra-saffron" /> : <ChevronDown className="size-3 text-neutral-400" />}
                  </button>

                  {/* Layer 3 Expandable Body */}
                  {isExpanded && details && (
                    <div className="p-3 rounded-lg bg-[#090b10] border border-trinetra-saffron/20 mb-3 space-y-2 text-[11px] animate-fadeIn">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-trinetra-saffron font-semibold">
                        Layer 3 — Empirical Facts & Sub-Dimensions
                      </div>
                      {details.facts && details.facts.length > 0 && (
                        <ul className="space-y-1.5 text-neutral-300 pl-3 list-disc list-outside marker:text-trinetra-saffron">
                          {details.facts.slice(0, 3).map((f, fIdx) => (
                            <li key={fIdx} className="leading-snug">
                              {f}
                            </li>
                          ))}
                        </ul>
                      )}
                      {details.sources && details.sources.length > 0 && (
                        <div className="pt-2 border-t border-white/5 text-[10px] font-mono text-neutral-400">
                          <span className="text-neutral-500">Source: </span>
                          {details.sources.join(" · ")}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Layer 4: Authoritative Canonical Module Links & Evidence */}
                <div className="pt-3 border-t border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">
                      Canonical Home & Evidence:
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400/90 flex items-center gap-1">
                      <ShieldCheck className="size-2.5" />
                      Verified
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {config.canonicalLinks.map((link) => (
                      <button
                        key={link.targetId}
                        onClick={() => scrollToModule(link.targetId)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#161c27] hover:bg-trinetra-saffron hover:text-black border border-white/10 hover:border-trinetra-saffron text-[11px] font-mono text-neutral-300 transition-colors cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ArrowRight className="size-2.5" />
                      </button>
                    ))}
                  </div>

                  <div className="text-[10px] font-mono text-neutral-500 truncate" title={config.primarySource}>
                    Ref: {config.primarySource}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
