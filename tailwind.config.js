/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        loadingBar: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0, visibility: "hidden" },
        },
      },
      animation: {
        loadingBar: "loadingBar 1.2s infinite",
        "fade-out": "fadeOut 0.5s 1s forwards",
      },
    },
  },
  plugins: [],
};
