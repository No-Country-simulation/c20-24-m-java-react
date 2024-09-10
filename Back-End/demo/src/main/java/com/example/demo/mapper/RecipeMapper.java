package com.example.demo.mapper;

import com.example.demo.dto.RecipeDto;
import com.example.demo.model.Recipe;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class RecipeMapper {

    public static Recipe dtoToEntity(RecipeDto recipeDto) {
        if (recipeDto == null) {
            return null;
        }

        return Recipe.builder()
                .id(recipeDto.id())
                .title(recipeDto.title())
                .description(recipeDto.description())
                .ingredients(recipeDto.ingredients())
                .instructions(recipeDto.instructions())
                .dateCreation(recipeDto.dateCreation())
                .category(recipeDto.category())
                .time(recipeDto.time())
                .commensal(recipeDto.commensal())
                .amount(recipeDto.amount())
                .imageUrls(recipeDto.imageUrls() != null ? recipeDto.imageUrls() : new ArrayList<>())
                .build();
    }

    public static RecipeDto entityToDto(Recipe recipe) {
        if (recipe == null) {
            return null;
        }

        return new RecipeDto(
                recipe.getId(),
                recipe.getTitle(),
                recipe.getDescription(),
                recipe.getIngredients(),
                recipe.getInstructions(),
                recipe.getDateCreation(),
                recipe.getCategory(),
                recipe.getTime(),
                recipe.getCommensal(),
                recipe.getAmount(),
                recipe.getImageUrls()
        );
    }

    public static List<Recipe> dtoListToEntityList(List<RecipeDto> dtoList) {
        return dtoList.stream()
                .map(RecipeMapper::dtoToEntity)
                .collect(Collectors.toList());
    }

    public static List<RecipeDto> entityListToDtoList(List<Recipe> entityList) {
        return entityList.stream()
                .map(RecipeMapper::entityToDto)
                .collect(Collectors.toList());
    }
}

