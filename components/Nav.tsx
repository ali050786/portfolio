"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { z } from "zod";

// Zod schemas for validation
const MessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  text: z.string(),
});

const SessionSchema = z.object({
  id: z.string(),
  title: z.string(),
  messages: z.array(MessageSchema),
});

const SessionsArraySchema = z.array(SessionSchema);

type Message = z.infer<typeof MessageSchema>;
type Session = z.infer<typeof SessionSchema>;

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const starterPrompts = [
  "Tell me about Javelina",
  "Explain Dubai civic project",
  "What is Blinkwiser?",
  "List key statistics"
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  
  // ChatGPT AI panel state
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string>("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mobileView, setMobileView] = useState<"sessions" | "chat">("chat");

  const menuRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isCaseStudy = pathname.startsWith("/case-study");

  // Mount logic
  useEffect(() => {
    setMounted(true);
    const t = (localStorage.getItem("theme") || "dark") as "dark" | "light";
    setTheme(t);
    document.documentElement.className = t;

    // Load and validate AI sessions from LocalStorage using Zod
    const saved = localStorage.getItem("sikandar-portfolio-ai-sessions");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const validated = SessionsArraySchema.parse(parsed);
        if (validated.length > 0) {
          setSessions(validated);
          setActiveSessionId(validated[0].id);
          return;
        }
      } catch (e) {
        console.warn("Invalid or old session data in localStorage. Resetting.", e);
        localStorage.removeItem("sikandar-portfolio-ai-sessions");
      }
    }
    // Initialize default session
    const defaultSession: Session[] = [{ id: "default", title: "New Chat", messages: [] }];
    setSessions(defaultSession);
    setActiveSessionId("default");
  }, []);

  // Listen to open-ai-chat event from other components
  useEffect(() => {
    function handleOpen() {
      setIsChatExpanded(true);
      setMobileView("chat");
    }
    window.addEventListener("open-ai-chat", handleOpen);
    return () => window.removeEventListener("open-ai-chat", handleOpen);
  }, []);

  // Auto scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [sessions, activeSessionId, loading, isChatExpanded]);

  // Close mobile nav on outside tap (only if chat is not expanded)
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (!isChatExpanded && open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open, isChatExpanded]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.className = next;
  };

  const createNewSession = () => {
    const newSession: Session = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [],
    };
    const nextSessions = [newSession, ...sessions];
    setSessions(nextSessions);
    setActiveSessionId(newSession.id);
    localStorage.setItem("sikandar-portfolio-ai-sessions", JSON.stringify(nextSessions));
    setMobileView("chat");
  };

  const deleteSession = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let nextSessions = sessions.filter(s => s.id !== id);
    if (nextSessions.length === 0) {
      nextSessions = [{ id: "default", title: "New Chat", messages: [] }];
    }
    setSessions(nextSessions);
    localStorage.setItem("sikandar-portfolio-ai-sessions", JSON.stringify(nextSessions));
    if (activeSessionId === id) {
      setActiveSessionId(nextSessions[0].id);
    }
  };

  const send = async (textToSend?: string) => {
    const queryText = (textToSend || input).trim();
    if (!queryText || loading) return;

    setInput("");
    
    // Add user query
    let updatedSessions = sessions.map(s => {
      if (s.id === activeSessionId) {
        const nextMsgs = [...s.messages, { role: "user" as const, text: queryText }];
        // Set dynamic session title from first message
        const title = s.title === "New Chat" && s.messages.length === 0
          ? queryText.split(" ").slice(0, 4).join(" ") + (queryText.split(" ").length > 4 ? "..." : "")
          : s.title;
        return { ...s, title, messages: nextMsgs };
      }
      return s;
    });

    setSessions(updatedSessions);
    localStorage.setItem("sikandar-portfolio-ai-sessions", JSON.stringify(updatedSessions));
    setLoading(true);

    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: queryText }),
      });
      const data = await res.json();
      const reply = data.reply || "Sorry, I couldn't get a response.";

      updatedSessions = updatedSessions.map(s => {
        if (s.id === activeSessionId) {
          return { ...s, messages: [...s.messages, { role: "assistant" as const, text: reply }] };
        }
        return s;
      });
      setSessions(updatedSessions);
      localStorage.setItem("sikandar-portfolio-ai-sessions", JSON.stringify(updatedSessions));
    } catch {
      updatedSessions = updatedSessions.map(s => {
        if (s.id === activeSessionId) {
          return { ...s, messages: [...s.messages, { role: "assistant" as const, text: "Something went wrong. Try again." }] };
        }
        return s;
      });
      setSessions(updatedSessions);
      localStorage.setItem("sikandar-portfolio-ai-sessions", JSON.stringify(updatedSessions));
    } finally {
      setLoading(false);
    }
  };

  const activeSession = sessions.find(s => s.id === activeSessionId);

  return (
    <header
      ref={menuRef}
      className="sticky top-4 z-45 w-full px-4 sm:px-6 pointer-events-none"
    >
      <div
        className="max-w-[920px] mx-auto rounded-2xl border backdrop-blur-md shadow-lg transition-all duration-300 pointer-events-auto overflow-hidden flex flex-col"
        style={{
          background: "color-mix(in srgb, var(--bg-surface) 75%, transparent)",
          borderColor: "var(--border)",
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Main Navbar Row */}
        <div className="h-14 px-5 flex items-center justify-between shrink-0">
          <Link
            href="/"
            className="text-base sm:text-lg font-serif font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200"
            onClick={() => setIsChatExpanded(false)}
          >
            Sikandar Ali Abdul
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop nav links */}
            <nav className="hidden sm:flex items-center gap-7" aria-label="Main Navigation">
              {links.map((l) => {
                const isActive = isCaseStudy && l.label === "Work";
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-xs font-mono uppercase tracking-widest transition-colors duration-200 relative py-1"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                    onClick={() => setIsChatExpanded(false)}
                    onMouseEnter={e => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-primary)";
                    }}
                    onMouseLeave={e => {
                      if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                    }}
                  >
                    {l.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                        style={{ background: "var(--accent)" }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="hidden sm:block h-4 w-px bg-[var(--border)]" />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-elevated)] transition-all duration-200 text-[var(--text-secondary)] cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="sm:hidden flex flex-col gap-1.5 p-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
              onClick={() => { setOpen(!open); setIsChatExpanded(false); }}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <span className={`block w-5 h-[2px] bg-current transition-transform duration-300 ${open ? "rotate-45 translate-y-[5.5px]" : ""}`} />
              <span className={`block w-5 h-[2px] bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-[2px] bg-current transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[5.5px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Floating Subheader Bar */}
        <div
          className="border-t px-5 py-2.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[var(--text-secondary)] shrink-0"
          style={{
            borderColor: "var(--border)",
            background: "color-mix(in srgb, var(--bg-surface) 20%, transparent)"
          }}
        >
          {/* Left item */}
          <a
            href="https://canvasportfolio.blinkwiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--accent)] group font-semibold text-[var(--text-secondary)]"
          >
            <span className="text-[var(--accent)] animate-pulse">✦</span>
            <span>Canvas Mode</span>
            <span className="text-[8px] sm:text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">↗</span>
          </a>

          {/* Right toggle (ChatGPT activator) */}
          <button
            onClick={() => setIsChatExpanded(!isChatExpanded)}
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--accent)] group cursor-pointer font-semibold text-[var(--accent)]"
            aria-expanded={isChatExpanded}
            aria-controls="chat-panel"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }} aria-hidden="true" className="group-hover:text-[var(--accent-light)] transition-colors">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span className="group-hover:text-[var(--accent-light)] transition-colors">
              {isChatExpanded ? "Minimize Chat [−]" : "Ask AI about my work"}
            </span>
          </button>
        </div>

        {/* ChatGPT Style Expanded Panel */}
        {mounted && isChatExpanded && (
          <div
            id="chat-panel"
            role="region"
            aria-label="AI Chat Assistant"
            className="h-[380px] border-t flex flex-row overflow-hidden text-xs"
            style={{ borderColor: "var(--border)" }}
          >
            {/* Left Sidebar (Sessions List) */}
            <div
              className={`w-[200px] border-r flex flex-col justify-between shrink-0 bg-[var(--bg-base)]/10 ${
                mobileView === "sessions" ? "w-full" : "hidden md:flex"
              }`}
              style={{ borderColor: "var(--border)" }}
            >
              {/* New Chat Button / Sidebar Title */}
              <div className="p-3 border-b flex items-center justify-between gap-2" style={{ borderColor: "var(--border)" }}>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)]">Sessions</span>
                <button
                  onClick={createNewSession}
                  className="px-2 py-1 text-[10px] font-semibold font-mono rounded border hover:bg-[var(--bg-elevated)] transition-colors cursor-pointer"
                  style={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                >
                  + New
                </button>
              </div>

              {/* Sessions List Scroll Pane */}
              <div className="flex-1 overflow-y-auto p-2 flex flex-col gap-1.5" role="group" aria-label="Chat history">
                {sessions.map(s => {
                  const isActive = s.id === activeSessionId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        setActiveSessionId(s.id);
                        setMobileView("chat");
                      }}
                      className={`group/session w-full text-left py-2 px-2.5 rounded-lg transition-all flex items-center justify-between gap-2 ${
                        isActive
                          ? "bg-[var(--bg-elevated)] text-[var(--accent)] border"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)]/40 hover:text-[var(--text-primary)]"
                      }`}
                      style={{ borderColor: isActive ? "var(--border)" : "transparent" }}
                    >
                      <span className="truncate flex-1 font-medium">{s.title || "New Chat"}</span>
                      {/* Trash Delete Button */}
                      <button
                        onClick={(e) => deleteSession(s.id, e)}
                        className="opacity-0 group-hover/session:opacity-100 hover:text-red-500 transition-opacity text-[11px] p-0.5 cursor-pointer bg-transparent border-0 font-sans"
                        title="Delete session"
                        aria-label={`Delete chat session: ${s.title || "New Chat"}`}
                      >
                        ×
                      </button>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Chat Area */}
            <div
              className={`flex-1 flex flex-col h-full overflow-hidden ${
                mobileView === "chat" ? "flex" : "hidden md:flex"
              }`}
            >
              {/* Mobile Back-to-Sessions Top Nav Bar */}
              <div className="md:hidden flex items-center justify-between p-3 border-b shrink-0 bg-[var(--bg-elevated)]/30" style={{ borderColor: "var(--border)" }}>
                <button
                  onClick={() => setMobileView("sessions")}
                  className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-semibold"
                >
                  ← Sessions ({sessions.length})
                </button>
                <button
                  onClick={createNewSession}
                  className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)]"
                >
                  + New Chat
                </button>
              </div>

              {/* Messages Box */}
              <div
                className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-lg"
                tabIndex={0}
                aria-label="Chat messages list"
              >
                {activeSession && activeSession.messages.length === 0 ? (
                  // Starter / Greeting Layout
                  <div className="my-auto text-center flex flex-col items-center justify-center p-4">
                    <p className="font-serif text-base font-bold text-[var(--text-primary)] mb-1">
                      Ask about Sikandar's work
                    </p>
                    <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mb-6">
                      Powered by Groq · Answers in seconds
                    </p>
                    
                    {/* Quick Starter Pills */}
                    <div className="grid grid-cols-2 gap-2 w-full max-w-[400px]">
                      {starterPrompts.map(p => (
                        <button
                          key={p}
                          onClick={() => send(p)}
                          className="p-3 text-left rounded-xl border bg-[var(--bg-elevated)]/20 hover:bg-[var(--bg-elevated)] hover:border-[var(--accent)] transition-all text-[10px] sm:text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {p} →
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Actual Dialog Thread
                  activeSession?.messages.map((m, index) => {
                    const isUser = m.role === "user";
                    return (
                      <div
                        key={index}
                        className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`text-xs rounded-2xl px-3.5 py-2.5 max-w-[85%] leading-relaxed shadow-sm ${
                            isUser
                              ? "bg-[var(--accent)] text-[#000] rounded-tr-none"
                              : "bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border)] rounded-tl-none"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    );
                  })
                )}

                {/* Processing/Loading spinner */}
                {loading && (
                  <div className="flex justify-start">
                    <div className="text-xs bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border)] rounded-2xl rounded-tl-none px-3.5 py-2.5 shadow-sm">
                      <span className="animate-pulse">Thinking…</span>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Bar Form wrapper for semantic accessibility */}
              <form
                onSubmit={(e) => { e.preventDefault(); send(); }}
                className="p-3 border-t flex gap-2 shrink-0 bg-[var(--bg-elevated)]/10"
                style={{ borderColor: "var(--border)" }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="e.g. Tell me about the Dubai Municipality project..."
                  disabled={loading}
                  aria-label="Message AI assistant about Sikandar's portfolio"
                  className="flex-1 text-xs rounded-xl px-4 py-2.5 focus:outline-none placeholder-[var(--text-muted)]"
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)"
                  }}
                  onFocus={e => (e.currentTarget.style.borderColor = "var(--accent)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--border)")}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 disabled:opacity-40 cursor-pointer"
                  style={{ background: "var(--accent)", color: "#000" }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Nav Links Overlay when standard mobile menu is open */}
        {open && !isChatExpanded && (
          <div
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobile Navigation"
            className="sm:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[var(--border)]"
            style={{ background: "color-mix(in srgb, var(--bg-surface) 95%, transparent)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-4">
              {links.map((l) => {
                const isActive = isCaseStudy && l.label === "Work";
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-xs font-mono uppercase tracking-widest flex items-center justify-between"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                  >
                    <span>{l.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
