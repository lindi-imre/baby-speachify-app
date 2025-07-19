#!/usr/bin/env bash
set -e

echo "📁 Current working directory: $(pwd)"

echo "🔧 Installing frontend dependencies..."
cd baby-speechify-fe
npm install

echo "🏗️ Building Angular app..."
npm run build

echo "📦 Installing backend dependencies..."
cd ..
cd baby-speechify-be
npm install

echo "🔨 Building NestJS app..."
npm run build

echo "✅ Build finished successfully"