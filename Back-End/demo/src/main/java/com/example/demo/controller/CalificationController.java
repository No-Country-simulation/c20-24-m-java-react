package com.example.demo.controller;

import com.example.demo.dto.CalificationDto;
import com.example.demo.exception.RecipeNotFoundExepcion;
import com.example.demo.service.CalificationService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Tag(name = "Califications", description = "Manage all endpoints about Califications")
@RestController
@RequestMapping("/califications")
@RequiredArgsConstructor
public class CalificationController {

    private final CalificationService calificationService;

    @PostMapping("/save")
    public ResponseEntity<CalificationDto> createCalification(@RequestBody CalificationDto calificationDto) {
        CalificationDto saveCalification= calificationService.createCalification(calificationDto);
        return new ResponseEntity<>(saveCalification, HttpStatus.CREATED);
    }

    @GetMapping("/search/{id}")
    public ResponseEntity<?> findCalificationById(@PathVariable("id") Long id) {
        try {
            CalificationDto calificationDto = calificationService.findCalificationById(id);
            return ResponseEntity.ok(calificationDto);
        } catch (RecipeNotFoundExepcion ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        }
    }



}
