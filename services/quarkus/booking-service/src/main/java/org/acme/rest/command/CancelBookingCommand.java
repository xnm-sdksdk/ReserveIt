import java.util.UUID;

public record CancelBookingCommand(
        UUID bookingId,
        UUID userId
) implements BookingCommand {
}
