# Turborepo + Biome Monorepo Starter

A lightweight monorepo scaffold featuring Turborepo + pnpm workspaces and Biome for formatting/linting. It ships with a default Next.js app and a shared UI package built on shadcn/ui.

## ✨ Features

- Monorepo DX — Turborepo tasks and pnpm workspaces
- Biome Tooling — One fast formatter + linter, Husky + lint-staged
- Default Next.js Template — Next.js 16 + React 19 (App Router)
- Shared UI Library — shadcn/ui + Radix UI + Tailwind CSS v4
- TypeScript — Shared base tsconfig across the workspace

## 🧱 Structure

- `apps/web` — Default Next.js app template
- `packages/ui` — Shared UI library (`@repo/ui`)

## 🏁 Getting Started

### Prerequisites
- Node.js 20+
- pnpm (enable via Corepack: `corepack enable`)

### Install & Develop

```bash
pnpm install

# run all apps in dev (no cache)
pnpm dev

# or only the Next.js app
pnpm -F web dev
```

Open: http://localhost:3000

## 🔧 Scripts

### Root
- `pnpm dev` — Run dev across apps (Turborepo)
- `pnpm build` — Build all apps and packages
- `pnpm format` — Format with Biome
- `pnpm lint` — Lint with Biome
- `pnpm check-types` — Type‑check across workspace
- `pnpm ui:add` — Add shadcn/ui components to `@repo/ui`

### App: `apps/web`
- `pnpm -F web dev` — Start Next.js dev server
- `pnpm -F web build` — Build production bundle (standalone)
- `pnpm -F web start` — Start production server
- `pnpm -F web check-types` — Generate Next.js types and run `tsc`

### UI: `packages/ui`
- `pnpm -F @repo/ui ui:add <component>` — Add shadcn/ui component
- `pnpm -F @repo/ui check-types` — Type‑check the UI package

## 🎨 UI Components (shadcn/ui)

- Add components to the shared UI package from the repo root:
  ```bash
  pnpm ui:add button
  ```
- Import components in apps via workspace aliasing:
  ```ts
  import { Button } from "@repo/ui/components/ui/button";
  ```
- Tailwind CSS v4 is configured in the UI package. Apps consume styles via `@repo/ui/styles/globals.css`.

## 🧰 Tech

- Monorepo: Turborepo, pnpm workspaces
- Tooling: Biome, Husky, lint‑staged
- App: Next.js 16, React 19
- UI: shadcn/ui, Radix UI, Tailwind CSS v4
- Language: TypeScript

---

This starter focuses on monorepo structure, Biome tooling, a default Next.js app, and a reusable shadcn/ui‑based UI library. If you want extra sections (e.g., deployment, CI, or license), let me know.

