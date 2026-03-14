'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { pickRandom } from '@/lib/random'
import { playSound } from '@/lib/audio'
import { useLocalHistory } from '@/lib/useLocalHistory'
import { CopyButton } from '@/components/common/CopyButton'

const prompts: Record<string, string[]> = {
  team: [
    'What is one skill you want to improve this quarter?',
    'What project are you most proud of from the past year?',
    'What helps you focus when work feels overwhelming?',
    'What is something your team does well that you appreciate?',
    'What tool or process has made your work easier recently?',
    'If you could change one thing about how your team collaborates, what would it be?',
    'What is the best feedback you have received in your career?',
    'What does a great workday look like for you?',
    'What is one thing you wish more people on the team knew about your role?',
    'What habit has most improved your productivity?',
    'What is a challenge you solved recently that you are proud of?',
    'If you could shadow anyone at this company for a day, who would it be?',
    'What is one thing you are looking forward to in the next month?',
    'What does work-life balance look like for you?',
    'What is the most interesting thing you have learned at work recently?',
    'How do you recharge after a tough week?',
    'What is a skill outside your job that helps you at work?',
    'What is something you are trying to get better at right now?',
    'What would your ideal kickoff meeting look like?',
    'What is one thing you want to accomplish this year?'
  ],
  classroom: [
    'What topic felt most interesting to you this week?',
    'If you could teach one lesson to the class, what would it be?',
    'What is one question you still have about today\'s material?',
    'What subject outside school are you teaching yourself right now?',
    'What is one thing you learned recently that surprised you?',
    'If you could visit any place you have studied, where would you go?',
    'What is your favorite way to study or review new material?',
    'What is the most useful thing you have learned in school this year?',
    'If you could redesign one class rule, what would it be?',
    'What is a goal you have set for yourself this semester?',
    'What topic would you love to explore on your own?',
    'How do you stay motivated when something is hard to learn?',
    'What is one thing a teacher has done that really helped you?',
    'What does a perfect study session look like for you?',
    'What skill would you most like to develop before you graduate?',
    'What is one thing you are better at now than you were six months ago?',
    'How do you know when you have truly understood something?',
    'What subject do you find unexpectedly interesting?',
    'If you could ask any historical figure one question, who and what?',
    'What does success in this class look like for you?'
  ],
  party: [
    'What is your most memorable travel story?',
    'What song instantly changes your mood?',
    'If you could master one hobby this year, what would it be?',
    'What is the best meal you have ever eaten?',
    'What is a hidden talent most people do not know you have?',
    'What is the last book, show, or movie that genuinely surprised you?',
    'What is something on your bucket list you have not done yet?',
    'If you could live in any decade, which would you choose?',
    'What is a small thing that makes you disproportionately happy?',
    'What is your go-to comfort food after a bad day?',
    'If you could have dinner with any three people, who would you invite?',
    'What is the best compliment you have ever received?',
    'What is a hobby you gave up that you miss?',
    'If you could wake up tomorrow with one new skill, what would it be?',
    'What is the most spontaneous thing you have ever done?',
    'What is your unpopular opinion about something everyone likes?',
    'What is a place you have been that felt like a dream?',
    'What is the strangest job you can imagine having?',
    'If your life were a film genre, what genre would it be?',
    'What is something you do every day that you genuinely enjoy?'
  ],
  professional: [
    'What is the most valuable career lesson you have learned?',
    'Who has influenced your professional path the most, and why?',
    'What mistake taught you the most in your career?',
    'What is one thing you wish you had known when you started your career?',
    'How has your definition of success changed over time?',
    'What is a book or resource that shifted how you think about work?',
    'What is the best advice you would give to someone starting in your field?',
    'What is a trend in your industry that excites you?',
    'What is a trend in your industry that worries you?',
    'What is the most complex problem you have had to solve at work?',
    'How do you approach making decisions under uncertainty?',
    'What does great leadership look like to you?',
    'What is your process for learning a new skill quickly?',
    'How do you handle disagreement with a colleague or manager?',
    'What is a professional risk that paid off for you?',
    'What is something you believe about your work that most people disagree with?',
    'What does your best creative or problem-solving work feel like?',
    'What is the most interesting challenge your industry faces today?',
    'How do you stay motivated when a long project stalls?',
    'What is one habit that has made the biggest difference in your career?'
  ]
}

type CategoryKey = 'team' | 'classroom' | 'party' | 'professional'

export function IcebreakerQuestionTool() {
  const [category, setCategory] = useState<CategoryKey>('team')
  const [result, setResult] = useState('')
  const { items, push, clear } = useLocalHistory('history-icebreaker')

  const pool = useMemo(() => prompts[category], [category])

  const generate = () => {
    const next = pickRandom(pool)
    setResult(next)
    push(`${new Date().toLocaleTimeString()}: ${next}`)
    playSound('pop')
  }

  return (
    <div className="card tool-surface" style={{ padding: '1rem' }}>
      <p className="section-copy">Pick a category, generate a question, and ask the group.</p>

      <label style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginTop: '0.5rem' }}>
        <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Category</span>
        <select
          className="select"
          value={category}
          onChange={(e) => setCategory(e.target.value as CategoryKey)}
        >
          <option value="team">Team Warmup</option>
          <option value="professional">Professional</option>
          <option value="classroom">Classroom</option>
          <option value="party">Party & Social</option>
        </select>
      </label>

      <div className="flex flex-wrap items-center gap-3" style={{ marginTop: '0.75rem' }}>
        <button className="btn btn-primary" type="button" onClick={generate}>
          Generate Question
        </button>
        {result && (
          <button className="btn" type="button" onClick={generate}>
            Next Question
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          <motion.div
            key={result}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{
              marginTop: '0.75rem',
              padding: '0.8rem',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(217,70,239,0.1), transparent)',
              border: '1px solid rgba(217,70,239,0.25)',
              lineHeight: 1.6
            }}
            aria-live="polite"
          >
            <p style={{ fontWeight: 700, margin: '0 0 0.5rem' }}>💬 {result}</p>
            <CopyButton text={result} />
          </motion.div>
        ) : (
          <p style={{ marginTop: '0.75rem', color: 'var(--text-muted)' }}>
            No question generated yet.
          </p>
        )}
      </AnimatePresence>

      <div style={{ marginTop: '0.9rem' }}>
        <p style={{ fontWeight: 700 }}>History</p>
        <ul className="section-copy" style={{ paddingLeft: '1rem' }}>
          {items.slice(0, 8).map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button className="btn" type="button" onClick={clear}>Clear history</button>
      </div>
    </div>
  )
}
