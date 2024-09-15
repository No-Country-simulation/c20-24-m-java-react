package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "app_user")
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

    // Relación con Recipe (un usuario puede tener muchas recetas)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recipe> recipes;

    // Relación con Favorite (un usuario puede tener muchas listas de favoritos)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Favorite> favorites;

    // Relación con Calification (un usuario puede hacer muchas calificaciones)
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Calification> califications;

}
