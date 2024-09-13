package com.example.demo.dto;

import lombok.Data;

@Data
public class RecipeCommentDto {
    private Long id;
    private String title;

    public RecipeCommentDto(Long id, String title) {
        this.id = id;
        this.title = title;
    }

}

