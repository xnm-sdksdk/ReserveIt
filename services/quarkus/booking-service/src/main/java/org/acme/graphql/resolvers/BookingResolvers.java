package org.acme.graphql.resolvers;

import jakarta.inject.Inject;
import org.acme.graphql.schema.BookingSchema;
import org.acme.rest.service.BookingService;
import org.eclipse.microprofile.graphql.Description;
import org.eclipse.microprofile.graphql.GraphQLApi;
import org.eclipse.microprofile.graphql.Query;

import java.util.List;

@GraphQLApi
public class BookingResolvers {

    @Inject
    BookingService bookingService;

    @Query("allBookings")
    @Description("Retrieve all bookings")
    public List<BookingSchema> getAllBookings() {
        return bookingService.getAllBookings();
    }
}
