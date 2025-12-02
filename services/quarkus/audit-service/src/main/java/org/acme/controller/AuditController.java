package org.acme.controller;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.Response;

@Path("/audits")
public class AuditController {

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
