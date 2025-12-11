package org.acme.rest.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import org.acme.rest.entity.BookingEntity;

public class BookingRepository implements PanacheRepository<BookingEntity> {
}
