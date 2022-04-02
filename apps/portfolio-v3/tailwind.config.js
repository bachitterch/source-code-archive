const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'sm': '.875rem',
      'tiny': '.984rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.266rem',
      '2xl': '1.406rem',
      '3xl': '1.688rem',
      '4xl': '2.25rem '
    },
    colors: {
      primary: '#003049',
      secondary: '#B1EFE3',
      tertiary: '#F9F3E3',
      accent: '#FFAB91',
      white: '#FFFFFF'
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['source-code-pro', ...fontFamily.mono]
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}