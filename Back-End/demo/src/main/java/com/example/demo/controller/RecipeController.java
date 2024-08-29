package com.example.demo.controller;

import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.service.RecipeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @PostMapping("/save")
    public ResponseEntity<RecipeDto> createRecipe(@RequestBody RecipeDto recipeDto) {
        RecipeDto saveRecipe= recipeService.createRecipe(recipeDto);
        return new ResponseEntity<>(saveRecipe, HttpStatus.CREATED);
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<?> findRecipeById(@PathVariable("id") Long id) {
        try {
            RecipeDto recipeDto = recipeService.findRecipeById(id);
            return ResponseEntity.ok(recipeDto);
        } catch (RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }



}
