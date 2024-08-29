package com.example.demo.service;

import com.example.demo.dto.RecipeDto;

import java.util.List;

public interface RecipeService {

    RecipeDto createRecipe(RecipeDto recipeDto);

    RecipeDto findRecipeById(Long id);

    List<RecipeDto> listRecipe();

    RecipeDto updateRecipe(Long id, RecipeDto Recipe);

    void deleteRecipe(Long id);

}
