package com.example.demo.dto;

import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String fullName;

    public UserDTO(Long id, String fullName) {
        this.id = id;
        this.fullName = fullName;
    }

}
