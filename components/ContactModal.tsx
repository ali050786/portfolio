"use client";

import { useEffect, useRef, useState } from "react";

const EMAIL = "ali050786@gmail.com";
const PHONE_DISPLAY = "+91 72760 60100";
const PHONE_HREF = "+917276060100";
const LINKEDIN = "https://www.linkedin.com/in/sikandar-ux";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape, lock body scroll, restore focus to the trigger on close.
  useEffect(() => {
    if (!open) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Move focus into the dialog
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggerRef.current?.focus();
    };
  }, [open]);

  async function copy(value: string, key: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
    } catch {
      /* clipboard unavailable — the mailto/tel link still works */
    }
  }

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold font-mono uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] border hover:bg-[var(--bg-surface)] text-[var(--text-primary)] cursor-pointer"
        style={{ borderColor: "var(--border)" }}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        Get in touch
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 animate-fade-in"
            style={{ background: "color-mix(in srgb, var(--bg-base) 70%, transparent)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
            aria-hidden="true"
          />

          {/* Dialog */}
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] rounded-3xl glass-card border p-7 sm:p-8 shadow-2xl outline-none"
            style={{ borderColor: "var(--border)", background: "var(--bg-surface)" }}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-lg leading-none border transition-colors hover:bg-[var(--bg-elevated)] cursor-pointer text-[var(--text-muted)]"
              style={{ borderColor: "var(--border)" }}
              aria-label="Close"
            >
              ×
            </button>

            <p className="text-[10px] font-mono tracking-[0.3em] uppercase mb-3 text-[var(--text-muted)]">
              Get in touch
            </p>
            <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-serif font-bold tracking-tight mb-2 text-[var(--text-primary)]">
              Let&apos;s talk.
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-[var(--text-secondary)]">
              Open to senior and lead UX roles. I usually respond within 24 hours.
            </p>

            <div className="flex flex-col gap-3">
              <ContactRow
                label="Email"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
                copied={copied === "email"}
                onCopy={() => copy(EMAIL, "email")}
              />
              <ContactRow
                label="Phone"
                value={PHONE_DISPLAY}
                href={`tel:${PHONE_HREF}`}
                copied={copied === "phone"}
                onCopy={() => copy(PHONE_DISPLAY, "phone")}
              />
            </div>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-semibold transition-colors hover:text-[var(--accent-light)]"
              style={{ color: "var(--accent)" }}
            >
              Connect on LinkedIn ↗
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  href: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div
      className="flex items-center justify-between gap-3 rounded-xl border px-4 py-3"
      style={{ borderColor: "var(--border)", background: "var(--bg-elevated)" }}
    >
      <a href={href} className="min-w-0 flex-1 group">
        <span className="block text-[9px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
          {label}
        </span>
        <span className="block text-sm font-mono truncate text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {value}
        </span>
      </a>
      <button
        onClick={onCopy}
        className="shrink-0 px-2.5 py-1.5 rounded-lg text-[10px] font-mono uppercase tracking-widest border transition-colors hover:bg-[var(--bg-surface)] cursor-pointer"
        style={{ borderColor: "var(--border)", color: copied ? "var(--accent)" : "var(--text-secondary)" }}
        aria-label={`Copy ${label.toLowerCase()}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
