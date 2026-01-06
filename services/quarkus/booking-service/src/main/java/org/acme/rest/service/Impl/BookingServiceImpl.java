package org.acme.rest.service.Impl;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.acme.graphql.schema.BookingSchema;
import org.acme.rest.entity.BookingEntity;
import org.acme.rest.repository.BookingRepository;
import org.acme.rest.service.BookingService;

import java.util.ArrayList;
import java.util.List;

@ApplicationScoped
public class BookingServiceImpl  implements BookingService {

    @Inject
    BookingRepository bookingRepository;

    @Override
    public List<BookingSchema> getAllBookings() {
        List<BookingSchema> bookings = new ArrayList<>();
        BookingSchema booking = new BookingSchema();
        booking.title = "Booking working";
        booking.resourceId = 1L;
        bookings.add(booking);
        return bookings;
    }

    @Override
    public BookingEntity getBookingById(Long id) {
        return bookingRepository.getBookingById(id);
    }

    @Override
    public BookingSchema getBookingByQueryId(Long id) {
        return null;
    }
}
