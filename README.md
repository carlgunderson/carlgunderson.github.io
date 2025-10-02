[![Deploy to GitHub Pages](https://github.com/carlgunderson/carlgunderson.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/carlgunderson/carlgunderson.github.io/actions/workflows/gh-pages.yml)

# Carl Gunderson — Web Development Portfolio

Static portfolio built with Next.js and React, deployed to GitHub Pages at https://carlgunderson.com (CNAME).

## Overview

This site showcases selected projects and roles, with lightweight animations, dark/light theme, and basic analytics. It is exported as a fully static site (no server) and published via the GitHub Pages workflow in this repository.

## Tech stack

- Next.js 15 (static export via `output: 'export'`)
- React 19 (with the experimental React Compiler enabled)
- TypeScript 5
- Radix UI Themes and Icons
- motion (animations)
- PostHog (client‑side analytics)

## Quick start (local)

Prereqs: Node 18.18+ (22.x recommended) and pnpm.

```bash
pnpm install
pnpm dev
```

The dev server will start on http://localhost:3000.

### Environment variables (analytics)

Analytics are optional in local dev. To enable PostHog locally, create `.env.local` with:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx            # your PostHog project public key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com  # or your proxy/region host
```

The app reads these via `src/providers/AnalyticsProvider.tsx` and only initializes PostHog on the client.

Note: `NEXT_PUBLIC_*` values are embedded in the client bundle and visible in the browser. Do not put secrets in these variables.

## Scripts

- `pnpm dev` — Start Next.js dev server
- `pnpm build` — Build static export to `./out`
- `pnpm start` — Serve the production build (Node server; not used for Pages)

Preview the static export locally (no Next.js server; uses a static file server):

```bash
pnpm build
pnpm dlx serve -s out -l 5000
```

## Deployment

Pushes to `master` trigger the GitHub Actions workflow `.github/workflows/gh-pages.yml` which:

1. Installs dependencies with pnpm
2. Builds the site with `next build` (static export)
3. Uploads `./out` and deploys to GitHub Pages

PostHog env vars are provided at build time via repo secrets: `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`.

Custom domain is configured with `CNAME` set to `carlgunderson.com`.

CI builds use Node 22 via `actions/setup-node@v4`.

## Project structure

```
pages/                    # Next.js pages (home and project detail)
  _app.tsx                # Wraps pages with layout/providers
  index.tsx               # Landing page
  project/[slug].tsx      # Project detail pages
src/
  components/             # UI components (App, Header, JobCard)
  contexts/               # Theme context (light/dark)
  data/jobs.ts            # Portfolio data
  hooks/                  # Small UI hooks
  providers/AnalyticsProvider.tsx  # PostHog init/provider
  types/                  # zod schemas and inferred types
```

Path alias: imports from `~/...` resolve to `./src/...` (see `tsconfig.json`).

Example config:

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

## Editing content

Projects and roles live in `src/data/jobs.ts` and are validated with the zod schemas in `src/types`.

Minimal example:

```ts
// src/data/jobs.ts
import { IJob } from '~/types'

const jobs: IJob[] = [
  {
    slug: 'acme',
    displayName: 'Acme Co',
    industries: ['SaaS'],
    platforms: ['Web'],
    link: 'https://acme.example',
    description: 'Short one‑liner for the card.',
    logoUrl: '/images/logos/acme.png',
    bgUrl: '/images/card-acme.png',
    bgColor: '#fff',
    role: 'Senior Engineer',
    roleSummary: 'HTML is allowed via strings (for line breaks, etc).',
    timeline: '2024 — 2025',
    projects: [
      {
        slug: 'platform',
        displayName: 'Acme Platform',
        description: 'Longer blurb for the detail page.',
        technologies: ['React', 'TypeScript'],
        color: 'gray',
      },
    ],
  },
]

export default jobs
```

Required fields are defined in `src/types/index.ts` (`JobSchema` and `ProjectSchema`). The site statically generates detail pages for each job via `[slug].tsx`.

Security note: If rendering HTML from strings, ensure the content is fully trusted or sanitized (e.g., with DOMPurify). Do not render untrusted HTML to avoid XSS risks.

## Analytics events

- `social_link_click` — When clicking GitHub/LinkedIn in the header
- `job_detail_navigate` — When moving between project detail pages

These are captured client‑side using `posthog-js`.

## SEO

Each page defines descriptive meta tags, Open Graph/Twitter tags, a canonical URL, and embeds basic JSON‑LD. See `pages/index.tsx` and `pages/project/[slug].tsx`.

## Notes

- `next.config.ts` enables the experimental React Compiler and static export. Images are unoptimized because GitHub Pages hosts the static output.
- Theme toggle is persisted in `localStorage` and respects the system color‑scheme by default.

## License

ISC © Carl Gunderson

