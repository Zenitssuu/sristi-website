/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
      fontFamily: {
        'pirata': ["Pirata One", 'system-ui']
      },
      boxShadow: {
        'neon-outer': '0 0 25px #dc143c', // Outer red glow
        'neon-inner': 'inset 0 0 10px #f50000b0', // Inner red glow
      },
    },
  },
  plugins: [],
};