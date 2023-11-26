/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "input-field": "#C2E6F4",
        "btn-color":"#F37474",
        "btn-icon":"#2ACFCF"
      }
    },
  },
  plugins: [],
}

