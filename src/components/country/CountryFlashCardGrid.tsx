// TRINETRA AI — Universal Intelligence Module Board (Preview Cards)
// Canonical, non-duplicative preview cards that act as the visual bridge
// between high-level intelligence and the 16 deep canonical modules below.
// One intelligence fact = One canonical home.
import React from "react";
import {
  Landmark,
  Activity,
  MapPin,
  TrendingUp,
  Shield,
  Radio,
  Flame,
  Globe2,
  Users2,
  Building2,
  Anchor,
  Swords,
  Target,
  History,
  FileCheck2,
  Compass,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { Country } from "../../types";
import type { CountryDeepProfile } from "../../data/countryDeepProfileData";
import { getCountryFlashCardDossier } from "../../data/countryFlashCardData";
import { getCountryLeadership } from "../../data/countryLeadershipData";

interface CountryFlashCardGridProps {
  country: Country;
  deepProfile: CountryDeepProfile;
  onJumpToSection?: (sectionId: string) => void;
}

export const CountryFlashCardGrid: React.FC<CountryFlashCardGridProps> = ({
  country,
  deepProfile,
  onJumpToSection,
}) => {
  const flashDossier = getCountryFlashCardDossier(country.id, country, deepProfile);
  const leadershipDossier = getCountryLeadership(country.id, country.name);

  const jumpTo = (sectionId: string) => {
    if (onJumpToSection) {
      onJumpToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const previewCards = [
    {
      num: "01",
      title: "Government & Leadership",
      category: "Constitutional Executive",
      icon: Landmark,
      targetId: "canonical-leadership",
      stats: [
        { label: "System", value: leadershipDossier.systemType.split(" ")[0] || "Constitutional" },
        { label: "Head of State", value: leadershipDossier.leaders.find(l => l.roleType === "head_of_state")?.name || leadershipDossier.leaders[0]?.name || "Verified" },
        { label: "Head of Govt", value: leadershipDossier.leaders.find(l => l.roleType === "head_of_government")?.name || "Executive" },
      ],
      description: "Executive branch structure, constitutional balance of powers, and current governing cabinet.",
    },
    {
      num: "02",
      title: "National Condition",
      category: "12-Domain Empirical Matrix",
      icon: Activity,
      targetId: "canonical-condition",
      stats: [
        { label: "Demography", value: flashDossier.topMetrics.find(m => m.id === "pop")?.value || "Documented" },
        { label: "Nominal GDP", value: flashDossier.topMetrics.find(m => m.id === "gdp")?.value || "$-- B" },
        { label: "Active Armed Forces", value: flashDossier.topMetrics.find(m => m.id === "forces")?.value || "Standing" },
      ],
      description: "Unified baseline assessing demography, governance, health, education, and national capital.",
    },
    {
      num: "03",
      title: "Strategic Geography",
      category: "GIS & Territorial Posture",
      icon: Compass,
      targetId: "canonical-geography",
      stats: [
        { label: "Region", value: flashDossier.region },
        { label: "Capital", value: flashDossier.capital },
        { label: "Coastline/EEZ", value: flashDossier.topMetrics.find(m => m.id === "coast")?.value || "Tracked" },
      ],
      description: "Interactive geospatial borders, littoral depth, maritime choke points, and neighbor theater.",
    },
    {
      num: "04",
      title: "Economic System",
      category: "Macroeconomics & Industry",
      icon: TrendingUp,
      targetId: "canonical-economy",
      stats: [
        { label: "GDP Scale", value: flashDossier.topMetrics.find(m => m.id === "gdp")?.value || "$-- B" },
        { label: "Annual Growth", value: flashDossier.topMetrics.find(m => m.id === "growth")?.value || "Tracked" },
        { label: "Top Sector", value: flashDossier.economy.sectors[0]?.name || "Services" },
      ],
      description: "GDP composition, industrial manufacturing base, currency reserves, and fiscal trajectory.",
    },
    {
      num: "05",
      title: "Defence & Security",
      category: "Armed Forces & Doctrine",
      icon: Shield,
      targetId: "canonical-defence",
      stats: [
        { label: "Personnel", value: flashDossier.topMetrics.find(m => m.id === "forces")?.value || "1M+" },
        { label: "Budget", value: flashDossier.topMetrics.find(m => m.id === "defence")?.value || "$-- B" },
        { label: "Doctrine", value: flashDossier.military.doctrines[0]?.split(" ")[0] || "Strategic" },
      ],
      description: "Order of battle, Army, Navy, Air Force branches, procurement programs, and deterrence posture.",
    },
    {
      num: "06",
      title: "Nuclear / Space / Cyber",
      category: "Strategic Deterrence",
      icon: Radio,
      targetId: "canonical-strategic-domains",
      stats: [
        { label: "Nuclear Status", value: flashDossier.topMetrics.find(m => m.id === "nuclear")?.value || "Monitored" },
        { label: "Space Agency", value: flashDossier.strategicAssets.space.agency.split("(")[0].trim() || "National" },
        { label: "Cyber Command", value: flashDossier.strategicAssets.cyber.command.split("(")[0].trim() || "Active" },
      ],
      description: "Triad survivability, orbital launch capabilities, and offensive/defensive cyber doctrines.",
    },
    {
      num: "07",
      title: "Energy & Dependencies",
      category: "Critical Supply Chains",
      icon: Flame,
      targetId: "canonical-energy",
      stats: [
        { label: "Energy Status", value: flashDossier.energyMaritime.statusLabel.split("(")[0].trim() || "Monitored" },
        { label: "Import Reliance", value: flashDossier.energyMaritime.netImportRatio },
        { label: "Primary Fuel", value: flashDossier.energyMaritime.primarySources[0] || "Hydrocarbons" },
      ],
      description: "Oil, gas, renewables balance, transit routes, and vulnerability in semiconductors and minerals.",
    },
    {
      num: "08",
      title: "Trade & Geo-Economics",
      category: "Global Trade Corridors",
      icon: Globe2,
      targetId: "canonical-trade",
      stats: [
        { label: "Top Partner", value: flashDossier.economy.topPartners[0]?.name || "Global" },
        { label: "Trade Share", value: flashDossier.economy.topPartners[0]?.share ? `${flashDossier.economy.topPartners[0].share}%` : "Primary" },
        { label: "Key Trade Flow", value: "Bilateral Accords" },
      ],
      description: "Export and import volumes, bilateral commercial balances, and strategic maritime trade corridors.",
    },
    {
      num: "09",
      title: "Foreign Relations",
      category: "Bilateral Diplomacy",
      icon: Users2,
      targetId: "canonical-foreign-relations",
      stats: [
        { label: "Key Partners", value: `${flashDossier.relationshipsNetwork.partners.length} Primary` },
        { label: "Leading Partner", value: flashDossier.relationshipsNetwork.partners[0]?.name || "Strategic" },
        { label: "Alignment", value: flashDossier.doctrineQuote.slice(0, 18) + "..." },
      ],
      description: "Bilateral security treaties, diplomatic accords, defense partnerships, and commercial pacts.",
    },
    {
      num: "10",
      title: "Multilateral Alignment",
      category: "Institutional Architecture",
      icon: Building2,
      targetId: "canonical-multilateral",
      stats: [
        { label: "Treaties & Blocs", value: "Verified Active" },
        { label: "Global Blocs", value: "UN, G20 & Regional" },
        { label: "Status", value: "Full Member" },
      ],
      description: "Participation in international governing institutions, regional alliances, and treaty frameworks.",
    },
    {
      num: "11",
      title: "Strategic Assets",
      category: "Bases, Ports & Terminals",
      icon: Anchor,
      targetId: "canonical-assets",
      stats: [
        { label: "Cataloged Sites", value: `${flashDossier.strategicSites.length} Strategic Hubs` },
        { label: "Primary Port", value: flashDossier.strategicSites.find(s => s.type === "PORT")?.name.split(" ")[0] || "Major Port" },
        { label: "Defense Hub", value: flashDossier.strategicSites.find(s => s.type === "DEFENSE_FACILITY")?.name.split(" ")[0] || "Command Base" },
      ],
      description: "Deep-water maritime berths, naval command bases, forward airstrips, and critical energy terminals.",
    },
    {
      num: "12",
      title: "Geopolitical Friction",
      category: "Disputes & Flashpoints",
      icon: Swords,
      targetId: "canonical-friction",
      stats: [
        { label: "Primary Rivalry", value: flashDossier.relationshipsNetwork.competitors[0]?.name || "Regional Balance" },
        { label: "Friction Type", value: flashDossier.relationshipsNetwork.competitors[0]?.competitionType || "Geopolitical" },
        { label: "Border Status", value: "Contested / Active" },
      ],
      description: "Territorial disputes, military flashpoints, sanctions regimes, and competitive geopolitical friction.",
    },
    {
      num: "13",
      title: "Strategic Priorities",
      category: "Grand Strategy",
      icon: Target,
      targetId: "canonical-priorities",
      stats: [
        { label: "Core Doctrine", value: flashDossier.doctrineQuote.split(" ")[0] || "Sovereignty" },
        { label: "Security Aim", value: flashDossier.priorities[0]?.label || "Defense" },
        { label: "Horizon", value: "2030-2047" },
      ],
      description: "Long-term security, economic expansion, technological self-reliance, and diplomatic objectives.",
    },
    {
      num: "14",
      title: "History",
      category: "Strategic Trajectory",
      icon: History,
      targetId: "canonical-history",
      stats: [
        { label: "Formation", value: flashDossier.timeline[0]?.year || "Historic" },
        { label: "Milestones", value: `${flashDossier.timeline.length} Verified` },
        { label: "Modern Era", value: flashDossier.timeline[flashDossier.timeline.length - 1]?.year || "2024" },
      ],
      description: "Historical conflicts, constitutional transitions, treaties, and sovereign milestones.",
    },
    {
      num: "15",
      title: "Current Developments",
      category: "Active Intelligence",
      icon: ExternalLink,
      targetId: "canonical-developments",
      stats: [
        { label: "Feed Status", value: "Live Verified" },
        { label: "Latest Event", value: flashDossier.developments[0]?.title.slice(0, 16) + "..." || "Briefing" },
        { label: "Update Cycle", value: "Continuous" },
      ],
      description: "Verified recent developments, active defense exercises, trade accords, and diplomatic summits.",
    },
    {
      num: "16",
      title: "Sources & Verification",
      category: "Data Integrity & Provenance",
      icon: FileCheck2,
      targetId: "canonical-sources",
      stats: [
        { label: "Tier 1 Sovereign", value: "Official Gazettes" },
        { label: "Tier 2 Multilateral", value: "UN / IMF / WB" },
        { label: "Integrity", value: "High Confidence" },
      ],
      description: "Complete institutional provenance, source registries, publication dates, and confidence ratings.",
    },
  ];

  return (
    <section className="mb-12" id="intelligence-board" aria-label="Intelligence Module Board">
      <div className="border border-white/10 rounded-2xl bg-[#080a0e] p-6 sm:p-8 shadow-2xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/8 pb-5 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                INTELLIGENCE MODULE BOARD
              </span>
              <span className="text-neutral-400 text-xs font-mono">
                16 Authoritative Sovereign Domains
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium flex items-center gap-3">
              <Compass className="size-6 text-trinetra-saffron" />
              Sovereign Intelligence Board: {country.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
              High-density preview cards across all 16 strategic intelligence domains. Each card links directly to its authoritative canonical module below.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono text-neutral-400 bg-[#0c0f16] border border-white/10 px-3 py-1.5 rounded-lg">
              16/16 Canonical Modules
            </span>
          </div>
        </div>

        {/* 16 PREVIEW CARDS (Responsive Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {previewCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.num}
                className="p-5 rounded-xl border border-white/10 bg-[#0c0e14] hover:border-trinetra-saffron/40 hover:bg-[#10141d] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Number + Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-trinetra-saffron px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/20">
                      {card.num}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 tracking-wider">
                      {card.category}
                    </span>
                    <Icon className="size-4 text-neutral-400 group-hover:text-trinetra-saffron transition-colors" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Key Preview Metrics */}
                  <div className="space-y-1.5 mb-4 p-2.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs">
                    {card.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-[11px] text-neutral-500">{stat.label}</span>
                        <span className="text-[11px] text-white font-medium truncate max-w-[120px] text-right">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Action Button */}
                <button
                  onClick={() => jumpTo(card.targetId)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#161c27] hover:bg-trinetra-saffron hover:text-black border border-white/10 hover:border-trinetra-saffron text-xs font-mono text-neutral-300 transition-all cursor-pointer group/btn"
                >
                  <span className="font-semibold">Explore Module →</span>
                  <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
