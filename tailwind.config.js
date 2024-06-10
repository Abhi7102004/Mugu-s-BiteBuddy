/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
    fontFamily:{
      'reddit-mono': '"Reddit Mono", monospace',
      'noto-sans':'"Noto Sans Mono", monospace'
    }
  },
  plugins: [],
}