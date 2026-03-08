/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'coin-gold': '#FFD700',
        'dice-purple': '#A855F7',
        'wheel-emerald': '#10B981',
        'yesno-rose': '#F43F5E',
        'rng-sky': '#0EA5E9',
        'picker-amber': '#F59E0B',
        'team-indigo': '#6366F1',
        'letter-lime': '#84CC16',
        'color-pink': '#EC4899',
        'timer-cyan': '#06B6D4',
        'food-orange': '#F97316',
        'date-violet': '#8B5CF6',
        'lottery-yellow': '#EAB308',
        'baby-teal': '#14B8A6',
        'ice-fuchsia': '#D946EF'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scale-bounce': 'scaleBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'mesh-shift': 'meshShift 30s ease-in-out infinite',
        'fade-slide-up': 'fadeSlideUp 0.6s ease forwards',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        scaleBounce: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        meshShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        fadeSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      boxShadow: {
        'glow-brand': '0 0 20px rgba(47, 141, 255, 0.4), 0 0 40px rgba(47, 141, 255, 0.2)',
        'glow-accent': '0 0 20px var(--accent-glow, rgba(47, 141, 255, 0.4))',
        'card-hover': '0 20px 48px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(47, 141, 255, 0.2)'
      },
      borderRadius: {
        bento: '24px'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
