/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00ffa3",
          pink: "#ff4dff",
          blue: "#5ad7ff",
          yellow: "#fff700",
          purple: "#ae00ff"
        }
      },
      boxShadow: {
        glow: "0 0 20px rgba(90, 215, 255, 0.7), 0 0 40px rgba(255, 77, 255, 0.5)",
        rainbow: "0 0 5px #ff0000, 0 0 10px #ff7f00, 0 0 15px #ffff00, 0 0 20px #00ff00, 0 0 25px #0000ff, 0 0 30px #4b0082, 0 0 35px #8f00ff"
      },
      keyframes: {
        rainbow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0,255,163,0.7)" },
          "50%": { boxShadow: "0 0 30px rgba(0,255,163,1)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        rainbow: "rainbow 5s ease infinite",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite"
      },
      backgroundImage: {
        "rainbow-gradient": "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8f00ff)"
      },
      backgroundSize: {
        "200%": "200% 200%"
      }
    }
  },
  plugins: []
}
