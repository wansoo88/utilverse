# 의사결정 기록 (docs/decisions.md)
# 참조 방법: @docs/decisions.md
# ADR: Architecture Decision Record

## 작성 규칙
- DB 스키마 변경 시 반드시 ADR 추가
- 기술 스택 변경 시 반드시 ADR 추가
- 각 ADR은 번호 순서대로 추가

## ADR 템플릿
```
### ADR-[번호]: [제목]
- **날짜**: YYYY-MM-DD
- **상태**: 채택 | 검토중 | 폐기
- **결정**: 무엇을 결정했는가
- **이유**: 왜 이 결정을 했는가
- **대안**: 검토한 다른 옵션들
- **결과**: 이 결정의 영향 및 트레이드오프
```

---

## 채택된 의사결정

### ADR-001: Next.js App Router 선택
- **날짜**: 2025-01-01
- **상태**: 채택
- **결정**: Pages Router 대신 App Router 사용
- **이유**: Server Components 성능 최적화, React 18 최신 기능 활용, 미래 지향적 구조
- **대안**: Pages Router (더 많은 레퍼런스, 안정적)
- **결과**: Server/Client Component 구분 필요, 초기 학습 비용 있으나 장기적으로 유리

### ADR-002: Prisma ORM 선택
- **날짜**: 2025-01-01
- **상태**: 채택
- **결정**: 직접 SQL 대신 Prisma ORM 사용
- **이유**: TypeScript 타입 안전성, 마이그레이션 자동 관리, 우수한 DX
- **대안**: Drizzle ORM (더 가벼움), 직접 SQL (유연하지만 타입 없음)
- **결과**: 스키마 변경 시 마이그레이션 필수, 복잡한 쿼리는 raw SQL 사용

### ADR-003: NextAuth.js v5 선택
- **날짜**: 2025-01-01
- **상태**: 채택
- **결정**: 인증에 NextAuth.js v5 (Auth.js) 사용
- **이유**: Next.js 공식 통합, 소셜 로그인 지원, Edge Runtime 호환
- **대안**: Clerk (설정 간단하지만 유료), 직접 JWT 구현 (복잡)
- **결과**: 설정 복잡도 있으나 유연성 높음

### ADR-004: Zustand 상태관리 선택
- **날짜**: 2025-01-01
- **상태**: 채택
- **결정**: Redux 대신 Zustand 사용 (클라이언트 상태)
- **이유**: 보일러플레이트 최소화, 학습 곡선 낮음, TypeScript 친화적
- **대안**: Redux Toolkit (기능 많지만 복잡), Jotai (원자 단위 상태)
- **결과**: 간단한 전역 상태에 적합, 복잡한 상태는 TanStack Query 병행

---
<!-- 새로운 ADR은 이 아래에 추가 -->

## 2026-03-08 ADR: Plan-based MVP architecture
- Adopted Next.js 14 App Router + TypeScript + Tailwind as the baseline.
- Deferred DB, authentication, and server APIs for Phase 1 because tool behavior is client-local and content-driven.
- Added locale routing for six languages: en, es, pt, ar, hi, tr.
- Implemented five Phase 1 random tools with localStorage history.
- Added blog + legal pages to support AdSense and SEO readiness.
- Inserted ad placeholders only (no live ad network script yet).
## 2026-03-08 ADR: Production hardening pass
- Switched page metadata to `generateMetadata` for locale-specific canonical paths.
- Added `AdSlot` component with env-gated AdSense rendering and safe placeholder fallback.
- Expanded legal pages (about/contact/privacy/terms) for stronger policy and content-depth coverage.
- Added RTL direction handling for Arabic locale at layout boundary.
## 2026-03-08 ADR: AdSense hardening follow-up
- Replaced tool randomness to use `crypto.getRandomValues`-based helper (`lib/random.ts`) across all generators.
- Expanded total tools to 15 by adding: random food picker, random date generator, lottery number generator, baby name generator, and icebreaker question generator.
- Expanded legal pages to multi-language bundles (en/es/pt/ar/hi/tr) via `lib/content/legal.ts`.
- Renamed document: `docs/2026_adsense_startegy.md` -> `docs/2026_adsense_strategy.md`.
