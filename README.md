# abhisheksharma.dev

Personal portfolio site for Abhishek Sharma — Frontend Engineering Manager, Chess Player, Runner.

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
- `Home.jsx` — landing page
- `About.jsx` — bio + stats
- `Work.jsx` — career timeline (update this when jobs change)
- `Chess.jsx` — chess story + brand
- `Running.jsx` — running lifestyle + brand
- `Contact.jsx` — email, LinkedIn, social links

Update your Chess.com URL in `Chess.jsx` and social handles in `Contact.jsx`.

## Design Tokens

Colors and fonts are in `src/styles.css` under `:root`. Change `--gold` to adjust the accent color across the whole site.
