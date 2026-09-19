import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Volume2, VolumeX, Eye, Shield, Globe, Radio } from "lucide-react";

interface EntryExperienceProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export default function EntryExperience({ onComplete, isReplay = false }: EntryExperienceProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasSoundTrack, setHasSoundTrack] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Check if first visit or forced replay
  useEffect(() => {
    if (!isReplay) {
      try {
        const forceIntro =
          typeof window !== "undefined" &&
          (window.location.search.includes("intro") || window.location.search.includes("replay"));
        if (forceIntro) return;

        const seen = localStorage.getItem("trinetra_intro_completed");
        if (seen === "true") {
          onComplete();
          return;
        }
      } catch {
        // Ignore localStorage error
      }
    }
  }, [isReplay, onComplete]);

  // Attempt video playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {
          setVideoFailed(true);
        });
      });
    }
  }, []);

  // Tactical Canvas Simulation (runs smoothly when video is loading or missing)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    let simProgress = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Geopolitical node coordinates (relative to center)
    const nodes = [
      { label: "DELHI", x: 120, y: 20, pulse: 0 },
      { label: "BEIJING", x: 210, y: -40, pulse: 0.5 },
      { label: "WASHINGTON", x: -220, y: -30, pulse: 0.8 },
      { label: "MOSCOW", x: 80, y: -120, pulse: 0.3 },
      { label: "MALACCA", x: 160, y: 80, pulse: 0.2 },
      { label: "HORMUZ", x: 60, y: 30, pulse: 0.6 },
      { label: "SUEZ", x: 20, y: 10, pulse: 0.9 },
    ];

    const render = () => {
      angle += 0.006;
      ctx.fillStyle = "#050608";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.42;

      // Draw subtle grid
      ctx.strokeStyle = "rgba(255, 122, 0, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw globe boundary & orbital latitude rings
      ctx.strokeStyle = "rgba(255, 122, 0, 0.15)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Concentric range rings
      [0.25, 0.5, 0.75].forEach((scale) => {
        ctx.strokeStyle = "rgba(255, 122, 0, 0.08)";
        ctx.setLineDash([4, 6]);
        ctx.beginPath();
        ctx.arc(cx, cy, radius * scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Revolving radar sweep line
      const sweepX = cx + Math.cos(angle) * radius;
      const sweepY = cy + Math.sin(angle) * radius;
      const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, radius);
      grad.addColorStop(0, "rgba(255, 122, 0, 0.25)");
      grad.addColorStop(1, "rgba(255, 122, 0, 0)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.35, angle);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();

      ctx.strokeStyle = "rgba(255, 122, 0, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sweepX, sweepY);
      ctx.stroke();

      // Draw tactical crosshair at center
      ctx.strokeStyle = "rgba(255, 122, 0, 0.4)";
      ctx.beginPath();
      ctx.moveTo(cx - 20, cy);
      ctx.lineTo(cx + 20, cy);
      ctx.moveTo(cx, cy - 20);
      ctx.lineTo(cx, cy + 20);
      ctx.stroke();

      // Draw beacon nodes
      nodes.forEach((n, idx) => {
        // Orbit rotation around center
        const cosA = Math.cos(angle * 0.4 + idx);
        const sinA = Math.sin(angle * 0.4 + idx);
        const nx = cx + n.x * cosA - n.y * sinA * 0.6;
        const ny = cy + n.x * sinA * 0.6 + n.y * cosA;

        ctx.fillStyle = "#FF7A00";
        ctx.beginPath();
        ctx.arc(nx, ny, 3, 0, Math.PI * 2);
        ctx.fill();

        // Pulsing ring
        const pSize = 4 + ((angle * 20 + idx * 10) % 18);
        const pAlpha = Math.max(0, 1 - pSize / 22);
        ctx.strokeStyle = `rgba(255, 122, 0, ${pAlpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(nx, ny, pSize, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
        ctx.font = "9px monospace";
        ctx.fillText(n.label, nx + 7, ny + 3);
      });

      // Simulation progress updater if video is not supplying time
      if (!videoLoaded) {
        simProgress = Math.min(100, simProgress + 0.18);
        setProgress(simProgress);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [videoLoaded]);

  const handleEnter = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);
    try {
      localStorage.setItem("trinetra_intro_completed", "true");
    } catch {
      // Ignore storage error
    }
    window.setTimeout(() => {
      onComplete();
    }, 500);
  }, [isEntering, onComplete]);

  // Keyboard shortcut listener: Enter or Space to enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleEnter]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
    if (!nextMuted) setHasSoundTrack(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#050608] text-neutral-100 overflow-hidden select-none transition-opacity duration-500 ease-out ${
        isEntering ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="region"
      aria-label="Trinetra Cinematic Intelligence Entry"
    >
      {/* 1. Tactical Radar Simulation Canvas (Always active in background) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 size-full pointer-events-none"
      />

      {/* 2. Cinematic Video (Fades in over canvas when video file is present) */}
      <video
        ref={videoRef}
        src="/trinetra-hero.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        onError={() => setVideoFailed(true)}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-1000 ${
          videoLoaded && !videoFailed ? "opacity-90" : "opacity-0 pointer-events-none"
        }`}
      >
        <source src="/trinetra-hero.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Vignette & Contrast Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050608] via-transparent to-[#050608]/75" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_140px_rgba(0,0,0,0.9)]" />

      {/* 3. Top Command Bar HUD */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded border border-trinetra-saffron/70 bg-trinetra-saffron/10 flex items-center justify-center text-trinetra-saffron font-bold text-sm tracking-wider">
            त्र
          </div>
          <div>
            <div className="font-display text-lg font-semibold tracking-widest text-neutral-100 flex items-center gap-2">
              TRINETRA <span className="text-trinetra-saffron text-xs font-mono font-normal tracking-wider">OS // 1.0</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400">
              Strategic Geopolitical Intelligence Platform
            </div>
          </div>
        </div>

        {/* Top Right Controls: Status indicator, Audio Toggle & Skip */}
        <div className="flex items-center gap-3">
          {videoLoaded && !videoFailed ? (
            <button
              onClick={toggleSound}
              className="p-2 rounded border border-white/10 bg-black/40 hover:bg-black/70 hover:border-trinetra-saffron/60 text-neutral-400 hover:text-white transition-all text-xs flex items-center gap-1.5 backdrop-blur cursor-pointer"
              title={isMuted ? "Unmute Audio Briefing" : "Mute Audio"}
            >
              {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5 text-trinetra-saffron" />}
              <span className="hidden sm:inline font-mono text-[10px] tracking-wider uppercase">
                {isMuted ? "Audio Off" : "Audio Active"}
              </span>
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/10 bg-black/40 text-neutral-400 font-mono text-[10px] tracking-wider">
              <span className="size-2 rounded-full bg-[#FF7A00] animate-ping" />
              <span>TACTICAL TELEMETRY STREAM</span>
            </div>
          )}

          <button
            onClick={handleEnter}
            className="px-3.5 py-1.5 rounded border border-white/15 bg-black/50 hover:border-trinetra-saffron/60 text-neutral-300 hover:text-white text-xs font-mono tracking-wider transition-all backdrop-blur flex items-center gap-1.5 cursor-pointer"
          >
            <span>Skip to Console</span>
            <ArrowRight className="size-3 text-trinetra-saffron" />
          </button>
        </div>
      </header>

      {/* 4. Center Reticle & Conceptual Statement */}
      <main className="relative z-20 mx-auto max-w-4xl px-6 text-center my-auto">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] text-trinetra-saffron border border-trinetra-saffron/30 px-3.5 py-1.5 rounded bg-black/70 backdrop-blur mb-6 uppercase">
          <Eye className="size-3.5 animate-pulse text-trinetra-saffron" />
          Autonomous Strategic Command Initialization
        </div>

        <h1 className="font-display text-5xl sm:text-7xl font-light text-neutral-50 tracking-tight mb-4 leading-none">
          TRINETRA
        </h1>

        <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-neutral-400 max-w-2xl mx-auto mb-6">
          Observe <span className="text-trinetra-saffron">•</span> Connect <span className="text-trinetra-saffron">•</span> Anticipate
        </p>

        <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8 leading-relaxed font-light">
          Synthesizing multi-domain sovereign actors, strategic alliances, trade chokepoints, and bilateral rivalry resilience into a unified intelligence environment.
        </p>

        {/* Primary Command Center Call To Action */}
        <div className="flex flex-col items-center justify-center gap-3">
          <button
            onClick={handleEnter}
            className="px-8 py-3.5 rounded-lg bg-trinetra-saffron hover:bg-[#ff8c1a] text-black font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 shadow-xl shadow-trinetra-saffron/20 group cursor-pointer active:scale-95"
          >
            <span>Enter Trinetra Platform</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
          <div className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase flex items-center gap-1.5">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-300">Enter ↵</kbd>
            <span>or click to access intelligence console</span>
          </div>
        </div>
      </main>

      {/* 5. Bottom Telemetry & Progress Ribbon */}
      <footer className="relative z-20 px-6 py-5 sm:px-10 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 bg-[#050608]/80 backdrop-blur">
        <div className="flex items-center gap-6 font-mono text-[11px] text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-300">INTELLIGENCE GRID: ONLINE</span>
          </div>
          <div className="hidden md:inline text-neutral-400">
            SOVEREIGN PROFILES: 22 LOADED
          </div>
          <div className="hidden lg:inline text-neutral-400">
            CHOKEPOINT SENSORS: ACTIVE
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-full sm:w-64 flex items-center gap-3">
          <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-trinetra-saffron transition-all duration-300 ease-out"
              style={{ width: `${Math.min(100, Math.max(progress, 8))}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-neutral-400 tracking-wider w-12 text-right">
            {videoEnded || progress >= 99 ? "READY" : `${Math.round(progress)}%`}
          </span>
        </div>
      </footer>
    </div>
  );
}
