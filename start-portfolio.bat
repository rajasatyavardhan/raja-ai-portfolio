@echo off
cd /d "%~dp0"
echo Starting Raja portfolio...
echo.
if not exist node_modules (
  echo Installing dependencies. This may take a minute...
  call npm install
)
start "" http://127.0.0.1:5173/
call npm run dev -- --host 127.0.0.1
