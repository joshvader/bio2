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
        primary: '#4caf50',
        secondary: '#ff6f00',
        'dark-bg': 'rgb(24, 24, 27)',
        'dark-text': 'rgb(24, 24, 27)',
        'light-bg': '#000000',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '20px',
      },
      boxShadow: {
        'custom': '0 6px 16px rgba(0,0,0,0.08)',
        'custom-lg': '0 10px 24px rgba(0,0,0,0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config