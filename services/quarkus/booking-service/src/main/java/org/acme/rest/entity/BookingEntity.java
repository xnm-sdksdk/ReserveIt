package org.acme.rest.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

import java.time.Instant;
import java.util.Map;

@Entity
@RequiredArgsConstructor
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookingEntity {
    @Id
    @GeneratedValue
    private Long id;

    private Long resourceId;
    private Instant start;
    private Instant end;
    private BookingStatus status;

}
