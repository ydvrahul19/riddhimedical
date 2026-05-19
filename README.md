# Riddhi Medical – Vercel Deployment

A static website for Riddhi Medical clinic, Ahmedabad.

## Deploy to Vercel

### Option 1: Vercel CLI (fastest)

```bash
npm i -g vercel
vercel
```

Follow the prompts — Vercel will auto-detect it as a static site.

### Option 2: Drag & Drop (no account needed)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag the entire `riddhi-medical` folder onto the page
3. Click **Deploy**

### Option 3: GitHub → Vercel (recommended for ongoing updates)

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the GitHub repo
4. Click **Deploy** — Vercel auto-deploys on every push

## Project Structure

```
riddhi-medical/
├── index.html       # Main site (single-page)
├── images/          # All image assets
│   └── clinic/      # Clinic gallery images
└── vercel.json      # Vercel config (caching, security headers)
```

## What vercel.json does

- **`cleanUrls`** – removes `.html` extension from URLs
- **`trailingSlash: false`** – consistent URL format
- **Image caching** – sets 1-year cache on `/images/*` for faster load times
- **Security headers** – XSS protection, content-type sniffing prevention
