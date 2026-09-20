import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, Database, Users, Swords } from "lucide-react";
import TermTip from "../common/TermTip";
import type { ThreeLayerAnswer } from "../../data/countrySimpleQuestions";

interface ThreeLayerCardProps {
  answer: ThreeLayerAnswer;
  index: number;
  initiallyExpanded?: boolean;
}

export default function ThreeLayerCard({
  answer,
  index,
  initiallyExpanded = false,
}: ThreeLayerCardProps) {
  const [expanded, setExpanded] = useState(initiallyExpanded);

  // Helper to enrich text with TermTip tooltips automatically for key geopolitical terms
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
      "multi-alignment"
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
                <TermTip key={`${term}-${i}`} term={term} showBadge={false} className="font-medium text-amber-300">
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
    <article className="border border-neutral-800 hover:border-neutral-700/80 rounded-xl bg-[#090b0e] overflow-hidden transition-all duration-200 shadow-md">
      {/* Question Header Banner */}
      <div className="p-5 border-b border-neutral-800/80 bg-neutral-950/40 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center size-7 rounded-full bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-xs font-bold shrink-0">
            Q{index + 1}
          </span>
          <h3 className="font-display text-xl text-neutral-100 font-medium tracking-tight">
            {answer.question}
          </h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-neutral-400 hover:text-white flex items-center gap-1 text-xs font-mono px-2 py-1 rounded hover:bg-neutral-800 transition-colors shrink-0 cursor-pointer"
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse deeper details" : "Expand deeper details"}
        >
          <span>{expanded ? "Hide Details" : "Deeper Details"}</span>
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      <div className="p-5 space-y-4">
        {/* LAYER 1: SIMPLE ANSWER */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded">
              Layer 1 · Simple Answer
            </span>
            <span className="text-[11px] text-neutral-500">Everyday plain language</span>
          </div>
          <p className="text-base text-neutral-100 font-normal leading-relaxed pl-1">
            {enrichTerms(answer.simpleAnswer)}
          </p>
        </div>

        {/* LAYER 2: WHY IT MATTERS */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-3.5">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 px-2 py-0.5 rounded">
              Layer 2 · Why It Matters
            </span>
            <span className="text-[11px] text-neutral-500">Geopolitical significance</span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-0.5">
            {enrichTerms(answer.whyItMatters)}
          </p>
        </div>

        {/* LAYER 3: DEEPER DETAILS (COLLAPSIBLE / EXPANDED) */}
        {expanded && (
          <div className="border-t border-neutral-800/80 pt-4 mt-2 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                  Layer 3 · Deeper Details & Facts
                </span>
                <span className="text-[11px] text-neutral-500">Specific evidence, institutions, and documented data</span>
              </div>
            </div>

            {/* Individual Partner Breakdown (Q6 specific if provided) */}
            {answer.deeperDetails.partners && answer.deeperDetails.partners.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Users size={13} className="text-emerald-400" />
                  <span>Key Bilateral Relationships Breakdown:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {answer.deeperDetails.partners.map((partner, pIdx) => (
                    <div
                      key={pIdx}
                      className="border border-neutral-800 rounded-lg p-3.5 bg-neutral-950/70 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
                        <span className="font-semibold text-white text-sm">
                          {partner.who}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-amber-300">
                          {partner.relationshipType}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        <strong className="text-neutral-200 font-medium">Why it matters: </strong>
                        {partner.whyItMatters}
                      </p>
                      <div className="text-xs text-neutral-300 space-y-1">
                        <div>
                          <span className="text-neutral-400 text-[11px] font-mono">Cooperation: </span>
                          <span className="text-neutral-200">{partner.areasOfCooperation.join(", ")}</span>
                        </div>
                        {partner.areasOfCompetition && partner.areasOfCompetition.length > 0 && (
                          <div>
                            <span className="text-neutral-400 text-[11px] font-mono">Frictions/Limits: </span>
                            <span className="text-neutral-300">{partner.areasOfCompetition.join(", ")}</span>
                          </div>
                        )}
                        {partner.dependencies && partner.dependencies.length > 0 && (
                          <div>
                            <span className="text-neutral-400 text-[11px] font-mono">Dependencies: </span>
                            <span className="text-neutral-300">{partner.dependencies.join(", ")}</span>
                          </div>
                        )}
                        <div className="text-[11px] text-neutral-400 pt-1">
                          <span className="font-mono text-neutral-500">Significance: </span>
                          {partner.strategicSignificance}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono pt-1 border-t border-neutral-900 flex items-center gap-1">
                          <Database size={10} />
                          <span>Source: {partner.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Individual Competitor Breakdown (Q7 specific if provided) */}
            {answer.deeperDetails.competitors && answer.deeperDetails.competitors.length > 0 && (
              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                  <Swords size={13} className="text-red-400" />
                  <span>Strategic Competitors & Security Rivals:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {answer.deeperDetails.competitors.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="border border-neutral-800 rounded-lg p-3.5 bg-neutral-950/70 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2 border-b border-neutral-800/80 pb-2">
                        <span className="font-semibold text-white text-sm">
                          {comp.who}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-950/40 border border-red-800/40 text-red-300">
                          {comp.competitionType}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        <strong className="text-neutral-200 font-medium">Core Dynamic: </strong>
                        {comp.whyItMatters}
                      </p>
                      <div className="text-xs text-neutral-300 space-y-1">
                        <div>
                          <span className="text-neutral-400 text-[11px] font-mono">Focal Arenas: </span>
                          <span className="text-neutral-200">{comp.areasOfCompetition.join(", ")}</span>
                        </div>
                        <div className="text-[10px] text-neutral-500 font-mono pt-1 border-t border-neutral-900 flex items-center gap-1">
                          <Database size={10} />
                          <span>Source: {comp.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Facts list */}
            {answer.deeperDetails.facts && answer.deeperDetails.facts.length > 0 && (
              <ul className="space-y-2 text-xs text-neutral-300 pl-1">
                {answer.deeperDetails.facts.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{enrichTerms(fact)}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Key Metrics Chips if any */}
            {answer.deeperDetails.metrics && Object.keys(answer.deeperDetails.metrics).length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {Object.entries(answer.deeperDetails.metrics).map(([key, val]) => (
                  <div key={key} className="bg-black/50 border border-neutral-800 rounded p-2 text-center">
                    <span className="text-[10px] uppercase font-mono text-neutral-500 block truncate">{key}</span>
                    <span className="text-xs font-bold text-neutral-200 font-mono">{String(val)}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Sources / Evidence origin */}
            {answer.deeperDetails.sources && answer.deeperDetails.sources.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-neutral-800/50 text-[10px] text-neutral-500 font-mono">
                <Database size={11} className="text-neutral-500" />
                <span>Verified Sources:</span>
                {answer.deeperDetails.sources.map((src, i) => (
                  <span key={i} className="bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded text-neutral-400">
                    {src}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

