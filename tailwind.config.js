// filepath: /u:/personale/Master S2I/Blockchain/html & css/Start2Impact_HTML_CSS/tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}