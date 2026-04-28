"""
Comparison Engine — asymmetry analysis between two countries.
Does NOT produce a winner. Produces leverage maps and constraint profiles.
"""


class ComparisonEngine:
    def analyze(self, a: dict, b: dict) -> dict:
        a_mil = a.get("military_security", {})
        b_mil = b.get("military_security", {})
        a_eco = a.get("economy", {})
        b_eco = b.get("economy", {})
        a_geo = a.get("geography_strategy", {})
        b_geo = b.get("geography_strategy", {})
        a_meta = a.get("meta", {})
        b_meta = b.get("meta", {})

        leverage_a_over_b = []
        leverage_b_over_a = []

        # Chokepoint leverage
        a_choke = a_geo.get("chokepoints", [])
        b_choke = b_geo.get("chokepoints", [])
        if a_choke:
            leverage_a_over_b.append({
                "domain": "geographic",
                "lever": f"Controls or proximate to: {', '.join(a_choke[:2])}",
                "impact": "Can threaten maritime supply chains",
                "severity": "high"
            })
        if b_choke:
            leverage_b_over_a.append({
                "domain": "geographic",
                "lever": f"Controls or proximate to: {', '.join(b_choke[:2])}",
                "impact": "Can threaten maritime supply chains",
                "severity": "high"
            })

        # Nuclear deterrence
        a_nuke = a_mil.get("nuclear_status", {}).get("is_nuclear", False)
        b_nuke = b_mil.get("nuclear_status", {}).get("is_nuclear", False)
        if a_nuke:
            leverage_a_over_b.append({
                "domain": "deterrence", "lever": "Nuclear armed",
                "impact": "Caps direct conflict escalation ceiling",
                "severity": "critical"
            })
        if b_nuke:
            leverage_b_over_a.append({
                "domain": "deterrence", "lever": "Nuclear armed",
                "impact": "Caps direct conflict escalation ceiling",
                "severity": "critical"
            })

        # Economic scale
        a_gdp = a_eco.get("gdp_usd_trillion", 0)
        b_gdp = b_eco.get("gdp_usd_trillion", 0)
        if a_gdp > b_gdp * 1.5:
            leverage_a_over_b.append({
                "domain": "economic", "lever": f"GDP {a_gdp}T vs {b_gdp}T",
                "impact": "Can sustain longer economic warfare",
                "severity": "medium"
            })
        elif b_gdp > a_gdp * 1.5:
            leverage_b_over_a.append({
                "domain": "economic", "lever": f"GDP {b_gdp}T vs {a_gdp}T",
                "impact": "Can sustain longer economic warfare",
                "severity": "medium"
            })

        # Sanctions vulnerability asymmetry
        a_sanc = a_eco.get("sanction_vulnerability", 50)
        b_sanc = b_eco.get("sanction_vulnerability", 50)
        if b_sanc - a_sanc > 20:
            leverage_a_over_b.append({
                "domain": "economic", "lever": "Sanction leverage",
                "impact": f"B is {b_sanc - a_sanc}pts more sanction-exposed",
                "severity": "high"
            })
        elif a_sanc - b_sanc > 20:
            leverage_b_over_a.append({
                "domain": "economic", "lever": "Sanction leverage",
                "impact": f"A is {a_sanc - b_sanc}pts more sanction-exposed",
                "severity": "high"
            })

        # Alliance depth
        a_allies = len(a.get("foreign_policy", {}).get("alliances", {}).get("formal_allies", []))
        b_allies = len(b.get("foreign_policy", {}).get("alliances", {}).get("formal_allies", []))
        if a_allies > b_allies + 2:
            leverage_a_over_b.append({
                "domain": "alliance", "lever": f"{a_allies} formal allies vs {b_allies}",
                "impact": "Broader coalition support available",
                "severity": "medium"
            })
        elif b_allies > a_allies + 2:
            leverage_b_over_a.append({
                "domain": "alliance", "lever": f"{b_allies} formal allies vs {a_allies}",
                "impact": "Broader coalition support available",
                "severity": "medium"
            })

        # Strategic culture collision — check SCR domains
        a_scr = a.get("strategic_culture_rules", [])
        b_scr = b.get("strategic_culture_rules", [])
        scr_collisions = []
        for ar in a_scr:
            for br in b_scr:
                if ar.get("domain") == br.get("domain"):
                    ar_resp = ar.get("ml_features", {}).get("predicted_response", "")
                    br_resp = br.get("ml_features", {}).get("predicted_response", "")
                    if ar_resp and br_resp and ar_resp != br_resp:
                        scr_collisions.append({
                            "domain": ar["domain"],
                            "a_rule": ar["rule"],
                            "b_rule": br["rule"],
                            "collision": f"{a_meta.get('name','A')}: {ar_resp} | {b_meta.get('name','B')}: {br_resp}",
                            "risk": "escalation_mismatch"
                        })

        return {
            "relationship_classification": _classify_relationship(a, b),
            "leverage_a_over_b": leverage_a_over_b,
            "leverage_b_over_a": leverage_b_over_a,
            "scr_collisions": scr_collisions,
            "structural_constraints": _structural_constraints(a, b),
        }


def _classify_relationship(a: dict, b: dict) -> str:
    a_name = a.get("meta", {}).get("name", "")
    b_name = b.get("meta", {}).get("name", "")
    a_rivals = a.get("foreign_policy", {}).get("alliances", {}).get("rivals", [])
    b_rivals = b.get("foreign_policy", {}).get("alliances", {}).get("rivals", [])
    a_allies = a.get("foreign_policy", {}).get("alliances", {}).get("formal_allies", [])
    b_allies = b.get("foreign_policy", {}).get("alliances", {}).get("formal_allies", [])

    if b_name in a_rivals or a_name in b_rivals:
        return "Strategic Rivals"
    if b_name in a_allies or a_name in b_allies:
        return "Formal Allies"
    return "Strategic Competitors / Partial Partners"


def _structural_constraints(a: dict, b: dict) -> list:
    constraints = []
    a_nuke = a.get("military_security", {}).get("nuclear_status", {}).get("is_nuclear", False)
    b_nuke = b.get("military_security", {}).get("nuclear_status", {}).get("is_nuclear", False)
    if a_nuke and b_nuke:
        constraints.append({
            "type": "nuclear_deterrence",
            "description": "Both states are nuclear-armed. Direct all-out war carries existential risk. Conflict routes through proxy, coercion, or limited engagement.",
            "effect": "suppresses_direct_war"
        })
    a_gdp = a.get("economy", {}).get("gdp_usd_trillion", 0)
    b_gdp = b.get("economy", {}).get("gdp_usd_trillion", 0)
    a_trade_dep = a.get("economy", {}).get("trade_dependency", 0)
    b_trade_dep = b.get("economy", {}).get("trade_dependency", 0)
    if a_trade_dep > 50 and b_trade_dep > 50:
        constraints.append({
            "type": "economic_interdependence",
            "description": "High mutual trade dependency. War would cause severe economic self-harm for both sides.",
            "effect": "economic_brake"
        })
    return constraints
