/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
        'size': 'width, height',
        'width': 'width',
        'max-height': 'max-height'
      }
    }
  },
  plugins: [],
  darkMode: 'selector'
}

