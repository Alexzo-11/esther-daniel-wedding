/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: '#0B3D91',   // Royal Blue
          light: '#1E4FBD',     // Lighter Royal Blue
          dark: '#082A66',      // Deeper Royal Blue
          deep: '#051B42',      // Very deep royal blue
        },
        gold: {
          DEFAULT: '#D4AF37',   // Gold
          light: '#E8C95A',     // Light Gold
          dark: '#B8962A',      // Dark Gold
          pale: '#F4E5B1',      // Pale Gold
        },
        cream: '#FDFBF5',        // Off-white / Cream
        'warm-white': '#F8F6F0',
        'soft-grey': '#F0F0F0',
        black: '#0A0A0A',
        'deep-black': '#050505',
        muted: '#5A5A5A',
        dark: '#0A0A0A',
      },
      fontFamily: {
        script: ['Alex Brush', 'cursive'],
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};