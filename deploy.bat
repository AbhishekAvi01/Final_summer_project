@echo off
echo 🚀 Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo 📦 Installing dependencies...
npm install

echo 🔨 Building project...
npm run build

if %errorlevel% equ 0 (
    echo ✅ Build successful!
    echo 📁 Build output is in the 'dist' directory
    echo.
    echo 🌐 To deploy to Netlify:
    echo 1. Go to https://netlify.com
    echo 2. Drag and drop the 'dist' folder to deploy
    echo.
    echo 📋 Or use Netlify CLI:
    echo npm install -g netlify-cli
    echo netlify login
    echo netlify deploy --prod --dir=dist
) else (
    echo ❌ Build failed. Please check the errors above.
)

pause 