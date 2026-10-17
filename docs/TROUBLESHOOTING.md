# Troubleshooting

## Paper API mismatch

Check the published Paper metadata before updating versions. The current compatibility check confirms that the 26.3 build stream is published and available.

## Database connection failures

Verify `DATABASE_URL`, `DIRECT_URL`, TLS settings, and the Supabase connection string format.

## Plugin delivery issues

Check the local delivery journal, the backend job queue, and server heartbeat status before retrying a failed delivery.

## Admin access issues

Ensure the authenticated user is assigned a server-side admin role and that the backend route checks authorization server-side.
