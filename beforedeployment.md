# Before Deployment Checklist (Client GitHub Account)

This document lists the problems identified in the current project setup and the fixes required just before deploying in the client GitHub account.

## 1) Vite base path is wrong for custom domain

Problem:
- Current config uses a repo subpath base (`/vistaranexports5/`) in [vite.config.js](vite.config.js).
- For custom domain deployment (`vistaranexports.com`), this can break JS/CSS/image asset loading.

Recommended fix:
- In [vite.config.js](vite.config.js), set:

```js
export default defineConfig({
  base: '/',
  plugins: [react()],
})
```

## 2) 404 fallback still points to repo subpath

Problem:
- [public/404.html](public/404.html) currently redirects to `/vistaranexports5/`.
- On custom domain root, this can create redirect mismatch or blank-page behavior.

Recommended fix:
- Change any hardcoded `/vistaranexports5/` in [public/404.html](public/404.html) to root-safe paths (`/`) or simplify/remove redirect logic when using HashRouter.

## 3) Deployment strategy mismatch (Actions vs gh-pages script)

Problem:
- CI is now using GitHub Pages official actions in [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- [package.json](package.json) still contains manual `gh-pages` deploy scripts.

Recommended fix:
- Choose one strategy clearly:
  1. Keep GitHub Actions only (recommended), optionally remove `predeploy`/`deploy` scripts and `gh-pages` dependency.
  2. Or keep both but use Actions as primary deployment path.

## 4) Pages settings must be configured in client repo

Problem:
- GitHub Pages settings do not transfer automatically in all fork/transfer scenarios.

Required setup in client repo:
1. Go to Settings -> Pages.
2. Set Source to GitHub Actions.
3. Set Custom domain to `vistaranexports.com`.
4. Enable Enforce HTTPS after domain verification.

## 5) DNS must point domain to GitHub Pages

Problem:
- Even with correct code/workflow, domain will fail if DNS is not mapped to GitHub Pages.

Required DNS records:
- Apex A records:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- Optional `www` CNAME:
  - `www` -> `clientusername.github.io`

## 6) Routing behavior and 404 refresh expectations

Current status:
- [src/main.jsx](src/main.jsx) uses `HashRouter`.
- This is suitable for GitHub Pages and avoids server-side route refresh 404s for app routes.

Validation to perform after deployment:
1. Open `/` and refresh.
2. Open `/#/about` and refresh.
3. Open `/#/products/rice` and refresh.

## Final go-live checklist

1. Fix [vite.config.js](vite.config.js) base path for custom domain.
2. Fix [public/404.html](public/404.html) root redirect paths.
3. Confirm [.github/workflows/deploy.yml](.github/workflows/deploy.yml) is active and passing.
4. Configure client repo Pages settings (GitHub Actions + custom domain + HTTPS).
5. Verify DNS records are correctly propagated.
6. Push to `main` and confirm successful deployment in Actions.
7. Perform refresh tests on key routes.
