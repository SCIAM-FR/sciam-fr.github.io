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
                  fontSize: '2.25rem !important',
                  lineHeight: '2.5rem !important',
                  // margin: '1em 0px',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h2': {
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                  // margin: '1em 0px',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h3': {
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                  // margin: '1em 0px',
                  color: `${theme('colors.navysciam')} !important`,
                },
                'h4': {
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                  // margin: '1em 0px',
                  color: `${theme('colors.navysciam')} !important`,
                },

                '#preamble > .sectionbody > .paragraph:first-of-type > p': {
                  fontSize: '1.25rem !important',
                  lineHeight: '1.7rem !important',
                  fontWeight: '500 !important',
                  marginBottom:'1.2rem !important',
                  color: `${theme('colors.navysciam')} !important`,
                },

                'h2 a': { 
                  fontSize: '2.25rem !important',
                  lineHeight: '2.5rem !important',
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
                  lineHeight: '2rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Noyh Geometric" sans-serif !important',
                  fontWeight: '600 !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'h2 code': { 
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h3 code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h4 code': { 
                  fontSize: '1rem !important',
                  lineHeight: '1.5rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'h2 a code': { 
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h3 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'h4 a code': { 
                  fontSize: '1rem !important',
                  lineHeight: '1.5rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                '.sect1': {
                  borderTop: '0 !important',
                  paddingBottom: '0 !important'
                },

                'sect2 sect3 h2 a code': { 
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sect2 sect3 h3 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sect2 sect3 h4 a code': { 
                  fontSize: '1rem !important',
                  lineHeight: '1.5rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                'sectionbody sect2 h2 a code': { 
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sectionbody sect2 h3 a code': { 
                  fontSize: '1.125rem !important',
                  lineHeight: '1.75rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },
                'sectionbody sect2 h4 a code': { 
                  fontSize: '1rem !important',
                  lineHeight: '1.5rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Droid Sans Mono", monospace !important',
                  fontWeight: 'normal !important',
                  color: `${theme('colors.navysciam')} !important`,
                  '&:hover': {
                    color: `${theme('colors.lightbluesciam')} !important`,
                  },
                },

                // '.paragraph> p': {
                //   marginTop: '1rem !important',
                //   marginBottom: '1rem !important',
                // },
    
                // 'p code': {  
                //   fontFamily: '"Droid Sans Mono" monospace !important',
                //   fontSize: '1rem !important', 
                //   lineHeight: '1.75rem !important',
                //   fontWeight: 'normal !important'
                // },
                '.paragraph> p code': {  
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1rem !important',
                  // lineHeight: '1.75rem !important', 
                  fontWeight: 'normal !important'
                },
                'code' : {
                  color: `${theme('colors.navysciam')} !important`,
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1.1rem',
                  // lineHeight: '1.75rem !important', 
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

                '.ulist p code': {
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1rem !important',
                  lineHeight: '1.75rem !important', 
                  fontWeight: 'normal !important'
                },

                '.ulist li': {
                  marginBottom: '1.5rem !important',
                },

                '.listingblock': {
                  lineHeight: '1.75rem !important',
                  marginTop: '1.5rem !important',
                  marginBottom: '1.5rem !important',
                  fontWeight: 'normal !important',
                },

                '.admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title': {
                    fontFamily: `"Noyh Geometric", sans-serif !important`,
                    fontSize: '1.25rem !important',
                    lineHeight: '1.75rem !important',
                    fontStyle: 'italic !important',
                    fontWeight: 'normal !important',
                    color: theme('colors.navysciam') + ' !important',
                },

                '.admonitionblock > table td.content': {
                    display: 'inline-block !important',
                    verticalAlign: 'middle !important',
                },

                '.admonitionblock > table td.icon': {
                    width: '0 !important',
                },

                '.content> pre': {
                    width: '100%',
                    whiteSpace: 'pre',
                    overflowX: 'auto',
                    display: 'block',
                    border: `1px solid ${theme('colors.gray.200')}`,
                },

                '.content> pre span': {
                  fontSize: '1rem !important',
                  fontWeight: 'normal !important',
                  fontFamily: '"Droid Sans Mono" monospace !important',
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
          });
        },
      ],
  };
  