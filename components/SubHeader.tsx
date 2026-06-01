"use client";

export default function SubHeader() {
  function openChat() {
    window.dispatchEvent(new Event("open-ai-chat"));
  }

  return (
    <div className="w-full pt-20 pb-2">
      <div
        className="max-w-[920px] mx-auto px-6 h-10 flex items-center justify-between gap-4 border-b transition-colors duration-200"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Canvas mode */}
        <a
          href="https://canvasportfolio.blinkwiser.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group transition-colors duration-200"
        >
          <span className="text-[10px] animate-pulse" style={{ color: "var(--accent)" }}>✦</span>
          <span
            className="text-[10px] font-mono uppercase tracking-widest transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Canvas Mode
          </span>
          <span className="text-[9px] transition-transform duration-200 group-hover:translate-x-0.5" style={{ color: "var(--text-muted)" }}>↗</span>
        </a>

        {/* Divider */}
        <div className="h-3 w-px" style={{ background: "var(--border)" }} />

        {/* AI Chat trigger */}
        <button
          onClick={openChat}
          className="flex items-center gap-2 transition-colors duration-200 group cursor-pointer"
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--text-muted)" }}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span
            className="text-[10px] font-mono uppercase tracking-widest transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Ask AI about my work
          </span>
        </button>
      </div>
    </div>
  );
}
