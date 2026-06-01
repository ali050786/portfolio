"use client";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }} className="mt-24 py-10">
      <div className="max-w-[960px] mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-muted)" }}>
          © 2026 Sikandar Ali Abdul
        </p>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
          {[
            { label: "Resume", href: "/Sikandar_Ali_Resume.pdf", download: "Sikandar_Ali_Resume.pdf", external: false },
            { label: "Email", href: "mailto:ali050786@gmail.com", external: false },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/sikandar-ux", external: true },
          ].map(({ label, href, download, external }) => (
            <a
              key={label}
              href={href}
              {...(download ? { download } : {})}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
