"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function AIButton({ onOpen }: { onOpen?: () => void }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Allow external trigger (from subheader)
  useEffect(() => {
    function handleOpen() { setOpen(true); }
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", text: data.reply || "Sorry, I couldn't get a response." }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: "Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        style={{
          background: open ? "var(--accent)" : "var(--bg-elevated)",
          border: "1px solid var(--border)",
          color: open ? "#000" : "var(--text-secondary)",
        }}
        aria-label="Chat with AI assistant"
        title="Ask me anything about Sikandar's work"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed bottom-20 right-6 z-50 w-80 rounded-2xl shadow-2xl flex flex-col"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)", maxHeight: "420px" }}
        >
          <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Ask about Sikandar's work</p>
              <p className="text-[10px] font-mono mt-0.5" style={{ color: "var(--text-muted)" }}>Powered by Groq · Usually answers in seconds</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-xl leading-none w-6 h-6 flex items-center justify-center" style={{ color: "var(--text-muted)" }} aria-label="Close">×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3" style={{ minHeight: "180px" }}>
            {messages.length === 0 && (
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Want to know about a specific project, process, or domain? Ask below.
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className="text-xs rounded-xl px-3 py-2 max-w-[85%] leading-relaxed"
                  style={{
                    background: m.role === "user" ? "var(--accent)" : "var(--bg-elevated)",
                    color: m.role === "user" ? "#000" : "var(--text-primary)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="text-xs rounded-xl px-3 py-2" style={{ background: "var(--bg-elevated)", color: "var(--text-muted)" }}>
                  <span className="animate-pulse">Thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 py-3 flex gap-2" style={{ borderTop: "1px solid var(--border)" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="e.g. Tell me about the Dubai project"
              className="flex-1 text-xs rounded-lg px-3 py-2 focus:outline-none"
              style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-primary)" }}
              onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="px-3 py-2 text-xs font-medium rounded-lg transition-colors disabled:opacity-40"
              style={{ background: "var(--accent-btn)", color: "#000" }}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
