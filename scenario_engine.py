"""
Scenario Simulation Engine
Generates 5 scenario cards. No winners. Realistic paths.
"""


class ScenarioEngine:
    def generate(self, a: dict, b: dict, war_assessment: dict) -> list:
        probs = war_assessment.get("probabilities", {})
        a_name = a.get("meta", {}).get("name", "Country A")
        b_name = b.get("meta", {}).get("name", "Country B")
        a_nuke = a.get("military_security", {}).get("nuclear_status", {}).get("is_nuclear", False)
        b_nuke = b.get("military_security", {}).get("nuclear_status", {}).get("is_nuclear", False)
        both_nuclear = a_nuke and b_nuke

        diplomacy_p = probs.get("diplomatic_resolution", 40)
        coercion_p  = probs.get("economic_coercion", 30)
        proxy_p     = probs.get("proxy_conflict", 25)
        direct_p    = probs.get("direct_war", 10)
        escalation_p = min(direct_p * 0.4, 15)

        return [
            {
                "id": "A",
                "name": "Diplomatic Resolution",
                "probability": round(diplomacy_p, 1),
                "description": f"Mediated talks — likely through {self._mediator(a, b)} — produce a face-saving framework. Core grievances unresolved but active hostility recedes.",
                "conditions": ["Third-party mediation accepted", "Domestic political window opens", "Economic costs become untenable"],
                "global_consequence": "Markets stabilize. Regional powers re-engage both parties.",
                "key_variable": "Domestic political will on both sides to accept partial concessions.",
                "timeline": "6–18 months"
            },
            {
                "id": "B",
                "name": "Economic Coercion / Cold Standoff",
                "probability": round(coercion_p, 1),
                "description": f"No direct military engagement. {a_name} and {b_name} pursue economic pressure, sanctions, trade restrictions, and supply chain weaponization.",
                "conditions": ["Military option too costly", "Economic leverage preferred", "International opinion discourages escalation"],
                "global_consequence": "Supply chain disruption. Energy price volatility. Third-country collateral damage.",
                "key_variable": "Which side's economy absorbs sustained pressure better.",
                "timeline": "1–5 years"
            },
            {
                "id": "C",
                "name": "Proxy / Covert Conflict",
                "probability": round(proxy_p, 1),
                "description": f"{'Both nuclear states avoid direct war. ' if both_nuclear else ''}Conflict prosecuted through proxies, cyber operations, information warfare, and covert support to opposing factions.",
                "conditions": ["Direct war deterred", "Both sides have proxy networks", "Deniability maintained"],
                "global_consequence": "Regional destabilization. Humanitarian crises in proxy theaters.",
                "key_variable": "Proxy control — whether client actors escalate beyond principals' intent.",
                "timeline": "Ongoing — 2–10 years"
            },
            {
                "id": "D",
                "name": "Limited Military Engagement",
                "probability": round(direct_p, 1),
                "description": f"Controlled conventional engagement — border clashes, naval incidents, or limited air strikes. Both sides manage escalation rungs carefully. {'Nuclear threshold remains distant but visible.' if both_nuclear else ''}",
                "conditions": ["Trigger event crosses red line", "Domestic pressure forces military response", "Off-ramp available for de-escalation"],
                "global_consequence": "Regional military buildup. Arms market surge. Alliance solidarity tested.",
                "key_variable": "Availability of a face-saving off-ramp before escalation spiral locks in.",
                "timeline": "Days to months"
            },
            {
                "id": "E",
                "name": "Great Power Involvement / Escalation",
                "probability": round(escalation_p, 1),
                "description": f"Third powers enter. Conflict becomes proxy for larger geopolitical competition. {'Nuclear signaling enters the equation.' if both_nuclear else ''} Global economic disruption becomes severe.",
                "conditions": ["Limited engagement fails to resolve", "External power sees opportunity or existential stakes", "Alliance obligations triggered"],
                "global_consequence": "Global recession risk. UN Security Council paralysis. Energy crisis. Refugee flows.",
                "key_variable": "Whether external interveners have compatible war termination criteria.",
                "timeline": "Months to years"
            },
        ]

    def _mediator(self, a: dict, b: dict) -> str:
        """Identify most plausible mediator."""
        a_partners = a.get("foreign_policy", {}).get("alliances", {}).get("strategic_partners", [])
        b_partners = b.get("foreign_policy", {}).get("alliances", {}).get("strategic_partners", [])
        shared = set(a_partners) & set(b_partners)
        if shared:
            return list(shared)[0]
        return "UN / regional multilateral body"
