package com.khmerempire.plugin;

import org.bukkit.Bukkit;
import org.bukkit.plugin.java.JavaPlugin;

public final class KhmerEmpirePlugin extends JavaPlugin {
    private PluginSettings settings;
    private BackendClient backendClient;

    @Override
    public void onEnable() {
        saveDefaultConfig();
        settings = new PluginSettings(this);
        backendClient = new BackendClient(settings.getBackendBaseUrl(), settings.getServerToken());

        this.getCommand("khmerempire").setExecutor(new KhmerEmpireCommand(this));

        Bukkit.getLogger().info("KhmerEmpire plugin enabled. Secure delivery queue ready.");
    }

    @Override
    public void onDisable() {
        Bukkit.getLogger().info("KhmerEmpire plugin disabled.");
    }

    public PluginSettings getSettings() {
        return settings;
    }

    public BackendClient getBackendClient() {
        return backendClient;
    }
}
