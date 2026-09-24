import React, { useState, useEffect } from "react";
import {
  Compass,
  Map,
  HelpCircle,
  Network,
  Landmark,
  TrendingUp,
  Flame,
  Shield,
  Building2,
  Users2,
  Link2,
  AlertTriangle,
  History,
  FileCheck2,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  shortLabel: string;
  icon: any;
}

const NAV_ITEMS: NavItem[] = [
  { id: "sec-questions", label: "9 Core Questions", shortLabel: "9 Questions", icon: HelpCircle },
  { id: "sec-module-board", label: "Module Board", shortLabel: "Board", icon: Network },
  { id: "sec-leadership", label: "01 Government & Leadership", shortLabel: "Gov & Leaders", icon: Landmark },
  { id: "sec-status", label: "02 National Condition", shortLabel: "National Status", icon: Compass },
  { id: "sec-map", label: "03 Strategic Geography", shortLabel: "Geography & Map", icon: Map },
  { id: "sec-economy", label: "04 Economic System", shortLabel: "Economy", icon: TrendingUp },
  { id: "sec-military", label: "05 Defence & Security", shortLabel: "Defence", icon: Shield },
  { id: "sec-domains", label: "06 Nuclear / Space / Cyber", shortLabel: "Tech & Cyber", icon: Flame },
  { id: "sec-energy-flow", label: "07 Energy & Dependencies", shortLabel: "Energy & Flows", icon: Link2 },
  { id: "sec-trade", label: "08 Trade & Geo-Economics", shortLabel: "Trade", icon: TrendingUp },
  { id: "sec-diplomacy", label: "09 Foreign Relations", shortLabel: "Diplomacy", icon: Users2 },
  { id: "sec-multilateral", label: "10 Multilateral Alignment", shortLabel: "Alliances", icon: Building2 },
  { id: "sec-assets", label: "11 Strategic Assets", shortLabel: "Assets", icon: Building2 },
  { id: "sec-competition", label: "12 Geopolitical Friction", shortLabel: "Friction", icon: AlertTriangle },
  { id: "sec-priorities", label: "13 Strategic Priorities", shortLabel: "Priorities", icon: Compass },
  { id: "sec-history", label: "14 History", shortLabel: "History", icon: History },
  { id: "sec-synthesis", label: "15 Current Developments", shortLabel: "Developments", icon: TrendingUp },
  { id: "sec-sources", label: "16 Evidence & Verification", shortLabel: "Evidence", icon: FileCheck2 },
];

export const CountryStickyNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("sec-map");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);

      // Find visible section
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="sticky top-16 z-30 mb-8 w-full bg-[#06080c]/90 backdrop-blur-md border-y border-white/10 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[10px] font-mono uppercase text-trinetra-saffron font-bold tracking-wider px-2 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 hidden sm:inline-block">
            NAVIGATOR
          </span>
        </div>

        {/* Scrollable list of intelligence modules */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? "bg-trinetra-saffron text-black font-bold shadow-md shadow-orange-500/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-850"
                }`}
              >
                <Icon className="size-3 shrink-0" />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Scroll To Top Quick Button */}
        {isScrolled && (
          <button
            onClick={scrollToTop}
            title="Scroll to Top"
            className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:border-neutral-500 shrink-0 cursor-pointer"
          >
            <ArrowUp className="size-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
