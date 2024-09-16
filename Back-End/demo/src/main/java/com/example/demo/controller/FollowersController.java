package com.example.demo.controller;

import com.example.demo.dto.ResponseCommentDTO;
import com.example.demo.dto.ApiFollowersResponseDto;
import com.example.demo.model.User;
import com.example.demo.service.FollowersService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Followers", description = "Manage all endpoints about Follows")
@RestController
@RequestMapping("/followers")
public class FollowersController {

    @Autowired
    private FollowersService userService;

    @Operation(
            summary = "Follow a user",
            description = "This endpoint works to follow a user."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "True successfully, Follow a user",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ApiFollowersResponseDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    //Endpoint para seguir a otro usuario
    @PostMapping("/{followerId}/follow/{followedId}")
    public ResponseEntity<ApiFollowersResponseDto> followUser(@PathVariable Long followerId, @PathVariable Long followedId) {
        String message = userService.followUser(followerId, followedId);
        boolean success = message.startsWith("Usuario");
        HttpStatus status = success ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        ApiFollowersResponseDto response = new ApiFollowersResponseDto(success, message, null);
        return new ResponseEntity<>(response, status);
    }

    @Operation(
            summary = "Unfollow user",
            description = "This endpoint works to Unfollow user."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "True successfully, Follow a user",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ApiFollowersResponseDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PostMapping("/{followerId}/unfollow/{followedId}")
    public ResponseEntity<ApiFollowersResponseDto> unfollowUser(@PathVariable Long followerId, @PathVariable Long followedId) {
        String message = userService.unfollowUser(followerId, followedId);
        boolean success = message.startsWith("Usuario");
        HttpStatus status = success ? HttpStatus.OK : HttpStatus.BAD_REQUEST;
        ApiFollowersResponseDto response = new ApiFollowersResponseDto(success, message, null);
        return new ResponseEntity<>(response, status);
    }

    @Operation(
            summary = "Get all followers of a user",
            description = "This endpoint works to Get all followers of a user."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "True Successfully obtained",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ApiFollowersResponseDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/{userId}/followers")
    public ResponseEntity<ApiFollowersResponseDto> getFollowers(@PathVariable Long userId) {
        List<User> followers = userService.getFollowers(userId);
        ApiFollowersResponseDto response = new ApiFollowersResponseDto(true, "Lista de seguidores obtenida exitosamente.", followers);
        return ResponseEntity.ok(response);
    }

    @Operation(
            summary = "Get and see who a user follows",
            description = "This endpoint works to Get and see who a user follows."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "True Successfully obtained",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ApiFollowersResponseDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/{userId}/following")
    public ResponseEntity<ApiFollowersResponseDto> getFollowing(@PathVariable Long userId) {
        List<User> following = userService.getFollowing(userId);
        ApiFollowersResponseDto response = new ApiFollowersResponseDto(true, "Lista de seguidos obtenida exitosamente.", following);
        return ResponseEntity.ok(response);
    }
}