package com.example.demo.controller;

import com.example.demo.dto.FavoriteDto;
import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.FavoriteNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.mapper.RecipeMapper1;
import com.example.demo.model.Recipe;
import com.example.demo.service.FavoriteService;
import com.example.demo.service.RecipeService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Favorites", description = "Manage all endpoints about Favorites")
@RestController
@RequestMapping("/favorites")
@RequiredArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;
    private final RecipeMapper1 recipeMapper1;
    private final RecipeService recipeService;

    @PostMapping("/save")
    public ResponseEntity<FavoriteDto> createFavorite(@RequestBody FavoriteDto favoriteDto) {
        FavoriteDto saveFavorite= favoriteService.createFavorite(favoriteDto);
        return new ResponseEntity<>(saveFavorite, HttpStatus.CREATED);
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<?> findFavoriteById(@PathVariable("id") Long id) {
        try {
            FavoriteDto favoriteDto = favoriteService.findFavoriteById(id);
            return ResponseEntity.ok(favoriteDto);
        } catch (FavoriteNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }




    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFavorite(@PathVariable("id") Long id) {
        favoriteService.deleteFavorite(id);
        return ResponseEntity.ok("The Favorite was eliminated");
    }

    @PostMapping("/{favoriteId}/addRecipe/{recipeId}")
    public ResponseEntity<?> addRecipeToFavorite(@PathVariable("favoriteId") Long favoriteId, @PathVariable("recipeId") Long recipeId) {
        try {
            RecipeDto recipeDto = recipeService.findRecipeById(recipeId);
            favoriteService.addRecipeToFavorite(favoriteId, recipeMapper1.toEntity(recipeDto));
            return ResponseEntity.ok("Recipe added to Favorite.");
        } catch (FavoriteNotFoundExepcion | RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @DeleteMapping("/{favoriteId}/removeRecipe/{recipeId}")
    public ResponseEntity<?> removeRecipeFromFavorite(@PathVariable("favoriteId") Long favoriteId, @PathVariable("recipeId") Long recipeId) {
        try {
            favoriteService.removeRecipeFromFavorite(favoriteId, recipeId);
            return ResponseEntity.ok("Recipe removed from Favorite.");
        } catch (FavoriteNotFoundExepcion | RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }


}
