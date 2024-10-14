package com.example.demo.controller;

import com.example.demo.dto.LikeDto;
import com.example.demo.service.LikeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/likes")
@AllArgsConstructor
public class LikeController {

    private final LikeService likeService;

    @Operation(summary = "Add a like to a recipe.",
            description = "Creates a new like for a recipe using the provided like information.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Like created successfully",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LikeDto.class))),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @PostMapping("/save")
    public ResponseEntity<LikeDto> addLike(@RequestBody LikeDto likeDto) {
        LikeDto savedLike = likeService.addLike(likeDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedLike);
    }

    @Operation(summary = "Find a like by its ID.",
            description = "Retrieves a like by its unique identifier.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Like found",
                    content = @Content(mediaType = "application/json",
                            schema = @Schema(implementation = LikeDto.class))),
            @ApiResponse(responseCode = "404", description = "Like not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @GetMapping("/search/{id}")
    public ResponseEntity<LikeDto> findLikeById(@PathVariable Long id) {
        LikeDto likeDto = likeService.findLikeById(id);
        return ResponseEntity.ok(likeDto);
    }

    @Operation(summary = "Delete a like by its ID.",
            description = "Deletes a like using its unique identifier.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Like deleted successfully", content = @Content),
            @ApiResponse(responseCode = "404", description = "Like not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteLike(@PathVariable Long id) {
        likeService.deleteByLikeId(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get the total count of likes for a specific recipe.",
            description = "Retrieves the count of likes for the specified recipe.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Like count retrieved successfully",
                    content = @Content(mediaType = "application/json")),
            @ApiResponse(responseCode = "404", description = "Recipe not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @GetMapping("/count/{recipeId}")
    public ResponseEntity<Map<String, Object>> getLikeCount(@PathVariable Long recipeId) {
        int likeCount = likeService.getLikeCount(recipeId);

        Map<String, Object> response = new HashMap<>();
        response.put("likeCount", likeCount);
        response.put("message", "This recipe has " + likeCount + " like(s).");

        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Check if a user has liked a specific recipe.",
            description = "Checks whether the specified user has liked the given recipe.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Like status retrieved successfully",
                    content = @Content(mediaType = "application/json")),
            @ApiResponse(responseCode = "404", description = "User or recipe not found", content = @Content),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = @Content)
    })
    @GetMapping("/user/{userId}/recipe/{recipeId}")
    public ResponseEntity<Map<String, Object>> userHasLiked(@PathVariable Long userId, @PathVariable Long recipeId) {
        boolean hasLiked = likeService.userHasLiked(userId, recipeId);

        String message = hasLiked ? "User has liked this recipe." : "User has not liked this recipe.";

        Map<String, Object> response = new HashMap<>();
        response.put("hasLiked", hasLiked);
        response.put("message", message);

        return ResponseEntity.ok(response);
    }
}




