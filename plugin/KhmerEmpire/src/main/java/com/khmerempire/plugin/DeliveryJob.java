package com.khmerempire.plugin;

import java.util.UUID;

public final class DeliveryJob {
    private final UUID orderId;
    private final UUID itemId;
    private final UUID targetUuid;
    private final String action;
    private final int quantity;

    public DeliveryJob(UUID orderId, UUID itemId, UUID targetUuid, String action, int quantity) {
        this.orderId = orderId;
        this.itemId = itemId;
        this.targetUuid = targetUuid;
        this.action = action;
        this.quantity = quantity;
    }

    public UUID getOrderId() {
        return orderId;
    }

    public UUID getItemId() {
        return itemId;
    }

    public UUID getTargetUuid() {
        return targetUuid;
    }

    public String getAction() {
        return action;
    }

    public int getQuantity() {
        return quantity;
    }
}
