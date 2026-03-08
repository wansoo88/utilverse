export type BlogPost = {
  slug: string
  title: string
  description: string
  intro: string
  sections: Array<{ heading: string; body: string[] }>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-make-decisions',
    title: "How to Make Decisions When You Can't Decide: 7 Practical Methods",
    description: 'A practical framework to make better personal and team decisions under uncertainty.',
    intro:
      'Decision fatigue is real. Many people are not blocked by missing information, but by too many acceptable options. A lightweight process can reduce stress and move you toward action with confidence.',
    sections: [
      {
        heading: '1) Define the decision type first',
        body: [
          'Not every choice deserves deep analysis. Separate reversible decisions from irreversible ones. Reversible decisions should be fast, while irreversible decisions deserve slower, evidence-based thinking.',
          'This one distinction prevents overthinking in daily choices and protects quality where risk is high.'
        ]
      },
      {
        heading: '2) Use constraints to simplify',
        body: [
          'Strong constraints are decision accelerators. Set a time limit, a budget, and two to four must-have criteria. Remove options that fail your constraints early.',
          'Constraint-first thinking avoids comparing options that were never viable.'
        ]
      },
      {
        heading: '3) Commit to a tie-break rule',
        body: [
          'When choices are close, use a tie-break rule such as coin flip, random number, or wheel spinner. The rule should be agreed before seeing the result.',
          'This converts circular debate into action and protects group trust.'
        ]
      }
    ]
  },
  {
    slug: 'history-of-coin-flipping',
    title: 'The History of Coin Flipping: From Ancient Rituals to Digital Tools',
    description: 'How coin flipping evolved into a modern decision utility used in sports, law, and daily life.',
    intro:
      'Coin flipping appears simple, but its social function is powerful: it creates an accepted neutral process where both parties can move on without resentment.',
    sections: [
      {
        heading: 'Ancient roots',
        body: [
          'Long before modern probability theory, people used marked objects to let chance resolve disputes. These rituals created a shared sense of fairness even when outcomes were unfavorable.',
          'The symbolic value mattered as much as the numeric randomness.'
        ]
      },
      {
        heading: 'Institutional adoption',
        body: [
          'Sports organizations and legal processes adopted coin tosses for opening advantage and tie resolution. This standardized neutral choice became part of formal governance in many contexts.',
          'Publicly visible execution increased perceived legitimacy.'
        ]
      },
      {
        heading: 'Digital continuation',
        body: [
          'Today, online coin tools preserve the same social contract while adding speed, accessibility, and logs. In distributed teams, digital tosses are often easier than physical alternatives.',
          'The principle remains unchanged: a transparent mechanism for closure.'
        ]
      }
    ]
  },
  {
    slug: 'party-games-spinner-wheel',
    title: '10 Party Games You Can Run with a Spinner Wheel',
    description: 'Easy social games that become faster and fairer with a random wheel.',
    intro:
      'A spinner wheel turns decision friction into momentum. Hosts can keep everyone engaged by randomizing turns, categories, and mini-challenges with no visible bias.',
    sections: [
      {
        heading: 'Build game loops with random prompts',
        body: [
          'Use wheel segments as prompts: trivia category, action challenge, or team assignment. The host spends less time deciding and more time facilitating energy.',
          'Balanced segment design keeps outcomes varied without becoming chaotic.'
        ]
      },
      {
        heading: 'Use elimination rounds carefully',
        body: [
          'Elimination works when rules are known in advance. Make sure penalties and rewards are symmetric to avoid social discomfort.',
          'A visible wheel helps participants accept outcomes because the process is clear.'
        ]
      },
      {
        heading: 'Keep pacing tight',
        body: [
          'Fast rounds outperform complex rounds in party settings. Limit setup time and keep each spin tied to one simple action.',
          'If a rule needs explanation every round, simplify it.'
        ]
      }
    ]
  },
  {
    slug: 'random-team-generator-guide',
    title: 'Random Team Generator: A Fairer Way to Create Groups',
    description: 'Use random assignment to reduce bias and save facilitation time in classrooms and workshops.',
    intro:
      'Team creation often feels subjective. Random assignment can protect fairness and speed in environments where equal opportunity matters.',
    sections: [
      {
        heading: 'When random grouping is best',
        body: [
          'Random groups are useful in early sessions, icebreakers, and neutral exercises where diversity of interaction matters more than skill balance.',
          'It reduces social pressure from self-selection and avoids repeated cliques.'
        ]
      },
      {
        heading: 'When to use weighted assignment',
        body: [
          'For advanced tasks, random may need constraints. You can still randomize within skill buckets to preserve both fairness and performance balance.',
          'Hybrid methods usually outperform pure random in high-stakes work.'
        ]
      }
    ]
  },
  {
    slug: 'dnd-dice-roller-guide',
    title: 'Dice Roller for D&D: Fast Workflow for Dungeon Masters',
    description: 'Reduce table friction with clear rolling rules and quick random tooling.',
    intro:
      'Dungeon Masters handle many micro-decisions per session. A fast dice workflow keeps narrative momentum while preserving fairness and transparency.',
    sections: [
      {
        heading: 'Pre-define roll conventions',
        body: [
          'Set conventions for rerolls, advantage, and contested checks before play starts. Consistency is more important than perfection during live sessions.',
          'Shared expectations prevent rule arguments that break immersion.'
        ]
      },
      {
        heading: 'Use logs for disputes',
        body: [
          'When outcomes are questioned, recent roll history helps settle debates immediately. This keeps trust high and avoids selective memory.'
        ]
      }
    ]
  },
  {
    slug: 'science-behind-coin-flip-decisions',
    title: 'Why Coin Flips Help Human Decisions (Even When You Ignore the Result)',
    description: 'The psychology behind random prompts and hidden preference discovery.',
    intro:
      'Coin flips can reveal preference by emotion. If you dislike the random outcome, that reaction often signals what you truly wanted.',
    sections: [
      {
        heading: 'Emotion as preference signal',
        body: [
          'In close choices, logic may produce ties. Emotional reaction to a random result creates extra information you did not have in your matrix.',
          'This can convert uncertainty into a practical direction.'
        ]
      },
      {
        heading: 'Decision closure effect',
        body: [
          'Random tie-breakers reduce cognitive load by ending endless loops. Closure improves execution quality because attention shifts from choosing to doing.'
        ]
      }
    ]
  },
  {
    slug: 'teacher-random-name-picker',
    title: 'Best Random Name Picker Flow for Classroom Participation',
    description: 'Use random selection to improve fairness, pacing, and participation confidence.',
    intro:
      'Name pickers can improve equity in classroom participation when students trust the process and expectations are clear.',
    sections: [
      {
        heading: 'Set the rule before selection',
        body: [
          'Tell students how random picks are used, how often names can repeat, and how passes are handled. Process clarity matters more than tool complexity.'
        ]
      },
      {
        heading: 'Use supportive framing',
        body: [
          'Randomness should not feel punitive. Frame prompts as opportunities, and include low-pressure question modes to build confidence gradually.'
        ]
      }
    ]
  },
  {
    slug: 'would-you-rather-questions-friends',
    title: '50 Would You Rather Prompts for Friends and Teams',
    description: 'Conversation-friendly prompts that work for parties, classrooms, and remote teams.',
    intro:
      'Would-you-rather prompts work because constraints force quick preference expression, making conversation dynamic and memorable.',
    sections: [
      {
        heading: 'Designing high-quality prompts',
        body: [
          'Great prompts are clear, balanced, and slightly uncomfortable in a playful way. Avoid options where one side is obviously superior.'
        ]
      },
      {
        heading: 'Facilitating group play',
        body: [
          'Keep rounds short, rotate speaking order, and avoid over-explaining. The goal is lively exchange, not debate victory.'
        ]
      }
    ]
  },
  {
    slug: 'streamer-wheel-content',
    title: 'How Streamers Use Spin Wheels for Better Audience Interaction',
    description: 'A practical setup for transparent and engaging random interactions on stream.',
    intro:
      'Spin wheels increase audience retention because the outcome is visible, uncertain, and immediate. Streamers can use this mechanic for challenge selection and giveaways.',
    sections: [
      {
        heading: 'Transparency and trust',
        body: [
          'Viewers engage more when random processes are visible and rules are public. Keep option lists readable and avoid hidden entries.'
        ]
      },
      {
        heading: 'Cadence over complexity',
        body: [
          'Simple wheels run repeatedly outperform one complicated wheel. Keep each spin tied to one clear reward or action.'
        ]
      }
    ]
  },
  {
    slug: 'coin-flip-vs-dice-roll-randomness',
    title: 'Coin Flip vs Dice Roll: Which Random Tool Should You Use?',
    description: 'A practical comparison for binary, weighted, and multi-outcome decisions.',
    intro:
      'Both tools are random, but they serve different decision shapes. The right choice depends on how many outcomes you need and how you communicate fairness.',
    sections: [
      {
        heading: 'Use coin flips for binary decisions',
        body: [
          'If outcomes are strictly two-sided, coin flips are faster and socially easier to accept. They minimize setup and reduce complexity.'
        ]
      },
      {
        heading: 'Use dice for broader ranges',
        body: [
          'Dice become useful when you need granular outcomes, weighted mappings, or random scoring. They also support richer game mechanics.'
        ]
      }
    ]
  }
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export type LinkItem = { href: string; label: string }

const toolLinks: LinkItem[] = [
  { href: '/coin-flip', label: 'Coin Flip' },
  { href: '/dice-roller', label: 'Dice Roller' },
  { href: '/spin-the-wheel', label: 'Spin the Wheel' },
  { href: '/yes-or-no', label: 'Yes or No Generator' },
  { href: '/random-number-generator', label: 'Random Number Generator' },
  { href: '/random-name-picker', label: 'Random Name Picker' },
  { href: '/team-generator', label: 'Team Generator' },
  { href: '/random-letter', label: 'Random Letter Generator' },
  { href: '/random-color', label: 'Random Color Generator' },
  { href: '/countdown-timer-random', label: 'Random Countdown Timer' }
]

export function getRelatedToolsBySlug(slug: string): LinkItem[] {
  if (slug.includes('coin')) return [toolLinks[0], toolLinks[4], toolLinks[2]]
  if (slug.includes('dice')) return [toolLinks[1], toolLinks[0], toolLinks[4]]
  if (slug.includes('team') || slug.includes('teacher')) return [toolLinks[5], toolLinks[6], toolLinks[2]]
  if (slug.includes('wheel') || slug.includes('streamer') || slug.includes('party')) return [toolLinks[2], toolLinks[5], toolLinks[9]]
  return [toolLinks[0], toolLinks[2], toolLinks[4]]
}

export function getRelatedPosts(slug: string, size = 3): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, size)
}

export function getRelatedPostsByToolTitle(title: string, size = 3): BlogPost[] {
  const lower = title.toLowerCase()
  const keywords = ['coin', 'dice', 'wheel', 'name', 'team', 'random', 'yes', 'number']
  const hit = keywords.find((keyword) => lower.includes(keyword))
  if (!hit) {
    return blogPosts.slice(0, size)
  }

  const matched = blogPosts.filter((post) => post.slug.includes(hit) || post.title.toLowerCase().includes(hit))
  const fallback = blogPosts.filter((post) => !matched.includes(post))
  return [...matched, ...fallback].slice(0, size)
}

export function buildExpandedSections(post: BlogPost): BlogPost['sections'] {
  const extension = [
    {
      heading: 'Practical Checklist',
      body: [
        `Before using this method in real situations, define your goal, time limit, and decision owner. This keeps the process focused and prevents endless loops around "maybe" options in ${post.title}.`,
        'Document the final rule in one sentence and apply it consistently. Teams trust processes that are transparent and repeatable more than ad-hoc decisions.'
      ]
    },
    {
      heading: 'Common Mistakes to Avoid',
      body: [
        'A frequent mistake is changing criteria after seeing initial outcomes. This introduces hidden bias and lowers confidence in the final choice.',
        'Another mistake is using random tools for high-stakes domains where professional judgment is required. Keep randomization for tie-breakers and low-risk coordination.'
      ]
    },
    {
      heading: 'How to Apply This Today',
      body: [
        'Pick one small decision this week and run the method end-to-end. Focus on process discipline, not perfect outcomes.',
        'Afterward, review whether the method reduced time and stress. If it did, codify it into your team or personal workflow.'
      ]
    }
  ]

  return [...post.sections, ...extension]
}

export function blogFaq(post: BlogPost) {
  return [
    {
      question: `Can I use these ideas from "${post.title}" for team decisions?`,
      answer: 'Yes. The framework is designed to scale from personal choices to lightweight team decisions when process rules are agreed first.'
    },
    {
      question: 'Do I need advanced statistics to apply this?',
      answer: 'No. Most methods in these guides focus on practical structure, constraints, and transparent tie-breakers.'
    },
    {
      question: 'Which tool should I try first?',
      answer: 'Start with Coin Flip or Random Number Generator for simple tie-break use cases, then expand to wheel and team tools.'
    }
  ]
}
