package org.acme.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@RequiredArgsConstructor
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AuditEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String eventType;

    private String resourceType;

    private String resourceId;

    private String performedBy;

}
