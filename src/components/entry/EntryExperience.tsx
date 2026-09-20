import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

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

  // Attempt video playback immediately on mount and when ready
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    if (video.readyState >= 2) {
      setVideoLoaded(true);
    }

    const tryPlay = () => {
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {
          // Keep video element ready for user interaction
        });
      });
    };

    tryPlay();
  }, [isReplay]);

  // Tactical Canvas Simulation (runs smoothly only when video is loading or fails)
  useEffect(() => {
    if (videoLoaded && !videoFailed) return;

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

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      onClick={handleEnter}
      className={`fixed inset-0 z-50 flex flex-col justify-between bg-[#050608] overflow-hidden select-none cursor-pointer transition-opacity duration-500 ease-out ${
        isEntering ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="button"
      tabIndex={0}
      aria-label="Enter console"
    >
      {/* ── LAYER 0: VIDEO BACKGROUND ── */}
      {/* Fallback Simulation Canvas (Only active if video is loading or unavailable) */}
      {(!videoLoaded || videoFailed) && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 size-full pointer-events-none z-0"
        />
      )}

      {/* Clean Cinematic Video (Rendered untouched at 100% opacity, completely unobstructed) */}
      <video
        ref={videoRef}
        src="/trinetra-hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onLoadedData={() => {
          setVideoLoaded(true);
          videoRef.current?.play().catch(() => {});
        }}
        onCanPlay={() => {
          setVideoLoaded(true);
          videoRef.current?.play().catch(() => {});
        }}
        onPlay={() => setVideoLoaded(true)}
        onError={() => setVideoFailed(true)}
        className={`absolute inset-0 size-full object-cover z-0 transition-opacity duration-700 ${
          videoLoaded && !videoFailed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <source src="/trinetra-hero.mp4" type="video/mp4" />
      </video>

      {/* ── MINIMAL FLOATING ICON CONTROLS (NO TEXT OVERLAY) ── */}
      <div className="relative z-20 flex items-center justify-end p-5 sm:p-7 gap-3 pointer-events-auto">
        {videoLoaded && !videoFailed && (
          <button
            onClick={toggleSound}
            className="p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            title={isMuted ? "Unmute audio" : "Mute audio"}
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? (
              <VolumeX className="size-4 text-neutral-400" />
            ) : (
              <Volume2 className="size-4 text-trinetra-saffron animate-pulse" />
            )}
          </button>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleEnter();
          }}
          className="p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/20 text-neutral-300 hover:text-white transition-all backdrop-blur-md cursor-pointer shadow-lg hover:scale-105 active:scale-95"
          title="Enter platform"
          aria-label="Enter platform"
        >
          <ArrowRight className="size-4 text-trinetra-saffron" />
        </button>
      </div>
    </div>
  );
}
