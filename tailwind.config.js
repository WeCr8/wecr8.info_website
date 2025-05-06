import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1b365d',
        accent: '#f05727',
        light: '#f5f5f5',
        muted: '#888888',
        heading: '#1b365d',
        text: '#333333',
        border: '#dddddd',
        'border-hover': '#bbbbbb',
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        section: '4rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    forms,
    typography,
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.container': {
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen md': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen xl': {
            paddingLeft: '3rem',
            paddingRight: '3rem',
          },
          '@screen 2xl': {
            paddingLeft: '4rem',
            paddingRight: '4rem',
          },
        },
      })
    }),
  ],
}
