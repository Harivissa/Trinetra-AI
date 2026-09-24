import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import { Plus, Minus, ExternalLink } from "lucide-react";
import { COUNTRY_GEO_PROFILES } from "../../data/countryGeoData";

interface HeaderMiniMapProps {
  countryId: string;
  countryName: string;
  onOpenFullMap?: () => void;
}

interface StrategicNeighbor {
  name: string;
  id: string;
  type: "Rival" | "Partner" | "Neutral" | "Contested";
}

const STRATEGIC_NEIGHBORHOODS: Record<string, StrategicNeighbor[]> = {
  IND: [
    { name: "China", id: "CHN", type: "Rival" },
    { name: "Pakistan", id: "PAK", type: "Rival" },
    { name: "Nepal", id: "NPL", type: "Partner" },
    { name: "Bhutan", id: "BTN", type: "Partner" },
    { name: "Bangladesh", id: "BGD", type: "Partner" },
  ],
  USA: [
    { name: "Canada", id: "CAN", type: "Partner" },
    { name: "Mexico", id: "MEX", type: "Partner" },
    { name: "Cuba", id: "CUB", type: "Rival" },
    { name: "Russia", id: "RUS", type: "Rival" },
  ],
  CHN: [
    { name: "India", id: "IND", type: "Rival" },
    { name: "Japan", id: "JPN", type: "Rival" },
    { name: "Russia", id: "RUS", type: "Partner" },
    { name: "Pakistan", id: "PAK", type: "Partner" },
    { name: "Taiwan", id: "TWN", type: "Contested" },
  ],
  RUS: [
    { name: "Ukraine", id: "UKR", type: "Rival" },
    { name: "Belarus", id: "BLR", type: "Partner" },
    { name: "China", id: "CHN", type: "Partner" },
    { name: "Poland", id: "POL", type: "Rival" },
  ],
};

export const HeaderMiniMap: React.FC<HeaderMiniMapProps> = ({
  countryId,
  countryName,
  onOpenFullMap,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const geoProfile = COUNTRY_GEO_PROFILES[countryId.toUpperCase()] || {
    coordinates: [20.0, 0.0] as [number, number],
    zoom: 3,
    borderingCountries: [],
  };

  const neighbors = STRATEGIC_NEIGHBORHOODS[countryId.toUpperCase()] || [
    { name: "Border Zone", id: "REG", type: "Neutral" as const },
    { name: "Regional Littoral", id: "MAR", type: "Partner" as const },
  ];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: geoProfile.coordinates,
      zoom: (geoProfile.zoom || 4) - 0.5,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: true,
    });

    // Dark canvas basemap
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 10,
        minZoom: 2,
      }
    ).addTo(map);

    // Reference layer with border lines & labels
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 10,
        minZoom: 2,
        opacity: 0.85,
      }
    ).addTo(map);

    // Highlight beacon marker at country center
    const pulseIcon = L.divIcon({
      className: "tactical-pulse-marker",
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute w-8 h-8 rounded-full bg-orange-500/30 animate-ping"></div>
          <div class="w-3 h-3 rounded-full bg-[#f97316] border-2 border-white shadow-[0_0_12px_#f97316]"></div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    L.marker(geoProfile.coordinates, { icon: pulseIcon }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [countryId, geoProfile.coordinates[0], geoProfile.coordinates[1], geoProfile.zoom]);

  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-[290px] rounded-xl overflow-hidden border border-white/10 bg-[#05070a] flex flex-col justify-between">
      {/* Map canvas */}
      <div className="relative w-full h-[180px] sm:h-[190px]">
        <div ref={mapContainerRef} className="w-full h-full z-0" />
        
        {/* Zoom controls */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-1">
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomIn()}
            title="Zoom In"
            className="p-1 rounded bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Plus className="size-3" />
          </button>
          <button
            type="button"
            onClick={() => mapInstanceRef.current?.zoomOut()}
            title="Zoom Out"
            className="p-1 rounded bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <Minus className="size-3" />
          </button>
        </div>

        {/* Map Label Overlay */}
        <div className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[9px] font-mono text-neutral-300 backdrop-blur-xs">
          THEATER MAP · {countryName.toUpperCase()}
        </div>
      </div>

      {/* Strategic Neighborhood strip */}
      <div className="p-2.5 bg-[#090c12] border-t border-white/10 flex flex-col justify-between flex-1">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
            Strategic Neighborhood
          </span>
          <Link
            to="/live-map"
            className="text-[10px] font-mono text-trinetra-saffron hover:underline flex items-center gap-1"
          >
            Open in Live Map
            <ExternalLink className="size-2.5" />
          </Link>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {neighbors.map((n) => {
            const isRival = n.type === "Rival";
            const isPartner = n.type === "Partner";
            return (
              <div
                key={n.name}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[10px] font-mono"
              >
                <span
                  className={`size-1.5 rounded-full ${
                    isRival
                      ? "bg-rose-500"
                      : isPartner
                      ? "bg-emerald-400"
                      : "bg-amber-400"
                  }`}
                />
                <span className="text-white">{n.name}</span>
                <span className="text-neutral-500 text-[9px]">({n.type})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
