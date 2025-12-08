package org.acme.repository;

import io.quarkus.hibernate.orm.panache.Panache;
import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.entity.ResourceEntity;

@ApplicationScoped
public class ResourceRepository implements PanacheRepository<ResourceEntity> {

    public Long getResourceById(Long id) {
        ResourceEntity resource = findById(id);
        return resource != null ? resource.getId() : null;
    }


    public void deleteById() {

    }
}
