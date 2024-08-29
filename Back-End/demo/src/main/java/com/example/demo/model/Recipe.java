package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "recipes")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String ingredients;
    private String instructions;
    private String dateCreation;

//    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Comment> comments = new ArrayList<>();
//
//    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Calification> califications = new ArrayList<>();

}
