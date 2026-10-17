# Plugin guide

The Paper plugin is built under `plugin/KhmerEmpire` and targets the published Paper API for Minecraft 26.3.

## Required install steps

1. Install the Paper server.
2. Install LuckPerms and ExcellentCrates.
3. Build the plugin with Maven.
4. Copy `KhmerEmpire.jar` to the server's `plugins` directory.
5. Restart the server.

## Commands

- `/khmerempire help`
- `/khmerempire status`
- `/khmerempire link`
- `/khmerempire verify <code>`
- `/khmerempire sync`
- `/khmerempire reload`

The plugin performs an authenticated HTTPS heartbeat and delivery poll with the backend and stores a local journal to survive temporary outages.
