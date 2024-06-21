/** @type {import('tailwindcss').Config} */
// typography.config.js
module.exports = {
    theme: {
      extend: {
        typography: (theme) => ({
            DEFAULT: {
              css: { // Override asciidoc default styles
                maxWidth: '2000px',

                'h1': {
                  fontSize: '3rem !important',
                  lineHeight: '1 !important',
                  marginTop: '0 !important',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h2': {
                  fontSize: '2.25rem !important',
                  lineHeight: '2.5rem !important',
                  marginTop: '0 !important',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h3': {
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginTop: '0 !important',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h4': {
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  marginTop: '0 !important',
                  color: `${theme('colors.navysciam')} !important`,
                },

                '#preamble > .sectionbody > .paragraph:first-of-type > p': {
                  fontSize: '1.25rem !important',
                  lineHeight: '1.7rem !important',
                  marginBottom:'0.8rem !important',
                  color: `${theme('colors.navysciam')} !important`,
                },

                'h2 a': { 
                  fontSize: '2.25rem !important',
                  lineHeight: '2.5rem !important',
                  marginBottom: '0.8rem !important',
                  marginTop: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Noyh Geometric" sans-serif !important',
                  fontWeight: 'bold !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h3 a': { 
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginBottom: '0.8rem !important',
                  marginTop: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Noyh Geometric" sans-serif !important',
                  fontWeight: '600 !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h4 a': { 
                  fontSize: '1.5rem !important',
                  lineHeight: '1.75rem !important',
                  marginBottom: '0.8rem !important',
                  marginTop: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Noyh Geometric" sans-serif !important',
                  fontWeight: '600 !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },



                'h2 code': { 
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h3 code': { 
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h4 code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'h2 a code': { 
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h3 a code': { 
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h4 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'sect2 sect3 h2 a code': { 
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sect2 sect3 h3 a code': { 
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sect2 sect3 h4 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'sectionbody sect2 h2 a code': { 
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sectionbody sect2 h3 a code': { 
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sectionbody sect2 h4 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                '.paragraph> p': {
                  marginTop: '1rem !important',
                  marginBottom: '0.8rem !important',
                },
    
                'p code': {  
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1.125rem !important', 
                  lineHeight: '1.75rem !important',
                  fontWeight: 'normal !important'
                },
                '.paragraph> p code': {  
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1.1rem !important',
                  lineHeight: '1.75rem !important', 
                  fontWeight: 'normal !important'
                },
                'code' : {
                  color: `${theme('colors.navysciam')} !important`,
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1.1rem',
                  lineHeight: '1.75rem !important', 
                  fontWeight: 'normal !important',
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
                '.listingblock': {
                    lineHeight: '1.75rem !important',
                    fontWeight: 'normal !important',
                    fontFamily: '"Droid Sans Mono" monospace !important',
                },
                '.content> pre': {
                    width: '100%',
                    whiteSpace: 'pre',
                    overflowX: 'auto',
                    display: 'block',
                    lineHeight: '1.75rem !important',
                    fontWeight: 'normal !important',
                    fontFamily: '"Droid Sans Mono" monospace !important',
                    border: `1px solid ${theme('colors.gray.200')}`,
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
    plugins: [
        require('@tailwindcss/typography'),
        function({ addBase, theme }) { 
          addBase({
            '#toc': {
              borderBottom: 'none',
              paddingBottom: theme('spacing.1'),
            },
            // 'code': {
            //   fontFamily: '"Ubuntu Mono" sans-serif !important',
            //   fontSize: '1rem !important', 
            //   lineHeight: '1.75rem !important',
            //   fontWeight: 'normal !important'
            // }
          });
        },
      ],
  };
  