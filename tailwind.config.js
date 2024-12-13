/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    colors: {
      "light-gray": "#F5F5F0",
      "dark-gray": "#303030",
    },
    extend: {},
  },
  plugins: [],
};
