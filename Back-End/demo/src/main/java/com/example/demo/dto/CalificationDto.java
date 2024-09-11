package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;
import java.time.LocalDateTime;

public record CalificationDto(
        Long id,
        @NotBlank(message = "Las estrellas no pueden estar vacías.")
        int stars,
        @NotBlank(message = "Los 'Me Gusta' no pueden estar vacías.")
        int likes,
        @NotBlank(message = "El 'ID_RECIPE' no pueden estar vacías.")
        Long recipeId,
        LocalDateTime dateCreation

) implements Serializable {
}
