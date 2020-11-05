package com.example.jwtsecuritypractice1.controller;


import com.example.jwtsecuritypractice1.entity.User;
import com.example.jwtsecuritypractice1.entity.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class UserController {

    private final UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){

        List<User> users = userRepository.findAll();

        return new ResponseEntity(users, HttpStatus.OK);
    }


}
