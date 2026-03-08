# Decisions (ADR)

## ADR-2026-03-08-01: MVP stack for utility-first site
- Decision: Next.js 14 App Router + TypeScript + Tailwind
- Why: Fast delivery, strong SEO control, low operational overhead
- Impact: No DB/auth complexity in early phase

## ADR-2026-03-08-02: No DB/Auth in initial release
- Decision: Keep all tool logic client-side with localStorage history
- Why: Core product is random utility + content, not user accounts
- Impact: Faster release, simpler compliance, lower infrastructure cost

## ADR-2026-03-08-03: Locale routing for 6 languages
- Decision: `en/es/pt/ar/hi/tr` locale-prefixed paths
- Why: Broader market reach with consistent URL structure
- Impact: Legal pages and UI strings localized

## ADR-2026-03-08-04: Structured data strategy
- Decision: Add JSON-LD for tools/blog/faq/breadcrumb
- Why: Improve search understanding and rich result eligibility
- Impact: More metadata maintenance per page

## ADR-2026-03-08-05: AdSense integration strategy
- Decision: Env-gated `AdSlot` with placeholder fallback
- Why: Keep UX stable pre-approval and avoid accidental invalid ad setup
- Impact: Slot ids can be safely applied post-approval

## ADR-2026-03-08-06: Security header baseline
- Decision: Add CSP + key browser hardening headers in Next config
- Why: Reduce attack surface and align production readiness
- Impact: Ad/CSP domain allow-list must be updated when third-party scripts change

## ADR-2026-03-08-07: Randomness quality upgrade
- Decision: Move generators from `Math.random` to crypto-based helper (`lib/random.ts`)
- Why: Better fairness and trust claims for utility tools
- Impact: Consistent RNG behavior across all tools

## ADR-2026-03-08-08: Tool expansion to 15 routes
- Decision: Add 5 expansion tools to reach 15 total
- Why: SEO breadth + AdSense content depth + product completeness
- Impact: More QA and content maintenance

## ADR-2026-03-08-09: URL strategy (`/randomdecision`) validation
- Decision: Keep `https://utilverse.info/randomdecision` in current release
- Why: Fits multi-product domain strategy and avoids immediate domain migration
- Alternatives reviewed:
  - `https://randomdecision.utilverse.info` (clean separation, stronger app identity)
  - `https://utilverse.info/random` (shorter path)
- Recommendation:
  - Near term: keep `/randomdecision` for deployment speed
  - Mid term: evaluate subdomain if product scales independently