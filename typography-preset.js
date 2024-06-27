/** @type {import('tailwindcss').Config} */
// typography.config.js
module.exports = {
    theme: {
      extend: {
        typography: (theme) => ({
            DEFAULT: {
              css: { // Override asciidoc default styles
                maxWidth: '2000px',

                'h1, h2, h3, h4, h5, h6': {
                  fontFamily: 'Noyh Geometric',
                  color: `${theme('colors.navysciam')} !important`,
                  marginTop:'24px !important',
                  marginBottom:'24px !important',
                },

                'h1': {
                  fontSize: '2.25rem !important',
                  lineHeight: '2.25rem !important',
                },
                'h2': {
                  fontSize: '1.875rem !important',
                  lineHeight: '2.25rem !important',
                },
                'h3': {
                  fontSize: '1.5rem !important',
                  lineHeight: '2rem !important',
                },
                'h4': {
                  fontSize: '1.25rem !important',
                  lineHeight: '1.75rem !important',
                },

                '#preamble > .sectionbody > .paragraph:first-of-type > p': {
                  fontSize: '1.25rem !important',
                  lineHeight: '1.7rem !important',
                  fontWeight: '600 !important',
                  marginBottom:'1.2rem !important',
                  color: `${theme('colors.navysciam')} !important`,
                },

                'p': {
                  fontSize: '1.25rem !important',
                  marginTop:'0.25rem !important',
                  marginBottom:'0.25rem !important',
                },

                'a': {
                  color: theme('colors.blue.600'),
                        '&:hover': {
                        color: theme('colors.yellow.500'),
                  },
                },

                'code': {
                  fontFamily: 'Droid Sans Mono',
                  fontSize: '1rem !important',
                  lineHeight: '1.2rem !important',
                },

                'table': {
                  width: '100%', 
                  verticalAlign: 'middle',
                },
                'th, td': {
                  verticalAlign: 'middle',
                },

                'h2 a': { 
                  fontSize: '2.25rem !important',
                  lineHeight: '2.5rem !important',
                  textDecoration: 'none !important',
                  fontFamily: '"Noyh Geometric" !important',
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
                  fontFamily: '"Noyh Geometric" !important',
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
                  fontFamily: '"Noyh Geometric" !important',
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

                '.paragraph> p code': {  
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '0.9rem !important',
                  fontWeight: 'normal !important'
                },
                'code' : {
                  color: `${theme('colors.navysciam')} !important`,
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '1rem',
                  fontWeight: 'normal !important',
                },

                'p code': {
                  fontSize: '0.9rem !important',
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

                'table td.content code::before' : {
                  content: 'none',
                },
                'table td.content code::after' : {
                  content: 'none',
                },

                '.title code::before' : {
                  content: 'none',
                },
                '.title code::after' : {
                  content: 'none',
                },

                '.ulist p code': {
                  fontFamily: '"Droid Sans Mono" monospace !important',
                  fontSize: '0.9rem !important',
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

                '.listingblock > .content > pre:not(.highlight)': {
                  color: `${theme('colors.navysciam')} !important`,
                  fontSize: '0.9rem !important',
                },

                '.literalblock pre, .listingblock > .content > pre': {
                  fontFamily: '"Droid Sans Mono" !important',
                  fontSize: '1rem !important',
                },

                '.admonitionblock td.content > .title, .audioblock > .title, .exampleblock > .title, .imageblock > .title, .listingblock > .title, .literalblock > .title, .stemblock > .title, .openblock > .title, .paragraph > .title, .quoteblock > .title, table.tableblock > .title, .verseblock > .title, .videoblock > .title, .dlist > .title, .olist > .title, .ulist > .title, .qlist > .title, .hdlist > .title': {
                  fontSize: '1.125rem !important',  
                  fontFamily: '"Noyh Geometric" !important',
                  color: `${theme('colors.navysciam')} !important`,
                },

                'admonitionblock note td.content > .title code': {
                  fontSize: '0.9rem !important',  
                  fontFamily: '"Droid Sans Mono" monospace !important',
                },

                '.listingblock> .title code': {
                  fontSize: '0.9rem !important',
                },

                'table > tbody > tr > td code': {
                  fontSize: '0.9rem !important',
                },

                'table > thead > tr > th': {
                  textAlign: 'center !important',
                },
                'table > tbody > tr > td p': {
                  textAlign: 'center',
                },

                '.content> pre': {
                    width: '100%',
                    whiteSpace: 'pre',
                    overflowX: 'auto',
                    display: 'block',
                    border: `1px solid ${theme('colors.gray.200')}`,
                    marginTop:'1rem !important',
                    marginBottom:'1rem !important',
                },

                '.content> pre span': {
                  fontFamily: '"Droid Sans Mono" monospace !important',
                },

                '.highlight> pre': {
                    backgrounColor: `${theme('colors.lightgrey')} !important`,
                },

                'td code::before': {
                  content: 'none',
                },
                'td code::after': {
                  content: 'none',
                },

                'td.content': {
                  fontSize: '1.125rem !important',
                },
                'td.content code': {
                  fontSize: '0.9rem !important',
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
  