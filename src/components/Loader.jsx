import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center gap-2 opacity-70">
      <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce [animation-delay:0.1s]"></div>
      <div className="w-2 h-2 bg-neon-green rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <span className="text-sm">MarcoAI is thinking…</span>
    </div>
  );
}
