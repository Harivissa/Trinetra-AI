import React from "react";
import { ShieldCheck, Database, Calendar, ExternalLink, FileCheck, CheckCircle2 } from "lucide-react";
import type { SourceRegistryEntry } from "../../../data/countryDeepProfileData";
import { SourcesEvidencePanel } from "../SourcesEvidencePanel";

interface Module16SourcesProps {
  countryName: string;
  sources: SourceRegistryEntry[];
  lastUpdated: string;
}

export const Module16Sources: React.FC<Module16SourcesProps> = ({
  countryName,
  sources,
  lastUpdated,
}) => {
  return (
    <section id="module-16-sources" className="mb-14 scroll-mt-24" aria-label="16 Sources and Verification">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 16
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Provenance Architecture, Primary Citations & Audit Trails
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <ShieldCheck className="size-6 text-emerald-400" />
            <span>Sources & Verification: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for data provenance and citation auditing. Every claim across the 16 intelligence modules is indexed to official sovereign records, international multilateral repositories (World Bank, IMF, UN, SIPRI), or verified primary treaties.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Certified Fresh: <strong className="text-white">{lastUpdated}</strong>
          </span>
        </div>
      </div>

      {/* Complete Sources & Evidence Panel */}
      <SourcesEvidencePanel
        sources={sources}
        countryName={countryName}
        lastUpdated={lastUpdated}
      />
    </section>
  );
};
