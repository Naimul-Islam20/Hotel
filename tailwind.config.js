// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       textAlign: {
        'justify': 'justify',
      },
      colors: {
        primary: "#0d6efd",
      },
      animation: {
        slideDown: "slideDown 0.4s ease forwards",
      },
      keyframes: {
        slideDown: {
          "0%": {
            transform: "translateY(-40px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
