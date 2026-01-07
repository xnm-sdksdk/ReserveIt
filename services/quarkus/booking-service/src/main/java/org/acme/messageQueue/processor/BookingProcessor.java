package org.acme.messageQueue.processor;

import io.smallrye.common.annotation.Blocking;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.messageQueue.model.BookingModel;
import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.eclipse.microprofile.reactive.messaging.Outgoing;

@ApplicationScoped
public class BookingProcessor {

    @Incoming("bookings-in")
    @Outgoing("bookings-out")
    @Blocking
    public BookingModel process(String bookingRequest) throws InterruptedException {
        Thread.sleep(1000);
        BookingModel booking = new BookingModel();
        booking.title = "Processed Booking";
        booking.resourceId = 123L;
        booking.startDate = "2024-07-01";
        booking.endDate = "2024-07-10";
        booking.status = org.acme.rest.entity.BookingStatus.CONFIRMED;

        return booking;
    }
}
