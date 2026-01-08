package org.acme.service;

import org.acme.entity.ResourceEntity;

public interface ResourceService {

    public ResourceEntity createResource(ResourceEntity resource);

    public ResourceEntity getResourceById(Long id);

    public boolean deleteResource(Long id);
}
