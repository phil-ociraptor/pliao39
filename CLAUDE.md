# CLAUDE.md

## Project Overview

Personal blog and portfolio site for Phil Liao ([philipliao.com](https://philipliao.com)). Built with **Next.js 13** and **React 18**, deployed on **Vercel**. Content comes from Ghost CMS (blog posts) and an Obsidian vault (weekly notes). No TypeScript — pure JavaScript throughout.

## Directory Structure

```
pages/           → Next.js routes (index, individual posts, weekly notes, projects)
components/      → React components (layout, nav, posts, notes, charts)
scripts/         → Content pipeline scripts (ghost.js, notes.js, rss.js, sitemap.js)
data/            → Generated data files consumed by pages (posts.js, notes.js, projects.js)
utils/           → Helpers (AWS S3, TypeRacer API, markdown tools)
obsidian/        → Obsidian vault source files for weekly notes
public/          → Static assets (favicon, images, generated RSS/sitemap)
templates/       → Content templates
```

## Commands

| Command | Description |
|---------|-------------|
| `yarn dev` | Start dev server on port 2000 |
| `yarn build` | Production build (`next build`) |
| `yarn start` | Run production server |
| `yarn ghost` | Fetch posts from Ghost CMS → `data/posts.js` |
| `yarn notes` | Convert Obsidian markdown → `data/notes.js` |
| `yarn rss` | Generate RSS feed → `public/rss.xml` |
| `yarn sitemap` | Generate sitemap → `public/sitemap.xml` |
| `yarn sync` | Run ghost + notes + rss + sitemap in sequence |

## Architecture & Data Flow

```
Ghost CMS (localhost:2368)  →  scripts/ghost.js  →  data/posts.js
Obsidian vault (obsidian/)  →  scripts/notes.js  →  data/notes.js + data/notes-meta.js
data/* files                →  pages/*.js         →  Rendered HTML (SSG/SSR)
```

- Blog posts are fetched from a Ghost CMS instance and serialized into `data/posts.js`
- Weekly notes are parsed from Obsidian markdown files and converted to HTML
- Pages import data files directly and render them as React components
- RSS and sitemap are generated from the processed data files

## Key Conventions

- **Components**: Functional components preferred; some older class components exist (Post, Note)
- **Styling**: styled-jsx (CSS-in-JS scoped to components), inline within component files
- **File naming**: kebab-case for all files (`post-body.js`, `book-list-item.js`)
- **No linter/formatter**: No ESLint, Prettier, or TypeScript configured
- **No tests**: No test framework or test files exist
- **No CI/CD**: No GitHub Actions or other pipeline configured
- **Package manager**: Both `yarn.lock` and `pnpm-lock.yaml` present; scripts use `yarn`
- **MDX support**: Enabled via `@next/mdx` for `.mdx` and `.md` page extensions
- **HTML rendering**: Posts use `dangerouslySetInnerHTML` in `PostBody` component
- **Accent color**: Orange (`#ea9a00`) used as the primary brand color

## External Integrations

- **Ghost CMS** — Content API for blog posts (`@tryghost/content-api`)
- **AWS S3** — Caches TypeRacer data (bucket: `typeracer-data`)
- **Google Analytics** — Tracking via `NEXT_PUBLIC_ANALYTICS_ID` env var
- **Buttondown** — Email newsletter subscription
- **D3.js** — Data visualization for TypeRacer project charts
- **Ant Design** — UI component library (`antd`)

## Environment Variables

- `NEXT_PUBLIC_ANALYTICS_ID` — Google Analytics tracking ID (set in `.env.production`)

## Things to Know

- The Ghost CMS script (`scripts/ghost.js`) connects to `localhost:2368` — it won't work without a local Ghost instance running
- Data files in `data/` are generated artifacts; edit the source scripts rather than modifying data files directly
- Pages for individual posts (e.g., `pages/how-to-type-faster.js`) are statically defined, not dynamically routed
- Weekly note pages under `pages/weekly_notes/` are also statically defined per note
- The `obsidian/` directory is partially gitignored (`.obsidian` config and `ignored/` subfolder)
