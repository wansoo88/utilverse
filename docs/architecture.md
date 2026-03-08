# Architecture (Current)

## Product scope
- Framework: Next.js 14 App Router + TypeScript + Tailwind
- Deployment path: `/random-decision` (basePath enabled)
- Target URL: `https://utilverse.info/random-decision`
- Runtime style: hybrid static pages + client interactive tools
- DB/Auth: not used in this stage
- Language routes: `en`, `es`, `pt`, `ar`, `hi`, `tr`
- Theme: dark default + light toggle

## Tool inventory (15)
Phase 1:
- Coin Flip
- Dice Roller
- Spin the Wheel
- Yes/No Generator
- Random Number Generator

Phase 2:
- Random Name Picker
- Team Generator
- Random Letter Generator
- Random Color Generator
- Countdown Timer + Random

Expansion:
- Random Food Picker
- Random Date Generator
- Lottery Number Generator
- Baby Name Generator
- Icebreaker Question Generator

## Randomness model
- All generators use `lib/random.ts`
- Primary source: `crypto.getRandomValues()` with rejection sampling for uniform integer generation
- Fallback: `Math.random()` only if crypto is unavailable

## Route map
- `/{locale}`
- `/{locale}/tools`
- `/{locale}/[tool-slug]` (15 tool routes)
- `/{locale}/blog`
- `/{locale}/blog/{slug}`
- `/{locale}/about`
- `/{locale}/contact`
- `/{locale}/privacy-policy`
- `/{locale}/terms-of-service`
- `/sitemap.xml`
- `/robots.txt`

## Core modules
- `lib/i18n.ts`: locale and dictionary
- `lib/content/tools.ts`: tool page long-form content + FAQ
- `lib/content/blog.ts`: blog content + related links helpers
- `lib/content/legal.ts`: multilingual legal page bundle
- `lib/seo.ts`: metadata + structured data builders
- `lib/random.ts`: crypto-grade random helpers
- `lib/useLocalHistory.ts`: localStorage history hook

## SEO and trust implementation
- Locale-aware canonical metadata via `generateMetadata`
- Tool structured data: `SoftwareApplication`, `FAQPage`
- Blog structured data: `ItemList`, `BlogPosting`, `BreadcrumbList`, `FAQPage`
- Tools hub structured data: `CollectionPage`, `ItemList`, `BreadcrumbList`
- Legal pages present and localized
- Internal linking: tool <-> blog related sections

## Ad model
- `AdSlot` component is env-gated
- If `NEXT_PUBLIC_ADSENSE_CLIENT` is empty, safe placeholder is shown
- Ad slots pre-positioned in tool pages, homepage, and blog detail pages
- Slot container min-height is fixed per format to reduce CLS

## Tool UX pattern (2026-03-08 update)
- Core interaction pattern for Coin/Dice/Wheel:
  - Input -> Run animation (400~800ms) -> Result
  - Immediate rerun button next to result
  - Result state chip with color feedback

## Security and platform hardening
- `next.config.js`
  - `basePath: '/random-decision'`
  - `poweredByHeader: false`
  - security headers including CSP, XFO, Referrer-Policy, Permissions-Policy
  - dev-mode CSP includes `'unsafe-eval'` only for Next.js HMR compatibility

## UI architecture refresh (2026-03-08)
- New visual system:
  - display/body font split via `next/font` (`Space Grotesk` + `DM Sans`)
  - dark-first gradient background with clean light theme fallback
  - stronger card hierarchy (`hero`, `tool-card`, `post-card`, `tool-shell`)
- Image strategy:
  - local SVG assets in `public/media/*` (no external hotlink dependency)
  - animated SVG previews for coin/wheel/dice style interactions
  - tool catalog metadata (`lib/content/catalog.ts`) drives card images and badges
- Home information architecture:
  - Hero -> featured tools gallery -> blog guides
  - compact trust stats (tool count, language count, client-side random model)
- Tool page architecture:
  - top hero split (content + visual media)
  - preserved long-form SEO blocks (How to Use / Features / Use Cases / Tips / FAQ)

## Open operational tasks
- Set real AdSense client + slot ids after account approval
- Add `ads.txt` after publisher id finalization
- Run production smoke test (`pnpm build`, route checks, CSP checks)
