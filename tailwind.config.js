/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
      colors:{
        'secondary': "#0F9FF7",
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/background/2.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}

