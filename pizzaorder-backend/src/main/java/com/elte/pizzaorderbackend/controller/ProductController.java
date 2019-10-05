package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("")
    public Iterable<Product> getProducts() {
        return productRepository.findAll();
    }

}
