package org.acme.messageQueue.producer;

import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import org.eclipse.microprofile.reactive.messaging.Channel;
import org.eclipse.microprofile.reactive.messaging.Emitter;

public class BookingResource {

    @Channel("bookings-out")
    Emitter<String> bookingEmitter;

    @POST
    @Path("/produceBooking")
    @Produces(MediaType.TEXT_PLAIN)
    public String createBooking(String bookingData) {
        bookingEmitter.send(bookingData);
        return "Booking message sent to the queue.";
    }
}
