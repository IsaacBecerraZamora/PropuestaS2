/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#02666a",
        secondary: "#ed6c25",
        tertiary: "#0b7b52",
        success: "#39b169",
        warning: "#ffc409",
        danger: "#e84a5f",
        light: "#f4f5f8",
      },
    },
  },
  plugins: [],
};
