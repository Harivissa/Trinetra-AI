"""
Data loader — reads country JSON files from data/countries/.
Each file is named by country_id (e.g., india.json, china.json).
"""
import json
import os

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data", "countries")

# Country registry — maps id → display metadata
COUNTRY_REGISTRY = [
    {"id": "united_states", "name": "United States", "flag": "🇺🇸", "region": "North America"},
    {"id": "china",         "name": "China",          "flag": "🇨🇳", "region": "East Asia"},
    {"id": "russia",        "name": "Russia",         "flag": "🇷🇺", "region": "Eurasia"},
    {"id": "india",         "name": "India",          "flag": "🇮🇳", "region": "South Asia"},
    {"id": "japan",         "name": "Japan",          "flag": "🇯🇵", "region": "East Asia"},
    {"id": "germany",       "name": "Germany",        "flag": "🇩🇪", "region": "Europe"},
    {"id": "france",        "name": "France",         "flag": "🇫🇷", "region": "Europe"},
    {"id": "united_kingdom","name": "United Kingdom", "flag": "🇬🇧", "region": "Europe"},
    {"id": "pakistan",      "name": "Pakistan",       "flag": "🇵🇰", "region": "South Asia"},
    {"id": "israel",        "name": "Israel",         "flag": "🇮🇱", "region": "Middle East"},
    {"id": "iran",          "name": "Iran",           "flag": "🇮🇷", "region": "Middle East"},
    {"id": "saudi_arabia",  "name": "Saudi Arabia",   "flag": "🇸🇦", "region": "Middle East"},
    {"id": "turkey",        "name": "Turkey",         "flag": "🇹🇷", "region": "Eurasia"},
    {"id": "south_korea",   "name": "South Korea",    "flag": "🇰🇷", "region": "East Asia"},
    {"id": "north_korea",   "name": "North Korea",    "flag": "🇰🇵", "region": "East Asia"},
    {"id": "ukraine",       "name": "Ukraine",        "flag": "🇺🇦", "region": "Europe"},
    {"id": "taiwan",        "name": "Taiwan",         "flag": "🇹🇼", "region": "East Asia"},
    {"id": "italy",         "name": "Italy",          "flag": "🇮🇹", "region": "Europe"},
    {"id": "brazil",        "name": "Brazil",         "flag": "🇧🇷", "region": "South America"},
    {"id": "indonesia",     "name": "Indonesia",      "flag": "🇮🇩", "region": "Southeast Asia"},
]


def list_countries():
    """Return registry with data_available flag."""
    result = []
    for c in COUNTRY_REGISTRY:
        path = os.path.join(DATA_DIR, f"{c['id']}.json")
        result.append({**c, "data_available": os.path.exists(path)})
    return result


def load_country(country_id: str) -> dict | None:
    """Load full country JSON. Returns None if file not found."""
    path = os.path.join(DATA_DIR, f"{country_id}.json")
    if not os.path.exists(path):
        return None
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)
