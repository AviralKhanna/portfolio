import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui";
import { GitHubIcon, ArrowUpRight, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.blurb };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="glow" />
        <Container className="relative py-14 sm:py-20">
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to projects
          </Link>

          <div className="reveal max-w-3xl">
            <div className="mb-4 flex items-center gap-3 text-sm">
              <span className="font-medium uppercase tracking-wider text-accent">
                {project.category}
              </span>
              <span className="text-muted">·</span>
              <span className="text-muted">{project.year}</span>
            </div>

            <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="mt-2 text-xl text-muted">{project.subtitle}</p>
            )}
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {project.blurb}
            </p>

            {(project.github || project.live || project.demo) && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Visit site <ArrowUpRight width={15} height={15} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-accent-40 px-5 py-2.5 text-sm font-medium text-accent transition-opacity hover:opacity-80"
                  >
                    Live demo <ArrowUpRight width={15} height={15} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
                  >
                    <GitHubIcon width={16} height={16} /> Source
                  </a>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      <Container className="py-14">
        {/* metrics */}
        {project.metrics && (
          <div className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-background p-6">
                <div className="text-2xl font-semibold text-accent">
                  {m.value}
                </div>
                <div className="mt-1 text-sm text-muted">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* write-up */}
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Overview
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* next */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
            Next project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-2 text-xl font-semibold tracking-tight transition-colors hover:text-accent"
          >
            {next.title}
            <ArrowRight
              width={20}
              height={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </>
  );
}
