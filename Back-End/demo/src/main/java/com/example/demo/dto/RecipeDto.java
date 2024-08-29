package com.example.demo.dto;

import jakarta.validation.constraints.*;

import java.io.Serializable;

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

        @Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "La fecha de creación debe tener el formato yyyy-MM-dd.")
        String dateCreation
) implements Serializable {
}
