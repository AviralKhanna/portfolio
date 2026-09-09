"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export function FlipCard({ title, eyebrow, children, className = "" }: {
  title: string; eyebrow?: string; children: ReactNode; className?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [scrollPaused, setScrollPaused] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelHover = () => {
    if (hoverTimer.current !== null) clearTimeout(hoverTimer.current);
    hoverTimer.current = null;
  };
  const scheduleFlip = (next: boolean) => {
    cancelHover();
    hoverTimer.current = setTimeout(() => {
      setFlipped(next);
      setScrollPaused(false);
    }, 140);
  };
  const flipNow = (next: boolean) => {
    cancelHover();
    setFlipped(next);
    setScrollPaused(false);
  };
  useEffect(() => () => {
    if (hoverTimer.current !== null) clearTimeout(hoverTimer.current);
  }, []);
  useEffect(() => {
    const content = contentRef.current;
    const rotation = rotationRef.current;
    if (!content || !rotation) return;
    const duration = getComputedStyle(rotation).transitionDuration.split(",")[0].trim();
    const flipDuration = parseFloat(duration) * (duration.endsWith("ms") ? 1 : 1000);
    if (!flipped) {
      const reset = setTimeout(() => { content.scrollTop = 0; }, flipDuration);
      return () => clearTimeout(reset);
    }
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    if (scrollPaused || reducedMotion.matches) return;

    // Approximate 150 words/minute, bounded for sparse or unusually dense cards.
    const words = content.textContent?.trim().split(/\s+/).length || 1;
    const pixelsPerSecond = Math.max(6, Math.min(16, content.scrollHeight / words * 2.5));
    let position = content.scrollTop;
    let previousTime: number | null = null;
    let frame = 0;
    const advance = (now: number) => {
      if (document.hidden) { previousTime = null; }
      else {
        if (previousTime !== null) position += pixelsPerSecond * Math.min(now - previousTime, 64) / 1000;
        previousTime = now;
        content.scrollTop = Math.min(position, content.scrollHeight - content.clientHeight);
        if (position >= content.scrollHeight - content.clientHeight) return;
      }
      frame = requestAnimationFrame(advance);
    };
    // Finish rotating, then give the reader three seconds before moving text.
    const start = setTimeout(() => { frame = requestAnimationFrame(advance); }, flipDuration + 3000);
    const stop = () => { clearTimeout(start); cancelAnimationFrame(frame); };
    const motionChanged = () => { if (reducedMotion.matches) stop(); };
    reducedMotion.addEventListener("change", motionChanged);
    return () => { stop(); reducedMotion.removeEventListener("change", motionChanged); };
  }, [flipped, scrollPaused]);
  const id = useId();
  return (
    <article className={`flip-card relative h-64 sm:h-60 ${className}`} data-flipped={flipped}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") scheduleFlip(true); }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") scheduleFlip(false); }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) flipNow(false); }}
      onKeyDown={(event) => { if (event.key === "Escape") { flipNow(false); event.currentTarget.querySelector<HTMLButtonElement>("button[data-flip-toggle]")?.focus(); } }}>
      <div ref={rotationRef} className="flip-card-inner h-full">
        <div className="flip-card-face flip-card-front flex flex-col justify-center rounded-2xl border border-border bg-surface p-5 pb-14" aria-hidden={flipped} inert={flipped}>
          {eyebrow && <p className="mb-4 font-mono text-xs uppercase tracking-wider text-accent">{eyebrow}</p>}
          <h3 className="font-display text-xl tracking-tight">{title}</h3>
          <p className="mt-5 text-xs text-muted">Hover or tap to explore ↻</p>
        </div>
        <div id={id} className="flip-card-face flip-card-back flex flex-col rounded-2xl border border-border bg-surface p-5 pb-14" aria-hidden={!flipped} inert={!flipped}>
          <h3 className="mb-3 shrink-0 font-display text-lg tracking-tight">{title}</h3>
          <div ref={contentRef} className="flip-card-content min-h-0 flex-1 overflow-y-auto overscroll-contain pr-2" role="region" aria-label={`${title} details`} tabIndex={flipped ? 0 : -1}
            onWheel={() => setScrollPaused(true)} onPointerDown={() => setScrollPaused(true)}
            onKeyDown={(event) => { if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "].includes(event.key)) setScrollPaused(true); }}>
            {children}
          </div>
        </div>
      </div>
      {flipped && <button type="button" onClick={() => setScrollPaused(!scrollPaused)} aria-pressed={scrollPaused}
        className="absolute bottom-4 left-5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs focus-visible:outline-2 focus-visible:outline-accent">
        {scrollPaused ? "Resume scroll" : "Pause scroll"}
      </button>}
      <button type="button" data-flip-toggle aria-expanded={flipped} aria-controls={id}
        aria-label={`${flipped ? "Hide" : "Show"} details: ${title}`}
        onClick={() => flipNow(!flipped)}
        className="absolute bottom-4 right-5 rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
        ↻ Flip card
      </button>
    </article>
  );
}
