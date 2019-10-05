package com.elte.pizzaorderbackend.repository;

import com.elte.pizzaorderbackend.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product, Integer> {
    Iterable<Product> findAllByName(String name);
}
