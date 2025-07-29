#!/bin/bash

# Abhishek Kumar Portfolio - Netlify Deployment Script

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "📁 Build output is in the 'dist' directory"
    echo ""
    echo "🌐 To deploy to Netlify:"
    echo "1. Go to https://netlify.com"
    echo "2. Drag and drop the 'dist' folder to deploy"
    echo ""
    echo "📋 Or use Netlify CLI:"
    echo "npm install -g netlify-cli"
    echo "netlify login"
    echo "netlify deploy --prod --dir=dist"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi 