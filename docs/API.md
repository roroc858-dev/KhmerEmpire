# API reference

## Public endpoints

- `GET /api/v1/store/products`
- `GET /api/v1/store/categories`
- `GET /api/v1/server/status`
- `POST /api/v1/minecraft/verification/start`
- `POST /api/v1/orders`
- `GET /api/v1/account/orders`

## Protected endpoints

- `GET /api/v1/admin/orders`
- `POST /api/v1/admin/orders/:orderId/approve-payment`
- `POST /api/v1/admin/orders/:orderId/reject-payment`
- `POST /api/v1/server/heartbeat`
- `GET /api/v1/server/delivery/jobs`
- `POST /api/v1/server/delivery/jobs/:jobId/ack`

All private endpoints must verify authenticated role membership and log audit events.
