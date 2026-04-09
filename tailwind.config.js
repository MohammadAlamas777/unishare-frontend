/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zuj-green': '#004d26', // This is your new custom color
        'zuj-gold': '#c5a059',  // Standard ZUJ gold accent
      },
    },
  },
  plugins: [],
}


