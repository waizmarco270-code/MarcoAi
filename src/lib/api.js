export async function askMarco(messages, mode = "default") {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages, mode })
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(t);
  }
  const data = await res.json();
  return data.reply || "";
}
