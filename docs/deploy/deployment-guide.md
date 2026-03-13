# Deployment Guide (Vercel) for utilverse.info/random-decision

## 1) Branch and preview flow
- Active development branch: `dev`
- Create Vercel project from repository
- Use `dev` preview deployments for validation first
- Promote to production branch after checklist pass

## 2) Environment variables
Set in Vercel Project Settings -> Environment Variables:
- `NEXT_PUBLIC_SITE_URL=https://utilverse.info/random-decision`
- `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx` (keep placeholder until activation)

## 3) Build/runtime config
- Framework preset: Next.js
- Build command: `pnpm build`
- Install command: `pnpm install`
- Output: Next.js default

## 4) URL and basePath requirements
This project uses `basePath: /random-decision`.
Required behavior:
- Home: `https://utilverse.info/random-decision/en`
- Tools hub: `https://utilverse.info/random-decision/en/tools`
- Tool sample: `https://utilverse.info/random-decision/en/coin-flip`
- Blog sample: `https://utilverse.info/random-decision/en/blog/how-to-make-decisions`
- Metadata routes:
  - `https://utilverse.info/random-decision/sitemap.xml`
  - `https://utilverse.info/random-decision/robots.txt`

## 5) Security headers
Configured in `next.config.js`:
- CSP
- Referrer-Policy
- X-Content-Type-Options
- X-Frame-Options
- Permissions-Policy
- Cross-Origin-Opener-Policy

## 6) Requested #1: Post-deploy URL smoke test checklist
Run this immediately on Vercel preview and again on production.

### 6.1 Core route checks
1. `/random-decision/en` opens without 404
2. One route from each tool phase works:
   - `/random-decision/en/coin-flip`
   - `/random-decision/en/random-name-picker`
   - `/random-decision/en/random-food-picker`
3. Tools hub route works:
   - `/random-decision/en/tools`
4. Blog routes resolve:
   - `/random-decision/en/blog`
   - one slug detail page
5. Legal routes resolve:
   - `/random-decision/en/about`
   - `/random-decision/en/contact`
   - `/random-decision/en/privacy-policy`
   - `/random-decision/en/terms-of-service`

### 6.2 Locale and UI checks
1. Locale switcher works for `en/es/pt/ar/hi/tr`
2. Arabic pages render RTL (`dir=rtl`)
3. Theme toggle works and persists
4. At least 5 tools generate valid outputs

### 6.3 SEO route checks
1. `/random-decision/sitemap.xml` returns 200
2. `/random-decision/robots.txt` returns 200
3. Canonical links include `/random-decision`

### 6.4 Reliability checks
1. No broken static assets (JS/CSS/IMG 404)
2. Browser console has no uncaught runtime error
3. Contact page no placeholder mailbox before AdSense submission

## 7) Requested #2: CSP error triage and patch guide
Use this when ads or analytics fail due to CSP.

### 7.1 Detect
1. Open browser DevTools -> Console
2. Filter by `Content Security Policy`
3. Identify blocked URL and directive (`script-src`, `frame-src`, `connect-src`, etc.)

### 7.2 Classify
- Ad script blocked -> `script-src`
- Ad iframe blocked -> `frame-src`
- Tracking/beacon blocked -> `connect-src`
- Image asset blocked -> `img-src`

### 7.3 Patch safely
1. Edit only required directive in `next.config.js`
2. Add exact domain (avoid wildcard overreach)
3. Redeploy preview
4. Re-test blocked path only
5. Re-check full page for regressions

### 7.4 Typical AdSense domains to verify
- `https://pagead2.googlesyndication.com`
- `https://googleads.g.doubleclick.net`
- `https://tpc.googlesyndication.com`
- `https://www.googletagmanager.com`

### 7.5 Don’t
- Do not set `script-src *`
- Do not remove `object-src 'none'`
- Do not disable CSP globally to fix one integration issue

## 8) AdSense activation checklist (later)
1. Set real `NEXT_PUBLIC_ADSENSE_CLIENT`
2. Replace slot IDs in:
   - `components/layout/ToolPageShell.tsx`
   - `app/[locale]/page.tsx`
   - `app/[locale]/blog/[slug]/page.tsx`
3. Add `ads.txt` after publisher ID issuance
4. Validate ad load + CLS stability

## 9) URL strategy note
Current path `utilverse.info/random-decision` is valid and production-ready.
Alternative (`random-decision.utilverse.info`) is optional for future brand separation.
