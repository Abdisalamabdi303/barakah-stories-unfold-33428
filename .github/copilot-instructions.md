This repository is a Vite + React + TypeScript single-page site scaffolded with Lovable and shadcn-ui (Radix + Tailwind).

Key facts for an AI coding agent working here
- Project entry points: `src/main.tsx` mounts React and loads `src/App.tsx` which wires global providers (React Query `QueryClientProvider`, `TooltipProvider`, and two toasters).
- Routing: `src/App.tsx` uses `react-router-dom` with a root route rendering `src/pages/Index.tsx`. Add new routes in `App.tsx` above the catch-all `*` route.
- Page composition: `src/pages/Index.tsx` composes the site from section components in `src/components/*` (e.g. `HeroSection`, `AboutSection`, `ServicesSection`). Changes to layout usually happen there.
- UI primitives: `src/components/ui/*` contains design-system primitives (Button, Input, Toaster, Dialog, etc.). They use:
  - `class-variance-authority` (cva) for variant styling
  - `cn` helper from `src/lib/utils.ts` for conditional class names
  - Radix `Slot` for `asChild` patterns
  Modify these primitives carefully: many pages import them directly.
- Path alias: the project uses the `@` alias to refer to `src/` (see `tsconfig.json` and `vite.config.ts`). Use imports like `@/components/...`.
- Styling: Tailwind is the primary styling system. Global styles live in `src/index.css`. Theme tokens (like `bg-background`, `text-foreground`) come from the Tailwind config and shadcn conventions.
- Build & dev commands (from `package.json`):
  - Install: `npm i`
  - Dev server: `npm run dev` (Vite, port 8080 in config)
  - Build (prod): `npm run build` (or `npm run build:dev` for development build)
  - Preview: `npm run preview`
  - Lint: `npm run lint` (ESLint)
- Vite plugin: `lovable-tagger` is enabled in development mode. Don't remove it unless you're sure (used by Lovable integrations).

Conventions & patterns to follow
- Section-first pages: the landing page is built from independent section components under `src/components/*`. Prefer adding/adjusting content here rather than changing `Index.tsx` layout often.
- Small focused components: keep UI primitives generic (variants via `cva`) and add domain logic in the section components.
- Accessibility: Radix primitives are used; prefer them for interactive widgets. Keep focus and aria attributes consistent with Radix patterns.
- Static content: Many sections are static React components — update text, images, and links directly in the corresponding component (e.g. `Navigation.tsx`, `Footer.tsx`).
- Icons: `lucide-react` is used for icons (see `Navigation.tsx`). Use those instead of raw SVG markup for consistency.

Common gotchas and where to look
- Imports failing locally: ensure TypeScript path alias (`@`) and Vite alias are both kept in sync (`tsconfig.json` and `vite.config.ts`).
- CSS class names: Tailwind class names are often composed via `cn()`; when debugging style issues, check `src/index.css`, `tailwind.config.ts`, and the `button`/`card` variants under `src/components/ui`.
- State & data fetching: global React Query client is provided in `App.tsx`. Use `@tanstack/react-query` hooks for server state; there is no centralized API client in the repo (add one in `src/lib/` if needed).

Where to make common changes (examples)
- Add route: edit `src/App.tsx` and add a `Route` above `*`.
- Add a site section: create `src/components/MySection.tsx`, import it in `src/pages/Index.tsx`, and add the component in the page order.
- Update button styling: edit `src/components/ui/button.tsx` (uses `cva`) and `src/lib/utils.ts` for `cn` if required.

Example snippets (for reference)
- Importing a component with aliases
  import { Button } from "@/components/ui/button";
- Add a route in `App.tsx`
  <Route path="/donate" element={<DonatePage />} />

Notes about running and testing
- There are no unit tests in this repository. Quick local verification is done via `npm run dev` and manual browser testing at http://localhost:8080.
- Lint with `npm run lint` before opening a PR.

If something is unclear or you need more project-specific rules (PR format, code style beyond ESLint, testing strategy), ask and I will add it.
