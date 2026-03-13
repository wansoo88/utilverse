'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pickRandom } from '@/lib/random'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { CopyButton } from '@/components/common/CopyButton'

const names: Record<string, Record<string, string[]>> = {
  neutral: {
    classic: ['Avery', 'Casey', 'Dana', 'Elliot', 'Jordan', 'Leslie', 'Morgan', 'Pat', 'Quinn', 'Reese', 'Robin', 'Ryan', 'Sage', 'Sam', 'Taylor'],
    modern: ['Arlo', 'Aspen', 'Banks', 'Blake', 'Cam', 'Finley', 'Gray', 'Harlow', 'Indigo', 'Jules', 'Kendall', 'Lake', 'Oakley', 'Parker', 'Sloane'],
    nature: ['Ash', 'Bay', 'Cedar', 'Clover', 'Elm', 'Fern', 'Glen', 'Hazel', 'Ivy', 'Juniper', 'Lark', 'Moss', 'River', 'Rowan', 'Willow'],
    short: ['Ax', 'Bo', 'Cy', 'Dae', 'El', 'Jo', 'Kai', 'Lee', 'Rex', 'Sky', 'Sol', 'Taj', 'Wren', 'Zen', 'Zev']
  },
  girl: {
    classic: ['Alice', 'Amelia', 'Anna', 'Charlotte', 'Clara', 'Diana', 'Eleanor', 'Elizabeth', 'Emma', 'Grace', 'Helen', 'Julia', 'Laura', 'Nora', 'Victoria'],
    modern: ['Aria', 'Aurora', 'Chloe', 'Elara', 'Harper', 'Isla', 'Layla', 'Luna', 'Mia', 'Nova', 'Olivia', 'Sienna', 'Stella', 'Violet', 'Zoey'],
    nature: ['Blossom', 'Daisy', 'Fern', 'Flora', 'Iris', 'Jasmine', 'Lily', 'Magnolia', 'Meadow', 'Pearl', 'Rose', 'Ruby', 'Skye', 'Summer', 'Wren'],
    cultural: ['Adaeze', 'Aiko', 'Amara', 'Celia', 'Fatima', 'Ingrid', 'Leila', 'Marisol', 'Nadia', 'Priya', 'Seren', 'Sofia', 'Valentina', 'Yara', 'Zara']
  },
  boy: {
    classic: ['Arthur', 'Charles', 'Edward', 'George', 'Henry', 'James', 'John', 'Leo', 'Oliver', 'Oscar', 'Robert', 'Thomas', 'Walter', 'William', 'Theodore'],
    modern: ['Aiden', 'Axel', 'Caden', 'Declan', 'Easton', 'Finn', 'Grayson', 'Hudson', 'Jaxon', 'Levi', 'Lucas', 'Mason', 'Noah', 'Owen', 'Wyatt'],
    nature: ['Brooks', 'Canyon', 'Cliff', 'Dale', 'Forest', 'Heath', 'Jasper', 'Lake', 'Orion', 'Reed', 'Ridge', 'River', 'Stone', 'Vale', 'Wade'],
    cultural: ['Ahmed', 'Amir', 'Emeka', 'Ezra', 'Felix', 'Hiroshi', 'Kai', 'Luca', 'Mateo', 'Rafael', 'Santiago', 'Soren', 'Tariq', 'Zane', 'Zyaire']
  }
}

type GenderKey = 'neutral' | 'girl' | 'boy'
type StyleKey = 'classic' | 'modern' | 'nature' | 'short' | 'cultural'

const styleOptions: Record<GenderKey, StyleKey[]> = {
  neutral: ['classic', 'modern', 'nature', 'short'],
  girl: ['classic', 'modern', 'nature', 'cultural'],
  boy: ['classic', 'modern', 'nature', 'cultural']
}

export function BabyNameGeneratorTool() {
  const [gender, setGender] = useState<GenderKey>('neutral')
  const [style, setStyle] = useState<StyleKey>('classic')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-baby-name')

  const pool = useMemo(() => {
    const styles = styleOptions[gender]
    const safeStyle = styles.includes(style) ? style : styles[0]
    return names[gender][safeStyle]
  }, [gender, style])

  const generate = () => {
    const next = pickRandom(pool)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next} (${gender}/${style})`)
  }

  const handleGenderChange = (g: GenderKey) => {
    setGender(g)
    const firstStyle = styleOptions[g][0]
    setStyle(firstStyle)
  }

  return (
    <div className="card tool-surface" style={{ padding: '1rem' }}>
      <p className="section-copy">Pick a gender and style, then generate to discover name ideas.</p>

      <div className="flex flex-wrap gap-3" style={{ marginTop: '0.75rem' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Gender</span>
          <select
            className="select"
            value={gender}
            onChange={(e) => handleGenderChange(e.target.value as GenderKey)}
          >
            <option value="neutral">Neutral</option>
            <option value="girl">Girl</option>
            <option value="boy">Boy</option>
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Style</span>
          <select
            className="select"
            value={style}
            onChange={(e) => setStyle(e.target.value as StyleKey)}
          >
            {styleOptions[gender].map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={generate}>
          Generate Baby Name
        </button>
        {result && (
          <button className="btn" type="button" onClick={generate}>
            Try Another
          </button>
        )}
        <AnimatePresence mode="wait">
          {result && (
            <motion.span
              key={result}
              initial={{ opacity: 0, scale: 0.7, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              style={{ fontWeight: 800, fontSize: '1.3rem', color: '#14B8A6' }}
              aria-live="polite"
            >
              👶 {result}
            </motion.span>
          )}
        </AnimatePresence>
        {result && <CopyButton text={result} />}
      </div>

      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}
