export type ToolVariant = {
  slug: string
  label: string
  metaTitle: string
  metaDescription: string
  initialConfig: Record<string, unknown>
}

export const toolVariants: Record<string, ToolVariant[]> = {
  'random-number-generator': [
    {
      slug: '1-to-10',
      label: 'Random Number 1 to 10',
      metaTitle: 'Random Number 1 to 10 — Instant Free Generator',
      metaDescription:
        'Generate a random number between 1 and 10 instantly. Crypto-random, reroll button, history log. Perfect for games, teaching, and quick decisions.',
      initialConfig: { min: 1, max: 10 }
    },
    {
      slug: '1-to-100',
      label: 'Random Number 1 to 100',
      metaTitle: 'Random Number 1 to 100 — Free Online Generator',
      metaDescription:
        'Pick a random number from 1 to 100 online. Cryptographically fair, instant results, reroll button. Great for giveaways and probability exercises.',
      initialConfig: { min: 1, max: 100 }
    },
    {
      slug: '1-to-1000',
      label: 'Random Number 1 to 1000',
      metaTitle: 'Random Number 1 to 1000 — Free Online Tool',
      metaDescription:
        'Generate a random number from 1 to 1000 for free. Crypto-grade randomness, instant reroll, and saved history. No signup required.',
      initialConfig: { min: 1, max: 1000 }
    },
    {
      slug: '1-to-50',
      label: 'Random Number 1 to 50',
      metaTitle: 'Random Number 1 to 50 — Pick a Number Online',
      metaDescription:
        'Instantly pick a random number between 1 and 50. Crypto-random, works on any device. Ideal for classroom activities and lotteries.',
      initialConfig: { min: 1, max: 50 }
    },
    {
      slug: '1-to-20',
      label: 'Random Number 1 to 20',
      metaTitle: 'Random Number 1 to 20 — D20 Style Generator',
      metaDescription:
        'Roll a random number from 1 to 20 — just like a D20 dice! Crypto-fair, history tracking. Free for D&D, board games, and class selection.',
      initialConfig: { min: 1, max: 20 }
    }
  ],
  'dice-roller': [
    {
      slug: 'roll-2-dice',
      label: 'Roll 2 Dice',
      metaTitle: 'Roll 2 Dice Online — Free Virtual Dice Roller',
      metaDescription:
        'Roll two dice online instantly. See individual results and total sum. Crypto-random, mobile-friendly. Perfect for board games and tabletop RPGs.',
      initialConfig: { count: 2, sides: 6 }
    },
    {
      slug: 'roll-3-dice',
      label: 'Roll 3 Dice',
      metaTitle: 'Roll 3 Dice Online — Virtual Triple Dice Roll',
      metaDescription:
        'Roll three dice at once with instant sum calculation. Free crypto-random dice roller for Yahtzee, Farkle, and classroom activities.',
      initialConfig: { count: 3, sides: 6 }
    },
    {
      slug: 'd20-roller',
      label: 'D20 Dice Roller',
      metaTitle: 'D20 Roller — Online D20 Dice for D&D & RPG',
      metaDescription:
        'Roll a D20 online for Dungeons & Dragons and tabletop RPGs. Crypto-random results, roll history, and mobile-friendly. Free, no login needed.',
      initialConfig: { count: 1, sides: 20 }
    },
    {
      slug: 'd12-roller',
      label: 'D12 Dice Roller',
      metaTitle: 'D12 Roller — Online 12-Sided Dice for RPG & Games',
      metaDescription:
        'Roll a virtual D12 (12-sided die) instantly. Crypto-fair randomness, history log, perfect for RPGs, tabletop games, and random decisions.',
      initialConfig: { count: 1, sides: 12 }
    },
    {
      slug: 'd8-roller',
      label: 'D8 Dice Roller',
      metaTitle: 'D8 Roller — Roll an 8-Sided Dice Online Free',
      metaDescription:
        'Virtual D8 dice roller for RPGs and tabletop games. Instant crypto-random results with roll history. Free, works on mobile and desktop.',
      initialConfig: { count: 1, sides: 8 }
    },
    {
      slug: 'd4-roller',
      label: 'D4 Dice Roller',
      metaTitle: 'D4 Roller — Roll a 4-Sided Dice Online',
      metaDescription:
        'Roll a D4 (4-sided die) online for free. Crypto-random results, mobile-friendly, perfect for RPGs, D&D, and tabletop games.',
      initialConfig: { count: 1, sides: 4 }
    }
  ],
  'random-name-picker': [
    {
      slug: 'for-giveaway',
      label: 'Random Name Picker for Giveaway',
      metaTitle: 'Random Name Picker for Giveaway — Free Winner Selector',
      metaDescription:
        'Pick a random winner from a list for giveaways and contests. Paste names and pick instantly. Fair, crypto-random, free. No login or download required.',
      initialConfig: {
        initialRaw:
          'Contestant 1\nContestant 2\nContestant 3\nContestant 4\nContestant 5'
      }
    },
    {
      slug: 'for-classroom',
      label: 'Random Student Name Picker',
      metaTitle: 'Random Student Name Picker — Free Classroom Tool',
      metaDescription:
        'Randomly pick a student name for classroom activities. Paste your class list and pick fairly. Free, no data stored, works on any device.',
      initialConfig: {
        initialRaw: 'Alice\nBob\nCarlos\nDiana\nEthan\nFiona'
      }
    },
    {
      slug: 'for-team-names',
      label: 'Random Team Name Generator',
      metaTitle: 'Random Team Name Generator — Pick a Team Name Free',
      metaDescription:
        'Randomly select a team name from your list. Great for sports, school projects, and office events. Crypto-random picker, free and instant.',
      initialConfig: {
        initialRaw:
          'Thunder Hawks\nBlue Dragons\nRed Falcons\nGolden Eagles\nSilver Wolves'
      }
    }
  ],
  'coin-flip': [
    {
      slug: 'heads-or-tails',
      label: 'Heads or Tails',
      metaTitle: 'Heads or Tails — Virtual Coin Flip Online',
      metaDescription:
        'Flip a virtual coin for heads or tails online. 50/50 crypto-random result, 3D animation, history log. Free, instant, works everywhere.',
      initialConfig: {}
    },
    {
      slug: 'decision-maker',
      label: 'Coin Flip Decision Maker',
      metaTitle: 'Coin Flip Decision Maker — Yes or No Coin Toss',
      metaDescription:
        'Use a virtual coin flip to make decisions. Labels preset to Yes/No for quick choices. Crypto-random, fair, and instant. Free online coin toss.',
      initialConfig: { headsLabel: 'Yes', tailsLabel: 'No' }
    }
  ]
}

export function getVariant(
  toolSlug: string,
  variantSlug: string
): ToolVariant | undefined {
  return toolVariants[toolSlug]?.find((v) => v.slug === variantSlug)
}

export function getToolVariants(toolSlug: string): ToolVariant[] {
  return toolVariants[toolSlug] ?? []
}
