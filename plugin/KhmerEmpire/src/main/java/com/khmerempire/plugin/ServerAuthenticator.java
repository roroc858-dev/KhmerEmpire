package com.khmerempire.plugin;

import java.util.Objects;

public final class ServerAuthenticator {
    private final String expectedToken;

    public ServerAuthenticator(String expectedToken) {
        this.expectedToken = Objects.requireNonNullElse(expectedToken, "");
    }

    public boolean isAuthorized(String providedToken) {
        return expectedToken != null && !expectedToken.isBlank() && expectedToken.equals(providedToken);
    }
}
