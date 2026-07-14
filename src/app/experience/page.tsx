import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/data/experience";
import { site } from "@/data/site";
import { Container, PageHeader } from "@/components/ui";
import { CompanyLogo } from "@/components/brand";
import { DownloadIcon, ArrowRight, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = { title: "Experience" };

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function toMonthIndex(s: string): number {
  if (s === "Present") {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const [mon, year] = s.split(" ");
  return Number(year) * 12 + (MONTHS[mon] ?? 0);
}

function duration(start: string, end: string): string {
  const total = toMonthIndex(end) - toMonthIndex(start) + 1; // inclusive
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

export default function ExperiencePage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <PageHeader
          eyebrow="Experience"
          title="A timeline of roles and research."
        />
        <a
          href={site.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          <DownloadIcon width={16} height={16} /> Résumé
        </a>
      </div>

      <ol className="relative">
        {experience.map((e) => (
          <li
            key={e.slug}
            className="grid gap-x-6 gap-y-3 pb-10 sm:grid-cols-[128px_1fr] sm:gap-x-8"
          >
            {/* Left rail: dates + duration */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 sm:block sm:pt-0.5 sm:text-right">
              <span className="text-sm font-semibold tracking-tight">
                {e.start}
              </span>
              <span className="text-muted sm:hidden">→</span>
              <span className="text-sm text-muted sm:block">
                <span className="hidden sm:inline">to </span>
                {e.end}
              </span>
              <span
                className="mt-0 inline-block rounded-full px-2 py-0.5 text-[11px] font-medium sm:mt-2"
                style={{
                  color: e.brand,
                  backgroundColor: `color-mix(in srgb, ${e.brand} 14%, transparent)`,
                }}
              >
                {duration(e.start, e.end)}
                {e.current ? " · now" : ""}
              </span>
            </div>

            {/* Right: rail line + node + card */}
            <div
              className="relative pl-7 sm:border-l-[3px]"
              style={{ borderColor: `color-mix(in srgb, ${e.brand} 55%, var(--border))` }}
            >
              {/* node dot on the line */}
              <span
                className="absolute -left-[9px] top-2 hidden h-4 w-4 rounded-full ring-4 ring-background sm:block"
                style={{ backgroundColor: e.brand }}
              />
              <article className="group relative rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent-40 hover:shadow-lg hover:shadow-black/5">
                <Link
                  href={`/experience/${e.slug}`}
                  className="absolute inset-0 z-0 rounded-2xl"
                  aria-label={`${e.role} at ${e.company}`}
                />
                <div className="pointer-events-none relative z-10">
                  <div className="flex items-start gap-4">
                    <CompanyLogo logo={e.logo} mark={e.mark} brand={e.brand} />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-xl tracking-tight">
                        {e.role}
                      </h3>
                      <p
                        className="mt-0.5 text-sm font-medium"
                        style={{ color: e.brand }}
                      >
                        {e.company}
                        {e.location && (
                          <span className="text-muted"> · {e.location}</span>
                        )}
                      </p>
                    </div>
                    <ArrowRight
                      width={16}
                      height={16}
                      className="mt-1 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>

                  {e.summary && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {e.summary}
                    </p>
                  )}

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {e.tags?.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                    {e.link && (
                      <a
                        href={e.link}
                        target="_blank"
                        rel="noreferrer"
                        className="pointer-events-auto relative z-20 ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-white"
                        style={{ backgroundColor: e.brand }}
                      >
                        Visit site <ArrowUpRight width={12} height={12} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
