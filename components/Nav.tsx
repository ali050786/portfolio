"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isCaseStudy = pathname.startsWith("/case-study");

  useEffect(() => {
    const t = (localStorage.getItem("theme") || "dark") as "dark" | "light";
    setTheme(t);
  }, []);

  // Close mobile menu on outside tap
  useEffect(() => {
    function handleOutside(e: MouseEvent | TouchEvent) {
      if (open && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.className = next;
  };

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-40 backdrop-blur-sm"
      style={{
        background: "color-mix(in srgb, var(--bg-base) 92%, transparent)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[960px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Sikandar Ali Abdul
        </Link>

        <div className="flex items-center gap-6">
          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-7">
            {links.map((l) => {
              const isActive = isCaseStudy && l.label === "Work";
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs font-mono uppercase tracking-widest transition-colors"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = isActive ? "var(--accent)" : "var(--text-secondary)")}
                >
                  {l.label}
                  {isActive && (
                    <span
                      className="block h-px mt-0.5 rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-2.5 h-7 rounded-full transition-colors text-[10px] font-mono uppercase tracking-widest"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <>☀ Light</> : <>☾ Dark</>}
          </button>

          {/* Mobile toggle */}
          <button
            className="sm:hidden flex flex-col gap-1 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{ color: "var(--text-secondary)" }}
          >
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
            <span className="block w-5 h-px" style={{ background: "var(--text-secondary)" }} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="sm:hidden px-6 py-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--border)", background: "var(--bg-surface)" }}
        >
          {links.map((l) => {
            const isActive = isCaseStudy && l.label === "Work";
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: isActive ? "var(--accent)" : "var(--text-secondary)" }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
