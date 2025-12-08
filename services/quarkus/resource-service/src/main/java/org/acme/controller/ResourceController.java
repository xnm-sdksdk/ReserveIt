package org.acme.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import org.acme.entity.ResourceEntity;
import org.acme.repository.ResourceRepository;

import java.util.List;

@Path("/resources")
public class ResourceController {

    @Inject
    ResourceRepository resourceRepository;

    @POST
    public Response createResource() {
        return Response.status(Response.Status.CREATED).build();
    }

    @GET
    public Response getResources() {
        List<ResourceEntity> allResources = resourceRepository.listAll();
        return Response.ok(allResources).build();
    }

    @Path("/{id}")
    @GET
    public Response getResourceById(@PathParam("id") String id) {
        return resourceRepository.getResourceById(Long.parseLong(id)) != null
                ? Response.ok().build()
                : Response.status(Response.Status.NOT_FOUND).build();
    }

    @Path("/{id}")
    @PATCH
    public Response updateResource(@PathParam("id") String id) {
        return Response.ok().build();
    }

    @Path("/{id}")
    @DELETE
    public Response deleteResource(@PathParam("id") String id) {
        if (resourceRepository.isPersistent(resourceRepository.findById(Long.parseLong(id)))) {
            resourceRepository.deleteById(Long.parseLong(id));
        }
        return Response.noContent().build();
    }

    @Path("/{id}/availability")
    @GET
    public Response checkAvailability(@PathParam("id") String id) {
        // This method will call the availability service
        return Response.ok().build();
    }

}
