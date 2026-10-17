package com.khmerempire.plugin;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.plugin.java.JavaPlugin;

public final class PluginSettings {
    private final JavaPlugin plugin;

    public PluginSettings(JavaPlugin plugin) {
        this.plugin = plugin;
        this.plugin.saveDefaultConfig();
    }

    public String getBackendBaseUrl() {
        return plugin.getConfig().getString("backend.base-url", "https://example.com");
    }

    public String getServerToken() {
        return plugin.getConfig().getString("backend.server-token", "change-me");
    }

    public boolean isDeliveryEnabled() {
        return plugin.getConfig().getBoolean("delivery.enabled", true);
    }

    public FileConfiguration getConfig() {
        return plugin.getConfig();
    }
}
