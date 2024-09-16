package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ApiFollowersResponseDto {
    private boolean success;
    private String message;
    private Object data;
}
