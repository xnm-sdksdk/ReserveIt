package org.acme.graphql.schema;

import org.acme.rest.entity.BookingStatus;

import java.time.Instant;

public class BookingSchema {

    public String title;
    public Long resourceId;
    public Instant startDate;
    public Instant endDate;

    public BookingStatus status;

}
