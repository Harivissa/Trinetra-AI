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
  { id: "sec-map", label: "Strategic Map", shortLabel: "Map", icon: Map },
  { id: "sec-questions", label: "9-Question Matrix", shortLabel: "9 Questions", icon: HelpCircle },
  { id: "sec-system", label: "National System", shortLabel: "System", icon: Network },
  { id: "sec-leadership", label: "Government", shortLabel: "Government", icon: Landmark },
  { id: "sec-economy", label: "Economic Intel", shortLabel: "Economy", icon: TrendingUp },
  { id: "sec-trade", label: "Trade Network", shortLabel: "Trade", icon: TrendingUp },
  { id: "sec-energy", label: "Energy Flows", shortLabel: "Energy", icon: Flame },
  { id: "sec-military", label: "Military & Security", shortLabel: "Military", icon: Shield },
  { id: "sec-assets", label: "Strategic Assets", shortLabel: "Assets", icon: Building2 },
  { id: "sec-relationships", label: "Relationships", shortLabel: "Alliances", icon: Users2 },
  { id: "sec-multilateral", label: "Multilateral", shortLabel: "Multilateral", icon: Users2 },
  { id: "sec-dependencies", label: "Dependencies", shortLabel: "Dependencies", icon: Link2 },
  { id: "sec-constraints", label: "Leverage & Limits", shortLabel: "Leverage", icon: AlertTriangle },
  { id: "sec-geography", label: "Strategic Geography", shortLabel: "Geography", icon: Compass },
  { id: "sec-chokepoints", label: "Chokepoints", shortLabel: "Chokepoints", icon: Compass },
  { id: "sec-timeline", label: "Timeline & Events", shortLabel: "History", icon: History },
  { id: "sec-sources", label: "Sources & Evidence", shortLabel: "Sources", icon: FileCheck2 },
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
