/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Noto Serif Display', 'Noto Serif TC', 'serif'],
      },
    },
  },
  plugins: [],
}

