package org.acme.rest.command;

import java.util.UUID;

public record CancelBookingCommand(
        UUID bookingId,
        UUID userId
) {
}
