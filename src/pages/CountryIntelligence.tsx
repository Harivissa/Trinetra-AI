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
            {/* 22-Section Intelligence Dossier Index Jump Bar */}
            <div className="mb-6 overflow-x-auto pb-2 scrollbar-none flex items-center gap-1.5 text-xs font-mono border-b border-neutral-800/80">
              <span className="text-neutral-400 shrink-0 px-2 py-1 text-[11px] uppercase tracking-wider font-semibold">
                Dossier Sections:
              </span>
              {[
                { id: "sec-status", label: "02 Status" },
                { id: "sec-leadership", label: "03 Leadership" },
                { id: "sec-indicators", label: "04 Indicators" },
                { id: "sec-questions", label: "05 9-Questions" },
                { id: "sec-position", label: "06 Position" },
                { id: "sec-capabilities", label: "07 Capabilities" },
                { id: "sec-economy", label: "08 Economy" },
                { id: "sec-military", label: "09 Military" },
                { id: "sec-domains", label: "10 Nuclear/Space/Cyber" },
                { id: "sec-dependencies", label: "11 Dependencies" },
                { id: "sec-trade", label: "12 Trade" },
                { id: "sec-diplomacy", label: "13 Foreign Relations" },
                { id: "sec-competition", label: "14 Competition" },
                { id: "sec-geography", label: "15 Geography" },
                { id: "sec-chokepoints", label: "16 Chokepoints" },
                { id: "sec-priorities", label: "17 Priorities" },
                { id: "sec-strengths", label: "18 Strengths" },
                { id: "sec-constraints", label: "19 Constraints" },
                { id: "sec-history", label: "20 History" },
                { id: "sec-synthesis", label: "21 Synthesis" },
                { id: "sec-sources", label: "22 Sources" },
              ].map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-trinetra-saffron hover:bg-neutral-850 transition-colors whitespace-nowrap text-[11px]"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Editorial Sovereign Dossier Hero Banner with Real Photo Asset */}
            {(() => {
              const photoInfo = SOVEREIGN_PHOTO_DOSSIERS[country.id] || {
                image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1600&q=80",
                capital: "Sovereign Seat",
                strategicFocus: "Geopolitical Autonomy & Territorial Integrity",
                flag: "🌐",
              };

              return (
                <div className="relative rounded-2xl border border-white/10 overflow-hidden mb-10 bg-[#06080c] shadow-2xl">
                  {/* Backdrop Photo Image with Cinematic Overlay */}
                  <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                    <img
                      src={photoInfo.image}
                      alt={country.name}
                      className="w-full h-full object-cover object-center filter brightness-60 contrast-110 transform hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-[#06080c]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#06080c] via-transparent to-[#06080c]/80" />

                    {/* Top Reconnaissance Header Overlay */}
                    <div className="absolute top-4 left-6 right-6 flex items-center justify-between font-mono text-[10px] text-neutral-400">
                      <div className="flex items-center gap-2">
                        <span className="size-2 rounded-full bg-trinetra-saffron animate-ping" />
                        <span className="text-trinetra-saffron font-bold tracking-widest uppercase">
                          SOVEREIGN INTELLIGENCE FILE // {country.id}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-black/70 border border-white/10 text-neutral-300">
                          SEAT: {photoInfo.capital.toUpperCase()}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold">
                          GEO-TRACK ACTIVE
                        </span>
                      </div>
                    </div>

                    {/* Bottom Hero Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl sm:text-4xl" role="img" aria-label="Flag">
                              {photoInfo.flag}
                            </span>
                            <span className="font-mono text-xs uppercase tracking-widest text-trinetra-saffron bg-trinetra-saffron/10 border border-trinetra-saffron/30 px-2.5 py-0.5 rounded">
                              {country.region}
                            </span>
                            {country.nuclear?.weapons_state && (
                              <span className="font-mono text-xs uppercase tracking-wider text-rose-400 bg-rose-950/60 border border-rose-500/40 px-2.5 py-0.5 rounded flex items-center gap-1.5">
                                <span className="size-1.5 rounded-full bg-rose-500 animate-pulse" />
                                Declared Nuclear Deterrent
                              </span>
                            )}
                          </div>
                          <h2 className="font-display text-4xl sm:text-6xl text-white font-light tracking-tight">
                            {country.name}
                          </h2>
                          <p className="text-xs sm:text-sm text-neutral-300 max-w-2xl font-light mt-1">
                            <strong className="text-neutral-200 font-mono text-xs uppercase tracking-wider text-amber-300">Primary Doctrine: </strong>
                            {photoInfo.strategicFocus}
                          </p>
                        </div>

                        {/* Direct Vector CTA */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={openCompare}
                            className="py-2.5 px-4 rounded-lg bg-trinetra-saffron text-black text-xs font-bold uppercase tracking-wider hover:bg-[#ffaa4d] transition-colors flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
                          >
                            <Swords className="size-3.5" />
                            Launch Bilateral Vector
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 02. CURRENT COUNTRY STATUS — Factual sovereign metrics, demographic scale, economic weight, defense & governance */}
            <div id="sec-status">
              <CountryOverviewVisual country={country} />
            </div>

            {(() => {
              const deepProfile = getCountryDeepProfile(country.id, country.name, country);
              const simpleQuestions = getCountrySimpleQuestions(country.id, country.name, country);

              return (
                <>
                  {/* 03. WHO RUNS THE COUNTRY? — Executive leadership, constitutional flow, legislature, judiciary */}
                  <div id="sec-leadership">
                    <LeadershipPanel
                      leadership={deepProfile.leadership}
                      countryName={country.name}
                    />
                  </div>

                  {/* 04. CURRENT NATIONAL PROFILE — 12-category indicator matrix */}
                  <div id="sec-indicators">
                    <NationalProfileVisual
                      profile={deepProfile.nationalProfile}
                      countryName={country.name}
                    />
                  </div>

                  {/* 05. THE 9 CORE QUESTIONS — TRINETRA simple-language intelligence layer (Three-Layer Information Architecture) */}
                  <div id="sec-questions">
                    <section className="mb-12" aria-label="Core Geopolitical Questions">
                      <div className="border border-neutral-800 rounded-2xl bg-[#080a0d] p-5 sm:p-7 shadow-2xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
                                05 // Simple Answers First
                              </span>
                              <span className="text-neutral-400 text-xs font-mono">
                                Three-Layer Information Architecture
                              </span>
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl text-white font-medium">
                              The 9 Core Questions: {country.name}
                            </h2>
                            <p className="text-xs sm:text-sm text-neutral-400 max-w-3xl mt-1 leading-relaxed">
                              {simpleQuestions.tagline}. Designed with TRINETRA&apos;s core principle: simple plain language first, geopolitical significance second, and verified deep facts underneath.
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              onClick={() => setAllQuestionsExpanded(!allQuestionsExpanded)}
                              className="text-xs font-mono px-3 py-1.5 rounded-lg border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors cursor-pointer"
                            >
                              {allQuestionsExpanded ? "Collapse Details" : "Expand Details"}
                            </button>
                          </div>
                        </div>

                        {/* The 9 Question Cards */}
                        <div className="grid grid-cols-1 gap-4">
                          {simpleQuestions.questions.map((q, idx) => (
                            <ThreeLayerCard
                              key={q.questionId}
                              answer={q}
                              index={idx}
                              initiallyExpanded={allQuestionsExpanded}
                            />
                          ))}
                        </div>
                      </div>
                    </section>
                  </div>

                  {/* 06. GEOPOLITICAL POSITION — Where does this country fit into the world? */}
                  <div id="sec-position">
                    <GeopoliticalPositionVisual
                      position={deepProfile.geopoliticalPosition}
                      countryName={country.name}
                    />
                  </div>

                  {/* 07. NATIONAL CAPABILITIES — Deep assessment across all 14 dimensions */}
                  <div id="sec-capabilities">
                    <StrategicCapabilitiesVisual country={country} />
                  </div>

                  {/* 08. ECONOMY & INDUSTRIAL POWER — GDP structure (services/industry/agriculture), critical industries */}
                  <div id="sec-economy">
                    <EconomicPowerVisual
                      economy={deepProfile.economyStructure}
                      countryName={country.name}
                    />
                  </div>

                  {/* 09. MILITARY & SECURITY — Order of battle, service branches, platforms, defense industry */}
                  <div id="sec-military">
                    <MilitarySecurityVisual
                      military={deepProfile.militarySecurity}
                      countryName={country.name}
                    />
                  </div>

                  {/* 10. NUCLEAR / SPACE / CYBER — Specialized strategic domains */}
                  <div id="sec-domains">
                    <StrategicDomainsVisual
                      nuclear={deepProfile.nuclear}
                      space={deepProfile.space}
                      cyber={deepProfile.cyber}
                      countryName={country.name}
                    />
                  </div>

                  {/* 11. ENERGY & CRITICAL DEPENDENCIES — What keeps this country running */}
                  <div id="sec-dependencies">
                    <DependencyFlowsVisual country={country} />
                  </div>

                  {/* 12. TRADE & GLOBAL ECONOMIC CONNECTIONS — Bilateral flows, top partners, commodities */}
                  <div id="sec-trade">
                    <TradeNetworkVisual
                      trade={deepProfile.tradeFlows}
                      countryName={country.name}
                    />
                  </div>

                  {/* 13. FOREIGN RELATIONS — Allies, partners, international standing */}
                  <div id="sec-diplomacy">
                    <RelationshipNetworkVisual country={country} />
                  </div>

                  {/* 14. STRATEGIC COMPETITION — Rivals, flashpoints, active friction domains */}
                  <div id="sec-competition">
                    <StrategicCompetitionVisual
                      competitions={deepProfile.competitions}
                      countryName={country.name}
                    />
                  </div>

                  {/* 15. GEOGRAPHY & TERRITORIAL STRATEGY — Interactive GIS map, terrain, and buffer zones */}
                  <div id="sec-geography">
                    <CountryGeospatialMap country={country} />
                    <GeographicStrategyVisual country={country} />
                  </div>

                  {/* 16. MARITIME GEOPOLITICS & CHOKEPOINTS — Oceans, seas, straits, naval access */}
                  <div id="sec-chokepoints">
                    <ChokepointsIdentificationVisual country={country} />
                  </div>

                  {/* 17. STRATEGIC PRIORITIES — Grand strategic objectives by domain */}
                  <div id="sec-priorities">
                    <StrategicPrioritiesVisual
                      priorities={deepProfile.priorities}
                      countryName={country.name}
                    />
                  </div>

                  {/* 18. STRENGTHS — What makes this country powerful or resilient */}
                  <div id="sec-strengths">
                    <StrategicStrengthsVisual country={country} />
                  </div>

                  {/* 19. CONSTRAINTS & VULNERABILITIES — Objective structural bottlenecks & limits */}
                  <div id="sec-constraints">
                    <ConstraintsVulnerabilitiesVisual
                      constraints={deepProfile.constraints}
                      countryName={country.name}
                    />
                  </div>

                  {/* 20. HISTORICAL TIMELINE — Key historical events shaping current strategic posture */}
                  <div id="sec-history">
                    <EnhancedTimelineVisual
                      events={history?.events || []}
                      countryName={country.name}
                    />
                  </div>

                  {/* 21. STRATEGIC SYNTHESIS — The one-screen intelligence executive summary */}
                  <div id="sec-synthesis">
                    <StrategicSynthesisVisual
                      synthesis={deepProfile.synthesis}
                      countryName={country.name}
                    />
                  </div>

                  {/* 22. SOURCES / EVIDENCE / DATA QUALITY — The trust layer proving every claim */}
                  <div id="sec-sources">
                    <SourcesEvidencePanel
                      sources={deepProfile.sourcesRegistry}
                      countryName={country.name}
                      lastUpdated={deepProfile.lastUpdated}
                    />
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
