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
        'hero-pattern': "url('/src/assets/background/1.png')",
        'service-pattern': "url('/src/assets/background/2.png')",
        'benefits-pattern': "url('/src/assets/background/3.png')",
        'about-pattern': "url('/src/assets/background/4.png')",
        'blog-pattern': "url('/src/assets/background/5.png')",
        'faq-pattern': "url('/src/assets/background/6.png')",
        'testimonial-pattern': "url('/src/assets/background/7.png')"
      }

    },
  },
  plugins: [],
}

