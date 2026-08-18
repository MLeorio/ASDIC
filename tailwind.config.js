/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'swiper',
    'swiper-slide',
    'swiper-wrapper',
    'swiper-pagination-bullet',
    'swiper-pagination-bullet-active',
  ],
  theme: {
    extend: {
      colors: {
        forest: 'rgb(var(--color-forest) / <alpha-value>)',
        emerald: 'rgb(var(--color-primary) / <alpha-value>)',
        gold: 'rgb(var(--color-secondary) / <alpha-value>)',
        teal: 'rgb(var(--color-accent) / <alpha-value>)',
        noir: 'rgb(var(--color-noir) / <alpha-value>)',
        'noir-surface': 'rgb(var(--color-noir-surface) / <alpha-value>)',
        heading: 'rgb(var(--color-text-heading) / <alpha-value>)',
        body: 'rgb(var(--color-text-body) / <alpha-value>)',
        surface: 'rgb(var(--color-surface-page) / <alpha-value>)',
        'surface-card': 'rgb(var(--color-surface-card) / <alpha-value>)',
        edge: 'rgb(var(--color-border) / <alpha-value>)',
        'on-accent': 'rgb(var(--color-on-accent) / <alpha-value>)',
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