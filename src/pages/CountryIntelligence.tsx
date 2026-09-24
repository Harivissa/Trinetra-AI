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
                  {/* COUNTRY HEADER */}
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

                  {/* KEY METRICS */}
                  <div id="sec-metrics">
                    <TopMetricFlashCards metrics={flashDossier.topMetrics} />
                  </div>

                  {/* 9 CORE QUESTIONS (Interactive 3x3 Grid & 3-Layer Dossier) */}
                  <div id="nine-questions" className="mb-10">
                    <div id="sec-questions">
                      <NineQuestionMatrix country={country} />
                    </div>
                  </div>

                  {/* INTELLIGENCE MODULE BOARD (Modular Cards 01 to 16 with Interactive Modal) */}
                  <div id="sec-module-board" className="mb-12">
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

                  {/* 01. GOVERNMENT & LEADERSHIP */}
                  <div id="leadership-section" className="mb-12">
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

                  {/* 02. NATIONAL CONDITION */}
                  <div id="national-profile" className="mb-12">
                    <div id="sec-status">
                      <CountryOverviewVisual country={country} />
                    </div>
                    <div id="sec-indicators" className="mt-8">
                      <NationalProfileVisual
                        profile={deepProfile.nationalProfile}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 03. STRATEGIC GEOGRAPHY */}
                  <div id="interactive-geospatial-map" className="mb-12">
                    <div id="sec-map">
                      <CountryGeospatialMap country={country} />
                    </div>
                    <div id="sec-geography" className="mt-8">
                      <GeographicStrategyVisual country={country} />
                    </div>
                  </div>

                  {/* 04. ECONOMIC SYSTEM */}
                  <div id="economic-engine" className="mb-12">
                    <div id="sec-economy">
                      <EconomicPowerVisual
                        economy={deepProfile.economyStructure}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 05. DEFENCE & SECURITY */}
                  <div id="military-shield" className="mb-12">
                    <div id="sec-military">
                      <MilitarySecurityVisual
                        military={deepProfile.militarySecurity}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 06. NUCLEAR / SPACE / CYBER */}
                  <div id="strategic-domains" className="mb-12">
                    <div id="sec-domains">
                      <StrategicDomainsVisual
                        nuclear={deepProfile.nuclear}
                        space={deepProfile.space}
                        cyber={deepProfile.cyber}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 07. ENERGY & DEPENDENCIES */}
                  <div id="energy-section" className="mb-12">
                    <div id="sec-energy-flow">
                      <EnergyDependencyFlowVisual
                        countryId={country.id}
                        countryName={country.name}
                      />
                    </div>
                    <div id="sec-dependencies" className="mt-8">
                      <DependencyFlowsVisual country={country} />
                    </div>
                    <div id="sec-chokepoints" className="mt-8">
                      <ChokepointsIdentificationVisual country={country} />
                    </div>
                  </div>

                  {/* 08. TRADE & GEO-ECONOMICS */}
                  <div id="trade-section" className="mb-12">
                    <div id="sec-trade">
                      <TradeNetworkVisual
                        trade={deepProfile.tradeFlows}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 09. FOREIGN RELATIONS */}
                  <div id="foreign-relations-section" className="mb-12">
                    <div id="sec-diplomacy">
                      <RelationshipNetworkVisual country={country} />
                    </div>
                    <div id="sec-position" className="mt-8">
                      <GeopoliticalPositionVisual
                        position={deepProfile.geopoliticalPosition}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 10. MULTILATERAL ALIGNMENT */}
                  <div id="multilateral-section" className="mb-12">
                    <div id="sec-multilateral">
                      <MultilateralNetworkVisual
                        country={country}
                        deepProfile={deepProfile}
                      />
                    </div>
                  </div>

                  {/* 11. STRATEGIC ASSETS */}
                  <div id="assets-section" className="mb-12">
                    <div id="sec-assets">
                      <StrategicAssetMapHybrid
                        countryId={country.id}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 12. GEOPOLITICAL FRICTION */}
                  <div id="competition-section" className="mb-12">
                    <div id="sec-competition">
                      <StrategicCompetitionVisual
                        competitions={deepProfile.competitions}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 13. STRATEGIC PRIORITIES */}
                  <div id="priorities-section" className="mb-12">
                    <div id="sec-priorities">
                      <StrategicPrioritiesVisual
                        priorities={deepProfile.priorities}
                        countryName={country.name}
                      />
                    </div>
                    <div id="sec-strengths" className="mt-8">
                      <StrategicStrengthsVisual country={country} />
                    </div>
                    <div id="strategic-matrix" className="mt-8">
                      <div id="sec-constraints">
                        <ConstraintsVulnerabilitiesVisual
                          constraints={deepProfile.constraints}
                          countryName={country.name}
                        />
                      </div>
                    </div>
                  </div>

                  {/* 14. HISTORY */}
                  <div id="timeline-section" className="mb-12">
                    <div id="sec-history">
                      <EnhancedTimelineVisual
                        events={history?.events || []}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 15. CURRENT DEVELOPMENTS */}
                  <div id="developments-section" className="mb-12">
                    <div id="sec-synthesis">
                      <StrategicSynthesisVisual
                        synthesis={deepProfile.synthesis}
                        countryName={country.name}
                      />
                    </div>
                  </div>

                  {/* 16. CONTEXTUAL EVIDENCE */}
                  <div id="sources-section" className="mb-12">
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
