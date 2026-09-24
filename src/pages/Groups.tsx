import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Globe2,
  ArrowRight,
  ShieldCheck,
  Shield,
  Zap,
  TrendingUp,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronRight,
  Users2,
  Landmark,
  Radio,
  FileCheck2,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { STRATEGIC_GROUPS } from "../data/strategicGroupsData";
import { STRATEGIC_EVENTS } from "../data/strategicEventsData";
import type { StrategicGroup, StrategicEvent } from "../types";
import { api } from "../services/api";

const COUNTRY_NAMES: Record<string, string> = {
  IND: "India",
  CHN: "China",
  USA: "United States",
  RUS: "Russia",
  JPN: "Japan",
  GBR: "United Kingdom",
  FRA: "France",
  DEU: "Germany",
  TUR: "Turkey",
  SAU: "Saudi Arabia",
  IRN: "Iran",
  ISR: "Israel",
  PAK: "Pakistan",
  BRA: "Brazil",
  IDN: "Indonesia",
  AUS: "Australia",
  KOR: "South Korea",
  EGY: "Egypt",
  ZAF: "South Africa",
  CAN: "Canada",
  ITA: "Italy",
  UKR: "Ukraine",
  ARE: "United Arab Emirates",
  ETH: "Ethiopia",
  KAZ: "Kazakhstan",
  KGZ: "Kyrgyzstan",
  TJK: "Tajikistan",
  UZB: "Uzbekistan",
  BLR: "Belarus",
  MYS: "Malaysia",
  SGP: "Singapore",
  THA: "Thailand",
  VNM: "Vietnam",
  PHL: "Philippines",
  ARG: "Argentina",
  MEX: "Mexico",
};

export default function Groups() {
  const [groups, setGroups] = useState<StrategicGroup[]>(STRATEGIC_GROUPS);
  const [selectedGroupId, setSelectedGroupId] = useState<string>("brics");
  const [filterDomain, setFilterDomain] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    api.getGroups()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setGroups(data);
        }
      })
      .catch(() => {
        // Fallback to local STRATEGIC_GROUPS
      });
  }, []);

  const filteredGroups = useMemo(() => {
    return groups.filter((g) => {
      const matchesSearch =
        !searchQuery ||
        g.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (g.acronym && g.acronym.toLowerCase().includes(searchQuery.toLowerCase())) ||
        g.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDomain =
        filterDomain === "ALL" ||
        (g.strategic_domains && g.strategic_domains.some((d) => d.toLowerCase().includes(filterDomain.toLowerCase())));

      return matchesSearch && matchesDomain;
    });
  }, [groups, searchQuery, filterDomain]);

  const activeGroup = useMemo(() => {
    return groups.find((g) => g.id.toLowerCase() === selectedGroupId.toLowerCase()) || filteredGroups[0] || groups[0];
  }, [groups, selectedGroupId, filteredGroups]);

  // Find related events that involve members of this active group
  const relatedEvents = useMemo(() => {
    if (!activeGroup) return [];
    const memberSet = new Set(activeGroup.members);
    return STRATEGIC_EVENTS.filter((ev) =>
      ev.affectedCountries.some((c) => memberSet.has(c))
    ).slice(0, 4);
  }, [activeGroup]);

  // Compute overlapping memberships across other key strategic groups
  const overlappingGroups = useMemo(() => {
    if (!activeGroup) return [];
    const memberSet = new Set(activeGroup.members);

    return groups
      .filter((g) => g.id !== activeGroup.id)
      .map((g) => {
        const overlapCount = g.members.filter((m) => memberSet.has(m)).length;
        return {
          group: g,
          overlapCount,
          sharedPct: Math.round((overlapCount / activeGroup.members.length) * 100),
        };
      })
      .filter((item) => item.overlapCount > 0)
      .sort((a, b) => b.overlapCount - a.overlapCount)
      .slice(0, 5);
  }, [activeGroup, groups]);

  return (
    <div className="min-h-screen bg-[#070707] text-neutral-200 selection:bg-[#FF7A00]/30 selection:text-white">
      <Header />

      <main className="mx-auto max-w-[1720px] px-4 sm:px-8 py-8">
        {/* Top Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] font-mono text-[11px] font-bold uppercase tracking-wider">
                MULTILATERAL ARCHITECTURE // SOVEREIGN COALITIONS
              </span>
              <span className="text-neutral-500 text-xs font-mono">
                {groups.length} Verified Strategic Blocs
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-neutral-100 font-normal tracking-tight">
              International Groups & Strategic Alliances
            </h1>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed font-light">
              Comprehensive institutional dossiers tracing treaty commitments, member networks, overlapping architectures, and geoeconomic leverage across the multipolar order.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search group (e.g. BRICS, NATO, ASEAN)..."
              className="px-3.5 py-2 text-xs bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-[#FF7A00] w-64"
            />
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-6 scrollbar-none border-b border-neutral-800/60">
          {[
            { id: "ALL", label: "All Blocs" },
            { id: "Security", label: "Defense & Security" },
            { id: "Trade", label: "Trade & Geo-Economics" },
            { id: "Energy", label: "Energy & Cartels" },
            { id: "Finance", label: "Monetary & Finance" },
            { id: "Maritime", label: "Maritime & Transit" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilterDomain(item.id)}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors whitespace-nowrap ${
                filterDomain === item.id
                  ? "bg-[#FF7A00] text-black font-semibold"
                  : "bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* 2-Column Workstation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Group Navigation List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 uppercase tracking-wider">
                <Layers className="size-3.5 text-[#FF7A00]" />
                Institutional Directory ({filteredGroups.length})
              </span>
            </div>

            <div className="space-y-2.5 max-h-[820px] overflow-y-auto pr-1">
              {filteredGroups.map((grp) => {
                const isSelected = activeGroup?.id === grp.id;

                return (
                  <button
                    key={grp.id}
                    onClick={() => setSelectedGroupId(grp.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group relative ${
                      isSelected
                        ? "bg-[#11141d] border-[#FF7A00] shadow-lg shadow-orange-950/20 text-white"
                        : "bg-[#0b0c10] border-neutral-800/80 hover:border-neutral-700 hover:bg-[#0e1017] text-neutral-300"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-serif text-base sm:text-lg font-medium group-hover:text-[#FF7A00] transition-colors">
                        {grp.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[#FF7A00] font-semibold">
                        {grp.members.length} States
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 line-clamp-2 font-light leading-relaxed mb-2">
                      {grp.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {grp.strategic_domains?.slice(0, 3).map((domain, dIdx) => (
                        <span
                          key={dIdx}
                          className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-900/90 text-neutral-400 border border-neutral-800"
                        >
                          {domain}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Group Deep Dossier (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {activeGroup && (
              <>
                {/* 1. Primary Bloc Dossier Header */}
                <div className="border border-neutral-800 rounded-2xl bg-[#090b10] p-6 sm:p-8 shadow-xl relative overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-neutral-800 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#FF7A00]/10 border border-[#FF7A00]/40 text-[#FF7A00] font-bold">
                        {activeGroup.acronym || activeGroup.id.toUpperCase()}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        Founded: {activeGroup.founded || "Chartered"}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                      <Landmark className="size-3.5 text-neutral-500" />
                      <span>HQ: {activeGroup.headquarters || "Rotational"}</span>
                    </div>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-4xl text-neutral-100 font-normal leading-tight mb-4">
                    {activeGroup.name}
                  </h2>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {activeGroup.strategic_purpose || activeGroup.description}
                  </p>

                  {/* 2-Box Strategic Impact Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#FF7A00] font-bold block mb-1 flex items-center gap-1.5">
                        <TrendingUp className="size-3" /> Economic Weight
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                        {activeGroup.economic_weight || "Substantial share of global purchasing power parity."}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block mb-1 flex items-center gap-1.5">
                        <Shield className="size-3" /> Security Relevance
                      </span>
                      <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                        {activeGroup.security_relevance || "Direct coordination of defense posture and regional deterrence."}
                      </p>
                    </div>
                  </div>

                  {/* Focus Areas & Key Initiatives */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-800/80 mb-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Core Focus Areas
                      </h4>
                      <ul className="space-y-1.5">
                        {activeGroup.focus_areas.map((fa, fIdx) => (
                          <li key={fIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[#FF7A00]" />
                            <span>{fa}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {activeGroup.key_initiatives && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                          Key Strategic Initiatives
                        </h4>
                        <ul className="space-y-1.5">
                          {activeGroup.key_initiatives.map((ki, kIdx) => (
                            <li key={kIdx} className="text-xs text-neutral-300 flex items-center gap-2">
                              <span className="size-1.5 rounded-full bg-amber-400" />
                              <span>{ki}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Member Sovereigns Matrix */}
                  <div className="pt-4 border-t border-neutral-800/80">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Participating Sovereign Members ({activeGroup.members.length})
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Click sovereign to inspect complete intelligence dossier
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                      {activeGroup.members.map((code) => {
                        const name = COUNTRY_NAMES[code] || `${code} Sovereign`;
                        return (
                          <Link
                            key={code}
                            to={`/country?id=${code}`}
                            className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 hover:border-[#FF7A00] hover:bg-neutral-800 transition-all group flex items-center justify-between"
                          >
                            <div className="min-w-0">
                              <span className="text-[10px] font-mono text-[#FF7A00] font-bold block">
                                {code}
                              </span>
                              <span className="text-xs text-neutral-200 group-hover:text-white font-medium truncate block">
                                {name}
                              </span>
                            </div>
                            <ArrowRight className="size-3 text-neutral-600 group-hover:text-[#FF7A00] transition-colors shrink-0 ml-1" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 2. OVERLAPPING MEMBERSHIPS & STRATEGIC NETWORKS */}
                <div className="border border-neutral-800 rounded-2xl bg-[#090b10] p-6 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded bg-purple-950/60 border border-purple-500/40 text-purple-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                          Overlapping Coalitions // Multi-Alignment
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-neutral-100 font-medium">
                        Institutional Overlap & Bridge States
                      </h3>
                      <p className="text-xs text-neutral-400 font-light mt-1">
                        Sovereign cross-membership between {activeGroup.name} and competing global blocs.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {overlappingGroups.map((item) => (
                      <button
                        key={item.group.id}
                        onClick={() => setSelectedGroupId(item.group.id)}
                        className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-[#FF7A00] text-left transition-all group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-serif font-medium text-neutral-200 group-hover:text-[#FF7A00]">
                            {item.group.name}
                          </span>
                          <span className="text-[10px] font-mono text-purple-400 font-bold px-1.5 py-0.5 rounded bg-purple-950/40 border border-purple-800/60">
                            {item.overlapCount} Shared
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 line-clamp-2 font-light">
                          {item.group.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. RECENT RELATED STRATEGIC EVENTS */}
                {relatedEvents.length > 0 && (
                  <div className="border border-neutral-800 rounded-2xl bg-[#090b10] p-6 sm:p-8 shadow-xl">
                    <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                            Real-World Telemetry
                          </span>
                        </div>
                        <h3 className="font-serif text-xl text-neutral-100 font-medium">
                          Active Strategic Events Involving Members
                        </h3>
                      </div>
                      <Link
                        to="/events"
                        className="text-xs font-mono text-[#FF7A00] hover:underline flex items-center gap-1"
                      >
                        View Global Event Radar <ArrowRight className="size-3" />
                      </Link>
                    </div>

                    <div className="space-y-3">
                      {relatedEvents.map((ev) => (
                        <div
                          key={ev.id}
                          className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-[#FF7A00] font-semibold">
                                {ev.type}
                              </span>
                              <span className="text-xs font-mono text-neutral-400">{ev.date}</span>
                              <span className="text-xs font-mono text-neutral-500">· {ev.location.name}</span>
                            </div>
                            <h4 className="font-serif text-sm text-neutral-100 font-medium">
                              {ev.title}
                            </h4>
                            <p className="text-xs text-neutral-400 font-light mt-1 line-clamp-1">
                              {ev.whatHappened}
                            </p>
                          </div>

                          <Link
                            to="/events"
                            className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-[#FF7A00] hover:text-black text-neutral-300 text-xs font-mono transition-colors shrink-0 self-start sm:self-center flex items-center gap-1"
                          >
                            <span>Inspect</span>
                            <ChevronRight className="size-3" />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
