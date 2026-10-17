# Setup guide

## 1. Create the repository

Create a GitHub repository and push this monorepo.

## 2. Create a Supabase project

1. Create a PostgreSQL project in Supabase.
2. Copy the project URL and anon key.
3. Create a strong database password and keep it in Render secrets.
4. Apply Prisma migrations once the environment is configured.

## 3. Configure local environment

Copy `.env.example` into `.env` and fill in values before running the web app.

## 4. Seed development products

Use the Prisma schema and implement a seed script after database connectivity is ready.

## 5. Create an admin account

Create the first admin via the authenticated dashboard or direct database admin role assignment.
