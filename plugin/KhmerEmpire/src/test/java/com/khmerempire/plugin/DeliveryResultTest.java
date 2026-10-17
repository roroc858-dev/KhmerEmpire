package com.khmerempire.plugin;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class DeliveryResultTest {
    @Test
    void successMarkerShouldBeTrueForDeliveredResult() {
        DeliveryResult result = new DeliveryResult("DELIVERED", "Rank granted to player");

        assertTrue(result.isSuccess());
        assertFalse(result.isRetryable());
    }

    @Test
    void retryableMarkerShouldBeTrueForTransientFailures() {
        DeliveryResult result = new DeliveryResult("RETRY_WAIT", "Temporary network outage");

        assertFalse(result.isSuccess());
        assertTrue(result.isRetryable());
    }
}
