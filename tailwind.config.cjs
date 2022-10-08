const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['"DM Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['"Libre Baskerville"', 'Georgia', 'serif']
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('theme-light', ['&.theme-light', '.theme-light &'])
      addVariant('theme-dark', ['&.theme-dark', '.theme-dark &'])
      addVariant('navbar-scroll', ['&.navbar-scroll', '.navbar-scroll &'])
    })
  ],
}
