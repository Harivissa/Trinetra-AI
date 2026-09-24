import React from "react";
import { Users2, Globe, Landmark, ShieldCheck, CheckCircle2 } from "lucide-react";
import type { Country } from "../../../types";
import type { CountryDeepProfile } from "../../../data/countryDeepProfileData";
import { MultilateralNetworkVisual } from "../MultilateralNetworkVisual";

interface Module10MultilateralProps {
  country: Country;
  deepProfile?: CountryDeepProfile;
}

export const Module10Multilateral: React.FC<Module10MultilateralProps> = ({
  country,
  deepProfile,
}) => {
  return (
    <section id="module-10-multilateral" className="mb-14 scroll-mt-24" aria-label="10 Multilateral Alignment">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 10
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Institutional Coalitions & Minilateral Platforms
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Users2 className="size-6 text-trinetra-saffron" />
            <span>Multilateral Alignment: {country.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for sovereign multilateral diplomacy. Institutional mandates across global bodies (UN, G20), non-Western blocs (BRICS, SCO), Indo-Pacific minilaterals (QUAD, I2U2), regional mechanisms, and sovereign treaty commitments.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Institutional Stance: <strong className="text-sky-400">Rules-Based Reform</strong>
          </span>
        </div>
      </div>

      {/* Complete Multilateral Network Visual */}
      <MultilateralNetworkVisual
        country={country}
        deepProfile={deepProfile}
      />
    </section>
  );
};
