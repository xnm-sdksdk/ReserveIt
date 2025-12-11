package org.acme.rest.controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/bookings")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class BookingController {

    @GET
    @Path("/{id}")
    public Response getBooking(@PathParam("id") String id) {
        return Response.ok().build();
    }

    @POST
    public Response createBooking(String bookingData) {
        return Response.status(Response.Status.CREATED).build();
    }

    @PATCH
    @Path("/{id}")
    public Response updateBooking(@PathParam("id") String id, String bookingData) {
        return Response.ok().build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteBooking(@PathParam("id") String id) {
        return Response.noContent().build();
    }

}
