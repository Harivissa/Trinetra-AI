"""
War Probability Engine — rationality-first conflict assessment
Scenario Engine — multi-path outcome generation
"""
from __future__ import annotations
from typing import Any


def clamp(v: float, lo=0, hi=100) -> float:
    return max(lo, min(hi, v))


class WarProbabilityEngine:
    def assess(self, profile_a: dict, profile_b: dict, comparison: dict) -> dict[str, Any]:
        bil = comparison["bilateral_relationship"]
        intensity = bil["intensity"]
        rel_type = bil["type"]

        # Base grievance from relationship type
        grievance_base = {
            "existential_rivalry": 85,
            "strategic_rivalry": 65,
            "competitive_partners": 30,
            "strategic_partners": 10,
            "allied": 5,
            "unknown": 40,
        }.get(rel_type, 40)

        # Nuclear brake
        nuclear_parity = comparison["asymmetry_matrix"]["nuclear_parity"]
        nuclear_brake = 40 if nuclear_parity else 15

        # Economic interdependency brake
        econ_a = profile_a.get("economy", {}).get("trade_dependency_score", 50)
        econ_b = profile_b.get("economy", {}).get("trade_dependency_score", 50)
        econ_brake = clamp((econ_a + econ_b) / 2 * 0.4)

        # SCR collision raises proxy probability
        scr_collisions = len(comparison.get("scr_collisions", []))

        # Volatility modifier
        volatility = bil.get("volatility", 40)

        # Compute scenario probabilities
        direct_war = clamp(
            grievance_base * 0.5
            + volatility * 0.2
            - nuclear_brake
            - econ_brake * 0.3
        )

        proxy = clamp(
            grievance_base * 0.35
            + scr_collisions * 8
            + volatility * 0.15
        )

        coercion = clamp(
            30 + len(comparison["asymmetry_matrix"]["leverage_a_over_b"]) * 5
            + len(comparison["asymmetry_matrix"]["leverage_b_over_a"]) * 5
        )

        diplomatic = clamp(80 - grievance_base * 0.4 + econ_brake * 0.3)

        rationale = self._build_rationale(
            grievance_base, nuclear_brake, econ_brake, scr_collisions,
            profile_a, profile_b, comparison
        )

        return {
            "reality_check": self._reality_check(direct_war, rel_type),
            "probabilities": {
                "direct_war": round(direct_war, 1),
                "proxy_conflict": round(proxy, 1),
                "economic_coercion": round(coercion, 1),
                "diplomatic_resolution": round(diplomatic, 1),
            },
            "drivers": {
                "grievance_score": round(grievance_base, 1),
                "nuclear_brake": round(nuclear_brake, 1),
                "economic_brake": round(econ_brake, 1),
                "scr_collisions": scr_collisions,
                "volatility": volatility,
            },
            "rationale": rationale,
            "trigger_events": comparison.get("escalation_ladder", []),
        }

    def _reality_check(self, direct_war: float, rel_type: str) -> dict:
        if direct_war < 10:
            label, color = "Strategically Irrational", "green"
            judgment = "Direct war between these nations is structurally irrational given current constraints."
        elif direct_war < 30:
            label, color = "Low but Non-Zero", "amber"
            judgment = "Direct conflict is unlikely but specific triggers could rapidly shift the calculus."
        elif direct_war < 55:
            label, color = "Elevated Risk", "orange"
            judgment = "Structural conditions support escalation. A single trigger event could cross the threshold."
        else:
            label, color = "High Conflict Risk", "red"
            judgment = "Multiple escalation drivers active. Conflict is plausible without external intervention."
        return {"label": label, "color": color, "judgment": judgment, "score": round(direct_war, 1)}

    def _build_rationale(self, grievance, nuclear_brake, econ_brake,
                          scr_collisions, a, b, comparison) -> list[str]:
        points = []
        if grievance > 60:
            points.append("Strong historical grievance structure creates sustained friction.")
        else:
            points.append("Weak grievance base makes large-scale war strategically unmotivated.")
        if nuclear_brake >= 30:
            points.append("Mutual nuclear deterrence routes escalation away from direct war toward proxy/coercion.")
        if econ_brake >= 25:
            points.append("Economic interdependence creates mutually assured economic destruction pressure.")
        if scr_collisions > 0:
            points.append(f"{scr_collisions} strategic culture rule collision(s) detected — doctrine incompatibilities raise proxy risk.")
        res_history = comparison.get("resolution_history", [])
        if res_history:
            pattern = res_history[-1].get("failure_cause", "")
            if pattern:
                points.append(f"Historical resolution attempts show recurring failure pattern: {pattern}")
        return points


class ScenarioEngine:
    def generate(self, profile_a: dict, profile_b: dict, war_prob: dict) -> list[dict]:
        probs = war_prob["probabilities"]
        a_name = profile_a["display_name"]
        b_name = profile_b["display_name"]

        scenarios = [
            {
                "id": "diplomatic",
                "name": "Diplomatic Resolution",
                "probability": probs["diplomatic_resolution"],
                "color": "green",
                "description": f"Both parties accept face-saving off-ramp. Mediator likely required.",
                "conditions": ["third-party mediation", "domestic political will", "economic pressure on both"],
                "global_consequence": "Markets stabilize. Regional order preserved.",
                "key_variable": "Whether a credible mediator (US, UN, regional power) can engage both.",
            },
            {
                "id": "coercion",
                "name": "Economic Coercion / Cold War",
                "probability": probs["economic_coercion"],
                "color": "amber",
                "description": f"{a_name} and {b_name} weaponize trade, sanctions, and chokepoints without military engagement.",
                "conditions": ["sustained trade disruption", "sanctions escalation", "supply chain restructuring"],
                "global_consequence": "Supply chain fragmentation. Commodity price volatility. Aligned third parties choose sides.",
                "key_variable": "Which side has greater economic pain tolerance.",
            },
            {
                "id": "proxy",
                "name": "Proxy / Covert Conflict",
                "probability": probs["proxy_conflict"],
                "color": "orange",
                "description": "Neither side engages directly. Cyber attacks, proxy armed groups, information warfare, covert ops.",
                "conditions": ["nuclear deterrence holds", "direct war costs too high", "third-party proxies available"],
                "global_consequence": "Regional instability. Third-country casualties. Plausible deniability maintained.",
                "key_variable": "Proxy asset availability and state tolerance for deniable operations.",
            },
            {
                "id": "limited_military",
                "name": "Limited Military Engagement",
                "probability": round(probs["direct_war"] * 0.6, 1),
                "color": "red",
                "description": f"Controlled conventional skirmish. Both sides seek off-ramp before full escalation.",
                "conditions": ["clear casus belli", "off-ramp available", "nuclear deterrence stable"],
                "global_consequence": "Oil price spike. Refugee flows. Arms markets surge.",
                "key_variable": "Whether domestic audiences allow de-escalation without face loss.",
            },
            {
                "id": "great_power_entry",
                "name": "Great Power Involvement",
                "probability": round(probs["direct_war"] * 0.3, 1),
                "color": "darkred",
                "description": "Third powers enter. Conflict becomes proxy for systemic rivalry (e.g., US vs China via regional parties).",
                "conditions": ["conflict crosses threshold of major power interest", "one party formally requests support", "escalation dominance logic kicks in"],
                "global_consequence": "Global recession. Energy crisis. Potential systemic conflict.",
                "key_variable": "US strategic calculus and Chinese red line definitions.",
            },
        ]

        # Sort by probability descending
        return sorted(scenarios, key=lambda x: x["probability"], reverse=True)
