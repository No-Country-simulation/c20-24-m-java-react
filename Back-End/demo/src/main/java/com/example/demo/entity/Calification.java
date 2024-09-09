package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "calification")
@Data
public class Calification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String start;
    private Integer likes;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime dateCreation;

}

