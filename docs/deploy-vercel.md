# Vercel 배포 가이드

## 사전 준비

### 1. 계정 및 레포지토리
- [ ] GitHub/GitLab/Bitbucket 레포지토리에 코드 푸시 완료
- [ ] [vercel.com](https://vercel.com) 계정 생성 (GitHub 연동 권장)

### 2. 환경변수 준비
`.env.example` 기준으로 실제 값 준비:

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_BASE_URL=https://utilverse.info
```

> AdSense 승인 전에는 `NEXT_PUBLIC_ADSENSE_CLIENT` 를 비워두면 placeholder가 표시됨 (env-gated 설계)

---

## 배포 절차

### Step 1. Vercel 프로젝트 생성

1. Vercel 대시보드 → **Add New Project**
2. GitHub 레포지토리 Import
3. Framework Preset: **Next.js** (자동 감지됨)
4. Root Directory: 기본값 유지 (프로젝트 루트)

### Step 2. 빌드 설정 확인

| 항목 | 값 |
|------|-----|
| Framework | Next.js |
| Build Command | `npm run build` (또는 `pnpm build`) |
| Output Directory | `.next` (자동) |
| Install Command | `npm install` |
| Node.js Version | 20.x |

### Step 3. 환경변수 입력

Vercel 대시보드 → Settings → Environment Variables:

```
NEXT_PUBLIC_ADSENSE_CLIENT   =  ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_BASE_URL         =  https://utilverse.info
```

> `NEXT_PUBLIC_*` 변수는 브라우저에 노출됨 — 민감 정보 절대 금지

### Step 4. 도메인 설정

#### 서브 경로 운영 (`utilverse.info/random-decision`)
1. Vercel 도메인 탭 → `utilverse.info` 추가
2. DNS 공급자에서 CNAME/A 레코드 설정:
   ```
   A     @    76.76.19.61
   CNAME www  cname.vercel-dns.com
   ```
3. `next.config.js`의 `basePath: '/random-decision'` 유지
4. 메인 도메인(`utilverse.info`)의 루트 처리는 별도 서비스 또는 Vercel Rewrites로 처리

#### 서브도메인 운영 (`random-decision.utilverse.info`) — 선택
1. DNS: `CNAME random-decision cname.vercel-dns.com`
2. Vercel 도메인에 `random-decision.utilverse.info` 추가
3. `next.config.js` `basePath` 제거

### Step 5. 배포 실행

```bash
# 자동: main 브랜치 푸시 시 자동 배포
git push origin main

# 수동: Vercel CLI
npx vercel --prod
```

---

## 배포 후 검증 체크리스트

### 필수
- [ ] `https://utilverse.info/random-decision/en` 접근 확인
- [ ] 정적 에셋 로드 확인 (`/random-decision/_next/static/...`)
- [ ] `/random-decision/sitemap.xml` 응답 확인
- [ ] `/random-decision/robots.txt` 응답 확인
- [ ] 6개 로케일 페이지 정상 렌더링 (`en`, `es`, `pt`, `ar`, `hi`, `tr`)
- [ ] RTL 로케일(`ar`) 레이아웃 확인

### 보안 헤더
브라우저 DevTools → Network → 응답 헤더에서 확인:
- [ ] `Content-Security-Policy` 존재
- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`

### 기능
- [ ] Coin Flip 3D 애니메이션 작동
- [ ] Confetti 발사 확인
- [ ] 다크/라이트 테마 전환
- [ ] 모바일 햄버거 메뉴 작동

### AdSense (승인 후)
- [ ] `NEXT_PUBLIC_ADSENSE_CLIENT` 실제 값으로 교체 → 재배포
- [ ] 콘솔 CSP 에러 없음 확인
- [ ] `ads.txt` 파일 `public/ads.txt`에 추가 후 재배포

---

## Vercel 특화 기능 활용

### Preview 배포
- PR/브랜치 푸시 시 자동으로 Preview URL 생성
- 프로덕션 배포 전 검증에 활용

### Edge Config / KV (선택)
- 현 단계에서는 불필요 (DB 미사용)

### Analytics (선택)
```bash
npm install @vercel/analytics
```
`app/layout.tsx`에 `<Analytics />` 추가

---

## 롤백 방법

Vercel 대시보드 → Deployments → 이전 배포 선택 → **Promote to Production**

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| 정적 파일 404 | basePath 미반영 | `next.config.js` `basePath` 확인 |
| CSP 에러 (AdSense) | CSP allow-list 미포함 도메인 | `next.config.js` CSP 도메인 추가 후 재배포 |
| 빌드 실패 | Node 버전 불일치 | Vercel Settings → Node.js Version → 20.x |
| 환경변수 미반영 | 재배포 안 함 | 환경변수 저장 후 **Redeploy** 실행 |
| 로케일 404 | `isLocale` 체크 실패 | `lib/i18n.ts` LOCALES 배열 확인 |
