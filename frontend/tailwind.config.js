/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray : "#F4F4F5",
        darkGray: "#6F7583",
        green: "#21C55D"
      }
    },
  },
  plugins: [],
}