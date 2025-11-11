@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   Starting Event Planner with PUBLIC URL
echo ============================================
echo.
echo This will install pyngrok and create a public URL
echo that you can share with ANYONE!
echo.
python start_public.py
pause

