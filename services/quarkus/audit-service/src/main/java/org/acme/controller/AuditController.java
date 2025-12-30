package org.acme.controller;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@RolesAllowed("USER")
@Path("/audits")
@RequestScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AuditController {

    @Inject
    JsonWebToken jwt;

    @GET
    @Path("/user/{id}")
    public Response getAuditsByUserId() {
        return Response.ok().build();
    }

    @GET
    @Path("/events")
    public Response getAllAuditEvents() {
        return Response.ok().build();
    }

    @POST
    @Path("/log")
    public Response logAuditEvent() {
        return Response.ok().build();
    }
}
