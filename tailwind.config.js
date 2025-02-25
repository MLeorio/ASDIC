/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#006A4D',
        secondary: '#FFCF00',
      },
    },
  },
  plugins: [],
};