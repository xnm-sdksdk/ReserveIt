package org.acme.messageQueue.model;


import io.quarkus.runtime.annotations.RegisterForReflection;
import org.acme.rest.entity.BookingStatus;

@RegisterForReflection

public class BookingModel {
    public String title;
    public Long resourceId;
    public String startDate;
    public String endDate;
    public BookingStatus status;
}
