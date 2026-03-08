export type ToolKey =
  | 'coin-flip'
  | 'dice-roller'
  | 'spin-the-wheel'
  | 'yes-or-no'
  | 'random-number-generator'
  | 'random-name-picker'
  | 'team-generator'
  | 'random-letter'
  | 'random-color'
  | 'countdown-timer-random'

export type ToolContent = {
  title: string
  subtitle: string
  howToUse: string[]
  features: string[]
  useCases: string[]
  tips: string[]
  faqs: Array<{ question: string; answer: string }>
  related: Array<{ href: string; label: string }>
}

export const toolContent: Record<ToolKey, ToolContent> = {
  'coin-flip': {
    title: 'Free Online Coin Flip Simulator',
    subtitle: 'Settle fast decisions with a fair virtual coin toss and clean results.',
    howToUse: [
      'Open the coin flip tool and press the flip button once for a single, unbiased toss. The animation gives a clear visual cue so users can trust what happened.',
      'If you need repeated outcomes, keep flipping and review the history list. This is useful when you want more than one trial before making a final decision.',
      'Use the result for lightweight choices where speed matters more than debate, such as picking a starter, deciding turn order, or choosing between two equal options.'
    ],
    features: [
      'Smooth flip animation with instant result state.',
      'Result history persisted in local storage.',
      'One-click clear history action for a fresh session.',
      'Mobile-friendly controls sized for thumb interaction.',
      'Dark-first interface with optional light theme toggle.'
    ],
    useCases: [
      'Settle friendly disagreements quickly in teams, classrooms, or family contexts.',
      'Choose responsibility rotation, like who starts presenting in a meeting.',
      'Support game moments where binary outcomes are enough and speed is key.',
      'Reduce decision fatigue for trivial choices by assigning chance to the final call.'
    ],
    tips: [
      'When both options feel equal, trust the first toss and move on to execution.',
      'If you feel disappointed by the result, your reaction can reveal your real preference.',
      'Avoid over-flipping to force a preferred result. Set your rule before the first toss.'
    ],
    faqs: [
      { question: 'Is this coin flip truly random?', answer: 'The tool uses the browser random API. It is suitable for everyday decisions and games.' },
      { question: 'Does it work on mobile?', answer: 'Yes. The layout and controls are responsive and optimized for mobile touch devices.' },
      { question: 'Can I see previous flips?', answer: 'Yes. Recent outcomes are stored locally so you can review your latest tosses.' },
      { question: 'Can I reset the session?', answer: 'Yes. Use the clear history button to wipe local results immediately.' },
      { question: 'Can I share this with friends?', answer: 'Yes. Share the page URL. Teammates can run the same tool in their browser.' }
    ],
    related: [
      { href: '/dice-roller', label: 'Dice Roller' },
      { href: '/yes-or-no', label: 'Yes or No Generator' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' }
    ]
  },
  'dice-roller': {
    title: 'Free Online Dice Roller (D4 to D20)',
    subtitle: 'Roll one or many dice with instant totals for games, classes, and quick draws.',
    howToUse: [
      'Select the die type from D4 to D20 based on your use case. Different games and activities rely on different ranges, so this first step keeps outcomes relevant.',
      'Choose how many dice you want to roll in one action. The interface instantly computes each face and the final sum to reduce manual math.',
      'Press roll and use the history panel to track recent results when you need transparent turn logs during game sessions or group activities.'
    ],
    features: [
      'Supports standard polyhedral dice from D4 through D20.',
      'Multi-roll mode with automatic total calculation.',
      'Result list persisted locally for quick verification.',
      'Fast reroll actions for high-frequency game rounds.',
      'Readable typography and spacing for clean scanning.'
    ],
    useCases: [
      'Run tabletop sessions without physical dice when traveling or remote.',
      'Generate random classroom values for drills and probability exercises.',
      'Resolve board game outcomes quickly without passing shared components.',
      'Create random challenge intensities by mapping roll totals to tasks.'
    ],
    tips: [
      'Define your reroll and tie-breaking rules before the first roll.',
      'For fairness in groups, keep the screen visible when rolling.',
      'Use consistent dice counts during one round to avoid biased comparisons.'
    ],
    faqs: [
      { question: 'Which dice types are included?', answer: 'D4, D6, D8, D10, D12, and D20 are available.' },
      { question: 'Can I roll multiple dice at once?', answer: 'Yes, you can set quantity and get per-die values plus total.' },
      { question: 'Does the tool keep roll history?', answer: 'Yes, recent roll summaries are saved in local storage.' },
      { question: 'Is this good for DnD style play?', answer: 'Yes. It covers common polyhedral sets and gives fast repeated rolls.' },
      { question: 'Can I clear old rolls?', answer: 'Yes. You can clear history at any time.' }
    ],
    related: [
      { href: '/coin-flip', label: 'Coin Flip' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/random-number-generator', label: 'Random Number Generator' }
    ]
  },
  'spin-the-wheel': {
    title: 'Free Spin the Wheel Picker',
    subtitle: 'Create your own random wheel with custom entries and spin instantly.',
    howToUse: [
      'Enter one option per line in the wheel input panel. Keep labels short so the wheel remains readable and easy to validate in group settings.',
      'Press spin to animate the wheel and produce a final selection. The pointer remains fixed while the wheel rotates, reducing interpretation errors.',
      'Review spin history to verify outcomes over multiple rounds. This helps classrooms, streamers, and hosts keep transparent random selection records.'
    ],
    features: [
      'Custom option list with quick textarea editing.',
      'Animated wheel rotation with deterministic final stop.',
      'Automatic history logging for recent winners.',
      'Usable on desktop and mobile with consistent layout.',
      'Simple and clean visual style for content-focused sessions.'
    ],
    useCases: [
      'Pick giveaway winners during live streams without manual bias.',
      'Choose restaurant, activity, or trip plans in groups quickly.',
      'Assign classroom participants for tasks and presentations fairly.',
      'Drive party game turns where visual randomness improves engagement.'
    ],
    tips: [
      'Use balanced option wording and avoid duplicates unless intentional.',
      'Keep option count manageable so every segment remains visible.',
      'For teams, agree that first landed result is final before spinning.'
    ],
    faqs: [
      { question: 'How many options can I add?', answer: 'Add as many as needed, but readability is best with concise option counts.' },
      { question: 'Can I spin repeatedly?', answer: 'Yes. You can run back-to-back spins and review history each time.' },
      { question: 'Does it save my options?', answer: 'The current session keeps options in the page state. You can re-enter quickly as needed.' },
      { question: 'Is it mobile friendly?', answer: 'Yes, wheel and controls are responsive for small screens.' },
      { question: 'Can I use this for stream giveaways?', answer: 'Yes. The visual spin and logs make winner selection transparent.' }
    ],
    related: [
      { href: '/yes-or-no', label: 'Yes or No Generator' },
      { href: '/coin-flip', label: 'Coin Flip' },
      { href: '/random-number-generator', label: 'Random Number Generator' }
    ]
  },
  'yes-or-no': {
    title: 'Free Yes or No Generator',
    subtitle: 'Get a clear yes/no result in one click when you need a fast final answer.',
    howToUse: [
      'Think of a binary question with two valid outcomes, then press generate once. The result card immediately shows a high-contrast answer for quick interpretation.',
      'If the question changes, run a new generation instead of reusing the prior result. This keeps each output tied to one specific decision context.',
      'Use history to compare recent outcomes if you are facilitating a game or challenge flow that depends on yes/no branching logic.'
    ],
    features: [
      'Single-click random yes/no outcome.',
      'Animated reveal to make result state obvious.',
      'History tracking in browser local storage.',
      'Large typography for easy reading on mobile.',
      'Dark and light mode support for comfort.'
    ],
    useCases: [
      'Unblock trivial choices when analysis is unnecessary.',
      'Use in classroom warm-up games and quick polls.',
      'Drive social prompts for party activities.',
      'Support content creation formats based on binary challenges.'
    ],
    tips: [
      'Frame your question clearly so yes and no are equally meaningful.',
      'If the result feels wrong, note your reaction before rerolling.',
      'Avoid using random tools for legal, medical, or financial decisions.'
    ],
    faqs: [
      { question: 'Is yes/no random?', answer: 'Yes. The result is generated using browser randomness and should be treated as chance.' },
      { question: 'Can I use it unlimited times?', answer: 'Yes. There is no hard usage limit.' },
      { question: 'Will my results be stored?', answer: 'Recent results are stored in your browser only.' },
      { question: 'Does this need an account?', answer: 'No account is required.' },
      { question: 'Can I clear saved entries?', answer: 'Yes, use the clear history control anytime.' }
    ],
    related: [
      { href: '/coin-flip', label: 'Coin Flip' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/dice-roller', label: 'Dice Roller' }
    ]
  },
  'random-number-generator': {
    title: 'Free Random Number Generator',
    subtitle: 'Generate random integers within any range, including multi-pick mode.',
    howToUse: [
      'Set a minimum and maximum value to define your number range. Use realistic bounds for your scenario, such as team IDs, queue slots, or classroom picks.',
      'Choose how many numbers to generate in one run. Multi-pick mode is useful when you need several winners or randomized sequences quickly.',
      'Optionally enforce unique values to avoid duplicates. This is ideal for raffle-like use cases where every selected entry must be different.'
    ],
    features: [
      'Configurable min and max range values.',
      'Single or multi-number generation in one action.',
      'Unique-only mode to prevent duplicates.',
      'History logging with readable output strings.',
      'Simple form layout with accessible labels.'
    ],
    useCases: [
      'Pick random winners by assigned ticket numbers.',
      'Create random practice sets for students.',
      'Assign random order for speakers and participants.',
      'Simulate random draws in lightweight game mechanics.'
    ],
    tips: [
      'Validate range boundaries before generating to avoid logic mistakes.',
      'If using unique mode, keep count within range size.',
      'Export or screenshot important outcomes for audit trails when needed.'
    ],
    faqs: [
      { question: 'Can I block duplicate numbers?', answer: 'Yes. Enable unique mode to prevent repeated values in one draw.' },
      { question: 'How many numbers can I generate?', answer: 'You can set count as needed, as long as it fits range constraints in unique mode.' },
      { question: 'Are decimals supported?', answer: 'This version focuses on integer generation.' },
      { question: 'Is history stored online?', answer: 'No. History is saved in your local browser only.' },
      { question: 'Can I reuse this for raffles?', answer: 'Yes, many users apply it to fair, quick random draws.' }
    ],
    related: [
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/dice-roller', label: 'Dice Roller' },
      { href: '/yes-or-no', label: 'Yes or No Generator' }
    ]
  },
  'random-name-picker': {
    title: 'Free Random Name Picker',
    subtitle: 'Paste names, pick one instantly, and keep a transparent history.',
    howToUse: [
      'Enter one participant per line in the names field. Keep names short to improve readability and reduce parsing mistakes during live sessions.',
      'Press pick to select a random name from the list. The chosen value appears immediately and is added to history for transparency.',
      'Use repeat mode for raffles or disable repeats in your own process rules when every person should be selected at most once.'
    ],
    features: [
      'Bulk name input via multi-line textarea.',
      'Single-click random selection from current pool.',
      'Local history for auditability in classroom and giveaway scenarios.',
      'Fast re-run flow for repeated rounds.',
      'Clean layout that works on mobile and desktop.'
    ],
    useCases: [
      'Classroom participation selection without favoritism.',
      'Meeting turn-taking when multiple people volunteer.',
      'Live stream or community giveaway winner picks.',
      'Game host role assignment in social events.'
    ],
    tips: [
      'Normalize spelling before picking to avoid duplicate identities with different formatting.',
      'Define reroll policy before first pick and keep it visible to participants.',
      'For fairness in public settings, keep screen visible while selecting.'
    ],
    faqs: [
      { question: 'How many names can I add?', answer: 'You can add many entries, but performance and readability are best with concise lists.' },
      { question: 'Can I track previous picks?', answer: 'Yes, each pick is saved in local history within your browser.' },
      { question: 'Does this require sign-in?', answer: 'No, no account is required for using the picker.' },
      { question: 'Is it suitable for class use?', answer: 'Yes, many teachers use random name selection to improve participation fairness.' },
      { question: 'Can I clear old results?', answer: 'Yes, clear history at any time.' }
    ],
    related: [
      { href: '/team-generator', label: 'Team Generator' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/random-number-generator', label: 'Random Number Generator' }
    ]
  },
  'team-generator': {
    title: 'Free Random Team Generator',
    subtitle: 'Split a name list into balanced random teams in seconds.',
    howToUse: [
      'Paste participants one per line and set team count. The generator shuffles the full list before distribution to reduce ordering bias.',
      'Press generate teams to create groups instantly. Output blocks make it easy to copy into chat, slides, or classroom displays.',
      'Regenerate when needed, but agree on reroll rules in advance so participants trust the process.'
    ],
    features: [
      'Random shuffle and team assignment in one click.',
      'Configurable number of teams for flexible group sizes.',
      'Readable grouped output for facilitation speed.',
      'History snapshots stored locally.',
      'Mobile-safe form controls for quick setup.'
    ],
    useCases: [
      'Classroom group activities with fair assignment.',
      'Workshop breakout sessions and team discussions.',
      'Sports practice squads and mini-tournament pools.',
      'Online community event teams for collaborative challenges.'
    ],
    tips: [
      'Trim blank lines before generating to avoid empty participants.',
      'Use stable naming format when participants have similar names.',
      'For skill-sensitive events, pre-bucket participants before randomization.'
    ],
    faqs: [
      { question: 'Can I choose team count?', answer: 'Yes, you set the number of teams before generation.' },
      { question: 'Will team sizes be equal?', answer: 'The tool distributes entries as evenly as possible.' },
      { question: 'Can I regenerate quickly?', answer: 'Yes, run again to reshuffle and rebuild teams.' },
      { question: 'Is data uploaded to a server?', answer: 'No, generation runs in your browser and history stays local.' },
      { question: 'Can this work for remote classes?', answer: 'Yes, copy generated teams directly to chat or video calls.' }
    ],
    related: [
      { href: '/random-name-picker', label: 'Random Name Picker' },
      { href: '/dice-roller', label: 'Dice Roller' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' }
    ]
  },
  'random-letter': {
    title: 'Free Random Letter Generator',
    subtitle: 'Generate random alphabet letters for games, prompts, and practice.',
    howToUse: [
      'Choose uppercase or lowercase output depending on your activity format.',
      'Set generation count when you need one or multiple letters in a single run.',
      'Press generate and use history to review prior rounds in game or class sessions.'
    ],
    features: [
      'A-Z random selection with case mode options.',
      'Single and multi-letter generation.',
      'Clear result formatting for easy reading.',
      'Local history tracking for repeated rounds.',
      'Fast reset and rerun workflow.'
    ],
    useCases: [
      'Word game prompts and category games.',
      'Classroom spelling and vocabulary warm-ups.',
      'Random coding variable naming exercises.',
      'Creative writing constraints for brainstorm sessions.'
    ],
    tips: [
      'Use single-letter mode for turn-based games and multi-letter mode for puzzle creation.',
      'Agree on exclusions up front if your activity has custom letter rules.',
      'Capture history when running competitive rounds to prevent disputes.'
    ],
    faqs: [
      { question: 'Can I generate multiple letters at once?', answer: 'Yes, set count and generate a letter set in one action.' },
      { question: 'Are lowercase letters supported?', answer: 'Yes, you can switch between uppercase and lowercase output.' },
      { question: 'Does it save history?', answer: 'Yes, recent results are stored in your browser.' },
      { question: 'Can I use this for classroom games?', answer: 'Yes, it is suitable for simple educational and game scenarios.' },
      { question: 'Is internet required after load?', answer: 'Core generation logic works client-side once the page is loaded.' }
    ],
    related: [
      { href: '/random-color', label: 'Random Color Generator' },
      { href: '/random-number-generator', label: 'Random Number Generator' },
      { href: '/yes-or-no', label: 'Yes or No Generator' }
    ]
  },
  'random-color': {
    title: 'Free Random Color Generator',
    subtitle: 'Generate random HEX and RGB colors with instant visual preview.',
    howToUse: [
      'Click generate to create a random color sample. The preview block updates instantly to show the selected output.',
      'Use HEX and RGB values shown below the preview for design drafts, coding, or creative challenges.',
      'Run multiple generations and compare history to pick palettes or mood directions.'
    ],
    features: [
      'Random color preview card for immediate visual feedback.',
      'HEX and RGB values displayed for direct reuse.',
      'One-click regeneration flow.',
      'History list for palette exploration.',
      'Minimal UI for quick tool adoption.'
    ],
    useCases: [
      'Design inspiration for quick moodboard drafts.',
      'Coding exercises that need random color values.',
      'Party or game prompts with color-based tasks.',
      'Classroom visual experiments for basic color concepts.'
    ],
    tips: [
      'Generate batches and shortlist colors that match your project intent.',
      'Use complementary tools after selection for contrast checks.',
      'Keep a saved screenshot of selected palettes before clearing history.'
    ],
    faqs: [
      { question: 'Does it show HEX values?', answer: 'Yes, each generated color includes HEX and RGB output.' },
      { question: 'Can I keep a color history?', answer: 'Yes, recent generated colors are stored in local history.' },
      { question: 'Is this useful for web design?', answer: 'Yes, HEX output can be copied directly into CSS or design tools.' },
      { question: 'Can I generate endlessly?', answer: 'Yes, there is no practical usage cap.' },
      { question: 'Will my color list sync across devices?', answer: 'No, this version stores history locally on the current device.' }
    ],
    related: [
      { href: '/random-letter', label: 'Random Letter Generator' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/random-number-generator', label: 'Random Number Generator' }
    ]
  },
  'countdown-timer-random': {
    title: 'Free Countdown Timer + Random Trigger',
    subtitle: 'Set a countdown and trigger random outcomes when time is up.',
    howToUse: [
      'Set a minimum and maximum seconds range, then start the random timer.',
      'The tool selects a hidden random countdown value within the range and starts ticking.',
      'When time reaches zero, the end event appears and logs into history for round tracking.'
    ],
    features: [
      'Randomized countdown duration within your chosen bounds.',
      'Live countdown display with start/reset controls.',
      'Auto-logged completion events in local history.',
      'Simple controls suitable for classroom and game facilitation.',
      'Runs fully client-side without account setup.'
    ],
    useCases: [
      'Party game rounds where timing should stay unpredictable.',
      'Classroom speaking drills with random stop moments.',
      'Fitness mini-challenges with surprise interval endings.',
      'Meeting energizers that avoid fixed repetitive timing.'
    ],
    tips: [
      'Keep range narrow for predictable pacing and wide for surprise-heavy rounds.',
      'Explain stop rules clearly before starting each round.',
      'Use reset between rounds to prevent accidental overlap.'
    ],
    faqs: [
      { question: 'Can I choose the time range?', answer: 'Yes, set min and max seconds before starting.' },
      { question: 'Does it pick exact random seconds?', answer: 'Yes, one random integer second value is chosen in range.' },
      { question: 'Can I run repeated rounds?', answer: 'Yes, restart as many rounds as needed.' },
      { question: 'Is result history saved?', answer: 'Yes, completion events are kept in local history.' },
      { question: 'Do I need an account?', answer: 'No, the timer works without sign-in.' }
    ],
    related: [
      { href: '/random-number-generator', label: 'Random Number Generator' },
      { href: '/spin-the-wheel', label: 'Spin the Wheel' },
      { href: '/yes-or-no', label: 'Yes or No Generator' }
    ]
  }
}
