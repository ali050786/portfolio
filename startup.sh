#!/bin/bash

echo "🔍 Killing any processes on ports 3000–3100..."

for port in $(seq 3000 3100); do
  pids=$(lsof -ti tcp:$port 2>/dev/null)
  if [ -n "$pids" ]; then
    echo "  ✓ Killing port $port (PID: $pids)"
    kill -9 $pids 2>/dev/null
  fi
done

echo "✅ Ports cleared."
echo ""
echo "🚀 Starting new-portfolio dev server..."
cd "$(dirname "$0")"
npm run dev
