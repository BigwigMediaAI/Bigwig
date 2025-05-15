/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include React and TypeScript files
  ],
  theme: {
    extend: {
      colors: {
        bigwigBlue: "#25258E",
      },
    },
    animation: {
      scroll: "scroll 10s linear infinite",
    },
  },
  keyframes: {
    scroll: {
      "0%": { transform: "translateX(0)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  plugins: [],
};
