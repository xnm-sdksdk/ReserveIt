package org.acme.rest.service;

import org.acme.graphql.schema.BookingSchema;
import org.acme.rest.entity.BookingEntity;

import java.util.List;

public interface BookingService {
    public List<BookingSchema> getAllBookings();

    public BookingEntity getBookingById(Long id);

    public BookingSchema getBookingByQueryId(Long id);


}
