package com.example.demo.controller;

import com.example.demo.dto.CalificationDto;
import com.example.demo.dto.RecipeDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.service.CalificationService;
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

@Tag(name = "Califications", description = "Manage all endpoints about Califications")
@RestController
@RequestMapping("/califications")
@RequiredArgsConstructor
public class CalificationController {

    private final CalificationService calificationService;

    @Operation(
            summary = "Create a new calification.",
            description = "Creates a new calification with the provided details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "201", description = "Calification created successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = CalificationDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "400", description = "Invalid request body", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PostMapping("/save")
    public ResponseEntity<CalificationDto> createCalification(@RequestBody CalificationDto calificationDto) {
        CalificationDto saveCalification= calificationService.createCalification(calificationDto);
        return new ResponseEntity<>(saveCalification, HttpStatus.CREATED);
    }

    @Operation(
            summary = "Find a calification by ID.",
            description = "Finds a calification by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "calification found",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = CalificationDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Calification  not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/search/{id}")
    public ResponseEntity<?> findCalificationById(@PathVariable("id") Long id) {
        try {
            CalificationDto calificationDto = calificationService.findCalificationById(id);
            return ResponseEntity.ok(calificationDto);
        } catch (RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }

    @Operation(
            summary = "List all calification.",
            description = "Retrieves a list of all califications."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "califications list successfully generated",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = CalificationDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @GetMapping("/list")
    public ResponseEntity<List<CalificationDto>> listCalification() {
        List<CalificationDto> calificationDtoList = calificationService.calificationlist();
        return ResponseEntity.ok(calificationDtoList);
    }

    @Operation(
            summary = "Update a calification.",
            description = "Updates an existing calification with the provided details."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Calification updated successfully",
                    content = {
                            @Content(mediaType = "application/json",
                                    schema = @Schema(implementation = RecipeDto.class))
                    }),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Calification not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @PutMapping("/update/{id}")
    public ResponseEntity<CalificationDto> updateCalification
            (@PathVariable("id") Long id, @RequestBody CalificationDto updateCalification) {
        CalificationDto calificationDto = calificationService.updateCalification(id, updateCalification);
        return ResponseEntity.ok(calificationDto);
    }

    @Operation(
            summary = "Delete a calification.",
            description = "Deletes a calification by its unique identifier."
    )
    @ApiResponses(value = {
            @ApiResponse(
                    responseCode = "200", description = "Calification deleted successfully",
                    content = {
                            @Content}),
            @ApiResponse(responseCode = "403", description = "Forbidden access to this resource", content = {
                    @Content}),
            @ApiResponse(responseCode = "404", description = "Calification not found", content = {
                    @Content}),
            @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
                    @Content})
    })
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCalification(@PathVariable("id") Long id) {
        calificationService.deleteCalification(id);
        return ResponseEntity.ok("The Calification was eliminated");
    }

}