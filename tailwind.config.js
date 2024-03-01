/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        icomoon: ["icomoon"],
        FoundersGrotesk: ["Founders Grotesk"],
      }
    },
    fontSize: {
      '10xl': [ '9rem' ]
    }
  },
  plugins: [],
}
