/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/*.html",
    "./_layouts/**.html",
    "./_includes/**/*.html",
    "./_site/**/*.html",
    "./_posts/*.md",
    "./*.md",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        backgroundsciam: "#cbd5e1",
        navysciam: '#384a72',
        yellowsciam: '#ffec3f',
        lightbluesciam: "#9abcc3",
        greysciam: "#9CA3AF",
        lightgrey: "#F5F5F7",
        white: "#fff",
        'administration': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'alea': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'algorithme': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'angular': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'angular16': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'angular17': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'application-web': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'architecture-hexagonale': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'banking': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'bayes': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'beans': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'behavioralscience': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'biaiscognitif': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'blockchain': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'cdi': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'cerveau': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'chatbot': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'collections': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'communication': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'concurrence-structurée': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'craftsmanship': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'cybercrime': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'cybersecurite': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'cybersecurity': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'decisionmarketing': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'discriminations': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'domain-driven-design': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'ejb': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'economie': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'education': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'ethique': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'extension': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'ffm': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'finance': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'garbage-collector': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'heuristique': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'hooks': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'humanfactor': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'hydratation': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'hydratation-par-défaut': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'ia': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'ihm': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'illusiondesséries': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'intelligencecollective': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'interfaces': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'jdk': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'jdkmon': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'jakarta-ee': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'jakarta-mvc': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'jakarta-restful-web-service': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'java': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'java-14': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'java-19': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'java-20': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'java-21': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'java-22': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'javafx': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'lra': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'machine-learning': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'machinelearning': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'microprofile': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'mindset': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'misc': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'mistral-ia': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'neuroscience': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'newletterscc': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'nudge': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'outillage': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'pattern-matching': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'pgvector': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'philosophie': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'police': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'prediction': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'projet-amber': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'projet-loom': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'projet-panama': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'psychologie': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'quarkus': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'rag': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'racisme': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'raison': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'researchreports': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'reseaux': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'ressourceshumaines': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'riskmanagement': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'router': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'rxjs': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'réseau-neuronal-artificiel': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'saga': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'scc': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'spi': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'sagessedesfoules': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'science': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'sciencescognitives': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'sciencescomportementales': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'securite': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'signal': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'sludge': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'sous-rfc': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'spring-ai': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'spring-boot': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'startup': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'switch-expressions': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'threads-virtuels': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'ui': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'violence': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'webrtc': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'zgc': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'ai': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'control-flow': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
        'genai': {
          bg: '#FFCCCC',
          border: '#FF9999',
          text: '#CC0000',
        },
        'java': {
          bg: '#CCFFFF',
          border: '#99FFFF',
          text: '#0099CC',
        },
        'lazy-loading-blocs': {
          bg: '#FFCC99',
          border: '#FF9966',
          text: '#CC6600',
        },
        'le-signal-input()': {
          bg: '#CCFFCC',
          border: '#99FF99',
          text: '#009900',
        },
        'misc': {
          bg: '#CCCCFF',
          border: '#9999FF',
          text: '#0000CC',
        },
        'openai': {
          bg: '#FFFFCC',
          border: '#FFFF99',
          text: '#CCCC00',
        },
        'spring-boot': {
          bg: '#FFCCFF',
          border: '#FF99FF',
          text: '#CC00CC',
        },
      },
      fontFamily: {
        sans: ['Noyh Geometric', 'open-sans', 'sans-serif']
      },
      lineClamp: {
        // Truncate text after 3 lines
        '2': '2',
      },

    },
  },
  plugins: [],
}
