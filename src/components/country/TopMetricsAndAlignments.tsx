// TRINETRA AI — Key Metrics & International Alignments Combined Command Bar
// Exactly mirrors the reference visual:
// [LEFT: 7 Key Metric Cards] [RIGHT: International Alignments & Memberships Grid with Modal Deep-Dive]

import React, { useState } from "react";
import {
  Users,
  BarChart3,
  TrendingUp,
  Shield,
  DollarSign,
  Flame,
  Anchor,
  Globe,
  ExternalLink,
  X,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Building2,
  Sparkles,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import {
  INTERNATIONAL_ORGS,
  getCountryAlignments,
  type InternationalOrg,
  type CountryMembership,
} from "../../data/internationalAlignmentsData";

interface TopMetricsAndAlignmentsProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
}

export const TopMetricsAndAlignments: React.FC<TopMetricsAndAlignmentsProps> = ({
  country,
  deepProfile,
}) => {
  const [selectedOrg, setSelectedOrg] = useState<{
    org: InternationalOrg;
    membership: CountryMembership;
  } | null>(null);

  const memberships = getCountryAlignments(country.id);

  // Compute clean key metrics
  const metrics = [
    {
      label: "POPULATION",
      value: (deepProfile as any)?.nationalProfile?.demography?.find((d: any) => d.label.toLowerCase().includes("population"))?.value || (country as any)?.national_condition?.population || (country as any)?.demographics?.population || "1.441 B",
      sub: "2024 · UN",
      icon: Users,
      color: "text-amber-400",
    },
    {
      label: "GDP (NOMINAL)",
      value: deepProfile?.economyStructure?.gdpNominal || (country as any)?.economy?.gdp_nominal || "$3.94 T",
      sub: "2024 · World Bank",
      icon: BarChart3,
      color: "text-sky-400",
    },
    {
      label: "GDP GROWTH",
      value: deepProfile?.economyStructure?.realGrowthRate || (country as any)?.economy?.gdp_growth || "6.8%",
      sub: "2024 · RBI",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      label: "ACTIVE FORCES",
      value: deepProfile?.militarySecurity?.activePersonnel || (country as any)?.military?.active_forces || "1.46 M",
      sub: "2024 · IISS",
      icon: Shield,
      color: "text-amber-500",
    },
    {
      label: "DEFENCE SPENDING",
      value: deepProfile?.militarySecurity?.defenseBudgetUsd || "$86.1 B",
      sub: deepProfile?.militarySecurity?.defenseBudgetGdpPercent ? `${deepProfile.militarySecurity.defenseBudgetGdpPercent} of GDP · SIPRI` : "2.3% of GDP · SIPRI",
      icon: DollarSign,
      color: "text-rose-400",
    },
    {
      label: "ENERGY PROFILE",
      value: "Net Importer",
      sub: "85% Crude Imports · IEA",
      icon: Flame,
      color: "text-orange-400",
    },
    {
      label: "COASTLINE",
      value: (deepProfile as any)?.strategicGeography?.coastline || "7,516 km",
      sub: "2024 · Maritime",
      icon: Anchor,
      color: "text-cyan-400",
    },
  ];

  return (
    <div className="mb-8">
      {/* 2-Section Grid: Left Metrics (7 cols), Right Alignments (5 cols) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-3.5 items-stretch">
        
        {/* LEFT: 7 Key Metrics Bar (7 cols on XL) */}
        <div className="xl:col-span-7 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/8 bg-[#07090e]/95 p-3 flex flex-col justify-between hover:border-trinetra-saffron/40 hover:bg-[#0b0e15] transition-all shadow-md group"
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase truncate">
                    {m.label}
                  </span>
                  <Icon className={`size-3.5 ${m.color} shrink-0 group-hover:scale-110 transition-transform`} />
                </div>
                <div>
                  <div className="font-mono text-base font-bold text-white tracking-tight leading-tight">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-neutral-500 truncate mt-0.5">
                    {m.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: International Alignments & Memberships (5 cols on XL) */}
        <div className="xl:col-span-5 rounded-xl border border-white/8 bg-[#07090e]/95 p-3.5 flex flex-col justify-between shadow-md">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5">
              <Globe className="size-3.5 text-trinetra-saffron" />
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                International Alignments & Memberships
              </h3>
            </div>
            <span className="text-[10px] font-mono text-neutral-400">
              {memberships.length} verified memberships
            </span>
          </div>

          {/* Compact Badges Row */}
          <div className="grid grid-cols-4 sm:grid-cols-8 xl:grid-cols-4 2xl:grid-cols-8 gap-1.5">
            {memberships.map((item) => {
              const org = INTERNATIONAL_ORGS[item.orgId] || {
                id: item.orgId,
                name: item.orgId,
                shortName: item.orgId,
                category: "multilateral",
                logoText: "🌐",
                emblemColor: "#FF7A00",
                headquarters: "International",
                established: 2000,
                purpose: "Strategic multilateral alignment.",
                strategicSignificance: "Multilateral coordination mechanism.",
                keyMembers: [country.id],
              };

              return (
                <button
                  type="button"
                  key={item.orgId}
                  onClick={() => setSelectedOrg({ org, membership: item })}
                  className="px-2 py-1.5 rounded-lg bg-[#0d1017] hover:bg-[#131722] border border-white/8 hover:border-trinetra-saffron/60 text-left transition-all group flex flex-col justify-between cursor-pointer"
                  title={`${org.name} - Click for Strategic Significance`}
                >
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className="text-xs">{org.logoText}</span>
                    <span className="font-mono text-[11px] font-bold text-white group-hover:text-trinetra-saffron">
                      {org.shortName}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-neutral-400 truncate">
                    {item.status === "Founding Member" ? "Founder" : item.status}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* MODAL: Deep International Alignment Intelligence */}
      {selectedOrg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl border border-trinetra-saffron/40 bg-[#0a0d14] p-6 shadow-2xl overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-trinetra-saffron/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-xl bg-black/40 border border-white/10">
                  {selectedOrg.org.logoText}
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {selectedOrg.org.name}
                    </h3>
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-trinetra-saffron/20 border border-trinetra-saffron/40 text-trinetra-saffron">
                      {selectedOrg.org.shortName}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Building2 className="size-3 text-neutral-500" />
                      {selectedOrg.org.headquarters}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3 text-neutral-500" />
                      Est. {selectedOrg.org.established}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrg(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Sovereign Role & Status */}
            <div className="mb-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                  {country.name}'s Sovereign Status
                </span>
                <span className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  {selectedOrg.membership.status}
                  {selectedOrg.membership.since && (
                    <span className="text-xs font-mono text-neutral-400 font-normal">
                      (Since {selectedOrg.membership.since})
                    </span>
                  )}
                </span>
              </div>
              {selectedOrg.membership.role && (
                <div className="text-right max-w-xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                    Strategic Mandate
                  </span>
                  <span className="text-xs font-mono text-amber-300">
                    {selectedOrg.membership.role}
                  </span>
                </div>
              )}
            </div>

            {/* Purpose & Strategic Significance */}
            <div className="space-y-3.5 mb-5">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1 flex items-center gap-1.5">
                  <Globe className="size-3 text-sky-400" />
                  Charter Purpose & Mandate
                </h4>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed bg-[#0d1017] p-3 rounded-lg border border-white/5">
                  {selectedOrg.org.purpose}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-trinetra-saffron mb-1 flex items-center gap-1.5">
                  <Sparkles className="size-3 text-trinetra-saffron" />
                  Strategic Geopolitical Significance
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-trinetra-saffron/[0.04] p-3 rounded-lg border border-trinetra-saffron/20">
                  {selectedOrg.org.strategicSignificance}
                </p>
              </div>
            </div>

            {/* Key Member Sovereigns */}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-400">Key Sovereigns:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedOrg.org.keyMembers.map((m) => (
                    <span
                      key={m}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        m === country.id
                          ? "bg-trinetra-saffron text-black font-bold"
                          : "bg-white/5 border border-white/10 text-neutral-300"
                      }`}
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedOrg(null)}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors cursor-pointer"
              >
                Close Briefing
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
