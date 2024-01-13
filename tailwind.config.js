/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bunker: {
          50: "#e4e4e7",
          100: "#dcdce0",
          200: "#c6c6cd",
          300: "#a5a6b1",
          400: "#7f8190",
          500: "#616370",
          600: "#4c4d57",
          700: "#3b3c44",
          800: "#2f2f37",
          900: "#28282e",
          950: "#18181b",
        },
      },
      gridTemplateColumns: {
        18: "repeat(18, minmax(0, 1fr))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--gradient-color-stops))",
      },
      gradientColorStopPositions: {
        33: "33%",
      },
    },
  },
  plugins: [],
};
