import React from "react";
import { Globe2, Users2, Shield, DollarSign, Flame, Cpu, Swords, AlertOctagon, CheckCircle2 } from "lucide-react";
import type { Country } from "../../../types";
import RelationshipNetworkVisual from "../RelationshipNetworkVisual";

interface Module09ForeignRelationsProps {
  country: Country;
}

export const Module09ForeignRelations: React.FC<Module09ForeignRelationsProps> = ({ country }) => {
  return (
    <section id="module-09-foreign-relations" className="mb-14 scroll-mt-24" aria-label="09 Foreign Relations">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 09
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Bilateral Statecraft & Strategic Alignments
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Globe2 className="size-6 text-trinetra-saffron" />
            <span>Foreign Relations: {country.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for bilateral statecraft. Precise diplomatic classifications (Treaty Ally, Strategic Partner, Trade Partner, Competitor), shared strategic interests, joint defense exercises, tech corridors, active friction points, and verified evidence.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Diplomatic Doctrine: <strong className="text-trinetra-saffron">Multi-Alignment</strong>
          </span>
        </div>
      </div>

      {/* Complete Bilateral Relationship Network Visual */}
      <RelationshipNetworkVisual country={country} />
    </section>
  );
};
