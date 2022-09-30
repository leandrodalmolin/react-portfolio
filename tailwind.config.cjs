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
      addVariant('inverse-active', '.inverse &')
    })
  ],
}
