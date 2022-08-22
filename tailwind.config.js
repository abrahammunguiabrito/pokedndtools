/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode: 'jit',
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html']
}