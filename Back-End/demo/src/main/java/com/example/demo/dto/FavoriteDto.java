package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record FavoriteDto(
        Long id,

        List<RecipeDto> recipeList,

        @NotBlank(message = "El Nombre no puede estar vacío.")
        String name,

        LocalDateTime dateCreation

) implements Serializable {
}
