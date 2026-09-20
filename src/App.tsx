import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LiveMap from "./pages/LiveMap";
import RivalryAnalysis from "./pages/RivalryAnalysis";
import CountryIntelligence from "./pages/CountryIntelligence";
import CountriesGrid from "./pages/CountriesGrid";
import Modules from "./pages/Modules";
import NetworkView from "./pages/NetworkView";
import Contact from "./pages/Contact";
import Groups from "./pages/Groups";
import EntryExperience from "./components/entry/EntryExperience";

export default function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      // Clear old legacy flag so video plays on entry
      localStorage.removeItem("trinetra_intro_completed");
    } catch {
      // Ignore
    }
    return true;
  });
  const [isReplay, setIsReplay] = useState(false);

  useEffect(() => {
    const handleReplay = () => {
      setIsReplay(true);
      setShowIntro(true);
    };
    window.addEventListener("trinetra:replay-intro", handleReplay);
    return () => window.removeEventListener("trinetra:replay-intro", handleReplay);
  }, []);

  return (
    <BrowserRouter>
      {showIntro && (
        <EntryExperience
          isReplay={isReplay}
          onComplete={() => {
            setShowIntro(false);
            setIsReplay(false);
          }}
        />
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/live-map" element={<LiveMap />} />
        <Route path="/map" element={<LiveMap />} />
        <Route path="/analyze" element={<RivalryAnalysis />} />
        <Route path="/compare" element={<RivalryAnalysis />} />
        <Route path="/rivalries" element={<RivalryAnalysis />} />
        <Route path="/countries" element={<CountriesGrid />} />
        <Route path="/country" element={<CountryIntelligence />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/methodology" element={<Navigate to="/" replace />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/network" element={<NetworkView />} />
        <Route path="/search" element={<Navigate to="/" replace />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

