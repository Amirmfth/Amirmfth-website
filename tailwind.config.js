/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "light-gray": "#F5F5F0",
        "dark-gray": "#303030",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        yekan: ["Qs_Iranyekan", "sans-serif"],
      },
    },
  },
  plugins: [],
};
