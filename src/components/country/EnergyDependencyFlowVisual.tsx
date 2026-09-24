import React, { useState } from "react";
import {
  Flame,
  Droplets,
  Wind,
  Zap,
  Ship,
  ArrowRight,
  ShieldAlert,
  Layers,
  Database,
  CheckCircle2,
  FileCheck2,
} from "lucide-react";
interface EnergyDependencyFlowVisualProps {
  energy?: any;
  countryName: string;
  countryId: string;
}

type CommodityType = "oil" | "gas" | "coal" | "renewables";

export const EnergyDependencyFlowVisual: React.FC<EnergyDependencyFlowVisualProps> = ({
  energy,
  countryName,
  countryId,
}) => {
  const [activeCommodity, setActiveCommodity] = useState<CommodityType>("oil");

  // Documented flows tailored by country and commodity
  const getCommodityData = () => {
    if (countryId === "IND") {
      switch (activeCommodity) {
        case "oil":
          return {
            title: "Crude Oil Flow & Strategic Refining",
            dependenceRatio: "87.8% Imported",
            origins: [
              { country: "Russia", share: "36%", flag: "🇷🇺", route: "Suez / Baltic & Black Sea SLOCs" },
              { country: "Iraq", share: "20%", flag: "🇮🇶", route: "Strait of Hormuz → Arabian Sea" },
              { country: "Saudi Arabia", share: "14%", flag: "🇸🇦", route: "Strait of Hormuz → Arabian Sea" },
              { country: "UAE", share: "9%", flag: "🇦🇪", route: "Strait of Hormuz → Gulf of Kutch" },
              { country: "United States", share: "5%", flag: "🇺🇸", route: "Atlantic / Cape route" },
            ],
            entryPoints: [
              { name: "Jamnagar Complex (Reliance)", role: "World's largest refining complex (1.24 mbpd)" },
              { name: "Vadinar (Nayara)", role: "400,000 bpd crude processing hub" },
              { name: "Kochi Refinery (BPCL)", role: "Strategic coastal processing facility" },
              { name: "Paradip (IOCL)", role: "Eastern seaboard processing & Bay of Bengal distribution" },
            ],
            destinations: [
              { label: "Domestic Fuel Consumption", share: "~75%", note: "Transport diesel, gasoline, LPG" },
              { label: "Refined Petroleum Exports", share: "~20%", note: "High-value refined fuels to Europe/Asia" },
              { label: "Strategic Petroleum Reserves (ISPRL)", share: "~5%", note: "Visakhapatnam, Mangalore, Padur underground caverns" },
            ],
            vulnerabilityNote: "Over 55% of all crude imports transit the single maritime chokepoint of the Strait of Hormuz.",
          };
        case "gas":
          return {
            title: "Liquefied Natural Gas (LNG) Value Chain",
            dependenceRatio: "48% Imported",
            origins: [
              { country: "Qatar", share: "45%", flag: "🇶🇦", route: "Strait of Hormuz → Dahej / Kochi" },
              { country: "United States", share: "16%", flag: "🇺🇸", route: "Atlantic / Pacific SLOCs" },
              { country: "UAE", share: "12%", flag: "🇦🇪", route: "Strait of Hormuz" },
              { country: "Angola / West Africa", share: "8%", flag: "🇦🇴", route: "Indian Ocean SLOC" },
            ],
            entryPoints: [
              { name: "Dahej Terminal (Petronet)", role: "Largest operational regasification hub (17.5 MMTPA)" },
              { name: "Hazira Terminal (Shell)", role: "Western industrial gas corridor gateway" },
              { name: "Dhamra LNG (Adani/Total)", role: "Eastern coastal regasification terminal" },
            ],
            destinations: [
              { label: "Fertilizer Sector", share: "32%", note: "Urea production feedstocks" },
              { label: "City Gas Distribution (CGD)", share: "22%", note: "CNG vehicles and piped household cooking gas" },
              { label: "Industrial Heating & Power", share: "30%", note: "Ceramics, glass, metallurgy, peak-load power" },
            ],
            vulnerabilityNote: "High sensitivity to long-term contract pricing and Qatar supply stability.",
          };
        case "coal":
          return {
            title: "Thermal & Coking Coal Matrix",
            dependenceRatio: "25% Imported (High Coking Dependence)",
            origins: [
              { country: "Indonesia", share: "48% (Thermal)", flag: "🇮🇩", route: "Malacca / Sunda Straits" },
              { country: "Australia", share: "32% (Coking)", flag: "🇦🇺", route: "Indian Ocean Southern Route" },
              { country: "Russia", share: "12% (PCI/Coking)", flag: "🇷🇺", route: "Far East Vladivostok & Black Sea" },
              { country: "South Africa", share: "8%", flag: "🇿🇦", route: "Western Indian Ocean" },
            ],
            entryPoints: [
              { name: "Krishnapatnam & Vizag Ports", role: "Bulk coal unloading for eastern steel/power plants" },
              { name: "Mundra & Kandla Ports", role: "Thermal coal for western power clusters" },
            ],
            destinations: [
              { label: "Thermal Power Plants", share: "70%", note: "Base-load electricity generation (Coal India + imports)" },
              { label: "Primary Steel Manufacturing", share: "20%", note: "Blast furnace coking coal (85%+ imported)" },
              { label: "Cement & Brick Kilns", share: "10%", note: "Industrial thermal processing" },
            ],
            vulnerabilityNote: "Critical vulnerability in metallurgical coking coal for domestic steel manufacturing.",
          };
        case "renewables":
          return {
            title: "Renewable Generation & Clean Transition",
            dependenceRatio: "42% of Installed Capacity",
            origins: [
              { country: "Domestic Solar Parks", share: "85 GW", flag: "☀️", route: "Bhadla, Pavagada, Khavda Mega-Parks" },
              { country: "Domestic Wind Turbines", share: "46 GW", flag: "💨", route: "Tamil Nadu, Gujarat, Rajasthan" },
              { country: "Large Hydroelectric", share: "47 GW", flag: "💧", route: "Himalayan & Western Ghats rivers" },
              { country: "Civil Nuclear Power", share: "8.1 GW", flag: "⚛️", route: "Kudankulam, Tarapur, Kakrapar" },
            ],
            entryPoints: [
              { name: "Green Energy Corridor (PGCIL)", role: "Inter-state high-voltage transmission grid" },
              { name: "Pumped Storage Projects", role: "Grid balancing and non-peak energy storage" },
            ],
            destinations: [
              { label: "National Grid Feeding", share: "100%", note: "Decarbonizing industrial and residential load" },
              { label: "Green Hydrogen Pilots", share: "Emerging", note: "National Green Hydrogen Mission" },
            ],
            vulnerabilityNote: "Import dependency on Chinese solar wafer/cell supply chains and critical processing minerals.",
          };
      }
    }

    // Default generic flow for other states
    return {
      title: `${activeCommodity.toUpperCase()} Geopolitical Energy Flow`,
      dependenceRatio: energy?.importDependencePct || "Documented",
      origins: [
        { country: "Primary International Suppliers", share: "Major", flag: "🌐", route: "Documented maritime routes" },
        { country: "Regional Producers", share: "Secondary", flag: "⛽", route: "Pipeline and tanker connections" },
      ],
      entryPoints: [
        { name: "National Coastal Terminals", role: "Port and import receiving facilities" },
        { name: "Refinery and Grid Hubs", role: "Primary domestic distribution nodes" },
      ],
      destinations: [
        { label: "Industrial & Power Sector", share: "60%", note: "Core electricity and manufacturing base" },
        { label: "Commercial & Residential", share: "30%", note: "Urban heating and transport" },
        { label: "Strategic Reserves", share: "10%", note: "Emergency national buffer stocks" },
      ],
      vulnerabilityNote: energy?.vulnerabilities?.[0] || "Energy security tied to international supply continuity and maritime chokepoints.",
    };
  };

  const data = getCommodityData();

  return (
    <section className="mb-12" id="sec-energy" aria-label="Energy Dependency & Flow Visualization">
      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                08 // Energy Architecture
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                Geopolitical Supply Chains & Flow Vectors
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Flame className="size-6 text-trinetra-saffron" />
              Energy Dependency & Supply Flow: {countryName}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              Multi-tier tracing from foreign supplier origin points through maritime transit routes into domestic refining hubs and strategic reserves.
            </p>
          </div>

          {/* Commodity Switcher */}
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-xl p-1 text-xs font-mono">
            <button
              onClick={() => setActiveCommodity("oil")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeCommodity === "oil"
                  ? "bg-amber-400 text-black font-semibold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Droplets className="size-3.5" />
              Crude Oil
            </button>
            <button
              onClick={() => setActiveCommodity("gas")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeCommodity === "gas"
                  ? "bg-sky-400 text-black font-semibold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Flame className="size-3.5" />
              Gas (LNG)
            </button>
            <button
              onClick={() => setActiveCommodity("coal")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeCommodity === "coal"
                  ? "bg-neutral-300 text-black font-semibold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Layers className="size-3.5" />
              Coal
            </button>
            <button
              onClick={() => setActiveCommodity("renewables")}
              className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                activeCommodity === "renewables"
                  ? "bg-emerald-400 text-black font-semibold shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Wind className="size-3.5" />
              Clean Grid
            </button>
          </div>
        </div>

        {/* Headline Flow Banner */}
        <div className="p-4 rounded-xl bg-[#0e1219] border border-neutral-800 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
              Active Flow Domain
            </span>
            <h3 className="font-display text-lg text-white font-semibold mt-0.5">
              {data.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3.5 py-1.5 rounded-lg bg-black/60 border border-neutral-700 text-right">
              <span className="text-[10px] font-mono text-neutral-400 uppercase block">Import Exposure</span>
              <span className="text-sm font-bold font-mono text-amber-300">{data.dependenceRatio}</span>
            </div>
          </div>
        </div>

        {/* 4-STAGE SANKEY-STYLE VISUAL FLOW DIAGRAM */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative mb-8">
          {/* Stage 1: ORIGINS / SUPPLIERS */}
          <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  1. Origins & Suppliers
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Foreign Sources</span>
              </div>

              <div className="space-y-2.5">
                {data.origins.map((orig, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white flex items-center gap-1.5">
                        <span>{orig.flag}</span> {orig.country}
                      </span>
                      <span className="font-mono text-amber-300 font-bold">{orig.share}</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1 font-mono">{orig.route}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center text-[10px] font-mono text-neutral-500">
              Flow Direction →
            </div>
          </div>

          {/* Stage 2: MARITIME TRANSIT & CHOKEPOINTS */}
          <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                  2. Transit Vector
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Sea Lanes</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                  <span className="text-sky-300 font-bold font-mono text-[11px] block">
                    Strait of Hormuz
                  </span>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                    Primary gateway for West Asian crude & Qatari LNG into the Arabian Sea.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                  <span className="text-sky-300 font-bold font-mono text-[11px] block">
                    Cape of Good Hope & Suez
                  </span>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                    European/Russian seaborne crude transiting Mediterranean & Indian Ocean.
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-black/50 border border-white/5">
                  <span className="text-sky-300 font-bold font-mono text-[11px] block">
                    Malacca Strait
                  </span>
                  <p className="text-[11px] text-neutral-300 mt-1 leading-relaxed">
                    Coal bulkers and regional flows transiting Southeast Asian straits.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center text-[10px] font-mono text-neutral-500">
              Flow Direction →
            </div>
          </div>

          {/* Stage 3: REFINING & CONVERSION NODES */}
          <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  3. Terminals & Processing
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Domestic Nodes</span>
              </div>

              <div className="space-y-2.5">
                {data.entryPoints.map((ep, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-xs">
                    <span className="font-semibold text-emerald-300 block">{ep.name}</span>
                    <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">{ep.role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center text-[10px] font-mono text-neutral-500">
              Flow Direction →
            </div>
          </div>

          {/* Stage 4: CONSUMPTION & RESERVES */}
          <div className="p-4 rounded-xl bg-[#0c0f16] border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <span className="font-mono text-[11px] font-bold text-trinetra-saffron uppercase tracking-wider">
                  4. End-Use & Reserves
                </span>
                <span className="text-[10px] font-mono text-neutral-500">Allocation</span>
              </div>

              <div className="space-y-2.5">
                {data.destinations.map((dest, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white">{dest.label}</span>
                      <span className="font-mono text-trinetra-saffron font-bold">{dest.share}</span>
                    </div>
                    <p className="text-[10px] text-neutral-400 mt-1 leading-relaxed">{dest.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-center text-[10px] font-mono text-neutral-500">
              Terminal Allocation ✓
            </div>
          </div>
        </div>

        {/* Geopolitical Vulnerability Assessment Card */}
        <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
          <ShieldAlert className="size-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-300 block">
              Strategic Exposure & Chokepoint Vulnerability
            </span>
            <p className="text-xs text-neutral-200 mt-1 leading-relaxed font-light">
              {data.vulnerabilityNote}
            </p>
          </div>
        </div>

        {/* Source Attribution */}
        <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between font-mono text-[10px] text-neutral-400">
          <div className="flex items-center gap-1.5">
            <FileCheck2 className="size-3 text-neutral-500" />
            <span>Sources: IEA World Energy Outlook, PPAC India, UN Comtrade</span>
          </div>
          <span>Updated: September 2026</span>
        </div>
      </div>
    </section>
  );
};
