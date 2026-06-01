"use client";

export default function Footer() {
  return (
    <footer className="mt-32 py-12 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-[920px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[10px] font-mono tracking-widest uppercase text-[var(--text-muted)]">
          © 2026 Sikandar Ali Abdul
        </p>
        <div className="flex gap-6 text-[10px] font-mono uppercase tracking-widest">
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
              className="transition-colors duration-200 text-[var(--text-secondary)] hover:text-[var(--accent)] font-semibold"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
