"""
Country Intelligence Engine
Builds structured dossiers from raw country data.
"""

from __future__ import annotations
from typing import Any


class CountryEngine:
    def __init__(self, countries: dict[str, dict]):
        self.countries = countries

    def build_dossier(self, country_id: str, mode: str = "full") -> dict[str, Any]:
        raw = self.countries[country_id]
        dossier = {
            "id": country_id,
            "display_name": raw["display_name"],
            "meta": raw["meta"],
            "national_profile": raw.get("national_profile", {}),
            "flashpoints": raw.get("flashpoints", []),
            "strategic_culture": raw.get("strategic_culture", {}),
            "derived": self._compute_derived(raw),
        }

        if mode in ("full", "deep"):
            dossier.update({
                "historical_memory": raw.get("historical_memory", {}),
                "crises_tragedies": raw.get("crises_tragedies", []),
                "political_intel": raw.get("political_intel", {}),
                "economy": raw.get("economy", {}),
                "society": raw.get("society", {}),
                "geography_strategy": raw.get("geography_strategy", {}),
                "military_foreign": raw.get("military_foreign", {}),
                "current_affairs": raw.get("current_affairs", {}),
                "relationships": raw.get("relationships", {}),
                "az_memory": raw.get("az_memory", {}),
            })

        if mode == "deep":
            dossier.update({
                "upsc_layer": raw.get("upsc_layer", {}),
                "perception_model": raw.get("perception_model", {}),
                "legitimacy_architecture": raw.get("legitimacy_architecture", {}),
                "information_environment": raw.get("information_environment", {}),
                "resource_climate": raw.get("resource_climate", {}),
                "diaspora_power": raw.get("diaspora_power", {}),
                "doctrine_break_conditions": raw.get("doctrine_break_conditions", {}),
                "institutional_personality": raw.get("institutional_personality", {}),
            })

        return dossier

    def _compute_derived(self, raw: dict) -> dict:
        mil = raw.get("military_foreign", {})
        econ = raw.get("economy", {})
        soc = raw.get("society", {})
        geo = raw.get("geography_strategy", {})

        mil_score = mil.get("effectiveness_score", 50)
        econ_resilience = econ.get("resilience_score", 50)
        stability = soc.get("stability_score", 50)
        sustain = (mil_score + econ_resilience + stability) / 3

        nuclear = mil.get("nuclear_status") in ("armed", "threshold")
        fp_max = max((f["pressure_score"] for f in raw.get("flashpoints", [])), default=0)

        scr_count = len(raw.get("strategic_culture", {}).get("rules", []))

        return {
            "composite_power_score": round((mil_score * 0.35 + econ_resilience * 0.40 + stability * 0.25), 1),
            "sustainment_capacity": round(sustain, 1),
            "nuclear_state": nuclear,
            "top_flashpoint_pressure": fp_max,
            "strategic_culture_depth": scr_count,
            "chokepoint_leverage": len(geo.get("chokepoints", [])) > 0,
        }
