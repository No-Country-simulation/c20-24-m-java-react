package com.example.demo.mapper;

import com.example.demo.dto.CalificationDto;
import com.example.demo.dto.FavoriteDto;
import com.example.demo.model.Calification;
import com.example.demo.model.Favorite;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = RecipeMapper1.class)
public interface FavoriteMapper1 {

    @Mapping(target = "recipeList", source = "recipeList")
    @Mapping(target = "user", ignore = true)
    Favorite toEntity(FavoriteDto favoriteDto);

    @Mapping(target = "recipeList", source = "recipeList")
    @Mapping(source = "user.id", target = "userId")
    FavoriteDto toDto(Favorite favorite);

    List<FavoriteDto> entityListToDtoList(List<Favorite> favorites);

    List<Favorite> dtoListToEntityList(List<FavoriteDto> favoriteDtos);

}
