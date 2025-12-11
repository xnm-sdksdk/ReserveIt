package org.acme.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.acme.entity.ResourceEntity;
@ApplicationScoped
public class ResourceRepository implements PanacheRepository<ResourceEntity> {


    @Transactional
    public ResourceEntity createResource(ResourceEntity resourceEntity) {
        persistAndFlush(resourceEntity);
        return resourceEntity;
    }

}
