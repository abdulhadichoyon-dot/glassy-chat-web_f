# Choyon Bio Page · v2

A responsive, multi-file React website for the Choyon profile page and Glassy Chat support contact.

## Stack

- React 19 + Vite 8
- GSAP + ScrollTrigger for motion and scroll reveals
- Lenis for optional smooth scrolling
- Lucide React for interface icons
- Plain CSS, split by component and section for easy editing

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Cloudflare Pages deployment

Use these build settings:

- Framework preset: **Vite** (or **None**)
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: `22.12` or newer

No server, database, API key, environment variable, or account system is required. This is a static frontend.

## Project structure

```text
src/
  components/
    About.jsx
    Hero.jsx
    Marquee.jsx
    Project.jsx
    SiteFooter.jsx
    SiteHeader.jsx
    Socials.jsx
  data/site.js
  hooks/useMotionSystem.js
  styles/global.css
  App.jsx
  main.jsx
public/favicon.svg
index.html
vite.config.js
package.json
```

## Editing content

- Name, Glassy Chat URL, support email, and social links: `src/data/site.js`
- Page sections and copy: `src/components/`
- Colours, layout, breakpoints, and responsive styles: `src/styles/global.css`
- Motion setup: `src/hooks/useMotionSystem.js`

## Reliability notes

- Text and content are visible by default. GSAP only adds transforms and never controls content visibility.
- Lenis is progressive enhancement. If it cannot initialize, browser-native scrolling remains available.
- Reduced-motion preferences disable the animation system.
- All icons and animation libraries are installed dependencies and bundled at build time, not loaded from runtime CDN scripts.

## Reliability and content visibility

- The app starts with meaningful static HTML (not an empty React root), so the name, Glassy Chat URL, support email, and social links remain visible if the JavaScript bundle cannot start.
- The React version keeps the same key links and adds the complete animated layout.
- Content is never set to `opacity: 0` while waiting for an animation. GSAP only adds movement; native scrolling remains available if Lenis is unavailable.
- `public/_headers` adds basic browser security headers and long-lived caching for hashed assets on Cloudflare Pages.

## Validation note

The source files, JSX/JavaScript syntax, CSS parsing, local import paths, declared dependencies, and static fallback content were checked. A full `npm run build` could not be executed in the authoring environment because the npm registry DNS lookup failed (`EAI_AGAIN`); run the build after `npm install` in the project environment.
