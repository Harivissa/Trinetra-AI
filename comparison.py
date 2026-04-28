"""Comparison API — Phase 2 geopolitical reasoning engine."""
from fastapi import APIRouter, HTTPException
from engines.data_loader import load_country
from engines.comparison_engine import ComparisonEngine
from engines.war_probability import WarProbabilityEngine
from engines.scenario_engine import ScenarioEngine

router = APIRouter()
comparison_engine = ComparisonEngine()
war_engine = WarProbabilityEngine()
scenario_engine = ScenarioEngine()

@router.get("/{country_a}/{country_b}")
def compare_countries(country_a: str, country_b: str):
    a = load_country(country_a)
    b = load_country(country_b)
    if not a:
        raise HTTPException(status_code=404, detail=f"Country '{country_a}' not found")
    if not b:
        raise HTTPException(status_code=404, detail=f"Country '{country_b}' not found")

    asymmetry = comparison_engine.analyze(a, b)
    war_assessment = war_engine.assess(a, b, asymmetry)
    scenarios = scenario_engine.generate(a, b, war_assessment)

    return {
        "country_a": a["meta"],
        "country_b": b["meta"],
        "asymmetry_matrix": asymmetry,
        "war_probability": war_assessment,
        "scenarios": scenarios,
    }
