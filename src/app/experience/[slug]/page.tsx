import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { Container } from "@/components/ui";
import { CompanyLogo } from "@/components/brand";
import { DownloadIcon, ArrowRight, ArrowUpRight } from "@/components/icons";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);
  if (!item) return { title: "Experience not found" };
  return { title: `${item.role} · ${item.company}`, description: item.summary };
}

export default async function ExperienceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = experience.find((e) => e.slug === slug);
  if (!item) notFound();

  const idx = experience.findIndex((e) => e.slug === item.slug);
  const next = experience[(idx + 1) % experience.length];

  // Re-theme the whole page to the company brand by overriding --accent.
  const brandTheme = {
    "--accent": item.brand,
    "--accent-foreground": "#ffffff",
    "--accent-text": item.brand,
  } as CSSProperties;

  return (
    <div style={brandTheme}>
      {/* Brand hero band */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(48rem 26rem at 20% -20%, color-mix(in srgb, ${item.brand} 22%, transparent), transparent 70%)`,
          }}
        />
        <Container className="relative py-14 sm:py-20">
          <Link
            href="/experience"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            ← Back to experience
          </Link>

          <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-center">
            <CompanyLogo
              logo={item.logo}
              mark={item.mark}
              brand={item.brand}
              size="lg"
            />
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
                <span className="font-medium" style={{ color: item.brand }}>
                  {item.company}
                </span>
                <span className="text-muted">·</span>
                <span className="text-muted">
                  {item.start} &rarr; {item.end}
                </span>
                {item.current && (
                  <span
                    className="rounded-full px-2 py-0.5 text-xs font-medium"
                    style={{
                      color: item.brand,
                      backgroundColor: `color-mix(in srgb, ${item.brand} 15%, transparent)`,
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl tracking-tight sm:text-5xl">
                {item.role}
              </h1>
              {item.location && (
                <p className="mt-2 text-muted">{item.location}</p>
              )}
            </div>
          </div>

          {item.summary && (
            <p className="reveal-2 mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {item.summary}
            </p>
          )}
        </Container>
      </section>

      <Container className="py-14">
        <div className="max-w-3xl">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Highlights
          </h2>
          <ul className="mt-6 space-y-4">
            {item.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-2xl border border-border bg-surface p-5"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                  style={{
                    color: item.brand,
                    backgroundColor: `color-mix(in srgb, ${item.brand} 14%, transparent)`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-muted">{b}</span>
              </li>
            ))}
          </ul>

          {item.tags && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Stack
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 text-sm font-medium"
                    style={{
                      color: item.brand,
                      backgroundColor: `color-mix(in srgb, ${item.brand} 12%, transparent)`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: item.brand }}
              >
                Visit site <ArrowUpRight width={15} height={15} />
              </a>
            )}
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
            >
              <DownloadIcon width={16} height={16} /> Full résumé
            </a>
          </div>
        </div>

        {/* Next role */}
        <div className="mt-14 border-t border-border pt-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted">
            Next
          </p>
          <Link
            href={`/experience/${next.slug}`}
            className="group flex items-center gap-4"
          >
            <CompanyLogo logo={next.logo} mark={next.mark} brand={next.brand} />
            <div className="flex-1">
              <p className="font-semibold tracking-tight transition-colors group-hover:text-accent">
                {next.role}
              </p>
              <p className="text-sm text-muted">{next.company}</p>
            </div>
            <ArrowRight
              width={18}
              height={18}
              className="text-muted transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
}
