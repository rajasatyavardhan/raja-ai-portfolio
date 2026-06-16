# Raja AI/ML Developer Portfolio

Career-fair-ready portfolio for Raja Satya Vardhana Reddy Thippareddy, built with React, Vite, Tailwind CSS, and Framer Motion.

The site is designed as a compact project portal: recruiters can scan the hero, open project worlds, inspect proof assets, review skills/experience/education, and download the resume quickly.

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deploy To Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import `rajasatyavardhan/raja-ai-portfolio`.
4. Use these settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Deploy.

The included `vercel.json` adds a single-page-app rewrite to `index.html`.

## Deploy To GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`.

After pushing to `main`:

1. Open the GitHub repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to `main` or run the workflow manually.

## Main Files

- `src/App.jsx` - high-level page order.
- `src/components/Hero.jsx` - first impression, role positioning, resume/GitHub/LinkedIn/contact links.
- `src/components/ProjectExplorer.jsx` - project portal, filters, project worlds, proof modal.
- `src/data/projects.js` - project content, tech, evidence, roles, links, visual type, proof images.
- `src/components/ProfileTabs.jsx` - skills, experience, education.
- `src/components/CareerPitch.jsx` - career fair pitch.
- `src/components/Contact.jsx` - contact links.
- `src/styles.css` - project portal visuals, animations, and shared styling.

## Public Assets

- `public/Raja_Resume.pdf` - resume download.
- `public/proof/` - proof images used in project modals.
- `public/proof/README.md` - source notes for copied proof assets.

## Content Rules

- Do not overclaim unfinished projects.
- Keep MERLIN framed as simulation/research support, not a live clinical system.
- Keep Flight Delay metrics labeled as reported academic project metrics.
- Keep FrontMate AI clearly marked as prototype / in progress.
- Keep Sign Language summary-only unless corrected public evidence is available.
- Use real links only. Missing links should stay unlinked until verified.
