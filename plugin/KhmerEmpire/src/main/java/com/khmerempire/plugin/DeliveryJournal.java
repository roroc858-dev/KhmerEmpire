package com.khmerempire.plugin;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public final class DeliveryJournal {
    private final Path journalPath;

    public DeliveryJournal(Path journalPath) {
        this.journalPath = journalPath;
    }

    public void append(UUID jobId, String status, String detail) throws IOException {
        Files.createDirectories(journalPath.getParent());
        String line = Instant.now() + " | job=" + jobId + " | status=" + status + " | detail=" + detail + System.lineSeparator();
        Files.writeString(journalPath, line, StandardCharsets.UTF_8, java.nio.file.StandardOpenOption.CREATE, java.nio.file.StandardOpenOption.APPEND);
    }

    public List<String> readAll() throws IOException {
        if (!Files.exists(journalPath)) {
            return new ArrayList<>();
        }
        return Files.readAllLines(journalPath, StandardCharsets.UTF_8);
    }
}
