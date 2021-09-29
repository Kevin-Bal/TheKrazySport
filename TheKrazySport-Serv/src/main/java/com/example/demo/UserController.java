package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Méthode post pour ajouter un user dans la table
     * @param user
     * @return
     */
    @PostMapping("/user")
    public User newUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    /**
     * Méthode de get par id pour récupérer un user
     * @return
     */
    @GetMapping("/user/{id}")
    public Optional<User> getUser(@PathVariable String id){
        return userRepository.findById(id);
    }


}
