package org.acme.controller;

import io.quarkus.security.Authenticated;
import jakarta.annotation.security.RolesAllowed;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.acme.entity.ResourceEntity;
import org.acme.repository.ResourceRepository;
import org.eclipse.microprofile.jwt.JsonWebToken;

import java.util.List;
import java.util.Map;


@RolesAllowed("USER")
@Path("/resources")
@Authenticated
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@ApplicationScoped
public class ResourceController {


    private final ResourceRepository resourceRepository;
    private final JsonWebToken jwt;

    @Inject
    public ResourceController(ResourceRepository resourceRepository, JsonWebToken jwt) {
        this.resourceRepository = resourceRepository;
        this.jwt = jwt;
    }



    @POST
    @Transactional
    @RolesAllowed("USER")
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
    @Transactional
    @RolesAllowed("USER")
    public Response deleteResource(@PathParam("id") Long id) {
        boolean deleted = resourceRepository.deleteResource(id);

        if (!deleted) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        return Response.noContent().build();
    }

    @Path("/{id}/availability")
    @GET
    public Response checkAvailability(@PathParam("id") String id) {
        // This method will call the availability service
        return Response.ok().build();
    }

    @Path("/test-jwt")
    @GET
    public Response getResourcesTest() {
        System.out.println("JWT groups: " + jwt.getGroups());
        System.out.println("JWT name: " + jwt.getName());
        List<ResourceEntity> allResources = resourceRepository.listAll();
        return Response.ok(allResources).build();
    }

}
