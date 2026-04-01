

## Deploy to Root GitHub Pages URL

To deploy at `https://atiqurkoushik.github.io/` instead of `https://atiqurkoushik.github.io/atiqur-koushik/`, two things need to happen:

### Step 1: Rename Your GitHub Repository
On GitHub, go to your repo **Settings → General** and rename the repository from `atiqur-koushik` to `atiqurkoushik.github.io`. GitHub automatically serves this as your root user site.

### Step 2: Code Changes (3 files)

1. **`vite.config.ts`** — Change `base` from `"/atiqur-koushik/"` to `"/"`
2. **`src/App.tsx`** — Remove `basename="/atiqur-koushik"` from `<BrowserRouter>`
3. **`public/404.html`** — Update the redirect path from `'/atiqur-koushik/'` to `'/'`
4. **`index.html`** — Update canonical URL and OG URLs to `https://atiqurkoushik.github.io/`

These changes remove the subpath assumption so everything works at the root domain.

