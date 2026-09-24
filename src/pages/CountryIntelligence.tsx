import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Users, DollarSign, TrendingUp, Radiation, Swords, Shield, MapPin, Eye, Radio, ExternalLink, Activity } from "lucide-react";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import ProfileSection from "../components/country/ProfileSection";
import CountrySelect from "../components/country/CountrySelect";
import Timeline from "../components/country/Timeline";
import LoadingEngine from "../components/analysis/LoadingEngine";
import AnalysisResults from "../components/analysis/AnalysisResults";
import { api } from "../services/api";
import { playLoadingAudio } from "../lib/audio";
import type { CountryIndexEntry, Country, RivalryAnalysis as RivalryAnalysisType } from "../types";
import { SOVEREIGN_PHOTO_DOSSIERS } from "../data/geopoliticalMedia";
import ThreeLayerCard from "../components/country/ThreeLayerCard";
import { getCountrySimpleQuestions } from "../data/countrySimpleQuestions";
import CountryOverviewVisual from "../components/country/CountryOverviewVisual";
import CountryGeospatialMap from "../components/country/CountryGeospatialMap";
import StrategicCapabilitiesVisual from "../components/country/StrategicCapabilitiesVisual";
import StrategicStrengthsVisual from "../components/country/StrategicStrengthsVisual";
import DependencyFlowsVisual from "../components/country/DependencyFlowsVisual";
import RelationshipNetworkVisual from "../components/country/RelationshipNetworkVisual";
import GeographicStrategyVisual from "../components/country/GeographicStrategyVisual";
import ChokepointsIdentificationVisual from "../components/country/ChokepointsIdentificationVisual";
import EnhancedTimelineVisual from "../components/country/EnhancedTimelineVisual";
import { getCountryDeepProfile } from "../data/countryDeepProfileData";
import { LeadershipPanel } from "../components/country/LeadershipPanel";
import { NationalProfileVisual } from "../components/country/NationalProfileVisual";
import { GeopoliticalPositionVisual } from "../components/country/GeopoliticalPositionVisual";
import { EconomicPowerVisual } from "../components/country/EconomicPowerVisual";
import { MilitarySecurityVisual } from "../components/country/MilitarySecurityVisual";
import { StrategicDomainsVisual } from "../components/country/StrategicDomainsVisual";
import { TradeNetworkVisual } from "../components/country/TradeNetworkVisual";
import { StrategicCompetitionVisual } from "../components/country/StrategicCompetitionVisual";
import { StrategicPrioritiesVisual } from "../components/country/StrategicPrioritiesVisual";
import { ConstraintsVulnerabilitiesVisual } from "../components/country/ConstraintsVulnerabilitiesVisual";
import { StrategicSynthesisVisual } from "../components/country/StrategicSynthesisVisual";
import { SourcesEvidencePanel } from "../components/country/SourcesEvidencePanel";
import { CountryCommandHeader } from "../components/country/CountryCommandHeader";
import { TopMetricFlashCards } from "../components/country/TopMetricFlashCards";
import { CountryFlashCardGrid } from "../components/country/CountryFlashCardGrid";
import { getCountryFlashCardDossier } from "../data/countryFlashCardData";
import { NineQuestionMatrix } from "../components/country/NineQuestionMatrix";
import { NationalSystemGraph } from "../components/country/NationalSystemGraph";
import { GovernmentStructureVisual } from "../components/country/GovernmentStructureVisual";
import { EnergyDependencyFlowVisual } from "../components/country/EnergyDependencyFlowVisual";
import { MultilateralNetworkVisual } from "../components/country/MultilateralNetworkVisual";
import { StrategicAssetMapHybrid } from "../components/country/StrategicAssetMapHybrid";
import { CountryStickyNav } from "../components/country/CountryStickyNav";

function List({ items }: { items?: string[] }) {
  if (!items || items.length === 0) {
    return <div className="text-sm text-neutral-500">No data yet for this section.</div>;
  }
  return (
    <ul className="space-y-2">
      {items.map((s) => (
        <li key={s} className="text-sm text-neutral-200 leading-relaxed flex gap-2">
          <span className="text-trinetra-saffron">•</span>
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}


export default function CountryIntelligence() {
  const [countries, setCountries] = useState<CountryIndexEntry[]>([]);
  const [searchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get("id") || "IND");
  const [country, setCountry] = useState<Country | null>(null);
  const [availableModules, setAvailableModules] = useState<string[]>([]);
  const [history, setHistory] = useState<any | null>(null);
  const [politics, setPolitics] = useState<any | null>(null);
  const [foreignPolicy, setForeignPolicy] = useState<any | null>(null);
  const audioRef = useState(() => new Audio())[0];
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);
  // Inline full-width comparison — no sidebar box. Opening it reveals a
  // full-page-width section below the profile and scrolls there.
  const [compareOpen, setCompareOpen] = useState(false);
  const [compareB, setCompareB] = useState("");
  const [compareAnalysis, setCompareAnalysis] = useState<RivalryAnalysisType | null>(null);
  const [compareLoading, setCompareLoading] = useState(false);
  const [compareError, setCompareError] = useState<string | null>(null);
  const [pendingResult, setPendingResult] = useState<RivalryAnalysisType | null>(null);
  const [pendingError, setPendingError] = useState<string | null>(null);
  const [engineDone, setEngineDone] = useState(false);
  const [fetchDone, setFetchDone] = useState(false);
  const [allQuestionsExpanded, setAllQuestionsExpanded] = useState(false);
  const compareSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    api.getCountries().then(setCountries);
  }, []);

  useEffect(() => {
    if (!selected) return;
    api.getCountry(selected).then(setCountry).catch(() => setCountry(null));
    setHistory(null);
    setPolitics(null);
    setForeignPolicy(null);
    setCompareOpen(false);
    setCompareAnalysis(null);
    api.getCountryModules(selected).then(({ available_modules }) => {
      setAvailableModules(available_modules);
      if (available_modules.includes("history")) api.getCountryModule(selected, "history").then(setHistory);
      if (available_modules.includes("politics")) api.getCountryModule(selected, "politics").then(setPolitics);
      if (available_modules.includes("foreign_policy")) api.getCountryModule(selected, "foreign_policy").then(setForeignPolicy);
    });
  }, [selected]);

  useEffect(() => {
    if (!selected) return;
    audioRef.pause();
    audioRef.currentTime = 0;
    audioRef.src = `/audio/${selected}.mp3`;
    audioRef.loop = true;
    setAudioPlaying(false);
    setAudioAvailable(true);
    audioRef.play().then(() => setAudioPlaying(true)).catch(() => setAudioPlaying(false));
    return () => audioRef.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    return () => audioRef.pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function toggleAudio() {
    if (audioPlaying) {
      audioRef.pause();
      setAudioPlaying(false);
    } else {
      audioRef.play().then(() => setAudioPlaying(true)).catch(() => setAudioAvailable(false));
    }
  }

  function openCompare() {
    setCompareOpen(true);
    setTimeout(() => {
      compareSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  async function runCompare() {
    if (!selected || !compareB || selected === compareB) {
      setCompareError("Pick a different nation to compare against");
      return;
    }
    playLoadingAudio();
    setCompareError(null);
    setCompareAnalysis(null);
    setEngineDone(false);
    setFetchDone(false);
    setCompareLoading(true);
    try {
      const result = await api.runRivalry(selected, compareB);
      setPendingResult(result);
    } catch (e) {
      setPendingError("Analysis failed — confirm the TRINETRA backend service is reachable");
    } finally {
      setFetchDone(true);
    }
  }

  useEffect(() => {
    if (engineDone && fetchDone) {
      setCompareLoading(false);
      if (pendingResult) setCompareAnalysis(pendingResult);
      if (pendingError) setCompareError(pendingError);
      setPendingResult(null);
      setPendingError(null);
      setTimeout(() => {
        compareSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [engineDone, fetchDone]);

  return (
    <div className="min-h-screen bg-trinetra-bg text-neutral-200">
      <Header />
      <main className="max-w-[1800px] mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-4xl text-trinetra-saffron">Country Intelligence</h1>
        </div>

        <div className="flex gap-4 mb-10 max-w-3xl">
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="flex-1 bg-trinetra-panel border border-trinetra-border rounded px-4 py-3 text-neutral-200"
          >
            {countries.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <button
            onClick={toggleAudio}
            title={audioAvailable ? (audioPlaying ? "Pause ambient briefing audio" : "Play ambient briefing audio") : "No audio file found for this nation"}
            className="border border-trinetra-border text-neutral-400 px-4 py-3 rounded hover:border-trinetra-saffron hover:text-trinetra-saffron transition-colors whitespace-nowrap"
          >
            {audioPlaying ? "🔊 Playing" : "🔈 Ambient Audio"}
          </button>
          <button
            onClick={openCompare}
            className="border border-trinetra-border text-trinetra-saffron px-5 py-3 rounded hover:border-trinetra-saffron transition-colors whitespace-nowrap"
          >
            Compare with another nation
          </button>
        </div>

        {country && (
          <div>
            {(() => {
              const deepProfile = getCountryDeepProfile(country.id, country.name, country);
              const flashDossier = getCountryFlashCardDossier(country.id, country, deepProfile);

              return (
                <>
                  {/* 01. SOVEREIGN COMMAND HEADER (3-Box Architecture matching visual reference) */}
                  <div id="sec-header">
                    <CountryCommandHeader
                      country={country}
                      deepProfile={deepProfile}
                      onCompare={openCompare}
                      onOpenFullMap={() => {
                        document.getElementById("interactive-geospatial-map")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    />
                  </div>

                  {/* 02. TOP METRICS FLASH CARDS (8 Compact Sovereign Indicators) */}
                  <TopMetricFlashCards metrics={flashDossier.topMetrics} />

                  {/* 03. UNIVERSAL FLASH-CARD INTELLIGENCE GRID (Modular Cards 01 to 16 with Interactive Modal) */}
                  <div className="mb-12">
                    <CountryFlashCardGrid
                      country={country}
                      deepProfile={deepProfile}
                      onJumpToSection={(sectionId) => {
                        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
                      }}
                    />
                  </div>

                  {/* STICKY WORKSTATION COMMAND NAVIGATOR */}
                  <CountryStickyNav />

                  {/* 04. STRATEGIC GEOGRAPHY & THEATER GIS MAP */}
                  <div id="interactive-geospatial-map" className="mb-10">
                    <div id="sec-map">
                      <CountryGeospatialMap country={country} />
                    </div>
                  </div>

                  {/* 05. CURRENT COUNTRY STATUS — Factual sovereign metrics overview */}
                  <div id="sec-status">
                    <CountryOverviewVisual country={country} />
                  </div>

                  {/* 06. THE 9 CORE QUESTIONS MATRIX (Interactive 3x3 Grid & 3-Layer Dossier) */}
                  <div id="nine-questions">
                    <div id="sec-questions">
                      <NineQuestionMatrix country={country} />
                    </div>
                  </div>

                  {/* 07. NATIONAL SYSTEM GRAPH — Country -> Gov/Economy/Security -> Foreign Policy -> Global */}
                  <div id="sec-system">
                    <NationalSystemGraph
                      country={country}
                      deepProfile={deepProfile}
                    />
                  </div>

                  {/* 08. GOVERNMENT STRUCTURE & EXECUTIVE LEADERSHIP */}
                  <div id="leadership-section">
                    <div id="sec-leadership">
                      <GovernmentStructureVisual
                        leadership={deepProfile.leadership}
                        countryId={country.id}
                        countryName={country.name}
                      />
                      <div className="mt-8">
                        <LeadershipPanel
                          leadership={deepProfile.leadership}
                          countryName={country.name}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 09. CURRENT NATIONAL PROFILE — 12-category indicator matrix */}
                  <div id="national-profile">
                    <div id="sec-indicators">
                      <NationalProfileVisual
                        profile={deepProfile.nationalProfile}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 10. GEOPOLITICAL POSITION — Where does this country fit into the world? */}
                  <div id="sec-position">
                    <GeopoliticalPositionVisual
                      position={deepProfile.geopoliticalPosition}
                      countryName={country.name}
                    />
                  </div>

                  {/* 11. NATIONAL CAPABILITIES — Deep assessment across 14 dimensions */}
                  <div id="sec-capabilities">
                    <StrategicCapabilitiesVisual country={country} />
                  </div>

                  {/* 12. ECONOMY & INDUSTRIAL POWER — GDP structure, critical industries */}
                  <div id="economic-engine">
                    <div id="sec-economy">
                      <EconomicPowerVisual
                        economy={deepProfile.economyStructure}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 13. TRADE & GLOBAL ECONOMIC CONNECTIONS — Bilateral flows, top partners, commodities */}
                  <div id="sec-trade">
                    <TradeNetworkVisual
                      trade={deepProfile.tradeFlows}
                      countryName={country.name}
                    />
                  </div>

                  {/* 14. ENERGY FLOWS & RESILIENCE — Sankey flow visual for oil, gas, coal, nuclear, renewables */}
                  <div id="energy-section">
                    <div id="sec-energy-flow">
                      <EnergyDependencyFlowVisual
                        countryId={country.id}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 15. MILITARY & SECURITY — Order of battle, branches, platforms, defense industry */}
                  <div id="military-shield">
                    <div id="sec-military">
                      <MilitarySecurityVisual
                        military={deepProfile.militarySecurity}
                        countryName={country.name}
                      />
                      <div id="strategic-domains" className="mt-8">
                        <StrategicDomainsVisual
                          nuclear={deepProfile.nuclear}
                          space={deepProfile.space}
                          cyber={deepProfile.cyber}
                          countryName={country.name}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 16. STRATEGIC ASSET RECONNAISSANCE MAP (Ports, Bases, Corridors) */}
                  <div id="sec-assets">
                    <StrategicAssetMapHybrid
                      countryId={country.id}
                      countryName={country.name}
                    />
                  </div>

                  {/* 17. FOREIGN RELATIONS & ALIGNMENT NETWORK */}
                  <div id="sec-diplomacy">
                    <RelationshipNetworkVisual country={country} />
                  </div>

                  {/* 18. MULTILATERAL INSTITUTIONAL NETWORK */}
                  <div id="sec-multilateral">
                    <MultilateralNetworkVisual
                      country={country}
                      deepProfile={deepProfile}
                    />
                  </div>

                  {/* 19. STRATEGIC DEPENDENCIES — What keeps this country running */}
                  <div id="sec-dependencies">
                    <DependencyFlowsVisual country={country} />
                  </div>

                  {/* 20. STRATEGIC COMPETITION — Rivals, flashpoints, active friction domains */}
                  <div id="sec-competition">
                    <StrategicCompetitionVisual
                      competitions={deepProfile.competitions}
                      countryName={country.name}
                    />
                  </div>

                  {/* 21. GEOGRAPHY & TERRITORIAL STRATEGY */}
                  <div id="sec-geography">
                    <GeographicStrategyVisual country={country} />
                  </div>

                  {/* 22. MARITIME GEOPOLITICS & CHOKEPOINTS */}
                  <div id="sec-chokepoints">
                    <ChokepointsIdentificationVisual country={country} />
                  </div>

                  {/* 23. STRATEGIC PRIORITIES — Grand strategic objectives by domain */}
                  <div id="priorities-section">
                    <div id="sec-priorities">
                      <StrategicPrioritiesVisual
                        priorities={deepProfile.priorities}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 24. STRENGTHS — What makes this country powerful or resilient */}
                  <div id="sec-strengths">
                    <StrategicStrengthsVisual country={country} />
                  </div>

                  {/* 25. CONSTRAINTS & VULNERABILITIES — Objective structural bottlenecks */}
                  <div id="strategic-matrix">
                    <div id="sec-constraints">
                      <ConstraintsVulnerabilitiesVisual
                        constraints={deepProfile.constraints}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 26. HISTORICAL TIMELINE */}
                  <div id="timeline-section">
                    <div id="sec-history">
                      <EnhancedTimelineVisual
                        events={history?.events || []}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 27. STRATEGIC SYNTHESIS — Executive summary */}
                  <div id="developments-section">
                    <div id="sec-synthesis">
                      <StrategicSynthesisVisual
                        synthesis={deepProfile.synthesis}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 28. SOURCES & EVIDENCE TRUST LAYER */}
                  <div id="sources-section">
                    <div id="sec-sources">
                      <SourcesEvidencePanel
                        sources={deepProfile.sourcesRegistry}
                        countryName={country.name}
                        lastUpdated={deepProfile.lastUpdated}
                      />
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </main>

      {/* FULL-WIDTH INLINE COMPARISON — breaks out of the narrow profile
          column deliberately; this is the "intelligence wing", not a sidebar. */}
      {compareOpen && (
        <div ref={compareSectionRef} className="border-t-2 border-trinetra-saffron/40 bg-black/20">
          <div className="max-w-[1800px] mx-auto px-8 py-16">
            <div className="flex items-center gap-3 mb-2">
              <Swords size={22} className="text-trinetra-saffron" />
              <h2 className="font-display text-4xl text-trinetra-saffron">Comparison Wing</h2>
            </div>
            <p className="text-neutral-400 mb-8">
              Full strategic comparison of {country?.name || selected} against any other nation —
              military, economy, energy, external actors, chokepoints, and scenarios.
            </p>

            <div className="flex gap-6 mb-6 max-w-2xl">
              <div className="flex-1">
                <label className="block text-xs uppercase tracking-wide text-neutral-500 mb-2">Nation A</label>
                <div className="w-full bg-trinetra-panel border border-trinetra-border rounded px-4 py-3 text-neutral-200">
                  {country?.name || selected} <span className="text-neutral-600">(current)</span>
                </div>
              </div>
              <CountrySelect label="Nation B" countries={countries.filter((c) => c.id !== selected)} value={compareB} onChange={setCompareB} />
            </div>

            <button
              onClick={runCompare}
              disabled={compareLoading || !compareB || selected === compareB}
              className="bg-trinetra-saffron text-black font-semibold px-6 py-3 rounded hover:bg-trinetra-saffronDim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {compareLoading ? "Comparing..." : "Run Full Comparison"}
            </button>

            {compareError && <p className="text-red-400 mt-4 text-sm">{compareError}</p>}

            {compareLoading && (
              <LoadingEngine countryA={selected} countryB={compareB} onComplete={() => setEngineDone(true)} />
            )}

            {compareAnalysis && (
              <div className="mt-14">
                <AnalysisResults analysis={compareAnalysis} />
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
