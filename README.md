# pablomp3.github.io

Personal portfolio and digital garden, built with [Astro](https://astro.build).

## 📁 Repository Architecture

```text
├── public/
│   ├── assets/
│   │   ├── cv/             # Timeline & certificate preview images
│   │   ├── interests/      # Albums, music, diving, and sketches
│   │   └── talks/          # Talk artifacts, slides, schematics, and PDFs
│   ├── favicon.svg
│   └── robots.txt          # Search engine crawler directives
├── src/
│   ├── content/
│   │   ├── config.ts       # Type-safe Zod schema for Content Collections
│   │   └── talks/          # Talks & publications stored as Markdown (.md)
│   ├── data/               # Decoupled JSON data files
│   │   ├── home.json       # Bio, highlights, and Cal.com modal config
│   │   ├── timeline.json   # Career timeline and role details
│   │   ├── certificates.json # GCP & Deep Learning credentials metadata
│   │   ├── interests.json  # Beyond-the-terminal logs and photo galleries
│   │   ├── books.json      # Technical & non-technical reading lists
│   │   └── albums.json     # Curated favorite music albums
│   ├── layouts/
│   │   └── Layout.astro    # Base HTML template with OpenGraph cards & theme toggler
│   ├── pages/              # Astro routing
│   │   ├── index.astro     # Home page
│   │   ├── cv.astro        # Timeline & certifications
│   │   ├── talks.astro     # Talks & publications list
│   │   ├── talk/[...slug].astro # Dynamic talk & publication detail page
│   │   └── interests.astro # Personal interests & galleries
│   └── styles/
│       └── global.css      # Dark/light theme styles and typography
├── astro.config.mjs        # Astro configuration & sitemap generation
└── package.json
```

## 🛠️ Development

### Prerequisites
- Node.js >= 20.0.0
- npm

### Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start local development server (`http://localhost:4321`) |
| `npm run build` | Run TypeScript check (`astro check`) and build static production bundle (`./dist/`) |
| `npm run preview` | Preview production build locally |

## 🚀 Deployment

The site is statically generated and hosted via GitHub Pages at [pablomp3.github.io](https://pablomp3.github.io).
