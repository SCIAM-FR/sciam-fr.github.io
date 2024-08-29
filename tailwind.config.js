/** @type {import('tailwindcss').Config} */
const typographyPreset = require('./typography-preset.js');

module.exports = {
  presets: [
    typographyPreset,
  ],
  content: [
    "./_layouts/**.html",
    "./_includes/**/*.html",
    "./*.html"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'nav': '1150px',
      'tablet': {'max': '1024px', 'min': '820px'},
      'md': '820px',
      'lg': '1128px',
      'xl': '1280px',
      '2xl': '1536px'
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
        7: '0.6'
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
        asciidoc: ["Droid Sans Mono", "DejaVu Sans Mono"],
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
        '104': '1.04',
      },
      spacing: {
        '0.3': '0.075rem',
        12: '50px'
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive', 'hover', 'focus'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
