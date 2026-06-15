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

### 🔗 Lead capture via Airtable

The "Experience It" modal posts submissions directly into Airtable. Provide the required credentials in a local environment file (a sample `.env.local` is already ignored by git):

```
AIRTABLE_TOKEN=pat...        # Airtable personal access token
AIRTABLE_BASE_ID=app...
AIRTABLE_TABLE_ID=tbl...
```

Restart the development server after updating environment variables so the API route can pick them up.

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
