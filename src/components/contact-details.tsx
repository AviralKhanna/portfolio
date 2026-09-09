import { site } from "@/data/site";

export function ContactDetails() {
  return <address className="mt-6 flex flex-col gap-3 text-sm not-italic">
    <a className="break-all text-accent hover:underline" href={site.socials.email}>{site.email}</a>
    <a className="hover:underline" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
    <a className="break-all text-muted hover:underline" href={site.url}>aviralkhannaportfolio.vercel.app</a>
    <span className="text-muted">{site.location} · Available to join immediately</span>
  </address>;
}
