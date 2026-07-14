import Link from "next/link";
import { leetcode, github, dsaTopics } from "@/data/coding";
import { platformIcons } from "@/data/icons";
import { Glyph } from "./brand";
import { ArrowUpRight } from "./icons";

export function CodingSection() {
  const solvedPct = Math.round((leetcode.total.solved / leetcode.total.count) * 100);

  return (
    <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
      {/* LeetCode card */}
      <Link
        href={leetcode.url}
        target="_blank"
        rel="noreferrer"
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ backgroundColor: "color-mix(in srgb, #FFA116 14%, transparent)" }}
            >
              <Glyph icon={platformIcons.leetcode} size={22} color="#FFA116" />
            </span>
            <div>
              <p className="font-semibold tracking-tight">LeetCode</p>
              <p className="text-sm text-muted">@{leetcode.username}</p>
            </div>
          </div>
          <ArrowUpRight
            width={18}
            height={18}
            className="text-muted transition-colors group-hover:text-foreground"
          />
        </div>

        {/* total + ranking */}
        <div className="mt-6 flex items-end gap-8">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl tracking-tight">
                {leetcode.total.solved}
              </span>
              <span className="text-sm text-muted">
                / {leetcode.total.count} solved
              </span>
            </div>
            <p className="mt-1 text-sm text-muted">{solvedPct}% of all problems</p>
          </div>
          <div className="ml-auto text-right">
            <div className="font-display text-2xl tracking-tight text-accent">
              #{leetcode.ranking.toLocaleString()}
            </div>
            <p className="text-xs text-muted">global rank</p>
          </div>
        </div>

        {/* difficulty bars */}
        <div className="mt-6 space-y-3">
          {leetcode.breakdown.map((d) => {
            const pct = Math.round((d.solved / d.count) * 100);
            return (
              <div key={d.label}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-medium" style={{ color: d.color }}>
                    {d.label}
                  </span>
                  <span className="text-muted">
                    {d.solved} / {d.count}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: d.color }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Link>

      {/* side column: github + topics */}
      <div className="flex flex-col gap-5">
        <Link
          href={github.url}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent-40"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2">
            <Glyph icon={platformIcons.github} size={22} />
          </span>
          <div className="flex-1">
            <p className="font-semibold tracking-tight">GitHub</p>
            <p className="text-sm text-muted">
              {github.repos}+ public repositories
            </p>
          </div>
          <ArrowUpRight
            width={18}
            height={18}
            className="text-muted transition-colors group-hover:text-accent"
          />
        </Link>

        <div className="flex-1 rounded-2xl border border-border bg-surface p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Strong topics
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {dsaTopics.map((t) => (
              <span
                key={t}
                className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
