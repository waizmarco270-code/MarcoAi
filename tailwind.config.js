/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00ffa3",
          pink: "#ff4dff",
          blue: "#5ad7ff"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(90, 215, 255, 0.35)"
      }
    }
  },
  plugins: []
}
