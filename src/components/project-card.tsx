import Link from "next/link";
import type { Project } from "@/data/projects";
import { GitHubIcon, ArrowUpRight, ArrowRight } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-40 hover:shadow-xl hover:shadow-black/5">
      {/* Stretched link: whole card opens the detail page */}
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0 rounded-2xl"
        aria-label={`${project.title} details`}
      />

      <div className="pointer-events-none relative z-10 flex flex-1 flex-col">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {project.category}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="font-display text-xl leading-tight tracking-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-0.5 text-sm font-medium text-muted">
            {project.subtitle}
          </p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {project.blurb}
        </p>

        {project.metrics && (
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-base font-semibold text-accent">
                  {m.value}
                </div>
                <div className="text-xs text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Prominent links row — clickable above the stretched link */}
        <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Live <ArrowUpRight width={13} height={13} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 rounded-full border border-accent-40 px-3 py-1.5 text-xs font-medium text-accent transition-opacity hover:opacity-80"
            >
              Demo <ArrowUpRight width={13} height={13} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative z-20 inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium transition-colors hover:border-accent-40 hover:text-accent"
            >
              <GitHubIcon width={13} height={13} /> Code
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted transition-colors group-hover:text-accent">
            Details
            <ArrowRight
              width={13}
              height={13}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </article>
  );
}
