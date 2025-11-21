/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#F26A21',
        'secondary-red': '#D6451B',
        'accent-yellow': '#F7C325',
        'primary-teal': '#0C9A86',
        'secondary-green': '#1E3E36',
        'accent-aqua': '#34C3A7',
        'light': '#FFFFFF',
      },
    },
  },
  plugins: [],
}