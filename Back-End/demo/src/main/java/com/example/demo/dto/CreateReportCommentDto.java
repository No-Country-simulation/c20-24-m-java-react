package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateReportCommentDto {
    @NotNull(message = "Recipe ID is required")
    private Long commentId;
    @NotNull(message = "User ID is required")
    private Long userId;
    @NotBlank(message = "Content must not be blank")
    private String reason;
}
