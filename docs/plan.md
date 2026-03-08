# 🎲 Random Decision Tools Site — 종합 기획서 (plan.md)

> **프로젝트명**: 랜덤 결정 도구 올인원 사이트
> **목표**: 글로벌 영어권 사용자 대상 랜덤 결정 도구 사이트 → Google AdSense 수익화
> **작성일**: 2026-03-08
> **개발 도구**: Claude Code 단독
> **호스팅**: Vercel 또는 Netlify (무료) + 커스텀 도메인 ($8~12/년)

---

## Part 1: 경쟁사 심층 분석

### 1.1 주요 경쟁사 현황

| 사이트 | 월 방문자 | 핵심 도구 | 강점 | 약점 |
|--------|---------|----------|------|------|
| **justflipacoin.com** | ~37만 | Coin Flip만 | 2010년부터 운영, 강한 도메인 권위 | UI 극도로 낙후, 단일 기능, 모바일 최적화 미흡 |
| **flipsimu.com** | ~98만 | Coin, Dice, Tarot, DnD | 3D 애니메이션, 커스터마이징, AI 타로 | 정체성 분산 (타로?게임?결정?), 로딩 무거움 |
| **pickerwheel.com** | ~수백만 | Wheel Spinner 특화 | 풍부한 커스터마이징, 파일 저장, 공유 기능 | Wheel만 올인, 다른 결정 도구 없음 |
| **wheelofnames.com** | ~60만 | Random Name Picker | 교사/래플용 특화, Discord 봇 연동 | 교육 시장에만 국한, 범용성 부족 |
| **random.org** | ~430만 | 모든 랜덤 도구 | 진정한 랜덤(대기 소음 기반), 학술적 신뢰 | 디자인 1990년대 수준, UX 최악, 재미 요소 0 |

### 1.2 경쟁사별 세부 기능 매트릭스

| 기능 | justflipacoin | flipsimu | pickerwheel | wheelofnames | random.org |
|------|:---:|:---:|:---:|:---:|:---:|
| Coin Flip | ✅ | ✅ | ❌ | ❌ | ✅ |
| Dice Roller | ❌ | ✅ | ❌ | ❌ | ✅ |
| Wheel Spinner | ❌ | ❌ | ✅ | ✅ | ❌ |
| Yes/No Generator | ❌ | ✅ | ✅ | ❌ | ❌ |
| Random Number | ❌ | ❌ | ✅ | ❌ | ✅ |
| Random Name Picker | ❌ | ❌ | ❌ | ✅ | ❌ |
| Team Generator | ❌ | ❌ | ✅ | ❌ | ❌ |
| 3D 애니메이션 | ❌ | ✅ | ❌ | ❌ | ❌ |
| 커스터마이징 | 색상만 | 높음 | 매우 높음 | 중간 | 없음 |
| 결과 히스토리 | ❌ | 통계만 | ❌ | ❌ | ❌ |
| 공유/임베드 | ❌ | ✅ | ✅ | ✅ | ❌ |
| 모바일 최적화 | 미흡 | 양호 | 양호 | 양호 | 미흡 |
| 블로그/콘텐츠 | 역사 글 1개 | 튜토리얼 | 없음 | FAQ만 | 없음 |
| SEO 콘텐츠 | 매우 약함 | 중간 | 약함 | 약함 | 없음 |
| 광고 배치 | AdSense | AdSense | AdSense | AdSense | 자체 |
| 다크 모드 | ❌ | ❌ | ❌ | ❌ | ❌ |
| PWA/오프라인 | ❌ | ❌ | ❌ | ❌ | ❌ |
| 그룹/멀티플레이어 | ❌ | ❌ | ❌ | ❌ | ❌ |

### 1.3 경쟁사 공통 약점 (= 우리의 기회)

1. **올인원 부재**: 코인, 주사위, 휠, Yes/No를 모두 높은 품질로 제공하는 곳이 없음
2. **SEO 콘텐츠 빈약**: 대부분 도구만 있고, 블로그/가이드/활용 사례 콘텐츠가 거의 없음 → 애드센스 승인에도 불리
3. **디자인 노후화**: justflipacoin, random.org 등 주요 경쟁사의 디자인이 2010년대 수준
4. **다크 모드 없음**: 전 경쟁사 미지원 — 2026년 기준 사용자 60%+ 가 다크 모드 선호
5. **그룹 결정 기능 없음**: 친구들과 함께 결정하는 실시간 기능을 제공하는 곳 없음
6. **결정 히스토리/통계**: 과거 결정을 기록하고 통계를 보여주는 곳이 flipsimu(부분)뿐
7. **PWA/오프라인**: 인터넷 없이도 사용 가능한 곳 없음
8. **사운드/햅틱**: 몰입감 있는 사운드 효과와 진동 피드백 제공하는 곳 거의 없음

---

## Part 2: 차별화 전략 — 왜 사용자가 우리 사이트에 와야 하는가

### 2.1 핵심 차별화 포인트 5가지

#### 차별화 #1: "모든 결정 도구가 한 곳에" (All-in-One Decision Hub)

경쟁사들은 각자 하나의 도구에만 특화되어 있음. 코인은 justflipacoin, 휠은 pickerwheel, 주사위는 flipsimu. 사용자는 상황에 따라 여러 사이트를 돌아다녀야 함.

우리 사이트는 **코인 + 주사위 + 휠 + Yes/No + 랜덤 넘버 + 이름 뽑기 + 팀 생성기 + 카드 뽑기** 등을 모두 하나의 일관된 UI에서 제공. 한번 방문하면 다른 도구로 자연스럽게 이동 → 세션 시간 증가 → 광고 노출 증가 → 수익 증가.

#### 차별화 #2: "결정을 즐겁게" (Delightful Decision Experience)

- 모던하고 감각적인 UI/UX (2026년 수준의 디자인)
- 다크 모드 기본 지원
- 부드러운 애니메이션 + 사운드 효과 + 모바일 진동 피드백
- 결과 발표 시 컨페티(축하) 애니메이션
- 경쟁사 대부분이 "기능만 있고 재미없는" 도구 → 우리는 "쓰는 것 자체가 즐거운" 경험 제공

#### 차별화 #3: "기억하는 결정" (Decision History & Stats)

- 사용자의 모든 결정 결과를 로컬에 자동 저장 (localStorage)
- 통계 대시보드: 코인 앞/뒤 비율, 주사위 분포 차트, 결정 히스토리 타임라인
- "오늘 몇 번의 결정을 내렸나요?" 같은 인사이트 제공
- 이 기능은 반복 방문 유도 + 체류 시간 증가에 직결

#### 차별화 #4: "함께 결정하기" (Group Decision Mode)

- URL 공유만으로 친구들과 같은 룰렛/코인플립 세션 참여
- 예: 점심 메뉴를 정할 때 팀원 5명이 같은 휠을 보면서 스핀
- WebSocket이나 URL 파라미터 기반의 간단한 구현
- **이 기능을 제공하는 경쟁사가 0곳** — 완전한 블루오션 기능

#### 차별화 #5: "결정에 대한 콘텐츠" (Decision-Making Content Hub)

- 단순 도구 사이트가 아닌, "결정"을 주제로 한 콘텐츠 허브
- 블로그: "How to Make Better Decisions", "Fun Party Games with a Spinner Wheel" 등
- 각 도구 페이지에 풍부한 가이드 콘텐츠 (How to Use, Use Cases, FAQ, Tips)
- 이것이 애드센스 승인의 핵심이면서 동시에 SEO 진입점 역할

### 2.2 타겟 사용자 페르소나

| 페르소나 | 설명 | 사용 시나리오 | 유입 키워드 |
|---------|------|-------------|-----------|
| **The Indecisive** | 일상적 결정에 어려움을 느끼는 사람 | "오늘 저녁 뭐 먹지?" → Wheel Spinner | "random decision maker", "help me decide" |
| **The Gamer** | D&D, 보드게임 플레이어 | 주사위 굴리기, 캐릭터 랜덤 생성 | "dice roller online", "d20 roll" |
| **The Teacher** | 수업 중 학생 뽑기 | 이름 뽑기, 팀 구성 | "random name picker", "random team generator" |
| **The Streamer** | 트위치/유튜브 스트리머 | 시청자 이벤트, 결정 콘텐츠 | "spin the wheel online", "giveaway wheel" |
| **The Party Host** | 파티/모임 진행자 | Truth or Dare, Would You Rather | "truth or dare generator", "party game online" |
| **The Settler** | 논쟁을 해결하고 싶은 사람 | "누가 설거지할래?" → Coin Flip | "flip a coin", "yes or no generator" |

### 2.3 타겟 사용자별 차별화된 가치 제안

| 기존 사이트에서의 경험 | 우리 사이트에서의 경험 |
|---------------------|---------------------|
| 코인 플립 하러 A사이트, 휠 돌리러 B사이트 | 하나의 사이트에서 모든 결정 도구 사용 |
| 밋밋한 UI, 재미없는 인터랙션 | 사운드, 애니메이션, 진동 피드백으로 즐거운 경험 |
| 결과 확인하고 끝 | 결정 히스토리가 쌓이고 통계를 볼 수 있음 |
| 혼자만 사용 | 친구에게 링크 공유해서 함께 결정 |
| 라이트 모드만 | 다크 모드로 눈 편안하게 |
| 도구만 있고 활용법을 모름 | 블로그와 가이드로 다양한 활용법 제공 |

---

## Part 3: 사이트 구성 — 도구 + 콘텐츠 전체 설계

### 3.1 핵심 도구 목록 (총 15개+ 페이지)

#### Tier 1: 핵심 도구 (Phase 1 — 런칭 시 필수)

| # | 도구명 | 타겟 키워드 | 월 검색량 (추정) | 구현 복잡도 | 설명 |
|---|--------|-----------|---------------|-----------|------|
| 1 | **Coin Flip** | "flip a coin", "coin flip" | 800K+ | 낮음 | 3D 코인 플립 애니메이션, 커스텀 코인 면 텍스트, 멀티 코인 |
| 2 | **Dice Roller** | "dice roller", "roll a die" | 500K+ | 낮음 | D4~D20 지원, 다중 주사위, 합계 자동 계산 |
| 3 | **Spin the Wheel** | "spin the wheel", "random wheel" | 900K+ | 중간 | 커스텀 항목 입력, 색상 커스터마이징, 결과 애니메이션 |
| 4 | **Yes or No Generator** | "yes or no", "yes or no generator" | 300K+ | 낮음 | 시각적인 Yes/No 결과 + 애니메이션 |
| 5 | **Random Number Generator** | "random number generator" | 800K+ | 낮음 | 범위 설정, 중복 허용/제거, 다중 생성 |

#### Tier 2: 확장 도구 (Phase 2 — 런칭 후 2~4주)

| # | 도구명 | 타겟 키워드 | 월 검색량 (추정) | 구현 복잡도 | 설명 |
|---|--------|-----------|---------------|-----------|------|
| 6 | **Random Name Picker** | "random name picker" | 200K+ | 낮음 | 이름 목록 입력 → 랜덤 선택 |
| 7 | **Team Generator** | "random team generator" | 100K+ | 중간 | 이름 목록 → N개 팀으로 자동 배분 |
| 8 | **Random Letter Generator** | "random letter generator" | 80K+ | 낮음 | 알파벳 랜덤 선택 |
| 9 | **Random Color Generator** | "random color generator" | 100K+ | 낮음 | HEX/RGB 랜덤 색상 + 미리보기 |
| 10 | **Countdown Timer + Random** | "random timer", "countdown" | 150K+ | 낮음 | 랜덤 시간 후 알림 (게임용) |

#### Tier 3: 바이럴/엔터테인먼트 도구 (Phase 3 — 런칭 후 1~2개월)

| # | 도구명 | 타겟 키워드 | 월 검색량 (추정) | 구현 복잡도 | 설명 |
|---|--------|-----------|---------------|-----------|------|
| 11 | **Truth or Dare Generator** | "truth or dare generator" | 100K+ | 낮음 | 파티 게임용, 카테고리별 질문 |
| 12 | **Would You Rather** | "would you rather questions" | 200K+ | 낮음 | 두 가지 선택지 랜덤 제시 |
| 13 | **Random Quote Generator** | "random quote" | 150K+ | 낮음 | 동기부여/유머/철학 명언 랜덤 |
| 14 | **Magic 8 Ball** | "magic 8 ball online" | 80K+ | 낮음 | 클래식 매직 8볼 시뮬레이터 |
| 15 | **Rock Paper Scissors** | "rock paper scissors online" | 100K+ | 낮음 | 컴퓨터 대전 가위바위보 |

### 3.2 각 도구 페이지 콘텐츠 구조 (애드센스 승인용)

모든 도구 페이지는 아래 구조를 따름. 이것이 "얇은 콘텐츠" 판정을 방지하는 핵심.

```
[도구 페이지 구조]

1. Hero Section
   - H1: 도구 이름 + 키워드 (예: "Free Online Coin Flip Simulator")
   - 부제: 한 줄 설명
   - 도구 UI (페이지 상단에 배치)

2. How to Use Section (최소 300자)
   - 3~5단계 사용 방법
   - 각 단계에 아이콘 또는 스크린샷
   - Step 1: Click the coin...
   - Step 2: See the result...
   - Step 3: Customize...

3. Features Section (최소 200자)
   - 5~7가지 핵심 기능 설명
   - 예: "Realistic animation", "Sound effects", "Dark mode support"

4. Use Cases Section (최소 300자)
   - 4~6가지 구체적 활용 사례
   - 예: "Settling friendly debates", "Choosing restaurant for dinner"
   - 각 사례에 구체적 시나리오 설명

5. Tips & Strategy Section (최소 200자)
   - 도구 활용 팁
   - 예: "The Freudian Coin Toss - flip a coin and notice your gut reaction"

6. FAQ Section (최소 5개 Q&A, 400자+)
   - Q: Is this coin flip truly random?
   - Q: Can I use this for [specific purpose]?
   - Q: Does it work on mobile?
   - Q: How many times can I flip?
   - Q: Can I share results with friends?
   - JSON-LD FAQPage 구조화 데이터 포함

7. Related Tools Section
   - 사이트 내 다른 도구로의 링크
   - "You might also like: Dice Roller, Spin the Wheel..."

8. SEO 요소
   - 고유한 <title> (50~60자)
   - <meta description> (150~160자)
   - <link rel="canonical">
   - JSON-LD SoftwareApplication 스키마
   - JSON-LD FAQPage 스키마
   - Open Graph / Twitter Card 메타 태그
```

### 3.3 블로그 콘텐츠 계획 (SEO + 애드센스 승인 필수)

#### 런칭 시 최소 8~10개 블로그 글

| # | 제목 (안) | 타겟 키워드 | 예상 길이 | 목적 |
|---|----------|-----------|---------|------|
| 1 | "How to Make Decisions When You Can't Decide: 7 Simple Methods" | "how to make decisions" | 1,500자+ | 메인 SEO 허브 글 |
| 2 | "The History of Coin Flipping: From Ancient Rome to Digital Age" | "history of coin flip" | 1,200자+ | 에버그린 교육 콘텐츠 |
| 3 | "10 Fun Party Games You Can Play with a Spinner Wheel" | "party games spinner wheel" | 1,200자+ | 엔터테인먼트 + 도구 연결 |
| 4 | "Random Team Generator: The Fairest Way to Pick Teams" | "how to pick teams randomly" | 1,000자+ | 교사/코치 타겟 |
| 5 | "Dice Roller for D&D: Complete Guide for Dungeon Masters" | "d&d dice roller online" | 1,500자+ | 게이머 타겟 (높은 체류시간) |
| 6 | "Why Flipping a Coin Actually Helps You Decide (Science Behind It)" | "coin flip decision making" | 1,200자+ | 과학 기반 콘텐츠 |
| 7 | "Best Random Name Picker for Teachers: Classroom Guide" | "random name picker classroom" | 1,000자+ | 교육 시장 타겟 |
| 8 | "50 Best 'Would You Rather' Questions for Friends" | "would you rather questions" | 1,500자+ | 바이럴 잠재력 높음 |
| 9 | "How Streamers Use Spin the Wheel for Epic Content" | "streamer wheel spin" | 1,000자+ | 스트리머 타겟 |
| 10 | "Coin Flip vs Dice Roll: Which is More Random?" | "coin flip vs dice" | 1,000자+ | 비교 콘텐츠 |

#### 블로그 글 SEO 구조

```
- H1: 제목 (키워드 포함, 60자 이내)
- 도입부: 첫 100자 내 키워드 포함
- H2: 3~5개 소제목
- H3: 필요시 세부 구조
- 키워드: 자연스럽게 5~7회 포함
- 내부 링크: 관련 도구 페이지 2~3개 연결
- 이미지: 최소 1개 (상업적 무료 사용 가능)
- CTA: 도구 사용 유도 ("Try our Coin Flip Simulator →")
- 메타 디스크립션: 155자 이내
```

### 3.4 필수 법적/정보 페이지 (애드센스 승인 필수 4개)

| 페이지 | 최소 분량 | 필수 포함 내용 |
|--------|---------|-------------|
| **Privacy Policy** | 1,000자+ | Google AdSense 명시, 쿠키 사용 안내, GDPR/CCPA 준수, 연락처 |
| **Terms of Service** | 800자+ | 서비스 설명, 면책 조항, 지적재산권, 관할 법원 |
| **About** | 500자+ | 사이트 목적, 제공 가치, 운영자 소개, 연락 방법 |
| **Contact** | 300자+ | 이메일 주소, 연락 양식(Contact Form), 응답 시간 안내 |

---

## Part 4: 도메인 전략

### 4.1 도메인명 후보

사이트의 정체성 "모든 랜덤 결정을 한 곳에서"를 반영하는 도메인.

| 후보 | 장점 | 단점 | 가용성 확인 필요 |
|------|------|------|--------------|
| **decidenow.tools** | 행동 유도형, 기억하기 쉬움 | .tools 도메인 비용 확인 필요 | ✅ |
| **flipanddecide.com** | coin flip + decision 모두 포함 | 약간 김 | ✅ |
| **randomflip.com** | 짧고 직관적 | random + flip 조합 | ✅ |
| **decideit.app** | 모던, 앱 느낌 | .app 도메인 비용 | ✅ |
| **flipdecide.com** | 짧고 기억하기 쉬움, flip+decide | 선점 여부 확인 | ✅ |
| **randompick.io** | 짧고 깔끔, 개발자 친화적 | .io 비용 높을 수 있음 | ✅ |
| **quickdecide.org** | 빠른 결정 강조 | .org 비영리 느낌 | ✅ |

### 4.2 도메인 선택 기준

1. **.com 우선** — 글로벌 영어권에서 신뢰도 최고
2. **2단어 이내** — 기억하기 쉽고 URL 짧음
3. **키워드 포함** — "flip", "decide", "random", "pick" 중 1개 이상
4. **발음 명확** — 구두로 알려줄 수 있어야 함
5. **$12 이내** — 연간 비용 예산 내

### 4.3 도메인 구매처 추천

| 구매처 | 가격대 | 장점 |
|--------|-------|------|
| **Porkbun** | $7~10/년 | 가장 저렴, UI 깔끔 |
| **Cloudflare Registrar** | 원가 | 추가 마진 없음, CDN 연동 쉬움 |
| **Namecheap** | $8~12/년 | 첫해 할인 많음 |

---

## Part 5: Google AdSense 승인 전략

### 5.1 승인 체크리스트

| # | 요건 | 구현 방안 | 우선순위 |
|---|------|---------|---------|
| 1 | 커스텀 도메인 | .com 도메인 구매 + Vercel/Netlify 연결 | 🔴 필수 |
| 2 | HTTPS | Vercel/Netlify 자동 제공 | 🔴 자동 충족 |
| 3 | 10~15개+ 페이지 | 도구 5개 + 블로그 8개 + 법적 4개 = 17페이지 | 🔴 필수 |
| 4 | 페이지당 500~1000자+ | 도구 페이지 How to Use + FAQ + Use Cases | 🔴 필수 |
| 5 | 필수 법적 페이지 4개 | Privacy Policy, Terms, About, Contact | 🔴 필수 |
| 6 | 모바일 반응형 | 모바일 퍼스트 디자인 | 🔴 필수 |
| 7 | 빠른 로딩 (3초 이내) | 클라이언트 사이드 렌더링, 이미지 최적화 | 🔴 필수 |
| 8 | 명확한 네비게이션 | 헤더 메뉴 + 풋터 + 사이트맵 | 🟡 권장 |
| 9 | sitemap.xml | 자동 생성 | 🟡 권장 |
| 10 | robots.txt | 크롤링 허용 설정 | 🟡 권장 |
| 11 | Google Search Console | 사이트 등록 + 사이트맵 제출 | 🟡 권장 |
| 12 | 최소 2주 운영 | 트래픽 약간이라도 확보 후 신청 | 🟡 권장 |
| 13 | 내부 링크 구조 | 도구 ↔ 블로그 ↔ 관련 도구 상호 링크 | 🟡 권장 |
| 14 | 독창적 콘텐츠 | AI 생성 후 반드시 20%+ 수동 편집 | 🔴 필수 |

### 5.2 "얇은 콘텐츠" 방지 전략

도구 사이트가 애드센스에서 거절되는 가장 큰 이유는 "가치가 낮은 콘텐츠" 판정. 도구 UI만 있고 설명이 없으면 100% 거절됨.

**각 도구 페이지의 콘텐츠 최소 분량 기준:**

| 섹션 | 최소 분량 | 목적 |
|------|---------|------|
| How to Use | 300자 | 사용 방법 단계별 설명 |
| Features | 200자 | 기능 목록 설명 |
| Use Cases | 300자 | 구체적 활용 사례 |
| Tips & Strategy | 200자 | 활용 팁 |
| FAQ | 400자 (5개 Q&A) | 사용자 의도 키워드 타겟 |
| **합계** | **1,400자+** | 도구 UI 제외 순수 텍스트 |

블로그 글은 각 1,000~1,500자 이상으로, 10개 블로그 = 약 12,000자의 독창적 콘텐츠.

**총 사이트 콘텐츠 예상:**
- 도구 페이지 5개 × 1,400자 = 7,000자
- 블로그 10개 × 1,200자 = 12,000자
- 법적 페이지 4개 × 700자 = 2,800자
- **합계: 약 21,800자 이상** → 애드센스 승인 기준 넉넉히 충족

### 5.3 SEO 기술 요소

```
[각 페이지 필수 SEO 설정]

<head>
  <title>{도구명} - Free Online {키워드} | {사이트명}</title>
  <meta name="description" content="{155자 설명}">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="canonical" href="https://{도메인}/{경로}">

  <!-- Open Graph -->
  <meta property="og:title" content="{제목}">
  <meta property="og:description" content="{설명}">
  <meta property="og:image" content="{공유 이미지 URL}">
  <meta property="og:url" content="{페이지 URL}">
  <meta property="og:type" content="website">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">

  <!-- JSON-LD 구조화 데이터 -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "{도구명}",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web",
      "offers": { "@type": "Offer", "price": "0" }
    }
  </script>

  <!-- FAQ 스키마 (도구 페이지) -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [...]
    }
  </script>
</head>
```

---

## Part 6: 수익 전망 및 성장 로드맵

### 6.1 트래픽 및 수익 예측

| 시점 | 도구 수 | 블로그 수 | 일일 방문자 | 예상 RPM | 월 수익 |
|------|--------|---------|----------|---------|--------|
| 1개월 | 5 | 10 | 50~150 | $2~4 | $5~20 |
| 3개월 | 10 | 15 | 300~1,000 | $3~5 | $30~150 |
| 6개월 | 15 | 20 | 1,000~3,000 | $3~5 | $100~450 |
| 12개월 | 15+ | 30+ | 3,000~10,000 | $3~6 | $300~1,800 |
| 18개월 | 20+ | 40+ | 10,000~30,000 | $4~7 | $1,200~6,300 |

**RPM 근거:**
- 엔터테인먼트/유틸리티 니치의 평균 RPM: $2~5 (글로벌)
- 미국/영국 트래픽 비중이 높으면 RPM $5~10까지 가능
- pickerwheel.com의 "spin the wheel" 키워드 CPC: $1.12

### 6.2 실행 로드맵 (12주)

#### Phase 1: 기반 구축 (1~2주)

| 일차 | 작업 | 산출물 |
|------|------|-------|
| Day 1 | 도메인 구매 + Vercel 프로젝트 셋업 | 빈 사이트 배포 |
| Day 2~3 | Coin Flip 도구 개발 | 첫 번째 도구 라이브 |
| Day 4~5 | Dice Roller + Yes/No Generator | 3개 도구 |
| Day 6~7 | Spin the Wheel 개발 | 4개 도구 |
| Day 8 | Random Number Generator | 5개 핵심 도구 완성 |
| Day 9~10 | 필수 법적 페이지 4개 생성 | 법적 요건 충족 |
| Day 11~12 | 홈페이지 디자인 + 네비게이션 | 사이트 기본 구조 완성 |
| Day 13~14 | SEO 최적화 (메타태그, sitemap, robots.txt) | 기술 SEO 완료 |

#### Phase 2: 콘텐츠 강화 (3~4주)

| 작업 | 산출물 |
|------|-------|
| 각 도구 페이지에 How to Use + FAQ + Use Cases 작성 | 5개 페이지 콘텐츠 보강 |
| 블로그 글 8~10개 작성 | SEO + 애드센스 승인용 콘텐츠 |
| Google Search Console 등록 + 사이트맵 제출 | 검색 색인 시작 |
| 내부 링크 구조 완성 (도구 ↔ 블로그) | 사이트 구조 최적화 |

#### Phase 3: 애드센스 신청 + 확장 (5~8주)

| 작업 | 산출물 |
|------|-------|
| Google AdSense 신청 | 승인 대기 |
| Phase 2 도구 5개 추가 (Name Picker, Team Generator 등) | 10개 도구 |
| 블로그 5개 추가 | 총 15개 블로그 |
| 승인 후 광고 배치 최적화 | 첫 수익 발생 |

#### Phase 4: 성장 (9~12주)

| 작업 | 산출물 |
|------|-------|
| Phase 3 바이럴 도구 추가 (Truth or Dare, Would You Rather 등) | 15개+ 도구 |
| 고성과 키워드 분석 → 추가 블로그 | 트래픽 데이터 기반 콘텐츠 |
| 그룹 결정 기능 개발 | 차별화 기능 라이브 |
| 소셜 미디어 공유 최적화 | 바이럴 트래픽 유입 |

---

## Part 7: 리스크 분석 및 대응

| 리스크 | 확률 | 영향도 | 대응 방안 |
|--------|------|-------|---------|
| 애드센스 거절 ("가치 낮은 콘텐츠") | 30% | 높음 | 블로그 글 수 15개로 증가, 도구 페이지 콘텐츠 2,000자+로 보강, 2주 후 재신청 |
| 애드센스 거절 ("콘텐츠 불충분") | 20% | 높음 | 도구 5개 추가 + 블로그 5개 추가 후 재신청 |
| SEO 트래픽 정체 | 40% | 중간 | 롱테일 키워드 전략 재검토, 블로그 콘텐츠 확대, 소셜 미디어 공유 |
| 경쟁사 유사 기능 출시 | 20% | 낮음 | 그룹 결정 기능 등 차별화 포인트로 방어 |
| 낮은 CPC (엔터테인먼트 니치) | 70% | 중간 | 트래픽 볼륨으로 보상, "decision making" 등 고CPC 키워드 콘텐츠 강화 |

---

## Part 8: 추가 추천 도구 (Tier 1~3 외)

위 15개 외에 사이트에 도움이 될 추가 도구들:

| 도구명 | 타겟 키워드 | 월 검색량 | 왜 추가해야 하는가 |
|--------|-----------|---------|-----------------|
| **Coin Flip Streak Counter** | "coin flip streak" | 20K+ | 게이미피케이션 요소, 체류시간 증가 |
| **Random Date Generator** | "random date generator" | 40K+ | 커플 데이트 결정용, 바이럴 잠재력 |
| **Random Food/Restaurant Picker** | "what should I eat" | 500K+ | 일상적 결정의 킬러 앱, 매우 높은 검색량 |
| **Baby Name Generator** | "random baby name" | 200K+ | 예비 부모 타겟, 높은 재방문율 |
| **Bingo Card Generator** | "bingo card generator" | 100K+ | 교육/파티용, 인쇄 기능 |
| **Tournament Bracket Generator** | "tournament bracket maker" | 100K+ | 게이머/스포츠 타겟 |
| **Icebreaker Question Generator** | "icebreaker questions" | 150K+ | 회사/학교/파티용, 시즌 키워드 |
| **Lottery Number Generator** | "lottery number generator" | 200K+ | 매우 높은 반복 방문율 |

특히 **"Random Food/Restaurant Picker"** (what should I eat)는 월 검색량 500K+에 경쟁이 낮아서, 단독으로도 상당한 트래픽을 끌어올 수 있는 킬러 도구입니다.

---

## Part 9: 사이트 구조 (URL 설계)

```
{도메인}/
├── / (홈페이지 — 모든 도구 소개 + 히어로)
├── /coin-flip
├── /dice-roller
├── /spin-the-wheel
├── /yes-or-no
├── /random-number-generator
├── /random-name-picker
├── /team-generator
├── /random-letter
├── /random-color
├── /truth-or-dare
├── /would-you-rather
├── /random-quote
├── /magic-8-ball
├── /rock-paper-scissors
├── /blog/ (블로그 인덱스)
│   ├── /blog/how-to-make-decisions
│   ├── /blog/history-of-coin-flipping
│   ├── /blog/party-games-spinner-wheel
│   └── ... (8~10개)
├── /about
├── /contact
├── /privacy-policy
├── /terms-of-service
├── /sitemap.xml
└── /robots.txt
```

### URL 규칙
- 모두 소문자
- 단어 구분: 하이픈(-)
- 간결하고 키워드 포함
- /tools/ 등 불필요한 중간 경로 없이 루트 레벨 배치 (SEO 유리)

---

## Part 10: 광고 배치 전략 (승인 후)

### 10.1 권장 광고 위치

| 위치 | 광고 유형 | 이유 |
|------|---------|------|
| 도구 UI 아래, 콘텐츠 섹션 시작 전 | 디스플레이 광고 (728x90) | 도구 사용 후 자연스럽게 노출 |
| How to Use 와 FAQ 사이 | 인피드 광고 | 콘텐츠 읽는 흐름에 자연스러움 |
| 블로그 글 중간 | 콘텐츠 내 광고 | 장문 콘텐츠에 적합 |
| 사이드바 (데스크톱) | 디스플레이 광고 (300x250) | 도구 사용 중 지속 노출 |
| 풋터 위 | 멀티플렉스 광고 | 추가 노출 |

### 10.2 광고 금지 사항

- 도구 UI 바로 위에 광고 배치하지 않기 (클릭 유도로 판정될 수 있음)
- 팝업/팝언더 광고 사용 금지
- 광고와 콘텐츠 구분 명확히 하기
- 모바일에서 화면 50% 이상 광고로 채우지 않기

---

## Part 11: 핵심 성공 지표 (KPI)

| 지표 | 1개월 목표 | 3개월 목표 | 6개월 목표 |
|------|----------|----------|----------|
| 도구 수 | 5개 | 10개 | 15개 |
| 블로그 글 수 | 10개 | 15개 | 25개 |
| 일일 방문자 | 50+ | 500+ | 2,000+ |
| 평균 세션 시간 | 1분+ | 1.5분+ | 2분+ |
| 페이지/세션 | 1.5+ | 2.0+ | 2.5+ |
| 애드센스 승인 | 신청 완료 | 승인 완료 | 최적화 중 |
| 월 수익 | $0 | $50~150 | $200~500 |
| 검색 색인 페이지 수 | 15+ | 25+ | 40+ |

---

## 부록: 경쟁사 키워드 인텔리전스

pickerwheel.com의 상위 오가닉 키워드 (참고용):

| 키워드 | 월 검색량 | CPC |
|--------|---------|-----|
| spin the wheel | 924,470 | $1.12 |
| picker wheel | 49,840 | $0.37 |
| yes or no wheel | 73,160 | $0.58 |
| yes or no | 73,540 | $0.14 |
| wheel picker | 31,610 | $0.45 |

이 키워드들은 모두 우리 사이트의 타겟 키워드에 포함됨. 특히 "spin the wheel" (월 92만+)과 "yes or no" (월 7만+)는 핵심 공략 대상.

---

> **다음 단계**: 이 plan.md를 기반으로 Claude Code에서 직접 개발을 시작하시면 됩니다.
> Phase 1 (도메인 구매 + 핵심 도구 5개 + 법적 페이지)부터 시작하는 것을 권장합니다.
---

## 2026-03-08 Implementation Update (Status)

### Completed
- Next.js 14 + TypeScript + Tailwind MVP implemented.
- Phase 1 tools completed:
  - Coin Flip
  - Dice Roller
  - Spin the Wheel
  - Yes/No Generator
  - Random Number Generator
- Phase 2 tools completed:
  - Random Name Picker
  - Team Generator
  - Random Letter Generator
  - Random Color Generator
  - Countdown Timer + Random
- Blog system implemented:
  - Blog index + dynamic detail pages
  - 10 initial posts
  - Related tools and related posts auto-linking
  - Expanded content sections for stronger SEO depth
  - Blog structured data added (ItemList, BlogPosting, Breadcrumb, FAQ)
- Legal/info pages implemented and expanded:
  - About
  - Contact
  - Privacy Policy
  - Terms of Service
- SEO/technical baseline implemented:
  - Locale-aware metadata/canonical
  - Tool JSON-LD (SoftwareApplication + FAQ)
  - sitemap.xml and robots.txt
- International routing enabled:
  - en, es, pt, ar, hi, tr
- Theme and UX:
  - Dark default + light toggle
  - Arabic locale RTL direction support
- Ad placement foundation:
  - Environment-gated `AdSlot` component
  - Placeholder fallback when AdSense client is not configured

### Deployment and Security Updates
- Deployment target path fixed to `https://utilverse.info/random-decision`.
- `next.config.js` updated:
  - `basePath: /random-decision`
  - security headers (CSP, X-Frame-Options, etc.)
  - poweredByHeader disabled
- `.env.example` updated with production URL and AdSense variable.
- Deployment guide added: `docs/deployment-guide.md`.

### Pending (Operational)
- Set real AdSense client and slot IDs after approval.
- Connect Search Console and submit sitemap.
- Run final production test (`pnpm build`, route smoke test, CSP validation).

---

## 2026-03-08 Validation Update (Post-Implementation)

### Functional and Architecture Validation
- Verified total tool routes expanded to **15**.
- Verified all random generators migrated to crypto-based helper (`lib/random.ts`) using `crypto.getRandomValues`.
- Verified locale pages (`en/es/pt/ar/hi/tr`) and RTL behavior for `ar`.
- Verified legal pages are now locale-backed via `lib/content/legal.ts`.

### URL Strategy Validation
- Current production target `https://utilverse.info/random-decision` is valid with current codebase.
- `next.config.js` uses `basePath: /random-decision`, and route generation/canonical strategy aligns with this.
- Metadata routes (`sitemap.xml`, `robots.txt`) are configured to work under the same base path.

### Alternative URL Options (Reviewed)
- `https://random-decision.utilverse.info`:
  - Pros: cleaner app identity, better long-term product separation
  - Cons: requires DNS/subdomain rollout and migration planning
- `https://utilverse.info/random`:
  - Pros: shorter URL
  - Cons: path rename + potential canonical migration effort

### Recommendation
- Keep `https://utilverse.info/random-decision` for upcoming Vercel test and initial launch.
- Re-evaluate subdomain migration after stable traffic and monetization baseline.

### Vercel Test Preparation Status
- Deployment guide updated: `docs/deployment-guide.md`
- Security headers/CSP configured in `next.config.js`
- Remaining pre-AdSense operational tasks:
  - real contact email replacement
  - real AdSense client + slot IDs
  - ads.txt addition (after publisher id issuance)

---

## 2026-03-08 UX Refresh Update

### Completed in this update
- Site layout was restructured to reduce the template-like look:
  - New hero-first homepage composition
  - Visual featured tool gallery with local SVG image assets
  - Refined header/footer navigation and spacing
  - Tool page top section redesigned with visual media split
- Added visual assets under `public/media` including animated SVG previews:
  - `coin-motion.svg`, `wheel-motion.svg`, `dice-motion.svg`
  - supporting assets: `hero-decision.svg`, `food-pick.svg`, `team-pick.svg`, `tool-generic.svg`
- Added `lib/content/catalog.ts` to centralize tool card metadata (name, desc, badge, image).
- Duplicate navigation entry bug fixed (`Food Picker` duplicated in header).
- Local development CSP issue addressed:
  - dev-only `'unsafe-eval'` enabled to allow Next.js React Refresh
  - production CSP remains strict

### Validation
- `npm run build` completed successfully after UI refresh and media additions.
- Tool route generation and static page output remained healthy.

### Next optional enhancements
- If you want heavier motion, replace SVG motion with selective Lottie on top 2 tools only.
- Add per-tool OG image generation for social sharing consistency.

---

## 2026-03-08 Product Direction Update (Applied)

### Scope applied from design/SEO/monetization directive
- Brand/design:
  - Playful visual tone with subtle motion
  - Fixed top 3 hero CTA pattern on homepage
  - Large CTA touch targets (mobile-safe sizing)
- Tool UX:
  - Coin/Dice/Wheel now follow input->run->result pattern
  - Result color feedback and adjacent rerun button
- SEO structure:
  - Added `/[locale]/tools` index page
  - Added category hubs: random, picker, games, utility
  - Expanded structured data with CollectionPage + ItemList + BreadcrumbList
  - Tool page related links expanded to related tools (6) + related posts (3)
- Content flow:
  - Blog detail page now includes tool CTA at top and middle
- Monetization:
  - Medium ad density pattern kept
  - Ad slot min-height guard added to reduce CLS

### Validation
- `npm run build` passed after all updates.
