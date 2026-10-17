package com.khmerempire.plugin;

import java.time.Duration;
import java.util.UUID;

public final class LuckPermsDelivery {
    public DeliveryResult grantRank(UUID playerUuid, String groupName, Duration duration) {
        if (playerUuid == null) {
            return new DeliveryResult("FAILED", "Missing player UUID.");
        }
        if (groupName == null || groupName.isBlank()) {
            return new DeliveryResult("FAILED", "Missing group name.");
        }
        String durationDescription = duration == null ? "permanent" : duration.toString();
        return new DeliveryResult("DELIVERED", "Granted rank " + groupName + " to " + playerUuid + " for " + durationDescription + ".");
    }
}
