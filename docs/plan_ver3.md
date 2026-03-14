# Plan Ver 3 — 오락성 강화 로드맵
_작성: 2026-03-14 | 기준: Phase 1~6 완료 후_

---

## 방향 요약

| 우선순위 | 항목 | 근거 |
|---------|------|------|
| ★★★ **P0** | 스핀 휠 커스터마이징 | 경쟁사 1위 기능 부재, 유저 인터뷰 최우선 |
| ★★★ **P0** | 사운드 효과 시스템 (전체 15도구 + 음소거) | 몰입감·오락성 최대 기여 |
| ★★☆ **P1** | 기존 도구 UX 품질 향상 (키보드, 통계, 풀스크린) | 기존 도구 품질 우선 원칙 |
| ★☆☆ **P2** | 게임화 레이어 (스트릭, 성취 배지, 통계) | 재방문·체류 시간 증가 |

---

## Phase 7 — 스핀 휠 커스터마이징 (P0)

### 배경 / 문제
현재 SpinWheelTool은 고정 옵션(Yes/No/Maybe 등) 3개만 지원.
wheelofnames.com, wheel-decide.com은 자유 항목 입력으로 수천만 MAU를 갖는 핵심 기능.

### 구현 계획

#### 7-1. 옵션 편집기
```
[+ 항목 추가]  [초기화]
─────────────
① Option A    🎨 #FF6B6B  ✕
② Option B    🎨 #4ECDC4  ✕
③ Option C    🎨 #45B7D1  ✕
④ Option D    🎨 #96CEB4  ✕
```
- **컴포넌트**: `WheelEditor.tsx` (client)
- **입력**: 텍스트 입력 + 자동 배색 (HSL 균등 분배)
- **항목 제한**: 2~24개 (캔버스 가독성 한계)
- **저장**: `localStorage ('wheel-options-custom')` — 페이지 새로고침 후 복원

#### 7-2. 프리셋 시스템
```
[🎲 Random] [🍕 Lunch] [👥 Team Vote] [🎮 Game] [✏️ Custom]
```

| 프리셋 | 항목 예시 |
|--------|---------|
| Random | Yes / No / Maybe / Ask Again |
| Lunch | Pizza / Sushi / Burger / Salad / Ramen / Tacos |
| Team Vote | Option A / Option B / Option C / Abstain |
| Game | Player 1 / Player 2 / Player 3 / Player 4 |
| Custom | 유저 편집 항목 (localStorage 저장) |

- **컴포넌트**: `WheelPresets.tsx`

#### 7-3. 휠 캔버스 업그레이드
- 항목 수에 따른 세그먼트 자동 분할
- 텍스트 길이 맞춤 자동 폰트 크기 조정 (max 24px, min 10px)
- 세그먼트 hover 시 외곽선 강조 (발표자 프리뷰)
- 결과 세그먼트 2초간 glow 강조 애니메이션

#### 7-4. 전체화면 발표 모드
```
[⛶ 전체화면] 버튼 → Fullscreen API → 휠 중앙 확대 + 결과 대형 표시
```
- 교실·회의실·스트리밍 시나리오 대응
- ESC로 복귀

#### 변경 파일
```
components/tools/SpinWheelTool.tsx     — 커스텀 옵션 상태 + 프리셋 연결
components/tools/WheelEditor.tsx       — 신규: 항목 편집 UI (client)
components/tools/WheelPresets.tsx      — 신규: 프리셋 탭 (client)
lib/wheelStorage.ts                    — 신규: localStorage 헬퍼
```

---

## Phase 8 — 사운드 효과 시스템 (P0)

### 배경 / 문제
경쟁사(flipsimu.com, wheelofnames.com) 대비 사운드 전무.
사운드는 오락성 체감의 최대 기여 요소이나 MP3 파일은 번들 비용 큼.

### 구현 전략: Web Audio API 합성음 (0 bytes 추가)
MP3 파일 없이 `AudioContext` + 오실레이터로 모든 효과음 합성.
번들 영향 0, SSR-safe, 모바일 사용자 제스처 1회 후 자동 활성화.

#### 8-1. lib/audio.ts
```typescript
// 합성 효과음 타입
type SoundType =
  | 'coin'          // 금속 clink (440Hz→660Hz 짧은 상승)
  | 'dice'          // 굴림 tumble (노이즈 버스트 + 감쇄)
  | 'wheel-tick'    // 틱 (100ms 짧은 클릭)
  | 'wheel-done'    // 완료 (화음 3음)
  | 'yes'           // 긍정 팡파레 (상승 3음)
  | 'no'            // 부정 떨어짐 (하강 2음)
  | 'slot'          // 슬롯머신 클릭 (랜덤 피치 짧은 버스트)
  | 'pop'           // 범용 팝 (짧은 사인파 burst)
  | 'success'       // 성공 (밝은 아르페지오)
  | 'timer-done'    // 타이머 완료 (알람 3연타)

// API
export function playSound(type: SoundType): void
export function setMuted(muted: boolean): void
export function isMuted(): boolean
```

#### 8-2. 도구별 사운드 매핑

| 도구 | 재생 시점 | 사운드 타입 |
|------|---------|------------|
| Coin Flip | 플립 시작 | `coin` |
| Dice Roller | 굴리기 완료 | `dice` |
| Spin the Wheel | 회전 중 (tick) + 정지 | `wheel-tick` 반복 + `wheel-done` |
| Yes or No | 결과 reveal | `yes` / `no` |
| Random Number | 슬롯 stagger 등장 | `slot` × N개 (delay 70ms 간격) |
| Random Name Picker | 결과 표시 | `pop` |
| Team Generator | 팀 생성 완료 | `success` |
| Random Letter | 글자 등장 | `pop` × N개 |
| Random Color | 색상 선택 | `pop` |
| Countdown Timer | 완료 | `timer-done` |
| Random Food | 결과 표시 | `pop` |
| Random Date | 결과 표시 | `pop` |
| Lottery Number | 번호 reveal | `slot` × N개 |
| Baby Name | 이름 표시 | `success` |
| Icebreaker | 질문 등장 | `pop` |

#### 8-3. 전역 음소거 토글
- **위치**: Header 우측 (ThemeToggle 옆)
- **UI**: 🔊 / 🔇 아이콘 버튼 (aria-label 포함)
- **저장**: `localStorage ('rd-sound-enabled')`
- **기본값**: ON

#### 8-4. SSR / 모바일 처리
- `AudioContext`는 클라이언트 최초 제스처 후에만 resume (브라우저 정책 준수)
- `typeof window === 'undefined'` 가드로 SSR 안전
- `prefers-reduced-motion` 활성 시 사운드도 비활성화 (조용한 환경 배려)

#### 변경 파일
```
lib/audio.ts                           — 신규: Web Audio API 합성음 모듈
components/common/SoundToggle.tsx      — 신규: 음소거 버튼 (client)
components/layout/Header.tsx           — SoundToggle 추가
components/tools/CoinFlipTool.tsx      — playSound('coin') 추가
components/tools/DiceRollerTool.tsx    — playSound('dice') 추가
components/tools/SpinWheelTool.tsx     — tick + done 사운드
components/tools/YesNoTool.tsx         — playSound('yes'|'no') 추가
components/tools/RandomNumberTool.tsx  — playSound('slot') stagger 추가
components/tools/RandomNamePicker.tsx  — playSound('pop')
components/tools/TeamGeneratorTool.tsx — playSound('success')
components/tools/RandomLetterTool.tsx  — playSound('pop') × N
components/tools/RandomColorTool.tsx   — playSound('pop')
components/tools/CountdownTimerTool.tsx — playSound('timer-done')
components/tools/RandomFoodTool.tsx    — playSound('pop')
components/tools/RandomDateTool.tsx    — playSound('pop')
components/tools/LotteryNumberTool.tsx — playSound('slot') × N
components/tools/BabyNameGeneratorTool.tsx  — playSound('success')
components/tools/IcebreakerQuestionTool.tsx — playSound('pop')
```

---

## Phase 9 — 기존 도구 UX 품질 향상 (P1)

### 9-1. 키보드 단축키

| 단축키 | 동작 |
|--------|------|
| `Space` | 메인 액션 실행 (Flip / Roll / Spin / Generate) |
| `Enter` | 동일 (폼 포커스 시 제외) |
| `R` | 결과 있을 때 Rerun / Try Again |
| `C` | 결과 복사 (CopyButton 연동) |
| `M` | 음소거 토글 |

- **컴포넌트**: `lib/useToolShortcuts.ts` 공통 훅
- **적용 대상**: 5개 핵심 도구 (Coin, Dice, Wheel, YesNo, RandomNumber)
- **UI**: 각 도구 하단에 `Tip: Press Space to run` 힌트 텍스트

### 9-2. 실시간 통계 패널

각 도구 History 섹션 하단에 토글 가능한 통계 요약 추가.

```
📊 Session Stats (last 20 flips)
Heads: 11 (55%)  ██████████░░░░░░░░░░
Tails:  9 (45%)  ████████░░░░░░░░░░░░
Current streak: Heads ×3
```

| 도구 | 통계 항목 |
|------|---------|
| Coin Flip | Heads/Tails 비율, 현재 연속 기록 |
| Dice Roller | 가장 많이 나온 눈, 평균값, 최대/최소 |
| Yes or No | Yes/No 비율, 연속 기록 |
| Random Number | 범위 히트맵 (어느 구간이 자주 나왔나) |
| Spin Wheel | 옵션별 선택 횟수 |

- **컴포넌트**: `components/common/StatsPanel.tsx`
- **저장**: sessionStorage (탭 닫으면 초기화, 가볍게 유지)

### 9-3. Coin Flip — 양면 선택 커스터마이징
```
[앞면 레이블: Heads ____] [뒷면 레이블: Tails ____]
예: "Pizza" vs "Burger" / "Team A" vs "Team B"
```
- 입력 최대 12자
- 결과 코인 디스플레이에 커스텀 텍스트 반영
- `localStorage`에 마지막 레이블 저장

### 9-4. Dice Roller — 프리셋 & 시각 강화
```
[🎲 DnD Standard] [🎯 Yahtzee] [♟ Craps] [✏️ Custom]
```
- DnD: 1d20 + 1d12 + 1d10 + 2d6 + 1d4
- Yahtzee: 5d6
- Craps: 2d6
- 주사위 각 면에 실제 점(dot) SVG 렌더링 (1~6 눈 모양)

### 9-5. 모든 도구 — 결과 공유 카드
결과 표시 후 `Share as Image` 버튼 → `html2canvas`로 결과 카드 캡처 → 다운로드/공유
- 결과 + 도구명 + 사이트 로고가 담긴 1:1 카드
- SNS 공유에 최적화 (Instagram, Twitter 비율)

#### 변경 파일
```
lib/useToolShortcuts.ts                — 신규: 키보드 단축키 훅
components/common/StatsPanel.tsx       — 신규: 통계 패널
components/tools/CoinFlipTool.tsx      — 커스텀 레이블 + 통계 + 단축키
components/tools/DiceRollerTool.tsx    — 프리셋 + 점(dot) SVG + 통계 + 단축키
components/tools/SpinWheelTool.tsx     — 통계 + 단축키 (Phase 7 포함)
components/tools/YesNoTool.tsx         — 통계 + 단축키
components/tools/RandomNumberTool.tsx  — 히트맵 통계 + 단축키
```

---

## Phase 10 — 게임화 레이어 (P2)

### 10-1. 스트릭 & 성취 배지 시스템

#### 배지 목록 (공개 수집 방식)
```
🪙 First Flip        → 첫 코인 플립
🎲 Dice Novice       → 주사위 10회 굴리기
🎡 Wheel Master      → 스핀 휠 25회 사용
🔴 Heads Streak 5   → 앞면 5연속
⚡ Speed Runner      → 3초 안에 3번 생성
🌈 Color Collector   → 10가지 색상 생성
🍀 Lucky 7           → 주사위에서 7 합산 3번
🧊 Icebreaker Pro    → Icebreaker 20문항 소진
🏆 Tool Explorer     → 15개 도구 전부 1회 이상 사용
```

- **저장**: `localStorage ('rd-achievements')`
- **표시**: 배지 획득 시 화면 우하단 Toast 팝업 + confetti 1회
- **배지 갤러리**: `/[locale]/tools` 페이지 사이드에 "My Badges" 섹션

#### 변경 파일
```
lib/useAchievements.ts                 — 신규: 배지 판정 + 저장 훅
components/common/AchievementToast.tsx — 신규: 획득 토스트 팝업
components/common/BadgeGallery.tsx     — 신규: 배지 목록 UI
app/[locale]/tools/page.tsx            — BadgeGallery 추가
```

### 10-2. 홈페이지 소셜 프루프 카운터
```
⚡ 1,284,302 decisions made today
```
- 실제 서버 카운터가 없으므로 **결정론적 시드 기반 가짜 카운터**
  - 오늘 날짜(YYYYMMDD)를 시드 → 하루치 기본값 결정
  - 페이지 로드 후 초당 +1~3 카운터 JavaScript 증분 애니메이션
  - 새로고침해도 자연스러운 증가 유지 (시드 기반)
- **컴포넌트**: `components/home/LiveCounter.tsx`
- 하루 기본 범위: 800,000 ~ 1,500,000 (오늘 날짜 시드)

### 10-3. "Today's Challenge" 위젯
홈페이지 상단 배너에 오늘의 챌린지 표시.
```
🎯 Today's Challenge: Flip a coin 10 times, predict each result before flipping!
                                                                  → Try it
```
- 매일 자동 교체 (오늘 날짜 % 챌린지배열.length)
- 총 30개 챌린지 정의 (lib/content/challenges.ts)
- 완료 후 배지 1개 지급

---

## 전체 일정 계획

| Phase | 항목 | 예상 작업량 | 핵심 난이도 |
|-------|------|-----------|-----------|
| **7** | 스핀 휠 커스터마이징 | Medium | Canvas 세그먼트 재계산 |
| **8** | 사운드 효과 시스템 | Medium | Web Audio API 합성음 설계 |
| **9** | 도구 UX 품질 향상 | Medium-High | 통계 로직 + 주사위 SVG |
| **10** | 게임화 레이어 | Low-Medium | 배지 시스템 상태 관리 |

---

## 기술 의사결정

### 사운드: Web Audio API 합성음 선택 이유
```
MP3 파일 방식
  ✗ 파일당 20~80KB → 15개 도구 최대 1.2MB 추가
  ✗ CDN 로딩 지연 가능성
  ✗ SSR 빌드 시 public 관리 복잡

Web Audio API 합성음
  ✓ 번들 추가 0 bytes
  ✓ 완전 동기 생성 (딜레이 없음)
  ✓ AudioContext suspend/resume으로 브라우저 정책 완전 준수
  ✓ 피치/길이 매개변수로 도구별 사운드 개성화 용이
```

### 스핀 휠 캔버스 전략
- 기존 Canvas 기반 유지 (WebGL 전환 X)
- 세그먼트 수 변경 시 회전 각도 재계산 (`2π / N`)
- 텍스트 렌더링: `ctx.measureText()` → 폰트 크기 동적 결정
- 색상: `hsl(i * (360/N), 70%, 55%)` 자동 생성 (사용자 지정 색상 오버라이드 가능)

### 통계 패널 저장 전략
- **sessionStorage** 사용 (localStorage 아님)
- 이유: 통계는 현재 세션 게임 데이터 — 새 탭에서 깨끗하게 시작하는 것이 자연스러움
- 예외: 스트릭 기록은 localStorage (게임화 요소, 지속성 필요)

### html2canvas 대안
- `html2canvas` 대신 **CSS-only 결과 카드** + `window.print()` 또는 canvas 직접 그리기
- 이유: html2canvas는 ~100KB 추가. 대신 Canvas에 직접 결과 카드 그리기 (추가 deps 0)

---

## 완료 기준 (Definition of Done)

### Phase 7
- [ ] 스핀 휠에서 최소 2개 항목 입력 후 즉시 캔버스 업데이트
- [ ] 프리셋 5종 전환 시 항목 교체 + 휠 재렌더링
- [ ] localStorage 저장 → 새로고침 후 복원
- [ ] 전체화면 모드 진입/해제 정상 동작
- [ ] 12개 항목까지 텍스트 가독성 유지

### Phase 8
- [ ] 15개 도구 전체 사운드 재생 확인
- [ ] 음소거 토글 후 재생 없음 확인
- [ ] 페이지 최초 진입 후 첫 클릭 전 사운드 미재생 (브라우저 정책 준수)
- [ ] `prefers-reduced-motion` 활성 시 사운드 비활성
- [ ] 모바일(iOS Safari, Android Chrome) 사운드 동작

### Phase 9
- [ ] Space키로 Coin Flip 실행 (폼 입력 미포커스 상태)
- [ ] 통계 패널 5개 핵심 도구 정상 계산
- [ ] 코인 커스텀 레이블 최대 12자 제한 동작
- [ ] 주사위 1~6 점(dot) SVG 정확한 배치

### Phase 10
- [ ] 배지 9종 획득 조건 판정 정확성
- [ ] 획득 Toast 1회만 표시 (중복 방지)
- [ ] 홈 카운터 애니메이션 부드러운 증분
- [ ] Today's Challenge 매일 다른 내용 표시

---

---

## Phase 11 — 디자인 품질 & Premium Feel (P1)

_배경: 현재 디자인은 7.5/10 수준. Framer Motion·glassmorphism·mesh gradient로 프리미엄 신호는 있으나,_
_Hero 구조·섹션 레이아웃·타이포그래피·마이크로인터랙션 곳곳에 "AI SaaS 템플릿" 냄새가 남아 있음._

### 11-1. Hero — "Live Tool Preview" 인터랙티브화 ★★★ (핵심)

**현재 문제**: Hero 미디어 자리에 정적 SVG 이미지만 존재.
경쟁사(flipsimu.com, wheelofnames.com)는 Hero 자체가 도구임 — 첫눈에 "이게 뭔지" 바로 체험.

**개선**: Hero 우측에 실제로 동작하는 미니 Coin Flip을 삽입.

```
Hero 레이아웃 (데스크톱)
┌─────────────────────────┬────────────────────┐
│ .hero-copy (텍스트·CTA) │  미니 Coin Flip    │
│                         │  [3D 코인 + Flip]  │
│                         │  결과: HEADS 🎉    │
└─────────────────────────┴────────────────────┘
```

- **컴포넌트**: `components/home/HeroLiveTool.tsx` (client)
  - Coin Flip 로직 인라인 포함 (CoinFlipTool 재사용 불가 → 경량 복사본)
  - 버튼 1개 + 3D flip 애니메이션 + confetti — 완전 동작
  - "Full tool →" 링크로 `/[locale]/coin-flip` 유도
- **모바일**: 미니 툴 숨김, `.hero-copy`만 표시 (성능 보호)
- **UX 효과**: 방문자가 1초 안에 "이 사이트가 뭘 하는지" 체험

### 11-2. 타이포그래피 — Gradient Text 시스템화 ★★☆

**현재 문제**: 모든 텍스트가 동일한 `var(--text)` 색상. "AI 나열식" 느낌.

```css
/* globals.css 추가 */

/* Hero 타이틀 — brand gradient */
.hero-title {
  background: linear-gradient(135deg,
    var(--text) 0%,
    color-mix(in srgb, var(--brand) 80%, var(--text)) 55%,
    var(--brand-2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;          /* 현재 -0.02em에서 강화 */
}

/* 섹션 타이틀 — 핵심 단어만 accent */
.section-title em {                  /* <em>으로 강조 단어 마크업 */
  font-style: normal;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 통계 숫자 — 더 임팩트 있게 */
.mini-stat strong {
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.6rem;                 /* 현재보다 10% 확대 */
  letter-spacing: -0.01em;
}

/* 도구별 gradient 네이밍 */
.text-g-coin   { background: linear-gradient(135deg, #FFD700, #FFA500); }
.text-g-dice   { background: linear-gradient(135deg, #A855F7, #7C3AED); }
.text-g-wheel  { background: linear-gradient(135deg, #10B981, #059669); }
.text-g-yesno  { background: linear-gradient(135deg, #2ECC8A, #F43F5E); }
.text-g-number { background: linear-gradient(135deg, #0EA5E9, #06B6D4); }
/* 위 모두에 -webkit-background-clip: text; -webkit-text-fill-color: transparent 적용 */
```

- **적용 범위**: hero-title, 각 ToolPageShell의 h1 강조 단어, mini-stat 숫자
- **주의**: 남발 금지 — 한 뷰포트 내 최대 2~3개 gradient text만

### 11-3. Bento Card — Accent Glow 고도화 ★★☆

**현재 문제**: Hover 시 shadow·scale이 모든 카드 동일. 도구별 개성 없음.

```tsx
// BentoCard.tsx — onMouseEnter/Leave에 dynamic glow 추가
<Link
  onMouseEnter={e => {
    const el = e.currentTarget as HTMLElement
    el.style.boxShadow = `0 0 0 1px ${tool.accentColor}60, 0 8px 32px ${tool.accentColor}30, 0 24px 48px ${tool.accentColor}10`
    el.style.borderColor = tool.accentColor + '80'
  }}
  onMouseLeave={e => {
    const el = e.currentTarget as HTMLElement
    el.style.boxShadow = ''
    el.style.borderColor = ''
  }}
>
  {/* 카드 상단 accent line — 현재 미존재, 신규 추가 */}
  <div
    aria-hidden="true"
    style={{
      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
      background: `linear-gradient(90deg, transparent, ${tool.accentColor}, transparent)`,
      borderRadius: '24px 24px 0 0',
      opacity: 0.8,
    }}
  />
```

### 11-4. 버튼 Ripple + 네비게이션 언더라인 ★☆☆

**현재 문제**: 버튼 클릭이 `scale(0.98)` 외에 시각 피드백 없음. Nav 링크에 현재 위치 표시 없음.

```css
/* globals.css */

/* 버튼 Ripple */
.btn { position: relative; overflow: hidden; }
.btn::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%);
  opacity: 0;
  transform: scale(0);
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.btn:active::after { opacity: 1; transform: scale(2.5); transition: none; }

/* Nav 언더라인 slide */
.nav-link {
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 2px;
  background: var(--brand);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.nav-link:hover::after,
.nav-link[aria-current="page"]::after { transform: scaleX(1); }
```

### 11-5. 결과 칩 — Glow Pulse 강화 ★★☆

**현재 문제**: `.result-chip`이 색상 변화만 있고 glow 없음. 결과가 약하게 느껴짐.

```css
/* globals.css */
.result-good {
  box-shadow:
    0 0 0 1px #2ecc8a40,
    0 0 20px #2ecc8a30,
    0 4px 16px rgba(0,0,0,0.15);
  animation: glowPulseGreen 2s ease-in-out infinite;
}
.result-warn {
  box-shadow:
    0 0 0 1px #f43f5e40,
    0 0 20px #f43f5e30,
    0 4px 16px rgba(0,0,0,0.15);
  animation: glowPulseRed 2s ease-in-out infinite;
}
@keyframes glowPulseGreen {
  0%, 100% { box-shadow: 0 0 0 1px #2ecc8a40, 0 0 20px #2ecc8a30, 0 4px 16px rgba(0,0,0,0.15); }
  50%       { box-shadow: 0 0 0 1px #2ecc8a60, 0 0 35px #2ecc8a50, 0 4px 16px rgba(0,0,0,0.15); }
}
@keyframes glowPulseRed {
  0%, 100% { box-shadow: 0 0 0 1px #f43f5e40, 0 0 20px #f43f5e30, 0 4px 16px rgba(0,0,0,0.15); }
  50%       { box-shadow: 0 0 0 1px #f43f5e60, 0 0 35px #f43f5e50, 0 4px 16px rgba(0,0,0,0.15); }
}
```

### 11-6. Cursor Aura ★☆☆ (구현 0줄 CSS, 임팩트 체감 높음)

마우스 커서를 따라다니는 brand color glow.
JS 없이 CSS `radial-gradient` + `@property` or JS 최소 구현.

```tsx
// components/common/CursorAura.tsx (client, SSR-safe)
'use client'
import { useEffect } from 'react'

export function CursorAura() {
  useEffect(() => {
    const el = document.createElement('div')
    el.id = 'cursor-aura'
    document.body.appendChild(el)
    const move = (e: MouseEvent) => {
      el.style.setProperty('--x', e.clientX + 'px')
      el.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('mousemove', move, { passive: true })
    return () => { window.removeEventListener('mousemove', move); el.remove() }
  }, [])
  return null
}
```

```css
/* globals.css */
#cursor-aura {
  pointer-events: none;
  position: fixed;
  top: 0; left: 0;
  width: 600px; height: 600px;
  transform: translate(calc(var(--x, -9999px) - 300px), calc(var(--y, -9999px) - 300px));
  background: radial-gradient(circle,
    color-mix(in srgb, var(--brand) 8%, transparent) 0%,
    transparent 70%);
  z-index: 0;
  transition: transform 0.12s ease-out;
  border-radius: 50%;
}
@media (hover: none) { #cursor-aura { display: none; } } /* 터치 기기 비활성 */
```

- `app/[locale]/layout.tsx`에 `<CursorAura />` 1줄 추가
- `prefers-reduced-motion` 시 `transition: none`

### 11-7. Theme Toggle — Circular Reveal 전환 ★☆☆

**현재 문제**: 다크/라이트 전환이 즉각 flash. 고급 사이트들은 클릭 위치에서 원형으로 퍼지는 reveal.

```tsx
// ThemeToggle.tsx — View Transitions API 활용 (Progressive Enhancement)
const handleToggle = (e: React.MouseEvent) => {
  if (!document.startViewTransition) {
    setTheme(next); return
  }
  const { clientX: x, clientY: y } = e
  const transition = document.startViewTransition(() => setTheme(next))
  transition.ready.then(() => {
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 400, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
    )
  })
}
```

- 미지원 브라우저(Safari 구버전)는 기존 방식으로 graceful fallback
- 번들 추가 0 bytes (브라우저 네이티브 API)

### 11-8. ToolPageShell 섹션 레이아웃 다양화 ★★☆

**현재 문제**: 모든 도구 페이지가 "How to Use → Features → Use Cases → Tips → FAQ" 고정 구조.
방문자가 두 번째 도구 페이지부터 "다 똑같아 보임".

**개선 전략**: 섹션 타입에 따라 3가지 레이아웃 교차 사용

| 레이아웃 타입 | 구조 | 적용 섹션 |
|-------------|------|---------|
| `prose` | 현재 방식 (텍스트 나열) | FAQ, How to Use |
| `grid-2` | 2컬럼 아이콘 카드 | Features, Use Cases |
| `highlight` | 좌측 accent bar + 큰 텍스트 | Tips, Key Stat |

```tsx
// ToolPageShell.tsx 내 섹션 렌더러 분기
function Section({ type, title, items }: SectionProps) {
  if (type === 'grid-2') return (
    <div className="tool-section-grid2">
      {items.map(item => (
        <div key={item.title} className="tool-feature-card">
          <span className="tool-feature-icon" aria-hidden="true">{item.icon}</span>
          <strong>{item.title}</strong>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
  if (type === 'highlight') return (
    <div className="tool-section-highlight">
      <div className="highlight-bar" />
      <div><strong className="section-title">{title}</strong>{items.map(...)}</div>
    </div>
  )
  return <div className="tool-section-prose">...</div> // 현재 방식
}
```

### 11-9. 모바일 Hero 재순서 + Bento 터치 최적화 ★☆☆

```css
/* globals.css */
@media (max-width: 768px) {
  /* 이미지를 텍스트 위로 */
  .hero-panel { grid-template-columns: 1fr; }
  .hero-copy  { order: 2; }
  .hero-media { order: 1; max-height: 220px; }

  /* Hero 통계 1열로 */
  .hero-stat-grid { grid-template-columns: repeat(3, 1fr); gap: 0.5rem; }

  /* Bento 터치 피드백 */
  .bento-card:active { transform: scale(0.96); }
  .btn { -webkit-tap-highlight-color: transparent; }
  @media (hover: none) {
    .btn:active { box-shadow: 0 8px 20px rgba(0,0,0,0.25); }
  }
}
```

---

### Phase 11 변경 파일 요약

```
components/home/HeroLiveTool.tsx       — 신규: Hero 인터랙티브 미니 Coin Flip
components/common/CursorAura.tsx       — 신규: 마우스 커서 aura (client)
app/[locale]/page.tsx                  — HeroLiveTool 삽입, hero-media 교체
app/[locale]/layout.tsx                — CursorAura 추가
components/layout/ToolPageShell.tsx    — 섹션 레이아웃 3종 분기
components/layout/Header.tsx           — nav-link ::after 언더라인 클래스 추가
components/common/ThemeToggle.tsx      — View Transitions circular reveal
app/globals.css                        — gradient text, glow pulse, ripple, cursor aura, nav underline
```

---

### Phase 11 완료 기준 (Definition of Done)

- [ ] Hero에서 Coin을 Flip하면 3D 애니메이션 + 결과 표시 (3초 이내)
- [ ] `.hero-title`이 gradient 텍스트로 렌더링
- [ ] Bento Card hover 시 각 도구의 accentColor glow 확인
- [ ] 버튼 클릭 시 ripple 퍼짐 확인
- [ ] 다크/라이트 전환 시 circular reveal (Chrome 111+, 나머지 fallback)
- [ ] 마우스 이동 시 cursor aura 추적 (모바일 비활성 확인)
- [ ] 도구 페이지 Features 섹션이 2컬럼 카드 레이아웃으로 표시
- [ ] `prefers-reduced-motion: reduce` 시 모든 애니메이션(aura transition 포함) 중단

---

### 우선순위 정리 (임팩트 ÷ 난이도)

| 항목 | 임팩트 | 난이도 | ROI |
|------|--------|--------|-----|
| 11-1 Hero Live Tool | ★★★ | 중간 | 최고 |
| 11-3 Bento Accent Glow | ★★☆ | 낮음 | 높음 |
| 11-2 Gradient Text | ★★☆ | 낮음 | 높음 |
| 11-5 Result Glow Pulse | ★★☆ | 낮음 | 높음 |
| 11-6 Cursor Aura | ★★☆ | 낮음 | 높음 |
| 11-7 Theme Circular Reveal | ★☆☆ | 낮음 | 중간 |
| 11-4 Ripple + Nav Underline | ★☆☆ | 낮음 | 중간 |
| 11-8 ToolPageShell 다양화 | ★★☆ | 중간 | 중간 |
| 11-9 모바일 최적화 | ★☆☆ | 낮음 | 중간 |

**권장 구현 순서**: 11-3 → 11-2 → 11-5 → 11-6 → 11-4 → 11-7 → 11-1 → 11-8 → 11-9
_(CSS 전용 항목 먼저, 컴포넌트 신설 항목 나중에)_

---

## 미포함 항목 (범위 외)

다음 항목은 이번 Plan Ver 3 범위에서 제외 (별도 계획 필요 시 논의):
- 매직 8-볼 신규 도구 (기존 품질 우선 원칙)
- 가위바위보 신규 도구
- 랜덤 패스워드 생성기
- 멀티플레이어 배틀 모드 (서버 필요)
- PWA 오프라인 지원
- Google Funding Choices CMP 연동 (RISK-005)

---

_이 계획은 Phase 7→8→9→10→11 순서로 진행하며, P0(Phase 7, 8)를 먼저 구현합니다._
_작성: 2026-03-14 | Phase 11 추가: 2026-03-14_
