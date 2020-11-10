package com.example.jwtsecuritypractice1.auth;

import com.example.jwtsecuritypractice1.entity.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String id){
        return userRepository.findById(Long.valueOf(id)).orElseThrow();
    }


}
