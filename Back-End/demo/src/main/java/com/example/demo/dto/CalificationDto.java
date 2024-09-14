package com.example.demo.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.time.LocalDateTime;

public record CalificationDto(
        Long id,

        @Min(value = 1, message = "Las estrellas deben ser al menos 1.")
        @Max(value = 5, message = "Las estrellas no pueden ser más de 5.")
        int stars,
        @NotBlank(message = "Los 'Me Gusta' no pueden estar vacías.")
        int likes,
        @NotNull(message = "El 'ID_RECIPE' no puede estar vacío.")
        Long recipeId,
        LocalDateTime dateCreation

) implements Serializable {
}
