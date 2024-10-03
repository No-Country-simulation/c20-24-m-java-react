package com.example.demo.service;

import com.example.demo.dto.FavoriteDto;
import com.example.demo.dto.RecipeDto;
import com.example.demo.model.Category;
import com.example.demo.model.Recipe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface RecipeService {

    RecipeDto createRecipe(RecipeDto recipeDto);

    RecipeDto findRecipeById(Long id);

    List<RecipeDto> listRecipe();

    RecipeDto updateRecipe(Long id, RecipeDto RecipeUpDate);

    void deleteRecipe(Long id);

    List<RecipeDto> findRecipesByCategory(Category category);

    List<String> uploadImages(Long recipeId, List<MultipartFile> images);

    List<RecipeDto> findUserbyID(Long id);

    Page<RecipeDto> findAll(Pageable pageable);

    List<RecipeDto> findRecipeByUserName(String userName);

}
