/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/*.html",
    "./_layouts/**.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html",
    "./css/**/*.css",
  ],
  safelist: [
    {
      pattern: /^(bg|border|text)-/, // Keep any classes that start with bg-, border-, or text-
    },
    {
      pattern: /-100$/, // Keep classes that end with -100
    },
    {
      pattern: /-200$/, // Keep classes that end with -200
    },
    {
      pattern: /-500$/, // Keep classes that end with -500
    },
  ],
  theme: {
    extend: {
      colors: {
        bodyBackground: '#F9FAFE',
        backgroundsciam: "#cbd5e1",
        grayBg: '#f2f1ed',
        navysciam: '#384a72',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff",
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      width: {
        'custom-width': '702px'  // Custom width
      },
      height: {
        '23': '23rem',
        '36': '36rem',
        'custom-height': '474px'
      },
      fontFamily: {
        sans: ['Noyh Geometric', 'open-sans', 'sans-serif'],
        asciidoc: ['Open Sans', 'Noto Serif', 'Ubuntu Mono', 'sans-serif'],
      },
      lineClamp: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      backgroundImage: {
        'hero-image': "url('/images/visuals/grids.jpg')"
      },
      borderRadius: {
        '2.5': '2.5rem'
      }
    },
  },
  plugins: [],
}
