package com.example.demo.dto;

import com.example.demo.model.Category;
import jakarta.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record RecipeDto(
        Long id,

        @NotBlank(message = "El título no puede estar vacío.")
        @Size(min = 3, max = 100, message = "El título debe tener entre 3 y 100 caracteres.")
        String title,

        @NotBlank(message = "La descripción no puede estar vacía.")
        @Size(min = 10, max = 500, message = "La descripción debe tener entre 10 y 500 caracteres.")
        String description,

        @NotBlank(message = "Los ingredientes no pueden estar vacíos.")
        String ingredients,

        @NotBlank(message = "Las instrucciones no pueden estar vacías.")
        String instructions,

        @NotNull(message = "La fecha de creación no puede estar vacía.")
        LocalDateTime dateCreation,

        @NotNull(message = "La categoría no puede estar vacía.")
        Category category,

        @NotBlank(message = "El tiempo no puede estar vacío.")
        String time,

        @NotBlank(message = "El número de comensales no puede estar vacío.")
        String commensal,

        String amount,

        List<String> imageUrls,

        List<CalificationDto> califications,

        @NotNull(message = "El 'ID_USER' no puede estar vacío.")
        Long userId,

        @NotBlank(message = "La dificultad no puede estar vacía.")
        String difficulty,

        String nombreDelUsuario,

        int likeCount,

        boolean userHasLiked
) implements Serializable {
}


