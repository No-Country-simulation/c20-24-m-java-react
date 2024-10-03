package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class RecipeAlreadyExistsException extends RuntimeException{
    public RecipeAlreadyExistsException(String message) {
        super(message);
    }
}
