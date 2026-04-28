"""
War Probability Engine
Core principle: war is irrational until proven otherwise.
Gates must clear before probability rises.
"""


def _clamp(v): return max(0.0, min(100.0, v))


class WarProbabilityEngine:
    def assess(self, a: dict, b: dict, asymmetry: dict) -> dict:
        a_name = a.get("meta", {}).get("name", "A")
        b_name = b.get("meta", {}).get("name", "B")

        grievance     = self._grievance(a, b)
        domestic_p    = self._domestic_pressure(a, b)
        econ_brake    = self._economic_brake(a, b)
        alliance_brake= self._alliance_brake(a, b)
        nuclear_brake = self._nuclear_brake(a, b)
        misperception = self._misperception_risk(a, b)

        # Direct war base
        direct = 8 + grievance*0.45 + domestic_p*0.25 + misperception*0.15
        direct -= econ_brake*0.30
        direct -= alliance_brake*0.35
        direct -= nuclear_brake
        direct = _clamp(direct)

        proxy = _clamp(15 + grievance*0.30 + domestic_p*0.15)
        coercion = _clamp(20 + econ_brake*0.20 + len(asymmetry.get("leverage_a_over_b",[]))*3)
        diplomacy = _clamp(30 + alliance_brake*0.40 + econ_brake*0.25 + (100-grievance)*0.10)

        rationale = []
        if grievance < 30:
            rationale.append("Insufficient grievance structure for large-scale conflict initiation.")
        else:
            rationale.append("Real grievance drivers exist that can sustain friction.")
        if nuclear_brake > 0:
            rationale.append("Nuclear deterrence is active — direct war carries MAD risk, routes conflict to proxy/coercion domain.")
        if econ_brake > 35:
            rationale.append("Economic interdependence creates mutual-destruction disincentive.")
        if alliance_brake > 35:
            rationale.append("Alliance structures reduce unilateral escalation incentives.")
        if domestic_p > 45:
            rationale.append("Domestic political pressures (nationalism, legitimacy needs) elevate background escalation risk.")
        if misperception > 50:
            rationale.append("Significant perception gap between parties — asymmetric threat assessment raises miscalculation risk.")

        scr_collisions = asymmetry.get("scr_collisions", [])
        if scr_collisions:
            rationale.append(f"{len(scr_collisions)} strategic culture rule collision(s) detected — escalation patterns may mismatch.")

        triggers = self._triggers(a, b)
        reality_score = _clamp(100 - direct + alliance_brake*0.15 + econ_brake*0.10)

        return {
            "reality_check": {
                "score": round(reality_score, 1),
                "label": self._label(reality_score),
            },
            "probabilities": {
                "direct_war": round(direct, 1),
                "proxy_conflict": round(proxy, 1),
                "economic_coercion": round(coercion, 1),
                "diplomatic_resolution": round(diplomacy, 1),
            },
            "drivers": {
                "grievance": round(grievance, 1),
                "domestic_pressure": round(domestic_p, 1),
                "economic_brake": round(econ_brake, 1),
                "alliance_brake": round(alliance_brake, 1),
                "nuclear_brake": round(nuclear_brake, 1),
                "misperception_risk": round(misperception, 1),
            },
            "rationale": rationale,
            "trigger_events": triggers,
        }

    def _grievance(self, a, b):
        score = 20.0
        a_rivals = a.get("foreign_policy",{}).get("alliances",{}).get("rivals",[])
        b_rivals = b.get("foreign_policy",{}).get("alliances",{}).get("rivals",[])
        a_name = a.get("meta",{}).get("name","")
        b_name = b.get("meta",{}).get("name","")
        if b_name in a_rivals or a_name in b_rivals:
            score += 40
        # contested flashpoints
        a_fp = a.get("flashpoints", [])
        for fp in a_fp:
            if b_name in fp.get("parties", []):
                score += 15
                break
        return _clamp(score)

    def _domestic_pressure(self, a, b):
        a_leg = a.get("legitimacy_architecture", {}).get("current_legitimacy_estimate", 70)
        b_leg = b.get("legitimacy_architecture", {}).get("current_legitimacy_estimate", 70)
        score = 0.0
        if a_leg < 50: score += 30
        elif a_leg < 65: score += 15
        if b_leg < 50: score += 30
        elif b_leg < 65: score += 15
        return _clamp(score)

    def _economic_brake(self, a, b):
        a_td = a.get("economy",{}).get("trade_dependency", 40)
        b_td = b.get("economy",{}).get("trade_dependency", 40)
        return _clamp((a_td + b_td) / 2)

    def _alliance_brake(self, a, b):
        a_name = a.get("meta",{}).get("name","")
        b_name = b.get("meta",{}).get("name","")
        a_allies = a.get("foreign_policy",{}).get("alliances",{}).get("formal_allies",[])
        b_allies = b.get("foreign_policy",{}).get("alliances",{}).get("formal_allies",[])
        # if they share allies, brake is higher
        shared = set(a_allies) & set(b_allies)
        score = len(shared) * 15.0
        score += len(a_allies) * 3 + len(b_allies) * 3
        return _clamp(score)

    def _nuclear_brake(self, a, b):
        a_nuke = a.get("military_security",{}).get("nuclear_status",{}).get("is_nuclear", False)
        b_nuke = b.get("military_security",{}).get("nuclear_status",{}).get("is_nuclear", False)
        if a_nuke and b_nuke: return 45.0
        if a_nuke or b_nuke: return 20.0
        return 0.0

    def _misperception_risk(self, a, b):
        a_perc = a.get("perception_model", {}).get("rival_perceptions", {})
        b_name = b.get("meta",{}).get("name","")
        b_perc = b.get("perception_model", {}).get("rival_perceptions", {})
        a_name = a.get("meta",{}).get("name","")
        score = 20.0
        if b_name in a_perc:
            asym = a_perc[b_name].get("asymmetry_risk", "low")
            if asym == "high": score += 30
            elif asym == "medium": score += 15
        if a_name in b_perc:
            asym = b_perc[a_name].get("asymmetry_risk", "low")
            if asym == "high": score += 30
            elif asym == "medium": score += 15
        return _clamp(score)

    def _triggers(self, a, b):
        triggers = []
        a_name = a.get("meta",{}).get("name","")
        b_name = b.get("meta",{}).get("name","")
        for fp in a.get("flashpoints", []):
            if b_name in fp.get("parties",[]):
                for t in fp.get("trigger_risk", []):
                    triggers.append({"flashpoint": fp["name"], "trigger": t})
        return triggers[:6]

    def _label(self, score):
        if score >= 75: return "Conflict Highly Unlikely"
        if score >= 55: return "Conflict Unlikely"
        if score >= 40: return "Elevated Risk"
        if score >= 25: return "High Risk"
        return "Crisis Imminent"
