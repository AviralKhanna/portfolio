import type { Metadata } from "next";
import { site } from "@/data/site";
import { techStack, focusAreas, education } from "@/data/skills";
import { Container, PageHeader } from "@/components/ui";
import { TechBadge } from "@/components/brand";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-20">
      <PageHeader
        eyebrow="About"
        title="Turning AI from notebook to production."
      />

      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        {/* Bio + achievements */}
        <div>
          <div className="space-y-5">
            {site.about.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
              Highlights
            </h2>
            <ul className="mt-5 space-y-3">
              {site.achievements.map((a) => (
                <li
                  key={a}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4 text-sm leading-relaxed"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-muted">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Education */}
        <aside>
          <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-muted">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div
                key={e.school}
                className="rounded-xl border border-border bg-surface p-5"
              >
                <p className="font-semibold tracking-tight">{e.school}</p>
                <p className="mt-1 text-sm text-muted">{e.degree}</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-medium text-accent">{e.detail}</span>
                  {e.year && <span className="text-muted">{e.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Tech stack — real logos */}
      <div className="mt-16">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
          Tech &amp; tools
        </h2>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((t) => (
            <TechBadge key={t} tech={t} />
          ))}
        </div>
      </div>

      {/* Focus areas */}
      <div className="mt-12">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted">
          Focus areas
        </h2>
        <div className="flex flex-wrap gap-2">
          {focusAreas.map((f) => (
            <span
              key={f}
              className="rounded-full bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
