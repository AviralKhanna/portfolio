import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { Container, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/project-card";
import { Typewriter } from "@/components/typewriter";
import { CompanyLogo, TechMark, Glyph } from "@/components/brand";
import { CodingSection } from "@/components/coding";
import { techStack } from "@/data/skills";
import { platformIcons } from "@/data/icons";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  DownloadIcon,
  ArrowRight,
  ArrowUpRight,
} from "@/components/icons";

const focus = [
  "agentic AI systems",
  "full-stack products",
  "ML research",
  "developer tools",
];

const strip = ["python", "typescript", "react", "next", "node", "pytorch", "docker", "gemini"];

const facts = [
  "Final-year @ UPES",
  "8.9 CGPA",
  "Founder of CCS",
  "1500+ users reached",
];

// Notable names, highlighted big.
const bigNames = [
  { name: "Razorpay", href: "/experience/razorpay", brand: "#3395FF" },
  { name: "IBM", href: "/experience/ibm", brand: "#0F62FE" },
  { name: "IIIT Delhi", href: "/experience/research-iiitd-ulster", brand: "#e11d48" },
  { name: "Ulster University", href: "/experience/research-iiitd-ulster", brand: "#e11d48" },
  { name: "VertxAI", href: "/experience/vertxai", brand: "#8b5cf6" },
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const razorpay = experience.find((e) => e.slug === "razorpay")!;
  const dases = projects.find((p) => p.slug === "dases")!;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="glow" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              available for full-time · 2026
            </div>

            <h1 className="reveal font-display text-6xl leading-[1.02] tracking-tight sm:text-8xl">
              {site.name}
            </h1>

            <p className="reveal-2 mt-5 text-xl text-muted sm:text-2xl">
              AI/ML Engineer building{" "}
              <span className="font-medium text-foreground">
                <Typewriter phrases={focus} />
              </span>
            </p>

            <p className="reveal-2 mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {site.intro}
            </p>

            {/* quick personal facts */}
            <div className="reveal-3 mt-6 flex flex-wrap gap-2">
              {facts.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="reveal-3 mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                View my work
                <ArrowRight
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <DownloadIcon width={16} height={16} /> Résumé
              </a>
              <div className="flex items-center gap-1 sm:ml-2">
                <IconLink href={site.socials.github} label="GitHub">
                  <GitHubIcon width={19} height={19} />
                </IconLink>
                <IconLink href={site.socials.linkedin} label="LinkedIn">
                  <LinkedInIcon width={19} height={19} />
                </IconLink>
                <IconLink href={site.socials.leetcode} label="LeetCode">
                  <Glyph icon={platformIcons.leetcode} size={19} />
                </IconLink>
                <IconLink href={site.socials.email} label="Email">
                  <MailIcon width={19} height={19} />
                </IconLink>
              </div>
            </div>

            <div className="reveal-3 mt-12 flex items-center gap-5">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted">
                <span className="text-accent">~/</span>stack
              </span>
              <div className="flex flex-wrap items-center gap-4">
                {strip.map((t) => (
                  <TechMark key={t} tech={t} size={22} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Big names */}
      <section className="border-b border-border bg-surface/40">
        <Container className="py-10">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Experience &amp; research across
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {bigNames.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="brand-name font-display text-2xl tracking-tight text-foreground/70 transition-colors hover:text-foreground sm:text-3xl"
                style={{ ["--bn" as string]: c.brand }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Spotlight: best of each */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <SectionHeading eyebrow="Highlights" title="Where to start" />
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Latest experience */}
            <Link
              href={`/experience/${razorpay.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              style={{
                borderColor: `color-mix(in srgb, ${razorpay.brand} 32%, transparent)`,
              }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-70"
                style={{
                  background: `linear-gradient(to bottom, color-mix(in srgb, ${razorpay.brand} 12%, transparent), transparent)`,
                }}
              />
              <div className="relative flex items-center gap-4">
                <CompanyLogo
                  logo={razorpay.logo}
                  mark={razorpay.mark}
                  brand={razorpay.brand}
                  size="lg"
                />
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: razorpay.brand }}
                  >
                    Latest experience
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    {razorpay.company} · {razorpay.location}
                  </p>
                </div>
              </div>
              <h3 className="relative mt-5 font-display text-2xl tracking-tight">
                {razorpay.role}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
                {razorpay.summary}
              </p>
              <span
                className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-0.5"
                style={{ color: razorpay.brand }}
              >
                View this role <ArrowUpRight width={15} height={15} />
              </span>
            </Link>

            {/* Flagship project */}
            <Link
              href={`/projects/${dases.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-accent-40 bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-70"
                style={{
                  background:
                    "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 12%, transparent), transparent)",
                }}
              />
              <div className="relative flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Flagship project
                </p>
                <span className="text-xs text-muted">{dases.category}</span>
              </div>
              <h3 className="relative mt-5 font-display text-2xl tracking-tight">
                {dases.title}
              </h3>
              {dases.subtitle && (
                <p className="relative mt-0.5 text-sm font-medium text-muted">
                  {dases.subtitle}
                </p>
              )}
              <p className="relative mt-2 text-sm leading-relaxed text-muted">
                {dases.blurb}
              </p>
              {dases.metrics && (
                <div className="relative mt-5 flex flex-1 flex-wrap items-end gap-x-8 gap-y-3">
                  {dases.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-semibold text-accent">
                        {m.value}
                      </div>
                      <div className="text-xs text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              )}
              <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition-transform group-hover:translate-x-0.5">
                View this project <ArrowUpRight width={15} height={15} />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Coding */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Coding"
            title="Problem-solving"
            action={{ href: site.socials.leetcode, label: "LeetCode profile" }}
          />
          <CodingSection />
        </Container>
      </section>

      {/* Featured projects */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            action={{ href: "/projects", label: "All projects" }}
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* Experience preview */}
      <section className="border-b border-border">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            eyebrow="Career"
            title="Where I've worked"
            action={{ href: "/experience", label: "Full timeline" }}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {experience.slice(0, 4).map((e) => (
              <Link
                key={e.slug}
                href={`/experience/${e.slug}`}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent-40"
              >
                <CompanyLogo logo={e.logo} mark={e.mark} brand={e.brand} />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium tracking-tight">{e.role}</p>
                  <p className="text-sm text-muted">{e.company}</p>
                </div>
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="shrink-0 text-muted transition-colors group-hover:text-accent"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <Container className="py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 text-center sm:p-16">
          <div className="glow opacity-70" />
          <div className="relative">
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              I&apos;m open to full-time roles and interesting collaborations. The
              fastest way to reach me is email.
            </p>
            <a
              href={site.socials.email}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              <MailIcon width={16} height={16} /> Get in touch
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
    >
      {children}
    </Link>
  );
}
