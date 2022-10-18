/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "arial": "arial"
      },
      backgroundColor: {
        hover: "rgba(60,64,67,.08)"
      },
      boxShadow: {
        "input-shadow": "0 1px 6px rgb(32 33 36 / 28%)"
      },
      colors: {
        "menu-link": "rgba(0,0,0,.87)",
        "active-menu-link": "#4285f4",
        "light-gray": "#70757a",
        "input-border": "#dfe1e5",
        "btn-bg": "#f8f9fa",
        "btn-text": "#3c4043",
        "text-light-gray": "#4d5156",
        "link-blue": "#1a0dab",
        "footer-bg": "#f2f2f2",
        "dark-gray": "#dadce0"
      },
      borderWidth: {
        "1\.5": "3px"
      },
      fontSize: {
        '0\.5sm': "13px",
        "15": "15px",
        "1\.5": "3px"
      },
      spacing: {
        "0\.88": "0.188rem",
        "2.7": "0.688rem"
      },
      padding: {
        '4\.5': "15px",
        "18": "1.125rem",
        "7.5": "1.875rem"
      },
      margin: {
        "2.7": "0.688rem"
      },
      height: {
        "24\.5": "5.75rem"
      },
      width: {
        "64\.5": "17rem"
      },
      maxWidth: {
        "36": "36.375rem"
      }
    },
  },
  plugins: [],
}
