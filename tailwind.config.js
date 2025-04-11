/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#000000',
          secondary: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Your-Font-Here', 'system-ui'],
        serif: ['Your-Serif-Font', 'serif']
      }
    }
  },
  plugins: []
}
