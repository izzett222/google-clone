/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "lato": "'Lato', sans-serif",
      },
      backgroundColor: {
        hover: "rgba(60,64,67,.08)"
      },
      boxShadow: {
        "input-shadow": "0 1px 6px rgb(32 33 36 / 28%)"
      },
      colors: {
        "menu-link": "rgba(0,0,0,.87)",
        "active-menu-link": "#4285f4"
      }
    },
  },
  plugins: [],
}
