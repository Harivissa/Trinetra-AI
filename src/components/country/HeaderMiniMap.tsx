import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Plus, Minus, Maximize2 } from "lucide-react";
import { COUNTRY_GEO_PROFILES } from "../../data/countryGeoData";

interface HeaderMiniMapProps {
  countryId: string;
  countryName: string;
  onOpenFullMap?: () => void;
}

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

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const map = L.map(mapContainerRef.current, {
      center: geoProfile.coordinates,
      zoom: geoProfile.zoom || 4,
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
        opacity: 0.8,
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

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-[290px] rounded-xl overflow-hidden border border-white/10 bg-[#05070a]">
      {/* Map canvas */}
      <div ref={mapContainerRef} className="w-full h-full min-h-[260px] md:min-h-[290px] z-0" />

      {/* Neighbor states tactical overlay tags */}
      {geoProfile.borderingCountries && geoProfile.borderingCountries.length > 0 && (
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-wrap gap-1 max-w-[70%] pointer-events-none">
          {geoProfile.borderingCountries.slice(0, 4).map((neighbor) => (
            <span
              key={neighbor}
              className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/75 border border-white/10 text-neutral-400 backdrop-blur-xs"
            >
              {neighbor}
            </span>
          ))}
        </div>
      )}

      {/* Controls: Zoom In / Out / Maximize */}
      <div className="absolute top-2.5 right-2.5 z-10 flex flex-col gap-1.5">
        {onOpenFullMap && (
          <button
            type="button"
            onClick={onOpenFullMap}
            title="Expand Full Interactive Theater GIS Map"
            className="p-1.5 rounded-md bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-md"
          >
            <Maximize2 className="size-3.5" />
          </button>
        )}
        <button
          type="button"
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-1.5 rounded-md bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-md"
        >
          <Plus className="size-3.5" />
        </button>
        <button
          type="button"
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-1.5 rounded-md bg-black/80 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-md"
        >
          <Minus className="size-3.5" />
        </button>
      </div>

      {/* Bottom map status HUD */}
      <div className="absolute bottom-2 left-2 right-2 z-10 flex items-center justify-between px-2.5 py-1 rounded bg-black/85 border border-white/10 text-[10px] font-mono backdrop-blur-xs pointer-events-none">
        <span className="text-neutral-400">THEATER GIS: <span className="text-white font-semibold">{countryName}</span></span>
        <span className="text-trinetra-saffron flex items-center gap-1">
          <span className="size-1.5 rounded-full bg-trinetra-saffron animate-ping" />
          ACTIVE
        </span>
      </div>
    </div>
  );
};
