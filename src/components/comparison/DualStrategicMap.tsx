import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  Compass,
  MapPin,
  Anchor,
  Shield,
  Maximize2,
  Minimize2,
  Navigation,
  Globe2,
  RotateCcw,
} from "lucide-react";
import type { RivalryAnalysis } from "../../types";
import { getCountryGeoProfile } from "../../data/countryGeoData";

interface StrategicChokepoint {
  id: string;
  name: string;
  coordinates: [number, number];
  dailyVolume: string;
  description: string;
}

const GLOBAL_CHOKEPOINTS: StrategicChokepoint[] = [
  {
    id: "hormuz",
    name: "Strait of Hormuz",
    coordinates: [26.56, 56.25],
    dailyVolume: "~21 million bpd crude oil & LNG",
    description: "World's most critical energy transit corridor connecting Persian Gulf producers to global markets.",
  },
  {
    id: "malacca",
    name: "Strait of Malacca",
    coordinates: [1.43, 102.89],
    dailyVolume: "~16 million bpd petroleum & ~90,000 vessels/yr",
    description: "Primary maritime highway linking the Indian Ocean with East Asian industrial centers.",
  },
  {
    id: "bab_el_mandeb",
    name: "Bab el-Mandeb",
    coordinates: [12.58, 43.33],
    dailyVolume: "~6.2 million bpd & major cargo tonnage",
    description: "Southern gateway to the Red Sea and Suez Canal, vulnerable to littoral missile threats.",
  },
  {
    id: "suez",
    name: "Suez Canal",
    coordinates: [30.58, 32.55],
    dailyVolume: "~12% of total global seaborne commerce",
    description: "Essential shortcut connecting European markets to Asia without rounding Africa.",
  },
  {
    id: "taiwan_strait",
    name: "Taiwan Strait",
    coordinates: [24.0, 119.5],
    dailyVolume: "~50% of global container ship fleet transit",
    description: "Vital maritime approach for northeast Asian commerce and high-tech supply chains.",
  },
  {
    id: "bosphorus",
    name: "Turkish Straits (Bosphorus / Dardanelles)",
    coordinates: [41.11, 29.06],
    dailyVolume: "~3 million bpd oil + Black Sea agricultural exports",
    description: "Only maritime egress from the Black Sea into the Mediterranean.",
  },
  {
    id: "sunda",
    name: "Sunda Strait",
    coordinates: [-5.96, 105.75],
    dailyVolume: "Secondary transit alternative to Malacca",
    description: "Passage between Java and Sumatra for regional traffic.",
  },
  {
    id: "lombok",
    name: "Lombok & Makassar Straits",
    coordinates: [-8.55, 115.75],
    dailyVolume: "Deep-water VLCC alternative to Malacca",
    description: "Deep water channel suited for ultra-large crude carriers navigating to East Asia.",
  },
];

function getCountryChokepoints(countryCode: string): { chokepoint: StrategicChokepoint }[] {
  // Map relevant chokepoints based on region and trade exposure
  switch (countryCode) {
    case "IND":
      return [
        { chokepoint: GLOBAL_CHOKEPOINTS[0] }, // Hormuz
        { chokepoint: GLOBAL_CHOKEPOINTS[1] }, // Malacca
        { chokepoint: GLOBAL_CHOKEPOINTS[2] }, // Bab el Mandeb
        { chokepoint: GLOBAL_CHOKEPOINTS[3] }, // Suez
      ];
    case "CHN":
      return [
        { chokepoint: GLOBAL_CHOKEPOINTS[1] }, // Malacca
        { chokepoint: GLOBAL_CHOKEPOINTS[0] }, // Hormuz
        { chokepoint: GLOBAL_CHOKEPOINTS[4] }, // Taiwan Strait
        { chokepoint: GLOBAL_CHOKEPOINTS[7] }, // Lombok
      ];
    case "USA":
      return [
        { chokepoint: GLOBAL_CHOKEPOINTS[0] }, // Hormuz
        { chokepoint: GLOBAL_CHOKEPOINTS[1] }, // Malacca
        { chokepoint: GLOBAL_CHOKEPOINTS[4] }, // Taiwan Strait
      ];
    case "RUS":
      return [
        { chokepoint: GLOBAL_CHOKEPOINTS[5] }, // Turkish Straits
        { chokepoint: GLOBAL_CHOKEPOINTS[0] }, // Hormuz
      ];
    default:
      return [
        { chokepoint: GLOBAL_CHOKEPOINTS[0] },
        { chokepoint: GLOBAL_CHOKEPOINTS[1] },
        { chokepoint: GLOBAL_CHOKEPOINTS[3] },
      ];
  }
}

interface DualStrategicMapProps {
  analysis: RivalryAnalysis;
}

// Calculate great-circle distance between two coordinates in km
function calculateDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export const DualStrategicMap: React.FC<DualStrategicMapProps> = ({ analysis }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const [activeLayer, setActiveLayer] = useState<"THEATER" | "CHOKEPOINTS" | "BUFFER">("THEATER");
  const [distanceKm, setDistanceKm] = useState<number>(0);

  const codeA = analysis.country_a.id;
  const codeB = analysis.country_b.id;
  const nameA = analysis.country_a.name;
  const nameB = analysis.country_b.name;

  const geoA = getCountryGeoProfile(codeA, nameA, analysis.country_a_profile);
  const geoB = getCountryGeoProfile(codeB, nameB, analysis.country_b_profile);

  const chokepointsA = getCountryChokepoints(codeA);
  const chokepointsB = getCountryChokepoints(codeB);

  // Common or competing chokepoints
  const sharedChokepoints = chokepointsA.filter((a) =>
    chokepointsB.some((b) => b.chokepoint.id === a.chokepoint.id)
  );

  // Buffer states (shared border countries)
  const sharedBorders = geoA.borderingCountries.filter((b) =>
    geoB.borderingCountries.includes(b)
  );

  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    const dist = calculateDistanceKm(
      geoA.coordinates[0],
      geoA.coordinates[1],
      geoB.coordinates[0],
      geoB.coordinates[1]
    );
    setDistanceKm(dist);

    // Center map midway between both capitals
    const midLat = (geoA.coordinates[0] + geoB.coordinates[0]) / 2;
    const midLng = (geoA.coordinates[1] + geoB.coordinates[1]) / 2;

    const map = L.map(mapContainerRef.current, {
      center: [midLat, midLng],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: false,
    });

    mapInstanceRef.current = map;

    // Tactical Dark Carto basemap
    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
      maxZoom: 18,
    }).addTo(map);

    // Marker for Capital A
    const iconA = L.divIcon({
      className: "capital-marker-a",
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-2 rounded-full bg-amber-500/40 animate-ping"></div>
          <div class="size-6 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center shadow-lg text-black font-mono text-[9px] font-black">
            ${codeA}
          </div>
          <div class="absolute left-7 px-2 py-0.5 rounded bg-black/90 border border-amber-500/50 text-amber-300 font-mono text-[10px] font-bold whitespace-nowrap shadow-md">
            ${geoA.capital} (${nameA})
          </div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
    L.marker(geoA.coordinates, { icon: iconA }).addTo(map);

    // Marker for Capital B
    const iconB = L.divIcon({
      className: "capital-marker-b",
      html: `
        <div class="relative flex items-center justify-center">
          <div class="absolute -inset-2 rounded-full bg-sky-500/40 animate-ping"></div>
          <div class="size-6 rounded-full bg-sky-500 border-2 border-white flex items-center justify-center shadow-lg text-black font-mono text-[9px] font-black">
            ${codeB}
          </div>
          <div class="absolute left-7 px-2 py-0.5 rounded bg-black/90 border border-sky-500/50 text-sky-300 font-mono text-[10px] font-bold whitespace-nowrap shadow-md">
            ${geoB.capital} (${nameB})
          </div>
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });
    L.marker(geoB.coordinates, { icon: iconB }).addTo(map);

    // Strategic Geodesic Vector Line connecting Capital A and Capital B
    L.polyline([geoA.coordinates, geoB.coordinates], {
      color: "#ff8c00",
      weight: 3,
      opacity: 0.8,
      dashArray: "6, 8",
    })
      .bindTooltip(
        `<strong>Bilateral Vector</strong><br/>Great Circle Distance: ${dist.toLocaleString()} km`,
        { sticky: true, className: "leaflet-tactical-tooltip" }
      )
      .addTo(map);

    // Shared & Competing Chokepoints
    const allUniqueChokepoints = [
      ...chokepointsA.map((c) => ({ ...c, forA: true })),
      ...chokepointsB.map((c) => ({ ...c, forB: true })),
    ];

    const renderedPoints = new Set<string>();

    allUniqueChokepoints.forEach((item) => {
      if (renderedPoints.has(item.chokepoint.id)) return;
      renderedPoints.add(item.chokepoint.id);

      const isShared =
        chokepointsA.some((c) => c.chokepoint.id === item.chokepoint.id) &&
        chokepointsB.some((c) => c.chokepoint.id === item.chokepoint.id);

      const markerColor = isShared ? "bg-rose-500 border-rose-300" : "bg-cyan-500 border-cyan-300";

      const chokepointIcon = L.divIcon({
        className: "dual-chokepoint-marker",
        html: `
          <div class="relative flex items-center justify-center">
            <div class="size-4 rounded-full ${markerColor} border-2 shadow-md"></div>
            <div class="absolute left-5 px-1.5 py-0.5 rounded bg-black/80 border border-neutral-700 text-white font-mono text-[9px] whitespace-nowrap pointer-events-none">
              ${item.chokepoint.name} ${isShared ? "[CONTESTED / DUAL]" : ""}
            </div>
          </div>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      L.marker(item.chokepoint.coordinates, { icon: chokepointIcon })
        .bindPopup(`
          <div style="font-family: monospace; font-size: 11px; color: #111;">
            <strong>${item.chokepoint.name}</strong><br/>
            Type: Strategic Maritime Passage<br/>
            Daily Volume: ${item.chokepoint.dailyVolume}<br/>
            ${isShared ? "<span style='color: red;'><strong>Shared Strategic Exposure</strong></span>" : ""}
          </div>
        `)
        .addTo(map);
    });

    // Fit bounds to enclose both capitals with padding
    const bounds = L.latLngBounds([geoA.coordinates, geoB.coordinates]);
    map.fitBounds(bounds, { padding: [60, 60] });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [codeA, codeB, geoA, geoB]);

  const recenter = () => {
    if (mapInstanceRef.current) {
      const bounds = L.latLngBounds([geoA.coordinates, geoB.coordinates]);
      mapInstanceRef.current.fitBounds(bounds, { padding: [60, 60] });
    }
  };

  return (
    <div className="mb-10 rounded-2xl border border-neutral-800 bg-[#080a0f] p-6 sm:p-8 shadow-2xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded bg-trinetra-saffron/10 border border-trinetra-saffron/30 text-trinetra-saffron font-mono text-[11px] font-bold uppercase tracking-wider">
              02 // Dual Theater GIS
            </span>
            <span className="text-neutral-400 text-xs font-mono">
              Geospatial Vector & Maritime Strategic Contact
            </span>
          </div>
          <h3 className="font-display text-2xl text-white font-medium flex items-center gap-3">
            <Compass className="size-6 text-trinetra-saffron" />
            Dual Strategic Map: {nameA} vs {nameB}
          </h3>
          <p className="text-xs text-neutral-400 mt-1 max-w-2xl font-light">
            Geodesic arc connecting sovereign seats, contested maritime chokepoints, and shared peripheral buffer states.
          </p>
        </div>

        {/* Distance & Buffer State Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs">
            <span className="text-neutral-500 block text-[10px] uppercase">Sovereign Vector</span>
            <span className="text-trinetra-saffron font-bold">
              {distanceKm.toLocaleString()} km
            </span>
          </div>
          <button
            onClick={recenter}
            className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
            title="Recenter Theater"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Map Canvas */}
      <div className="relative h-[420px] sm:h-[480px] w-full rounded-xl overflow-hidden border border-neutral-800/80 bg-[#06080c]">
        <div ref={mapContainerRef} className="h-full w-full" />

        {/* Floating Strategic Legend */}
        <div className="absolute left-4 bottom-4 z-[400] bg-black/85 backdrop-blur-md border border-neutral-800 p-3.5 rounded-xl text-xs font-mono space-y-2 max-w-xs shadow-xl">
          <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
            GEOSPATIAL THEATER LEGEND
          </span>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-amber-500 border border-white"></div>
            <span className="text-neutral-300">{nameA} Capital ({geoA.capital})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-sky-500 border border-white"></div>
            <span className="text-neutral-300">{nameB} Capital ({geoB.capital})</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-rose-500 border border-rose-300"></div>
            <span className="text-neutral-300">Contested / Shared Chokepoints</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 bg-[#ff8c00] border-t border-dashed"></div>
            <span className="text-neutral-300">Strategic Sovereign Vector</span>
          </div>
        </div>
      </div>

      {/* Buffer States & Regional Geography Strip */}
      <div className="mt-6 pt-4 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
        <div className="p-3 rounded-xl bg-black/40 border border-neutral-800/80">
          <span className="text-[10px] text-neutral-500 uppercase block mb-1">
            Shared Border / Buffer States ({sharedBorders.length})
          </span>
          {sharedBorders.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {sharedBorders.map((border) => (
                <span
                  key={border}
                  className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 text-[11px]"
                >
                  {border}
                </span>
              ))}
            </div>
          ) : (
            <span className="text-neutral-400">No immediate shared land borders (separated by sea or third states).</span>
          )}
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-neutral-800/80">
          <span className="text-[10px] text-neutral-500 uppercase block mb-1">
            Maritime Contact & Basins
          </span>
          <p className="text-neutral-300 leading-snug font-light">
            {nameA} ({geoA.maritimeType}) ↔ {nameB} ({geoB.maritimeType})
          </p>
        </div>

        <div className="p-3 rounded-xl bg-black/40 border border-neutral-800/80">
          <span className="text-[10px] text-neutral-500 uppercase block mb-1">
            Contested / Overlapping Chokepoints
          </span>
          <span className="text-rose-400 font-bold">
            {sharedChokepoints.length} Overlapping Chokepoint Exposures
          </span>
        </div>
      </div>
    </div>
  );
};
