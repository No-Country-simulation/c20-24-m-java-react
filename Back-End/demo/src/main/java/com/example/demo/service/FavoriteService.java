package com.example.demo.service;

import com.example.demo.dto.FavoriteDto;
import com.example.demo.model.Recipe;

import java.util.List;

public interface FavoriteService {

    FavoriteDto createFavorite(FavoriteDto favoriteDto);

    FavoriteDto findFavoriteById(Long id);

    List<FavoriteDto> listFavorite();

    FavoriteDto updateFavorite(Long id, FavoriteDto FavoriteUpDate);

    void deleteFavorite(Long id);

    void addRecipeToFavorite(Long favoriteId, Recipe recipe);

    void removeRecipeFromFavorite(Long favoriteId, Long recipeId);

    List<FavoriteDto> findUserbyID(Long id);

}
