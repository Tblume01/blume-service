#!/usr/bin/env node
/**
 * Blume Route Validator
 * Scans app directory for all page.tsx files and validates they exist
 * Generates a report of expected routes vs actual implementations
 */

import fs from 'fs';
import path from 'path';

interface RouteInfo {
  path: string;
  exists: boolean;
  file: string;
}

function scanRoutes(dir: string, baseUrl: string = ''): RouteInfo[] {
  const routes: RouteInfo[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    // Skip certain directories
    if (['node_modules', '.next', '.git', 'public', 'data'].includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      // Handle route groups like (seo)
      let routePart = entry.name;
      if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
        // Skip route groups in path calculation
        routes.push(...scanRoutes(fullPath, baseUrl));
        continue;
      }

      const subRoutes = scanRoutes(fullPath, `${baseUrl}/${routePart}`);
      routes.push(...subRoutes);
    } else if (entry.name === 'page.tsx') {
      const routePath = baseUrl || '/';
      routes.push({
        path: routePath,
        exists: true,
        file: fullPath,
      });
    }
  }

  return routes;
}

async function validateRoutes() {
  const appDir = path.join(process.cwd(), 'app');

  if (!fs.existsSync(appDir)) {
    console.error('❌ App directory not found');
    process.exit(1);
  }

  console.log('🔍 Scanning routes...\n');

  const routes = scanRoutes(appDir);

  // Sort routes for consistency
  routes.sort((a, b) => a.path.localeCompare(b.path));

  // Expected routes (from navigation, etc)
  const expectedRoutes = [
    '/',
    '/about',
    '/contact',
    '/giving-back',
    '/hire-a-pro',
    '/commercial-ac-unit',
    '/emergency-air-conditioning-repair',
    '/ac-not-working',
    '/24-hour-ac-repair-near-me',
    '/areas-we-serve/belleair-bluffs-fl/ac-repair',
  ];

  // Check which expected routes exist
  const routeMap = new Map(routes.map(r => [r.path, r]));
  const results = {
    found: routes.length,
    expected: expectedRoutes.length,
    implemented: 0,
    missing: [] as string[],
  };

  console.log('📊 ROUTE STATUS REPORT\n');
  console.log('✅ IMPLEMENTED ROUTES:\n');

  for (const route of routes) {
    console.log(`   ${route.path}`);
    if (expectedRoutes.includes(route.path)) {
      results.implemented++;
    }
  }

  console.log('\n❌ MISSING ROUTES (Expected but not found):\n');

  for (const route of expectedRoutes) {
    if (!routeMap.has(route)) {
      console.log(`   ${route}`);
      results.missing.push(route);
    }
  }

  // Summary
  console.log('\n📈 SUMMARY:\n');
  console.log(`   Total routes scanned: ${routes.length}`);
  console.log(`   Critical routes found: ${results.implemented}/${results.expected}`);
  console.log(`   Missing critical routes: ${results.missing.length}`);
  console.log(`   Coverage: ${((results.implemented / results.expected) * 100).toFixed(1)}%\n`);

  if (results.missing.length > 0) {
    console.log(`⚠️  ACTION REQUIRED: Create ${results.missing.length} missing page.tsx file(s)\n`);
    process.exit(1);
  } else {
    console.log('✅ All critical routes implemented!\n');
    process.exit(0);
  }
}

validateRoutes().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
