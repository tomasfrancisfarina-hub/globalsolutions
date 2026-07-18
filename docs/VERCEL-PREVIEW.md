# Vercel Preview — dashboard deploy (step by step)

**Goal:** public `*.vercel.app` URL for Claude visual audit.  
**Do not** run `npm run start` locally. Keep only `npm run dev` on port 3000.

---

## Step 0 — Local check (done)

- [x] Broken Home images fixed in `config/visual-assets.ts`
- [ ] Confirm `http://localhost:3000/es` loads with no broken images on scroll

---

## Step 1 — Put the project on GitHub

Vercel Dashboard imports from Git. If the repo is not on GitHub yet:

1. Create a new **private** or **public** repository on [github.com/new](https://github.com/new)  
   Example name: `global-solutions-web`

2. In PowerShell (with [Git for Windows](https://git-scm.com/download/win) installed):

```powershell
cd "C:\Users\tomas\Desktop\Global Solutions"
git init
git add .
git commit -m "Pre-preview: Home visual pass and image fixes"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/global-solutions-web.git
git push -u origin main
```

Replace `YOUR_USERNAME` and repo name with yours.

---

## Step 2 — Import into Vercel

1. Go to [vercel.com](https://vercel.com) and **Log in** (GitHub OAuth is easiest).
2. Click **Add New… → Project**.
3. **Import** your GitHub repository (`global-solutions-web`).
4. Vercel should detect **Next.js** automatically.

**Build settings (defaults are fine):**

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | *(leave default)* |
| Install Command | `npm install` |

Do **not** deploy yet — set env vars first.

---

## Step 3 — Environment variables (Preview)

On the import screen (or later: **Project → Settings → Environment Variables**), add:

| Name | Value | Environments |
|------|-------|--------------|
| `NEXT_PUBLIC_ALLOW_INDEXING` | `false` | **Preview** (and Production when ready) |
| `NEXT_PUBLIC_SITE_URL` | `https://PLACEHOLDER.vercel.app` | Preview |

For the first deploy, you can leave `NEXT_PUBLIC_SITE_URL` empty or use a placeholder; after deploy, update it to the real `*.vercel.app` URL and **Redeploy**.

---

## Step 4 — Deploy

1. Click **Deploy**.
2. Wait for the build (~2–4 min). Build runs on Vercel servers (not your machine) — safe while `npm run dev` runs locally.
3. When finished, open the **Preview** deployment.

Your public URL will look like:

```text
https://global-solutions-web-xxxxx.vercel.app
```

or

```text
https://global-solutions-web-git-main-yourteam.vercel.app
```

---

## Step 5 — Post-deploy

1. Copy the deployment URL.
2. Test:
   - `https://YOUR-URL.vercel.app/es`
   - `https://YOUR-URL.vercel.app/en`
3. Update `NEXT_PUBLIC_SITE_URL` to that exact origin → **Redeploy** (optional but recommended for canonical URLs).
4. Send the `/es` or `/en` URL to Claude for the visual audit.

---

## Step 6 — Share with Claude

Send:

```text
Preview URL: https://YOUR-URL.vercel.app/es
Locale alternates: /en
Scope: Home visual audit only. Do not change copy or architecture.
Known issue: CTA and International Expansion share one photo (duplicate, not broken).
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on Vercel | Open deployment → **Building** logs; usually TypeScript or missing env |
| Images broken on Preview | Confirm `images.unsplash.com` in `next.config.ts` (already configured) |
| 500 after local changes | Never run `npm run build` + `npm run dev` together; delete `.next` and restart dev |
| Wrong site URL in metadata | Set `NEXT_PUBLIC_SITE_URL` to preview URL and redeploy |

---

## What to send back after deploy

Paste the **exact Preview URL** here so it can be recorded for the audit handoff.
