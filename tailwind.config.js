/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './public/index.html'],
  theme: {
    extend: {
        colors: {
          'grayish-blue': 'hsl(233, 8%, 79%)',
          'soft-orange': 'hsl(35, 77%, 62%)',
          'soft-red': 'hsl(5, 85%, 63%)',
          'off-white': 'hsl(36, 100%, 99%)',
          'dark-grayish-blue': 'hsl(236, 13%, 42%)',
          'very-dark-blue': 'hsl(240, 100%, 5%)'
        },
        fontFamily: {
          'body': ['"Inter"'],
        }
    },
  },
  plugins: [],
}