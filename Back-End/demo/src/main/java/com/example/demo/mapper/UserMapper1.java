package com.example.demo.mapper;

import com.example.demo.User.User;
import com.example.demo.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface UserMapper1 {

    @Mapping(source = "userProfile", target = "userProfile")
    @Mapping(source = "recipes", target = "recipes")
    @Mapping(source = "favorites", target = "favorites")
    @Mapping(source = "califications", target = "califications")
    UserDto toUserDto(User user);

    @Mapping(source = "userProfile", target = "userProfile")
    @Mapping(source = "recipes", target = "recipes")
    @Mapping(source = "favorites", target = "favorites")
    @Mapping(source = "califications", target = "califications")
    User toUser(UserDto userDto);

}
