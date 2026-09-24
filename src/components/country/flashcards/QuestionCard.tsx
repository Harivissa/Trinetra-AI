import React from "react";
import { ArrowRight, HelpCircle } from "lucide-react";
import type { ThreeLayerAnswer } from "../../../data/countryDossiers/types";

interface QuestionCardProps {
  numberStr: string; // e.g. "01"
  question: ThreeLayerAnswer;
  onClick: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  numberStr,
  question,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative p-4 rounded-xl border border-white/8 bg-black/40 hover:border-trinetra-saffron/50 hover:bg-[#121824] transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs font-bold text-trinetra-saffron px-1.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/20">
            Q{numberStr}
          </span>
          <span className="text-[10px] font-mono text-neutral-400 group-hover:text-trinetra-saffron transition-colors">
            3-Layer Intel
          </span>
        </div>
        <h4 className="font-display text-sm font-semibold text-white group-hover:text-trinetra-saffron transition-colors mb-2 line-clamp-2">
          {question.question}
        </h4>
        <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
          {question.simpleAnswer}
        </p>
      </div>

      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400 group-hover:text-trinetra-saffron transition-colors">
        <span>Explore analysis</span>
        <ArrowRight className="size-3 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};
