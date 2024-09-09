package com.example.demo.dto;

import lombok.Data;

@Data
public class RecipeDTO {
    private Long id;
    private String title;

    public RecipeDTO(Long id, String title) {
        this.id = id;
        this.title = title;
    }

}

