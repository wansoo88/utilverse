# Handoff Notes (for Claude)

Last updated: 2026-03-08  
Current branch: `dev`  
Latest commit: `382e797` (`feat: redesign UX, add tools hub, and strengthen SEO/ad layout`)

## 1) Project snapshot
- Project: multilingual random decision tools site
- Framework: Next.js 14 (App Router) + TypeScript + Tailwind
- Base path: `/random-decision`
- Target URL: `https://utilverse.info/random-decision`
- Locales: `en`, `es`, `pt`, `ar`, `hi`, `tr`
- Theme: dark default + light toggle

## 2) Major implementation completed
- Core + expansion tools implemented (15 total):
  - Coin Flip, Dice Roller, Spin the Wheel, Yes/No, Random Number
  - Random Name Picker, Team Generator, Random Letter, Random Color, Countdown Timer
  - Random Food Picker, Random Date Generator, Lottery Number, Baby Name, Icebreaker
- RNG quality update:
  - centralized random helpers in `lib/random.ts`
  - primary: `crypto.getRandomValues()`, fallback: `Math.random()`
- Local history:
  - tool histories stored via `lib/useLocalHistory.ts`
  - localStorage safety guards added

## 3) UX/Design direction applied
- Direction locked from user:
  - `Playful + Subtle motion + Large CTA`
  - target users: students / streamers / friend groups
- Implemented:
  - hero-first homepage with fixed top 3 spotlight tools
  - illustration-based tool cards (`public/media/*.svg`)
  - subtle motion (hover + hero float + coin spin)
  - CTA touch size strengthened (mobile-friendly min height)
  - Coin/Dice/Wheel standardized to:
    - input -> run animation (400~800ms) -> result
    - rerun button placed beside result
    - result color feedback chips

## 4) Information architecture / SEO
- Added tools index hub:
  - route: `/{locale}/tools`
  - categories: `random`, `picker`, `games`, `utility`
- Structured data expanded:
  - existing: `SoftwareApplication`, `FAQPage`, blog schemas
  - added: `CollectionPage`, `ItemList`, `BreadcrumbList`
- Internal linking strengthened:
  - tool pages: related tools 6 + related posts 3
  - blog detail: tool CTA blocks inserted at top and mid-content
- Sitemap updated to include `/tools`.

## 5) Ads / security
- Ad model:
  - env-gated ads (`NEXT_PUBLIC_ADSENSE_CLIENT`)
  - placeholder fallback when not configured
  - medium density placement pattern
  - CLS mitigation: ad container min-height by format in `AdSlot`
- Security:
  - CSP + security headers in `next.config.js`
  - dev-only `'unsafe-eval'` allowed for Next.js HMR
  - production CSP remains strict

## 6) Key files changed (high-impact)
- Layout/UI:
  - `app/[locale]/page.tsx`
  - `app/[locale]/tools/page.tsx` (new)
  - `app/globals.css`
  - `components/layout/Header.tsx`
  - `components/layout/Footer.tsx`
  - `components/layout/ToolPageShell.tsx`
- Tool UX:
  - `components/tools/CoinFlipTool.tsx`
  - `components/tools/DiceRollerTool.tsx`
  - `components/tools/SpinWheelTool.tsx`
- Content/SEO:
  - `lib/content/catalog.ts` (new)
  - `lib/content/blog.ts`
  - `lib/seo.ts`
  - `app/sitemap.ts`
- Ads/security/runtime:
  - `components/common/AdSlot.tsx`
  - `next.config.js`
  - `lib/random.ts`
  - `lib/useLocalHistory.ts`

## 7) Docs updated
- `docs/plan.md`
- `docs/architecture.md`
- `docs/decisions.md`
- `docs/deployment-guide.md`
- `docs/design-benchmark.md` (new)

## 8) Git / branch status
- Pushed to remote: `origin/dev` up to `382e797`
- Local branches:
  - `dev` (current)
  - `master` (local only, not pushed by request)
- Working tree note:
  - untracked local build artifact exists: `tsconfig.tsbuildinfo` (intentionally not committed)

## 9) Run/verify
- Install: `npm install` (or `pnpm install`)
- Dev: `npm run dev`
- Build: `npm run build` (currently passes)
- Local URL with basePath:
  - `http://localhost:3000/random-decision/en`

## 10) Remaining tasks for Claude (recommended order)
1. Final visual polish pass on non-spotlight tool cards (some still use generic illustration asset).
2. Add/verify per-tool OG image strategy.
3. Fill real operational contact email in localized contact/legal content.
4. When ready:
   - set real `NEXT_PUBLIC_ADSENSE_CLIENT`
   - replace placeholder slot IDs
   - add `ads.txt`
5. Run Vercel preview smoke test using `docs/deployment-guide.md`.
