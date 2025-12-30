package org.acme.controller;

import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.entity.ResourceEntity;
import org.acme.repository.ResourceRepository;

import java.util.List;

@RolesAllowed("USER")
@Path("/resources")
@RequestScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ResourceController {

    @Inject
    JsonWebToken jwt;

    @Inject
    ResourceRepository resourceRepository;

    @POST
    public ResourceEntity createResource(ResourceEntity resource) {
        return resourceRepository.createResource(resource);
    }

    @GET
    public Response getResources() {
        List<ResourceEntity> allResources = resourceRepository.listAll();
        return Response.ok(allResources).build();
    }

    @Path("/{id}")
    @GET
    public ResourceEntity getResourceById(@PathParam("id") Long id) {
        return resourceRepository.findById(id);
    }

    @Path("/{id}")
    @PATCH
    public Response updateResource(@PathParam("id") String id) {
        return Response.ok().build();
    }

    @Path("/{id}")
    @DELETE
    public boolean deleteResource(@PathParam("id") Long id) {
        return resourceRepository.deleteById(id);
    }

    @Path("/{id}/availability")
    @GET
    public Response checkAvailability(@PathParam("id") String id) {
        // This method will call the availability service
        return Response.ok().build();
    }

}
