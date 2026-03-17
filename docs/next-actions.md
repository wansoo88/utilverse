# 이후 할 일 (Next Actions)

> 최종 업데이트: 2026-03-17
> 현재 브랜치: `claude/fix-tools-eof-error-KoXO6`

---

## 즉시 (배포 전)

### ✅ 완료된 작업
- [x] 16개 변형 페이지 데이터 정의 (`lib/content/variants.ts`)
- [x] 도구 컴포넌트 initialConfig props 추가 (DiceRoller, RandomNumber, CoinFlip, NamePicker)
- [x] `app/[locale]/[toolSlug]/[variant]/page.tsx` — 96개 정적 페이지 생성
- [x] `ToolPageShell` — "Try These Variations" 섹션 추가
- [x] `sitemap.ts` — 96개 variant URL 포함
- [x] IndexNow API (`app/api/indexnow/route.ts`)
- [x] IndexNow 키 검증 파일 (`public/b7998dc9692a4b4089bb8b0e9cefae1c.txt`)

---

## 배포 직후 (Day 0)

### 1. Vercel 환경변수 설정
```
INDEXNOW_KEY = b7998dc9692a4b4089bb8b0e9cefae1c
NEXT_PUBLIC_ADSENSE_CLIENT = ca-pub-XXXXXXXX  (실제 값)
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX               (실제 값, 선택)
```

### 2. ads.txt 업데이트
```
public/ads.txt
→ google.com, pub-XXXXXXXX, DIRECT, f08c47fec0942fa0 로 교체
```

### 3. Google Search Console — sitemap 재제출
```
Search Console → Sitemaps
→ https://utilverse.info/sitemap.xml 제출
```

### 4. IndexNow 제출 (Bing 경유)
```bash
curl -X POST https://utilverse.info/random-decision/api/indexnow \
  -H "Authorization: Bearer b7998dc9692a4b4089bb8b0e9cefae1c"
```
예상 응답: `{ "submitted": 96, "chunks": 1, "results": [...] }`

### 5. 수동 색인 요청 (핵심 5개 URL)
Search Console → URL 검사 → "색인 생성 요청":
```
https://utilverse.info/random-decision/en/random-number-generator/1-to-100
https://utilverse.info/random-decision/en/dice-roller/roll-2-dice
https://utilverse.info/random-decision/en/dice-roller/d20-roller
https://utilverse.info/random-decision/en/random-name-picker/for-giveaway
https://utilverse.info/random-decision/en/coin-flip/heads-or-tails
```

---

## 단기 (Day 1~14)

### SEO 모니터링
- [ ] Search Console → Coverage: 96개 URL 색인 상태 추적
- [ ] Search Console → Performance: 새 variant URL 노출/클릭 확인
- [ ] "Discovered - currently not indexed" 상태 URL → 이유 파악 후 조치

### 변형 페이지 확장
현재 4개 도구 × 16변형. 추가 가능한 도구:
- [ ] `yes-or-no` — "yes-or-no-for-date", "yes-or-no-for-work", "yes-or-no-game"
- [ ] `spin-the-wheel` — "yes-no-wheel", "food-wheel", "name-wheel"
- [ ] `random-color` — "random-hex-color", "random-pastel-color", "random-dark-color"
- [ ] `lottery-number-generator` — "powerball", "mega-millions", "pick-3", "pick-4"

### 도구 컴포넌트 initialConfig 확장
- [ ] `SpinWheelTool` — `initialItems` prop 추가 (presetsLoader 연동)
- [ ] `YesNoTool` — `initialQuestion` prop 추가
- [ ] `LotteryNumberTool` — `initialFormat` prop 추가 (powerball 등)

---

## 중기 (1개월)

### 콘텐츠 강화
- [ ] 각 변형 페이지에 도구별 특화 FAQ 추가 (예: "D20 확률 분포" 등)
- [ ] 변형 페이지 전용 블로그 포스트 연결 ("How to pick a random winner for giveaway")
- [ ] i18n: 변형 페이지 metaTitle/Description 다국어화 (`lib/content/variants-i18n.ts`)

### 기술 개선
- [ ] Framer Motion dynamic import 전환 (LCP 개선, RISK-006 해소)
- [ ] Google Funding Choices CMP 연동 (GDPR non-personalized 광고, RISK-005 해소)

### 모니터링 자동화
- [ ] Vercel deploy hook → IndexNow 자동 제출
  ```
  Vercel → Settings → Git → Deploy Hooks
  → POST to /api/indexnow after deploy
  ```
- [ ] Search Console API 연동으로 Coverage 리포트 자동화

---

## 참고

### IndexNow 키 파일 위치
```
public/b7998dc9692a4b4089bb8b0e9cefae1c.txt
→ https://utilverse.info/b7998dc9692a4b4089bb8b0e9cefae1c.txt 으로 서빙
```
> ⚠️ `public/` 파일은 basePath(`/random-decision`) 없이 루트에서 서빙됨

### 현재 생성된 변형 페이지 목록
| 도구 | 변형 | URL 패턴 |
|------|------|----------|
| Random Number Generator | 1-to-10, 1-to-20, 1-to-50, 1-to-100, 1-to-1000 | `/[locale]/random-number-generator/[variant]` |
| Dice Roller | roll-2-dice, roll-3-dice, d4/d8/d12/d20-roller | `/[locale]/dice-roller/[variant]` |
| Random Name Picker | for-giveaway, for-classroom, for-team-names | `/[locale]/random-name-picker/[variant]` |
| Coin Flip | heads-or-tails, decision-maker | `/[locale]/coin-flip/[variant]` |

6개 언어 × 16변형 = **96개 정적 페이지**
