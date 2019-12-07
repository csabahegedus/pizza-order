package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

    @Secured({"ROLE_ADMIN"})
    @PostMapping("")
    public ResponseEntity<Product> createProduct(
            @RequestBody Product product
    ) {
        Product savedProduct = productRepository.save(product);
        return ResponseEntity.ok(savedProduct);
    }

}
