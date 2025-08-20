import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar.jsx";
import MessageInput from "./components/MessageInput.jsx";
import ChatBubble from "./components/ChatBubble.jsx";
import Loader from "./components/Loader.jsx";
import { askMarco } from "./lib/api.js";

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Yo! Main MarcoAI hoon. Kya soch rahe ho? 😎",
    },
  ]);
  const [pending, setPending] = useState(false);
  const [mode, setMode] = useState("default"); // default | study | code | fun
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, pending]);

  async function onSend(text) {
    if (!text.trim() || pending) return;

    const next = [...messages, { role: "user", content: text }];
    setMessages(next);
    setPending(true);

    try {
      const reply = await askMarco(next, mode);
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Oops! Server error aa gaya. Thodi der baad try karo ya API key check karo.",
        },
      ]);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0f14] flex flex-col relative">
      {/* Navbar */}
      <Navbar mode={mode} setMode={setMode} />

      {/* Chat Area */}
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pt-6 pb-28 space-y-4">
        {messages.map((m, i) => (
          <ChatBubble
            key={i}
            role={m.role}
            content={m.content}
            className="transform transition-transform hover:scale-[1.02] hover:-translate-y-1 shadow-glow rounded-2xl"
          />
        ))}

        {pending && <Loader />}
        <div ref={scrollRef}></div>
      </main>

      {/* Message Input */}
      <div className="fixed bottom-0 inset-x-0 bg-[#11151f] p-4 shadow-glow z-50">
        <MessageInput
          onSend={onSend}
          disabled={pending}
          className="bg-[#0b0f14] border-2 border-neon-blue focus:border-neon-pink text-white rounded-full px-4 py-2 w-full placeholder:text-gray-400 focus:outline-none transition-all hover:shadow-glow"
        />
      </div>

      {/* Mode Buttons (optional) */}
      <div className="fixed top-16 right-4 flex flex-col gap-2 z-50">
        {["default", "study", "code", "fun"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-full font-bold transition-all duration-300 ${
              mode === m
                ? "bg-neon-pink text-black shadow-glow animate-glowPulse"
                : "bg-[#11151f] text-white hover:bg-neon-blue hover:shadow-glow"
            }`}
          >
            {m.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
