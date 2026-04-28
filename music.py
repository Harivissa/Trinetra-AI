"""Music API — serves mp3 files from songs/ directory."""
import os
from fastapi import APIRouter
from fastapi.responses import FileResponse

router = APIRouter()
SONGS_DIR = os.path.join(os.path.dirname(__file__), "..", "..", "songs")

@router.get("/")
def list_songs():
    if not os.path.exists(SONGS_DIR):
        return {"songs": []}
    files = [f for f in os.listdir(SONGS_DIR) if f.endswith(".mp3")]
    return {"songs": files}

@router.get("/{filename}")
def get_song(filename: str):
    path = os.path.join(SONGS_DIR, filename)
    if not os.path.exists(path):
        from fastapi import HTTPException
        raise HTTPException(status_code=404, detail="Song not found")
    return FileResponse(path, media_type="audio/mpeg")
