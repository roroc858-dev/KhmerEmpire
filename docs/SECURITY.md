# Security guide

## Principles

- Keep database credentials server-side.
- Never expose Supabase service-role or admin secrets to the browser.
- Use TLS for all production traffic.
- Enforce server-side authorization for admin pages and APIs.
- Use Prisma and RLS to guard data access.
- Treat browser and API payloads as untrusted.

## Payment review requirements

Manual approvals must be based on the payment evidence and transaction reference, never simply on a screenshot upload.

## Audit logging

Every payment decision, delivery retry, and server credential change should create an audit trail.
