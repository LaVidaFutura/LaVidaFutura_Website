/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      margin: {
        100: "28rem",
        105: "30rem",
      },
      fontFamily: {
        Literata: ["Literata", "serif"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
