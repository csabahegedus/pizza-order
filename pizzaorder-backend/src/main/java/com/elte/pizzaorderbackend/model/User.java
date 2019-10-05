package com.elte.pizzaorderbackend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    @NotNull
    private String fullName;

    @Column
    @NotNull
    private String userName;

    @Column
    @NotNull
    private String password;

    //@JsonIgnore
    @OneToMany//(mappedBy = "user")
    private List<Orders> orders;


}
