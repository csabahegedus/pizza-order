package com.elte.pizzaorderbackend.repository;

import com.elte.pizzaorderbackend.model.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Integer> {
}
