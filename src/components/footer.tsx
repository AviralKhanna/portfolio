import Link from "next/link";
import { site } from "@/data/site";
import { Glyph } from "./brand";
import { platformIcons } from "@/data/icons";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-5 py-12 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted">
            {site.role} · {site.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FooterLink href={site.socials.github} label="GitHub">
            <GitHubIcon width={18} height={18} />
          </FooterLink>
          <FooterLink href={site.socials.linkedin} label="LinkedIn">
            <LinkedInIcon width={18} height={18} />
          </FooterLink>
          <FooterLink href={site.socials.leetcode} label="LeetCode">
            <Glyph icon={platformIcons.leetcode} size={18} />
          </FooterLink>
          <FooterLink href={site.socials.medium} label="Medium">
            <Glyph icon={platformIcons.medium} size={18} />
          </FooterLink>
          <FooterLink href={site.socials.email} label="Email">
            <MailIcon width={18} height={18} />
          </FooterLink>
        </div>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-5xl px-5 py-5 text-center text-xs text-muted sm:text-left">
          © {new Date().getFullYear()} {site.name} · Built with Next.js &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}

function FooterLink({
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-accent-40 hover:text-accent"
    >
      {children}
    </Link>
  );
}
