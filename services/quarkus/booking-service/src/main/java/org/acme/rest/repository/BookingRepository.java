package org.acme.rest.repository;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import org.acme.rest.entity.BookingEntity;

@ApplicationScoped
public class BookingRepository implements PanacheRepository<BookingEntity> {

    public BookingEntity getBookingById(Long id) {
        return findById(id);
    }

    @Transactional
    public Long deleteBooking(Long id) {
        return deleteById(id) ? id : null;
    }

    @Transactional
    public BookingEntity createBooking(BookingEntity bookingData) {
        persistAndFlush(bookingData);
        return bookingData;
    }
}
