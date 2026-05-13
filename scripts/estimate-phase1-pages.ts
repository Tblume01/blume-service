/**
 * Estimate Phase 1 page count (keyword × service × city combinations)
 * Run with: npx ts-node scripts/estimate-phase1-pages.ts
 */

import { getPhase1PageCount, getPhase1PageParams } from '../data/keyword-service-matrix';
import { GEOGRAPHIC_DATA } from '../data/geographic-data';
import { SERVICE_CATEGORIES } from '../data/service-categories';
import { PHASE_1_KEYWORDS } from '../data/keyword-service-matrix';

async function main() {
  console.log('\n=== PHASE 1 PAGE ESTIMATION ===\n');

  // Count cities
  let totalCities = 0;
  for (const state of GEOGRAPHIC_DATA) {
    for (const county of state.counties) {
      totalCities += county.cities.length;
    }
  }

  // Count primary services
  const primaryServices = SERVICE_CATEGORIES.filter((s) => s.tier === 'primary');

  console.log(`📊 BASE METRICS:`);
  console.log(`  Keywords (Phase 1): ${PHASE_1_KEYWORDS.length}`);
  console.log(`  Cities: ${totalCities}`);
  console.log(`  Primary Services: ${primaryServices.length}`);
  console.log(`  Total Combinations: ${PHASE_1_KEYWORDS.length} × ${totalCities} × ${primaryServices.length} = ${PHASE_1_KEYWORDS.length * totalCities * primaryServices.length}`);

  console.log(`\n📈 ACTUAL PAGE COUNT (with smart filtering):`);
  const params = getPhase1PageParams();
  console.log(`  Pages to Generate: ${params.length.toLocaleString()}`);

  // Estimate build time
  const estimatedBuildTimePerPage = 2; // milliseconds
  const estimatedBuildTime = params.length * estimatedBuildTimePerPage;
  const buildTimeMinutes = Math.ceil(estimatedBuildTime / 1000 / 60);

  console.log(`\n⏱️ BUILD PERFORMANCE ESTIMATE:`);
  console.log(`  Estimated Build Time: ${buildTimeMinutes} minutes`);
  console.log(`  (based on ${estimatedBuildTimePerPage}ms per page)`);

  // Calculate storage estimate
  const avgPageSize = 15; // KB
  const totalSize = (params.length * avgPageSize) / 1024; // MB

  console.log(`\n💾 STORAGE ESTIMATE:`);
  console.log(`  Pages: ${params.length.toLocaleString()}`);
  console.log(`  Avg Size: ${avgPageSize}KB per page`);
  console.log(`  Total: ~${Math.ceil(totalSize)}MB HTML`);

  // Show breakdown by state
  console.log(`\n🗺️ BREAKDOWN BY STATE:`);
  for (const state of GEOGRAPHIC_DATA) {
    let statePageCount = 0;
    for (const county of state.counties) {
      statePageCount += county.cities.length;
    }
    const pageCount = params.filter((p) => p.state === state.slug).length;
    console.log(`  ${state.fullName}: ${statePageCount} cities → ${pageCount} pages`);
  }

  // Show service breakdown
  console.log(`\n🔧 BREAKDOWN BY SERVICE:`);
  for (const service of primaryServices) {
    const servicePageCount = params.filter((p) => p.service === service.slug).length;
    console.log(`  ${service.name}: ${servicePageCount} pages`);
  }

  console.log(`\n✅ PHASE 1 READY FOR DEPLOYMENT`);
  console.log(`   Run: npm run build`);
  console.log(`\n`);
}

main().catch(console.error);
