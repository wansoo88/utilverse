export function randomInt(min: number, max: number): number {
  if (max < min) {
    throw new Error('max must be greater than or equal to min')
  }

  const range = max - min + 1
  if (range <= 0) {
    throw new Error('invalid range')
  }

  try {
    const cryptoObj = globalThis.crypto
    if (cryptoObj?.getRandomValues) {
      const maxUint = 0xffffffff
      const limit = maxUint - (maxUint % range)
      const buffer = new Uint32Array(1)

      let value = 0
      do {
        cryptoObj.getRandomValues(buffer)
        value = buffer[0]
      } while (value >= limit)

      return min + (value % range)
    }
  } catch {
    // Fall back to Math.random if Web Crypto is blocked/unavailable.
  }

  return Math.floor(Math.random() * range) + min
}

export function randomBool(): boolean {
  return randomInt(0, 1) === 1
}

export function pickRandom<T>(items: T[]): T {
  if (!items.length) {
    throw new Error('cannot pick from empty array')
  }
  return items[randomInt(0, items.length - 1)]
}

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = randomInt(0, i)
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}