package com.example.demo.mapper;

import com.example.demo.dto.RecipeDto;
import com.example.demo.model.Recipe;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = CalificationMapper1.class)
public interface RecipeMapper1 {

    @Mapping(target = "user", ignore = true)
    Recipe toEntity(RecipeDto recipeDto);

    @Mapping(source = "user.id", target = "userId")
    RecipeDto toDto(Recipe recipe);

    List<RecipeDto> entityListToDtoList(List<Recipe> recipes);

    List<Recipe> dtoListToEntityList(List<RecipeDto> recipesDto);

}
