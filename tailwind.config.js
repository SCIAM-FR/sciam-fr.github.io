/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/*.html",
    "./_layouts/**.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
    "./_posts/*.md",
    "./_news/*.md",
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
    screens: {
      'sm': '902px',
      'md': '952px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bodyBackground: '#F9FAFE',
        backgroundsciam: "#cbd5e1",
        grayBg: '#f2f1ed',
        navysciam: '#384a72',
        navysciamlight: '#505f8c',
        navysciamdark: '#2e3a56',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff",
      },
      gradients: {
        'custom-gradient': ['navysciamdark', 'navysciam', 'navysciamlight']
      },
      boxShadow: {
        'custom-bottom-shadow': '0 10px 6px -9px lightgrey',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      width: {
        'custom-width': '702px'
      },
      height: {
        '23': '23rem',
        '36': '36rem',
        'custom-height': '474px',
        'custom-sidebar-height': 'calc(100vh - 2.5rem)',
      },
      minHeight: {
        '400': '400px',
      },
      maxHeight: {
        'custom-max-height': 'calc(100vh - 4rem)'
      },
      fontFamily: {
        sans: ['Noyh Geometric', 'open-sans', 'sans-serif'],
        asciidoc: ['Open Sans', 'Noto Serif', 'Ubuntu Mono', 'sans-serif'],
      },
      fontSize: {
        '1.15': '1.15rem',
        '1.5': '1.5rem',
      },
      lineClamp: {
        '1': '1',
        '2': '2',
        '3': '3',
      },
      blur: {
        xl: '24px',
      },
      backdropBlur: {
        xl: '20px',
      },
      backgroundImage: {
        'hero-image': "url('/images/visuals/hero-bg.png')",
        'hero-bg': "url('/images/visuals/bg.png')"
      },
      borderRadius: {
        '2.5': '2.5rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: { // Override asciidoc default styles
            maxWidth: '2000px',
            'h2 a': { 
              color: `${theme('colors.navysciam')} !important`,
              '&:hover': {
                color: `${theme('colors.lightbluesciam')} !important`,
              },
              textDecoration: 'none !important',
              fontSize: '1.25rem', 
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            'h3 a': { 
              color: `${theme('colors.navysciam')} !important`,
              '&:hover': {
                color: `${theme('colors.lightbluesciam')} !important`,
              },
              textDecoration: 'none !important',
              fontSize: '1.25rem', 
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            'h4 a': { 
              color: `${theme('colors.navysciam')} !important`,
              '&:hover': {
                color: `${theme('colors.lightbluesciam')} !important`,
              },
              textDecoration: 'none !important',
              fontSize: '1.25rem',
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            '#preamble > .sectionbody > .paragraph:first-of-type > p': {
              fontSize: '1.25rem !important',
              color: `${theme('colors.navysciam')} !important`,
            },
            'h2 code, h3 code, h4 code': { 
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono", sans-serif',
              fontSize: ' 0.875rem', 
              fontWeight: 'light !important'
            },
            'h2 a code, h3 a code, h4 a code': { 
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono", sans-serif',
              fontSize: ' 0.875rem', 
              fontWeight: 'light !important'
            },
            'p code': {  
              fontFamily: '"Ubuntu Mono" sans-serif !important',
              fontSize: ' 0.875rem !important', 
              fontWeight: 'light !important'
            },
            'code' : {
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono" sans-serif !important',
              fontSize: ' 0.875rem', 
              fontWeight: 'light !important',
            },
            'listingblock title' : {
              fontSize: '0.875rem !important',
              fontWeight: `${theme('fontWeight.semibold')} !important`,
              color: `${theme('colors.navysciam')} !important`,
              padding: `${theme('padding.2')} !important`,
            },
            img: {
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block',
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography', 'tailwindcss-filters'),
    function({ addBase, theme }) { // Override asciidoc style
      addBase({
        '#toc': {
          borderBottom: 'none',
          paddingBottom: theme('spacing.2'),
        },
        'code': {
          fontFamily: '"Ubuntu Mono" sans-serif !important',
          fontSize: ' 0.875rem !important', 
          fontWeight: 'light !important'
        }
      });
    },
  ],
}
