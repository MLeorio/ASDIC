/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: 'rgb(var(--color-bg-dark) / <alpha-value>)',
        ink: 'rgb(var(--color-text-dark) / <alpha-value>)',
        emerald: 'rgb(var(--color-primary) / <alpha-value>)',
        gold: 'rgb(var(--color-secondary) / <alpha-value>)',
        teal: 'rgb(var(--color-accent) / <alpha-value>)',
        cream: 'rgb(var(--color-bg-light) / <alpha-value>)',
        noir: 'rgb(var(--color-noir) / <alpha-value>)',
        'noir-surface': 'rgb(var(--color-noir-surface) / <alpha-value>)',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};