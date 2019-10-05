package com.elte.pizzaorderbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;


//@Table(name = "`ORDER`")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private String address;

    @Column
    @NotNull
    private String phoneNumber;

    // TODO:
    // Pizza

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        NEW, DOING, DONE
    }

    @Column(updatable = false)
    @NotNull
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column
    @NotNull
    @UpdateTimestamp
    private LocalDateTime modifiedAt;

}
