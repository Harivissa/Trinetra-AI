import React from "react";
import { Radiation, Rocket, Terminal, ShieldCheck, Lock, Orbit, CheckCircle2 } from "lucide-react";
import type { NuclearCapabilityData, SpaceCapabilityData, CyberCapabilityData } from "../../../data/countryDeepProfileData";
import { StrategicDomainsVisual } from "../StrategicDomainsVisual";

interface Module06StrategicDomainsProps {
  countryName: string;
  nuclear: NuclearCapabilityData;
  space: SpaceCapabilityData;
  cyber: CyberCapabilityData;
}

export const Module06StrategicDomains: React.FC<Module06StrategicDomainsProps> = ({
  countryName,
  nuclear,
  space,
  cyber,
}) => {
  return (
    <section id="module-06-strategic-domains" className="mb-14 scroll-mt-24" aria-label="06 Nuclear, Space, and Cyber">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 06
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              High-End Deterrence, Orbital Assets & Cyberspace Posture
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Radiation className="size-6 text-trinetra-saffron" />
            <span>Nuclear / Space / Cyber: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical home for strategic nuclear deterrence (warheads, delivery triad, doctrine, treaties), sovereign orbital space launch capabilities, and state cyberspace military commands and cyber defense architecture.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            Deterrence: <strong className="text-purple-400">{nuclear.status?.includes("Weapon") ? "Declared Triad" : "Non-Nuclear"}</strong>
          </span>
        </div>
      </div>

      {/* Complete Strategic Domains Visualizer (Nuclear, Space, Cyber) */}
      <StrategicDomainsVisual
        nuclear={nuclear}
        space={space}
        cyber={cyber}
        countryName={countryName}
      />
    </section>
  );
};
