/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  safelist: [
    {
      pattern:
        /bg-(bright-orange|pale-orange|bright-cyan|pale-cyan|bright-pink|pale-pink|bright-blue|pale-blue)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        black: '#3C3B52',
        primary: '#0aa8c1',
        'bright-orange': '#FC871B',
        'pale-orange': '#FFF5EC',
        'bright-cyan': '#0AA8C1',
        'pale-cyan': '#E7FDFD',
        'bright-pink': '#E83158',
        'pale-pink': '#FEF0F3',
        'bright-blue': '#3A5AE3',
        'pale-blue': '#F2F5FF',
      },
    },
  },
  plugins: [],
}
