package com.elte.pizzaorderbackend.repository;

import com.elte.pizzaorderbackend.model.Orders;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Orders, Integer> {
    Iterable<Orders> findAllByName(String name);
}
