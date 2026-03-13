# AdSense 첫 신청 통과 전략 — plan_ver2.md

> 작성일: 2026-03-13  
> 목표: `https://utilverse.info/random-decision` 에드센스 첫 신청 한 번에 통과  
> 현황 진단 기반 인터뷰 완료 후 작성

---

## 0. 블로그 내부화 전략 (2026-03-13 인터뷰 반영)

### 인터뷰 결정사항
- blogspot은 완전히 다른 주제 → 연결 끊고 내부 블로그로 완전 전환
- 톤: 정보성 위주 깔끔한 톤 (B타입), 단 주제별 추천 글 자유롭게 추가
- 언어: 영어 + 5개 언어 동시 작성 (6개 언어 완전 지원)
- 글 수: 최소 20~30개, 카테고리별로 충분히 채워 "잘 관리된 사이트" 인상
- 카테고리 구조: `/blog/[category]/[slug]` 형태로 분리
- 이미지: SVG 일러스트 스타일, 글당 1~2개 인라인 SVG
- 저자: kimcomplete
- 주제: 사이트 관련 + 비관련 모두 허용 (에드센스 정책 위반 아닌 것)

### 블로그 카테고리 구조

```
/[locale]/blog/                          ← 블로그 인덱스 (카테고리별 섹션)
/[locale]/blog/[category]/               ← 카테고리 인덱스
/[locale]/blog/[category]/[slug]         ← 개별 글
```

**카테고리 5개:**
| 카테고리 slug | 표시명 | 설명 | 목표 글 수 |
|---|---|---|---|
| `guides` | Decision Guides | 결정 방법론, 심리학, 프레임워크 | 8개 |
| `tools` | Tool Tutorials | 각 도구 사용법, 활용 사례 | 8개 |
| `games` | Games & Fun | 파티게임, 스트리머, 교실 활동 | 6개 |
| `productivity` | Productivity | 팀워크, 회의, 업무 효율 | 5개 |
| `lifestyle` | Lifestyle | 일상 결정, 음식, 여행, 취미 | 5개 |

**총 32개 글 목표**

### 글 품질 기준 (에드센스 "잘 관리된 사이트" 기준)
- 각 글 본문 최소 600단어 (영어 기준)
- 섹션 H2 최소 4개
- 각 섹션 본문 3~5 문장 (단문 나열 금지)
- 인라인 SVG 일러스트 1~2개
- 날짜 + 저자(kimcomplete) 표시
- 글 하단 FAQ 5개 (JSON-LD 포함)
- 관련 도구 링크 2~3개
- 관련 글 링크 3개

### BlogPost 타입 확장
```typescript
export type BlogPost = {
  slug: string
  category: BlogCategory
  title: string
  description: string
  publishedDate: string   // 'YYYY-MM-DD'
  author: string          // 'kimcomplete'
  readingTime: number     // 분 단위
  intro: string
  sections: Array<{
    heading: string
    body: string[]
    illustration?: string  // SVG 컴포넌트 이름
  }>
  faqs: Array<{ question: string; answer: string }>
  relatedTools: string[]  // tool href 배열
  tags: string[]
}
```

### 다국어 구조
```
lib/content/blog/
  index.ts          ← 전체 export, 헬퍼 함수
  en.ts             ← 영어 32개 글
  es.ts             ← 스페인어 32개 글
  pt.ts             ← 포르투갈어 32개 글
  ar.ts             ← 아랍어 32개 글
  hi.ts             ← 힌디어 32개 글
  tr.ts             ← 터키어 32개 글
```

### 라우트 변경
- 기존: `/[locale]/blog/[slug]`
- 변경: `/[locale]/blog/[category]/[slug]`
- 카테고리 인덱스: `/[locale]/blog/[category]`
- 블로그 인덱스: `/[locale]/blog` (카테고리별 섹션으로 구성)

---

## 1. 현황 진단 — 지금 당장 거절될 이유들

### 🔴 치명적 (즉시 수정 필수)

| # | 문제 | 위치 | 영향 |
|---|------|------|------|
| C-01 | **블로그 링크가 전부 외부 blogspot으로 연결** | Header nav, Homepage CTA, ToolPageShell Related Posts, Blog index | 에드센스 심사관이 "이 사이트에 콘텐츠가 없다"고 판단. 가장 치명적 |
| C-02 | **블로그 콘텐츠가 사이트 내부에 없음** | `app/[locale]/blog/` 라우트는 있지만 실제 블로그 페이지가 외부로 리다이렉트 | 심사 시 블로그 섹션 클릭 → 외부 이탈 → 신뢰도 0 |
| C-03 | **Search Console 미등록 / 색인 0** | 전체 사이트 | 구글이 사이트를 모름. 에드센스 신청 전 최소 2주 색인 필요 |
| C-04 | **트래픽 0** | 전체 사이트 | 에드센스는 트래픽이 전혀 없는 사이트를 거절하는 경향 있음 |

### 🟠 심각 (신청 전 반드시 수정)

| # | 문제 | 위치 | 영향 |
|---|------|------|------|
| S-01 | **OG 이미지 없음** | `lib/seo.ts` buildMeta에 images 필드 없음 | 소셜 공유 시 미리보기 없음, 신뢰도 하락, 트래픽 유입 불리 |
| S-02 | **일부 도구 콘텐츠 극도로 얕음** | food-picker, date-generator, lottery, baby-name, icebreaker의 howToUse가 3줄 단문 | "가치 낮은 콘텐츠" 거절 사유 직결 |
| S-03 | **다국어 콘텐츠 미번역** | 블로그, 도구 설명 전부 영어만 | 6개 언어 지원 표방하지만 실제 콘텐츠는 영어만 → 신뢰도 하락 |
| S-04 | **Contact 페이지에 폼 없음** | `app/[locale]/contact/page.tsx` | 이메일 링크만 있음. 에드센스는 실제 연락 가능성을 중시 |
| S-05 | **NEXT_PUBLIC_ADSENSE_CLIENT 환경변수 미설정** | Vercel 환경변수 | 광고 슬롯이 placeholder로만 표시됨 |

### 🟡 개선 권장 (품질 향상)

| # | 문제 | 영향 |
|---|------|------|
| I-01 | 블로그 글 섹션이 너무 짧음 (각 2~3 단락) | 경쟁사 대비 콘텐츠 깊이 부족 |
| I-02 | 도구 페이지 FAQ가 `<details>` 태그로만 구현 | 시각적으로 빈약, 사용자 경험 저하 |
| I-03 | 홈페이지 hero stat "100% Client-side random" 표현 | 기술적으로 정확하지만 일반 사용자에게 의미 불명확 |
| I-04 | 사이트맵에 hreflang 없음 | 다국어 SEO 신호 약함 |
| I-05 | 블로그 글에 날짜/저자 정보 없음 | E-E-A-T 신호 약함 |

---

## 2. 경쟁사 대비 부족한 부분

### 비교 기준: justflipacoin, flipsimu, pickerwheel, wheelofnames, random.org

| 항목 | 경쟁사 평균 | 현재 우리 | 목표 |
|------|-----------|---------|------|
| 블로그 글 수 | 0~5개 (대부분 없음) | 10개 (but 외부 링크) | **10개 내부 블로그 + 깊이 강화** |
| 도구 페이지 콘텐츠 | 200~500자 | 500~800자 (상위 5개), 100~200자 (하위 10개) | **전 도구 800자+** |
| OG 이미지 | 대부분 있음 | **없음** | 도구별 OG 이미지 |
| 다국어 | 대부분 영어만 | UI만 6개 언어 | **콘텐츠도 6개 언어** |
| 내부 블로그 | flipsimu만 있음 | **없음 (외부 링크)** | 내부 블로그 필수 |
| Contact 폼 | 대부분 있음 | 이메일만 | 폼 추가 |
| 날짜/저자 표시 | 있음 | 없음 | 추가 |

**우리의 실제 강점 (유지해야 할 것)**
- 15개 도구 올인원 (경쟁사 중 최다)
- 다크모드 (경쟁사 전무)
- Bento Grid 프리미엄 UI
- 6개 언어 라우팅 구조
- crypto-grade RNG
- 구조화 데이터 (JSON-LD) 완비

---

## 3. 블로그 내부화 전략 (인터뷰 기반 확정)

### 인터뷰 결과 요약
- blogspot 블로그는 완전히 다른 주제 → 연결 끊고 내부 블로그로 완전 대체
- 톤: 정보성 위주 깔끔한 톤 (B) + 추천 주제 자유 추가
- 언어: 영어 + 5개 언어 동시 작성
- 글 수: 최소 20~30개, 최대한 많이 (단, 잘 관리된 느낌 유지)
- 카테고리 구조: 카테고리별 분류, 카테고리당 글이 많아 보이게
- 이미지: SVG 일러스트 스타일, 고품질, 글당 여러 개
- 주제: 사이트 관련 + 비관련 모두 (에드센스 위반 주제 제외)
- 저자: kimcomplete

### 블로그 카테고리 구조

```
/[locale]/blog                          ← 블로그 인덱스 (카테고리 목록)
/[locale]/blog/category/[category]      ← 카테고리 페이지
/[locale]/blog/[slug]                   ← 개별 글 페이지
```

카테고리 5개:
- `decision-making` — 결정 방법론, 심리학, 전략 (사이트 핵심)
- `tools-guides` — 각 도구 사용법, 활용 가이드 (사이트 직결)
- `games-fun` — 파티게임, 스트리머, 친구모임 활용 (바이럴)
- `productivity` — 팀워크, 회의, 업무 효율 (고CPC 키워드)
- `lifestyle` — 일상 결정, 음식, 여행, 취미 (검색량 높음)

### 글 목록 (30개)

#### decision-making (7개)
1. `how-to-make-decisions` (기존 → 대폭 확장)
2. `science-behind-coin-flip-decisions` (기존 → 확장)
3. `decision-fatigue-how-to-beat-it`
4. `when-to-trust-your-gut-vs-data`
5. `group-decision-making-strategies`
6. `overcoming-analysis-paralysis`
7. `psychology-of-random-choice`

#### tools-guides (8개)
1. `coin-flip-complete-guide` (기존 history 글 → 재구성)
2. `spin-the-wheel-complete-guide`
3. `dice-roller-complete-guide` (기존 dnd 글 → 확장)
4. `yes-or-no-generator-guide`
5. `random-number-generator-guide`
6. `random-name-picker-classroom-guide` (기존 → 확장)
7. `team-generator-workshop-guide` (기존 → 확장)
8. `coin-flip-vs-dice-roll-comparison` (기존 → 확장)

#### games-fun (6개)
1. `party-games-spinner-wheel` (기존 → 대폭 확장)
2. `streamer-wheel-content` (기존 → 확장)
3. `would-you-rather-questions-friends` (기존 → 확장)
4. `dnd-dice-roller-advanced`
5. `icebreaker-games-for-teams`
6. `fun-ways-to-use-random-tools`

#### productivity (5개)
1. `random-team-generator-guide` (기존 → 확장)
2. `fair-meeting-facilitation-tools`
3. `remote-team-decision-making`
4. `agile-retrospective-random-tools`
5. `reduce-meeting-time-with-random-decisions`

#### lifestyle (4개)
1. `what-to-eat-random-food-picker`
2. `random-date-ideas-couples`
3. `travel-destination-random-picker`
4. `daily-routine-randomization`

### 글 품질 기준
- 각 글 최소 1,200자 이상 (영어 기준)
- 섹션 4~6개, 각 섹션 3~4 단락
- SVG 일러스트 1~3개 per 글
- 저자: kimcomplete, 날짜 표시
- 내부 링크: 관련 도구 2~3개 + 관련 글 3개
- FAQ 5개 이상 (JSON-LD 포함)
- 각 글 고유 메타 description

---

## 4. 실행 계획 (우선순위 순)

### Phase 1: 치명적 문제 해결 (즉시, 1~2일)

#### 1-1. 블로그를 내부로 전환 (C-01, C-02)

블로그 링크를 `https://mylifehack-daily.blogspot.com/`에서 `/{locale}/blog`로 전환.  
Header, Homepage, ToolPageShell의 모든 외부 블로그 링크를 내부 링크로 교체.

**수정 파일:**
- `components/layout/Header.tsx` — Blog nav 링크
- `app/[locale]/page.tsx` — "Explore Blog" CTA
- `components/layout/ToolPageShell.tsx` — Related Posts 링크
- `lib/i18n.ts` — blog nav label

#### 1-2. Search Console 등록 및 sitemap 제출 (C-03)

1. `https://search.google.com/search-console` 접속
2. `utilverse.info` 도메인 등록 (DNS TXT 레코드 인증)
3. `https://utilverse.info/random-decision/sitemap.xml` 제출
4. URL 검사 도구로 주요 페이지 색인 요청

**색인 요청 우선순위:**
```
/en (홈)
/en/coin-flip
/en/spin-the-wheel
/en/dice-roller
/en/yes-or-no
/en/random-number-generator
/en/blog
/en/about
/en/contact
/en/privacy-policy
```

---

### Phase 2: 심각 문제 해결 (3~5일)

#### 2-1. OG 이미지 추가 (S-01)

`lib/seo.ts`의 `buildMeta` 함수에 기본 OG 이미지 추가.  
도구별 개별 OG 이미지는 `public/og/` 디렉토리에 1200×630px PNG로 생성.

**최소 필요 OG 이미지:**
- `/public/og/default.png` — 사이트 기본 (홈, 블로그, 법적 페이지)
- `/public/og/coin-flip.png`
- `/public/og/spin-the-wheel.png`
- `/public/og/dice-roller.png`
- `/public/og/yes-or-no.png`
- `/public/og/random-number-generator.png`

**구현 방식:** Next.js `opengraph-image.tsx` 또는 정적 PNG 파일 직접 배치

#### 2-2. 하위 10개 도구 콘텐츠 강화 (S-02)

현재 `random-food-picker`, `random-date-generator`, `lottery-number-generator`, `baby-name-generator`, `icebreaker-question-generator`의 콘텐츠가 극도로 얕음.

**목표 기준 (각 도구):**
- `howToUse`: 3개 항목, 각 2~3문장 (현재 1문장짜리 있음)
- `features`: 5개 이상
- `useCases`: 4개 이상, 각 구체적 시나리오
- `tips`: 3개 이상
- `faqs`: 5개 Q&A, 각 답변 2문장 이상

#### 2-3. Contact 페이지에 폼 추가 (S-04)

이메일 링크만으로는 부족. 이름/이메일/메시지 필드를 가진 폼 추가.  
백엔드 없이 `mailto:` 또는 Formspree 무료 플랜 활용.

#### 2-4. 블로그 글 콘텐츠 깊이 강화 (I-01)

현재 블로그 글이 `buildExpandedSections`로 자동 확장되지만 내용이 제네릭함.  
각 블로그 글에 실제 유용한 정보를 추가:
- 날짜 필드 추가 (`publishedDate`, `updatedDate`)
- 저자 표시 ("Random Decision Team")
- 각 섹션 본문 최소 3~4 단락으로 확장
- 실제 수치/예시 포함

---

### Phase 3: 다국어 콘텐츠 번역 (5~10일)

#### 3-1. 도구 콘텐츠 번역

`lib/content/tools.ts`의 `toolContent`를 로케일별로 분리.

**구조 변경:**
```typescript
// 현재
export const toolContent: Record<ToolKey, ToolContent> = { ... }

// 변경 후
export const toolContent: Record<Locale, Record<ToolKey, ToolContent>> = {
  en: { ... },
  es: { ... },
  pt: { ... },
  ar: { ... },
  hi: { ... },
  tr: { ... }
}
```

**번역 우선순위:** en → es → pt → tr → hi → ar

#### 3-2. 블로그 콘텐츠 번역

`lib/content/blog.ts`를 로케일별로 분리.  
각 언어별 블로그 포스트 10개 번역.

**번역 전략:**
- 영어 원문 기반 번역
- 각 언어별 자연스러운 표현으로 의역
- 아랍어(ar)는 RTL 방향 확인 필수

#### 3-3. 블로그 상세 페이지 로케일 연동

`app/[locale]/blog/[slug]/page.tsx`에서 로케일별 콘텐츠 로드.

---

### Phase 4: SEO 기술 강화 (병행)

#### 4-1. hreflang 태그 추가

`lib/seo.ts`의 `buildMeta`에 `alternates.languages` 추가:
```typescript
alternates: {
  canonical: url,
  languages: {
    'en': `${baseUrl}/en${path}`,
    'es': `${baseUrl}/es${path}`,
    'pt': `${baseUrl}/pt${path}`,
    'ar': `${baseUrl}/ar${path}`,
    'hi': `${baseUrl}/hi${path}`,
    'tr': `${baseUrl}/tr${path}`,
  }
}
```

#### 4-2. 블로그 글 날짜/저자 메타데이터 추가

`BlogPost` 타입에 `publishedDate`, `author` 필드 추가.  
`blogPostingSchema`에 `datePublished`, `dateModified` 반영.

#### 4-3. 도구 페이지 FAQ 시각화 개선

`<details>` 태그 대신 스타일된 아코디언 컴포넌트로 교체.  
FAQ가 시각적으로 명확하게 보여야 에드센스 심사관이 콘텐츠 깊이를 인식.

---

### Phase 5: 에드센스 신청 준비 (Phase 1~4 완료 후)

#### 5-1. 신청 전 최종 체크리스트

- [ ] 블로그 링크 전부 내부 링크로 전환 완료
- [ ] Search Console 등록 + sitemap 제출 완료
- [ ] 최소 2주 경과 (색인 시간 확보)
- [ ] 주요 페이지 10개 이상 색인 확인
- [ ] OG 이미지 주요 페이지 적용 완료
- [ ] 전 도구 페이지 콘텐츠 800자+ 확인
- [ ] Contact 폼 작동 확인
- [ ] Privacy Policy AdSense 조항 확인 (✅ 이미 완료)
- [ ] Cookie Banner 작동 확인 (✅ 이미 완료)
- [ ] ads.txt publisher ID 확인 (✅ 이미 완료)
- [ ] NEXT_PUBLIC_ADSENSE_CLIENT 환경변수 Vercel에 설정
- [ ] 모바일 반응형 확인 (✅ 이미 완료)
- [ ] HTTPS 확인 (✅ Vercel 자동)
- [ ] 404 페이지 확인 (✅ 이미 완료)

#### 5-2. 트래픽 확보 전략 (신청 전 최소 일 10~20명)

에드센스는 트래픽이 전혀 없는 사이트를 거절하는 경향이 있음.

**단기 트래픽 확보 방법:**
1. Reddit 포스팅: r/webdev, r/SideProject, r/mildlyinteresting
   - "I built a free all-in-one random decision tool" 형식
2. Product Hunt 런칭 (무료)
3. Twitter/X 포스팅 with 데모 GIF
4. 기존 blogspot 블로그에서 utilverse.info 링크 추가 (백링크 효과)

#### 5-3. 에드센스 신청 방법

1. `https://www.google.com/adsense/start/` 접속
2. 사이트 URL: `https://utilverse.info` (서브패스 아닌 루트 도메인으로)
3. 계정 정보 입력 후 코드 스니펫 받기
4. `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-6597631910010254` Vercel에 설정
5. 재배포 후 광고 코드 활성화 확인
6. 심사 기간: 보통 1~14일

---

## 4. 구현 우선순위 요약

```
즉시 (Day 1-2):
  ✅ 블로그 외부 링크 → 내부 링크 전환
  ✅ Search Console 등록 + sitemap 제출

단기 (Day 3-7):
  ✅ OG 이미지 추가 (주요 5개 도구 + 기본)
  ✅ 하위 10개 도구 콘텐츠 강화
  ✅ Contact 폼 추가
  ✅ 블로그 글 날짜/저자 추가

중기 (Day 8-14):
  ✅ 다국어 콘텐츠 번역 (es, pt 우선)
  ✅ hreflang 태그 추가
  ✅ FAQ 컴포넌트 시각화 개선
  ✅ 트래픽 확보 활동 시작

신청 (Day 15+):
  ✅ 색인 10개+ 확인 후 에드센스 신청
  ✅ NEXT_PUBLIC_ADSENSE_CLIENT Vercel 설정
```

---

## 5. 에드센스 승인 후 광고 최적화

승인 후 즉시 할 것:
1. `public/ads.txt` publisher ID 재확인 (✅ 이미 입력됨)
2. 실제 slot ID로 `AdSlot` 컴포넌트 업데이트
3. 광고 밀도 모니터링 (페이지당 3개 이하 유지)
4. CLS 확인 (AdSlot min-height 이미 설정됨 ✅)

중기 광고 최적화:
- Google Funding Choices CMP 연동 (GDPR non-personalized 광고)
- Auto ads 테스트 후 수동 슬롯과 비교
- 고성과 페이지 식별 후 슬롯 위치 조정

---

## 6. 리스크 및 대응

| 리스크 | 확률 | 대응 |
|--------|------|------|
| 트래픽 부족으로 거절 | 40% | 신청 전 Reddit/PH 런칭으로 최소 트래픽 확보 |
| 콘텐츠 부족으로 거절 | 20% | 도구 콘텐츠 강화 + 블로그 내부화로 해소 |
| 기술적 문제 (CSP/ads.txt) | 10% | RISK-001, RISK-004 이미 문서화됨 |
| 다국어 콘텐츠 품질 | 30% | 영어 원문 품질 먼저 확보 후 번역 |

---

> 이 계획은 2026-03-13 인터뷰 기반으로 작성됨.  
> 구현 진행 상황에 따라 업데이트 예정.

---

## 7. 블로그 내부화 전략 (2026-03-13 인터뷰 최종 확정)

### 7-1. 기본 방침 (인터뷰 최종 확정)

| 항목 | 결정 |
|------|------|
| blogspot 연결 | 완전 끊음 (다른 주제) → 내부 블로그로 대체 |
| 톤 | 정보성 위주 깔끔한 톤 (B타입) + 추천 주제 자유 추가 |
| 저자 | `kimcomplete` (전 글 동일) |
| 글 수 | 최소 20~30개, 최대한 많이. 단 "잘 관리된 사이트" 인상 유지 |
| 언어 | 영어 + 5개 언어 동시 작성 (6개 언어 완전 지원) |
| 카테고리 | 카테고리별 분류, 카테고리당 글이 많아 보이게 |
| 이미지 | SVG 일러스트 스타일, 고품질, 글당 1~3개 인라인 SVG |
| 주제 | 사이트 관련 + 비관련 모두 허용 (에드센스 정책 위반 제외) |

### 7-2. 카테고리 구조

```
/[locale]/blog/                          ← 블로그 인덱스 (카테고리별 섹션)
/[locale]/blog/[category]/               ← 카테고리 인덱스 (선택적)
/[locale]/blog/[slug]                    ← 개별 글 (현재 구조 유지, category 필드 추가)
```

**4개 카테고리:**

| 카테고리 | slug prefix | 목표 글 수 | 설명 |
|---------|------------|---------|------|
| `guides` | decision-making, productivity | 8개 | 의사결정 방법론, 심리학, 실용 가이드 |
| `tools` | how-to, tips | 8개 | 각 도구 활용법, 비교, 심층 가이드 |
| `games` | party, classroom, team | 5개 | 파티게임, 교실 활동, 팀빌딩 |
| `fun` | trivia, lists, ideas | 4개 | 흥미로운 리스트, 잡학, 아이디어 |

### 7-3. 25개 블로그 글 목록

#### guides (8개) — 의사결정 & 생산성

| # | slug | 제목 | 핵심 키워드 | 예상 길이 |
|---|------|------|-----------|---------|
| G-01 | `how-to-make-decisions` | How to Make Decisions When You Can't Decide: 7 Practical Methods | decision making tips | 1,800자 |
| G-02 | `decision-fatigue-explained` | What Is Decision Fatigue and How to Beat It Every Day | decision fatigue | 1,600자 |
| G-03 | `coin-flip-psychology` | Why Flipping a Coin Actually Helps You Decide (Even When You Ignore the Result) | coin flip psychology | 1,400자 |
| G-04 | `random-vs-deliberate-choice` | Random Choice vs. Deliberate Choice: When Each One Wins | random decision making | 1,500자 |
| G-05 | `group-decision-making-tips` | 5 Proven Ways to Make Group Decisions Without the Drama | group decision making | 1,600자 |
| G-06 | `overthinking-decisions` | How to Stop Overthinking Small Decisions (A Practical Guide) | stop overthinking | 1,400자 |
| G-07 | `pros-cons-list-alternatives` | Why Pros and Cons Lists Fail — and What to Use Instead | pros cons list | 1,500자 |
| G-08 | `daily-decision-routine` | Build a Daily Decision Routine That Actually Saves Time | daily routine decisions | 1,400자 |

#### tools (8개) — 도구 활용 심층 가이드

| # | slug | 제목 | 핵심 키워드 | 예상 길이 |
|---|------|------|-----------|---------|
| T-01 | `history-of-coin-flipping` | The History of Coin Flipping: From Ancient Rome to Your Browser | history coin flip | 1,600자 |
| T-02 | `coin-flip-vs-dice-roll` | Coin Flip vs Dice Roll: Which Random Tool Should You Use? | coin flip vs dice | 1,400자 |
| T-03 | `dnd-dice-roller-guide` | Dice Roller for D&D: A Dungeon Master's Practical Workflow | dnd dice roller | 1,600자 |
| T-04 | `spin-wheel-streamer-guide` | How Streamers Use Spin Wheels for Better Audience Interaction | spin wheel streamer | 1,400자 |
| T-05 | `random-number-generator-uses` | 10 Surprising Uses for a Random Number Generator | random number generator uses | 1,500자 |
| T-06 | `name-picker-classroom` | Random Name Picker for Teachers: A Classroom Fairness Guide | random name picker classroom | 1,400자 |
| T-07 | `team-generator-guide` | Random Team Generator: The Fairest Way to Split Groups | random team generator | 1,400자 |
| T-08 | `wheel-spinner-complete-guide` | The Complete Guide to Spin the Wheel: Setup, Tips, and Use Cases | spin the wheel guide | 1,600자 |

#### games (5개) — 파티 & 교실 & 팀

| # | slug | 제목 | 핵심 키워드 | 예상 길이 |
|---|------|------|-----------|---------|
| P-01 | `party-games-spinner-wheel` | 10 Party Games You Can Run with a Spinner Wheel Tonight | party games spinner | 1,400자 |
| P-02 | `would-you-rather-questions` | 50 Would You Rather Questions for Friends, Teams, and Classrooms | would you rather questions | 1,800자 |
| P-03 | `icebreaker-games-remote-teams` | 8 Icebreaker Games That Actually Work for Remote Teams | icebreaker games remote | 1,400자 |
| P-04 | `classroom-random-activities` | 7 Classroom Activities That Use Randomness to Boost Engagement | classroom random activities | 1,400자 |
| P-05 | `team-building-random-tools` | How to Use Random Tools for Team Building Without It Feeling Forced | team building activities | 1,400자 |

#### fun (4개) — 흥미로운 리스트 & 잡학

| # | slug | 제목 | 핵심 키워드 | 예상 길이 |
|---|------|------|-----------|---------|
| F-01 | `random-facts-about-randomness` | 12 Surprising Facts About Randomness You Probably Didn't Know | facts about randomness | 1,400자 |
| F-02 | `famous-coin-flip-moments` | 7 Famous Moments in History Decided by a Coin Flip | famous coin flip | 1,400자 |
| F-03 | `what-to-eat-decision-guide` | Can't Decide What to Eat? Here's a System That Actually Works | what to eat decision | 1,400자 |
| F-04 | `lottery-number-myths` | Lottery Number Myths Debunked: What Random Really Means | lottery number myths | 1,400자 |

### 7-4. 글 품질 기준 (AI 느낌 제거)

에드센스 심사관이 "AI가 쓴 글"로 판단하는 패턴을 피하기 위한 기준:

**피해야 할 패턴:**
- "In today's fast-paced world..." 같은 클리셰 오프닝
- 모든 섹션이 정확히 같은 길이
- 구체적 수치 없이 "many people", "studies show" 남발
- 결론이 항상 "In conclusion, ..."으로 시작

**적용할 패턴:**
- 첫 문장이 질문이거나 구체적 상황 묘사로 시작
- 실제 수치 포함 (예: "A 2023 study from Columbia University found that...")
- 섹션 길이가 자연스럽게 다름 (짧은 섹션 + 긴 섹션 혼합)
- 글 중간에 실용적 팁 박스 또는 예시 포함
- 마지막 섹션이 "Try it now" 같은 행동 유도로 끝남

### 7-5. 이미지 전략

각 글에 SVG 일러스트 1~3개 인라인 삽입:

| 이미지 유형 | 사용 위치 | 크기 |
|-----------|---------|------|
| Hero 일러스트 | 글 상단 | 800×400px viewBox |
| 인포그래픽 | 핵심 개념 설명 | 600×300px viewBox |
| 아이콘 세트 | 리스트 항목 강조 | 24×24px |

SVG는 `public/blog/` 디렉토리에 저장하거나 컴포넌트 인라인으로 처리.

### 7-6. 블로그 페이지 구조 변경

현재 `lib/content/blog.ts` 단일 파일 → 카테고리별 분리:

```
lib/content/blog/
  index.ts          ← 전체 export, 헬퍼 함수
  types.ts          ← BlogPost 타입 정의
  en/
    guides.ts       ← 8개 guides 글 (영어)
    tools.ts        ← 8개 tools 글 (영어)
    games.ts        ← 5개 games 글 (영어)
    fun.ts          ← 4개 fun 글 (영어)
  es/
    guides.ts
    tools.ts
    games.ts
    fun.ts
  pt/ hi/ ar/ tr/   ← 동일 구조
```

### 7-7. 블로그 인덱스 페이지 개선

현재 flat 리스트 → 카테고리별 섹션으로 개편:

```
/[locale]/blog
  ├── [카테고리 탭 또는 섹션]
  ├── Guides (8)
  ├── Tool Tips (8)
  ├── Games & Activities (5)
  └── Fun & Trivia (4)
```

각 카테고리 섹션에 설명 문구 + 글 카드 그리드.

### 7-8. 구현 순서

1. `lib/content/blog/types.ts` — 타입 정의 (category, publishedDate, author, images 필드 추가)
2. `lib/content/blog/en/guides.ts` — 8개 영어 guides 글 (풀 콘텐츠)
3. `lib/content/blog/en/tools.ts` — 8개 영어 tools 글
4. `lib/content/blog/en/games.ts` — 5개 영어 games 글
5. `lib/content/blog/en/fun.ts` — 4개 영어 fun 글
6. `lib/content/blog/index.ts` — 통합 export
7. 나머지 5개 언어 번역 (es, pt, tr, hi, ar 순)
8. `app/[locale]/blog/page.tsx` — 카테고리별 인덱스로 개편
9. `app/[locale]/blog/[slug]/page.tsx` — 이미지, 저자, 날짜 표시 추가
10. Header/Homepage/ToolPageShell 외부 링크 → 내부 링크 전환
