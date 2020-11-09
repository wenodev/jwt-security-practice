package com.example.jwtsecuritypractice1.entity;


import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUid(String uid);
}
