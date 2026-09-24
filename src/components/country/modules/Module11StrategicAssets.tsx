import React from "react";
import { Building2, Anchor, Plane, Radio, Flame, Compass, MapPin, CheckCircle2 } from "lucide-react";
import { StrategicAssetMapHybrid } from "../StrategicAssetMapHybrid";

interface Module11StrategicAssetsProps {
  countryId: string;
  countryName: string;
}

export const Module11StrategicAssets: React.FC<Module11StrategicAssetsProps> = ({
  countryId,
  countryName,
}) => {
  return (
    <section id="module-11-assets" className="mb-14 scroll-mt-24" aria-label="11 Strategic Assets">
      {/* Module Canonical Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/15 border border-trinetra-saffron/40 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              Canonical Module 11
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Sovereign Facilities, Deepwater Ports & Strategic Island Outposts
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
            <Building2 className="size-6 text-trinetra-saffron" />
            <span>Strategic Assets: {countryName}</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            The canonical directory of key physical infrastructure: deepwater commercial ports, naval bases, forward military air bases, mega-refineries, space launch complexes, and strategic island territories with exact GIS coordinates.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
            GIS Integration: <strong className="text-cyan-400">Live Spatial Coordinates</strong>
          </span>
        </div>
      </div>

      {/* Complete Strategic Asset Directory & GIS Hybrid View */}
      <StrategicAssetMapHybrid
        countryId={countryId}
        countryName={countryName}
      />
    </section>
  );
};
