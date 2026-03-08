# Bugs and Risks

## Active issues
- None confirmed from runtime testing in this environment.

## Known operational risks

### RISK-001: CSP incompatibility after real AdSense activation
- Symptom: Ads fail to render or console CSP errors.
- Cause: Missing script/frame/connect domains in CSP allow-list.
- Mitigation: Validate console/network after enabling real `NEXT_PUBLIC_ADSENSE_CLIENT` and update CSP domains conservatively.

### RISK-002: basePath deployment mismatch
- Symptom: 404 or broken static assets under production path.
- Cause: Hosting/reverse-proxy strips or misroutes `/random-decision`.
- Mitigation: Verify final URL, static assets, and metadata routes under `/random-decision` on Vercel preview and production.

### RISK-004: ads.txt publisher ID 미입력
- Symptom: AdSense 대시보드에서 "ads.txt 파일 없음" 경고, 수익 감소.
- Cause: `public/ads.txt`가 템플릿 상태로 배포됨.
- Mitigation: AdSense 승인 직후 `public/ads.txt`에 실제 publisher ID 입력 후 재배포.

### RISK-005: 쿠키 동의 없이 개인화 광고 노출 (GDPR)
- Symptom: EU 트래픽에서 동의 없는 행동 기반 광고 제공 → 정책 위반.
- Cause: CookieBanner가 존재하나 실제 AdSense 광고 노출 억제 로직 미연결.
- Mitigation: 필요 시 Google Funding Choices CMP 연동하거나, `declined` 상태에서는 non-personalized 광고 파라미터(`data-adsbygoogle-status`) 추가 검토.

### RISK-006: Framer Motion 번들 증가로 인한 LCP 영향
- Symptom: First Load JS 증가 (~87KB shared), 저사양 모바일에서 LCP 지연.
- Cause: framer-motion은 트리 쉐이킹이 제한적.
- Mitigation: `experimental.optimizePackageImports: ['framer-motion']` 적용 완료. 추가로 애니메이션 컴포넌트 `dynamic import` 전환 검토.

## Resolved bugs

### FIX-001: Non-crypto RNG in tools
- Date: 2026-03-08
- Resolution: Implemented `lib/random.ts` and migrated all generator tools to crypto-based RNG.

### FIX-002: Ads/SEO setup lacked production docs
- Date: 2026-03-08
- Resolution: Added deployment guides (`deploy-vercel.md`, `deploy-ec2.md`) and consolidated architecture/decision docs.

### FIX-003: html lang 하드코딩 (AdSense 정책 신호 약화)
- Date: 2026-03-08
- Resolution: `[locale]/layout.tsx`에 인라인 스크립트로 `document.documentElement.lang/dir` 즉시 설정. 각 로케일 방문 시 `<html lang>` 이 정확히 반영됨.

### FIX-004: Contact 이메일 플레이스홀더
- Date: 2026-03-08
- Resolution: `legal.ts`에 `contactEmail` 필드 추가, `contact/page.tsx`에서 실제 이메일(`hello@utilverse.info`) 표시 및 mailto 링크화. RISK-003 해소.

### FIX-005: Privacy Policy AdSense 요건 미충족
- Date: 2026-03-08
- Resolution: `legal.ts` Privacy Policy를 3개→11개 섹션으로 확장. AdSense/DoubleClick 쿠키 명시, opt-out 링크, GDPR/CCPA/아동보호/데이터보존 조항 추가. 6개 언어 모두 반영.

### FIX-006: adsbygoogle.js 슬롯마다 중복 로드
- Date: 2026-03-08
- Resolution: `adsbygoogle.js` Script를 `app/layout.tsx`로 이동해 전역 1회 로드. `AdSlot` 컴포넌트는 `push({})` 초기화만 담당.

### FIX-007: 광고 레이블 누락
- Date: 2026-03-08
- Resolution: `AdSlot.tsx` 상단에 "ADVERTISEMENT" 텍스트 추가.

### FIX-008: 쿠키 동의 배너 부재
- Date: 2026-03-08
- Resolution: `CookieBanner.tsx` 생성. 최초 방문 시 하단 고정 배너 표시, Accept/Decline 선택을 localStorage에 저장, Privacy Policy 링크 포함.

### FIX-009: About 페이지 콘텐츠 부족
- Date: 2026-03-08
- Resolution: `about/page.tsx` 재작성. 신뢰 통계(4개), 전체 도구 링크 목록, 기술 투명성(RNG·localStorage·광고 정책) 섹션 추가. `legal.ts` About 단락도 5개로 확장.
