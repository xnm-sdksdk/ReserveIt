package org.acme.rest.controller;

import jakarta.annotation.security.RolesAllowed;
import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.rest.entity.BookingEntity;
import org.acme.rest.service.BookingService;
import org.eclipse.microprofile.jwt.JsonWebToken;
import org.jboss.logging.Logger;

@RolesAllowed("USER")
@Path("/bookings")
@RequestScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BookingController {

    private static final Logger LOG = Logger.getLogger(BookingController.class);

    @Inject
    JsonWebToken jwt;

    @Inject
    BookingService bookingService;

    @GET
    @Path("/{id}")
    public Response getBooking(@PathParam("id") Long id) {
        BookingEntity bookingId = bookingService.getBookingById(id);
        if (bookingId == null) {
            LOG.error("Booking not found for id: " + id);
            return Response.status(404).build();
        }
        return Response.ok(bookingId).build();
    }

    @POST
    public Response createBooking(BookingEntity bookingData) {
        if (bookingData == null) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        BookingEntity createdBooking = bookingService.createBooking(bookingData);
        return Response.status(Response.Status.CREATED).entity(createdBooking).build();
    }

    @PATCH
    @Path("/{id}")
    public Response updateBooking(@PathParam("id") Long id, String bookingData) {
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteBooking(@PathParam("id") Long id) {
        Long deletedId = bookingService.deleteBooking(id);
        if (deletedId == null) {
            LOG.error("Booking not found for id: " + id);
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.noContent().build();
    }

}
