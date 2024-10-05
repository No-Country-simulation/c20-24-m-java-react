package com.example.demo.dto;

import com.example.demo.User.Role;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

public record UserDto(
        Long id,
        String fullName,
        String phoneNumber,
        String email,
        String username,
        Role role,
        Boolean isActive,
        LocalDateTime dateCreation,
        UserProfileDto userProfile,
        List<RecipeDto> recipes,
        List<FavoriteDto> favorites,
        List<CalificationDto> califications

) implements Serializable {
}

