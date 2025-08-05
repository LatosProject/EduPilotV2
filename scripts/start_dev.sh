#!/bin/bash
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT/frontend/src"
osascript -e 'tell app "Terminal"
    do script "cd '"$PROJECT_ROOT/frontend/src"' && npm run dev"
end tell'

cd "$PROJECT_ROOT/backend/app"
osascript -e 'tell app "Terminal"
    do script "cd '"$PROJECT_ROOT/backend/app"' && python3 app.py"
end tell'

cd "$PROJECT_ROOT/scripts"
python3 warmup.py
