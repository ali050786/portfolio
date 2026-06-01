"use client";

import { useState } from "react";

interface FigmaEmbedProps {
  /** Full Figma share URL — e.g. https://www.figma.com/design/ABC/File?node-id=1-2 */
  url: string;
  title: string;
  caption?: string;
  /** Height of the iframe container. Defaults to 480px */
  height?: number;
  /** Compact mode for card thumbnails */
  thumbnail?: boolean;
}

function toEmbedUrl(url: string) {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
}

export default function FigmaEmbed({ url, title, caption, height = 480, thumbnail = false }: FigmaEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const embedUrl = toEmbedUrl(url);
  const h = thumbnail ? 220 : height;

  if (errored) {
    return (
      <div
        className="w-full rounded-xl flex flex-col items-center justify-center gap-3 mb-2"
        style={{
          height: h,
          background: "var(--bg-elevated)",
          border: "1px solid var(--border)",
        }}
      >
        <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
          Could not load Figma embed
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono underline underline-offset-4"
          style={{ color: "var(--accent)" }}
        >
          Open in Figma ↗
        </a>
      </div>
    );
  }

  return (
    <div className={thumbnail ? "mb-0" : "mb-2"}>
      <div
        className="w-full rounded-xl overflow-hidden relative"
        style={{
          height: h,
          border: "1px solid var(--border)",
          background: "var(--bg-elevated)",
        }}
      >
        {/* Loading skeleton */}
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
            <div
              className="w-6 h-6 rounded-full border-2 animate-spin"
              style={{ borderColor: "var(--border)", borderTopColor: "var(--accent)" }}
            />
            <p className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Loading Figma
            </p>
          </div>
        )}

        <iframe
          src={embedUrl}
          title={title}
          allowFullScreen
          className="w-full h-full border-0 transition-opacity duration-300"
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      </div>

      {/* Footer row */}
      {!thumbnail && (
        <div className="flex items-center justify-between mt-2 mb-8">
          {caption && (
            <p className="text-xs text-center flex-1" style={{ color: "var(--text-muted)" }}>
              {caption}
            </p>
          )}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono uppercase tracking-widest shrink-0 ml-4"
            style={{ color: "var(--accent)" }}
          >
            Open in Figma ↗
          </a>
        </div>
      )}
    </div>
  );
}
