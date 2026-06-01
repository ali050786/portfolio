"use client";

import ReadingProgress from "./ReadingProgress";
import Link from "next/link";
import Image from "next/image";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  tags: string[];
  role: string;
  timeline: string;
  metrics: Metric[];
  heroImage?: { src: string; alt: string; width: number; height: number };
  children: React.ReactNode;
}

export default function CaseStudyLayout({
  title, subtitle, tags, role, timeline, metrics, heroImage, children,
}: CaseStudyLayoutProps) {
  return (
    <>
    <ReadingProgress />
    <article className="max-w-[960px] mx-auto px-6 pt-12 pb-24">

      {/* Back */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-10 transition-colors font-semibold"
        style={{ color: "var(--text-secondary)" }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
      >
        ← All work
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2.5 py-1 rounded-full font-medium"
            style={{
              color: "color-mix(in srgb, var(--accent) 90%, transparent)",
              border: "1px solid color-mix(in srgb, var(--accent) 20%, transparent)",
              background: "color-mix(in srgb, var(--accent) 6%, transparent)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1
        className="text-3xl sm:text-4xl font-bold leading-[1.1] tracking-[-0.03em] mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h1>
      <p className="text-base leading-[1.8] mb-8" style={{ color: "var(--text-secondary)" }}>
        {subtitle}
      </p>

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-6 text-xs mb-10 pb-8"
        style={{ borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}
      >
        <div>
          <span
            className="block font-mono uppercase tracking-widest mb-1"
            style={{ color: "var(--text-muted)", fontSize: "9px" }}
          >
            Role
          </span>
          {role}
        </div>
        <div>
          <span
            className="block font-mono uppercase tracking-widest mb-1"
            style={{ color: "var(--text-muted)", fontSize: "9px" }}
          >
            Timeline
          </span>
          {timeline}
        </div>
      </div>

      {/* Metrics strip */}
      {metrics.length > 0 && (
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 p-6 rounded-xl"
          style={{ background: "var(--bg-surface)", border: "1px solid var(--border)" }}
        >
          {metrics.map((m) => (
            <div key={m.label}>
              <p
                className="text-2xl font-bold tracking-tight mb-1"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </p>
              <p className="text-[11px] leading-snug" style={{ color: "var(--text-muted)" }}>
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Hero image */}
      {heroImage && (
        <div className="w-full rounded-xl overflow-hidden mb-12" style={{ border: "1px solid var(--border)" }}>
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Body */}
      <div className="prose-case">{children}</div>

      {/* Bottom nav */}
      <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-colors"
          style={{ color: "var(--accent)" }}
        >
          ← Back to all work
        </Link>
      </div>
    </article>
    </>
  );
}
