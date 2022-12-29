/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bg: "#23242b",
        "bg-2": "#2c3034",
        "bg-3": "#7f7f7f",
        "light-border-color": "#7f7f7f",
        "dark-border-color": "#15161a",
        "text-1": "#c0bfc1",
        "text-2": "#838383",
        purple: "#6c50a0",
        "light-red": "#f66673",
        "icons-color": "#7f7f7f",
        "button-color-1": "#34383c",
      },
    },
    spacing: {
      "d-pad": "1.5rem",
    },
  },
  plugins: [],
};
