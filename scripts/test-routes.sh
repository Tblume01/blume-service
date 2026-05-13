#!/bin/bash
# Test all routes against a live Blume deployment
# Usage: ./scripts/test-routes.sh [base-url]
# Example: ./scripts/test-routes.sh https://blume-psi.vercel.app

BASE_URL="${1:-https://blume-psi.vercel.app}"
ROUTES=(
  "/"
  "/about"
  "/contact"
  "/giving-back"
  "/hire-a-pro"
  "/commercial-ac-unit"
  "/emergency-air-conditioning-repair"
  "/ac-not-working"
  "/24-hour-ac-repair-near-me"
  "/areas-we-serve/belleair-bluffs-fl/ac-repair"
)

echo "🧪 Testing routes on: $BASE_URL"
echo ""
echo "Route Validation Report"
echo "======================"
echo ""

TOTAL=0
PASSED=0
FAILED=0

for route in "${ROUTES[@]}"; do
  TOTAL=$((TOTAL + 1))
  FULL_URL="${BASE_URL}${route}"

  # Use -I for HEAD request (headers only), -s for silent, -o /dev/null to discard body, -w to get status code
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$FULL_URL")

  if [ "$STATUS" = "200" ]; then
    echo "✅ $route ($STATUS)"
    PASSED=$((PASSED + 1))
  else
    echo "❌ $route ($STATUS)"
    FAILED=$((FAILED + 1))
  fi
done

echo ""
echo "Summary"
echo "======="
echo "Total routes tested: $TOTAL"
echo "Passed: $PASSED"
echo "Failed: $FAILED"
echo "Coverage: $(echo "scale=1; $PASSED * 100 / $TOTAL" | bc)%"
echo ""

if [ $FAILED -eq 0 ]; then
  echo "✅ All routes pass! Ready for production."
  exit 0
else
  echo "❌ $FAILED route(s) failing. Needs fix before deployment."
  exit 1
fi
