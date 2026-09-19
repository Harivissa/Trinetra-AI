import { Heart } from "lucide-react";

export default function DeveloperCredit() {
  return (
    <div className="w-full flex justify-center py-2 px-4 select-none">
      <div
        className="relative group inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-7 px-6 py-4.5 sm:px-8 sm:py-5 rounded-2xl bg-[#0c0d12]/95 border border-white/10 hover:border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300"
        role="contentinfo"
        aria-label="Developer Attribution"
      >
        {/* Subtle ambient cyan glow */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/10 via-transparent to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Left: Code Symbol */}
        <div className="flex items-center justify-center text-sky-400 shrink-0">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.3)]"
          >
            <path d="M10 10L4 16L10 22" />
            <path d="M22 10L28 16L22 22" />
            <path d="M18 7L14 25" />
          </svg>
        </div>

        {/* Divider 1 */}
        <div className="hidden sm:block w-px h-10 bg-white/10 shrink-0" />

        {/* Center: Developer Details */}
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-neutral-400 font-medium leading-none mb-1.5">
            DEVELOPED BY
          </span>
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
            Hari Vissa
          </span>
          <span className="text-xs sm:text-[13px] text-neutral-400 font-normal mt-0.5">
            Founder &amp; Developer — Trinetra AI
          </span>
        </div>

        {/* Divider 2 */}
        <div className="hidden sm:block w-px h-10 bg-white/10 shrink-0" />

        {/* Right: Purpose Badge */}
        <div className="flex items-center gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5 w-full sm:w-auto justify-center">
          <Heart className="size-4.5 fill-[#ff4d6d] text-[#ff4d6d] shrink-0 drop-shadow-[0_0_6px_rgba(255,77,109,0.35)]" />
          <div className="flex flex-col text-left font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-neutral-300 font-medium leading-tight">
            <span>BUILT</span>
            <span>WITH PURPOSE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
