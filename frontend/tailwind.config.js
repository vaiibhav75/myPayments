/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat Alternates', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        lightGray : "#F4F4F5",
        darkGray: "#6F7583",
        green: "#21C55D",
        red: "#ff0033"
      }
    },
  },
  plugins: [],
}