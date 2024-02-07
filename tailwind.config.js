const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      frangipani: {
        50: "#fff8ed",
        100: "#ffefd5",
        200: "#ffe3bd",
        300: "#ffc072",
        400: "#fd9a3a",
        500: "#fc7c13",
        600: "#ed6009",
        700: "#c4470a",
        800: "#9c3910",
        900: "#7d3011",
        950: "#441606",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});
