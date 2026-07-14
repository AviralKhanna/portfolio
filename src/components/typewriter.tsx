"use client";

import { useEffect, useState } from "react";

/** Cycles through phrases with a typing/deleting effect. */
export function Typewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let delay = deleting ? 45 : 85;

    if (!deleting && text === current) {
      delay = 1600; // pause at full word
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      delay = 250;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="cursor-inline" aria-hidden>
        ▋
      </span>
    </span>
  );
}
