package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateUpdateCommentDto {
    @NotBlank(message = "Content must not be blank")
    private String content;
    @NotNull(message = "User ID is required")
    private Long userId;  // ID del usuario que está intentando hacer la actualización
}
