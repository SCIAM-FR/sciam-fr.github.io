/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [ "./_layout/*.html",
              "./_site/**/*.html",
              "./_posts/*.{html,md}",
              "./_includes/*.html",
              "./page*/*.html",
              "./index.html", 
              "./autors.html", 
              "./tags.html"],
  theme: {
    colors: {
        'navysciam': '#384a72',
        'yellowsciam': '#ffec3f',
        'light-blue': '#9abcc3'
      }, 
    extend: {
      
    },
  },
  plugins: [],
}

