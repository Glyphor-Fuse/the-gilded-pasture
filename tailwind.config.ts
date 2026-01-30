/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#061a12",
          900: "#0a261a",
          800: "#0f3a28",
          200: "#a7d1c1",
        },
        gold: {
          600: "#a67c00",
          500: "#bf9b30",
          400: "#d4af37",
          200: "#f9e8a5",
          900: "#4a3b10",
        },
        dust: {
          200: "#e5e1d8",
          100: "#f5f2eb",
        }
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        serif: ["'Crimson Text'", "serif"],
      },
      backgroundImage: {
        'velvet-gradient': 'radial-gradient(circle at center, #0a261a 0%, #061a12 100%)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
