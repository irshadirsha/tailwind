/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:'rgba(212, 32, 19,1)',
        }
      },
      fontFamily:{
        body:['nunito']
      }
    },
  },
  plugins: [],
}

