/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Nofex", "Turnpike", "Draper", "sans-serif"],
        body: ["Brown-Font", "sans-serif"],
      },
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
      },
    },
    colors: {
      gray: colors.gray,
      indigo: colors.indigo,
      white: colors.white,
      black: colors.black,
      brown: colors.brown,
      neutral: colors.neutral,
      slate: colors.slate,
      red: colors.red
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
