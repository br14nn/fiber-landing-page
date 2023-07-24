/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vista-white": "rgba(251,248,243,1.0)",
        "violet-blue": "rgba(77,19,209,1.0)",
        liver: "rgba(79,79,79,1.0)",
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
  plugins: [],
};
