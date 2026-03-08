# Deployment Guide (Vercel) for utilverse.info/randomdecision

## 1) Branch and preview flow
- Active development branch: `dev`
- Create Vercel project from repository
- Set production branch policy as desired (`master` later)
- Use `dev` preview deployments for smoke tests first

## 2) Environment variables
Set in Vercel Project Settings -> Environment Variables:
- `NEXT_PUBLIC_SITE_URL=https://utilverse.info/randomdecision`
- `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx` (leave placeholder until real activation)

## 3) Build and runtime
- Framework preset: Next.js
- Build command: `pnpm build`
- Install command: `pnpm install`
- Output: default Next.js output

## 4) URL and basePath requirements
This project uses `basePath: /randomdecision`.
Required final behavior:
- Home: `https://utilverse.info/randomdecision/en`
- Tool sample: `https://utilverse.info/randomdecision/en/coin-flip`
- Blog sample: `https://utilverse.info/randomdecision/en/blog/how-to-make-decisions`
- Metadata routes:
  - `https://utilverse.info/randomdecision/sitemap.xml`
  - `https://utilverse.info/randomdecision/robots.txt`

## 5) Security headers
Configured in `next.config.js`:
- CSP
- Referrer-Policy
- X-Content-Type-Options
- X-Frame-Options
- Permissions-Policy
- Cross-Origin-Opener-Policy

After enabling real AdSense, re-check CSP console errors and adjust allow-list if needed.

## 6) Pre-release smoke checklist
1. Route checks under `/randomdecision`
2. Locale checks: `en/es/pt/ar/hi/tr`
3. Arabic pages render RTL correctly
4. 15 tools load and generate results
5. Sitemap and robots resolve
6. No blocking CSP errors in browser console
7. Contact email placeholder replaced with real mailbox before submission

## 7) AdSense activation checklist (later)
1. Set real `NEXT_PUBLIC_ADSENSE_CLIENT`
2. Replace slot ids in:
   - `components/layout/ToolPageShell.tsx`
   - `app/[locale]/page.tsx`
   - `app/[locale]/blog/[slug]/page.tsx`
3. Add `ads.txt` at root when publisher id is finalized
4. Verify ad loading + CLS stability

## 8) URL strategy validation note
Current path `utilverse.info/randomdecision` is valid and production-ready.
Better branding alternative exists (`randomdecision.utilverse.info`) but is optional and can be postponed.