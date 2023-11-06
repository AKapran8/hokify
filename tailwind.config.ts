/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '600px' },
      },
    },
  },
  variants: {},
  plugins: [],
}