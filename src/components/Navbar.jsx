import React from "react";
import { motion } from "framer-motion";

export default function Navbar({ mode, setMode }) {
  return (
    <nav className="sticky top-0 z-30 w-full backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-blue via-neon-pink to-neon-green shadow-glow"
          />
          <span className="font-semibold tracking-wide">MarcoAI</span>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-neon-blue"
          >
            <option value="default">Default</option>
            <option value="study">Study</option>
            <option value="code">Code</option>
            <option value="fun">Fun</option>
          </select>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-xs opacity-70 hover:opacity-100"
          >
            Made By WaizMarco 🌹
          </a>
        </div>
      </div>
    </nav>
  );
}
