package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Category;
import com.elte.pizzaorderbackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("")
    public Iterable<Category> getCategories() {
        return categoryRepository.findAll();
    }
}
