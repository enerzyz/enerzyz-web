## Enerzyz marketing experience

Enerzyz.com is now powered by a cinematic Next.js App Router experience that keeps the hero copy front-and-center while the brand story plays out through layered motion, glassmorphism, and glow-driven typography inspired by Juxta, The Interface, AlterAI, and AgentMail.

### ✨ Highlights
- Immersive hero with looping background video, neon typography, and animated metrics.
- Early access CTA with kinetic sweeps and subtle parallax, echoing AlterAI's magnetic button treatment.
- Orbit visual that showcases the Enerzyz control core with continuously rotating nodes.
- Code-playground section that lights up while users hover, mirroring AgentMail's storytelling style.
- Fully responsive layout leveraging Tailwind CSS v4 custom utilities and `framer-motion` choreography.

### 🧱 Tech stack
- Next.js 15 App Router (TypeScript)
- Tailwind CSS v4 + custom utilities
- `framer-motion` for smooth entry and orbital animations
- Playwright for end-to-end smoke coverage

## Getting started

Install dependencies (npm is configured for this project):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the landing page.

## Tests

Playwright validates that the hero renders, CTAs are visible, and feature metrics ship correctly:

```bash
npm run test
```

The test runner will boot the local dev server automatically; set `PLAYWRIGHT_BASE_URL` if you want to point to a deployed build.

## Customising assets & content

- **Hero video**: drop your production loop at `public/video/hero-loop.mp4`. The app ships with an open-license fallback stream so the hero feels alive during development.
- **Poster image**: swap `public/video/hero-fallback.svg` with an on-brand still frame for sharper perceived loading.
- **Copy & modules**: edit the structured sections in `src/components`. The hero, features, code showcase, and CTA blocks are intentionally isolated for quick iteration.
- **Brand palette & glow**: global gradients and animations live in `src/app/globals.css`. Tweak the CSS variables at the top to shift colors across the entire site.

## Deployment

Run a production build and boot the server:

```bash
npm run build && npm start
```

The app is Vercel-ready, but any Node.js host that supports Next.js 15 will work.
