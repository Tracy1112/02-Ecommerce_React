# 🚀 Deployment Guide (English)

Tailored for NomadLiving Boutique and Australian job applications. Primary host: **Vercel** (Netlify optional).

## Quick Checklist
- Code pushed to GitHub; `.env*` ignored via `.gitignore`.
- Env vars set in Vercel for Production/Preview/Development.
- Primary domain set (e.g., `https://nomadliving-boutique.vercel.app/`).
- Deployment protection disabled, or bypass token ready.

## Deploy on Vercel
1) Import repo: [Vercel](https://vercel.com) → **New Project** → select GitHub repo.  
   - Preset: **Vite**; Root: `./`; Build: `npm run build`; Output: `dist`; Install: `npm install`.
2) Env vars (add to all environments):
   ```env
   VITE_API_URL=https://strapi-store-server.onrender.com/api
   VITE_TAX_RATE=0.1
   VITE_FREE_SHIPPING_THRESHOLD=50000
   VITE_SHIPPING_COST=1000
   ```
3) Deploy: click **Deploy** and wait for build.  
4) Verify: open URL, test home, products, cart, auth, mobile.

## Domain & Protection
- Free subdomain: add e.g., `nomadliving-boutique.vercel.app` in Domains, set **Primary**.  
- Custom domain (optional): add in Domains; configure DNS (CNAME for `www`, ALIAS/A for apex if supported).  
- Protection: disable for public demos, or create a bypass token then visit:  
  `https://your-domain/?x-vercel-set-bypass-cookie=true&x-vercel-protection-bypass=TOKEN`

## Netlify (optional)
1) Import: **Add new site** → **Import an existing project**.  
2) Build: `npm run build`; Publish: `dist`; Base: `./`.  
3) Env vars: same as Vercel.  
4) Deploy & verify.

## Local build & preview
```bash
npm install
npm run build
npm run preview
```

## Troubleshooting
- Build fails: check logs; ensure deps installed; env vars set; run `npm run build` locally.
- API errors: confirm `VITE_API_URL`, backend availability/CORS.
- Blank page/styles missing: check routes, asset paths, Tailwind config, console errors.

## Rollback
- Vercel: Deployments → choose previous → **Promote to Production**.  
- Netlify: Deploys → choose previous → **Publish deploy**.

## Security & hygiene
- Keep secrets out of git; `.env*` ignored.  
- HTTPS by default; verify CORS/backends; avoid logging sensitive data.

## Useful links
- Vercel docs: https://vercel.com/docs  
- Netlify docs: https://docs.netlify.com  
- Vite docs: https://vitejs.dev  

Last updated: 2024-12-11  
Maintainer: NomadLiving Team
