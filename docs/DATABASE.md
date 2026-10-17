# Database guide

KhmerEmpire uses Supabase PostgreSQL as the authoritative data store. Prisma is used as the schema and migration layer for application data.

## Core tables

- `users`
- `minecraft_accounts`
- `products`
- `orders`
- `payment_submissions`
- `servers`
- `delivery_jobs`
- `audit_logs`

## Migration flow

```bash
npx prisma migrate dev --schema database/prisma/schema.prisma
```

Use a pooled connection string for app traffic and a direct connection string only for migration tasks where required by the hosting provider.
