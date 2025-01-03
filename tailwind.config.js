/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeDown: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.7s ease-out forwards",
        slideInRight: "slideInRight 0.7s ease-out forwards",
        fadeDown: "fadeDown 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
