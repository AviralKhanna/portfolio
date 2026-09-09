"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function FlipCard({ title, eyebrow, children, className = "" }: {
  title: string; eyebrow?: string; children: ReactNode; className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelHover = () => {
    if (hoverTimer.current !== null) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  const scheduleFlip = (next: boolean) => {
    cancelHover();
    hoverTimer.current = setTimeout(() => setFlipped(next), 140);
  };
  const flipNow = (next: boolean) => {
    cancelHover();
    setFlipped(next);
  };
  useEffect(() => () => {
    if (hoverTimer.current !== null) clearTimeout(hoverTimer.current);
  }, []);
  const id = useId();
  return (
    <article className={`flip-card relative h-64 sm:h-60 ${className}`} data-flipped={flipped}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") scheduleFlip(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") scheduleFlip(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) flipNow(false); }}
      onKeyDown={(event) => { if (event.key === "Escape") { flipNow(false); event.currentTarget.querySelector<HTMLButtonElement>("button[data-flip-toggle]")?.focus(); } }}>
      <div className="flip-card-inner h-full">
        <div className="flip-card-face flip-card-front flex flex-col justify-center rounded-2xl border border-border bg-surface p-5 pb-14" aria-hidden={flipped} inert={flipped}>
          {eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>}
          <h3 className="font-display text-xl tracking-tight">{title}</h3>
          <p className="mt-5 text-xs text-muted">Hover or tap to explore ↻</p>
        </div>
        <div id={id} className="flip-card-face flip-card-back flex flex-col rounded-2xl border border-border bg-surface p-5 pb-14" aria-hidden={!flipped} inert={!flipped}>
          <h3 className="mb-3 shrink-0 font-display text-lg tracking-tight">{title}</h3>
          <div className="flip-card-content min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2" role="region" aria-label={`${title} details`} tabIndex={flipped ? 0 : -1}>
            {children}
          </div>
        </div>
      </div>
      <button type="button" data-flip-toggle aria-expanded={flipped} aria-controls={id}
        aria-label={`${flipped ? "Hide" : "Show"} details: ${title}`}
        onClick={() => flipNow(!flipped)}
        className="absolute bottom-4 right-5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        ↻ Flip card
      </button>
    </article>
  );
}
