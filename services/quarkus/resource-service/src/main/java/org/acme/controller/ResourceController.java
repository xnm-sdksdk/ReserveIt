package org.acme.controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;

@Path("/resources")
public class ResourceController {

    @POST
    public Response createResource() {
        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    public Response getResources() {
        return Response.ok().build();
    }

    @Path("/{id}")
    @GET
    public Response getResourceById(@PathParam("id") String id) {
        return Response.ok().build();
    }

    @Path("/{id}")
    @PATCH
    public Response updateResource(@PathParam("id") String id) {
        return Response.ok().build();
    }

    @Path("/{id}")
    @DELETE
    public Response deleteResource(@PathParam("id") String id) {
        return Response.noContent().build();
    }

    @Path("/{id}/availability")
    @GET
    public Response checkAvailability(@PathParam("id") String id) {
        // This method will call the availability service
        return Response.ok().build();
    }

}
