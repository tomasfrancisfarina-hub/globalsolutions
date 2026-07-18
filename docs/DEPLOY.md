# Deploy — Global Solutions

## Prerequisites

- Node.js 20+
- npm
- Vercel account (recommended) or any Node host supporting Next.js 15

## Local verification

```bash
cd "C:\Users\tomas\Desktop\Global Solutions"
npm install
npm run type-check
npm run lint
npm run build
npm run start
```

Open `http://localhost:3000` — middleware redirects to `/es` or `/en`.

## Environment variables

Copy `.env.example` to `.env.local` and set values before production deploy:

| Variable | Required | Notes |
|----------|----------|-------|
| `NEXT_PUBLIC_SITE_URL` | Yes (prod) | Canonical URL, e.g. `https://globalsolutions.com` |
| `NEXT_PUBLIC_ALLOW_INDEXING` | Yes | `true` for production; `false` on preview/staging |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | GA4 Measurement ID — do not invent |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | No | Must be `true` **and** GA ID set to load scripts |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Search Console HTML tag value |

## Deploy on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables from `.env.example` for **Production**.
5. For **Preview** deployments, set `NEXT_PUBLIC_ALLOW_INDEXING=false`.
6. Deploy.

### Post-deploy checks

- `/es` and `/en` load correctly
- `/sitemap.xml` and `/robots.txt` return expected URLs
- `/manifest.webmanifest` loads
- Favicon and OG images: `/icon`, `/opengraph-image`, `/es/opengraph-image`
- Contact form POST to `/api/contact` returns 200
- Placeholder case studies show badge and use `noindex`

## Custom domain

1. Vercel → Project → Settings → Domains → add domain.
2. Update DNS per Vercel instructions.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Redeploy.

## Google Search Console

1. Add property for production URL.
2. Choose **HTML tag** verification.
3. Copy the `content` value into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
4. Redeploy and verify in Search Console.
5. Submit sitemap: `https://your-domain.com/sitemap.xml`

## Google Analytics

1. Create GA4 property and web data stream.
2. Copy Measurement ID (format `G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_ENABLE_ANALYTICS=true`.
4. Redeploy and confirm events in GA4 DebugView.

## Placeholder content before launch

Do **not** set `status: "published"` on case studies or remove placeholder badges until real content is ready. Placeholder pages are excluded from the sitemap and use `noindex`.

See `docs/CONTENT-PLACEHOLDERS.md` and `docs/PRE-LAUNCH-CHECKLIST.md`.
