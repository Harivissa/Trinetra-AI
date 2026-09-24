import React from "react";
import { Landmark, UserCheck, ShieldCheck, FileText, CheckCircle2, ChevronRight, Vote, Scale, Users } from "lucide-react";
import type { LeadershipProfile } from "../../../data/countryDeepProfileData";
import { GovernmentStructureVisual } from "../GovernmentStructureVisual";
import { LeadershipPanel } from "../LeadershipPanel";

interface Module01GovernmentProps {
  countryId: string;
  countryName: string;
  leadership: LeadershipProfile;
}

export const Module01Government: React.FC<Module01GovernmentProps> = ({
  countryId,
  countryName,
  leadership,
}) => {
  return (
    <section id="module-01-government" className="mb-14 scroll-mt-24" aria-label="01 Government and Leadership">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 01
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Constitutional Order & Executive Governance
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Landmark className="size-6 text-trinetra-saffron" />
            <span>Government & Leadership: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical repository for sovereign executive leadership, constitutional structure, legislative-judicial checks, and governing coalition mandates.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            System: <strong className="text-amber-400">{leadership.systemType.split(" ")[0]}</strong>
          </span>
        </div>
      </div>

      {/* 1. Verified Leadership Panel (Portraits, Roles, Tenures, Verified Institutional Sources) */}
      <div className="mb-8">
        <LeadershipPanel
          leadership={leadership}
          countryName={countryName}
        />
      </div>

      {/* 2. Constitutional Structure & Three Branches (Executive, Legislature, Judiciary) */}
      <div>
        <GovernmentStructureVisual
          leadership={leadership}
          countryId={countryId}
          countryName={countryName}
        />
      </div>
    </section>
  );
};
