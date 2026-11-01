#!/usr/bin/env bash
# Deploys the committed `demo` branch to the mint-choc-media Vercel project (Vercel runs the build).
set -euo pipefail
cd "$(dirname "$0")/.."

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
git archive demo | tar -x -C "$tmp"
# Brand-pack sources (~50 MB of .ai/.pdf); the site uses its own copies in src/assets.
rm -rf "$tmp/Logo"

cd "$tmp"
VERCEL_ORG_ID=team_nsrg9VmzXtGKUOUdreruF2q8 VERCEL_PROJECT_ID=prj_im5HZIVTVV4Qq4ToNo6caJvC9045 \
  vercel deploy --prod --yes
