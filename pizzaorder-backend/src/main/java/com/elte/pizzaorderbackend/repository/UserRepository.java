package com.elte.pizzaorderbackend.repository;

import com.elte.pizzaorderbackend.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    Iterable<User> findAllByUserName(String userName);
}
