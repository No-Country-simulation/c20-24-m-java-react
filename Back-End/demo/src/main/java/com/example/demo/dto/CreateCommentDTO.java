package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateCommentDTO {
    @NotBlank(message = "Comment content cannot be empty")
    private String content;
    @NotNull(message = "Recipe ID is required")
    private Long recipeId;
    @NotNull(message = "User ID is required")
    private Long userId;
}
