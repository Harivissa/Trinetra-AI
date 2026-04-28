"""Countries API — full 11-layer intelligence dossiers."""
from fastapi import APIRouter, HTTPException
from engines.data_loader import load_country, list_countries

router = APIRouter()

@router.get("/")
def get_all_countries():
    return list_countries()

@router.get("/{country_id}")
def get_country(country_id: str):
    data = load_country(country_id)
    if not data:
        raise HTTPException(status_code=404, detail=f"Country '{country_id}' not found")
    return data

@router.get("/{country_id}/layer/{layer}")
def get_country_layer(country_id: str, layer: str):
    data = load_country(country_id)
    if not data:
        raise HTTPException(status_code=404, detail=f"Country not found")
    if layer not in data:
        raise HTTPException(status_code=404, detail=f"Layer '{layer}' not found")
    return {layer: data[layer]}
