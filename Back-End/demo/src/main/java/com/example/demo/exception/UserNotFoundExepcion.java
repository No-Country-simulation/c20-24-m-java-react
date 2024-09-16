package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class UserNotFoundExepcion extends RuntimeException {
    public UserNotFoundExepcion(String message) {
        super(message);
    }
}
