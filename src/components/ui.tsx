import Link from "next/link";
import { ArrowRight } from "./icons";

export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-5 ${className}`}>{children}</div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-accent">
      <span aria-hidden className="opacity-70">
        &gt;
      </span>
      {children}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow?: string;
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          href={action.href}
          className="group hidden shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-accent sm:inline-flex"
        >
          {action.label}
          <ArrowRight
            width={15}
            height={15}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="reveal mb-14 max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl sm:leading-[1.1]">
        {title}
      </h1>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p>
      )}
    </div>
  );
}
