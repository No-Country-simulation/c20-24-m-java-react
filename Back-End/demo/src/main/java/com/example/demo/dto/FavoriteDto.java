package com.example.demo.dto;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record FavoriteDto(
        Long id,

        List<RecipeDto> recipeList,

        LocalDateTime dateCreation

) implements Serializable {
}
