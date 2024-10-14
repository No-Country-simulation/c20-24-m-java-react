package com.example.demo.dto;


import java.io.Serializable;

public record LikeDto(
        Long id,
        Long userId,
        Long recipeId,
        boolean yesNo
) implements Serializable {
}

