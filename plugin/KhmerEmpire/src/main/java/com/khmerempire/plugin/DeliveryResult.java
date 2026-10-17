package com.khmerempire.plugin;

import java.util.Objects;

public final class DeliveryResult {
    private final String status;
    private final String message;

    public DeliveryResult(String status, String message) {
        this.status = Objects.requireNonNullElse(status, "FAILED");
        this.message = Objects.requireNonNullElse(message, "No detail provided.");
    }

    public String getStatus() {
        return status;
    }

    public String getMessage() {
        return message;
    }

    public boolean isSuccess() {
        return "DELIVERED".equalsIgnoreCase(status)
            || "SUCCESS".equalsIgnoreCase(status)
            || "APPROVED".equalsIgnoreCase(status);
    }

    public boolean isRetryable() {
        return "RETRY_WAIT".equalsIgnoreCase(status)
            || "FAILED".equalsIgnoreCase(status)
            || "PENDING".equalsIgnoreCase(status)
            || "CLAIMED".equalsIgnoreCase(status);
    }
}
