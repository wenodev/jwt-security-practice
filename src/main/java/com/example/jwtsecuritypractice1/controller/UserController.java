package com.example.jwtsecuritypractice1.controller;


import com.example.jwtsecuritypractice1.entity.User;
import com.example.jwtsecuritypractice1.entity.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RequiredArgsConstructor
@RequestMapping("/api/v1")
@RestController
public class UserController {


    private final UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers( @RequestHeader HttpHeaders headers  ){

        System.out.println("headers : " + headers);


        List<User> users = userRepository.findAll();

        return new ResponseEntity(users, HttpStatus.OK);
    }

}
