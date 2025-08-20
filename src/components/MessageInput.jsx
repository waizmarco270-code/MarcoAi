import React, { useState } from "react";

export default function MessageInput({ onSend, disabled }) {
  const [text, setText] = useState("");

  function submit(e) {
    e.preventDefault();
    onSend(text);
    setText("");
  }

  return (
    <form
      onSubmit={submit}
      className="max-w-3xl mx-auto px-4 pb-4 pt-2 bg-gradient-to-t from-black/60 to-transparent"
    >
      <div className="flex gap-2">
        <input
          className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3 outline-none focus:border-neon-blue"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />
        <button
          disabled={disabled}
          className="px-5 py-3 rounded-xl bg-neon-blue/20 border border-neon-blue/40 hover:bg-neon-blue/30 transition-colors"
        >
          Send
        </button>
      </div>
      <div className="text-xs opacity-60 mt-1">
        Tip: choose a mode from the top-right (Default / Study / Code / Fun)
      </div>
    </form>
  );
}
