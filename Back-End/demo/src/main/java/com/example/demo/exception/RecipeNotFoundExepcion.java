package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class RecipeNotFoundExepcion extends RuntimeException{
    public RecipeNotFoundExepcion(String message) {
        super(message);
    }
}
