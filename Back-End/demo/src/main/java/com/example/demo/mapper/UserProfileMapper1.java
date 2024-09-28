package com.example.demo.mapper;

import com.example.demo.User.UserProfile;
import com.example.demo.dto.UserProfileDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserProfileMapper1 {

    @Mapping(target = "user", ignore = true)
    UserProfile toEntity(UserProfileDto userProfileDto);

    @Mapping(source = "user.id", target = "userId")
    UserProfileDto toDto(UserProfile userProfile);

}
