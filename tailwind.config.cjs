/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "550px",
      },
      fontFamily: {
        mono: "'Moon Dance'",
        Lobster: "Lobster",
      },
      gridTemplateColumns: {
        card: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
