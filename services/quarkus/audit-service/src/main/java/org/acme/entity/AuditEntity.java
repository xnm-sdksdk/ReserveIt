package org.acme.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.*;

@Entity
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

    private Long resourceId;

    private String performedBy;

}
