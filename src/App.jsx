import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MessageInput from "./components/MessageInput.jsx";
import ChatBubble from "./components/ChatBubble.jsx";
import Loader from "./components/Loader.jsx";
import { askMarco } from "./lib/api.js";

export default function App() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Yo! Main MarcoAI hoon. Kya soch rahe ho? 😎" },
  ]);
  const [pending, setPending] = useState(false);
  const [mode, setMode] = useState("default"); // default | study | code | fun

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
    <div className="min-h-screen flex flex-col">
      <Navbar mode={mode} setMode={setMode} />
      <main className="flex-1 w-full max-w-3xl mx-auto px-4 pt-6 pb-28">
        <div className="space-y-4">
          {messages.map((m, i) => (
            <ChatBubble key={i} role={m.role} content={m.content} />
          ))}
          {pending && <Loader />}
        </div>
      </main>

      <div className="fixed bottom-0 inset-x-0">
        <MessageInput onSend={onSend} disabled={pending} />
      </div>
    </div>
  );
}
