import type { SiIcon } from "@/data/icons";
import { companyIcons, techIcons } from "@/data/icons";

/** Render a simple-icons glyph from its SVG path. */
export function Glyph({
  icon,
  size = 20,
  color = "currentColor",
}: {
  icon: SiIcon;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

/**
 * Company logo tile. Uses the real logo when available, otherwise a
 * colored monogram. `brand` overrides the tint (falls back to the icon hex).
 */
export function CompanyLogo({
  logo,
  mark,
  brand,
  size = "md",
}: {
  logo?: string;
  mark: string;
  brand: string;
  size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? "h-14 w-14 rounded-2xl"
      : size === "sm"
        ? "h-9 w-9 rounded-lg"
        : "h-12 w-12 rounded-xl";
  const glyphSize = size === "lg" ? 26 : size === "sm" ? 18 : 22;
  const icon = logo ? companyIcons[logo] : undefined;

  return (
    <span
      className={`flex shrink-0 items-center justify-center ${dims}`}
      style={{
        backgroundColor: `color-mix(in srgb, ${brand} 13%, transparent)`,
        boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${brand} 28%, transparent)`,
      }}
    >
      {icon ? (
        <Glyph icon={icon} size={glyphSize} color={brand} />
      ) : (
        <span
          className="text-sm font-bold"
          style={{ color: brand, fontSize: size === "lg" ? "1.05rem" : undefined }}
        >
          {mark}
        </span>
      )}
    </span>
  );
}

/** A tech chip with its real logo. */
export function TechBadge({ tech }: { tech: string }) {
  const icon = techIcons[tech];
  if (!icon) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm">
      <Glyph icon={icon} size={16} color={icon.hex} />
      <span>{icon.title}</span>
    </span>
  );
}

/** A monochrome logo for quiet logo rows (uses currentColor). */
export function TechMark({ tech, size = 22 }: { tech: string; size?: number }) {
  const icon = techIcons[tech];
  if (!icon) return null;
  return (
    <span
      className="text-muted transition-colors hover:text-foreground"
      title={icon.title}
    >
      <Glyph icon={icon} size={size} />
    </span>
  );
}
