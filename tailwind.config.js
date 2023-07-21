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
        "screen>1600": "1600px",
        "screen<1024": { max: "1024px" },
        "screen<600": { max: "600px" },
      },
    },
  },
  plugins: [],
};
