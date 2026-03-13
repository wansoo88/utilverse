# Architecture (Current)

## Product scope
- Framework: Next.js 14 App Router + TypeScript + Tailwind
- Deployment path: `/random-decision` (basePath enabled)
- Target URL: `https://utilverse.info/random-decision`
- Runtime style: hybrid static pages + client interactive tools
- DB/Auth: not used in this stage
- Language routes: `en`, `es`, `pt`, `ar`, `hi`, `tr`
- Theme: dark default + light toggle (sun/moon SVG with rotation animation)

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
- `lib/content/catalog.ts`: tool metadata (href, name, desc, image, badge, category, accentColor, bentoSize, icon)
- `lib/seo.ts`: metadata + structured data builders
- `lib/random.ts`: crypto-grade random helpers
- `lib/useLocalHistory.ts`: localStorage history hook
- `lib/confetti.ts`: canvas-confetti helpers (`burstConfetti`, `sideCannonConfetti`) — dynamic import, SSR-safe

## Motion system (Framer Motion)
패키지: `framer-motion` (~40KB gzip), `canvas-confetti` (~6KB gzip)

| 컴포넌트 | 경로 | 역할 |
|----------|------|------|
| `FadeIn` | `components/motion/FadeIn.tsx` | viewport 진입 시 fade + slide (방향 prop) |
| `ScaleIn` | `components/motion/ScaleIn.tsx` | scale 0.9→1 spring |
| `StaggerChildren` + `StaggerItem` | `components/motion/StaggerChildren.tsx` | 자식 순차 stagger |
| `Tilt3D` | `components/motion/Tilt3D.tsx` | 마우스 추적 perspective rotateX/Y |
| `ResultReveal` | `components/motion/ResultReveal.tsx` | 결과 bounce/slide/fade + AnimatePresence |

모든 motion 컴포넌트는 `useReducedMotion()` 훅으로 `prefers-reduced-motion` 대응.

## SEO and trust implementation
- Locale-aware canonical metadata via `generateMetadata`
- Tool structured data: `SoftwareApplication`, `FAQPage`
- Blog structured data: `ItemList`, `BlogPosting`, `BreadcrumbList`, `FAQPage`
- Tools hub structured data: `CollectionPage`, `ItemList`, `BreadcrumbList`
- Legal pages present and localized
- Internal linking: tool <-> blog related sections

## Ad model
- `AdSlot` component is env-gated — if `NEXT_PUBLIC_ADSENSE_CLIENT` is empty, dashed placeholder shown
- `adsbygoogle.js` 전역 1회 로드: `app/layout.tsx`에서 env-gated `<Script strategy="afterInteractive" />`
- 각 `AdSlot`은 `push({})` 초기화만 실행 (스크립트 중복 로드 방지)
- "ADVERTISEMENT" 레이블이 각 슬롯 상단에 표시 (AdSense 정책 준수)
- Slot `min-height` 포맷별 고정 (horizontal: 90px, rectangle: 250px, auto: 120px) — CLS 방지
- `public/ads.txt` 템플릿 존재 — 승인 후 publisher ID 입력 필요
- Ad slots: 홈(2개), 도구 페이지(3개), 블로그 상세(2개), 도구 허브(카테고리별)

## Tool UX pattern
- Core interaction pattern:
  - Input → Run animation (600~900ms) → Result (AnimatePresence)
  - Immediate rerun button next to result
  - Result state chip with color feedback + glow shadow

### 핵심 5개 도구 맞춤 애니메이션
| 도구 | 애니메이션 |
|------|-----------|
| Coin Flip | `perspective(800px) rotateY(1080deg)` 3D flip, Heads=금/Tails=은, Heads 시 confetti |
| Dice Roller | stagger 등장 + 주사위 아이콘, 합산 카운트, 전체 max 시 side cannon confetti |
| Spin the Wheel | Canvas conic-gradient 원형 휠, 2.5s easeOut 감속, pointer 고정, confetti |
| Yes/No | 극적인 bounce reveal, Yes=초록/No=빨강 glow, Yes 시 confetti |
| Random Number | 슬롯머신 stagger 등장, 스카이블루 카드 |

### 나머지 10개 도구
`AnimatePresence` + `motion` 결과 reveal (도구별 accent 색상 적용)

## Security and platform hardening
- `next.config.js`
  - `basePath: '/random-decision'`
  - `poweredByHeader: false`
  - `experimental.optimizePackageImports: ['framer-motion']`
  - security headers: CSP, XFO, Referrer-Policy, Permissions-Policy
  - dev-mode CSP includes `'unsafe-eval'` only for Next.js HMR compatibility

## UI architecture (Premium Fancy — 2026-03-08 v2)

### 디자인 시스템
- **배경**: animated mesh gradient (`meshShift` 30s keyframes, 3-point radial blend)
- **카드**: glassmorphism `saturate(180%) blur(12px)`, hover border glow
- **버튼**: `.btn-primary` glow shadow (`var(--glow-brand)`), active `scale(0.98)`
- **포커스**: 전역 `:focus-visible` outline ring (brand color)
- **Tailwind 확장**:
  - 15개 accent 색상 (`coin-gold`, `dice-purple`, `wheel-emerald` 등)
  - `glow-brand`, `glow-accent`, `card-hover` box-shadow
  - `bento: 24px` borderRadius
  - `float`, `shimmer`, `glow-pulse`, `scale-bounce`, `mesh-shift` animation

### 홈페이지 Bento Grid
- `app/[locale]/page.tsx` → Hero (FadeIn/ScaleIn) + Bento Grid + Blog (StaggerChildren)
- `components/home/BentoCard.tsx`: Tilt3D + accent gradient + badge + icon
- `catalog.ts` 확장: `accentColor`, `bentoSize('lg'|'md'|'sm')`, `icon` 필드 추가
- 반응형: 4열 → 2열 (980px) → 1열 (768px)

### Tools Hub
- `app/[locale]/tools/page.tsx` → 카테고리별 BentoCard + StaggerChildren

### 레이아웃 컴포넌트
- `Header.tsx`: 데스크톱 `hidden md:flex` nav + 모바일 `MobileNav` (AnimatePresence 슬라이드)
- `MobileNav.tsx`: 햄버거 SVG, 외부 클릭 닫힘
- `Footer.tsx`: glassmorphism, 링크 hover underline slide 효과
- `ThemeToggle.tsx`: sun/moon SVG + rotate transition

### 공통 컴포넌트
- `Skeleton.tsx`: shimmer 애니메이션 card/text/button variants
- `ShareButton.tsx`: Web Share API 공유, 미지원 시 URL 복사 fallback
- `CopyButton.tsx`: Clipboard API 텍스트 복사, 완료 피드백
- `FavoriteButton.tsx`: localStorage 즐겨찾기 토글 (star 아이콘)

### 훅
- `lib/useFavorites.ts`: 즐겨찾기 목록 localStorage 관리 (add/remove/isFavorite)

### RSS
- `app/rss.xml/route.ts`: RSS 2.0 피드 — 영어 블로그 포스트 전체 제공

### 이미지 전략
- local SVG assets in `public/media/*`
- animated SVG previews for coin/wheel/dice
- `catalog.ts` drives card images, badges, icons

## 접근성 (a11y)
- `:focus-visible` outline ring 전역 적용
- `aria-live="polite"` on 결과 요소 (CoinFlip 등)
- `aria-label` on 아이콘 전용 버튼 (ThemeToggle, MobileNav)
- `prefers-reduced-motion: reduce` → 모든 duration `0.01ms`, iteration `1`
- `useReducedMotion()` in 모든 Framer Motion 컴포넌트

## Legal & compliance
- Privacy Policy: 11개 섹션 (AdSense/DoubleClick 쿠키, opt-out 링크, GDPR, CCPA, 아동보호, 데이터보존) — 6개 언어
- Terms of Service: 6개 섹션 — 6개 언어
- About: 신뢰 통계 + 도구 목록 + 기술 투명성 — 6개 언어
- Contact: 실제 이메일(`hello@utilverse.info`) + mailto 링크 — 6개 언어
- CookieBanner: 최초 방문 시 하단 배너, Accept/Decline → localStorage, Privacy Policy 링크
- `html lang/dir`: 인라인 스크립트로 로케일별 즉시 설정 (`[locale]/layout.tsx`)

## Open operational tasks
### AdSense 제출 전 필수
- [ ] `public/ads.txt` 실제 publisher ID 입력 (`google.com, pub-XXXXXXXX, DIRECT, f08c47fec0942fa0`)
- [ ] `NEXT_PUBLIC_ADSENSE_CLIENT` 환경변수 실제 값 설정 후 재배포
- [ ] 실제 이메일 수신함(`hello@utilverse.info`) 운영 확인

### 배포 후 검증
- [ ] 프로덕션 CSP 헤더 + AdSense 도메인 허용 확인 (RISK-001)
- [ ] `https://utilverse.info/random-decision/en` 접근 및 basePath 에셋 확인 (RISK-002)
- [ ] RTL(`ar`) 레이아웃 정상 렌더링
- [ ] Lighthouse Performance 90+ 유지 (First Load JS < 60KB 추가 확인됨)
- [ ] 쿠키 배너 표시 및 consent 저장 확인

### 중기 검토
- Framer Motion dynamic import 전환으로 LCP 추가 최적화 (RISK-006)
- Google Funding Choices CMP 연동으로 GDPR non-personalized 광고 처리 강화 (RISK-005)
- 서브도메인(`random-decision.utilverse.info`) 전환 타당성 재검토 (ADR-09)
