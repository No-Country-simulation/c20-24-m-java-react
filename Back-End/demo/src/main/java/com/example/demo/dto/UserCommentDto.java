package com.example.demo.dto;

import lombok.Data;

@Data
public class UserCommentDto {
    private Long id;
    private String fullName;

    public UserCommentDto(Long id, String fullName) {
        this.id = id;
        this.fullName = fullName;
    }

}
