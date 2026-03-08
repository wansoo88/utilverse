'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { shuffle } from '@/lib/random'

export function TeamGeneratorTool() {
  const [raw, setRaw] = useState('Alex\nSam\nJordan\nTaylor\nChris\nDana')
  const [teamsCount, setTeamsCount] = useState(2)
  const [teams, setTeams] = useState<string[][]>([])
  const { items, push, clear } = useLocalHistory('history-team-generator')

  const names = useMemo(() => raw.split('\n').map((v) => v.trim()).filter(Boolean), [raw])

  const generate = () => {
    if (!names.length || teamsCount < 1) return
    const shuffled = shuffle(names)
    const result: string[][] = Array.from({ length: teamsCount }, () => [])
    shuffled.forEach((name, index) => {
      result[index % teamsCount].push(name)
    })
    setTeams(result)
    push(`${new Date().toLocaleTimeString()}: ${result.map((t, i) => `T${i + 1}[${t.join(',')}]`).join(' | ')}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <div className="grid md:grid-cols-3 gap-3">
        <label className="md:col-span-2">
          <span style={{ fontWeight: 600 }}>Names (one per line)</span>
          <textarea className="textarea" rows={6} value={raw} onChange={(e) => setRaw(e.target.value)} />
        </label>
        <div>
          <label>
            <span style={{ fontWeight: 600 }}>Number of teams</span>
            <input className="input" type="number" min={1} max={20} value={teamsCount} onChange={(e) => setTeamsCount(Number(e.target.value))} />
          </label>
          <button className="btn btn-primary" style={{ marginTop: '0.75rem', width: '100%' }} type="button" onClick={generate}>Generate Teams</button>
        </div>
      </div>

      <AnimatePresence>
        {teams.length > 0 && (
          <motion.div
            className="grid-cards"
            style={{ marginTop: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {teams.map((team, idx) => (
              <motion.div
                key={`team-${idx}`}
                className="card"
                style={{ padding: '0.75rem' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06, type: 'spring', stiffness: 300, damping: 24 }}
              >
                <p style={{ fontWeight: 800, marginBottom: '0.4rem' }}>{`Team ${idx + 1}`}</p>
                <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
                  {team.map((name) => <li key={`${idx}-${name}`}>{name}</li>)}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

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