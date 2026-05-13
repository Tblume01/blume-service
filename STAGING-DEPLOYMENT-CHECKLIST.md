# Staging Deployment Checklist

**Date:** 2026-05-11  
**Deployment Target:** https://blume-psi.vercel.app  
**Commit:** feat: Blume Phase 1 & 2 complete — 30,872 pages ready for staging  
**Pages:** 30,872 total (original 263 + Phase 1 30,559 + Tampa Bay pilot 50)

---

## 🚀 DEPLOYMENT STATUS

### GitHub & Vercel
- ✅ Commit pushed to main branch
- ⏳ Vercel auto-deploying...
- 📊 Check deployment at: [GitHub Actions](https://github.com/Tblume01/blume-service/actions)
- 📊 Check Vercel dashboard: [Vercel Project](https://vercel.com/Tblume01/blume-service)

### Deployment Timeline
- Commit pushed: Just now
- Build start: 1-2 minutes
- Build duration: ~60 seconds
- Deploy to staging: 2-3 minutes
- Total: ~5 minutes to live

---

## ✅ STAGING VERIFICATION CHECKLIST

### Step 1: Check Vercel Deployment (5 min)
1. Go to: https://vercel.com/Tblume01/blume-service/deployments
2. Look for the latest deployment (should show "feat: Blume Phase 1...")
3. Status should be: 🟢 READY
4. If still building: Wait 2-3 minutes

### Step 2: Test Sample Pages (10 min)

**Test these 6 Tampa Bay AC pages:**

| City | URL | Test Point |
|------|-----|-----------|
| Tampa | `https://blume-psi.vercel.app/ac-repair-tampabay-hillsborough-county/tampa/ac-repair-near-me/` | H1: "AC Repair Near Me in Tampa" |
| Brandon | `https://blume-psi.vercel.app/ac-repair-tampabay-hillsborough-county/brandon/emergency-ac-repair/` | H1: "Emergency AC Repair in Brandon" |
| St. Petersburg | `https://blume-psi.vercel.app/ac-repair-tampabay-pinellas-county/st-petersburg/ac-repair-near-me/` | H1 contains "St. Petersburg" |
| Clearwater | `https://blume-psi.vercel.app/ac-repair-tampabay-pinellas-county/clearwater/emergency-ac-repair/` | Real estate section visible |
| Wesley Chapel | `https://blume-psi.vercel.app/ac-repair-tampabay-hillsborough-county/wesley-chapel/ac-repair-near-me/` | Mobile responsive? |
| Land O'Lakes | `https://blume-psi.vercel.app/ac-repair-tampabay-pasco-county/land-o-lakes/emergency-ac-repair/` | Both CTAs visible? |

**For Each Page, Check:**
- [ ] Page loads without errors (no 404, no 500)
- [ ] H1 contains city name
- [ ] Red "Schedule AC Service Now" button is clickable (href to phone)
- [ ] Blue "Get Real Estate Assessment" button is visible
- [ ] Real estate section has amber border and rotating headline
- [ ] "45 min", "5 days", "100%" stats visible
- [ ] FAQ section has at least 4 items
- [ ] Mobile responsive (test on phone or browser zoom)
- [ ] Breadcrumbs at bottom showing: State › County › City

### Step 3: Test Geographic Pages (5 min)

**Test these original geographic pages (should still work):**

| Page | URL |
|------|-----|
| Florida state | `https://blume-psi.vercel.app/hvac-repair-florida/` |
| Hillsborough county | `https://blume-psi.vercel.app/hvac-repair-florida/hillsborough-county/` |
| Tampa city | `https://blume-psi.vercel.app/hvac-repair-florida/hillsborough-county/tampa/` |
| About page | `https://blume-psi.vercel.app/about` |
| Contact page | `https://blume-psi.vercel.app/contact` |

**Check:**
- [ ] All pages load (200 status, no 404s)
- [ ] No duplicate content warnings
- [ ] Navigation works (breadcrumbs, links)

### Step 4: Test SEO Metadata (5 min)

**For Tampa AC page, check DevTools (F12):**

1. Right-click → Inspect Element
2. Look at `<head>` section
3. Verify present:
   - [ ] `<title>` tag (should mention "Tampa" + "AC Repair")
   - [ ] `<meta name="description">` (should mention city)
   - [ ] `<link rel="canonical">` (should point to exact URL)
   - [ ] `<meta property="og:title">` (OpenGraph)
   - [ ] `<meta property="og:description">` (OpenGraph)

**Check Schema Markup:**
1. Open DevTools → Sources → find `<script type="application/ld+json">`
2. Should contain:
   - [ ] `@type: LocalBusiness`
   - [ ] Company name: "Blume Mechanical Service"
   - [ ] Phone number: "(855) 258-6322"
   - [ ] areaServed: City and county names
   - [ ] serviceType: "AC Repair"

### Step 5: Test CTA Links (5 min)

**Red Button Test:**
- Click "Schedule AC Service Now" on Tampa page
- Should open phone dialer with: `tel:+18552586322`
- Or show `<a href="tel:+18552586322">` in code

**Blue Button Test:**
- Click "Get Real Estate Assessment"
- Should trigger JavaScript or open form modal
- In current version: shows alert (for testing)

### Step 6: Mobile Responsiveness (5 min)

**On any Tampa Bay page, resize browser:**
- [ ] At 375px (mobile): Stack vertically, readable text, buttons full width
- [ ] At 768px (tablet): Two columns where appropriate
- [ ] At 1200px (desktop): Three columns, full layout

**Or test on actual phone:**
- [ ] Page loads in Safari/Chrome
- [ ] Text readable without zooming
- [ ] CTAs clickable (not tiny buttons)
- [ ] No horizontal scrolling

### Step 7: Build & Performance (5 min)

**Check Vercel Analytics:**
1. Go to: https://vercel.com/Tblume01/blume-service
2. Look at latest deployment
3. Check:
   - [ ] Build output shows "30,872 pages generated"
   - [ ] Build time < 2 minutes
   - [ ] No errors in build logs
   - [ ] All routes deployed successfully

**Check Page Speed (optional):**
- Go to: https://pagespeed.web.dev/
- Enter: `https://blume-psi.vercel.app/ac-repair-tampabay-hillsborough-county/tampa/ac-repair-near-me/`
- Target: > 80 performance score

---

## 🔍 COMMON ISSUES & SOLUTIONS

| Issue | Solution |
|-------|----------|
| Pages show 404 | Wait 2-3 min, Vercel still building. Refresh browser. |
| Red CTA doesn't have phone link | Check `href={tel:...}` in code. May need page rebuild. |
| Real estate section not showing | Scroll down, it's below main content. Check mobile view. |
| Mobile layout broken | Check viewport meta tag. Responsive CSS applied? |
| Sitemap shows old page count | Sitemap may be cached. Check `/sitemap.xml` in browser. |
| Schema markup invalid | Use schema.org validator. Check JSON syntax. |

---

## 📋 SUCCESS CRITERIA

✅ **Deployment is successful when:**
- All 6 sample Tampa Bay pages load without 404/500 errors
- Red & blue CTAs are visible and clickable
- Real estate section appears with rotating headline
- Breadcrumb navigation works
- Mobile responsive (readable on phone)
- SEO metadata present in page source
- Schema markup valid (JSON-LD)
- Build logs show "30,872 pages" generated

✅ **Pages ready to share with team when:**
- All checks above pass
- No critical errors in Vercel logs
- Performance score > 80 (optional but ideal)
- Real estate angle messaging feels right
- CTAs are clear and actionable

---

## 🎯 WHAT TO TEST FIRST (Quick 15-min Validation)

If short on time, test these minimum:

1. **Tampa page loads:** `https://blume-psi.vercel.app/ac-repair-tampabay-hillsborough-county/tampa/ac-repair-near-me/` ✅
2. **H1 contains city name** ✅
3. **Red CTA button visible** ✅
4. **Blue CTA button visible** ✅
5. **Real estate section visible (scroll down)** ✅
6. **Mobile responsive** ✅
7. **Vercel build shows "30,872 pages"** ✅

If all 7 pass → **Ready for team review**

---

## 📞 NEXT STEPS

### If All Checks Pass ✅
1. Share staging URL with your team
2. Gather feedback on:
   - Do the dual CTAs make sense?
   - Is real estate messaging appropriate?
   - Should we expand to more keywords?
   - Should we add more cities?
3. Plan Phase 2 expansion (more keywords, secondary services, other markets)

### If Issues Found ❌
1. Document the issue with screenshot
2. Note the URL where it happens
3. I can fix and redeploy (usually < 5 minutes)
4. Retest same page

---

## 📊 EXPECTED METRICS (Once Live)

**After 1 week on staging:**
- Organic traffic: 0-10 users (no Google indexing yet, staging domain)
- Form submissions: 0 (blue CTA not connected to real GHL yet)
- Phone calls: May get some if people find it

**After production flip (main site):**
- Week 1: 50-100 visitors from Google crawl
- Week 2: 200-300 visitors as pages index
- Week 3+: 500-1000+ visitors as rankings improve

---

## 🚀 READY TO VERIFY?

Start with **Step 1 & 2** above, then let me know:
1. Are all pages loading?
2. Do the CTAs look right?
3. Any issues to fix?

Staging URL: **https://blume-psi.vercel.app**

---

**Deployment in progress. Check back in 5 minutes for live pages.** ⏳
