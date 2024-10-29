package com.example.demo.controller;

import com.example.demo.dto.UserProfileDto;
import com.example.demo.service.UserProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.Parameters;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Tag(name = "UserProfile", description = "Manage all endpoints about UserProfile")
@RestController
@RequestMapping("/userProfile")
@RequiredArgsConstructor
public class UserProfileController {

    private final UserProfileService userProfileService;

//    @Operation(
//            summary = "Create a new user profile.",
//            description = "Creates a new user profile with the provided details."
//    )
//    @ApiResponses(value = {
//            @ApiResponse(
//                    responseCode = "200", description = "User profile created successfully",
//                    content = {
//                            @Content(mediaType = "application/json",
//                                    schema = @Schema(implementation = UserProfileDto.class))
//                    }),
//            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
//                    @Content}),
//            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
//                    @Content})
//    })
//    @PostMapping("/add")
//    public ResponseEntity<UserProfileDto> addUserProfile(@RequestBody Long userId) {
//        UserProfileDto createdProfile = userProfileService.addUserProfile(userId);
//        return ResponseEntity.ok(createdProfile);
//    }

    @Operation(
            summary = "Get a user profile by ID.",
            description = "Finds a user profile by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "User profile found",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = UserProfileDto.class))
                    }),
            @ApiResponse(responseCode = "404", description = "User profile not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/search/{id}")
    public ResponseEntity<UserProfileDto> findUserProfileById(@PathVariable Long id) {
        UserProfileDto userProfileDto = userProfileService.findUserProfileById(id);
        return ResponseEntity.ok(userProfileDto);
    }

    @Operation(
            summary = "Update the user's profile image.",
            description = "Updates the profile image of the user with the specified ID."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "User profile image updated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(type = "string"))
                    }),
            @ApiResponse(responseCode = "400", description = "Invalid input", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "User profile not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PutMapping("/{id}/update-imageUser")
    public ResponseEntity<String> upDateImagesUser(@PathVariable Long id, @RequestParam("image") MultipartFile image) {
        String imageUrl = userProfileService.upDateImagesUser(id, image);
        return ResponseEntity.ok(imageUrl);
    }

    @Operation(
            summary = "Update the user's banner image.",
            description = "Updates the banner image of the user profile with the specified ID."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "User profile banner updated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(type = "string"))
                    }),
            @ApiResponse(responseCode = "400", description = "Invalid input", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "User profile not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PutMapping("/{id}/update-banner")
    public ResponseEntity<String> upDateImagesBanner(@PathVariable Long id, @RequestParam("banner") MultipartFile banner) {
        String bannerUrl = userProfileService.upDateImagesBanner(id, banner);
        return ResponseEntity.ok(bannerUrl);
    }

    @Operation(
            summary = "Update user profile details.",
            description = "Updates the user profile details, excluding images."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "User profile updated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = UserProfileDto.class))
                    }),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "User profile not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PutMapping("/{id}/update-user-profile")
    public ResponseEntity<UserProfileDto> updateUserProfile(@PathVariable Long id, @RequestBody UserProfileDto userProfileDtoUpDate) {
        UserProfileDto updatedProfile = userProfileService.updateUserProfile(id, userProfileDtoUpDate);
        return ResponseEntity.ok(updatedProfile);
    }
}


