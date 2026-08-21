# abhisheksharma.dev

Personal portfolio site for Abhishek Sharma — AVP Engineering · Full-Stack & AI Engineering Leader.

Built with React. Deployable to GitHub Pages or Netlify.

## Local Development

```bash
npm install
npm start
```

## Deploy to Netlify (Recommended — easiest)

1. Push this folder to a GitHub repo
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click Deploy — done. Netlify auto-deploys on every push.

To use your custom domain `abhisheksharma.dev`:
- In Netlify: Site Settings → Domain Management → Add custom domain
- In GoDaddy: Add a CNAME record pointing to your Netlify URL

## Deploy to GitHub Pages

1. In `package.json`, confirm `"homepage": "https://abhisheksharma.dev"`
2. Run:
```bash
npm install
npm run deploy
```
3. This runs `gh-pages -d build` — pushes the build to a `gh-pages` branch
4. In GitHub repo Settings → Pages → set source to `gh-pages` branch

For custom domain on GitHub Pages:
- Add a `CNAME` file in `/public` containing: `abhisheksharma.dev`
- In GoDaddy DNS: add A records pointing to GitHub Pages IPs

## Updating Your Content

All content is in `src/pages/`. Each page is a single file:
- `Home.jsx` — landing page (hero, stats, pillars, featured project)
- `Work.jsx` — brands/products grid, career timeline, education (update this when jobs change)
- `Projects.jsx` — featured project deep-dive + other projects
- `Certifications.jsx` — certifications list
- `Contact.jsx` — email, phone, LinkedIn, GitHub, resume link

## Design Tokens & Theme

Colors, spacing, and type are defined in `src/styles.css` under `:root` (light theme) and
`[data-theme="dark"]` (dark theme). Change `--accent` / `--accent2` to adjust the accent
colors across the whole site. The theme toggle lives in `src/components/ThemeToggle.jsx`
and persists the visitor's choice to `localStorage`.
