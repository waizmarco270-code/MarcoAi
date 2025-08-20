import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Optional: add Tailwind CDN fallback if styles not loaded
import "./tailwind.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-h-screen bg-[#0b0f14] flex items-center justify-center p-4">
      <div className="card-3d float bg-[#11151f] p-8 rounded-xl shadow-glow max-w-md w-full text-center">
        <h1 className="rainbow-text text-5xl font-extrabold mb-4">
          MarcoAI 💖
        </h1>
        <p className="text-neon-blue mb-6">
          Your personal neon anime AI assistant is loading...
        </p>
        <div className="w-12 h-12 mx-auto border-4 border-neon-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
    <App />
  </React.StrictMode>
);
