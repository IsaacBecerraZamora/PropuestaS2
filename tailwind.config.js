/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f00505",
        secondary: "#ce4040",
        tertiary: "#ed5b0c",
        success: "#39b169",
        warning: "#ffc409",
        danger: "#e84a5f",
        light: "#f4f5f8",
      },
    },
  },
  plugins: [],
};
