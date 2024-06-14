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
        grayBgSciam: '#f9fafe',
        navysciam: '#384a72',
        navysciamlight: '#505f8c',
        navysciamdark: '#2e3a56',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff",
        cursorBg: '#ffec3f',
      },
      gradients: {
        'custom-gradient': ['navysciamdark', 'navysciam', 'navysciamlight']
      },
      opacity: {
        7: '0.7'
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
        '6xl': ['3.75rem', { lineHeight: '1' }], // Custom font-size with line-height
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
        '2.5': '2.5rem',
          full: '50px'
      },
      scale: {
        '104.5': '1.045',
      },
      spacing: {
        '0.3': '0.075rem',
        12: '50px'
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
              fontSize: '36px', 
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            'h3 a': { 
              color: `${theme('colors.navysciam')} !important`,
              '&:hover': {
                color: `${theme('colors.lightbluesciam')} !important`,
              },
              textDecoration: 'none !important',
              fontSize: '30px', 
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            'h4 a': { 
              color: `${theme('colors.navysciam')} !important`,
              '&:hover': {
                color: `${theme('colors.lightbluesciam')} !important`,
              },
              textDecoration: 'none !important',
              fontSize: '24px',
              fontFamily: '"Noyh Geometric" sans-serif !important',
              fontWeight: 'bold !important',
            },
            '#preamble > .sectionbody > .paragraph:first-of-type > p': {
              fontSize: '1.25rem !important',
              color: `${theme('colors.navysciam')} !important`,
            },
            'p': {
              marginTop: '0.3rem !important',
              marginBottom:'0.3rem !important',
            },

            'h2 code, h3 code, h4 code': { 
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono", sans-serif',
              // fontSize: ' 0.875rem', 
              fontWeight: 'light !important'
            },
            'h2 a code, h3 a code, h4 a code': { 
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono", sans-serif',
              // fontSize: ' 0.875rem', 
              fontWeight: 'light !important'
            },
            'sect3 h2 a code, sect3 h3 a code, sect3 h4 a code': { 
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono", sans-serif',
              // fontSize: ' 0.875rem !important', 
              fontWeight: 'light !important'
            },

            'p code': {  
              fontFamily: '"Ubuntu Mono" sans-serif !important',
              // fontSize: ' 0.875rem !important', 
              fontWeight: 'light !important'
            },
            'paragraph p code': {  
              fontFamily: '"Ubuntu Mono" sans-serif !important',
              // fontSize: ' 0.875rem !important', 
              fontWeight: 'light !important'
            },
            'code' : {
              color: `${theme('colors.navysciam')} !important`,
              fontFamily: '"Ubuntu Mono" sans-serif !important',
              // fontSize: ' 0.875rem', 
              fontWeight: 'light !important',
            },
            'p code::before': {
              content: 'none',
            },
            'p code::after': {
              content: 'none',
            },
            'h2 code::before, h3 code::before, h4 code::before': {
              content: 'none',
            },
            'h2 code::after, h3 code::after, h4 code::after': {
              content: 'none',
            },
            'listingblock' : {
              marginTop: '0.5rem !important',
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
    function({ addBase, theme, addComponents }) { 
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

      const buttons = {
        '.btn-1': {
          display: 'inline-block',
          position: 'relative',
          border: 'none',
          color: '#fff',
          fontSize: '18px',
          margin: '20px',
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '1px',
            background: '#ffec3f',
            transition: 'width 0.2s linear',
            transitionDelay: '0.2s',
          },
          '&::before': {
            right: 0,
            top: 0,
          },
          '&::after': {
            left: 0,
            bottom: 0,
          },
          '&:hover::before, &:hover::after': {
            width: '100%',
            transitionDelay: '0s',
          },
          '& .btn-span': {
            display: 'block',
            padding: '25px 25px',
            position: 'relative',
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              width: '1px',
              height: '0',
              background: '#ffec3f',
              transition: 'height 0.2s linear',
              transitionDelay: '0s',
            },
            '&::before': {
              left: 0,
              top: 0,
            },
            '&::after': {
              right: 0,
              bottom: 0,
            },
            '&:hover::before, &:hover::after': {
              height: '100%',
              transitionDelay: '0.2s',
            }
          }
        }
      };

      addComponents(buttons);
    },
  ],
}
