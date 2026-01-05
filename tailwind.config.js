/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7ff",
          100: "#efefff",
          200: "#dedcff",
          300: "#c5c2ff",
          400: "#a5a0ff",
          500: "#7b72ff",
          600: "#5a43ff",
          700: "#4a2fe6",
          800: "#3e29b8",
          900: "#2f1f7d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(17, 24, 39, 0.08)"
      }
    }
  },
  plugins: []
};
