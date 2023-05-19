/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamb: "#D87D4A",
        "dark-gray": "#101010",
        "light-gray": "#F1F1F1",
        "super-light-gray": "#FAFAFA",
        white: "#fff",
        "light-lamb": "#fbaf85",
        black: "#000",
      },
    },
  },
  plugins: [],
};
