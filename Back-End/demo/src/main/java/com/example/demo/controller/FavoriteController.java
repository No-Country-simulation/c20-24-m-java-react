package com.example.demo.controller;

import com.example.demo.dto.FavoriteDto;
import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.FavoriteNotFoundExepcion;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.mapper.RecipeMapper1;
import com.example.demo.service.FavoriteService;
import com.example.demo.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for managing Favorites.
 */
@Tag(name = "Favorites", description = "Manage all endpoints about Favorites")
@RestController
@RequestMapping("/favorites")
@RequiredArgsConstructor
public class FavoriteController {

    private final FavoriteService favoriteService;
    private final RecipeMapper1 recipeMapper1;
    private final RecipeService recipeService;

    /**
     * Create a new Favorite.
     *
     * @param favoriteDto The details of the Favorite to create, including a list of Recipe IDs.
     * @return A ResponseEntity containing the created FavoriteDto and a CREATED status.
     */
    @Operation(
            summary = "Create a new Favorite.",
            description = "Creates a new Favorite with the provided details, including a list of Recipe IDs."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Favorite created successfully",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = FavoriteDto.class))
            ),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @PostMapping("/save")
    public ResponseEntity<FavoriteDto> createFavorite(@Valid @RequestBody FavoriteDto favoriteDto) {
        FavoriteDto savedFavorite = favoriteService.createFavorite(favoriteDto);
        return new ResponseEntity<>(savedFavorite, HttpStatus.CREATED);
    }

    /**
     * Find a Favorite by ID.
     *
     * @param id The ID of the Favorite to find.
     * @return A ResponseEntity containing the found FavoriteDto or a NOT FOUND status if not found.
     */
    @Operation(
            summary = "Find a Favorite by ID.",
            description = "Finds a Favorite entity by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Favorite found",
                    content = @Content(mediaType = "application/json", schema = @Schema(implementation = FavoriteDto.class))
            ),
            @ApiResponse(responseCode = "404", description = "Favorite not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @GetMapping("/search/{id}")
    public ResponseEntity<?> findFavoriteById(@PathVariable("id") Long id) {
        try {
            FavoriteDto favoriteDto = favoriteService.findFavoriteById(id);
            return ResponseEntity.ok(favoriteDto);
        } catch (FavoriteNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    /**
     * Delete a Favorite by ID.
     *
     * @param id The ID of the Favorite to delete.
     * @return A ResponseEntity indicating success or failure.
     */
    @Operation(
            summary = "Delete a Favorite by ID.",
            description = "Deletes a Favorite entity by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Favorite deleted successfully", content = @Content),
            @ApiResponse(responseCode = "404", description = "Favorite not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFavorite(@PathVariable("id") Long id) {
        favoriteService.deleteFavorite(id);
        return ResponseEntity.ok("The Favorite was deleted successfully.");
    }

    /**
     * Add a Recipe to a Favorite.
     *
     * @param favoriteId The ID of the Favorite.
     * @param recipeId   The ID of the Recipe to add to the Favorite.
     * @return A ResponseEntity indicating success or failure.
     */
    @Operation(
            summary = "Add a Recipe to a Favorite.",
            description = "Adds a Recipe to the Favorite's list of recipes by providing the Favorite ID and Recipe ID."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Recipe added to Favorite", content = @Content),
            @ApiResponse(responseCode = "404", description = "Favorite or Recipe not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @PostMapping("/{favoriteId}/addRecipe/{recipeId}")
    public ResponseEntity<?> addRecipeToFavorite(
            @Parameter(description = "ID of the Favorite", example = "1", required = true)
            @PathVariable("favoriteId") Long favoriteId,
            @Parameter(description = "ID of the Recipe to add", example = "1", required = true)
            @PathVariable("recipeId") Long recipeId
    ) {
        try {
            RecipeDto recipeDto = recipeService.findRecipeById(recipeId);
            favoriteService.addRecipeToFavorite(favoriteId, recipeMapper1.toEntity(recipeDto));
            return ResponseEntity.ok("Recipe added to Favorite.");
        } catch (FavoriteNotFoundExepcion | RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    /**
     * Remove a Recipe from a Favorite.
     *
     * @param favoriteId The ID of the Favorite.
     * @param recipeId   The ID of the Recipe to remove from the Favorite.
     * @return A ResponseEntity indicating success or failure.
     */
    @Operation(
            summary = "Remove a Recipe from a Favorite.",
            description = "Removes a Recipe from the Favorite's list of recipes by providing the Favorite ID and Recipe ID."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Recipe removed from Favorite", content = @Content),
            @ApiResponse(responseCode = "404", description = "Favorite or Recipe not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @DeleteMapping("/{favoriteId}/removeRecipe/{recipeId}")
    public ResponseEntity<?> removeRecipeFromFavorite(
            @Parameter(description = "ID of the Favorite", example = "1", required = true)
            @PathVariable("favoriteId") Long favoriteId,
            @Parameter(description = "ID of the Recipe to remove", example = "1", required = true)
            @PathVariable("recipeId") Long recipeId
    ) {
        try {
            favoriteService.removeRecipeFromFavorite(favoriteId, recipeId);
            return ResponseEntity.ok("Recipe removed from Favorite.");
        } catch (FavoriteNotFoundExepcion | RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    /**
     * Get a list of Favorites for a specific user.
     *
     * @param id The ID of the user.
     * @return A ResponseEntity containing a list of FavoriteDto objects.
     */
    @Operation(
            summary = "Get Favorites by User ID.",
            description = "Returns a list of Favorites associated with the given User ID."
    )
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Favorites retrieved successfully", content = @Content),
            @ApiResponse(responseCode = "404", description = "User not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @GetMapping("/user/{id}")
    public ResponseEntity<List<FavoriteDto>> getFavoritesByUserId(@PathVariable Long id) {
        List<FavoriteDto> favorites = favoriteService.findUserbyID(id);
        return ResponseEntity.ok(favorites);
    }

}