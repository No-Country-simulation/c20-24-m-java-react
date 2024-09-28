package com.example.demo.dto;

import jakarta.validation.constraints.NotNull;

import java.io.Serializable;
import java.util.List;

public record UserProfileDto(

        Long id,
        String userImage,
        String location,
        String description,
        List<String> socialLinks,
        String bannerImage,
        @NotNull(message = "El 'ID_USER' no puede estar vacío.")
        Long userId

) implements Serializable {
}
