#!/bin/bash
echo "Starting Trinetra AI..."
cd "$(dirname "$0")"

# Backend
cd backend
pip install -r requirements.txt -q
uvicorn main:app --reload --port 8000 &
BACKEND_PID=$!
cd ..

# Frontend
cd frontend
npm install --silent
npm run dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "  ◉ Trinetra AI running"
echo "  Backend:  http://localhost:8000"
echo "  Frontend: http://localhost:3000"
echo "  API docs: http://localhost:8000/docs"
echo ""
echo "  Press Ctrl+C to stop."
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT
wait
