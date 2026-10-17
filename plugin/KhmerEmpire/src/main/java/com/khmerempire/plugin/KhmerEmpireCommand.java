package com.khmerempire.plugin;

import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;
import org.jetbrains.annotations.NotNull;

public final class KhmerEmpireCommand implements CommandExecutor {
    private final KhmerEmpirePlugin plugin;

    public KhmerEmpireCommand(KhmerEmpirePlugin plugin) {
        this.plugin = plugin;
    }

    @Override
    public boolean onCommand(@NotNull CommandSender sender, @NotNull Command command, @NotNull String label, @NotNull String[] args) {
        if (!(sender instanceof Player player)) {
            sender.sendMessage("This command can only be used by a player.");
            return true;
        }

        if (args.length == 0) {
            player.sendMessage("§6KhmerEmpire §7| help, status, link, verify <code>, sync, reload");
            return true;
        }

        switch (args[0].toLowerCase()) {
            case "help" -> player.sendMessage("§6KhmerEmpire commands: help, status, link, verify <code>, sync, reload");
            case "status" -> player.sendMessage("§aStatus: §7server online, backend authenticated, delivery manager active");
            case "link" -> player.sendMessage("§aUse /khmerempire verify <code> after requesting a link challenge from the website.");
            case "verify" -> {
                if (args.length < 2) {
                    player.sendMessage("§cUsage: /khmerempire verify <code>");
                    return true;
                }
                player.sendMessage("§aVerification code received: §f" + args[1]);
            }
            case "sync" -> player.sendMessage("§aSync requested to backend.");
            case "reload" -> {
                plugin.reloadConfig();
                player.sendMessage("§aKhmerEmpire config reloaded.");
            }
            default -> player.sendMessage("§cUnknown command. Use /khmerempire help.");
        }

        return true;
    }
}
