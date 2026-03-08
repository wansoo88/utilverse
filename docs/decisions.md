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

## ADR-2026-03-08-09: URL strategy (`/random-decision`) validation
- Decision: Keep `https://utilverse.info/random-decision` in current release
- Why: Fits multi-product domain strategy and avoids immediate domain migration
- Alternatives reviewed:
  - `https://random-decision.utilverse.info` (clean separation, stronger app identity)
  - `https://utilverse.info/random` (shorter path)
- Recommendation:
  - Near term: keep `/random-decision` for deployment speed
  - Mid term: evaluate subdomain if product scales independently

## ADR-2026-03-08-10: Visual redesign with local media assets
- Decision: Replace generic layout with a custom hero/gallery system and local SVG media assets
- Why: Improve perceived quality, reduce "template/AI" feel, and keep performance predictable
- Impact:
  - added `public/media/*` design assets
  - introduced `lib/content/catalog.ts` to map tool cards to visuals/badges
  - updated home/tool shell/header/footer layout and interaction styles

## ADR-2026-03-08-11: CSP policy for development compatibility
- Decision: Allow `'unsafe-eval'` only in development `script-src` while keeping production CSP strict
- Why: Next.js React Refresh in dev requires eval; strict policy blocked local interaction testing
- Impact:
  - fixes local dev runtime failures (`ERR_CONNECTION_REFUSED` path resolved, HMR script execution restored)
  - production remains without `'unsafe-eval'` to maintain security baseline

## ADR-2026-03-08-12: Tools hub and category IA
- Decision: Add `/{locale}/tools` as category index (`random`, `picker`, `games`, `utility`)
- Why: Improve SEO crawl depth and utility-platform navigation model
- Impact:
  - new tools hub route and sitemap coverage
  - stronger internal link graph for tools

## ADR-2026-03-08-13: Mid-intensity ad policy with CLS guard
- Decision: Keep medium ad density and enforce slot min-height by ad format
- Why: Balance monetization with UX stability
- Impact:
  - home/tool/blog ads remain visible
  - reduced layout shift risk before/after ad fill

## ADR-2026-03-08-14: Playful-subtle core tool UX standard
- Decision: Standardize Coin/Dice/Wheel flows to input->run->result with rerun CTA
- Why: Match target users (students/streamers/friends) with clearer action loops
- Impact:
  - faster repeated interactions
  - consistent motion timing and result readability

## ADR-2026-03-08-15: Premium Fancy UI upgrade with Framer Motion
- Decision: Add Framer Motion + canvas-confetti, Bento Grid homepage, per-tool accent animations
- Why: Upgrade from "generic SaaS template" to premium feel for target audience
- Impact:
  - +~46KB bundle (framer-motion ~40KB + canvas-confetti ~6KB)
  - Bento Grid replaces flat tool gallery on homepage and tools hub
  - 5 core tools get bespoke animations (3D coin, stagger dice, canvas wheel, slot numbers, dramatic yes/no)
  - 10 remaining tools get AnimatePresence result reveal
  - MobileNav hamburger with AnimatePresence slide-down
  - ThemeToggle upgraded to sun/moon SVG with rotation
  - prefers-reduced-motion: all animations disabled
  - focus-visible rings added globally

## ADR-2026-03-08-16: AdSense compliance hardening
- Decision: Apply all Google AdSense policy requirements before submission
- Why: Prevent rejection due to missing legal content, incorrect technical setup, or policy gaps
- Changes applied:
  - `html lang` 동적화: `[locale]/layout.tsx`에서 인라인 스크립트로 `document.documentElement.lang/dir` 즉시 설정
  - `adsbygoogle.js` 전역 1회 로드: `app/layout.tsx`에서 env-gated Script, AdSlot은 `push({})` 만 실행
  - AdSlot에 "Advertisement" 레이블 추가 (일부 국가 정책 의무)
  - Privacy Policy 대폭 보강: AdSense/DoubleClick 명시, opt-out 링크, GDPR/CCPA 조항, 아동보호, 데이터보존 — 6개 언어 모두 적용
  - Contact 이메일 `hello@utilverse.info` 실제 값으로 교체, mailto 링크화
  - About 페이지 보강: 신뢰 통계 + 전체 도구 목록 + 기술 투명성 섹션
  - 쿠키 동의 배너(`CookieBanner.tsx`): 최초 방문 시 하단 고정 배너, Accept/Decline → localStorage 저장, Privacy Policy 링크
  - `public/ads.txt` 템플릿 생성 (승인 후 publisher ID 교체 안내)
- Remaining before submission:
  - `ads.txt`에 실제 publisher ID 입력
  - `NEXT_PUBLIC_ADSENSE_CLIENT` 환경변수 실제 값 설정
  - 실제 이메일 수신함 운영 확인
