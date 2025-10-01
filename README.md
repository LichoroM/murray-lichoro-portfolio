# Portfolio (React + TypeScript + Vite + Tailwind CSS v4)

Modern personal portfolio with a custom hash router, responsive UI, accessible components, and a real contact form backed by Web3Forms.

## Tech
- React 19 + TypeScript
- Vite
- Tailwind CSS v4 tokens
- Lucide Icons

## Quick start
1. Install dependencies
   - npm install
2. Start the dev server
   - npm run dev
   - Vite will print the local URL. If 5173 is busy, it chooses another port (e.g., 5174).
3. Open the app
   - http://localhost:5173 or the port printed by Vite

## App structure
- src/components: Navigation, Footer, Hero, Router, ThemeProvider, UI primitives
- src/pages: Home, About, Experience, Education, Skills, Projects, Contact, Thank You
- src/data: Personal info, experiences, education, skills, projects
- src/styles/globals.css: Global theme, animations, utilities

## Routing
Hash-based routes (no server config needed):
- #home, #about, #skills, #projects, #experience, #education, #contact, #thank-you
Scrolling to top on navigation is built-in for better UX.

## Environment variables
Create .env from .env.example:
- VITE_WEB3FORMS_KEY: Required for contact form submissions (get from https://web3forms.com/)
- VITE_CONTACT_SUBJECT_PREFIX: Optional email subject prefix
- VITE_CONTACT_REDIRECT_URL: Optional success redirect (used by Web3Forms backend)
- VITE_CONTACT_ENABLE_CAPTCHA: Optional, must also be enabled in Web3Forms dashboard

Dev convenience: the app also navigates to #thank-you client‑side after a successful submit.

## Production & deployment
- Optimize assets first (optional but recommended):
  - npm run optimize:images    # profile.webp + og-image.jpg
  - npm run favicons           # 16px/32px PNG + favicon.ico
- Build and preview locally:
  - npm run build
  - npm run preview
- Deploy the dist/ folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.).

### GitHub Pages (recommended for this repo)
1) Push your code to a GitHub repository and set the default branch to main.
2) In GitHub → Settings → Pages, set Source to “GitHub Actions.”
3) In GitHub → Settings → Secrets and variables → Actions → New repository secret, add:
    - VITE_WEB3FORMS_KEY: your Web3Forms key
    - VITE_CONTACT_SUBJECT_PREFIX: [Portfolio Contact] (optional)
   - VITE_CONTACT_REDIRECT_URL: https://lichorom.github.io/murray-lichoro-portfolio/#thank-you (optional)
    - VITE_CONTACT_ENABLE_CAPTCHA: false (or true if enabled in dashboard)
4) If this is a repository site (https://<username>.github.io/<repo>/), set BASE_PATH:
    - In the Actions workflow, you can set BASE_PATH env when building, or run locally with:
     - BASE_PATH=/murray-lichoro-portfolio/ npm run build
    - Our workflow allows BASE_PATH to be provided via repository variables if needed.
5) Push to main. The included workflow .github/workflows/deploy.yml will build and deploy automatically.
6) Your site will be hosted at https://lichorom.github.io/murray-lichoro-portfolio/ (or the repository’s Pages URL shown in the workflow output).

### Netlify, Vercel, or Cloudflare Pages
- Build command: npm run build
- Output directory: dist
- Environment variables: same as above (VITE_WEB3FORMS_KEY, etc.)
- No special routing config required since we use hash routes.

### Thank‑You redirect notes
- Local dev: set VITE_CONTACT_REDIRECT_URL to http://localhost:<port>/#thank-you
- Production: set it to your deployed URL, e.g., https://your-domain.com/#thank-you
- This value is used by Web3Forms on the backend; the app also navigates there on success for a seamless experience.

## Accessibility & UX
- Inter font preconnected in index.html for consistent typography
- Focus-visible outlines and keyboard-friendly components
- External links opened with noopener,noreferrer when using window.open
- Hero image uses WebP with JPEG fallback; eager + high fetchPriority for better LCP

## Troubleshooting
- App won’t open: ensure the dev server is running and use the exact port Vite printed
- Port 5173 taken: close other Vite processes or accept the alternate port
- Type errors: check VS Code Problems panel; this project uses strict typing

## Scripts
- dev: start Vite
- build: type-check then bundle
- preview: preview the production build
- favicons: generate multi-size favicon assets
- optimize:images: generate profile.webp and Open Graph image

## License
MIT
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    # Portfolio (React + TypeScript + Vite + Tailwind CSS v4)

    Modern personal portfolio site with a custom router, theme provider, animated UI, and content powered by TypeScript data models.

    ## Tech
    - React 19 + TypeScript
    - Vite
    - Tailwind CSS v4
    - Lucide Icons

    ## Getting started
    1. Install dependencies
       - npm install
    2. Start the dev server
       - npm run dev
    3. Open the app
       - Vite prints the local URL. If port 5173 is busy, it will use a new port (e.g., 5174).

    ## App structure
    - src/components: Navigation, Footer, Hero, Router, ThemeProvider, UI primitives
    - src/pages: Home, About, Experience, Education, Skills, Projects, Contact
    - src/data: Personal info, experiences, education, skills, projects
    - src/styles/globals.css: Global theme, animations, utilities

    ## Navigation
    This app uses a tiny hash-based router. Use links or change the hash part of the URL:
    - #home, #about, #skills, #projects, #experience, #education, #contact

    ## Troubleshooting
    - Blank page or cannot connect: ensure the dev server is running and use the exact port shown by Vite (http://localhost:5173 or http://localhost:5174).
    - Port 5173 is in use: stop other Vite processes or accept the alternate port. You can pin a port by updating vite.config.ts.
    - TypeScript errors: run the TypeScript language server in VS Code and check the Problems panel. This repo is strict-typed; any missing fields will surface during development.

      ## Build
      - npm run build
      - npm run preview

      ## Production & Deployment
      - Optimize images before build:
         - Profile WebP and OG image: `npm run optimize:images`
         - Favicon set: `npm run favicons`
      - Build for production: `npm run build`
      - Preview production build locally: `npm run preview`

      ## Performance & UX Best Practices
      - Fonts: Inter is preconnected and loaded in index.html for consistent typography.
      - Routing: The custom Router scrolls to top on navigation to avoid mid-page landings.
      - Hero image: Uses WebP with JPEG fallback, eager load and high fetch priority for better LCP.
      - External links: Opened with noopener,noreferrer when using window.open.
      - Tailwind tokens: Use design tokens (bg-background, text-foreground, border-border, bg-accent) for theme consistency.

      ## License
      MIT
      // Enable lint rules for React DOM
