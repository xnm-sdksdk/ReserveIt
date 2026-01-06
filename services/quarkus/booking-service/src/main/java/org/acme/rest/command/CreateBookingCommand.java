package org.acme.rest.command;

import java.time.LocalDateTime;
import java.util.UUID;

public record CreateBookingCommand(
        UUID resourceId,
        UUID userId,
        LocalDateTime startDate,
        LocalDateTime endDate
) {}
