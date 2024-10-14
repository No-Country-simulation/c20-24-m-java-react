package com.example.demo.mapper;

import com.example.demo.dto.LikeDto;
import com.example.demo.model.Like;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface LikeMapper1 {

    @Mapping(target = "user", ignore = true)
    @Mapping(target = "recipe", ignore = true)
    Like toEntity(LikeDto likeDto);

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "recipe.id", target = "recipeId")
    LikeDto toDto(Like like);

    List<LikeDto> entityListToDtoList(List<Like> likes);

    List<Like> dtoListToEntityList(List<LikeDto> likesDto);
}

