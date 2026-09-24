import { useEffect, useRef, useState, useCallback } from "react";
import L from "leaflet";
import {
  Layers,
  MapPin,
  Anchor,
  Plus,
  Minus,
  RotateCcw,
  Maximize2,
  Minimize2,
  Compass,
  AlertTriangle,
  Info,
  Shield,
  ExternalLink,
  Flame,
  Building2,
  Ship,
  X,
  FileCheck2,
} from "lucide-react";
import type { Country } from "../../types";
import {
  getCountryGeoProfile,
  getCountryChokepointsDetailed,
  type CountryGeoProfile,
} from "../../data/countryGeoData";
import { MAP_STRATEGIC_ROUTES, type MapChokepoint } from "../../data/liveMapData";
import { getCountryStrategicSites, type StrategicSite } from "../../data/countryStrategicSites";

interface CountryGeospatialMapProps {
  country: Country;
  className?: string;
}

type BasemapType = "dark" | "satellite" | "terrain";

const BASEMAP_URLS: Record<BasemapType, { url: string; attribution: string; maxZoom: number }> = {
  dark: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ",
    maxZoom: 16,
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "&copy; Esri &mdash; Earthstar Geographics",
    maxZoom: 18,
  },
  terrain: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}",
    attribution: "&copy; Esri, USGS",
    maxZoom: 16,
  },
};

const REFERENCE_LAYER_URL =
  "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}";

interface SelectedFeatureInfo {
  title: string;
  type: string;
  coordinates: [number, number];
  whyItMatters: string;
  strategicRelevance: string;
  source: string;
  confidence?: string;
  additionalBadge?: string;
}

export default function CountryGeospatialMap({
  country,
  className = "",
}: CountryGeospatialMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const referenceLayerRef = useRef<L.TileLayer | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const routesLayerRef = useRef<L.LayerGroup | null>(null);

  const [basemap, setBasemap] = useState<BasemapType>("dark");
  const [activeLayers, setActiveLayers] = useState<{
    geography: boolean;
    security: boolean;
    trade: boolean;
    energy: boolean;
    maritime: boolean;
    relationships: boolean;
    events: boolean;
  }>({
    geography: true,
    security: true,
    trade: true,
    energy: true,
    maritime: true,
    relationships: true,
    events: true,
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeatureInfo | null>(null);

  const toggleLayer = (layer: keyof typeof activeLayers) => {
    setActiveLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const geo = getCountryGeoProfile(country.id, country.name, country);
  const detailedChokepoints = getCountryChokepointsDetailed(country.id, country.name, country);
  const strategicSites = getCountryStrategicSites(country.id);

  // Initialize and update Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: geo.coordinates,
        zoom: geo.zoom,
        zoomControl: false,
        attributionControl: false,
        maxBounds: [
          [-85, -180],
          [85, 180],
        ],
        minZoom: 2,
        maxZoom: 16,
      });

      mapInstanceRef.current = map;

      // Attribution
      L.control
        .attribution({ position: "bottomright", prefix: false })
        .addTo(map);

      // Base tile layer
      tileLayerRef.current = L.tileLayer(BASEMAP_URLS[basemap].url, {
        attribution: BASEMAP_URLS[basemap].attribution,
        maxZoom: BASEMAP_URLS[basemap].maxZoom,
      }).addTo(map);

      if (basemap === "dark") {
        referenceLayerRef.current = L.tileLayer(REFERENCE_LAYER_URL, {
          maxZoom: 16,
        }).addTo(map);
      }

      // Layers groups
      markersLayerRef.current = L.layerGroup().addTo(map);
      routesLayerRef.current = L.layerGroup().addTo(map);
    } else {
      const map = mapInstanceRef.current;
      map.setView(geo.coordinates, geo.zoom, { animate: true });
    }

    return () => {
      // Map cleanup handled on unmount
    };
  }, [country.id, geo.coordinates, geo.zoom]);

  // Handle Basemap Switch
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (tileLayerRef.current) {
      map.removeLayer(tileLayerRef.current);
    }
    if (referenceLayerRef.current) {
      map.removeLayer(referenceLayerRef.current);
      referenceLayerRef.current = null;
    }

    tileLayerRef.current = L.tileLayer(BASEMAP_URLS[basemap].url, {
      attribution: BASEMAP_URLS[basemap].attribution,
      maxZoom: BASEMAP_URLS[basemap].maxZoom,
    }).addTo(map);

    if (basemap === "dark") {
      referenceLayerRef.current = L.tileLayer(REFERENCE_LAYER_URL, {
        maxZoom: 16,
      }).addTo(map);
    }
  }, [basemap]);

  // Update Markers (Capital, Strategic Sites, Chokepoints, Routes)
  useEffect(() => {
    const markersGroup = markersLayerRef.current;
    const routesGroup = routesLayerRef.current;
    if (!markersGroup || !routesGroup) return;

    markersGroup.clearLayers();
    routesGroup.clearLayers();

    // 1. Geography Layer: Capital & Sovereignty Beacon
    if (activeLayers.geography) {
      const capitalIcon = L.divIcon({
        className: "custom-capital-marker",
        html: `
          <div class="relative flex items-center justify-center cursor-pointer">
            <div class="absolute -inset-2 rounded-full bg-amber-500/40 animate-ping"></div>
            <div class="relative size-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center shadow-lg">
              <div class="size-2 rounded-full bg-black"></div>
            </div>
            <div class="absolute left-7 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/90 border border-amber-500/50 text-amber-300 font-mono text-[10px] font-bold whitespace-nowrap shadow-md pointer-events-none">
              ★ ${geo.capital.toUpperCase()}
            </div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const capitalMarker = L.marker(geo.coordinates, { icon: capitalIcon });
      capitalMarker.on("click", () => {
        setSelectedFeature({
          title: `${geo.capital} (Sovereign Capital)`,
          type: "CAPITAL & GOVERNANCE SEAT",
          coordinates: geo.coordinates,
          whyItMatters: `Political, administrative, and constitutional seat of power for ${country.name}.`,
          strategicRelevance: `Houses supreme executive authority, ministry of defense, central command, and national foreign affairs ministries.`,
          source: "Official Sovereign Gazette / United Nations",
          confidence: "High",
        });
      });
      capitalMarker.addTo(markersGroup);
    }

    // 2. Security, Trade, Energy Strategic Sites
    strategicSites.forEach((site) => {
      const isSecurity = site.type.includes("DEFENSE") || site.type.includes("NAVAL") || site.type.includes("AIR_BASE");
      const isTrade = site.type.includes("PORT") || site.type.includes("CORRIDOR");
      const isEnergy = site.type.includes("ENERGY") || site.type.includes("REFINERY");

      if (
        (isSecurity && !activeLayers.security) ||
        (isTrade && !activeLayers.trade) ||
        (isEnergy && !activeLayers.energy)
      ) {
        return;
      }

      let colorClass = "bg-emerald-500 border-emerald-200";
      if (isEnergy) colorClass = "bg-amber-500 border-amber-200";
      if (isSecurity) colorClass = "bg-rose-500 border-rose-200";

      const siteIcon = L.divIcon({
        className: "custom-site-marker",
        html: `
          <div class="relative flex items-center justify-center cursor-pointer group">
            <div class="relative size-4 rounded-full ${colorClass} border-2 flex items-center justify-center shadow-md">
              <div class="size-1.5 rounded-full bg-black"></div>
            </div>
            <div class="absolute left-5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/90 border border-neutral-700 text-white font-mono text-[9px] whitespace-nowrap shadow-md pointer-events-none group-hover:border-emerald-400">
              ${site.name}
            </div>
          </div>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker(site.coordinates, { icon: siteIcon });
      marker.on("click", () => {
        setSelectedFeature({
          title: site.name,
          type: site.type.replace(/_/g, " "),
          coordinates: site.coordinates,
          whyItMatters: site.whyItMatters,
          strategicRelevance: site.strategicRelevance,
          source: site.source,
          confidence: "High",
        });
      });
      marker.addTo(markersGroup);
    });

    // 3. Maritime Layer: Chokepoint Markers & Sea Lanes
    if (activeLayers.maritime) {
      detailedChokepoints.forEach(({ profile, chokepoint }) => {
        const isCritical = profile.exposureLevel === "CRITICAL";
        const colorClass = isCritical ? "bg-rose-500 border-rose-200" : "bg-cyan-500 border-cyan-200";
        const pulseClass = isCritical ? "bg-rose-500/30 animate-pulse" : "bg-cyan-500/30";

        const chokepointIcon = L.divIcon({
          className: "custom-chokepoint-marker",
          html: `
            <div class="relative flex items-center justify-center cursor-pointer group">
              <div class="absolute -inset-2.5 rounded-full ${pulseClass}"></div>
              <div class="relative size-5 rounded-full ${colorClass} border-2 flex items-center justify-center shadow-lg">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-black">
                  <circle cx="12" cy="5" r="3"></circle>
                  <line x1="12" y1="22" x2="12" y2="8"></line>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                </svg>
              </div>
              <div class="absolute left-6 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded bg-black/90 border border-neutral-700 text-white font-mono text-[9px] whitespace-nowrap shadow-md pointer-events-none group-hover:border-cyan-400">
                ${chokepoint.name}
              </div>
            </div>
          `,
          iconSize: [20, 20],
          iconAnchor: [10, 10],
        });

        const marker = L.marker(chokepoint.coordinates, { icon: chokepointIcon });
        marker.on("click", () => {
          setSelectedFeature({
            title: chokepoint.name,
            type: "STRATEGIC MARITIME CHOKEPOINT",
            coordinates: chokepoint.coordinates,
            whyItMatters: `Major maritime route connecting key oceanic basins. Daily volume: ${chokepoint.dailyVolume}.`,
            strategicRelevance: profile.relevance,
            source: "EIA / UNCTAD Review of Maritime Transport",
            confidence: "High",
            additionalBadge: `Exposure: ${profile.exposureLevel} · Reroute Penalty: ${profile.rerouteAlternative}`,
          });
        });
        marker.addTo(markersGroup);
      });

      MAP_STRATEGIC_ROUTES.forEach((route) => {
        L.polyline(route.coordinates, {
          color: route.color,
          weight: 2.5,
          opacity: 0.6,
          dashArray: route.dashArray || "5, 5",
        })
          .bindTooltip(`<strong>${route.name}</strong><br/>${route.description}`, {
            sticky: true,
            className: "leaflet-tactical-tooltip",
          })
          .addTo(routesGroup);
      });
    }
  }, [country.id, geo, detailedChokepoints, strategicSites, activeLayers]);

  // Recenter map
  const handleRecenter = useCallback(() => {
    const map = mapInstanceRef.current;
    if (map) {
      map.flyTo(geo.coordinates, geo.zoom, { duration: 1 });
    }
  }, [geo.coordinates, geo.zoom]);

  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();

  return (
    <section className={`mb-10 ${className}`} id="visual-map" aria-label="Geospatial Country Intelligence Map">
      <div className="border border-neutral-800 rounded-2xl bg-[#090b0e] overflow-hidden shadow-xl">
        {/* Top Control & Title Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-950/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider">
                Supporting Core Question 8: Why does its geography matter?
              </span>
              <span className="text-neutral-500 font-mono text-xs hidden sm:inline">
                · Real Geographic Engine
              </span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl text-white font-medium">
              Geospatial Theater & Strategic Geography // {country.name}
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Interactive Leaflet GIS visualizing borders, ports, chokepoints, and maritime lines of communication.
            </p>
          </div>

          {/* Basemap & Layer Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Basemap Selector */}
            <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs font-mono">
              {(["dark", "satellite", "terrain"] as BasemapType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => setBasemap(type)}
                  className={`px-2.5 py-1 rounded transition-colors uppercase text-[10px] ${
                    basemap === type
                      ? "bg-emerald-500 text-black font-bold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Strategic Operational Layer Toggles */}
            <div className="flex flex-wrap items-center gap-1 text-xs font-mono">
              <button
                onClick={() => toggleLayer("geography")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.geography
                    ? "bg-neutral-800 border-amber-500/60 text-amber-300 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <MapPin size={10} />
                Geography
              </button>
              <button
                onClick={() => toggleLayer("security")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.security
                    ? "bg-neutral-800 border-rose-500/60 text-rose-400 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <Shield size={10} />
                Security
              </button>
              <button
                onClick={() => toggleLayer("trade")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.trade
                    ? "bg-neutral-800 border-emerald-500/60 text-emerald-400 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <Anchor size={10} />
                Trade
              </button>
              <button
                onClick={() => toggleLayer("energy")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.energy
                    ? "bg-neutral-800 border-amber-500/60 text-amber-400 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <Flame size={10} />
                Energy
              </button>
              <button
                onClick={() => toggleLayer("maritime")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.maritime
                    ? "bg-neutral-800 border-cyan-500/60 text-cyan-400 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <Ship size={10} />
                Maritime
              </button>
              <button
                onClick={() => toggleLayer("relationships")}
                className={`px-2 py-1 rounded-lg border transition-colors text-[10px] flex items-center gap-1 ${
                  activeLayers.relationships
                    ? "bg-neutral-800 border-blue-500/60 text-blue-400 font-bold"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-500"
                }`}
              >
                <Compass size={10} />
                Neighbors
              </button>
            </div>
          </div>
        </div>

        {/* Map Canvas Container */}
        <div className="relative h-[480px] sm:h-[540px] w-full bg-[#050608]">
          <div ref={mapContainerRef} className="h-full w-full" />

          {/* Floating Map Action Controls */}
          <div className="absolute right-4 top-4 z-[400] flex flex-col gap-1.5 bg-black/80 backdrop-blur-md border border-neutral-800 rounded-xl p-1 shadow-lg">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Zoom in"
            >
              <Plus size={16} />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Zoom out"
            >
              <Minus size={16} />
            </button>
            <div className="h-px bg-neutral-800 my-0.5" />
            <button
              onClick={handleRecenter}
              className="p-2 rounded-lg hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors"
              title="Recenter on country"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          {/* Floating Selected Feature Intelligence Card */}
          {selectedFeature && (
            <div className="absolute left-4 bottom-4 z-[400] max-w-sm w-[calc(100%-2rem)] sm:w-96 bg-neutral-950/95 backdrop-blur-md border border-neutral-700 rounded-xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom-2">
              <div className="flex items-start justify-between gap-2 border-b border-neutral-800 pb-2.5 mb-2.5">
                <div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-cyan-400 font-bold uppercase">
                    {selectedFeature.type}
                  </span>
                  <h4 className="font-display text-base font-bold text-white mt-1">
                    {selectedFeature.title}
                  </h4>
                  <span className="text-[10px] font-mono text-neutral-400 block mt-0.5">
                    Lat: {selectedFeature.coordinates[0].toFixed(2)}°, Lng: {selectedFeature.coordinates[1].toFixed(2)}°
                  </span>
                </div>
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="p-1 rounded-lg hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[9px] font-mono uppercase text-neutral-500 block">
                    Why It Matters
                  </span>
                  <p className="text-neutral-200 leading-snug">
                    {selectedFeature.whyItMatters}
                  </p>
                </div>

                <div>
                  <span className="text-[9px] font-mono uppercase text-amber-400/90 font-bold block">
                    Strategic Relevance
                  </span>
                  <p className="text-neutral-300 leading-snug">
                    {selectedFeature.strategicRelevance}
                  </p>
                </div>

                {selectedFeature.additionalBadge && (
                  <div className="bg-neutral-900 border border-neutral-800 rounded p-1.5 text-[10px] font-mono text-rose-300">
                    {selectedFeature.additionalBadge}
                  </div>
                )}

                <div className="pt-2 border-t border-neutral-900 flex items-center justify-between text-[9px] font-mono text-neutral-500">
                  <span>Source: {selectedFeature.source}</span>
                  <span>Confidence: {selectedFeature.confidence || "High"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Metadata & Bordering States Footer */}
        <div className="p-4 sm:p-5 bg-neutral-950/90 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Coastline & Maritime Type</span>
            <span className="text-neutral-200 font-semibold mt-0.5 block">
              {geo.coastlineKm ? `${geo.coastlineKm.toLocaleString()} km` : "Landlocked"} · {geo.maritimeType}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Strategic Depth</span>
            <span className="text-neutral-200 font-semibold mt-0.5 block">
              {geo.strategicDepth} Continental Depth
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-neutral-500 block">Neighboring Border States ({geo.landBordersCount})</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {geo.borderingCountries.slice(0, 6).map((b, idx) => (
                <span key={idx} className="px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] text-neutral-300">
                  {b}
                </span>
              ))}
              {geo.borderingCountries.length > 6 && (
                <span className="text-[10px] text-neutral-500">+{geo.borderingCountries.length - 6} more</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
