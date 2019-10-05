package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Orders;
import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("")
    public Iterable<Orders> getOrders() {
        return orderRepository.findAll();
    }

    @PostMapping("")
    public ResponseEntity<Orders> createOrder(
            @RequestBody Orders order
    ) {
        order.setCreatedAt(LocalDateTime.now());
        order.setModifiedAt(LocalDateTime.now());
        Orders savedOrder = orderRepository.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteOrder(
            @PathVariable Integer id
    ) {
        try {
            orderRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    /*@PostMapping("/{id}/products")
    public ResponseEntity<Product> addProduct(
            @RequestBody Product product,
            @PathVariable Integer id
    ) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            Orders order = oOrder.get();
            order.getProducts().add(product);
            product.setOrders(order);
            Product createdProduct = messageRepository.save(message);
            return ResponseEntity.ok(createdMessage);
        } else {
            return ResponseEntity.notFound().build();
        }

    }*/
}
