# Moreland Estate Management

A responsive recreation of Moreland Estate Management's public website, presenting its residential property management services and office contact details.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/moreland-estate run dev` — run the Moreland Estate website through its managed workflow
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/moreland-estate/src/App.tsx` — homepage structure and content
- `artifacts/moreland-estate/src/index.css` — page styles and responsive layout
- `artifacts/moreland-estate/public/` — local brand images and fonts
- `artifacts/moreland-estate/clone-data/` — archived source HTML, CSS, inventory, and reference screenshot

## Architecture decisions

- The site is a frontend-only React page; no database or custom API is needed.
- Original media is stored locally so the page does not depend on WordPress image hosting.
- Existing destination URLs are retained for pages and services not rebuilt in this artifact.

## Product

- Responsive homepage with desktop navigation, a mobile menu, and a Services dropdown
- Original company messaging, service descriptions, locations, contact links, and accreditation

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
