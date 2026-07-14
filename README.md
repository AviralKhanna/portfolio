# Aviral Khanna — Portfolio

Personal portfolio site built with **Next.js 16 (App Router), TypeScript, and Tailwind CSS v4**. Dark-mode-first, fully responsive.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All content is data-driven — you edit plain objects, not JSX:

| What | File |
|------|------|
| Name, role, tagline, socials, bio, achievements | `src/data/site.ts` |
| Work & research history | `src/data/experience.ts` |
| Projects (featured flag controls the home page) | `src/data/projects.ts` |
| Skills & education | `src/data/skills.ts` |
| Blog posts | `src/data/posts.ts` |
| Résumé PDF | `public/resume.pdf` |

## Pages

- `/` — hero, stats, featured projects, experience preview, CTA
- `/about` — bio, skills, education, achievements
- `/projects` — all projects
- `/experience` — timeline + résumé download
- `/blog` — posts (empty-state ready; wire up MDX later)

## Design

- Theme tokens live in `src/app/globals.css` (`--accent` is the single accent color — change it there).
- Dark/light toggle in the nav; defaults to dark, remembers choice in `localStorage`.

## Deploy

Push to GitHub, then import into [Vercel](https://vercel.com/new) → instant `*.vercel.app` URL. Add a custom domain later if desired.
