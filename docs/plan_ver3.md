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

## 미포함 항목 (범위 외)

다음 항목은 이번 Plan Ver 3 범위에서 제외 (별도 계획 필요 시 논의):
- 매직 8-볼 신규 도구 (기존 품질 우선 원칙)
- 가위바위보 신규 도구
- 랜덤 패스워드 생성기
- 멀티플레이어 배틀 모드 (서버 필요)
- PWA 오프라인 지원
- Google Funding Choices CMP 연동 (RISK-005)

---

_이 계획은 Phase 7→8→9→10 순서로 진행하며, P0(Phase 7, 8)를 먼저 구현합니다._
_작성: 2026-03-14_
