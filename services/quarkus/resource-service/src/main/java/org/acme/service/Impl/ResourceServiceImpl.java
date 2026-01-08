package org.acme.service.Impl;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import jakarta.transaction.Transactional;
import org.acme.entity.ResourceEntity;
import org.acme.repository.ResourceRepository;
import org.acme.service.ResourceService;

@ApplicationScoped
public class ResourceServiceImpl implements ResourceService {

    @Inject
    ResourceRepository resourceRepository;

    @Override
    @Transactional
    public ResourceEntity createResource(ResourceEntity resource) {
        return resourceRepository.createResource(resource);
    }

    @Override
    public ResourceEntity getResourceById(Long id) {
        return resourceRepository.getResource(id);
    }

    @Override
    public boolean deleteResource(Long id) {
        return resourceRepository.deleteResource(id);

    }
}
