package com.elte.pizzaorderbackend.controller;

import com.elte.pizzaorderbackend.model.Orders;
import com.elte.pizzaorderbackend.model.Product;
import com.elte.pizzaorderbackend.model.User;
import com.elte.pizzaorderbackend.repository.OrderRepository;
import com.elte.pizzaorderbackend.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("")
    public Iterable<Orders> getOrders() {
        // Admin role get all orders
        if (authenticatedUser.getUser().getRole().equals(User.Role.ROLE_ADMIN)) {
            return orderRepository.findAll();
        }
        // User role get only the user's orders
        return orderRepository.findByName(authenticatedUser.getUser().getFullName());
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/{id}")
    public ResponseEntity<Orders> get(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            // Admin role get every order with id
            // User role only get the user's order
            if (oOrder.get().getUser().getId().equals(authenticatedUser.getUser().getId())
                || authenticatedUser.getUser().getRole().equals(User.Role.ROLE_ADMIN)) {

                return ResponseEntity.ok(oOrder.get());
            }

            return  ResponseEntity.badRequest().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("/{id}/products")
    public ResponseEntity<Iterable<Product>>  getProducts(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            if (oOrder.get().getUser().getId().equals(authenticatedUser.getUser().getId())
                    || authenticatedUser.getUser().getRole().equals(User.Role.ROLE_ADMIN)) {

                return ResponseEntity.ok(oOrder.get().getProducts());
            } else {

                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_ADMIN"})
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getUser(@PathVariable Integer id) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            return ResponseEntity.ok(oOrder.get().getUser());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @PostMapping("")
    public ResponseEntity<Orders> createOrder(
            @RequestBody Orders order
    ) {
        order.setUser(authenticatedUser.getUser());
        Orders savedOrder = orderRepository.save(order);
        return ResponseEntity.ok(savedOrder);
    }

    @Secured({ "ROLE_ADMIN" })
    @PatchMapping("/{id}")
    public ResponseEntity<Orders> modifyIssue(
            @PathVariable Integer id,
            @RequestBody Orders order
    ) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            if (order.getStatus() == null) {
                return ResponseEntity.badRequest().build();
            }
            Orders oldOrder = oOrder.get();
            oldOrder.setStatus(order.getStatus());
            Orders savedOrder = orderRepository.save(oldOrder);

            /*
            order.setId(oldOrder.getId());
            order.setProducts(oldOrder.getProducts());
            ...
             */

            return ResponseEntity.ok(savedOrder);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @DeleteMapping("/{id}")
    public ResponseEntity deleteOrder(
            @PathVariable Integer id
    ) {
        Optional<Orders> oOrder = orderRepository.findById(id);
        if (oOrder.isPresent()) {
            if (oOrder.get().getUser().getId().equals(authenticatedUser.getUser().getId())
                    || authenticatedUser.getUser().getRole().equals(User.Role.ROLE_ADMIN)) {

                orderRepository.deleteById(id);
                return ResponseEntity.ok().build();
            } else {
                return  ResponseEntity.badRequest().build();
            }
        } else {
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
