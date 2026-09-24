import React, { useState } from "react";
import {
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
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  X,
  Layers,
} from "lucide-react";
import type { CountrySimpleQuestionsDossier, ThreeLayerAnswer } from "../../data/countryDossiers/types";
import { getCountrySimpleQuestions } from "../../data/countrySimpleQuestions";
import type { Country } from "../../types";

interface NineCoreQuestionsSectionProps {
  country: Country;
  onNavigateToModule?: (moduleId: string) => void;
}

interface QuestionConfig {
  number: string;
  questionId: string;
  icon: any;
  targetModuleId: string;
  targetModuleName: string;
  supportingModuleNames?: string[];
}

const QUESTION_CONFIGS: QuestionConfig[] = [
  {
    number: "Q01",
    questionId: "q1",
    icon: Compass,
    targetModuleId: "module-01-government",
    targetModuleName: "01 Government & Leadership",
    supportingModuleNames: ["02 National Condition"],
  },
  {
    number: "Q02",
    questionId: "q2",
    icon: Target,
    targetModuleId: "module-13-priorities",
    targetModuleName: "13 Strategic Priorities",
    supportingModuleNames: ["09 Foreign Relations", "12 Geopolitical Friction"],
  },
  {
    number: "Q03",
    questionId: "q3",
    icon: Award,
    targetModuleId: "module-04-economy",
    targetModuleName: "04 Economic System",
    supportingModuleNames: ["05 Defence & Security", "06 Nuclear / Space / Cyber", "11 Strategic Assets"],
  },
  {
    number: "Q04",
    questionId: "q4",
    icon: Link2,
    targetModuleId: "module-07-energy",
    targetModuleName: "07 Energy & Dependencies",
    supportingModuleNames: ["08 Trade & Geo-Economics"],
  },
  {
    number: "Q05",
    questionId: "q5",
    icon: AlertTriangle,
    targetModuleId: "module-12-friction",
    targetModuleName: "12 Geopolitical Friction",
    supportingModuleNames: ["07 Energy & Dependencies", "04 Economic System", "05 Defence & Security"],
  },
  {
    number: "Q06",
    questionId: "q6",
    icon: Users2,
    targetModuleId: "module-09-foreign-relations",
    targetModuleName: "09 Foreign Relations",
    supportingModuleNames: ["10 Multilateral Alignment"],
  },
  {
    number: "Q07",
    questionId: "q7",
    icon: Swords,
    targetModuleId: "module-12-friction",
    targetModuleName: "12 Geopolitical Friction",
    supportingModuleNames: ["09 Foreign Relations"],
  },
  {
    number: "Q08",
    questionId: "q8",
    icon: Map,
    targetModuleId: "module-03-geography",
    targetModuleName: "03 Strategic Geography",
    supportingModuleNames: ["11 Strategic Assets"],
  },
  {
    number: "Q09",
    questionId: "q9",
    icon: BookOpen,
    targetModuleId: "module-02-condition",
    targetModuleName: "02 National Condition",
    supportingModuleNames: ["14 History", "15 Current Developments"],
  },
];

export const NineCoreQuestionsSection: React.FC<NineCoreQuestionsSectionProps> = ({
  country,
  onNavigateToModule,
}) => {
  const dossier = getCountrySimpleQuestions(country.id, country.name, country);
  const [selectedQuestion, setSelectedQuestion] = useState<{
    config: QuestionConfig;
    answer: ThreeLayerAnswer;
  } | null>(null);

  const handleScrollToModule = (moduleId: string) => {
    if (onNavigateToModule) {
      onNavigateToModule(moduleId);
    } else {
      const el = document.getElementById(moduleId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="nine-core-questions" className="mb-14 scroll-mt-24" aria-label="The 9 Core Intelligence Questions">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold tracking-wider uppercase">
              Core Intelligence Entry Points
            </span>
            <span className="text-xs font-mono text-neutral-400">
              3-Layer Geopolitical Analysis
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span className="text-trinetra-saffron">The 9 Core Intelligence Questions</span>
            <span className="text-neutral-500 font-normal text-lg">· {country.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl">
            Human-friendly analytical entry points into {country.name}&apos;s strategic profile. Each question connects directly to its canonical intelligence module.
          </p>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono text-neutral-400">
            9 Questions · Locked Standard Framework
          </span>
        </div>
      </div>

      {/* 3x3 Question Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUESTION_CONFIGS.map((config, idx) => {
          const answer = dossier.questions[idx] || dossier.questions.find(q => q.questionId === config.questionId);
          if (!answer) return null;

          const IconComponent = config.icon;

          return (
            <div
              key={config.questionId}
              className="group relative rounded-xl border border-white/10 bg-[#080b10] hover:bg-[#0c1017] hover:border-trinetra-saffron/50 p-5 transition-all duration-200 flex flex-col justify-between shadow-lg"
            >
              {/* Question Top Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-trinetra-saffron px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30">
                      {config.number}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                      Core Intelligence
                    </span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-black/50 border border-white/10 text-neutral-300 group-hover:text-trinetra-saffron group-hover:border-trinetra-saffron/40 transition-colors">
                    <IconComponent className="size-4" />
                  </div>
                </div>

                {/* Question Title */}
                <h3 className="font-display text-base sm:text-lg font-bold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {answer.question}
                </h3>

                {/* Layer 1: Simple Answer */}
                <div className="mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                    1. Simple Answer
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                    {answer.simpleAnswer}
                  </p>
                </div>

                {/* Layer 2: Why It Matters */}
                <div className="mb-3 p-2.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    2. Why It Matters
                  </span>
                  <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-3">
                    {answer.whyItMatters}
                  </p>
                </div>

                {/* Layer 3: Key Evidence / Supporting Facts */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    3. Key Evidence
                  </span>
                  <ul className="space-y-1">
                    {answer.deeperDetails?.facts?.slice(0, 2).map((fact, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-neutral-400 flex items-start gap-1.5 leading-snug">
                        <span className="text-trinetra-saffron font-mono text-[10px] mt-0.5">•</span>
                        <span className="line-clamp-2">{fact}</span>
                      </li>
                    )) || (
                      <li className="text-[11px] text-neutral-500 italic">
                        Documented empirical indicators in canonical module.
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions: Explore Canonical Module */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedQuestion({ config, answer })}
                  className="text-[11px] font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Layers className="size-3" />
                  <span>Deeper breakdown</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleScrollToModule(config.targetModuleId)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-trinetra-saffron/15 hover:bg-trinetra-saffron text-trinetra-saffron hover:text-black font-mono text-xs font-semibold border border-trinetra-saffron/40 hover:border-trinetra-saffron transition-all cursor-pointer"
                  title={`Navigate to ${config.targetModuleName}`}
                >
                  <span>Explore Module →</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deeper Breakdown Modal */}
      {selectedQuestion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0d13] p-6 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-xs font-bold">
                    {selectedQuestion.config.number}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    Canonical mapping: {selectedQuestion.config.targetModuleName}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {selectedQuestion.answer.question}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedQuestion(null)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Content: 3 Layers */}
            <div className="space-y-4 text-sm">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  Layer 1: Simple Answer
                </h4>
                <p className="text-neutral-200 leading-relaxed font-sans">
                  {selectedQuestion.answer.simpleAnswer}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  Layer 2: Why It Matters (Geopolitical Significance)
                </h4>
                <p className="text-neutral-300 leading-relaxed font-sans">
                  {selectedQuestion.answer.whyItMatters}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5" />
                  Layer 3: Key Evidence & Detailed Breakdown
                </h4>
                <div className="space-y-2">
                  {selectedQuestion.answer.deeperDetails?.facts?.map((fact, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <span className="text-trinetra-saffron font-mono">•</span>
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedQuestion.config.supportingModuleNames && selectedQuestion.config.supportingModuleNames.length > 0 && (
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
                  <span className="font-mono text-neutral-300 block mb-1">Supporting Intelligence Modules:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedQuestion.config.supportingModuleNames.map((modName, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[11px] text-neutral-300">
                        {modName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setSelectedQuestion(null)}
                className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-mono transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const targetId = selectedQuestion.config.targetModuleId;
                  setSelectedQuestion(null);
                  handleScrollToModule(targetId);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-trinetra-saffron hover:bg-orange-600 text-black font-mono font-semibold text-xs transition-colors cursor-pointer"
              >
                <span>Jump to {selectedQuestion.config.targetModuleName}</span>
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
