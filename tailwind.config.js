/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ash: {
          100: '#dadce0',
          200: '#70757a',
          300: '#4d5156',
        },
        ocean: {
          100: '#1a0dab',
          200: '#1a73e8',
          300: '#417dff',
          400: '#638ed4',
        },
        forest: '#34a853',
        heading: '#202124',
        dawn: '#f2f2f2',
      },
      boxShadow: {
        'site-header-doodle': '0 1px 6px 0 rgb(32 33 36 / 28%)',
        'search-bar-rest': '0 2px 5px 1px rgb(64 60 67 / 16%)',
        'search-bar-rest-hover': '0 2px 8px 1px rgb(64 60 67 / 24%)',
        'search-bar-sticky-hover': '0 1px 6px rgb(32 33 36 / 28%)',
        'carousel-control': '0 0 0 1px rgb(0 0 0 / 4%), 0 4px 8px 0 rgb(0 0 0 / 20%)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        arial: ['Arial'],
      },
      lineHeight: {
        norm: 1.58,
      },
    },
  },
  plugins: [],
}
