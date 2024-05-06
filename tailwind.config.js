/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [ "./_layouts/*.html",
              "./_layouts/**/*.html",
              "./_site/*.html",
              "./_site/**/*.html",
              "./_posts/*.{html,md}",
              "./_includes/*.html",
              "./page*/*.html",
              "./index.html", 
              "./autors.html", 
              "./tags.html"],
  theme: {
    fontFamily: {
        'sans': ['Noyh Geometric', 'open-sans', 'sans-serif']
    },
    colors: {
        backgroundsciam: "#cbd5e1",
        navysciam: '#384a72',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff"
    }, 
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}