import React from "react";

export default function ChatBubble({ role, content }) {
  const mine = role === "user";
  return (
    <div className={`w-full flex ${mine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed
          ${mine
            ? "bg-white/10 border border-white/15"
            : "bg-gradient-to-br from-white/10 to-white/5 border border-white/15"} 
          shadow-glow`}
        style={{ backdropFilter: "blur(6px)" }}
      >
        <div className="text-[11px] uppercase tracking-wide opacity-60 mb-1">
          {mine ? "You" : "MarcoAI"}
        </div>
        <div className="whitespace-pre-wrap">{content}</div>
      </div>
    </div>
  );
}
