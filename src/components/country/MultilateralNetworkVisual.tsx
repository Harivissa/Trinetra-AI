import React from "react";
import {
  Users2,
  Globe,
  ExternalLink,
  Shield,
  Layers,
  ArrowRight,
  Landmark,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";

interface MultilateralNetworkVisualProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
}

export const MultilateralNetworkVisual: React.FC<MultilateralNetworkVisualProps> = ({
  country,
  deepProfile,
}) => {
  // Multilateral blocs list from canonical data or high-fidelity defaults
  const groups = deepProfile?.geopoliticalPosition?.regionalOrganizations || [
    { name: "G20", significance: "Premier forum for international economic cooperation and financial stability." },
    { name: "BRICS", significance: "Consortium of leading non-Western economies shaping South-South coordination." },
    { name: "QUAD", significance: "Quadrilateral Security Dialogue fostering maritime security across the Indo-Pacific." },
    { name: "SCO", significance: "Shanghai Cooperation Organisation focusing on regional Eurasian security and counter-terrorism." },
    { name: "United Nations (UN)", significance: "Founding member of the UN and continuous advocate for Security Council reform." },
    { name: "I2U2", significance: "Joint minilateral initiative focusing on water, energy, space, and food security." },
  ];

  return (
    <section className="mb-12" id="sec-multilateral" aria-label="Multilateral Groups & Alliances">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                12 // Multilateral Alignment
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Institutional Coalitions & Minilateral Platforms
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Users2 className="size-6 text-trinetra-saffron" />
              Multilateral Network: {country.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Global and regional institutional alignments. Click any multilateral body to navigate directly to its detailed multilateral briefing.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-lg">
              {groups.length} Key Sovereign Memberships
            </span>
          </div>
        </div>

        {/* Multilateral Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {groups.map((grp, idx) => (
            <a
              key={idx}
              href="/groups"
              className="p-5 rounded-xl bg-[#0c0e14] border border-neutral-800 hover:border-trinetra-saffron/80 hover:bg-[#10141d] transition-all duration-300 group block relative shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <Globe className="size-4 text-trinetra-saffron" />
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {grp.name}
                  </h3>
                </div>
                <ExternalLink className="size-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-4">
                {grp.significance}
              </p>

              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400 group-hover:text-trinetra-saffron">
                <span>Explore Multilateral Dossier</span>
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex items-center justify-between">
          <span className="text-xs font-mono text-neutral-400">
            Diplomatic Doctrine: <strong className="text-neutral-200">{(deepProfile?.geopoliticalPosition as any)?.multialignmentPosture?.principle || "Strategic Multi-Alignment & Issue-Based Coalitions"}</strong>
          </span>
          <a
            href="/groups"
            className="text-xs font-mono text-trinetra-saffron hover:underline flex items-center gap-1 font-semibold"
          >
            <span>View All Global Groupings</span>
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
