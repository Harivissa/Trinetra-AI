import React, { useState } from "react";
import {
  Landmark,
  User,
  Vote,
  Scale,
  Calendar,
  Building,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Shield,
  FileText,
} from "lucide-react";
import type { LeadershipProfile } from "../../data/countryDeepProfileData";

interface GovernmentStructureVisualProps {
  leadership: LeadershipProfile;
  countryId: string;
  countryName: string;
}

export const GovernmentStructureVisual: React.FC<GovernmentStructureVisualProps> = ({
  leadership,
  countryId,
  countryName,
}) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  // Country-specific institutional structure definitions
  const renderCountrySpecificHierarchy = () => {
    if (countryId === "IND") {
      return (
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Level 1: Head of State */}
          <div className="p-4 rounded-xl bg-[#121622] border border-amber-500/30 text-center relative shadow-lg">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
              HEAD OF STATE // CONSTITUTIONAL APEX
            </span>
            <h4 className="font-display text-lg text-white font-bold mt-1">
              President of India ({leadership.headOfState.name})
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Ceremonial Head of State & Supreme Commander of the Armed Forces. Acts on the binding advice of the Council of Ministers (Article 74).
            </p>
          </div>

          {/* Stem */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-amber-500/40" />
          </div>

          {/* Level 2: Head of Government & Cabinet */}
          <div className="p-4 rounded-xl bg-[#121622] border border-trinetra-saffron/40 text-center relative shadow-lg">
            <span className="text-[10px] font-mono text-trinetra-saffron uppercase tracking-widest font-bold block">
              CHIEF EXECUTIVE // HEAD OF GOVERNMENT
            </span>
            <h4 className="font-display text-lg text-white font-bold mt-1">
              Prime Minister of India ({leadership.headOfGovernment.name})
            </h4>
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-center gap-2 text-xs text-neutral-300">
              <span className="font-mono text-amber-300">Union Council of Ministers</span>
              <span className="text-neutral-500">·</span>
              <span>Cabinet Committee on Security (CCS)</span>
              <span className="text-neutral-500">·</span>
              <span>Prime Minister&apos;s Office (PMO)</span>
            </div>
          </div>

          {/* Stem */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-trinetra-saffron/40" />
          </div>

          {/* Level 3: Parliament of India (Bicameral) & Judiciary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Legislature: Parliament */}
            <div className="p-4 rounded-xl bg-[#0e121a] border border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
                LEGISLATIVE BRANCH // BICAMERAL
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                Parliament of India (Sansad)
              </h5>
              <div className="mt-3 space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-300">Lok Sabha (House of the People):</span>
                  <span className="text-amber-400 font-semibold">543 Elected Seats</span>
                </div>
                <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                  <span className="text-neutral-300">Rajya Sabha (Council of States):</span>
                  <span className="text-neutral-400">245 Members</span>
                </div>
              </div>
            </div>

            {/* Judiciary: Supreme Court */}
            <div className="p-4 rounded-xl bg-[#0e121a] border border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
                JUDICIAL BRANCH // INDEPENDENT
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                Supreme Court of India
              </h5>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Headed by the Chief Justice of India with 34 judges. Exercises constitutional review, guardian of fundamental rights, and final appellate authority.
              </p>
              <div className="mt-3 text-[11px] font-mono text-neutral-500">
                Independent collegium appointment system
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (countryId === "CHN") {
      return (
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Level 1: CCP Core Leadership */}
          <div className="p-4 rounded-xl bg-[#201014] border border-rose-600/40 text-center relative shadow-lg">
            <span className="text-[10px] font-mono text-rose-400 uppercase tracking-widest font-bold block">
              SUPREME PARTY LEADERSHIP // PARTY CORE
            </span>
            <h4 className="font-display text-lg text-white font-bold mt-1">
              General Secretary of the CCP & President ({leadership.headOfState.name})
            </h4>
            <p className="text-xs text-neutral-300 mt-1">
              Central Military Commission (CMC) Chairman & Politburo Standing Committee (7 Members).
            </p>
          </div>

          {/* Stem */}
          <div className="flex justify-center">
            <div className="w-0.5 h-6 bg-rose-600/40" />
          </div>

          {/* Level 2: Executive State Council & Legislature */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* State Council */}
            <div className="p-4 rounded-xl bg-[#140e12] border border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
                EXECUTIVE APPARATUS // STATE COUNCIL
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                Premier of the State Council ({leadership.headOfGovernment.name})
              </h5>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Directs civil administration, economic ministries, central bank, and provincial governors.
              </p>
            </div>

            {/* National People's Congress */}
            <div className="p-4 rounded-xl bg-[#140e12] border border-neutral-700">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
                LEGISLATIVE ORGAN // HIGHEST ORGAN OF STATE POWER
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                National People&apos;s Congress (NPC)
              </h5>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                ~2,980 deputies meeting annually; NPC Standing Committee (~175 members) manages continuous legislative work.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (countryId === "USA") {
      return (
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Level 1: Constitutional Tripartite Structure */}
          <div className="p-3 rounded-xl bg-[#10141c] border border-blue-500/30 text-center mb-4">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">
              UNITED STATES CONSTITUTIONAL SYSTEM // SEPARATION OF POWERS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Executive */}
            <div className="p-4 rounded-xl bg-[#0d121a] border border-neutral-700">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-bold block mb-1">
                ARTICLE II // EXECUTIVE
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                President of the United States
              </h5>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Commander-in-Chief, head of state & government. Supported by Cabinet departments, NSC, and federal agencies.
              </p>
            </div>

            {/* Legislative */}
            <div className="p-4 rounded-xl bg-[#0d121a] border border-neutral-700">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold block mb-1">
                ARTICLE I // LEGISLATIVE
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                United States Congress
              </h5>
              <div className="mt-2 space-y-1 text-xs font-mono text-neutral-300">
                <p>• Senate (100 members)</p>
                <p>• House (435 voting members)</p>
              </div>
            </div>

            {/* Judicial */}
            <div className="p-4 rounded-xl bg-[#0d121a] border border-neutral-700">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold block mb-1">
                ARTICLE III // JUDICIAL
              </span>
              <h5 className="font-display text-base text-white font-semibold">
                Supreme Court of the US
              </h5>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Chief Justice & 8 Associate Justices holding lifetime tenure. Final authority on constitutional interpretation.
              </p>
            </div>
          </div>
        </div>
      );
    }

    // Default institutional model for other states
    return (
      <div className="space-y-4 max-w-3xl mx-auto">
        <div className="p-4 rounded-xl bg-[#121622] border border-neutral-700 text-center shadow-lg">
          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold block">
            HEAD OF STATE
          </span>
          <h4 className="font-display text-lg text-white font-bold mt-1">
            {leadership.headOfState.title}: {leadership.headOfState.name}
          </h4>
          <p className="text-xs text-neutral-400 mt-1">{leadership.headOfState.role}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-neutral-700" />
        </div>

        <div className="p-4 rounded-xl bg-[#121622] border border-trinetra-saffron/40 text-center shadow-lg">
          <span className="text-[10px] font-mono text-trinetra-saffron uppercase tracking-widest font-bold block">
            HEAD OF GOVERNMENT
          </span>
          <h4 className="font-display text-lg text-white font-bold mt-1">
            {leadership.headOfGovernment.title}: {leadership.headOfGovernment.name}
          </h4>
          <p className="text-xs text-neutral-400 mt-1">{leadership.headOfGovernment.role}</p>
        </div>

        <div className="flex justify-center">
          <div className="w-0.5 h-6 bg-neutral-700" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#0e121a] border border-neutral-700">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
              LEGISLATURE
            </span>
            <h5 className="font-display text-base text-white font-semibold">
              {leadership.legislature.name}
            </h5>
            <p className="text-xs text-neutral-300 mt-2">{leadership.legislature.composition}</p>
          </div>

          <div className="p-4 rounded-xl bg-[#0e121a] border border-neutral-700">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider font-bold block mb-1">
              JUDICIARY
            </span>
            <h5 className="font-display text-base text-white font-semibold">
              {leadership.judiciary.highestCourt}
            </h5>
            <p className="text-xs text-neutral-300 mt-2">{leadership.judiciary.structure}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="mb-12" id="sec-leadership" aria-label="Government Visualization & Institutional Hierarchy">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                05 // Government Structure
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Visual Institutional Hierarchy
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Landmark className="size-6 text-trinetra-saffron" />
              Political System & Institutional Hierarchy: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Country-specific institutional layout reflecting actual constitutional power relationships.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              {leadership.systemType}
            </span>
          </div>
        </div>

        {/* Factual Governance Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#0c0e14] border border-neutral-800">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Governing Party / Force
            </span>
            <p className="text-sm font-semibold text-white mt-1">{leadership.governingParty}</p>
            {leadership.governingCoalition && (
              <span className="text-[10px] font-mono text-amber-400 block mt-1">
                Coalition: {leadership.governingCoalition}
              </span>
            )}
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e14] border border-neutral-800">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Executive Mandate
            </span>
            <p className="text-sm font-semibold text-white mt-1">Took Office: {leadership.dateTookOffice}</p>
            <span className="text-[10px] font-mono text-neutral-400 block mt-1">
              Active Executive Term
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e14] border border-neutral-800">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Next General Election
            </span>
            <p className="text-sm font-semibold text-emerald-400 font-mono mt-1">{leadership.nextElection}</p>
            <span className="text-[10px] font-mono text-neutral-400 block mt-1">
              Scheduled Cycle
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#0c0e14] border border-neutral-800">
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Judicial Apex
            </span>
            <p className="text-sm font-semibold text-white mt-1">{leadership.judiciary.highestCourt}</p>
            <span className="text-[10px] font-mono text-neutral-400 block mt-1">
              Independent Review
            </span>
          </div>
        </div>

        {/* The Visual Institutional Tree */}
        <div className="p-6 rounded-xl bg-[#0a0d13] border border-neutral-800/80 mb-6">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono text-trinetra-saffron uppercase font-bold tracking-widest">
              INSTITUTIONAL HIERARCHY // {countryName.toUpperCase()}
            </span>
          </div>
          {renderCountrySpecificHierarchy()}
        </div>

        {/* Source Attribution */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800 font-mono text-[10px] text-neutral-400">
          <span>Constitutional Reference: {leadership.source}</span>
          <span>Verified Mandate: {leadership.asOf}</span>
        </div>
      </div>
    </section>
  );
};
