package com.example.jwtsecuritypractice1.controller;

import com.example.jwtsecuritypractice1.entity.User;
import com.example.jwtsecuritypractice1.entity.UserRepository;
import com.example.jwtsecuritypractice1.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RequiredArgsConstructor
@RequestMapping("/v1")
@RestController
public class SignInController {

    private final UserRepository userRepository;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/signin")
    public ResponseEntity signin(@RequestParam String uid, @RequestParam String password) throws Exception {

        System.out.println("===signin===");
        System.out.println(uid);
        System.out.println(password);

        User user = userRepository.findByUid(uid);

        jwtTokenProvider.createToken(String.valueOf(user.getId()), user.getRoles());

        return new ResponseEntity(HttpStatus.OK);
    }


    @PostMapping("/signup")
    public ResponseEntity signUp(@RequestParam String uid, @RequestParam String password, @RequestParam String name){

        System.out.println("===signup===");
        System.out.println(uid);
        System.out.println(password);
        System.out.println(name);

        userRepository.save(User.builder()
                .uid(uid)
                .password(password)
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build());

        return new ResponseEntity(HttpStatus.OK);
    }


}
