package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class LikeNotFoundExepcion extends RuntimeException{
    public LikeNotFoundExepcion(String message) {
        super(message);
    }
}
