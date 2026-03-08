'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealMode = 'bounce' | 'slide' | 'fade'

export function ResultReveal({
  children,
  show,
  mode = 'bounce',
  confetti = false,
  resultKey
}: {
  children: ReactNode
  show: boolean
  mode?: RevealMode
  confetti?: boolean
  resultKey?: string
}) {
  const reduced = useReducedMotion()

  const variants = {
    bounce: {
      initial: { opacity: 0, scale: 0.7, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 400, damping: 18 } },
      exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } }
    },
    slide: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    },
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.4 } },
      exit: { opacity: 0, transition: { duration: 0.2 } }
    }
  }

  const v = reduced
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0 } },
        exit: { opacity: 0, transition: { duration: 0 } }
      }
    : variants[mode]

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={resultKey ?? 'result'}
          initial={v.initial}
          animate={v.animate}
          exit={v.exit}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
