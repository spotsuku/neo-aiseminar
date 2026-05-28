# AI Reskilling Camp — Landing Page

A static single-page landing for the AIリスキリングキャンプ AI training program.

## Run locally
Open `index.html` directly in a modern browser, or serve the folder:

```bash
# any static server works — e.g.
npx http-server .
# or
python3 -m http.server 8000
```

## Deploy on GitHub Pages
1. Push this folder to a repository.
2. In repo Settings → Pages, set source to your branch root.
3. The page is served from `index.html` automatically.

## File map
```
index.html                 entry point
styles.css                 all styling
app.jsx                    root React component + scroll fade
sections-hero.jsx          hero (banner + headline + live build pane)
sections-evidence.jsx      Section 2 — case examples
sections-cause.jsx         Section 3-5 — diagnosis / cause / essence
sections-solution.jsx      Section 6-7 — curriculum / ROI
sections-trust.jsx         Section 8-9 — proof / pillars / CTA / footer
hero-console.jsx           animated "LIVE BUILD" console + app previews
tweaks-panel.jsx           in-page tweaks panel (colors, fonts, paper tone)
image-slot.js              drag-and-drop image placeholder web component
assets/                    logos & workshop photo
```

## Stack
- React 18 + Babel Standalone (CDN, no build step)
- Plain CSS (CSS custom properties for theming)
- Web Components for image slots
- Google Fonts: Shippori Mincho B1, Noto Sans JP, Inter, Cormorant Garamond, JetBrains Mono

## Customizing
- **Colors / fonts / paper tone**: open the page, click the Tweaks panel (bottom right) — values are persisted to the editmode block in `app.jsx`.
- **Photos**: drag-and-drop onto the image-slot placeholders (case cards, hero photo, workshop photo). The component remembers each drop.
- **Copy**: edit the `sections-*.jsx` files directly.
