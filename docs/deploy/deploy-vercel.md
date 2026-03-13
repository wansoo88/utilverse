# Vercel 배포 가이드

## 사전 준비

### 1. 계정 및 리포지토리
- GitHub/GitLab/Bitbucket 리포지토리에 코드가 푸시되어 있어야 합니다.
- Vercel 계정을 생성하고 리포지토리를 연결합니다.

### 2. 환경변수 준비
`.env.example` 기준으로 아래 변수를 준비합니다.

```
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://utilverse.info
NEXT_PUBLIC_BASE_PATH=
```

`NEXT_PUBLIC_BASE_PATH`는 다음 규칙입니다.
- 루트 배포: 빈 값(또는 미설정)
- 서브패스 배포: `/random-decision`처럼 슬래시 포함 값

---

## 배포 절차

### Step 1. Vercel 프로젝트 생성
1. Vercel 대시보드에서 **Add New Project**
2. 리포지토리 Import
3. Framework Preset: **Next.js**
4. Root Directory: 프로젝트 루트

### Step 2. 빌드 설정 확인

| 항목 | 값 |
|------|-----|
| Framework | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 20.x |

### Step 3. 환경변수 입력
Vercel Settings -> Environment Variables:

```
NEXT_PUBLIC_ADSENSE_CLIENT   =  ca-pub-XXXXXXXXXXXXXXXXX
NEXT_PUBLIC_SITE_URL         =  https://utilverse.info
NEXT_PUBLIC_BASE_PATH        =  
```

> `NEXT_PUBLIC_BASE_PATH`가 비어 있으면 루트(`/`)로 배포됩니다.

---

## 도메인 구성

### A. 서브패스 운영 (`utilverse.info/random-decision`)
1. Vercel 도메인에 `utilverse.info` 추가
2. DNS 설정
   ```
   A     @    76.76.19.61
   CNAME www  cname.vercel-dns.com
   ```
3. 환경변수 `NEXT_PUBLIC_BASE_PATH=/random-decision` 설정
4. 배포 후 접속 예시
   - `https://utilverse.info/random-decision/en`

### B. 루트 또는 서브도메인 운영
- 루트(`/`)로 운영하려면 `NEXT_PUBLIC_BASE_PATH` 비우기
- 서브도메인 운영 시 예시:
  - `random-decision.utilverse.info`로 도메인 추가
  - `NEXT_PUBLIC_BASE_PATH` 비우기

---

## 배포 실행

```bash
git push origin main

# 또는 Vercel CLI
npx vercel --prod
```

---

## 배포 후 체크리스트

- `/en` 페이지 정상 동작 (루트 또는 `/random-decision/en`)
- 정적 자산 경로 404 없음 (`/_next/static/...`)
- `/sitemap.xml`, `/robots.txt` 정상 응답
- 로케일 전환(`en/es/pt/ar/hi/tr`) 정상
- RTL(`ar`) 레이아웃 정상

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| 루트 접속 시 404 | basePath 설정이 있는데 `/`로 접속 | `NEXT_PUBLIC_BASE_PATH`를 비우거나 접속 경로를 `/random-decision/...`로 변경 |
| 정적 자산 404 | basePath/도메인 설정 불일치 | `NEXT_PUBLIC_SITE_URL`과 `NEXT_PUBLIC_BASE_PATH` 재확인 후 재배포 |
| 배포는 되는데 도메인 경로만 404 | DNS 또는 라우팅 미설정 | 도메인/프록시 설정 재확인 |
