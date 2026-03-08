'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pickRandom } from '@/lib/random'
import { useLocalHistory } from '@/lib/useLocalHistory'

const prompts = {
  team: [
    'What is one skill you want to improve this quarter?',
    'What is a project you are proud of recently?',
    'What helps you focus on difficult work?'
  ],
  classroom: [
    'What topic felt most interesting this week?',
    'If you could teach one lesson, what would it be?',
    'What is one question you still have today?'
  ],
  party: [
    'What is your most memorable travel story?',
    'What song instantly changes your mood?',
    'If you could master one hobby this year, what is it?'
  ]
}

export function IcebreakerQuestionTool() {
  const [category, setCategory] = useState<'team' | 'classroom' | 'party'>('team')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-icebreaker')

  const pool = useMemo(() => prompts[category], [category])

  const generate = () => {
    const next = pickRandom(pool)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
  }

  return (
    <div className="card" style={{ padding: '1rem' }}>
      <label>
        <span style={{ fontWeight: 600 }}>Category</span>
        <select className="select" value={category} onChange={(e) => setCategory(e.target.value as 'team' | 'classroom' | 'party')}>
          <option value="team">Team</option>
          <option value="classroom">Classroom</option>
          <option value="party">Party</option>
        </select>
      </label>
      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={generate}>Generate Icebreaker</button>
      </div>
      <AnimatePresence mode="wait">
        {result ? (
          <motion.p
            key={result}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{
              marginTop: '0.75rem',
              fontWeight: 700,
              padding: '0.8rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.1), transparent)',
              border: '1px solid rgba(217, 70, 239, 0.25)',
              lineHeight: 1.6
            }}
          >
            💬 {result}
          </motion.p>
        ) : (
          <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}>No question generated yet.</p>
        )}
      </AnimatePresence>
      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>{items.slice(0, 10).map((item) => <li key={item}>{item}</li>)}</ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}