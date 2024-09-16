package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class FavoriteNotFoundExepcion extends RuntimeException{
    public FavoriteNotFoundExepcion(String message) {
        super(message);
    }
}
