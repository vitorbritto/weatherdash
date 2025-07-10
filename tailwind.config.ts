import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      boxShadow: {
        glow: '0 0 20px rgba(66, 153, 225, 0.5)',
        'glow-lg': '0 0 30px rgba(66, 153, 225, 0.6)'
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1E88E5',
          secondary: '#6C757D',
          accent: '#4CAF50',
          neutral: '#191D24',
          'base-100': '#0f1115',
          'base-200': '#161920',
          'base-300': '#1e2129',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272'
        }
      }
    ],
    darkTheme: 'mytheme'
  }
} satisfies Config
