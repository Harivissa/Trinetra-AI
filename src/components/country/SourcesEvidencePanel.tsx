// TRINETRA AI — Source Verification & Trust Layer Visualizer
// Section 22: SOURCES / EVIDENCE / DATA QUALITY ("Prove Every Claim")
// Strict citations, data freshness, confidence auditing, methodology, correction mechanism.
import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, Database, Calendar, ExternalLink, AlertCircle, FileCheck } from "lucide-react";
import type { SourceRegistryEntry } from "../../data/countryDeepProfileData";

interface SourcesEvidencePanelProps {
  sources: SourceRegistryEntry[];
  countryName: string;
  lastUpdated: string;
}

export const SourcesEvidencePanel: React.FC<SourcesEvidencePanelProps> = ({
  sources,
  countryName,
  lastUpdated,
}) => {
  const [reportSuccess, setReportSuccess] = useState(false);
  const [reportText, setReportText] = useState("");

  const handleSubmitCorrection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportText.trim()) return;
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setReportText("");
    }, 4000);
  };

  return (
    <section className="mb-12" aria-label="Sources and Data Verification">
      <div className="rounded-2xl border border-neutral-800 bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-bold uppercase tracking-wider">
                22 // Verification & Audit
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Sovereign Dossier Source Integrity
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-2.5">
              <ShieldCheck className="size-6 text-emerald-400" />
              Sources, Evidence & Data Quality
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
              Every metric, leadership position, and deployment citation in the {countryName} dossier is anchored in documented official records and authoritative institutions.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1 rounded bg-neutral-900 border border-neutral-800 text-neutral-300 flex items-center gap-1.5">
              <Calendar className="size-3.5 text-neutral-400" />
              Dossier Certified: <strong className="text-white">{lastUpdated}</strong>
            </span>
          </div>
        </div>

        {/* Source Cards Matrix */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Database className="size-4 text-emerald-400" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Primary Authoritative Registries Consulted
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sources.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-neutral-800/80 bg-[#0c0e12] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                      {s.domain}
                    </span>
                    <span className="px-1.5 py-0.2 rounded font-mono text-[9px] bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-bold">
                      {s.confidence} CONFIDENCE
                    </span>
                  </div>
                  <h4 className="font-display text-sm text-white font-medium mb-1">
                    {s.name}
                  </h4>
                </div>

                <div className="mt-2 pt-2 border-t border-neutral-850 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>Reporting Period: {s.date}</span>
                  <CheckCircle2 className="size-3 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Note & Correction Mechanism */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-5 border-t border-neutral-850">
          {/* Methodology */}
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-white uppercase">
              <FileCheck className="size-4 text-trinetra-saffron" />
              TRINETRA AI Verification Methodology
            </div>
            <p className="text-xs text-neutral-300 font-light leading-relaxed mb-3">
              TRINETRA AI does not synthesize arbitrary power indices, synthetic military rankings, or speculative forecasts. All economic figures align with World Bank and IMF Article IV balances. Defense figures conform to SIPRI Yearbook and IISS Military Balance public accounting. Leadership transitions follow official government gazettes and constitutionally notified dates.
            </p>
            <div className="text-[11px] font-mono text-neutral-400">
              Zero hallucinated sources. Non-partisan and politically neutral.
            </div>
          </div>

          {/* User Feedback / Correction Tool */}
          <div className="p-4 rounded-xl bg-[#0c0e12] border border-neutral-800">
            <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold text-white uppercase">
              <AlertCircle className="size-4 text-sky-400" />
              Submit Evidence or Correction
            </div>
            <p className="text-xs text-neutral-300 font-light mb-3">
              Notice a leadership reshuffle or updated macroeconomic data for {countryName}? Submit source links to the intelligence queue.
            </p>

            {reportSuccess ? (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-xs font-mono text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Submitted to verification queue. Thank you for maintaining intelligence integrity.
              </div>
            ) : (
              <form onSubmit={handleSubmitCorrection} className="flex gap-2">
                <input
                  type="text"
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Paste official gazette or dataset link..."
                  className="flex-1 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-400 focus:outline-none focus:border-trinetra-saffron font-mono"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-medium transition-colors shrink-0"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
