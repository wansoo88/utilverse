# Netlify 배포 가이드 (서브패스/루트 공용)

## 핵심 요약
이 프로젝트는 `NEXT_PUBLIC_BASE_PATH` 설정에 따라 루트(`/`) 또는 서브패스(`/random-decision`)로 배포됩니다.

예시:
- 루트 배포: `https://your-site.netlify.app/en`
- 서브패스 배포: `https://your-site.netlify.app/random-decision/en`

---

## 환경변수
Netlify UI 또는 `netlify.toml`에 다음을 설정합니다.

```
NEXT_PUBLIC_SITE_URL=https://utilverse.info
NEXT_PUBLIC_BASE_PATH=/random-decision
```

규칙:
- 루트 배포: `NEXT_PUBLIC_BASE_PATH` 비우기
- 서브패스 배포: `/random-decision` 설정

---

## Netlify 설정
- Build command: `npm run build`
- Publish directory: 비워둠 (Next.js runtime 사용)
- Node version: `20`

---

## 도메인 라우팅 주의사항
Netlify는 `/random-decision/*` 요청이 실제로 Netlify로 들어올 때만 정상 동작합니다.

### Case A: `utilverse.info` 자체가 Netlify에서 운영
- 도메인을 Netlify 사이트에 연결하면 `/random-decision/*`가 정상 동작합니다.

### Case B: `utilverse.info`가 다른 서버에서 운영
아래 경로가 Netlify로 프록시되어야 합니다.
- `/random-decision`
- `/random-decision/*`
- `/random-decision/_next/*`
- `/random-decision/robots.txt`
- `/random-decision/sitemap.xml`

프록시가 없으면 Netlify 배포가 정상이어도 브라우저에서 404가 발생합니다.

---

## 검증 체크리스트
- `https://<site>.netlify.app/en` (루트 배포)
- `https://<site>.netlify.app/random-decision/en` (서브패스 배포)
- `/sitemap.xml` 및 `/robots.txt` 정상 응답
- 정적 자산 404 없음
