/**
 * lib/content/challenges.ts
 * 30개 오늘의 챌린지 정의 (날짜 시드로 매일 자동 교체)
 */

export interface Challenge {
  id: number
  text: string
  tool: string           // tool slug
  toolLabel: string
  emoji: string
}

export const CHALLENGES: Challenge[] = [
  { id: 0,  emoji: '🪙', text: 'Flip a coin 10 times and predict each result before flipping!', tool: 'coin-flip', toolLabel: 'Coin Flip' },
  { id: 1,  emoji: '🎲', text: 'Roll 5 dice at once — try to get all the same number!', tool: 'dice-roller', toolLabel: 'Dice Roller' },
  { id: 2,  emoji: '🎡', text: 'Add 8 lunch options to the wheel and let it decide your meal!', tool: 'spin-the-wheel', toolLabel: 'Spin Wheel' },
  { id: 3,  emoji: '✅', text: 'Ask 5 life questions to the Yes/No generator and see what it says!', tool: 'yes-or-no', toolLabel: 'Yes or No' },
  { id: 4,  emoji: '🔢', text: 'Generate 3 random numbers between 1–100. Add them up — can you beat 200?', tool: 'random-number-generator', toolLabel: 'Random Number' },
  { id: 5,  emoji: '👥', text: 'Add your friend group to the Name Picker and see who goes first!', tool: 'random-name-picker', toolLabel: 'Name Picker' },
  { id: 6,  emoji: '⚽', text: 'Split 10 names into 2 balanced teams with the Team Generator!', tool: 'team-generator', toolLabel: 'Team Generator' },
  { id: 7,  emoji: '🔤', text: 'Generate 5 random letters and make a word from them!', tool: 'random-letter-generator', toolLabel: 'Letter Generator' },
  { id: 8,  emoji: '🎨', text: 'Generate 3 random colors — can you name a paint they resemble?', tool: 'random-color-generator', toolLabel: 'Color Generator' },
  { id: 9,  emoji: '⏱️', text: 'Start a random timer — pause everything until it rings!', tool: 'countdown-timer-random', toolLabel: 'Countdown Timer' },
  { id: 10, emoji: '🍕', text: "Add 6 foods you've been craving and let the wheel pick tonight's dinner!", tool: 'random-food-picker', toolLabel: 'Food Picker' },
  { id: 11, emoji: '📅', text: 'Generate a random date in the next year — plan something for that day!', tool: 'random-date-generator', toolLabel: 'Date Generator' },
  { id: 12, emoji: '🎰', text: 'Generate lottery numbers and check if any match a real draw!', tool: 'lottery-number-generator', toolLabel: 'Lottery Numbers' },
  { id: 13, emoji: '👶', text: 'Generate 3 baby names from different styles and vote on your favorite!', tool: 'baby-name-generator', toolLabel: 'Baby Names' },
  { id: 14, emoji: '💬', text: 'Use Icebreaker to find a question for your next meeting opener!', tool: 'icebreaker-question-generator', toolLabel: 'Icebreaker' },
  { id: 15, emoji: '🪙', text: 'Coin flip showdown: Heads wins 3 times in a row. How many flips does it take?', tool: 'coin-flip', toolLabel: 'Coin Flip' },
  { id: 16, emoji: '🎲', text: 'Roll a D20 — if you get 20, screenshot and share it!', tool: 'dice-roller', toolLabel: 'Dice Roller' },
  { id: 17, emoji: '🎡', text: "Create a custom wheel with your team's names for today's presenter!", tool: 'spin-the-wheel', toolLabel: 'Spin Wheel' },
  { id: 18, emoji: '✅', text: 'Ask the generator: "Should I take a break right now?" Follow the answer!', tool: 'yes-or-no', toolLabel: 'Yes or No' },
  { id: 19, emoji: '🔢', text: 'Generate a random number 1–52 — look up that playing card and read its fortune!', tool: 'random-number-generator', toolLabel: 'Random Number' },
  { id: 20, emoji: '👥', text: 'Pick a random name from your contacts list to text "Hey!" to today!', tool: 'random-name-picker', toolLabel: 'Name Picker' },
  { id: 21, emoji: '⚽', text: 'Create random teams from your office floor plan — debate the assignments!', tool: 'team-generator', toolLabel: 'Team Generator' },
  { id: 22, emoji: '🔤', text: 'Generate 3 letters — use each as the first letter of a haiku line!', tool: 'random-letter-generator', toolLabel: 'Letter Generator' },
  { id: 23, emoji: '🎨', text: 'Generate a random color and find something in your room that matches it!', tool: 'random-color-generator', toolLabel: 'Color Generator' },
  { id: 24, emoji: '⏱️', text: 'Set a random timer — do one focused task before it ends!', tool: 'countdown-timer-random', toolLabel: 'Countdown Timer' },
  { id: 25, emoji: '🍕', text: 'Add cuisines from 5 different countries — discover your world dinner!', tool: 'random-food-picker', toolLabel: 'Food Picker' },
  { id: 26, emoji: '📅', text: 'Generate 3 random past dates — find a historical event for each!', tool: 'random-date-generator', toolLabel: 'Date Generator' },
  { id: 27, emoji: '🎰', text: 'Generate lottery numbers for 5 consecutive days — spot any patterns?', tool: 'lottery-number-generator', toolLabel: 'Lottery Numbers' },
  { id: 28, emoji: '👶', text: 'Generate a Nature-style baby name — would you give it to a pet?', tool: 'baby-name-generator', toolLabel: 'Baby Names' },
  { id: 29, emoji: '💬', text: 'Pull a Professional icebreaker and post it to your team chat!', tool: 'icebreaker-question-generator', toolLabel: 'Icebreaker' },
]

export function getTodayChallenge(): Challenge {
  const today = new Date()
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()
  const idx = seed % CHALLENGES.length
  return CHALLENGES[idx]
}
