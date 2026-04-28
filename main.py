"""
Trinetra AI — FastAPI Backend
Entry point. Mounts all routers.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.countries import router as countries_router
from api.comparison import router as comparison_router
from api.music import router as music_router

app = FastAPI(
    title="Trinetra AI",
    description="Country Intelligence and Geopolitical Reasoning Platform",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(countries_router, prefix="/api/countries", tags=["countries"])
app.include_router(comparison_router, prefix="/api/comparison", tags=["comparison"])
app.include_router(music_router, prefix="/api/music", tags=["music"])


@app.get("/api/health")
def health():
    return {"status": "operational", "platform": "Trinetra AI"}
