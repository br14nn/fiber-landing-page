/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vista-white": "#fbf8f3",
        "violet-blue": "#4d13d1",
        liver: "#4f4f4f",
        "link-water": "#e6defd",
        "light-grey": "#dadada",
        "purple-mimosa": "#A587FF",
      },
      screens: {
        desktop: "1920px",
        "laptop-max": "1600px",
        tablet: { max: "1024px" },
        "mobile-max": { max: "600px" },
        mobile: { max: "360px" },
      },
      fontSize: {
        "3xl": "1.75rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".selector": {
          "user-drag": "none",
          "-webkit-user-drag": "none",
          "user-select": "none",
          "-moz-user-select": "none",
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
        },
      });
    }),
  ],
};
