package com.example.demo.controller;

import com.example.demo.dto.*;
import com.example.demo.service.CommentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Comments", description = "Manage all endpoints about Comments")
@RestController
@RequestMapping("/foodies")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @Operation(
            summary = "Create a new comment.",
            description = "Creates a new comment with the provided details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Comment create successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseCommentDTO.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    //EndPoint para crear comentarios en recetas
    @PostMapping("/comments")
    public ResponseEntity<ResponseCommentDTO> createComment(@Valid @RequestBody CreateCommentDto createCommentDTO) {
        ResponseCommentDTO commentDTO = commentService.createComment(createCommentDTO);
        return new ResponseEntity<>(commentDTO, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Update a comment",
            description = "Update a comment with the details provided."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Comment update successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseCommentDTO.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    //EndPoint para actualizar comentarios
    @PutMapping("/comments/{id}")
    public ResponseEntity<ResponseCommentDTO> updateComment(@Valid @PathVariable Long id,
                                                            @Valid @RequestBody CreateUpdateCommentDto updateCommentDTO) {
        ResponseCommentDTO commentDTO = commentService.updateComment(id, updateCommentDTO);
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }

    @Operation(
            summary = "Delete a comment",
            description = "Delete a comment with the details provided."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Comment delete successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseCommentDTO.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    //EndPoint para Borrar comentarios
    @DeleteMapping("/comments/{id}")
    public ResponseEntity<ResponseCommentDTO> deleteComment(@Valid @PathVariable Long id) {
        ResponseCommentDTO commentDTO = commentService.deleteComment(id);
        return new ResponseEntity<>(commentDTO, HttpStatus.OK);
    }

    @Operation(
            summary = "Report a comment",
            description = "Report a comment with the details provided."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Comment report successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = ResponseCommentDTO.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    //Endpoint para reportar comentarios
    @PostMapping("/comments/report")
    public ResponseEntity<ResponseCommentDTO> reportComment(@Validated @RequestBody CreateReportCommentDto reportCommentDTO) {
        ResponseCommentDTO reportComment = commentService.reportComment(reportCommentDTO);
        return new ResponseEntity<>(reportComment, HttpStatus.OK);
    }

}