/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vista-white": "rgba(251,248,243,1.0)",
        "violet-blue": "rgba(77,19,209,1.0)",
        liver: "rgba(79,79,79,1.0)",
        "link-water": "rgba(230,222,253,1.0)",
        "light-grey": "rgba(218,218,218,1.0)",
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
