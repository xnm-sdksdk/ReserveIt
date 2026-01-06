package org.acme.rest.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import org.acme.rest.entity.BookingEntity;

@ApplicationScoped
public class BookingRepository implements PanacheRepository<BookingEntity> {

    public BookingEntity getBookingById(Long id) {
        return findById(id);
    }
}
