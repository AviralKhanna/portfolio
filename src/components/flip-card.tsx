"use client";

import { useId, useState, type ReactNode } from "react";

export function FlipCard({ title, eyebrow, children, className = "" }: {
  title: string; eyebrow?: string; children: ReactNode; className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const id = useId();
  return (
    <article className={`flip-card relative h-full ${className}`} data-flipped={flipped}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setFlipped(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") setFlipped(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFlipped(false); }}
      onKeyDown={(event) => { if (event.key === "Escape") { setFlipped(false); event.currentTarget.querySelector<HTMLButtonElement>("button[data-flip-toggle]")?.focus(); } }}>
      <div className="flip-card-inner h-full">
        <div className="flip-card-face flip-card-front flex flex-col justify-center rounded-2xl border border-border bg-surface p-7 pb-16" aria-hidden={flipped} inert={flipped}>
          {eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>}
          <h3 className="font-display text-2xl tracking-tight">{title}</h3>
          <p className="mt-5 text-xs text-muted">Hover or tap to explore ↻</p>
        </div>
        <div id={id} className="flip-card-face flip-card-back rounded-2xl border border-border bg-surface p-6 pb-16" aria-hidden={!flipped} inert={!flipped}>
          <h3 className="mb-4 font-display text-xl tracking-tight">{title}</h3>
          {children}
        </div>
      </div>
      <button type="button" data-flip-toggle aria-expanded={flipped} aria-controls={id}
        aria-label={`${flipped ? "Hide" : "Show"} details: ${title}`}
        onClick={() => setFlipped(!flipped)}
        className="absolute bottom-4 right-5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        {flipped ? "↶ Back" : "↻ Details"}
      </button>
    </article>
  );
}
