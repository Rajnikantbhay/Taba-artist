/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'italiana': ['Italiana', 'sans-serif'],
        'fair': ['Playfair Display', 'sans-serif'],
        'nosifer': ['Nosifer', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'redhat': ['Red Hat Display', 'sans-serif']
      },
      letterSpacing: {
        wide:'.1em',
        wider:'.4em',
        widest: '.3em'
      },
      lineHeight: {
        '5': '11rem'
      },
      fontSize: {
        '10xl': ['11rem']
      }
    },
  },
  plugins: [],
}

