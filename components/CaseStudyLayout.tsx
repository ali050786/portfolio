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
      <article className="max-w-[860px] mx-auto px-6 pt-16 pb-24">
        {/* Back Button */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest mb-10 transition-all duration-200 group text-[var(--text-secondary)] hover:text-[var(--accent)] font-semibold"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
          <span>All work</span>
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] px-3.5 py-1 rounded-full font-medium font-mono"
              style={{
                color: "var(--accent)",
                border: "1px solid var(--border)",
                background: "color-mix(in srgb, var(--accent) 5%, transparent)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-3xl sm:text-5xl font-serif font-bold leading-[1.1] tracking-[-0.02em] mb-5 text-[var(--text-primary)]"
        >
          {title}
        </h1>
        <p className="text-base sm:text-lg leading-[1.75] mb-10 text-[var(--text-secondary)] max-w-[760px]">
          {subtitle}
        </p>

        {/* Meta Info Row */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs mb-12 pb-8 border-b text-[var(--text-secondary)]"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <span
              className="block font-mono uppercase tracking-widest mb-1 text-[9px]"
              style={{ color: "var(--text-muted)" }}
            >
              Role
            </span>
            <span className="font-semibold text-[var(--text-primary)]">{role}</span>
          </div>
          <div>
            <span
              className="block font-mono uppercase tracking-widest mb-1 text-[9px]"
              style={{ color: "var(--text-muted)" }}
            >
              Timeline
            </span>
            <span className="font-semibold text-[var(--text-primary)]">{timeline}</span>
          </div>
        </div>

        {/* Metrics Grid — large enough to anchor a 30-second skim */}
        {metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mb-16 rounded-2xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-2 p-6 sm:p-8 glass-card">
                <p className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-none text-[var(--accent)]">
                  {m.value}
                </p>
                <p className="text-xs leading-snug text-[var(--text-secondary)] max-w-[140px]">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Hero Image */}
        {heroImage && (
          <div className="w-full rounded-2xl overflow-hidden mb-16 shadow-lg border" style={{ borderColor: "var(--border)" }}>
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Article Body */}
        <div className="prose-case">{children}</div>

        {/* Bottom Back Navigation */}
        <div className="mt-20 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest transition-all duration-200 group text-[var(--accent)] font-semibold"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1" aria-hidden="true">←</span>
            <span>Back to all work</span>
          </Link>
        </div>
      </article>
    </>
  );
}
