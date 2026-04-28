# Trinetra AI — Country Intelligence Platform

## Project Structure
```
trinetra/
├── backend/          # FastAPI Python backend
│   ├── main.py
│   ├── api/          # Route handlers (countries, comparison, music)
│   ├── engines/      # Intelligence engines
│   └── data/countries/  # India.json, China.json, ...
├── frontend/         # React + Vite frontend
│   └── src/
│       ├── pages/    # HomePage, CountryPage, ComparisonPage
│       ├── components/
│       │   ├── country/  # 12 tab components
│       │   ├── comparison/
│       │   └── shared/
│       ├── hooks/    # useCountry, useComparison
│       └── utils/    # api.js, helpers.js
└── songs/            # Drop .mp3 files here for ambient music
```

## Setup & Run

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

### Frontend
```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:3000
```

### Add Music
Drop any `.mp3` file into the `songs/` folder. It appears in the player automatically.

### Add More Countries
Copy `data/countries/india.json` → `data/countries/turkey.json`.
Fill in all 11 layers. The system auto-detects files.

## Architecture
- **Phase 1**: Country Intelligence — 11-layer dossier per nation
- **Phase 2**: Comparison Engine — asymmetry, war probability, scenario simulation

## Intelligence Layers
1. National Profile
2. Historical Memory (narrative spine, turning points, doctrine timeline)
3. Crises & Tragedies (wound model with live relevance scores)
4. Political Intelligence (constitution, parties, leadership biography)
5. Economy (strengths, vulnerabilities, strategic dependencies)
6. Society (demographics, fault lines)
7. Geography & Strategy (chokepoints, borders, vulnerabilities)
8. Military & Security (nuclear status, doctrine, capabilities)
9. Foreign Policy (doctrine evolution, alliance architecture, perception layer)
10. Current Affairs (2025-2026)
11. UPSC Layer (mains themes, interview themes, quick drill mode)
12. A-Z Nation Memory Grid
13. Flashpoint Pressure Gauges
14. Strategic Culture Rules (ML-ready)

## Data Available
- India ✅ (full 11-layer)
- China ✅ (full 11-layer)
- 18 others: add JSON files to unlock
