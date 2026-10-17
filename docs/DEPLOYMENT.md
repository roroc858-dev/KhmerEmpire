# Deployment guide

## Render web service

1. Create a new Render Web Service from the GitHub repository.
2. Set the root directory to `KhmerEmpire`.
3. Use the build command: `npm install && npm run web:build`
4. Use the start command: `npm run web:start` or equivalent Render start script.
5. Set required environment variables from `.env.example`.
6. Add a health check endpoint, then verify the service logs.

## Supabase

Store the connection strings and service-role key as Render secrets and never expose them to the browser.

## Production checklist

- PostgreSQL TLS enabled.
- Render web app connected to Supabase.
- Admin pages protected server-side.
- Payment review workflow enabled.
- Server credentials rotated and stored securely.
