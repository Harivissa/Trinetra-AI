import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users2,
  Globe,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  Landmark,
  ChevronDown,
  ChevronUp,
  Radio,
  TrendingUp,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import { getGroupsForCountry, STRATEGIC_GROUPS } from "../../data/strategicGroupsData";
import { getEventsByCountry } from "../../data/strategicEventsData";

interface MultilateralNetworkVisualProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
}

export const MultilateralNetworkVisual: React.FC<MultilateralNetworkVisualProps> = ({
  country,
  deepProfile,
}) => {
  const [expandedGroupId, setExpandedGroupId] = useState<string | null>(null);

  // Retrieve verified memberships for this specific country
  const countryGroups = React.useMemo(() => {
    const verified = getGroupsForCountry(country.id);
    if (verified.length > 0) return verified;

    // Fallback if specific country not in code lookup
    return STRATEGIC_GROUPS.slice(0, 6);
  }, [country.id]);

  const countryEvents = React.useMemo(() => {
    return getEventsByCountry(country.id).slice(0, 3);
  }, [country.id]);

  const toggleExpand = (id: string) => {
    setExpandedGroupId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mb-12" id="sec-multilateral" aria-label="International Alignments & Memberships">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                10 // Multilateral Alignment
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                International Alignments & Verified Memberships
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Users2 className="size-6 text-trinetra-saffron" />
              International Alignments & Memberships: {country.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Institutional coalitions, security pacts, and trade blocs where {country.name} maintains formal participation. Click any organization tile to expand comprehensive role, mandate, and strategic domain connections.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              {countryGroups.length} Verified Memberships
            </span>
          </div>
        </div>

        {/* Section 11 Interactive Compact Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {countryGroups.map((grp) => {
            const isExpanded = expandedGroupId === grp.id;
            const domain = grp.strategic_domains?.[0] || "Global Governance";

            return (
              <div
                key={grp.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "bg-[#10141d] border-trinetra-saffron shadow-lg shadow-orange-950/20 md:col-span-2 lg:col-span-3"
                    : "bg-[#0c0e14] border-neutral-800 hover:border-neutral-700 hover:bg-[#0e111a]"
                }`}
              >
                {/* Compact Tile Header (Click to Expand) */}
                <div
                  onClick={() => toggleExpand(grp.id)}
                  className="p-5 cursor-pointer flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="size-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-trinetra-saffron font-bold text-xs">
                        {grp.acronym?.slice(0, 3) || "ORG"}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                          {grp.name}
                        </h3>
                        <span className="text-[10px] font-mono text-neutral-400">
                          Domain: <strong className="text-neutral-300">{domain}</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="size-2.5" /> Full Member
                      </span>
                      <button className="text-neutral-500 hover:text-white p-1">
                        {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-neutral-800/60 mt-2">
                    <span>Role: <strong className="text-neutral-200">Sovereign Principal</strong></span>
                    <span className="text-trinetra-saffron text-[11px] flex items-center gap-1">
                      {isExpanded ? "Collapse Briefing" : "Expand Intelligence"}
                    </span>
                  </div>
                </div>

                {/* Expanded Intelligence Panel */}
                {isExpanded && (
                  <div className="p-6 border-t border-neutral-800 bg-[#090b10] space-y-6 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-trinetra-saffron mb-2">
                          Institutional Purpose & Mandate
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          {grp.strategic_purpose || grp.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                          {country.name}'s Strategic Role
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                          Serves as a pivotal anchor state shaping agenda priorities, non-aligned balance, and regional consensus across {grp.strategic_domains?.join(", ") || "strategic domains"}.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <TrendingUp className="size-3 text-[#FF7A00]" /> Economic Relevance
                        </span>
                        <p className="text-xs text-neutral-200 font-light">
                          {grp.economic_weight || "Coordinates sovereign financial and trade arrangements across member state economies."}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                          <Shield className="size-3 text-sky-400" /> Security Relevance
                        </span>
                        <p className="text-xs text-neutral-200 font-light">
                          {grp.security_relevance || "Enhances collective intelligence sharing, regional stability, and joint diplomatic deterrence."}
                        </p>
                      </div>
                    </div>

                    {/* Member States Network */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Participating Sovereign Peers ({grp.members.length} States)
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {grp.members.map((mCode) => (
                          <Link
                            key={mCode}
                            to={`/country?id=${mCode}`}
                            className={`px-2 py-0.5 rounded text-xs font-mono border transition-colors ${
                              mCode === country.id
                                ? "bg-trinetra-saffron text-black font-bold border-trinetra-saffron"
                                : "bg-neutral-900 text-neutral-300 hover:text-white hover:border-trinetra-saffron border-neutral-800"
                            }`}
                          >
                            {mCode}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Related Strategic Events */}
                    {countryEvents.length > 0 && (
                      <div className="pt-4 border-t border-neutral-800/60">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
                          <Radio className="size-3.5 text-trinetra-saffron" />
                          Related Regional Flashpoints & Events
                        </h4>
                        <div className="space-y-2">
                          {countryEvents.map((ev) => (
                            <Link
                              key={ev.id}
                              to="/events"
                              className="p-3 rounded-lg bg-neutral-900/40 border border-neutral-800/80 hover:border-trinetra-saffron flex items-center justify-between group transition-colors"
                            >
                              <div className="truncate mr-2">
                                <span className="text-xs font-medium text-neutral-200 group-hover:text-white">
                                  {ev.title}
                                </span>
                                <span className="text-[10px] font-mono text-neutral-500 block">
                                  {ev.location.name} · {ev.date}
                                </span>
                              </div>
                              <ArrowRight className="size-3.5 text-neutral-600 group-hover:text-trinetra-saffron shrink-0" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex justify-end">
                      <Link
                        to="/groups"
                        className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1 font-semibold"
                      >
                        Explore Complete {grp.name} Multilateral Dossier <ExternalLink className="size-3" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Doctrine Summary Strip */}
        <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono text-neutral-400">
            Diplomatic Doctrine: <strong className="text-neutral-200">{(deepProfile?.geopoliticalPosition as any)?.multialignmentPosture?.principle || "Strategic Multi-Alignment & Issue-Based Coalitions"}</strong>
          </span>
          <Link
            to="/groups"
            className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1 font-semibold"
          >
            All Multilateral Organizations Directory <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
