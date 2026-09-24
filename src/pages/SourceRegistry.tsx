// TRINETRA AI — Central Evidence & Source Registry (Section 15)
// Institutional provenance, methodology, publication timelines, and zero-fabrication standards.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BookOpen,
  ExternalLink,
  Search,
  CheckCircle2,
  Building2,
  Calendar,
  Lock,
} from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { CENTRAL_SOURCE_REGISTRY, SourceRecord } from "../data/sourcesRegistryData";

export default function SourceRegistry() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");

  const sourcesList = Object.values(CENTRAL_SOURCE_REGISTRY);

  const filteredSources = sourcesList.filter((src) => {
    const matchesType = selectedType === "all" || src.type === selectedType;
    const matchesQuery =
      !searchQuery ||
      src.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.coverageDomain.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesQuery;
  });

  const types = [
    { id: "all", label: "All Institutional Sources" },
    { id: "international_org", label: "International Organizations (UN/WB/IMF)" },
    { id: "think_tank", label: "Strategic Research (SIPRI/IISS)" },
    { id: "official_gazette", label: "Official Gazettes & Ministries" },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-white flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-[1440px] mx-auto w-full px-4 sm:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="size-3 text-trinetra-saffron" />
              CENTRAL EVIDENCE & PROVENANCE REGISTRY
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Zero Fabrication Standard · Fact-to-Source Traceability
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-medium">
            Intelligence Evidence & Source Registry
          </h1>
          <p className="text-sm text-neutral-400 max-w-3xl mt-2 leading-relaxed">
            Every sovereign metric, bilateral classification, strategic asset, and dependency flow in TRINETRA AI maps to an authoritative institutional publisher. Review primary records, verification methodologies, and confidence criteria below.
          </p>
        </div>

        {/* Verification Architecture Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl border border-white/10 bg-[#090b10] flex items-start gap-3">
            <CheckCircle2 className="size-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-bold mb-1">
                Zero Fabrication Rule
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                If data does not exist or cannot be verified via institutional releases, it is explicitly flagged as unverified rather than synthesized.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-[#090b10] flex items-start gap-3">
            <Building2 className="size-5 text-trinetra-saffron shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-bold mb-1">
                Multilateral Provenance
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Hydrocarbons and energy balances are grounded in IEA/EIA releases; military expenditure follows SIPRI and IISS Military Balance baselines.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-[#090b10] flex items-start gap-3">
            <Lock className="size-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-bold mb-1">
                Persistent Audit Keys
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Every intelligence claim retains its permanent registry key (e.g. SOURCE-SIPRI-001) allowing rapid cross-examination.
              </p>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-stretch md:items-center bg-[#090b10] p-4 rounded-xl border border-white/10">
          <div className="flex flex-wrap gap-1.5">
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedType(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  selectedType === t.id
                    ? "bg-trinetra-saffron text-black font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search source ID, agency..."
              className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-black/60 border border-white/15 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-trinetra-saffron font-sans"
            />
          </div>
        </div>

        {/* Sources Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredSources.map((src) => (
            <div
              key={src.id}
              className="rounded-2xl border border-white/10 bg-[#090b10] p-6 hover:border-trinetra-saffron/40 transition-colors shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 text-trinetra-saffron border border-trinetra-saffron/30 text-[10px] font-mono font-bold">
                    {src.id}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="size-3" />
                    Verified Sovereign Partner
                  </span>
                </div>

                <h3 className="font-display text-lg text-white font-semibold mb-1">
                  {src.name}
                </h3>
                <span className="text-xs font-mono text-neutral-400 block mb-3">
                  {src.organization}
                </span>

                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2 mb-4 text-xs font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 block">Domain Coverage:</span>
                    <span className="text-neutral-300">{src.coverageDomain}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-neutral-500 block">Description:</span>
                    <span className="text-neutral-300">{src.description}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Data Year: {src.dataYear} · Verified: {src.lastVerified}</span>
                {src.citationUrl ? (
                  <a
                    href={src.citationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-trinetra-saffron hover:underline flex items-center gap-1"
                  >
                    <span>Official Portal</span>
                    <ExternalLink className="size-3" />
                  </a>
                ) : (
                  <span className="text-neutral-500">Institutional Archive</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
