"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/**
 * Builds an in-page table of contents from the <h2> headings inside the
 * rendered `.prose-case` article. Headings get slug ids assigned on mount so
 * the links (and direct deep-links) jump correctly. Sticky on large screens,
 * collapsible on mobile.
 */
export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLHeadingElement>(".prose-case h2")
    );

    const collected: Heading[] = nodes.map((node) => {
      if (!node.id) node.id = slugify(node.textContent || "");
      return { id: node.id, text: node.textContent || "" };
    });
    setHeadings(collected);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="mb-12">
      <div
        className="rounded-2xl border glass-card overflow-hidden"
        style={{ borderColor: "var(--border)" }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 sm:cursor-default text-left"
          aria-expanded={open}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--text-muted)]">
            On this page
          </span>
          <span
            className={`sm:hidden text-[var(--text-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>

        <ol
          className={`px-5 pb-4 flex-col gap-1 ${open ? "flex" : "hidden"} sm:flex`}
        >
          {headings.map((h, i) => {
            const isActive = h.id === activeId;
            return (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-1.5 text-sm transition-colors duration-200"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  <span className="text-[10px] font-mono shrink-0" style={{ color: "var(--text-muted)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={isActive ? "font-semibold" : ""}>{h.text}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
