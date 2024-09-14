package com.example.demo.mapper;

import com.example.demo.dto.RecipeDto;
import com.example.demo.model.Recipe;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = CalificationMapper1.class)
public interface RecipeMapper1 {

    Recipe toEntity(RecipeDto recipeDto);

    RecipeDto toDto(Recipe recipe);

    List<RecipeDto> entityListToDtoList(List<Recipe> recipes);

    List<Recipe> dtoListToEntityList(List<RecipeDto> recipesDto);

}
