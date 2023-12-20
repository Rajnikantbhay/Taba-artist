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
        'nosifer': ['Nosifer', 'sans-serif']
      },
      letterSpacing: {
        wider:'.4em',
        widest: '.3em'
      }
    },
  },
  plugins: [],
}

