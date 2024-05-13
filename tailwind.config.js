/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/*.html",
    "./_layouts/**.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        backgroundsciam: "#cbd5e1",
        navysciam: '#384a72',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff"
      },
      fontFamily: {
        sans: ['Noyh Geometric', 'open-sans', 'sans-serif']
      },
    },
  },
  plugins: []
}
