/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C158',
          dark: '#B8941F',
        },
        charcoal: '#2C2C2C',
        sand: '#C4A484',
        taupe: '#8B7D6B',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        heading: ['Zalando Sans Expanded', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

