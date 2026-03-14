/**
 * lib/audio.ts
 * Web Audio API 합성음 — 0 bytes 추가, SSR-safe
 * 모든 효과음은 AudioContext 오실레이터로 합성
 */

export type SoundType =
  | 'coin'        // 금속 clink
  | 'dice'        // 굴림 tumble
  | 'wheel-tick'  // 틱
  | 'wheel-done'  // 완료 화음
  | 'yes'         // 긍정 팡파레
  | 'no'          // 부정 하강
  | 'slot'        // 슬롯머신 클릭
  | 'pop'         // 범용 팝
  | 'success'     // 성공 아르페지오
  | 'timer-done'  // 타이머 완료

const SOUND_ENABLED_KEY = 'utilverse-sound-enabled'

let ctx: AudioContext | null = null

function getCtx(): AudioContext | null {
  if (typeof window === 'undefined') return null
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch {
      return null
    }
  }
  // Resume if suspended (browsers require user gesture)
  if (ctx.state === 'suspended') ctx.resume().catch(() => null)
  return ctx
}

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return true
  const stored = localStorage.getItem(SOUND_ENABLED_KEY)
  return stored === null ? true : stored === 'true'
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(SOUND_ENABLED_KEY, String(enabled))
}

function masterGain(ac: AudioContext, volume = 0.25): GainNode {
  const g = ac.createGain()
  g.gain.setValueAtTime(volume, ac.currentTime)
  g.connect(ac.destination)
  return g
}

function osc(
  ac: AudioContext,
  dest: AudioNode,
  type: OscillatorType,
  freq: number,
  startTime: number,
  duration: number,
  freqEnd?: number
) {
  const o = ac.createOscillator()
  const g = ac.createGain()
  o.type = type
  o.frequency.setValueAtTime(freq, startTime)
  if (freqEnd !== undefined) {
    o.frequency.exponentialRampToValueAtTime(freqEnd, startTime + duration)
  }
  g.gain.setValueAtTime(0.001, startTime)
  g.gain.linearRampToValueAtTime(1, startTime + 0.005)
  g.gain.exponentialRampToValueAtTime(0.001, startTime + duration)
  o.connect(g)
  g.connect(dest)
  o.start(startTime)
  o.stop(startTime + duration + 0.01)
}

function noiseBuffer(ac: AudioContext): AudioBuffer {
  const bufLen = ac.sampleRate * 0.15
  const buf = ac.createBuffer(1, bufLen, ac.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1
  return buf
}

export function playSound(type: SoundType): void {
  if (!isSoundEnabled()) return
  const ac = getCtx()
  if (!ac) return

  const now = ac.currentTime
  const g = masterGain(ac)

  switch (type) {
    case 'coin': {
      // 금속 clink: 짧은 상승 두 번
      osc(ac, g, 'sine', 440, now, 0.08, 660)
      osc(ac, g, 'sine', 660, now + 0.06, 0.1, 880)
      break
    }
    case 'dice': {
      // 굴림 noise burst
      const src = ac.createBufferSource()
      src.buffer = noiseBuffer(ac)
      const filter = ac.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.setValueAtTime(800, now)
      filter.Q.setValueAtTime(0.5, now)
      const dg = ac.createGain()
      dg.gain.setValueAtTime(0.6, now)
      dg.gain.exponentialRampToValueAtTime(0.001, now + 0.55)
      src.connect(filter)
      filter.connect(dg)
      dg.connect(ac.destination)
      src.start(now)
      src.stop(now + 0.6)
      break
    }
    case 'wheel-tick': {
      // 틱: 짧은 삼각파
      osc(ac, g, 'triangle', 200, now, 0.06)
      break
    }
    case 'wheel-done': {
      // 완료 3화음
      const chord = [523, 659, 784] // C5, E5, G5
      chord.forEach((freq, i) => osc(ac, g, 'sine', freq, now + i * 0.08, 0.35))
      break
    }
    case 'yes': {
      // 긍정 상승 3음
      osc(ac, g, 'sine', 523, now, 0.15)
      osc(ac, g, 'sine', 659, now + 0.12, 0.15)
      osc(ac, g, 'sine', 784, now + 0.24, 0.3)
      break
    }
    case 'no': {
      // 부정 하강 2음
      osc(ac, g, 'sawtooth', 400, now, 0.2, 200)
      osc(ac, g, 'sawtooth', 280, now + 0.18, 0.25, 150)
      break
    }
    case 'slot': {
      // 슬롯머신: 랜덤 피치 짧은 버스트
      for (let i = 0; i < 5; i++) {
        const freq = 300 + Math.random() * 400
        osc(ac, g, 'square', freq, now + i * 0.055, 0.04)
      }
      break
    }
    case 'pop': {
      // 범용 팝
      osc(ac, g, 'sine', 600, now, 0.07, 300)
      break
    }
    case 'success': {
      // 밝은 아르페지오
      const notes = [523, 659, 784, 1047]
      notes.forEach((freq, i) => osc(ac, g, 'sine', freq, now + i * 0.09, 0.25))
      break
    }
    case 'timer-done': {
      // 알람 3연타
      for (let i = 0; i < 3; i++) {
        osc(ac, g, 'square', 880, now + i * 0.22, 0.18)
      }
      break
    }
  }
}
