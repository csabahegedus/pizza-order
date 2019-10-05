package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Orders;
import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.model.User;
import com.elte.pizzaorderbackend.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
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


    @GetMapping("/{id}")
    public ResponseEntity<Orders> get(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            return ResponseEntity.ok(oOrder.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/products")
    public Iterable<Product> getProducts(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            return oOrder.get().getProducts();
        } else {
            return new ArrayList<Product>();
        }
    }

    @GetMapping("/{id}/user")
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            // Hidding orders list values
            ArrayList<Orders> ordersList = new ArrayList<>();
            oOrder.get().getUser().setOrders(ordersList);
            return ResponseEntity.ok(oOrder.get().getUser());
        } else {
            return ResponseEntity.notFound().build();
        }
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
