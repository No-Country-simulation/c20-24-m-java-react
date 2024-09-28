package com.example.demo.controller;

import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.model.Category;
import com.example.demo.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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
        RecipeDto saveRecipe = recipeService.createRecipe(recipeDto);
        return new ResponseEntity<>(saveRecipe, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Find a recipe by ID.",
            description = "Finds a recipe by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipe found",
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
                    responseCode = "200", description = "Recipes list successfully generated",
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
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteRecipe(@PathVariable("id") Long id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.ok("The Recipe was eliminated");
    }

    @Operation(
            summary = "List recipes by category.",
            description = "Retrieves a list of recipes filtered by the specified category."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipes list successfully generated",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @Parameter(
            name = "category",
            description = "The category of recipes to filter by (e.g., SWEET, SAVORY, DRINKS, COCKTAILS, UNSPECIFIED).",
            example = "SWEET",
            required = true,
            schema = @Schema(type = "string")
    )
    @GetMapping("/list/{category}")
    public List<RecipeDto> getRecipesByCategory(@PathVariable Category category) {
        return recipeService.findRecipesByCategory(category);
    }

    @Operation(
            summary = "Upload images and associate with a recipe.",
            description = "Uploads images and associates them with the specified recipe by ID."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Images uploaded and associated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(type = "array", implementation = String.class))
                    }),
            @ApiResponse(responseCode = "400", description = "Invalid input", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Recipe not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PostMapping("/upload-images")
    public ResponseEntity<List<String>> uploadImages(
            @RequestParam("recipeId") Long recipeId,
            @RequestParam("images") List<MultipartFile> images) {
        List<String> imageUrls = recipeService.uploadImages(recipeId, images);
        return ResponseEntity.ok(imageUrls);
    }

    @Operation(
            summary = "List recipes by user ID.",
            description = "Retrieves a list of recipes created by the specified user."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipes retrieved successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "User not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @Parameter(
            name = "id",
            description = "The ID of the user whose recipes are to be retrieved.",
            required = true,
            schema = @Schema(type = "long")
    )
    @GetMapping("/{id}/recipes")
    public ResponseEntity<List<RecipeDto>> getRecipesByUserId(@PathVariable Long id) {
        List<RecipeDto> recipes = recipeService.findUserbyID(id);
        return ResponseEntity.ok(recipes);
    }

    @Operation(
            summary = "Get all recipes.",
            description = "Get all recipes in a paginated list. Token is required. Accessible by all users."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Recipe list successfully generated",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Recipes Not Found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @Parameters({
            @Parameter(name = "page", description = "Page number", required = false, example = "0"),
            @Parameter(name = "size", description = "Size of the page", required = false, example = "10"),
            @Parameter(name = "sort", description = "Sort the page", required = false, example = "title,asc")
    })

    @GetMapping("/pages")
    public ResponseEntity<Page<RecipeDto>> getAllRecipes(@RequestParam(defaultValue = "0") int page,
                                                         @RequestParam(defaultValue = "3") int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<RecipeDto> recipesPage = recipeService.findAll(pageable);
        return ResponseEntity.ok(recipesPage);
    }


}
