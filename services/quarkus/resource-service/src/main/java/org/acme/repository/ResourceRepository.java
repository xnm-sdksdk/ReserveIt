package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.ResourceEntity;

import java.util.List;

@ApplicationScoped
public class ResourceRepository implements PanacheRepository<ResourceEntity> {


    public ResourceEntity createResource(ResourceEntity resourceEntity) {
        persist(resourceEntity);
        return resourceEntity;
    }

}
