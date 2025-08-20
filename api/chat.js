// api/chat.js
export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages, mode } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages[] required' });
    }

    // Simple system prompt by mode
    const systemByMode = {
      default:
        "You are MarcoAI, a helpful, concise assistant with a modern, friendly tone.",
      study:
        "You are MarcoAI Study mode. Explain clearly, step-by-step, avoid fluff, give examples.",
      code:
        "You are MarcoAI Code mode. Provide clean, minimal solutions with best practices and brief explanations.",
      fun:
        "You are MarcoAI Fun mode. Be witty and playful, but respectful and safe.",
    };

    const system = systemByMode[mode] || systemByMode.default;

    // Use OpenAI HTTP API via fetch to avoid extra deps
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server missing OPENAI_API_KEY' });
    }

    const payload = {
      model: "gpt-4o-mini", // fast + cheap; upgrade later if you want
      messages: [
        { role: "system", content: system },
        ...messages
      ],
      temperature: 0.6
    };

    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!r.ok) {
      const txt = await r.text();
      return res.status(r.status).json({ error: txt });
    }

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content ?? "";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
