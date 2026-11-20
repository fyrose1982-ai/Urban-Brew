# The Urban Brew – Premium Café (Demo)

A responsive single-page café website built with **React 18 + Vite**, designed and developed by **AVYRONIX DIGITAL** as a portfolio demonstration.

> The Urban Brew is a fictional business. All names, addresses, prices and contact details are placeholders.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.

Or with the CLI: `npx vercel --prod`

## Customising

All business content lives in `src/data.js`:

- `BUSINESS.whatsapp` – WhatsApp number, international format, digits only (currently a **placeholder**)
- Address, phone, email, opening hours
- Menu items, prices and image URLs
- "Why Choose Us" features

Social links are in `src/components/Footer.jsx`.

## Images

Photos are loaded from Unsplash (free to use under the Unsplash licence). Every image has an automatic fallback, so the layout never shows a broken image if a URL is unavailable. For a real client project, download and host images locally in `public/` for best performance and reliability.

## Structure

```
src/
  App.jsx
  data.js            # content & config
  styles.css
  components/
    Navbar, Hero, About, Menu, WhyUs, Visit, Footer,
    WhatsAppButton, SafeImage, Reveal
```
