import React from "react";
import { Target, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { StrategicPriorityEntry } from "../../../data/countryDeepProfileData";
import { StrategicPrioritiesVisual } from "../StrategicPrioritiesVisual";

interface Module13PrioritiesProps {
  countryName: string;
  priorities: StrategicPriorityEntry[];
}

export const Module13Priorities: React.FC<Module13PrioritiesProps> = ({
  countryName,
  priorities,
}) => {
  return (
    <section id="module-13-priorities" className="mb-14 scroll-mt-24" aria-label="13 Strategic Priorities">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 13
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              National Directives, Security Mandates & Economic Transformation
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Target className="size-6 text-trinetra-saffron" />
            <span>Strategic Priorities: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical repository answering <em>&ldquo;What does this country want?&rdquo;</em>. Outlines documented national objectives across defense modernization, economic expansion, semiconductor sovereignty, energy transition, and multilateral reform.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Directives: <strong className="text-trinetra-saffron">{priorities?.length || 0} Pillars</strong>
          </span>
        </div>
      </div>

      {/* Complete Strategic Priorities Visual */}
      <StrategicPrioritiesVisual
        priorities={priorities}
        countryName={countryName}
      />
    </section>
  );
};
