import React from "react";
import { Activity, BarChart3, Users, DollarSign, Landmark, Shield, Zap, Cpu, TrendingUp, Building2, HeartPulse, GraduationCap, Award, Gem } from "lucide-react";
import type { NationalProfileData } from "../../../data/countryDeepProfileData";
import { NationalProfileVisual } from "../NationalProfileVisual";

interface Module02NationalConditionProps {
  countryName: string;
  nationalProfile: NationalProfileData;
}

export const Module02NationalCondition: React.FC<Module02NationalConditionProps> = ({
  countryName,
  nationalProfile,
}) => {
  return (
    <section id="module-02-condition" className="mb-14 scroll-mt-24" aria-label="02 National Condition">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 02
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Empirical National Baseline Indicator Matrix
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Activity className="size-6 text-trinetra-saffron" />
            <span>National Condition: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical repository for the 12-domain empirical statistical baseline: Demography, Economy, Governance, Defence, Energy, Technology, Trade, Infrastructure, Health, Education, Human Capital, and Resources.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Audit Base: <strong className="text-emerald-400">12 Domains Verified</strong>
          </span>
        </div>
      </div>

      {/* Complete 12-Category Structured National Profile Visual */}
      <NationalProfileVisual
        profile={nationalProfile}
        countryName={countryName}
      />
    </section>
  );
};
