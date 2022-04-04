const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
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
      transparent: 'transparent',
      white: {
        '1000': '#ffffff',
        '900': '#f3f3f5',
        '800': '#ececec',
        '700': '#e5e5e5',
        '600': '#c0c0c0',
        '500': '#a5a5a5',
        '400': '#858585',
        '400': '#6f6f6f',
        '200': '#4a4a4a',
        '100': '#333333',
        '50': '#252525',
        '10': '#1A1919',
        '0': '#000000'
      },
      spotify_green: '#1ED760',
    },
    fontFamily: {
      sans: ['Inter', ...fontFamily.sans],
      mono: ['source-code-pro', ...fontFamily.mono]
    },
    extend: {
      screens: {
        'xs': '410px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}