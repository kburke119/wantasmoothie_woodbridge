# Want A Smoothie — Website

Website for Want A Smoothie, a fresh smoothie and healthy food stand located inside Knot Just Bagels in Woodbridge, NJ.

**Live site:** https://www.wantasmoothie.com

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- Wouter (routing)
- Deployed on Netlify

## Local Development

```bash
cd client
npm install
npm run dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
cd client
npm run build
```

Output goes to `client/dist/`. Netlify runs this automatically on push to main.

## Deployment

Netlify auto-deploys on push to `main`:
- Build command: `npm install && npm run build` (run from `client/`)
- Publish directory: `client/dist`
- Node version: 18 (set in `netlify.toml`)

All SPA routes fall back to `index.html` via the redirect rule in `netlify.toml`.

## Project Structure

```
├── client/
│   ├── public/
│   │   ├── images/          # Product photos and brand logos
│   │   ├── _headers         # Netlify security + cache headers
│   │   ├── favicon.png
│   │   ├── apple-touch-icon.png
│   │   ├── og-image.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/      # Page sections and shared components
│   │   │   └── ui/          # Core UI primitives (Button, Card, Toast, Tooltip)
│   │   ├── hooks/           # use-mobile, use-toast
│   │   ├── lib/             # queryClient, utils, api stubs
│   │   └── pages/           # home.tsx, not-found.tsx
│   ├── index.html           # SEO meta tags, JSON-LD schema
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
├── netlify.toml
└── tsconfig.json
```

## Content Updates

### Business Hours / Address
Edit `client/src/components/location-section.tsx`.

### Smoothie Gallery Images
Add `.avif` images to `client/public/images/` and update the `smoothieImages` array in `client/src/components/about-section.tsx`.

### SEO / Meta Tags
Edit `client/index.html` — update `<title>`, `<meta name="description">`, Open Graph tags, and the JSON-LD schema block.

### Contact Form
The contact section embeds a Google Form. To swap it, replace the `src` URL in `client/src/components/contact-section.tsx`.

### Online Ordering (Square)
When the Square ordering link is ready, search for `TODO: Replace` in the codebase. Update the two `onClick` handlers in:
- `client/src/components/hero-section.tsx`
- `client/src/components/location-section.tsx`

### Footer Brand Links
Sister brand logos and links are in `client/src/components/footer.tsx`.

## Environment Variables

None required for the static frontend.

## SEO

- Full meta tags, Open Graph, and Twitter Card in `client/index.html`
- JSON-LD `FoodEstablishment` schema (Google Rich Results)
- `robots.txt` and `sitemap.xml` in `client/public/`
- Security headers via `client/public/_headers`

## Sister Brands

- [Bounce Back Fitness](https://www.bouncebackfit.com)
- [Float Into Wellness](https://www.floatintowellness.com)
