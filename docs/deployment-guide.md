# Deployment Guide (utilverse.info/randomdecision)

## 1) Environment Variables
Create `.env.local` from `.env.example`:

- `NEXT_PUBLIC_SITE_URL=https://utilverse.info/randomdecision`
- `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxxxxx` (set after approval)

## 2) Build Configuration
This project uses `basePath: /randomdecision` in `next.config.js`.

- Final routes are served under `https://utilverse.info/randomdecision/...`
- Do not remove basePath unless you move to root domain routing.

## 3) Security Headers
`next.config.js` includes CSP and common hardening headers:

- `Content-Security-Policy`
- `Referrer-Policy`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`

If AdSense introduces blocked resources, extend CSP allow-lists carefully.

## 4) Install and Run
```bash
pnpm install
pnpm build
pnpm start
```

## 5) AdSense Activation Flow
1. Launch with placeholder mode (no real client id)
2. Complete policy/traffic checks
3. Set `NEXT_PUBLIC_ADSENSE_CLIENT`
4. Replace slot ids in:
   - `components/layout/ToolPageShell.tsx`
   - `app/[locale]/page.tsx`
   - `app/[locale]/blog/[slug]/page.tsx`

## 6) SEO Verification
After deployment:

1. Check `https://utilverse.info/randomdecision/sitemap.xml`
2. Check `https://utilverse.info/randomdecision/robots.txt`
3. Submit sitemap to Search Console
4. Validate structured data on tool/blog pages

## 7) Hosting Notes
- Works on any Next.js-compatible host.
- If using custom reverse proxy, ensure `/randomdecision` path is forwarded without stripping required assets.
- Keep HTTPS enabled.