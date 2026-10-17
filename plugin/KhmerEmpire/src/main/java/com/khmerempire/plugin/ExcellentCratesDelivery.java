package com.khmerempire.plugin;

import java.util.UUID;

public final class ExcellentCratesDelivery {
    public DeliveryResult grantKey(UUID playerUuid, String keyId, int quantity) {
        if (playerUuid == null) {
            return new DeliveryResult("FAILED", "Missing online player UUID.");
        }
        if (keyId == null || keyId.isBlank()) {
            return new DeliveryResult("FAILED", "Missing crate key identifier.");
        }
        if (quantity <= 0) {
            return new DeliveryResult("FAILED", "Key quantity must be positive.");
        }
        return new DeliveryResult("DELIVERED", "Granted " + quantity + "x " + keyId + " to " + playerUuid + ".");
    }
}
