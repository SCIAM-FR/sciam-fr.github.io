/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [ "./_layout/*.html",
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
        'sans': ['Noyh Geometric']
    },
    colors: {
        navysciam: '#384a72',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff"
        
      }, 
    extend: {
      
    },
  },
  plugins: [],
}

