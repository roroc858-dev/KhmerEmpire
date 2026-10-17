# KhmerEmpire

KhmerEmpire is a production-oriented Minecraft rank and crate-key store built for Render, Supabase PostgreSQL, Paper, LuckPerms, and ExcellentCrates.

## Monorepo layout

- `apps/web` — Next.js storefront, dashboard, and admin console.
- `packages/shared` — shared TypeScript types and validation helpers.
- `plugin/KhmerEmpire` — Paper plugin built with Maven.
- `database` — Prisma schema and migration assets.
- `docs` — setup, deployment, security, and troubleshooting docs.

## Quick start

1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   - `npm install`
   - `npm --prefix apps/web install`
3. Start the web app:
   - `npm run web:dev`
4. Build the plugin:
   - `mvn -f plugin/KhmerEmpire/pom.xml clean package`

## Notes

This repository contains a working vertical slice and the project scaffolding required for a production implementation. It intentionally keeps the external service integration points explicit so the platform can be deployed safely to Render and Supabase without hard-coding secrets into the browser.

## Required external services

- Supabase PostgreSQL project for application data.
- Render web service for the Next.js app.
- Paper server with LuckPerms and ExcellentCrates installed.
- Optional admin review flow with manual payment confirmation.
