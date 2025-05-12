// // tailwind.config.ts
// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'var(--primary)',
//         'primary-light': 'var(--primary-light)',
//         'primary-dark': 'var(--primary-dark)',
//         secondary: 'var(--secondary)',
//         accent: 'var(--accent)',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'translateY(-5px)' },
//           '100%': { opacity: '1', transform: 'translateY(0)' }
//         }
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.2s ease-out'
//       }
//     },
//   },
//   plugins: [],
// }
// export default config

// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-dark': 'var(--secondary-dark)',
        accent: 'var(--accent)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-out'
      }
    },
  },
  plugins: [],
}
export default config