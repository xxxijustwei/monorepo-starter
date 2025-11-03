#!/usr/bin/env bash

# Deploy apps/web using the repo root as Docker build context
set -euo pipefail

name=hunted-web

# Resolve repository root regardless of where the script is invoked from
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

echo "Building Docker image from root context: $ROOT"
GIT_COMMIT=$(git -C "$ROOT" rev-parse HEAD 2>/dev/null || echo unknown)
echo "Using GIT_COMMIT=$GIT_COMMIT"

sudo docker build \
  -f "$ROOT/apps/web/Dockerfile" \
  -t "$name:latest" \
  --build-arg GIT_COMMIT="$GIT_COMMIT" \
  "$ROOT"

echo "Stopping existing $name container (if any)..."
docker stop "$name" || true

echo "Removing existing $name container (if any)..."
docker rm "$name" || true

echo "Starting new $name container..."
docker run -d \
  --name "$name" \
  -p 3000:3000 \
  --restart unless-stopped \
  "$name:latest"

echo "Deployment completed successfully!"
echo "Container is running on port 3000"
