package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseCommentDTO {
    private Long id;
    private String content;
    private RecipeCommentDto recipe;
    private UserCommentDto user;
    private LocalDateTime dateCreation;
}
