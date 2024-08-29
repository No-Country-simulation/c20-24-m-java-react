package com.example.demo.controller;

import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Recipes", description = "Manage all endpoints about Recipes")
@RestController
@RequestMapping("/recipes")
@RequiredArgsConstructor
public class RecipeController {

    private final RecipeService recipeService;

    @Operation(
            summary = "Create a new recipe.",
            description = "Creates a new recipe with the provided details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Recipe created successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PostMapping("/save")
    public ResponseEntity<RecipeDto> createRecipe(@RequestBody RecipeDto recipeDto) {
        RecipeDto saveRecipe= recipeService.createRecipe(recipeDto);
        return new ResponseEntity<>(saveRecipe, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Find a recipe by ID.",
            description = "Finds a recipe by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "recipe found",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Recipe  not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/search/{id}")
    public ResponseEntity<?> findRecipeById(@PathVariable("id") Long id) {
        try {
            RecipeDto recipeDto = recipeService.findRecipeById(id);
            return ResponseEntity.ok(recipeDto);
        } catch (RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @Operation(
            summary = "List all recipes.",
            description = "Retrieves a list of all recipes."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "recipes list successfully generated",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/list")
    public ResponseEntity<List<RecipeDto>> listRecipes() {
        List<RecipeDto> recipeDtoList = recipeService.listRecipe();
        return ResponseEntity.ok(recipeDtoList);
    }

    @Operation(
            summary = "Update a recipe.",
            description = "Updates an existing recipe with the provided details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipe updated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Recipe not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PutMapping("/update/{id}")
    public ResponseEntity<RecipeDto> updateRecipe(@PathVariable("id") Long id, @RequestBody RecipeDto updateRecipe) {
        RecipeDto recipeDto = recipeService.updateRecipe(id, updateRecipe);
        return ResponseEntity.ok(recipeDto);
    }

    @Operation(
            summary = "Delete a recipe.",
            description = "Deletes a recipe by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipe deleted successfully",
                    content = {
                            @Content}),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Recipe not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRecipe(@PathVariable("id") Long id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.ok("The Promotion was eliminated");
    }

}
