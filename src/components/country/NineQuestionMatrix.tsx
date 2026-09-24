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
  ChevronRight,
  ExternalLink,
  Layers,
  Database,
  X,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import type { CountrySimpleQuestionsDossier, ThreeLayerAnswer } from "../../data/countryDossiers/types";
import { getCountrySimpleQuestions } from "../../data/countrySimpleQuestions";
import TermTip from "../common/TermTip";

interface NineQuestionMatrixProps {
  country?: any;
  simpleQuestions?: CountrySimpleQuestionsDossier;
  countryName?: string;
}

const QUESTION_ICONS = [
  Compass, // Q1 What is this country?
  Target, // Q2 What does it want?
  Award, // Q3 What is it good at?
  Link2, // Q4 What does it depend on?
  AlertTriangle, // Q5 What are its biggest problems?
  Users2, // Q6 Who are its important partners?
  Swords, // Q7 Who does it compete with?
  Map, // Q8 Why does its geography matter?
  BookOpen, // Q9 What should I know about this country?
];

export const NineQuestionMatrix: React.FC<NineQuestionMatrixProps> = ({
  country,
  simpleQuestions: propSimpleQuestions,
  countryName: propCountryName,
}) => {
  const dossier =
    propSimpleQuestions ||
    (country ? getCountrySimpleQuestions(country.id, country.name, country) : null);
  const countryName = propCountryName || country?.name || dossier?.countryName || "Sovereign State";

  // Currently active expanded question index (0 - 8). Defaults to 0 so users immediately see an active workspace
  const [activeQuestionIdx, setActiveQuestionIdx] = useState<number | null>(0);
  const [activeLayer, setActiveLayer] = useState<"all" | 1 | 2 | 3>("all");

  if (!dossier) return null;

  const questions = dossier.questions;
  const activeAnswer: ThreeLayerAnswer | null =
    activeQuestionIdx !== null && questions[activeQuestionIdx]
      ? questions[activeQuestionIdx]
      : null;

  // Helper to enrich text with TermTip tooltips
  const enrichTerms = (text: string) => {
    const termsToHighlight = [
      "strategic autonomy",
      "chokepoint",
      "Strait of Malacca",
      "Strait of Hormuz",
      "deterrence",
      "nuclear deterrence",
      "Indo-Pacific",
      "balance of power",
      "defence industry",
      "economic dependence",
      "strategic partnership",
      "geopolitical rivalry",
      "foreign policy",
      "military doctrine",
      "sanctions",
      "supply chain",
      "maritime security",
      "two-front challenge",
      "multi-alignment",
    ];

    let elements: (string | React.ReactNode)[] = [text];

    for (const term of termsToHighlight) {
      const nextElements: (string | React.ReactNode)[] = [];
      for (const el of elements) {
        if (typeof el === "string") {
          const regex = new RegExp(`(${term})`, "gi");
          const parts = el.split(regex);
          for (let i = 0; i < parts.length; i++) {
            if (parts[i].toLowerCase() === term.toLowerCase()) {
              nextElements.push(
                <TermTip
                  key={`${term}-${i}`}
                  term={term}
                  showBadge={false}
                  className="font-medium text-amber-300 underline decoration-amber-500/50 decoration-dotted cursor-help"
                >
                  {parts[i]}
                </TermTip>
              );
            } else if (parts[i]) {
              nextElements.push(parts[i]);
            }
          }
        } else {
          nextElements.push(el);
        }
      }
      elements = nextElements;
    }

    return elements;
  };

  return (
    <section className="mb-12" id="sec-questions" aria-label="The 9 Core Geopolitical Questions">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                03 // 9-Question Intelligence Matrix
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Three-Layer Information Architecture
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <HelpCircle className="size-6 text-trinetra-saffron" />
              The 9 Core Questions: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              {dossier.tagline}. Click any matrix tile to examine its full three-layer analytical breakdown: plain answer, geopolitical stakes, and documented evidence.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              9/9 Canonical Queries Active
            </span>
          </div>
        </div>

        {/* 3x3 MATRIX TILES (01 through 09) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {questions.map((q, idx) => {
            const IconComp = QUESTION_ICONS[idx] || HelpCircle;
            const isSelected = activeQuestionIdx === idx;
            const numStr = String(idx + 1).padStart(2, "0");

            return (
              <button
                key={q.questionId}
                onClick={() => {
                  setActiveQuestionIdx(idx);
                  // smooth scroll down to the expanded workspace if needed
                  const el = document.getElementById("nine-questions-workspace");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "nearest" });
                  }
                }}
                className={`text-left p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer flex flex-col justify-between min-h-[160px] ${
                  isSelected
                    ? "bg-[#111620] border-trinetra-saffron ring-1 ring-trinetra-saffron/40 shadow-xl shadow-orange-500/10"
                    : "bg-[#0c0e13] border-neutral-800/90 hover:border-neutral-700 hover:bg-[#10131a]"
                }`}
              >
                {/* Tile Top Bar: Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-trinetra-saffron text-black"
                          : "bg-neutral-850 text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      Q{numStr}
                    </span>
                    <IconComp
                      className={`size-4 transition-colors ${
                        isSelected
                          ? "text-trinetra-saffron"
                          : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    />
                  </div>

                  {/* Question Title */}
                  <h3 className="font-display text-base font-semibold text-white group-hover:text-amber-100 transition-colors">
                    {q.question}
                  </h3>
                </div>

                {/* One-Line Simple Answer Summary */}
                <div className="mt-3 pt-3 border-t border-neutral-800/80">
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed font-light">
                    {q.simpleAnswer}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono">
                    <span
                      className={`transition-colors ${
                        isSelected ? "text-trinetra-saffron font-medium" : "text-neutral-500 group-hover:text-neutral-300"
                      }`}
                    >
                      {isSelected ? "Active Dossier Workspace" : "Click to Explore Deep Intelligence"}
                    </span>
                    <ChevronRight
                      className={`size-3.5 transition-transform ${
                        isSelected
                          ? "text-trinetra-saffron translate-x-1"
                          : "text-neutral-600 group-hover:translate-x-0.5"
                      }`}
                    />
                  </div>
                </div>

                {/* Active Indicator Pip */}
                {isSelected && (
                  <div className="absolute top-0 right-0 w-2 h-2 rounded-bl-lg bg-trinetra-saffron" />
                )}
              </button>
            );
          })}
        </div>

        {/* EXPANDED INTELLIGENCE WORKSPACE */}
        {activeAnswer && (
          <div
            id="nine-questions-workspace"
            className="rounded-xl border border-neutral-800 bg-[#0c0e14] p-6 sm:p-8 shadow-2xl transition-all duration-300"
          >
            {/* Workspace Top Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-trinetra-saffron text-black">
                  QUESTION 0{activeQuestionIdx! + 1}
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider block">
                    ACTIVE INTELLIGENCE WORKSPACE
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-white font-medium">
                    {activeAnswer.question}
                  </h3>
                </div>
              </div>

              {/* Layer Filter Controls */}
              <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-lg p-1 text-xs font-mono">
                <button
                  onClick={() => setActiveLayer("all")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeLayer === "all"
                      ? "bg-trinetra-saffron text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  All 3 Layers
                </button>
                <button
                  onClick={() => setActiveLayer(1)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeLayer === 1
                      ? "bg-amber-400 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Layer 1: Answer
                </button>
                <button
                  onClick={() => setActiveLayer(2)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeLayer === 2
                      ? "bg-amber-400 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Layer 2: Significance
                </button>
                <button
                  onClick={() => setActiveLayer(3)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    activeLayer === 3
                      ? "bg-amber-400 text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  Layer 3: Evidence
                </button>
              </div>
            </div>

            {/* LAYER 1: SIMPLE ANSWER */}
            {(activeLayer === "all" || activeLayer === 1) && (
              <div className="mb-6 p-5 rounded-xl border border-amber-500/20 bg-amber-950/10">
                <div className="flex items-center justify-between mb-3 border-b border-amber-500/20 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300">
                      LAYER 1 // SIMPLE ANSWER
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Plain, Jargon-Free Explanation
                    </span>
                  </div>
                </div>

                {/* Big One-Line Takeaway */}
                <p className="text-base sm:text-lg font-medium text-white leading-relaxed mb-3">
                  {enrichTerms(activeAnswer.simpleAnswer)}
                </p>
              </div>
            )}

            {/* LAYER 2: WHY IT MATTERS */}
            {(activeLayer === "all" || activeLayer === 2) && (
              <div className="mb-6 p-5 rounded-xl border border-sky-500/20 bg-sky-950/10">
                <div className="flex items-center justify-between mb-3 border-b border-sky-500/20 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-sky-400" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-300">
                      LAYER 2 // WHY IT MATTERS
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Geopolitical Significance & Real-World Consequences
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-2">
                    Strategic Significance & Consequences
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-light">
                    {enrichTerms(activeAnswer.whyItMatters)}
                  </p>
                </div>
              </div>
            )}

            {/* LAYER 3: DEEPER INTELLIGENCE */}
            {(activeLayer === "all" || activeLayer === 3) && (
              <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-950/10">
                <div className="flex items-center justify-between mb-4 border-b border-emerald-500/20 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="size-2 rounded-full bg-emerald-400" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
                      LAYER 3 // DEEPER INTELLIGENCE
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      Documented Facts, Numbers & Sourced Precedents
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Key Supporting Facts */}
                  {activeAnswer.deeperDetails?.facts && activeAnswer.deeperDetails.facts.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2.5">
                        Verified Supporting Facts & Metrics
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeAnswer.deeperDetails.facts.map((fact: string, fIdx: number) => (
                          <li
                            key={fIdx}
                            className="text-xs text-neutral-300 bg-black/40 border border-white/5 p-3 rounded-lg flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-emerald-400 shrink-0 font-bold">•</span>
                            <span>{enrichTerms(fact)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Structured Partners */}
                  {activeAnswer.deeperDetails?.partners && activeAnswer.deeperDetails.partners.length > 0 && (
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs text-neutral-300 leading-relaxed">
                      <strong className="text-amber-300 font-mono text-[11px] uppercase tracking-wider block mb-2">
                        Key Strategic Partners
                      </strong>
                      <div className="space-y-2">
                        {activeAnswer.deeperDetails.partners.map((p, pIdx) => (
                          <div key={pIdx} className="border-b border-neutral-800/60 pb-2 last:border-b-0">
                            <span className="font-semibold text-white">{p.who}</span> ({p.relationshipType}):{" "}
                            <span className="font-light text-neutral-300">{p.whyItMatters}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Structured Competitors */}
                  {activeAnswer.deeperDetails?.competitors && activeAnswer.deeperDetails.competitors.length > 0 && (
                    <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 text-xs text-neutral-300 leading-relaxed">
                      <strong className="text-rose-400 font-mono text-[11px] uppercase tracking-wider block mb-2">
                        Key Competitors & Strategic Counterweights
                      </strong>
                      <div className="space-y-2">
                        {activeAnswer.deeperDetails.competitors.map((c, cIdx) => (
                          <div key={cIdx} className="border-b border-neutral-800/60 pb-2 last:border-b-0">
                            <span className="font-semibold text-white">{c.who}</span> ({c.competitionType}):{" "}
                            <span className="font-light text-neutral-300">{c.whyItMatters}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Source Attribution */}
                  {activeAnswer.deeperDetails?.sources && activeAnswer.deeperDetails.sources.length > 0 && (
                    <div className="flex items-center justify-between pt-3 border-t border-white/5 font-mono text-[10px] text-neutral-400">
                      <div className="flex items-center gap-2">
                        <FileCheck2 className="size-3 text-emerald-400" />
                        <span>Verified Sources: {activeAnswer.deeperDetails.sources.join(" · ")}</span>
                      </div>
                      <span className="text-neutral-500">TRINETRA VERIFIED REPOSITORY</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Next/Previous Question Jump Controls */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
              <button
                onClick={() => {
                  const prevIdx = activeQuestionIdx === 0 ? questions.length - 1 : activeQuestionIdx! - 1;
                  setActiveQuestionIdx(prevIdx);
                }}
                className="hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600"
              >
                ← Previous Question
              </button>
              <span className="text-[11px] text-neutral-500">
                Question {activeQuestionIdx! + 1} of 9
              </span>
              <button
                onClick={() => {
                  const nextIdx = activeQuestionIdx === questions.length - 1 ? 0 : activeQuestionIdx! + 1;
                  setActiveQuestionIdx(nextIdx);
                }}
                className="hover:text-white transition-colors cursor-pointer px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-600 flex items-center gap-1.5 text-trinetra-saffron"
              >
                <span>Next Question</span>
                <ArrowRight className="size-3" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
