package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "user")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String phoneNumber;
    private String password;
    private String email;

    @Column(name = "userName", unique = true, nullable = false)
    private String userName;
    private String role;
    private Boolean isActive;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime dateCreation;

}
