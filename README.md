# abhisheksharma.dev

Personal portfolio for Abhishek Sharma — Forward Deployed Engineer · Full-Stack
Engineer · Engineering Manager.

Built with Next.js (App Router, static export) and Tailwind CSS. Deploys to
Netlify as a fully static site — no server, no functions.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

This produces a static site in `out/` (via `output: "export"` in
`next.config.js`). Preview it locally with:

```bash
npx serve out
```

## Deploy to Netlify

Already configured via `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `out`

Netlify auto-deploys on every push to `main`. Custom domain
`abhisheksharma.dev` is configured in Netlify's Domain Management.

## Updating Content

All copy — hero, positioning pillars, job history, brands/products,
featured project, certifications, and contact links — lives in a single
file: `lib/content.js`. Edit the data there; the page components in
`components/` render from it automatically. No other file needs to change
for a content update.

## Design Tokens

Colors, spacing, and type scale live in `tailwind.config.js` (theme colors:
`paper`, `ink`, `slate`, `accent`, `line`) and `app/globals.css` (shared
component classes like `.card`, `.tag`, `.btn-primary`). Fonts are system
font stacks (no external font requests), defined as `font-display`
(serif), `font-sans`, and `font-mono` in the Tailwind config.

## SEO

- Per-page metadata, Open Graph, and Twitter Card tags: `app/layout.js`
- JSON-LD structured data (Person, WebSite, ProfilePage): `app/layout.js`
- `app/sitemap.js` and `app/robots.js` generate `sitemap.xml` and
  `robots.txt` at build time
- Social preview image: `public/og-image.png`
