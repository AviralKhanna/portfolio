import type { Metadata } from "next";
import Link from "next/link";
import { posts, type Post } from "@/data/posts";
import { site } from "@/data/site";
import { Container, PageHeader } from "@/components/ui";
import { Glyph } from "@/components/brand";
import { platformIcons } from "@/data/icons";
import { EyeIcon, BookIcon, ClockIcon, ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = { title: "Blog" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function compact(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}K`;
  return `${n}`;
}

function StatPill({
  icon,
  value,
  strong = false,
}: {
  icon: React.ReactNode;
  value: string;
  strong?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${
        strong
          ? "bg-accent-soft font-medium text-accent"
          : "border border-border text-muted"
      }`}
    >
      {icon}
      {value}
    </span>
  );
}

function PostStats({ post, strong }: { post: Post; strong?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {post.views ? (
        <StatPill
          strong={strong}
          icon={<EyeIcon width={13} height={13} />}
          value={`${compact(post.views)} views`}
        />
      ) : null}
      {post.reads ? (
        <StatPill
          strong={strong}
          icon={<BookIcon width={13} height={13} />}
          value={`${compact(post.reads)} reads`}
        />
      ) : null}
      <StatPill
        icon={<ClockIcon width={13} height={13} />}
        value={`${post.readingMinutes} min read`}
      />
    </div>
  );
}

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts
    .filter((p) => !p.featured)
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0));
  const totalViews = posts.reduce((s, p) => s + (p.views ?? 0), 0);
  const totalReads = posts.reduce((s, p) => s + (p.reads ?? 0), 0);

  return (
    <Container className="py-16 sm:py-20">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <PageHeader
          eyebrow="Blog"
          title="Writing on AI, systems, and ideas."
          intro="Long-form essays and technical guides, published on Medium."
        />
        <a
          href={site.socials.medium}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2"
        >
          <Glyph icon={platformIcons.medium} size={16} /> Follow on Medium
        </a>
      </div>

      {/* aggregate stats */}
      <div className="mb-12 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border">
        <Stat value={`${posts.length}`} label="Essays published" />
        <Stat value={`${compact(totalViews)}+`} label="Total views" />
        <Stat value={`${compact(totalReads)}+`} label="Total reads" />
      </div>

      {/* Featured post */}
      {featured && (
        <Link
          href={featured.href}
          target="_blank"
          rel="noreferrer"
          className="group relative mb-6 block overflow-hidden rounded-3xl border border-accent-40 bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-10"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-32 opacity-70"
            style={{
              background:
                "linear-gradient(to bottom, color-mix(in srgb, var(--accent) 12%, transparent), transparent)",
            }}
          />
          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                Featured
              </span>
              <span className="text-xs text-muted">
                {formatDate(featured.date)}
              </span>
            </div>
            <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-4xl">
              {featured.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <PostStats post={featured} strong />
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read on Medium <ArrowUpRight width={15} height={15} />
              </span>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent-40 hover:shadow-lg hover:shadow-black/5"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs text-muted">{formatDate(post.date)}</span>
              <ArrowUpRight
                width={15}
                height={15}
                className="text-muted transition-colors group-hover:text-accent"
              />
            </div>
            <h3 className="font-display text-xl leading-snug tracking-tight">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <PostStats post={post} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-background p-6 text-center sm:text-left">
      <div className="font-display text-3xl tracking-tight text-accent">
        {value}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
