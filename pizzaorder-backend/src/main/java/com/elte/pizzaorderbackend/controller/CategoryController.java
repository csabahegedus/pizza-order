package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Category;
import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("")
    public Iterable<Category> getCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> get(@PathVariable Integer id) {
        Optional<Category> oCategory = categoryRepository.findById(id);
        if (oCategory.isPresent()) {
            return ResponseEntity.ok(oCategory.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/products")
    public ResponseEntity<Iterable<Product>> getProducts(@PathVariable Integer id) {
        Optional<Category> oCategory = categoryRepository.findById(id);
        if (oCategory.isPresent()) {
            // Hidding category list values
            ArrayList<Category> categoryList = new ArrayList<>();
            oCategory.get().getProducts().forEach(product -> {
                product.setCategories(categoryList);
            });
            return ResponseEntity.ok(oCategory.get().getProducts());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
